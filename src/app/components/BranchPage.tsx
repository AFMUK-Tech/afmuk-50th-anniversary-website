import { useState, useEffect } from "react";
import Nav from "../../imports/Nav/index";
import Manchester from "../../imports/Manchester-1/index";
import Bexley from "../../imports/Bexley/index";
import Peckham from "../../imports/Peckham/index";
import Cranfield from "../../imports/Cranfield/index";
import Birmingham from "../../imports/Birmingham/index";
import Aberdeen from "../../imports/Aberdeen/index";

const DESIGN_WIDTH  = 1440;
const DESIGN_HEIGHT = 1920;
const NAV_H = 80;

// Keep the scaled canvas from blowing up on ultra-wide monitors and from
// shrinking into unreadable text on very narrow phones.
const MIN_SCALE = 0.32;
const MAX_SCALE = 1.15;

function useClampedScale() {
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

  return scale;
}

function ScaledBranchPage({ children, onBack }: { children: React.ReactNode; onBack: () => void }) {
  const scale = useClampedScale();
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation
    requestAnimationFrame(() => {
      setFadeIn(true);
    });
  }, []);

  return (
    <div style={{
      width: "100%",
      minHeight: "100vh",
      background: "#f4f1ea",
      position: "relative",
    }}>
      <div style={{
        opacity: fadeIn ? 1 : 0,
        transform: fadeIn ? "scale(1)" : "scale(0.98)",
        transition: "opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1) 0.1s, transform 0.9s cubic-bezier(0.4, 0, 0.2, 1) 0.1s",
      }}>
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
        {/* Center the scaled canvas horizontally so extra width on wide
            viewports (once MAX_SCALE caps the design) doesn't leave the
            page lopsided. */}
        <div style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          overflowX: "hidden",
        }}>
          <div style={{ width: DESIGN_WIDTH * scale, height: DESIGN_HEIGHT * scale, overflow: "hidden" }}>
            <div
              style={{
                width: DESIGN_WIDTH,
                height: DESIGN_HEIGHT,
                transform: `scale(${scale})`,
                transformOrigin: "top left",
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>

      {/* Live interactive nav overlaying the static one baked into the design */}
      <div style={{
        position: "fixed", top: 0, left: 0, width: "100%",
        height: NAV_H * scale, zIndex: 100, overflow: "visible",
        display: "flex", justifyContent: "center",
      }}>
        <div style={{
          width: DESIGN_WIDTH, height: NAV_H,
          transform: `scale(${scale})`, transformOrigin: "top center",
        }}>
          <Nav />
        </div>
      </div>
    </div>
  );
}

function PlaceholderBranchPage({ city, onBack }: { city: string; onBack: () => void }) {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation
    requestAnimationFrame(() => {
      setFadeIn(true);
    });
  }, []);

  return (
    <div style={{
      width: "100%", minHeight: "100vh", background: "#f4f1ea",
      display: "flex", flexDirection: "column", alignItems: "center",
      justifyContent: "center", fontFamily: "'Inter', sans-serif", position: "relative",
    }}>
      <div style={{
        opacity: fadeIn ? 1 : 0,
        transform: fadeIn ? "scale(1)" : "scale(0.98)",
        transition: "opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1) 0.1s, transform 0.9s cubic-bezier(0.4, 0, 0.2, 1) 0.1s",
      }}>
        <button
          onClick={onBack}
          style={{
            position: "fixed",
            top: "max(16px, env(safe-area-inset-top))",
            right: "max(16px, env(safe-area-inset-right))",
            zIndex: 300,
            background: "#192441", color: "#fff", border: "none", borderRadius: 6,
            padding: "8px 18px", fontSize: 13, cursor: "pointer", letterSpacing: "0.04em",
          }}
        >
          ← Back
        </button>
        <div style={{ textAlign: "center", maxWidth: 560, padding: "0 24px" }}>
          <p style={{ fontSize: "clamp(11px, 2.2vw, 12px)", letterSpacing: "0.18em", textTransform: "uppercase", color: "#8b7f6a", marginBottom: 16 }}>
            AFM UK — Branch
          </p>
          <h1 style={{ fontFamily: "'CRONDE', serif", fontSize: "clamp(40px, 8vw, 96px)", color: "#192441", lineHeight: 1, marginBottom: 48 }}>
            {city}
          </h1>
          <p style={{ fontSize: 14, color: "#aaa", fontStyle: "italic" }}>Full branch page coming soon.</p>
        </div>
      </div>
    </div>
  );
}

export function BranchPage({ branch, onBack }: { branch: string; onBack: () => void }) {
  if (branch === "manchester") {
    return <ScaledBranchPage onBack={onBack}><Manchester /></ScaledBranchPage>;
  }
  if (branch === "bexley") {
    return <ScaledBranchPage onBack={onBack}><Bexley /></ScaledBranchPage>;
  }
  if (branch === "peckham") {
    return <ScaledBranchPage onBack={onBack}><Peckham /></ScaledBranchPage>;
  }
  if (branch === "cranfield") {
    return <ScaledBranchPage onBack={onBack}><Cranfield /></ScaledBranchPage>;
  }
  if (branch === "birmingham") {
    return <ScaledBranchPage onBack={onBack}><Birmingham /></ScaledBranchPage>;
  }
  if (branch === "aberdeen") {
    return <ScaledBranchPage onBack={onBack}><Aberdeen /></ScaledBranchPage>;
  }

  const cityName = branch.charAt(0).toUpperCase() + branch.slice(1);
  return <PlaceholderBranchPage city={cityName} onBack={onBack} />;
}