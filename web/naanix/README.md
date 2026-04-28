# elevenminds Design System

A design system for **elevenminds** — an innovation & technology studio building software, hardware-integrated products, and digital experiences. The brand's visual identity is built around a lowercase wordmark, editorial neutral typography, and a signature hand-drawn iconography style accented with an editorial cobalt blue.

---

## Sources used

| Source | Location | Notes |
| --- | --- | --- |
| Logo (wordmark) | `uploads/logo-elevenminds.svg` | Original file (uses undefined `.st1` class — fixed copy saved to `assets/`). |
| Icon reference | `uploads/iconos steelcase.pdf` | A deck of icons elevenminds produced for a Steelcase workplace-analytics product. Establishes the signature **hand-drawn icon + cobalt highlight** visual language. Per the user, this is *their* style — the same DNA was applied to an elevenminds-native icon set (see `assets/em-icons.svg`). |
| Website | `elevenminds.com` | Mentions **Software Solutions, Hardware Integration, Product Development, RTLS Everywhere (indoor tracking), Games, YANTRA Design Studio, Help Desk / Partner Login** — framed as an "Innovation & Technology Hub." |

> The public site is a lightweight marketing page with minimal copy; this system extends the DNA of the Steelcase icon deck (which the user supplied as a brand reference) into a full product-facing system.

---

## Company / product context

**elevenminds** positions itself as an *Innovation & Technology Hub*. Core offerings from the website:

- **Software Solutions** — custom platforms, dashboards, analytics UIs
- **Hardware Integration** — RTLS (real-time location systems) and IoT hardware
- **Product Development** — full-stack product design and engineering
- **RTLS Everywhere** — their indoor-location product line (workplace analytics, utilization, wayfinding)
- **Games** — interactive / game-engine work
- **YANTRA Design Studio** — in-house design practice
- **Help Desk / Partner Login** — post-sale customer & partner portal

Because this is a technology studio that also ships product interfaces (dashboards, partner portals, games), the design system covers both **marketing-site** surfaces and **data-dashboard** surfaces.

---

## Index — what's in this folder

```
README.md                    ← you are here
SKILL.md                     ← agent skill manifest (also works in Claude Code)
colors_and_type.css          ← tokens: colors, type scale, spacing, radii, shadows, motion
assets/
  logo-elevenminds.svg       ← wordmark (ink)
  logo-elevenminds-white.svg ← wordmark (white, for dark surfaces)
  em-icons.svg               ← hand-drawn icon sprite (<use href="assets/em-icons.svg#em-clock"/>)
fonts/                       ← (Google Fonts loaded by URL; no local ttfs yet — see CAVEATS)
preview/                     ← design-system cards (typography, color, components, etc.)
ui_kits/
  platform/                  ← dashboard / data-platform UI kit  (RTLS Everywhere-style)
    index.html
    *.jsx
  marketing/                 ← marketing-site UI kit             (elevenminds.com-style)
    index.html
    *.jsx
scraps/                      ← research / reference renders (not shipped)
uploads/                     ← user-provided source files
```

---

## CONTENT FUNDAMENTALS

**Voice.** Concise, technical, confident. The company names itself in all-lowercase (`elevenminds`) — treat the wordmark as a locked lockup. Product names are Title Case or ALL CAPS (`RTLS Everywhere`, `YANTRA`). Section headers on the icon reference PDF use numbered Title Case (`1. Time / Date`, `2. Occupancy`) — that **numbered + terse** pattern is a useful pattern for docs and feature tours.

**Person.** Third-person and product-centric in marketing ("*This measures whether…*", "*Must calculate # of visitors*"). Switch to a direct, operative second person in product UI ("*Choose a floor*", "*Invite a partner*"). Avoid "we" outside About-us contexts.

**Tone.** Engineer-plain. Define metrics crisply, then explain how they're calculated. E.g. from the reference PDF: *"Utilization — the percent of seats in the room or setting that are filled, given that it is occupied."* No exclamation marks. No hype.

