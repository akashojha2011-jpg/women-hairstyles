/**
 * Bangs Style Finder - Recommendation Database & Configuration
 * Production-ready bangs styling data, scoring rules, image configuration,
 * and internal article linking directory for Women-Hair-Styles.com.
 */

const BANGS_CONFIG = {
  // Base weights for recommendation algorithm (must sum to 100)
  weights: {
    faceShape: 25,
    hairTexture: 20,
    hairDensity: 15,
    forehead: 10,
    hairLength: 10,
    stylingTime: 10,
    desiredLook: 5,
    mainGoal: 5
  },

  // Image configuration: easily replace or update hairstyle images
  images: {
    hero: {
      src: "assets/blonde-balayage-curtain-bangs_1.jpg",
      alt: "Woman with luminous blonde balayage and soft face-framing curtain bangs",
      width: 848,
      height: 1264
    },
    styles: {
      "curtain-bangs": {
        src: "assets/curtain-bangs-with-layers_1.jpg",
        alt: "Soft cascading curtain bangs parted down the center with flowing layers",
        fallbackIcon: "fas fa-feather-alt"
      },
      "wispy-bangs": {
        src: "assets/long-wispy-curtain-bangs_1.jpg",
        alt: "Delicate featherweight wispy bangs with airy negative space",
        fallbackIcon: "fas fa-wind"
      },
      "side-swept-bangs": {
        src: "assets/side-swept-bangs-hairstyles_1.jpg",
        alt: "Elegant side-swept fringe softly draping across the brow",
        fallbackIcon: "fas fa-wave-square"
      },
      "bottleneck-bangs": {
        src: "assets/face-framing-curtain-bangs_1.jpg",
        alt: "Modern bottleneck bangs narrow at the center and curving wide at cheekbones",
        fallbackIcon: "fas fa-wine-bottle"
      },
      "blunt-bangs": {
        src: "assets/beautiful-hairstyles-with-bangs_1.jpg",
        alt: "Sleek graphic blunt cut bangs grazing the eyebrows",
        fallbackIcon: "fas fa-ruler-horizontal"
      },
      "micro-bangs": {
        src: "assets/baby-bangs-haircuts_1.jpg",
        alt: "Edgy retro baby micro bangs sitting well above the brows",
        fallbackIcon: "fas fa-cut"
      },
      "feathered-bangs": {
        src: "assets/feather-cut-short-hair_1.jpg",
        alt: "70s-inspired feathered bangs with soft airy flicked edges",
        fallbackIcon: "fas fa-feather"
      },
      "birkin-bangs": {
        src: "assets/layered-haircut-with-curtain-bangs_1.jpg",
        alt: "Effortless French-girl Birkin bangs grazing the eyelashes with soft separation",
        fallbackIcon: "fas fa-heart"
      },
      "long-layered-bangs": {
        src: "assets/long-wavy-curtain-bangs-haircuts_1.jpg",
        alt: "Cheekbone-grazing long layered fringe seamlessly blending into lengths",
        fallbackIcon: "fas fa-stream"
      },
      "curly-bangs": {
        src: "assets/flattering-long-curly-haircuts_1.jpg",
        alt: "Naturally defined bouncy curly bangs with touchable spring volume",
        fallbackIcon: "fas fa-circle-notch"
      },
      "choppy-bangs": {
        src: "assets/trendy-bangs-hairstyles_1.jpg",
        alt: "Textured choppy bangs with dimensional piecey point-cut ends",
        fallbackIcon: "fas fa-th-large"
      },
      "arched-bangs": {
        src: "assets/chic-fringe-hairstyles_1.jpg",
        alt: "Softly curved arched bangs framing the eyes and temples",
        fallbackIcon: "fas fa-archway"
      },
      "piecey-bangs": {
        src: "assets/textured-piecey-haircuts_1.jpg",
        alt: "Modern piecey bangs with defined separated sections",
        fallbackIcon: "fas fa-align-center"
      },
      "textured-bangs": {
        src: "assets/low-maintenance-haircuts-with-bangs_1.jpg",
        alt: "Lived-in textured bangs with soft movement and effortless air-dry shape",
        fallbackIcon: "fas fa-sliders-h"
      },
      "see-through-bangs": {
        src: "assets/korean-see-through-bangs_1.jpg",
        alt: "Korean-inspired ultra-sheer see-through fringe revealing the forehead",
        fallbackIcon: "fas fa-eye"
      }
    }
  },

  // Internal link directory linking directly to real live articles on women-hair-styles.com
  internalArticles: {
    "curtain-bangs": {
      url: "curtain-bangs-with-layers.html",
      title: "Curtain Bangs with Layers Inspiration Guide",
      excerpt: "Explore 18+ gorgeous ways to pair soft cascading curtain fringe with modern flowing layers."
    },
    "wispy-bangs": {
      url: "long-wispy-curtain-bangs.html",
      title: "Long Wispy Hairstyles with Bangs Lookbook",
      excerpt: "See how featherweight wispy fringe creates a breezy, effortless silhouette on all lengths."
    },
    "side-swept-bangs": {
      url: "side-swept-bangs-hairstyles.html",
      title: "Gorgeous Side-Swept Bangs Hairstyles",
      excerpt: "Discover flattering angled fringe cuts that soften square jawlines and frame your cheekbones."
    },
    "bottleneck-bangs": {
      url: "face-framing-curtain-bangs.html",
      title: "Face-Framing Curtain & Bottleneck Bangs Ideas",
      excerpt: "Learn how bottleneck shaping narrows the forehead while expanding at the temples for balanced contouring."
    },
    "blunt-bangs": {
      url: "beautiful-hairstyles-with-bangs.html",
      title: "Beautiful Hairstyles with Full Graphic Bangs",
      excerpt: "The ultimate guide to high-impact statement fringe, brow-grazing cuts, and sleek perimeter styling."
    },
    "micro-bangs": {
      url: "baby-bangs-haircuts.html",
      title: "Cute Baby Bangs & Micro Fringe Haircut Ideas",
      excerpt: "Inspiration for bold, fashion-forward mini fringe that opens up your eyes and highlights your brow structure."
    },
    "feathered-bangs": {
      url: "feather-cut-short-hair.html",
      title: "Textured Feather Cut & Airy Fringe Styling",
      excerpt: "Retro-chic 70s texture with lightweight flicked edges that air-dry naturally without heavy heat."
    },
    "birkin-bangs": {
      url: "layered-haircut-with-curtain-bangs.html",
      title: "French-Girl Layered Haircuts with Eyelash Bangs",
      excerpt: "Achieve that relaxed, effortless Parisian aesthetic with center-separated lash-grazing fringe."
    },
    "long-layered-bangs": {
      url: "long-haircuts-with-curtain-bangs.html",
      title: "Long Flowing Haircuts with Face-Framing Layers",
      excerpt: "Zero-commitment long bangs that tuck behind the ears effortlessly and grow out seamlessly."
    },
    "curly-bangs": {
      url: "flattering-long-curly-haircuts.html",
      title: "Flattering Curly Haircuts with Fringe",
      excerpt: "Embrace your natural curl pattern with dry-carved ringlet bangs tailored for volume and bounce."
    },
    "choppy-bangs": {
      url: "trendy-bangs-hairstyles.html",
      title: "Trendy Textured & Choppy Bangs Lookbook",
      excerpt: "Point-cut edges and shattered texture that add casual edge and modern movement to any cut."
    },
    "arched-bangs": {
      url: "chic-fringe-hairstyles.html",
      title: "Chic Curved & Arched Fringe Hairstyles",
      excerpt: "Curved eyebrow contours that hug the brow bone and slope gracefully into your temple layers."
    },
    "piecey-bangs": {
      url: "textured-piecey-haircuts.html",
      title: "Textured Piecey Haircut Inspiration",
      excerpt: "Defined separations that give bangs an intentional, separated, lived-in look without separation anxiety."
    },
    "textured-bangs": {
      url: "low-maintenance-haircuts-with-bangs.html",
      title: "Low-Maintenance Haircuts with Bangs for Busy Days",
      excerpt: "Wash-and-wear fringe options designed to look great with 5 minutes of low-effort morning styling."
    },
    "see-through-bangs": {
      url: "korean-see-through-bangs.html",
      title: "Korean See-Through Bangs Trend Guide",
      excerpt: "The sheer, ultra-fine Korean fringe technique that flatters delicate features without committing to heavy density."
    },
    // Supporting category guides
    "category-fine-hair": {
      url: "fine-hair-bob-layers-bangs.html",
      title: "Fine Hair Bobs with Layers & Bangs",
      excerpt: "Strategic cutting techniques that build maximum visual volume for fine, thinning strands."
    },
    "category-short-hair": {
      url: "short-haircuts-with-curtain-bangs.html",
      title: "Short Haircuts with Curtain Bangs",
      excerpt: "Chic bobs, bixies, and crops accented with face-framing fringe."
    },
    "category-over-50": {
      url: "wavy-shag-women-over-50.html",
      title: "Wavy Shags & Fringe for Women Over 50",
      excerpt: "Ageless haircut ideas with soft feathered bangs that gently lift and soften facial contours."
    }
  }
};

