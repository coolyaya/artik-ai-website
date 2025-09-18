import Section from './layout/Section';

const cases = [
  { logo:'ACME', title:'Saved 200h/mo', blurb:'Swapped manual triage for AI workflows that route and resolve.' },
  { logo:'Globex', title:'2 weeks â†’ 2 days', blurb:'Cut onboarding build times with reusable components.' },
];

export default function CaseStudies(){
  return (
    <Section id="case-studies">
      <h2 className="h2" style={{textAlign:'center', marginBottom:20}}>Case Studies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {cases.map((c,i)=>(
          <article key={i} className="card min-w-0">
            <div className="badge">{c.logo}</div>
            <h3 style={{margin:'10px 0 6px', fontSize:18}}>{c.title}</h3>
            <p className="lead">{c.blurb}</p>
            <a className="btn btn--sm btn--ghost" href="#">Read more â†’</a>
          </article>
        ))}
      </div>
    </Section>
  );
}

