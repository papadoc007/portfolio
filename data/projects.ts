export type Project = {
  slug: string;
  index: string;
  name: string;
  tagline: string;
  stack: string[];
  repo?: string;
  liveUrl?: string;
  visibility: "public" | "private";
  problem: string;
  approach: string;
  capabilities: string[];
  outcome: string;
  screenshots: { src: string; w: number; h: number }[]; // paths under /public
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
      "Automated per-group intelligence reports — victimology, top sectors and countries",
      "On-chain financial intelligence: ransom in/out, chain breakdown, monthly activity",
      "AI-assisted enrichment and summarization of threat-actor activity",
      "Structured intelligence output for briefings and incident response",
    ],
    outcome:
      "In active use for ransomware research and incident support at a Tel-Aviv intelligence firm.",
    screenshots: [{ src: "/screenshots/ctire-financial.png", w: 1425, h: 993 }],
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
    liveUrl: "https://gsb-puce.vercel.app/#explore",
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
      "Headline finding: model identity beats prompt language — what a model volunteers depends on which model it is, far more than on the language of the question. The live explorer re-runs the headline statistic in your browser over any slice of languages and models you pick.",
    screenshots: [{ src: "/screenshots/gsb-explore.png", w: 1440, h: 900 }],
  },
  {
    slug: "hokwatch-knesset-legislation",
    index: "06",
    name: "חוקWatch — Knesset Legislation Monitor",
    tagline:
      "Public site tracking Israeli legislation, votes and Knesset members in plain Hebrew — every claim linked to an official source, AI explanations gated by human review.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind 4", "Multi-provider AI pipeline", "GitHub Actions"],
    liveUrl: "https://hok-b-seder.com",
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
      "Live at hok-b-seder.com — data layer, public site, and a self-updating AI explanation pipeline that refreshes plain-language summaries daily.",
    screenshots: [{ src: "/screenshots/hokwatch-home.png", w: 1440, h: 900 }],
  },
];

export type Tone = "neutral" | "ok" | "warn" | "danger";

