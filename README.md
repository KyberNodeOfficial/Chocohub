# ChocoHub

Frontend for **ChocoHub** – chocolate bouquet and customization experience (React + Vite).

## Stack

- **React** + **Vite**
- **React Router** (client-side routing)
- **GSAP** (ScrollTrigger, animations)
- **CSS** (custom styles, no UI framework)

## Setup

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command        | Description              |
|----------------|--------------------------|
| `npm run dev`  | Start dev server         |
| `npm run build`| Production build         |
| `npm run preview` | Preview production build |

## Deploy (Netlify)

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Base directory:** `frontend` (if repo root is `Chocohub`)

Use the included `netlify.toml` so the app builds from the `frontend` folder and SPA redirects are applied.

## License

Private / All rights reserved.
