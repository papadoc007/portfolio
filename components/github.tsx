import { getContributions, getRepos, languageStats } from "@/lib/github";
import { links } from "@/data/experience";

const LEVEL_COLORS = [
  "rgba(45,212,191,0.06)",
  "rgba(45,212,191,0.25)",
  "rgba(45,212,191,0.45)",
  "rgba(45,212,191,0.7)",
  "rgba(45,212,191,1)",
];

export async function GitHubSection() {
  const [repos, contributions] = await Promise.all([getRepos(), getContributions()]);
  const langs = languageStats(repos);
  const latest = repos.slice(0, 6);

  return (
    <div className="space-y-10">
      {contributions ? (
        <div className="rounded-lg border border-border bg-panel p-5 overflow-x-auto">
          <div className="mb-4 flex items-baseline justify-between gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-muted">
              Contributions — past 12 months
            </span>
            <span className="font-mono text-sm text-accent">
              {contributions.total.toLocaleString()} total
            </span>
          </div>
          <div className="flex gap-[3px] w-max">
            {contributions.weeks.map((week, i) => (
              <div key={i} className="flex flex-col gap-[3px]">
                {week.map((day) => (
                  <div
                    key={day.date}
                    title={`${day.date}: ${day.count}`}
                    className="h-[10px] w-[10px] rounded-[2px]"
                    style={{ backgroundColor: LEVEL_COLORS[day.level] }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      ) : null}

      <div className="grid gap-10 md:grid-cols-[1fr_1.6fr]">
        <div>
          <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">
            Languages across {repos.length || "—"} repos
          </h3>
          {langs.length === 0 ? (
            <p className="text-sm text-muted">GitHub data unavailable right now.</p>
          ) : (
            <ul className="space-y-3">
              {langs.map((l) => (
                <li key={l.name}>
                  <div className="mb-1 flex justify-between font-mono text-xs">
                    <span>{l.name}</span>
                    <span className="text-muted">{l.pct}%</span>
                  </div>
                  <div className="h-1 rounded bg-panel-2">
                    <div className="h-1 rounded bg-accent" style={{ width: `${l.pct}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">
            Recently pushed
          </h3>
          {latest.length === 0 ? (
            <p className="text-sm text-muted">
              Could not reach the GitHub API — see{" "}
              <a className="text-accent underline" href={links.github}>
                github.com/{links.githubUser}
              </a>{" "}
              directly.
            </p>
          ) : (
            <ul className="grid gap-3 sm:grid-cols-2">
              {latest.map((r) => (
                <li key={r.name} className="rounded-lg border border-border bg-panel p-4">
                  <a href={r.html_url} className="font-mono text-sm text-accent hover:underline">
                    {r.name}
                  </a>
                  <p className="mt-1 line-clamp-2 text-xs text-muted">
                    {r.description ?? "No description"}
                  </p>
                  <p className="mt-2 font-mono text-[11px] text-muted">
                    {r.language ?? "—"}
                    {r.stargazers_count > 0 ? ` · ★ ${r.stargazers_count}` : ""}
                    {" · "}
                    {new Date(r.pushed_at).toISOString().slice(0, 10)}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
