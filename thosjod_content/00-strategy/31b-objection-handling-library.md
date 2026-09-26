# Objection Handling Library

(Full library referenced from `04-messaging-architecture.md`'s quick-reference table. This is not a separately numbered brief output, but is required by Section 31 of the brief and cross-referenced from Output 05.)

## Cost

**"This seems expensive."** → Pricing is usage-based (credits), not per-seat - cost scales with the traffic you're already paying to acquire, not headcount. See `/pricing`.
**"What's the real total cost with overage?"** → `[PRICING INPUT REQUIRED]` - needs modeled overage scenarios once real usage data exists.

## Implementation Complexity

**"This sounds like a big project."** → No-code setup wizard; no engineering sprint required (Pillar 6, feature "No-code launch and setup").
**"How long until we see value?"** → Depends on knowledge-base size and CRM complexity, not engineering resources - see relevant industry page for typical patterns.

## AI Accuracy / Trust

**"Will the AI say something wrong?"** → Every response is grounded in the approved knowledge base (RAG), with human handoff instead of a guess (Pillar 4).
**"What if it hallucinates in front of a customer?"** → Same guardrail applies; see `/responsible-ai`.

## Data Privacy & Security

**"Is visitor identification even legal?"** → Runs within a configurable, consent-aware framework - see `/responsible-ai`, `/security`. [VERIFY BEFORE PUBLISHING against actual consent-flow implementation before this objection response is used live.]
**"Where is our data stored?"** → `[LEGAL INPUT REQUIRED]` - depends on plan tier (dedicated hosting on Enterprise); actual data-residency specifics not in source material.

## CRM Integration

**"We already have a CRM - will this create duplicate work?"** → Native two-way sync; Thosjod writes and reads, doesn't require manual re-entry (Pillar 6).

## Existing Tools

**"We already have a chatbot / Warmly / an SDR tool."** → See the relevant `/compare/*` page for a factual, non-inflammatory comparison - most existing tools solve one stage of the journey Thosjod solves end-to-end.

## AI Replacing Human Teams

**"Are you trying to replace our sales/support team?"** → No - the agent handles the volume a human team can't staff 24/7 and hands off to a human for anything it can't resolve (Pillar 4). Position as augmentation, not replacement, consistently across sales conversations.

## Lead Quality

**"Won't this just generate a lot of junk leads?"** → Every lead is scored against your ICP before routing - see `/features/qualification-routing`.

## Enterprise Requirements

**"Do you meet our compliance requirements?"** → `[VERIFY BEFORE PUBLISHING]` - do not claim a specific certification (SOC 2, ISO 27001, etc.) unless actually held; see `/enterprise` and `/security`.

## ROI

**"How do we know this will pay for itself?"** → Point to Outcome Metrics (Pillar 9) as what's tracked from day one - do not cite invented ROI percentages; real numbers should come from the customer's own dashboard once live.
