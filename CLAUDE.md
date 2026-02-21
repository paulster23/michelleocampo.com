# Michelle Ocampo Photography — Project Context

This is a personal portfolio site for Michelle Ocampo, a wedding and events photographer. The site is her primary professional presence and should reflect her brand: elegant, minimal, warm, and professional.

## Project overview

- **Type**: Single-page application (SPA)
- **Framework**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom font configuration
- **Build tool**: Vite 5
- **Primary deployment**: Netlify (auto-deploy from `main`)
- **Fallback deployment**: GitHub Pages (`gh-pages` branch via `npm run deploy`)
- **Local dev**: `npm run dev` (Vite dev server) or Python HTTP server in `dist/`

## Directory structure

```
src/
  components/       # All React components
  images/           # Source images (wedding/event photos + portrait)
  App.tsx           # Root component — imports and orders all sections
  main.tsx          # React DOM entry point
  index.css         # Global styles, CSS variables, font imports
dist/               # Production build output (do not edit manually)
public/             # Static assets copied to dist at build time
```

## Build and deploy

```bash
npm run dev          # Start Vite dev server (preferred for development)
npm run build        # Build to dist/
npm run preview      # Preview built site locally
npm run deploy       # Build + deploy to GitHub Pages (gh-pages branch)
```

**Do not manually edit files in `dist/`** — they are overwritten on every build. All changes go in `src/`.

## Design system

### Brand personality
Elegant, understated, romantic. The site should feel like flipping through a high-end photography book — not a flashy portfolio template.

### Typography
- **Headings**: Cormorant Garamond (serif) — weights 300–500, generous tracking
- **Body/UI**: Avano Contrast (Adobe Typekit, custom sans-serif)
- **Fallback sans**: Montserrat (Google Fonts)
- Font imports are in `src/index.css`. CSS variables: `--font-heading`, `--font-body`

### Color palette
- Primarily white (`bg-white`) and near-black grays
- Tailwind grays: `gray-50` through `gray-900`
- Accent: none — the photography *is* the color
- Avoid introducing new colors without a clear design rationale

### Spacing and layout
- Sections use `py-20` vertical rhythm
- Responsive grid: 1 col (mobile) → 2 col (tablet, `md:`) → 3 col (desktop, `lg:`)
- Container-based layout throughout

### Interactions
- Subtle hover effects (`hover:opacity-90`, opacity transitions)
- Smooth scroll (`scroll-behavior: smooth` in CSS)
- `prefers-reduced-motion` should be respected for any animations

## Components

| Component | Status | Description |
|-----------|--------|-------------|
| `Navbar.tsx` | Active | Fixed header, scroll-aware background, mobile menu |
| `Hero.tsx` | Active | Full-screen hero with background image |
| `Gallery.tsx` | Active | Tabbed gallery (Weddings / Events) with lightbox modal |
| `About.tsx` | Active | Bio section with portrait |
| `Contact.tsx` | Active | Contact form with EmailJS integration |
| `Footer.tsx` | Active | Logo, contact info, copyright |
| `Services.tsx` | **Inactive** | Service offerings and pricing — built but not in App.tsx |
| `Testimonials.tsx` | **Inactive** | Client testimonials — built but not in App.tsx |
| `Logo.tsx` | Active | SVG "M" monogram used in Navbar and Footer |

To add Services or Testimonials, import them in `App.tsx`.

## Third-party integrations

### EmailJS
Used in `Contact.tsx` for the contact form. Credentials are public (this is expected for EmailJS client-side API):
- Service ID: `service_dizvkpg`
- Template ID: `template_zbmk72p`
- User ID: `q2ycnHxxDT4dVYj-W`

These are intentionally client-side. Do not move them to a backend unless the project adds one.

### Fonts
- Google Fonts: loaded via `<link>` in HTML head
- Adobe Typekit: loaded via `<link>` in HTML head (Avano Contrast)

### Icons
- `lucide-react` v0.344.0 — used for nav icons, contact icons (Mail, Phone, MapPin, Calendar, Menu, X, ChevronLeft/Right)

## Routing and SPA behavior

- Client-side routing via anchor links (`#section-id`) — no router library
- Netlify handles SPA redirects via `_redirects` and `netlify.toml` (`/* → /index.html 200`)
- `vite.config.ts` sets base to `/` for Netlify

## Testing

- Jest + React Testing Library
- Tests live alongside components (`*.test.tsx`)
- EmailJS is mocked in tests
- Run tests: `npx jest`

## Current branch

Active development is on `add-gallery`. The `main` branch is production. PRs should target `main`.

## Known issues / ongoing work

- Image paths have been a recurring issue when switching between local dev server and built output. The Vite dev server and Python HTTP server in `dist/` behave differently. Prefer `npm run dev` for development.
- `Services.tsx` and `Testimonials.tsx` are complete but not displayed — they may be added in a future iteration.

## Agents

This project uses specialized Claude Code agents in `.claude/agents/`:

- **branding-designer** — design reviews, brand consistency, UX, visual accessibility
- **frontend-engineer** — HTML/CSS/JS implementation (the only agent with write access)
- **qa-engineer** — functional testing, cross-device, accessibility audits
- **security-engineer** — vulnerability scanning, secrets audit, security hardening

Invoke them explicitly (e.g., "use the qa-engineer to review this") or let Claude delegate automatically based on task type.
