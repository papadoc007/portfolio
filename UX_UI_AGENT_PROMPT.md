# Design Brief — Portfolio Site for a Fraud & Data Researcher

## Who this is for
Itai Raz — Cyber Threat Intelligence & AI Data Analyst doing ransomware/dark-web
intelligence, blockchain forensics, and adversarial LLM evaluation.
Audience: hiring managers and recruiters at fraud-intelligence,
crypto-compliance, and AI-security companies (TRM Labs, Chainalysis, security
vendors, AI labs). The site must feel like the work: an intelligence product,
not a template portfolio.

## Vibe
"Intelligence dashboard meets editorial case file." Dark theme by default,
near-black background, one restrained accent color (electric teal or signal
green — pick one, use it surgically for data, links, and live indicators).
Monospace for data/numbers/labels, a strong grotesque sans for headlines.
Subtle grid/scanline texture is welcome; NO glitch effects, NO matrix rain,
NO hacker clichés. Think Chainalysis reports, Stripe Press, and a Bloomberg
terminal that went to design school. Fully responsive; must be excellent on mobile.

## Pages & sections (single-page scroll + sub-pages)

### 1. Hero
- Name, title: "Fraud & Data Researcher — CTI · Blockchain Forensics · AI Evaluation"
- One positioning line: "I trace money, actors, and model failures."
- Live stat strip (these numbers come from an API, design them as live tiles
  with a small "live" pulse dot): public repos, commits this year, languages.
  Plus static tiles: "100+ adversarial eval runs", "$14.7K traced cross-chain",
  "3 yrs in threat intel".
- CTA buttons: View Work / GitHub / LinkedIn / Email.

### 2. Flagship Projects — 5 cards, each opens a detail page
Card = name, one-liner, tech chips, thumbnail screenshot area, link.
1. **Blockchain Investigation Platform (Cripto_ir)** — Ethereum tracing, cash-flow
   graphs, first-funder identification, AI query layer where the LLM plans and
   deterministic code computes. React+TS.
2. **Ransomware CTI Platform (ctiRE)** — FastAPI + React + Supabase platform
   integrating OSINT and dark-web intelligence on ransomware operators.
3. **Sanctions Clearance Agent** — AI-assisted ransomware-payment sanctions
   screening with deterministic human-review gates.
4. **Regulatory News Intelligence (hokwatch)** — Next.js legal/regulatory
   monitoring: semantic search (pgvector), AI summaries, Hebrew RTL support.
5. **Geopolitical Salience Benchmark (GSB)** — pre-registered LLM benchmark,
   17 languages × 12 models; "model identity beats prompt language".
Detail page layout: problem → approach → architecture diagram slot →
screenshots gallery → outcome/metrics → stack → repo link (if public).

### 3. Case Studies — 2 anonymized, styled like intelligence case files
Give these a distinct "classified report" visual treatment: file number,
redaction-bar motifs (tasteful), findings table.
1. **"Tracing $14.7K Across Two Chains"** — real investigation: two transfers
   (0.48 BTC + 600 USDT) made 11 minutes apart, traced end-to-end to
   KYC exchanges. Show the flow as a horizontal tracing diagram.
2. **"Red-Teaming Frontier LLM Agents"** — confidential client: designed and ran
   adversarial scenarios (prompt injection, tool misuse, permission boundaries)
   across GPT/Claude/Gemini; 779 documented runs, LLM-as-Judge scoring,
   break/defend verdicts. Show a mock scoreboard component.

### 4. Experience timeline
Critical Impact (CTI & AI Specialist, 2025–now) → Qmasters (Security Analyst,
SIEM/EDR: QRadar, CrowdStrike, Defender, 2024–25) → ANSYS (2023–24).
Vertical timeline with mono date labels.

### 5. Toolbox
Four domain cards with the real tools: "AI Engineering" (LLM agents, LLM-as-a-Judge,
adversarial testing, Claude/GPT/Gemini APIs, RAG+pgvector), "Automation"
(n8n, Python pipelines, GitHub Actions, Docker, bots, SQL), "Blockchain
Investigation" (BTC UTXO tracing, EVM/ERC-20 flow analysis, address clustering,
exchange attribution, TRM, sanctions screening), "CTI & OSINT" (dark-web
collection, ransomware tracking, SOCMINT, QRadar/CrowdStrike/Defender, Shodan,
IOC analysis). No skill bars.

### 6. Education & Certifications
Bar-Ilan B.A. Technology Management (final project: crypto threat intel) ·
Kernelios 450-hr cyber program · TRM Forensics Mastery Series (2026) ·
LPI Linux Essentials.

### 8. Footer / Contact
Email + LinkedIn + GitHub only (no phone). Small line: "This site pulls live
data from my GitHub."

## Hard constraints
- Tech target: Next.js 15 App Router + Tailwind (deliver as React components).
- English, LTR. Accessible contrast (WCAG AA on dark). No stock photos,
  no illustrations of hoodie hackers, no lorem ipsum — use the real copy above.
- Every data visual (heatmap, donut, tracing diagram, scoreboard) must have
  a designed loading skeleton and empty state.
- Design system deliverable: colors, type scale, spacing, and the components
  above, so a developer can implement 1:1.
