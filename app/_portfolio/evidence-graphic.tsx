import type { EvidenceVisual } from "./model";

export function EvidenceGraphic({ visual }: { visual: EvidenceVisual }) {
  if (visual === "lidar") {
    return (
      <div className="evidence-graphic evidence-graphic--lidar">
        <div className="evidence-grid" aria-hidden="true" />
        <p className="graphic-kicker">YAW STABILITY · σ</p>
        <div className="lidar-bars">
          {[
            ["RAW", "0.378°", "100%"],
            ["FIXED GRID", "0.166°", "44%"],
            ["PER-BEAM EKF", "0.067°", "18%"],
          ].map(([label, value, width]) => (
            <div className="lidar-bar" key={label}>
              <div className="lidar-bar__label">
                <span>{label}</span><strong>{value}</strong>
              </div>
              <span className="lidar-bar__track"><i style={{ width }} /></span>
            </div>
          ))}
        </div>
        <p className="graphic-conclusion">82% lower yaw deviation · range noise 4.1 → 1.3 mm</p>
      </div>
    );
  }

  if (visual === "calibration") {
    return (
      <div className="evidence-graphic evidence-graphic--calibration">
        <div className="evidence-grid" aria-hidden="true" />
        <p className="graphic-kicker">SE(2) WALL ALIGNMENT</p>
        <div className="calibration-stage">
          <div className="scan scan--source" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
          <div className="scan scan--target" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
          <span className="wall-model">WALL MODEL</span>
          <span className="transform-badge">RANSAC → PCA → SE(2)</span>
        </div>
        <div className="graphic-result"><strong>&lt; 1</strong><span>WEEK TO ON-ROBOT TOOL</span></div>
        <p className="graphic-conclusion">Repeatable on-robot calibration replaced manual alignment</p>
      </div>
    );
  }

  if (visual === "runtime") {
    return (
      <div className="evidence-graphic evidence-graphic--runtime">
        <div className="evidence-grid" aria-hidden="true" />
        <p className="graphic-kicker">CPU · DOWNSAMPLING STAGE PER CAMERA</p>
        {/* No per-camera split is claimed: the point is that the stage repeats. */}
        <div className="lidar-bars">
          {["CAMERA 1", "CAMERA 2", "CAMERA 3"].map((label) => (
            <div className="lidar-bar" key={label}>
              <div className="lidar-bar__label">
                <span>{label}</span><strong>VOXEL GRID</strong>
              </div>
              <span className="lidar-bar__track"><i style={{ width: "100%" }} /></span>
            </div>
          ))}
        </div>
        <p className="graphic-conclusion">
          One downsampling stage per camera, on a robot that also has to navigate
        </p>
      </div>
    );
  }

  if (visual === "integration") {
    const lanes = [
      { id: "serving", label: "SERVING ROBOT", start: 0, span: 100 },
      { id: "amr", label: "INDUSTRIAL AMR", start: 24, span: 76 },
      { id: "humanoid", label: "HUMANOID", start: 58, span: 42 },
    ];
    return (
      <div className="evidence-graphic evidence-graphic--integration">
        <div className="evidence-grid" aria-hidden="true" />
        <p className="graphic-kicker">THREE PROGRAMS · ONE SENSOR OWNER</p>
        <div className="integration-lanes">
          {lanes.map((lane) => (
            <div className="integration-lane" key={lane.id}>
              <span className="integration-lane__label">{lane.label}</span>
              <span className="integration-lane__track" aria-hidden="true">
                <i style={{ left: `${lane.start}%`, width: `${lane.span}%` }} />
              </span>
            </div>
          ))}
          <span className="integration-overlap" aria-hidden="true" />
        </div>
        <div className="integration-axis" aria-hidden="true">
          <span>START</span>
          <span>17 MONTHS</span>
          <span>PRESENT</span>
        </div>
        <p className="graphic-conclusion">The programs overlap; the sensor owner does not change</p>
      </div>
    );
  }

  return (
    <div className="evidence-graphic evidence-graphic--uncertainty">
      <div className="evidence-grid" aria-hidden="true" />
      <p className="graphic-kicker">MEASUREMENT SETUP · REMOUNT SPREAD</p>
      <div className="verdict-split">
        <div><span>SITE A</span><strong>PASS</strong></div>
        <span aria-hidden="true">≠</span>
        <div><span>SITE B</span><strong>FAIL</strong></div>
      </div>
      <div className="variance-chips">
        {[
          "PART",
          "FIXTURE",
          "SEATING",
          "REMOUNT",
          "SENSOR SIZE",
        ].map((item) => <span key={item}>{item}</span>)}
      </div>
      <div className="uncertainty-results">
        <span><strong>52</strong> conflicting decisions</span>
        <span><strong>32 / 116</strong> fail → pass</span>
      </div>
      <p className="graphic-conclusion">Remount spread → seating as a source → fixture improved</p>
    </div>
  );
}
