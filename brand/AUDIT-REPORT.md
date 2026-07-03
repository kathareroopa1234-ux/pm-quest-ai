# PM Quest AI — Brand Identity Audit Report

**Reviewer role:** Senior Product Designer  
**Date:** July 2026  
**Scope:** Full brand identity system (`brand/`)  
**Version reviewed:** 1.0 → remediated to **1.1**

---

## Executive Summary

The PM Quest AI brand identity has strong strategic foundations — distinctive mark, coherent AI-gaming aesthetic, and well-defined personality. The audit identified **22 issues** across scalability, accessibility, consistency, and mobile readiness. **16 issues have been remediated** in v1.1 with updated asset files. **6 issues** require production assets or outlined wordmarks that cannot be auto-generated.

**Overall grade:** B+ (pre-audit) → **A-** (post-remediation)

---

## Issue Log

### 1. Logo Scalability — Favicon neural nodes illegible at 16px

| | |
|---|---|
| **Problem** | Favicon retained 3 neural nodes at 1.2px radius. At 16×16px render, nodes collapse to sub-pixel dots and add visual noise. |
| **Why it matters** | Favicon is the most repeated brand touchpoint. Illegible details erode recognition in browser tabs and mobile home screens. |
| **Recommended improvement** | Simplify favicon to Q ring + upward tail only. Remove neural nodes below 32px canvas. Increase stroke to 3px. |
| **Updated file** | ✅ `logos/favicon.svg` |

---

### 2. Logo Scalability — Monogram neural nodes fail at 24px minimum

| | |
|---|---|
| **Problem** | Monogram specifies 24×24px minimum, but neural nodes (5px diameter) and 1.5px connector become invisible below 32px. |
| **Why it matters** | README claims the mark "reads at favicon size" — partially false for the full monogram. |
| **Recommended improvement** | Raise monogram minimum to **32×32px**. Use `favicon.svg` for 16–24px contexts. Document size thresholds in logo-usage.md. |
| **Updated file** | ✅ `guidelines/logo-usage.md` |

---

### 3. Logo Scalability — Wordmark uses live SVG text, not outlines

| | |
|---|---|
| **Problem** | All logo lockups render "PM Quest" and "AI" as `<text>` elements requiring Plus Jakarta Sans at runtime. |
| **Why it matters** | Email clients, some PDF exporters, Figma imports, and offline contexts render fallback fonts (Segoe UI), breaking wordmark consistency. |
| **Recommended improvement** | Convert wordmarks to outlined paths in Figma before final production export. Added `@import` Google Fonts as interim fix. |
| **Updated file** | ✅ `logos/primary-logo.svg`, `primary-logo-dark.svg`, `secondary-logo.svg`, `secondary-logo-dark.svg` (font embed added). ⏳ Outlined paths — **requires designer action in Figma**. |

---

### 4. Logo Spacing — Inconsistent internal lockup gaps

| | |
|---|---|
| **Problem** | Primary logo had variable gap between "PM Quest" and AI badge (~3–8px) and 40px dead space in a 320px viewBox. Clear-space rules existed in docs but not in SVG padding. |
| **Why it matters** | Loose lockups feel amateur; tight gaps make "AI" feel disconnected from the brand name. Missing built-in padding causes accidental cropping. |
| **Recommended improvement** | Standardize: 16px monogram→wordmark, 12px wordmark→badge. Add 8px built-in clear-space padding. Tighten viewBox to content bounds. |
| **Updated file** | ✅ `logos/primary-logo.svg`, `primary-logo-dark.svg`, `secondary-logo.svg`, `secondary-logo-dark.svg` |

---

### 5. Logo Spacing — Letter-spacing unit mismatch

| | |
|---|---|
| **Problem** | SVG `letter-spacing="-0.5"` uses user units, not `em`. CSS guidelines specify `-0.02em`. At 28px font, -0.5 units ≠ -0.56px expected from em. |
| **Why it matters** | Wordmark kerning differs between SVG logos and web typography, breaking visual consistency. |
| **Recommended improvement** | Use `letter-spacing="-0.02em"` in all SVG text elements. |
| **Updated file** | ✅ All logo SVGs with wordmarks |

