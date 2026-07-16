# Deep Research Report — "Hype vs Reality" Tool for AI Launches

*Role: hard critical strategist, not cheerleader. Last updated: 2026-07-14. Written so an AI coding assistant can understand the product intent directly. Read the verdict, then the parts that hurt.*

---

## Product definition (read this first, everything below assumes it)

The user **picks a new AI launch (or a topic they follow)**. The tool tells them **what is hype and what is reality**, backed by evidence, ending in a simple confidence label.

**It is a personal hype-vs-reality filter for AI launches. It is NOT a competitor tracker, NOT a strategy/roadmap advisor, and NOT a daily news feed.** It never says "your competitor did X, do Y." It only answers: *"this new thing — is it real or is it fog?"*

### The decided model (locked)
- **The core check is FREE, forever.** Paste a launch URL / pick a topic → get the verdict. Free is the funnel and stays free.
- **Instant when we have it, emailed when we don't.** A small set of packets for popular launches is prepared ahead of time. If the user asks for one we already have → it shows **instantly on the page**. If not → we take their **email** and send it manually via Gmail (concierge; LLMs behind the scenes are fine).
- **Premium = automatic tracking.** Under every output: *"Want us to track this topic? We'll alert you only when something important happens — with hype vs reality — no need to come back and paste again. (Premium)"* Pick topics once → the system watches them → pushes an update to email **only when something real happens** (event-driven, NOT daily). This CTA is both the paid feature and the demand signal.

---

## TL;DR verdict

The **pain is real and big**, the **timing is hot**, and **no one owns this exact wedge** ("new launch → evidence packet + hype-vs-reality label"). Good news.

Bad news: the moat problem is real, because ChatGPT and Perplexity **Deep Research already do a rough version of the core check in under 3 minutes with citations.** So this is *not* a "does the tech exist" play — the tech exists for free. It's a **trust, structure, track-record, and workflow (tracking)** play. Build "AI that researches launches" and you lose. Build "the trusted verdict layer with a public accuracy record + a tracking workflow" and you might win.

**Recommendation: do NOT write a full PRD or build a real backend yet. Run the concierge validation first** (see §5 and §9) — but it's now more worth running, because demand signals are strong.

---

## 1. Does this exact idea already exist? (No — but the neighborhood is crowded)

Nobody does the clean "new launch → structured evidence packet + 'worth trying / watch / too early / fog machine' label." But look how much surrounds it:

- **Startup *idea* validators** — Preuve.ai (scans 50+ sources → viability score), DimeADozen.ai, IdeaProof. These validate *your own idea*, not *whether a new launch is real*. Different job, but the **engine (multi-source scan → score) is nearly identical**. Warning: your underlying tech is already productized, just pointed at a different question.
- **AI launch trackers** — Kingy AI "AI Launch Command Center" lists new tools/models. Discovery only, no reality verdict.
- **Hype / trust scorers** — HypeDetector.net, ReviewDetector.ai. Same spirit, different surface.
- **"Is this AI legit?" checklists** — tooldirectory.ai and others publish manual 15-minute checklists. Proof of demand: people literally google this.
- **AI graveyards** — killedbyai, tooldirectory, dang.ai, 404tomb. **This is the big one — see §6.**

**What this means:** the components already exist separately. Your only real opening is *assembly + trust + a specific painful moment (a new launch) + a tracking workflow.* Being "first to combine" is a weak moat on its own — the track record (§6) is what makes it defensible.

---

## 2. Demand is genuinely strong

- **Volume is overwhelming.** ~**100+ "AI does X" launches per week** on Product Hunt alone (~14/day). Raw fuel for the pain.
- **Fatigue is mainstream.** The community is openly tired and shifting to "less novelty, more utility."
- **Trust anchors are broken.** Product Hunt has a known **vote-selling / gaming problem** → people need *independent* verification.
- **Vaporware is the norm.** Multiple sources estimate **85–90% of new AI tools are thin wrappers or vaporware.** Builder.ai (once >$1B) collapsed after overstating revenue ~4x. The "half of this is a fog machine" thesis is empirically true.
- **Large reachable audience.** TLDR AI ~1.1M readers, Ben's Bites ~120K builders/founders. r/ChatGPT 4M, r/MachineLearning 3M.

**Shape of the demand:** **occasional and intent-driven**, not daily. People check when something catches their eye. This kills a "daily news app" and points exactly to **free on-demand checks + a Premium tracking layer** — which is the decided model.

---

## 3. The moat problem (read this twice)

> **Perplexity Deep Research produces a cited, multi-source report in under 3 minutes. ChatGPT Deep Research produces a deeper one. Both are available to your exact users right now.**

So when a user wonders "is this launch real?", they can already get ~80% of your packet by pasting the URL into Perplexity. And AI communities have a reflex you must survive: **"what does this do that Claude/ChatGPT can't?"** — the first reply to any new $20/mo tool.

