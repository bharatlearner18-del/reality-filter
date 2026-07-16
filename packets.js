/* ---------- the filed packets (real, research-based, 2026-07-14) ----------
   Single source of truth. Loaded by index.html (verdict rendering) and
   track-record.html (the ledger). Add a launch here and it shows up in both. */
const PACKETS = {
  gpt56:{
    match:["gpt-5.6","gpt5.6","gpt 5.6","gpt-56","gpt56","sol terra luna","openai gpt","gpt-5-6"],
    name:"GPT-5.6 — Sol / Terra / Luna",
    by:"OpenAI · launched July 2026",
    file:"CASE FILE · AI-2026-014",
    date:"2026-07-14",
    verdict:"Too early",
    verdictClass:"v-early",
    stampLbl:"VERDICT",
    claim:"OpenAI's most powerful family yet — three durable tiers (Sol flagship, Terra balanced, Luna fast & cheap), with Sol beating rival frontier models on OpenAI's own coding benchmarks.",
    found:"Official launch post and help-center docs are live. Pricing is published: Sol $5/$30, Terra $2.50/$15, Luna $1/$6 per 1M tokens (input/output). The tier system is real and documented.",
    missing:"You can't actually use it. It shipped as a limited preview to ~20 government-approved partners at the administration's request. There are <b>no independent public benchmarks</b> — the only \"beats rivals\" numbers are OpenAI's own. General availability is \"coming weeks\" with no committed date.",
    signals:"The conversation is about the government gating, not hands-on results. Almost no independent usage reports exist, because almost no one outside the partner list can touch it.",
    pricing:"Priced as above, but access is gated and GA is unconfirmed. Nothing to buy today unless you're a preview partner.",
    fog:70,
    fogLabel:"High",
    fogWhy:"\"Use the most powerful model\" — you can't yet. Benchmarks are first-party only.",
    next:"Watch. Don't rearrange your stack around a model you can't access or independently verify. Revisit at general availability."
  },
  fable5:{
    match:["claude fable","fable 5","fable5","fable-5","anthropic fable","claude fable 5","mythos 5"],
    name:"Claude Fable 5",
    by:"Anthropic · launched July 2026",
    file:"CASE FILE · AI-2026-011",
    date:"2026-07-14",
    verdict:"Worth trying — with caveats",
    verdictClass:"v-watch",
    stampLbl:"VERDICT",
    claim:"A powerful new Claude with \"extraordinarily strong\" safeguards — a general tier (Fable) for everyone, plus a gated Mythos tier for approved users.",
    found:"It shipped and ordinary users can use it today. Official posts and a published jailbreak/safeguard framework exist. The model is real and available — not vaporware.",
    missing:"Full-strength behavior without silent degradation wasn't there at launch. When its classifiers flagged cybersecurity / biology / chemistry topics, it <b>silently fell back to an older model (Opus 4.8) with no notice</b>. The Verge found it rerouting basic biology questions — mitochondria, mRNA vaccines, asthma meds.",
    signals:"Sharp backlash — cybersecurity users first, then AI-safety researchers who usually side with Anthropic. It was accused of \"secret sabotage.\" Anthropic apologized two days after launch (\"we made the wrong tradeoff\") and made the fallback visible after June 11.",
    pricing:"Available to ordinary users with stricter guardrails; Mythos tier gated to approved users. Expect refusals or reroutes on sensitive technical topics — now at least disclosed rather than silent.",
    fog:40,
    fogLabel:"Medium",
    fogWhy:"Real, usable model — but the \"safety\" framing hid a genuine capability cut. The fix is real but reactive.",
    next:"Try it for general work. If you do security / bio / chem research, test your exact prompts first — the guardrails may block or reroute you."
  },
  agentforce:{
    match:["agentforce","salesforce agentforce","salesforce agent","salesforce"],
    name:"Salesforce Agentforce",
    by:"Salesforce · GA into 2026",
    file:"CASE FILE · AI-2026-006",
    date:"2026-07-14",
    verdict:"Mostly fog machine",
    verdictClass:"v-fog",
    stampLbl:"VERDICT",
    claim:"A platform of autonomous AI agents that handle business tasks and customer interactions — with a stated goal of 1 billion agents deployed by the end of 2025.",
    found:"Real product, announced at Dreamforce, generally available, with real customers and real demos. The software exists and runs.",
    missing:"Evidence of the promised scale and value. By early 2026 only <b>~6% of Salesforce customers were on paid Agentforce plans</b>, and there's no public evidence the billion-agent target was met. The vision shipped as slideware faster than as value.",
    signals:"Customers and partners describe it as \"expensive, unnecessarily confusing, or just not something many companies feel ready to align with.\" Adoption is far below the marketing.",
    pricing:"Paid plans, widely called expensive relative to what's delivered. Low paid conversion is the tell.",
    fog:80,
    fogLabel:"High",
    fogWhy:"The gap between \"1 billion agents\" and 6% paid adoption is the whole story.",
    next:"Skip for now unless you have a narrow, proven use case and budget to pilot. Buy a specific outcome — not the billion-agent story — or wait."
  }
};

/* newest first — controls order in the track record */
const LEDGER_ORDER = ["fable5","gpt56","agentforce"];