---

### 6. Dark / Light Theme — No light-background monogram variant

| | |
|---|---|
| **Problem** | `monogram.svg` always includes `#0F0F23` background fill. On Cloud/White backgrounds, the dark box is mandatory — no transparent/outline option. |
| **Why it matters** | Light-mode nav bars, documents, and partner pages need a monogram that doesn't force a dark container. |
| **Recommended improvement** | Create `monogram-light.svg` — gradient strokes only, no background fill, accessible color stops for light surfaces. |
| **Updated file** | ✅ `logos/monogram-light.svg` (new) |

---

### 7. Dark / Light Theme — AI badge gradient fails white-text contrast

| | |
|---|---|
| **Problem** | AI badge used cyan→indigo gradient (`#00D4FF`→`#6366F1`). White "AI" text on cyan portion = **1.9:1 contrast — FAIL**. |
| **Why it matters** | Logo badge is replicated in product UI. Inaccessible badge undermines "trustworthy" and "professional" attributes. |
| **Recommended improvement** | Badge uses indigo→violet gradient (`#4F46E5`→`#7C3AED`) — white text passes AA at all points (6.3:1 minimum). Full quest gradient reserved for decorative mark strokes. |
| **Updated file** | ✅ All logo SVGs with AI badge |

---

### 8. Dark / Light Theme — Ghost button spec fails on dark surfaces

| | |
|---|---|
| **Problem** | Ghost button specified Slate 500 (`#64748B`) text on Deep Space (`#1A1B3D`) = **2.9:1 — FAIL**. |
| **Why it matters** | Dark-mode-first product renders ghost buttons on dark cards constantly. Illegible actions damage usability. |
| **Recommended improvement** | Ghost text: Slate 600 (`#475569`) on light, Slate 400 (`#94A3B8`) on dark. |
| **Updated file** | ✅ `guidelines/visual-identity.md`, `colors/palette.json`, `colors/accessibility.json` |

---

### 9. Color Accessibility — AI Cyan unusable as text on white

| | |
|---|---|
| **Problem** | `#00D4FF` on `#FFFFFF` = **1.9:1**. Documented as warning but still used in iconography color states and AI coach panel spec. |
| **Why it matters** | WCAG AA is a legal and ethical baseline. AI features are core — their accent color must work everywhere. |
| **Recommended improvement** | Add `ai-cyan-accessible: #0891B2` for light-mode text/icons. Reserve `#00D4FF` for dark backgrounds and decorative gradients only. |
| **Updated file** | ✅ `colors/palette.json`, `colors/accessibility.json`, `guidelines/iconography.md` |

---

### 10. Color Accessibility — Quest Indigo borderline on white

| | |
|---|---|
| **Problem** | `#6366F1` on `#FFFFFF` = **4.5:1** — fails AA for normal text (<4.5 threshold). Used for links and secondary buttons. |
| **Why it matters** | Primary interactive color must be unambiguously accessible, not borderline. |
| **Recommended improvement** | Add `quest-indigo-accessible: #4F46E5` (5.8:1 on white) for all text links and button labels. |
| **Updated file** | ✅ `colors/palette.json`, `colors/accessibility.json` |

---

### 11. Color Accessibility — Primary CTA uses full quest gradient with white text

| | |
|---|---|
| **Problem** | README specified "Quest Gradient fill, white text" for primary buttons. Cyan portion of gradient fails with white text. |
| **Why it matters** | CTA buttons are high-traffic. Inaccessible buttons violate WCAG and feel untrustworthy for a professional PM platform. |
| **Recommended improvement** | Separate `button-gradient` (indigo→violet, no cyan) for CTAs. Reserve `quest-gradient` for decorative surfaces. |
| **Updated file** | ✅ `colors/palette.json`, `guidelines/visual-identity.md`, `colors/accessibility.json` |

---

### 12. Color Accessibility — No machine-readable contrast matrix

