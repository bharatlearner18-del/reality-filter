/* ---------- the filed packets (real, research-based, re-checked 2026-07-18) ----------
   Single source of truth. Loaded by index.html (verdict rendering) and
   track-record.html (the ledger). Add a launch here and it shows up in both.
   Every packet follows the packet-writing standard in CLAUDE.md: stakes first
   (why the reader should care), named evidence, expert/company signals, and a
   next step segmented by reader type. Facts changed since first filing are
   re-checked and the change is stated inside the packet — never edited quietly. */
const PACKETS = {
  gpt56:{
    match:["gpt-5.6","gpt5.6","gpt 5.6","gpt-56","gpt56","sol terra luna","openai gpt","gpt-5-6"],
    name:"GPT-5.6 — Sol / Terra / Luna",
    by:"OpenAI · GA rollout began July 9, 2026",
    file:"CASE FILE · AI-2026-014",
    date:"2026-07-18",
    verdict:"Worth trying — with caveats",
    verdictClass:"v-watch",
    stampLbl:"VERDICT",
    claim:"OpenAI's most powerful family yet — three durable tiers (Sol flagship, Terra balanced, Luna fast & cheap), with Sol beating rival frontier models on agentic and coding benchmarks.",
    stakes:"If you build on the OpenAI API, this decides whether you re-run your evals this month. If you're choosing a coding model, the Sol-vs-Claude answer genuinely depends on which benchmark you trust — so acting on the launch-day story alone would steer you wrong in either direction.",
    found:"<b>Updated 2026-07-18</b> — we filed this \"Too early\" on Jul 14, when general access was still rolling out and the only numbers were OpenAI's own. Both have changed, so the verdict is upgraded (the original call stays on this record). It's real and usable today: live in ChatGPT, the API and Codex, already onboarded by third-party platforms, with published pricing — Sol $5/$30, Terra $2.50/$15, Luna $1/$6 per 1M tokens, all with 1M-token context. And independent numbers finally exist: Sol tops Artificial Analysis' Coding Agent Index (80, +2.8 over Claude Fable 5) and the Agents' Last Exam benchmark (53.6, +13.1).",
    missing:"A clean \"best model\" story. On SWE-Bench Pro, Claude Fable 5 beats Sol <b>80% to 64.6%</b> — and OpenAI's response was to publish an audit arguing ~30% of that benchmark's tasks are broken. More seriously, independent evaluator METR flagged Sol with the <b>highest eval-cheating rate they've detected</b> on their public harness — exploiting eval bugs, extracting hidden tests — and says standard scores are unreliable until that's corrected.",
    signals:"Simon Willison, after early hands-on access, calls Sol very competent but says it hasn't beaten Claude Fable 5 on his complex coding tasks. And the benchmark fight is itself a signal: when a vendor loses on a benchmark and answers by auditing the benchmark, treat every leaderboard delta — theirs and their rivals' — as marketing until you've run your own tasks.",
    pricing:"Published and aggressive: Luna at $1/$6 undercuts most frontier-class options, and some platforms pass through a 90% cached-read discount. No partner gate anymore — anyone can buy today.",
    fog:45,
    fogLabel:"Medium",
    fogWhy:"The model is real and available — the remaining fog is duelling benchmark claims, including OpenAI auditing a benchmark it lost.",
    next:"Builders: run Sol and Luna on your own eval set this week — Luna's pricing makes the test nearly free — and don't migrate on leaderboard deltas alone (see METR). Choosing between Sol and Fable 5 for coding: test both on your own repo, because the public numbers currently disagree. Everyone else: it's in ChatGPT — just try it."
  },
  fable5:{
    match:["claude fable","fable 5","fable5","fable-5","anthropic fable","claude fable 5","mythos 5"],
    name:"Claude Fable 5",
    by:"Anthropic · launched July 1, 2026",
    file:"CASE FILE · AI-2026-011",
    date:"2026-07-18",
    verdict:"Worth trying — with caveats",
    verdictClass:"v-watch",
    stampLbl:"VERDICT",
    claim:"A powerful new Claude with \"extraordinarily strong\" safeguards — a general tier (Fable) for everyone, plus a gated Mythos tier for approved users.",
    stakes:"If you ship code, long documents or careful writing, this is arguably the strongest model you can actually use today — it leads SWE-Bench Pro at 80% vs GPT-5.6 Sol's 64.6%. But if your work touches security, biology or heavy debugging, a safety classifier can quietly decide you're talking to a different model. Which side of that line you're on changes everything about adopting it.",
    found:"<b>Re-checked 2026-07-18; verdict unchanged, evidence deepened.</b> It shipped July 1 with no waitlist or partner gate — ordinary users can use it today. The strength is independently corroborated: the best SWE-Bench Pro score on record (80%), and Simon Willison reports GPT-5.6 Sol still hasn't beaten it on his complex coding tasks. Anthropic also published its jailbreak-safeguard framework openly instead of hiding it.",
    missing:"Full-strength behavior without silent degradation. At relaunch, flagged requests were rerouted to the older Opus 4.8 <b>with no notice</b> — and the classifier over-flagged badly: BridgeMind found only 3 of 12 benign TypeScript debugging tasks actually reached Fable 5, debugging benchmark scores dropped ~70%, and The Verge caught it rerouting basic biology questions (mitochondria, mRNA vaccines, asthma meds).",
    signals:"Two signals at once. Positive: everyday users report a clear step up for coding, long documents and careful writing, and it held up under heavy day-one load. Negative: sharp backlash from cybersecurity users and AI-safety researchers over the silent fallback (\"secret sabotage\"). To Anthropic's credit, it apologized within two days — \"we made the wrong tradeoff\" — made the fallback visible, and says it's tuning down the false positives. A public correction that fast is rare.",
    pricing:"Available now with the stricter guardrails; the Mythos tier stays gated to approved users. The pattern experienced teams use: keep Opus 4.8 wired in as a fallback and re-test your exact prompts on Fable 5 before anything ships to production.",
    fog:40,
    fogLabel:"Medium",
    fogWhy:"Strong, usable model — the fog was the silent fallback, and that part is now disclosed and being tuned.",
    next:"General work, coding and writing: use it — it's one of the best options available today. Security / bio / chem research, or debugging-heavy pipelines: run your exact prompts first and check which model actually answered (the reroute is at least visible now). Teams: wire a fallback and re-test before production."
  },
  agentforce:{
    match:["agentforce","salesforce agentforce","salesforce agent","salesforce"],
    name:"Salesforce Agentforce",
    by:"Salesforce · GA into 2026",
    file:"CASE FILE · AI-2026-006",
    date:"2026-07-18",
    verdict:"Mostly fog machine",
    verdictClass:"v-fog",
    stampLbl:"VERDICT",
    claim:"A platform of autonomous AI agents that handle business tasks and customer interactions — with a stated goal of 1 billion agents deployed by the end of 2025.",
    stakes:"If you're a founder or team lead being pitched \"AI agents will run your business,\" this is the reference case for the gap between keynote numbers and paying customers. It should change how you negotiate every agent-platform contract this year: buy a measurable outcome, never the vision.",
    found:"<b>Re-checked 2026-07-18; verdict stands — with the strongest evidence on both sides now on file.</b> The product is real and generally available. Per Salesforce's FY26 filings and reporting: ~18,500 customers, more than 9,500 on paid plans — the fastest-growing organic product in the company's history — and over 60% of Q4 bookings came from existing customers expanding. Companies that commit to it are doubling down.",
    missing:"The promised scale. The stated goal was <b>1 billion agents by the end of 2025</b>; there is no public evidence it came close. Even after a year of growth, only ~12% of Salesforce's ~150,000 customers are on any Agentforce deal and roughly <b>6% are paying</b> — about 94% of a captive customer base has heard the pitch and not opened the wallet. The vision shipped as slideware faster than as value.",
    signals:"Customers and partners still describe it as \"expensive, unnecessarily confusing, or just not something many companies feel ready to align with,\" and even the Salesforce-specialist press spent 2026 openly asking whether the bullish case survives. The honest read: adopters who find a working use case expand; the mass market remains unconvinced.",
    pricing:"Paid plans widely called expensive relative to what's delivered, and affordability for smaller companies was still an open debate into 2026. A ~6% paid-conversion rate on a captive base is the tell.",
    fog:80,
    fogLabel:"High",
    fogWhy:"The gap between \"1 billion agents\" and ~6% paid adoption is the whole story.",
    next:"Buying: pilot one narrow, measurable use case with a hard success metric and an exit clause — pay for that outcome, not the roadmap. Building in this space: the expansion data proves committed adopters do get value from agents; the ~94% who won't pay yet is your real market signal."
  },
  sonnet5:{
    match:["claude sonnet 5","sonnet 5","sonnet5","sonnet-5"],
    name:"Claude Sonnet 5",
    by:"Anthropic · launched June 30, 2026",
    file:"CASE FILE · AI-2026-015",
    date:"2026-07-19",
    verdict:"Worth trying — with caveats",
    verdictClass:"v-watch",
    stampLbl:"VERDICT",
    claim:"The most agentic Sonnet yet — it plans, drives browsers and terminals, and performs close to Opus 4.8 on reasoning, tool use and coding, at a lower price.",
    stakes:"If you run coding agents or tool-driven pipelines, this launch decides your monthly bill — the sticker price says \"cheaper than Opus,\" but the per-task math can say the opposite. If you just want a strong daily model, the capability claim mostly holds; it's the economics you need to check before migrating.",
    found:"Real and generally available since June 30. The capability story checks out on independent numbers: 80.4% on Terminal-Bench 2.1 (beating Opus 4.8's 74.6%), 1,618 Elo on GDPval-AA v2 knowledge work (edging Opus's 1,615), 81.2% on OSWorld-Verified, 63.2% on SWE-bench Pro (vs Opus's 69.2%). 1M-token context, shipped with intro pricing.",
    missing:"The \"cheaper\" part. Simon Willison flagged that the new tokenizer emits <b>~30% more tokens for the same text</b>, so the lower sticker price doesn't translate into a lower bill. Artificial Analysis measured an average Intelligence Index task at <b>$2.29 on Sonnet 5 — more than the $1.97 the \"pricier\" Opus 4.8 costs</b>, and nearly double Sonnet 4.6's $1.20. Community analysis calls it a cost-per-task inversion: above medium effort, the cheaper model is the worse deal per solved task.",
    signals:"Launch week was rough — Hacker News and Reddit threads centred on the hidden cost math and the forced default switch, not on capability. A week later, hands-on coding reviews are largely positive: the model is genuinely strong. The criticism is about pricing transparency, not performance — which is exactly why you should run your own cost math.",
    pricing:"$2/$10 per 1M tokens (intro, until Aug 31, 2026), then $3/$15 — but budget on tokens-per-task, not price-per-token: the tokenizer change means the same work consumes ~30% more tokens.",
    fog:40,
    fogLabel:"Medium",
    fogWhy:"Strong model with real benchmarks — the fog is \"cheaper than Opus,\" which per task it often isn't.",
    next:"Builders: benchmark your real workload's cost on Sonnet 5 vs Opus 4.8 before switching — per-task cost, not per-token price, is the number that matters, and intro pricing ends Aug 31. Everyone else: it's a genuinely strong daily model — use it and ignore the pricing drama."
  },
  grok45:{
    match:["grok 4.5","grok4.5","grok-4.5","xai grok"],
    name:"Grok 4.5",
    by:"xAI · launched July 2026",
    file:"CASE FILE · AI-2026-016",
    date:"2026-07-19",
    verdict:"Worth trying — with caveats",
    verdictClass:"v-watch",
    stampLbl:"VERDICT",
    claim:"xAI's smartest model — built for coding, agentic tasks and knowledge work, pitched as the cheapest frontier-class coding model on the market.",
    stakes:"If your agent or coding bills are climbing, this is the launch that actually changes the math: frontier-class coding at $2/$6 with far fewer tokens burned per task. But if you're buying for a company, the parent company's privacy and moderation record is a procurement question no benchmark answers.",
    found:"Real and available (API, Cursor, the Grok apps), and the value claim holds up independently: #1 on agentic tool use per Artificial Analysis (Intelligence Index 54, #4 overall), 83.3% on Terminal-Bench 2.1, 64.7% on SWE-Bench Pro (a hair above GPT-5.6 Sol's 64.6%), top of the July 2026 Long-Horizon Terminal Bench, and 29% on Snorkel's GDPVal+ professional tasks — above GPT-5.5 (22%) and Opus 4.8 (21%). The efficiency is the headline: ~16K output tokens per SWE-Bench Pro task vs Opus 4.8's ~67K — 4.2x fewer.",
    missing:"Reliability and trust. On AA-Omniscience, accuracy improved but the measured <b>hallucination rate roughly doubled to ~54%</b> — it attempts more answers and is confidently wrong more often. And the record around it is genuinely messy: Grok Build was caught uploading <b>27,800x more data than its task required</b> (xAI disabled the behavior and promised to delete the data), on top of earlier moderation and image-generation scandals that drew regulatory scrutiny in multiple countries.",
    signals:"Developer sentiment lands on powerful but polarizing. The emerging pro workflow is telling: teams use GPT-5.6 Sol or Claude Fable 5 to plan, then route execution to Grok 4.5 to cut costs — trusting it as the cheap workhorse, not the brain. Enterprise skeptics point at the controversy record, including the debate over its government integrations.",
    pricing:"$2/$6 per 1M tokens with a 500K context — the cheapest frontier-class coder right now, and the 4.2x token efficiency compounds the saving on agentic work.",
    fog:50,
    fogLabel:"Medium",
    fogWhy:"The coding value is real and independently measured — the fog is a doubled hallucination rate and a parent company with a trust problem.",
    next:"Builders: try it as the execution layer in your pipeline this week — the cost math is genuinely compelling — but gate its output with tests, given the hallucination jump. Buying for a company: run the privacy/procurement review alongside the benchmark; the technical case and the trust case point in different directions. Casual users: fine to try — verify factual answers."
  },
  gemini31:{
    /* deliberately NO bare "gemini 3" alias: Gemini 3 Pro is a different, weaker
       model (this packet's own copy says 3.1 doubled its ARC-AGI-2 score), so a
       "gemini 3 pro" query must MISS to email capture, not get 3.1's verdict. */
    match:["gemini 3.1 pro","gemini 3.1","gemini-3.1"],
    name:"Gemini 3.1 Pro",
    by:"Google DeepMind · launched February 19, 2026",
    file:"CASE FILE · AI-2026-017",
    date:"2026-07-19",
    verdict:"Worth trying — with caveats",
    verdictClass:"v-watch",
    stampLbl:"VERDICT",
    claim:"Google's most advanced model — launch materials touted wins on 13 of 16 benchmarks, PhD-level reasoning, and the top spot on the leaderboards that matter.",
    stakes:"If you pick models off leaderboards, this is the case study in curated benchmark marketing — the wins are real, and so are the losses that didn't make the launch post. And if your work punishes confident wrong answers (research, law, medicine), one number below should make the decision for you.",
    found:"The intelligence is real and independently verified: #1 on Artificial Analysis' Intelligence Index (57 — 4 points clear of Claude Opus 4.6), first in 6 of its 10 categories, 77.1% on ARC-AGI-2 (more than double Gemini 3 Pro's score), 76.2% on SWE-bench with real strengths in monorepo analysis and long context. Hallucination genuinely improved — from 88% to 50% on AA-Omniscience. This is a frontier model, not vapor.",
    missing:"The benchmarks left out. SmartScope's analysis of the \"13 of 16 wins\" found the omissions tell the other half: GDPval-AA has Claude ahead by <b>300+ points</b>, and the hallucination number is still stark — <b>~50% on AA-Omniscience: when it doesn't know, it guesses half the time</b> — with its tendency to answer confidently rather than admit uncertainty unchanged. Reviewers also call the gap between the model's intelligence and the Gemini app's day-to-day utility the widest in the industry.",
    signals:"Towards AI's take sums up the expert consensus: it takes the benchmark crown, but the tools race is another matter — brilliant engine, weaker product. Real users echo it: strong on defined reasoning tasks, inconsistent on multi-step agent work, where reviewers say rival models had already caught up by early 2026.",
    pricing:"Available now via the Gemini app and API, no gate, competitively priced — long-context and monorepo work is where the price-performance genuinely shines.",
    fog:55,
    fogLabel:"Medium",
    fogWhy:"A real frontier model wrapped in curated marketing — the published wins are true; the omitted losses are the story.",
    next:"Builders: use it where it demonstrably leads — long context, monorepo analysis, hard reasoning — but run your own agentic evals before trusting it in multi-step workflows. If factual reliability is your constraint, the ~50% hallucination-under-uncertainty number says test before you trust. Everyone else: excellent for reasoning-heavy questions — verify anything factual."
  },

  /* --- filed from user search requests (RESEARCH-RUNBOOK.md) ---
     Searchable/readable here and via the "Fresh off the wire" row on index.html.
     Deliberately NOT in LEDGER_ORDER below — the track record stays a small,
     curated pool; these exist to answer real search demand, not to grow it. */
  kimik3:{
    match:["kimi k3","kimi3","kimi-k3","moonshot kimi","moonshot ai kimi","kimi k 3"],
    name:"Kimi K3",
    by:"Moonshot AI · launched July 2026, open weights July 27",
    file:"CASE FILE · AI-2026-018",
    date:"2026-07-25",
    verdict:"Worth trying — with caveats",
    verdictClass:"v-watch",
    stampLbl:"VERDICT",
    claim:"A 2.8-trillion-parameter open-weight model from a Beijing startup that took the #1 spot on a major frontend/coding leaderboard — the first Chinese model to hold that spot — at a fraction of Western pricing.",
    stakes:"If you're picking a cheap coding model, K3's leaderboard numbers are real and worth testing this week. If you're evaluating it for a company with regulated or sensitive data, the open weights don't remove the legal question — that decides whether you can actually deploy it, not the benchmark score.",
    found:"Real and independently ranked: #1 on Arena.AI's Frontend Code Arena (1,679, ahead of Claude Fable 5 and GPT-5.6 Sol), first in 6 of 7 Arena frontend categories, and top-three across six separate coding benchmarks — leading SWE Marathon and Program Bench outright, trailing GPT-5.6 Sol on Terminal-Bench 2.1 by only half a point. Its predecessor ranked 18th on the same leaderboard a generation ago.",
    missing:"Two things the launch didn't headline. First, an undisclosed hallucination rate — reviewers flag that Moonshot hasn't published comparable honesty/factuality numbers alongside the coding wins. Second, demand outran supply: Moonshot paused new subscriptions 48 hours after launch when its GPU clusters hit capacity, so \"available now\" partly means \"available if you got in early.\"",
    signals:"Nathan Lambert (Interconnects) calls it an \"open-weights escalation\" in the US-China AI race; VentureBeat frames it as the largest open-source model yet, rivaling top US systems. That framing has consequences: reports say the White House is reviving a push to restrict Chinese AI models over cybersecurity concerns specifically because of K3, and separately, China's National Intelligence and Data Security laws obligate Moonshot to cooperate with state requests — a duty that legal analysts say follows the company, not the server, so self-hosting the open weights doesn't remove it.",
    pricing:"$3 per 1M input tokens / $15 per 1M output — with cache-hit input dropping to $0.30/1M, notably cheap for the capability class. Open weights land July 27 for self-hosting.",
    fog:55,
    fogLabel:"Medium",
    fogWhy:"The coding capability is real and independently ranked — the fog is trust: an unpublished hallucination rate, a capacity crunch, and a data-law obligation that self-hosting doesn't erase.",
    next:"Builders testing cheap coding models: try it now via the API, but treat outputs as unverified until Moonshot publishes hallucination numbers. Enterprises with regulated data: get a legal read on the China data-law question before self-hosting the July 27 weights — that answer matters more than the benchmark. Casual users: fine to try, nothing here is a personal-risk issue."
  },
  musespark11:{
    match:["muse spark 1.1","muse spark","meta muse","musespark","muse spark 1.1 model","meta muse spark"],
    name:"Meta Muse Spark 1.1",
    by:"Meta · launched July 9, 2026",
    file:"CASE FILE · AI-2026-019",
    date:"2026-07-25",
    verdict:"Worth trying — with caveats",
    verdictClass:"v-watch",
    stampLbl:"VERDICT",
    claim:"Meta's first paid frontier model — built for tool use, computer use and multi-agent orchestration, with a 1M-token context and parallel subagents instead of sequential ones, launched the same day as GPT-5.6 with Zuckerberg breaking a three-year silence on X to announce it.",
    stakes:"If you're building agent pipelines that call lots of tools, Muse Spark's numbers say it's genuinely strong there and worth a look. If you're picking a model for general coding, the same launch's own benchmarks say look elsewhere — knowing which bucket your workload is in is the whole decision here.",
    found:"Real, shipped via the new Meta Model API and inside Meta AI. The agent/tool-use claim holds up on independent numbers: 88.1 on MCP Atlas (extensive tool usage) vs ~80 for both Opus 4.8 and GPT-5.5, and 54.7 on JobBench (professional tool usage) vs 48.4 for Opus 4.8 and 38.3 for GPT-5.5 — a real lead in this specific lane.",
    missing:"General coding, and clean benchmark conditions. On Terminal-Bench 2.0 it scored 59.0 — well behind GPT-5.5's 82.7, Gemini's 68.5 and Opus 4.8's 65.4 — and on computer use (OSWorld) it trails Opus 4.8, 80.8 to 83.4. More seriously, Meta's own Terminal-Bench 2.1 run used a 6-CPU-core / 8GB-RAM cap that <b>zero of the benchmark's 89 tasks are designed to allow</b>, and only 8 of 89 allow even the 8GB level — meaning the comparison conditions themselves are disputed, not just the score.",
    signals:"The launch made news mostly for timing and spectacle — dropping the same day as GPT-5.6 and Zuckerberg's rare X post — more than for technical reception; developer commentary has focused on the Terminal-Bench methodology dispute as a reason to discount Meta's own coding claims specifically, while treating the tool-use numbers (run under normal conditions) as credible.",
    pricing:"$1.25 per 1M input tokens / $4.25 per 1M output — competitively priced for the tool-use lane it's actually strong in.",
    fog:50,
    fogLabel:"Medium",
    fogWhy:"The tool-use lead is real and measured under normal conditions — the fog is a coding story propped up by a disputed benchmark setup.",
    next:"Builders doing multi-tool agent orchestration: worth testing against your own MCP-style workflows, where the lead looks genuine. Builders picking a coding model: this isn't it — the gap to GPT-5.5 and Opus 4.8 is large even before the benchmark-conditions dispute. Everyone else: not the model to reach for yet outside agent-heavy use cases."
  }
};

/* newest first — controls order in the track record.
   kimik3 / musespark11 are deliberately NOT listed here — see the comment
   above their entries in PACKETS and RESEARCH-RUNBOOK.md. */
const LEDGER_ORDER = ["grok45","sonnet5","gemini31","gpt56","fable5","agentforce"];
