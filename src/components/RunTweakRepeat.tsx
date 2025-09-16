import Section from './layout/Section';

export default function RunTweakRepeat(){
  return (
    <Section id="iterate">
      <div style={{textAlign:'center'}}>
        <div className="kicker">Ship. Learn. Improve.</div>
        <h2 className="h2" style={{marginTop:8}}>Run. Tweak. Repeat.</h2>
        <p className="lead">Launch quickly, watch metrics, and iterate with safe rollouts.</p>
      </div>
      <div className="grid grid-3" style={{marginTop:24}}>
        {[
          { icon: '🚀', text:'Launch flows with one click' },
          { icon: '📈', text:'Trace and measure responses' },
          { icon: '🧪', text:'A/B test prompts & tools' },
        ].map((s,i)=>(
          <div key={i} className="card">
            <div className="badge" style={{marginBottom:8}}><span>{s.icon}</span><span>Step</span></div>
            {s.text}
          </div>
        ))}
      </div>
    </Section>
  );
}
