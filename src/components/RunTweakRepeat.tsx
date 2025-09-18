﻿import Section from './layout/Section';

export default function RunTweakRepeat(){
  return (
    <Section id="iterate">
      <div style={{textAlign:'center'}}>
        <div className="kicker">Ship. Learn. Improve.</div>
        <h2 className="h2" style={{marginTop:8}}>Run. Tweak. Repeat.</h2>
        <p className="lead">Launch quickly, watch metrics, and iterate with safe rollouts.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{marginTop:24}}>
        {[
          { icon: 'ðŸš€', text:'Launch flows with one click' },
          { icon: 'ðŸ“ˆ', text:'Trace and measure responses' },
          { icon: 'ðŸ§ª', text:'A/B test prompts & tools' },
        ].map((s,i)=>(
          <div key={i} className="card min-w-0">
            <div className="badge" style={{marginBottom:8}}><span>{s.icon}</span><span>Step</span></div>
            {s.text}
          </div>
        ))}
      </div>
    </Section>
  );
}


