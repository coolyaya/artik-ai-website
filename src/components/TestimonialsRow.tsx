import Section from './layout/Section';

const quotes = [
  { q:'We automated the boring parts and focused on customers.', a:'Head of Ops' },
  { q:'Rollouts are safer and faster now.', a:'Eng Manager' },
  { q:'We finally unified data access for agents.', a:'Support Lead' },
  { q:'A 10x improvement in iteration speed.', a:'Founder' },
];

export default function TestimonialsRow(){
  return (
    <Section id="testimonials">
      <div className="grid" style={{gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))'}}>
        {quotes.map((t,i)=>(
          <figure key={i} className="card" style={{minHeight:120}}>
            <blockquote style={{margin:0}}>{t.q}</blockquote>
            <figcaption className="lead" style={{marginTop:10}}>— {t.a}</figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

