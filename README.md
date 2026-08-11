# Dr Keshav Dental and Implant Clinic — Website

A single-page website built with React + Vite for Dr Keshav Dental and
Implant Clinic in Raj Nagar Extension, Ghaziabad.

## Getting started

```bash
npm install
npm run dev
```

This starts a local dev server (usually at `http://localhost:5173`) with
hot reload.

## Building for production

```bash
npm run build
```

Outputs a production-ready build to `dist/`. You can preview that build
locally with:

```bash
npm run preview
```

## Deploying

The `dist/` folder is fully static and can be deployed to any static host —
Vercel, Netlify, GitHub Pages, or a regular web server. Point your domain's
DNS or hosting config at the contents of `dist/` after running `npm run build`.

## Project structure

```
src/
  components/   One component + matching .css file per section
  data/         Clinic info, services list, testimonials (edit here to
                update content without touching component code)
  assets/       Real clinic photos and logo
  hooks/        useReveal — scroll-triggered fade-in animation
```

## Editing content

- **Clinic details** (name, phone, address, rating): `src/data/clinic.js`
- **Services list**: `src/data/services.js`
- **Testimonials**: `src/data/testimonials.js`
- **SEO title/description/structured data**: `index.html`

## Notes

- The contact section embeds a Google Map using the address in
  `src/data/clinic.js` — no API key required for the basic embed.
- The appointment form does not submit anywhere on its own; it opens
  WhatsApp with the entered details pre-filled. Connect it to a real
  backend or booking service when you're ready to accept submissions
  directly.
- Update the canonical URL and Open Graph tags in `index.html` once the
  site has a live domain.
