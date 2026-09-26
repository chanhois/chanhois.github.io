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
- [x] `experience` — 경험 · Experience
- [x] `research` — 연구 · Research
- [x] `about` — 소개 · How I Work

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
- **KO** — 로봇에 센서를 올리고 끝까지 책임지는 엔지니어 입니다.. Bring-up부터 캘리브레이션, 공장 검사, 현장 장애 대응까지 합니다. 상용 로봇 세 종의 센서를 맡은 경험이 있습니다.

## 헤드라인 · Headline

### `site.headline.line1`

- **EN** — BRING-UP
- **KO** — 센서의

### `site.headline.line2`

- **EN** — to
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

- **EN** — {count} cases where a sensor problem became a measurable engineering decision.
- **KO** — 로봇 양산 과정에 참여하며 해결한 센서 관{count}가지 사례입니다.

### `site.projects.heading`

- **EN** — Project Index
- **KO** — 프로젝트

### `site.projects.description`

- **EN** — Platform breadth and research foundations behind the featured work.
- **KO** — 주요 작업을 뒷받침하는 플랫폼 경험과 연구 기반입니다.

### `site.experience.heading`

- **EN** — Experience
- **KO** — 경험

### `site.experience.description`

- **EN** — One sensor lifecycle, carried from the first integration to field reliability.
- **KO** — 센서 인터그레이션 부터 필드 신뢰성까지 하나의 센서 생애주기로 다뤄습니다.

### `site.research.heading`

- **EN** — Research
- **KO** — 연구

### `site.research.description`

- **EN** — Geometry and tracking research that shaped how I reason about sensor.
- **KO** — 센서를 해석하는 방식을 만든 기하와 추적 연구입니다.

### `site.about.heading`

- **EN** — How I Work
- **KO** — 일하는 방식

### `site.about.description`

- **EN** — I make sensor behavior observable, find the physical cause, and leave a process that another engineer can repeat.
- **KO** — 센서 동작을 관측 가능하게 만들고 물리적 원인을 찾은 뒤, 다른 엔지니어도 반복할 수 있는 프로세스를 남깁니다.

### `site.principles[0].text`

- **EN** — Start with observable evidence
- **KO** — 관측 가능한 근거에서 시작

### `site.principles[1].text`

- **EN** — Match the model to the physics
- **KO** — 물리 현상에 맞는 모델 선택

### `site.principles[2].text`

- **EN** — Turn the fix into a repeatable tool
- **KO** — 반복 가능한 도구로 완성

### `site.publicationsHeading`

- **EN** — Selected writing
- **KO** — 주요 논문

### `site.contact.eyebrow`

- **EN** — Open to the next hard sensor problem
- **KO** — 다음 어려운 센서 문제를 기다립니다

### `site.contact.headline`

- **EN** — Let’s make the signal trustworthy.
- **KO** — 신뢰할 수 있는 신호를 함께 만듭시다.

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

- **EN** — Three Robots, One Sensor Engineer
- **KO** — 로봇 세 대, 한명의 센서 엔지니어

### `featured[0].summary`

- **EN** — Serving robot, industrial AMR, humanoid. Overlapping schedules, 17 months, sole sensor owner on all three.
- **KO** — 서빙로봇, 산업용 AMR, 휴머노이드. 시작부터 끝까지 담당한 로봇들.

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

- **EN** — As the only sensor engineer
- **KO** — 단독 담당 기간

### `featured[0].metrics[1].value`

- **EN** — 17 months
- **KO** — 17개월

### `featured[0].metrics[1].context`

- **EN** — No second sensor engineer on the programs
- **KO** — 해당 과제에 다른 센서 엔지니어 없음

### `featured[0].steps[0].label`

- **EN** — Problem
- **KO** — 문제

### `featured[0].steps[0].title`

- **EN** — Three programs, one of me
- **KO** — 세 개의 과제, 한 명

### `featured[0].steps[0].body`

- **EN** — Three robots each needed a full sensing stack: parts chosen, mounted, calibrated, kept alive in the field. The schedules overlapped. There was no second sensor engineer.
- **KO** — 로봇 세 대가 저마다 완전한 센서 스택을 필요로 했습니다. 부품을 고르고 붙이고 캘리브레이션하고 현장에서 유지하는 일까지 있었습니다. 일정은 겹쳤고 나눠 맡을 다른 센서 엔지니어는 없었습니다.

