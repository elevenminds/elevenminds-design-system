/* eslint-disable */
function PlatformApp() {
  const [screen, setScreen] = React.useState('dashboard');
  const [selectedRoom, setSelectedRoom] = React.useState('A2');

  const rows = [
    { name: 'Lab',       icon: 'desk',   type: 'I:Owned',   capacity: 6,  occupancy: 80, m2: 8.2,  status: 'Active',  statusTone: 'success' },
    { name: 'Conf 2E',   icon: 'cube',   type: 'We:Shared', capacity: 12, occupancy: 95, m2: 2.4,  status: 'Peak',    statusTone: 'yellow'  },
    { name: 'Quiet',     icon: 'eye',    type: 'I:Shared',  capacity: 4,  occupancy: 30, m2: 4.1,  status: 'Active',  statusTone: 'success' },
    { name: 'Team Area', icon: 'seat',   type: 'We:Owned',  capacity: 18, occupancy: 60, m2: 5.6,  status: 'Active',  statusTone: 'success' },
    { name: 'Café',      icon: 'coffee', type: 'We:Shared', capacity: 20, occupancy: 45, m2: 3.3,  status: 'Active',  statusTone: 'success' },
    { name: 'Phone',     icon: 'phone',  type: 'I:Shared',  capacity: 2,  occupancy: 10, m2: 2.0,  status: 'Idle',    statusTone: 'default' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#FAFAFA' }}>
      <PlatformNav active={screen === 'dashboard' ? 'analytics' : 'spaces'} onNav={(id) => setScreen(id === 'spaces' ? 'spaces' : 'dashboard')} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '24px 22px' }}>
        {/* Breadcrumb + title */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 4 }}>
          <Eyebrow>RTLS Everywhere · Floor 2E</Eyebrow>
          <Tag>live</Tag>
        </div>
        <div style={{ display: 'flex', alignItems: 'end', gap: 14, marginBottom: 20 }}>
          <h1 style={{ fontSize: 32, fontWeight: 700, letterSpacing: '-0.02em', margin: 0 }}>Workplace analytics</h1>
          <div style={{ flex: 1 }} />
          <Chip tone="default"><span style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}><UIIcon name="arrow-right" size={12} color="#525252"/>Last 7 days</span></Chip>
          <Button variant="secondary" size="sm">Export</Button>
          <Button variant="primary" size="sm">+ New report</Button>
        </div>

        {/* KPI row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 20 }}>
          <MetricCard label="Occupancy" value="72%" delta="4% vs last week" deltaTone="up" sub="Mon–Fri, 7am–6pm" />
          <MetricCard label="Utilization" value="58%" delta="2%" deltaTone="up" sub="384 of 660 seats" flag="peak 2–4pm" />
          <MetricCard label="ft² / person" value="142" delta="8" deltaTone="down" sub="Target: 160" />
          <MetricCard label="Visits today" value="412" delta="38" deltaTone="up" sub="Across 12 antennas" />
        </div>

        {/* Two-col */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 16, marginBottom: 20 }}>
          <Card pad={18}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
              <div>
                <Eyebrow>Utilization by hour</Eyebrow>
                <div style={{ fontSize: 18, fontWeight: 600, marginTop: 2 }}>Floor 2E · Thursday</div>
              </div>
              <div style={{ flex: 1 }} />
              <Chip tone="yellow" active={false}>Hourly</Chip>
              <span style={{ width: 6 }} />
              <Chip>Daily</Chip>
              <span style={{ width: 6 }} />
              <Chip>Weekly</Chip>
            </div>
            <UtilizationChart />
          </Card>

          <Card pad={18}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
              <div>
                <Eyebrow>Floor map</Eyebrow>
                <div style={{ fontSize: 18, fontWeight: 600, marginTop: 2 }}>Live occupancy</div>
              </div>
              <div style={{ flex: 1 }} />
              <span style={{ fontSize: 11, color: '#737373', fontFamily: 'JetBrains Mono, monospace' }}>click a room →</span>
            </div>
            <FloorMap selectedRoom={selectedRoom} onSelect={setSelectedRoom} />
            <div style={{ display: 'flex', gap: 14, marginTop: 10, fontSize: 11, color: '#525252' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ width: 10, height: 10, background: '#111', borderRadius: 2 }}/>high &gt;80%</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ width: 10, height: 10, background: '#737373', borderRadius: 2 }}/>med 50–80%</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ width: 10, height: 10, background: '#D4D4D4', borderRadius: 2 }}/>low &lt;50%</span>
            </div>
          </Card>
        </div>

        {/* Table */}
        <Card pad={0}>
          <div style={{ padding: '14px 18px', display: 'flex', alignItems: 'center', borderBottom: '1px solid #F2F2F2' }}>
            <div>
              <Eyebrow>All spaces</Eyebrow>
              <div style={{ fontSize: 18, fontWeight: 600, marginTop: 2 }}>6 spaces · Floor 2E</div>
            </div>
            <div style={{ flex: 1 }} />
            <Chip active>All</Chip><span style={{ width: 6 }} />
            <Chip>We:Shared</Chip><span style={{ width: 6 }} />
            <Chip>I:Owned</Chip>
          </div>
          <div style={{ padding: '0 18px 14px' }}>
            <DataTable rows={rows} />
          </div>
        </Card>
      </div>
    </div>
  );
}

Object.assign(window, { PlatformApp });
