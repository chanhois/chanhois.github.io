# Interactive Robotics Portfolio Design

Date: 2026-09-10
Status: Approved on 2026-09-10

## Purpose

Build a polished, bright, interactive portfolio for Chan-ho Seo, a Robotics Sensor Engineer. The site must help a recruiter or robotics engineer understand the value of the work without knowing the employer's products, internal project names, or ticket system.

The portfolio should present one coherent engineering practice: making robot perception trustworthy by aligning sensor data in space, aligning it in time, filtering it without hiding hazards, and validating it with quantitative evidence.

Primary positioning:

> I make robots perceive the world at the right place, at the right time, with evidence they can trust.

## Audience and Success Criteria

Primary audience:

- Robotics, perception, SLAM, sensor-platform, and autonomy hiring teams
- Engineers who can assess the technical depth of calibration, synchronization, filtering, and measurement analysis
- General technical recruiters who need clear problem, action, and outcome summaries

The first viewport must establish the candidate's domain and show measurable evidence. A reader should understand the candidate's role within 10 seconds and find a complete case study within two interactions or one continuous scroll.

Success means:

- Internal product knowledge is unnecessary to understand every project.
- Each featured case study distinguishes the candidate's contribution from the surrounding team effort.
- Quantitative claims are grounded in the supplied resume, project notes, and validation records.
- Photos, graphs, and motion demonstrate evidence rather than act as decoration.
- The site remains readable and navigable on desktop and mobile, with a keyboard and with reduced-motion preferences.

## Information Architecture

The site is a single-page portfolio with anchored sections and a compact sticky navigation.

1. **Hero**
   - Name and role
   - Primary positioning statement
   - Short supporting copy
   - Two proof metrics: LiDAR yaw variation reduction and verified hardware-trigger camera rate
   - Links to selected work and contact
2. **Selected Work**
   - Five full case studies using the Scroll Lab Story pattern
3. **Project Index**
   - Four compact projects for platform breadth and academic foundations
4. **Experience**
   - Responsibility across a compact service robot, an industrial AMR, and a humanoid platform
   - Framed as sensor lifecycle ownership rather than an internal task list
5. **Research and Publications**
   - Research contribution, authorship, publication state, and awards where verified
6. **About, Skills, and Contact**
   - Skills grouped into Spatial Calibration, Temporal Alignment, Sensor Quality, and Perception
   - Email and external profile links supplied by the user

The existing Korean/English toggle is retained. Language changes update all visible navigation, copy, captions, controls, and accessible labels without changing the current scroll position.

## Featured Case Studies

### 1. Stabilizing a Low-Cost LiDAR for Reliable Navigation

Public framing: a low-cost 2D LiDAR produced a rigid yaw-like oscillation even while the robot was stationary.

Story steps:

1. Symptom: distinguish spatial misalignment from temporal scan jitter.
2. Evidence: isolate publish-time stamping, angle-wrap synchronization, and sample-index redistribution.
3. Decision: preserve measured beam angles in a fixed 400-bin representation.
4. Solution: apply a per-beam EKF with Mahalanobis gating to residual noise while allowing newly appearing obstacles through immediately.
5. Result: yaw standard deviation 0.378 degrees to 0.166 degrees to 0.067 degrees; per-bin range noise 4.1 mm to 1.3 mm.

### 2. Rebuilding the Time Axis for Better SLAM

Public framing: device time, sensor acquisition time, and host receipt time were being treated as interchangeable, degrading transform alignment and preventing correct scan deskewing.

Story steps:

1. Measure approximately 13 ms of monotonic firmware-to-host drift over 12 hours, approximately 0.3 ppm.
2. Separate IMU sampling jitter, request-coupled odometry jitter, and LiDAR period jitter.
3. Convert device/source timestamps into a shared host time domain.
4. Propagate acquisition time, scan time, and per-beam time increment.
5. Use a deskewing filter to improve the temporal consistency of SLAM input.

No unverified SLAM accuracy percentage will be shown. The case study will describe the input-quality improvement and show a quantitative downstream result only when the user supplies a validated comparison.

### 3. Hardware-Triggered Time Synchronization for Camera and IMU

Public framing: replace operating-system arrival timestamps with a shared microsecond hardware clock tied to actual sensor events.

Story steps:

