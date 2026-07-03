# PM Quest AI — Brand Identity System

**Version:** 1.1  
**Owner:** Roopa Kathare  
**Last updated:** July 2026  
**Audit:** See [AUDIT-REPORT.md](./AUDIT-REPORT.md) for full design review (22 issues identified, 16 remediated)

---

## Table of Contents

1. [Brand Overview](#1-brand-overview)
2. [Brand Personality](#2-brand-personality)
3. [Logo System](#3-logo-system)
4. [Color Palette](#4-color-palette)
5. [Typography](#5-typography)
6. [Logo Usage Guidelines](#6-logo-usage-guidelines)
7. [Iconography Style](#7-iconography-style)
8. [Illustration Style](#8-illustration-style)
9. [Visual Identity Guidelines](#9-visual-identity-guidelines)
10. [Brand Voice & Tone](#10-brand-voice--tone)
11. [Asset Directory](#11-asset-directory)
12. [Implementation Checklist](#12-implementation-checklist)

---

## 1. Brand Overview

**PM Quest AI** is an AI-powered, gamified learning platform that helps aspiring Product Managers and AI Product Managers prepare for interviews through immersive simulations, AI coaching, and portfolio generation.

### Brand Essence

| Element | Definition |
|---------|------------|
| **Name** | PM Quest AI |
| **Tagline** | *Your Product Career Quest* |
| **Promise** | Learn by doing. Level up with AI. Land the role. |
| **Positioning** | The Duolingo for Product Management — premium, AI-first, portfolio-driven |

### Design Philosophy

The identity draws inspiration from world-class product brands without copying them:

| Inspiration | What we borrow | How PM Quest AI differs |
|-------------|----------------|-------------------------|
| **Duolingo** | Playful progression, streak energy | More premium; career-focused, not language-casual |
| **Notion** | Clean layouts, approachable clarity | More futuristic; gamified UI with XP and levels |
| **OpenAI** | AI-first trust, neural motifs | Warmer; human career coach, not cold lab aesthetic |
| **Linear** | Precision, dark-mode elegance | More colorful; achievement-driven gamification layer |
| **Stripe** | Premium polish, gradient sophistication | More energetic; quest narrative and boss battles |

### The Mark — "The Quest Portal"

The logo monogram combines three symbolic layers:

1. **The Q Ring** — A quest loop: continuous learning and iteration (the PM build-measure-learn cycle).
2. **The Upward Tail** — Progress and career ascent; the arrow breaks out of the ring toward opportunity.
3. **The Neural Triad** — Three connected nodes representing AI coaching, simulations, and portfolio intelligence.

Together they form a distinctive, ownable mark that reads at favicon size and scales to billboard scale.

---

## 2. Brand Personality

### Personality Spectrum

```
Playful ◆━━━━━━━●━━━━━━━◆ Corporate
              ↑ PM Quest AI sits here: professional with energy

Casual  ◆━━━━━━●━━━━━━━━◆ Formal
             ↑ approachable expert, not stiff

Bold    ◆━━━━━━━●━━━━━━━◆ Restrained
              ↑ confident, not loud

Human   ◆━━━━●━━━━━━━━━━◆ Robotic
           ↑ AI-powered but warm and coaching-oriented
```

### Brand Attributes

| Attribute | Expression |
|-----------|------------|
| **Modern** | Clean geometry, generous whitespace, fluid gradients |
| **Premium** | Deep midnight palette, refined typography, subtle glow effects |
| **Futuristic** | Neural motifs, cyan-to-violet gradients, dark-mode-first UI |
| **Trustworthy** | Consistent spacing, accessible contrast, professional copy |
| **Professional** | Structured layouts, credible tone, recruiter-ready outputs |
| **AI-first** | Gradient badges, coach iconography, intelligent micro-interactions |
| **Gamified** | XP gold accents, level-up greens, celebratory motion (not childish) |

### Brand Archetype

**The Sage + The Hero** — A wise AI mentor guiding the user on a heroic career quest. We teach with authority; we motivate with adventure.

---

## 3. Logo System

### 3.1 Primary Logo

**File:** `logos/primary-logo.svg`  
**Variant (dark backgrounds):** `logos/primary-logo-dark.svg`

| Property | Value |
|----------|-------|
| **Layout** | Horizontal — monogram + "PM Quest" wordmark + "AI" gradient badge |
| **Use when** | Website header, marketing site, pitch decks, email signatures, social cover photos |
| **Min width** | 180px digital / 25mm print |
| **Mobile variant** | `primary-logo-compact.svg` (min 140px, use below 640px viewport) |
| **Background** | Light (`#F8FAFC`, `#FFFFFF`) for standard; dark variant for `#0F0F23` and darker |

The primary logo is the default brand lockup. Always prefer it when horizontal space allows.

---

### 3.2 Secondary Logo

**File:** `logos/secondary-logo.svg`  
**Variant (dark backgrounds):** `logos/secondary-logo-dark.svg`

| Property | Value |
|----------|-------|
| **Layout** | Stacked — monogram centered above wordmark and tagline |
| **Use when** | App splash screens, square social avatars with text, vertical banners, merchandise, conference booth panels |
| **Min width** | 80px digital / 20mm print |
| **Includes tagline** | "Your Product Career Quest" |

Use the secondary logo when the primary logo would be too small to read, or when a vertical composition fits the layout better.

---

### 3.3 Monogram / Icon Logo

**File:** `logos/monogram.svg`

| Property | Value |
|----------|-------|
| **Layout** | Square app icon with rounded corners (16px radius at 64×64) |
| **Use when** | App icon, profile pictures, watermarks, loading screens, social avatars (icon-only) |
| **Min size** | 32×32px digital (use `favicon.svg` for 16–24px) |
| **Light backgrounds** | `monogram-light.svg` (no dark fill) |
| **Do not** | Add text inside the monogram; do not rotate or skew |

The monogram is the most recognizable standalone asset. It should appear on the app home screen, push notifications, and anywhere the full wordmark is impractical.

---

### 3.4 Favicon

**File:** `logos/favicon.svg`

| Property | Value |
|----------|-------|
| **Layout** | Simplified monogram optimized for 16–32px rendering |
| **Use when** | Browser tabs, bookmarks, PWA manifest, browser shortcuts |
| **Export sizes** | Generate PNG at 16×16, 32×32, 180×180 (Apple touch), 512×512 (PWA) from this master |

**HTML implementation:**

```html
<link rel="icon" type="image/svg+xml" href="/brand/logos/favicon.svg">
<link rel="icon" type="image/png" sizes="32x32" href="/brand/logos/favicon-32.png">
<link rel="apple-touch-icon" sizes="180x180" href="/brand/logos/apple-touch-icon.png">
```

---

## 4. Color Palette

**Machine-readable tokens:** `colors/palette.json`  
**WCAG contrast matrix:** `colors/accessibility.json`

### Primary Brand Colors

| Name | HEX | RGB | Usage |
|------|-----|-----|-------|
| **Quest Indigo** | `#6366F1` | 99, 102, 241 | Primary buttons, links, active nav, brand accents |
| **AI Cyan** | `#00D4FF` | 0, 212, 255 | AI features, highlights, gradient start, neural nodes |
| **Portal Violet** | `#A855F7` | 168, 85, 247 | Premium tier, boss battles, gradient end |

### Neutral Palette

| Name | HEX | Usage |
|------|-----|-------|
| **Midnight** | `#0F0F23` | Primary dark background, logo mark fill |
| **Deep Space** | `#1A1B3D` | Secondary dark surfaces, elevated cards |
| **Slate 700** | `#334155` | Primary body text (light mode) |
| **Slate 500** | `#64748B` | Secondary text, captions |
| **Slate 200** | `#E2E8F0` | Borders, dividers |
| **Cloud** | `#F8FAFC` | Light mode page background |
| **White** | `#FFFFFF` | Cards, inverse text |

### Semantic / Gamification Colors

| Name | HEX | Usage |
|------|-----|-------|
| **XP Gold** | `#F59E0B` | Experience points, streaks, achievements |
| **Level-Up Green** | `#10B981` | Mission complete, success states, progress bars |
| **Boss Red** | `#EF4444` | Boss battle mode, errors, destructive actions |
| **Coach Blue** | `#3B82F6` | AI coach chat bubbles, info alerts |

### Signature Gradient

```css
/* Quest Gradient — logo, hero sections, premium badges */
background: linear-gradient(135deg, #00D4FF 0%, #6366F1 52%, #A855F7 100%);
```

### Color Accessibility

- Body text on light: **Slate 700** (`#334155`) on Cloud — 9.1:1 ✓
- Secondary text on light: **Slate 600** (`#475569`) — 6.2:1 ✓
- Body text on dark: **Slate 200** (`#E2E8F0`) on Midnight — 12.4:1 ✓
- Secondary text on dark: **Slate 400** (`#94A3B8`) — 5.1:1 ✓
- Text links on light: **Indigo Accessible** (`#4F46E5`) — not `#6366F1`
- AI labels on light: **AI Cyan Accessible** (`#0891B2`) — not `#00D4FF`
- Primary buttons: **Button Gradient** (indigo→violet) with white text — not full quest gradient
- Never use gradient text for body copy; reserve quest gradient for decorative surfaces and logo mark
- Full contrast matrix: `colors/accessibility.json`

---

## 5. Typography

### Type Stack

| Role | Font | Weight | Fallback |
|------|------|--------|----------|
| **Display / Headlines** | Plus Jakarta Sans | 700 (Bold), 800 (ExtraBold) | Segoe UI, system-ui, sans-serif |
| **Body / UI** | Inter | 400 (Regular), 500 (Medium), 600 (SemiBold) | Segoe UI, system-ui, sans-serif |
| **Monospace / Code** | JetBrains Mono | 400, 500 | Consolas, monospace |

### Why These Fonts

- **Plus Jakarta Sans** — Geometric yet friendly; premium feel similar to Linear/Stripe without licensing custom type. Strong for "PM Quest" wordmark and hero headlines.
- **Inter** — Notion-grade readability at all sizes; excellent for dashboards, lesson content, and UI labels.
- **JetBrains Mono** — Signals technical credibility for AI PM tracks, API docs, and portfolio code snippets.

### Type Scale (Desktop)

| Token | Size | Line Height | Weight | Use |
|-------|------|-------------|--------|-----|
| `display-xl` | 56px / 3.5rem | 1.1 | 800 | Landing hero |
| `display-lg` | 40px / 2.5rem | 1.15 | 700 | Page titles |
| `heading-md` | 28px / 1.75rem | 1.25 | 700 | Section headers |
| `heading-sm` | 20px / 1.25rem | 1.3 | 600 | Card titles |
| `body-lg` | 18px / 1.125rem | 1.6 | 400 | Lesson content |
| `body-md` | 16px / 1rem | 1.6 | 400 | Default UI text |
| `body-sm` | 14px / 0.875rem | 1.5 | 400 | Captions, meta |
| `label` | 12px / 0.75rem | 1.4 | 600 | Badges, overlines |

### Typography Rules

1. Headlines use **negative letter-spacing** (`-0.02em` to `-0.03em`) for a tight, premium feel.
2. All caps only for short labels (e.g., "AI", "XP", "BOSS BATTLE") — never for sentences.
3. Maximum line length: **65 characters** for body text.
4. The word **Quest** in marketing copy may use Quest Gradient as a text fill — sparingly.

### Google Fonts Import

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@700;800&display=swap" rel="stylesheet">
```

---

## 6. Logo Usage Guidelines

### Clear Space

Maintain clear space equal to **the height of the monogram** on all four sides of any logo lockup. No text, graphics, or UI elements may enter this zone.

```
        ← 1× monogram height →
    ┌─────────────────────────────┐
    │         CLEAR SPACE         │
    │   ┌───────────────────┐     │
    │   │  [icon] PM Quest  │     │
    │   └───────────────────┘     │
    │         CLEAR SPACE         │
    └─────────────────────────────┘
```

### Minimum Sizes

| Asset | Digital minimum | Print minimum |
|-------|-----------------|---------------|
| Primary logo | 160px wide | 25mm wide |
| Secondary logo | 80px wide | 20mm wide |
| Monogram only | 24×24px | 8mm |
| Favicon | 16×16px | N/A |

### Approved Backgrounds

| Background | Logo version |
|------------|--------------|
| White, Cloud (`#F8FAFC`) | Primary (standard) |
| Midnight, Deep Space, photos with dark areas | Primary dark |
| Quest Gradient | White monogram only (no wordmark) OR white full logo with reduced opacity badge |
| Busy photography | Place logo on solid Midnight or White panel with 16px+ padding |

### Logo Don'ts

| ❌ Don't | Why |
|---------|-----|
| Stretch or distort proportions | Breaks premium feel |
| Change gradient colors | Dilutes brand recognition |
| Add drop shadows or outer glows | Logo includes built-in glow; extra effects look amateur |
| Place on low-contrast backgrounds | Fails accessibility; looks untrustworthy |
| Rotate the logo | The upward tail signifies progress — rotation breaks meaning |
| Recreate the wordmark in a different font | Always use provided SVG assets |
| Separate "AI" badge from "PM Quest" in primary lockup | Badge is integral to the horizontal logo |
| Use monogram with competing circular icons nearby | Reduces distinctiveness |

---

## 7. Iconography Style

### Design Principles

PM Quest AI icons follow a **rounded geometric** system — inspired by Linear's precision and Notion's warmth.

| Property | Specification |
|----------|---------------|
| **Grid** | 24×24px base canvas, 2px padding → 20×20px live area |
| **Stroke weight** | 1.75px (scale proportionally at 16px and 32px) |
| **Corner radius** | 2px on rectangular elements; fully rounded caps and joins |
| **Style** | Outlined default; filled for active/selected states |
| **Color** | Slate 500 default; Quest Indigo active; semantic colors for gamification |

### Icon Categories

| Category | Examples | Color treatment |
|----------|----------|-----------------|
| **Navigation** | Home, Missions, Portfolio, Coach, Profile | Slate 500 → Indigo when active |
| **Gamification** | XP star, Level badge, Streak flame, Trophy | XP Gold, Level-Up Green |
| **AI** | Sparkle, Neural nodes, Chat bubble, Wand | AI Cyan or Quest Gradient |
| **Learning** | Play, Checkpoint, Document, Simulation | Slate 500 / Coach Blue |
| **Actions** | Add, Edit, Share, Download, Submit | Indigo primary; Red destructive |

### AI Feature Icons

AI-specific icons include a subtle **dual-node connector** detail (two dots linked by a line) in the corner — a micro-signifier that an feature is AI-powered without repeating the full logo.

### Icon Don'ts

- No mixed stroke weights within a single icon set.
- No emoji substitutes for UI icons in product surfaces.
- No photorealistic or 3D icons in the app chrome (reserved for marketing illustrations).

---

## 8. Illustration Style

### Concept: "Guided Futurism"

Illustrations blend **isometric career landscapes** with **soft AI glow** — aspirational, not cartoonish.

### Visual Characteristics

| Element | Guideline |
|---------|-----------|
| **Perspective** | Soft isometric (15–20°) for scenes; flat for spot illustrations |
| **Figures** | Diverse, simplified human forms; no detailed facial features (inclusive, timeless) |
| **Environments** | Abstract office/portal/quest-map settings; floating UI panels showing PM artifacts (PRDs, roadmaps, metrics) |
| **AI representation** | Glowing orb coach, connected node paths, gradient trails — never humanoid robots |
| **Color** | Midnight backgrounds with Quest Gradient accents; XP Gold for reward moments |
| **Lighting** | Single top-left light source; soft cyan/violet rim light on edges |
| **Texture** | Clean vector with subtle grain overlay (3–5% opacity) for marketing only |

### Illustration Types

| Type | Use | Example scenes |
|------|-----|----------------|
| **Hero** | Landing page, empty states | User ascending quest path toward PM role |
| **Feature spot** | Feature sections | AI coach reviewing a PRD simulation |
| **Gamification** | Achievements, level-up | Boss battle arena, trophy unlock |
| **Onboarding** | First-run flows | Choose your quest path (APM, PM, AI PM) |
| **Error / Empty** | Zero-data states | Friendly coach encouraging retry |

### Motion (for Lottie / video)

- **Entrance:** Fade up 12px, 300ms, ease-out.
- **Celebrations:** Particle burst in XP Gold + Level-Up Green; 600ms max.
- **AI thinking:** Pulsing neural nodes, cyan glow breathe — not spinning loaders.

---

## 9. Visual Identity Guidelines

### Layout & Spacing

- **Base unit:** 4px grid.
- **Section padding:** 64px desktop / 24px mobile.
- **Card radius:** 12px standard, 16px hero cards, 8px chips/badges.
- **Max content width:** 1200px marketing; 1440px app shell.

### Elevation & Surfaces (Dark Mode First)

PM Quest AI is **dark-mode-first** — reflecting the futuristic, premium positioning.

```css
/* Surface hierarchy */
--surface-base:    #0F0F23;  /* Page background */
--surface-raised:  #1A1B3D;  /* Cards, panels */
--surface-overlay: #252650;  /* Modals, dropdowns */
--surface-border:  rgba(255, 255, 255, 0.08);
```

Light mode inverts to Cloud base with White raised surfaces and Slate 200 borders.

### UI Components

| Component | Style |
|-----------|-------|
| **Primary button** | Button Gradient fill (`#4F46E5`→`#7C3AED`), white text, 8px radius |
| **Secondary button** | Transparent, 1px Indigo Accessible border, `#4F46E5` text |
| **Ghost button** | No border, Slate 600 text (light) / Slate 400 text (dark) |
| **Input fields** | Deep Space fill, 1px border, focus: 2px Indigo ring |
| **Progress bar** | Slate 200 track; Level-Up Green or Quest Gradient fill |
| **XP badge** | XP Gold background, Midnight text, pill shape |
| **AI badge** | Quest Gradient, white "AI" label — matches logo badge |

### Photography

When using photography (testimonials, team, events):

- Prefer **authentic, diverse professionals** in modern workspaces.
- Apply **Midnight color overlay at 40–60% opacity** when text overlays image.
- Avoid stock clichés (handshakes, pointing at screens).

### Patterns & Textures

- **Quest Grid:** Subtle dot grid (1px dots, 24px spacing, 5% white opacity) on dark hero sections.
- **Neural Mesh:** Thin connected lines at 3% opacity — background decoration only, never behind body text.

---

## 10. Brand Voice & Tone

### Voice Pillars

| Pillar | Description | Example |
|--------|-------------|---------|
| **Encouraging** | Celebrate progress; never condescending | "You leveled up! Your PRD simulation scored in the top 10%." |
| **Expert** | Credible PM knowledge; recruiter-aware | "Strong prioritization — you correctly ranked impact over effort." |
| **Direct** | Clear, scannable, no fluff | "Complete 3 missions to unlock the Boss Battle." |
| **AI-aware** | Transparent about AI; human in the loop | "Your AI Coach suggested revisions — you decide what to ship." |

### Tone by Context

| Context | Tone | Sample |
|---------|------|--------|
| **Onboarding** | Warm, excited | "Welcome to your quest. Let's build your first portfolio artifact." |
| **Lesson content** | Instructional, precise | "Define the north star metric before scoping features." |
| **AI Coach feedback** | Supportive, specific | "Your stakeholder narrative is strong. Add a risk mitigation slide." |
| **Gamification** | Energetic, brief | "7-day streak! +50 XP" (with Flame icon in XP Gold) |
| **Boss Battle** | Challenging, fair | "Final round: defend your roadmap to the mock VP." |
| **Error states** | Calm, helpful | "Simulation paused. Your progress is saved." |
| **Marketing** | Aspirational, confident | "The only platform that turns practice into portfolio proof." |

### Writing Rules

1. **Use active voice.** "Complete the mission" not "The mission should be completed."
2. **Address the user as "you."** Never "the user" in product copy.
3. **PM terminology** — use correct terms (PRD, OKR, north star, stakeholder) without over-jargonizing for beginners.
4. **AI transparency** — say "AI Coach" or "AI feedback," not "magic" or "automatically perfect."
5. **Inclusive language** — "Product Manager" not "PM guy"; diverse examples in scenarios.
6. **No fear-based marketing** — motivate with opportunity, not anxiety ("Stand out to recruiters" ✓ / "Don't fail your interview" ✗).

### Brand Vocabulary

| Preferred | Avoid |
|-----------|-------|
| Quest, mission, level up | Course, lecture, module (unless structural) |
| Boss Battle | Test, exam |
| AI Coach | Bot, chatbot |
| Simulation | Quiz (for practical scenarios) |
| Portfolio artifact | Homework, assignment |
| Streak | Daily login requirement |

---

## 11. Asset Directory

```
brand/
├── README.md                          ← This file
├── AUDIT-REPORT.md                    ← Design review (v1.1)
├── colors/
│   ├── palette.json                   ← Machine-readable color tokens
│   └── accessibility.json             ← WCAG contrast matrix
├── logos/
│   ├── primary-logo.svg               ← Horizontal lockup (light backgrounds)
│   ├── primary-logo-dark.svg          ← Horizontal lockup (dark backgrounds)
│   ├── primary-logo-compact.svg       ← Mobile nav lockup (light)
│   ├── primary-logo-compact-dark.svg  ← Mobile nav lockup (dark)
│   ├── secondary-logo.svg             ← Stacked lockup + tagline (light)
│   ├── secondary-logo-dark.svg        ← Stacked lockup + tagline (dark)
│   ├── monogram.svg                   ← App icon / standalone mark (dark fill)
│   ├── monogram-light.svg             ← Standalone mark for light backgrounds
│   └── favicon.svg                    ← Browser tab icon (export PNGs from this)
├── icons/
│   └── ai-badge-overlay.svg           ← AI icon micro-signifier
├── illustrations/
│   └── ill-template-hero-quest-path.svg  ← Canonical illustration reference
├── guidelines/
│   ├── logo-usage.md                  ← Extended logo rules
│   ├── iconography.md                 ← Icon grid and catalog notes
│   ├── illustration.md                ← Illustration brief for designers
│   ├── visual-identity.md             ← UI component specs
│   └── voice-and-tone.md              ← Copywriting guide
└── typography/
    └── type-scale.css                 ← CSS custom properties for type
```

### Asset Quick Reference

| Asset | File | Format | Primary use |
|-------|------|--------|-------------|
| Primary Logo | `logos/primary-logo.svg` | SVG | Website, decks, email |
| Primary Logo (Dark) | `logos/primary-logo-dark.svg` | SVG | Dark UI, video overlays |
| Secondary Logo | `logos/secondary-logo.svg` | SVG | Splash, vertical layouts |
| Secondary Logo (Dark) | `logos/secondary-logo-dark.svg` | SVG | Dark splash screens |
| Monogram | `logos/monogram.svg` | SVG | App icon, avatars |
| Favicon | `logos/favicon.svg` | SVG | Browser tabs, PWA |
| Color Tokens | `colors/palette.json` | JSON | Dev handoff, design tools |
| Type Scale | `typography/type-scale.css` | CSS | Frontend implementation |

---

## 12. Implementation Checklist

### For Designers

- [ ] Import `palette.json` into Figma variables
- [ ] Install Plus Jakarta Sans, Inter, JetBrains Mono in Figma
- [ ] Build component library using surface tokens from Section 9
- [ ] Export favicon PNGs at 16, 32, 180, 512 from `favicon.svg`

### For Developers

- [ ] Add favicon links to `index.html`
- [ ] Import `typography/type-scale.css` into global styles
- [ ] Map CSS variables from `palette.json` to theme provider
- [ ] Use `primary-logo-dark.svg` in dark navbar; swap on theme toggle
- [ ] Set PWA `theme_color` to `#0F0F23` and `background_color` to `#0F0F23`

### For Marketing

- [ ] Use primary logo on all external communications
- [ ] Apply voice guidelines to landing page, ads, and social
- [ ] Request illustration assets following Section 8 brief
- [ ] Never modify logo colors — use provided SVG files

---

## Legal

© 2026 PM Quest AI. All brand assets are proprietary. Do not use, modify, or distribute without authorization.

For brand questions: **brand@pmquest.ai**

---

*Designed with precision. Built for the quest.*
