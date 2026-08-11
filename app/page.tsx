import Link from "next/link";
import { getProfile } from "@/lib/github";
import { caseStudies, projects } from "@/data/projects";
import { certifications, education, experience, links, toolbox } from "@/data/experience";

function SectionHeader({ id, kicker, title }: { id: string; kicker: string; title: string }) {
  return (
    <div id={id} className="mb-10 scroll-mt-24">
      <p className="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-accent">{kicker}</p>
      <h2 className="text-3xl font-medium sm:text-4xl">{title}</h2>
    </div>
  );
}

function StatTile({ value, label, live }: { value: string; label: string; live?: boolean }) {
  return (
    <div className="rounded-lg border border-border bg-panel px-4 py-3">
      <div className="flex items-center gap-2">
        {live ? <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent" /> : null}
        <span className="font-mono text-xl text-foreground">{value}</span>
      </div>
      <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted">{label}</p>
    </div>
  );
}

const NAV = [
  ["Work", "#work"],
  ["Case Files", "#case-files"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
] as const;

export default async function Home() {
  const profile = await getProfile();
  return (
    <main>
      <nav className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
          <a href="#" className="font-mono text-sm text-accent">
            itai@raz:~$
          </a>
          <div className="flex gap-4 sm:gap-6">
            {NAV.map(([label, href]) => (
              <a key={href} href={href} className="font-mono text-xs uppercase tracking-wider text-muted hover:text-foreground">
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="grid-bg border-b border-border">
        <div className="mx-auto max-w-5xl px-5 pb-16 pt-20 sm:pt-28">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-accent">
            Cyber Threat Intelligence · Blockchain Forensics · AI Evaluation
          </p>
          <h1 className="text-5xl font-medium tracking-tight sm:text-7xl">Itai Raz</h1>
          <p className="mt-4 max-w-2xl text-2xl text-muted sm:text-3xl">
            I trace <span className="text-foreground">money</span>,{" "}
            <span className="text-foreground">actors</span>, and{" "}
            <span className="text-foreground">model failures</span>.
          </p>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
            Fraud &amp; data researcher combining threat hunting, OSINT and dark-web
            investigations with blockchain forensics and adversarial evaluation of AI
            agents. I build the tools I investigate with.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="rounded border border-accent bg-accent-dim px-4 py-2 font-mono text-sm text-accent hover:bg-accent hover:text-background">
              View work
            </a>
            <a href={links.github} className="rounded border border-border px-4 py-2 font-mono text-sm text-muted hover:border-accent hover:text-accent">
              GitHub
            </a>
            <a href={links.linkedin} className="rounded border border-border px-4 py-2 font-mono text-sm text-muted hover:border-accent hover:text-accent">
              LinkedIn
            </a>
            <a href={`mailto:${links.email}`} className="rounded border border-border px-4 py-2 font-mono text-sm text-muted hover:border-accent hover:text-accent">
              Email
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {profile ? (
              <StatTile value={String(profile.public_repos)} label="public repos on GitHub" />
            ) : null}
            <StatTile value="100+" label="adversarial eval runs" />
            <StatTile value="$14.7K" label="traced cross-chain" />
            <StatTile value="3+ yrs" label="in security operations" />
          </div>
        </div>
      </header>

      {/* Flagship projects */}
      <section className="mx-auto max-w-5xl px-5 py-20">
        <SectionHeader id="work" kicker="01 — Flagship Projects" title="Built to investigate" />
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group rounded-lg border border-border bg-panel p-5 transition-colors hover:border-accent"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-xs text-accent">{p.index}</span>
                <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-muted">
                  {p.liveUrl ? (
                    <span className="flex items-center gap-1 text-accent">
                      <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent" /> live
                    </span>
                  ) : null}
                  {p.visibility}
                </span>
              </div>
              <h3 className="mt-3 text-xl font-medium group-hover:text-accent">{p.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.tagline}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.slice(0, 4).map((s) => (
                  <span key={s} className="rounded bg-panel-2 px-2 py-0.5 font-mono text-[11px] text-muted">
                    {s}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Case studies */}
      <section className="border-y border-border bg-panel/40">
        <div className="mx-auto max-w-5xl px-5 py-20">
          <SectionHeader id="case-files" kicker="02 — Case Files" title="Real investigations, sanitized" />
          <div className="grid gap-4 md:grid-cols-2">
            {caseStudies.map((c) => (
              <Link
                key={c.slug}
                href={`/case-studies/${c.slug}`}
                className="group rounded-lg border border-border bg-panel p-6 transition-colors hover:border-accent"
              >
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <span className="font-mono text-xs text-accent">FILE {c.fileNo}</span>
                  <span className="font-mono text-[10px] uppercase text-muted">{c.period}</span>
                </div>
                <h3 className="mt-4 text-2xl font-medium group-hover:text-accent">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{c.subtitle}</p>
                <p className="mt-4 font-mono text-xs text-accent">Open case file →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="border-y border-border bg-panel/40">
        <div className="mx-auto max-w-5xl px-5 py-20">
          <SectionHeader id="experience" kicker="03 — Experience" title="Where I've operated" />
          <ol className="space-y-10 border-l border-border pl-6">
            {experience.map((e) => (
              <li key={e.company} className="relative">
                <span className="absolute -left-[29px] top-1.5 h-2 w-2 rounded-full bg-accent" />
                <p className="font-mono text-xs uppercase tracking-wider text-muted">{e.period}</p>
                <h3 className="mt-1 text-xl font-medium">
                  {e.company} <span className="text-muted">· {e.location}</span>
                </h3>
                <p className="mt-0.5 text-sm text-accent">{e.role}</p>
                <ul className="mt-3 space-y-1.5">
                  {e.bullets.map((b) => (
                    <li key={b} className="text-sm leading-relaxed text-muted">
                      — {b}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Skills + Education */}
      <section className="mx-auto max-w-5xl px-5 py-20">
        <SectionHeader id="skills" kicker="04 — Toolbox" title="What I work with" />
        <div className="grid gap-4 sm:grid-cols-2">
          {toolbox.map((t) => (
            <div key={t.domain} className="rounded-lg border border-border bg-panel p-5">
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
                {t.domain}
              </h3>
              <ul className="space-y-2">
                {t.tools.map((tool) => (
                  <li key={tool} className="text-sm text-muted">
                    <span className="text-accent">▸</span> {tool}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">Education</h3>
            <ul className="space-y-4">
              {education.map((ed) => (
                <li key={ed.name}>
                  <p className="font-medium">{ed.name}</p>
                  <p className="font-mono text-xs text-muted">{ed.detail}</p>
                  {ed.note ? <p className="mt-1 text-sm text-muted">{ed.note}</p> : null}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">Certifications</h3>
            <ul className="space-y-2">
              {certifications.map((c) => (
                <li key={c} className="text-sm text-muted">
                  — {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer id="contact" className="border-t border-border bg-panel/40">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-accent">06 — Contact</p>
          <h2 className="text-3xl font-medium">Let&apos;s talk.</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`mailto:${links.email}`} className="rounded border border-accent bg-accent-dim px-4 py-2 font-mono text-sm text-accent hover:bg-accent hover:text-background">
              {links.email}
            </a>
            <a href={links.linkedin} className="rounded border border-border px-4 py-2 font-mono text-sm text-muted hover:border-accent hover:text-accent">
              LinkedIn
            </a>
            <a href={links.github} className="rounded border border-border px-4 py-2 font-mono text-sm text-muted hover:border-accent hover:text-accent">
              github.com/{links.githubUser}
            </a>
          </div>
          <p className="mt-10 font-mono text-[11px] text-muted">
            Case files are sanitized — no client names, no wallet addresses.
          </p>
        </div>
      </footer>
    </main>
  );
}
