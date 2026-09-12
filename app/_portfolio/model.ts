export type Language = "en" | "ko";
export type LocalizedText = Record<Language, string>;
export type EvidenceKind = "diagram" | "chart" | "image" | "video";
export type EvidenceVisual =
  | "lidar"
  | "clock"
  | "trigger"
  | "calibration"
  | "uncertainty";

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
