import { Fragment } from "react";
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

  if (visual === "cpu") {
    return (
      <div className="evidence-graphic evidence-graphic--cpu">
        <div className="evidence-grid" aria-hidden="true" />
        <p className="graphic-kicker">THREE CAMERA PROCESSES · CPU, COMBINED</p>
        {/* Normalised against the before figure: the measured quantity is the 26%. */}
        <div className="lidar-bars">
          {[
            ["PCL VOXELGRID", "100%", "100%"],
            ["SORT-FREE PASS", "74%", "74%"],
          ].map(([label, value, width]) => (
            <div className="lidar-bar" key={label}>
              <div className="lidar-bar__label">
                <span>{label}</span><strong>{value}</strong>
              </div>
              <span className="lidar-bar__track"><i style={{ width }} /></span>
            </div>
          ))}
        </div>
        <div className="graphic-result"><strong>26%</strong><span>CPU RECLAIMED</span></div>
        <p className="graphic-conclusion">Same downsampled cloud going downstream</p>
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

  if (visual === "decomposition") {
    return (
      <div className="evidence-graphic evidence-graphic--decomposition">
        <div className="evidence-grid" aria-hidden="true" />
        <p className="graphic-kicker">WHAT A VERDICT ACTUALLY CONTAINS</p>
        {/* No split is drawn to scale: the point is that one term was never measured. */}
        <div className="decomposition">
          <div className="decomposition__term">
            <span>OBSERVED SPREAD</span>
            <strong>σ (px)</strong>
          </div>
          <span className="decomposition__op" aria-hidden="true">=</span>
          <div className="decomposition__system">
            <div className="decomposition__system-terms">
              {["PROGRAM", "SEATING", "ENVIRONMENT"].map((term, index) => (
                <Fragment key={term}>
                  {index > 0 ? <span className="decomposition__op" aria-hidden="true">+</span> : null}
                  <span className="decomposition__system-term">{term}</span>
                </Fragment>
              ))}
            </div>
            <span className="decomposition__system-label">MEASUREMENT SYSTEM</span>
          </div>
        </div>
        <p className="decomposition__note">Hold one sensor as the reference and the part term drops out</p>
        <p className="graphic-conclusion">A verdict at the edge is worth only its repeatability</p>
      </div>
    );
  }

  if (visual === "experiment") {
    const conditions = [
      { id: "recapture", label: "RECAPTURE", detail: "same seating, measured again" },
      { id: "remount", label: "REMOUNT", detail: "taken off and re-seated each time" },
      { id: "brightness", label: "BRIGHTNESS", detail: "two lighting levels" },
      { id: "colour", label: "LIGHT COLOUR", detail: "lighting colour changed" },
    ];
    return (
      <div className="evidence-graphic evidence-graphic--experiment">
        <div className="evidence-grid" aria-hidden="true" />
        <p className="graphic-kicker">5 SENSORS · 4 CONDITIONS · 30 REPEATS EACH</p>
        <ol className="condition-list">
          {conditions.map((condition, index) => (
            <li key={condition.id}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{condition.label}</strong>
              <em>{condition.detail}</em>
            </li>
          ))}
        </ol>
        <div className="graphic-result"><strong>600</strong><span>MEASUREMENTS · 7 METRICS EACH</span></div>
        <p className="graphic-conclusion">One sensor held as the reference, so what moves is the setup</p>
      </div>
    );
  }

  if (visual === "sigma") {
    // Widths are relative to the 1.8 px remount figure; colour is off that scale entirely.
    const rows = [
      { id: "recapture", label: "RECAPTURE", value: "0.15 px", width: "8%" },
      { id: "brightness", label: "BRIGHTNESS", value: "≈ baseline", width: "9%" },
      { id: "remount", label: "REMOUNT", value: "up to 1.8 px", width: "100%" },
    ];
    return (
      <div className="evidence-graphic evidence-graphic--sigma">
        <div className="evidence-grid" aria-hidden="true" />
        <p className="graphic-kicker">POSITION SPREAD BY CONDITION</p>
        <div className="sigma-rows">
          {rows.map((row) => (
            <div className="sigma-row" key={row.id}>
              <div className="sigma-row__label"><span>{row.label}</span><strong>{row.value}</strong></div>
              <span className="sigma-row__track"><i style={{ width: row.width }} /></span>
            </div>
          ))}
          <div className="sigma-row sigma-row--broken">
            <div className="sigma-row__label"><span>LIGHT COLOUR</span><strong>detection breaks</strong></div>
            <span className="sigma-row__track"><i /></span>
          </div>
        </div>
        <p className="graphic-conclusion">Seating moved the number. Brightness did not.</p>
      </div>
    );
  }

  return (
    <div className="evidence-graphic evidence-graphic--uncertainty">
      <div className="evidence-grid" aria-hidden="true" />
      <p className="graphic-kicker">SAME UNITS · TWO INSPECTION SITES</p>
      <div className="verdict-split">
        <div><span>SUPPLIER</span><strong>PASS</strong></div>
        <span aria-hidden="true">≠</span>
        <div><span>FACTORY</span><strong>FAIL</strong></div>
      </div>
      <div className="uncertainty-results">
        <span><strong>52</strong> conflicting decisions</span>
        <span><strong>32 / 116</strong> fail → pass</span>
      </div>
      <p className="graphic-conclusion">The cameras did not change between the two answers</p>
    </div>
  );
}
