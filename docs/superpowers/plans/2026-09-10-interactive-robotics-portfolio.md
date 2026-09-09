# Interactive Robotics Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and publish a bright, bilingual, single-page robotics portfolio that presents five evidence-led case studies and four supporting projects through an accessible Scroll Lab Story interaction.

**Architecture:** Initialize the repository with the Sites Vinext starter, then replace the preview skeleton with one React client application rendered from a typed static content model. Keep language and active case-step as the only meaningful UI state; render real media or honest HTML/CSS evidence graphics through one media interface, with linear document-order fallbacks for mobile, reduced motion, missing assets, and JavaScript-disabled rendering.

**Tech Stack:** Vinext, React, TypeScript, CSS, Vitest, React Testing Library, jest-dom, vitest-axe, Manrope Variable, IBM Plex Mono, Lucide React, ffmpeg for user-supplied GIF conversion, Sites hosting.

**Spec:** `docs/superpowers/specs/2026-09-10-interactive-robotics-portfolio-design.md`

## Global Constraints

- Use one public route and preserve the starter's Sites/Vinext build and hosting structure.
- Public page background is `#F4F7F1`, ink is `#101813`, primary accent is `#009B66`, secondary accent is `#5A67F2`, border is `#D9E1D9`, and muted copy is `#5F6B63`.
- Use Manrope Variable weights 400 through 800 and IBM Plex Mono weights 400 through 600, with non-blocking system fallbacks.
- Retain complete Korean and English UI/content switching without changing the current scroll position.
- Use the public labels `a new compact service robot`, `a new industrial AMR`, `a humanoid robot platform`, and `a low-cost 2D LiDAR`.
- Do not publish customer names, internal product names, Jira identifiers, robot serials, or internal repository identifiers.
- Featured work is exactly five case studies; the compact project index is exactly four projects.
- Use natural page scrolling. Do not add scroll-jacking, forced scroll snapping, heavy 3D, or WebGL.
- Disable parallax, animated counting, transition movement, and automatic media playback for `prefers-reduced-motion`.
- User-supplied GIFs must be converted to WebM and MP4 for real play/pause controls; keep a poster or static fallback.
- Every graph must include a text conclusion and the key numeric values it visualizes.
- Do not claim a quantitative SLAM improvement until the user supplies a validated comparison.
- No backend, persistence, authentication, uploads, analytics, contact-form submission, or CMS is in scope.

## File Structure

```text
app/
  layout.tsx                     # Site metadata, fonts, global document shell
  page.tsx                       # Route entry; renders PortfolioApp
  globals.css                    # Complete Ice Mint responsive visual system
  portfolio-app.tsx              # Client composition and language context
  _portfolio/
    model.ts                     # Localized content and media interfaces
    content.ts                   # All public bilingual portfolio content
    content.test.ts              # Count, translation, metric, and privacy audit
    use-language.ts              # Deterministic EN default and local preference
    use-language.test.tsx        # Toggle and storage behavior
    site-nav.tsx                 # Sticky anchors, active section, language control
    hero.tsx                     # Positioning, proof metrics, signal field
    metric.tsx                   # Accessible metric display
    case-study.tsx               # Scroll Lab Story controller and narrative
    media-stage.tsx              # Image/video/diagram/fallback renderer
    evidence-graphic.tsx         # CSS/HTML evidence graphics without fake photos
    case-study.test.tsx          # Progress selection, media, and failure behavior
    project-index.tsx            # Four compact supporting projects
    sections.tsx                 # Experience, research, skills, contact, footer
    social.ts                    # Public metadata strings shared with server metadata
    portfolio-app.test.tsx       # Integration and accessibility checks
public/
  media/
    README.md                    # Asset naming, redaction, caption, and conversion rules
  og.png                         # One finished site-specific social card
scripts/
  prepare-portfolio-media.sh     # Deterministic GIF-to-WebM/MP4/poster helper
vitest.config.ts                 # jsdom test environment and React plugin
vitest.setup.ts                  # jest-dom and browser API test shims
.openai/hosting.json             # Sites-owned hosting configuration from initializer
.gitignore                       # Starter ignores plus persisted visual-companion output
```

---

### Task 1: Initialize the Site and Lock the Public Content Contract

**Files:**
- Create via initializer: `package.json`, lockfile, `.openai/hosting.json`, `app/layout.tsx`, `app/page.tsx`, `app/globals.css`
- Create: `app/_portfolio/model.ts`
- Create: `app/_portfolio/content.ts`
- Create: `app/_portfolio/content.test.ts`
- Create: `vitest.config.ts`
- Create: `vitest.setup.ts`
- Modify: `package.json`
- Modify: `.gitignore`

**Interfaces:**
- Produces: `LocalizedText`, `MediaSpec`, `CaseStep`, `CaseStudy`, `CompactProject`, `ExperienceEntry`, `ResearchEntry`, `PublicationEntry`, `SkillGroup`, `ProfileContent`, `PortfolioContent`, and `portfolioContent`.
- Produces: `npm test` running Vitest in non-watch mode.
- Consumes: approved spec and the source inventory in the Obsidian vault.

- [ ] **Step 1: Initialize the Sites project once and keep its development session alive**

Run the Sites initializer from its installed skill directory with the repository root as the target. Do not invoke any other initializer.

```bash
/Users/seochanho/.codex/plugins/cache/openai-bundled/sites/0.1.30/scripts/init-site.sh "$PWD"
npm run dev
```

Capture the exact Local URL from the development server and open it once through the in-app browser as required by the Sites workflow. Keep this process running through implementation and the production build.

