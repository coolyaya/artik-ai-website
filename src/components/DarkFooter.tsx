export default function DarkFooter(){
  const companyName = 'ArtikAi';
  const year = new Date().getFullYear();

  return (
    <footer style={{padding:'40px 0', borderTop:'1px solid var(--border)'}}>
      <div className="container" style={{display:'grid', gap:24, gridTemplateColumns:'2fr repeat(4,1fr)'}}>
        <div>
          <div className="badge">© {year} {companyName}</div>
          <p className="lead" style={{marginTop:8}}>Flexible AI automation for technical teams.</p>
        </div>
        {['Product','Solutions','Resources','Company'].map((h,i)=>(
          <div key={i} className="footer-col">
            <h4>{h}</h4>
            <a href="#">Overview</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
          </div>
        ))}
      </div>
    </footer>
  );
}


