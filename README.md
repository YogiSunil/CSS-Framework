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

## Design Tokens

All design decisions are codified as CSS custom properties in the `tokens` layer:

### Typography Tokens

```css
--font-family-sans: system-ui, sans-serif;
--font-family-mono: "SF Mono", Monaco, monospace;

--font-size-xs: 0.75rem;
--font-size-sm: 0.875rem;
--font-size-body: 1rem;
--font-size-h1: 2.25rem;

--font-weight-normal: 400;
--font-weight-bold: 700;

--line-height-tight: 1.25;
--line-height-normal: 1.5;
```

### Spacing Tokens

```css
--space-xs: 0.25rem;
--space-sm: 0.5rem;
--space-md: 1rem;
--space-lg: 1.5rem;
--space-xl: 2rem;
```

### Color Tokens

Colors use OKLCH for perceptually uniform scaling:

```css
/* Light theme */
--color-bg: oklch(0.98 0.005 250);
--color-fg: oklch(0.25 0.02 250);
--color-primary: oklch(0.55 0.18 260);
--color-success: oklch(0.60 0.15 145);
--color-danger: oklch(0.60 0.20 25);
```

### Customizing Tokens

Override tokens in your own stylesheet:

```css
@layer overrides {
  :root {
    --color-primary: oklch(0.60 0.20 180); /* Teal instead of blue */
    --space-md: 1.25rem; /* Larger base spacing */
    --radius-md: 0.75rem; /* More rounded corners */
  }
}
```

## Components

### Button

**Variants:** `btn--secondary`, `btn--danger`  
**Sizes:** `btn--sm`, `btn--lg`

```html
<button class="btn">Default</button>
<button class="btn btn--secondary">Secondary</button>
<button class="btn btn--danger btn--lg">Large Danger</button>
<button class="btn" disabled>Disabled</button>
```

### Card

**Parts:** `card__header`, `card__body`, `card__footer`, `card__image`  
**Variants:** `card--elevated`, `card--dark`

```html
<div class="card card--elevated">
  <img src="image.jpg" class="card__image">
  <div class="card__header">Title</div>
  <div class="card__body">Content</div>
  <div class="card__footer">Footer</div>
</div>
```

### Alert

**Variants:** `alert--info`, `alert--success`, `alert--warning`, `alert--danger`

```html
<div class="alert alert--warning">
  <div class="alert__title">Warning</div>
  <div class="alert__message">Please review before continuing.</div>
</div>
```

### Badge

**Variants:** `badge--primary`, `badge--secondary`, `badge--success`, `badge--warning`, `badge--danger`, `badge--info`

```html
<span class="badge badge--success">Active</span>
```

### Navbar

**Parts:** `navbar__brand`, `navbar__nav`, `navbar__link`

```html
<nav class="navbar">
  <a href="#" class="navbar__brand">Brand</a>
  <ul class="navbar__nav">
    <li><a href="#" class="navbar__link navbar__link--active">Home</a></li>
    <li><a href="#" class="navbar__link">About</a></li>
  </ul>
</nav>
```

### Table

**Variants:** `table--striped`, `table--compact`, `table--bordered`

```html
<table class="table table--striped">
  <thead>
    <tr><th>Header</th></tr>
  </thead>
  <tbody>
    <tr><td>Data</td></tr>
  </tbody>
</table>
```

## Utilities

### Display

`.flex`, `.grid`, `.block`, `.inline-block`, `.hidden`

### Spacing

**Margin:** `.mt-{size}`, `.mb-{size}`  
**Padding:** `.p-{size}`  
**Sizes:** `xs`, `sm`, `md`, `lg`, `xl`

### Text

`.text-left`, `.text-center`, `.text-right`  
`.text-muted`, `.text-primary`, `.text-success`, `.text-danger`

### Layout

`.container` - Max-width container with padding  
`.container-prose` - Narrow container for readable text  
`.stack` - Vertical spacing between children

### Flexbox

`.flex-col`, `.flex-wrap`  
`.items-center`, `.justify-center`, `.justify-between`  
`.gap-sm`, `.gap-md`, `.gap-lg`

### Background

`.bg-primary`, `.bg-subtle`, `.bg-muted`

### Sizing

