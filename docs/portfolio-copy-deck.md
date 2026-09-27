# 포트폴리오 카피 덱

`app/_portfolio/content.ts`의 모든 노출 문구입니다. 여기서 고치고
`node scripts/copy-deck.mjs import`를 돌리면 사이트에 그대로 들어갑니다.

**규칙**

- `**EN**` / `**KO**` 줄의 `—` 뒤 텍스트만 고칠 것
- 백틱으로 감싼 키(`featured[0].title`)는 건드리지 말 것 — 되돌릴 자리를 잃습니다
- 한 줄로 쓸 것. 줄바꿈은 무시됩니다
- `{count}` 같은 중괄호 자리표시자는 그대로 둘 것
- 항목 하나를 통째로 빼려면 덱이 아니라 `content.ts`의 배열에서 지울 것

---

## 섹션 표시 · Sections

체크를 지우면 그 섹션이 페이지와 메뉴에서 사라집니다. 문구는 그대로 남습니다.

- [x] `work` — 주요 작업 · Selected Work
- [x] `projects` — 프로젝트 · Project Index
- [ ] `experience` — 경험 · Experience
- [x] `research` — 연구 · Research
- [ ] `about` — 소개 · How I Work

---

## 요소 표시 · Elements

섹션보다 작은 덩어리입니다. 체크를 지우면 그 덩어리만 사라집니다.

- [x] `heroEyebrow` — 히어로 직함 줄 · Role line
- [ ] `heroChips` — 히어로 영역 칩 · Capability chips
- [ ] `heroActions` — 히어로 버튼 · Hero buttons
- [x] `heroScrollHint` — 스크롤 안내 · Scroll hint
- [x] `caseTags` — 케이스 태그 · Case tags
- [x] `caseMetrics` — 케이스 지표 밴드 · Case metrics
- [x] `lifecycle` — 센서 생애주기 띠 · Lifecycle strip
- [ ] `principles` — 원칙 세 줄 · Principles
- [x] `publications` — 논문 목록 · Publications list
- [x] `skills` — 기술 그리드 · Skills grid

---

## 히어로 지표 · Hero metrics

히어로에 띄울 지표입니다. 체크한 케이스의 첫 지표가 체크한 순서대로 나옵니다.

- [ ] `sensor-integration` — 동시 전담 플랫폼 · 3
- [ ] `lidar-stability` — Yaw 표준편차 · 0.378° → 0.067°
- [ ] `amr-calibration` — 정렬 기준 · 측정 가능한 residual
- [ ] `rgbd-pipeline` — CPU 절감 · 26%
- [ ] `camera-iqc-uncertainty` — 판정 불일치 · 52

---

## 프로필 · Profile

### `profile.role`

- **EN** — Robotics Sensor Engineer
- **KO** — 로보틱스 센서 엔지니어

### `profile.headline`

- **EN** — RIGHT PLACE. RIGHT TIME. TRUSTED DATA.
- **KO** — 정확한 공간. 정확한 시간. 신뢰할 수 있는 데이터.

### `profile.introduction`

- **EN** — I own robot sensors end to end: bring-up, calibration, factory inspection, field failures. I have been the robot sensor engineer on three commercial robot platforms.
- **KO** — 로봇에 센서를 올리고 끝까지 책임지는 엔지니어 입니다. Bring-up부터 캘리브레이션, 공장 검사, 현장 장애 대응까지 합니다. 상용 로봇 세 종의 센서를 맡은 경험이 있습니다.

## 헤드라인 · Headline

### `site.headline.line1`

- **EN** — BRING-UP
- **KO** — 센서의

### `site.headline.line2`

- **EN** — TO
- **KO** — 시작부터

### `site.headline.line3`

- **EN** — DEPLOY
- **KO** — 끝까지.

## 사이트 공통 · Site chrome

### `site.functions[0]`

- **EN** — Robotics SW
- **KO** — 로보틱스 SW

### `site.functions[1]`

- **EN** — Mechanical
- **KO** — 기구

### `site.functions[2]`

- **EN** — Factory
- **KO** — 공장

### `site.functions[3]`

- **EN** — Field
- **KO** — 필드

### `site.actions.work`

- **EN** — Explore selected work
- **KO** — 주요 작업 보기

### `site.actions.email`

- **EN** — Email me
- **KO** — 이메일 보내기

### `site.work.heading`

- **EN** — Selected Work
- **KO** — 주요 작업

### `site.work.description`

- **EN** — {count} cases where sensor problems became measurable engineering improvements.
- **KO** — 센서 문제를 측정하고 원인을 찾아 실제 개선으로 연결한 {count}가지 사례입니다.

### `site.projects.heading`

- **EN** — Project Index
- **KO** — 프로젝트

### `site.projects.description`

- **EN** — Platform experience and research that support the featured engineering work.
- **KO** — 주요 엔지니어링 작업을 뒷받침하는 플랫폼 경험과 연구입니다.

### `site.experience.heading`

- **EN** — Experience
- **KO** — 경험

### `site.experience.description`

- **EN** — Sensor systems carried from first integration through production validation and field reliability.
- **KO** — 센서 통합부터 생산 검증과 필드 신뢰성까지 이어진 경험입니다.

### `site.research.heading`

- **EN** — Research
- **KO** — 연구

### `site.research.description`

- **EN** — Research in geometry and tracking that shaped how I approach sensor problems.
- **KO** — 센서 문제를 바라보는 기반이 된 기하와 추적 연구입니다.

### `site.about.heading`

- **EN** — How I Work
- **KO** — 일하는 방식

### `site.about.description`

- **EN** — I make sensor behavior measurable, trace issues to their physical cause, and turn fixes into repeatable processes.
- **KO** — 센서 동작을 측정 가능한 형태로 만들고 물리적 원인을 찾아 반복 가능한 프로세스로 정리합니다.

### `site.principles[0].text`

- **EN** — Start with measurable evidence
- **KO** — 측정 가능한 근거에서 시작