Add the persisted visual-companion directory to the initializer's `.gitignore`:

```gitignore
.superpowers/
```

- [ ] **Step 2: Install only the runtime and test dependencies used by the design**

```bash
npm install @fontsource-variable/manrope @fontsource/ibm-plex-mono lucide-react
npm install --save-dev vitest jsdom @vitejs/plugin-react @testing-library/react @testing-library/jest-dom vitest-axe
```

Add these scripts without removing initializer scripts:

```json
{
  "scripts": {
    "test": "vitest run",
    "test:watch": "vitest"
  }
}
```

- [ ] **Step 3: Create the test environment**

Create `vitest.config.ts`:

```ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    css: true,
  },
});
```

Create `vitest.setup.ts`:

```ts
import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

class IntersectionObserverStub implements IntersectionObserver {
  readonly root = null;
  readonly rootMargin = "0px";
  readonly thresholds = [0];
  disconnect = vi.fn();
  observe = vi.fn();
  takeRecords = vi.fn(() => []);
  unobserve = vi.fn();
}

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  value: IntersectionObserverStub,
});

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
```

- [ ] **Step 4: Write the failing content-contract test**

Create `app/_portfolio/content.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { portfolioContent } from "./content";

const forbidden = [
  /ServiQ/i,
  /Carti Carrier/i,
  /CLOiD/i,
  /LG Innotek/i,
  /Wanlida|WLD/i,
  /Coin D4A/i,
  /Jira/i,
  /\b(?:ATK|PS|ESE|RS|SBRS)-\d+\b/i,
  /bearrobotics\//i,
];

describe("public portfolio content", () => {
  it("has the approved project counts and order", () => {
    expect(portfolioContent.featured.map(({ id }) => id)).toEqual([
      "lidar-stability",
      "slam-time-axis",
      "hardware-trigger-sync",
      "amr-calibration",
      "camera-iqc-uncertainty",
    ]);
    expect(portfolioContent.projects).toHaveLength(4);
  });

  it("contains complete bilingual copy and media descriptions", () => {
    for (const project of [...portfolioContent.featured, ...portfolioContent.projects]) {
      expect(project.title.en.trim()).not.toBe("");
      expect(project.title.ko.trim()).not.toBe("");
    }
    for (const study of portfolioContent.featured) {
      expect(study.steps.length).toBeGreaterThanOrEqual(5);
      for (const step of study.steps) {
        expect(step.body.en.trim()).not.toBe("");
        expect(step.body.ko.trim()).not.toBe("");
        expect(step.media.alt.en.trim()).not.toBe("");
        expect(step.media.alt.ko.trim()).not.toBe("");
      }
    }
    expect(portfolioContent.profile.headline.en.trim()).not.toBe("");
    expect(portfolioContent.profile.headline.ko.trim()).not.toBe("");
    expect(portfolioContent.experience).toHaveLength(3);
    expect(portfolioContent.research).toHaveLength(2);
    expect(portfolioContent.publications.length).toBeGreaterThanOrEqual(2);
    expect(portfolioContent.skills).toHaveLength(4);
    for (const label of Object.values(portfolioContent.navigation)) {
      expect(label.en.trim()).not.toBe("");
      expect(label.ko.trim()).not.toBe("");
    }
  });

  it("contains no internal names or identifiers", () => {
    const publicCopy = JSON.stringify(portfolioContent);
    for (const pattern of forbidden) expect(publicCopy).not.toMatch(pattern);
  });

  it("does not invent a quantitative SLAM gain", () => {
    const slam = portfolioContent.featured.find(({ id }) => id === "slam-time-axis");
    expect(JSON.stringify(slam)).not.toMatch(/SLAM.{0,40}\d+(?:\.\d+)?%/i);
  });
});
```

- [ ] **Step 5: Run the contract test and verify it fails because the model and content do not exist**

Run:

```bash
npm test -- app/_portfolio/content.test.ts
```

Expected: FAIL because `./content` cannot be resolved.

- [ ] **Step 6: Implement the typed model**

Create `app/_portfolio/model.ts`:

```ts
export type Language = "en" | "ko";
export type LocalizedText = Record<Language, string>;
export type EvidenceKind = "diagram" | "chart" | "image" | "video";

export interface MediaSpec {
  kind: EvidenceKind;
  visual?: "lidar" | "clock" | "trigger" | "calibration" | "uncertainty";
  src?: string;
  mp4Src?: string;
  poster?: string;
  alt: LocalizedText;
  caption: LocalizedText;
}

export interface MetricSpec {
  label: LocalizedText;
  value: string;
  context: LocalizedText;
}

export interface CaseStep {
  id: string;
  label: LocalizedText;
  title: LocalizedText;
  body: LocalizedText;
  media: MediaSpec;
}

export interface CaseStudy {
  id: string;
  eyebrow: LocalizedText;
  title: LocalizedText;
  summary: LocalizedText;
  tags: string[];
  metrics: MetricSpec[];
  steps: CaseStep[];
}

export interface CompactProject {
  id: string;
  title: LocalizedText;
  summary: LocalizedText;
  outcome: LocalizedText;
  tags: string[];
}

export interface ExperienceEntry {
  id: string;
  platform: LocalizedText;
  role: LocalizedText;
  summary: LocalizedText;
}

export interface ResearchEntry {
  id: string;
  title: LocalizedText;
  summary: LocalizedText;
  result: LocalizedText;
  tags: string[];
}

export interface PublicationEntry {
  id: string;
  title: string;
  venue: LocalizedText;
  contribution: LocalizedText;
  recognition?: LocalizedText;
}

export interface SkillGroup {
  id: "space" | "time" | "quality" | "perception";
  title: LocalizedText;
  skills: string[];
}

export interface ProfileContent {
  name: string;
  role: LocalizedText;
  headline: LocalizedText;
  introduction: LocalizedText;
  email: string;
}

export interface PortfolioContent {
  profile: ProfileContent;
  navigation: Record<"work" | "projects" | "experience" | "research" | "about", LocalizedText>;
  featured: CaseStudy[];
  projects: CompactProject[];
  experience: ExperienceEntry[];
  research: ResearchEntry[];
  publications: PublicationEntry[];
  skills: SkillGroup[];
}
```

