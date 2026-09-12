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
npm run lint
```

`npm test` runs component, content, interaction, and accessibility checks. `npm run test:site` builds the Sites worker and verifies the server-rendered portfolio and public-copy boundary.