/**
 * Curated Bangs Styles Database
 * 15 unique bangs styles with structured compatibility matrix
 */
const BANGS_STYLES = [
  {
    id: "curtain-bangs",
    name: "Curtain Bangs",
    tagline: "The universally flattering, low-commitment classic",
    description: "Curtain bangs are parted down the center or slightly off-center, gently tapering outward from eye-level down to the cheekbones. They create a soft, face-framing 'curtain' effect that opens up the face while adding dimensional movement to both straight and wavy haircuts.",
    faceShapes: ["oval", "round", "square", "heart", "diamond", "long"],
    hairTextures: ["straight", "wavy", "curly"],
    hairDensities: ["fine", "medium", "thick"],
    foreheadCompatibility: ["short", "average", "high", "notsure"],
    suitableLengths: ["chin", "shoulder", "medium", "long"],
    maintenanceLevel: "Low to Moderate",
    stylingTime: "5 to 10 minutes",
    trimCadence: "Every 6 to 8 weeks",
    stylingTips: "Blow-dry forward using a medium round ceramic brush, then sweep outward away from the face and set with a light blast of cool air or a velcro roller for bouncy lift.",
    challenges: "Can split if you have a strong central cowlick, but easily corrected with a quick root-directional blow dry.",
    whyItMatches: "Your answers highlight a desire for balanced framing and manageable styling time. Curtain bangs naturally draw focus to your eyes and cheekbones without boxing in your face.",
    compatibility: {
      faceShape: { oval: 1.0, round: 1.0, square: 0.95, heart: 0.95, diamond: 0.95, long: 0.85, notsure: 0.95 },
      hairTexture: { straight: 0.95, wavy: 1.0, curly: 0.85, coily: 0.65 },
      hairDensity: { fine: 0.9, medium: 1.0, thick: 0.95 },
      forehead: { short: 0.85, average: 1.0, high: 0.95, notsure: 0.95 },
      hairLength: { pixie: 0.5, chin: 0.85, shoulder: 1.0, medium: 1.0, long: 1.0 },
      stylingTime: { low: 0.85, medium: 1.0, high: 1.0 },
      desiredLook: { soft: 1.0, trendy: 0.95, elegant: 0.95, edgy: 0.65, natural: 1.0 },
      mainGoal: { balance: 1.0, softness: 1.0, shorten_forehead: 0.8, volume: 0.95, trendy: 0.9, frame: 1.0 }
    }
  },
  {
    id: "wispy-bangs",
    name: "Wispy Bangs",
    tagline: "Airy, featherlight fringe with effortless grace",
    description: "Wispy bangs feature delicate, feathered strands with intentional negative space between segments. Rather than creating a heavy solid line across the forehead, they provide a breezy, ethereal veil that looks completely natural and never overpowers delicate features.",
    faceShapes: ["oval", "heart", "long", "round", "diamond"],
    hairTextures: ["straight", "wavy"],
    hairDensities: ["fine", "medium"],
    foreheadCompatibility: ["average", "high", "short", "notsure"],
    suitableLengths: ["pixie", "chin", "shoulder", "medium", "long"],
    maintenanceLevel: "Low",
    stylingTime: "3 to 5 minutes",
    trimCadence: "Every 4 to 6 weeks",
    stylingTips: "Use a small pea-sized touch of texturizing paste on the tips or simply finger-comb while rough blow-drying. Avoid heavy oils or serums that might cause strands to clump.",
    challenges: "Because they are lightweight, they can absorb forehead oils quickly during hot weather. Keep dry shampoo handy.",
    whyItMatches: "Ideal for fine or medium hair seeking soft forehead softening without sacrificing density from the rest of your hair. They require minimal styling time and grow out painlessly.",
    compatibility: {
      faceShape: { oval: 1.0, round: 0.85, square: 0.8, heart: 1.0, diamond: 0.9, long: 0.95, notsure: 0.9 },
      hairTexture: { straight: 1.0, wavy: 0.9, curly: 0.6, coily: 0.5 },
      hairDensity: { fine: 1.0, medium: 0.95, thick: 0.65 },
      forehead: { short: 0.85, average: 1.0, high: 0.95, notsure: 0.95 },
      hairLength: { pixie: 0.85, chin: 0.95, shoulder: 1.0, medium: 1.0, long: 1.0 },
      stylingTime: { low: 1.0, medium: 0.95, high: 0.8 },
      desiredLook: { soft: 1.0, trendy: 0.85, elegant: 0.9, edgy: 0.5, natural: 1.0 },
      mainGoal: { balance: 0.9, softness: 1.0, shorten_forehead: 0.85, volume: 0.8, trendy: 0.8, frame: 0.9 }
    }
  },
  {
    id: "side-swept-bangs",
    name: "Side-Swept Bangs",
    tagline: "Timeless diagonal sweep that flatters angular features",
    description: "Side-swept bangs are cut with a gradual diagonal angle, originating from a defined side part and cascading softly across the forehead toward the temple. They break up facial symmetry and create an alluring diagonal line that visually softens square and round facial contours.",
    faceShapes: ["round", "square", "heart", "oval", "diamond"],
    hairTextures: ["straight", "wavy", "curly"],
    hairDensities: ["fine", "medium", "thick"],
    foreheadCompatibility: ["short", "average", "high", "notsure"],
    suitableLengths: ["pixie", "chin", "shoulder", "medium", "long"],
    maintenanceLevel: "Low to Moderate",
    stylingTime: "5 to 8 minutes",
    trimCadence: "Every 5 to 7 weeks",
    stylingTips: "Blow-dry hair in the opposite direction of where it will ultimately lay to create root volume, then sweep it over to the desired side with a cool shot setting.",
    challenges: "Requires training your natural parting if your hair naturally falls down the dead center.",
    whyItMatches: "Your answers indicate an appreciation for classic elegance and face balancing. Side-swept bangs provide immediate asymmetry that elongates rounder shapes and softens stronger jaws.",
    compatibility: {
      faceShape: { oval: 0.95, round: 1.0, square: 1.0, heart: 0.95, diamond: 0.9, long: 0.75, notsure: 0.95 },
      hairTexture: { straight: 1.0, wavy: 0.95, curly: 0.8, coily: 0.6 },
      hairDensity: { fine: 0.9, medium: 1.0, thick: 0.95 },
      forehead: { short: 0.95, average: 0.95, high: 0.9, notsure: 0.95 },
      hairLength: { pixie: 0.95, chin: 0.95, shoulder: 0.95, medium: 0.95, long: 0.95 },
      stylingTime: { low: 0.9, medium: 1.0, high: 0.9 },
      desiredLook: { soft: 0.95, trendy: 0.75, elegant: 1.0, edgy: 0.6, natural: 0.9 },
      mainGoal: { balance: 1.0, softness: 1.0, shorten_forehead: 0.75, volume: 0.9, trendy: 0.7, frame: 0.95 }
    }
  },
  {
    id: "bottleneck-bangs",
    name: "Bottleneck Bangs",
    tagline: "The sophisticated hybrid of curtain fringe and lash-grazers",
    description: "Inspired by the neck of a classic glass bottle, this hybrid style begins narrow and short (1 to 2 inches) at the center of the forehead, curves gracefully over the eyebrow arches, and terminates in long cheekbone-grazing side pieces.",
    faceShapes: ["oval", "heart", "square", "round", "diamond"],
    hairTextures: ["straight", "wavy"],
    hairDensities: ["medium", "thick", "fine"],
    foreheadCompatibility: ["average", "high", "notsure"],
    suitableLengths: ["chin", "shoulder", "medium", "long"],
    maintenanceLevel: "Moderate",
    stylingTime: "8 to 12 minutes",
    trimCadence: "Every 5 to 6 weeks",
    stylingTips: "Style the center with a mini flat iron or round brush curling slightly under, while directing the outer flares backward away from the cheekbones.",
    challenges: "Has more distinct length transitions than classic curtain bangs, requiring precision cutting from an experienced stylist.",
    whyItMatches: "You want a high-fashion, on-trend look that sculpts the face. Bottleneck bangs pinch the forehead gracefully and accent high cheekbones with editorial flair.",
    compatibility: {
      faceShape: { oval: 1.0, round: 0.9, square: 0.95, heart: 1.0, diamond: 0.95, long: 0.85, notsure: 0.95 },
      hairTexture: { straight: 0.95, wavy: 1.0, curly: 0.75, coily: 0.6 },
      hairDensity: { fine: 0.85, medium: 1.0, thick: 0.95 },
      forehead: { short: 0.7, average: 1.0, high: 1.0, notsure: 0.9 },
      hairLength: { pixie: 0.4, chin: 0.85, shoulder: 1.0, medium: 1.0, long: 1.0 },
      stylingTime: { low: 0.75, medium: 1.0, high: 0.95 },
      desiredLook: { soft: 0.9, trendy: 1.0, elegant: 0.9, edgy: 0.75, natural: 0.85 },
      mainGoal: { balance: 0.95, softness: 0.9, shorten_forehead: 0.9, volume: 0.9, trendy: 1.0, frame: 1.0 }
    }
  },
  {
    id: "blunt-bangs",
    name: "Blunt Bangs",
    tagline: "Bold, graphic precision with undeniable presence",
    description: "Blunt bangs are cut in a crisp, razor-sharp horizontal line directly across the forehead, hovering right at or slightly below the eyebrow level. They make an unmistakable sartorial statement, exuding Parisian chic and architectural precision.",
    faceShapes: ["oval", "long", "heart"],
    hairTextures: ["straight"],
    hairDensities: ["medium", "thick"],
    foreheadCompatibility: ["high", "average"],
    suitableLengths: ["chin", "shoulder", "medium", "long"],
    maintenanceLevel: "High",
    stylingTime: "10 to 15 minutes",
    trimCadence: "Every 3 to 4 weeks",
    stylingTips: "Dry immediately after showering using a paddle brush in a left-to-right wrap technique across the forehead to eliminate cowlicks before smoothing flat with a ceramic iron.",
    challenges: "Zero tolerance for growth delays; requires frequent trims and daily morning heat smoothing.",
    whyItMatches: "Your answers indicate a higher forehead and a preference for graphic, structured elegance. Blunt bangs visually shorten long facial proportions and command attention to the eyes.",
    compatibility: {
      faceShape: { oval: 1.0, round: 0.6, square: 0.65, heart: 0.85, diamond: 0.7, long: 1.0, notsure: 0.75 },
      hairTexture: { straight: 1.0, wavy: 0.6, curly: 0.3, coily: 0.25 },
      hairDensity: { fine: 0.6, medium: 0.95, thick: 1.0 },
      forehead: { short: 0.4, average: 0.85, high: 1.0, notsure: 0.75 },
      hairLength: { pixie: 0.6, chin: 0.95, shoulder: 1.0, medium: 1.0, long: 1.0 },
      stylingTime: { low: 0.5, medium: 0.85, high: 1.0 },
      desiredLook: { soft: 0.5, trendy: 0.9, elegant: 1.0, edgy: 0.95, natural: 0.4 },
      mainGoal: { balance: 0.85, softness: 0.5, shorten_forehead: 1.0, volume: 0.7, trendy: 0.85, frame: 0.9 }
    }
  },
  {
    id: "micro-bangs",
    name: "Micro Bangs (Baby Bangs)",
    tagline: "High-fashion edge that opens up the face boldly",
    description: "Micro bangs (also celebrated as baby bangs) terminate dramatically one to two inches above the brow line. They reveal the entire eye area, brow arches, and forehead contour, producing an artistic, alternative, and confident silhouette.",
    faceShapes: ["oval", "round", "heart"],
    hairTextures: ["straight", "wavy"],
    hairDensities: ["medium", "thick", "fine"],
    foreheadCompatibility: ["short", "average"],
    suitableLengths: ["pixie", "chin", "shoulder", "medium", "long"],
    maintenanceLevel: "High",
    stylingTime: "5 to 10 minutes",
    trimCadence: "Every 3 weeks",
    stylingTips: "Apply lightweight pomade or styling cream with fingertips to piece out ends. A mini 0.5-inch flat iron works wonders for keeping stubborn cowlicks disciplined.",
    challenges: "Because they are very short, the grow-out phase takes patience. Wear them with unapologetic confidence.",
    whyItMatches: "You selected an edgy, modern aesthetic. Micro bangs make short or chin-length cuts look runway-ready and uniquely personal.",
    compatibility: {
      faceShape: { oval: 1.0, round: 0.8, square: 0.6, heart: 0.9, diamond: 0.75, long: 0.5, notsure: 0.7 },
      hairTexture: { straight: 1.0, wavy: 0.8, curly: 0.65, coily: 0.5 },
      hairDensity: { fine: 0.75, medium: 0.95, thick: 0.9 },
      forehead: { short: 1.0, average: 0.9, high: 0.6, notsure: 0.75 },
      hairLength: { pixie: 1.0, chin: 0.95, shoulder: 0.85, medium: 0.8, long: 0.8 },
      stylingTime: { low: 0.7, medium: 0.9, high: 1.0 },
      desiredLook: { soft: 0.3, trendy: 0.95, elegant: 0.7, edgy: 1.0, natural: 0.4 },
      mainGoal: { balance: 0.7, softness: 0.3, shorten_forehead: 0.4, volume: 0.6, trendy: 1.0, frame: 0.85 }
    }
  },
  {
    id: "feathered-bangs",
    name: "Feathered Bangs",
    tagline: "Airy 70s rock-and-roll movement with soft flicked tips",
    description: "Characterized by fine slide-cut layers and gentle outward flicks, feathered bangs evoke the iconic style of 1970s salon icons. The hair is thinned slightly toward the perimeter so it flutters gracefully in the wind with zero heaviness.",
    faceShapes: ["oval", "square", "round", "heart", "diamond"],
    hairTextures: ["straight", "wavy"],
    hairDensities: ["fine", "medium"],
    foreheadCompatibility: ["short", "average", "high", "notsure"],
    suitableLengths: ["shoulder", "medium", "long", "chin"],
    maintenanceLevel: "Low to Moderate",
    stylingTime: "5 to 8 minutes",
    trimCadence: "Every 6 weeks",
    stylingTips: "Use a small barrel round brush or air-wrap wand directed backward and outward. A light spritz of flexible-hold hairspray preserves the airy flick all day.",
    challenges: "Can fall slightly flat in heavy humidity if fine hair lacks root texture spray.",
    whyItMatches: "Matches your search for feminine softness and natural movement. Feathered bangs add lively texture without requiring heavy daily styling commitment.",
    compatibility: {
      faceShape: { oval: 0.95, round: 0.95, square: 0.9, heart: 0.95, diamond: 0.95, long: 0.85, notsure: 0.9 },
      hairTexture: { straight: 0.95, wavy: 1.0, curly: 0.7, coily: 0.5 },
      hairDensity: { fine: 0.95, medium: 1.0, thick: 0.8 },
      forehead: { short: 0.85, average: 1.0, high: 0.95, notsure: 0.95 },
      hairLength: { pixie: 0.6, chin: 0.85, shoulder: 1.0, medium: 1.0, long: 1.0 },
      stylingTime: { low: 0.9, medium: 1.0, high: 0.9 },
      desiredLook: { soft: 1.0, trendy: 0.85, elegant: 0.9, edgy: 0.6, natural: 0.95 },
      mainGoal: { balance: 0.9, softness: 1.0, shorten_forehead: 0.8, volume: 1.0, trendy: 0.8, frame: 0.95 }
    }
  },
  {
    id: "birkin-bangs",
    name: "Birkin Bangs",
    tagline: "Effortless French-girl fringe with lived-in elegance",
    description: "Named after Jane Birkin, these eyelash-skimming bangs are cut straight across with soft, point-cut texture that gently parts in random, natural gaps. They embody Parisian chic: understated, deliberately undone, and incredibly flattering.",
    faceShapes: ["oval", "long", "heart", "square"],
    hairTextures: ["straight", "wavy"],
    hairDensities: ["fine", "medium", "thick"],
    foreheadCompatibility: ["average", "high"],
    suitableLengths: ["chin", "shoulder", "medium", "long"],
    maintenanceLevel: "Moderate",
    stylingTime: "5 to 10 minutes",
    trimCadence: "Every 4 to 5 weeks",
    stylingTips: "Air dry after applying a pea-sized drop of leave-in conditioning cream. When 90% dry, give them a quick blast forward with a hair dryer and shake through with your fingers.",
    challenges: "Eyelash grazing length means they will tickle your eyelashes; requires comfort with hair touching the brow line.",
    whyItMatches: "Reflects your desire for timeless elegance and effortless beauty. Birkin bangs bring romantic framing that looks chic on casual days and black-tie evenings alike.",
    compatibility: {
      faceShape: { oval: 1.0, round: 0.75, square: 0.85, heart: 0.95, diamond: 0.85, long: 1.0, notsure: 0.9 },
      hairTexture: { straight: 1.0, wavy: 0.95, curly: 0.65, coily: 0.5 },
      hairDensity: { fine: 0.9, medium: 1.0, thick: 0.9 },
      forehead: { short: 0.65, average: 0.95, high: 1.0, notsure: 0.85 },
      hairLength: { pixie: 0.5, chin: 0.9, shoulder: 1.0, medium: 1.0, long: 1.0 },
      stylingTime: { low: 0.85, medium: 1.0, high: 0.9 },
      desiredLook: { soft: 0.95, trendy: 0.9, elegant: 1.0, edgy: 0.65, natural: 1.0 },
      mainGoal: { balance: 0.95, softness: 0.9, shorten_forehead: 0.95, volume: 0.85, trendy: 0.9, frame: 0.95 }
    }
  },
  {
    id: "long-layered-bangs",
    name: "Long Layered Bangs",
    tagline: "Cheekbone-grazing side pieces that melt into long haircuts",
    description: "Starting below the cheekbones and tapering gracefully into collarbone layers, long layered bangs offer the illusion and face-flattering perks of fringe without committing to a short forehead cut. They can be tucked behind ears at any moment.",
    faceShapes: ["round", "square", "diamond", "oval", "heart", "long"],
    hairTextures: ["straight", "wavy", "curly", "coily"],
    hairDensities: ["fine", "medium", "thick"],
    foreheadCompatibility: ["short", "average", "high", "notsure"],
    suitableLengths: ["shoulder", "medium", "long"],
    maintenanceLevel: "Very Low",
    stylingTime: "Under 5 minutes",
    trimCadence: "Every 8 to 12 weeks",
    stylingTips: "Roll around an oversized velcro roller while getting dressed, or rough-dry with your fingers for effortless, cascading side curtains.",
    challenges: "Will not disguise a high forehead as completely as a brow-level fringe, as they sit lower along the cheek perimeter.",
    whyItMatches: "Your answers highlight a busy lifestyle with minimal styling time. Long layered bangs provide zero-stress versatility, growing out seamlessly over months.",
    compatibility: {
      faceShape: { oval: 0.95, round: 1.0, square: 1.0, heart: 0.9, diamond: 1.0, long: 0.8, notsure: 0.95 },
      hairTexture: { straight: 0.95, wavy: 1.0, curly: 0.95, coily: 0.85 },
      hairDensity: { fine: 0.9, medium: 1.0, thick: 1.0 },
      forehead: { short: 1.0, average: 0.95, high: 0.8, notsure: 0.95 },
      hairLength: { pixie: 0.2, chin: 0.6, shoulder: 0.95, medium: 1.0, long: 1.0 },
      stylingTime: { low: 1.0, medium: 0.9, high: 0.8 },
      desiredLook: { soft: 0.95, trendy: 0.85, elegant: 0.95, edgy: 0.5, natural: 1.0 },
      mainGoal: { balance: 1.0, softness: 1.0, shorten_forehead: 0.6, volume: 0.95, trendy: 0.75, frame: 1.0 }
    }
  },
  {
    id: "curly-bangs",
    name: "Curly Bangs",
    tagline: "Natural ringlet definition tailored to curl bounce and shrinkage",
    description: "Cut strictly when dry to respect the individual curl pattern and shrinkage bounce, curly bangs crown the forehead with defined spirals. They celebrate natural texture, eliminate front-heavy bulk, and frame curls with high-impact organic beauty.",
    faceShapes: ["oval", "round", "heart", "square", "long", "diamond"],
    hairTextures: ["curly", "coily", "wavy"],
    hairDensities: ["medium", "thick"],
    foreheadCompatibility: ["short", "average", "high", "notsure"],
    suitableLengths: ["pixie", "chin", "shoulder", "medium", "long"],
    maintenanceLevel: "Moderate",
    stylingTime: "5 to 15 minutes",
    trimCadence: "Every 6 to 8 weeks",
    stylingTips: "Apply curl-defining cream or hydrating mousse to soaking wet bangs, twirl individual coils around your finger, and diffuse gently on low heat without touching until 100% dry.",
    challenges: "Never cut wet; shrinkage will make them 30% to 50% shorter than expected. Use sulfate-free hydration.",
    whyItMatches: "Specially calibrated for your curly or coily hair texture. Curly bangs balance forehead proportions while letting your natural curl pattern shine brightly.",
    compatibility: {
      faceShape: { oval: 1.0, round: 0.9, square: 0.95, heart: 0.95, diamond: 0.95, long: 0.9, notsure: 0.95 },
      hairTexture: { straight: 0.1, wavy: 0.7, curly: 1.0, coily: 0.95 },
      hairDensity: { fine: 0.65, medium: 0.95, thick: 1.0 },
      forehead: { short: 0.8, average: 0.95, high: 1.0, notsure: 0.95 },
      hairLength: { pixie: 0.9, chin: 0.95, shoulder: 1.0, medium: 1.0, long: 1.0 },
      stylingTime: { low: 0.7, medium: 1.0, high: 0.9 },
      desiredLook: { soft: 0.9, trendy: 0.95, elegant: 0.85, edgy: 0.85, natural: 1.0 },
      mainGoal: { balance: 0.95, softness: 1.0, shorten_forehead: 0.9, volume: 1.0, trendy: 0.95, frame: 0.95 }
    }
  },
  {
    id: "choppy-bangs",
    name: "Choppy Bangs",
    tagline: "Dimensional point-cut edges with modern attitude",
    description: "Choppy bangs are crafted with deliberate vertical shear work and point-cutting, producing varied strand lengths and textured gaps across the brow. They bring an effortless, rocker-cool edge to bobs, shags, and mid-length cuts.",
    faceShapes: ["round", "square", "oval", "heart", "diamond"],
    hairTextures: ["straight", "wavy"],
    hairDensities: ["medium", "thick"],
    foreheadCompatibility: ["average", "high", "notsure"],
    suitableLengths: ["pixie", "chin", "shoulder", "medium", "long"],
    maintenanceLevel: "Moderate",
    stylingTime: "5 to 10 minutes",
    trimCadence: "Every 4 to 6 weeks",
    stylingTips: "Rake dry texture spray or sea-salt mist through the fringe with your fingertips to separate the points and create dimensional lift.",
    challenges: "Can look ragged if cut bluntly or with dull shears; requires point-cutting by an experienced stylist.",
    whyItMatches: "Matches your preference for modern, trendy styling with built-in texture. Choppy fringe breaks up roundness and adds instant visual interest.",
    compatibility: {
      faceShape: { oval: 0.95, round: 0.95, square: 0.9, heart: 0.9, diamond: 0.9, long: 0.85, notsure: 0.9 },
      hairTexture: { straight: 0.95, wavy: 1.0, curly: 0.65, coily: 0.4 },
      hairDensity: { fine: 0.7, medium: 1.0, thick: 1.0 },
      forehead: { short: 0.75, average: 0.95, high: 1.0, notsure: 0.9 },
      hairLength: { pixie: 0.9, chin: 0.95, shoulder: 1.0, medium: 0.95, long: 0.9 },
      stylingTime: { low: 0.85, medium: 1.0, high: 0.9 },
      desiredLook: { soft: 0.6, trendy: 1.0, elegant: 0.7, edgy: 1.0, natural: 0.85 },
      mainGoal: { balance: 0.9, softness: 0.75, shorten_forehead: 0.9, volume: 0.95, trendy: 1.0, frame: 0.9 }
    }
  },
  {
    id: "arched-bangs",
    name: "Arched Bangs",
    tagline: "Gentle brow curve that follows facial bone structure",
    description: "Arched bangs are cut shorter in the middle and curve gradually down along the orbital bone, tapering into longer strands at the temples. This anatomical arc highlights the eyes and cheekbones without creating severe horizontal lines.",
    faceShapes: ["square", "long", "oval", "diamond"],
    hairTextures: ["straight", "wavy"],
    hairDensities: ["medium", "thick"],
    foreheadCompatibility: ["average", "high"],
    suitableLengths: ["chin", "shoulder", "medium", "long"],
    maintenanceLevel: "Moderate to High",
    stylingTime: "8 to 12 minutes",
    trimCadence: "Every 4 weeks",
    stylingTips: "Blow-dry straight down with a paddle brush, then use a round brush on the temple wings to encourage their downward curving sweep.",
    challenges: "Requires precise symmetrical trims to maintain the clean eyebrow-contouring arch.",
    whyItMatches: "Your answers indicate angular or elongated facial features. Arched bangs soften strong jawlines and draw attention directly into your eyes.",
    compatibility: {
      faceShape: { oval: 1.0, round: 0.7, square: 0.95, heart: 0.85, diamond: 0.95, long: 1.0, notsure: 0.85 },
      hairTexture: { straight: 1.0, wavy: 0.85, curly: 0.5, coily: 0.3 },
      hairDensity: { fine: 0.75, medium: 1.0, thick: 0.95 },
      forehead: { short: 0.6, average: 0.95, high: 1.0, notsure: 0.85 },
      hairLength: { pixie: 0.6, chin: 0.9, shoulder: 0.95, medium: 1.0, long: 1.0 },
      stylingTime: { low: 0.7, medium: 1.0, high: 0.95 },
      desiredLook: { soft: 0.85, trendy: 0.85, elegant: 1.0, edgy: 0.75, natural: 0.75 },
      mainGoal: { balance: 0.95, softness: 0.9, shorten_forehead: 0.95, volume: 0.8, trendy: 0.8, frame: 1.0 }
    }
  },
  {
    id: "piecey-bangs",
    name: "Piecey Bangs",
    tagline: "Defined ribbons of hair with modern separation",
    description: "Piecey bangs feature intentionally separated strands that allow glimpses of the forehead to peek through while maintaining substantial perimeter coverage. They are dynamic, youthful, and forgiving on warm or active days.",
    faceShapes: ["round", "oval", "heart", "square", "diamond"],
    hairTextures: ["straight", "wavy"],
    hairDensities: ["fine", "medium", "thick"],
    foreheadCompatibility: ["short", "average", "high", "notsure"],
    suitableLengths: ["pixie", "chin", "shoulder", "medium", "long"],
    maintenanceLevel: "Low to Moderate",
    stylingTime: "3 to 6 minutes",
    trimCadence: "Every 5 weeks",
    stylingTips: "Pinch small sections of the fringe with a dab of matte clay or dry texturizing spray on your fingertips to define the individual piecey ribbons.",
    challenges: "Using heavy silicone serums will turn piecey bangs into stringy bangs. Stick to lightweight dry pomades.",
    whyItMatches: "A versatile match for anyone wanting casual sophistication without stiff hairspray hold. Piecey bangs look fresh even as they blow in the breeze.",
    compatibility: {
      faceShape: { oval: 0.95, round: 0.95, square: 0.9, heart: 0.95, diamond: 0.9, long: 0.85, notsure: 0.9 },
      hairTexture: { straight: 0.95, wavy: 1.0, curly: 0.7, coily: 0.5 },
      hairDensity: { fine: 0.9, medium: 1.0, thick: 0.9 },
      forehead: { short: 0.85, average: 1.0, high: 0.95, notsure: 0.95 },
      hairLength: { pixie: 0.9, chin: 0.95, shoulder: 0.95, medium: 0.95, long: 0.95 },
      stylingTime: { low: 0.95, medium: 1.0, high: 0.85 },
      desiredLook: { soft: 0.85, trendy: 0.95, elegant: 0.8, edgy: 0.85, natural: 1.0 },
      mainGoal: { balance: 0.9, softness: 0.9, shorten_forehead: 0.85, volume: 0.9, trendy: 0.95, frame: 0.9 }
    }
  },
  {
    id: "textured-bangs",
    name: "Textured Bangs",
    tagline: "Relaxed, lived-in layers that air-dry with natural body",
    description: "Textured bangs are designed for movement. Cut with internal slide texturizing and soft channel cutting, they avoid harsh blunt borders and adapt fluidly to natural waves, cowlicks, and daily hair shifts.",
    faceShapes: ["oval", "round", "heart", "square", "diamond", "long"],
    hairTextures: ["wavy", "straight", "curly"],
    hairDensities: ["medium", "thick", "fine"],
    foreheadCompatibility: ["short", "average", "high", "notsure"],
    suitableLengths: ["chin", "shoulder", "medium", "long"],
    maintenanceLevel: "Low",
    stylingTime: "5 minutes or less",
    trimCadence: "Every 6 to 8 weeks",
    stylingTips: "Apply a light sea salt mist, crunch with fingers, and allow to air-dry naturally for effortless beachy texture.",
    challenges: "If you crave poker-straight geometric precision, textured fringe will feel too informal.",
    whyItMatches: "Your responses prioritize an effortless morning routine and natural, lived-in beauty. Textured fringe delivers movement with virtually zero styling stress.",
    compatibility: {
      faceShape: { oval: 0.95, round: 0.95, square: 0.95, heart: 0.95, diamond: 0.95, long: 0.85, notsure: 0.95 },
      hairTexture: { straight: 0.9, wavy: 1.0, curly: 0.85, coily: 0.6 },
      hairDensity: { fine: 0.85, medium: 1.0, thick: 1.0 },
      forehead: { short: 0.85, average: 1.0, high: 0.95, notsure: 0.95 },
      hairLength: { pixie: 0.75, chin: 0.95, shoulder: 1.0, medium: 1.0, long: 1.0 },
      stylingTime: { low: 1.0, medium: 0.95, high: 0.8 },
      desiredLook: { soft: 0.9, trendy: 0.9, elegant: 0.8, edgy: 0.75, natural: 1.0 },
      mainGoal: { balance: 0.95, softness: 0.95, shorten_forehead: 0.8, volume: 1.0, trendy: 0.85, frame: 0.95 }
    }
  },
  {
    id: "see-through-bangs",
    name: "See-Through Bangs",
    tagline: "The viral Korean beauty trend for ultra-delicate framing",
    description: "Originating in Korean salon culture, see-through bangs (si-seu-roo baeng) are cut with only a micro-section of hair from the very front hairline. They are featherweight, highly breathable, and can easily be pushed to the side on days you want a bare forehead.",
    faceShapes: ["oval", "heart", "round", "diamond", "long"],
    hairTextures: ["straight", "wavy"],
    hairDensities: ["fine", "medium"],
    foreheadCompatibility: ["short", "average", "high", "notsure"],
    suitableLengths: ["chin", "shoulder", "medium", "long"],
    maintenanceLevel: "Low to Moderate",
    stylingTime: "3 to 5 minutes",
    trimCadence: "Every 4 to 6 weeks",
    stylingTips: "Set with a single large velcro roller for 5 minutes while applying skincare, then brush gently down for an airy, glass-skin beauty complement.",
    challenges: "Very few strands mean each hair shows clearly. Keep clean and oil-free with transparent translucent powder or dry shampoo.",
    whyItMatches: "Perfect for delicate features or fine strands where you want the face-slimming benefits of bangs without losing hair density from your main haircut.",
    compatibility: {
      faceShape: { oval: 1.0, round: 0.9, square: 0.8, heart: 1.0, diamond: 0.9, long: 0.9, notsure: 0.9 },
      hairTexture: { straight: 1.0, wavy: 0.9, curly: 0.5, coily: 0.4 },
      hairDensity: { fine: 1.0, medium: 0.9, thick: 0.5 },
      forehead: { short: 0.9, average: 1.0, high: 0.9, notsure: 0.95 },
      hairLength: { pixie: 0.6, chin: 0.95, shoulder: 1.0, medium: 1.0, long: 1.0 },
      stylingTime: { low: 1.0, medium: 0.95, high: 0.8 },
      desiredLook: { soft: 1.0, trendy: 0.95, elegant: 0.9, edgy: 0.5, natural: 0.95 },
      mainGoal: { balance: 0.9, softness: 1.0, shorten_forehead: 0.8, volume: 0.75, trendy: 0.95, frame: 0.95 }
    }
  }
];

