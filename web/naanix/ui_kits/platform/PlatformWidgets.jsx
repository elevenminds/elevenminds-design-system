/* eslint-disable */
function MetricCard({ label, value, delta, deltaTone = 'up', sub, flag }) {
  const color = deltaTone === 'up' ? '#2E8B57' : '#D7263D';
  const arrow = deltaTone === 'up' ? '↑' : '↓';
  return (
    <div style={{ position: 'relative', background: '#fff', border: '1px solid #E5E5E5', borderRadius: 8, padding: 16, boxShadow: '0 1px 2px rgba(17,17,17,.06)' }}>
      {flag && <div style={{ position: 'absolute', top: 10, right: 12 }}><Tag>{flag}</Tag></div>}
      <Eyebrow>{label}</Eyebrow>
      <div style={{ fontSize: 36, fontWeight: 700, letterSpacing: '-0.02em', marginTop: 4, lineHeight: 1.05 }}>{value}</div>
      {delta && <div style={{ fontSize: 12, color, fontFamily: 'JetBrains Mono, monospace', marginTop: 4 }}>{arrow} {delta}</div>}
      {sub && <div style={{ fontSize: 12, color: '#525252', marginTop: 2 }}>{sub}</div>}
    </div>
  );
}

// Inline bar chart using SVG
function UtilizationChart() {
  const hours = ['7','8','9','10','11','12','13','14','15','16','17','18'];
  const values = [12, 28, 54, 68, 72, 58, 44, 78, 82, 74, 60, 30];
  const W = 440, H = 140, pad = 24;
  const max = 100;
  const bw = (W - pad * 2) / values.length - 6;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: 'block' }}>
      {[0, 25, 50, 75, 100].map(v => {
        const y = H - pad - ((H - pad * 2) * v) / max;
        return (
          <g key={v}>
            <line x1={pad} y1={y} x2={W - pad} y2={y} stroke="#E5E5E5" strokeWidth="1" strokeDasharray={v === 0 ? 'none' : '2 3'} />
            <text x={pad - 6} y={y + 3} fontSize="9" fill="#737373" textAnchor="end" fontFamily="JetBrains Mono, monospace">{v}</text>
          </g>
        );
      })}
      {values.map((v, i) => {
        const x = pad + i * ((W - pad * 2) / values.length) + 3;
        const h = ((H - pad * 2) * v) / max;
        const peak = i === 8;
        return (
          <g key={i}>
            <rect x={x} y={H - pad - h} width={bw} height={h} fill={peak ? '#111' : '#D4D4D4'} rx="2" />
            <text x={x + bw / 2} y={H - pad + 12} fontSize="9" fill="#737373" textAnchor="middle" fontFamily="JetBrains Mono, monospace">{hours[i]}</text>
          </g>
        );
      })}
    </svg>
  );
}

function FloorMap({ selectedRoom, onSelect }) {
  // Simple floorplan with clickable rooms
  const rooms = [
    { id: 'A1', x: 20, y: 20, w: 90, h: 70, label: 'Lab', util: 0.8 },
    { id: 'A2', x: 120, y: 20, w: 120, h: 70, label: 'Conf 2E', util: 0.95 },
    { id: 'A3', x: 250, y: 20, w: 90, h: 70, label: 'Quiet', util: 0.3 },
    { id: 'B1', x: 20, y: 100, w: 140, h: 80, label: 'Team Area', util: 0.6 },
    { id: 'B2', x: 170, y: 100, w: 80, h: 80, label: 'Café', util: 0.45 },
    { id: 'B3', x: 260, y: 100, w: 80, h: 80, label: 'Phone', util: 0.1 },
  ];
  const color = u => u > 0.8 ? '#111' : u > 0.5 ? '#737373' : '#D4D4D4';
  return (
    <svg viewBox="0 0 360 200" width="100%" style={{ display: 'block', border: '1px solid #E5E5E5', borderRadius: 8, background: '#FAFAFA' }}>
      {rooms.map(r => (
        <g key={r.id} onClick={() => onSelect?.(r.id)} style={{ cursor: 'pointer' }}>
          <rect x={r.x} y={r.y} width={r.w} height={r.h} fill={color(r.util)} opacity={selectedRoom === r.id ? 1 : 0.9}
                stroke={selectedRoom === r.id ? '#2847E0' : '#fff'} strokeWidth={selectedRoom === r.id ? 3 : 1} rx="3" />
          <text x={r.x + r.w / 2} y={r.y + r.h / 2 + 4} fill="#fff" fontSize="11" fontWeight="600" textAnchor="middle">{r.label}</text>
          <text x={r.x + r.w / 2} y={r.y + r.h / 2 + 18} fill="#fff" fontSize="10" textAnchor="middle" fontFamily="JetBrains Mono, monospace">{Math.round(r.util * 100)}%</text>
        </g>
      ))}
    </svg>
  );
}

function DataTable({ rows }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
      <thead>
        <tr style={{ borderBottom: '1px solid #E5E5E5' }}>
          {['Space', 'Type', 'Capacity', 'Occupancy', 'm²/user', 'Status'].map(h => (
            <th key={h} style={{ padding: '10px 8px', textAlign: h === 'Space' ? 'left' : 'right', fontWeight: 600, color: '#525252', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} style={{ borderBottom: '1px solid #F2F2F2' }}>
            <td style={{ padding: '10px 8px', fontWeight: 500 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <EmIcon name={r.icon} size={14} />
                {r.name}
              </span>
            </td>
            <td style={{ padding: '10px 8px', textAlign: 'right', color: '#525252' }}>{r.type}</td>
            <td style={{ padding: '10px 8px', textAlign: 'right', fontFamily: 'JetBrains Mono, monospace' }}>{r.capacity}</td>
            <td style={{ padding: '10px 8px', textAlign: 'right', fontFamily: 'JetBrains Mono, monospace' }}>{r.occupancy}%</td>
            <td style={{ padding: '10px 8px', textAlign: 'right', fontFamily: 'JetBrains Mono, monospace', color: '#525252' }}>{r.m2}</td>
            <td style={{ padding: '10px 8px', textAlign: 'right' }}>
              <Chip tone={r.statusTone}>{r.status}</Chip>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Object.assign(window, { MetricCard, UtilizationChart, FloorMap, DataTable });
