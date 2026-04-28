---
name: elevenminds-design
description: Use this skill to generate well-branded interfaces and assets for elevenminds, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick-start files
- `colors_and_type.css` — all tokens (colors, type scale, spacing, radii, shadows, motion)
- `assets/logo-elevenminds.svg` + `assets/logo-elevenminds-white.svg` — wordmarks
- `assets/em-icons.svg` — hand-drawn SVG icon sprite (workplace + UI icons)
- `ui_kits/_shared.jsx` — React components: `EmIcon`, `UIIcon`, `Button`, `Card`, `Tag`, `Chip`, `Eyebrow`, `Logo`
- `ui_kits/platform/` — dashboard-style UI kit
- `ui_kits/marketing/` — landing-page UI kit

## Signature elements to preserve
1. Lowercase wordmark `elevenminds` — never sentence-cased.
2. Hand-drawn icon roundels (48px, gray `#E5E5E5` background, 1.8px ink strokes).
3. Cobalt blue accent (`#2847E0`) for selection / annotation / "new" markers, highlight washes, and accent buttons — used as a flat wash, **never** paired with cursive / handwritten type.
4. Primary CTA is **black fill, white text** — blue is the secondary/accent surface, not the default button.
5. No emoji. No gradients. No blur. No duotone photos.
