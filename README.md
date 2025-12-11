# ACSD CSS Framework v1.0

A modern, lightweight CSS framework designed for rapid prototyping of marketing pages, documentation sites, and internal tools. Built with design tokens, semantic HTML support, and accessibility in mind.

## Overview

ACSD (Accessible CSS Design) is a drop-in CSS framework that provides beautiful defaults for semantic HTML while offering a comprehensive component system for more complex UIs. No build tools required—just link the stylesheet and start building.

### Key Features

- ✨ **Classless Base Styling** - Beautiful defaults for semantic HTML elements
- 🎨 **Design Token System** - CSS custom properties for consistent theming
- 🏗️ **Layered Architecture** - Clear separation using `@layer` for predictable cascading
- ♿ **Accessibility First** - WCAG AA contrast ratios and visible focus states
- 🌓 **Dark Theme Support** - Built-in dark mode with automatic color adjustments
- 📱 **Responsive Design** - Mobile-first approach with flexible components
- 🎯 **Micro-interactions** - Subtle animations and transitions for better UX
- 🖨️ **Print Stylesheet** - Clean, optimized layouts for printing
- 📦 **Comprehensive Components** - Buttons, cards, alerts, badges, navbar, and more
- 🔧 **Utility Classes** - Flexible helpers for spacing, layout, and alignment

## Installation

### Option 1: Direct Link

Download `acsd.css` and link it in your HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Page</title>
  <link rel="stylesheet" href="acsd.css">
</head>
<body>
  <h1>Hello World</h1>
  <p>Your content here...</p>
</body>
</html>
```

### Option 2: CDN (Future)

```html
<link rel="stylesheet" href="https://cdn.example.com/acsd@1.0.0/acsd.css">
```

## Usage

### Basic Usage - No Classes Required

ACSD styles all semantic HTML elements by default. Just write HTML:

```html
<main>
  <h1>Welcome to My Site</h1>
  <p>This paragraph is automatically styled with proper spacing, typography, and colors.</p>
  
  <ul>
    <li>Lists work great</li>
    <li>With beautiful defaults</li>
  </ul>
  
  <table>
    <thead>
      <tr>
        <th>Feature</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Base Styles</td>
        <td>Complete</td>
      </tr>
    </tbody>
  </table>
</main>
```

### Using Components

For UI patterns, use component classes:

```html
<!-- Button -->
<button class="btn">Primary Button</button>
<button class="btn btn--secondary">Secondary</button>
<button class="btn btn--danger btn--sm">Small Danger</button>

<!-- Card -->
<div class="card card--elevated">
  <div class="card__header">Card Title</div>
  <div class="card__body">
    <p>Card content goes here...</p>
  </div>
  <div class="card__footer">
    <button class="btn btn--sm">Action</button>
  </div>
</div>

<!-- Alert -->
<div class="alert alert--success">
  <div class="alert__title">Success!</div>
  <div class="alert__message">Your action completed successfully.</div>
</div>

<!-- Badge -->
<span class="badge badge--primary">New</span>
<span class="badge badge--success">Active</span>
```

### Using Utilities

Utilities provide quick adjustments without custom CSS:

```html
<!-- Spacing -->
<div class="mt-lg mb-md p-lg">Content with margins and padding</div>

<!-- Layout -->
<div class="flex gap-md items-center">
  <button class="btn">Button 1</button>
  <button class="btn">Button 2</button>
</div>

<!-- Text -->
<p class="text-center text-muted">Centered, muted text</p>

<!-- Container -->
<div class="container">
  <h1>Centered content with max-width</h1>
</div>
```

## Layer Structure

ACSD uses CSS `@layer` for predictable cascade control:

```css
@layer tokens, base, components, utilities, overrides;
```

### Layer Purposes

1. **tokens** - Design tokens (colors, spacing, typography)
   - Only CSS custom properties
   - No element rules

2. **base** - Semantic HTML defaults
   - Element selectors only
   - No classes

3. **components** - Reusable UI components
   - `.btn`, `.card`, `.alert`, etc.
   - BEM naming convention

4. **utilities** - Single-purpose helpers
   - `.flex`, `.mt-lg`, `.text-center`, etc.
   - Token-driven values

5. **overrides** - For developers integrating the framework
   - Empty by default
   - Use for project-specific overrides


# ACSD CSS Framework

A drop-in, classless-first CSS framework for marketing pages, docs/blogs, and internal tools. Link one file and get sensible defaults, tokens, components, utilities, theming, and print-ready output.

## Quick Start

```html
<link rel="stylesheet" href="acsd.css">
<body>
  <main class="container">
    <h1>Hello, world</h1>
    <p>Semantic HTML is styled automatically.</p>
  </main>
