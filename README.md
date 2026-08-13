# Sandeep Berwer — Portfolio

A story-driven AI/ML + full-stack portfolio: not "here are my skills," but where I started,
what I learned, what I built, and where I'm going. Built with React, Vite, Tailwind CSS v4,
and Framer Motion.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build for production

```bash
npm run build       # outputs to dist/
npm run preview     # preview the production build locally
```

## Editing your content — ONE FILE

Everything on the site — your profile, journey timeline, skills, projects, experience,
certifications, and "building toward" list — lives in a single file:

```
src/data/content.js
```

You never need to touch component code just to update content. Search that file for:

- `[ADD YOUR INFORMATION]` — general placeholders (email, Honeywell details, cert names)
- `[ADD YOUR REPO LINK]` — GitHub repo URLs for individual projects
- `[ADD YOUR LIVE DEMO LINK]` — live deployment URLs
- `[ADD YOUR RESUME LINK OR FILE]` — link to your resume PDF (host it in `public/` and
  reference it as `/your-resume.pdf`, or link an external URL)
- `[ADD VERIFICATION LINK]` — certificate verification URLs

### Add a new project
Add an object to the `projects` array:
```js
{
  id: "unique-id",
  name: "Project Name",
  category: "AI/ML",              // AI/ML | Web | Full Stack
  tags: ["AI/ML"],                // used by the filter buttons
  problem: "...",
  solution: "...",
  tech: ["Python", "FastAPI"],
  features: ["...", "..."],
  learned: "...",
  github: "https://github.com/...",
  demo: "https://...",             // or null if no live demo
  status: "Completed",
}
```

### Add a certificate
Add to the `certifications` array: `{ id, name, org, date, link }`.

### Add a journey milestone
Add to the `journey` array: `{ id, period, title, summary, learned: [], tech: [], impact }`.

### Add a new experience / internship
Add to the `experience` array: `{ id, role, org, period, current, summary, details: [] }`.

## Customizing design

Color, font, and spacing tokens are defined once in `src/index.css` under `:root`
(dark theme) and `:root[data-theme="light"]` (light theme overrides). Change a value
there and it updates everywhere — no hunting through components.

## Deploy to Vercel

**Via dashboard:**
1. Push this project to a GitHub repo.
2. vercel.com → New Project → import the repo.
3. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.
4. Deploy.

**Via CLI:**
```bash
npm i -g vercel
vercel
```

## Production-ready checklist

- [ ] Replace every `[ADD YOUR INFORMATION]` placeholder in `src/data/content.js`
- [ ] Add real GitHub repo links for SkillVerse AI, StockVision AI, and other projects
- [ ] Add live demo links where deployed
- [ ] Upload your resume PDF to `public/` and update `profile.resumeUrl`
- [ ] Add your real email to `profile.email`
- [ ] Fill in Honeywell internship details in `experience` and `journey`
- [ ] Add real certificate names + verification links
- [ ] Replace `public/favicon.svg` if you want a custom favicon
- [ ] Test on an actual phone, not just browser dev tools
- [ ] Run `npm run build` once more before deploying to confirm no errors

## Stack

React 19 · Vite · Tailwind CSS v4 · Framer Motion · lucide-react
