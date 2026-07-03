# Logo Usage Guidelines

Extended reference for the PM Quest AI logo system. See [brand README](../README.md) for the complete identity system.

## Asset Files

| File | Background | Layout | Min width |
|------|------------|--------|-----------|
| `primary-logo.svg` | Light | Horizontal | 180px |
| `primary-logo-dark.svg` | Dark | Horizontal | 180px |
| `primary-logo-compact.svg` | Light | Mobile horizontal | 140px |
| `primary-logo-compact-dark.svg` | Dark | Mobile horizontal | 140px |
| `secondary-logo.svg` | Light | Stacked + tagline | 88px |
| `secondary-logo-dark.svg` | Dark | Stacked + tagline | 88px |
| `monogram.svg` | Dark (built-in) | Icon only | 32×32px |
| `monogram-light.svg` | Light / transparent | Icon only | 32×32px |
| `favicon.svg` | Dark (built-in) | Simplified Q | 16×16px |

## Decision Tree

```
Need a logo?
├── Viewport ≤ 640px (mobile nav)?
│   ├── Light → primary-logo-compact.svg
│   └── Dark → primary-logo-compact-dark.svg
├── Horizontal space ≥ 180px?
│   ├── Light → primary-logo.svg
│   └── Dark → primary-logo-dark.svg
├── Vertical / square layout?
│   ├── Light → secondary-logo.svg
│   └── Dark → secondary-logo-dark.svg
└── Icon only?
    ├── Dark background → monogram.svg
    ├── Light background → monogram-light.svg
    └── ≤32px favicon → favicon.svg
```

## Clear Space

Maintain clear space equal to **the height of the monogram** on all four sides. Primary and secondary logos include **8px built-in padding** in the viewBox — do not crop this padding.

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

## Internal Spacing (Lockup)

| Gap | Value |
|-----|-------|
| Monogram → wordmark | 16px |
| Wordmark → AI badge | 12px |
| Wordmark → tagline (secondary) | 20px |

## Wordmark Font Dependency

Logo SVGs embed a Google Fonts `@import` for Plus Jakarta Sans. For offline contexts (email clients, Figma import, print):

1. Convert text to outlines before export, or
2. Ensure Plus Jakarta Sans is installed locally

Fallback stack: `'Segoe UI', system-ui, sans-serif`

## Co-branding

When partnering with universities or recruiters:

1. PM Quest AI logo on the **left**; partner logo on the **right**.
2. Separate with a vertical 1px Slate 200 line; gap = 1× monogram height on each side.
3. Scale partner logo to match PM Quest AI monogram height — never exceed our logo size.

## Monochrome Usage

For single-color contexts (embroidery, fax, legal stamps):

- **On light:** Midnight `#0F0F23` for entire lockup.
- **On dark:** White `#FFFFFF` for entire lockup.

Do not use grayscale versions of the gradient — convert to solid Midnight or White.
