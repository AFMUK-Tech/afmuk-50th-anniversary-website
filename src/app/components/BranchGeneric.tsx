import { useEffect, useState } from "react";
import Nav from "../../imports/Nav/index";
import MobileNav from "./MobileNav";
import type { BranchContent } from "../data/branchContent";

const NAV_H = 80;

function useDevice() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return isMobile;
}

export function BranchGeneric({
  branch,
  onBack,
}: {
  branch: BranchContent;
  onBack: () => void;
}) {
  const isMobile = useDevice();
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setFadeIn(true));
  }, []);

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#f4f1ea",
        position: "relative",
      }}
    >
      {/* Nav */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 100,
          height: isMobile ? "auto" : NAV_H,
        }}
      >
        {isMobile ? <MobileNav /> : <Nav />}
      </div>

      <div
        style={{
          opacity: fadeIn ? 1 : 0,
          transform: fadeIn ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
          paddingTop: isMobile ? 72 : NAV_H,
        }}
      >
        {/* Back button */}
        <button
          onClick={onBack}
          style={{
            position: "fixed",
            top: isMobile ? "calc(72px + max(12px, env(safe-area-inset-top)))" : "max(16px, env(safe-area-inset-top))",
            right: "max(16px, env(safe-area-inset-right))",
            zIndex: 90,
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

        {/* Hero */}
        <div
          className="branch-hero"
          style={{
            position: "relative",
            background: "linear-gradient(0.48deg, rgb(25, 36, 65) 38.09%, rgb(1, 9, 25) 110.38%)",
            padding: isMobile ? "48px 24px 56px" : "88px 64px 96px",
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          <p
            style={{
              fontFamily: "'Futura PT', sans-serif",
              fontSize: 12,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#D9C7A8",
              opacity: 0.8,
              marginBottom: 14,
            }}
          >
            {branch.region} · Golden Jubilee 1976–2026
          </p>
          <h1
            style={{
              fontFamily: "'CRONDE', serif",
              color: "#fff",
              fontSize: isMobile ? "clamp(32px, 11vw, 48px)" : "clamp(48px, 5.5vw, 80px)",
              lineHeight: 1.05,
              margin: 0,
              marginBottom: 18,
            }}
          >
            {branch.name}
          </h1>
          <p
            style={{
              fontFamily: "'Futura PT', sans-serif",
              color: "#D9C7A8",
              fontSize: isMobile ? 16 : 22,
              maxWidth: 720,
              margin: "0 auto",
              lineHeight: 1.5,
            }}
          >
            {branch.tagline}
          </p>
        </div>

        {/* Body */}
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: isMobile ? "40px 20px" : "64px 24px",
          }}
        >
          {branch.paragraphs.map((p, i) => (
            <p
              key={i}
              style={{
                fontFamily: "'Futura PT', sans-serif",
                fontSize: isMobile ? 15 : 18,
                lineHeight: 1.75,
                color: "#28241c",
                marginBottom: 22,
              }}
            >
              {p}
            </p>
          ))}

          {branch.pullQuote && (
            <blockquote
              style={{
                borderLeft: "3px solid #D9C7A8",
                margin: "36px 0",
                padding: "4px 0 4px 24px",
                fontFamily: "'CRONDE', serif",
                fontSize: isMobile ? 18 : 24,
                lineHeight: 1.5,
                color: "#192441",
                fontStyle: "italic",
              }}
            >
              {branch.pullQuote}
            </blockquote>
          )}

          {/* Facts card */}
          <div
            style={{
              background: "#fff",
              borderRadius: 8,
              boxShadow: "0px 2px 10px rgba(0,0,0,0.06)",
              padding: isMobile ? "22px 20px" : "32px 40px",
              marginTop: 36,
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(220px, 1fr))",
              gap: isMobile ? 16 : 24,
            }}
          >
            {branch.facts.map((f, i) => (
              <div key={i}>
                <p
                  style={{
                    fontFamily: "'Futura PT', sans-serif",
                    fontSize: 11,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#8b7f6a",
                    marginBottom: 6,
                  }}
                >
                  {f.label}
                </p>
                <p
                  style={{
                    fontFamily: "'CRONDE', serif",
                    fontSize: isMobile ? 18 : 22,
                    color: "#192441",
                    margin: 0,
                  }}
                >
                  {f.value}
                </p>
              </div>
            ))}
          </div>

          {/* Photo placeholder note */}
          <div
            style={{
              marginTop: 40,
              padding: isMobile ? "18px 18px" : "24px 28px",
              border: "1px dashed #b8ab8f",
              borderRadius: 8,
              background: "rgba(217,199,168,0.08)",
            }}
          >
            <p
              style={{
                fontFamily: "'Futura PT', sans-serif",
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#8b7f6a",
                marginBottom: 8,
              }}
            >
              🖼 Photographs — {branch.name}
            </p>
            <p
              style={{
                fontFamily: "'Futura PT', sans-serif",
                fontSize: isMobile ? 13 : 14,
                lineHeight: 1.6,
                color: "#4a4535",
                margin: 0,
              }}
            >
              {branch.photoNote} <em>Status: awaiting supply.</em>
            </p>
          </div>

          {/* CTA */}
          <div style={{ marginTop: 44, textAlign: "center" }}>
            <div
              style={{
                display: "inline-block",
                background: "#192441",
                color: "#fff",
                fontFamily: "'Futura PT', sans-serif",
                fontSize: 14,
                letterSpacing: "0.03em",
                padding: "14px 34px",
                borderRadius: 999,
                cursor: "pointer",
              }}
            >
              Visit Us This Sunday
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BranchGeneric;