`.w-full`, `.h-auto`

## Theming

### Dark Theme

Add `theme-dark` class to `<html>` or `<body>`:

```html
<html class="theme-dark">
  <!-- All colors automatically adjust -->
</html>
```

Toggle programmatically:

```javascript
document.documentElement.classList.toggle('theme-dark');
```

### Custom Themes

Create custom themes by overriding color tokens:

```css
@layer overrides {
  .theme-forest {
    --color-bg: oklch(0.96 0.02 140);
    --color-primary: oklch(0.50 0.15 140);
    --color-success: oklch(0.55 0.18 140);
  }
}
```

## Accessibility

ACSD prioritizes accessibility:

- ✅ WCAG AA contrast ratios for all text
- ✅ Visible focus states on all interactive elements
- ✅ Semantic HTML structure
- ✅ Keyboard navigation support
- ✅ Screen reader friendly markup
- ✅ Reduced motion support (respects `prefers-reduced-motion`)

### Focus Styles

All interactive elements receive visible focus indicators:

```css
--focus-ring-width: 2px;
--focus-ring-offset: 2px;
--focus-ring-color: var(--color-primary);
```

Customize if needed:

```css
@layer overrides {
  :root {
    --focus-ring-width: 3px;
    --focus-ring-color: var(--color-success);
  }
}
```

## Print Styles

ACSD includes optimized print styles:

- Simplified colors (black and white)
- URL display for links
- Page break controls
- Hidden non-essential components (navbar, badges, buttons)

Test with browser print preview or `@media print` styles.

## Browser Support

ACSD uses modern CSS features and targets:

- Chrome/Edge 90+
- Firefox 88+
- Safari 14.1+

### Required Features

- CSS `@layer`
- CSS Custom Properties
- OKLCH color space
- Flexbox and Grid

For older browser support, consider:
- Adding PostCSS with appropriate plugins
- Using a CSS variables polyfill
- Converting OKLCH to RGB/HSL

## Optional Features Implemented

### ✅ Custom Form Styling

All form elements styled with consistent appearance, hover, focus, and disabled states.

### ✅ Theming Support

Full dark theme included. Color system designed for easy theme creation.

### ✅ Print Stylesheet

Optimized `@media print` rules for clean printed output.

### ✅ Micro-interactions

Smooth transitions on buttons, cards, links, and form elements. Uses CSS transitions for performance.

### ✅ Additional Components

Navbar, table variants, and enhanced form groups beyond the required four components.

## File Structure

```
project/
├── acsd.css          # Complete framework
├── demo.html         # Demo page with examples
└── README.md         # This file
```

## Best Practices

### When to Use Classes

- **Never needed:** Basic content (headings, paragraphs, lists, tables)
- **Component patterns:** Buttons, cards, alerts, complex layouts
- **Quick adjustments:** Utilities for spacing, alignment, display

### Naming Convention

ACSD uses **BEM (Block Element Modifier)** for components:

```
.block { }
.block__element { }
.block--modifier { }
```

Examples:
- `.card`, `.card__header`, `.card--elevated`
- `.btn`, `.btn--secondary`, `.btn--lg`
- `.alert`, `.alert__title`, `.alert--success`

### Performance Tips

1. Link ACSD early in `<head>`
2. Use utilities instead of custom CSS
3. Limit cascade depth
4. Avoid `!important` (use layer overrides instead)

## Limitations

- No JavaScript functionality included
- No grid system (use native CSS Grid)
- Single file (no modular imports)
- Requires modern browser support
- OKLCH colors may need fallbacks for older browsers

## Future Roadmap

- [ ] Component library expansion (modals, tooltips, dropdowns)
- [ ] Animation utilities
- [ ] Responsive utilities (@media breakpoints)
- [ ] Form validation styles
- [ ] Additional themes
- [ ] CDN distribution
- [ ] npm package
- [ ] Sass/Less source files

## Contributing

This is a learning project for understanding CSS architecture, design systems, and framework development.

## License

MIT License - Feel free to use in your own projects!

## Credits

Built as part of an Advanced CSS & Sass Development course project.

---

**Version:** 1.0.0  
**Last Updated:** December 2025  
**Author:** ACSD Framework Team