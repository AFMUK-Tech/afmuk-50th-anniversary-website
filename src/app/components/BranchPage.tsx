import { useState, useEffect } from "react";
import { SiteHeader, useSiteScale, useIsMobile, NAV_H, DESIGN_WIDTH as SITE_DESIGN_WIDTH } from "./SiteHeader";
import Manchester from "../../imports/Manchester-1/index";
import Bexley from "../../imports/Bexley/index";
import Peckham from "../../imports/Peckham/index";
import Cranfield from "../../imports/Cranfield/index";
import Birmingham from "../../imports/Birmingham/index";
import Aberdeen from "../../imports/Aberdeen/index";
import Italy from "../../imports/Italy/index";
import Germany from "../../imports/Germany/index";
import Sussex from "../../imports/Sussex/index";
import Coventry from "../../imports/Coventry/index";
import Demark from "../../imports/Demark/index";
import Edinburgh from "../../imports/Edinburgh/index";
import France from "../../imports/France/index";
import Ireland from "../../imports/Ireland/index";
import Glasgow from "../../imports/Glasgow/index";
import Leicester from "../../imports/Leicester/index";
import Spain from "../../imports/Spain/index";
import Bristol from "../../imports/Bristol/index";
import Denmark from "../../imports/Demark/index";

const DESIGN_WIDTH  = SITE_DESIGN_WIDTH; // 1440 — re-exported from SiteHeader, kept as a local alias so the rest of this file doesn't need renaming
const DESIGN_HEIGHT = 1920;

// Shared clearance for the fixed mobile nav (SiteHeader renders MobileNav
// with position: "fixed" on mobile, which reserves zero space in normal
// flow). Every mobile branch-page wrapper below must pad by this exact
// amount or content renders underneath/misaligned with the nav. Both
// ScaledBranchPage and MobileBranchPage now read from this single constant
// instead of each hardcoding (or, previously, omitting) their own value.
const MOBILE_NAV_CLEARANCE = 96;

function ScaledBranchPage({ children }: { children: React.ReactNode; onBack?: () => void }) {
  const scale = useSiteScale();
  const isMobile = useIsMobile();
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
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
        <div style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          overflowX: "hidden",
          paddingTop: isMobile ? MOBILE_NAV_CLEARANCE : 0,
        }}>
          <div style={{
            width: DESIGN_WIDTH * scale,
            height: isMobile ? (DESIGN_HEIGHT - NAV_H) * scale : DESIGN_HEIGHT * scale,
            overflow: "hidden",
          }}>
            <div
              style={{
                width: DESIGN_WIDTH,
                height: DESIGN_HEIGHT,
                transform: isMobile
                  ? `translateY(-${NAV_H}px) scale(${scale})`
                  : `scale(${scale})`,
                transformOrigin: "top left",
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>

      <SiteHeader />
    </div>
  );
}

function MobileBranchPage({ children }: { children: React.ReactNode; onBack?: () => void }) {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setFadeIn(true));
  }, []);

  return (
    <div style={{ width: "100%", minHeight: "100vh", background: "#fcf9f2", position: "relative" }}>
      <SiteHeader />

      {/* Fixed nav reserves no flow space — this padding is the only
          thing preventing content from rendering underneath it. This
          was previously missing entirely, which is what caused the
          inconsistent gap you were seeing on mobile branch pages. */}
      <div
        style={{
          paddingTop: MOBILE_NAV_CLEARANCE,
          opacity: fadeIn ? 1 : 0,
          transform: fadeIn ? "scale(1)" : "scale(0.98)",
          transition: "opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1) 0.1s, transform 0.9s cubic-bezier(0.4, 0, 0.2, 1) 0.1s",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function FluidBranchPage({ children }: { children: React.ReactNode; onBack?: () => void }) {
  const scale = useSiteScale();
  const isMobile = useIsMobile();
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setFadeIn(true));
  }, []);

  return (
    <div style={{ width: "100%", minHeight: "100vh", background: "#f4f1ea", position: "relative" }}>
      <SiteHeader />
      <div
        style={{
          paddingTop: isMobile ? MOBILE_NAV_CLEARANCE : NAV_H * scale,
          opacity: fadeIn ? 1 : 0,
          transform: fadeIn ? "translateY(0)" : "translateY(10px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function ResponsiveBranchPage({
  onBack,
  Canvas,
  Mobile,
}: {
  onBack: () => void;
  Canvas: React.ComponentType;
  Mobile?: React.ComponentType;
}) {
  const isMobile = useIsMobile();

  if (isMobile && Mobile) {
    return (
      <MobileBranchPage onBack={onBack}>
        <Mobile />
      </MobileBranchPage>
    );
  }

  return (
    <ScaledBranchPage onBack={onBack}>
      <Canvas />
    </ScaledBranchPage>
  );
}

function PlaceholderBranchPage({ city, onBack: _onBack }: { city: string; onBack: () => void }) {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      setFadeIn(true);
    });
  }, []);

  return (
    <div style={{
      width: "100%", minHeight: "100vh", background: "#f4f1ea",
      display: "flex", flexDirection: "column", alignItems: "center",
      justifyContent: "center", position: "relative",
    }}>
      <SiteHeader />

      <div style={{
        opacity: fadeIn ? 1 : 0,
        transform: fadeIn ? "scale(1)" : "scale(0.98)",
        transition: "opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1) 0.1s, transform 0.9s cubic-bezier(0.4, 0, 0.2, 1) 0.1s",
      }}>
        <div style={{ textAlign: "center", maxWidth: 560, padding: "0 24px" }}>
          <p style={{ fontFamily: "'Futura PT', sans-serif", fontSize: "clamp(11px, 2.2vw, 12px)", letterSpacing: "0.18em", textTransform: "uppercase", color: "#8b7f6a", marginBottom: 16 }}>
            AFC UK & Western Europe — Branch
          </p>
          <h1 style={{ fontFamily: "'CRONDE', serif", fontSize: "clamp(40px, 8vw, 96px)", color: "#192441", lineHeight: 1, marginBottom: 48 }}>
            {city}
          </h1>
          <p style={{ fontFamily: "'Futura PT', sans-serif", fontSize: 14, color: "#aaa", fontStyle: "italic" }}>Full branch page coming soon.</p>
        </div>
      </div>
    </div>
  );
}