### `site.principles[1].text`

- **EN** — Match the model to the physics
- **KO** — 물리 현상에 맞는 모델 선택

### `site.principles[2].text`

- **EN** — Turn the fix into a repeatable process
- **KO** — 해결책을 반복 가능한 프로세스로 완성

### `site.publicationsHeading`

- **EN** — Selected writing
- **KO** — 주요 논문

### `site.contact.eyebrow`

- **EN** — Open to the next sensor challenge
- **KO** — 다음 센서 문제를 해결할 기회를 찾고 있습니다

### `site.contact.headline`

- **EN** — Let’s make sensor data trustworthy.
- **KO** — 신뢰할 수 있는 센서 데이터를 만듭니다.

### `site.contact.backToTop`

- **EN** — Back to top ↑
- **KO** — 맨 위로 ↑

### `site.ui.readOutcome`

- **EN** — Read the outcome
- **KO** — 결과 보기

### `site.ui.mediaUnavailable`

- **EN** — Evidence unavailable
- **KO** — 증거 자료를 불러올 수 없습니다

### `site.ui.mediaUnavailableHint`

- **EN** — The written finding remains available below.
- **KO** — 아래의 분석 결과는 계속 확인할 수 있습니다.

### `site.ui.play`

- **EN** — Play
- **KO** — 재생

### `site.ui.pause`

- **EN** — Pause
- **KO** — 일시정지

### `navigation.work`

- **EN** — Selected Work
- **KO** — 주요 작업

### `navigation.projects`

- **EN** — Project Index
- **KO** — 프로젝트

### `navigation.experience`

- **EN** — Experience
- **KO** — 경험

### `navigation.research`

- **EN** — Research
- **KO** — 연구

### `navigation.about`

- **EN** — About
- **KO** — 소개

## 주요 작업 01 · Selected work 1

### `featured[0].eyebrow`

- **EN** — 01 · Sensor Integration
- **KO** — 01 · 센서 통합

### `featured[0].title`

- **EN** — Three Robot Platforms, One Sensor Lifecycle
- **KO** — 세 개의 로봇 플랫폼, 하나의 센서 생애주기

### `featured[0].summary`

- **EN** — Serving robot, industrial AMR, and humanoid. Over 17 months of overlapping development, I carried the sensor stack across all three platforms from bring-up to field operation.
- **KO** — 서빙로봇, 산업용 AMR, 휴머노이드. 17개월간 개발 일정이 겹치는 환경에서 세 플랫폼의 센서 스택을 bring-up부터 현장 운용까지 담당했습니다.

### `featured[0].metrics[0].label`

- **EN** — Platforms owned in parallel
- **KO** — 동시 전담 플랫폼

### `featured[0].metrics[0].value`

- **EN** — 3
- **KO** — 3

### `featured[0].metrics[0].context`

- **EN** — Serving robot, industrial AMR, humanoid
- **KO** — 서빙로봇, 산업용 AMR, 휴머노이드

### `featured[0].metrics[1].label`

- **EN** — Sensor ownership period
- **KO** — 센서 전담 기간

### `featured[0].metrics[1].value`

- **EN** — 17 months
- **KO** — 17개월

### `featured[0].metrics[1].context`

- **EN** — Across three concurrent platform programs
- **KO** — 세 플랫폼 개발 일정이 겹친 기간

### `featured[0].steps[0].label`

- **EN** — Problem
- **KO** — 문제

### `featured[0].steps[0].title`

- **EN** — Three platforms, overlapping sensor work
- **KO** — 세 플랫폼에서 동시에 진행된 센서 작업

### `featured[0].steps[0].body`

- **EN** — Each robot required a complete sensing stack: sensor selection, mounting, calibration, integration, and field support. With the schedules overlapping, the work needed a consistent approach that could transfer across platforms.
- **KO** — 세 로봇 모두 센서 선정, 장착, 캘리브레이션, 통합, 필드 대응까지 완전한 센서 스택이 필요했습니다. 일정이 겹치는 만큼 플랫폼 간에 재사용할 수 있는 일관된 접근이 필요했습니다.

### `featured[0].steps[0].media.alt`

- **EN** — Three platform schedules drawn on one time axis, overlapping in the middle
- **KO** — 하나의 시간축에 그린 세 플랫폼 일정으로, 가운데 구간이 겹칩니다

### `featured[0].steps[0].media.caption`

- **EN** — Development schedules overlapped across all three platforms.
- **KO** — 세 플랫폼의 개발 일정이 서로 겹쳐 진행됐습니다.

### `featured[0].steps[1].label`

- **EN** — Decision
- **KO** — 판단

### `featured[0].steps[1].title`

- **EN** — One lifecycle across three robots
- **KO** — 세 로봇에 공통으로 적용한 하나의 생애주기

### `featured[0].steps[1].body`

- **EN** — I used the same five stages across all three platforms: bring-up, URDF and TF, calibration, production validation, and field reliability. Reusing the same lifecycle made each stage easier to repeat on the next robot.
- **KO** — 세 플랫폼 모두에 같은 다섯 단계를 적용했습니다. Bring-up, URDF·TF, 캘리브레이션, 생산 검증, 필드 신뢰성 순입니다. 같은 생애주기를 반복해 적용하면서 다음 플랫폼에서도 각 단계를 더 빠르고 일관되게 진행할 수 있었습니다.

### `featured[0].steps[1].media.alt`

- **EN** — One shared lifecycle applied across the three platforms
- **KO** — 세 플랫폼에 공통으로 적용한 하나의 생애주기

### `featured[0].steps[1].media.caption`

- **EN** — Five stages, applied three times.
- **KO** — 다섯 단계를 세 번 적용했습니다.

### `featured[0].steps[2].label`

- **EN** — Result
- **KO** — 결과

### `featured[0].steps[2].title`

- **EN** — All three reached shipment
- **KO** — 세 플랫폼 모두 출하 단계까지 연결

### `featured[0].steps[2].body`

