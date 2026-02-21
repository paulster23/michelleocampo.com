# Branding Audit — Michelle Ocampo Photography
**Prepared for handoff to: frontend-engineer agent**
**Date:** 2026-02-21

---

## Brand Assessment

Michelle Ocampo's site has solid structural bones but falls short of "NYC luxury photography studio" positioning. The core problem: **it feels like a template, not a brand.** You could drop any photographer's name in and it would work for three other people.

The typography choices (Cormorant Garamond + Avano Contrast) are sophisticated, but they're not being deployed with intentionality. The layout is clean and functional but lacks editorial tension. The color palette is aggressively neutral — reads safe rather than refined. Most critically: there is no clear visual identity or design voice. Nothing that makes someone say "this is Michelle's work."

Target positioning: **top-tier NYC photography studio — editorial, confident, warm, intimate.** Think Vogue editorial meets boutique studio. The site needs to shift from "polished template" to "intentional visual artist."

---

## Findings

### Logo / Brand Mark
- **Severity: Critical**
- **Finding:** The "M" monogram SVG is geometrically weak — two angled strokes meeting at a peak, flanked by vertical lines, enclosed in a thin circle. It reads as generic. No personality, no photography references, no luxury signal.
- **Why it matters:** The logo anchors brand identity. A weak mark undermines every other design decision. This mark could belong to a tech startup or consulting firm.
- **Recommendation:** Redesign the SVG monogram in `src/components/Logo.tsx`. Goals:
  - More refined letterform — consider a serif "M" drawn from Cormorant Garamond's character shapes
  - Use negative space more deliberately
  - Ensure it works at small (navbar ~32px) and large (hero/print) scales
  - Work in both dark and light contexts
  - Remove the enclosing circle — let the letterform stand alone for elegance
  - If keeping the circle, make it a hairline stroke that feels intentional, not decorative

---

### Color Palette
- **Severity: Major**
- **Finding:** Palette is exclusively neutral — pure white, cool Tailwind grays, and black. Zero chromatic presence. The cool grays (Tailwind defaults lean blue-cool) create a clinical feeling, not a warm, intimate luxury tone.
- **Why it matters:** Color is psychology. For a wedding and events photographer, warmth signals intimacy. Cool neutrals signal corporate.
- **Recommendation:** Update `tailwind.config.js` with this palette:

```js
colors: {
  'cream': '#FAFAF8',       // Replace bg-white globally
  'warm-white': '#F5F3F0',  // Replace bg-gray-50 for section backgrounds
  'warm-gray': '#5C5C5C',   // Replace text-gray-600 for body text
  'charcoal': '#1C1C1C',    // Replace pure black for headings
  'primary': '#5C2E2E',     // Deep burgundy — CTAs, accents, hover states
  'gold': '#C49A6C',        // Warm gold — use sparingly for highlights
}
```

Replace globally:
- `bg-white` → `bg-cream`
- `bg-gray-50` → `bg-warm-white`
- `text-gray-600` / `text-gray-700` → `text-warm-gray`
- `bg-gray-900` / `bg-black` → `bg-charcoal`
- CTA buttons: from white-border style → `bg-primary text-cream`

---

### Typography System
- **Severity: Major**
- **Finding:** Font choices are correct; execution is not. No consistent type scale. Heading sizes vary arbitrarily across components (`text-4xl`, `text-3xl`, `text-lg`). Tracking applied inconsistently. Body text uses cool defaults. No deliberate hierarchy.
- **Why it matters:** Typography is the second most important brand signal. Type should feel like a design element, not a vehicle for words.
- **Recommendation:** Add to `tailwind.config.js`:

```js
fontSize: {
  'display-lg': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],   // Hero H1
  'display-md': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],  // Section titles
  'display-sm': ['2rem', { lineHeight: '1.2', letterSpacing: '0em' }],       // Subsections
  'body-lg':   ['1.125rem', { lineHeight: '1.6' }],
  'body':      ['1rem',     { lineHeight: '1.6' }],
  'label':     ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.08em' }], // Nav, captions
},
```

Apply consistently:
- All `<h1>` → `text-display-lg font-heading font-light tracking-tighter`
- All `<h2>` → `text-display-md font-heading font-light`
- All `<h3>` → `text-display-sm font-heading font-normal`
- Nav links → `text-label font-sans tracking-widest uppercase`
- Body text → `text-body text-warm-gray`

---

### Hero Section
- **Severity: Major**
- **Finding:** Full-screen background image + centered text + white-border CTA button. The most predictable, least editorial layout possible. The `bg-black/30` overlay is too transparent, reducing legibility. The button styling lacks personality and doesn't use the brand accent color.
- **Why it matters:** First impression. This is where Michelle signals "distinctive NYC photographer" or "generic wedding website." Currently the latter.
- **Recommendation (in `src/components/Hero.tsx`):**
  - Change overlay from `bg-black/30` to `bg-black/50` for legibility
  - Move text layout from centered to bottom-left: remove `justify-center items-center`, add `justify-end items-start px-12 pb-20`
  - Heading: apply `text-display-lg font-heading font-light text-cream tracking-tighter`
  - Add a thin horizontal rule above the heading (`<hr className="w-12 border-gold mb-6">`) as an editorial accent
  - Redesign CTA button:
    ```
    bg-primary text-cream px-12 py-4 font-sans text-label tracking-widest uppercase
    hover:bg-primary/80 transition-all duration-300
    ```

---

