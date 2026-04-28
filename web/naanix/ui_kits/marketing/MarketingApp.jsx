/* eslint-disable */
function MarketingNav() {
  return (
    <div style={{ display:'flex', alignItems:'center', gap:28, padding:'20px 40px', borderBottom:'1px solid #E5E5E5', background:'#fff', position:'sticky', top:0, zIndex:10 }}>
      <Logo height={22} />
      <div style={{ display:'flex', gap:24, fontSize:14, marginLeft:12 }}>
        <a style={{ color:'#111', textDecoration:'none', position:'relative', fontWeight:500 }}>Products
          <span style={{ position:'absolute', left:-4, right:-4, bottom:-4, height:8, background:'#E8EBFD', zIndex:-1, transform:'skew(-6deg)' }} />
        </a>
        <a style={{ color:'#111', textDecoration:'none' }}>Solutions</a>
        <a style={{ color:'#111', textDecoration:'none' }}>Studio</a>
        <a style={{ color:'#111', textDecoration:'none' }}>About</a>
        <a style={{ color:'#111', textDecoration:'none' }}>Help Desk</a>
      </div>
      <div style={{ flex:1 }} />
      <a style={{ color:'#111', textDecoration:'none', fontSize:14 }}>Partner Login</a>
      <Button variant="primary" size="sm">Contact<span style={{marginLeft:4}}>→</span></Button>
    </div>
  );
}

