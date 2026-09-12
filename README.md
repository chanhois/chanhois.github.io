# Chan-ho Seo · Robotics Sensor Engineer

A bright, bilingual, single-page portfolio about making robot sensor data spatially correct, temporally aligned, and trustworthy.

The page follows a Signal Lab visual direction with an Ice Mint palette. Five featured projects use a Scroll Lab Story format: the evidence panel remains visible while the narrative moves through Problem, Evidence, Decision, Implementation, and Result. Four compact projects, production experience, research, publications, skills, and contact follow the featured work.

## Content

All public Korean and English copy lives in [`app/_portfolio/content.ts`](app/_portfolio/content.ts). Keep verified measurements in that file and preserve the public platform labels when updating project descriptions.

The public surface must not include customer names, internal product names, issue identifiers, robot serials, or internal repository paths.

## Media

Project photographs and recordings belong under `public/media/`. Read [`public/media/README.md`](public/media/README.md) before adding an asset; it defines redaction, alt text, captions, and GIF conversion.

The hardware synchronization case currently reports its verified physical trigger rate. Promote downstream synchronized-versus-unsynchronized motion results only after the comparison report is complete. Add a quantitative SLAM quality claim only after a controlled evaluation.

## Commands

```bash
npm install
npm run dev
npm test
npm run build
npm run test:site
npm run build:static
npm run lint
```

`npm test` runs component, content, interaction, and accessibility checks. `npm run test:site` builds the Sites worker and verifies the server-rendered portfolio and public-copy boundary.

## Deployment

The page is published to GitHub Pages at <https://chanhois.github.io>.

Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which runs the test suite, builds the static site, and deploys it.

`npm run build:static` produces that deployable site in `dist-static/`. The portfolio is an entirely client-rendered tree with no server data access, so it ships as a static single-page bundle; [`vite.static.config.ts`](vite.static.config.ts) builds it from [`static/`](static) with relative asset paths, which keeps the output valid at a user-site root and at a project subpath alike.

The Cloudflare Worker build (`npm run build`) remains available for server-rendered hosting, and `npm run test:site` continues to guard the public-copy boundary against it.