### `featured[0].steps[0].media.alt`

- **EN** — Three platform schedules drawn on one time axis, overlapping in the middle
- **KO** — 하나의 시간축에 그린 세 플랫폼 일정으로, 가운데 구간이 겹칩니다

### `featured[0].steps[0].media.caption`

- **EN** — The three programs run across one another.
- **KO** — 세 과제가 서로 겹쳐 진행됩니다.

### `featured[0].steps[1].label`

- **EN** — Decision
- **KO** — 판단

### `featured[0].steps[1].title`

- **EN** — One lifecycle, three robots
- **KO** — 하나의 생애주기, 세 대의 로봇

### `featured[0].steps[1].body`

- **EN** — I ran the same five stages on all three: bring-up, URDF and TF, calibration, factory validation, field reliability. Closing a stage once made closing it on the next robot cheap.
- **KO** — 세 대 모두에 같은 다섯 단계를 돌렸습니다. Bring-up, URDF·TF, 캘리브레이션, 공장 검증, 필드 신뢰성 순입니다. 한 로봇에서 한 단계를 끝내 놓으면 다음 로봇에서는 훨씬 빨리 끝났습니다.

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

- **EN** — All three shipped
- **KO** — 세 대 모두 출하됐습니다

### `featured[0].steps[2].body`

- **EN** — RGB-D, LiDAR and RGB sensing integrated on each robot and carried through factory test into field operation. Integration meant the whole path: URDF and TF, runtime calibration, point-cloud filters, static addressing for the Ethernet LiDARs, and USB enumeration and power settings for the cameras that kept dropping out.
- **KO** — 세 로봇에 RGB-D, LiDAR, RGB 센서를 통합해 공장 검사와 현장 운용까지 연결했습니다. 통합이라고 하면 이 경로 전부를 말합니다. URDF·TF, runtime calibration, 포인트클라우드 필터, Ethernet LiDAR의 static addressing, 자꾸 끊기던 카메라의 USB enumeration과 전원 설정이 여기 들어갑니다.

### `featured[0].steps[2].media.alt`

- **EN** — Lifecycle stages closed on each of the three platforms
- **KO** — 세 플랫폼에서 각각 닫힌 생애주기 단계

### `featured[0].steps[2].media.caption`

- **EN** — Same five stages closed on each of the three.
- **KO** — 세 대 각각에서 같은 다섯 단계를 닫았습니다.

## 주요 작업 02 · Selected work 2

### `featured[1].eyebrow`

- **EN** — 02 · Measurement Stability
- **KO** — 02 · 측정 안정화

### `featured[1].title`

- **EN** — Yaw Jitter Down 82% on a Low-Cost LiDAR
- **KO** — 저가형 LiDAR의 Yaw 지터를 82% 줄이기

### `featured[1].summary`

- **EN** — Stationary scans swung 0.378°. The cause was in the timestamps and the angle indexing, not the sensor. A fixed angular grid plus a per-beam EKF brought it to 0.067°.
- **KO** — 정지 상태 스캔이 0.378° 흔들렸습니다. 원인은 센서가 아니라 타임스탬프와 각도 인덱싱이었습니다. 고정 각도 그리드와 빔별 EKF로 0.067°까지 내렸습니다.

### `featured[1].metrics[0].label`

- **EN** — Yaw standard deviation
- **KO** — Yaw 표준편차

### `featured[1].metrics[0].value`

- **EN** — 0.378° → 0.067°
- **KO** — 0.378° → 0.067°

### `featured[1].metrics[0].context`

- **EN** — Raw to filtered
- **KO** — 원본 대비 필터링

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

- **EN** — The room moved while the robot stood still
- **KO** — 로봇은 멈췄는데 공간이 흔들렸습니다

### `featured[1].steps[0].body`

