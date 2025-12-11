# ACSD CSS Framework

ACSD is a single-file CSS framework that gives semantic HTML a polished, accessible baseline without adding classes. It layers design tokens, classless base styles, reusable components, and a small utility belt so marketing pages, docs, and internal tools all feel consistent.

## How to Use
- Link the stylesheet in your head:  
  ```html
  <link rel="stylesheet" href="acsd.css">
  ```
- Write semantic HTML; the base layer styles elements automatically.
- Optional: add component classes (e.g., `.btn`, `.card`) or utility helpers (e.g., `.flex`, `.mt-lg`) when you need extra control.
- Dark theme: add `.theme-dark` to `body` or `html`.

## Layer Structure
```
@layer tokens, base, components, utilities, overrides;
```
- `tokens`: CSS custom properties for typography, spacing, radius, shadows, colors, focus, and motion.
- `base`: element selectors only (`body`, headings, lists, tables, forms, links, code, details/summary, etc.) with focus-visible styles and AA contrast targets.
- `components`: BEM-styled building blocks.
- `utilities`: single-purpose helpers.
- `overrides`: reserved for consumer tweaks.

## Token Highlights
- Typography: `--font-family-sans`, `--font-family-mono`, sizes from `--font-size-xs` to `--font-size-h1`.
- Spacing: `--space-xs` → `--space-3xl`.
- Color system: background/foreground tiers, semantic colors (`--color-primary`, `--color-success`, `--color-warning`, `--color-danger`, `--color-info`), borders, and link states.
- Shape & motion: radius scales, shadow scales, focus ring color/width/offset, transition speeds.
- Theming: `.theme-dark` swaps the color tokens only.

## Components Included
- **Buttons**: `.btn` base with primary, secondary, success, danger, and outline variants; size modifiers (`.btn--sm`, `.btn--lg`); icon slot `.btn__icon`; hover/active/focus/disabled states.
- **Cards**: `.card` with header/body/footer slots, optional image area, and variants (`.card--elevated`, `.card--bordered`, `.card--dark`, `.card--inset`).
- **Alerts**: `.alert` with semantic variants (`--info`, `--success`, `--warning`, `--danger`) and icon/title/message sub-elements.
- **Badges**: `.badge` with primary/secondary/success/danger/warning/info/neutral variants.
- **Navbar**: `.navbar` container plus brand, nav, link, and active state; optional `.navbar--dark`.
- **Tabs**: `.tabs` with list, items, buttons, and panel styling.
- **Accordion**: Styled native `<details>/<summary>` in the base layer for keyboard-friendly disclosure.
- **Table variants**: `.table` plus `.table--striped`, `.table--compact`, `.table--bordered`.
- **Progress**: `.progress` with `.progress__bar` and semantic color variants.

## Utilities (token-driven)
- Display: `.flex`, `.grid`, `.block`, `.inline`, `.inline-block`, `.hidden`.
- Spacing: margins (`.mt-*`, `.mb-*`, `.ml-*`, `.mr-*`), padding (`.p-*`, `.pt-*`, `.pb-*`), gaps (`.gap-*`) using the spacing scale.
- Text: `.text-left`, `.text-center`, `.text-right`, `.text-muted`, `.text-primary`, `.text-sm`, `.text-lg`, `.text-bold`.
- Layout: `.container`, `.prose`, `.stack`, `.stack--sm`, `.stack--lg`.
- Sizing/Color: `.w-full`, `.w-auto`, `.bg-primary`, `.bg-secondary`, `.fg-muted`.

## Enhancements
- **Theming**: light by default; `.theme-dark` flips the color tokens.
- **Custom form styling**: inputs, selects, textareas, and buttons share typography, padding, borders, focus rings, and disabled states.
- **Micro-interactions**: tokenized transitions and gentle elevation changes on hover/focus.
- **Print stylesheet**: simplified colors, link URLs appended, and hiding of purely interactive chrome.

## Files
- `acsd.css` — the complete framework with layered tokens, base, components, utilities, overrides placeholder, responsive tweaks, and print styles.
- `demo.html` — the Web Developer’s Roadmap demo wired to the framework (no additional CSS needed beyond minimal layout helpers).
- `README.md` — this guide.

## Accessibility Notes
- Uses `:focus-visible` outlines on links, buttons, and form controls tied to focus tokens.
- Targets WCAG AA contrast with oklch-based palettes.
- Does not remove outlines; uses clear focus rings and hover/focus feedback for all interactive components.

## Customizing
Override tokens in your own stylesheet inside `@layer tokens`:
```css
@layer tokens {
  :root {
    --color-primary: oklch(0.60 0.20 340);
    --font-family-sans: "Inter", system-ui, sans-serif;
    --space-md: 1.25rem;
  }
}
```
Add your own components/utilities in `@layer components` or `@layer utilities`, and keep selectors low-specificity for easy overrides.