- [ ] **Step 7: Implement the approved public content**

Create `app/_portfolio/content.ts` exporting `portfolioContent: PortfolioContent`. Use the exact five IDs and four compact projects from the test. Encode every story as Problem, Evidence, Decision, Implementation, and Result steps with complete Korean and English copy from the spec. Store the hero identity, navigation labels, three public platform experience entries, two research entries, verified publications, and four skill groups in this same export rather than hard-coding them inside components.

Required factual values:

```ts
const approvedFacts = {
  lidarYaw: "0.378° → 0.166° → 0.067°",
  lidarRangeNoise: "4.1 mm → 1.3 mm",
  clockDrift: "≈13 ms / 12 h · ≈0.3 ppm",
  cameraTrigger: "447 frames / 14.87 s · 30.00 Hz",
  calibratedUnits: "7 production units",
  inspectionMismatch: "52 conflicting decisions",
  retestChange: "32 of 116 retested units",
  cameraCalibration: "82% accuracy improvement",
} as const;
```

Use CSS evidence graphics for the first version by assigning `kind: "chart"` or `kind: "diagram"` and a `visual` key. Do not add fictitious image paths. Public platform summaries must use only:

```ts
[
  "Sensor Stack for a New Compact Service Robot",
  "Humanoid Sensor-System Bring-up",
  "Camera Calibration from Pedestrians",
  "Multi-Object Tracking with a 2D LiDAR",
]
```

- [ ] **Step 8: Run the content contract test**

Run:

```bash
npm test -- app/_portfolio/content.test.ts
```

Expected: all four tests PASS.

- [ ] **Step 9: Commit the foundation and public content contract**

```bash
git add package.json package-lock.json .openai .gitignore app/_portfolio/model.ts app/_portfolio/content.ts app/_portfolio/content.test.ts vitest.config.ts vitest.setup.ts
git commit -m "feat: establish bilingual portfolio content model"
```

---

### Task 2: Build the Page Shell, Metadata, and Language Switching

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/page.tsx`
- Create: `app/portfolio-app.tsx`
- Create: `app/_portfolio/use-language.ts`
- Create: `app/_portfolio/use-language.test.tsx`
- Create: `app/_portfolio/site-nav.tsx`
- Remove after replacement: `app/_sites-preview/`

**Interfaces:**
- Consumes: `Language` from `model.ts`, `portfolioContent.navigation`, and section IDs `work`, `projects`, `experience`, `research`, `about`.
- Produces: `useLanguage(): { language: Language; setLanguage(language: Language): void; t(text: LocalizedText): string }`.
- Produces: `PortfolioApp`, the only route-level client composition component.

- [ ] **Step 1: Write the failing language behavior test**

Create `app/_portfolio/use-language.test.tsx`:

```tsx
import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { LanguageProvider, useLanguage } from "./use-language";

function Probe() {
  const { language, setLanguage, t } = useLanguage();
  return (
    <div>
      <output>{language}</output>
      <p>{t({ en: "Selected work", ko: "주요 작업" })}</p>
      <button onClick={() => setLanguage("ko")}>한국어</button>
    </div>
  );
}