- **EN** — RGB-D, LiDAR, and RGB sensing were integrated on each robot and carried through production validation into field operation. The work covered URDF and TF,  point-cloud filtering, Ethernet LiDAR addressing, and USB enumeration and power settings for camera stability.
- **KO** — 세 로봇에 RGB-D, LiDAR, RGB 센서를 통합하고 생산 검증부터 현장 운용까지 연결했습니다. URDF·TF, 포인트클라우드 필터, Ethernet LiDAR addressing, 카메라 안정성을 위한 USB enumeration과 전원 설정까지 포함했습니다.

### `featured[0].steps[2].media.alt`

- **EN** — Lifecycle stages closed on each of the three platforms
- **KO** — 세 플랫폼에서 각각 닫힌 생애주기 단계

### `featured[0].steps[2].media.caption`

- **EN** — The same five-stage lifecycle was completed on each platform.
- **KO** — 세 플랫폼 모두에서 같은 다섯 단계의 생애주기를 완료했습니다.

## 주요 작업 02 · Selected work 2

### `featured[1].eyebrow`

- **EN** — 02 · Measurement Stability
- **KO** — 02 · 측정 안정화

### `featured[1].title`

- **EN** — Reducing LiDAR Yaw Jitter by 82%
- **KO** — LiDAR Yaw 지터를 82% 줄이기

### `featured[1].summary`

- **EN** — Stabilized the scan output of a low-cost LiDAR. Diagnostic playback separated the cause into scan timing and angular indexing, and a fixed angular grid with a per-beam EKF brought it down to 0.067°.
- **KO** — 저가형 라이다의 스캔값 안정화를 진행했습니다. 진단 재생으로 원인을 스캔 타이밍과 각도 인덱싱으로 분리했고, 고정 각도 그리드와 빔별 EKF를 적용해 0.067°까지 줄였습니다.

### `featured[1].metrics[0].label`

- **EN** — Yaw standard deviation
- **KO** — Yaw 표준편차

### `featured[1].metrics[0].value`

- **EN** — 0.378° → 0.067°
- **KO** — 0.378° → 0.067°

### `featured[1].metrics[0].context`

- **EN** — Before to after filtering
- **KO** — 필터 적용 전후

### `featured[1].metrics[1].label`

- **EN** — Range noise
- **KO** — 거리 노이즈

### `featured[1].metrics[1].value`

- **EN** — 4.1 mm → 1.3 mm
- **KO** — 4.1 mm → 1.3 mm

### `featured[1].metrics[1].context`

- **EN** — Stationary target
- **KO** — 정지 표적 측정

### `featured[1].steps[0].label`

- **EN** — Problem
- **KO** — 문제

### `featured[1].steps[0].title`

- **EN** — The robot was still, but the scan was not
- **KO** — 로봇은 멈춰 있었지만 스캔은 흔들렸습니다

### `featured[1].steps[0].body`

- **EN** — With the robot stationary, the entire scan oscillated as a rigid shape. Individual range values still looked plausible, so the issue only became clear when the scan geometry was observed over time.
- **KO** — 로봇이 정지한 상태에서도 스캔 전체가 하나의 강체처럼 흔들렸습니다. 개별 거리값은 정상적으로 보여, 시간에 따른 스캔 기하를 관찰했을 때 문제를 명확히 확인할 수 있었습니다.

### `featured[1].steps[0].media.alt`

- **EN** — Every scan of a stationary wall corner drawn on top of one another, where the wall appears as a thick smeared band many pixels wide
- **KO** — 정지한 벽 코너의 모든 스캔을 겹쳐 그린 그림으로, 벽이 선이 아니라 두껍게 번진 띠로 나타납니다

### `featured[1].steps[0].media.caption`

- **EN** — Across 91 scans, a stationary wall occupied 3,273 measured positions.
- **KO** — 91회 스캔을 누적했을 때 정지한 벽이 3,273개의 위치에 걸쳐 측정됐습니다.

### `featured[1].steps[1].label`

- **EN** — Evidence
- **KO** — 근거

### `featured[1].steps[1].title`

- **EN** — Separate the range from the scan geometry
- **KO** — 거리값과 스캔 기하를 분리해 확인

### `featured[1].steps[1].body`

- **EN** — Diagnostic playback separated publish time, angle wrapping, and beam order. The apparent motion followed the assembled scan while individual ranges remained stable. Fixing the angular grid alone reduced yaw variation to 0.166°.
- **KO** — 진단 재생으로 publish time, angle wrapping, beam order를 분리해 확인했습니다. 흔들림은 개별 거리값보다 기존 벤더 코드가 고정된 스캔 인덱싱을 주지 않는 점에 있었습니다. 각도 그리드만 고정해도 yaw 변동이 0.166°까지 줄었습니다.

### `featured[1].steps[1].media.alt`

- **EN** — Diagnostic comparison of timestamps and wrapped scan angles
- **KO** — 타임스탬프와 래핑된 스캔 각도 진단 비교

### `featured[1].steps[1].media.caption`

- **EN** — A fixed angle grid lowered yaw variation to 0.166°.
- **KO** — 고정 각도 그리드에서 yaw 변동이 0.166°로 줄었습니다.

### `featured[1].steps[2].label`

- **EN** — Decision
- **KO** — 판단

### `featured[1].steps[2].title`

- **EN** — Stabilize the geometry before estimation
- **KO** — 추정 전에 스캔 기하부터 안정화

### `featured[1].steps[2].body`

- **EN** — With the scan indexing stabilized, each beam used an independent 1-D EKF to estimate its own range state.
- **KO** — 스캔 인덱싱을 안정화 한 후 각 빔에 독립적인 1차원 EKF를 적용해 거리 상태를 추정했습니다.

### `featured[1].steps[2].media.alt`

- **EN** — Fixed 400-bin angular grid feeding per-beam EKF filters
- **KO** — 400-bin 고정 각도 그리드와 빔별 EKF 구조

### `featured[1].steps[2].media.caption`

