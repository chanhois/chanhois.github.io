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

  if (visual === "clock") {
    return (
      <div className="evidence-graphic evidence-graphic--clock">
        <div className="evidence-grid" aria-hidden="true" />
        <p className="graphic-kicker">CLOCK DRIFT · 12 HOUR RUN</p>
        <div className="clock-plot">
          <span className="clock-plot__y">13 ms</span>
          <span className="clock-plot__line" aria-hidden="true" />
          <span className="clock-plot__dot" aria-hidden="true" />
          <span className="clock-plot__start">0 h</span>
          <span className="clock-plot__end">12 h</span>
        </div>
        <div className="clock-domains">
          <span>DEVICE TIME</span><i aria-hidden="true" />
          <span>HOST TIME</span>
        </div>
        <p className="graphic-conclusion">≈13 ms / 12 h · ≈0.3 ppm measured drift</p>
      </div>
    );
  }

  if (visual === "trigger") {
    return (
      <div className="evidence-graphic evidence-graphic--trigger">
        <div className="evidence-grid" aria-hidden="true" />
        <p className="graphic-kicker">SHARED HARDWARE TIMEBASE</p>
        <div className="trigger-flow">
          <div className="trigger-node trigger-node--master">
            <span>MCU</span><strong>1 MHz</strong>
          </div>
          <span className="trigger-wire" aria-hidden="true">→</span>
          <div className="trigger-stack">
            <div className="trigger-node"><span>LEVEL</span><strong>1.8 V</strong></div>
            <div className="trigger-node"><span>CAMERA</span><strong>30.00 Hz</strong></div>
            <div className="trigger-node"><span>IMU</span><strong>DATA READY</strong></div>
          </div>
        </div>
        <p className="graphic-conclusion">447 frames / 14.87 s · verified physical trigger rate</p>
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
        <div className="graphic-result"><strong>7</strong><span>PRODUCTION UNITS</span></div>
        <p className="graphic-conclusion">Repeatable on-robot calibration replaced manual alignment</p>
      </div>
    );
  }

  return (
    <div className="evidence-graphic evidence-graphic--uncertainty">
      <div className="evidence-grid" aria-hidden="true" />
      <p className="graphic-kicker">MEASUREMENT SYSTEM · VARIANCE FLOW</p>
      <div className="verdict-split">
        <div><span>SITE A</span><strong>PASS</strong></div>
        <span aria-hidden="true">≠</span>
        <div><span>SITE B</span><strong>FAIL</strong></div>
      </div>
      <div className="variance-chips">
        {[
          "SOFTWARE",
          "CAPTURE",
          "MOUNT",
          "OPERATOR",
          "ENVIRONMENT",
        ].map((item) => <span key={item}>{item}</span>)}
      </div>
      <div className="uncertainty-results">
        <span><strong>52</strong> conflicting decisions</span>
        <span><strong>32 / 116</strong> fail → pass</span>
      </div>
      <p className="graphic-conclusion">ANOVA → uncertainty → guard-banded decision</p>
    </div>
  );
}
