# ChocoHub

> An AI-powered software development showcase — a chocolate bouquet e-commerce experience built in hours.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)](https://vitejs.dev/)
[![Netlify](https://img.shields.io/badge/Netlify-deployed-00C7B7?logo=netlify)](https://netlify.com)

---

## Overview

**ChocoHub** is a modern, animated web application for chocolate bouquet customization and gifting. It showcases how quickly a polished, production-ready site can be built with AI-assisted development.

### Features

- **Scroll-driven hero animation** — Canvas-based frame sequence synced to scroll via GSAP ScrollTrigger
- **Product catalog** — Signature bouquets, luxury grands, mini delights, and bespoke options
- **Customize studio** — Size, chocolates, extras, ribbon colors, and personalized messages
- **Story & contact pages** — Brand narrative and customer touchpoints
- **Responsive design** — Clean, custom CSS (no UI framework)

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | UI components |
| **Vite 7** | Build tool & dev server |
| **React Router 7** | Client-side routing |
| **GSAP + ScrollTrigger** | Scroll-linked animations |
| **Sharp** | Image optimization (frame pipeline) |
| **Netlify** | Hosting & SPA deployment |

---

## Project Structure

```
Chocohub/
├── frontend/                 # Main application
│   ├── public/               # Static assets
│   │   ├── frames-optimized/ # WebP hero frames (optimized)
│   │   ├── frames-optimized.json
│   │   └── _redirects        # Netlify SPA routing
│   ├── src/
│   │   ├── components/       # Navbar, Footer, CanvasBackground, etc.
│   │   ├── pages/            # Home, Shop, Customize, Story, Contact
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── optimize-frames.js    # Script to convert source frames → WebP
│   ├── package.json
│   └── vite.config.js
├── netlify.toml              # Netlify build config
└── README.md
```

---

## Quick Start

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build locally |

---

## Deploy (Netlify)

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Base directory:** `frontend`

The included `netlify.toml` configures SPA redirects and build settings.

---

## Frame Optimization (Developers)

The hero uses a scroll-driven frame sequence. To regenerate frames from new source images:

1. Create `frames/` at project root.
2. Add PNG or WebP images.
3. Run: `node frontend/optimize-frames.js`

Output goes to `frontend/public/frames-optimized/` and updates `frames-optimized.json`.

---

## License

Private / All rights reserved.
