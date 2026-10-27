# Stackora Systems — Company Portfolio Website

A clean, responsive portfolio website for **Stackora Systems**, built with React,
Vite and plain CSS. The site presents the six-member team, the services their
experience supports, selected projects, technologies and a contact form.

## Tech stack

- React 19 + Vite
- JavaScript (JSX)
- One global CSS file
- Lucide React icons
- No animation or UI libraries beyond the above

## Getting started

Requirements: Node.js 20.19+ (or 22.12+) and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

```bash
npm run build     # production build in dist/
npm run preview   # serve the production build locally
```

## Project structure

```text
public/
  favicon.png          Gradient S mark used as the browser icon
  logo.png             Full-colour lockup shown in the navbar
  logo-reversed.png    Light lockup shown on the navy footer
  projects/
    ixfi.webp           Google Play screenshot (stored locally)
    zee5.webp           Google Play screenshot (stored locally)
src/
  components/
    Navbar.jsx          Responsive navigation + mobile menu
    Footer.jsx          Branding, links and official contact details
    SectionHeading.jsx  Shared eyebrow / title / description block
    ProjectVisual.jsx   Conceptual mockups + Google Play screenshots
  sections/
    Hero.jsx
    Services.jsx
    Portfolio.jsx
    Team.jsx
    Technologies.jsx
    About.jsx
    HowWeWork.jsx
    Engagement.jsx
    Contact.jsx
  data/
    team.js             Six team profiles
    services.js         Service cards
    projects.js         Portfolio cards + filter categories
    technologies.js     Technology groups
  App.jsx
  main.jsx
  index.css
```

To change content, edit the files in `src/data/`. Each array renders cards with
`.map()`, so no component changes are needed for normal content updates.

## Content notes and accuracy

All team, project and service information is taken from the six supplied
resumes (Ishant Sharma, Rituraj Sharma, Puneet, Savan Vaghasiya, Manoj
Vaghasiya and Pratik Ambaliya). The site:

- Does **not** publish personal email addresses or phone numbers.
- Uses only the official company contact details:
  `stackorasystems@gmail.com` and `+91 77329 93378` (WhatsApp:
  `https://wa.me/917732993378`).
- Distinguishes **professional projects**, **independent projects** and
  **open-source work** with labels on each portfolio card.
- **Omits contributor names and employer names from every project card**, and
  carries a disclaimer stating that each project was completed by a team member
  for their respective employer (or as independent/open-source work), so no
  client relationship or endorsement is implied.
- Uses official **Google Play listing screenshots** for the IXFI and Zee5
  cards, stored locally, and clearly labelled conceptual visuals for every
  other project.
- Publishes verified external links: the official TGI Connect and StepUp Horse
  product sites plus the Google Play listings for IXFI and Zee5. App Store links
  found in one resume returned HTTP 404 during development, so they were omitted
  rather than shipped broken.
- Avoids inventing company history, customer counts, awards or pricing.

### Services scope

Services reflect the resumes: UI/UX design (Figma, research, prototyping),
native Android/iOS, Flutter, Compose Multiplatform and React Native,
Node.js/NestJS backend, real-time systems, databases, AWS/cloud, ML and speech
APIs, and maintenance. No resume lists React.js **web** development, so
the site does not claim it as a service — the web-related service is grounded in
JavaScript, HTML/CSS and templated Node.js work.

## Contact form

The form validates name, business email, project type and message in the
browser, then POSTs the enquiry as JSON to **FormSubmit**, which forwards it to
`stackorasystems@gmail.com`. There is no server of our own and no API key to
hide: the endpoint is simply the mailbox address.

```js
// src/sections/Contact.jsx
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/stackorasystems@gmail.com'
```

Behaviour:

- A hidden `_honey` honeypot field filters out simple bots.
- The button reads **Sending…** and disables while the request is in flight.
- The success notice appears only after the service accepts the submission.
- On any failure an error notice appears with a direct
  `mailto:stackorasystems@gmail.com` fallback, so a visitor is never stuck.
- Nothing is stored on this website.

### One-time activation

The first submission makes FormSubmit send a confirmation email to
`stackorasystems@gmail.com`. **Open that email and click the activation link**
— until it is confirmed, submissions are held rather than delivered. Submit the
form once on the live site to trigger it, then check Spam if it is not visible.

### Switching service

FormSubmit is free with no signup and no submission limit. If you later prefer
Formspree (50/month, needs a form ID) or Web3Forms (250/month, needs an access
key), change `FORM_ENDPOINT` and the payload in `src/sections/Contact.jsx`, then
update the form help text and the notices in that same file so they still match
the real behaviour.

## Deployment

The build is a static site, so any static host works:

**Vercel**

```bash
npm i -g vercel
vercel
```

Use the default Vite settings: build command `npm run build`, output directory
`dist`.

**Netlify**

- Build command: `npm run build`
- Publish directory: `dist`

**GitHub Pages**

This repository includes `.github/workflows/deploy.yml`, and `vite.config.js`
uses `base: './'` so the build works from any repository subpath without edits.

1. Push the project to a GitHub repository and use the `main` branch.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push to `main`, or run the **Deploy to GitHub Pages** workflow manually.
5. The site publishes at `https://<username>.github.io/<repository>/`.

For a custom domain, add it in the same Pages settings; the relative paths
continue to work. The workflow installs with `npm ci`, builds, marks the output
with `.nojekyll`, and deploys the `dist/` folder.

**Any static host** — run `npm run build` and serve the `dist/` folder. Because
the site is a single page with in-page anchors, no SPA rewrite rule is needed.

## Accessibility and performance

- Semantic sections, one `h1`, labelled form fields and a skip link.
- Visible keyboard focus styles, `aria-expanded` on the mobile menu toggle,
  `aria-invalid` plus inline error messages on the form, and an `aria-live`
  status for the email handoff.
- Mobile navigation closes on link selection and with the Escape key.
- Text and button colours meet accessible contrast against white and navy.
- No stock photography or heavy media. The production JS is about 83 KB
  gzipped and CSS about 6 KB gzipped; the two local WebP screenshots total about
  48 KB and are lazy-loaded.
- Animations are minimal and respect `prefers-reduced-motion`.