- **EN** — The robot was parked and the whole scan still rocked as one rigid shape. Each range reading looked plausible on its own, so nothing flagged a fault. Navigation saw the room moving.
- **KO** — 로봇은 정지해 있는데 스캔 전체가 하나의 강체처럼 흔들렸습니다. 개별 거리값은 그럴듯해서 어디서도 결함으로 잡히지 않았습니다. 내비게이션은 공간이 움직인다고 인식했습니다.

### `featured[1].steps[0].media.alt`

- **EN** — Every scan of a stationary wall corner drawn on top of one another, where the wall appears as a thick smeared band many pixels wide
- **KO** — 정지한 벽 코너의 모든 스캔을 겹쳐 그린 그림으로, 벽이 선이 아니라 두껍게 번진 띠로 나타납니다

### `featured[1].steps[0].media.caption`

- **EN** — A wall that never moved, measured at 3,273 different positions across 91 scans.
- **KO** — 움직인 적 없는 벽이 91회 스캔에서 3,273개의 서로 다른 위치로 측정됐습니다.

### `featured[1].steps[1].label`

- **EN** — Evidence
- **KO** — 근거

### `featured[1].steps[1].title`

- **EN** — Three suspects, one culprit
- **KO** — 용의자 셋, 범인 하나

### `featured[1].steps[1].body`

- **EN** — Diagnostic playback separated publish time, angle wrapping, and beam order. The motion followed the assembled scan. The individual ranges stayed put. Pinning the angular grid alone dropped yaw variation to 0.166°.
- **KO** — 진단 재생으로 publish time, angle wrapping, 빔 순서를 분리했습니다. 움직임은 조립된 스캔을 따라갔습니다. 개별 거리값은 제자리에 있었습니다. 각도 그리드만 고정해도 yaw 변동이 0.166°로 떨어졌습니다.

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

- **EN** — Fix the geometry first, then estimate
- **KO** — 기하를 먼저 고정하고 추정하기

### `featured[1].steps[2].body`

- **EN** — 400 angular bins, so index i always means the same physical direction. Then one independent 1-D EKF per beam, because the beams do not share a noise source.
- **KO** — 400개 각도 bin으로 나눠 인덱스 i가 항상 같은 물리 방향을 가리키게 했습니다. 그 위에 빔마다 독립적인 1차원 EKF를 뒀습니다. 빔끼리 노이즈 원인이 다르니 따로 추정하는 편이 맞습니다.

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

- **EN** — Gate the outliers, keep the real motion
- **KO** — 이상치는 막고 실제 움직임은 통과

### `featured[1].steps[3].body`

- **EN** — Each beam carries a Mahalanobis gate sized to its own uncertainty. Readings that fail the gate are dropped. A sudden obstacle still gets through, because the gate resets on a run of rejections.
- **KO** — 빔마다 자기 불확도에 맞춘 Mahalanobis gate를 둡니다. gate를 통과하지 못한 측정은 버립니다. 그래도 갑자기 나타난 장애물은 그대로 통과합니다. 거부가 연달아 쌓이면 gate를 리셋하기 때문입니다.

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

- **EN** — Yaw standard deviation: 0.378° to 0.067°. Range noise on a stationary target: 4.1 mm to 1.3 mm. Stack every scan of the same wall and the smear shrinks from 3,273 pixels to 977 across 91 scans.
- **KO** — Yaw 표준편차 0.378° → 0.067°. 정지 표적 거리 노이즈 4.1 mm → 1.3 mm. 같은 벽의 모든 스캔을 겹치면 번짐이 91회 스캔에서 3,273픽셀에서 977픽셀로 줄어듭니다.

### `featured[1].steps[4].media.alt`

- **EN** — Two accumulated scan images of the same wall corner, where the unfiltered side spreads into a wide colored band and the filtered side stays a narrow line
- **KO** — 같은 벽 코너를 누적한 두 스캔 이미지로, 필터링 전은 넓은 색 띠로 번지고 필터링 후는 얇은 선으로 유지됩니다

### `featured[1].steps[4].media.caption`

- **EN** — Every position the wall was ever measured at, over 91 scans: 3,273 pixels before filtering, 977 after.
- **KO** — 91회 스캔 동안 벽이 측정된 모든 위치입니다. 필터링 전 3,273픽셀, 필터링 후 977픽셀입니다.

