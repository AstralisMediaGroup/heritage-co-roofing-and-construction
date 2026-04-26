---
name: heritage-design-system
description: |
  Use when generating, modifying, or proposing ANY visual / structural / interactivity code for the Heritage Co Roofing & Construction site — page layouts, section components, hero blocks, Astro components, CSS/Tailwind decisions, motion, color/type tokens, photo treatment, Tailwind class lists, section ordering, navigation, footers. Trigger phrases include "build the homepage", "rebuild /commercial/...", "design a section", "lay out", "style this page", "add a hero", "replace this section", "what should the X page look like", "add interactivity", "polish this", "make this less Squarespace", "what tier is this page", "Tier 1 / Tier 2 / Tier 3 page". Skip for: copywriting (use heritage-voice), plan documents, Notion meta-docs, commit messages, status updates, READMEs, anything that is not visual / layout / interactivity work.
---

# Heritage Design System (v2)

Source of truth: [Build Pack v2 — Design Reset](https://www.notion.so/34e93503be1c81689c6de5ff3dc01900). v2 supersedes Build Pack v1 on all visual / structural / interactivity decisions. Content, voice, page inventory, and architecture from v1 still apply.

This skill exists because Plans 005 / 006 / 008 / 009 each tried to polish inside a broken architecture. The architecture itself was the problem: alternating section backgrounds, block-by-block content boxes, weak interactivity, generic bento-grid feel — the Squarespace tell. v2 is a reset.

## What we're imitating

**Visual references — structural only:**
- [Baker Roofing — Commercial Replacement](https://bakerroofing.com/commercial-roof-replacement/) (primary structural ref)
- [Baker — Types of Commercial Roofing](https://bakerroofing.com/types-of-commercial-roofing/) (system tile pattern)
- [Erie Home](https://eriehome.com/) (trust / offer / interactivity reference — visual only, NOT voice)
- [Greenwood Industries Commercial Systems](https://greenwoodindustries.com/roof-systems/commercial/)

**The test for any visual / motion choice:** does Baker or Erie do this? If no, don't add it. The goal is **polish, not sophistication**. Agency-portfolio motion is the *opposite* of the contractor-trust feel.

**What we're not imitating:** Erie's loud direct-response copy ("$0 down! Last roof you'll ever need!") is NOT Heritage voice. Use Erie for layout, trust density, sticky CTAs, header behavior — never for tone. Voice is governed by the `heritage-voice` skill and is locked.

## The five visual rules

These are non-negotiable. If a proposed section breaks one, the section is wrong — don't propose a workaround, redesign.

**1. One base background.** A single warm off-white runs the entire page. No alternating section backgrounds. Visual rhythm comes from photos and type contrast, not bg swaps. A single dark "island" section per page is allowed (e.g. CTA banner) — never two. This rule alone removes ~70% of the Squarespace feel.

**2. Photos as rhythm.** Full-bleed photos where appropriate. Photos can bleed across sections, span full viewport width, sit edge-to-edge. Photos are the **dominant** visual element, not decoration. Photo slots must exist on the page, sized correctly, even when the actual content is `<HeritagePlaceholder>`. The photo gap is real and won't be hidden by text.

**3. Big type contrast.** Display headlines are substantially larger than body — Baker's ratio is roughly 4–5x. Squarespace-y sites land at 2–3x and read flat. If display:body is under 4x on a flagship page, the type system is wrong.

**4. Trust density on flagship pages.** Every Tier 1 page (home, residential landing, commercial landing, `/commercial/metal-roofing`) carries: a stat row, a manufacturer / cert logo strip, and real project photo evidence. Placeholders for now — but the slots must be present and sized. Trust density is a layout requirement, not a content requirement.

**5. One promise per page.** Pick one value claim and lead with it. Don't stack offers. If the hero has three competing CTAs or two competing headlines, cut one.

## Page complexity gradient

Match Baker's gradient explicitly. Not every page gets full polish.

**Tier 1 — Flagship (full polish, custom layouts, distinctive sections):**
- `/` (homepage)
- `/residential` landing
- `/commercial` landing
- `/commercial/metal-roofing` (metal is Heritage's actual portfolio strength)

**Tier 2 — Category / System / Material (shared template, photo-led, real photo + trust slots, less custom layout work):**
- The 7 commercial system pages (other than metal)
- Residential material pages
- Service pages (repair, replacement, storm damage, etc.)

**Tier 3 — Location (near-template, do NOT try to make distinctive):**
- City pages

**Apply tier before designing.** If asked to "polish a city page," the answer is no — Tier 3 stays templated. If asked to "build the homepage," that's Tier 1 — go custom. The gradient is the answer to "how do we hard-launch with less complexity."

## Interactivity vocabulary

**Allowed:**
- Sticky CTAs that scroll-respond
- Hover states with weight (lift, shadow, color shift)
- Lazy-reveal on scroll (simple fade-up, single direction, ≤400ms)
- Smooth anchor scroll
- Header compression on scroll
- Animated stat counters (number count-up, ≤1200ms)
- Photo carousel on project galleries
- Simple fade-in transitions

**Banned:**
- Parallax (any kind)
- Scroll-jacking
- Scroll-pinned sequences
- Page-loader animations
- WebGL
- Custom cursors
- Hero video that takes over the viewport
- Animated SVG illustrations beyond simple icons
- Exotic route transitions

If a request lands in the gray zone between these, the answer is no. Default to less.

## Squarespace tells — banned patterns

If you find yourself producing any of these, stop and rebuild the section:

- Alternating section background colors down the page
- Two-column "image-left, text-right / image-right, text-left" alternation as the only rhythm device
- Bento-grid card walls (3×2, 2×3 boxes of equal-weight content tiles)
- Block-by-block content boxes with a card behind every paragraph
- Equal-weight sections — every section the same height, same padding, same font sizes
- Tabs/accordions/sliders/filters as the page's primary interactivity (most go away in v2)
- "Hero → 3 features → testimonial → 3 features → CTA" template rhythm
- Decorative shapes, blobs, gradient orbs, abstract dividers
- Centered everything — copy always centered, eyebrows always centered

A page should feel **un-templated**. Section heights should vary. One section should dominate. The page should resolve at a final CTA, not just stop.

## Section sizing intuition

Tier 1 pages should have at least one section that occupies ~80–100vh on desktop, anchored by a full-bleed photo. Most other sections are content-driven height (no forced min-height). Avoid ~50vh sections in series — that's the bento rhythm again.

## Tokens — open to redesign

Build Pack v1 locked color palette, font system, and type scale. v2 reopens these. Don't treat v1 tokens as binding. If the v1 type scale lands at 2–3x display:body, it violates rule 3 — propose a new scale.

When tokens change: change them in `src/styles/global.css` (or wherever the design tokens live), not inline. Cascade through component CSS variables.

## What this skill does NOT cover

- **Voice / copywriting** — use `heritage-voice`. This skill says nothing about word choice; that skill says nothing about layout.
- **Page inventory** — locked by Build Pack v1 (~30 pages, all city pages, all system pages). Don't propose adding or removing pages from this skill's scope.
- **Content slots per page** — what information must be present on each page is locked by v1.
- **Factual integrity** — `<HeritagePlaceholder>` for anything Heritage hasn't supplied (photos, warranty terms, project data, manufacturer creds). Don't invent, don't substitute stock for project. Photo-led layouts make missing photos *more* visible — that's working as intended, surface the gap don't hide it.

## Sequencing constraints

Work order is locked by v2 — don't violate.

1. Build this skill (you are doing this now or it is already done).
2. Rebuild the homepage to v2. Single page. No cascading.
3. Rebuild **one** commercial system page — `/commercial/metal-roofing`.
4. **STOP.** Client review of the homepage + metal page before any cascade.
5. If validated → cascade across Tier 1 → Tier 2 → Tier 3.
6. If not validated → only 2 pages of work to redo, not 30.

**Hard rules during this sequence:**
- Do **NOT** propose visual amendments to existing pages. The architecture is the problem; polishing inside it is what failed four times.
- Do **NOT** build pages 3–30 before homepage + metal page are client-validated.
- Do **NOT** loosen voice or factual integrity. Those are v1 locked, not v2 negotiable.
- Use **Sonnet, not Opus.** If running on Opus, surface that to the user before doing visual work.

## Self-check before producing visual code

Before submitting a layout, component, or page:

1. **Does the page have one base background, or are sections alternating?** If alternating, redesign.
2. **Are photos the dominant visual element, or is it cards-on-bg?** If cards-on-bg, redesign.
3. **Is the display:body type ratio at least 4x on a Tier 1 page?** If under 4x, fix the scale.
4. **Does a Tier 1 page carry stat row + cert/manufacturer strip + project photo evidence (slots, not necessarily filled)?** If a slot is missing, add it before shipping.
5. **Is there one promise, or are offers stacked?** If stacked, cut.
6. **Is the interactivity on the allowed list?** If not, remove.
7. **Would Baker or Erie ship this layout?** If no, the architecture is wrong.
8. **Is this Tier 1, 2, or 3 — and does the polish level match?** Don't custom-design Tier 3. Don't template Tier 1.

If any answer fails, don't ship. Rebuild the section.
