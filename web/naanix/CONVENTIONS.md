# naanix-app · shipping conventions

Drop-in guidance for design tools producing components that ship in
**naanix-app** (Vite + React 18 + TypeScript strict + Tailwind v4 + TanStack Router).

If you're generating screens for this app, follow these patterns. The
underlying tokens come from `colors_and_type.css` and `sub_systems/naanix/tokens.css`
in this bundle — use those vars, not raw hex.

---

## Voice

Brand name **lowercase** (`elevenminds`, `naanix`). Product names Title Case
or ALL CAPS (`MAPA EN VIVO`, `PARO LARGO`). Section eyebrows are ALL CAPS
with `tracking-[0.14em]–[0.18em]`.

Bilingual (es default, en secondary). Keep strings short.

---

## Layout primitives

- **Card** — sharp 1px border, `rounded-card`, body fills available space.
  Always wrap dashboard content in `<Card title="..." rightSlot={...}>`.
  Never roll your own bordered div for a card.
- **AlertRail** — fixed-width vertical strip on the left (`w-20`),
  6 stacked colored columns with vertically-rotated labels (`writingMode:
  vertical-rl; transform: rotate(180deg)`). Each column = an alert key.
- **Subhead** — 36px tall row beneath the topbar. Brand label centered in
  an 80px column matching the AlertRail width below. Scope chips
  (EMPRESA / FLOTA / REGIÓN / PERIODO) start at the column after that.
  Right side = WS connection indicator + clock.
- **Topbar** — 56px tall, logo-left, sticky on dashboards.

---

## Naming + sizing

| Element | Class signature |
| --- | --- |
| Card title (header) | `font-display font-bold text-[11px] tracking-[0.1em] uppercase` |
| Card right slot text | `font-mono text-[10px]` |
| KPI label | `font-display font-semibold text-[10px] tracking-[0.14em] uppercase` |
| KPI value | `font-display font-bold text-[26px] leading-none tracking-tight` |
| KPI delta | `font-mono text-[10px]` |
| Row title | `font-display font-bold text-[12px] tracking-wide` |
| Row kind label | `font-display font-semibold text-[9px] tracking-[0.14em] uppercase` |
| Row body text | `text-[11px] leading-snug` |
| Row metadata | `font-mono text-[10px]` |
| Drawer micro text | `font-mono text-[9px]` |

Heights and densities:
- Card header `min-h-10`, padding `px-3.5 py-2.5`
- Row inner padding `py-2.5 px-2.5` for normal density, `py-2 px-2.5` for compact
- Map controls in the corner: `w-6 h-6 grid place-items-center rounded-card border`

---

## Color usage