**Where general LLMs are weak (your only openings):**
1. **Accuracy / trust.** Perplexity was found **wrong ~37% of the time** despite citing sources. A tool with a **published, auditable accuracy record** offers *accountability* no chatbot does.
2. **Structure & repeatability.** A fixed packet is scannable and comparable across launches; a chatbot's answer is differently-shaped every time.
3. **Track record over time (the real moat — see §6).**
4. **Workflow (the Premium tracking feature).** Pick topics once → the tool watches them, alerts only when something real happens, remembers history. Chatbots don't monitor or remember. This is the switching cost.

You must clearly win on **track record + tracking**, or this is a feature, not a company.

---

## 4. Willingness to pay — realistic, with a catch

**The model is built to test this cleanly:** the check is free, and the *only* paid thing is the tracking feature. The Premium "track this topic" CTA under every output doubles as a demand probe — clicks tell you who values tracking enough to pay, without you having to ask.

**Market tailwind:** **credit-based / hybrid pricing grew 126% in 2025**; ~41% of AI SaaS now uses hybrid (projected 61% by end of 2026). A light subscription for tracking/alerts fits occasional usage.

**The catch:** for **market/general-research tasks specifically, the gap between purpose-built tools and general-purpose AI is "narrower"** than other categories — i.e. this is one of the *easiest* jobs for ChatGPT to eat. So willingness to pay rides almost entirely on the **tracking workflow + trust/track-record wedge**, not the research itself. That is exactly why the free/premium split puts the paid line on tracking, not on the check.

**Who has budget:** not pure hobbyists (loudest, poorest). The payers are builders / small teams who actually adopt tools and get burned when they waste time on vaporware.

---

## 5. Niche + MVP

**First niche:** builders and small teams (~2–10 people) who follow AI topics and actually try new tools. Confirmed.

**Positioning — do NOT call it "AI news."** Call it the **"hype-vs-reality check"** or **"the sanity check for AI launches."** The value is *saving 40 minutes and not wasting time on something that isn't real yet.*

**MVP (concierge, no real backend):**
1. **One single landing page (one HTML file).** One promise: *paste a launch / pick a topic → get a hype-vs-reality check.*
2. **2–3 sample packets hardcoded in the page.** Match → show **instantly on the page**. No match → capture email, send manually via Gmail.
3. **The Premium "track this topic" CTA** under every output.
4. **No database, no server logic yet** — packets live in the page's JavaScript; email capture via a simple form.
5. **Log every verdict publicly from day one** — the track record is the asset.
6. **Hosting:** free subdomain, **no domain purchase needed** (Netlify / Vercel / Cloudflare Pages / GitHub Pages → `yourapp.netlify.app`). Buy a domain only after validation.
7. **The one metric that matters: does anyone come back for a second check unprompted?** Repeat = real.

No backend, no automation, no dashboard until people ask to track more than one topic. Building the backend first is the trap.

---

## 6. The single best strategic insight

**The moat is the track record, and the graveyards prove it's valuable.**

There are already multiple "AI graveyards": **dang.ai lists 1,774 dead AI tools (29.6% of its directory), 404tomb 659, others 170+. 65 AI tools died in 2026 alone — the worst year on record — and 40% just let their domain expire.** People clearly find *"which tools died"* useful.

But every graveyard is **backward-looking** — a post-mortem. Nobody does the **forward-looking** version: *calling it at launch and keeping score.* If your tool labels something "**mostly fog machine**" on launch day and that tool is dead six months later, **that logged, public, timestamped accuracy record is a proprietary dataset a cold ChatGPT prompt can never reproduce.** That's the compounding data loop the 2026 moat playbook demands. The graveyards are your validation *and* your proof of the endgame — you're building the graveyard's *predictive front end.*

**This is the version worth building** — not "AI research assistant for launches" (wrapper), but **"the hype-vs-reality verdict service with a public track record and a tracking workflow."**

---

## 7. What kills this (risks, ranked)

1. **General LLMs close the gap.** For general research they're already close. Mitigation: compete on trust + track record + tracking workflow, never on raw research.
2. **Willingness to pay never materializes.** People tolerate hype for free. The free check + paid-tracking split, plus the CTA probe, exists to kill this fast and cheap.
3. **Accuracy liability.** A wrong "worth trying now" on something that turns out to be a scam damages your only asset (trust). Be willing to say "not enough proof," and log everything.
4. **Occasional usage → weak retention.** Solved only by the Premium tracking / alerts / track record that pull people back between checks.
5. **Incumbents move in.** Ben's Bites' premium tier is already about "whether it's worth integrating into your stack." Someone with 120K followers is one feature away. Speed and niche focus are the defense.
6. **Drifting into a content site.** Easy to become "another AI newsletter." Stay a *decision tool* with a paid tracking layer, not an ad/audience play.

