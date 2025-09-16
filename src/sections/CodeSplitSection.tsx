import React from "react";

const jsSnippet = `import { Flow } from 'artikai';

const flow = new Flow()
  .input('customerMessage')
  .llm({ model: 'gpt-4o', system: 'You are helpful.' })
  .if(({ sentiment }) => sentiment === 'negative', (f) =>
    f.route('priority_support')
  )
  .send('slack', { channel: '#support' });

await flow.run();`;

const pySnippet = `from artikai import Flow

flow = (
  Flow()
  .input('customerMessage')
  .llm(model='gpt-4o', system='You are helpful.')
  .when(lambda s: s['sentiment'] == 'negative', lambda f: f.route('priority_support'))
  .send('slack', channel='#support')
)

flow.run()`;

export default function CodeSplitSection() {
  const [tab, setTab] = React.useState<"js" | "py">("js");

  return (
    <section className="py-16 md:py-24" aria-label="Code examples">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Code where it counts</h2>
          <p className="mt-3 text-base md:text-lg text-white/80">
            Blend visual workflow design with real code. Tabs let you switch between JavaScript and Python.
          </p>
          <ul className="mt-6 space-y-2 text-white/80">
            <li className="flex items-start gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" /> Type-safe SDKs</li>
            <li className="flex items-start gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" /> Retry, logs, and observability</li>
            <li className="flex items-start gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" /> Works with your stack</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur shadow-[0_0_0_1px_rgba(255,255,255,0.04)] p-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setTab("js")}
              className={
                (tab === "js" ? "bg-cyan-500 text-black" : "bg-white/5 text-white/80") +
                " px-3 py-1.5 rounded-full text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              }
              aria-pressed={tab === "js"}
            >
              JavaScript
            </button>
            <button
              onClick={() => setTab("py")}
              className={
                (tab === "py" ? "bg-cyan-500 text-black" : "bg-white/5 text-white/80") +
                " px-3 py-1.5 rounded-full text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              }
              aria-pressed={tab === "py"}
            >
              Python
            </button>
          </div>
          <div className="mt-3 rounded-xl border border-white/10 bg-black/60 p-4">
            <pre className="text-sm font-mono text-white/90 overflow-auto"><code>{tab === "js" ? jsSnippet : pySnippet}</code></pre>
          </div>
        </div>
      </div>
    </section>
  );
}

