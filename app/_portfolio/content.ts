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
      "I own robot sensors end to end: bring-up, calibration, factory inspection, field failures. When a measurement goes wrong the cause is usually upstream of the sensor, in a timestamp, an index, or a fixture that shifts. I have been the only sensor engineer on three commercial robot platforms.",
      "로봇 센서를 처음부터 끝까지 담당합니다. Bring-up, 캘리브레이션, 공장 검사, 현장 장애까지. 측정이 틀어졌을 때 원인은 대개 센서보다 위에 있습니다. 타임스탬프, 인덱스, 혹은 흔들리는 지그입니다. 상용 로봇 세 대에서 센서를 맡은 유일한 엔지니어였습니다.",
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
        "Yaw Jitter Down 82% on a Low-Cost LiDAR",
        "저가형 LiDAR의 Yaw 지터를 82% 줄이기",
      ),
      summary: copy(
        "Stationary scans swung 0.378°. The cause was in the timestamps and the angle indexing, not the sensor. A fixed angular grid plus a per-beam EKF brought it to 0.067°.",
        "정지 상태 스캔이 0.378° 흔들렸습니다. 원인은 센서가 아니라 타임스탬프와 각도 인덱싱이었습니다. 고정 각도 그리드와 빔별 EKF로 0.067°까지 내렸습니다.",
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
            "400개 각도 bin으로 나눠 인덱스 i가 항상 같은 물리 방향을 가리키게 했습니다. 그 위에 빔마다 독립적인 1차원 EKF를 뒀습니다. 빔들은 노이즈 원인을 공유하지 않기 때문입니다.",
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
            "빔마다 자기 불확도에 맞춘 Mahalanobis gate를 둡니다. gate를 통과하지 못한 측정은 버립니다. 급출현 장애물은 그대로 통과합니다. 연속 거부가 쌓이면 gate가 리셋되기 때문입니다.",
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
      eyebrow: copy("02 · Production Calibration", "02 · 생산 캘리브레이션"),
      title: copy(
        "LiDAR-to-LiDAR Calibration, Built in a Week",
        "일주일 만에 만든 LiDAR 간 캘리브레이션",
      ),
      summary: copy(
        "One LiDAR sat upside down with an unknown yaw offset, so its returns missed the wall the reference sensor hit. Estimated the SE(2) offset from wall geometry and had the tool running on robots in under a week.",
        "한 LiDAR가 뒤집혀 장착되고 yaw 오프셋을 몰라, 기준 센서가 맞히는 벽을 빗나갔습니다. 벽면 기하로 SE(2) 오프셋을 추정해 일주일 안에 로봇에서 도구를 돌렸습니다.",
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
            "RANSAC이 clutter에서 벽 후보를 뽑습니다. PCA가 각 벽의 방향과 normal을 줍니다. 모든 점을 그 normal 방향으로 재면 정렬 오차가 최소화할 수 있는 수치가 됩니다.",
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
          title: copy("Under a week, and it transfers", "일주일 이내, 그리고 다른 로봇에도"),
          body: copy(
            "Diagnosis to a working on-robot tool took under a week: capture, estimate, validate, save. The same procedure converges on robots it was never tuned against.",
            "진단부터 로봇에서 동작하는 도구까지 일주일이 걸리지 않았습니다. 수집, 추정, 검증, 저장까지 포함해서입니다. 같은 절차가 튜닝하지 않은 로봇에서도 수렴합니다.",
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
      eyebrow: copy("03 · Measurement Variation", "03 · 측정 산포"),
      title: copy(
        "52 Cameras, Two Verdicts",
        "카메라 52대, 두 개의 판정",
      ),
      summary: copy(
        "The supplier passed 52 cameras the factory failed. Retesting 116 units flipped 32 from fail to pass. Remounting the same camera showed the jig was moving the result, so the jig changed.",
        "공급사가 통과시킨 52대를 공장이 불합격시켰습니다. 116대를 재검하니 32대가 fail에서 pass로 바뀌었습니다. 같은 카메라를 다시 장착해 보니 지그가 결과를 흔들고 있었고, 지그를 바꿨습니다.",
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
            "규격 경계의 판정은 재현성만큼만 신뢰할 수 있습니다. 검사 지그를 그 자체로 산포 원인으로 보고 파고들었습니다.",
          ),
          "uncertainty",
          copy("Inspection fixture treated as a measured source of variation", "산포 원인으로 다루어지는 검사 지그"),
          copy("The fixture is one of the things being measured.", "지그도 측정 대상 중 하나입니다."),
        ),
        storyStep(
          "uncertainty-implementation",
          stages.implementation,
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
            "안착이 판정 불일치의 실제 원인 중 하나로 확인돼 지그를 개선했습니다. 이제 경계 판정은 카메라를 반영합니다.",
          ),
          "uncertainty",
          copy("Improved fixture seating narrowing the remount spread", "안착 개선으로 좁아진 재장착 산포"),
          copy("The outcome is a steadier fixture, reached by measuring it.", "결과는 측정을 통해 도달한 더 안정적인 지그입니다."),
        ),
      ],
    },
    {
      id: "sensor-integration",
      eyebrow: copy("04 · Sensor Integration", "04 · 센서 통합"),
      title: copy(
        "Three Robots, One Sensor Engineer",
        "로봇 세 대, 센서 엔지니어 한 명",
      ),
      summary: copy(
        "Serving robot, industrial AMR, humanoid. Overlapping schedules, 17 months, sole sensor owner on all three.",
        "서빙로봇, 산업용 AMR, 휴머노이드. 겹치는 일정, 17개월, 세 대 모두 단독 담당.",
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
          copy("Three programs, one of me", "세 개의 과제, 한 명"),
          copy(
            "Three robots each needed a full sensing stack: parts chosen, mounted, calibrated, kept alive in the field. The schedules overlapped. There was no second sensor engineer.",
            "로봇 세 대가 각각 완전한 센서 스택을 필요로 했습니다. 부품 선정, 장착, 캘리브레이션, 현장 유지까지입니다. 일정은 겹쳤습니다. 다른 센서 엔지니어는 없었습니다.",
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
            "세 대 모두에 같은 다섯 단계를 적용했습니다. Bring-up, URDF·TF, 캘리브레이션, 공장 검증, 필드 신뢰성입니다. 한 번 닫은 단계는 다음 로봇에서 훨씬 싸게 닫혔습니다.",
          ),
          "integration",
          copy("One shared lifecycle applied across the three platforms", "세 플랫폼에 공통으로 적용한 하나의 생애주기"),
          copy("Five stages, applied three times.", "다섯 단계를 세 번 적용했습니다."),
        ),
        storyStep(
          "integration-implementation",
          stages.implementation,
          copy("Build the interface that was missing", "없던 접점을 직접 만들기"),
          copy(
            "Sensor mounting geometry lived with mechanical engineering and reached software late, or not at all. I opened a standing channel between the two teams. Its field-of-view and mounting-position documents became the specification the rest of us cite.",
            "센서 장착 기하는 기구팀에 있었고 소프트웨어에는 늦게 오거나 아예 오지 않았습니다. 두 팀 사이에 상시 채널을 열었습니다. 거기서 나온 FOV·장착 위치 문서가 다른 팀이 인용하는 스펙이 됐습니다.",
          ),
          "integration",
          copy("A shared channel between software and mechanical engineering feeding one specification", "하나의 스펙으로 모이는 소프트웨어와 기구팀 사이의 공용 채널"),
          copy("Mounting geometry now arrives as a document, not a question.", "장착 기하가 질문이 아니라 문서로 옵니다."),
        ),
        storyStep(
          "integration-result",
          stages.result,
          copy("All three shipped", "세 대 모두 출하됐습니다"),
          copy(
            "Depth, ToF, RGB, and range sensing integrated on each robot and carried through factory test into field operation, including a humanoid configuration finished against a hard shipment date.",
            "세 로봇에 depth, ToF, RGB, 거리 센서를 통합해 공장 검사와 현장 운용까지 연결했습니다. 촉박한 출하 일정에 맞춘 휴머노이드 configuration도 포함됩니다.",
          ),
          "integration",
          copy("Lifecycle stages closed on each of the three platforms", "세 플랫폼에서 각각 닫힌 생애주기 단계"),
          copy("Same five stages closed on each of the three.", "세 대 각각에서 같은 다섯 단계를 닫았습니다."),
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
        "실제 영상에서 나오는 이상치를 RANSAC과 MSAC으로 흡수했습니다. 몸이 잘린 사람, 겹친 무리, 반사입니다. 양 끝점이 깨끗한 보행자만 쓸 수 있습니다.",
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
        "카메라 외형 정보 없이 거리 스캔만으로 여러 이동 객체를 추적했습니다. DBSCAN이 관측을 만들고, EKF가 motion state를 유지하고, Hungarian algorithm이 프레임을 연결했습니다.",
      ),
      outcome: copy(
        "Range gives you a centroid and nothing else. No colour, no texture, no box to re-identify by. Identity has to come from motion alone.",
        "거리 센서가 주는 것은 centroid뿐입니다. 색도, 질감도, 다시 알아볼 박스도 없습니다. 식별은 움직임만으로 만들어야 합니다.",
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
        "Depth, ToF, RGB, and LiDAR from bring-up to factory validation and field reliability.",
        "Depth, ToF, RGB, LiDAR를 bring-up부터 공장 검증과 필드 신뢰성까지 담당했습니다.",
      ),
    },
    {
      id: "industrial-amr",
      platform: copy("New Industrial AMR", "신규 산업용 AMR"),
      role: copy("Multi-sensor integration and production calibration", "다중 센서 통합 및 생산 캘리브레이션"),
      summary: copy(
        "Carried the sensing stack from prototype through a production hardware upgrade, and automated the geometric calibration.",
        "센서 스택을 prototype부터 생산용 하드웨어 개선까지 끌고 가며 기하 캘리브레이션을 자동화했습니다.",
      ),
    },
    {
      id: "humanoid-platform",
      platform: copy("Humanoid Robot Platform", "휴머노이드 로봇 플랫폼"),
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