/**
 * Quiz Questions and Educational Metadata
 */
const QUIZ_QUESTIONS = [
  {
    id: "faceShape",
    title: "What is your face shape?",
    subtitle: "Select the shape that best describes your facial outline and jaw proportions.",
    weightKey: "faceShape",
    hasHelper: true,
    helperText: "Not sure about your face shape? Click 'Help Me Measure' below for quick 3-step measuring tips.",
    options: [
      {
        value: "oval",
        label: "Oval",
        desc: "Balanced length to width ratio, gently rounded jawline",
        icon: "oval"
      },
      {
        value: "round",
        label: "Round",
        desc: "Cheekbones and face length are similar, soft curved jaw",
        icon: "round"
      },
      {
        value: "square",
        label: "Square",
        desc: "Strong angular jawline, equal width at temples and jaw",
        icon: "square"
      },
      {
        value: "heart",
        label: "Heart",
        desc: "Wider forehead and cheekbones tapering to a pointed chin",
        icon: "heart"
      },
      {
        value: "long",
        label: "Long / Oblong",
        desc: "Face length is noticeably greater than width, straight sides",
        icon: "long"
      },
      {
        value: "diamond",
        label: "Diamond",
        desc: "High prominent cheekbones with narrower forehead and jaw",
        icon: "diamond"
      },
      {
        value: "notsure",
        label: "Not sure",
        desc: "We'll balance your recommendations across adaptable versatile fringe styles",
        icon: "question"
      }
    ]
  },
  {
    id: "hairTexture",
    title: "What is your natural hair texture?",
    subtitle: "Select how your hair naturally behaves when air-dried without heat tools.",
    weightKey: "hairTexture",
    options: [
      {
        value: "straight",
        label: "Straight",
        desc: "Lies flat with sleek surface; prone to showing partings and oil quickly",
        badge: "Type 1"
      },
      {
        value: "wavy",
        label: "Wavy",
        desc: "Natural loose S-curve or tousled bend; responsive to texturizing",
        badge: "Type 2"
      },
      {
        value: "curly",
        label: "Curly",
        desc: "Definite spiral curls or ringlets; experiences bounce-back shrinkage",
        badge: "Type 3"
      },
      {
        value: "coily",
        label: "Coily",
        desc: "Tight zig-zag or compact corkscrew coils with high shrinkage and density",
        badge: "Type 4"
      }
    ]
  },
  {
    id: "hairDensity",
    title: "How thick or dense is your hair?",
    subtitle: "Think about the total amount of hair you have on your scalp, not strand coarseness.",
    weightKey: "hairDensity",
    options: [
      {
        value: "fine",
        label: "Fine / Thin",
        desc: "Scalp easily visible; hair can get weighed down by thick heavy fringe",
        badge: "Lightweight"
      },
      {
        value: "medium",
        label: "Medium",
        desc: "Balanced density; holds shape easily and adapts to most bangs styles",
        badge: "Versatile"
      },
      {
        value: "thick",
        label: "Thick / Dense",
        desc: "Abundant volume; requires strategic debulking or long weight to sit flat",
        badge: "Full Body"
      }
    ]
  },
  {
    id: "forehead",
    title: "How high is your forehead?",
    subtitle: "Place your horizontal fingers across your forehead between eyebrows and hairline.",
    weightKey: "forehead",
    options: [
      {
        value: "short",
        label: "Short Forehead",
        desc: "About 2 to 3 fingers wide; benefits from fringe starting farther back",
        badge: "< 3 Fingers"
      },
      {
        value: "average",
        label: "Average Forehead",
        desc: "Around 3 to 4 fingers wide; harmonious balance across all fringe depths",
        badge: "3-4 Fingers"
      },
      {
        value: "high",
        label: "High Forehead",
        desc: "4+ fingers wide; ample surface area for bold, blunt or lash-skimming cuts",
        badge: "4+ Fingers"
      },
      {
        value: "notsure",
        label: "Not Sure",
        desc: "We will select styles with flexible, adaptable vertical placement",
        badge: "Adaptable"
      }
    ]
  },
  {
    id: "hairLength",
    title: "What is your current hair length?",
    subtitle: "Bangs should connect seamlessly with your overall haircut silhouette.",
    weightKey: "hairLength",
    options: [
      {
        value: "pixie",
        label: "Pixie / Very Short",
        desc: "Above or around ear level with tapered sides or nape",
        badge: "Cropped"
      },
      {
        value: "chin",
        label: "Chin Length",
        desc: "Classic bobs and French crops hugging the jawline",
        badge: "Bob Level"
      },
      {
        value: "shoulder",
        label: "Shoulder Length",
        desc: "Lobs and clavicle-skimming cuts with medium swing",
        badge: "Lob Level"
      },
      {
        value: "medium",
        label: "Medium Length",
        desc: "Past shoulders down to armpit or chest line",
        badge: "Mid-Length"
      },
      {
        value: "long",
        label: "Long Hair",
        desc: "Rib-cage level or longer with flowing cascading length",
        badge: "Flowing"
      }
    ]
  },
  {
    id: "stylingTime",
    title: "How much styling time are you comfortable with?",
    subtitle: "Be realistic about your typical morning routine and hot-tool comfort.",
    weightKey: "stylingTime",
    options: [
      {
        value: "low",
        label: "Very Little – 5 minutes or less",
        desc: "Wash, finger-comb, air dry, or quick shake-and-go",
        badge: "< 5 Mins"
      },
      {
        value: "medium",
        label: "Moderate – 5 to 15 minutes",
        desc: "Quick blow-dry with round brush or roller for polished bounce",
        badge: "5-15 Mins"
      },
      {
        value: "high",
        label: "I Enjoy Styling – 15+ minutes",
        desc: "Complete blowout, flat-iron smoothing, precision pin-curls or rollers",
        badge: "15+ Mins"
      }
    ]
  },
  {
    id: "desiredLook",
    title: "What overall vibe do you prefer?",
    subtitle: "Select the personal fashion and aesthetic sensibility you love best.",
    weightKey: "desiredLook",
    options: [
      {
        value: "soft",
        label: "Soft and Feminine",
        desc: "Romantic, flattering curves, gentle wisps, and delicate eye-framing",
        icon: "feather-alt"
      },
      {
        value: "trendy",
        label: "Modern and Trendy",
        desc: "Editorial cool, viral Pinterest & TikTok aesthetics, fashion-forward",
        icon: "bolt"
      },
      {
        value: "elegant",
        label: "Elegant and Classic",
        desc: "Polished, timeless, sophisticated salon silhouettes that never date",
        icon: "gem"
      },
      {
        value: "edgy",
        label: "Edgy and Bold",
        desc: "Graphic lines, statement micro lengths, intentional contrasting angles",
        icon: "fire"
      },
      {
        value: "natural",
        label: "Natural and Effortless",
        desc: "Lived-in French-girl texture, wash-and-wear charm, carefree movement",
        icon: "leaf"
      }
    ]
  },
  {
    id: "mainGoal",
    title: "What is your primary goal with getting bangs?",
    subtitle: "What visual effect would make you love your new reflection most?",
    weightKey: "mainGoal",
    options: [
      {
        value: "balance",
        label: "Make my face appear more balanced",
        desc: "Harmonize facial proportions, soften cheek width or sharp angles"
      },
      {
        value: "softness",
        label: "Add softness around my face",
        desc: "Break up harsh jaw lines and introduce romantic, gentle movement"
      },
      {
        value: "shorten_forehead",
        label: "Make my forehead appear shorter",
        desc: "Cover high hairline surface area with brow-skimming or dense fringe"
      },
      {
        value: "volume",
        label: "Add volume and movement",
        desc: "Give flat roots a noticeable lift and create multi-layered dimension"
      },
      {
        value: "trendy",
        label: "Try a trendy new hairstyle",
        desc: "Refresh my everyday look with a stylish, buzz-worthy haircut change"
      },
      {
        value: "frame",
        label: "Frame my eyes and cheekbones",
        desc: "Draw immediate admiring attention to my gaze and facial bone structure"
      }
    ]
  }
];

// Export to window for vanilla browser execution
if (typeof window !== "undefined") {
  window.BANGS_CONFIG = BANGS_CONFIG;
  window.BANGS_STYLES = BANGS_STYLES;
  window.QUIZ_QUESTIONS = QUIZ_QUESTIONS;
}
