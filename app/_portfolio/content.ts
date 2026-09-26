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
      "I own robot sensors end to end: bring-up, calibration, factory inspection, field failures. I have been the robot sensor engineer on three commercial robot platforms.",
      "로봇에 센서를 올리고 끝까지 책임지는 엔지니어 입니다.. Bring-up부터 캘리브레이션, 공장 검사, 현장 장애 대응까지 합니다. 상용 로봇 세 종의 센서를 맡은 경험이 있습니다.",
    ),
    email: "studychanho0717@gmail.com",
  },
  site: {
    headline: {
      line1: copy("Bring-up", "센서의"),
      line2: copy("to", "시작부터"),
      line3: copy("Deploy..", "끝까지."),
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
      description: copy(
        "{count} cases where a sensor problem became a measurable engineering decision.",
        "로봇 양산 과정에 참여하며 해결한 센서 관{count}가지 사례입니다.",
      ),
    },
    projects: {
      heading: copy("Project Index", "프로젝트"),
      description: copy(
        "Platform breadth and research foundations behind the featured work.",
        "주요 작업을 뒷받침하는 플랫폼 경험과 연구 기반입니다.",
      ),
    },
    experience: {
      heading: copy("Experience", "경험"),
      description: copy(
        "One sensor lifecycle, carried from the first integration to field reliability.",
        "센서 인터그레이션 부터 필드 신뢰성까지 하나의 센서 생애주기로 다뤄습니다.",
      ),
    },
    research: {
      heading: copy("Research", "연구"),
      description: copy(
        "Geometry and tracking research that shaped how I reason about sensor.",
        "센서를 해석하는 방식을 만든 기하와 추적 연구입니다.",
      ),
    },
    about: {
      heading: copy("How I Work", "일하는 방식"),
      description: copy(
        "I make sensor behavior observable, find the physical cause, and leave a process that another engineer can repeat.",
        "센서 동작을 관측 가능하게 만들고 물리적 원인을 찾은 뒤, 다른 엔지니어도 반복할 수 있는 프로세스를 남깁니다.",
      ),
    },
    lifecycle: ["BRING-UP", "CALIBRATE", "VALIDATE", "PRODUCE", "RELIABILITY"],
    principles: [
      {
        number: "01",
        label: "MEASURE",
        text: copy("Start with observable evidence", "관측 가능한 근거에서 시작"),
      },
      {
        number: "02",
        label: "MODEL",
        text: copy("Match the model to the physics", "물리 현상에 맞는 모델 선택"),
      },
      {
        number: "03",
        label: "SHIP",
        text: copy("Turn the fix into a repeatable tool", "반복 가능한 도구로 완성"),
      },
    ],
    publicationsHeading: copy("Selected writing", "주요 논문"),
    contact: {
      eyebrow: copy(
        "Open to the next hard sensor problem",
        "다음 어려운 센서 문제를 기다립니다",
      ),
      headline: copy(
        "Let’s make the signal trustworthy.",
        "신뢰할 수 있는 신호를 함께 만듭시다.",
      ),
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
      title: copy(
        "Three Robots, One Sensor Engineer",
        "로봇 세 대, 한명의 센서 엔지니어",
      ),
      summary: copy(
        "Serving robot, industrial AMR, humanoid. Overlapping schedules, 17 months, sole sensor owner on all three.",
        "서빙로봇, 산업용 AMR, 휴머노이드. 시작부터 끝까지 담당한 로봇들.",
      ),
      tags: ["Bring-up", "URDF / TF", "Linux interfaces", "Factory test", "Field reliability"],
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
          copy("Three programs, one of me", "세 개의 과제, 한 명"),
          copy(
            "Three robots each needed a full sensing stack: parts chosen, mounted, calibrated, kept alive in the field. The schedules overlapped. There was no second sensor engineer.",
            "로봇 세 대가 저마다 완전한 센서 스택을 필요로 했습니다. 부품을 고르고 붙이고 캘리브레이션하고 현장에서 유지하는 일까지 있었습니다. 일정은 겹쳤고 나눠 맡을 다른 센서 엔지니어는 없었습니다.",
          ),
          "integration",
          copy("Three platform schedules drawn on one time axis, overlapping in the middle", "하나의 시간축에 그린 세 플랫폼 일정으로, 가운데 구간이 겹칩니다"),
          copy("The three programs run across one another.", "세 과제가 서로 겹쳐 진행됩니다."),
        ),
        storyStep(
          "integration-decision",
          stages.decision,
          copy("One lifecycle, three robots", "하나의 생애주기, 세 대의 로봇"),
          copy(
            "I ran the same five stages on all three: bring-up, URDF and TF, calibration, factory validation, field reliability. Closing a stage once made closing it on the next robot cheap.",
            "세 대 모두에 같은 다섯 단계를 돌렸습니다. Bring-up, URDF·TF, 캘리브레이션, 공장 검증, 필드 신뢰성 순입니다. 한 로봇에서 한 단계를 끝내 놓으면 다음 로봇에서는 훨씬 빨리 끝났습니다.",
          ),
          "integration",
          copy("One shared lifecycle applied across the three platforms", "세 플랫폼에 공통으로 적용한 하나의 생애주기"),
          copy("Five stages, applied three times.", "다섯 단계를 세 번 적용했습니다."),
        ),
        storyStep(
          "integration-result",
          stages.result,
          copy("All three shipped", "세 대 모두 출하됐습니다"),
          copy(
            "RGB-D, LiDAR and RGB sensing integrated on each robot and carried through factory test into field operation. Integration meant the whole path: URDF and TF, runtime calibration, point-cloud filters, static addressing for the Ethernet LiDARs, and USB enumeration and power settings for the cameras that kept dropping out.",
            "세 로봇에 RGB-D, LiDAR, RGB 센서를 통합해 공장 검사와 현장 운용까지 연결했습니다. 통합이라고 하면 이 경로 전부를 말합니다. URDF·TF, runtime calibration, 포인트클라우드 필터, Ethernet LiDAR의 static addressing, 자꾸 끊기던 카메라의 USB enumeration과 전원 설정이 여기 들어갑니다.",
          ),
          "integration",
          copy("Lifecycle stages closed on each of the three platforms", "세 플랫폼에서 각각 닫힌 생애주기 단계"),
          copy("Same five stages closed on each of the three.", "세 대 각각에서 같은 다섯 단계를 닫았습니다."),
        ),
      ],
    },
    {
      id: "lidar-stability",
      eyebrow: copy("02 · Measurement Stability", "02 · 측정 안정화"),
      title: copy(
        "Yaw Jitter Down 82% on a Low-Cost LiDAR",
        "저가형 LiDAR의 Yaw 지터를 82% 줄이기",
      ),
      summary: copy(
        "Stationary scans swung 0.378°. The cause was in the timestamps and the angle indexing, not the sensor. A fixed angular grid plus a per-beam EKF brought it to 0.067°.",
        "정지 상태 스캔이 0.378° 흔들렸습니다. 원인은 센서가 아니라 타임스탬프와 각도 인덱싱이었습니다. 고정 각도 그리드와 빔별 EKF로 0.067°까지 내렸습니다.",
      ),
      tags: ["2D LiDAR", "EKF", "Mahalanobis gating", "ROS 1"],
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
            "The robot was parked and the whole scan still rocked as one rigid shape. Each range reading looked plausible on its own, so nothing flagged a fault. Navigation saw the room moving.",
            "로봇은 정지해 있는데 스캔 전체가 하나의 강체처럼 흔들렸습니다. 개별 거리값은 그럴듯해서 어디서도 결함으로 잡히지 않았습니다. 내비게이션은 공간이 움직인다고 인식했습니다.",
          ),
          media: {
            kind: "image",
            src: "/media/lidar-stability/scan-excursion-as-is.webp",
            alt: copy(
              "Every scan of a stationary wall corner drawn on top of one another, where the wall appears as a thick smeared band many pixels wide",
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
          copy("Three suspects, one culprit", "용의자 셋, 범인 하나"),
          copy(
            "Diagnostic playback separated publish time, angle wrapping, and beam order. The motion followed the assembled scan. The individual ranges stayed put. Pinning the angular grid alone dropped yaw variation to 0.166°.",
            "진단 재생으로 publish time, angle wrapping, 빔 순서를 분리했습니다. 움직임은 조립된 스캔을 따라갔습니다. 개별 거리값은 제자리에 있었습니다. 각도 그리드만 고정해도 yaw 변동이 0.166°로 떨어졌습니다.",
          ),
          "lidar",
          copy("Diagnostic comparison of timestamps and wrapped scan angles", "타임스탬프와 래핑된 스캔 각도 진단 비교"),
          copy("A fixed angle grid lowered yaw variation to 0.166°.", "고정 각도 그리드에서 yaw 변동이 0.166°로 줄었습니다."),
        ),
        storyStep(
          "lidar-decision",
          stages.decision,
          copy("Fix the geometry first, then estimate", "기하를 먼저 고정하고 추정하기"),
          copy(
            "400 angular bins, so index i always means the same physical direction. Then one independent 1-D EKF per beam, because the beams do not share a noise source.",
            "400개 각도 bin으로 나눠 인덱스 i가 항상 같은 물리 방향을 가리키게 했습니다. 그 위에 빔마다 독립적인 1차원 EKF를 뒀습니다. 빔끼리 노이즈 원인이 다르니 따로 추정하는 편이 맞습니다.",
          ),
          "lidar",
          copy("Fixed 400-bin angular grid feeding per-beam EKF filters", "400-bin 고정 각도 그리드와 빔별 EKF 구조"),
          copy("The estimator works on consistent angular observations.", "일관된 각도 관측값 위에서 추정기가 동작합니다."),
        ),
        {
          id: "lidar-implementation",
          label: stages.implementation,
          title: copy("Gate the outliers, keep the real motion", "이상치는 막고 실제 움직임은 통과"),
          body: copy(
            "Each beam carries a Mahalanobis gate sized to its own uncertainty. Readings that fail the gate are dropped. A sudden obstacle still gets through, because the gate resets on a run of rejections.",
            "빔마다 자기 불확도에 맞춘 Mahalanobis gate를 둡니다. gate를 통과하지 못한 측정은 버립니다. 그래도 갑자기 나타난 장애물은 그대로 통과합니다. 거부가 연달아 쌓이면 gate를 리셋하기 때문입니다.",
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
              "91 scans, unfiltered left, filtered right.",
              "91회 스캔, 왼쪽 필터링 전, 오른쪽 필터링 후.",
            ),
          },
        },
        {
          id: "lidar-result",
          label: stages.result,
          title: copy("0.378° → 0.067°", "0.378° → 0.067°"),
          body: copy(
            "Yaw standard deviation: 0.378° to 0.067°. Range noise on a stationary target: 4.1 mm to 1.3 mm. Stack every scan of the same wall and the smear shrinks from 3,273 pixels to 977 across 91 scans.",
            "Yaw 표준편차 0.378° → 0.067°. 정지 표적 거리 노이즈 4.1 mm → 1.3 mm. 같은 벽의 모든 스캔을 겹치면 번짐이 91회 스캔에서 3,273픽셀에서 977픽셀로 줄어듭니다.",
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
      id: "amr-calibration",
      eyebrow: copy("03 · Production Calibration", "03 · 생산 캘리브레이션"),
      title: copy(
        "LiDAR-to-LiDAR Extrinsic Calibration Method That Reached the Production Line",
        "라이다-라이다 캘리브레이션: 문제 주도를 통해 생산에 적용한 사례",
      ),
      summary: copy(
        "One LiDAR sat upside down with an unknown yaw offset, so its returns missed the wall the reference sensor hit. Estimated the offset from wall geometry and put the method on the production line.",
        "LiDAR 하나가 뒤집혀 달렸는데 yaw 오프셋을 알 수 없었습니다. 그래서 기준 센서가 제대로 맞히는 벽을 이 센서만 빗나갔습니다. 벽면 기하로 오프셋을 추정해 그 방법을 생산 라인에 올렸습니다.",
      ),
      tags: ["RANSAC", "PCA", "Huber loss", "Production", "On-robot workflow"],
      metrics: [
        {
          label: copy("Alignment criterion", "정렬 기준"),
          value: copy("Measurable residual", "측정 가능한 residual"),
          context: copy("Replaced operator judgment", "작업자 판단을 대체"),
        },
      ],
      steps: [
        {
          id: "calibration-problem",
          label: stages.problem,
          title: copy("Manual alignment did not scale", "수동 정렬은 확장되지 않았습니다"),
          body: copy(
            "Two range sensors, one mounted upside down, yaw offset unknown. Its returns land short of the wall the reference sensor measures correctly. Every fix was an operator turning a value by eye.",
            "거리 센서 두 개 중 하나가 뒤집혀 장착되고 yaw 오프셋을 모릅니다. 기준 센서가 정확히 재는 벽에서 그 센서의 점만 벗어납니다. 보정은 매번 작업자가 눈으로 값을 돌리는 일이었습니다.",
          ),
          media: {
            kind: "image",
            src: "/media/amr-calibration/two-lidar-setup.webp",
            alt: copy(
              "Top-down view of two range sensors on one robot, where the reference beams end on the wall and the uncalibrated beams end short of it",
              "한 로봇의 두 거리 센서를 위에서 본 그림으로, 기준 센서의 빔은 벽에 닿고 미보정 센서의 빔은 벽에 못 미쳐 끝납니다",
            ),
            caption: copy(
              "The unknown is a planar transform: yaw and two translations.",
              "미지수는 평면 변환, 즉 yaw와 두 방향의 이동입니다.",
            ),
          },
        },
        {
          id: "calibration-evidence",
          label: stages.evidence,
          title: copy("A wall is a good ruler", "벽은 좋은 자입니다"),
          body: copy(
            "RANSAC pulls wall candidates out of the clutter. PCA gives each wall a direction and a normal. Measure every point along that normal and the misalignment becomes a number to minimize.",
            "RANSAC이 clutter에서 벽 후보를 뽑고, PCA가 각 벽의 방향과 normal을 줍니다. 모든 점을 그 normal 방향으로 재면 정렬 오차를 줄여야 할 하나의 수치로 다룰 수 있습니다.",
          ),
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
          title: copy("It transfers to robots it never saw", "처음 보는 로봇에서도 수렴합니다"),
          body: copy(
            "Capture, estimate, validate, save: one on-robot workflow that runs where the robot is built. It replaced alignment by operator judgment with a residual anyone can read, and converges on robots it was never tuned against.",
            "수집, 추정, 검증, 저장을 하나의 on-robot workflow로 묶어 로봇이 만들어지는 자리에서 돌립니다. 작업자 판단에 의존하던 정렬을 누구나 읽을 수 있는 residual로 바꿨고 튜닝하지 않은 로봇에서도 수렴합니다.",
          ),
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
      title: copy(
        "26% of the CPU Was Sorting Points Nobody Needed",
        "CPU의 26%는 아무도 필요로 하지 않는 정렬이었습니다",
      ),
      summary: copy(
        "Three depth camera processes were eating the robot's CPU. Profiling put the cost inside PCL VoxelGrid's sort, and a sort-free downsampling pass gave 26% back.",
        "depth 카메라 프로세스 세 개가 로봇 CPU를 잡아먹고 있었습니다. 프로파일링해 보니 비용은 PCL VoxelGrid의 정렬에 몰려 있었고 정렬 없는 downsampling으로 바꿔 CPU 26%를 되찾았습니다.",
      ),
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
          copy("Three cameras, and the CPU had nothing left", "카메라 셋, 그리고 남지 않은 CPU"),
          copy(
            "Each depth camera ran its own downsampling stage. On a robot that also has to navigate, three of them together left little headroom for anything else.",
            "depth 카메라마다 자체 downsampling 단계를 돌렸습니다. 주행까지 해야 하는 로봇에서 셋이 합쳐지니 다른 일에 쓸 여유가 거의 없었습니다.",
          ),
          "runtime",
          copy("Three camera processes competing for the same CPU budget", "같은 CPU 예산을 두고 경쟁하는 세 개의 카메라 프로세스"),
          copy("The cost scales with the number of cameras, not with the scene.", "비용이 장면이 아니라 카메라 대수에 비례해 늘어납니다."),
        ),
        {
          id: "rgbd-evidence",
          label: stages.evidence,
          title: copy("The cost was in a sort, not in the filtering", "비용은 필터링이 아니라 정렬에 있었습니다"),
          body: copy(
            "Profiling the pipeline on the robot put the time inside PCL VoxelGrid. Its implementation sorts the points to group them into voxels, and that sort, not the downsampling itself, was the expensive part.",
            "로봇에서 파이프라인을 프로파일링해 보니 시간이 PCL VoxelGrid에 몰려 있었습니다. 이 구현은 점들을 voxel로 묶으려고 정렬을 하는데 비싼 쪽은 downsampling이 아니라 바로 그 정렬이었습니다.",
          ),
          media: {
            kind: "image",
            src: "/media/rgbd-pipeline/voxelgrid-sort-as-is.webp",
            tone: "light",
            alt: copy(
              "Diagram of the existing path: points in a voxel grid are copied out into a flat list, reordered by voxel index with arrows crossing each other, grouped, and only then averaged into one point per voxel",
              "기존 경로를 그린 도식입니다. voxel 그리드의 점들을 평평한 목록으로 꺼낸 뒤 화살표가 서로 엇갈리며 voxel 인덱스 순으로 재배열하고, 묶은 다음에야 voxel당 한 점으로 평균을 냅니다",
            ),
            caption: copy(
              "The reordering in the middle is the whole cost. The two ends are what the pipeline actually needs.",
              "가운데 재배열이 비용의 전부입니다. 파이프라인이 실제로 필요로 하는 것은 양쪽 끝뿐입니다.",
            ),
          },
        },
        {
          id: "rgbd-implementation",
          label: stages.implementation,
          title: copy("Accumulate in place, in one pass", "제자리에서, 한 번에 누적하기"),
          body: copy(
            "Each point is accumulated into the voxel it already sits in. Nothing is copied into a list, nothing is reordered, and one pass is enough. The voxel keeps a running sum and a count, so the centroid falls out at the end.",
            "점을 이미 속해 있는 voxel에서 바로 누적합니다. 목록으로 복사하지도, 재배열하지도 않고 한 번만 순회합니다. voxel마다 합과 개수만 들고 있으면 끝에가서 중심점이 바로 나옵니다.",
          ),
          media: {
            kind: "image",
            src: "/media/rgbd-pipeline/voxelgrid-sortfree-to-be.webp",
            tone: "light",
            alt: copy(
              "Diagram of the replacement: points stay in the voxel grid and are averaged in place inside each cell, giving the same one point per voxel with no list and no reordering",
              "교체한 경로를 그린 도식입니다. 점들은 voxel 그리드에 그대로 남아 각 칸 안에서 바로 평균이 되고, 목록도 재배열도 없이 voxel당 한 점이라는 같은 결과가 나옵니다",
            ),
            caption: copy(
              "Same first frame, same last frame. The middle step is gone.",
              "첫 장면도 마지막 장면도 같습니다. 가운데 단계가 없어졌을 뿐입니다.",
            ),
          },
        },
        storyStep(
          "rgbd-result",
          stages.result,
          copy("26% back across the three cameras", "세 카메라 합산 CPU 26% 반환"),
          copy(
            "Measured on the robot with all three camera processes running. The downsampled cloud going downstream is the same, so the saving costs nothing anywhere else in the pipeline.",
            "세 카메라 프로세스를 모두 돌린 상태로 로봇에서 측정했습니다. 후단으로 가는 downsampled cloud는 그대로라 파이프라인 다른 곳에서 치르는 대가가 없습니다.",
          ),
          "cpu",
          copy(
            "Bar chart of the three camera processes' combined CPU, normalised: the PCL VoxelGrid path at 100% and the sort-free pass at 74%",
            "세 카메라 프로세스 합산 CPU를 정규화해 그린 막대그래프입니다. PCL VoxelGrid 경로가 100%, 정렬 없는 경로가 74%입니다",
          ),
          copy(
            "Normalised against the before figure. What was measured is the 26%.",
            "적용 전을 100%로 두고 그렸습니다. 측정한 값은 26%입니다.",
          ),
        ),
      ],
    },
    {
      id: "camera-iqc-uncertainty",
      eyebrow: copy("05 · Measurement System", "05 · 측정 시스템"),
      title: copy(
        "52 Cameras, Two Verdicts",
        "카메라 52대, 두 개의 판정",
      ),
      summary: copy(
        "The supplier passed 52 cameras the factory failed. Retesting 116 units flipped 32 from fail to pass. Measured the inspection setup itself and traced the disagreement to how the fixture seats each sensor size.",
        "공급사가 통과시킨 52대를 공장이 불합격시켰습니다. 116대를 재검하니 32대가 fail에서 pass로 바뀌었습니다. 검사 환경 자체를 측정해 불일치의 원인을 센서 크기별 지그 안착으로 좁혔습니다.",
      ),
      tags: ["Measurement system analysis", "Measurement variation", "Remount study", "Fixture design"],
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
          copy("The same camera got two answers", "같은 카메라가 두 개의 답을 받았습니다"),
          copy(
            "52 units where supplier and factory disagreed. A 116-unit retest moved 32 from fail to pass. Those numbers do not come from the cameras.",
            "공급사와 공장의 판정이 갈린 52대가 있었습니다. 116대 재검에서 32대가 fail에서 pass로 바뀌었습니다. 이 수치는 카메라에서 나오는 값이 아닙니다.",
          ),
          "uncertainty",
          copy("Supplier and factory decision split for camera inspection", "카메라 검사에서 공급사와 공장 판정이 갈리는 모습"),
          copy("Observed evidence: 52 conflicts and 32 reversals among 116 retests.", "관측 근거: 52건의 충돌과 116대 중 32대의 판정 전환."),
        ),
        storyStep(
          "uncertainty-decision",
          stages.decision,
          copy("Measure the setup before judging the part", "부품을 판정하기 전에 측정 환경을 재기"),
          copy(
            "A verdict at the specification edge is only as good as its repeatability. I went after the inspection fixture as a source of spread in its own right.",
            "규격 경계의 판정은 같은 측정을 다시 해도 같은 답이 나올 때만 의미가 있습니다. 그래서 검사 지그를 그 자체로 산포 원인으로 보고 파고들었습니다.",
          ),
          "uncertainty",
          copy("Inspection fixture treated as a measured source of variation", "산포 원인으로 다루어지는 검사 지그"),
          copy("The fixture is one of the things being measured.", "지그도 측정 대상 중 하나입니다."),
        ),
        storyStep(
          "uncertainty-evidence",
          stages.evidence,
          copy("Remount the same camera, over and over", "같은 카메라를 반복해서 다시 장착하기"),
          copy(
            "Take one camera off the jig, put it back, measure. Repeat. The spread that shows up belongs to the fixture. Run it across sensor sizes and the spread changes with how each size seats.",
            "카메라 하나를 지그에서 떼고 다시 얹어 측정합니다. 반복합니다. 이때 나오는 산포는 지그의 것입니다. 센서 크기별로 돌리면 크기마다 안착 방식에 따라 산포가 달라집니다.",
          ),
          "uncertainty",
          copy("Repeated remount measurements spreading by sensor size", "센서 크기별로 벌어지는 반복 재장착 측정"),
          copy("Same camera, repeated remounts, one spread per sensor size.", "같은 카메라, 반복 재장착, 센서 크기별 산포."),
        ),
        storyStep(
          "uncertainty-result",
          stages.result,
          copy("The jig changed, not the threshold", "기준이 아니라 지그를 바꿨습니다"),
          copy(
            "Seating turned out to be a real contributor to the disagreement, and the fixture was improved. A borderline verdict now reflects the camera.",
            "안착이 판정 불일치의 실제 원인 중 하나로 확인돼 지그를 고쳤습니다. 이제 경계에 걸린 판정은 장착 상태가 아니라 카메라 자체를 말해 줍니다.",
          ),
          "uncertainty",
          copy("Improved fixture seating narrowing the remount spread", "안착 개선으로 좁아진 재장착 산포"),
          copy("The outcome is a steadier fixture, reached by measuring it.", "재 보고 고친 만큼 지그가 안정됐습니다."),
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
        "Calibrated CCTV cameras with no checkerboard, using pedestrians as vertical line segments. Accuracy improved 82% over the ICPR 2021 baseline.",
        "Checkerboard 없이 보행자를 수직 선분으로 써서 CCTV 카메라를 캘리브레이션했습니다. ICPR 2021 baseline 대비 정확도를 82% 올렸습니다.",
      ),
      outcome: copy(
        "RANSAC and MSAC absorb the outliers real footage produces: partial bodies, groups, reflections. A pedestrian is only usable when both endpoints are clean.",
        "실제 영상에서 나오는 이상치를 RANSAC과 MSAC으로 흡수했습니다. 몸이 잘린 사람, 겹쳐 선 무리, 유리에 비친 상 같은 것들입니다. 양 끝점이 깨끗하게 잡힌 보행자만 씁니다.",
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
        "Tracked several moving objects from range scans alone, no camera appearance. DBSCAN formed the observations, an EKF held the motion state, the Hungarian algorithm linked frames.",
        "카메라 외형 정보 없이 거리 스캔만으로 여러 이동 객체를 추적했습니다. DBSCAN이 관측을 만들고 EKF가 motion state를 유지하고 Hungarian algorithm이 프레임을 연결했습니다.",
      ),
      outcome: copy(
        "Range gives you a centroid and nothing else. No colour, no texture, no box to re-identify by. Identity has to come from motion alone.",
        "거리 센서가 주는 것은 centroid뿐입니다. 색도, 질감도, 다시 알아볼 박스도 없습니다. 결국 움직임만 보고 같은 객체인지 가려내야 합니다.",
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
      platform: copy("Compact Service Robot", "소형 서빙로봇"),
      role: copy("End-to-end sensor stack owner", "센서 스택 전 과정 담당"),
      summary: copy(
        "Depth, ToF, RGB, and LiDAR from bring-up to factory validation and field reliability.",
        "Depth, ToF, RGB, LiDAR를 bring-up부터 공장 검증과 필드 신뢰성까지 담당했습니다.",
      ),
    },
    {
      id: "industrial-amr",
      platform: copy("Industrial AMR", "산업용 AMR"),
      role: copy("Multi-sensor integration and production calibration", "다중 센서 통합 및 생산 캘리브레이션"),
      summary: copy(
        "Carried the sensing stack from prototype through a production hardware upgrade, and automated the geometric calibration.",
        "센서 스택을 prototype부터 생산용 하드웨어 개선까지 끌고 가며 기하 캘리브레이션을 자동화했습니다.",
      ),
    },
    {
      id: "humanoid-platform",
      platform: copy("Humanoid Platform", "휴머노이드 플랫폼"),
      role: copy("Sensor-system bring-up and calibration", "센서 시스템 bring-up 및 캘리브레이션"),
      summary: copy(
        "Built a shipment-ready range and depth configuration against a hard date.",
        "촉박한 일정에 맞춰 출하 가능한 거리·깊이 센서 configuration을 구축했습니다.",
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
        "지면에 수직인 보행자 선분으로 marker 없이 카메라 파라미터를 추정했습니다.",
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
      id: "pedestrian-calibration-paper",
      title: "Robust and Accurate Camera Calibration from Pedestrians",
      venue: copy("IEEE Access, under review", "IEEE Access, 심사 중"),
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
      skills: ["Measurement Variation", "Fixture Design", "IQC", "Root Cause Analysis"],
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
