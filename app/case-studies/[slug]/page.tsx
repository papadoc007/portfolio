import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/data/projects";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

function FlowDiagram({ nodes }: { nodes: { label: string; sub: string }[] }) {
  return (
    <div className="flex flex-col gap-2 overflow-x-auto sm:flex-row sm:items-center">
      {nodes.map((n, i) => (
        <div key={n.label} className="flex flex-col items-center gap-2 sm:flex-row">
          <div className={`w-full min-w-40 rounded-lg border p-4 text-center sm:w-auto ${i === nodes.length - 1 ? "border-accent bg-accent-dim" : "border-border bg-panel"}`}>
            <p className="font-mono text-sm">{n.label}</p>
            <p className="mt-1 font-mono text-[11px] text-muted">{n.sub}</p>
          </div>
          {i < nodes.length - 1 ? (
            <span className="rotate-90 font-mono text-accent sm:rotate-0">→</span>
          ) : null}
        </div>
      ))}
    </div>
  );
}

function Scoreboard() {
  const rows = [
    { surface: "Prompt injection (direct + indirect)", models: "GPT · Claude · Gemini" },
    { surface: "Tool misuse", models: "GPT · Claude · Gemini" },
    { surface: "Permission boundaries", models: "GPT · Claude · Gemini" },
    { surface: "Workflow safety + negative controls", models: "GPT · Claude · Gemini" },
  ];
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-left text-sm">
        <thead className="bg-panel-2 font-mono text-[11px] uppercase tracking-wider text-muted">
          <tr>
            <th className="px-4 py-3">Attack surface</th>
            <th className="px-4 py-3">Model families</th>
            <th className="px-4 py-3">Verdict source</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border bg-panel">
          {rows.map((r) => (
            <tr key={r.surface}>
              <td className="px-4 py-3">{r.surface}</td>
              <td className="px-4 py-3 font-mono text-xs text-muted">{r.models}</td>
              <td className="px-4 py-3 font-mono text-xs text-accent">human-verified transcript</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default async function CaseStudyPage({ params }: PageProps<"/case-studies/[slug]">) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  return (
    <main className="mx-auto max-w-3xl px-5 py-16">
      <Link href="/#case-files" className="font-mono text-xs text-muted hover:text-accent">
        ← Back to case files
      </Link>

      <div className="mt-10 rounded-lg border border-border bg-panel">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-5 py-3">
          <span className="font-mono text-xs text-accent">CASE FILE {cs.fileNo}</span>
          <span className="font-mono text-[10px] uppercase tracking-wider text-muted">{cs.period}</span>
        </div>
        <div className="border-b border-border bg-panel-2 px-5 py-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
            ▚ {cs.classification}
          </span>
        </div>
        <div className="px-5 py-8">
          <h1 className="text-3xl font-medium sm:text-4xl">{cs.title}</h1>
          <p className="mt-3 text-lg leading-relaxed text-muted">{cs.subtitle}</p>
        </div>
      </div>

      <section className="mt-12 space-y-12">
        <div>
          <h2 className="mb-3 font-mono text-xs uppercase tracking-widest text-muted">Summary</h2>
          <p className="leading-relaxed">{cs.summary}</p>
        </div>

        {cs.flow ? (
          <div>
            <h2 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">
              Flow of funds
            </h2>
            <FlowDiagram nodes={cs.flow} />
          </div>
        ) : null}
        {cs.slug === "red-teaming-frontier-llm-agents" ? (
          <div>
            <h2 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">
              Evaluation matrix
            </h2>
            <Scoreboard />
          </div>
        ) : null}

        <div>
          <h2 className="mb-3 font-mono text-xs uppercase tracking-widest text-muted">Method</h2>
          <ul className="space-y-2">
            {cs.method.map((m) => (
              <li key={m} className="text-sm leading-relaxed text-muted">
                <span className="text-accent">▸</span> {m}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">Findings</h2>
          <div className="overflow-hidden rounded-lg border border-border">
            <table className="w-full text-left text-sm">
              <tbody className="divide-y divide-border bg-panel">
                {cs.findings.map((f) => (
                  <tr key={f.label}>
                    <td className="w-1/3 px-4 py-3 font-mono text-xs uppercase tracking-wider text-muted">
                      {f.label}
                    </td>
                    <td className="px-4 py-3">{f.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="mb-3 font-mono text-xs uppercase tracking-widest text-muted">Deliverables</h2>
          <ul className="space-y-2">
            {cs.deliverables.map((d) => (
              <li key={d} className="text-sm leading-relaxed text-muted">
                <span className="text-accent">▸</span> {d}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
