# Iconography Style Guide

## Grid System

All icons are designed on a **24×24px** base grid with **2px** outer padding.

```
┌────────────────────────┐ 24px
│ ░░                  ░░ │
│ ░░   ┌──────────┐   ░░ │ ← 2px padding
│ ░░   │  20×20   │   ░░ │
│ ░░   │ live area│   ░░ │
│ ░░   └──────────┘   ░░ │
│ ░░                  ░░ │
└────────────────────────┘
```

## Stroke Specifications

**Base library:** Lucide Icons with `stroke-width="2"` (Lucide default).

| Canvas | Lucide stroke-width | Notes |
|--------|---------------------|-------|
| 24px | 2 | Default — do not override |
| 20px | 1.75 | Scale down proportionally |
| 16px | 1.5 | Minimum legible stroke |

- **Line caps:** Round
- **Line joins:** Round
- **Optical alignment:** Visually center icons that are triangular or asymmetric

> **Do not use 1.75px on 24px canvas** — this conflicts with Lucide's native 2px stroke and creates visual inconsistency across the icon set.

## Color States

```css
/* Light backgrounds */
.icon-default-light  { color: #475569; }  /* Slate 600 — WCAG AA */
.icon-active-light   { color: #4F46E5; }  /* Indigo accessible */
.icon-ai-light       { color: #0891B2; }  /* AI cyan accessible */

/* Dark backgrounds */
.icon-default-dark   { color: #94A3B8; }  /* Slate 400 — WCAG AA */
.icon-active-dark    { color: #818CF8; }  /* Indigo 400 */
.icon-ai-dark        { color: #22D3EE; }  /* AI cyan on dark */

/* Semantic (both modes) */
.icon-success  { color: #10B981; }
.icon-xp       { color: #F59E0B; }
.icon-danger   { color: #EF4444; }
```

## AI Micro-Signifier

Icons for AI-powered features include a **dual-node mark** (two 2px dots + 1px connector) in the bottom-right corner at 60% opacity. Spec: see `icons/ai-badge-overlay.svg`.

Apply to: AI Coach, AI feedback, AI-generated portfolio, simulation hints.
Do **not** apply to: navigation, gamification, or non-AI actions.

## Touch Targets (Mobile)

- Minimum tap area: **44×44px** regardless of icon canvas size.
- Center 24px icon inside a 44px hit zone with padding.

## Recommended Icon Library

Use **Lucide Icons** at `stroke-width="2"`. Map key product concepts:

| Concept | Lucide icon | Color state |
|---------|-------------|-------------|
| AI Coach | `Sparkles` | `.icon-ai-dark` / `.icon-ai-light` |
| Boss Battle | `Swords` | `.icon-danger` |
| Streak | `Flame` | `.icon-xp` |
| XP / Achievement | `Star` | `.icon-xp` |
| Quest path | `Map` | `.icon-active-*` |
| PRD / Portfolio | `FileText` | `.icon-default-*` |
| Stakeholder sim | `Users` | `.icon-default-*` |
| Level up | `TrendingUp` | `.icon-success` |

## Icon Don'ts

- No mixed stroke weights within a single icon set.
- No emoji substitutes for UI icons in product surfaces.
- No photorealistic or 3D icons in the app chrome.
- No `#64748B` (Slate 500) icons on dark surfaces — fails WCAG AA.
