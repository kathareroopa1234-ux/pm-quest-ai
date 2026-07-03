# Visual Identity Guidelines

## Design Tokens (CSS)

```css
:root {
  /* Brand colors */
  --color-quest-indigo: #6366F1;
  --color-quest-indigo-accessible: #4F46E5;
  --color-ai-cyan: #00D4FF;
  --color-ai-cyan-accessible: #0891B2;
  --color-portal-violet: #A855F7;
  --color-midnight: #0F0F23;
  --color-deep-space: #1A1B3D;
  --color-cloud: #F8FAFC;
  --color-slate-600: #475569;
  --color-slate-400: #94A3B8;
  --color-xp-gold: #F59E0B;
  --color-level-green: #10B981;
  --color-boss-red: #EF4444;
  --color-coach-blue: #3B82F6;

  /* Gradients */
  --gradient-quest: linear-gradient(135deg, #00D4FF 0%, #6366F1 52%, #A855F7 100%);
  --gradient-button: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%);
  --gradient-dark-surface: linear-gradient(180deg, #1A1B3D 0%, #0F0F23 100%);

  /* Surfaces (dark mode) */
  --surface-base: #0F0F23;
  --surface-raised: #1A1B3D;
  --surface-overlay: #252650;
  --surface-border: rgba(255, 255, 255, 0.08);

  /* Spacing (4px grid) */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;

  /* Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-full: 9999px;

  /* Shadows (dark mode — glow-based) */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.5);
  --shadow-glow: 0 0 24px rgba(99, 102, 241, 0.25);
}
```

## Component Patterns

### Cards

- Background: `--surface-raised`
- Border: 1px `--surface-border`
- Radius: `--radius-md`
- Padding: `--space-6` desktop / `--space-4` mobile

### Mission Card (Gamified)

- Left accent bar: 4px Quest Gradient
- XP badge: top-right, XP Gold pill, Midnight text
- Progress bar: Level-Up Green fill

### AI Coach Panel

- Border: 1px rgba(0, 212, 255, 0.2)
- Background: rgba(0, 212, 255, 0.05)
- Header icon: `#22D3EE` on dark / `#0891B2` on light

### Buttons

| Variant | Fill | Text | Notes |
|---------|------|------|-------|
| Primary | `--gradient-button` | White | WCAG AA safe |
| Secondary | Transparent | `#4F46E5` light / `#818CF8` dark | 1px border matching text |
| Ghost | Transparent | `#475569` light / `#94A3B8` dark | No border |
| Destructive | `#EF4444` | White | Boss battle / delete |

> **Never use `--gradient-quest` as a button fill with white text** — the cyan portion fails contrast.

## Motion Principles

| Interaction | Duration | Easing |
|-------------|----------|--------|
| Hover states | 150ms | ease-out |
| Page transitions | 250ms | cubic-bezier(0.4, 0, 0.2, 1) |
| Modal open | 300ms | ease-out |
| Level-up celebration | 600ms | spring (damping 0.7) |
| AI thinking pulse | 1200ms | ease-in-out, infinite |

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Accessibility

- Minimum touch target: **44×44px**
- Focus ring: 2px `#4F46E5`, 2px offset
- Never convey status by color alone — pair with icon or text
- See `colors/accessibility.json` for verified contrast pairs

## Mobile Layout

| Token | Desktop | Mobile (≤640px) |
|-------|---------|-----------------|
| Section padding | 64px | 24px |
| Logo | `primary-logo.svg` (min 180px) | `primary-logo-compact.svg` (min 140px) |
| Card padding | 24px | 16px |
| Max content width | 1200px | 100% − 32px margin |