</body>
```

- Dark mode: add `class="theme-dark"` to `<body>` or `<html>`.
- Demo: open `demo.html` to see all elements, components, and utilities in action.

## Architecture (Layers)

`@layer tokens, base, components, utilities, overrides;`

- **tokens**: design tokens only (colors, spacing, typography, radius, shadows, transitions, focus)
- **base**: classless element styling (body, headings, text, code, lists, tables, forms, media, details)
- **components**: BEM components (`.btn`, `.card`, `.alert`, `.badge`, `.navbar`, `.tabs`, `.table` variants, accordion styling, progress)
- **utilities**: single-purpose helpers (display, spacing, text, layout, width, color)
- **overrides**: reserved for consumer overrides

## Design Tokens (high level)
- Typography: sans/mono families, sizes xs–h1, weights normal–bold, line-heights
- Spacing: `--space-xs` … `--space-3xl`
- Colors: OKLCH palette for bg/fg, primary/secondary/accent, success/warning/danger/info, borders, links
- Radius: sm/md/lg/xl/full; Shadows: sm/md/lg/xl; Transitions: fast/base/slow
- Focus ring: width/offset/color; Layout max widths: prose/container/wide
- Dark theme: `.theme-dark` swaps the color tokens only

## Base Styling (classless)
- Headings, paragraphs, inline text (strong/em/small), code/pre, blockquote/q
- Lists (ul/ol/li), definition lists (dl/dt/dd)
- Links: hover/active/visited/focus-visible with tokenized focus rings
- Tables: thead/tbody/th/td with hover rows
- Media: figure/figcaption/img
- Forms: fieldset/legend/label/input/textarea/select/button (hover, focus, disabled); details/summary

## Components (token-driven, BEM)
- **Buttons**: `.btn` + variants `--primary`, `--secondary`, `--danger`, `--success`, `--outline`; sizes `--sm`, `--lg`; focus + disabled states
- **Cards**: `.card` with `__header/__title/__subtitle/__body/__footer/__image`; variants `--elevated`, `--dark`, `--bordered`, `--inset`
- **Alerts**: `.alert` with `__icon/__content/__title/__message`; variants `--info`, `--success`, `--warning`, `--danger`
- **Badges**: `.badge` with variants `--primary`, `--secondary`, `--success`, `--danger`, `--warning`, `--info`, `--neutral`
- **Navbar**: brand + nav links, active state; `--dark` variant
- **Tabs**: list/items/buttons with active state and panel area
- **Accordion**: styled native `<details>/<summary>`
- **Table variants**: `.table`, modifiers `--striped`, `--compact`, `--bordered`
- **Progress**: `.progress` with bar and variants `--success`, `--warning`

## Utilities (low-specificity, token-based)
- **Display**: `.flex`, `.grid`, `.block`, `.inline`, `.inline-block`, `.hidden`
- **Spacing**: `mt|mb|ml|mr-{xs|sm|md|lg|xl}`, `p-{xs|sm|md|lg|xl}`, `pt|pb-{xs|sm|md|lg}`, `gap-{xs|sm|md|lg}`
- **Text**: `.text-left`, `.text-center`, `.text-right`, `.text-muted`, `.text-primary`, `.text-sm`, `.text-lg`, `.text-bold`
- **Layout**: `.container`, `.prose`, `.stack`, `.stack--sm`, `.stack--lg`
- **Width**: `.w-full`, `.w-auto`
- **Color**: `.bg-primary`, `.bg-secondary`, `.fg-muted`

## Theming & Enhancements
- **Dark theme** via `.theme-dark` (tokens only; components adapt automatically)
- **Custom forms** styled with hover/focus/disabled
- **Micro-interactions**: transitions on interactive elements
- **Print**: `@media print` simplifies colors, hides non-essential chrome, shows URLs, avoids awkward breaks

## Accessibility
- WCAG-aware color choices; visible focus states using tokenized rings
- Semantic defaults; keyboard-friendly components; no outline removal without replacement

## Files
- `acsd.css` — the framework (tokens, base, components, utilities, print)
- `demo.html` — showcase page using semantic HTML + components/utilities
- `README.md` — this guide

## Customization
- Override tokens in `@layer overrides` or apply theme classes to scopes
- Extend components or add utilities in your own layer while reusing the tokens

## Limits / Expectations
- Modern CSS required (`@layer`, custom properties, OKLCH, flex/grid)
- No JS shipped (demo includes tiny JS for tab toggle only)
- Single-file distribution by design

## Status
Version: 1.0.0 · Last updated: December 2025

## Web Components

This framework ships three token-driven Web Components that complement the CSS system. They use the same design tokens (colors, spacing, typography, radii, shadows) to stay visually consistent.

### `<frmwk-card>` (Visual / Static)
Problem: Developers need a consistent, drop-in card container with optional header, subtitle, and footer slots without adding bespoke CSS.

Why it belongs: Cards are a core pattern across marketing pages, docs, and dashboards. This component standardizes spacing, borders, and typography using framework tokens.

Usage:
```html
<frmwk-card variant="elevated">
  <h3 slot="title">Account Status</h3>
  <p slot="subtitle">Everything looks good.</p>
  <p>Body content goes here.</p>
  <div slot="footer">
    <button class="btn btn--primary btn--sm">Action</button>
  </div>
  <!-- Slots: header, title, subtitle, footer, default -->