export type CaseStudy = {
  slug: string;
  fileNo: string;
  title: string;
  subtitle: string;
  period: string;
  classification: string;
  summary: string;
  stats?: { label: string; value: string; tone?: Tone }[];
  targets?: { name: string; tag: string; note: string }[];
  vectors?: { no: string; name: string; desc: string; tone: Tone; tags?: string[] }[];
  flow?: { label: string; sub: string }[];
  method: string[];
  findings: { label: string; value: string }[];
  directives?: string[];
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
    stats: [
      { label: "Total traced", value: "$14,764", tone: "neutral" },
      { label: "Chains", value: "2", tone: "neutral" },
      { label: "Time apart", value: "11 min", tone: "warn" },
      { label: "Terminal points", value: "2 KYC", tone: "ok" },
    ],
    flow: [
      { label: "Victim wallets", sub: "BTC + ETH" },
      { label: "Counterparty", sub: "2 transfers · 11 min apart" },
      { label: "Consolidation", sub: "hop-by-hop tracing" },
      { label: "KYC exchanges", sub: "2 custodial endpoints" },
    ],
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
    stats: [
      { label: "Documented runs", value: "779", tone: "neutral" },
      { label: "Model families", value: "3", tone: "neutral" },
      { label: "Attack surfaces", value: "4", tone: "warn" },
      { label: "Verdict source", value: "Human-verified", tone: "ok" },
    ],
    targets: [
      { name: "GPT family", tag: "OpenAI", note: "Agentic tool-use configuration with code execution and API access." },
      { name: "Claude family", tag: "Anthropic", note: "Boundary-adherence system prompts in a sandboxed environment." },
      { name: "Gemini family", tag: "Google", note: "Multi-modal inputs with external datastore integration." },
    ],
    vectors: [
      {
        no: "VECTOR_01",
        name: "Prompt Injection",
        desc: "Direct and indirect payloads engineered to override system instructions, leak hidden context, or push the agent into a malicious persona.",
        tone: "danger",
        tags: ["direct", "indirect"],
      },
      {
        no: "VECTOR_02",
        name: "Tool Misuse",
        desc: "Exploiting semantic ambiguity to coerce the agent into calling sensitive tools with unauthorized parameters.",
        tone: "warn",
        tags: ["REPL", "SQL_EXEC"],
      },
      {
        no: "VECTOR_03",
        name: "Permission Boundaries",
        desc: "Gradual multi-turn context manipulation aimed at drifting the agent past its authorization limits.",
        tone: "warn",
      },
      {
        no: "VECTOR_04",
        name: "Workflow Safety + Negative Controls",
        desc: "Benign look-alike prompts paired with each attack to measure over-refusal and false positives, not just breaks.",
        tone: "ok",
      },
    ],
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
    directives: [
      "Enforce hard-coded schema validation on every tool bridge — never trust the model to emit sanitized parameters.",
      "Run a second, isolated LLM-as-Judge on the output stream, but treat it as a flag, not a verdict — every call is human-confirmed from the transcript.",
      "Execute REPL and shell tools inside ephemeral, restricted-permission containers.",
    ],
    deliverables: [
      "Scenario packs with scoring rubrics",
      "Break ledgers documenting every run and verdict",
      "Model-comparison reports and hardening recommendations",
    ],
  },
  {
    slug: "eleven-drainer-daas-investigation",
    fileNo: "CF-TI-ELEVEN",
    title: "Eleven Drainer: Anatomy of a $4.2M DaaS",
    subtitle:
      "Threat-intelligence investigation of a Drainer-as-a-Service operation that stole $4.2M+ in its first three weeks — from Russian-language forum ads to on-chain fee flows.",
    period: "Investigation: Feb 2026",
    classification: "THREAT-ACTOR PROFILE — from my original CTI report; raw IOCs withheld here",
    summary:
      "Eleven Drainer surfaced in late 2025 and drained over $4.2M within three weeks. I built a full threat-actor profile: tracked the operators across the XSS cybercrime forum, Telegram and X; translated their Russian-language advertisements; reconstructed the event timeline from first ENS activity through the Aerodrome/Velodrome DNS-hijacking incident; and verified the advertised affiliate revenue split against actual on-chain distributions. The advertised 15–20% operator fee matched the recorded splits — hard on-chain corroboration of the DaaS business model, supporting a High-confidence attribution.",
    stats: [
      { label: "Stolen (3 weeks)", value: "$4.2M+", tone: "danger" },
      { label: "Operator fee", value: "15–20%", tone: "warn" },
      { label: "Origin", value: "RU / CIS", tone: "neutral" },
      { label: "Attribution", value: "High conf.", tone: "ok" },
    ],
    flow: [
      { label: "Victim wallet", sub: "phishing / dApp clone" },
      { label: "Drainer toolkit", sub: "'Eleven Priority' asset logic" },
      { label: "Affiliate wallets", sub: "80–85% of proceeds" },
      { label: "Operator wallets", sub: "15–20% fee · verified on-chain" },
    ],
    method: [
      "Dark-forum monitoring (XSS) and Telegram/X SOCMINT on operator channels",
      "Translation and analysis of Russian-language operator advertisements",
      "ENS and wallet attribution of operator and admin-recipient addresses",
      "On-chain verification of the advertised revenue split against recorded distributions",
      "Structured credibility assessment across independent source types",
    ],
    findings: [
      { label: "Losses", value: "$4.2M+ stolen in the first three weeks of operation" },
      { label: "Origin", value: "Russia-based / CIS — ANTI-CIS targeting exclusions, Russian-language ops" },
      { label: "Business model", value: "DaaS: affiliates keep 80–85%, operator retains 15–20% — split verified on-chain" },
      { label: "TTPs", value: "Wallet-security bypasses (MetaMask · OKX · Rabby), automated asset-draining priority logic, high-fidelity dApp phishing clones, DNS hijacking (Aerodrome/Velodrome incident)" },
    ],
    deliverables: [
      "Full threat-intelligence report: timeline, TTPs, credibility assessment",
      "IOC set — operator and admin wallets, ENS names, forum handles",
      "Translated threat-actor advertisement appendix",
    ],
  },
  {
    slug: "profiling-305m-distribution-hub",
    fileNo: "CF-2602-ETH",
    title: "Profiling a $305M Distribution Hub",
    subtitle:
      "A client handed over one Ethereum address. Behind it: a three-layer funding chain rooted in a single Binance account, and 28,000+ transfers moving $305M.",
    period: "Investigation: Feb 2026",
    classification: "SANITIZED FOR PUBLIC RELEASE — client, counterparty and addresses withheld",
    summary:
      "A client asked for a forensic profile of a single Ethereum address tied to a contractual dispute. Combining TRM Labs analysis with bulk transfer-log processing (30,000+ records), the address resolved into a high-volume distribution hub: $305M across 28,625+ transfers in roughly 25 months, rated SEVERE with 26 risk indicators. First-funding analysis exposed a three-layer funding chain in which every layer traces back to one Binance exchange account. Counterparties included major regulated exchanges and payment processors — all holding KYC records reachable by legal process. Separately, 14 payments totaling $6.06M to the counterparty in the client's dispute were verified on-chain, with dates aligning to the dispute timeline.",
    stats: [
      { label: "Total volume", value: "$305M", tone: "neutral" },
      { label: "Transfers", value: "28,625+", tone: "neutral" },
      { label: "TRM risk", value: "SEVERE", tone: "danger" },
      { label: "Dispute payments", value: "$6.06M", tone: "warn" },
    ],
    flow: [
      { label: "Binance account", sub: "single origin of the chain" },
      { label: "Layer 1", sub: "$8.3M volume" },
      { label: "Layer 2", sub: "$927M volume" },
      { label: "Subject hub", sub: "$305M · 28,625+ transfers" },
    ],
    method: [
      "TRM Labs block-explorer analysis and risk-indicator review",
      "First-funding chain reconstruction across three wallet layers",
      "Bulk transfer-log analysis (30,000+ records), filtering phishing-token noise",
      "Counterparty classification and KYC-endpoint mapping (exchanges, payment processors)",
      "On-chain verification of dispute-related payments against the contractual timeline",
    ],
    findings: [
      { label: "Volume", value: "$305M across 28,625+ transfers in ~25 months" },
      { label: "Funding chain", value: "3 layers — every layer first-funded from a single Binance account" },
      { label: "Risk profile", value: "TRM SEVERE — 26 risk indicators" },
      { label: "Dispute payments", value: "14 payments · $6.06M · dates align with the contractual dispute" },
    ],
    deliverables: [
      "Blockchain forensics report with reproducible on-chain evidence",
      "Wallet-identity report and phishing-token analysis appendix",
      "Subpoena-ready list of KYC endpoints for legal follow-up",
    ],
  },
];
