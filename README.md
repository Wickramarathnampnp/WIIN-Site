# WIIN Institute of Technology Website

React + Vite implementation of the supplied WIIN homepage UI and website copy deck.

## Run

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

The production output is created in `dist/`.

## Structure

- `src/App.jsx` - application routes and SEO metadata
- `src/components/` - reusable sections, each with its own `.jsx` and `.css`
- `src/pages/` - Home, About, News, Contact and Launch pages
- `src/data/siteData.js` - focus areas, news and contact information
- `src/assets/` - logo, hero, news and supporter images prepared from the supplied design reference

## Items to confirm before publishing

Replace the provisional contact details and complete the launch venue, time and registration information after official confirmation. Connect the contact form to your preferred backend/email service before production use.
