import { useState, useEffect } from "react";
import Manchester from "../../imports/Manchester/index";

const DESIGN_WIDTH  = 1440;
const DESIGN_HEIGHT = 1920;

export function ManchesterPage({ onBack }: { onBack: () => void }) {
  const [scale, setScale] = useState(window.innerWidth / DESIGN_WIDTH);

  useEffect(() => {
    const update = () => setScale(window.innerWidth / DESIGN_WIDTH);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div style={{ width: "100%", minHeight: "100vh", background: "#f4f1ea", position: "relative" }}>
      <button
        onClick={onBack}
        style={{
          position: "fixed",
          top: 16,
          right: 24,
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
      <div style={{ width: "100%", height: DESIGN_HEIGHT * scale, overflow: "hidden" }}>
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
  );
}
