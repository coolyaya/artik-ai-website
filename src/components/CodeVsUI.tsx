import Section from './layout/Section';

export default function CodeVsUI(){
  return (
    <Section id="code-ui">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div>
          <div className="kicker">Build the way you like</div>
          <h2 className="h2" style={{margin:'8px 0 12px'}}>Code when you need it, UI when you don't</h2>
          <p className="lead">Drag blocks for speed. Drop to TypeScript for power. The same runtime powers both, so there's no rewrite tax.</p>
          <div className="hr"></div>
          <ul style={{margin:0, paddingLeft:18, color:'var(--muted)'}}>
            <li>Serverless or self-hosted runners</li>
            <li>Versioned environments</li>
            <li>Observability, retries, and alerts</li>
          </ul>
        </div>
        <div className="card min-w-0" style={{minHeight:260, display:'flex', alignItems:'center', justifyContent:'center'}}>
          {/* Faux code mock */}
          <pre style={{width:'100%', background:'rgba(0,0,0,0.35)', borderRadius:12, padding:16, overflow:'auto'}}>
{`const run = async (input) => {
  const docs = await vector.search(input.query);
  const answer = await llm.generate({
    system: "Answer with citations.",
    context: docs,
    query: input.query,
  });
  return { answer, citations: docs.map(d => d.url) };
};`}
          </pre>
        </div>
      </div>
    </Section>
  );
}