export function BranchPage({ branch, onBack }: { branch: string; onBack: () => void }) {
  if (branch === "manchester") {
    return <ResponsiveBranchPage onBack={onBack} Canvas={Manchester} Mobile={Manchester} />;
  }
  if (branch === "bexley") {
    return <ResponsiveBranchPage onBack={onBack} Canvas={Bexley} Mobile={Bexley} />;
  }
  if (branch === "peckham") {
    return (
      <FluidBranchPage onBack={onBack}>
        <Peckham />
      </FluidBranchPage>
    );
  }
  if (branch === "cranfield") {
    return <ResponsiveBranchPage onBack={onBack} Canvas={Cranfield} Mobile={Cranfield} />;
  }
  if (branch === "birmingham") {
    return <ResponsiveBranchPage onBack={onBack} Canvas={Birmingham} Mobile={Birmingham} />;
  }
 if (branch === "aberdeen") {
    return <ResponsiveBranchPage onBack={onBack} Canvas={Aberdeen} Mobile={Aberdeen} />;
  }
  if (branch === "italy") {
    return <ResponsiveBranchPage onBack={onBack} Canvas={Italy} Mobile={Italy} />;
  }
  if (branch === "germany") {
    return <ResponsiveBranchPage onBack={onBack} Canvas={Germany} Mobile={Germany} />;
  }
  if (branch === "sussex") {
    return <ResponsiveBranchPage onBack={onBack} Canvas={Sussex} Mobile={Sussex} />;
  }
  if (branch === "coventry") {
    return <ResponsiveBranchPage onBack={onBack} Canvas={Coventry} Mobile={Coventry} />;
  }
  if (branch === "denmark") {
    return <ResponsiveBranchPage onBack={onBack} Canvas={Denmark} Mobile={Denmark} />;
  }
  if (branch === "edinburgh") {
    return <ResponsiveBranchPage onBack={onBack} Canvas={Edinburgh} Mobile={Edinburgh} />;
  }
  if (branch === "france") {
    return <ResponsiveBranchPage onBack={onBack} Canvas={France} Mobile={France} />;
  }
  if (branch === "ireland") {
    return <ResponsiveBranchPage onBack={onBack} Canvas={Ireland} Mobile={Ireland} />;
  }
  if (branch === "glasgow") {
    return <ResponsiveBranchPage onBack={onBack} Canvas={Glasgow} Mobile={Glasgow} />;
  }
  if (branch === "leicester") {
    return <ResponsiveBranchPage onBack={onBack} Canvas={Leicester} Mobile={Leicester} />;
  }
  if (branch === "spain") {
    return <ResponsiveBranchPage onBack={onBack} Canvas={Spain} Mobile={Spain} />;
  }
   if (branch === "bristol") {
    return <ResponsiveBranchPage onBack={onBack} Canvas={Bristol} Mobile={Bristol} />;
  }
  
  return <PlaceholderBranchPage city={branch} onBack={onBack} />;
}
