export type Project = {
  slug: string;
  index: string;
  name: string;
  tagline: string;
  stack: string[];
  repo?: string;
  visibility: "public" | "private";
  problem: string;
  approach: string;
  capabilities: string[];
  outcome: string;
  screenshots: string[]; // paths under /public
};

export const projects: Project[] = [
  {
    slug: "blockchain-investigation-platform",
    index: "01",
    name: "Blockchain Investigation Platform",
    tagline:
      "Full-stack Ethereum forensics: transaction tracing, cash-flow graphs, and an AI layer that plans queries while deterministic code computes the numbers.",
    stack: ["React", "TypeScript", "Node.js", "Etherscan API", "LLM"],
    repo: "https://github.com/papadoc007/Cripto_ir",
    visibility: "public",
    problem:
      "Blockchain investigations drown analysts in raw transaction data. Manual tracing across thousands of transfers is slow, and letting an LLM compute financial results directly invites hallucinated findings.",
    approach:
      "A full-stack investigation platform where the LLM generates structured query plans and deterministic analytics functions compute every financial result. The AI decides what to look at; the code decides what the numbers are.",
    capabilities: [
      "Transaction tracing and wallet activity analysis",
      "Cash-flow analysis and interactive transaction graphs",
      "First-funder identification and counterparty mapping",
      "Token exposure analysis and heuristic detection of suspicious wallet behavior",
      "Automated forensic reports and risk assessments from Etherscan data",
    ],
    outcome:
      "Working investigation tool used to produce structured forensic reports with zero LLM-computed financials — every figure is reproducible from chain data.",
    screenshots: [],
  },
  {
    slug: "ransomware-cti-platform",
    index: "02",
    name: "Ransomware CTI Platform",
    tagline:
      "AI-powered cyber threat intelligence platform integrating OSINT and dark-web intelligence on ransomware operators.",
    stack: ["FastAPI", "React", "Supabase", "Python"],
    visibility: "private",
    problem:
      "Ransomware intelligence is scattered across leak sites, forums, and dark-web sources. Analysts need one place where operator activity, victims, and infrastructure connect.",
    approach:
      "A FastAPI + React platform that aggregates ransomware-group activity and enriches it with AI-driven analysis, built for day-to-day use by incident-response and intelligence teams.",
    capabilities: [
      "Ransomware group and victim tracking across OSINT and dark-web sources",
      "AI-assisted enrichment and summarization of threat-actor activity",
      "Structured intelligence output for briefings and incident response",
    ],
    outcome:
      "In active use for ransomware research and incident support at a Tel-Aviv intelligence firm.",
    screenshots: [],
  },
  {
    slug: "sanctions-clearance-agent",
    index: "03",
    name: "Sanctions Clearance Agent",
    tagline:
      "AI-assisted sanctions screening for ransomware payments — blockchain intelligence, sanctions data, and TRM findings behind deterministic human-review gates.",
    stack: ["Node.js", "LLM", "Blockchain Intelligence", "TRM"],
    visibility: "private",
    problem:
      "Before a ransomware payment can even be considered, counsel needs a defensible answer to one question: does any address in the flow touch a sanctioned entity? The answer must be fast, documented, and never left to an AI's judgment alone.",
    approach:
      "An agent workflow that combines blockchain intelligence, sanctions datasets, ransomware research and TRM findings — with deterministic human-review gates at every decision that matters. AI accelerates the research; humans sign off on the clearance.",
    capabilities: [
      "Automated collection of sanctions exposure across payment-flow addresses",
      "Cross-referencing of ransomware-group research and TRM intelligence",
      "Deterministic gates that force human review before any clearance conclusion",
      "Audit-ready output for legal and compliance stakeholders",
    ],
    outcome:
      "Compresses hours of manual sanctions research into a documented, reviewable workflow.",
    screenshots: [],
  },
  {
    slug: "regulatory-news-intelligence",
    index: "04",
    name: "Regulatory News Intelligence",
    tagline:
      "Legal & regulatory monitoring platform: semantic search, AI summaries, and article-level Q&A — with full Hebrew RTL support.",
    stack: ["FastAPI", "React", "Supabase pgvector", "OpenAI Embeddings", "Claude", "Groq Llama"],
    visibility: "private",
    problem:
      "Legal teams track regulatory change across dozens of sources in two languages. Keyword alerts miss meaning; reading everything doesn't scale.",
    approach:
      "A full-stack platform with a FastAPI backend over Supabase pgvector and OpenAI embeddings, and a React/TypeScript frontend with RTL Hebrew support. Multiple LLM providers benchmarked and assigned per task — reasoning depth, latency and cost decide which model answers.",
    capabilities: [
      "Semantic search and monitoring across legal/regulatory sources",
      "AI summaries and article-level Q&A",
      "Per-task LLM routing across Groq-hosted Llama and Claude models",
      "Hebrew RTL-first interface",
    ],
    outcome:
      "Turns a daily reading pile into a queryable intelligence feed.",
    screenshots: [],
  },
  {
    slug: "geopolitical-salience-benchmark",
    index: "05",
    name: "Geopolitical Salience Benchmark",
    tagline:
      "Pre-registered LLM benchmark measuring which geopolitical rivalries models volunteer — across 17 languages and 12 models.",
    stack: ["Python", "LLM Evaluation", "Statistics"],
    repo: "https://github.com/papadoc007/geopolitical-salience-benchmark",
    visibility: "public",
    problem:
      "Do LLMs surface different geopolitical rivalries depending on the language you ask in — or does the model itself carry the bias?",
    approach:
      "A pre-registered benchmark: identical prompts across 17 languages and 12 models, measuring which rivalries each model volunteers unprompted. Pre-registration locks the hypotheses before the data arrives.",
    capabilities: [
      "17 languages × 12 models, controlled prompt matrix",
      "Pre-registered design — hypotheses committed before measurement",
      "Cross-model and cross-language salience comparison",
    ],
    outcome:
      "Headline finding: model identity beats prompt language — what a model volunteers depends on which model it is, far more than on the language of the question.",
    screenshots: [],
  },
  {
    slug: "hokwatch-knesset-legislation",
    index: "06",
    name: "חוקWatch — Knesset Legislation Monitor",
    tagline:
      "Public site tracking Israeli legislation, votes and Knesset members in plain Hebrew — every claim linked to an official source, AI explanations gated by human review.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind 4", "Multi-provider AI pipeline", "GitHub Actions"],
    visibility: "private",
    problem:
      "Knowing what the Knesset is doing means reading 40 pages of legalese per bill. Most citizens never do.",
    approach:
      "A Hebrew-first, fully-RTL public site that tracks bills, votes, members and parties from official sources, and layers plain-language explanations on top — generated by an AI pipeline (Anthropic / OpenAI / Gemini / any OpenAI-compatible endpoint) and labeled 'AI-assisted' until a human reviews them. A daily GitHub Actions job adds new explanations automatically.",
    capabilities: [
      "Bills, votes, MKs, parties and topics — every datum linked to its official source",
      "Plain-language AI explanations with schema validation and human-review gating",
      "Daily automated summarization pipeline via GitHub Actions",
      "Political neutrality by design — arguments for and against on every issue",
      "Accessibility to IS 5568 / WCAG 2.0 AA, full RTL",
    ],
    outcome:
      "MVP built end-to-end — data layer, site, and self-updating AI explanation pipeline — heading toward public launch.",
    screenshots: [],
  },
];