1. STM32 1 MHz master time, 30 Hz camera trigger, and IMU data-ready capture.
2. IMU SPI bring-up and hardware bench validation.
3. Loss-detectable COBS and CRC-16 transport implemented in C and Rust.
4. A measured 3.3 V to 1.8 V camera-trigger interface.
5. End-to-end camera slave-mode validation: 447 frames over 14.87 seconds, 30.00 Hz.
6. IMU-seeded point-cloud ICP tooling as the downstream validation path; synced-versus-unsynced recording results remain explicitly marked as pending until measured.

### 4. Automating Sensor Calibration for a New Industrial AMR

Public framing: assembly tolerance caused unit-specific LiDAR misalignment across a new industrial AMR fleet, silently degrading localization.

Story steps:

1. Extract wall features using sequential RANSAC and PCA.
2. Optimize a 3-DoF SE(2) transform with perpendicular point-to-wall residuals.
3. Use Huber loss and a prior for outliers and weakly observed conditions.
4. Port the calibrator into the robot runtime.
5. Apply it to seven production units, replacing manual alignment.
6. Explain observability and the non-parallel-wall requirement for a rear-sensor known-geometry jig without exposing internal fixtures.

### 5. Turning Camera Inspection Disagreement into a Measurement Problem

Public framing: the same tray camera could pass at one inspection site and fail at another. Fifty-two supplier-versus-factory decisions disagreed, and 32 of 116 retested units changed from fail to pass.

Story steps:

1. Reframe the issue from product variance to measurement-system uncertainty.
2. Design a six-stage nested experiment with fixed reference artifacts.
3. Decompose software, capture, mounting, operator, and environment variance with ANOVA.
4. Compute combined and expanded uncertainty, percent P/T, guard bands, and correlation-aware decisions.
5. Connect dominant variance sources to concrete actions: multi-frame median capture or fixture improvement.
6. Present the SOP, analysis tool, and Korean/English/Chinese browser app as deliverables.

## Project Index

Four smaller projects appear after the featured work:

- **Sensor Stack for a New Compact Service Robot:** depth, ToF, RGB, and 2D LiDAR integration from bring-up through calibration, factory tests, and field reliability.
- **Humanoid Sensor-System Bring-up:** 2D LiDAR, depth camera, and projected 3D LiDAR integration; URDF/TF; extrinsic calibration; and shipment-ready configuration under a short P0 schedule.
- **Camera Calibration from Pedestrians:** marker-free CCTV calibration using pedestrian line segments, RANSAC/MSAC, and an 82% accuracy improvement over the ICPR 2021 baseline.
- **Multi-Object Tracking with a 2D LiDAR:** DBSCAN clustering, Extended Kalman Filter state estimation, and Hungarian data association.

SplatForge, the job scraper, MuJoCo study notes, Workday Assistant, customer names, internal product names, Jira identifiers, robot serials, and internal repository identifiers are excluded from the public site.

## Visual System

Selected direction: **Signal Lab**, bright **Ice Mint** palette.

Color tokens:

- Paper: `#F4F7F1`
- Ink: `#101813`
- Primary accent: `#009B66`
- Secondary accent: `#5A67F2`
- Border: `#D9E1D9`
- Muted copy: `#5F6B63`

Typography uses Manrope Variable at weights 400 through 800 for statements and body copy. Metrics, timestamps, and measurement labels use IBM Plex Mono at weights 400 through 600. Font loading must not block access to content; system fallbacks should preserve the hierarchy.

The visual language uses thin measurement lines, circular signal fields, plotted points, progress marks, and compact numerical labels. It avoids generic robot illustrations, decorative circuit-board patterns, and heavy dashboard chrome.

## Interaction Design

### Hero

- A circular signal field responds slightly to pointer position.
- The response is decorative, bounded, and disabled for touch and reduced-motion users.
- Proof metrics are visible without scrolling and do not require animation to be understood.

### Scroll Lab Story

Each featured case study has a sticky media stage beside a sequence of narrative steps.

- Desktop: media remains sticky while Problem, Evidence, Decision, Implementation, and Result enter the active reading zone.
- The active step changes the displayed photo, graph, diagram, or video using a short crossfade.
- A visible case progress indicator supports both clicking and keyboard focus.
- Mobile: sticky behavior is removed. Each media item appears immediately before its corresponding explanation.
- The page uses natural document scrolling rather than scroll-jacking or forced snapping.

### Project Index and Navigation

- Project cards expose title, one-line outcome, domain tags, and a representative media thumbnail.
- Selecting a compact project expands an accessible inline detail panel or scrolls to the related content; it does not trap the reader in a modal-only flow.
- Sticky navigation shows the current top-level section and provides a clear language switch.