## 주요 작업 03 · Selected work 3

### `featured[2].eyebrow`

- **EN** — 03 · Production Calibration
- **KO** — 03 · 생산 캘리브레이션

### `featured[2].title`

- **EN** — LiDAR-to-LiDAR Extrinsic Calibration Method That Reached the Production Line
- **KO** — 라이다-라이다 캘리브레이션: 문제 주도를 통해 생산에 적용한 사례

### `featured[2].summary`

- **EN** — One LiDAR sat upside down with an unknown yaw offset, so its returns missed the wall the reference sensor hit. Estimated the offset from wall geometry and put the method on the production line.
- **KO** — LiDAR 하나가 뒤집혀 달렸는데 yaw 오프셋을 알 수 없었습니다. 그래서 기준 센서가 제대로 맞히는 벽을 이 센서만 빗나갔습니다. 벽면 기하로 오프셋을 추정해 그 방법을 생산 라인에 올렸습니다.

### `featured[2].metrics[0].label`

- **EN** — Alignment criterion
- **KO** — 정렬 기준

### `featured[2].metrics[0].value`

- **EN** — Measurable residual
- **KO** — 측정 가능한 residual

### `featured[2].metrics[0].context`

- **EN** — Replaced operator judgment
- **KO** — 작업자 판단을 대체

### `featured[2].steps[0].label`

- **EN** — Problem
- **KO** — 문제

### `featured[2].steps[0].title`

- **EN** — Manual alignment did not scale
- **KO** — 수동 정렬은 확장되지 않았습니다

### `featured[2].steps[0].body`

- **EN** — Two range sensors, one mounted upside down, yaw offset unknown. Its returns land short of the wall the reference sensor measures correctly. Every fix was an operator turning a value by eye.
- **KO** — 거리 센서 두 개 중 하나가 뒤집혀 장착되고 yaw 오프셋을 모릅니다. 기준 센서가 정확히 재는 벽에서 그 센서의 점만 벗어납니다. 보정은 매번 작업자가 눈으로 값을 돌리는 일이었습니다.

### `featured[2].steps[0].media.alt`

- **EN** — Top-down view of two range sensors on one robot, where the reference beams end on the wall and the uncalibrated beams end short of it
- **KO** — 한 로봇의 두 거리 센서를 위에서 본 그림으로, 기준 센서의 빔은 벽에 닿고 미보정 센서의 빔은 벽에 못 미쳐 끝납니다

### `featured[2].steps[0].media.caption`

- **EN** — The unknown is a planar transform: yaw and two translations.
- **KO** — 미지수는 평면 변환, 즉 yaw와 두 방향의 이동입니다.

### `featured[2].steps[1].label`

- **EN** — Evidence
- **KO** — 근거

### `featured[2].steps[1].title`

- **EN** — A wall is a good ruler
- **KO** — 벽은 좋은 자입니다

### `featured[2].steps[1].body`

- **EN** — RANSAC pulls wall candidates out of the clutter. PCA gives each wall a direction and a normal. Measure every point along that normal and the misalignment becomes a number to minimize.
- **KO** — RANSAC이 clutter에서 벽 후보를 뽑고, PCA가 각 벽의 방향과 normal을 줍니다. 모든 점을 그 normal 방향으로 재면 정렬 오차를 줄여야 할 하나의 수치로 다룰 수 있습니다.

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

- **EN** — It transfers to robots it never saw
- **KO** — 처음 보는 로봇에서도 수렴합니다

### `featured[2].steps[2].body`

- **EN** — Capture, estimate, validate, save: one on-robot workflow that runs where the robot is built. It replaced alignment by operator judgment with a residual anyone can read, and converges on robots it was never tuned against.
- **KO** — 수집, 추정, 검증, 저장을 하나의 on-robot workflow로 묶어 로봇이 만들어지는 자리에서 돌립니다. 작업자 판단에 의존하던 정렬을 누구나 읽을 수 있는 residual로 바꿨고 튜닝하지 않은 로봇에서도 수렴합니다.

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

- **EN** — 26% of the CPU Was Sorting Points Nobody Needed
- **KO** — CPU의 26%는 아무도 필요로 하지 않는 정렬이었습니다

