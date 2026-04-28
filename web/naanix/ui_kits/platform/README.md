# Platform UI kit

Dashboard-facing surfaces for the elevenminds platform family (RTLS Everywhere, partner portals, workplace analytics).

## Files
- `index.html` — interactive demo (top nav + analytics dashboard with live floor map)
- `PlatformNav.jsx` — top navigation with cobalt highlight indicator
- `PlatformWidgets.jsx` — `MetricCard`, `UtilizationChart`, `FloorMap`, `DataTable`
- `PlatformApp.jsx` — composition of the dashboard screen

## Shared
- `../_shared.jsx` — `EmIcon`, `UIIcon`, `Button`, `Card`, `Tag`, `Chip`, `Eyebrow`, `Logo`

Open `index.html` to click around. The floor-map rooms are interactive; chips + buttons reflect the design-system tokens in `../../colors_and_type.css`.