function Hero() {
  return (
    <section style={{ padding:'96px 40px 80px', position:'relative', overflow:'hidden' }}>
      <Eyebrow>Innovation & Technology Hub</Eyebrow>
      <h1 style={{ fontSize:'clamp(48px, 7vw, 92px)', lineHeight:1.02, fontWeight:700, letterSpacing:'-0.025em', margin:'12px 0 0', maxWidth:1000 }}>
        We build the <span style={{ background:'linear-gradient(transparent 55%, #E8EBFD 55%, #E8EBFD 92%, transparent 92%)', padding:'0 4px' }}>software, hardware</span> and spaces that make real places measurable.
      </h1>
      <p style={{ fontSize:19, color:'#525252', maxWidth:640, marginTop:22, lineHeight:1.55 }}>
        Software Solutions. Hardware Integration. Product Development.
        A multidisciplinary studio shipping real-time location platforms, partner portals, and playful interfaces since 2009.
      </p>
      <div style={{ display:'flex', gap:10, marginTop:28 }}>
        <Button variant="primary">See our products →</Button>
        <Button variant="secondary">Meet the studio</Button>
      </div>

      {/* Stats strip */}
      <div style={{ marginTop:64, display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:24, maxWidth:900 }}>
        {[
          { v:'20', l:'engineers' },
          { v:'15+', l:'years building' },
          { v:'RTLS', l:'at the core' },
          { v:'∞', l:'curiosity' },
        ].map((s,i)=>(
          <div key={i} style={{ borderTop:'1px solid #E5E5E5', paddingTop:14 }}>
            <div style={{ fontSize:40, fontWeight:700, letterSpacing:'-0.02em', lineHeight:1 }}>{s.v}</div>
            <div style={{ fontSize:12, color:'#737373', marginTop:6, textTransform:'uppercase', letterSpacing:'0.08em', fontWeight:600 }}>{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Products() {
  const cards = [
    { name:'RTLS Everywhere', icon:'cube', desc:'Real-time location analytics for any workplace, campus, or venue.', flag:'flagship' },
    { name:'YANTRA Studio', icon:'honeycomb', desc:'Our in-house design practice — industrial, digital, and brand work.' },
    { name:'Help Desk', icon:'survey', desc:'Partner-facing support portal with SLAs, tickets, and knowledge base.' },
    { name:'Games', icon:'interaction', desc:'Game-engine work — interactive installations and training sims.' },
    { name:'Hardware', icon:'plug', desc:'Antenna networks, sensor integration, and custom firmware.' },
    { name:'Product Dev', icon:'whiteboard', desc:'Discovery → prototype → production, end-to-end.' },
  ];
  return (
    <section style={{ padding:'80px 40px', background:'#FAFAFA', borderTop:'1px solid #E5E5E5' }}>
      <Eyebrow>Our products</Eyebrow>
      <h2 style={{ fontSize:42, fontWeight:700, letterSpacing:'-0.02em', margin:'8px 0 32px', maxWidth:600 }}>A hub, not a catalogue.</h2>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:16 }}>
        {cards.map(c=>(
          <div key={c.name} style={{ position:'relative', background:'#fff', border:'1px solid #E5E5E5', borderRadius:12, padding:24, minHeight:170, display:'flex', flexDirection:'column', gap:12 }}>
            <EmIcon name={c.icon} size={28} />
            {c.flag && <div style={{ position:'absolute', top:18, right:18 }}><Tag>{c.flag}</Tag></div>}
            <div style={{ fontSize:20, fontWeight:600, marginTop:6 }}>{c.name}</div>
            <div style={{ fontSize:14, color:'#525252', lineHeight:1.5 }}>{c.desc}</div>
            <div style={{ flex:1 }} />
            <a style={{ fontSize:13, color:'#111', fontWeight:500, textDecoration:'none', display:'inline-flex', alignItems:'center', gap:6 }}>Explore <UIIcon name="arrow-right" size={14} /></a>
          </div>
        ))}
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n:'01', t:'Listen', d:'We start with the space, the team, and the data you already have.' },
    { n:'02', t:'Sketch', d:'Hand-drawn flows, then clickable prototypes — fast, cheap, wrong fast.' },
    { n:'03', t:'Build', d:'Software and hardware together. We don\u2019t throw it over the wall.' },
    { n:'04', t:'Measure', d:'Instrument the thing we built. Revise based on what it actually does.' },
  ];
  return (
    <section style={{ padding:'80px 40px' }}>
      <div style={{ display:'flex', alignItems:'baseline', gap:14 }}>
        <Eyebrow>How we work</Eyebrow>
        <Tag>no kickoff decks</Tag>
      </div>
      <h2 style={{ fontSize:42, fontWeight:700, letterSpacing:'-0.02em', margin:'8px 0 32px', maxWidth:600 }}>Four steps. Repeated.</h2>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:24 }}>
        {steps.map(s=>(
          <div key={s.n}>
            <div style={{ fontFamily:'JetBrains Mono, monospace', fontSize:12, color:'#737373' }}>{s.n}</div>
            <div style={{ fontSize:24, fontWeight:600, marginTop:4, letterSpacing:'-0.01em' }}>{s.t}</div>
            <div style={{ width:40, height:2, background:'#111', margin:'10px 0 14px' }} />
            <div style={{ fontSize:14, color:'#525252', lineHeight:1.55 }}>{s.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section style={{ background:'#111', color:'#fff', padding:'80px 40px' }}>
      <Eyebrow style={{ color:'#A3A3A3' }}>Let\u2019s build something</Eyebrow>
      <h2 style={{ fontSize:'clamp(36px, 5vw, 64px)', fontWeight:700, letterSpacing:'-0.02em', margin:'10px 0 0', maxWidth:900, lineHeight:1.05 }}>
        If it\u2019s a space, a signal, or a screen — we probably have a <span style={{ background:'#E8EBFD', color:'#111', padding:'0 8px' }}>note</span> about it already.
      </h2>
      <div style={{ display:'flex', gap:10, marginTop:28 }}>
        <Button variant="yellow">Start a project</Button>
        <Button variant="ghost" style={{ color:'#fff', borderColor:'#525252' }}>Tour the platform</Button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ padding:'40px 40px', background:'#111', color:'#A3A3A3', fontSize:13, borderTop:'1px solid #262626', display:'flex', alignItems:'center', gap:20 }}>
      <Logo height={18} variant="white" />
      <span style={{ flex:1 }} />
      <span>© elevenminds · since 2009</span>
      <a style={{ color:'#A3A3A3', textDecoration:'none' }}>Help Desk</a>
      <a style={{ color:'#A3A3A3', textDecoration:'none' }}>Partner Login</a>
    </footer>
  );
}

function MarketingApp() {
  return (
    <div style={{ background:'#fff' }}>
      <MarketingNav />
      <Hero />
      <Products />
      <Process />
      <CTA />
      <Footer />
    </div>
  );
}

Object.assign(window, { MarketingNav, Hero, Products, Process, CTA, Footer, MarketingApp });
