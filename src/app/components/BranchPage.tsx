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
import Denmark from "../../imports/Demark/index";
import BristolCardiff from "../../imports/Bristol/index";

const MOBILE_NAV_CLEARANCE = 96;

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
  // All branches now render through the same FluidBranchPage wrapper —
  // natural flow, no fixed 1440x1920 canvas, no overflow:hidden clipping,
  // no transform:scale(). Every branch component is expected to be
  // responsive via its own Tailwind breakpoints (see Peckham/index.tsx
  // as the reference implementation).
  if (branch === "manchester") {
    return (
      <FluidBranchPage onBack={onBack}>
        <Manchester />
      </FluidBranchPage>
    );
  }
  if (branch === "bexley") {
    return (
      <FluidBranchPage onBack={onBack}>
        <Bexley />
      </FluidBranchPage>
    );
  }
  if (branch === "peckham") {
    return (
      <FluidBranchPage onBack={onBack}>
        <Peckham />
      </FluidBranchPage>
    );
  }
  if (branch === "cranfield") {
    return (
      <FluidBranchPage onBack={onBack}>
        <Cranfield />
      </FluidBranchPage>
    );
  }
  if (branch === "birmingham") {
    return (
      <FluidBranchPage onBack={onBack}>
        <Birmingham />
      </FluidBranchPage>
    );
  }
  if (branch === "aberdeen") {
    return (
      <FluidBranchPage onBack={onBack}>
        <Aberdeen />
      </FluidBranchPage>
    );
  }
  if (branch === "italy") {
    return (
      <FluidBranchPage onBack={onBack}>
        <Italy />
      </FluidBranchPage>
    );
  }
  if (branch === "germany") {
    return (
      <FluidBranchPage onBack={onBack}>
        <Germany />
      </FluidBranchPage>
    );
  }
  if (branch === "sussex") {
    return (
      <FluidBranchPage onBack={onBack}>
        <Sussex />
      </FluidBranchPage>
    );
  }
  if (branch === "coventry") {
    return (
      <FluidBranchPage onBack={onBack}>
        <Coventry />
      </FluidBranchPage>
    );
  }
  if (branch === "denmark") {
    return (
      <FluidBranchPage onBack={onBack}>
        <Denmark />
      </FluidBranchPage>
    );
  }
  if (branch === "edinburgh") {
    return (
      <FluidBranchPage onBack={onBack}>
        <Edinburgh />
      </FluidBranchPage>
    );
  }
  if (branch === "france") {
    return (
      <FluidBranchPage onBack={onBack}>
        <France />
      </FluidBranchPage>
    );
  }
  if (branch === "ireland") {
    return (
      <FluidBranchPage onBack={onBack}>
        <Ireland />
      </FluidBranchPage>
    );
  }
  if (branch === "glasgow") {
    return (
      <FluidBranchPage onBack={onBack}>
        <Glasgow />
      </FluidBranchPage>
    );
  }
  if (branch === "leicester") {
    return (
      <FluidBranchPage onBack={onBack}>
        <Leicester />
      </FluidBranchPage>
    );
  }
  if (branch === "spain") {
    return (
      <FluidBranchPage onBack={onBack}>
        <Spain />
      </FluidBranchPage>
    );
  }
  if (branch === "bristolcardiff") {
    return (
      <FluidBranchPage onBack={onBack}>
        <BristolCardiff />
      </FluidBranchPage>
    );
  }

  return <PlaceholderBranchPage city={branch} onBack={onBack} />;
}