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
