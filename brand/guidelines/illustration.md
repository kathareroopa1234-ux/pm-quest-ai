# Illustration Style Guide

## Creative Brief

Create illustrations that feel like **stepping into a premium career simulator** — not a children's game, not a corporate stock photo.

## Reference Template

**Starter file:** `illustrations/ill-template-hero-quest-path.svg`

Use this as the canonical proportion, color ratio, and lighting reference for all new illustrations.

## Mood Board Keywords

Aspirational · Isometric · Glowing · Professional · Quest · Neural · Midnight · Progress

## Color Usage in Illustrations

| Role | Color | Proportion |
|------|-------|------------|
| Background | Midnight `#0F0F23` | 50–60% |
| Surfaces | Deep Space `#1A1B3D` | 20–25% |
| Accent | Quest Gradient | 10–15% |
| Reward highlights | XP Gold `#F59E0B` | 5% max |
| Success | Level-Up Green `#10B981` | 5% max |

## Character Guidelines

- **Proportions:** 1:4 head-to-body ratio (simplified, not chibi)
- **Faces:** Dot eyes or no facial detail — inclusive and timeless
- **Attire:** Smart casual; diverse skin tones represented across illustration sets
- **Pose:** Forward motion, presenting, thinking, celebrating — never passive

## AI Coach Depiction

The AI Coach appears as:

1. **Orb form** — Soft cyan-violet gradient sphere with subtle pulse
2. **Panel form** — Floating UI card with neural node header
3. **Never** — Humanoid robot, android face, or HAL-style red eye

## Required Illustration Set (Production Backlog)

| Priority | File name | Scene |
|----------|-----------|-------|
| P0 | `ill-hero-quest-path-dark.svg` | Landing hero — quest path ascending |
| P0 | `ill-empty-coach-encourage-dark.svg` | Zero-state with AI coach orb |
| P1 | `ill-feature-ai-simulation-dark.svg` | Stakeholder simulation |
| P1 | `ill-gamification-boss-battle-dark.svg` | Boss battle arena |
| P2 | `ill-onboarding-choose-path-dark.svg` | APM / PM / AI PM path picker |
| P2 | `ill-celebration-level-up-dark.svg` | Level-up particle burst |

## Scene Templates

| Scene | Key elements |
|-------|--------------|
| Hero landing | Quest path ascending; floating PRD, roadmap, metrics cards |
| AI simulation | User at desk; holographic stakeholder avatars |
| Boss battle | Arena stage; timer; "vs" layout with interview panel |
| Level up | Particle burst; XP counter; unlocked badge |
| Empty state | Coach orb + single CTA path forward |

## Consistency Checklist

Before shipping any illustration, verify:

- [ ] Midnight background ≥ 50% of canvas
- [ ] Single top-left light source with cyan/violet rim
- [ ] No humanoid robots or android faces
- [ ] Quest Gradient used ≤ 15% of canvas area
- [ ] XP Gold used ≤ 5% and only for reward context
- [ ] Figures use simplified forms (no detailed faces)
- [ ] PM artifacts (PRD, roadmap, metrics) float as UI cards
- [ ] Matches proportions in `ill-template-hero-quest-path.svg`

## File Delivery

- **Format:** SVG for web; PDF for print
- **Naming:** `ill-[category]-[name]-[variant].svg`
- **Variants:** `-dark` (default), `-light` (optional, rare)

## Grain Overlay (Marketing Only)

Apply noise texture at **3–5% opacity** on exported PNG/JPG for hero sections. Do not use in app UI.
