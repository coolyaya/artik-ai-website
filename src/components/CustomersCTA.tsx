import Section from './layout/Section';

export default function CustomersCTA(){
  return (
    <Section id="customers-cta">
      <div className="card" data-variant="wide-cta" style={{
        padding:'48px 28px',
        background:'radial-gradient(100% 120% at 10% 0%, rgba(124,92,255,.25), rgba(26,20,40,.9))',
        textAlign:'center'
      }}>
        <h2 className="h2">Automation for your customers</h2>
        <p className="lead">Onboard, support, and upsell with reliable AI experiences.</p>
        <div style={{marginTop:16}}>
          <a className="btn btn--primary btn--lg" href="#book" data-analytics-cta="customers-book-demo">
            Book a free demo
          </a>
        </div>
      </div>
    </Section>
  );
}