- **EN** — The estimator works on consistent angular observations.
- **KO** — 일관된 각도 관측값 위에서 추정기가 동작합니다.

### `featured[1].steps[3].label`

- **EN** — Implementation
- **KO** — 구현

### `featured[1].steps[3].title`

- **EN** — Reject outliers without suppressing real motion
- **KO** — 이상치는 제거하고 실제 움직임은 유지

### `featured[1].steps[3].body`

- **EN** — Each beam used a Mahalanobis gate based on its estimated uncertainty. Outliers were rejected, while repeated rejections reset the gate so that genuine scene changes such as a new obstacle could still be accepted.
- **KO** — 실 장애물 감지 환경을 대응하기 위해, 각 빔의 추정 불확도에 맞춘 Mahalanobis gate로 이상치를 제거했습니다. 연속적인 rejection이 발생하면 gate를 초기화해 새로 등장한 장애물과 같은 실제 환경 변화는 다시 받아들이도록 했습니다.

### `featured[1].steps[3].media.alt`

- **EN** — Side-by-side playback of a wall corner scanned before and after filtering, where the unfiltered scan jitters and the filtered scan holds still
- **KO** — 벽 코너를 필터링 전후로 스캔한 영상을 나란히 재생한 화면으로, 필터링 전 스캔은 흔들리고 필터링 후 스캔은 고정되어 있습니다

### `featured[1].steps[3].media.caption`

- **EN** — 91 scans, unfiltered left, filtered right.
- **KO** — 91회 스캔, 왼쪽 필터링 전, 오른쪽 필터링 후.

### `featured[1].steps[4].label`

- **EN** — Result
- **KO** — 결과

### `featured[1].steps[4].title`

- **EN** — 0.378° → 0.067°
- **KO** — 0.378° → 0.067°

### `featured[1].steps[4].body`

- **EN** — Yaw standard deviation fell from 0.378° to 0.067°. Range noise on a stationary target dropped from 4.1 mm to 1.3 mm. Across 91 accumulated scans, the wall footprint shrank from 3,273 pixels to 977.
- **KO** — Yaw 표준편차는 0.378°에서 0.067°로 줄었고, 정지 표적의 거리 노이즈는 4.1 mm에서 1.3 mm로 감소했습니다. 91회 스캔을 누적했을 때 벽의 측정 영역도 3,273픽셀에서 977픽셀로 줄었습니다.

### `featured[1].steps[4].media.alt`

- **EN** — Two accumulated scan images of the same wall corner, where the unfiltered side spreads into a wide colored band and the filtered side stays a narrow line
- **KO** — 같은 벽 코너를 누적한 두 스캔 이미지로, 필터링 전은 넓은 색 띠로 번지고 필터링 후는 얇은 선으로 유지됩니다

### `featured[1].steps[4].media.caption`

- **EN** — Across 91 scans: 3,273 pixels before filtering, 977 after.
- **KO** — 91회 스캔 누적 기준으로 필터링 전 3,273픽셀, 필터링 후 977픽셀입니다.

## 주요 작업 03 · Selected work 3

### `featured[2].eyebrow`

- **EN** — 03 · Production Calibration
- **KO** — 03 · 생산 캘리브레이션

### `featured[2].title`

- **EN** — LiDAR-to-LiDAR Calibration for Production
- **KO** — 생산 환경을 위한 LiDAR-to-LiDAR 캘리브레이션

### `featured[2].summary`

- **EN** — An unknown planar offset between two LiDARs caused their wall measurements to misalign. I estimated the transform from wall geometry and packaged the method as an on-robot production workflow.
- **KO** — 두 LiDAR 사이의 알 수 없는 평면 offset으로 벽 측정이 서로 어긋났습니다. 벽면 기하를 이용해 변환을 추정하고, 로봇에서 바로 실행할 수 있는 생산용 workflow로 정리했습니다.

### `featured[2].metrics[0].label`

- **EN** — Alignment criterion
- **KO** — 정렬 기준

### `featured[2].metrics[0].value`

- **EN** — Measurable residual
- **KO** — 측정 가능한 residual

### `featured[2].metrics[0].context`

- **EN** — Converted visual alignment into a numeric criterion
- **KO** — 시각적 정렬을 수치 기준으로 전환

### `featured[2].steps[0].label`

- **EN** — Problem
- **KO** — 문제

### `featured[2].steps[0].title`

- **EN** — Turn visual alignment into a repeatable process
- **KO** — 시각적 정렬을 반복 가능한 절차로 전환

### `featured[2].steps[0].body`

- **EN** — Two range sensors had an unknown planar offset, including yaw. Their scans did not align on the same wall, and the existing workflow relied on visual comparison. Production use required a repeatable numerical criterion.
- **KO** — 두 라이다 센서 간에는 yaw를 포함한 알 수 없는 평면 misalignment가 있었습니다. 같은 벽을 측정해도 스캔이 서로 어긋났고, 기존 절차는 시각적 비교에 의존했습니다. 생산 적용을 위해서는 반복 가능한 수치 기준이 필요했습니다.

### `featured[2].steps[0].media.alt`

- **EN** — Top-down view of two range sensors on one robot, where the reference beams end on the wall and the uncalibrated beams end short of it
- **KO** — 한 로봇의 두 라이다 센서를 위에서 본 그림으로, 기준 센서에 비해 미보정 센서의 빔이 틀어졌습니다.

### `featured[2].steps[0].media.caption`

- **EN** — The unknown is a planar transform: yaw and two translations.
- **KO** — 미지수는 평면 변환, 즉 yaw와 두 방향의 이동입니다.

### `featured[2].steps[1].label`

- **EN** — Evidence
- **KO** — 근거

### `featured[2].steps[1].title`

- **EN** — Use the wall as a geometric reference
- **KO** — 벽을 기하 기준으로 사용

### `featured[2].steps[1].body`