### `featured[3].summary`

- **EN** — Three depth camera processes were eating the robot's CPU. Profiling put the cost inside PCL VoxelGrid's sort, and a sort-free downsampling pass gave 26% back.
- **KO** — depth 카메라 프로세스 세 개가 로봇 CPU를 잡아먹고 있었습니다. 프로파일링해 보니 비용은 PCL VoxelGrid의 정렬에 몰려 있었고 정렬 없는 downsampling으로 바꿔 CPU 26%를 되찾았습니다.

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

- **EN** — Three cameras, and the CPU had nothing left
- **KO** — 카메라 셋, 그리고 남지 않은 CPU

### `featured[3].steps[0].body`

- **EN** — Each depth camera ran its own downsampling stage. On a robot that also has to navigate, three of them together left little headroom for anything else.
- **KO** — depth 카메라마다 자체 downsampling 단계를 돌렸습니다. 주행까지 해야 하는 로봇에서 셋이 합쳐지니 다른 일에 쓸 여유가 거의 없었습니다.

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

- **EN** — The cost was in a sort, not in the filtering
- **KO** — 비용은 필터링이 아니라 정렬에 있었습니다

### `featured[3].steps[1].body`

- **EN** — Profiling the pipeline on the robot put the time inside PCL VoxelGrid. Its implementation sorts the points to group them into voxels, and that sort, not the downsampling itself, was the expensive part.
- **KO** — 로봇에서 파이프라인을 프로파일링해 보니 시간이 PCL VoxelGrid에 몰려 있었습니다. 이 구현의 문제는 downsampling에 cache 친화적 구현을 위한 정렬이 포함되어 있어 불필요한 추가 연산을 포함했습니다.

### `featured[3].steps[1].media.alt`

- **EN** — Diagram of the existing path: points in a voxel grid are copied out into a flat list, reordered by voxel index with arrows crossing each other, grouped, and only then averaged into one point per voxel
- **KO** — 기존 경로를 그린 도식입니다. voxel 그리드의 점들을 평평한 목록으로 꺼낸 뒤 화살표가 서로 엇갈리며 voxel 인덱스 순으로 재배열하고, 묶은 다음에야 voxel당 한 점으로 평균을 냅니다

### `featured[3].steps[1].media.caption`

- **EN** — The reordering in the middle is the whole cost. The two ends are what the pipeline actually needs.
- **KO** — 가운데 재배열이 비용의 전부입니다. 파이프라인이 실제로 필요로 하는 것은 양쪽 끝뿐입니다.

### `featured[3].steps[2].label`

- **EN** — Implementation
- **KO** — 구현

### `featured[3].steps[2].title`

- **EN** — Accumulate in place, in one pass
- **KO** — 제자리에서, 한 번에 누적하기

### `featured[3].steps[2].body`

- **EN** — Each point is accumulated into the voxel it already sits in. Nothing is copied into a list, nothing is reordered, and one pass is enough. The voxel keeps a running sum and a count, so the centroid falls out at the end.
- **KO** — 점을 이미 속해 있는 voxel에서 바로 누적합니다. 목록으로 복사하지도, 재배열하지도 않고 한 번만 순회합니다. voxel마다 합과 개수만 들고 있으면 끝에가서 중심점이 바로 나옵니다.

### `featured[3].steps[2].media.alt`

- **EN** — Diagram of the replacement: points stay in the voxel grid and are averaged in place inside each cell, giving the same one point per voxel with no list and no reordering
- **KO** — 교체한 경로를 그린 도식입니다. 점들은 voxel 그리드에 그대로 남아 각 칸 안에서 바로 평균이 되고, 목록도 재배열도 없이 voxel당 한 점이라는 같은 결과가 나옵니다

### `featured[3].steps[2].media.caption`

- **EN** — Same first frame, same last frame. The middle step is gone.
- **KO** — 첫 장면도 마지막 장면도 같습니다. 가운데 단계가 없어졌을 뿐입니다.

### `featured[3].steps[3].label`

- **EN** — Result
- **KO** — 결과

### `featured[3].steps[3].title`

- **EN** — 26% back across the three cameras
- **KO** — 세 카메라 합산 CPU 26% 반환