export type CaseStudy = {
  slug: string;
  fileNo: string;
  title: string;
  subtitle: string;
  period: string;
  classification: string;
  summary: string;
  method: string[];
  findings: { label: string; value: string }[];
  deliverables: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "tracing-14k-across-two-chains",
    fileNo: "CF-2205-BTC/ETH",
    title: "Tracing $14.7K Across Two Chains",
    subtitle:
      "Two transfers, 11 minutes apart, from a victim's wallets to an unidentified counterparty — traced end-to-end until both flows hit KYC exchanges.",
    period: "Incident: May 2022 · Investigation: 2026",
    classification: "SANITIZED FOR PUBLIC RELEASE — no client data, no addresses",
    summary:
      "In May 2022, a victim sent two transfers to an unidentified counterparty within 11 minutes: 0.4806 BTC (≈$14,156) at 18:42 and 600 USDT on Ethereum (≈$608) at 18:53 — $14,764 total. Four years later, both flows were reconstructed hop-by-hop across two chains. Both terminated at custodial exchanges that enforce identity verification: the funds reached accounts that a legal process can put a name to.",
    method: [
      "UTXO tracing and address clustering on the Bitcoin flow",
      "ERC-20 (USDT) flow analysis on the Ethereum side",
      "Counterparty mapping and consolidation-pattern analysis across both chains",
      "Exchange attribution of the terminal addresses — both custodial, both KYC",
    ],
    findings: [
      { label: "Total traced", value: "$14,764 (0.4806 BTC + 600 USDT)" },
      { label: "Chains", value: "Bitcoin + Ethereum" },
      { label: "Terminal points", value: "2 custodial exchanges enforcing KYC" },
      { label: "Attribution path", value: "Exchange records — reachable via legal process" },
    ],
    deliverables: [
      "Executive summary for the client (non-technical, Hebrew)",
      "Full hop-by-hop tracing report with reproducible evidence",
      "Exchange contact points for legal follow-up",
    ],
  },
  {
    slug: "red-teaming-frontier-llm-agents",
    fileNo: "CF-AGT-EVAL",
    title: "Red-Teaming Frontier LLM Agents",
    subtitle:
      "Adversarial evaluation program for a confidential client: prompt injection, tool misuse and permission boundaries across GPT, Claude and Gemini agent stacks.",
    period: "2025 — 2026 · Confidential client",
    classification: "CLIENT CONFIDENTIAL — methodology and aggregate numbers only",
    summary:
      "Designed and executed an adversarial evaluation program against frontier LLM agents operating in enterprise workflows. Scenarios covered prompt injection (direct and indirect), tool misuse, permission-boundary violations and workflow safety — each with breaker variants and negative controls to catch over-refusal. 779 documented runs across GPT, Claude and Gemini model families, scored by LLM-as-a-Judge and re-verified by human transcript review.",
    method: [
      "Scenario engineering: breaker variants + negative (false-positive) controls per attack pattern",
      "Execution across three frontier model families in agentic tool-use settings",
      "LLM-as-a-Judge scoring with structured rubrics",
      "Human rescoring of every verdict from raw transcripts",
    ],
    findings: [
      { label: "Documented runs", value: "779" },
      { label: "Model families", value: "GPT · Claude · Gemini" },
      { label: "Attack surfaces", value: "Prompt injection · tool misuse · permission boundaries · workflow safety" },
      { label: "Judge reliability", value: "Automated judge verdicts flipped on identical transcripts across repeated passes — final verdicts were read from transcripts, not from the judge" },
    ],
    deliverables: [
      "Scenario packs with scoring rubrics",
      "Break ledgers documenting every run and verdict",
      "Model-comparison reports and hardening recommendations",
    ],
  },
];
