import { useState, useEffect } from "react";
import Manchester from "../../imports/Manchester/index";

const DESIGN_WIDTH  = 1440;
const DESIGN_HEIGHT = 1920;

// Keep the scaled canvas from blowing up on ultra-wide monitors and from
// shrinking into unreadable text on very narrow phones.
const MIN_SCALE = 0.32;
const MAX_SCALE = 1.15;

export function ManchesterPage({ onBack }: { onBack: () => void }) {
  const [scale, setScale] = useState(() =>
    Math.min(Math.max(window.innerWidth / DESIGN_WIDTH, MIN_SCALE), MAX_SCALE)
  );

  useEffect(() => {
    const update = () =>
      setScale(Math.min(Math.max(window.innerWidth / DESIGN_WIDTH, MIN_SCALE), MAX_SCALE));
    update();
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  return (
    <div style={{ width: "100%", minHeight: "100vh", background: "#f4f1ea", position: "relative" }}>
      <button
        onClick={onBack}
        style={{
          position: "fixed",
          top: "max(16px, env(safe-area-inset-top))",
          right: "max(16px, env(safe-area-inset-right))",
          zIndex: 300,
          background: "#192441",
          color: "#fff",
          border: "none",
          borderRadius: 6,
          padding: "8px 18px",
          fontFamily: "'Inter', sans-serif",
          fontSize: 13,
          cursor: "pointer",
          letterSpacing: "0.04em",
        }}
      >
        ← Back
      </button>
      {/* Centered so extra viewport width (once MAX_SCALE caps the design)
          doesn't leave the page lopsided on very wide screens. */}
      <div style={{ width: "100%", display: "flex", justifyContent: "center", overflowX: "hidden" }}>
        <div style={{ width: DESIGN_WIDTH * scale, height: DESIGN_HEIGHT * scale, overflow: "hidden" }}>
          <div
            style={{
              width: DESIGN_WIDTH,
              height: DESIGN_HEIGHT,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
            }}
          >
            <Manchester />
          </div>
        </div>
      </div>
    </div>
  );
}