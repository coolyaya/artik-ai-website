import Section from './layout/Section';

export default function DarkFooter(){
  return (
    <footer style={{padding:'40px 0', borderTop:'1px solid var(--border)'}}>
      <div className="container" style={{display:'grid', gap:24, gridTemplateColumns:'2fr repeat(4,1fr)'}}>
        <div>
          <div className="badge">© {new Date().getFullYear()} Arktik AI</div>
          <p className="lead" style={{marginTop:8}}>Flexible AI automation for technical teams.</p>
        </div>
        {['Product','Solutions','Resources','Company'].map((h,i)=>(
          <div key={i} className="footer-col">
            <h4>{h}</h4>
            <a href="#">Overview</a>
            <a href="#">Docs</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
          </div>
        ))}
      </div>
    </footer>
  );
}