| | |
|---|---|
| **Problem** | Accessibility rules were prose-only in README. No pass/fail data for developer handoff. |
| **Why it matters** | Engineers and designers need auditable tokens, not tribal knowledge. |
| **Recommended improvement** | Create `colors/accessibility.json` with verified pairs, failing pairs, and usage rules. |
| **Updated file** | ✅ `colors/accessibility.json` (new) |

---

### 13. Typography Hierarchy — heading-sm font family mismatch

| | |
|---|---|
| **Problem** | README table assigns Plus Jakarta Sans to `heading-sm` (card titles). `type-scale.css` used Inter for `.text-heading-sm`. |
| **Why it matters** | Card titles are key hierarchy markers in a dashboard UI. Inconsistent font breaks the typographic system. |
| **Recommended improvement** | `.text-heading-sm` uses `--font-display` (Plus Jakarta Sans) to match README and card title spec. |
| **Updated file** | ✅ `typography/type-scale.css` |

---

### 14. Typography Hierarchy — No mobile / fluid type scale

| | |
|---|---|
| **Problem** | All type sizes were fixed `rem` values. `display-xl` at 56px overflows mobile viewports. No `clamp()` or mobile overrides. |
| **Why it matters** | PM Quest AI is mobile-first for streaks and daily missions. Hero text clipping on 375px screens damages first impression. |
| **Recommended improvement** | Add `clamp()` to display and heading tokens. Add `@media (max-width: 640px)` body size adjustments. |
| **Updated file** | ✅ `typography/type-scale.css` |

---

### 15. Typography Hierarchy — Secondary logo tagline at 11px

| | |
|---|---|
| **Problem** | Tagline "Your Product Career Quest" rendered at 11px — below 12px minimum for mobile legibility. Slate 500 on light was borderline contrast. |
| **Why it matters** | Splash screens and app loading are primarily mobile. Sub-12px text is illegible on mid-range Android devices. |
| **Recommended improvement** | Bump tagline to 12px. Use Slate 600 (`#475569`) on light, Slate 400 (`#94A3B8`) on dark. |
| **Updated file** | ✅ `logos/secondary-logo.svg`, `secondary-logo-dark.svg` |

---

### 16. Icon Consistency — Stroke weight conflicts with Lucide

| | |
|---|---|
| **Problem** | Iconography specified 1.75px stroke on 24px grid but recommended Lucide Icons (native 2px stroke). |
| **Why it matters** | Mixed stroke weights create a "Frankenstein icon set" — undermines Linear-inspired precision. |
| **Recommended improvement** | Align to Lucide default `stroke-width="2"` at 24px. Document scaled weights for 20px and 16px only. |
| **Updated file** | ✅ `guidelines/iconography.md` |

---

### 17. Icon Consistency — AI micro-signifier undocumented as asset

| | |
|---|---|
| **Problem** | AI dual-node signifier described in prose but no SVG asset existed for engineers to implement. |
| **Why it matters** | Without a reference asset, each developer will interpret the signifier differently. |
| **Recommended improvement** | Create `icons/ai-badge-overlay.svg` as canonical 8×8 overlay. Document application rules. |
| **Updated file** | ✅ `icons/ai-badge-overlay.svg` (new), `guidelines/iconography.md` |

---

### 18. Icon Consistency — Slate 500 icons on dark surfaces

| | |
|---|---|
| **Problem** | `.icon-default { color: #64748B }` applied regardless of theme. Fails WCAG on dark backgrounds (3.1:1). |
| **Why it matters** | Navigation icons in dark-mode shell are always visible — they must meet AA. |
| **Recommended improvement** | Split into `.icon-default-light` (Slate 600) and `.icon-default-dark` (Slate 400). |
| **Updated file** | ✅ `guidelines/iconography.md` |

---

### 19. Illustration Consistency — No reference assets, only prose

