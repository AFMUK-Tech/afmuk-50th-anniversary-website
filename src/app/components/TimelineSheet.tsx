import { useState, useEffect } from "react";
import { TimelineSection, TIMELINE_DATA } from "./sections";

const TIMELINE_VIS_H = 782;
const TIMELINE_STEPS = TIMELINE_DATA.length;
const MIN_SCALE = 0.26;

export function TimelineSheet() {
  const [open, setOpen] = useState(window.location.hash === "#timeline");
  const [activeIdx, setActiveIdx] = useState(0);
  const [vw, setVw] = useState(window.innerWidth);

  const scale = Math.max(Math.min(vw / 1440, 1), MIN_SCALE);
  const sheetH = TIMELINE_VIS_H * scale + 76; // +76 for controls + safe-area

  // Listen for hash changes to open/close
  useEffect(() => {
    const onHash = () => {
      if (window.location.hash === "#timeline") {
        setOpen(true);
        setActiveIdx(0);
      } else {
        setOpen(false);
      }
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // Resize
  useEffect(() => {
    const update = () => setVw(window.innerWidth);
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  // Escape key to close
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { 
      if (e.key === "Escape") close(); 
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  const close = () => {
    // Only remove the hash if it's the timeline hash, but don't navigate away
    if (window.location.hash === "#timeline") {
      // Use replaceState to remove hash without triggering navigation
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    setOpen(false);
  };

  if (!open) return null;

  const prev = () => setActiveIdx(i => Math.max(0, i - 1));
  const next = () => setActiveIdx(i => Math.min(TIMELINE_STEPS - 1, i + 1));

  const isNarrow = vw < 420;

  return (
    <>
      <style>{`
        @keyframes tlFadeIn  { from { opacity:0 } to { opacity:1 } }
        @keyframes tlSlideUp { from { transform:translateY(100%) } to { transform:translateY(0) } }
      `}</style>

      {/* Backdrop */}
      <div
        onClick={close}
        style={{
          position: "fixed", inset: 0, zIndex: 1000,
          background: "rgba(0,0,0,0.55)",
          animation: "tlFadeIn 0.25s ease",
        }}
      />

      {/* Sheet */}
      <div style={{
        position: "fixed", bottom: 0, left: 0, right: 0,
        height: sheetH,
        maxHeight: "92vh",
        zIndex: 1001,
        background: "#0f1421",
        borderRadius: "20px 20px 0 0",
        boxShadow: "0 -8px 48px rgba(0,0,0,0.4)",
        overflow: "hidden",
        paddingBottom: "env(safe-area-inset-bottom)",
        animation: "tlSlideUp 0.38s cubic-bezier(0.32,0.72,0,1)",
      }}>

        {/* Drag handle */}
        <div style={{
          position: "absolute", top: 10, left: "50%", transform: "translateX(-50%)",
          width: 44, height: 4, borderRadius: 2,
          background: "rgba(255,255,255,0.25)", zIndex: 10,
        }} />

        {/* Close button - now just closes without navigation */}
        <button
          onClick={close}
          style={{
            position: "absolute", top: 16, right: 20, zIndex: 10,
            background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "50%", width: 36, height: 36,
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", color: "#fff", fontSize: 16, lineHeight: 1,
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.2)";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.1)";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Timeline canvas */}
        <div style={{
          position: "absolute", top: 0, left: "50%",
          transform: `translateX(-50%) scale(${scale})`,
          transformOrigin: "top center",
          width: 1440, height: TIMELINE_VIS_H,
          pointerEvents: "auto",
        }}>
          <TimelineSection activeYearIndex={activeIdx} transitionProgress={0} />
        </div>

        {/* Prev / Next controls */}
        <div style={{
          position: "absolute", bottom: "max(16px, env(safe-area-inset-bottom))", left: "50%",
          transform: "translateX(-50%)",
          display: "flex", gap: isNarrow ? 10 : 16, alignItems: "center",
          zIndex: 10,
        }}>
          <button
            onClick={prev} disabled={activeIdx === 0}
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: 8, padding: isNarrow ? "8px 14px" : "8px 24px", color: "#fff",
              fontFamily: "'Inter', sans-serif", fontSize: isNarrow ? 12 : 14,
              cursor: activeIdx === 0 ? "default" : "pointer",
              opacity: activeIdx === 0 ? 0.4 : 1,
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              if (activeIdx !== 0) {
                e.currentTarget.style.background = "rgba(255,255,255,0.2)";
                e.currentTarget.style.transform = "scale(1.02)";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >← Prev</button>

          <span style={{
            color: "rgba(255,255,255,0.5)",
            fontFamily: "'Inter', sans-serif", fontSize: 13,
            minWidth: 52, textAlign: "center",
          }}>
            {activeIdx + 1} / {TIMELINE_STEPS}
          </span>

          <button
            onClick={next} disabled={activeIdx === TIMELINE_STEPS - 1}
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: 8, padding: isNarrow ? "8px 14px" : "8px 24px", color: "#fff",
              fontFamily: "'Inter', sans-serif", fontSize: isNarrow ? 12 : 14,
              cursor: activeIdx === TIMELINE_STEPS - 1 ? "default" : "pointer",
              opacity: activeIdx === TIMELINE_STEPS - 1 ? 0.4 : 1,
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              if (activeIdx !== TIMELINE_STEPS - 1) {
                e.currentTarget.style.background = "rgba(255,255,255,0.2)";
                e.currentTarget.style.transform = "scale(1.02)";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >Next →</button>
        </div>
      </div>
    </>
  );
}