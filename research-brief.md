# Research Brief — "Hype vs Reality" Tool for AI Launches

*Role: critical strategist, not cheerleader. Last updated: 2026-07-14. This is a pre-PRD document written so an AI coding assistant can understand the product intent directly. Do NOT build the full backend yet — see the validation plan and open questions at the end.*

---

## The product in one line

A tool where a user **picks a new AI launch (or a topic they follow)** and instantly gets a clear verdict on **what is hype and what is reality** — backed by the evidence behind that verdict.

It is a **personal reality-filter for AI launches.** When something new drops, instead of spending 40 minutes digging through Reddit/X to figure out if it's legit, the user gets a clean evidence packet and a simple label.

### What it is NOT (important)
- It is **NOT** a competitor-tracking or competitive-intelligence tool.
- It does **NOT** give strategy or roadmap advice ("your competitor did X, so do Y"). Never.
- It is **NOT** a daily AI news feed you're supposed to read every day.

It only does one thing: for a new launch/update, it separates **hype from reality** and shows the proof.

---

## The core observation

Users are drowning in AI announcements. Every launch reads like a movie trailer. The hard part is not finding the news — it's figuring out **whether there's a real product behind the marketing fog.** People do this manually today: hunt for Reddit threads, X posts, real user comments, docs, pricing, limits. It's tiring and they repeat it every week. The product automates that "is this actually real?" check.

---

## The decided model (this is the plan — read carefully)

### Free forever (the core check)
The hype-vs-reality check is **always free.** A user comes to the page, **pastes a launch URL (or picks a topic)**, and gets the verdict. Free is the top of the funnel and stays free — it is how we get volume and trust.

### How delivery actually works
- **Pre-made packets are stored in the product.** We prepare a small set of hype-vs-reality packets for popular/recent launches ahead of time.
- **If the user asks for one we already have** → the packet shows **instantly, right on the page.** No email, no wait.
- **If we don't have it yet** → we **collect their email** and send the packet manually via Gmail once it's prepared (concierge — LLMs behind the scenes is fine).

### Premium (the paying line) = automatic tracking
Under **every** output there is one small line:

> *"Want us to track this topic for you? We'll alert you whenever something important happens — with hype vs reality — so you never have to come back and paste anything again. (Premium)"*

Premium = the user picks their topics **once**, and the system **watches them automatically** and pushes a hype-vs-reality update to their email **only when something real happens** (event-driven, NOT daily news). Whoever clicks/says yes to this is our demand signal and our payer. This CTA is also how we learn — without asking — whether people actually want tracking enough to pay.

---

## The output the user gets (the "evidence packet")

For each launch/update:

- **Official claim** — what the company says it does.
- **Proof found** — docs, changelog, pricing page, real demos, independent usage.
- **Proof missing** — what a real product should have but this one doesn't.
- **Real user signals** — what actual users on Reddit/X/reviews say vs the announcement.
- **Pricing & limits** — the boring, real constraints.
- **Hype risk** — how much of this is positioning.
- **Suggested next step** — try now / watch / skip.
- **Confidence label** — one of: **worth trying now · watch later · too early · mostly fog machine.**
- **Premium CTA** — the "track this topic" line at the bottom.

The value is not "more news." It's saving 40 minutes and stopping people from wasting time on something that isn't real yet.

---

## Who it's for

People who **follow AI/tech and keep running into "is this real?"** — builders, indie developers, PMs, researchers, curious operators. Usage is **occasional and intent-driven**: they engage when something catches their eye, not every day.

**First target:** builders and small teams (~2–10 people) who actually try/adopt new tools — they have both the pain and a small budget. Avoid over-indexing on pure hobbyists (loudest, least likely to pay).

---

## Why this is defensible (the moat)

The core research is nearly free — ChatGPT/Perplexity Deep Research already produce a rough version in ~3 minutes. So research is **not** the moat. The moat comes from two things this model builds in:

1. **Public track record (the real moat).** Every verdict is dated and saved ("2026-07-14 — verdict: mostly fog machine"). Over time this becomes an auditable, timestamped accuracy record no cold LLM prompt can reproduce, because a chatbot has no saved history. When a tool we labeled "fog machine" dies six months later, that logged call is proprietary proof. Trust compounds.
2. **Workflow (tracking).** The Premium tracking feature — pick topics once, get alerted only when something real happens — is something a chatbot structurally does not do: it doesn't monitor or remember. This is the switching cost.

