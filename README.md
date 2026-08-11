# itai-raz — portfolio

Personal portfolio for Itai Raz — Fraud & Data Researcher (CTI · Blockchain Forensics · AI Evaluation).

Next.js 15 (App Router) + Tailwind, deployed on Vercel. Pulls live data from the GitHub API with daily ISR revalidation.

## Run

```bash
npm install
npm run dev
```

## Env

| Var | Purpose |
|---|---|
| `GITHUB_TOKEN` | Optional. Read-only token enabling the contribution heatmap (GraphQL) and higher API rate limits. Without it the site still works — the heatmap is hidden. |

## Structure

- `data/projects.ts` — flagship projects + sanitized case studies (curated, includes private-repo work)
- `data/experience.ts` — CV data: experience, skills, education, links
- `lib/github.ts` — live GitHub fetchers (REST + GraphQL, ISR 24h)
- `UX_UI_AGENT_PROMPT.md` — design brief for the UX/UI agent