### `featured[3].steps[3].body`

- **EN** — Measured on the robot with all three camera processes running.
- **KO** — 세 카메라 프로세스를 모두 돌린 상태로 로봇에서 측정했습니다.

### `featured[3].steps[3].media.alt`

- **EN** — Bar chart of the three camera processes' combined CPU, normalised: the PCL VoxelGrid path at 100% and the sort-free pass at 74%
- **KO** — 세 카메라 프로세스 합산 CPU를 정규화해 그린 막대그래프입니다. PCL VoxelGrid 경로가 100%, 정렬 없는 경로가 74%입니다

### `featured[3].steps[3].media.caption`

- **EN** — Normalised against the before figure. What was measured is the 26%.
- **KO** — 적용 전을 100%로 두고 그렸습니다. 측정한 값은 26%입니다.

## 주요 작업 05 · Selected work 5

### `featured[4].eyebrow`

- **EN** — 05 · Measurement System
- **KO** — 05 · 측정 시스템

### `featured[4].title`

- **EN** — 52 Cameras, Two Verdicts
- **KO** — 카메라 52대, 두 개의 판정

### `featured[4].summary`

- **EN** — The supplier passed 52 cameras the factory failed, and a 116-unit retest flipped 32 of them. I held sensors as the reference and measured the inspection setup instead: four conditions, thirty repeats each. Re-seating moved position σ from 0.15 px to 1.8 px. Brightness did nothing.
- **KO** — 소형 RGB 카메라의 벤더사와 자사 IQC 결과 중 32대가 불일치 했습니다. 이를 해결하고자 지그 측정 시스템 분석을 통해 해결하고자 했습니다.

### `featured[4].metrics[0].label`

- **EN** — Conflicting decisions
- **KO** — 상충 판정

### `featured[4].metrics[0].value`

- **EN** — 52
- **KO** — 52

### `featured[4].metrics[0].context`

- **EN** — Across two inspection sites
- **KO** — 두 검사 지점 간

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

- **EN** — The same camera got two answers
- **KO** — 같은 카메라가 두 개의 답을 받았습니다

### `featured[4].steps[0].body`

- **EN** — 52 units where supplier and factory disagreed. A 116-unit retest moved 32 from fail to pass. The same product passing or failing by when and where it was measured points at the measurement system, not the product.
- **KO** — 공급사와 공장의 판정이 갈린 52대가 있었습니다. 116대 재검에서 32대가 fail에서 pass로 바뀌었습니다. 같은 제품의 합불이 측정 시점과 조건에 따라 변한다면 의심할 곳은 제품이 아니라 측정 시스템입니다.

### `featured[4].steps[0].media.alt`

- **EN** — Supplier and factory decision split for camera inspection
- **KO** — 카메라 검사에서 공급사와 공장 판정이 갈리는 모습

### `featured[4].steps[0].media.caption`

- **EN** — Observed evidence: 52 conflicts and 32 reversals among 116 retests.
- **KO** — 관측 근거: 52건의 충돌과 116대 중 32대의 판정 전환.

### `featured[4].steps[1].label`

- **EN** — Decision
- **KO** — 판단

### `featured[4].steps[1].title`

- **EN** — Hold the part still and measure the setup
- **KO** — 부품을 고정해 두고 측정 환경을 재기

### `featured[4].steps[1].body`

- **EN** — Fix a sensor as the reference and measure it again and again. Whatever spread comes back cannot be the part, so it is the measurement system: the program, the seating, the environment. That turns an argument about verdicts into a number.
- **KO** — IQC 판정은 같은 측정을 다시 해도 같은 답이 나와야 합니다. 그래서 검사 지그의 산포 원인을 분석하고자 했습니다.

### `featured[4].steps[1].media.alt`

- **EN** — The observed spread written out as the measurement system's terms, the program, the seating and the environment, with the part term absent because one sensor is held as the reference
- **KO** — 관측된 산포를 측정 시스템의 항으로 풀어 쓴 도식입니다. 프로그램, 안착, 환경 세 항이며, 센서 하나를 기준물로 고정했기 때문에 부품 항은 없습니다

### `featured[4].steps[1].media.caption`

