# itai-raz - portfolio

Personal portfolio for Itai Raz - Fraud & Data Researcher (CTI · Blockchain Forensics · AI Evaluation).

Next.js 15 (App Router) + Tailwind, deployed on Vercel. The hero's public-repo count is pulled live from the GitHub API with daily ISR revalidation.

## Run

```bash
npm install
npm run dev
```

## Env

| Var | Purpose |
|---|---|
| `GITHUB_TOKEN` | Optional. Read-only token that raises the GitHub API rate limit for the live repo count. The site works fine without it. |

## Structure

- `data/projects.ts` - flagship projects + sanitized case studies (curated, includes private-repo work)
- `data/experience.ts` - CV data: experience, toolbox, education, links
- `lib/github.ts` - live GitHub profile fetch (REST, ISR 24h)
- `UX_UI_AGENT_PROMPT.md` - design brief for the UX/UI agent
