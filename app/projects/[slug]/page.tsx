import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="mx-auto max-w-3xl px-5 py-16">
      <Link href="/#work" className="font-mono text-xs text-muted hover:text-accent">
        ← Back to all work
      </Link>

      <p className="mt-10 font-mono text-xs uppercase tracking-[0.25em] text-accent">
        Flagship Project — {project.index}
      </p>
      <h1 className="mt-2 text-4xl font-medium sm:text-5xl">{project.name}</h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">{project.tagline}</p>

      <div className="mt-8 flex flex-wrap items-center gap-2">
        {project.stack.map((s) => (
          <span key={s} className="rounded border border-border bg-panel px-3 py-1 font-mono text-xs">
            {s}
          </span>
        ))}
        <span className="rounded bg-panel-2 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted">
          {project.visibility}
        </span>
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            className="flex items-center gap-1.5 rounded border border-accent bg-accent-dim px-3 py-1 font-mono text-xs text-accent hover:bg-accent hover:text-background"
          >
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-current" /> Live site →
          </a>
        ) : null}
        {project.repo ? (
          <a href={project.repo} className="font-mono text-xs text-accent hover:underline">
            View repo →
          </a>
        ) : null}
      </div>

      <section className="mt-12 space-y-10">
        <div>
          <h2 className="mb-3 font-mono text-xs uppercase tracking-widest text-muted">Problem</h2>
          <p className="leading-relaxed">{project.problem}</p>
        </div>
        <div>
          <h2 className="mb-3 font-mono text-xs uppercase tracking-widest text-muted">Approach</h2>
          <p className="leading-relaxed">{project.approach}</p>
        </div>
        <div>
          <h2 className="mb-3 font-mono text-xs uppercase tracking-widest text-muted">Capabilities</h2>
          <ul className="space-y-2">
            {project.capabilities.map((c) => (
              <li key={c} className="text-sm leading-relaxed text-muted">
                <span className="text-accent">▸</span> {c}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-3 font-mono text-xs uppercase tracking-widest text-muted">Outcome</h2>
          <p className="leading-relaxed">{project.outcome}</p>
        </div>

        <div>
          <h2 className="mb-3 font-mono text-xs uppercase tracking-widest text-muted">Screenshots</h2>
          {project.screenshots.length === 0 ? (
            <div className="rounded-lg border border-dashed border-border bg-panel p-10 text-center font-mono text-xs text-muted">
              Screenshots coming soon
            </div>
          ) : (
            <div className="grid gap-4">
              {project.screenshots.map((src) => (
                <Image
                  key={src}
                  src={src}
                  alt={`${project.name} screenshot`}
                  width={1440}
                  height={900}
                  className="h-auto w-full rounded-lg border border-border"
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