- **EN** — RANSAC extracted wall candidates from clutter, and PCA estimated each wall direction and normal. Point-to-wall distance along the normal converted the alignment error into a residual that could be minimized.
- **KO** — RANSAC으로 clutter에서 벽 후보를 추출하고 PCA로 각 벽의 방향과 normal을 계산했습니다. normal 방향의 point-to-wall distance를 사용해 정렬 오차를 최소화할 수 있는 residual로 수치화했습니다.

### `featured[2].steps[1].media.alt`

- **EN** — Wall points from a reference sensor, the same points measured off the wall before correction, and those points landing on the wall after a planar transform
- **KO** — 기준 센서가 관측한 벽 점, 보정 전 벽에서 벗어난 같은 점, 그리고 평면 변환 후 벽 위에 놓인 점들

### `featured[2].steps[1].media.caption`

- **EN** — Residuals measured perpendicular to the wall.
- **KO** — 벽에 수직으로 측정한 residual.

### `featured[2].steps[2].label`

- **EN** — Result
- **KO** — 결과

### `featured[2].steps[2].title`

- **EN** — A repeatable workflow across robots
- **KO** — 여러 로봇에 반복 적용 가능한 workflow

### `featured[2].steps[2].body`

- **EN** — Capture, estimate, validate, save: the full procedure runs on the robot where it is built. The measurable residual provides a consistent alignment criterion, and the same workflow converged on robots outside the original development set.
- **KO** — 수집, 추정, 검증, 저장을 하나의 on-robot workflow로 묶었습니다. 측정 가능한 residual을 일관된 정렬 기준으로 사용했고, 초기 개발 대상이 아니었던 로봇에서도 같은 절차가 수렴했습니다.

### `featured[2].steps[2].media.alt`

- **EN** — Wall scans from two range sensors on two robots, separated into two lines before calibration and overlapping as one line after
- **KO** — 두 로봇에서 두 거리 센서로 측정한 벽 스캔으로, 캘리브레이션 전에는 두 선으로 갈라지고 후에는 하나의 선으로 겹칩니다

### `featured[2].steps[2].media.caption`

- **EN** — Two robots, before and after the same procedure.
- **KO** — 같은 절차를 적용한 두 대의 로봇, 전후 비교입니다.

## 주요 작업 04 · Selected work 4

### `featured[3].eyebrow`

- **EN** — 04 · Runtime Performance
- **KO** — 04 · 런타임 성능

### `featured[3].title`

- **EN** — Reducing Depth Processing CPU by 26%
- **KO** — Depth 처리 CPU 사용량을 26% 줄이기

### `featured[3].summary`

- **EN** — Three depth-camera pipelines consumed a significant share of the robot CPU. Profiling identified point sorting inside PCL VoxelGrid as the main hotspot. A sort-free single-pass downsampling path reduced combined CPU usage by 26%.
- **KO** — 세 개의 depth camera pipeline이 로봇 CPU의 상당 부분을 사용하고 있었습니다. 프로파일링으로 PCL VoxelGrid 내부의 point sorting을 주요 병목으로 확인했고, 정렬 없는 single-pass downsampling으로 전체 CPU 사용량을 26% 줄였습니다.

### `featured[3].metrics[0].label`

- **EN** — CPU reclaimed
- **KO** — CPU 절감

### `featured[3].metrics[0].value`

- **EN** — 26%
- **KO** — 26%

### `featured[3].metrics[0].context`

- **EN** — Across three camera processes
- **KO** — 카메라 프로세스 3개 합산

### `featured[3].steps[0].label`

- **EN** — Problem
- **KO** — 문제

### `featured[3].steps[0].title`

- **EN** — Three cameras left limited CPU headroom
- **KO** — 세 카메라를 동시에 실행할때, CPU 최적화의 주요 대상이였습니다.

### `featured[3].steps[0].body`

- **EN** — Each depth camera ran its own downsampling stage. With all three cameras active alongside navigation, their combined processing cost reduced the CPU headroom available to the rest of the system.
- **KO** — 각 depth camera가 독립적으로 downsampling을 수행했습니다. 세 카메라와 navigation을 동시에 실행하면 누적 처리 비용 때문에 시스템의 CPU 여유가 크게 줄었습니다.

### `featured[3].steps[0].media.alt`

- **EN** — Three camera processes competing for the same CPU budget
- **KO** — 같은 CPU 예산을 두고 경쟁하는 세 개의 카메라 프로세스

### `featured[3].steps[0].media.caption`

- **EN** — The cost scales with the number of cameras, not with the scene.
- **KO** — 비용이 장면이 아니라 카메라 대수에 비례해 늘어납니다.

### `featured[3].steps[1].label`

- **EN** — Evidence
- **KO** — 근거

### `featured[3].steps[1].title`

- **EN** — Profiling identified sorting as the main hotspot
- **KO** — 프로파일링으로 정렬 연산을 주요 병목으로 확인

### `featured[3].steps[1].body`

- **EN** — Runtime profiling showed that much of the downsampling cost was concentrated inside PCL VoxelGrid. Points were sorted by voxel index before aggregation, making the reordering step the main optimization target.
- **KO** — Runtime profiling 결과 downsampling 비용의 상당 부분이 PCL VoxelGrid 내부에 집중되어 있었습니다. voxel별 aggregation 전에 수행되는 point sorting이 주요 최적화 대상임을 확인했습니다.

### `featured[3].steps[1].media.alt`

- **EN** — Diagram of the existing path: points in a voxel grid are copied out into a flat list, reordered by voxel index with arrows crossing each other, grouped, and only then averaged into one point per voxel
- **KO** — 기존 경로를 그린 도식입니다. voxel 그리드의 점들을 평평한 목록으로 꺼낸 뒤 화살표가 서로 엇갈리며 voxel 인덱스 순으로 재배열하고, 묶은 다음에야 voxel당 한 점으로 평균을 냅니다

### `featured[3].steps[1].media.caption`

