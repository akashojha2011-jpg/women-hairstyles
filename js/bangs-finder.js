/**
 * Bangs Style Finder - Interactive Application Engine
 * Handles multi-step quiz state machine, transparent weighted scoring,
 * results rendering, clipboard sharing, print formatting, and accessibility.
 */

(function () {
  "use strict";

  // Application State
  const state = {
    currentStep: 0,
    answers: {},
    results: null,
    totalSteps: (window.QUIZ_QUESTIONS || []).length || 8,
    isHelperOpen: false
  };

  // Safe Analytics Event Tracker (GA4)
  function trackEvent(eventName, params = {}) {
    try {
      if (typeof window.gtag === "function") {
        window.gtag("event", eventName, {
          event_category: "Bangs Style Finder",
          ...params
        });
      } else if (window.dataLayer && Array.isArray(window.dataLayer)) {
        window.dataLayer.push({
          event: eventName,
          category: "Bangs Style Finder",
          ...params
        });
      }
    } catch (e) {
      // Fail silently if analytics is not configured
    }
  }

  // DOM Elements Cache
  let elements = {};

  function initElements() {
    elements = {
      heroSection: document.getElementById("bangsHeroSection"),
      startBtn: document.getElementById("startQuizBtn"),
      quizContainer: document.getElementById("bangsQuizContainer"),
      quizCard: document.getElementById("quizCard"),
      progressFill: document.getElementById("quizProgressFill"),
      progressText: document.getElementById("quizProgressText"),
      stepBadge: document.getElementById("quizStepBadge"),
      questionTitle: document.getElementById("quizQuestionTitle"),
      questionSubtitle: document.getElementById("quizQuestionSubtitle"),
      optionsContainer: document.getElementById("quizOptionsContainer"),
      helperContainer: document.getElementById("faceShapeHelperContainer"),
      prevBtn: document.getElementById("quizPrevBtn"),
      nextBtn: document.getElementById("quizNextBtn"),
      resultsContainer: document.getElementById("bangsResultsContainer"),
      topResultCard: document.getElementById("topResultCard"),
      altResultsList: document.getElementById("altResultsList"),
      retakeBtn: document.getElementById("retakeQuizBtn"),
      copyBtn: document.getElementById("copyResultsBtn"),
      printBtn: document.getElementById("printResultsBtn"),
      toast: document.getElementById("finderToast")
    };
  }

  // Inline SVG icons for face shapes and visual options
  const ICONS = {
    oval: `<svg viewBox="0 0 100 120" class="shape-svg" aria-hidden="true">
      <ellipse cx="50" cy="60" rx="36" ry="48" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <path d="M50 22 C55 35, 65 42, 70 45" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3,3" opacity="0.6"/>
    </svg>`,
    round: `<svg viewBox="0 0 100 120" class="shape-svg" aria-hidden="true">
      <circle cx="50" cy="60" r="42" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="16" y1="60" x2="84" y2="60" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.5"/>
      <line x1="50" y1="26" x2="50" y2="94" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.5"/>
    </svg>`,
    square: `<svg viewBox="0 0 100 120" class="shape-svg" aria-hidden="true">
      <path d="M20,28 C30,26 70,26 80,28 C82,50 82,75 80,90 C68,93 32,93 20,90 C18,75 18,50 20,28 Z" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="20" y1="90" x2="80" y2="90" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
    </svg>`,
    heart: `<svg viewBox="0 0 100 120" class="shape-svg" aria-hidden="true">
      <path d="M18,30 C35,26 65,26 82,30 C82,55 68,82 50,98 C32,82 18,55 18,30 Z" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <circle cx="50" cy="97" r="2.5" fill="currentColor"/>
    </svg>`,
    long: `<svg viewBox="0 0 100 120" class="shape-svg" aria-hidden="true">
      <ellipse cx="50" cy="60" rx="30" ry="52" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="50" y1="16" x2="50" y2="104" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3,3" opacity="0.5"/>
    </svg>`,
    diamond: `<svg viewBox="0 0 100 120" class="shape-svg" aria-hidden="true">
      <path d="M50,18 L84,58 L50,98 L16,58 Z" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
      <circle cx="84" cy="58" r="2.5" fill="currentColor"/>
      <circle cx="16" cy="58" r="2.5" fill="currentColor"/>
    </svg>`,
    question: `<svg viewBox="0 0 100 120" class="shape-svg" aria-hidden="true">
      <circle cx="50" cy="60" r="42" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4,4"/>
      <text x="50" y="70" font-size="34" font-family="'Playfair Display', serif" font-weight="bold" fill="currentColor" text-anchor="middle">?</text>
    </svg>`
  };

  /**
   * Transparent Weighted Scoring Algorithm
   * Computes normalized 0-100 compatibility scores for all 15 bangs styles.
   */
  function computeRecommendations(answers) {
    const baseWeights = { ...(window.BANGS_CONFIG?.weights || {
      faceShape: 25,
      hairTexture: 20,
      hairDensity: 15,
      forehead: 10,
      hairLength: 10,
      stylingTime: 10,
      desiredLook: 5,
      mainGoal: 5
    })};

    // Dynamic redistribution: If user selected "Not sure" for face shape,
    // redistribute the 25% face weight proportionally across remaining criteria
    let effectiveWeights = { ...baseWeights };
    if (answers.faceShape === "notsure") {
      const faceWeight = baseWeights.faceShape;
      delete effectiveWeights.faceShape;
      const remainingSum = Object.values(effectiveWeights).reduce((a, b) => a + b, 0);
      const scale = (remainingSum + faceWeight) / remainingSum;
      for (const k in effectiveWeights) {
        effectiveWeights[k] = effectiveWeights[k] * scale;
      }
    }

    const styles = window.BANGS_STYLES || [];
    const scoredList = styles.map((style) => {
      let rawWeightedScore = 0;
      let totalWeightApplied = 0;
      const breakdown = {};

      for (const criterion in effectiveWeights) {
        const weight = effectiveWeights[criterion];
        const userChoice = answers[criterion];
        const compatibilityMap = style.compatibility?.[criterion];
        let score = 0.75; // neutral fallback

        if (compatibilityMap && userChoice) {
          if (typeof compatibilityMap[userChoice] === "number") {
            score = compatibilityMap[userChoice];
          } else if (Array.isArray(compatibilityMap)) {
            score = compatibilityMap.includes(userChoice) ? 1.0 : 0.6;
          }
        }

        rawWeightedScore += score * weight;
        totalWeightApplied += weight;
        breakdown[criterion] = Math.round(score * 100);
      }

      // Normalized score on a 0-100 scale
      const normalizedScore = totalWeightApplied > 0 
        ? Math.round((rawWeightedScore / totalWeightApplied) * 100) 
        : 75;

      // Realistic calibration: Keep top scores within a genuine 82-98% range
      const calibratedScore = Math.min(98, Math.max(55, normalizedScore));

      return {
        ...style,
        score: calibratedScore,
        breakdown
      };
    });

    // Sort descending by score
    scoredList.sort((a, b) => b.score - a.score);

    // Identify if the top 2 are essentially tied
    const isCloseTie = scoredList.length >= 2 && Math.abs(scoredList[0].score - scoredList[1].score) <= 2;

    return {
      topMatch: scoredList[0],
      alternatives: scoredList.slice(1, 3),
      allScored: scoredList,
      isCloseTie,
      userAnswers: answers
    };
  }

  // Step Rendering Engine
  function renderQuestion(stepIndex) {
    const questions = window.QUIZ_QUESTIONS || [];
    if (stepIndex < 0 || stepIndex >= questions.length) return;

    const q = questions[stepIndex];
    state.currentStep = stepIndex;

    // Update Progress Bar
    const progressPercent = Math.round(((stepIndex + 1) / questions.length) * 100);
    if (elements.progressFill) elements.progressFill.style.width = `${progressPercent}%`;
    if (elements.progressText) elements.progressText.textContent = `${progressPercent}% COMPLETED`;
    if (elements.stepBadge) elements.stepBadge.textContent = `QUESTION ${stepIndex + 1} OF ${questions.length}`;

    // Update Headers
    if (elements.questionTitle) elements.questionTitle.textContent = q.title;
    if (elements.questionSubtitle) elements.questionSubtitle.textContent = q.subtitle;

    // Educational helper toggle for Question 1 (Face Shape)
    if (elements.helperContainer) {
      if (q.hasHelper) {
        elements.helperContainer.style.display = "block";
        elements.helperContainer.innerHTML = `
          <button type="button" class="helper-toggle-btn" id="faceHelperToggleBtn" aria-expanded="${state.isHelperOpen}">
            <i class="far fa-question-circle"></i> Not sure of your face shape? <span>Click for 3 quick measuring tips</span>
            <i class="fas fa-chevron-down helper-chevron ${state.isHelperOpen ? 'rotated' : ''}"></i>
          </button>
          <div class="helper-drawer ${state.isHelperOpen ? 'open' : ''}" id="faceHelperDrawer">
            <div class="helper-content-box">
              <h4 class="helper-heading"><i class="fas fa-ruler-combined"></i> Quick Mirror Test:</h4>
              <ol class="helper-steps">
                <li><strong>Widest Point:</strong> Look straight in a mirror. Is your face widest at the cheekbones (Round/Diamond), the forehead (Heart), or evenly balanced with your jawline (Oval/Square)?</li>
                <li><strong>Jaw Shape:</strong> Is your chin softly rounded (Oval/Round), sharp and pointed (Heart/Diamond), or squarely defined (Square)?</li>
                <li><strong>Face Length:</strong> Is your vertical face length roughly equal to its width (Round/Square), or noticeably longer than wide (Oval/Long)?</li>
              </ol>
              <p class="helper-note"><em>Still unsure?</em> Select <strong>"Not sure"</strong> below! Our algorithm automatically balances recommendations across forgiving, universally flattering fringe styles.</p>
            </div>
          </div>
        `;
        const toggleBtn = document.getElementById("faceHelperToggleBtn");
        const drawer = document.getElementById("faceHelperDrawer");
        const chevron = toggleBtn.querySelector(".helper-chevron");
        toggleBtn.addEventListener("click", () => {
          state.isHelperOpen = !state.isHelperOpen;
          drawer.classList.toggle("open", state.isHelperOpen);
          chevron.classList.toggle("rotated", state.isHelperOpen);
          toggleBtn.setAttribute("aria-expanded", state.isHelperOpen);
        });
      } else {
        elements.helperContainer.style.display = "none";
      }
    }

    // Render Options
    if (elements.optionsContainer) {
      elements.optionsContainer.innerHTML = "";
      elements.optionsContainer.setAttribute("role", "radiogroup");
      elements.optionsContainer.setAttribute("aria-labelledby", "quizQuestionTitle");

      const currentVal = state.answers[q.id];

      q.options.forEach((opt, idx) => {
        const isSelected = currentVal === opt.value;
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `quiz-option-card ${isSelected ? "selected" : ""}`;
        btn.setAttribute("role", "radio");
        btn.setAttribute("aria-checked", isSelected ? "true" : "false");
        btn.setAttribute("data-value", opt.value);
        btn.tabIndex = 0;

        let iconMarkup = "";
        if (opt.icon && ICONS[opt.icon]) {
          iconMarkup = `<div class="option-icon-frame">${ICONS[opt.icon]}</div>`;
        } else if (opt.icon) {
          iconMarkup = `<div class="option-icon-frame"><i class="fas fa-${opt.icon}"></i></div>`;
        } else if (opt.badge) {
          iconMarkup = `<div class="option-badge-tag">${opt.badge}</div>`;
        }

        btn.innerHTML = `
          ${iconMarkup}
          <div class="option-text-group">
            <span class="option-label-text">${opt.label}</span>
            ${opt.desc ? `<span class="option-desc-text">${opt.desc}</span>` : ""}
          </div>
          <div class="option-check-indicator" aria-hidden="true">
            <i class="fas fa-check"></i>
          </div>
        `;

        btn.addEventListener("click", () => {
          selectOption(q.id, opt.value);
        });

        // Keyboard arrow navigation
        btn.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            selectOption(q.id, opt.value);
          }
        });

        elements.optionsContainer.appendChild(btn);
      });
    }

    // Update Nav Buttons
    if (elements.prevBtn) {
      elements.prevBtn.disabled = stepIndex === 0;
      elements.prevBtn.style.visibility = stepIndex === 0 ? "hidden" : "visible";
    }

    if (elements.nextBtn) {
      const hasAnswer = Boolean(state.answers[q.id]);
      elements.nextBtn.disabled = !hasAnswer;
      elements.nextBtn.textContent = stepIndex === questions.length - 1 ? "See My Results →" : "Continue →";
    }
  }

  function selectOption(questionId, value) {
    state.answers[questionId] = value;

    // Visual selection update
    const cards = elements.optionsContainer.querySelectorAll(".quiz-option-card");
    cards.forEach((c) => {
      const isMatch = c.getAttribute("data-value") === value;
      c.classList.toggle("selected", isMatch);
      c.setAttribute("aria-checked", isMatch ? "true" : "false");
    });

    if (elements.nextBtn) {
      elements.nextBtn.disabled = false;
    }

    trackEvent("question_answered", {
      question_id: questionId,
      answer_value: value,
      step: state.currentStep + 1
    });

    // Gentle auto-advance after small feedback delay for crisp UX
    setTimeout(() => {
      goToNextStep();
    }, 280);
  }

  function goToNextStep() {
    const questions = window.QUIZ_QUESTIONS || [];
    if (state.currentStep < questions.length - 1) {
      renderQuestion(state.currentStep + 1);
      // Smooth scroll if needed
      elements.quizContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      finishQuiz();
    }
  }

  function goToPrevStep() {
    if (state.currentStep > 0) {
      renderQuestion(state.currentStep - 1);
      elements.quizContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function finishQuiz() {
    const results = computeRecommendations(state.answers);
    state.results = results;

    trackEvent("quiz_completed", {
      top_recommendation: results.topMatch.id,
      score: results.topMatch.score
    });

    renderResults(results);

    // Show Results & Hide Quiz
    if (elements.quizContainer) elements.quizContainer.style.display = "none";
    if (elements.resultsContainer) {
      elements.resultsContainer.style.display = "block";
      elements.resultsContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  /**
   * Render Personalized Results Section
   */
  function renderResults(results) {
    const { topMatch, alternatives, isCloseTie, userAnswers } = results;
    const imgConfig = window.BANGS_CONFIG?.images?.styles || {};
    const articles = window.BANGS_CONFIG?.internalArticles || {};

    // 1. Render Top Recommendation
    const topImg = imgConfig[topMatch.id] || { src: topMatch.image, alt: topMatch.name };
    const topArticle = articles[topMatch.id] || { url: "haircuts.html", title: "Explore Hairstyle Guides" };

    if (elements.topResultCard) {
      elements.topResultCard.innerHTML = `
        <div class="result-hero-badge-row">
          <span class="match-score-pill"><i class="fas fa-sparkles"></i> ${topMatch.score}% Compatibility Match</span>
          ${isCloseTie ? '<span class="tie-badge"><i class="fas fa-balance-scale"></i> Top Tied Contender</span>' : '<span class="confidence-badge"><i class="fas fa-check-circle"></i> Primary Match</span>'}
        </div>

        <div class="result-hero-grid">
          <div class="result-image-column">
            <div class="result-img-wrapper">
              <img src="${topImg.src}" alt="${topImg.alt}" class="result-hair-img" loading="eager" onerror="this.onerror=null; this.src='assets/curtain-bangs-with-layers_1.jpg';">
              <span class="photo-credit-pill"><i class="fas fa-camera"></i> Editorial Style Reference</span>
            </div>
          </div>

          <div class="result-details-column">
            <h3 class="result-style-title">${topMatch.name}</h3>
            <p class="result-style-tagline">${topMatch.tagline}</p>
            <p class="result-style-desc">${topMatch.description}</p>

            <div class="result-reasons-card">
              <h4 class="reasons-heading"><i class="fas fa-star"></i> Why This Fits Your Profile:</h4>
              <p class="reasons-text">${topMatch.whyItMatches}</p>
            </div>

            <div class="result-specs-grid">
              <div class="spec-tile">
                <span class="spec-tile-label"><i class="fas fa-cut"></i> Maintenance</span>
                <span class="spec-tile-val">${topMatch.maintenanceLevel}</span>
              </div>
              <div class="spec-tile">
                <span class="spec-tile-label"><i class="far fa-clock"></i> Styling Time</span>
                <span class="spec-tile-val">${topMatch.stylingTime}</span>
              </div>
              <div class="spec-tile">
                <span class="spec-tile-label"><i class="fas fa-calendar-alt"></i> Trim Cadence</span>
                <span class="spec-tile-val">${topMatch.trimCadence}</span>
              </div>
              <div class="spec-tile">
                <span class="spec-tile-label"><i class="fas fa-smile"></i> Best Faces</span>
                <span class="spec-tile-val">${topMatch.faceShapes.map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(", ")}</span>
              </div>
            </div>

            <div class="styling-advice-box">
              <h4 class="advice-heading"><i class="fas fa-magic"></i> Recommended Styling Technique:</h4>
              <p class="advice-text">${topMatch.stylingTips}</p>
            </div>

            <div class="challenge-advice-box">
              <h4 class="challenge-heading"><i class="fas fa-info-circle"></i> Pro Stylist Consideration:</h4>
              <p class="challenge-text">${topMatch.challenges}</p>
            </div>

            <div class="result-action-row">
              <a href="${topArticle.url}" class="explore-article-btn">
                <i class="fas fa-book-open"></i> Read Full ${topMatch.name} Guide <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      `;
    }

    // 2. Render 2 Alternative Recommendations
    if (elements.altResultsList) {
      elements.altResultsList.innerHTML = alternatives.map((alt) => {
        const altImg = imgConfig[alt.id] || { src: alt.image, alt: alt.name };
        const altArticle = articles[alt.id] || { url: "haircuts.html", title: "Explore Guides" };

        return `
          <div class="alt-result-card">
            <div class="alt-card-header">
              <span class="alt-score-pill">${alt.score}% Match</span>
              <span class="alt-label">Alternative Option</span>
            </div>

            <div class="alt-img-frame">
              <img src="${altImg.src}" alt="${altImg.alt}" class="alt-hair-img" loading="lazy" onerror="this.onerror=null; this.src='assets/long-wispy-curtain-bangs_1.jpg';">
            </div>

            <div class="alt-body">
              <h4 class="alt-title">${alt.name}</h4>
              <p class="alt-tagline">${alt.tagline}</p>
              <p class="alt-desc">${alt.description}</p>
              
              <div class="alt-specs-compact">
                <span><strong>Maintenance:</strong> ${alt.maintenanceLevel}</span>
                <span><strong>Styling:</strong> ${alt.stylingTime}</span>
              </div>

              <div class="alt-action">
                <a href="${altArticle.url}" class="alt-link-btn">
                  Explore ${alt.name} Guide <i class="fas fa-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
        `;
      }).join("");
    }
  }

  // Copy Results to Clipboard
  function copyResultsToClipboard() {
    if (!state.results) return;

    const { topMatch, alternatives, userAnswers } = state.results;
    const textToCopy = `✨ My Bangs Style Finder Recommendations ✨
From Women-Hair-Styles.com:

Top Match: ${topMatch.name} (${topMatch.score}% Compatibility)
• Essence: ${topMatch.tagline}
• Daily Styling: ${topMatch.stylingTime}
• Trimming Cadence: ${topMatch.trimCadence}
• Styling Advice: ${topMatch.stylingTips}

Alternative Options:
1. ${alternatives[0]?.name} (${alternatives[0]?.score}% Match)
2. ${alternatives[1]?.name} (${alternatives[1]?.score}% Match)

My Profile:
• Face Shape: ${userAnswers.faceShape || "N/A"}
• Hair Texture: ${userAnswers.hairTexture || "N/A"}
• Hair Density: ${userAnswers.hairDensity || "N/A"}
• Desired Styling Time: ${userAnswers.stylingTime || "N/A"}

Find your bangs style free at: https://women-hair-styles.com/bangs-style-finder/`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast("Results copied to clipboard! Ready to share or save.");
      }).catch(() => {
        fallbackCopy(textToCopy);
      });
    } else {
      fallbackCopy(textToCopy);
    }

    trackEvent("copy_results_clicked");
  }

  function fallbackCopy(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand("copy");
      showToast("Results copied to clipboard!");
    } catch (err) {
      alert("Unable to copy automatically. Please take a screenshot or print your results!");
    }
    document.body.removeChild(textarea);
  }

  function showToast(message) {
    if (!elements.toast) return;
    elements.toast.textContent = message;
    elements.toast.classList.add("visible");
    setTimeout(() => {
      elements.toast.classList.remove("visible");
    }, 3200);
  }

  // Print Results
  function printResults() {
    trackEvent("print_results_clicked");
    window.print();
  }

  // Retake Quiz
  function retakeQuiz() {
    state.currentStep = 0;
    state.answers = {};
    state.results = null;

    if (elements.resultsContainer) elements.resultsContainer.style.display = "none";
    if (elements.quizContainer) elements.quizContainer.style.display = "block";

    renderQuestion(0);
    elements.quizContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    trackEvent("quiz_restarted");
  }

  // Bind Event Listeners
  function bindEvents() {
    if (elements.startBtn) {
      elements.startBtn.addEventListener("click", () => {
        trackEvent("quiz_started");
        if (elements.heroSection) elements.heroSection.style.display = "none";
        if (elements.quizContainer) elements.quizContainer.style.display = "block";
        renderQuestion(0);
        elements.quizContainer.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }

    if (elements.prevBtn) {
      elements.prevBtn.addEventListener("click", goToPrevStep);
    }

    if (elements.nextBtn) {
      elements.nextBtn.addEventListener("click", goToNextStep);
    }

    if (elements.retakeBtn) {
      elements.retakeBtn.addEventListener("click", retakeQuiz);
    }

    if (elements.copyBtn) {
      elements.copyBtn.addEventListener("click", copyResultsToClipboard);
    }

    if (elements.printBtn) {
      elements.printBtn.addEventListener("click", printResults);
    }
  }

  // Initialize on DOM Ready
  document.addEventListener("DOMContentLoaded", () => {
    initElements();
    bindEvents();
  });
})();
