export type Language = "en" | "ko";
export type LocalizedText = Record<Language, string>;
export type EvidenceKind = "diagram" | "chart" | "image" | "video";
export type EvidenceVisual =
  | "lidar"
  | "calibration"
  | "uncertainty"
  | "integration";

export interface MediaSpec {
  kind: EvidenceKind;
  visual?: EvidenceVisual;
  src?: string;
  mp4Src?: string;
  poster?: string;
  alt: LocalizedText;
  caption: LocalizedText;
}

export interface MetricSpec {
  label: LocalizedText;
  /** Localized because some values carry words ("under a week") and not only numbers. */
  value: LocalizedText;
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
  /** Recorded project media. A card without any falls back to its generated motif. */
  media?: MediaSpec[];
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
  id: "space" | "interfaces" | "quality" | "perception" | "tools";
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

export interface SectionCopy {
  heading: LocalizedText;
  description: LocalizedText;
}

/** Copy that used to sit inline in components. Everything a reader sees is here. */
export interface SiteCopy {
  headline: { line1: LocalizedText; line2: LocalizedText; line3: LocalizedText };
  /** Chips under the headline: the functions the work crosses. */
  functions: LocalizedText[];
  actions: { work: LocalizedText; email: LocalizedText };
  work: SectionCopy;
  projects: SectionCopy;
  experience: SectionCopy;
  research: SectionCopy;
  about: SectionCopy;
  /** The five lifecycle stages shown above the experience rows. */
  lifecycle: string[];
  principles: { number: string; label: string; text: LocalizedText }[];
  publicationsHeading: LocalizedText;
  contact: { eyebrow: LocalizedText; headline: LocalizedText; backToTop: LocalizedText };
  /** Labels on controls and fallbacks, short enough to be missed but still read. */
  ui: {
    readOutcome: LocalizedText;
    mediaUnavailable: LocalizedText;
    mediaUnavailableHint: LocalizedText;
    play: LocalizedText;
    pause: LocalizedText;
  };
}

export interface PortfolioContent {
  profile: ProfileContent;
  site: SiteCopy;
  navigation: Record<
    "work" | "projects" | "experience" | "research" | "about",
    LocalizedText
  >;
  featured: CaseStudy[];
  projects: CompactProject[];
  experience: ExperienceEntry[];
  research: ResearchEntry[];
  publications: PublicationEntry[];
  skills: SkillGroup[];
}