- **EN** — The reordering step dominated the cost between input points and voxel centroids.
- **KO** — 입력 point에서 voxel centroid를 만드는 과정 중 재정렬 단계의 비용이 가장 컸습니다.

### `featured[3].steps[2].label`

- **EN** — Implementation
- **KO** — 구현

### `featured[3].steps[2].title`

- **EN** — Accumulate directly in one pass
- **KO** — 한 번의 순회로 voxel에 직접 누적

### `featured[3].steps[2].body`

- **EN** — Each point was mapped directly to its voxel and accumulated in a single pass. Each voxel kept only a running sum and point count, allowing the centroid to be computed without a separate sort.
- **KO** — 각 point를 해당 voxel에 바로 매핑해 한 번의 순회로 누적했습니다. voxel마다 좌표 합과 point count만 유지해 별도의 정렬 없이 centroid를 계산했습니다.

### `featured[3].steps[2].media.alt`

- **EN** — Diagram of the replacement: points stay in the voxel grid and are averaged in place inside each cell, giving the same one point per voxel with no list and no reordering
- **KO** — 교체한 경로를 그린 도식입니다. 점들은 voxel 그리드에 그대로 남아 각 칸 안에서 바로 평균이 되고, 목록도 재배열도 없이 voxel당 한 점이라는 같은 결과가 나옵니다

### `featured[3].steps[2].media.caption`

- **EN** — The input and output stay the same; the intermediate sort is removed.
- **KO** — 입력과 출력은 유지하고 중간 정렬 단계만 제거했습니다.

### `featured[3].steps[3].label`

- **EN** — Result
- **KO** — 결과

### `featured[3].steps[3].title`

- **EN** — 26% lower CPU usage across three cameras
- **KO** — 세 카메라 합산 CPU 사용량 26% 감소

### `featured[3].steps[3].body`

- **EN** — Measured on the robot with all three camera processes running, the new path reduced their combined CPU usage to 74% of the previous implementation.
- **KO** — 실제 로봇에서 세 카메라 프로세스를 모두 실행한 조건에서 합산 CPU 사용량이 기존 구현의 74% 수준으로 감소했습니다.

### `featured[3].steps[3].media.alt`

- **EN** — Bar chart of the three camera processes' combined CPU, normalised: the PCL VoxelGrid path at 100% and the sort-free pass at 74%
- **KO** — 세 카메라 프로세스 합산 CPU를 정규화해 그린 막대그래프입니다. PCL VoxelGrid 경로가 100%, 정렬 없는 경로가 74%입니다

### `featured[3].steps[3].media.caption`

- **EN** — Normalized to the previous implementation: 100% before, 74% after.
- **KO** — 기존 구현을 100%로 정규화했을 때 적용 후 74%로 감소했습니다.

## 주요 작업 05 · Selected work 5

### `featured[4].eyebrow`

- **EN** — 05 · Measurement System
- **KO** — 05 · 측정 시스템

### `featured[4].title`

- **EN** — Quantifying Variation in Camera Inspection
- **KO** — 카메라 검사 시스템의 산포를 정량화하기

### `featured[4].summary`

- **EN** — Inspection results varied across measurement conditions: 52 units received conflicting decisions, and 32 of 116 retested units changed from fail to pass. I measured the inspection system itself and found that re-seating increased position σ from 0.15 px to 1.8 px.
- **KO** — 측정 조건에 따라 검사 결과의 변동이 관찰됐습니다. 52대에서 판정이 엇갈렸고, 116대 재검에서는 32대가 fail에서 pass로 변경됐습니다. 검사 시스템 자체의 산포를 측정한 결과, 재안착만으로 위치 σ가 0.15 px에서 1.8 px까지 증가했습니다.

### `featured[4].metrics[0].label`

- **EN** — Inconsistent decisions
- **KO** — 판정 불일치

### `featured[4].metrics[0].value`

- **EN** — 52
- **KO** — 52

### `featured[4].metrics[0].context`

- **EN** — Observed across two inspection sites
- **KO** — 두 검사 환경에서 관찰

### `featured[4].metrics[1].label`

- **EN** — Position spread on remount
- **KO** — 재안착 위치 산포

### `featured[4].metrics[1].value`

- **EN** — 0.15 → 1.8 px
- **KO** — 0.15 → 1.8 px

### `featured[4].metrics[1].context`

- **EN** — Twelve times the baseline
- **KO** — 기준선의 12배

### `featured[4].steps[0].label`

- **EN** — Problem
- **KO** — 문제

### `featured[4].steps[0].title`

- **EN** — The same hardware did not always receive the same result
- **KO** — 같은 하드웨어에서도 검사 결과가 달라졌습니다

### `featured[4].steps[0].body`

- **EN** — Inspection results differed for 52 units, and 32 of 116 retested units changed from fail to pass. This variation motivated a measurement-system study before changing the product or acceptance criteria.
- **KO** — 52대에서 검사 결과가 서로 달랐고, 116대 재검에서는 32대가 fail에서 pass로 변경됐습니다. 제품이나 판정 기준을 바꾸기 전에 측정 시스템이 만드는 변동부터 정량화했습니다.

### `featured[4].steps[0].media.alt`

- **EN** — Different inspection outcomes observed for the same camera units across two measurement settings
- **KO** — 동일한 카메라가 두 측정 환경에서 서로 다른 검사 결과를 보이는 모습

### `featured[4].steps[0].media.caption`

- **EN** — Observed evidence: 52 inconsistent decisions and 32 changes among 116 retests.
- **KO** — 관측 근거: 52건의 판정 불일치와 116대 재검 중 32대의 판정 변경.

### `featured[4].steps[1].label`

- **EN** — Decision
- **KO** — 판단

### `featured[4].steps[1].title`

- **EN** — Hold the part constant and measure the system
- **KO** — 부품은 고정하고 측정 시스템의 산포를 확인

### `featured[4].steps[1].body`

