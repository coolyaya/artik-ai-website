import { useState } from 'react';
import Section from './layout/Section';

type Logo = { src: string; alt: string; label?: string };

const logos: Logo[] = [
  { src: '/integrations/openai-color.svg',       alt: 'OpenAI' },
  { src: '/integrations/slack-color.svg',        alt: 'Slack' },
  { src: '/integrations/notion-color.svg',       alt: 'Notion' },
  { src: '/integrations/google-drive-color.svg', alt: 'Google Drive', label: 'Drive' },
  { src: '/integrations/airtable-color.svg',     alt: 'Airtable' },
  { src: '/integrations/zapier-color.svg',       alt: 'Zapier' },
];

function Chip({ src, alt, label }: Logo) {
  const [errored, setErrored] = useState(false);
  const monogram = (label ?? alt ?? '?').trim().slice(0, 2).toUpperCase();

  return (
    <div className="chip" title={alt}>
      {!errored ? (
        <img
          src={src}
          alt={alt}
          className="chip__logo"
          onError={() => setErrored(true)}
        />
      ) : (
        <span className="chip__mono">{monogram}</span>
      )}
      <div className="chip__label">{label ?? alt}</div>
    </div>
  );
}

export default function IntegrationsStrip(){
  return (
    <Section id="integrations">
      <div style={{textAlign:'center', marginBottom:16}}>
        <div className="kicker">Plug AI into your data</div>
        <h2 className="h2" style={{marginTop:8}}>500+ integrations</h2>
        <p className="lead">Databases, SaaS tools, clouds, and APIs—mix and match without glue code.</p>
      </div>

      <div className="integrations-grid">
        {logos.map((l,i)=>( <Chip key={i} {...l} /> ))}
      </div>
    </Section>
  );
}

