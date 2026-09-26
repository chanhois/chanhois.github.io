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
            <span>MEASURED VALUE</span>
            <strong>PASS / FAIL</strong>
          </div>
          <span className="decomposition__op" aria-hidden="true">=</span>
          <div className="decomposition__term">
            <span>THE CAMERA</span>
            <strong>PART SPREAD</strong>
          </div>
          <span className="decomposition__op" aria-hidden="true">+</span>
          <div className="decomposition__term decomposition__term--open">
            <span>THE SETUP</span>
            <strong>FIXTURE SPREAD</strong>
          </div>
        </div>
        <p className="decomposition__note">The third term was the one nobody was measuring</p>
        <p className="graphic-conclusion">A verdict at the edge is worth only its repeatability</p>
      </div>
    );
  }

  if (visual === "remount") {
    // Fixed offsets, not random: the server and the browser must draw the same dots.
    const remounts = [12, 31, 24, 58, 44, 77, 65, 90, 38, 71];
    return (
      <div className="evidence-graphic evidence-graphic--remount">
        <div className="evidence-grid" aria-hidden="true" />
        <p className="graphic-kicker">ONE CAMERA · REPEATED REMOUNTS</p>
        <div className="remount-plot">
          <span className="remount-plot__axis" aria-hidden="true" />
          {remounts.map((left, index) => (
            <i key={left} style={{ left: `${left}%`, top: `${(index % 3) * 26 + 8}%` }} />
          ))}
          <span className="remount-plot__bracket" aria-hidden="true" />
        </div>
        <p className="remount-plot__caption">
          Same part, off the jig and back on. The spread left over is the jig&rsquo;s.
        </p>
        <div className="variance-chips">
          {["REPEATED ACROSS SENSOR SIZES"].map((item) => <span key={item}>{item}</span>)}
        </div>
        <p className="graphic-conclusion">Seating turns out to be a source in its own right</p>
      </div>
    );
  }

  if (visual === "seating") {
    return (
      <div className="evidence-graphic evidence-graphic--seating">
        <div className="evidence-grid" aria-hidden="true" />
        <p className="graphic-kicker">REMOUNT SPREAD · BEFORE AND AFTER THE FIX</p>
        <div className="seating-compare">
          <span className="seating-compare__threshold" aria-hidden="true">
            <i />
            <b>THRESHOLD</b>
          </span>
          {[
            { id: "before", label: "SEATING AS FOUND", left: 18, width: 64 },
            { id: "after", label: "SEATING IMPROVED", left: 38, width: 24 },
          ].map((band) => (
            <div className="seating-band" key={band.id}>
              <span className="seating-band__label">{band.label}</span>
              <span className="seating-band__track" aria-hidden="true">
                <i style={{ left: `${band.left}%`, width: `${band.width}%` }} />
              </span>
            </div>
          ))}
        </div>
        <p className="graphic-conclusion">The threshold did not move. The spread did.</p>
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
