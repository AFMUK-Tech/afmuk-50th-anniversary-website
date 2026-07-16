import { useEffect, useState } from "react";
import Nav from "../../imports/Nav/index";
import MobileNav from "./MobileNav";

export const DESIGN_WIDTH = 1440;
export const NAV_H = 80;
// 1024, not 768 — a 768px-wide device (a classic iPad in portrait) needs
// the hamburger MobileNav, not the scaled-down desktop Nav: at 768px the
// desktop canvas scale (width / DESIGN_WIDTH) is ~0.53, which shrinks nav
// link text to ~8px. This threshold matches App.tsx's own 'tablet' tier
// (BREAKPOINTS.tablet = 1024), which already treats 768-1024 as a natural-
// flow mobile-style layout on the home page — every other page's Mobile/
// Desktop split (via useIsMobile below) now agrees with that.
export const MOBILE_BREAKPOINT = 1024;

// Single source of truth for the site's scale factor. Every page must use
// this exact formula — capped at 1 so the canvas never grows past its
// native 1440px design size (no floor, so it still shrinks to fit narrow
// windows). FounderPage previously had its own useClampedScale() with a
// 0.55–1.15 range, which produced a different navbar size than Home for
// the same viewport width. Don't reintroduce a page-local variant of this —
// every page should import useSiteScale from here instead.
export function useSiteScale() {
  const [scale, setScale] = useState(() =>
    Math.min(window.innerWidth / DESIGN_WIDTH, 1)
  );

  useEffect(() => {
    const update = () => setScale(Math.min(window.innerWidth / DESIGN_WIDTH, 1));
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

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < MOBILE_BREAKPOINT : false
  );
  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return isMobile;
}

// Renders the nav bar identically on every page. Mobile gets MobileNav
// (manages its own natural-flow height). Desktop gets Nav wrapped in the
// SAME 1440px-canvas + scale(scale) transform that App.tsx's Home page
// uses for its nav, so NAV_H * scale is genuinely the on-screen height
// everywhere — no page can drift out of sync with its own local scale math.
export function SiteHeader() {
  const scale = useSiteScale();
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 100 }}>
        <MobileNav />
      </div>
    );
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: NAV_H * scale,
        zIndex: 100,
        overflow: "visible",
      }}
    >
      <div
        style={{
          width: scale < 1 ? DESIGN_WIDTH : "100%",
          height: NAV_H,
          transform: scale < 1 ? `scale(${scale})` : "none",
          transformOrigin: "top left",
          position: "relative",
        }}
      >
        <Nav />
      </div>
    </div>
  );
}
