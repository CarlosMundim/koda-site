# KODA Assets Directory

This folder contains all visual assets for the KODA brand microsite.

## Naming Rules

- **All lowercase**
- **Hyphens for spaces** (not underscores)
- **Descriptive but concise**

Examples:
- `koda-logo.webp` ✓
- `KODA_Logo.webp` ✗
- `koda-predict-hero.webp` ✓
- `KodaPredictHero.webp` ✗

## Folder Structure

```
public/assets/koda/
├── logos/
│   ├── master/     # Original high-res files (PNG, AI, SVG source)
│   └── web/        # Web-optimized versions (WEBP, optimized SVG)
├── hero/
│   ├── products/   # Hero images for product pages
│   ├── solutions/  # Hero images for solutions pages
│   └── services/   # Hero images for services pages
├── infographics/
│   ├── svg/        # Vector diagrams (preferred)
│   └── png/        # Raster fallbacks if needed
└── og/             # OpenGraph images for social sharing
```

## Master vs Web Rule

- **Master folder**: Original source files, full resolution
  - Keep for future edits
  - Not served to users

- **Web folder**: Optimized for web delivery
  - WEBP format for photos (< 200KB target)
  - SVG for logos and diagrams
  - Served to users

## Format Preferences

| Content Type | Preferred Format | Notes |
|-------------|-----------------|-------|
| Photos | WEBP | Max 200KB, use sharp/squoosh to optimize |
| Logos | SVG | Or WEBP if complex/photographic |
| Diagrams | SVG | Simple, clean, no gradients |
| Icons | SVG | Inline where possible |
| OG Images | PNG or WEBP | 1200x630px for social |

## GPT Image Outputs

When using AI image generation (GPT-4, DALL-E, etc.):

1. Download the raw output
2. Place in appropriate `master/` folder
3. Optimize for web:
   - Photos: Convert to WEBP, resize to max 1920px width
   - Diagrams: Recreate as SVG if possible
4. Place optimized version in `web/` folder

## Canonical Filenames

### Logos
- `koda-logo.webp` - Main KODA logo (dark version)
- `koda-logo-white.webp` - White version for dark backgrounds
- `koda-mascot.webp` - KODA mascot if applicable

### Product Logos
- `koda-predict-logo.webp`
- `koda-optimise-logo.webp`
- `koda-vision-logo.webp`
- `koda-twin-logo.webp`

### Hero Images
- `koda-home-hero.webp` - Homepage hero
- `koda-predict-hero.webp` - Predict product page
- (etc.)

### Infographics
- `koda-triad.svg` - Products/Solutions/Services diagram
- `koda-adoption-timeline.svg` - Pilot → Expand → Operate

## Photo Guidelines

Photos must look like **evidence, not fantasy**:

- Real manufacturing environments
- Actual equipment and operators
- Natural lighting preferred
- No stock photo clichés (handshakes, arrows, gears)
- If AI-generated, must look photorealistic and industrial

## Diagram Guidelines

Diagrams must be **simple SVGs, not marketing art**:

- Clean lines, minimal colors
- Text must be readable at small sizes
- Use KODA red (#c41e3a) as accent only
- No gradients, shadows, or 3D effects
- Export from Figma/Illustrator as optimized SVG

---

*Maintained by Tiger for KODA site assets.*
