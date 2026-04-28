/* eslint-disable */
// Shared React components for elevenminds UI kits.
// Global window-mounted so both platform/ and marketing/ can import.

const { useState } = React;

// ---------- EmIcon ----------
// Three states:
//   rest       — gray roundel, ink strokes
//   annotated  — gray roundel + 2px cobalt ring (flags selection / attention)
//   active     — ink roundel, white strokes (negative)
function EmIcon({ name, size = 24, active = false, annotated = false, stroke = '#111', className = '', style = {} }) {
  const iconStroke = active ? '#fff' : stroke;
  return (
    <span className={`em-icon ${className}`} style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: size * 1.55, height: size * 1.55, borderRadius: '50%',
      background: active ? '#111' : '#E5E5E5', position: 'relative',
      boxShadow: annotated && !active ? '0 0 0 2px #2847E0' : 'none',
      ...style,
    }}>
      <svg width={size} height={size} style={{ color: iconStroke }}>
        <use href={`../../assets/em-icons.svg#em-${name}`} />
      </svg>
    </span>
  );
}

// ---------- UIIcon (line icons in body copy) ----------
function UIIcon({ name, size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} style={{ color, verticalAlign: 'middle' }}>
      <use href={`../../assets/em-icons.svg#em-${name}`} />
    </svg>
  );
}

// ---------- Button ----------
function Button({ variant = 'primary', size = 'md', children, onClick, disabled, style = {} }) {
  const base = {
    fontFamily: 'inherit', fontWeight: 500, border: '1px solid transparent',
    borderRadius: size === 'sm' ? 6 : 8,
    padding: size === 'sm' ? '6px 10px' : '10px 16px',
    fontSize: size === 'sm' ? 12 : 14, lineHeight: 1, cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1, transition: 'transform 120ms, background 220ms',
    display: 'inline-flex', alignItems: 'center', gap: 6,
  };
  const variants = {
    primary:   { background: '#111', color: '#fff' },
    secondary: { background: '#fff', color: '#111', borderColor: '#D4D4D4' },
    ghost:     { background: 'transparent', color: '#111' },
    yellow:    { background: '#2847E0', color: '#fff', borderColor: '#2847E0' },  // legacy alias → blue
    blue:      { background: '#2847E0', color: '#fff', borderColor: '#2847E0' },
    danger:    { background: '#D7263D', color: '#fff' },
  };
  return <button style={{ ...base, ...variants[variant], ...style }} onClick={onClick} disabled={disabled}>{children}</button>;
}

// ---------- Card ----------
function Card({ children, style = {}, pad = 16, hover = false }) {
  return (
    <div style={{
      background: '#fff', border: '1px solid #E5E5E5', borderRadius: 8,
      padding: pad, boxShadow: '0 1px 2px rgba(17,17,17,.06)', ...style,
    }}>{children}</div>
  );
}

// ---------- Tag (small outline label, ink-on-white) ----------
// Replaces the old yellow cursive "sticky" badge — same slot, neutral styling.
function Tag({ children, style = {} }) {
  return (
    <span style={{
      border: '1px solid #111', color: '#111', background: '#fff',
      padding: '2px 8px', borderRadius: 3,
      fontFamily: 'inherit', fontWeight: 500,
      fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase',
      display: 'inline-block', lineHeight: 1.4, ...style,
    }}>{children}</span>
  );
}

// ---------- Chip ----------
function Chip({ children, tone = 'default', active = false, onClick }) {
  const tones = {
    default: { background: '#fff', color: '#111', border: '1px solid #D4D4D4' },
    ink:     { background: '#111', color: '#fff', border: '1px solid #111' },
    yellow:  { background: '#E8EBFD', color: '#1C33B8', border: '1px solid #2847E0' },  // legacy alias → blue tint
    blue:    { background: '#E8EBFD', color: '#1C33B8', border: '1px solid #2847E0' },
    success: { background: '#E8F4EE', color: '#2E8B57', border: '1px solid #2E8B57' },
    danger:  { background: '#FBEBED', color: '#D7263D', border: '1px solid #D7263D' },
  };
  return (
    <span onClick={onClick} style={{
      fontSize: 12, padding: '4px 10px', borderRadius: 999, cursor: onClick ? 'pointer' : 'default',
      ...(active ? tones.ink : tones[tone]),
    }}>{children}</span>
  );
}

// ---------- Eyebrow / labels ----------
function Eyebrow({ children, style = {} }) {
  return <div style={{ fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#737373', fontWeight: 600, ...style }}>{children}</div>;
}

// ---------- Logo ----------
function Logo({ height = 22, variant = 'ink' }) {
  const src = variant === 'white' ? '../../assets/logo-elevenminds-white.svg' : '../../assets/logo-elevenminds.svg';
  return <img src={src} alt="elevenminds" style={{ height, display: 'block' }} />;
}

Object.assign(window, { EmIcon, UIIcon, Button, Card, Tag, Chip, Eyebrow, Logo });
