# Portfolio copy, rewritten CV-style

Draft for review. Nothing here is applied to the site yet; `app/_portfolio/content.ts` still holds the current copy.

## What changed and why

The old copy was written as short essays. Every case opened with a reflection, ran two or three even-length sentences, and closed on a line that told the reader what to think. That reads fine start to finish and badly at a glance, which is the only way a portfolio actually gets read.

Rules applied here, from resume and case-study practice ([Monster](https://www.monster.com/career-advice/resume/resume-bullet-points), [story.cv](https://story.cv/blog/articles/resume-bullet-points-format), [Copywriting School on STAR](https://copywriting.school/formulas/star)) and the [avoid-ai-writing pattern list](https://github.com/conorbronsdon/avoid-ai-writing/blob/main/references/patterns.md):

| Rule | Old | New |
|---|---|---|
| Number in the sentence, not only in the metric band | "Traced rigid scan jitter to time and angle representation" | "Stationary scans swung 0.378°." |
| Verb first, no scene-setting | "A new AMR used multiple range sensors whose relative pose…" | "One LiDAR sat upside down with an unknown yaw offset." |
| Short declaratives, varied length | one 30-word compound sentence | three sentences: 6 words, 14 words, 9 words |
| Titles name the result | "A steadier scan with measurable gains" | "Yaw jitter down 82%" |
| No closing moral | "so the fit has a physical meaning" | cut |
| No `rather than` / `instead of` / `, not X` | 12 instances | 0 |

Korean follows the same rules: 수치를 문장 안에, 동사로 시작, 단문, 마무리 격언 삭제.

---

## Profile

**Headline** (unchanged, it already scans)

- EN — RIGHT PLACE. RIGHT TIME. TRUSTED DATA.
- KO — 정확한 공간. 정확한 시간. 신뢰할 수 있는 데이터.

**Role**

- EN — Robotics Sensor Engineer
- KO — 로보틱스 센서 엔지니어

**Intro**

- EN — I own robot sensors end to end: bring-up, calibration, time synchronization, factory inspection, field failures. Three commercial platforms so far, sole sensor owner on all three.
- KO — 로봇 센서를 처음부터 끝까지 담당합니다. Bring-up, 캘리브레이션, 시간 동기화, 공장 검사, 현장 장애까지. 지금까지 상용 플랫폼 세 대를 모두 단독으로 맡았습니다.

> Old: "I turn noisy measurements into dependable robot behavior across calibration, synchronization, sensor quality, and perception." Four abstract nouns in a row, no claim a reader can check.

---

## 01 · Measurement Stability

**Title**

- EN — Yaw Jitter Down 82% on a Low-Cost LiDAR
- KO — 저가형 LiDAR의 Yaw 지터를 82% 줄이기

**Summary**

- EN — Stationary scans swung 0.378°. The cause was in the timestamps and the angle indexing, not the sensor. A fixed angular grid plus a per-beam EKF brought it to 0.067°.
- KO — 정지 상태 스캔이 0.378° 흔들렸습니다. 원인은 센서가 아니라 타임스탬프와 각도 인덱싱이었습니다. 고정 각도 그리드와 빔별 EKF로 0.067°까지 내렸습니다.

**Metrics**

| Label | Value | Context |
|---|---|---|
| Yaw standard deviation / Yaw 표준편차 | 0.378° → 0.067° | Raw to filtered / 원본 대비 필터링 |
| Range noise / 거리 노이즈 | 4.1 mm → 1.3 mm | Stationary target / 정지 표적 |

### Problem — The room moved while the robot stood still

- EN — The robot was parked and the whole scan still rocked as one rigid shape. Each range reading looked plausible on its own, so nothing flagged a fault. Navigation saw the room moving.
- KO — 로봇은 정지해 있는데 스캔 전체가 하나의 강체처럼 흔들렸습니다. 개별 거리값은 그럴듯해서 어디서도 결함으로 잡히지 않았습니다. 내비게이션은 공간이 움직인다고 인식했습니다.

*Caption* — A wall that never moved, measured at 3,273 different positions across 91 scans. / 움직인 적 없는 벽이 91회 스캔에서 3,273개의 서로 다른 위치로 측정됐습니다.

### Evidence — Three suspects, one culprit

- EN — Diagnostic playback separated publish time, angle wrapping, and beam order. The motion followed the assembled scan. The individual ranges stayed put. Pinning the angular grid alone dropped yaw variation to 0.166°.
- KO — 진단 재생으로 publish time, angle wrapping, 빔 순서를 분리했습니다. 움직임은 조립된 스캔을 따라갔습니다. 개별 거리값은 제자리에 있었습니다. 각도 그리드만 고정해도 yaw 변동이 0.166°로 떨어졌습니다.

*Caption* — A fixed angle grid alone: 0.378° → 0.166°. / 고정 각도 그리드만 적용: 0.378° → 0.166°.

### Decision — Fix the geometry first, then estimate

- EN — 400 angular bins, so index *i* always means the same physical direction. Then one independent 1-D EKF per beam, because the beams do not share a noise source.
- KO — 400개 각도 bin으로 나눠 인덱스 *i*가 항상 같은 물리 방향을 가리키게 했습니다. 그 위에 빔마다 독립적인 1차원 EKF를 뒀습니다. 빔들은 노이즈 원인을 공유하지 않기 때문입니다.

### Implementation — Gate the outliers, keep the real motion

- EN — Each beam carries a Mahalanobis gate sized to its own uncertainty. Readings that fail the gate are dropped. A sudden obstacle still gets through, because the gate resets on a run of rejections.
- KO — 빔마다 자기 불확도에 맞춘 Mahalanobis gate를 둡니다. gate를 통과하지 못한 측정은 버립니다. 급출현 장애물은 그대로 통과합니다. 연속 거부가 쌓이면 gate가 리셋되기 때문입니다.

*Caption* — 91 scans, unfiltered left, filtered right. / 91회 스캔, 왼쪽 필터링 전, 오른쪽 필터링 후.

### Result — 0.378° → 0.067°

- EN — Yaw standard deviation: 0.378° to 0.067°. Range noise on a stationary target: 4.1 mm to 1.3 mm. Stack every scan of the same wall and the smear shrinks from 3,273 pixels to 977 across 91 scans.
- KO — Yaw 표준편차 0.378° → 0.067°. 정지 표적 거리 노이즈 4.1 mm → 1.3 mm. 같은 벽의 모든 스캔을 겹치면 번짐이 91회 스캔에서 3,273픽셀에서 977픽셀로 줄어듭니다.

*Caption* — Every position the wall was ever measured at, over 91 scans: 3,273 pixels before filtering, 977 after. / 91회 스캔 동안 벽이 측정된 모든 위치입니다. 필터링 전 3,273픽셀, 필터링 후 977픽셀.

---

## 02 · Temporal Alignment

**Title**

- EN — Three Clocks Pretending to Be One
- KO — 하나로 위장한 세 개의 시계

**Summary**

- EN — A sensor packet is stamped on the device, arrives at another time, and publishes at a third. Measured 13 ms of drift over 12 hours and rebuilt per-beam timestamps so scans can be deskewed.
- KO — 센서 패킷은 장치에서 시각이 찍히고, 다른 시각에 도착하고, 또 다른 시각에 publish됩니다. 12시간 동안 13 ms drift를 측정하고, deskewing이 가능하도록 빔별 타임스탬프를 재구성했습니다.

**Metrics**

| Label | Value | Context |
|---|---|---|
| Observed drift / 관측 drift | ≈13 ms / 12 h | About 0.3 ppm / 약 0.3 ppm |

### Problem — One timestamp hid three different clocks

- EN — Device time, acquisition time, host publish time. Collapsing them into one instant distorts any motion that happens inside a single scan.
- KO — Device time, acquisition time, host publish time이 있습니다. 이를 하나의 순간으로 합치면 한 스캔 안에서 일어난 움직임이 왜곡됩니다.

### Evidence — Small per packet, large per shift

- EN — A 12-hour capture drifted about 13 ms, roughly 0.3 ppm. Negligible in one packet. Not negligible across a work shift with the robot moving.
- KO — 12시간 측정에서 약 13 ms, 약 0.3 ppm의 drift가 나왔습니다. 패킷 하나에서는 무시할 수 있습니다. 로봇이 움직이는 하루 운용에서는 아닙니다.

### Decision — Keep the source clock, map it explicitly

- EN — The device clock stays the source of truth. Offset and drift are estimated as separate terms in an affine map to host time.
- KO — Device clock을 원본으로 유지합니다. Offset과 drift를 host time으로 가는 affine 변환의 서로 다른 항으로 추정합니다.

### Implementation — Give every beam its own timestamp

- EN — Device-time conversion plus a scan-period model assigns each beam the time it was actually measured. A deskewing filter can then pull the whole scan to one reference pose.
- KO — Device time 변환과 스캔 주기 모델로 각 빔에 실제 측정 시각을 부여합니다. 이후 deskewing filter가 스캔 전체를 하나의 기준 pose로 끌어옵니다.

### Result — Timing is fixed; map quality is the next experiment

- EN — The pipeline now hands SLAM temporally coherent scans. A quantitative map-quality number needs a controlled before-and-after run, which has not been done.
- KO — 파이프라인은 이제 SLAM에 시간적으로 일관된 스캔을 넘깁니다. 지도 품질 수치는 통제된 전후 비교가 있어야 제시할 수 있고, 아직 하지 않았습니다.

---

## 03 · Hardware Synchronization

**Title**

- EN — One 1 MHz Clock for Camera and IMU
- KO — 카메라와 IMU를 하나의 1 MHz 시계로

**Summary**

- EN — Host arrival time cannot prove two sensors saw the world at the same moment. Built an STM32 timing master that fires the camera at 30 Hz and stamps IMU events on the same 1 MHz timer. Measured 30.00 Hz over 447 frames.
- KO — Host 도착 시각으로는 두 센서가 같은 순간을 봤다는 것을 증명할 수 없습니다. STM32를 timing master로 만들어 카메라를 30 Hz로 트리거하고 IMU 이벤트를 같은 1 MHz timer로 기록했습니다. 447프레임에서 30.00 Hz를 측정했습니다.

**Metrics**

| Label | Value | Context |
|---|---|---|
| Verified camera rate / 검증된 카메라 주기 | 30.00 Hz | 447 frames / 14.87 s |
| Master clock / Master clock | 1 MHz | 100 μs trigger pulse |

### Problem — Software timestamps cannot prove simultaneity

- EN — Camera frames and IMU samples cross different drivers and queues. Host arrival time measures the software path a sample travelled.
- KO — 카메라 프레임과 IMU 샘플은 서로 다른 드라이버와 큐를 지납니다. Host 도착 시각은 관측 순간이 아니라 소프트웨어 경로를 재는 값입니다.

### Evidence — Both sensors expose a physical edge

- EN — The camera takes an external trigger. The IMU raises a data-ready line. A microcontroller can watch both against one timer.
- KO — 카메라는 외부 trigger를 받습니다. IMU는 data-ready 신호를 올립니다. 마이크로컨트롤러는 두 신호를 하나의 timer로 볼 수 있습니다.

### Decision — Make the microcontroller the authority

- EN — An STM32 generates the 30 Hz pulse and captures IMU events on a single 1 MHz timer. No cross-device host-clock assumption survives.
- KO — STM32가 30 Hz pulse를 생성하고 IMU 이벤트를 하나의 1 MHz timer로 캡처합니다. 장치 간 host clock 가정이 남지 않습니다.

### Implementation — Voltage to packet to pose

- EN — A 3.3 V to 1.8 V interface protects the camera trigger input. COBS framing with CRC carries timestamps from C firmware to a Rust host. IMU-seeded ICP consumes them downstream.
- KO — 3.3 V에서 1.8 V로 변환하는 회로가 카메라 trigger 입력을 보호합니다. COBS와 CRC가 C firmware에서 Rust host로 타임스탬프를 전달합니다. 후단에서 IMU-seeded ICP가 이를 사용합니다.

### Result — 447 frames, 14.87 s, 30.00 Hz

- EN — A real slave-mode camera test measured 30.00 Hz. The synchronized-versus-unsynchronized motion comparison is still running.
- KO — 실제 slave 모드 카메라 시험에서 30.00 Hz를 측정했습니다. 동기화 전후 motion 비교는 아직 진행 중입니다.

---

## 04 · Production Calibration

**Title**

- EN — LiDAR-to-LiDAR Calibration, Built in a Week
- KO — 일주일 만에 만든 LiDAR 간 캘리브레이션

**Summary**

- EN — One LiDAR sat upside down with an unknown yaw offset, so its returns missed the wall the reference sensor hit. Estimated the SE(2) offset from wall geometry and had the tool running on robots in under a week.
- KO — 한 LiDAR가 뒤집혀 장착되고 yaw 오프셋을 몰라, 기준 센서가 맞히는 벽을 빗나갔습니다. 벽면 기하로 SE(2) 오프셋을 추정해 일주일 안에 로봇에서 도구를 돌렸습니다.

**Metrics**

| Label | Value | Context |
|---|---|---|
| Problem to deployed tool / 문제 인식에서 적용까지 | Under a week / 1주 이내 | Diagnosis, estimator, on-robot workflow / 진단, 추정기, on-robot workflow |

### Problem — Manual alignment did not scale

- EN — Two range sensors, one mounted upside down, yaw offset unknown. Its returns land short of the wall the reference sensor measures correctly. Every fix was an operator turning a value by eye.
- KO — 거리 센서 두 개 중 하나가 뒤집혀 장착되고 yaw 오프셋을 모릅니다. 기준 센서가 정확히 재는 벽에서 그 센서의 점만 벗어납니다. 보정은 매번 작업자가 눈으로 값을 돌리는 일이었습니다.

*Caption* — The unknown is a planar transform: yaw and two translations. / 미지수는 평면 변환, 즉 yaw와 두 방향의 이동입니다.

### Evidence — A wall is a good ruler

- EN — RANSAC pulls wall candidates out of the clutter. PCA gives each wall a direction and a normal. Measure every point along that normal and the misalignment becomes a number to minimize.
- KO — RANSAC이 clutter에서 벽 후보를 뽑습니다. PCA가 각 벽의 방향과 normal을 줍니다. 모든 점을 그 normal 방향으로 재면 정렬 오차가 최소화할 수 있는 수치가 됩니다.

*Caption* — Residuals measured perpendicular to the wall. / 벽에 수직으로 측정한 residual.

### Result — Under a week, and it transfers

- EN — Diagnosis to a working on-robot tool took under a week: capture, estimate, validate, save. The same procedure converges on robots it was never tuned against.
- KO — 진단부터 로봇에서 동작하는 도구까지 일주일이 걸리지 않았습니다. 수집, 추정, 검증, 저장까지 포함해서입니다. 같은 절차가 튜닝하지 않은 로봇에서도 수렴합니다.

*Caption* — Two robots, before and after, one week after the problem surfaced. / 문제가 드러나고 일주일 뒤 두 대의 로봇, 캘리브레이션 전후.

---

## 05 · Measurement Variation

**Title**

- EN — 52 Cameras, Two Verdicts
- KO — 카메라 52대, 두 개의 판정

**Summary**

- EN — The supplier passed 52 cameras the factory failed. Retesting 116 units flipped 32 from fail to pass. Remounting the same camera showed the jig was moving the result, so the jig changed.
- KO — 공급사가 통과시킨 52대를 공장이 불합격시켰습니다. 116대를 재검하니 32대가 fail에서 pass로 바뀌었습니다. 같은 카메라를 다시 장착해 보니 지그가 결과를 흔들고 있었고, 지그를 바꿨습니다.

**Metrics**

| Label | Value | Context |
|---|---|---|
| Conflicting decisions / 상충 판정 | 52 | Across two inspection sites / 두 검사 지점 간 |
| Retest reversals / 재검 판정 전환 | 32 / 116 | Fail to pass / Fail에서 pass로 |

### Problem — The same camera got two answers

- EN — 52 units where supplier and factory disagreed. A 116-unit retest moved 32 from fail to pass. Those numbers do not come from the cameras.
- KO — 공급사와 공장의 판정이 갈린 52대가 있었습니다. 116대 재검에서 32대가 fail에서 pass로 바뀌었습니다. 이 수치는 카메라에서 나오는 값이 아닙니다.

### Decision — Measure the setup before judging the part

- EN — A verdict at the specification edge is only as good as its repeatability. I went after the inspection fixture as a source of spread in its own right.
- KO — 규격 경계의 판정은 재현성만큼만 신뢰할 수 있습니다. 검사 지그를 그 자체로 산포 원인으로 보고 파고들었습니다.

### Implementation — Remount the same camera, over and over

- EN — Take one camera off the jig, put it back, measure. Repeat. The spread that shows up belongs to the fixture. Run it across sensor sizes and the spread changes with how each size seats.
- KO — 카메라 하나를 지그에서 떼고 다시 얹어 측정합니다. 반복합니다. 이때 나오는 산포는 지그의 것입니다. 센서 크기별로 돌리면 크기마다 안착 방식에 따라 산포가 달라집니다.

### Result — The jig changed, not the threshold

- EN — Seating turned out to be a real contributor to the disagreement, and the fixture was improved. A borderline verdict now reflects the camera.
- KO — 안착이 판정 불일치의 실제 원인 중 하나로 확인돼 지그를 개선했습니다. 이제 경계 판정은 카메라를 반영합니다.

---

## 06 · Sensor Integration

**Title**

- EN — Three Robots, One Sensor Engineer
- KO — 로봇 세 대, 센서 엔지니어 한 명

**Summary**

- EN — Serving robot, industrial AMR, humanoid. Overlapping schedules, 17 months, sole sensor owner on all three.
- KO — 서빙로봇, 산업용 AMR, 휴머노이드. 겹치는 일정, 17개월, 세 대 모두 단독 담당.

**Metrics**

| Label | Value | Context |
|---|---|---|
| Platforms owned in parallel / 동시 전담 플랫폼 | 3 | Serving robot, industrial AMR, humanoid / 서빙로봇, 산업용 AMR, 휴머노이드 |
| As the only sensor engineer / 단독 담당 기간 | 17 months / 17개월 | No second sensor engineer on the programs / 해당 과제에 다른 센서 엔지니어 없음 |

### Problem — Three programs, one of me

- EN — Three robots each needed a full sensing stack: parts chosen, mounted, calibrated, kept alive in the field. The schedules overlapped. There was no second sensor engineer.
- KO — 로봇 세 대가 각각 완전한 센서 스택을 필요로 했습니다. 부품 선정, 장착, 캘리브레이션, 현장 유지까지입니다. 일정은 겹쳤습니다. 다른 센서 엔지니어는 없었습니다.

*Caption* — The three programs run across one another. / 세 과제가 서로 겹쳐 진행됩니다.

### Decision — One lifecycle, three robots

- EN — I ran the same five stages on all three: bring-up, URDF and TF, calibration, factory validation, field reliability. Closing a stage once made closing it on the next robot cheap.
- KO — 세 대 모두에 같은 다섯 단계를 적용했습니다. Bring-up, URDF·TF, 캘리브레이션, 공장 검증, 필드 신뢰성입니다. 한 번 닫은 단계는 다음 로봇에서 훨씬 싸게 닫혔습니다.

### Result — All three shipped

- EN — Depth, ToF, RGB, and range sensing integrated on each robot and carried through factory test into field operation, including a humanoid configuration finished against a hard shipment date.
- KO — 세 로봇에 depth, ToF, RGB, 거리 센서를 통합해 공장 검사와 현장 운용까지 연결했습니다. 촉박한 출하 일정에 맞춘 휴머노이드 configuration도 포함됩니다.

---

## Project index

### 07 — Camera Calibration from Pedestrians

- EN summary — Calibrated CCTV cameras with no checkerboard, using pedestrians as vertical line segments. RANSAC and MSAC absorbed the outliers; accuracy improved 82% over the ICPR 2021 baseline.
- KO summary — Checkerboard 없이 보행자를 수직 선분으로 써서 CCTV 카메라를 캘리브레이션했습니다. RANSAC과 MSAC으로 이상치를 흡수해 ICPR 2021 baseline 대비 정확도를 82% 올렸습니다.

*Captions* — Pedestrians become line segments, then a sampling loop solves for the camera. / Outlier rejection leaves one usable segment per pedestrian.

### 08 — Multi-Object Tracking with a 2D LiDAR

- EN summary — Tracked several moving objects from range scans alone, no camera appearance. DBSCAN formed the observations, an EKF held the motion state, the Hungarian algorithm linked frames.
- KO summary — 카메라 외형 정보 없이 거리 스캔만으로 여러 이동 객체를 추적했습니다. DBSCAN이 관측을 만들고, EKF가 motion state를 유지하고, Hungarian algorithm이 프레임을 연결했습니다.

*Caption* — Each track keeps its identifier from frame to frame as the vehicle moves.

---

## Experience rows

| Platform | Role | Summary (EN) | Summary (KO) |
|---|---|---|---|
| Compact service robot / 소형 서빙로봇 | End-to-end sensor owner / 센서 전 과정 담당 | Depth, ToF, RGB, and LiDAR from bring-up to factory validation and field reliability. | Depth, ToF, RGB, LiDAR를 bring-up부터 공장 검증과 필드 신뢰성까지 담당했습니다. |
| Industrial AMR / 산업용 AMR | Multi-sensor integration, production calibration / 다중 센서 통합·생산 캘리브레이션 | Carried the sensing stack from prototype through a production hardware upgrade, and automated the geometric calibration. | 센서 스택을 prototype부터 생산용 하드웨어 개선까지 끌고 가며 기하 캘리브레이션을 자동화했습니다. |
| Humanoid platform / 휴머노이드 플랫폼 | Sensor bring-up and calibration / 센서 bring-up·캘리브레이션 | Built a shipment-ready range and depth configuration against a hard date. | 촉박한 일정에 맞춰 출하 가능한 거리·깊이 센서 configuration을 구축했습니다. |

---

## Open questions

1. **Case 01 title.** "Yaw Jitter Down 82%" leads with the result, which is what a recruiter scans for. It also drops "for Reliable Navigation", so the reader loses why jitter matters until the summary. Keep the number, or keep the purpose?
2. **Case 05 title.** "52 Cameras, Two Verdicts" is the most scannable line in the deck but says nothing about what was done. The old title named the finding (the fixture). Which half matters more?
3. **17 months.** March 2025 to now is 18.5 months. The figure you gave was 1년 5개월. Which endpoint is it counted to?
4. **Case 02 result.** Still says the map-quality number does not exist. Worth keeping that visible, or cut the stage?