- **EN** — A fixed sensor served as the reference while the inspection conditions were varied and repeated. With unit-to-unit variation removed, the remaining spread could be attributed to the measurement process: software, seating, and environment.
- **KO** — 동일한 센서를 기준물로 고정하고 검사 조건만 바꾸며 반복 측정했습니다. 센서 개체 차이를 제거한 상태에서 남는 산포를 software, seating, environment 등 측정 프로세스의 영향으로 분리했습니다.

### `featured[4].steps[1].media.alt`

- **EN** — Measurement-system variation separated into software, seating, and environment while one sensor is held as the reference
- **KO** — 하나의 센서를 기준물로 고정한 상태에서 측정 시스템의 산포를 software, seating, environment로 나눈 도식

### `featured[4].steps[1].media.caption`

- **EN** — With the sensor held constant, the remaining spread comes from the measurement setup.
- **KO** — 센서를 고정하면 남는 산포는 측정 환경의 영향을 보여줍니다.

### `featured[4].steps[2].label`

- **EN** — Evidence
- **KO** — 근거

### `featured[4].steps[2].title`

- **EN** — Four conditions, thirty repeats each
- **KO** — 네 가지 조건을 각각 30회 반복

### `featured[4].steps[2].body`

- **EN** — Five sensors were tested under four conditions, with thirty measurements per condition. Recapture without remounting set the baseline; the other conditions isolated re-seating, brightness, and light colour. Each run produced seven geometric metrics.
- **KO** — 센서 5대를 네 가지 조건에서 각각 30회 측정했습니다. 재안착 없이 다시 촬영한 조건을 baseline으로 두고, 재안착, 밝기, 조명색의 영향을 각각 분리했습니다. 각 측정에서는 7개의 기하 지표를 추출했습니다.

### `featured[4].steps[2].media.alt`

- **EN** — The four measurement conditions listed in order, recapture, remount, brightness and light colour, with the run size beneath them
- **KO** — 네 가지 측정 조건을 순서대로 나열한 목록입니다. 재캡처, 재안착, 밝기, 조명색 순이고 아래에 전체 측정 횟수가 있습니다

### `featured[4].steps[2].media.caption`

- **EN** — 600 measurements, changing one thing at a time.
- **KO** — 한 번에 하나씩만 바꿔 600회 측정했습니다.

### `featured[4].steps[3].label`

- **EN** — Result
- **KO** — 결과

### `featured[4].steps[3].title`

- **EN** — Re-seating was the dominant source of positional variation
- **KO** — 재안착이 위치 산포의 주요 원인이었습니다

### `featured[4].steps[3].body`

- **EN** — Baseline position σ remained at 0.15 px. Re-seating increased it to 1.8 px, twelve times the baseline, while brightness stayed near baseline. Light colour produced a different failure mode in which detection itself became unstable. These findings informed changes to fixture seating and the inspection procedure.
- **KO** — Baseline 위치 σ는 0.15 px였고, 재안착 조건에서는 1.8 px로 기준의 12배까지 증가했습니다. 밝기 변화는 baseline 수준이었고, 조명색 변화에서는 산포 증가와 다른 형태로 검출 자체가 불안정해졌습니다. 이 결과를 바탕으로 지그 안착 방식과 검사 절차를 개선했습니다.

### `featured[4].steps[3].media.alt`

- **EN** — Bar chart of position sigma by condition: recapture and brightness near baseline, remount twelve times higher, and light colour outside the normal scale
- **KO** — 조건별 위치 σ 막대그래프로, 재캡처와 밝기는 baseline에 가깝고 재안착은 12배 높으며 조명색은 일반 범위를 벗어납니다

### `featured[4].steps[3].media.caption`

- **EN** — 0.15 px at baseline versus 1.8 px after re-seating; light colour produced a separate detection failure mode.
- **KO** — Baseline 0.15 px 대비 재안착 시 1.8 px였고, 조명색에서는 별도의 detection failure mode가 나타났습니다.

## 프로젝트 · Project index

### `projects[0].title`

- **EN** — Camera Calibration from Pedestrians
- **KO** — 보행자 기반 카메라 캘리브레이션

### `projects[0].summary`

- **EN** — Calibrated CCTV cameras without a checkerboard by representing pedestrians as vertical line segments. Accuracy improved by 82% over the ICPR 2021 baseline.
- **KO** — Checkerboard 없이 보행자를 수직 선분으로 표현해 CCTV 카메라를 캘리브레이션했습니다. ICPR 2021 baseline 대비 정확도를 82% 향상했습니다.

### `projects[0].outcome`

- **EN** — RANSAC and MSAC rejected outliers caused by partial bodies, overlapping pedestrians, and reflections. Only pedestrians with reliable endpoints contributed to calibration.
- **KO** — RANSAC과 MSAC으로 신체 일부 누락, 사람 간 겹침, 반사 등에서 발생한 이상치를 제거했습니다. 양 끝점이 안정적으로 검출된 보행자만 캘리브레이션에 사용했습니다.

### `projects[0].media[0].alt`

- **EN** — Pipeline diagram running from pose estimation and line segment extraction into sampling, parameter estimation, triangulation, and evaluation
- **KO** — 자세 추정과 선분 추출에서 샘플링, 파라미터 추정, 삼각측량, 평가로 이어지는 파이프라인 다이어그램

### `projects[0].media[0].caption`

- **EN** — Pedestrians become vertical line segments, then a sampling loop estimates the camera parameters.
- **KO** — 보행자를 수직 선분으로 변환한 뒤 샘플링 반복으로 카메라 파라미터를 추정합니다.

### `projects[0].media[1].alt`

- **EN** — Two frames of the same street, where the first is covered in stray outlier curves and the second keeps one clean segment per pedestrian
- **KO** — 같은 거리의 두 장면으로, 첫 번째는 이상치 곡선으로 덮여 있고 두 번째는 보행자마다 하나의 선분만 남아 있습니다

### `projects[0].media[1].caption`

- **EN** — Outlier rejection leaves one usable segment per pedestrian.
- **KO** — 이상치를 걸러내면 보행자마다 쓸 수 있는 선분 하나가 남습니다.