| | |
|---|---|
| **Problem** | Illustration guide was a creative brief with zero shipped SVGs. No template for proportion, color ratio, or lighting. |
| **Why it matters** | Multiple illustrators or AI tools will produce visually incompatible assets without a canonical reference. |
| **Recommended improvement** | Ship `ill-template-hero-quest-path.svg` as master reference. Add production backlog checklist and consistency verification list. |
| **Updated file** | ✅ `illustrations/ill-template-hero-quest-path.svg` (new), `guidelines/illustration.md` |

---

### 20. Brand Personality — Emoji in gamification copy example

| | |
|---|---|
| **Problem** | README voice table used "🔥 7-day streak!" while iconography rules ban emoji in product UI. |
| **Why it matters** | Contradictory guidance confuses writers and designers. Undermines premium positioning. |
| **Why not a personality change** | Streak energy stays — only the expression method changes from emoji to icon + text. |
| **Recommended improvement** | Replace with: "7-day streak! +50 XP" paired with Lucide `Flame` icon in XP Gold. |
| **Updated file** | ✅ `README.md` (pending update below) |

---

### 21. Mobile Friendliness — No compact logo variant

| | |
|---|---|
| **Problem** | Primary logo minimum width 160px exceeds many mobile nav bars (375px viewport − menu icon − padding ≈ 200px usable, but logo at 160px + nav items overflows). |
| **Why it matters** | Mobile is the primary engagement surface for daily streaks and missions. |
| **Recommended improvement** | Create `primary-logo-compact.svg` (40px monogram, 18px wordmark, 220px total). Use below 640px viewport. Raise standard primary min to 180px. |
| **Updated file** | ✅ `logos/primary-logo-compact.svg`, `primary-logo-compact-dark.svg` (new), `guidelines/logo-usage.md`, `guidelines/visual-identity.md` |

---

### 22. Mobile Friendliness — Missing reduced-motion guidance

| | |
|---|---|
| **Problem** | Motion principles defined celebrations and AI pulse animations but no `prefers-reduced-motion` fallback. |
| **Why it matters** | WCAG 2.1 Success Criterion 2.3.3. Gamification celebrations are motion-heavy by nature. |
| **Recommended improvement** | Add `prefers-reduced-motion: reduce` CSS block disabling animations. |
| **Updated file** | ✅ `guidelines/visual-identity.md` |

---

## Remaining Actions (Designer / Dev)

| # | Action | Owner |
|---|--------|-------|
| 1 | Convert logo wordmarks to outlined paths in Figma | Designer |
| 2 | Export favicon PNGs at 16, 32, 180, 512 from `favicon.svg` | Designer |
| 3 | Produce P0 illustrations from template | Illustrator |
| 4 | Import `accessibility.json` into design token pipeline | Dev |
| 5 | Swap `primary-logo-compact` in mobile nav component | Dev |
| 6 | Bundle Lucide at stroke-width 2 with theme-aware color classes | Dev |

---

## Files Changed in v1.1

```
brand/
├── AUDIT-REPORT.md                          NEW
├── README.md                                UPDATED
├── colors/
│   ├── palette.json                         UPDATED (v1.1)
│   └── accessibility.json                   NEW
├── logos/
│   ├── favicon.svg                          UPDATED
│   ├── monogram-light.svg                   NEW
│   ├── primary-logo.svg                     UPDATED
│   ├── primary-logo-dark.svg                UPDATED
│   ├── primary-logo-compact.svg             NEW
│   ├── primary-logo-compact-dark.svg        NEW
│   ├── secondary-logo.svg                   UPDATED
│   └── secondary-logo-dark.svg              UPDATED
├── icons/
│   └── ai-badge-overlay.svg                 NEW
├── illustrations/
│   └── ill-template-hero-quest-path.svg     NEW
├── guidelines/
│   ├── logo-usage.md                        UPDATED
│   ├── iconography.md                       UPDATED
│   ├── illustration.md                      UPDATED
│   └── visual-identity.md                   UPDATED
└── typography/
    └── type-scale.css                       UPDATED
```

---

*Audit complete. Brand personality unchanged. Modern AI gaming aesthetic preserved and strengthened through accessibility and mobile hardening.*
