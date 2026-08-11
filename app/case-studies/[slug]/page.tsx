import Link from "next/link";
import { notFound } from "next/navigation";
import type { CaseStudy, Tone } from "@/data/projects";
import { caseStudies } from "@/data/projects";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

const toneText: Record<Tone, string> = {
  neutral: "text-foreground",
  ok: "text-ok",
  warn: "text-warn",
  danger: "text-danger",
};
const toneBorder: Record<Tone, string> = {
  neutral: "border-border",
  ok: "border-ok/40",
  warn: "border-warn/40",
  danger: "border-danger/40",
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 border-b border-border pb-2 font-mono text-xs uppercase tracking-widest text-muted">
      {children}
    </h2>
  );
}

function StatTiles({ stats }: { stats: NonNullable<CaseStudy["stats"]> }) {
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="flex flex-col gap-1 border border-border bg-panel-low p-3 transition-colors hover:border-accent"
        >
          <span className="font-mono text-[11px] uppercase tracking-wider text-muted">{s.label}</span>
          <span className={`text-xl font-medium ${toneText[s.tone ?? "neutral"]}`}>{s.value}</span>
        </div>
      ))}
    </div>
  );
}

function FlowDiagram({ nodes }: { nodes: NonNullable<CaseStudy["flow"]> }) {
  return (
    <div className="flex flex-col gap-2 overflow-x-auto sm:flex-row sm:items-center">
      {nodes.map((n, i) => (
        <div key={n.label} className="flex flex-col items-center gap-2 sm:flex-row">
          <div
            className={`w-full min-w-40 rounded-lg border p-4 text-center sm:w-auto ${
              i === nodes.length - 1 ? "border-accent bg-accent-dim" : "border-border bg-panel"
            }`}
          >
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

function Targets({ targets }: { targets: NonNullable<CaseStudy["targets"]> }) {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
      {targets.map((t) => (
        <div key={t.name} className="relative border border-border bg-panel p-5 transition-colors hover:border-accent">
          <span className="absolute right-0 top-0 bg-panel-2 px-2 py-1 font-mono text-[11px] text-muted">
            {t.tag}
          </span>
          <h3 className="font-medium">{t.name}</h3>
          <p className="mt-2 text-sm text-muted">{t.note}</p>
        </div>
      ))}
    </div>
  );
}

function Vectors({ vectors }: { vectors: NonNullable<CaseStudy["vectors"]> }) {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      {vectors.map((v) => (
        <div key={v.no} className={`flex flex-col justify-between border bg-panel p-5 ${toneBorder[v.tone]}`}>
          <div>
            <span className={`mb-2 block font-mono text-[11px] ${toneText[v.tone]}`}>&gt; {v.no}</span>
            <h3 className="text-lg font-medium">{v.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{v.desc}</p>
          </div>
          {v.tags ? (
            <div className="mt-4 flex gap-2">
              {v.tags.map((tag) => (
                <span key={tag} className="rounded-sm bg-panel-2 px-2 py-1 font-mono text-[11px] text-muted">
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default async function CaseStudyPage({ params }: PageProps<"/case-studies/[slug]">) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  return (
    <main className="mx-auto max-w-5xl px-5 py-16">
      <Link href="/#case-files" className="font-mono text-xs text-muted hover:text-accent">
        ← Back to case files
      </Link>

      {/* Header */}
      <header className="relative mt-10 flex flex-col gap-3 border-l-2 border-accent pl-6">
        <span className="absolute -left-[9px] top-1 flex h-4 w-4">
          <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
          <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-background bg-accent" />
        </span>
        <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-accent">
          <span>Case File {cs.fileNo}</span>
          <span className="text-border">|</span>
          <span className="text-muted">{cs.period}</span>
        </div>
        <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">{cs.title}</h1>
        <p className="max-w-2xl text-lg leading-relaxed text-muted">{cs.subtitle}</p>
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted">▚ {cs.classification}</p>
      </header>

      {cs.stats ? (
        <div className="mt-8">
          <StatTiles stats={cs.stats} />
        </div>
      ) : null}

      <div className="mt-14 space-y-14">
        <section>
          <SectionHeading>Summary</SectionHeading>
          <p className="leading-relaxed">{cs.summary}</p>
        </section>

        {cs.targets ? (
          <section>
            <SectionHeading>Target architecture scope</SectionHeading>
            <Targets targets={cs.targets} />
          </section>
        ) : null}

        {cs.vectors ? (
          <section>
            <SectionHeading>Adversarial vectors &amp; scenarios</SectionHeading>
            <Vectors vectors={cs.vectors} />
          </section>
        ) : null}

        {cs.flow ? (
          <section>
            <SectionHeading>Flow of funds</SectionHeading>
            <FlowDiagram nodes={cs.flow} />
          </section>
        ) : null}

        <section>
          <SectionHeading>Method</SectionHeading>
          <ul className="space-y-2">
            {cs.method.map((m) => (
              <li key={m} className="text-sm leading-relaxed text-muted">
                <span className="text-accent">▸</span> {m}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <SectionHeading>Findings</SectionHeading>
          <div className="overflow-hidden rounded-lg border border-border">
            <table className="w-full text-left text-sm">
              <tbody className="divide-y divide-border bg-panel">
                {cs.findings.map((f) => (
                  <tr key={f.label}>
                    <td className="w-1/3 px-4 py-3 align-top font-mono text-xs uppercase tracking-wider text-muted">
                      {f.label}
                    </td>
                    <td className="px-4 py-3">{f.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {cs.directives ? (
          <section className="relative border border-border bg-panel-low p-6">
            <span className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-accent/50 to-transparent" />
            <h2 className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
              Recommendations delivered
            </h2>
            <ul className="space-y-3">
              {cs.directives.map((d, i) => (
                <li key={d} className="flex gap-3 text-sm leading-relaxed">
                  <span className="font-mono text-muted">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-muted">{d}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <section>
          <SectionHeading>Deliverables</SectionHeading>
          <ul className="space-y-2">
            {cs.deliverables.map((d) => (
              <li key={d} className="text-sm leading-relaxed text-muted">
                <span className="text-accent">▸</span> {d}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
