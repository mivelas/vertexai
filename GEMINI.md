# Nexalist AI Web App

## Project Overview
This project is a high-end, professional landing page for **Nexalist AI**, an AI consultancy firm specializing in **Strategic Planning** and **Corporate Training**. The application is designed to communicate the value of AI implementation to C-suite executives and SMEs, featuring a "Modern Tech Dark" aesthetic with glassmorphism, gradient accents, and a focus on high-ticket service delivery.

### Main Technologies
- **Framework:** React 19 (TypeScript)
- **Bundler:** Vite
- **Iconography:** Lucide React
- **Styling:** Vanilla CSS (Custom Properties / CSS Variables)
- **Design System:** "Modern Tech Dark" — Deep navy backgrounds, electric cyan and royal purple highlights.

### Architecture
The project follows a modular, component-based structure:
- `src/components/`: Reusable UI elements (Navbar, Footer, Logo).
- `src/sections/`: Main landing page sections (Hero, Benefits, Services, Roadmap, Contact).
- `src/styles/`: Centralized styling foundation (`variables.css` and `global.css`).
- `src/assets/`: Static assets and imagery.

---

## Building and Running

### Development
To start the local development server:
```bash
npm run dev
```

### Production Build
To generate a production-ready bundle in the `dist/` directory:
```bash
npm run build
```

### Local Preview
To preview the production build locally:
```bash
npm run preview
```

### Linting
To check for code quality and style issues:
```bash
npm run lint
```

---

## Development Conventions

### Styling & Theme
- **Theme:** Always adhere to the "Modern Tech Dark" palette defined in `src/styles/variables.css`.
- **CSS Variables:** Use `--bg-primary`, `--accent-cyan`, etc., instead of hardcoding colors.
- **Glassmorphism:** Use the `.glass-card` class for container elements to maintain the tech-forward aesthetic.
- **Typography:** Headlines should favor high-impact gradient text using the `.gradient-text` class.

### Components
- **TypeScript:** Use functional components. Explicit `React.FC` is optional in the latest versions but ensure proper prop typing.
- **Structure:** Each section or complex component should have its own `.tsx` and `.css` file in the same directory (e.g., `Hero.tsx` and `Hero.css`).

### Icons
- Use the `lucide-react` library for consistent, high-quality iconography.
- Default icon size for section headers is typically `40`, and `32` for benefit cards.

- ### Branding
- The company name is **Nexalist AI**.
- The primary brand colors are **Electric Cyan (#22d3ee)** and **Royal Purple (#8b5cf6)**.
- The tone of the copy should be professional, authoritative, and strategic.

---

## Roadmap & Improvement Plan

This roadmap outlines the strategic evolution of Nexalist AI, focusing on technical excellence, user engagement, and business growth.

### Phase 1: Foundation & Polish (Technical Excellence)
- **Testing Suite:**
  - Implement **Vitest** for unit and component testing.
  - Integrate **Playwright** for E2E testing, specifically focusing on the contact form and navigation flows.
- **Enhanced Aesthetics:**
  - Integrate **Framer Motion** for sophisticated, high-end animations (scroll-triggered reveals, smooth transitions).
  - Optimize all image assets and implement lazy loading to maintain a sub-second TTI (Time to Interactive).
- **SEO & Meta Management:**
  - Use `react-helmet-async` to manage dynamic meta tags and improve search engine visibility.
  - Implement a `sitemap.xml` and `robots.txt` strategy.

### Phase 2: Engagement & Conversion (Business Growth)
- **Interactive ROI Calculator:**
  - Develop a lead-generation tool that allows potential clients to estimate the impact of AI on their specific business metrics (e.g., efficiency gains, cost reduction).
- **Social Proof & Credibility:**
  - Add a "Client Testimonials" section featuring quotes from high-level executives.
  - Implement a "Trusted By" logo ticker showcasing partner companies and past clients.
- **Advanced Form Handling:**
  - Refactor the Contact section with `react-hook-form` and `zod` for real-time validation and a more professional user experience.

### Phase 3: Authority & Growth (Market Leadership)
- **AI Insights (Blog):**
  - Launch a content hub for deep-dive articles on AI strategy, corporate training, and industry trends to establish Nexalist AI as a thought leader.
- **Case Studies / Portfolio:**
  - Create detailed breakdown pages for past projects, focusing on the "Problem, Solution, and Outcome (ROI)" framework.
- **Lead Magnets:**
  - Offer gated content (e.g., "The 2024 C-Suite AI Strategy Playbook") to capture high-intent leads and build an email list.
- **Internationalization (i18n):**
  - Implement `react-i18next` to support multiple languages, targeting global markets and international SMEs.

