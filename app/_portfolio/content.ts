import type {
  CaseStep,
  EvidenceVisual,
  LocalizedText,
  PortfolioContent,
} from "./model";

const copy = (en: string, ko: string): LocalizedText => ({ en, ko });

const media = (
  visual: EvidenceVisual,
  alt: LocalizedText,
  caption: LocalizedText,
) => ({ kind: "diagram" as const, visual, alt, caption });

const storyStep = (
  id: string,
  label: LocalizedText,
  title: LocalizedText,
  body: LocalizedText,
  visual: EvidenceVisual,
  alt: LocalizedText,
  caption: LocalizedText,
): CaseStep => ({
  id,
  label,
  title,
  body,
  media: media(visual, alt, caption),
});

const stages = {
  problem: copy("Problem", "문제"),
  evidence: copy("Evidence", "근거"),
  decision: copy("Decision", "판단"),
  implementation: copy("Implementation", "구현"),
  result: copy("Result", "결과"),
};

export const portfolioContent: PortfolioContent = {
  profile: {
    name: "Chan-ho Seo",
    role: copy("Robotics Sensor Engineer", "로보틱스 센서 엔지니어"),
    headline: copy(
      "RIGHT PLACE. RIGHT TIME. TRUSTED DATA.",
      "정확한 공간. 정확한 시간. 신뢰할 수 있는 데이터.",
    ),
    introduction: copy(
      "I turn noisy measurements into dependable robot behavior across calibration, synchronization, sensor quality, and perception.",
      "캘리브레이션, 시간 동기화, 센서 품질, 인지를 연결해 불안정한 측정값을 신뢰할 수 있는 로봇 동작으로 바꿉니다.",
    ),
    email: "studychanho0717@gmail.com",
  },
  navigation: {
    work: copy("Selected Work", "주요 작업"),
    projects: copy("Project Index", "프로젝트"),
    experience: copy("Experience", "경험"),
    research: copy("Research", "연구"),
    about: copy("About", "소개"),
  },
  featured: [
    {
      id: "lidar-stability",
      eyebrow: copy("01 · Measurement Stability", "01 · 측정 안정화"),
      title: copy(
        "Stabilizing a Low-Cost LiDAR for Reliable Navigation",
        "저가형 LiDAR를 안정적인 내비게이션 센서로",
      ),
      summary: copy(
        "Traced rigid scan jitter to time and angle representation, then combined a fixed angular grid with per-beam EKF filtering.",
        "강체 형태로 흔들리는 스캔의 원인을 시간과 각도 표현에서 찾고, 고정 각도 그리드와 빔별 EKF로 안정화했습니다.",
      ),
      tags: ["2D LiDAR", "EKF", "Mahalanobis gating", "ROS 2"],
      metrics: [
        {
          label: copy("Yaw standard deviation", "Yaw 표준편차"),
          value: copy("0.378° → 0.067°", "0.378° → 0.067°"),
          context: copy("Raw to filtered", "원본 대비 필터링"),
        },
        {
          label: copy("Range noise", "거리 노이즈"),
          value: copy("4.1 mm → 1.3 mm", "4.1 mm → 1.3 mm"),
          context: copy("Stationary target", "정지 표적 측정"),
        },
      ],
      steps: [
        {
          id: "lidar-problem",
          label: stages.problem,
          title: copy("The room moved while the robot stood still", "로봇은 멈췄는데 공간이 흔들렸습니다"),
          body: copy(
            "A stationary scan oscillated as one rigid shape. Navigation saw a changing world even though individual range measurements looked plausible.",
            "정지 상태의 스캔 전체가 하나의 강체처럼 진동했습니다. 개별 거리값은 그럴듯했지만 내비게이션은 주변 공간이 움직인다고 인식했습니다.",
          ),
          media: {
            kind: "image",
            src: "/media/lidar-stability/scan-excursion-as-is.webp",
            alt: copy(
              "Every scan of a stationary wall corner drawn on top of one another, where the wall spreads into a thick smeared band instead of a line",
              "정지한 벽 코너의 모든 스캔을 겹쳐 그린 그림으로, 벽이 선이 아니라 두껍게 번진 띠로 나타납니다",
            ),
            caption: copy(
              "A wall that never moved, measured at 3,273 different positions across 91 scans.",
              "움직인 적 없는 벽이 91회 스캔에서 3,273개의 서로 다른 위치로 측정됐습니다.",
            ),
          },
        },
        storyStep(
          "lidar-evidence",
          stages.evidence,
          copy("The defect lived in the scan representation", "원인은 스캔 표현 방식에 있었습니다"),
          copy(
            "Diagnostic playback separated publish time, angle wrapping, and beam ordering. The dominant motion followed the assembled scan, pointing to timing and angular synchronization rather than random range noise alone.",
            "진단 재생으로 publish time, angle wrapping, 빔 순서를 분리했습니다. 지배적인 움직임이 조립된 스캔을 따라가며, 단순 거리 노이즈보다 시간과 각도 동기화가 핵심임을 확인했습니다.",
          ),
          "lidar",
          copy("Diagnostic comparison of timestamps and wrapped scan angles", "타임스탬프와 래핑된 스캔 각도 진단 비교"),
          copy("A fixed angle grid lowered yaw variation to 0.166°.", "고정 각도 그리드에서 yaw 변동이 0.166°로 줄었습니다."),
        ),
        storyStep(
          "lidar-decision",
          stages.decision,
          copy("Stabilize geometry first, estimate each beam second", "먼저 기하를 고정하고, 각 빔을 추정했습니다"),
          copy(
            "I chose a 400-bin angular grid to make each index physically consistent, then assigned an independent one-dimensional EKF to every beam.",
            "각 인덱스가 같은 물리 각도를 가리키도록 400-bin 각도 그리드를 적용하고, 각 빔에 독립적인 1차원 EKF를 배치했습니다.",
          ),
          "lidar",
          copy("Fixed 400-bin angular grid feeding per-beam EKF filters", "400-bin 고정 각도 그리드와 빔별 EKF 구조"),
          copy("The estimator works on consistent angular observations.", "일관된 각도 관측값 위에서 추정기가 동작합니다."),
        ),
        {
          id: "lidar-implementation",
          label: stages.implementation,
          title: copy("Reject improbable jumps without freezing real motion", "실제 움직임은 살리고 이상치만 거부했습니다"),
          body: copy(
            "Mahalanobis gating rejected outliers relative to each beam's uncertainty. The filter remained responsive while suppressing measurements that were statistically inconsistent.",
            "각 빔의 불확도를 기준으로 Mahalanobis gating을 적용했습니다. 통계적으로 일관되지 않은 측정은 억제하면서 실제 변화에는 반응하도록 구성했습니다.",
          ),
          media: {
            kind: "video",
            src: "/media/lidar-stability/scan-stability-before-after.webm",
            mp4Src: "/media/lidar-stability/scan-stability-before-after.mp4",
            poster: "/media/lidar-stability/scan-stability-before-after-poster.jpg",
            alt: copy(
              "Side-by-side playback of a wall corner scanned before and after filtering, where the unfiltered scan jitters and the filtered scan holds still",
              "벽 코너를 필터링 전후로 스캔한 영상을 나란히 재생한 화면으로, 필터링 전 스캔은 흔들리고 필터링 후 스캔은 고정되어 있습니다",
            ),
            caption: copy(
              "The same wall corner across 91 scans: the gate holds the surface still without erasing it.",
              "같은 벽 코너를 91회 스캔한 결과로, gate는 벽면을 지우지 않으면서 흔들림만 억제합니다.",
            ),
          },
        },
        {
          id: "lidar-result",
          label: stages.result,
          title: copy("A steadier scan with measurable gains", "측정 가능한 개선을 만든 안정적인 스캔"),
          body: copy(
            "Yaw standard deviation fell from 0.378° to 0.067°, while stationary-target range noise fell from 4.1 mm to 1.3 mm. Accumulating every scan position a wall was ever measured at, the swept area fell from 3,273 to 977 pixels across 91 scans, a 70% reduction.",
            "Yaw 표준편차는 0.378°에서 0.067°로, 정지 표적의 거리 노이즈는 4.1 mm에서 1.3 mm로 감소했습니다. 91회 스캔 동안 벽이 측정된 모든 위치를 누적하면 이탈 면적이 3,273픽셀에서 977픽셀로 70% 줄었습니다.",
          ),
          media: {
            kind: "image",
            src: "/media/lidar-stability/scan-excursion-decay.webp",
            alt: copy(
              "Two accumulated scan images of the same wall corner, where the unfiltered side spreads into a wide colored band and the filtered side stays a narrow line",
              "같은 벽 코너를 누적한 두 스캔 이미지로, 필터링 전은 넓은 색 띠로 번지고 필터링 후는 얇은 선으로 유지됩니다",
            ),
            caption: copy(
              "Every position the wall was ever measured at, over 91 scans: 3,273 pixels before filtering, 977 after.",
              "91회 스캔 동안 벽이 측정된 모든 위치입니다. 필터링 전 3,273픽셀, 필터링 후 977픽셀입니다.",
            ),
          },
        },
      ],
    },
    {
      id: "slam-time-axis",
      eyebrow: copy("02 · Temporal Alignment", "02 · 시간 정렬"),
      title: copy(
        "Rebuilding the Time Axis for Better SLAM",
        "더 나은 SLAM 입력을 위한 시간축 재구성",
      ),
      summary: copy(
        "Separated device, acquisition, and host time; measured clock drift; and rebuilt per-beam timestamps for deskew-ready scans.",
        "device, acquisition, host time을 분리하고 clock drift를 측정해 deskewing 가능한 빔별 타임스탬프를 재구성했습니다.",
      ),
      tags: ["Device time", "Clock drift", "Deskewing", "SLAM"],
      metrics: [
        {
          label: copy("Observed drift", "관측 drift"),
          value: copy("≈13 ms / 12 h", "≈13 ms / 12 h"),
          context: copy("Approximately 0.3 ppm", "약 0.3 ppm"),
        },
      ],
      steps: [
        storyStep(
          "time-problem",
          stages.problem,
          copy("One timestamp hid three different clocks", "하나의 타임스탬프가 세 개의 시간을 숨겼습니다"),
          copy(
            "Sensor packets carried device time, arrived at an acquisition time, and were published on host time. Treating them as one instant distorted motion inside each scan.",
            "센서 패킷에는 device time이 있고, acquisition time에 수집되어 host time에 publish됩니다. 이를 하나의 순간으로 처리하면 스캔 내부의 움직임이 왜곡됩니다.",
          ),
          "clock",
          copy("Three timelines for device, acquisition, and host clocks", "Device, acquisition, host clock의 세 시간축"),
          copy("Clock domains must be modeled before scan correction.", "스캔 보정 전에 clock domain을 구분해야 합니다."),
        ),
        storyStep(
          "time-evidence",
          stages.evidence,
          copy("Long runs exposed a small, accumulating offset", "장시간 측정에서 작은 오차가 누적됐습니다"),
          copy(
            "A 12-hour capture showed about 13 ms of drift, equivalent to roughly 0.3 ppm. Small per packet, it became meaningful across long operation and robot motion.",
            "12시간 측정에서 약 13 ms, 약 0.3 ppm의 drift를 확인했습니다. 패킷 하나에서는 작지만 장시간 동작과 로봇 움직임에서는 의미 있는 오차가 됩니다.",
          ),
          "clock",
          copy("Twelve-hour clock drift plot ending near 13 milliseconds", "12시간 후 약 13 ms에 도달하는 clock drift 그래프"),
          copy("Measured drift: approximately 13 ms over 12 hours.", "측정된 drift는 12시간 동안 약 13 ms입니다."),
        ),
        storyStep(
          "time-decision",
          stages.decision,
          copy("Preserve source time, then map it explicitly", "원본 시간을 보존하고 명시적으로 변환했습니다"),
          copy(
            "I kept the sensor's device clock as the source of truth and estimated its relation to host time rather than replacing it at publication.",
            "Publish 시점으로 덮어쓰는 대신 센서의 device clock을 원본으로 보존하고 host time과의 관계를 추정했습니다.",
          ),
          "clock",
          copy("Affine conversion from device time into the host clock", "Device time에서 host clock으로의 affine 변환"),
          copy("Offset and drift are handled as separate terms.", "Offset과 drift를 서로 다른 항으로 다룹니다."),
        ),
        storyStep(
          "time-implementation",
          stages.implementation,
          copy("Reconstruct the acquisition time of every beam", "모든 빔의 획득 시각을 재구성했습니다"),
          copy(
            "Device-time conversion and scan-period modeling assign a timestamp to each beam. A deskewing filter can then transform measurements to one reference pose.",
            "Device time 변환과 스캔 주기 모델링으로 각 빔에 타임스탬프를 부여했습니다. Deskewing filter는 이를 하나의 기준 pose로 변환합니다.",
          ),
          "clock",
          copy("Per-beam time reconstruction followed by deskewing", "빔별 시간 재구성 후 deskewing하는 과정"),
          copy("Each point carries the time at which it was actually measured.", "각 포인트가 실제 측정 시각을 갖습니다."),
        ),
        storyStep(
          "time-result",
          stages.result,
          copy("Cleaner temporal input for downstream estimation", "후단 추정을 위한 더 정확한 시간 입력"),
          copy(
            "The pipeline now supplies temporally coherent scans for SLAM evaluation. Quantitative map-quality claims remain pending a controlled comparison.",
            "파이프라인은 SLAM 평가에 시간적으로 일관된 스캔을 제공합니다. 지도 품질의 정량 수치는 통제된 비교 실험 후 제시할 예정입니다.",
          ),
          "clock",
          copy("Aligned scan timeline prepared for controlled SLAM comparison", "통제된 SLAM 비교를 위해 정렬된 스캔 시간축"),
          copy("The verified result is corrected timing; map-quality measurement is the next experiment.", "검증된 결과는 시간 보정이며, 지도 품질 측정은 다음 실험입니다."),
        ),
      ],
    },
    {
      id: "hardware-trigger-sync",
      eyebrow: copy("03 · Hardware Synchronization", "03 · 하드웨어 동기화"),
      title: copy(
        "Giving Camera and IMU One Shared Clock",
        "카메라와 IMU에 하나의 공통 시계를",
      ),
      summary: copy(
        "Built an STM32 timing master that triggers a camera and timestamps IMU data on the same 1 MHz clock.",
        "STM32를 timing master로 사용해 카메라 trigger와 IMU 데이터를 동일한 1 MHz clock에 기록했습니다.",
      ),
      tags: ["STM32", "Hardware trigger", "IMU", "Rust", "ICP"],
      metrics: [
        {
          label: copy("Verified camera rate", "검증된 카메라 주기"),
          value: copy("30.00 Hz", "30.00 Hz"),
          context: copy("447 frames / 14.87 s", "447 frames / 14.87 s"),
        },
        {
          label: copy("Master clock", "Master clock"),
          value: copy("1 MHz", "1 MHz"),
          context: copy("100 μs trigger pulse", "100 μs trigger pulse"),
        },
      ],
      steps: [
        storyStep(
          "trigger-problem",
          stages.problem,
          copy("Software timestamps could not prove simultaneity", "소프트웨어 타임스탬프로는 동시성을 증명할 수 없었습니다"),
          copy(
            "Camera frames and inertial samples passed through different drivers and queues. Host arrival time could not tell when both sensors observed the world.",
            "카메라 프레임과 관성 데이터는 서로 다른 드라이버와 큐를 통과합니다. Host 도착 시각만으로 두 센서가 세상을 관측한 순간을 알 수 없습니다.",
          ),
          "trigger",
          copy("Unsynchronized camera and IMU timelines", "동기화되지 않은 카메라와 IMU 시간축"),
          copy("Different software paths introduce variable latency.", "서로 다른 소프트웨어 경로에는 가변 지연이 생깁니다."),
        ),
        storyStep(
          "trigger-evidence",
          stages.evidence,
          copy("The measurement needed a common hardware event", "공통 하드웨어 이벤트가 필요했습니다"),
          copy(
            "The camera supports external triggering and the IMU exposes a data-ready signal. Both can be observed directly by a microcontroller clock.",
            "카메라는 외부 trigger를, IMU는 data-ready 신호를 지원합니다. 두 신호 모두 마이크로컨트롤러 clock으로 직접 관측할 수 있습니다.",
          ),
          "trigger",
          copy("Camera trigger and IMU data-ready lines entering a timing controller", "Timing controller에 연결된 카메라 trigger와 IMU data-ready 선"),
          copy("The physical signals establish an observable timing boundary.", "물리 신호가 관측 가능한 시간 경계를 만듭니다."),
        ),
        storyStep(
          "trigger-decision",
          stages.decision,
          copy("Make the microcontroller the timing authority", "마이크로컨트롤러를 시간 기준으로 삼았습니다"),
          copy(
            "An STM32 generates the 30 Hz camera pulse and captures IMU events against one 1 MHz timer, avoiding cross-device host-clock assumptions.",
            "STM32가 30 Hz 카메라 pulse를 생성하고 IMU 이벤트를 하나의 1 MHz timer로 캡처해, 장치별 host clock 가정을 제거했습니다.",
          ),
          "trigger",
          copy("STM32 timing master connected to camera and IMU", "카메라와 IMU에 연결된 STM32 timing master"),
          copy("One hardware timer timestamps both sensing streams.", "하나의 하드웨어 timer가 두 센서 스트림을 기록합니다."),
        ),
        storyStep(
          "trigger-implementation",
          stages.implementation,
          copy("Bridge voltage, packets, and estimation", "전압·패킷·추정 파이프라인을 연결했습니다"),
          copy(
            "A 3.3 V to 1.8 V interface protects the camera input. COBS framing with CRC transports timestamps from C firmware to a Rust host, and IMU-seeded ICP tooling prepares the downstream comparison.",
            "3.3 V에서 1.8 V로 변환하는 회로로 카메라 입력을 보호했습니다. C firmware에서 생성한 timestamp는 COBS와 CRC를 거쳐 Rust host로 전달되고, IMU-seeded ICP 도구로 후단 비교를 준비했습니다.",
          ),
          "trigger",
          copy("Voltage interface, COBS and CRC packet path, and ICP consumer", "전압 변환, COBS/CRC 패킷, ICP consumer 경로"),
          copy("The chain preserves timing from the electrical edge to the host record.", "전기 신호의 edge부터 host 기록까지 timing을 보존합니다."),
        ),
        storyStep(
          "trigger-result",
          stages.result,
          copy("The physical trigger rate is verified", "물리 trigger 주기를 검증했습니다"),
          copy(
            "A real slave-camera test captured 447 frames in 14.87 seconds, measuring 30.00 Hz. The synchronized-versus-unsynchronized motion report is the remaining validation step.",
            "실제 slave camera 시험에서 14.87초 동안 447프레임, 30.00 Hz를 확인했습니다. 동기화 전후 motion 비교 보고서는 남은 검증 단계입니다.",
          ),
          "trigger",
          copy("Verified 30 hertz trigger trace with pending downstream comparison", "검증된 30 Hz trigger trace와 예정된 후단 비교"),
          copy("Measured output: 447 frames over 14.87 seconds, or 30.00 Hz.", "측정 결과는 14.87초 동안 447프레임, 30.00 Hz입니다."),
        ),
      ],
    },
    {
      id: "amr-calibration",
      eyebrow: copy("04 · Production Calibration", "04 · 생산 캘리브레이션"),
      title: copy(
        "Automating Sensor Calibration for a New Industrial AMR",
        "신규 산업용 AMR의 센서 캘리브레이션 자동화",
      ),
      summary: copy(
        "Estimated LiDAR-to-LiDAR SE(2) alignment from wall geometry and had it running on the robots inside a week.",
        "벽면 기하로 LiDAR 간 SE(2) 정렬을 추정하고, 일주일 안에 로봇에서 동작하게 만들었습니다.",
      ),
      tags: ["SE(2)", "RANSAC", "PCA", "Huber loss", "Rapid response"],
      metrics: [
        {
          label: copy("Problem to deployed tool", "문제 인식에서 적용까지"),
          value: copy("Under a week", "1주 이내"),
          context: copy("Diagnosis, estimator, and on-robot workflow", "진단, 추정기, on-robot workflow"),
        },
      ],
      steps: [
        {
          id: "calibration-problem",
          label: stages.problem,
          title: copy("Manual alignment did not scale with production", "수동 정렬은 생산 규모로 확장되지 않았습니다"),
          body: copy(
            "A new AMR used multiple range sensors whose relative pose affected navigation. One sensor is mounted upside down with an uncertain yaw, so its returns land off the wall that the reference sensor measures correctly. Manual adjustment made repeatability depend on operator judgment.",
            "신규 AMR은 여러 거리 센서의 상대 pose가 내비게이션에 영향을 줍니다. 한 센서는 뒤집혀 장착되고 yaw가 불확실해, 기준 센서가 정확히 관측하는 벽에서 벗어난 점을 반환합니다. 수동 조정에서는 반복성이 작업자의 판단에 의존했습니다.",
          ),
          media: {
            kind: "image",
            src: "/media/amr-calibration/two-lidar-setup.webp",
            alt: copy(
              "Top-down view of two range sensors on one robot, where the reference beams end on the wall and the uncalibrated beams end short of it",
              "한 로봇의 두 거리 센서를 위에서 본 그림으로, 기준 센서의 빔은 벽에 닿고 미보정 센서의 빔은 벽에 못 미쳐 끝납니다",
            ),
            caption: copy(
              "The unknown is a planar transform: yaw and two translations between the sensors.",
              "미지수는 두 센서 사이의 평면 변환, 즉 yaw와 두 방향의 이동입니다.",
            ),
          },
        },
        {
          id: "calibration-evidence",
          label: stages.evidence,
          title: copy("Walls provide a stable geometric reference", "벽면을 안정적인 기하 기준으로 사용했습니다"),
          body: copy(
            "RANSAC removes clutter and extracts wall candidates, and PCA estimates each wall direction and normal from the inlier points. Measuring each point's residual along that normal turns the misalignment into a quantity an SE(2) correction can minimize.",
            "RANSAC으로 주변 clutter를 제거해 벽 후보를 추출하고, PCA로 inlier point의 벽 방향과 normal을 추정했습니다. 각 점의 residual을 그 normal 방향으로 재면, 정렬 오차가 SE(2) 보정으로 최소화할 수 있는 양이 됩니다.",
          ),
          media: {
            kind: "image",
            src: "/media/amr-calibration/wall-residual-se2.webp",
            alt: copy(
              "Wall points from a reference sensor, the same points measured off the wall before correction, and those points landing on the wall after a planar transform",
              "기준 센서가 관측한 벽 점, 보정 전 벽에서 벗어난 같은 점, 그리고 평면 변환 후 벽 위에 놓인 점들",
            ),
            caption: copy(
              "Each residual is measured perpendicular to the wall, so the fit has a physical meaning.",
              "각 residual을 벽에 수직으로 측정해, 적합 결과가 물리적인 의미를 갖습니다.",
            ),
          },
        },
        {
          id: "calibration-result",
          label: stages.result,
          title: copy("From problem to working tool in under a week", "문제 인식에서 동작하는 도구까지 일주일 이내"),
          body: copy(
            "From recognizing the misalignment to a working on-robot tool took under a week. The same procedure converges on different robots, not just the one it was tuned on.",
            "정렬 문제를 인지하고 로봇에서 동작하는 도구를 만들기까지 일주일이 걸리지 않았습니다. 같은 절차가 튜닝한 한 대에서만이 아니라 서로 다른 로봇에서 동일하게 수렴합니다.",
          ),
          media: {
            kind: "image",
            src: "/media/amr-calibration/wall-alignment-before-after.webp",
            alt: copy(
              "Wall scans from two range sensors on two robots, separated into two lines before calibration and overlapping as one line after",
              "두 로봇에서 두 거리 센서로 측정한 벽 스캔으로, 캘리브레이션 전에는 두 선으로 갈라지고 후에는 하나의 선으로 겹칩니다",
            ),
            caption: copy(
              "Two robots, before and after, one week after the problem surfaced.",
              "문제가 드러나고 일주일 뒤, 두 대의 로봇에서 얻은 캘리브레이션 전후입니다.",
            ),
          },
        },
      ],
    },
    {
      id: "camera-iqc-uncertainty",
      eyebrow: copy("05 · Measurement Variation", "05 · 측정 산포"),
      title: copy(
        "Tracing Camera Inspection Disputes Back to the Fixture",
        "카메라 검사 판정 충돌의 원인을 지그에서 찾기",
      ),
      summary: copy(
        "Treated conflicting tray-camera verdicts as a question about variation in the measurement setup, then measured how much of it came from remounting.",
        "Tray camera 판정 충돌을 측정 환경의 산포 문제로 보고, 그중 재장착에서 오는 산포가 얼마인지 측정했습니다.",
      ),
      tags: ["Measurement variation", "Remount study", "Fixture design", "IQC"],
      metrics: [
        {
          label: copy("Conflicting decisions", "상충 판정"),
          value: copy("52", "52"),
          context: copy("Across two inspection sites", "두 검사 지점 간"),
        },
        {
          label: copy("Retest reversals", "재검 판정 전환"),
          value: copy("32 / 116", "32 / 116"),
          context: copy("Fail to pass", "Fail에서 pass로"),
        },
      ],
      steps: [
        storyStep(
          "uncertainty-problem",
          stages.problem,
          copy("The same camera received different verdicts", "같은 카메라가 서로 다른 판정을 받았습니다"),
          copy(
            "Supplier and factory inspections disagreed on 52 units. In a 116-unit retest, 32 units moved from fail to pass, so the disagreement could not be explained by the cameras alone.",
            "공급사와 공장 검사에서 52대의 판정이 달랐습니다. 116대 재검에서는 32대가 fail에서 pass로 바뀌었고, 이 불일치를 카메라만으로는 설명할 수 없었습니다.",
          ),
          "uncertainty",
          copy("Supplier and factory decision split for camera inspection", "카메라 검사에서 공급사와 공장 판정이 갈리는 모습"),
          copy("Observed evidence: 52 conflicts and 32 reversals among 116 retests.", "관측 근거: 52건의 충돌과 116대 중 32대의 판정 전환."),
        ),
        storyStep(
          "uncertainty-decision",
          stages.decision,
          copy("Ask how much the setup itself varies", "측정 환경 자체의 산포를 먼저 물었습니다"),
          copy(
            "A verdict near the specification limit only means something if the measurement repeats. Rather than judging the cameras, I looked at the inspection fixture as a source of variation in its own right.",
            "규격 경계의 판정은 측정이 재현될 때만 의미가 있습니다. 카메라를 판정하기 전에, 검사 지그 자체를 하나의 산포 원인으로 보고 접근했습니다.",
          ),
          "uncertainty",
          copy("Inspection fixture treated as a measured source of variation", "산포 원인으로 다루어지는 검사 지그"),
          copy("The fixture is part of the measurement, not a neutral background.", "지그는 중립적인 배경이 아니라 측정의 일부입니다."),
        ),
        storyStep(
          "uncertainty-implementation",
          stages.implementation,
          copy("Measure the spread that remounting adds", "재장착이 만드는 산포를 측정했습니다"),
          copy(
            "Repeatedly removing and remounting the same camera produced a spread that belonged to the fixture, not to the part. Running this across sensor sizes showed the spread depended on how each size seated.",
            "같은 카메라를 반복해서 탈거하고 재장착하면, 부품이 아니라 지그에서 비롯된 산포가 나타납니다. 이를 센서 크기별로 수행하자 산포가 각 크기의 안착 방식에 따라 달라졌습니다.",
          ),
          "uncertainty",
          copy("Repeated remount measurements spreading by sensor size", "센서 크기별로 벌어지는 반복 재장착 측정"),
          copy("Remount spread separates fixture behavior from part behavior.", "재장착 산포는 지그의 거동과 부품의 거동을 분리합니다."),
        ),
        storyStep(
          "uncertainty-result",
          stages.result,
          copy("The fixture changed, not the verdict threshold", "판정 기준이 아니라 지그를 바꿨습니다"),
          copy(
            "The remount study identified seating as a real contributor to the disagreement and led to an improvement in how sensors seat in the fixture, so a borderline verdict reflects the camera rather than how it was mounted.",
            "재장착 실험으로 안착이 판정 불일치의 실제 원인 중 하나임을 확인했고, 센서가 지그에 안착하는 방식을 개선했습니다. 경계 판정이 장착 방식이 아니라 카메라 자체를 반영하게 됐습니다.",
          ),
          "uncertainty",
          copy("Improved fixture seating narrowing the remount spread", "안착 개선으로 좁아진 재장착 산포"),
          copy("The outcome is a steadier fixture, reached by measuring it.", "결과는 측정을 통해 도달한 더 안정적인 지그입니다."),
        ),
      ],
    },
    {
      id: "sensor-integration",
      eyebrow: copy("06 · Sensor Integration", "06 · 센서 통합"),
      title: copy(
        "Owning the Sensor Stack of Three Robots at Once",
        "세 대의 로봇 센서 스택을 동시에 전담하기",
      ),
      summary: copy(
        "Sole sensor owner for a serving robot, an industrial AMR, and a humanoid platform, all running in parallel.",
        "서빙로봇, 산업용 AMR, 휴머노이드 플랫폼을 동시에 진행하며 센서를 단독으로 담당했습니다.",
      ),
      tags: ["Bring-up", "URDF / TF", "Extrinsics", "Factory test", "Field reliability"],
      metrics: [
        {
          label: copy("Platforms owned in parallel", "동시 전담 플랫폼"),
          value: copy("3", "3"),
          context: copy("Serving robot, industrial AMR, humanoid", "서빙로봇, 산업용 AMR, 휴머노이드"),
        },
        {
          label: copy("As the only sensor engineer", "단독 담당 기간"),
          value: copy("17 months", "17개월"),
          context: copy("No second sensor engineer on the programs", "해당 과제에 다른 센서 엔지니어 없음"),
        },
      ],
      steps: [
        storyStep(
          "integration-problem",
          stages.problem,
          copy("Three programs needed a sensor owner at the same time", "세 과제가 동시에 센서 담당자를 필요로 했습니다"),
          copy(
            "A serving robot, an industrial AMR, and a humanoid platform each needed their full sensing stack defined, mounted, calibrated, and kept working. The three schedules overlapped and there was no second sensor engineer to split them with.",
            "서빙로봇, 산업용 AMR, 휴머노이드 플랫폼 각각이 센서 구성, 장착, 캘리브레이션, 유지까지 필요로 했습니다. 세 일정이 겹쳤고, 나눠 맡을 다른 센서 엔지니어는 없었습니다.",
          ),
          "integration",
          copy("Three platform schedules running across one another rather than in sequence", "순차가 아니라 서로 겹쳐 진행되는 세 플랫폼 일정"),
          copy("The three programs overlap rather than follow one another.", "세 과제는 순차가 아니라 서로 겹쳐 진행됐습니다."),
        ),
        storyStep(
          "integration-decision",
          stages.decision,
          copy("Carry one lifecycle instead of three backlogs", "세 개의 업무 목록이 아니라 하나의 생애주기로 다뤘습니다"),
          copy(
            "Rather than treating each platform as a separate queue of tickets, I worked the same lifecycle on all three: bring-up, URDF and TF, calibration, factory validation, then field reliability. What I learned closing one stage on one robot transferred directly to the next.",
            "플랫폼마다 별도의 티켓 목록으로 다루지 않고, 세 대 모두에 같은 생애주기를 적용했습니다. Bring-up, URDF·TF, 캘리브레이션, 공장 검증, 필드 신뢰성 순입니다. 한 로봇에서 한 단계를 닫으며 얻은 것이 다음 로봇에 그대로 옮겨갔습니다.",
          ),
          "integration",
          copy("One shared lifecycle applied across the three platforms", "세 플랫폼에 공통으로 적용한 하나의 생애주기"),
          copy("A shared lifecycle is what makes three platforms tractable alone.", "공통 생애주기가 있어야 세 플랫폼을 혼자 감당할 수 있습니다."),
        ),
        storyStep(
          "integration-result",
          stages.result,
          copy("Every platform reached its shipping milestone", "세 플랫폼 모두 출하 기준에 도달했습니다"),
          copy(
            "Depth, ToF, RGB, and range sensing were integrated on each robot and carried through to factory test and field operation, including a humanoid configuration delivered under a hard shipment deadline.",
            "각 로봇에 depth, ToF, RGB, 거리 센서를 통합해 공장 검사와 현장 운용까지 연결했습니다. 여기에는 촉박한 출하 일정 아래 완성한 휴머노이드 sensor configuration이 포함됩니다.",
          ),
          "integration",
          copy("Lifecycle stages closed on each of the three platforms", "세 플랫폼에서 각각 닫힌 생애주기 단계"),
          copy("Each platform closed the same lifecycle, not just the parts that were easy.", "각 플랫폼이 쉬운 부분만이 아니라 같은 생애주기를 끝까지 닫았습니다."),
        ),
      ],
    },
  ],
  projects: [
    {
      id: "pedestrian-calibration",
      title: copy(
        "Camera Calibration from Pedestrians",
        "보행자 기반 카메라 캘리브레이션",
      ),
      summary: copy(
        "Used pedestrians as vertical line features to calibrate CCTV cameras where artificial markers were unavailable.",
        "인공 marker를 설치하기 어려운 CCTV 환경에서 보행자를 수직선 feature로 사용했습니다.",
      ),
      outcome: copy(
        "RANSAC and MSAC handled real-world outliers and improved calibration accuracy by 82% over the ICPR 2021 baseline.",
        "RANSAC과 MSAC으로 실제 영상의 이상치에 대응해 ICPR 2021 baseline 대비 정확도를 82% 향상했습니다.",
      ),
      tags: ["Camera calibration", "RANSAC", "MSAC", "Geometry"],
      media: [
        {
          kind: "image",
          src: "/media/pedestrian-calibration/calibration-pipeline.webp",
          alt: copy(
            "Pipeline diagram running from pose estimation and line segment extraction into sampling, parameter estimation, triangulation, and evaluation",
            "자세 추정과 선분 추출에서 샘플링, 파라미터 추정, 삼각측량, 평가로 이어지는 파이프라인 다이어그램",
          ),
          caption: copy(
            "Pedestrians become line segments, then a sampling loop solves for the camera.",
            "보행자를 선분으로 만든 뒤, 샘플링 반복으로 카메라를 추정합니다.",
          ),
        },
        {
          kind: "image",
          src: "/media/pedestrian-calibration/line-segments-before-after.webp",
          alt: copy(
            "Two frames of the same street, where the first is covered in stray outlier curves and the second keeps one clean segment per pedestrian",
            "같은 거리의 두 장면으로, 첫 번째는 이상치 곡선으로 덮여 있고 두 번째는 보행자마다 하나의 선분만 남아 있습니다",
          ),
          caption: copy(
            "Outlier rejection leaves one usable segment per pedestrian.",
            "이상치를 걸러내면 보행자마다 쓸 수 있는 선분 하나가 남습니다.",
          ),
        },
      ],
    },
    {
      id: "lidar-mot",
      title: copy(
        "Multi-Object Tracking with a 2D LiDAR",
        "2D LiDAR 기반 다중 객체 추적",
      ),
      summary: copy(
        "Tracked multiple moving objects using range scans alone, without relying on camera appearance.",
        "카메라의 외형 정보 없이 거리 스캔만으로 여러 이동 객체를 추적했습니다.",
      ),
      outcome: copy(
        "DBSCAN formed observations, an EKF estimated motion state, and the Hungarian algorithm associated detections across frames.",
        "DBSCAN으로 관측을 만들고 EKF로 motion state를 추정하며 Hungarian algorithm으로 프레임 간 객체를 연결했습니다.",
      ),
      tags: ["DBSCAN", "EKF", "Hungarian", "MOT"],
      media: [
        {
          kind: "video",
          src: "/media/lidar-mot/range-tracking.webm",
          mp4Src: "/media/lidar-mot/range-tracking.mp4",
          poster: "/media/lidar-mot/range-tracking-poster.jpg",
          alt: copy(
            "Driving footage beside a range-scan view where tracked objects keep a box and an identifier as the vehicle moves",
            "주행 영상 옆에 거리 스캔 화면이 있고, 차량이 움직이는 동안 추적된 객체가 박스와 식별자를 유지합니다",
          ),
          caption: copy(
            "Each track keeps its identifier from frame to frame as the vehicle moves.",
            "차량이 움직이는 동안 각 track이 프레임 간 식별자를 유지합니다.",
          ),
        },
      ],
    },
  ],
  experience: [
    {
      id: "compact-service",
      platform: copy("New Compact Service Robot", "신규 소형 서빙로봇"),
      role: copy("End-to-end sensor stack owner", "센서 스택 전 과정 담당"),
      summary: copy(
        "Depth, ToF, RGB, and LiDAR bring-up through calibration, factory validation, and field reliability.",
        "Depth, ToF, RGB, LiDAR bring-up부터 캘리브레이션, 공장 검증, 필드 신뢰성까지 담당했습니다.",
      ),
    },
    {
      id: "industrial-amr",
      platform: copy("New Industrial AMR", "신규 산업용 AMR"),
      role: copy("Multi-sensor integration and production calibration", "다중 센서 통합 및 생산 캘리브레이션"),
      summary: copy(
        "Integrated the sensing stack from prototype to a production hardware upgrade and automated geometric calibration.",
        "Prototype부터 생산용 하드웨어 개선까지 센서 스택을 통합하고 기하 캘리브레이션을 자동화했습니다.",
      ),
    },
    {
      id: "humanoid-platform",
      platform: copy("Humanoid Robot Platform", "휴머노이드 로봇 플랫폼"),
      role: copy("Sensor-system bring-up and calibration", "센서 시스템 bring-up 및 캘리브레이션"),
      summary: copy(
        "Established a shipment-ready range and depth sensing configuration under a short critical schedule.",
        "짧은 핵심 일정에서 출하 가능한 거리·깊이 센서 configuration을 구축했습니다.",
      ),
    },
  ],
  research: [
    {
      id: "camera-calibration-research",
      title: copy(
        "Accurate and Robust Surveillance Camera Calibration using Pedestrians",
        "보행자를 이용한 정확하고 강건한 감시 카메라 캘리브레이션",
      ),
      summary: copy(
        "Marker-free camera parameter estimation from pedestrian line segments perpendicular to the ground plane.",
        "지면에 수직인 보행자 line segment를 이용한 marker-free 카메라 파라미터 추정 연구입니다.",
      ),
      result: copy(
        "Improved accuracy by 82% over the ICPR 2021 baseline under real CCTV conditions.",
        "실제 CCTV 조건에서 ICPR 2021 baseline 대비 정확도를 82% 향상했습니다.",
      ),
      tags: ["Camera calibration", "Multiple-view geometry", "RANSAC / MSAC"],
    },
    {
      id: "lidar-mot-research",
      title: copy(
        "LiDAR-based Multi-Object Tracking in Autonomous Driving",
        "자율주행 환경의 LiDAR 기반 다중 객체 추적",
      ),
      summary: copy(
        "A range-only tracking pipeline combining spatial clustering, recursive state estimation, and global data association.",
        "공간 군집화, 재귀 상태 추정, 전역 데이터 연결을 결합한 거리 센서 기반 추적 파이프라인입니다.",
      ),
      result: copy(
        "Implemented DBSCAN observations, EKF tracks, and Hungarian assignment as an end-to-end MOT system.",
        "DBSCAN 관측, EKF track, Hungarian 할당을 end-to-end MOT 시스템으로 구현했습니다.",
      ),
      tags: ["2D LiDAR", "Multi-Object Tracking", "EKF"],
    },
  ],
  publications: [
    {
      id: "mot-trends",
      title: "Trends in Multiple Object Tracking (MOT) Technology",
      venue: copy(
        "Journal of the Institute of Control, Robotics and Systems",
        "제어로봇시스템학회 논문지",
      ),
      contribution: copy("First author", "제1저자"),
    },
    {
      id: "nerf-viewpoint",
      title:
        "Viewpoint Selection Technique Based on Distance-Entropy for Accurate 3D Reconstruction in NeRF",
      venue: copy("Journal of the Robotics Society", "로봇학회 논문지"),
      contribution: copy("Co-author", "공동저자"),
      recognition: copy("Best Paper Award", "우수논문상"),
    },
  ],
  skills: [
    {
      id: "space",
      title: copy("Spatial Calibration", "공간 캘리브레이션"),
      skills: ["SE(2) / SE(3)", "RANSAC", "PCA", "URDF / TF", "OpenCV", "Open3D"],
    },
    {
      id: "time",
      title: copy("Temporal Alignment", "시간 정렬"),
      skills: ["Hardware Trigger", "Device Time", "Clock Drift", "Deskewing", "STM32"],
    },
    {
      id: "quality",
      title: copy("Sensor Quality", "센서 품질"),
      skills: ["IQC", "Measurement Variation", "Remount Study", "Root Cause Analysis", "Reliability"],
    },
    {
      id: "perception",
      title: copy("Perception", "인지"),
      skills: ["2D LiDAR", "RGB-D", "EKF", "Multi-Object Tracking", "ROS 2"],
    },
  ],
};
