import { useEffect, useState } from "react";
import { SiteHeader, useIsMobile } from "./SiteHeader";

// Font FAMILY is controlled globally (fonts.css / globals.css) via
// var(--font-heading) on h1-h6/.site-heading and var(--font-body) on
// p/li/label/blockquote/figcaption. This file only imports size/weight
// helpers — it never sets fontFamily inline, since inline styles can't
// beat the global !important tag rules anyway.
import { BODY_STYLE, headingSize, labelSize } from "../../styles/typography";

export function ShopPage({ onBack: _onBack }: { onBack: () => void }) {
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
        {/* Eyebrow label — small metadata, body font via the <p> tag rule */}
        <p
          style={{
            ...labelSize(12, { letterSpacing: "0.2em", textTransform: "uppercase" }),
            color: "#8b7f6a",
            marginBottom: 16,
          }}
        >
          AFC UK & Western Europe — Golden Jubilee
        </p>
        {/* Real <h1> so var(--font-heading) applies via the global h1-h6 rule */}
        <h1 style={{ ...headingSize(50, { fontWeight: 400 }), color: "#192441", margin: 0, marginBottom: 24 }}>
          Anniversary Shop
        </h1>
        <p style={{ ...BODY_STYLE, color: "#4a4535", maxWidth: 560, marginBottom: 8 }}>
          Our Golden Jubilee shop is on its way — commemorative books, apparel, and keepsakes marking fifty years of ministry.
        </p>
        <p style={{ ...labelSize(14, { fontStyle: "italic" }), color: "#aaa" }}>
          Product listings and checkout coming soon.
        </p>
      </div>
    </div>
  );
}

export default ShopPage;