describe("LanguageProvider", () => {
  beforeEach(() => localStorage.clear());

  it("renders deterministic English first, then persists a user selection", () => {
    render(<LanguageProvider><Probe /></LanguageProvider>);
    expect(screen.getByText("Selected work")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "한국어" }));
    expect(screen.getByText("주요 작업")).toBeInTheDocument();
    expect(localStorage.getItem("portfolio-language")).toBe("ko");
  });
});
```

- [ ] **Step 2: Run the language test and verify it fails**

Run:

```bash
npm test -- app/_portfolio/use-language.test.tsx
```

Expected: FAIL because `LanguageProvider` does not exist.

- [ ] **Step 3: Implement deterministic language state**

Create `app/_portfolio/use-language.ts`:

```tsx
"use client";

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import type { Language, LocalizedText } from "./model";

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (text: LocalizedText) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const stored = localStorage.getItem("portfolio-language");
    if (stored === "en" || stored === "ko") setLanguageState(stored);
  }, []);

  const value = useMemo<LanguageContextValue>(() => ({
    language,
    setLanguage(next) {
      setLanguageState(next);
      localStorage.setItem("portfolio-language", next);
      document.documentElement.lang = next;
    },
    t(text) {
      return text[language] || text.en;
    },
  }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("useLanguage must be used inside LanguageProvider");
  return value;
}
```

- [ ] **Step 4: Run the language test**

Run:

```bash
npm test -- app/_portfolio/use-language.test.tsx
```

Expected: PASS.

- [ ] **Step 5: Replace the starter shell**

`app/layout.tsx` must import the fonts and site stylesheet, set the finished title and description, and remove starter preview metadata:

```tsx
import "@fontsource-variable/manrope";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/600.css";
import "./globals.css";

export const metadata = {
  title: "Chan-ho Seo · Robotics Sensor Engineer",
  description: "Calibration, time synchronization, sensor quality, and perception systems for reliable robots.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
```

`app/page.tsx` becomes:

```tsx
import { PortfolioApp } from "./portfolio-app";

export default function Page() {
  return <PortfolioApp />;
}
```

Delete `app/_sites-preview/` and remove `react-loading-skeleton` if the initializer added it and no finished component uses it. Refresh the lockfile after removing the dependency.

- [ ] **Step 6: Add the route composition and navigation**

`PortfolioApp` wraps the page in `LanguageProvider` and renders semantic sections in this exact order:

```tsx
"use client";

import { LanguageProvider } from "./_portfolio/use-language";
import { SiteNav } from "./_portfolio/site-nav";

export function PortfolioApp() {
  return (
    <LanguageProvider>
      <SiteNav />
      <main id="main-content">
        <section id="hero" aria-labelledby="hero-title" />
        <section id="work" aria-labelledby="work-title" />
        <section id="projects" aria-labelledby="projects-title" />
        <section id="experience" aria-labelledby="experience-title" />
        <section id="research" aria-labelledby="research-title" />
        <section id="about" aria-labelledby="about-title" />
      </main>
    </LanguageProvider>
  );
}
```

Implement `SiteNav` with an initial skip link, anchored navigation, an `EN`/`KO` segmented control using `aria-pressed`, and an `IntersectionObserver` that marks the nearest visible top-level section. Keep anchors functional when the observer is unavailable.

- [ ] **Step 7: Run tests and the production build**

```bash
npm test
npm run build
```

Expected: all tests PASS and the production build succeeds with the finished page metadata.

- [ ] **Step 8: Commit the shell**

```bash
git add app package.json package-lock.json
git commit -m "feat: add bilingual portfolio shell"
```

---

### Task 3: Implement the Signal Lab Hero and Proof Metrics

**Files:**
- Create: `app/_portfolio/hero.tsx`
- Create: `app/_portfolio/metric.tsx`
- Modify: `app/portfolio-app.tsx`
- Modify: `app/globals.css`
- Test: `app/_portfolio/portfolio-app.test.tsx`

**Interfaces:**
- Consumes: `useLanguage().t`, `MetricSpec`, `portfolioContent.profile`, and public proof values from `content.ts`.
- Produces: `<Hero />` with `id="hero-title"`, two proof metrics, calls to action, and an `aria-hidden` signal field.
- Produces: `<Metric metric: MetricSpec />` with label, value, and context always present in the DOM.

- [ ] **Step 1: Write the failing hero proof test**

Create the first test in `app/_portfolio/portfolio-app.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PortfolioApp } from "../portfolio-app";

describe("PortfolioApp", () => {
  it("leads with the positioning and verified proof metrics", () => {
    render(<PortfolioApp />);
    expect(screen.getByRole("heading", { name: /right place.*right time.*trusted data/i })).toBeInTheDocument();
    expect(screen.getByText("0.378° → 0.067°")).toBeInTheDocument();
    expect(screen.getByText("30.00 Hz")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /explore selected work/i })).toHaveAttribute("href", "#work");
  });
});
```

- [ ] **Step 2: Run the hero test and verify it fails**

```bash
npm test -- app/_portfolio/portfolio-app.test.tsx
```

Expected: FAIL because the hero is still empty.

- [ ] **Step 3: Implement `Metric` and `Hero`**

`Metric` must use visible text rather than an animated-only canvas:

```tsx
export function Metric({ label, value, context }: { label: string; value: string; context: string }) {
  return (
    <article className="metric">
      <p className="metric__label">{label}</p>
      <strong className="metric__value">{value}</strong>
      <p className="metric__context">{context}</p>
    </article>
  );
}
```

`Hero` must render the approved statement, a two-sentence role summary, tags for Calibration, Time Sync, Sensor Quality, and Perception, both metrics, and links to `#work` and `mailto:studychanho0717@gmail.com`. Its pointer handler only updates bounded CSS custom properties on the decorative field:

```tsx
function updateSignal(event: React.PointerEvent<HTMLDivElement>) {
  if (event.pointerType === "touch") return;
  const rect = event.currentTarget.getBoundingClientRect();
  const x = Math.max(-1, Math.min(1, ((event.clientX - rect.left) / rect.width - 0.5) * 2));
  const y = Math.max(-1, Math.min(1, ((event.clientY - rect.top) / rect.height - 0.5) * 2));
  event.currentTarget.style.setProperty("--signal-x", `${x * 10}px`);
  event.currentTarget.style.setProperty("--signal-y", `${y * 10}px`);
}
```

- [ ] **Step 4: Implement the first-viewport Ice Mint styling**

In `globals.css`, define the exact tokens from Global Constraints, a maximum content width of 1200 px, a minimum hero height of `min(880px, 100svh)`, fluid type via `clamp()`, and a two-column desktop hero that becomes one column under 800 px. Build the signal field from bordered HTML elements and CSS pseudo-elements; do not add an SVG illustration.

Use `@media (prefers-reduced-motion: reduce)` to set signal transforms and transitions to none.

- [ ] **Step 5: Run the hero test and build**

```bash
npm test -- app/_portfolio/portfolio-app.test.tsx
npm run build
```

Expected: PASS and a successful build.

- [ ] **Step 6: Commit the hero**

