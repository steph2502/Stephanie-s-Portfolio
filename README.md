# Stephanie Onwuagbaizu — Portfolio

A calm, premium, engineering-focused portfolio built with Next.js, TypeScript, Tailwind CSS and Framer Motion.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** for subtle, intentional animation
- Hand-rolled shadcn-style UI primitives (`src/components/ui`) — no external UI runtime dependency

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

```bash
npm run build   # production build
npm run lint    # eslint
```

## Project structure

```
src/
  app/                 Routes, layout, metadata, global styles, /api/contact
  components/
    layout/            Navbar, Footer
    sections/           One file per homepage section (Hero, About, Projects, ...)
    ui/                 Button, Card, Badge, Dialog, Input, Textarea, Label
  hooks/                use-active-section (scroll-spy for the nav)
  lib/
    data.ts             *** single source of truth for all content ***
    utils.ts            cn() class helper
public/
  images/               Portrait, project screenshots, company logos (placeholders)
  resume.pdf            Placeholder resume (replace with the real file)
scripts/
  generate-placeholder-resume.js   Regenerates the placeholder resume.pdf if needed
```

## Content checklist — personalize before publishing

Everything content-related lives in **`src/lib/data.ts`**. Search that file for `TODO` comments, then also replace these assets:

- [ ] `public/resume.pdf` — replace with your real resume (same filename, or update `siteConfig.resumeUrl`)
- [ ] `public/images/portrait.svg` — replace with a real photo, e.g. `public/images/portrait.jpg`, and update `siteConfig.portraitSrc` in `data.ts`
- [ ] `public/images/projects/*.svg` — replace each with a real product screenshot (keep the same filenames or update `image` in each project entry)
- [ ] `public/images/logos/*.svg` — replace with real company/program logos
- [ ] `siteConfig.email`, `github`, `linkedin`, `location`, `availability` in `data.ts`
- [ ] `projects` — confirm/replace live demo + GitHub links, and case-study copy
- [ ] `experience` — confirm exact dates, roles, tech and achievements
- [ ] `testimonials` — replace placeholder quotes with real ones (ask former teammates/mentors)
- [ ] `currentlyBuilding` — keep this section fresh as your focus shifts

## Contact form

The form at `src/components/contact-form.tsx` posts to `src/app/api/contact/route.ts`.

- If a `RESEND_API_KEY` environment variable is set, the API route sends the message via [Resend](https://resend.com).
- If it isn't set, the client falls back to opening the visitor's email client via a pre-filled `mailto:` link, so no message is ever silently lost.

To enable real email delivery, create a `.env.local` file:

```bash
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=hello@yourdomain.com
CONTACT_FROM_EMAIL="Portfolio <onboarding@resend.dev>"
```

## Accessibility

- Semantic landmarks (`header`, `main`, `footer`, `nav`), skip-to-content link
- Keyboard-accessible dialog (project case studies) via Radix UI
- `prefers-reduced-motion` respected globally through `MotionConfig` and CSS
- Color palette meets WCAG AA contrast on the light background

## Deploying

The project is a standard Next.js app and deploys cleanly to [Vercel](https://vercel.com) — connect the repo and set the environment variables above if you want live email delivery.
