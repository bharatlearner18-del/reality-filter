/* ---------- the filed packets (real, research-based, re-checked 2026-07-25) ----------
   Single source of truth. Loaded by index.html (verdict rendering) and
   track-record.html (the ledger). Add a launch here and it shows up in both.
   Every packet follows the packet-writing standard in CLAUDE.md: stakes first
   (why the reader should care), named evidence, expert/company signals, and a
   next step segmented by reader type. Facts changed since first filing are
   re-checked and the change is stated inside the packet — never edited quietly.

   DRIFT WARNING: about.html hardcodes three facts from here, and nothing loads
   packets.js on that page, so a re-check below will silently desync it:
     - opus5's verdict + fog value  -> the mock verdict card in explainer scene 4
     - gpt56's "Too early" -> "Worth trying" history -> the Read panel
     - agentforce's $1.2B ARR figure (from agentforce.found) -> the Read panel
   When you re-check opus5, gpt56 or agentforce, update about.html to match.
   (It used to mirror ledger rows too; that scene was removed 2026-07-30 because
   showing the ledger implied every packet gets published, which it doesn't.) */
const PACKETS = {
  gpt56:{
    match:["gpt-5.6","gpt5.6","gpt 5.6","gpt-56","gpt56","sol terra luna","openai gpt","gpt-5-6"],
    name:"GPT-5.6 — Sol / Terra / Luna",
    by:"OpenAI · GA rollout began July 9, 2026",
    file:"CASE FILE · AI-2026-014",
    date:"2026-07-25",
    verdict:"Worth trying — with caveats",
    verdictClass:"v-watch",
    stampLbl:"VERDICT",
    claim:"OpenAI's most powerful family yet — three durable tiers (Sol flagship, Terra balanced, Luna fast & cheap), with Sol beating rival frontier models on agentic and coding benchmarks.",
    stakes:"If you build on the OpenAI API, this decides whether you re-run your evals this month. If you're choosing a coding model, the Sol-vs-Claude answer genuinely depends on which benchmark you trust — so acting on the launch-day story alone would steer you wrong in either direction.",
    found:"<b>Re-checked 2026-07-25 — verdict holds.</b> The GA rollout finished with no waitlist left anywhere, and the agentic benchmark lead is confirmed independently since filing. We filed this \"Too early\" on Jul 14, when general access was still rolling out and the only numbers were OpenAI's own — both have changed, so the verdict was upgraded (the original call stays on this record). It's real and usable today: live in ChatGPT, the API and Codex, already onboarded by third-party platforms, with published pricing — Sol $5/$30, Terra $2.50/$15, Luna $1/$6 per 1M tokens, all with 1M-token context. Independent numbers back it up: Sol tops Artificial Analysis' Coding Agent Index (80, +2.8 over Claude Fable 5) and the Agents' Last Exam benchmark (53.6, +13.1).",
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
    date:"2026-07-25",
    verdict:"Worth trying — with caveats",
    verdictClass:"v-watch",
    stampLbl:"VERDICT",
    claim:"A powerful new Claude with \"extraordinarily strong\" safeguards — a general tier (Fable) for everyone, plus a gated Mythos tier for approved users — relaunched July 1 after a US government-ordered worldwide suspension.",
    stakes:"If you ship code, long documents or careful writing, this is arguably the strongest model you can actually use today — it leads SWE-Bench Pro at 80% vs GPT-5.6 Sol's 64.6%. But this exact model was pulled globally by the US Commerce Department three weeks before its relaunch, over its demonstrated ability to autonomously find and exploit vulnerabilities — so if your work touches security, biology or heavy debugging, the extra caution you'll hit isn't overcautious product design, it's a regulatory response to a real capability. Which side of that line you're on changes everything about adopting it.",
    found:"<b>Re-checked 2026-07-25 — corrected: the original packet never explained why Fable 5 needed a \"relaunch\" at all.</b> On June 12–13, 2026, the US Commerce Department ordered Anthropic to immediately suspend Fable 5 and Mythos 5 worldwide under export-control law — the first time the US government has taken this kind of action against an AI model — citing a demonstrated jailbreak that let the model discover unknown vulnerabilities, generate working exploits, chain attack vectors, and autonomously compromise networked systems. Anthropic complied immediately, cutting off access for all customers including its own foreign-national employees. The suspension lifted June 30 after negotiations with the Trump administration, and Fable 5 relaunched July 1 with a new cybersecurity classifier Anthropic says blocks the reported exploit in over 99% of cases. The underlying model strength is real and independently corroborated: the best SWE-Bench Pro score on record (80%), and Simon Willison reports GPT-5.6 Sol still hasn't beaten it on his complex coding tasks. Anthropic also published its jailbreak-safeguard framework openly instead of hiding it.",
    missing:"Full-strength behavior without silent degradation. At relaunch, flagged requests were rerouted to the older Opus 4.8 <b>with no notice</b> — and the classifier over-flagged badly: BridgeMind found only 3 of 12 benign TypeScript debugging tasks actually reached Fable 5, debugging benchmark scores dropped ~70%, and The Verge caught it rerouting basic biology questions (mitochondria, mRNA vaccines, asthma meds).",
    signals:"Two signals at once. Positive: everyday users report a clear step up for coding, long documents and careful writing, and it held up under heavy day-one load. Negative: sharp backlash from cybersecurity users and AI-safety researchers over the silent fallback (\"secret sabotage\"). To Anthropic's credit, it apologized within two days — \"we made the wrong tradeoff\" — made the fallback visible, and says it's tuning down the false positives. A public correction that fast is rare.",
    pricing:"Available now with the stricter guardrails; the Mythos tier stays gated to approved users. The pattern experienced teams use: keep Opus 4.8 wired in as a fallback and re-test your exact prompts on Fable 5 before anything ships to production.",
    fog:40,
    fogLabel:"Medium",
    fogWhy:"Strong, usable model — the fog was the silent fallback, and that part is now disclosed and being tuned.",
    next:"General work, coding and writing: use it — it's one of the best options available today. Security / bio / chem research, or debugging-heavy pipelines: know the classifier exists because of a real, government-flagged exploit, not overcaution — run your exact prompts first and check which model actually answered (the reroute is at least visible now). Teams: wire a fallback and re-test before production."
  },
  agentforce:{
    match:["agentforce","salesforce agentforce","salesforce agent","salesforce"],
    name:"Salesforce Agentforce",
    by:"Salesforce · GA into 2026",
    file:"CASE FILE · AI-2026-006",
    date:"2026-07-25",
    verdict:"Mostly fog machine",
    verdictClass:"v-fog",
    stampLbl:"VERDICT",
    claim:"A platform of autonomous AI agents that handle business tasks and customer interactions — with a stated goal of 1 billion agents deployed by the end of 2025.",
    stakes:"If you're a founder or team lead being pitched \"AI agents will run your business,\" this is the reference case for the gap between keynote numbers and paying customers. It should change how you negotiate every agent-platform contract this year: buy a measurable outcome, never the vision.",
    found:"<b>Re-checked 2026-07-25 — the fog/substance split is sharper, not resolved.</b> Agentforce + Data 360 ARR crossed $1.2B in Q1 FY27, up ~205% year over year, and deal count hit 29,000. That's real, fast-growing revenue among adopters. But it's concentrated: KeyBanc Capital Markets and Bernstein both report customers telling them Agentforce \"just isn't there\" yet, and more CIOs now plan to cut Salesforce spend next year than plan to increase it — broad sentiment hasn't caught up to the believers' growth. Per Salesforce's FY26 filings and reporting: ~18,500 customers, more than 9,500 on paid plans — the fastest-growing organic product in the company's history — and over 60% of Q4 bookings came from existing customers expanding. Companies that commit to it are doubling down.",
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
    date:"2026-07-25",
    verdict:"Worth trying — with caveats",
    verdictClass:"v-watch",
    stampLbl:"VERDICT",
    claim:"The most agentic Sonnet yet — it plans, drives browsers and terminals, and performs close to Opus 4.8 on reasoning, tool use and coding, at a lower price.",
    stakes:"If you run coding agents or tool-driven pipelines, this launch decides your monthly bill — the sticker price says \"cheaper than Opus,\" but the per-task math can say the opposite. If you just want a strong daily model, the capability claim mostly holds; it's the economics you need to check before migrating.",
    found:"<b>Re-checked 2026-07-25 — the cost-inversion caveat is now fully confirmed, not just flagged.</b> Artificial Analysis' numbers hold: an average Intelligence Index task still runs $2.29 on Sonnet 5 vs roughly $1.20 on Sonnet 4.6, and the Sept 1 jump to standard pricing ($3/$15) will widen that gap on the same token-inflated traffic. Real and generally available since June 30. The capability story checks out on independent numbers: 80.4% on Terminal-Bench 2.1 (beating Opus 4.8's 74.6%), 1,618 Elo on GDPval-AA v2 knowledge work (edging Opus's 1,615), 81.2% on OSWorld-Verified, 63.2% on SWE-bench Pro (vs Opus's 69.2%). 1M-token context, shipped with intro pricing.",
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
    date:"2026-07-25",
    verdict:"Worth trying — with caveats",
    verdictClass:"v-watch",
    stampLbl:"VERDICT",
    claim:"xAI's smartest model — built for coding, agentic tasks and knowledge work, pitched as the cheapest frontier-class coding model on the market.",
    stakes:"If your agent or coding bills are climbing, this is the launch that actually changes the math: frontier-class coding at $2/$6 with far fewer tokens burned per task. But if you're buying for a company, the parent company's privacy and moderation record is a procurement question no benchmark answers.",
    found:"<b>Re-checked 2026-07-25 — the hallucination caveat is confirmed at the exact number we flagged.</b> Independent reporting now states it plainly: the hallucination rate roughly doubled from Grok 4.3's 25% to 54%, alongside the genuine accuracy gain we filed. xAI still hasn't published a model card, leaving that gap in transparency unresolved. Real and available (API, Cursor, the Grok apps), and the value claim holds up independently: #1 on agentic tool use per Artificial Analysis (Intelligence Index 54, #4 overall), 83.3% on Terminal-Bench 2.1, 64.7% on SWE-Bench Pro (a hair above GPT-5.6 Sol's 64.6%), top of the July 2026 Long-Horizon Terminal Bench, and 29% on Snorkel's GDPVal+ professional tasks — above GPT-5.5 (22%) and Opus 4.8 (21%). The efficiency is the headline: ~16K output tokens per SWE-Bench Pro task vs Opus 4.8's ~67K — 4.2x fewer.",
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
    date:"2026-07-25",
    verdict:"Worth trying — with caveats",
    verdictClass:"v-watch",
    stampLbl:"VERDICT",
    claim:"Google's most advanced model — launch materials touted wins on 13 of 16 benchmarks, PhD-level reasoning, and the top spot on the leaderboards that matter.",
    stakes:"If you pick models off leaderboards, this is the case study in curated benchmark marketing — the wins are real, and so are the losses that didn't make the launch post. And if your work punishes confident wrong answers (research, law, medicine), one number below should make the decision for you.",
    found:"<b>Re-checked 2026-07-25 — verdict holds.</b> Independent reviewers still describe the same split we filed: genuine benchmark leadership paired with a product human evaluators often prefer from Claude Opus 4.8 on Chatbot Arena, and competition math (AIME, FrontierMath) still going to GPT-5.4. The intelligence is real and independently verified: #1 on Artificial Analysis' Intelligence Index (57 — 4 points clear of Claude Opus 4.6), first in 6 of its 10 categories, 77.1% on ARC-AGI-2 (more than double Gemini 3 Pro's score), 76.2% on SWE-bench with real strengths in monorepo analysis and long context. Hallucination genuinely improved — from 88% to 50% on AA-Omniscience. This is a frontier model, not vapor.",
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
  },

  /* --- filed proactively for search coverage (2026-07-25) ---
     High-demand launches people are likely to search for. Same rule as the
     user-request packets above: searchable here, deliberately NOT in
     LEDGER_ORDER — the public record stays small and curated.
     ALIAS NOTE: "deepseek" and "cursor" are bare brand words, safe ONLY while
     each brand has exactly one packet. The moment a second DeepSeek (V5/R2) or
     Cursor packet is filed, whichever sits earlier in PACKETS silently wins
     every bare-word query — drop the bare alias then (see CLAUDE.md).
     No bare "gemini" alias for the same reason: gemini31 already exists. */
  deepseekv4:{
    match:["deepseek v4","deepseek-v4","deepseekv4","deepseek v 4","deepseek pro","deepseek flash","deepseek"],
    name:"DeepSeek V4",
    by:"DeepSeek · previewed April 2026, official release mid-July 2026",
    file:"CASE FILE · AI-2026-020",
    date:"2026-07-25",
    verdict:"Worth trying — with caveats",
    verdictClass:"v-watch",
    stampLbl:"VERDICT",
    claim:"An open-source Chinese model that matches closed frontier models on coding, at roughly a tenth of what OpenAI and Anthropic charge.",
    stakes:"If your coding or agent bills are the thing stopping you from shipping, this is the launch that changes the math the most — the price gap is close to 10x, and the coding ability behind it is independently confirmed. But if you handle customer, health or financial data, where your requests physically travel matters more than any benchmark, and that answer may rule it out entirely no matter how good it is.",
    found:"Real, released, and independently measured — not a paper claim. On the llm-stats tracker (June 2026), DeepSeek-V4-Pro-Max hits <b>80.6% on SWE-bench Verified</b>, statistically tied with Claude Opus 4.7 at 80.8% and within a hair of the 80.9% record. It tops LiveCodeBench at 93.5 and posts a Codeforces ELO of 3206, ahead of GPT-5.5's 3168. Vals AI's Vibe Code Benchmark measured roughly a <b>10x improvement in code generation over V3.2</b>. Both tiers ship a 1M-token context, and the weights are open for anyone to download and self-host.",
    missing:"Independent confirmation for the cheaper tier, and a straight answer on reliability. The US government's own evaluator, NIST/CAISI, assessed V4 Pro in April 2026 and concluded its capabilities <b>lag the frontier by about 8 months</b> — the benchmark ties don't mean parity across the board. For the Flash tier there's still <b>no contamination-free independent re-run</b>: llm-stats lists V4-Flash-Max at 79.0% on SWE-bench Verified while DeepSeek's own technical report says 73.7%, and nobody has reconciled the gap. DeepSeek also publishes <b>no uptime SLA and no guaranteed latency</b> — the API runs best-effort, and 503s and 429s show up under peak demand.",
    signals:"The pricing move is the loudest signal: Computerworld and InfoWorld both covered DeepSeek cutting V4-Pro by <b>75% barely a month after launch</b>, read across the industry as deliberately escalating a price war rather than a routine adjustment. Fortune tied the release to close integration with Huawei's chips. Against all that, the caution is specific and documented, not vague China-panic: every API request routes through Chinese servers, Italy banned DeepSeek's R1 outright over GDPR concerns in 2025, and the consumer chat interface enforces Chinese government censorship on politically sensitive topics (the API carries fewer restrictions but keeps alignment constraints from its training data). Analysts also note it trails Western rivals on ecosystem support, IP provenance and native AWS/Azure/GCP integration.",
    pricing:"After the 75% cut, V4-Pro runs about <b>$3.48 per 1M output tokens — against roughly $30 at OpenAI and $25 at Anthropic</b> for comparable work. Open weights are downloadable, so self-hosting is a real option if the routing question is your blocker.",
    fog:45,
    fogLabel:"Medium",
    fogWhy:"The coding ability is real and independently verified — the fog is everything around the model: where your data travels, no uptime guarantee, and an unverified cheaper tier.",
    next:"Builders watching costs: run it against your own eval set this week — at a tenth of frontier pricing the test is nearly free, and the coding numbers are real. Enterprises with regulated data: get a legal read on the Chinese-server routing before any pilot, and if the answer is no, self-hosting the open weights is the only path that changes it. Teams needing uptime guarantees: don't put it on a critical path without a fallback — there's no published SLA. Everyone else: fine to try, and the price war it started will likely cut your other AI bills too."
  },
  gemini36flash:{
    /* deliberately NO bare "gemini" alias — gemini31 is a different packet and
       sits earlier in PACKETS, so a bare alias here would never be reached. */
    match:["gemini 3.6 flash","gemini 3.6","gemini-3.6","gemini 3.6 flash lite","gemini flash 3.6"],
    name:"Gemini 3.6 Flash",
    by:"Google · launched July 21, 2026",
    file:"CASE FILE · AI-2026-021",
    date:"2026-07-25",
    verdict:"Worth trying — with caveats",
    verdictClass:"v-watch",
    stampLbl:"VERDICT",
    claim:"Google's newest Flash-tier model — beating the previous Flash on every published benchmark, and even outscoring Google's own Gemini 3.1 Pro on the Artificial Analysis Intelligence Index.",
    stakes:"If you already run Gemini Flash, switching is close to a free win — same intelligence, lower bill. But if you're upgrading because you expect a smarter model, you'll be disappointed: independent testing puts it at exactly the same intelligence score as the version it replaces. Knowing which of those two things you're buying is the entire decision here.",
    found:"The efficiency gains are real and specific. Output tokens dropped to <b>$7.50 per 1M from $9.00</b> on Gemini 3.5 Flash while input pricing held at $1.50, and the model burns <b>17% fewer output tokens</b> to finish the same work — so the effective saving is bigger than the sticker cut. The knowledge cutoff jumps from January 2025 to <b>March 2026, a 14-month leap</b>, which matters a lot for anything touching recent events or libraries. On Google's published numbers it beats 3.5 Flash across the board, including 58.7% vs 55.1% on SWE-Bench Pro, and outscores Gemini 3.1 Pro on the AA Intelligence Index, 50 to 46.",
    missing:"The part the launch framing implies but the data doesn't support. Independent testing scores Gemini 3.6 Flash at <b>50 on the Artificial Analysis Intelligence Index — exactly the same as Gemini 3.5 Flash</b>, the model it replaces. The honest one-line summary from that testing: it is <b>faster and cheaper, not smarter</b>. \"Beats 3.5 Flash on every published benchmark\" is true and still leaves you with the same intelligence tier, because which benchmarks get published is a choice.",
    signals:"This is the second Gemini launch in a row where our read lands the same way — real, measurable gains wrapped in framing that invites you to infer more than was delivered (see our Gemini 3.1 Pro verdict, where the omitted benchmarks were the story). Worth saying plainly in Google's favour: nothing here is fabricated, the price and token-efficiency improvements are genuine and immediately useful, and a 14-month knowledge-cutoff jump is a bigger practical upgrade for most people than a couple of index points would have been.",
    pricing:"$1.50 per 1M input / $7.50 per 1M output, down from $9.00 output on 3.5 Flash — and the 17% token reduction compounds that on real workloads.",
    fog:45,
    fogLabel:"Medium",
    fogWhy:"Nothing here is false — the fog is that a cheaper, faster model is being framed in a way that reads like a smarter one, and independently it isn't.",
    next:"Already on Gemini 3.5 Flash: switch — same intelligence, lower cost, far fresher knowledge, no real downside. Hoping for a capability jump: skip this one and stay on your current model, because independent scoring says the intelligence is flat. Builders on long-context or high-volume pipelines: re-run your cost math, since the 17% token reduction is where most of the actual saving lives. Everyone else: it's the default Flash now — just use it."
  },
  cursor35:{
    match:["cursor 3.5","cursor 3","cursor cloud agents","cursor ide","cursor editor","cursor ai","cursor"],
    name:"Cursor 3.5 — Cloud Agents",
    by:"Cursor · 3.0 April 2026, 3.5 launched May 20, 2026",
    file:"CASE FILE · AI-2026-022",
    date:"2026-07-25",
    verdict:"Worth trying — with caveats",
    verdictClass:"v-watch",
    stampLbl:"VERDICT",
    claim:"An AI editor rebuilt around orchestrating agents instead of writing lines — with Cloud Agents that run in isolated cloud VMs, work across multiple repos in parallel, and report back to your IDE asynchronously.",
    stakes:"If you write code for a living, this is the tool most likely to change how your day actually works — and the adoption numbers say your competitors are already on it. But the thing that will bite you isn't the product, it's the bill: several documented cases of a month's subscription draining in a single day, and Cloud Agents are billed separately from the plan you think you're buying. Decide your spending cap before you turn agents loose, not after.",
    found:"Real, shipped, and adopted at serious scale. Cursor 3 landed in April 2026 with up to <b>8 AI agents running in parallel on isolated Git branches</b>, and 3.5 followed on May 20 with Cloud Agents — isolated cloud VMs with full terminal, browser and desktop access that work across multiple repos and report back asynchronously. The adoption is the strongest evidence: <b>over 1 million developers, roughly 360,000 paying customers, and presence inside 64% of the Fortune 500</b> by mid-2026. This is not an early-access experiment.",
    missing:"Honest, predictable pricing. Complaints on Trustpilot and Reddit cluster tightly on billing rather than quality: after the June 2025 billing change, effective request counts on the same $20 plan fell from about <b>500 to roughly 225</b>, with documented cases of a subscription <b>depleting in a single day</b>, and rate limits of 1 request per minute / 30 per hour that active developers hit routinely. Most pointed of all — <b>Cloud Agents are billed separately, and that isn't clearly communicated at signup</b>, which is exactly the kind of gap that turns a good product into a surprise invoice.",
    signals:"Developer consensus is unusually consistent: Cloud Agents are Cursor's real competitive differentiator in 2026, and the pricing is its acknowledged weak point — the common advice to heavy users is to budget deliberately or expect to hit limits mid-sprint. One number deserves a label: the widely-quoted \"<b>1–3 hours saved per developer per day</b>\" is <b>Cursor's own data</b>, not an independent study, so treat it as a vendor claim worth testing rather than a measured fact.",
    pricing:"Pro at $20/month, Pro+ at $60/month for 3x usage across OpenAI, Claude and Gemini models — but the plan price is only part of it: usage-based model access, on-demand overages and separately-billed Cloud Agents all stack on top.",
    fog:45,
    fogLabel:"Medium",
    fogWhy:"The product and its adoption are real and verifiable — the fog sits entirely in the billing, where the advertised plan price isn't what heavy use actually costs.",
    next:"Developers trying it: start on Pro and set a hard spend cap before running Cloud Agents — the productivity case is real, the surprise-invoice risk is the documented failure mode. Teams rolling it out: price a pilot on actual agent usage for a month, not on the $20 headline, and confirm who's watching overages. Evaluating the ROI claim: run your own before/after on a real sprint — the 1–3 hours saved figure is the vendor's own, so it needs your data, not theirs. Everyone else: this is where a lot of professional coding is heading — worth understanding even if you don't buy it."
  },

  /* Filed 2026-07-28, four days after launch, while the argument was still live.
     Searchable only — deliberately NOT in LEDGER_ORDER.
     ALIAS NOTE: no bare "opus" alias. Opus 4.8 is a different, still-current
     model and a bare alias would swallow every query about it. "opus 5" is the
     shortest safe form; its content key {opus,5} doesn't collide with fable5
     {fable,5} or sonnet5 {sonnet,5}. */
  opus5:{
    match:["claude opus 5","opus 5","opus5","opus-5","claude opus5","anthropic opus 5","claude-opus-5"],
    name:"Claude Opus 5",
    by:"Anthropic · launched July 24, 2026",
    file:"CASE FILE · AI-2026-023",
    date:"2026-07-28",
    verdict:"Worth trying — with caveats",
    verdictClass:"v-watch",
    stampLbl:"VERDICT",
    claim:"The most intelligent model available — Fable 5–level capability at half the input price, a 1M-token context window, and the new default on Claude Max.",
    stakes:"This is the rare launch where the benchmark claim is true and the people who used it longest still didn't enjoy it. So your real question isn't \"is it good\" — it's whether you have a week to re-learn a setup that already works. On Claude Max it's already your default, so you're deciding either way.",
    found:"The capability claim holds up independently. <b>Artificial Analysis — who Anthropic engaged to evaluate the model before release — scored Opus 5 (max effort) at 61 on their Intelligence Index</b>, narrowly the highest of any model: ahead of Claude Fable 5 (60), GPT-5.6 Sol (59) and Kimi K3 (57), with the highest GDPval-AA v2 and AA-Briefcase scores recorded so far. They also measured <b>comparable intelligence to Fable 5 at 26% lower cost per task</b>. Vendor-published benchmarks point the same way — more than double Opus 4.8 on Frontier-Bench v0.1, roughly 3x the next-best model on ARC-AGI 3, and within 0.5% of Fable 5's peak on CursorBench 3.2 at half the cost per task. The price is real too: <b>$5/M input and $25/M output, the same as Opus 4.8 and half of Fable 5's input rate</b>.",
    missing:"Any evidence that \"best on the index\" means \"better in your workflow.\" The gap here isn't a disputed number — it's that the benchmark result and the practitioner experience point in opposite directions, and the launch messaging only tells you about the first one. <b>Nothing in the announcement prepares you for the migration cost</b>: the people who tested it longest found it broke setups that had worked fine, and the fix that worked for them was <i>removing</i> the scaffolding they'd built, which is the opposite of what a drop-in upgrade means. There is also no published guidance that a medium reasoning effort can beat the maximum — a finding testers had to discover themselves.",
    signals:"The clearest signal is the split. <b>Dan Shipper, Katie Parrott and Kieran Klaassen at Every</b> spent a week testing it pre-release across coding, writing and their internal agent, and published a verdict titled \"<b>Brilliant in Flashes, Frustrating in Practice</b>\" — calling it \"a hard model to love\" that \"argued with instructions, stopped before the work was finished\" and didn't play well with their existing skills and plugins. Their Day 0 note went further: \"a poor man's Fable,\" with many of Fable's personality quirks but not its top end. <b>Evidence cutting the other way, and it's strong:</b> when the same team deleted their elaborate scaffolding and started fresh, the model got dramatically better — and in a <b>blind taste test Shipper ranked it above every other model, including Fable 5 and GPT-5.6</b>. Kieran Klaassen separately found the model works best at a <b>medium reasoning effort, not the maximum</b> — the setting that tops the benchmark isn't the one he'd reach for day to day. <i>(Corrected 2026-08-03 — we first wrote that as \"lower beats higher\"; his own word is \"medium,\" and we should have quoted him.)</i> Worth noting the source's own track record too: Henry Dowling publicly pointed out that Every had been enthusiastic about Opus 4.8, which makes a negative review from them harder to dismiss as contrarianism.",
    pricing:"$5 per million input tokens and $25 per million output — same as Opus 4.8, half Fable 5's input rate. <b>Fast mode is the line to read twice:</b> roughly 2.5x faster output at $10/$50, double the standard rate — and <b>fast-mode tokens do not count against your plan's included usage; they bill from the first token</b>. It draws on a separate rate-limit pool shared across Opus models and silently falls back to standard speed when that pool or your credits run out. Anthropic did double Claude Code's 5-hour rate limits for Pro, Max, Team and seat-based Enterprise and removed peak-hour throttling on Pro and Max — but <b>the weekly cap did not change</b>.",
    fog:40,
    fogLabel:"Medium",
    fogWhy:"The benchmark claim is true and independently checked — the fog is that \"most intelligent model\" is being heard as \"drop-in upgrade,\" and the people who tested it longest found it broke setups that worked fine before.",
    next:"Already on Claude Max: it's your default now, so give it one real task before judging it — and if it argues or stops early, delete your custom scaffolding and retry plain before concluding it's worse. Migrating an existing agent or skill setup: budget a week, and try a medium reasoning effort before the maximum — that's where Klaassen found it works best, which is the opposite of the usual advice. Buying on price: the $5/M input and 26% lower cost per task are verified, so the savings case is the solid part of this launch. Using fast mode: check your billing before you rely on it — those tokens bill from the first token and never touch your plan's included usage. Everyone else: watch this one for a month — a model topping the index while its heaviest testers complain is exactly how a capability gap gets mistaken for a workflow problem, or the reverse."
  }
};

/* newest first — controls order in the track record.
   kimik3 / musespark11 are deliberately NOT listed here — see the comment
   above their entries in PACKETS and RESEARCH-RUNBOOK.md.
   fable5 was re-checked 2026-07-25 and pulled: the original packet never
   disclosed the US Commerce Department's export-control suspension of the
   model (see its `found` field) — that's a content gap, not a wrong call,
   but it doesn't belong on the curated public record until the correction
   has stood for a bit. It stays in PACKETS, searchable, with the fix applied. */
const LEDGER_ORDER = ["grok45","sonnet5","gemini31","gpt56","agentforce"];