- **EN** — With the part held fixed, the spread that remains is the setup's.
- **KO** — 부품을 고정하면 남는 산포는 검사 환경의 것입니다.

### `featured[4].steps[2].label`

- **EN** — Evidence
- **KO** — 근거

### `featured[4].steps[2].title`

- **EN** — Four conditions, thirty repeats each
- **KO** — 조건 네 가지, 각 30회 반복

### `featured[4].steps[2].body`

- **EN** — Five sensors, four conditions, thirty measurements per condition. Recapture from unchanged seating gave the baseline. Remount took the sensor off and re-seated it every time. The other two changed the lighting: brightness first, then colour. Seven metrics came out of each measurement, chart centre coordinates and a diagonal.
- **KO** — 센서 다섯 대, 조건 네 가지, 조건당 측정 서른 번입니다. 안착을 그대로 둔 채 다시 캡처한 것이 기준선입니다. 재안착은 매번 센서를 떼었다가 다시 얹혔습니다. 나머지 둘은 조명을 바꿔 봤습니다. 먼저 밝기, 다음 색입니다. 측정 한 번당 지표 일곱 개를 뽑았습니다. 차트 중심 좌표와 대각선입니다.

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

- **EN** — Seating, not brightness
- **KO** — 범인은 안착이었습니다

### `featured[4].steps[3].body`

- **EN** — Baseline σ held at 0.15 px. Re-seating pushed position σ to 1.8 px, twelve times that, and it moved with the operator and the seating. Brightness stayed at baseline. Colour did something else entirely: tens to hundreds of px, which is detection breaking down rather than spread widening. The fixture seating and the inspection procedure were changed on that basis.
- **KO** — 기준선 σ는 0.15 px에서 유지됐습니다. 재안착은 위치 σ를 1.8 px까지, 기준선의 12배까지 밀어 올렸고 작업자와 안착 상태에 따라 달라졌습니다. 밝기는 기준선 수준이었습니다. 색은 성격이 달랐습니다. 수십에서 백 px로, 산포가 넘어진 게 아니라 검출 자체가 무너진 값입니다. 이걸 근거로 지그 안착 방식과 검사 절차를 고쳤습니다.

### `featured[4].steps[3].media.alt`

- **EN** — Position sigma for each condition drawn as bars, recapture and brightness near zero, remount twelve times longer, and light colour hatched because it runs off the scale
- **KO** — 조건별 위치 시그마를 막대로 그렸습니다. 재캡처와 밝기는 0에 가깝고, 재안착은 그 12배이며, 조명색은 눈금을 벗어나 뺗금으로 표시했습니다

### `featured[4].steps[3].media.caption`

- **EN** — 0.15 px against 1.8 px. Colour is off the scale, not on it.
- **KO** — 0.15 px 대 1.8 px입니다. 조명색은 눈금 안에 아예 들어오지 않습니다.

## 프로젝트 · Project index

### `projects[0].title`

- **EN** — Camera Calibration from Pedestrians
- **KO** — 보행자 기반 카메라 캘리브레이션

### `projects[0].summary`

- **EN** — Calibrated CCTV cameras with no checkerboard, using pedestrians as vertical line segments. Accuracy improved 82% over the ICPR 2021 baseline.
- **KO** — Checkerboard 없이 보행자를 수직 선분으로 써서 CCTV 카메라를 캘리브레이션했습니다. ICPR 2021 baseline 대비 정확도를 82% 올렸습니다.

### `projects[0].outcome`

- **EN** — RANSAC and MSAC absorb the outliers real footage produces: partial bodies, groups, reflections. A pedestrian is only usable when both endpoints are clean.
- **KO** — 실제 영상에서 나오는 이상치를 RANSAC과 MSAC으로 흡수했습니다. 몸이 잘린 사람, 겹쳐 선 무리, 유리에 비친 상 같은 것들입니다. 양 끝점이 깨끗하게 잡힌 보행자만 씁니다.

### `projects[0].media[0].alt`

- **EN** — Pipeline diagram running from pose estimation and line segment extraction into sampling, parameter estimation, triangulation, and evaluation
- **KO** — 자세 추정과 선분 추출에서 샘플링, 파라미터 추정, 삼각측량, 평가로 이어지는 파이프라인 다이어그램

