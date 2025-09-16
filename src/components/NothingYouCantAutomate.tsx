import Section from './layout/Section';

export default function NothingYouCantAutomate(){
  return (
    <Section id="no-limits">
      <div className="card" data-variant="wide-cta" style={{
        padding:'44px 28px',
        background:'radial-gradient(120% 140% at 90% -10%, rgba(255,77,157,.25), rgba(26,20,40,.92))',
        textAlign:'center'
      }}>
        <h2 className="h2">There’s nothing you can’t automate</h2>
        <p className="lead">If it has an API or a webhook, we can orchestrate it.</p>
        <div style={{marginTop:16}}>
          <a className="btn btn--ghost btn--lg" href="#contact">Talk to sales</a>
        </div>
      </div>
    </Section>
  );
}
