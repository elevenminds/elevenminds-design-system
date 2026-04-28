/* eslint-disable */
// Top nav used across platform screens
const { useState: useStateNav } = React;

function PlatformNav({ active = 'analytics', onNav }) {
  const items = [
    { id: 'analytics', label: 'Analytics' },
    { id: 'spaces', label: 'Spaces' },
    { id: 'devices', label: 'Devices' },
    { id: 'reports', label: 'Reports' },
    { id: 'settings', label: 'Settings' },
  ];
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 22, padding: '14px 22px', borderBottom: '1px solid #E5E5E5', background: '#fff' }}>
      <Logo height={20} />
      <div style={{ width: 1, height: 22, background: '#E5E5E5' }} />
      <div style={{ display: 'flex', gap: 2 }}>
        {items.map(it => (
          <div key={it.id} onClick={() => onNav?.(it.id)} style={{
            position: 'relative', padding: '6px 10px', fontSize: 13, cursor: 'pointer',
            color: active === it.id ? '#111' : '#525252', fontWeight: active === it.id ? 600 : 500,
          }}>
            {it.label}
            {active === it.id && (
              <span style={{ position: 'absolute', left: 4, right: 4, bottom: -2, height: 8, background: '#2847E0', zIndex: -1, transform: 'skew(-6deg)' }} />
            )}
          </div>
        ))}
      </div>
      <div style={{ flex: 1 }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, border: '1px solid #E5E5E5', borderRadius: 8, padding: '6px 10px', width: 220 }}>
        <UIIcon name="search" size={16} color="#737373" />
        <input placeholder="Search space, floor, device…" style={{ border: 'none', outline: 'none', fontSize: 13, fontFamily: 'inherit', width: '100%' }} />
      </div>
      <UIIcon name="bell" size={20} color="#525252" />
      <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#111', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 600 }}>AM</div>
    </div>
  );
}

Object.assign(window, { PlatformNav });
