import { Zap, MessageSquare, Code2 } from 'lucide-react';
import Section from './layout/Section';

const items = [
  { icon: <Zap size={18}/>,  title: 'Run AI workflows', copy: 'Automate ops with reliable, observable flows triggered by webhooks, forms, or schedules.' },
  { icon: <MessageSquare size={18}/>, title: 'Chat with your data', copy: 'Connect your KB, files, or DBs and let models answer with citations and guardrails.' },
  { icon: <Code2 size={18}/>, title: 'Ship UIs or just code', copy: 'Start with simple UI blocks. When you need control, drop to code without rewrites.' }
];

export default function FeatureTriad(){
  return (
    <Section id="features">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it,i)=>(
          <div key={i} className="card min-w-0">
            <div className="badge">{it.icon}<span>Feature</span></div>
            <h3 style={{margin:'10px 0 6px', fontSize:20}}>{it.title}</h3>
            <p className="lead">{it.copy}</p>
            <div style={{marginTop:16}}>
              <button className="btn btn--sm btn--ghost">Explore feature</button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