### Gallery / Portfolio
- **Severity: Major**
- **Finding:** Uniform 3-column grid, all images square, equal gap, all images treated identically. This neutralizes every photo — nothing is emphasized, nothing tells a story. The two tabs (Weddings / Events) currently show identical images, defeating their purpose. Gallery hover is just `opacity-90` — minimal engagement.
- **Why it matters:** The gallery is the work. It's where her eye and taste should be undeniable.
- **Recommendation (in `src/components/Gallery.tsx`):**
  - Replace uniform grid with a mixed-span CSS Grid:
    ```css
    /* In index.css */
    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: 300px;
      gap: 8px;
    }
    .gallery-grid .featured {
      grid-column: span 2;
      grid-row: span 2;
    }
    ```
  - Apply `.featured` class to every 1st and 6th image in the array (or let the engineer choose)
  - Replace `aspect-square` with `w-full h-full object-cover` on all images
  - Improve hover state: add an overlay with the image index or a subtle icon
    ```jsx
    <div className="absolute inset-0 bg-charcoal/0 hover:bg-charcoal/20 transition-all duration-300 flex items-center justify-center">
      <Camera className="text-cream opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
    </div>
    ```
  - Tab indicator: replace current tab border with an underline in the accent color
    ```
    border-b-2 border-primary (active state)
    ```
  - Lightbox refinements:
    - Navigation buttons: change to `bg-primary/80 hover:bg-primary text-cream`
    - Close button: `text-cream hover:text-gold`

---

### Navigation
- **Severity: Minor**
- **Finding:** Navbar logic is correct (scroll-aware, mobile toggle), but brand name is undersized (`text-xl`, `font-sans`). Should use the heading font and a larger size to establish presence. Overlay opacity on hero (`bg-black/60`) is adequate but could be stronger.
- **Recommendation (in `src/components/Navbar.tsx`):**
  - Brand name: change from `font-sans text-xl tracking-wider` to `font-heading text-2xl font-light tracking-widest`
  - Scrolled state background: from `bg-white` to `bg-cream`
  - Nav link hover: add `hover:text-primary transition-colors duration-200`
  - Nav links: add `text-label tracking-widest uppercase` for consistency with type system
  - Hero state overlay: increase from `bg-black/60` to `bg-black/75`

---

### About Section
- **Severity: Minor**
- **Finding:** Standard two-column layout, portrait with `rounded-lg shadow-lg` that feels template-like. Bio is brief and functional but lacks personal voice or visual rhythm.
- **Recommendation (in `src/components/About.tsx`):**
  - Remove `rounded-lg` and `shadow-lg` from the portrait — let the image stand undecorated
  - Add a thin `border border-gold` instead if a treatment is desired
  - Apply a pull-quote treatment to a key sentence in the bio:
    ```jsx
    <p className="font-heading text-display-sm font-light text-primary italic leading-relaxed mb-6">
      "Key memorable line from her bio"
    </p>
    ```
  - Body text: `text-body text-warm-gray` for warmth

---

### Contact Section
- **Severity: Minor**
- **Finding:** Generic contact form — standard gray inputs, gray submit button, no brand personality. The final conversion point should feel premium and reinforce confidence.
- **Recommendation (in `src/components/Contact.tsx`):**
  - Form background: `bg-warm-white` instead of `bg-white`
  - Input fields:
    ```
    bg-cream border border-warm-gray/30 focus:border-primary focus:ring-2 focus:ring-primary/10
    rounded-none (remove border-radius for editorial feel)
    p-3 (more generous padding)
    ```
  - Submit button: `bg-primary text-cream py-4 px-8 font-sans text-label tracking-widest uppercase hover:bg-primary/80 transition-colors`
  - Add a line above the form: `<p className="text-label text-warm-gray tracking-widest uppercase mb-8">Let's discuss your vision — I respond within 24 hours.</p>`
  - Success/error messages: use `text-primary` for success instead of green; `text-red-800` for errors

---

## Design Tokens Summary (CSS Custom Properties)

Add to `src/index.css`:

```css
:root {
  /* Colors */
  --color-cream:      #FAFAF8;
  --color-warm-white: #F5F3F0;
  --color-warm-gray:  #5C5C5C;
  --color-charcoal:   #1C1C1C;
  --color-primary:    #5C2E2E;
  --color-gold:       #C49A6C;

  /* Typography */
  --font-heading: 'Cormorant Garamond', serif;
  --font-body:    'avano-contrast', sans-serif;

  /* Transitions */
  --transition-base: all 0.3s ease-in-out;
}
```

---

## Priority Implementation Order

Work in this sequence — each step builds on the last:

1. **Color palette** — Update `tailwind.config.js` and do global class replacements. Immediate warmth improvement. (~1-2 hrs)
2. **Typography system** — Add type scale to Tailwind config, audit and update every component's heading and body classes. (~2-3 hrs)
3. **Hero section** — Reposition text, increase overlay, redesign CTA button. (~1-2 hrs)
4. **Gallery grid** — Implement mixed-span layout, improve hover states, fix tab indicator. (~3-4 hrs)
5. **Logo redesign** — Update `Logo.tsx` SVG with a more refined letterform. (~2-4 hrs)
6. **Contact form** — Styling updates to inputs and button. (~1 hr)
7. **About section** — Remove rounded/shadow from image, add pull-quote treatment. (~1 hr)
8. **Navbar** — Brand name font and size update, link hover color, scrolled background. (~30 min)
9. **Full pass** — Consistency check: every CTA should use `bg-primary`, every hover state should transition smoothly, every heading should use the type scale. (~1-2 hrs)

---

## What to Preserve

Do **not** change:
- Component file structure and names
- React/TypeScript architecture
- EmailJS integration logic (only change visual styling around the form)
- Gallery lightbox keyboard navigation logic
- Responsive breakpoints (`md:`, `lg:`) — the responsive structure is sound
- Font choices (Cormorant Garamond, Avano Contrast) — just apply them better
- Scroll behavior (`scroll-behavior: smooth`)
- The overall section order (Hero → Gallery → About → Contact)