### `projects[1].title`

- **EN** — Multi-Object Tracking with a 2D LiDAR
- **KO** — 2D LiDAR 기반 다중 객체 추적

### `projects[1].summary`

- **EN** — Tracked multiple moving objects from 2D range scans without camera appearance features. DBSCAN formed observations, an EKF estimated motion state, and the Hungarian algorithm associated tracks across frames.
- **KO** — 카메라 appearance 정보 없이 2D 거리 스캔만으로 여러 이동 객체를 추적했습니다. DBSCAN으로 관측을 만들고, EKF로 motion state를 추정하며, Hungarian algorithm으로 프레임 간 track을 연결했습니다.

### `projects[1].outcome`

- **EN** — With no colour, texture, or appearance descriptor, object identity had to be maintained from spatial position and motion alone.
- **KO** — 색상, 질감, appearance descriptor가 없는 환경에서 위치와 움직임만으로 객체의 identity를 유지했습니다.

### `projects[1].media[0].alt`

- **EN** — Driving footage beside a range-scan view where tracked objects keep a box and an identifier as the vehicle moves
- **KO** — 주행 영상 옆에 거리 스캔 화면이 있고, 차량이 움직이는 동안 추적된 객체가 박스와 식별자를 유지합니다

### `projects[1].media[0].caption`

- **EN** — Each track keeps its identifier from frame to frame as the vehicle moves.
- **KO** — 차량이 움직이는 동안 각 track이 프레임 간 식별자를 유지합니다.

## 경험 · Experience

### `experience[0].platform`

- **EN** — Compact Service Robot
- **KO** — 소형 서빙로봇

### `experience[0].role`

- **EN** — End-to-end sensor stack owner
- **KO** — 센서 스택 전 과정 담당

### `experience[0].summary`

- **EN** — Depth, ToF, RGB, and LiDAR from bring-up through production validation and field reliability.
- **KO** — Depth, ToF, RGB, LiDAR를 bring-up부터 생산 검증과 필드 신뢰성까지 담당했습니다.

### `experience[1].platform`

- **EN** — Industrial AMR
- **KO** — 산업용 AMR

### `experience[1].role`

- **EN** — Multi-sensor integration and production calibration
- **KO** — 다중 센서 통합 및 생산 캘리브레이션

### `experience[1].summary`

- **EN** — Carried the sensor stack from prototype integration through production hardware updates and automated geometric calibration.
- **KO** — 센서 스택을 prototype 통합부터 생산용 하드웨어 업데이트까지 연결하고 기하 캘리브레이션을 자동화했습니다.

### `experience[2].platform`

- **EN** — Humanoid Platform
- **KO** — 휴머노이드 플랫폼

### `experience[2].role`

- **EN** — Sensor-system bring-up and calibration
- **KO** — 센서 시스템 bring-up 및 캘리브레이션

### `experience[2].summary`

- **EN** — Built and stabilized a shipment-ready range and depth sensing configuration under a compressed development schedule.
- **KO** — 촉박한 개발 일정 안에서 출하에 필요한 거리·깊이 센서 구성을 구축하고 안정화했습니다.

## 연구 · Research

### `research[0].title`

- **EN** — Accurate and Robust Surveillance Camera Calibration using Pedestrians
- **KO** — 보행자를 이용한 정확하고 강건한 감시 카메라 캘리브레이션

### `research[0].summary`

- **EN** — Marker-free camera parameter estimation from pedestrian line segments perpendicular to the ground plane.
- **KO** — 지면에 수직인 보행자 선분을 이용해 marker 없이 카메라 파라미터를 추정했습니다.

### `research[0].result`

- **EN** — Improved accuracy by 82% over the ICPR 2021 baseline under real CCTV conditions.
- **KO** — 실제 CCTV 환경에서 ICPR 2021 baseline 대비 정확도를 82% 향상했습니다.

### `research[1].title`

- **EN** — LiDAR-based Multi-Object Tracking in Autonomous Driving
- **KO** — 자율주행 환경의 LiDAR 기반 다중 객체 추적

### `research[1].summary`

- **EN** — A range-only tracking pipeline combining spatial clustering, recursive state estimation, and global data association.
- **KO** — 공간 군집화, 재귀 상태 추정, 전역 data association을 결합한 거리 센서 기반 tracking pipeline입니다.

### `research[1].result`

- **EN** — Implemented DBSCAN observations, EKF tracks, and Hungarian assignment as an end-to-end MOT system.
- **KO** — DBSCAN 관측, EKF track, Hungarian assignment를 end-to-end MOT 시스템으로 구현했습니다.

## 논문 · Publications

### `publications[0].venue`

- **EN** — M.S. thesis, Seoul National University of Science and Technology, 2025
- **KO** — 석사학위논문, 서울과학기술대학교, 2025

### `publications[0].contribution`

- **EN** — Sole author
- **KO** — 단독 저자

### `publications[1].venue`

- **EN** — Journal of the Institute of Control, Robotics and Systems
- **KO** — 제어로봇시스템학회 논문지

### `publications[1].contribution`

- **EN** — First author
- **KO** — 제1저자

### `publications[2].venue`

- **EN** — Journal of the Robotics Society
- **KO** — 로봇학회 논문지

### `publications[2].contribution`

- **EN** — Co-author
- **KO** — 공동저자

### `publications[2].recognition`

- **EN** — Best Paper Award
- **KO** — 우수논문상

## 기술 · Skills

### `skills[0].title`

- **EN** — Spatial Calibration
- **KO** — 공간 캘리브레이션

### `skills[1].title`

- **EN** — Sensor Interfaces
- **KO** — 센서 인터페이스

### `skills[2].title`

- **EN** — Sensor Quality
- **KO** — 센서 품질

### `skills[3].title`

- **EN** — Perception
- **KO** — 인지

### `skills[4].title`

- **EN** — Languages and Tools
- **KO** — 언어와 도구