```bash
git add app/_portfolio/hero.tsx app/_portfolio/metric.tsx app/portfolio-app.tsx app/globals.css app/_portfolio/portfolio-app.test.tsx
git commit -m "feat: create signal lab portfolio hero"
```

---

### Task 4: Build the Scroll Lab Case-Study Interaction

**Files:**
- Create: `app/_portfolio/case-study.tsx`
- Create: `app/_portfolio/media-stage.tsx`
- Create: `app/_portfolio/evidence-graphic.tsx`
- Create: `app/_portfolio/case-study.test.tsx`
- Modify: `app/portfolio-app.tsx`
- Modify: `app/globals.css`

**Interfaces:**
- Consumes: `CaseStudy`, `CaseStep`, `MediaSpec`, `Language`, and `useLanguage().t`.
- Produces: `CaseStudyView({ study }: { study: CaseStudy })`.
- Produces: `MediaStage({ media, active, onFailure }: { media: MediaSpec; active: boolean; onFailure?: () => void })`.
- Produces: `EvidenceGraphic({ visual }: { visual: NonNullable<MediaSpec["visual"]> })`.
- Active-step state is local to each case study and defaults to the first step.

- [ ] **Step 1: Write failing interaction and media-fallback tests**

Create `app/_portfolio/case-study.test.tsx`:

```tsx
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { portfolioContent } from "./content";
import { LanguageProvider } from "./use-language";
import { CaseStudyView } from "./case-study";
import { MediaStage } from "./media-stage";

describe("CaseStudyView", () => {
  it("lets keyboard and pointer users select a story step", () => {
    render(<LanguageProvider><CaseStudyView study={portfolioContent.featured[0]} /></LanguageProvider>);
    const result = screen.getByRole("button", { name: /result/i });
    fireEvent.click(result);
    expect(result).toHaveAttribute("aria-current", "step");
    expect(screen.getByText(/0\.378°.*0\.067°/)).toBeInTheDocument();
  });

  it("keeps an informative frame when an image fails", () => {
    render(
      <LanguageProvider>
        <MediaStage
          active
          media={{
            kind: "image",
            src: "/media/missing.jpg",
            alt: { en: "Calibration setup", ko: "캘리브레이션 구성" },
            caption: { en: "Calibration evidence", ko: "캘리브레이션 증거" },
          }}
        />
      </LanguageProvider>,
    );
    fireEvent.error(screen.getByRole("img"));
    expect(screen.getByText(/evidence unavailable/i)).toBeInTheDocument();
    expect(screen.getByText("Calibration evidence")).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run the tests and verify they fail**

```bash
npm test -- app/_portfolio/case-study.test.tsx
```

Expected: FAIL because the case-study components do not exist.

- [ ] **Step 3: Implement the case-study controller**

`CaseStudyView` renders one heading, summary, tags, metric row, sticky `MediaStage`, and ordered `StoryStep` buttons. Clicking or focusing a progress button selects its step. An `IntersectionObserver` with `rootMargin: "-35% 0px -50% 0px"` updates the active step while reading; when observers are unavailable, the first step remains selected and progress buttons still work.

Required progress markup:

```tsx
<button
  type="button"
  aria-current={activeStep.id === step.id ? "step" : undefined}
  aria-controls={`${study.id}-media`}
  onClick={() => setActiveId(step.id)}
>
  <span>{String(index + 1).padStart(2, "0")}</span>
  <span>{t(step.label)}</span>
</button>
```

- [ ] **Step 4: Implement media rendering and honest evidence graphics**

`MediaStage` behavior:

```tsx
switch (media.kind) {
  case "video":
    return <ControlledEvidenceVideo media={media} active={active} />;
  case "image":
    return failed ? <MediaFallback media={media} /> : <img src={media.src} alt={t(media.alt)} onError={() => setFailed(true)} />;
  case "chart":
  case "diagram":
    return media.visual ? <EvidenceGraphic visual={media.visual} /> : <MediaFallback media={media} />;
}
```

The video component must expose a real Play/Pause button, attempt `video.play()` only after user input or when active and reduced motion is false, catch a rejected play promise, and leave the poster visible on failure. Source order is WebM, MP4, then poster/fallback.

`EvidenceGraphic` creates five HTML/CSS graphics:

- `lidar`: three labeled bars for Raw, Fixed grid, EKF with visible values 0.378°, 0.166°, 0.067°.
- `clock`: a 12-hour time axis ending at approximately 13 ms and 0.3 ppm.
- `trigger`: MCU, 1.8 V interface, camera, and IMU nodes with 30.00 Hz and 1 MHz labels.
- `calibration`: source scan, wall model, and aligned scan with a 7-unit result badge.
- `uncertainty`: supplier/factory verdict split feeding software, capture, mount, operator, and environment variance components.

Use semantic text and CSS lines/shapes. Do not render these facts only into a canvas or generated image.

- [ ] **Step 5: Add sticky desktop and linear mobile layout**

In `globals.css`:

```css
.case-study__story {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(320px, .9fr);
  gap: clamp(2rem, 6vw, 6rem);
}

.case-study__media {
  position: sticky;
  top: 6.5rem;
  align-self: start;
}