### Motion

- Section reveals and graphs animate once when they first enter view.
- Motion remains under roughly 400 ms and never hides content during its transition.
- `prefers-reduced-motion` removes parallax, animated counting, crossfade movement, and automatic media playback.

## Media System

The user will provide real project photos and GIFs. Media is part of the evidence model for each case-study step.

- Assets live under a predictable public media structure, grouped by case-study ID.
- Every asset has Korean and English captions, alt text, a media type, and an optional poster image.
- Images preserve their natural aspect ratio within a stable media stage to avoid layout shifts.
- GIFs are converted to WebM and MP4 for real play/pause controls, efficient delivery, and reduced-motion handling. The original GIF can remain as a source or compatibility fallback.
- Videos default to muted, inline playback. They do not autoplay when reduced motion is requested.
- Until an authentic asset is supplied, the site uses an honest labeled evidence panel, data visualization, or CSS diagram. It does not invent robot photographs.

Before publication, company media must be checked for customer names, product names, serial numbers, screens containing internal tools, documents in the background, and distinctive unreleased hardware. Approved cropping or blurring can be used when it does not misrepresent the evidence.

## Content and Data Flow

The site is rendered from a typed, static portfolio data model rather than duplicating content in components.

Top-level data includes:

- Personal identity and contact links
- Navigation and localization strings
- Featured case studies
- Compact projects
- Experience entries
- Research and publications
- Skill groups

Each case-study step contains a stable ID, bilingual label, bilingual title and body, media reference, caption, alt text, metric references, and optional technical tags. React components consume the model and render the selected language. No persistence, authentication, uploads, or external connectors are required.

Language preference may be kept in device-local storage. The initial render remains deterministic and accessible if storage is unavailable.

## Components

- `SiteNav`: anchored navigation, active-section state, language toggle
- `Hero`: positioning, proof metrics, decorative signal field
- `Metric`: label, value, unit, context, optional one-time animation
- `CaseStudy`: section wrapper and progress state
- `StickyMediaStage`: responsive image/video/diagram renderer
- `StoryStep`: accessible narrative step and media-state trigger
- `ProjectIndex`: compact project cards and inline detail
- `Experience`: public platform categories and responsibilities
- `Research`: verified research and publication entries
- `Skills`: four-domain capability model
- `ContactFooter`: email and supplied external links
- `MediaFallback`: informative replacement for missing or failed media

Components remain focused and exchange state through explicit props. Active case-step and language are the only meaningful client-side UI state.

## Error and Edge-Case Handling

- Missing or failed media renders the caption, media type, and an evidence-unavailable message in the same stable frame.
- Unsupported video format falls back through WebM, MP4, poster image, then the media fallback.
- A disabled JavaScript environment still receives the complete project copy, metrics, and static media in document order.
- Language strings must have a complete fallback to English if a Korean field is absent.
- Narrow screens, long translated headings, and high browser zoom must not overlap navigation or media controls.
- Case-step activation uses intersection thresholds with a deterministic nearest-step fallback at section boundaries.

## Accessibility

- Semantic landmarks and heading order define the page without visual styling.
- All actions are reachable and visible by keyboard.
- Language controls use explicit labels and pressed/selected state.
- Video controls are real buttons with accessible names.
- Graphs include a short textual conclusion and the underlying key values.
- Color never carries the only indication of active state or improvement.
- Text, borders used as state indicators, and controls meet appropriate WCAG contrast targets.
- Touch targets are at least 44 CSS pixels where the interface is interactive.

## Validation

Before completion:

- Run the production build and resolve compilation failures.
- Verify Korean/English switching for all visible and accessible strings.
- Verify every anchor, contact link, control, and case progress item with keyboard input.
- Verify desktop sticky behavior and the mobile linear fallback at representative breakpoints.
- Verify missing-image and unsupported-video fallbacks.
- Verify play, pause, poster, and reduced-motion behavior.
- Confirm all nine projects use only approved public names and contain no internal ticket, customer, serial, or repository identifiers.
- Confirm numerical claims against the source inventory and supplied artifacts.

No persistent backend, account system, analytics, contact form submission, or CMS is part of the first version.

## Delivery

The first deliverable is a complete responsive single-page portfolio with structured media slots. It can launch with verified existing media and informative evidence panels, then accept the user's additional photos and GIFs without changing the component structure. After the production build passes, the site will proceed through the standard hosting workflow unless the user asks to keep it local.