</frmwk-card>
```
Notes: `variant` supports `elevated`, `dark`, `bordered`. Accessible by default with semantic slots; no interactive behavior.

Future improvements: Add `aria-labelledby` wiring to tie title/subtitle slots automatically; add `outline` variant.

### `<frmwk-tabs>` (Interactive)
Problem: Developers need accessible tabs to organize related content panels with minimal markup.

Why it belongs: Tabs are common in dashboards/docs. The component handles tablist UI, manages selected state, and emits events.

Usage:
```html
<frmwk-tabs>
  <div slot="panel" label="Overview">Overview content…</div>
  <div slot="panel" label="Details">Details content…</div>
  <div slot="panel" label="API">API content…</div>
</frmwk-tabs>
```
Behavior: Click to switch panels; dispatches `change` with `{ index, label }`. Uses `connectedCallback`/`disconnectedCallback`, ARIA roles (`tablist`, `tab`).

Accessibility: Visible focus states via tokens; keyboard support can be extended (ArrowLeft/ArrowRight, Home/End).

Future improvements: Add full keyboard navigation and `aria-controls` on tabs; expose selected index as an attribute.

### `<frmwk-carousel>` (Smart)
Problem: Teams need a lightweight, token-aligned carousel for hero banners or image slides without external libraries.

Why it belongs: A small, auto-advancing slideshow covers common marketing needs while staying within the design system.

Usage:
```html
<frmwk-carousel interval="3000">
  <figure><img src="slide1.jpg" alt="Slide 1"></figure>
  <figure><img src="slide2.jpg" alt="Slide 2"></figure>
  <figure><img src="slide3.jpg" alt="Slide 3"></figure>
</frmwk-carousel>
```
Behavior: Auto-advances based on `interval` (ms). Set `paused` to stop auto-play. Internal methods `_next()`, `_prev()`, `_update()` manage state; emits `change` with `{ index }`.

Accessibility: Focusable controls, visible focus rings, dots with `aria-current`. Consider adding `aria-live` for announcements.

Future improvements: Pause-on-hover, keyboard navigation, swipe gestures, and `aria-live` polite updates.

### Integration
- Import scripts in your page: 
```html
<script type="module" src="./frmwk-card.js"></script>
<script type="module" src="./frmwk-tabs.js"></script>
<script type="module" src="./frmwk-carousel.js"></script>
```
- Components are theme-aware via tokens (light/dark) and use low specificity.
- External styling can target parts (e.g., `frmwk-carousel::part(controls)`).