---

## 8. Honest final verdict

This is **the strongest version of the idea so far.** Real, felt, weekly pain; a hot market; a defined user; an on-trend pricing model; and — crucially — a **genuine moat candidate (the public track record + tracking workflow) that big LLMs structurally cannot copy.**

It is **not** a slam dunk. The core research feature is already free inside ChatGPT/Perplexity, so everything rides on execution of trust + track record + tracking workflow. Build "AI that researches launches" and you're dead in a quarter. Build "the accountable hype-vs-reality verdict service that keeps score and tracks for you" and you have a shot.

---

## 9. Do this next, in order

1. Build **2–3 sample packets** on real recent launches (proof of quality).
2. Ship a **single-page site** to a free subdomain (no domain, no backend) — instant packet if pre-made, email capture if not, Premium track CTA under every output.
3. **Recruit from where the pain lives** — Reddit (r/artificial, r/SaaS, r/ChatGPT) and X. Offer free packets, collect emails, deliver manually via Gmail.
4. **Log every verdict publicly from day one** — start accumulating the track record immediately.
5. Watch two signals: **a second unprompted check request**, and **any yes to the Premium track CTA.**
6. Only *after* repeat + tracking-interest signals: write the PRD (now defensible), build the real backend, and hand it off.

Don't skip to step 6. The whole point of the product is not believing hype until it's proven — apply that to your own idea too.

---

## Sources
**Competitors / adjacent tools**
- [Preuve.ai — idea validator, 50+ sources](https://preuve.ai/) · [DimeADozen.ai](https://www.dimeadozen.ai/best-startup-idea-validation-tools-2026) · [IdeaProof](https://ideaproof.io/) · [Kingy AI Launch Command Center](https://kingy.ai/ai-launches/) · [HypeDetector](https://hypedetector.net/) · [ReviewDetector](https://reviewdetector.ai/en)
- [How to tell if an AI tool is legit (ToolDirectory)](https://tooldirectory.ai/blog/how-to-tell-if-an-ai-tool-is-legit-2026) · [85% wrapper tools (Avidclan)](https://www.avidclan.com/blog/stop-buying-scammy-ai-tools/) · [Avoiding AI vaporware (Domo)](https://www.domo.com/blog/investing-in-ai-heres-how-to-avoid-buying-vaporware)

**Demand / market size / fatigue**
- [Product Hunt AI launch playbook 2026 (~100+/wk)](https://www.tooljunction.io/guides/product-hunt-launch-checklist-2026) · [Product Hunt daily launch history](https://hunted.space/history) · [Product Hunt vote-selling/spam](https://www.producthunt.com/stories/let-s-talk-about-spam)
- [Ben's Bites growth & premium tier](https://growthinreverse.com/bens-bites/) · [Ben's Bites 120K / a16z](https://aiforautomation.io/news/2026-03-30-bens-bites-120k-ai-newsletter-founder-a16z) · [TLDR AI 1.1M readers](https://www.readless.app/blog/tldr-newsletter-review-2026)
- [Reddit "what does this do that Claude can't?"](https://beginnersinai.org/best-ai-tools-reddit-2026/)

**AI graveyards (the track-record thesis)**
- [Killed by AI](https://mixtpatrik.github.io/killedbyai/) · [AI Graveyard report — what kills AI tools (ToolDirectory)](https://tooldirectory.ai/blog/ai-graveyard-report-what-kills-ai-tools-2026) · [dang.ai — 1,774 dead tools](https://dang.ai/ai-graveyard) · [404Tomb — 659 dead](https://404tomb.com/ai-graveyard) · [Boing Boing — 142 buried](https://boingboing.net/2026/05/07/ai-graveyard-142-ai-services-so-far-dead-many-more-to-come/)

**Moat & pricing**
- [AI Moats in 2026 (Valtorian)](https://www.valtorian.com/blog/ai-moats-2026) · [Moat or wrapper (Linkingrow)](https://www.linkingrow.com/2026/06/16/is-your-ai-product-a-moat-or-a-wrapper-the-new-defensibility-map-for-ai-startups/)
- [Perplexity vs ChatGPT Deep Research (speed/accuracy)](https://theaiagentindex.com/compare/perplexity-ai-vs-chatgpt-deep-research) · [Perplexity Deep Research review](https://www.secondtalent.com/resources/perplexity-deep-research-review/)
- [Credit-based AI pricing trends 2026 (Metronome)](https://metronome.com/blog/2026-trends-from-cataloging-50-ai-pricing-models) · [Usage-based pricing 2026 (Flexprice)](https://flexprice.io/blog/why-ai-companies-have-adopted-usage-based-pricing)
