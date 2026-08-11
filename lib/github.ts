import { links } from "@/data/experience";

const API = "https://api.github.com";
const REVALIDATE = { next: { revalidate: 86400 } };

function headers() {
  const h: Record<string, string> = { Accept: "application/vnd.github+json" };
  if (process.env.GITHUB_TOKEN) h.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  return h;
}

export type Profile = { public_repos: number; followers: number; html_url: string };

export async function getProfile(): Promise<Profile | null> {
  try {
    const res = await fetch(`${API}/users/${links.githubUser}`, { headers: headers(), ...REVALIDATE });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export type Repo = {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  pushed_at: string;
  fork: boolean;
};

export async function getRepos(): Promise<Repo[]> {
  try {
    const res = await fetch(
      `${API}/users/${links.githubUser}/repos?sort=pushed&per_page=100&type=owner`,
      { headers: headers(), ...REVALIDATE },
    );
    if (!res.ok) return [];
    const repos: Repo[] = await res.json();
    return repos.filter((r) => !r.fork);
  } catch {
    return [];
  }
}

export function languageStats(repos: Repo[]): { name: string; count: number; pct: number }[] {
  const counts = new Map<string, number>();
  for (const r of repos) if (r.language) counts.set(r.language, (counts.get(r.language) ?? 0) + 1);
  const total = [...counts.values()].reduce((a, b) => a + b, 0) || 1;
  return [...counts.entries()]
    .map(([name, count]) => ({ name, count, pct: Math.round((count / total) * 100) }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 6);
}

export type ContributionDay = { date: string; count: number; level: number };
export type Contributions = { total: number; weeks: ContributionDay[][] };

// Requires GITHUB_TOKEN (read-only, public scope). Returns null without it — the UI hides the heatmap.
export async function getContributions(): Promise<Contributions | null> {
  if (!process.env.GITHUB_TOKEN) return null;
  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: { ...headers(), "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `query { user(login: "${links.githubUser}") { contributionsCollection {
          contributionCalendar { totalContributions weeks { contributionDays { date contributionCount } } } } } }`,
      }),
      ...REVALIDATE,
    });
    if (!res.ok) return null;
    const json = await res.json();
    const cal = json?.data?.user?.contributionsCollection?.contributionCalendar;
    if (!cal) return null;
    type Day = { date: string; contributionCount: number };
    const weeks: ContributionDay[][] = cal.weeks.map((w: { contributionDays: Day[] }) =>
      w.contributionDays.map((d) => ({
        date: d.date,
        count: d.contributionCount,
        level: d.contributionCount === 0 ? 0 : d.contributionCount < 3 ? 1 : d.contributionCount < 6 ? 2 : d.contributionCount < 10 ? 3 : 4,
      })),
    );
    return { total: cal.totalContributions, weeks };
  } catch {
    return null;
  }
}
