# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

This is a static personal portfolio/blog website deployed to GitHub Pages at `mujganagh.com`. No build step, no framework, no package manager — plain HTML, CSS, and JavaScript.

## Running Locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deployment

Push to `main` — GitHub Pages auto-deploys to `mujganagh.com`.

## Architecture

### Pages
- `index.html` — Homepage (bio, experience, interests)
- `blog/index.html` — Blog listing, dynamically loads post metadata from `blog/posts.json`
- `projects/index.html` — Projects showcase
- `photos/index.html` — Film photography gallery (3-column grid)

### Shared Assets (`/assets/`)
- `theme.css` — All CSS custom properties for light/dark themes; always edit colors here, not inline
- `theme.js` — Theme toggle logic; reads/writes `localStorage`, falls back to OS preference, injects the toggle button

### Theme System
Two themes defined via CSS custom properties on `:root` (dark, default) and `.light-theme` (light). The `<html>` element gets `dark-theme` or `light-theme` class set in `<head>` to avoid flash. Key tokens: `--bg-color`, `--text-color`, `--accent-color`, `--link-color`.

Dark accent: purple (`#eab1d6`). Light accent: green (`#488744`).

### Blog System
Blog posts are handwritten HTML files in `blog/`. To add a post:
1. Create `blog/<slug>.html` following the pattern of existing posts
2. Add an entry to `blog/posts.json` with `title`, `date`, `link`, and `excerpt`

The listing page fetches `posts.json` at runtime and renders cards dynamically.

### Photos
Add images to `photos/img/` and add a corresponding `<img>` tag to the grid in `photos/index.html`.

## Styling Notes
- Tailwind CSS v3 loaded via CDN with `preflight: false` (prevents style resets conflicting with custom CSS)
- Google Fonts: Inter (weights 300, 400, 500) loaded via preconnect
- Mobile breakpoint: 520px
- All pages share the same nav and theme toggle — changes to nav structure must be replicated across all pages manually
