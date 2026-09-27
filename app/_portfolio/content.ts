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
  // Turn a section off here and it leaves the page, the nav and the numbering.
  sections: {
    work: true,
    projects: true,
    experience: false,
    research: true,
    about: false,
  },
  // Switch a block off here and it leaves the page. Copy for it stays put.
  elements: {
    heroEyebrow: true,
    heroChips: false,
    heroActions: false,
    heroScrollHint: true,
    caseTags: true,
    caseMetrics: true,
    lifecycle: true,
    principles: false,
    publications: true,
    skills: true,
  },
  profile: {
    name: "Chan-ho Seo",
    role: copy("Robotics Sensor Engineer", "로보틱스 센서 엔지니어"),
    headline: copy(
      "RIGHT PLACE. RIGHT TIME. TRUSTED DATA.",
      "정확한 공간. 정확한 시간. 신뢰할 수 있는 데이터.",
    ),
    introduction: copy("Sensor engineer responsible for the sensors that go on every robot the company builds. Has covered the full path of putting a sensor on a robot, from integration on a new platform through incoming quality control (IQC), calibration, pipeline optimization, interface stability, and field issues after deployment.", "회사의 모든 로봇에 들어가는 센서를 담당하는 센서 엔지니어입니다. 신규 로봇의 센서 통합을 시작으로 IQC(incoming quality control), 캘리브레이션, 파이프라인 최적화, 연결 안정성, 배포 이후의 현장 이슈까지 로봇에 센서를 붙이는 전 과정을 거쳤습니다."),
    email: "studychanho0717@gmail.com",
  },
  site: {
    // The hero shows the first metric of each case named here. Drop an id and
    // that metric leaves the hero; empty the list and the band goes with it.
    heroMetrics: [],
    headline: {
      line1: copy("BRING-UP", "센서의"),
      line2: copy("TO", "시작부터"),
      line3: copy("DEPLOY", "끝까지."),
    },
    functions: [
      copy("Robotics SW", "로보틱스 SW"),
      copy("Mechanical", "기구"),
      copy("Factory", "공장"),
      copy("Field", "필드"),
    ],
    actions: {
      work: copy("Explore selected work", "주요 작업 보기"),
      email: copy("Email me", "이메일 보내기"),
    },
    work: {
      heading: copy("Selected Work", "주요 작업"),
      /* {count} is filled from featured.length so the number cannot go stale. */
      description: copy("{count} cases where sensor problems became measurable engineering improvements.", "센서 문제를 측정하고 원인을 찾아 실제 개선으로 연결한 {count}가지 사례입니다."),
    },
    projects: {
      heading: copy("Project Index", "프로젝트"),
      description: copy("Platform experience and research that support the featured engineering work.", "주요 엔지니어링 작업을 뒷받침하는 플랫폼 경험과 연구입니다."),
    },
    experience: {
      heading: copy("Experience", "경험"),
      description: copy("Sensor systems carried from first integration through production validation and field reliability.", "센서 통합부터 생산 검증과 필드 신뢰성까지 이어진 경험입니다."),
    },
    research: {
      heading: copy("Research", "연구"),
      description: copy("Research in geometry and tracking that shaped how I approach sensor problems.", "센서 문제를 바라보는 기반이 된 기하와 추적 연구입니다."),
    },
    about: {
      heading: copy("How I Work", "일하는 방식"),
      description: copy("I make sensor behavior measurable, trace issues to their physical cause, and turn fixes into repeatable processes.", "센서 동작을 측정 가능한 형태로 만들고 물리적 원인을 찾아 반복 가능한 프로세스로 정리합니다."),
    },
    lifecycle: ["BRING-UP", "CALIBRATE", "VALIDATE", "PRODUCE", "RELIABILITY"],
    principles: [
      {
        number: "01",
        label: "MEASURE",
        text: copy("Start with measurable evidence", "측정 가능한 근거에서 시작"),
      },
      {
        number: "02",
        label: "MODEL",
        text: copy("Match the model to the physics", "물리 현상에 맞는 모델 선택"),
      },
      {
        number: "03",
        label: "SHIP",
        text: copy("Turn the fix into a repeatable process", "해결책을 반복 가능한 프로세스로 완성"),
      },
    ],
    publicationsHeading: copy("Selected writing", "주요 논문"),
    contact: {
      eyebrow: copy("Open to the next sensor challenge", "다음 센서 문제를 해결할 기회를 찾고 있습니다"),
      headline: copy("Let’s make sensor data trustworthy.", "신뢰할 수 있는 센서 데이터를 만듭니다."),
      backToTop: copy("Back to top ↑", "맨 위로 ↑"),
    },
    ui: {
      readOutcome: copy("Read the outcome", "결과 보기"),
      mediaUnavailable: copy(
        "Evidence unavailable",
        "증거 자료를 불러올 수 없습니다",
      ),
      mediaUnavailableHint: copy(
        "The written finding remains available below.",
        "아래의 분석 결과는 계속 확인할 수 있습니다.",
      ),
      play: copy("Play", "재생"),
      pause: copy("Pause", "일시정지"),
    },
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
      id: "sensor-integration",
      eyebrow: copy("01 · Sensor Integration", "01 · 센서 통합"),
      title: copy("Three Robot Platforms, One Sensor Lifecycle", "세 개의 로봇 플랫폼, 하나의 센서 생애주기"),
      summary: copy("Serving robot, industrial AMR, and humanoid. Over 17 months of overlapping development, I carried the sensor stack across all three platforms from bring-up to field operation.", "서빙로봇, 산업용 AMR, 휴머노이드. 17개월간 개발 일정이 겹치는 환경에서 세 플랫폼의 센서 스택을 bring-up부터 현장 운용까지 담당했습니다."),
      tags: ["Bring-up", "URDF / TF", "Linux interfaces", "Factory test", "Field reliability"],
      metrics: [
        {
          label: copy("Platforms owned in parallel", "동시 전담 플랫폼"),
          value: copy("3", "3"),
          context: copy("Serving robot, industrial AMR, humanoid", "서빙로봇, 산업용 AMR, 휴머노이드"),
        },
        {
          label: copy("Sensor ownership period", "센서 전담 기간"),
          value: copy("17 months", "17개월"),
          context: copy("Across three concurrent platform programs", "세 플랫폼 개발 일정이 겹친 기간"),
        },
      ],
      steps: [
        storyStep(
          "integration-problem",
          stages.problem,
          copy("Three platforms, overlapping sensor work", "세 플랫폼에서 동시에 진행된 센서 작업"),
          copy("Each robot required a complete sensing stack: sensor selection, mounting, calibration, integration, and field support. With the schedules overlapping, the work needed a consistent approach that could transfer across platforms.", "세 로봇 모두 센서 선정, 장착, 캘리브레이션, 통합, 필드 대응까지 완전한 센서 스택이 필요했습니다. 일정이 겹치는 만큼 플랫폼 간에 재사용할 수 있는 일관된 접근이 필요했습니다."),
          "integration",
          copy("Three platform schedules drawn on one time axis, overlapping in the middle", "하나의 시간축에 그린 세 플랫폼 일정으로, 가운데 구간이 겹칩니다"),
          copy("Development schedules overlapped across all three platforms.", "세 플랫폼의 개발 일정이 서로 겹쳐 진행됐습니다."),
        ),
        storyStep(
          "integration-decision",
          stages.decision,
          copy("One lifecycle across three robots", "세 로봇에 공통으로 적용한 하나의 생애주기"),
          copy("I used the same five stages across all three platforms: bring-up, URDF and TF, calibration, production validation, and field reliability. Reusing the same lifecycle made each stage easier to repeat on the next robot.", "세 플랫폼 모두에 같은 다섯 단계를 적용했습니다. Bring-up, URDF·TF, 캘리브레이션, 생산 검증, 필드 신뢰성 순입니다. 같은 생애주기를 반복해 적용하면서 다음 플랫폼에서도 각 단계를 더 빠르고 일관되게 진행할 수 있었습니다."),
          "integration",
          copy("One shared lifecycle applied across the three platforms", "세 플랫폼에 공통으로 적용한 하나의 생애주기"),
          copy("Five stages, applied three times.", "다섯 단계를 세 번 적용했습니다."),
        ),
        storyStep(
          "integration-result",
          stages.result,
          copy("All three reached shipment", "세 플랫폼 모두 출하 단계까지 연결"),
          copy("RGB-D, LiDAR, and RGB sensing were integrated on each robot and carried through production validation into field operation. The work covered URDF and TF,  point-cloud filtering, Ethernet LiDAR addressing, and USB enumeration and power settings for camera stability.", "세 로봇에 RGB-D, LiDAR, RGB 센서를 통합하고 생산 검증부터 현장 운용까지 연결했습니다. URDF·TF, 포인트클라우드 필터, Ethernet LiDAR addressing, 카메라 안정성을 위한 USB enumeration과 전원 설정까지 포함했습니다."),
          "integration",
          copy("Lifecycle stages closed on each of the three platforms", "세 플랫폼에서 각각 닫힌 생애주기 단계"),
          copy("The same five-stage lifecycle was completed on each platform.", "세 플랫폼 모두에서 같은 다섯 단계의 생애주기를 완료했습니다."),
        ),
      ],
    },
    {
      id: "lidar-stability",
      eyebrow: copy("02 · Measurement Stability", "02 · 측정 안정화"),
      title: copy("Reducing LiDAR Yaw Jitter by 82%", "LiDAR Yaw 지터를 82% 줄이기"),
      summary: copy("Stabilized the scan output of a low-cost LiDAR. Diagnostic playback separated the cause into scan timing and angular indexing, and a fixed angular grid with a per-beam EKF brought it down to 0.067°.", "저가형 라이다의 스캔값 안정화를 진행했습니다. 진단 재생으로 원인을 스캔 타이밍과 각도 인덱싱으로 분리했고, 고정 각도 그리드와 빔별 EKF를 적용해 0.067°까지 줄였습니다."),
      tags: ["2D LiDAR", "EKF", "Mahalanobis gating", "ROS 1"],
      metrics: [
        {
          label: copy("Yaw standard deviation", "Yaw 표준편차"),
          value: copy("0.378° → 0.067°", "0.378° → 0.067°"),
          context: copy("Before to after filtering", "필터 적용 전후"),
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
          title: copy("The robot was still, but the scan was not", "로봇은 멈춰 있었지만 스캔은 흔들렸습니다"),
          body: copy("With the robot stationary, the entire scan oscillated as a rigid shape. Individual range values still looked plausible, so the issue only became clear when the scan geometry was observed over time.", "로봇이 정지한 상태에서도 스캔 전체가 하나의 강체처럼 흔들렸습니다. 개별 거리값은 정상적으로 보여, 시간에 따른 스캔 기하를 관찰했을 때 문제를 명확히 확인할 수 있었습니다."),
          media: {
            kind: "image",
            src: "/media/lidar-stability/scan-excursion-as-is.webp",
            alt: copy(
              "Every scan of a stationary wall corner drawn on top of one another, where the wall appears as a thick smeared band many pixels wide",
              "정지한 벽 코너의 모든 스캔을 겹쳐 그린 그림으로, 벽이 선이 아니라 두껍게 번진 띠로 나타납니다",
            ),
            caption: copy("Across 91 scans, a stationary wall occupied 3,273 measured positions.", "91회 스캔을 누적했을 때 정지한 벽이 3,273개의 위치에 걸쳐 측정됐습니다."),
          },
        },
        storyStep(
          "lidar-evidence",
          stages.evidence,
          copy("Separate the range from the scan geometry", "거리값과 스캔 기하를 분리해 확인"),
          copy("Diagnostic playback separated publish time, angle wrapping, and beam order. The apparent motion followed the assembled scan while individual ranges remained stable. Fixing the angular grid alone reduced yaw variation to 0.166°.", "진단 재생으로 publish time, angle wrapping, beam order를 분리해 확인했습니다. 흔들림은 개별 거리값보다 기존 벤더 코드가 고정된 스캔 인덱싱을 주지 않는 점에 있었습니다. 각도 그리드만 고정해도 yaw 변동이 0.166°까지 줄었습니다."),
          "lidar",
          copy("Diagnostic comparison of timestamps and wrapped scan angles", "타임스탬프와 래핑된 스캔 각도 진단 비교"),
          copy("A fixed angle grid lowered yaw variation to 0.166°.", "고정 각도 그리드에서 yaw 변동이 0.166°로 줄었습니다."),
        ),
        storyStep(
          "lidar-decision",
          stages.decision,
          copy("Stabilize the geometry before estimation", "추정 전에 스캔 기하부터 안정화"),
          copy("With the scan indexing stabilized, each beam used an independent 1-D EKF to estimate its own range state.", "스캔 인덱싱을 안정화 한 후 각 빔에 독립적인 1차원 EKF를 적용해 거리 상태를 추정했습니다."),
          "lidar",
          copy("Fixed 400-bin angular grid feeding per-beam EKF filters", "400-bin 고정 각도 그리드와 빔별 EKF 구조"),
          copy("The estimator works on consistent angular observations.", "일관된 각도 관측값 위에서 추정기가 동작합니다."),
        ),
        {
          id: "lidar-implementation",
          label: stages.implementation,
          title: copy("Reject outliers without suppressing real motion", "이상치는 제거하고 실제 움직임은 유지"),
          body: copy("Each beam used a Mahalanobis gate based on its estimated uncertainty. Outliers were rejected, while repeated rejections reset the gate so that genuine scene changes such as a new obstacle could still be accepted.", "실 장애물 감지 환경을 대응하기 위해, 각 빔의 추정 불확도에 맞춘 Mahalanobis gate로 이상치를 제거했습니다. 연속적인 rejection이 발생하면 gate를 초기화해 새로 등장한 장애물과 같은 실제 환경 변화는 다시 받아들이도록 했습니다."),
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
              "91 scans, unfiltered left, filtered right.",
              "91회 스캔, 왼쪽 필터링 전, 오른쪽 필터링 후.",
            ),
          },
        },
        {
          id: "lidar-result",
          label: stages.result,
          title: copy("0.378° → 0.067°", "0.378° → 0.067°"),
          body: copy("Yaw standard deviation fell from 0.378° to 0.067°. Range noise on a stationary target dropped from 4.1 mm to 1.3 mm. Across 91 accumulated scans, the wall footprint shrank from 3,273 pixels to 977.", "Yaw 표준편차는 0.378°에서 0.067°로 줄었고, 정지 표적의 거리 노이즈는 4.1 mm에서 1.3 mm로 감소했습니다. 91회 스캔을 누적했을 때 벽의 측정 영역도 3,273픽셀에서 977픽셀로 줄었습니다."),
          media: {
            kind: "image",
            src: "/media/lidar-stability/scan-excursion-decay.webp",
            alt: copy(
              "Two accumulated scan images of the same wall corner, where the unfiltered side spreads into a wide colored band and the filtered side stays a narrow line",
              "같은 벽 코너를 누적한 두 스캔 이미지로, 필터링 전은 넓은 색 띠로 번지고 필터링 후는 얇은 선으로 유지됩니다",
            ),
            caption: copy("Across 91 scans: 3,273 pixels before filtering, 977 after.", "91회 스캔 누적 기준으로 필터링 전 3,273픽셀, 필터링 후 977픽셀입니다."),
          },
        },
      ],
    },
    {
      id: "amr-calibration",
      eyebrow: copy("03 · Production Calibration", "03 · 생산 캘리브레이션"),
      title: copy("LiDAR-to-LiDAR Calibration for Production", "생산 환경을 위한 LiDAR-to-LiDAR 캘리브레이션"),
      summary: copy("An unknown planar offset between two LiDARs caused their wall measurements to misalign. I estimated the transform from wall geometry and packaged the method as an on-robot production workflow.", "두 LiDAR 사이의 알 수 없는 평면 offset으로 벽 측정이 서로 어긋났습니다. 벽면 기하를 이용해 변환을 추정하고, 로봇에서 바로 실행할 수 있는 생산용 workflow로 정리했습니다."),
      tags: ["RANSAC", "PCA", "Huber loss", "Production", "On-robot workflow"],
      metrics: [
        {
          label: copy("Alignment criterion", "정렬 기준"),
          value: copy("Measurable residual", "측정 가능한 residual"),
          context: copy("Converted visual alignment into a numeric criterion", "시각적 정렬을 수치 기준으로 전환"),
        },
      ],
      steps: [
        {
          id: "calibration-problem",
          label: stages.problem,
          title: copy("Turn visual alignment into a repeatable process", "시각적 정렬을 반복 가능한 절차로 전환"),
          body: copy("Two range sensors had an unknown planar offset, including yaw. Their scans did not align on the same wall, and the existing workflow relied on visual comparison. Production use required a repeatable numerical criterion.", "두 라이다 센서 간에는 yaw를 포함한 알 수 없는 평면 misalignment가 있었습니다. 같은 벽을 측정해도 스캔이 서로 어긋났고, 기존 절차는 시각적 비교에 의존했습니다. 생산 적용을 위해서는 반복 가능한 수치 기준이 필요했습니다."),
          media: {
            kind: "image",
            src: "/media/amr-calibration/two-lidar-setup.webp",
            alt: copy("Top-down view of two range sensors on one robot, where the reference beams end on the wall and the uncalibrated beams end short of it", "한 로봇의 두 라이다 센서를 위에서 본 그림으로, 기준 센서에 비해 미보정 센서의 빔이 틀어졌습니다."),
            caption: copy(
              "The unknown is a planar transform: yaw and two translations.",
              "미지수는 평면 변환, 즉 yaw와 두 방향의 이동입니다.",
            ),
          },
        },
        {
          id: "calibration-evidence",
          label: stages.evidence,
          title: copy("Use the wall as a geometric reference", "벽을 기하 기준으로 사용"),
          body: copy("RANSAC extracted wall candidates from clutter, and PCA estimated each wall direction and normal. Point-to-wall distance along the normal converted the alignment error into a residual that could be minimized.", "RANSAC으로 clutter에서 벽 후보를 추출하고 PCA로 각 벽의 방향과 normal을 계산했습니다. normal 방향의 point-to-wall distance를 사용해 정렬 오차를 최소화할 수 있는 residual로 수치화했습니다."),
          media: {
            kind: "image",
            src: "/media/amr-calibration/wall-residual-se2.webp",
            alt: copy(
              "Wall points from a reference sensor, the same points measured off the wall before correction, and those points landing on the wall after a planar transform",
              "기준 센서가 관측한 벽 점, 보정 전 벽에서 벗어난 같은 점, 그리고 평면 변환 후 벽 위에 놓인 점들",
            ),
            caption: copy(
              "Residuals measured perpendicular to the wall.",
              "벽에 수직으로 측정한 residual.",
            ),
          },
        },
        {
          id: "calibration-result",
          label: stages.result,
          title: copy("A repeatable workflow across robots", "여러 로봇에 반복 적용 가능한 workflow"),
          body: copy("Capture, estimate, validate, save: the full procedure runs on the robot where it is built. The measurable residual provides a consistent alignment criterion, and the same workflow converged on robots outside the original development set.", "수집, 추정, 검증, 저장을 하나의 on-robot workflow로 묶었습니다. 측정 가능한 residual을 일관된 정렬 기준으로 사용했고, 초기 개발 대상이 아니었던 로봇에서도 같은 절차가 수렴했습니다."),
          media: {
            kind: "image",
            src: "/media/amr-calibration/wall-alignment-before-after.webp",
            alt: copy(
              "Wall scans from two range sensors on two robots, separated into two lines before calibration and overlapping as one line after",
              "두 로봇에서 두 거리 센서로 측정한 벽 스캔으로, 캘리브레이션 전에는 두 선으로 갈라지고 후에는 하나의 선으로 겹칩니다",
            ),
            caption: copy(
              "Two robots, before and after the same procedure.",
              "같은 절차를 적용한 두 대의 로봇, 전후 비교입니다.",
            ),
          },
        },
      ],
    },
    {
      id: "rgbd-pipeline",
      eyebrow: copy("04 · Runtime Performance", "04 · 런타임 성능"),
      title: copy("Reducing Depth Processing CPU by 26%", "Depth 처리 CPU 사용량을 26% 줄이기"),
      summary: copy("Three depth-camera pipelines consumed a significant share of the robot CPU. Profiling identified point sorting inside PCL VoxelGrid as the main hotspot. A sort-free single-pass downsampling path reduced combined CPU usage by 26%.", "세 개의 depth camera pipeline이 로봇 CPU의 상당 부분을 사용하고 있었습니다. 프로파일링으로 PCL VoxelGrid 내부의 point sorting을 주요 병목으로 확인했고, 정렬 없는 single-pass downsampling으로 전체 CPU 사용량을 26% 줄였습니다."),
      tags: ["Profiling", "PCL", "Point cloud", "C++", "Runtime"],
      metrics: [
        {
          label: copy("CPU reclaimed", "CPU 절감"),
          value: copy("26%", "26%"),
          context: copy("Across three camera processes", "카메라 프로세스 3개 합산"),
        },
      ],
      steps: [
        storyStep(
          "rgbd-problem",
          stages.problem,
          copy("Three cameras left limited CPU headroom", "세 카메라를 동시에 실행할때, CPU 최적화의 주요 대상이였습니다."),
          copy("Each depth camera ran its own downsampling stage. With all three cameras active alongside navigation, their combined processing cost reduced the CPU headroom available to the rest of the system.", "각 depth camera가 독립적으로 downsampling을 수행했습니다. 세 카메라와 navigation을 동시에 실행하면 누적 처리 비용 때문에 시스템의 CPU 여유가 크게 줄었습니다."),
          "runtime",
          copy("Three camera processes competing for the same CPU budget", "같은 CPU 예산을 두고 경쟁하는 세 개의 카메라 프로세스"),
          copy("The cost scales with the number of cameras, not with the scene.", "비용이 장면이 아니라 카메라 대수에 비례해 늘어납니다."),
        ),
        {
          id: "rgbd-evidence",
          label: stages.evidence,
          title: copy("Profiling identified sorting as the main hotspot", "프로파일링으로 정렬 연산을 주요 병목으로 확인"),
          body: copy("Runtime profiling showed that much of the downsampling cost was concentrated inside PCL VoxelGrid. Points were sorted by voxel index before aggregation, making the reordering step the main optimization target.", "Runtime profiling 결과 downsampling 비용의 상당 부분이 PCL VoxelGrid 내부에 집중되어 있었습니다. voxel별 aggregation 전에 수행되는 point sorting이 주요 최적화 대상임을 확인했습니다."),
          media: {
            kind: "image",
            src: "/media/rgbd-pipeline/voxelgrid-sort-as-is.webp",
            tone: "light",
            alt: copy(
              "Diagram of the existing path: points in a voxel grid are copied out into a flat list, reordered by voxel index with arrows crossing each other, grouped, and only then averaged into one point per voxel",
              "기존 경로를 그린 도식입니다. voxel 그리드의 점들을 평평한 목록으로 꺼낸 뒤 화살표가 서로 엇갈리며 voxel 인덱스 순으로 재배열하고, 묶은 다음에야 voxel당 한 점으로 평균을 냅니다",
            ),
            caption: copy("The reordering step dominated the cost between input points and voxel centroids.", "입력 point에서 voxel centroid를 만드는 과정 중 재정렬 단계의 비용이 가장 컸습니다."),
          },
        },
        {
          id: "rgbd-implementation",
          label: stages.implementation,
          title: copy("Accumulate directly in one pass", "한 번의 순회로 voxel에 직접 누적"),
          body: copy("Each point was mapped directly to its voxel and accumulated in a single pass. Each voxel kept only a running sum and point count, allowing the centroid to be computed without a separate sort.", "각 point를 해당 voxel에 바로 매핑해 한 번의 순회로 누적했습니다. voxel마다 좌표 합과 point count만 유지해 별도의 정렬 없이 centroid를 계산했습니다."),
          media: {
            kind: "image",
            src: "/media/rgbd-pipeline/voxelgrid-sortfree-to-be.webp",
            tone: "light",
            alt: copy(
              "Diagram of the replacement: points stay in the voxel grid and are averaged in place inside each cell, giving the same one point per voxel with no list and no reordering",
              "교체한 경로를 그린 도식입니다. 점들은 voxel 그리드에 그대로 남아 각 칸 안에서 바로 평균이 되고, 목록도 재배열도 없이 voxel당 한 점이라는 같은 결과가 나옵니다",
            ),
            caption: copy("The input and output stay the same; the intermediate sort is removed.", "입력과 출력은 유지하고 중간 정렬 단계만 제거했습니다."),
          },
        },
        storyStep(
          "rgbd-result",
          stages.result,
          copy("26% lower CPU usage across three cameras", "세 카메라 합산 CPU 사용량 26% 감소"),
          copy("Measured on the robot with all three camera processes running, the new path reduced their combined CPU usage to 74% of the previous implementation.", "실제 로봇에서 세 카메라 프로세스를 모두 실행한 조건에서 합산 CPU 사용량이 기존 구현의 74% 수준으로 감소했습니다."),
          "cpu",
          copy(
            "Bar chart of the three camera processes' combined CPU, normalised: the PCL VoxelGrid path at 100% and the sort-free pass at 74%",
            "세 카메라 프로세스 합산 CPU를 정규화해 그린 막대그래프입니다. PCL VoxelGrid 경로가 100%, 정렬 없는 경로가 74%입니다",
          ),
          copy("Normalized to the previous implementation: 100% before, 74% after.", "기존 구현을 100%로 정규화했을 때 적용 후 74%로 감소했습니다."),
        ),
      ],
    },
    {
      id: "camera-iqc-uncertainty",
      eyebrow: copy("05 · Measurement System", "05 · 측정 시스템"),
      title: copy("Quantifying Variation in Camera Inspection", "카메라 검사 시스템의 산포를 정량화하기"),
      summary: copy("Inspection results varied across measurement conditions: 52 units received conflicting decisions, and 32 of 116 retested units changed from fail to pass. I measured the inspection system itself and found that re-seating increased position σ from 0.15 px to 1.8 px.", "측정 조건에 따라 검사 결과의 변동이 관찰됐습니다. 52대에서 판정이 엇갈렸고, 116대 재검에서는 32대가 fail에서 pass로 변경됐습니다. 검사 시스템 자체의 산포를 측정한 결과, 재안착만으로 위치 σ가 0.15 px에서 1.8 px까지 증가했습니다."),
      tags: ["Measurement system analysis", "Measurement uncertainty", "Repeatability study", "Fixture design"],
      metrics: [
        {
          label: copy("Inconsistent decisions", "판정 불일치"),
          value: copy("52", "52"),
          context: copy("Observed across two inspection sites", "두 검사 환경에서 관찰"),
        },
        {
          label: copy("Position spread on remount", "재안착 위치 산포"),
          value: copy("0.15 → 1.8 px", "0.15 → 1.8 px"),
          context: copy("Twelve times the baseline", "기준선의 12배"),
        },
      ],
      steps: [
        storyStep(
          "uncertainty-problem",
          stages.problem,
          copy("The same hardware did not always receive the same result", "같은 하드웨어에서도 검사 결과가 달라졌습니다"),
          copy("Inspection results differed for 52 units, and 32 of 116 retested units changed from fail to pass. This variation motivated a measurement-system study before changing the product or acceptance criteria.", "52대에서 검사 결과가 서로 달랐고, 116대 재검에서는 32대가 fail에서 pass로 변경됐습니다. 제품이나 판정 기준을 바꾸기 전에 측정 시스템이 만드는 변동부터 정량화했습니다."),
          "uncertainty",
          copy("Different inspection outcomes observed for the same camera units across two measurement settings", "동일한 카메라가 두 측정 환경에서 서로 다른 검사 결과를 보이는 모습"),
          copy("Observed evidence: 52 inconsistent decisions and 32 changes among 116 retests.", "관측 근거: 52건의 판정 불일치와 116대 재검 중 32대의 판정 변경."),
        ),
        storyStep(
          "uncertainty-decision",
          stages.decision,
          copy("Hold the part constant and measure the system", "부품은 고정하고 측정 시스템의 산포를 확인"),
          copy("A fixed sensor served as the reference while the inspection conditions were varied and repeated. With unit-to-unit variation removed, the remaining spread could be attributed to the measurement process: software, seating, and environment.", "동일한 센서를 기준물로 고정하고 검사 조건만 바꾸며 반복 측정했습니다. 센서 개체 차이를 제거한 상태에서 남는 산포를 software, seating, environment 등 측정 프로세스의 영향으로 분리했습니다."),
          "decomposition",
          copy("Measurement-system variation separated into software, seating, and environment while one sensor is held as the reference", "하나의 센서를 기준물로 고정한 상태에서 측정 시스템의 산포를 software, seating, environment로 나눈 도식"),
          copy("With the sensor held constant, the remaining spread comes from the measurement setup.", "센서를 고정하면 남는 산포는 측정 환경의 영향을 보여줍니다."),
        ),
        storyStep(
          "uncertainty-evidence",
          stages.evidence,
          copy("Four conditions, thirty repeats each", "네 가지 조건을 각각 30회 반복"),
          copy("Five sensors were tested under four conditions, with thirty measurements per condition. Recapture without remounting set the baseline; the other conditions isolated re-seating, brightness, and light colour. Each run produced seven geometric metrics.", "센서 5대를 네 가지 조건에서 각각 30회 측정했습니다. 재안착 없이 다시 촬영한 조건을 baseline으로 두고, 재안착, 밝기, 조명색의 영향을 각각 분리했습니다. 각 측정에서는 7개의 기하 지표를 추출했습니다."),
          "experiment",
          copy(
            "The four measurement conditions listed in order, recapture, remount, brightness and light colour, with the run size beneath them",
            "네 가지 측정 조건을 순서대로 나열한 목록입니다. 재캡처, 재안착, 밝기, 조명색 순이고 아래에 전체 측정 횟수가 있습니다",
          ),
          copy("600 measurements, changing one thing at a time.", "한 번에 하나씩만 바꿔 600회 측정했습니다."),
        ),
        storyStep(
          "uncertainty-result",
          stages.result,
          copy("Re-seating was the dominant source of positional variation", "재안착이 위치 산포의 주요 원인이었습니다"),
          copy("Baseline position σ remained at 0.15 px. Re-seating increased it to 1.8 px, twelve times the baseline, while brightness stayed near baseline. Light colour produced a different failure mode in which detection itself became unstable. These findings informed changes to fixture seating and the inspection procedure.", "Baseline 위치 σ는 0.15 px였고, 재안착 조건에서는 1.8 px로 기준의 12배까지 증가했습니다. 밝기 변화는 baseline 수준이었고, 조명색 변화에서는 산포 증가와 다른 형태로 검출 자체가 불안정해졌습니다. 이 결과를 바탕으로 지그 안착 방식과 검사 절차를 개선했습니다."),
          "sigma",
          copy("Bar chart of position sigma by condition: recapture and brightness near baseline, remount twelve times higher, and light colour outside the normal scale", "조건별 위치 σ 막대그래프로, 재캡처와 밝기는 baseline에 가깝고 재안착은 12배 높으며 조명색은 일반 범위를 벗어납니다"),
          copy("0.15 px at baseline versus 1.8 px after re-seating; light colour produced a separate detection failure mode.", "Baseline 0.15 px 대비 재안착 시 1.8 px였고, 조명색에서는 별도의 detection failure mode가 나타났습니다."),
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
      summary: copy("Calibrated CCTV cameras without a checkerboard by representing pedestrians as vertical line segments. Accuracy improved by 82% over the ICPR 2021 baseline.", "Checkerboard 없이 보행자를 수직 선분으로 표현해 CCTV 카메라를 캘리브레이션했습니다. ICPR 2021 baseline 대비 정확도를 82% 향상했습니다."),
      outcome: copy("RANSAC and MSAC rejected outliers caused by partial bodies, overlapping pedestrians, and reflections. Only pedestrians with reliable endpoints contributed to calibration.", "RANSAC과 MSAC으로 신체 일부 누락, 사람 간 겹침, 반사 등에서 발생한 이상치를 제거했습니다. 양 끝점이 안정적으로 검출된 보행자만 캘리브레이션에 사용했습니다."),
      tags: ["Camera calibration", "RANSAC", "MSAC", "Geometry"],
      media: [
        {
          kind: "image",
          src: "/media/pedestrian-calibration/calibration-pipeline.webp",
          alt: copy(
            "Pipeline diagram running from pose estimation and line segment extraction into sampling, parameter estimation, triangulation, and evaluation",
            "자세 추정과 선분 추출에서 샘플링, 파라미터 추정, 삼각측량, 평가로 이어지는 파이프라인 다이어그램",
          ),
          caption: copy("Pedestrians become vertical line segments, then a sampling loop estimates the camera parameters.", "보행자를 수직 선분으로 변환한 뒤 샘플링 반복으로 카메라 파라미터를 추정합니다."),
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
      summary: copy("Tracked multiple moving objects from 2D range scans without camera appearance features. DBSCAN formed observations, an EKF estimated motion state, and the Hungarian algorithm associated tracks across frames.", "카메라 appearance 정보 없이 2D 거리 스캔만으로 여러 이동 객체를 추적했습니다. DBSCAN으로 관측을 만들고, EKF로 motion state를 추정하며, Hungarian algorithm으로 프레임 간 track을 연결했습니다."),
      outcome: copy("With no colour, texture, or appearance descriptor, object identity had to be maintained from spatial position and motion alone.", "색상, 질감, appearance descriptor가 없는 환경에서 위치와 움직임만으로 객체의 identity를 유지했습니다."),
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
      platform: copy("Compact Service Robot", "소형 서빙로봇"),
      role: copy("End-to-end sensor stack owner", "센서 스택 전 과정 담당"),
      summary: copy("Depth, ToF, RGB, and LiDAR from bring-up through production validation and field reliability.", "Depth, ToF, RGB, LiDAR를 bring-up부터 생산 검증과 필드 신뢰성까지 담당했습니다."),
    },
    {
      id: "industrial-amr",
      platform: copy("Industrial AMR", "산업용 AMR"),
      role: copy("Multi-sensor integration and production calibration", "다중 센서 통합 및 생산 캘리브레이션"),
      summary: copy("Carried the sensor stack from prototype integration through production hardware updates and automated geometric calibration.", "센서 스택을 prototype 통합부터 생산용 하드웨어 업데이트까지 연결하고 기하 캘리브레이션을 자동화했습니다."),
    },
    {
      id: "humanoid-platform",
      platform: copy("Humanoid Platform", "휴머노이드 플랫폼"),
      role: copy("Sensor-system bring-up and calibration", "센서 시스템 bring-up 및 캘리브레이션"),
      summary: copy("Built and stabilized a shipment-ready range and depth sensing configuration under a compressed development schedule.", "촉박한 개발 일정 안에서 출하에 필요한 거리·깊이 센서 구성을 구축하고 안정화했습니다."),
    },
  ],
  research: [
    {
      id: "camera-calibration-research",
      title: copy(
        "Accurate and Robust Surveillance Camera Calibration using Pedestrians",
        "보행자를 이용한 정확하고 강건한 감시 카메라 캘리브레이션",
      ),
      summary: copy("Marker-free camera parameter estimation from pedestrian line segments perpendicular to the ground plane.", "지면에 수직인 보행자 선분을 이용해 marker 없이 카메라 파라미터를 추정했습니다."),
      result: copy("Improved accuracy by 82% over the ICPR 2021 baseline under real CCTV conditions.", "실제 CCTV 환경에서 ICPR 2021 baseline 대비 정확도를 82% 향상했습니다."),
      tags: ["Camera calibration", "Multiple-view geometry", "RANSAC / MSAC"],
    },
    {
      id: "lidar-mot-research",
      title: copy(
        "LiDAR-based Multi-Object Tracking in Autonomous Driving",
        "자율주행 환경의 LiDAR 기반 다중 객체 추적",
      ),
      summary: copy("A range-only tracking pipeline combining spatial clustering, recursive state estimation, and global data association.", "공간 군집화, 재귀 상태 추정, 전역 data association을 결합한 거리 센서 기반 tracking pipeline입니다."),
      result: copy("Implemented DBSCAN observations, EKF tracks, and Hungarian assignment as an end-to-end MOT system.", "DBSCAN 관측, EKF track, Hungarian assignment를 end-to-end MOT 시스템으로 구현했습니다."),
      tags: ["2D LiDAR", "Multi-Object Tracking", "EKF"],
    },
  ],
  publications: [
    {
      id: "pedestrian-calibration-paper",
      title: "Accurate and Robust Surveillance Camera Calibration using Pedestrians",
      venue: copy("M.S. thesis, Seoul National University of Science and Technology, 2025", "석사학위논문, 서울과학기술대학교, 2025"),
      contribution: copy("First author", "제1저자"),
    },
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
      skills: ["RANSAC", "MSAC", "PCA", "Huber Loss", "URDF / TF", "Multiple-View Geometry"],
    },
    {
      id: "interfaces",
      title: copy("Sensor Interfaces", "센서 인터페이스"),
      skills: ["Ethernet / IP LiDAR", "USB Enumeration", "dmesg", "aarch64", "Linux"],
    },
    {
      id: "quality",
      title: copy("Sensor Quality", "센서 품질"),
      skills: ["IQC", "Statistical Analysis"],
    },
    {
      id: "perception",
      title: copy("Perception", "인지"),
      skills: ["2D LiDAR", "RGB-D and ToF", "EKF", "Multi-Object Tracking", "DBSCAN", "Hungarian Algorithm"],
    },
    {
      id: "tools",
      title: copy("Languages and Tools", "언어와 도구"),
      skills: ["C++", "Python", "ROS 1", "OpenCV", "Open3D", "PyTorch", "Bazel", "Git", "Linux"],
    },
  ],
};