@media (max-width: 800px) {
  .case-study__story { display: block; }
  .case-study__media { position: static; }
  .story-step__mobile-media { display: block; }
}
```

On mobile, render a copy of each step's media immediately before its text and hide the single sticky stage. Preserve one accessible caption per visible media instance.

- [ ] **Step 6: Run focused and full tests**

```bash
npm test -- app/_portfolio/case-study.test.tsx
npm test
npm run build
```

Expected: all tests PASS and the build succeeds.

- [ ] **Step 7: Commit the featured case studies**

```bash
git add app/_portfolio/case-study.tsx app/_portfolio/media-stage.tsx app/_portfolio/evidence-graphic.tsx app/_portfolio/case-study.test.tsx app/portfolio-app.tsx app/globals.css
git commit -m "feat: add scroll lab case studies"
```

---

### Task 5: Add the Project Index, Experience, Research, Skills, and Contact

**Files:**
- Create: `app/_portfolio/project-index.tsx`
- Create: `app/_portfolio/sections.tsx`
- Modify: `app/_portfolio/content.ts`
- Modify: `app/portfolio-app.tsx`
- Modify: `app/_portfolio/portfolio-app.test.tsx`
- Modify: `app/globals.css`

**Interfaces:**
- Consumes: `portfolioContent.projects`, `portfolioContent.experience`, `portfolioContent.research`, `portfolioContent.publications`, `portfolioContent.skills`, and `useLanguage().t`.
- Produces: `ProjectIndex`, `ExperienceSection`, `ResearchSection`, `SkillsSection`, `ContactFooter`.
- The compact project disclosure uses native `<details>` so it works without custom client state.

- [ ] **Step 1: Extend the integration test with complete page landmarks**

Add to `portfolio-app.test.tsx`:

```tsx
it("renders all public project names and no internal platform names", () => {
  render(<PortfolioApp />);
  for (const name of [
    "Sensor Stack for a New Compact Service Robot",
    "Humanoid Sensor-System Bring-up",
    "Camera Calibration from Pedestrians",
    "Multi-Object Tracking with a 2D LiDAR",
  ]) expect(screen.getByRole("heading", { name })).toBeInTheDocument();

  expect(screen.queryByText(/ServiQ|Carti Carrier|CLOiD|LG Innotek/i)).not.toBeInTheDocument();
  expect(screen.getByRole("link", { name: /email/i })).toHaveAttribute(
    "href",
    "mailto:studychanho0717@gmail.com",
  );
});
```

- [ ] **Step 2: Run the integration test and verify it fails**

```bash
npm test -- app/_portfolio/portfolio-app.test.tsx
```

Expected: FAIL because the four project headings and final sections are absent.

- [ ] **Step 3: Implement the compact project index**

Render exactly four cards. Each card contains a CSS/HTML media motif, title, summary, outcome, and tags. Use native disclosure:

```tsx
<article className="project-card">
  <p className="project-card__index">{String(index + 1).padStart(2, "0")}</p>
  <h3>{t(project.title)}</h3>
  <p>{t(project.summary)}</p>
  <details>
    <summary>{t({ en: "Read the outcome", ko: "결과 보기" })}</summary>
    <p>{t(project.outcome)}</p>
  </details>
</article>
```

- [ ] **Step 4: Implement the remaining sections**

`ExperienceSection` maps the three `portfolioContent.experience` entries and one sensor-lifecycle line from bring-up to field reliability. `ResearchSection` maps the two selected `portfolioContent.research` entries and `portfolioContent.publications`; include the MOT survey as first author and the NeRF viewpoint-selection paper as co-author with its Best Paper Award, while omitting an unresolved publication status. Populate `portfolioContent.skills` with these exact groups and have `SkillsSection` render that array:

```ts
const skillGroups = [
  { key: "space", title: { en: "Spatial Calibration", ko: "공간 캘리브레이션" }, skills: ["SE(2)/SE(3)", "RANSAC", "PCA", "URDF / TF", "OpenCV", "Open3D"] },
  { key: "time", title: { en: "Temporal Alignment", ko: "시간 정렬" }, skills: ["Hardware Trigger", "Device Time", "Clock Drift", "Deskewing", "STM32"] },
  { key: "quality", title: { en: "Sensor Quality", ko: "센서 품질" }, skills: ["IQC", "ANOVA", "Guard Bands", "Root Cause Analysis", "Reliability"] },
  { key: "perception", title: { en: "Perception", ko: "인지" }, skills: ["2D LiDAR", "RGB-D", "EKF", "Multi-Object Tracking", "ROS 2"] },
] as const;
```

`ContactFooter` includes the user's email. Omit GitHub, LinkedIn, phone, and resume-download links from the initial site because approved values were not supplied.

- [ ] **Step 5: Style the supporting sections**

Use an asymmetric project grid on desktop with the first and fourth cards spanning two columns, while retaining source order. At widths under 800 px use one column. Use thin borders, high whitespace, and the same data-label typography as the hero. Native `<details>` must have visible keyboard focus and a rotating CSS disclosure marker that stops moving under reduced motion.

- [ ] **Step 6: Run tests and build**

```bash
npm test
npm run build
```

Expected: all tests PASS and the build succeeds.

- [ ] **Step 7: Commit the complete content surface**

```bash
git add app/_portfolio/project-index.tsx app/_portfolio/sections.tsx app/_portfolio/content.ts app/portfolio-app.tsx app/_portfolio/portfolio-app.test.tsx app/globals.css
git commit -m "feat: complete portfolio project and profile sections"
```

---

### Task 6: Complete Accessibility, Responsive Motion, and Media Preparation

**Files:**
- Modify: `app/_portfolio/portfolio-app.test.tsx`
- Modify: `app/_portfolio/media-stage.tsx`
- Modify: `app/_portfolio/site-nav.tsx`
- Modify: `app/globals.css`
- Create: `scripts/prepare-portfolio-media.sh`
- Create: `public/media/README.md`

**Interfaces:**
- Consumes: the fully rendered `PortfolioApp` and `MediaSpec` source conventions.
- Produces: zero serious/critical automated accessibility violations for the initial render.
- Produces: `scripts/prepare-portfolio-media.sh <input.gif> <output-base>` creating `<output-base>.webm`, `<output-base>.mp4`, and `<output-base>-poster.jpg`.

- [ ] **Step 1: Add a failing accessibility integration test**

Append to `portfolio-app.test.tsx`:

```tsx
import { axe } from "vitest-axe";