**Casing.** Sentence case for UI labels and buttons. Title Case for navigation, product names, and marketing headings. ALL CAPS reserved for eyebrows / section-rails / tiny metadata — never for body copy.

**Numbers and units.** Always pair a number with its unit: `m²`, `ft²`, `%`, `min`. Use `%` as a tight suffix (`72%`, not `72 %`). For ranges use an en-dash (`7:00am–6:00pm`).

**Emoji.** Not used. The brand's "playful" slot is already filled by the hand-drawn icons and their occasional cobalt highlight — do not add emoji.

**Bilingual.** The source PDF mixes Spanish and English cleanly ("Propuestas iconos para plataforma"). Assume multi-locale copy is the norm; keep strings short to survive translation.

**Examples of on-brand copy**
> Occupancy. Percentage of time a room is occupied.
> Designed ft²/person. Total square feet divided by the number of people assigned to a space.
> Visit. Calculate # of visitors per antenna.

---

## VISUAL FOUNDATIONS

**Palette.** Austere and print-like: a near-black ink (`#111111`) on warm whites (`#FAFAFA`) and gray roundels (`#E5E5E5`). The single accent is an editorial cobalt blue (`#2847E0`) used *only* as a small highlight wash, flag, or underline — never as a large block. Semantic status colors (success/warning/danger) exist but are desaturated so they don't compete with the blue; `--em-info` reuses the brand blue directly.

**Typography.** Clean neo-grotesque sans (Inter, as a stand-in for Helvetica Neue which the PDF uses). Tight tracking on display sizes. JetBrains Mono for code / IDs / coordinates / data units. **No handwritten / cursive faces** — the brand voice is editorial and typographic, not scrapbook.

**Spacing.** 4-px base grid. Editorial generosity on marketing (96–128px section rhythm), compact on dashboards (16–24px).

**Backgrounds.** Flat, mostly white or `--em-gray-50`. No gradients, no photography washes, no blurred blobs. The only "texture" in the system is the blue highlight itself, which reads as a marker pass over the page.

**Illustration style.** Hand-drawn outline icons at ~1.8 px stroke, slight imperfection (corners not mitered perfectly, lines not perfectly straight). Icons may wear a small **cobalt highlight flag** (graphic only — no text on it) in the top-right as a state marker (selected / annotated / active). Solid black filled variant for "focus" state.

**Iconography roundel.** Icons live inside a `--em-gray-200` circle with generous padding (~20% of diameter). Selected state = roundel becomes `--em-ink`, icon strokes invert to white.

**Animation.** Functional, not decorative. Default easing `cubic-bezier(0.22, 0.61, 0.36, 1)` at 120–220ms. Fades and short translates only. No bounce, no parallax.

**Hover states.** Buttons darken by ~8% lightness; links underline on hover; cards lift one elevation step (`--em-shadow-1` → `--em-shadow-2`) with a 2-px translate-up. Opacity fades *only* for disabled elements.

**Press states.** Scale down by 2% (`transform: scale(0.98)`); no ripple.

**Borders.** 1 px `--em-border` is default. 1.5–2 px for hand-drawn / illustrative containers that echo the icon stroke. Dashed borders welcome for "drop here / empty" states — they feel like a sketchbook placeholder.

**Shadows.** Four-step scale (`--em-shadow-0..3`). Soft, low-contrast drop shadows only. No hard-offset "sticker" shadows.

**Transparency & blur.** Avoid. Use opaque layers. Scrims permitted on modal overlays (`rgba(17,17,17,0.5)`) but no backdrop-blur.

**Imagery.** When photography is used, treat it warm and high-contrast — skin tones preserved, slight grain acceptable. Never duotone, never teal-orange LUT. Photo placeholders should use a neutral gray fill + the hand-drawn placeholder icon, not a gradient.

