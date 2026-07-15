import { useEffect, useState } from "react";
import { SiteHeader, useIsMobile } from "./SiteHeader";
export function ShopPage({ onBack }: { onBack: () => void }) {
  const isMobile = useIsMobile();
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setFadeIn(true));
  }, []);

  return (
    <div style={{ width: "100%", minHeight: "100vh", background: "#fcf9f2", position: "relative" }}>
      <SiteHeader />

      <div
        style={{
          opacity: fadeIn ? 1 : 0,
          transform: fadeIn ? "scale(1)" : "scale(0.98)",
          transition: "opacity 0.9s cubic-bezier(0.4,0,0.2,1) 0.1s, transform 0.9s cubic-bezier(0.4,0,0.2,1) 0.1s",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "80px 24px 64px",
        }}
      >
        {/* <button
          onClick={onBack}
          style={{
            position: "fixed",
            top: isMobile ? "calc(72px + max(12px, env(safe-area-inset-top)))" : "max(16px, env(safe-area-inset-top))",
            right: "max(16px, env(safe-area-inset-right))",
            zIndex: 90,
            background: "#192441", color: "#fff", border: "none", borderRadius: 6,
            padding: "8px 18px", fontFamily: "'Futura PT', sans-serif", fontSize: 13,
            cursor: "pointer", letterSpacing: "0.04em",
          }}
        >
          ← Back
        </button> */}

        <p style={{ fontFamily: "'Futura PT', sans-serif", fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8b7f6a", marginBottom: 16 }}>
          AFC UK & Western Europe — Golden Jubilee
        </p>
        <h1 style={{ fontFamily: "'CRONDE', serif", fontSize: "clamp(36px, 8vw, 64px)", color: "#192441", margin: 0, marginBottom: 24 }}>
          Anniversary Shop
        </h1>
        <p style={{ fontFamily: "'Futura PT', sans-serif", fontSize: 16, lineHeight: 1.7, color: "#4a4535", maxWidth: 560, marginBottom: 8 }}>
          Our Golden Jubilee shop is on its way — commemorative books, apparel, and keepsakes marking fifty years of ministry.
        </p>
        <p style={{ fontFamily: "'Futura PT', sans-serif", fontSize: 14, fontStyle: "italic", color: "#aaa" }}>
          Product listings and checkout coming soon.
        </p>
      </div>
    </div>
  );
}

export default ShopPage;