it("has no automated accessibility violations", async () => {
  const { container } = render(<PortfolioApp />);
  expect(await axe(container, {
    rules: { "color-contrast": { enabled: false } },
  })).toHaveNoViolations();
});
```

Extend `vitest.setup.ts`:

```ts
import * as matchers from "vitest-axe/matchers";
import { expect } from "vitest";
expect.extend(matchers);
```

- [ ] **Step 2: Run the accessibility test and inspect every reported violation**

```bash
npm test -- app/_portfolio/portfolio-app.test.tsx
```

Expected: FAIL if landmarks, labels, heading order, button names, or ARIA relationships are incomplete. Record each actual violation before fixing it.

- [ ] **Step 3: Fix semantic and keyboard behavior**

Ensure:

- One `<main>` and one page `<h1>`.
- Every top-level section has a unique `<h2>` connected by `aria-labelledby`.
- Skip link is the first focusable element.
- Progress items are buttons with `aria-current="step"` on the active item.
- The language control announces the full language names.
- Focus rings use `2px solid #009B66` plus a 2 px paper-colored offset.
- Interactive targets have a minimum 44 px hit area.
- Sticky navigation does not obscure anchored headings; add `scroll-margin-top`.
- Decorative signal elements have `aria-hidden="true"`.

- [ ] **Step 4: Add the media conversion helper**

Create executable `scripts/prepare-portfolio-media.sh`:

```bash
#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 2 ]]; then
  echo "Usage: $0 input.gif public/media/<project>/<name>" >&2
  exit 64
fi

input_path="$1"
output_base="$2"
mkdir -p "$(dirname "$output_base")"

ffmpeg -y -i "$input_path" -an -c:v libvpx-vp9 -crf 32 -b:v 0 -pix_fmt yuv420p "${output_base}.webm"
ffmpeg -y -i "$input_path" -an -c:v libx264 -crf 23 -pix_fmt yuv420p -movflags +faststart "${output_base}.mp4"
ffmpeg -y -i "$input_path" -vf "select=eq(n\,0)" -frames:v 1 -q:v 2 "${output_base}-poster.jpg"
```

Mark it executable. Use explicit user-supplied file paths when assets arrive; never run it against an unresolved glob.

- [ ] **Step 5: Document media intake and redaction**

Create `public/media/README.md` with this manifest example:

```ts
{
  kind: "video",
  src: "/media/lidar-stability/before-after.webm",
  mp4Src: "/media/lidar-stability/before-after.mp4",
  poster: "/media/lidar-stability/before-after-poster.jpg",
  alt: {
    en: "LiDAR scan before and after fixed-grid and EKF processing",
    ko: "고정 각도 그리드와 EKF 처리 전후의 LiDAR 스캔",
  },
  caption: {
    en: "The rigid yaw oscillation decreases across raw, fixed-grid, and EKF stages.",
    ko: "원본, 고정 각도 그리드, EKF 단계에서 강체 yaw 진동이 감소한다.",
  },
}
```

The README must require checking every company asset for customer/product names, serials, internal screens, background documents, faces, and unreleased hardware before it enters `public/`.

- [ ] **Step 6: Complete responsive and reduced-motion rules**

Add breakpoints at 1100 px and 800 px, test high-content cases at 320 px minimum width, and include:

```css
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
  }
  .signal-field { transform: none !important; }
}
```

Do not hide content before a reveal animation begins. JavaScript-disabled rendering must leave the full copy and first evidence graphic of every case in document order.

- [ ] **Step 7: Run the full validation suite**

```bash
npm test
npm run build
```

Expected: all tests PASS, automated accessibility test has zero violations under its documented jsdom limits, and the production build succeeds.

- [ ] **Step 8: Commit accessibility and media readiness**

```bash
git add app scripts/prepare-portfolio-media.sh public/media/README.md
git commit -m "feat: harden portfolio accessibility and media handling"
```

---

### Task 7: Add the Social Preview, Perform the Public-Copy Audit, and Build

**Files:**
- Create: `public/og.png`
- Modify: `app/layout.tsx`
- Create: `app/_portfolio/social.ts`
- Modify: `app/_portfolio/content.test.ts`
- Modify: `README.md`

**Interfaces:**
- Consumes: frozen Hero copy, Ice Mint palette, typography, verified metrics, and the finished site composition.
- Produces: one validated 1200×630 social card and host-derived absolute Open Graph/X image metadata.
- Produces: final repository documentation for content and media updates.

- [ ] **Step 1: Generate exactly one site-specific social card**

Use image generation once with this prompt after the finished page copy and visual system are stable:

```text
Create a complete 1200x630 social preview card for Chan-ho Seo's Robotics Sensor Engineer portfolio. Bright Ice Mint background #F4F7F1, near-black text #101813, emerald #009B66, small indigo #5A67F2 accents. Include the exact text: "CHAN-HO SEO", "ROBOTICS SENSOR ENGINEER", and "RIGHT PLACE. RIGHT TIME. TRUSTED DATA." Use bold compact sans-serif typography, restrained mono measurement labels, thin sensor signal circles, plotted points, and one compact metric "0.378° → 0.067°". Clean editorial composition, generous whitespace, high legibility in small link previews, no robot photo, no logo, no device frame, no watermark, no extra text.
```