**Corner radii.** Four steps: `4 / 8 / 16 / 999`. Cards use `8px`. Pills (`999`) used for status chips and filter tokens. Avatars and icon roundels are perfect circles. Never mix radii on one element (e.g. rounded-top-only is not in the system).

**Cards.** White fill, `--em-border` 1 px, radius 8 px, `--em-shadow-1` at rest. On hover → `--em-shadow-2` + 2px translate. No colored left-border accents.

**Layout rules.** Fixed elements are rare. Top nav is sticky on marketing, static on dashboards. Bottom sheets are avoided outside mobile. Tables align numbers right, labels left. Grid over flex for anything 2-D.

**Use of blue.** The cobalt blue is a *highlighter wash* — used behind a word of running copy, as a nav-underline, as a small flag on an icon, or as a cell highlight in data. It is never the surface of a badge with cursive text. Primary CTA is **black fill, white text**; blue is decoration and accent, used for secondary/accent CTAs and editorial highlights, not as a primary surface color.

---

## ICONOGRAPHY

elevenminds uses a **custom hand-drawn SVG icon set**, not an off-the-shelf library. The defining characteristics:

1. **Stroke.** 1.6–1.8 px, `stroke-linecap="round"`, slightly imperfect paths (corners not perfectly snapped to pixel grid — they feel drawn with a pen).
2. **No fill** on the silhouette; black strokes only. Exception: the small cobalt highlight-flag overlay and occasional solid-black emphasis (e.g. the clock pie slice).
3. **Roundel base.** Icons display on a `48px` circular background in `--em-gray-200` with ~20% internal padding. When "active," the roundel flips to `--em-ink` and strokes become white.
4. **The cobalt highlight-flag** is a small graphic overlay that clips out of the top-right of the roundel. Graphic only — never carries text. Marks selection / annotation / current context.
5. **Line-only UI icons** (search, plus, close, etc.) share the same 1.8-px stroke with rounded linecaps, so marketing and product icons look like the same family.

**Where to find them.** `assets/em-icons.svg` is an inline SVG sprite; reference via `<svg><use href="assets/em-icons.svg#em-clock"/></svg>`, or use the `<EmIcon name="clock" flag active />` React component in the UI kits.

**Substitutions / CDN.** None. The set is self-contained. For any icon not in the sprite, **draw in the same style rather than pulling from Lucide or Heroicons** — stroke weights and roundness must match.

**Emoji / Unicode.** Not used anywhere in product UI.

**Placeholder policy.** When an icon is missing, show a dashed-border circle with a `?` at the center — treat it like a sketchbook TODO. Better than substituting an off-brand icon.

---

## CAVEATS (please review)

1. **Fonts are substituted.** The reference PDF uses Helvetica Neue; I've substituted **Inter** from Google Fonts as the closest free match. If you can share your licensed font files (Helvetica Neue, or whatever the brand officially uses), drop them in `fonts/` and update `--em-font-sans` in `colors_and_type.css`.
2. **Accent blue is a direction, not a spec.** I picked `#2847E0` (editorial cobalt) as the brand accent — if you have a Pantone / brand spec, swap `--em-blue` in `colors_and_type.css` to match.
3. **No full website crawl.** `elevenminds.com` is mostly a marketing shell; the marketing UI kit is built from that public structure + the icon DNA. If you have Figma files, staging URLs, or codebases for the **partner portal / help desk / RTLS Everywhere platform**, I can re-build the dashboard UI kit to match.
4. **Icons are redrawn, not copied.** The Steelcase PDF was a *style* reference — the sprite in `assets/em-icons.svg` is drawn fresh in the same style, not lifted from that deck (those are Steelcase's client deliverable).
5. **Iconography breadth.** I've drawn ~30 icons covering workplace analytics + common UI needs. A production icon set would likely be 80–120; flag which domains (e.g. hardware, games, help desk) need priority and I'll expand.