### `projects[0].media[0].caption`

- **EN** — Pedestrians become line segments, then a sampling loop solves for the camera.
- **KO** — 보행자를 선분으로 만든 뒤, 샘플링 반복으로 카메라를 추정합니다.

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

- **EN** — Tracked several moving objects from range scans alone, no camera appearance. DBSCAN formed the observations, an EKF held the motion state, the Hungarian algorithm linked frames.
- **KO** — 카메라 외형 정보 없이 거리 스캔만으로 여러 이동 객체를 추적했습니다. DBSCAN이 관측을 만들고 EKF가 motion state를 유지하고 Hungarian algorithm이 프레임을 연결했습니다.

### `projects[1].outcome`

- **EN** — Range gives you a centroid and nothing else. No colour, no texture, no box to re-identify by. Identity has to come from motion alone.
- **KO** — 거리 센서가 주는 것은 centroid뿐입니다. 색도, 질감도, 다시 알아볼 박스도 없습니다. 결국 움직임만 보고 같은 객체인지 가려내야 합니다.

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

- **EN** — Depth, ToF, RGB, and LiDAR from bring-up to factory validation and field reliability.
- **KO** — Depth, ToF, RGB, LiDAR를 bring-up부터 공장 검증과 필드 신뢰성까지 담당했습니다.

### `experience[1].platform`

- **EN** — Industrial AMR
- **KO** — 산업용 AMR

### `experience[1].role`

- **EN** — Multi-sensor integration and production calibration
- **KO** — 다중 센서 통합 및 생산 캘리브레이션

### `experience[1].summary`

- **EN** — Carried the sensing stack from prototype through a production hardware upgrade, and automated the geometric calibration.
- **KO** — 센서 스택을 prototype부터 생산용 하드웨어 개선까지 끌고 가며 기하 캘리브레이션을 자동화했습니다.

### `experience[2].platform`

- **EN** — Humanoid Platform
- **KO** — 휴머노이드 플랫폼

### `experience[2].role`

- **EN** — Sensor-system bring-up and calibration
- **KO** — 센서 시스템 bring-up 및 캘리브레이션

### `experience[2].summary`

- **EN** — Built a shipment-ready range and depth configuration against a hard date.
- **KO** — 촉박한 일정에 맞춰 출하 가능한 거리·깊이 센서 configuration을 구축했습니다.

## 연구 · Research

### `research[0].title`

- **EN** — Accurate and Robust Surveillance Camera Calibration using Pedestrians
- **KO** — 보행자를 이용한 정확하고 강건한 감시 카메라 캘리브레이션

### `research[0].summary`

- **EN** — Marker-free camera parameter estimation from pedestrian line segments perpendicular to the ground plane.
- **KO** — 지면에 수직인 보행자 선분으로 marker 없이 카메라 파라미터를 추정했습니다.

### `research[0].result`

- **EN** — Improved accuracy by 82% over the ICPR 2021 baseline under real CCTV conditions.
- **KO** — 실제 CCTV 조건에서 ICPR 2021 baseline 대비 정확도를 82% 향상했습니다.

### `research[1].title`

- **EN** — LiDAR-based Multi-Object Tracking in Autonomous Driving
- **KO** — 자율주행 환경의 LiDAR 기반 다중 객체 추적

### `research[1].summary`

- **EN** — A range-only tracking pipeline combining spatial clustering, recursive state estimation, and global data association.
- **KO** — 공간 군집화, 재귀 상태 추정, 전역 데이터 연결을 결합한 거리 센서 기반 추적 파이프라인입니다.

### `research[1].result`

- **EN** — Implemented DBSCAN observations, EKF tracks, and Hungarian assignment as an end-to-end MOT system.
- **KO** — DBSCAN 관측, EKF track, Hungarian 할당을 end-to-end MOT 시스템으로 구현했습니다.

## 논문 · Publications

### `publications[0].venue`

- **EN** — IEEE Access, under review
- **KO** — IEEE Access, 심사 중

### `publications[0].contribution`

- **EN** — First author
- **KO** — 제1저자

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