Inspect the generated card at original detail. Reject it if any required text is incorrect, missing, or invented. Retry once only if unusable. Save the accepted image as `public/og.png`; omit social-image metadata if neither attempt is valid.

- [ ] **Step 2: Add request-host-derived social metadata**

Create `app/_portfolio/social.ts`:

```ts
export const social = {
  title: "Chan-ho Seo · Robotics Sensor Engineer",
  description: "Calibration, time synchronization, sensor quality, and perception systems for reliable robots.",
  imageAlt: "Chan-ho Seo Robotics Sensor Engineer portfolio — Right place. Right time. Trusted data.",
} as const;
```

Replace the static `metadata` export in `app/layout.tsx`. Use request headers to derive the origin from `x-forwarded-proto` and `x-forwarded-host`/`host`, then return `/og.png` as an absolute URL:

```ts
import { headers } from "next/headers";
import { social } from "./_portfolio/social";

export async function generateMetadata() {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const imageUrl = new URL("/og.png", `${protocol}://${host}`).toString();

  return {
    title: social.title,
    description: social.description,
    openGraph: { title: social.title, description: social.description, images: [{ url: imageUrl, alt: social.imageAlt }] },
    twitter: { card: "summary_large_image", title: social.title, description: social.description, images: [imageUrl] },
  };
}
```

- [ ] **Step 3: Expand the privacy test to rendered public copy and metadata**

Add the final title, description, and image alt to the same forbidden-pattern audit. Assert that the raw rendered English and Korean content does not contain internal names:

```ts
it("keeps metadata and localized content public-safe", () => {
  const renderedSurface = JSON.stringify({ portfolioContent, social });
  for (const pattern of forbidden) expect(renderedSurface).not.toMatch(pattern);
});
```

Export `social` from a small metadata module if importing `layout.tsx` would load unsupported server APIs in Vitest.

- [ ] **Step 4: Document content replacement**

Update `README.md` with:

- Site positioning and section order.
- `app/_portfolio/content.ts` as the single content source.
- `public/media/README.md` as the asset intake contract.
- `npm test`, `npm run dev`, and `npm run build` commands.
- A reminder that pending hardware-sync downstream results and quantitative SLAM gains must not be promoted until validated.

- [ ] **Step 5: Run final automated verification from a clean command invocation**

```bash
npm test
npm run build
git diff --check
```

Expected: all tests PASS, the deployment build succeeds, and `git diff --check` prints no errors.

- [ ] **Step 6: Inspect the public-copy audit output**

Run:

```bash
rg -n -i 'ServiQ|Carti Carrier|CLOiD|LG Innotek|Wanlida|WLD|Coin D4A|Jira|\b(ATK|PS|ESE|RS|SBRS)-[0-9]+\b|bearrobotics/' app public README.md
```

Expected: no matches in published source or assets. References inside test-only forbidden patterns are expected and must be excluded from the inspected paths or reviewed as test fixtures, never displayed content.

- [ ] **Step 7: Commit the validated release candidate**

```bash
git add app/layout.tsx app/_portfolio/social.ts app/_portfolio/content.test.ts public/og.png README.md package.json package-lock.json
git commit -m "feat: finalize portfolio metadata and public release"
```

---

### Task 8: Publish and Record the Delivered Site

**Files:**
- Read: `.openai/hosting.json`
- Modify: `/Users/seochanho/Documents/Obsidian Vault/Codex/Portfolio Content Inventory.md`

**Interfaces:**
- Consumes: a passing production build and the Sites hosting configuration.
- Produces: the deployed Sites URL and an Obsidian work record linked to the source inventory and design spec.

- [ ] **Step 1: Reconfirm the release candidate is the tested tree**

```bash
git status --short
git log -5 --oneline
npm test
npm run build
```

Expected: only intentional source changes are present, tests PASS, and the build succeeds.

- [ ] **Step 2: Publish through the Sites hosting workflow**

Invoke the `sites-hosting` skill and deploy the validated build. Preserve `.openai/hosting.json`, use the generated Sites configuration, and capture the final deployed URL. Do not substitute a different hosting provider.

- [ ] **Step 3: Record the result in Obsidian**

Update `/Users/seochanho/Documents/Obsidian Vault/Codex/Portfolio Content Inventory.md` with the following heading and bullets. Set the public URL bullet to the exact URL returned by `sites-hosting` in Step 2:

```markdown
## 구현 결과

- 디자인: Signal Lab / Ice Mint / Scroll Lab Story
- 콘텐츠: featured case study 5개 + compact project 4개
- 검증: production build, bilingual content, keyboard controls, reduced motion, public-copy audit
- 후속: 승인된 프로젝트 사진과 GIF를 `public/media/README.md` 절차로 추가
```

Insert the actual public URL between the direction and validation bullets. Preserve all existing inventory content.

- [ ] **Step 4: Stop retained development and visual-companion sessions**

Stop the retained `npm run dev` session after hosting succeeds. Stop the brainstorming visual companion with its recorded session directory. Do not delete the persisted mockups unless the user requests cleanup.

- [ ] **Step 5: Report the deployed outcome**

Return the deployed URL, describe the five featured and four compact projects, state that the build and tests passed, and identify user-supplied photos/GIFs as the next content update. Do not expose commands, local paths, credentials, or hosting internals in the user-facing handoff.