We must win on **both**, or it's a feature, not a company.

---

## Business model direction

- **Free forever:** the on-demand hype-vs-reality check (instant if pre-made, else emailed).
- **Premium (paid):** automatic topic tracking + event-driven alerts to email.
- **Pricing shape (to test later):** credit-based / hybrid fits occasional use better than a flat subscription — e.g. light subscription for tracking/alerts. Do not finalize pricing until tracking demand is proven.

---

## The MVP to build (validation-first, do NOT over-build)

Build the **smallest thing that tests demand + willingness to track**, nothing more.

1. **One single landing-page (one HTML file).** One promise: *paste a launch / pick a topic → get a hype-vs-reality check.*
2. **2–3 sample packets hardcoded into the page.** If the user's launch matches one we have → show it **instantly on the page.** If not → capture email and send manually via Gmail later.
3. **The Premium "track this topic" CTA** under every output.
4. **No real backend, no database yet.** Packets live inside the page's JavaScript. Email capture can be a simple form (Tally / Google Form is fine).
5. **Log every verdict publicly from day one** — the track record is the asset, start accumulating immediately.
6. **Hosting:** free subdomain, **no domain purchase needed** — Netlify / Vercel / Cloudflare Pages / GitHub Pages give you `yourapp.netlify.app`-style URLs. Buy a real domain only after validation.

Backend/automation comes **only after** real users show up. Building the backend first is the trap — it turns "get users" into "write code."

---

## Validation plan (do this first, before any real build)

The goal is to test the **wallet and repeat use**, not to ship a platform. Answer three questions:

1. **Demand** — will someone actually request a check?
2. **Retention** — will they come back for a second check **unprompted**?
3. **Willingness** — will they click the Premium "track this topic" CTA / pay?

**Steps (roughly one week):**
1. Build 2–3 sample packets on real recent launches (proof of quality).
2. Ship the single-page site to a free subdomain.
3. Go where the pain lives — **Reddit (r/artificial, r/SaaS, r/ChatGPT) and X.** Offer: "Confused whether a new AI launch is real or hype? Send the URL, I'll send a free hype-vs-reality packet." Collect emails.
4. Deliver packets manually via Gmail, each with the track CTA at the bottom.
5. Watch the numbers below.

**The only metrics that matter (ignore the rest):**
- ~10 check requests in the first week.
- **At least 1 unprompted second request** — this is the real signal that the pain is worth solving.
- Any yes to the Premium "track this topic" CTA — this is the business signal.

If a second unprompted request comes → the idea is alive; only then write the PRD and build for real. If not → the packet or the audience is wrong; fix that, don't build more.

---

## Assumptions most likely to be wrong
1. That users will *pay* to avoid hype (they may just tolerate it — annoyance, not a bleeding wound).
2. That "hype vs reality" is a standalone product and not just a feature of an LLM chat.
3. That aggregating public sources is a moat. It isn't — only the saved track record + tracking workflow is.
4. That the loudest complainers are the buyers. Usually they aren't.

## Strongest arguments against
- ChatGPT/Perplexity already do a rough version of the core check for free.
- The people with the sharpest pain often have the shallowest pockets.
- A wrong "worth trying now" verdict damages the only real asset: trust.
- Occasional usage makes retention hard — the Premium tracking feature is the only thing that pulls people back.

## If it succeeds, the most likely reason
The tool became the **trusted, accountable verdict on what's real** — backed by a public, dated track record that compounds and can't be cold-prompted out of a general LLM, plus a tracking workflow chatbots don't offer. The moat is accumulated trust + workflow, not the AI.

---

## Open questions to answer BEFORE writing a PRD or backend code
1. Will a builder come back for a *second* check unprompted?
2. Will anyone say yes to the Premium "track this topic" CTA?
3. What exactly gets logged into the public track record, and how is accuracy scored?
4. What single label/output does the user actually act on?

*Once #1 and #2 are answered "yes," the PRD writes itself — and it'll be defensible instead of a wrapper.*