- **Primary alert (off-route, errors)** = `var(--nx-alert-red)` `#D7263D`
- **Warning (paro largo)** = `var(--nx-alert-yellow)` `#F5C518`
- **Running / OK** = `var(--nx-alert-green)` `#2E8B57`
- **Other / informational** = `var(--em-blue)` `#2847E0` (editorial cobalt)
- **Selected / accent** = `var(--nx-alert-magenta)` `#D6266D`
- **Same-empresa data** in mixed views uses **magenta**; **other-empresa** uses **cobalt**
- Backgrounds:
  - Light: `bg-nx-bg` (#FFFFFF) and `bg-nx-bg-alt` (#F6F6F4)
  - Dark: `bg-d-bg-0` / `bg-d-bg-1` / `bg-d-bg-2` / `bg-d-bg-3`
- Foregrounds:
  - Light: `text-nx-slate` (primary) `text-nx-slate-2` `text-nx-slate-3`
  - Dark: `text-d-fg-1` `text-d-fg-2` `text-d-fg-3`

Theme support: every component should accept light AND dark via `useTheme()`.
Active states usually invert (white text on ink in light; cobalt-on-dark in dark).

**The cobalt blue is highlighter, not surface.** Buttons that need a primary
fill use **ink black** in light mode; cobalt is used for accents,
"annotated" highlights, and the editorial wash effect.

---

## Iconography

- All icons come from `assets/em-icons.svg` via `<svg><use href="...em-icons.svg#em-NAME"/></svg>`.
- naanix-app exposes them via `<Icon name="NAME" size={N} strokeWidth={2} />`.
- Names follow the sprite: `clock`, `cube`, `seat`, `bell`, `cog`, `search`,
  `eye`, `arrow-right`, `truck`, `chat`, `check`, `x`, `arrows`, `close`,
  `plus`, `poi-polygon`, `poi-polygon-solid` (and more — read the sprite).
- **Never** use Lucide / Heroicons / Material Icons. If an icon is missing
  draw it in the same hand-drawn 1.6–1.8 px outline style and add it to
  the sprite.
- Roundel pattern: 48px circle in `--em-gray-200`; active state inverts
  (`--em-ink` background, white strokes).
- Tile pattern: 14px-radius rounded square with 1px border.

---

## Card stripe / row pattern

Rows in IncidentsCard, ParoMapDrawer, etc. use a 3- or 4-px left stripe in
the alert color, then a content column, then a right metadata column:

```jsx
<button className="grid grid-cols-[3px_1fr_auto] gap-2 items-center py-2 px-2.5 border-b">
  <span style={{ background: 'var(--nx-alert-red)' }} />
  <div className="min-w-0">{/* title + body */}</div>
  <div className="font-mono text-[10px]">{/* metadata */}</div>
</button>
```

Cards never have colored *left-borders* though — the stripe is for **rows**.
Cards use a uniform 1px `--em-border`.

---

## Maps

- **Google Maps** as the base tile renderer. Map IDs (cloud styles) for
  light/dark — flip via `colorScheme: 'LIGHT'/'DARK'` (Maps JS v=beta).
- **No Google markers**, ever. Units, halos, sitios, dots — all drawn on
  a single `<canvas>` `OverlayView`. Web-Mercator math inline, no LatLng
  allocations in hot loops.
- **Sitio polygons** — cobalt fill+stroke in dark, ink/gray in light.
  Vertex dots when zoom ≥ 14.
- **Per-map drawers** anchor at top-left under the UNIDADES chip, NOT
  floating overlays. They're collapsible chip-style strips with
  `position: absolute; top: 68px; left: 8px; width: 300px;`.
- **Map controls** sit at top-right: a `flex gap-1` row of `w-6 h-6`
  black-translucent buttons.

---

## Charts

- **SVG only** for charts (sparklines, KPI trends, bar/line/donut).
  Use the same scale/axis primitives across the app.
- **WebGL/canvas** *only* for: heatmaps, large dot fields (10K+ units),
  trip-tile heatmaps, anything where SVG would choke.
- **No deck.gl. No Mapbox. No carto.** All visualization is hand-built on
  the canvas overlay or as inline SVG.

---

## Component primitives

- `<Card title rightSlot flushBody>` — every card
- `<KpiCell data>` and `<KpiStrip kpis>` — metric tiles
- `<IncidentRow incident>` — uniform alert-row pattern
- `<MapDrawer label accent summary onClose>` — collapsible drawer that
  anchors itself to the map. Use it for any per-map list panel.
- `<Icon name size strokeWidth>` — sprite lookup
- `<IconRoundel name active>` — 48px circle wrapper around an icon
- `<IconTile name active>` — rounded-square wrapper

---

## State / data

- Zustand for client state. Never Redux. Never useReducer for cross-component state.
- TanStack Router for routing. File-based routes under `src/routes/`.
- WebSocket singleton at `data/ws.ts` (port 9002 = v5 GPU server) and
  `data/wsCpu.ts` (port 9003 = cpu_ws). Use `wsSubscribe + wsSend`, not raw sockets.
- Live unit positions via the singleton poller `useLiveUnits(pollMs)` — one
  socket, all maps subscribe.
- Persisted state goes through Zustand's `persist` middleware with
  explicit `partialize` (Map() doesn't survive JSON roundtrip — exclude it).

---

## File layout

```
src/
  components/
    cards/        Card, KpiCell, KpiStrip, IncidentRow, IncidentsCard, HealthCard, GreetingCard
    chrome/      Topbar, Subhead, AlertRail, StatusPill, LangToggle, ThemeToggle
    icons/       Icon (sprite lookup), IconRoundel, IconTile, ThemeGlyph
    map/         LiveFleetMap, UnitMarkersLayer, MapDrawer, OffRouteMapDrawer, ParoMapDrawer
    login/       LiveEventsToday, FleetHeatmap, StagePanel
  data/          ws, wsCpu, useLiveUnits, useOffRouteLive, useParoAnomaly,
                 useGasEventsBbox, useFleetScorecard, useSitios, useGoogleMaps
  store/         theme, locale, empresa, maps, paro
  routes/        __root.tsx, hoy.tsx, login.tsx, preview.icons.tsx
  styles/        theme.css (Tailwind v4 @theme bridge)
```

3-300 pattern: max 300 lines per file, max 3 core functions per module.
One React component per file.

---

## Tailwind v4 token bridge

The repo uses Tailwind v4 with `@theme { ... }` mapping `--nx-*` and `--d-*`
CSS vars into utilities like `bg-nx-bg`, `text-d-fg-1`, `border-nx-border`.
Always use the utility classes, not raw `style={{ background: 'var(...)' }}`,
EXCEPT for cobalt blue accents where `--em-blue` isn't a Tailwind utility yet.

---

## Don'ts

- ❌ No emoji in product UI (the brand's playfulness comes from the icons).
- ❌ No gradients, no blur, no glassmorphism on cards.
- ❌ No animated decoration. Only functional motion (120–220ms,
  `cubic-bezier(0.22, 0.61, 0.36, 1)`).
- ❌ No third-party icon library.
- ❌ No off-the-shelf chart library bigger than `recharts/sparkline` —
  prefer hand-rolled SVG.
- ❌ No bottom sheets, no parallax, no carousel.
- ❌ No "Lorem ipsum". Use the bilingual short-string pattern.
