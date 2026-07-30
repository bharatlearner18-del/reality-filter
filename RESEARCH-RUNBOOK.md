# Research runbook — from request to published verdict

How a "not yet filed" search on the site becomes a readable verdict, without it
ever appearing on the public track record. This is a manual/concierge process —
the site has no backend, so nothing here is automatic.

Research log (private, not on the site): https://docs.google.com/document/d/1LeqcIiVj4Th40x8hO-xN9ePkOdRZB0vLf555J0p7x9M/edit

## The flow

1. **Someone searches a launch we haven't filed.** `index.html` shows the
   "We haven't filed this one yet" capture panel (`renderCapture()` in
   `index.html`). They leave their email.
2. **The request lands in the Formspree inbox** — `type: 'packet request'`,
   with the `launch` name and their email. This is the "goes to you" step;
   check the Formspree dashboard for new submissions.
3. **Research it** — by hand, or working through it with Claude. Add an entry
   to the Research Log doc above: official claim, evidence found, evidence
   missing, what experts/real users say, pricing/limits, draft verdict, next
   step advice. Follow the packet-writing standard in `CLAUDE.md` (stakes
   first, name real sources, separate signal from hype, segment the "next
   step" by reader).
4. **Publish it — to `packets.js`, but NOT to the track record:**
   - Add a new entry to the `PACKETS` object (same shape as any existing
     packet: `match`, `date`, `file`, `name`, `by`, `claim`, `stakes`, `found`,
     `missing`, `signals`, `pricing`, `fog`/`fogLabel`/`fogWhy`, `verdict`,
     `verdictClass`, `next`).
   - **Do NOT add its key to `LEDGER_ORDER`.** `LEDGER_ORDER` is the only
     thing that controls what shows up on `track-record.html`. A packet that's
     in `PACKETS` but not in `LEDGER_ORDER` is fully searchable/readable on
     `index.html` (via the search bar or a direct `?q=` link) but invisible on
     the track record. This is the mechanism — nothing else needed.
   - Bump `styles.css`'s cache-buster only if you also touched CSS (adding a
     packet alone doesn't require it).
5. **Reply to the user** (by email, manually) with their link:
   `https://bharatlearner18-del.github.io/reality-filter/index.html?q=<launch name>`
6. **Mark it done in the Research Log** (published packet key + link sent).

## Track record stays curated, separately

The public track record (`LEDGER_ORDER`) is a deliberately small, hand-picked
set — a few calls a month, added when they're worth standing behind, never
edited quietly (see CLAUDE.md's "Re-check, never quietly edit" rule). Packets
filed from user requests via this runbook are a *different, larger* pool: they
exist to answer the person who asked, not to grow the track record. Only move
a request-driven packet into `LEDGER_ORDER` if you separately decide it belongs
in the curated set — that's an intentional editorial choice, not something
this runbook does automatically.

**Who decides: the user.** Nothing reaches `LEDGER_ORDER` on its own, on a
schedule, or because a packet happens to be good. The user picks the calls they
want to stand behind publicly and says so — a few a month at most. Everything
else stays searchable-only, forever, and that is the normal case rather than a
queue waiting to be published. The same rule binds the *copy*: no page may say
or imply that every verdict lands on the record (an `about.html` explainer scene
showing a mock ledger was cut on 2026-07-30 for exactly that reason).
