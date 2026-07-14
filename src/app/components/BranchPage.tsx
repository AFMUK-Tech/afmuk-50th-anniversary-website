import { useState, useEffect } from "react";
import Nav from "../../imports/Nav/index";
import MobileNav from "./MobileNav";
import Manchester from "../../imports/Manchester-1/index";
import Bexley from "../../imports/Bexley/index";
import Peckham from "../../imports/Peckham/index";
import Cranfield from "../../imports/Cranfield/index";
import Birmingham from "../../imports/Birmingham/index";
import Aberdeen from "../../imports/Aberdeen/index";
import Italy from "../../imports/Italy/index";
import Germany from "../../imports/Germany/index";
import Sussex from "../../imports/Sussex/index";
import Conventry from "../../imports/Conventry/index";
import Demark from "../../imports/Demark/index";
import Edinburgh from "../../imports/Edinburgh/index";
import France from "../../imports/France/index";
import Ireland from "../../imports/Ireland/index";
import Glasgow from "../../imports/Glasgow/index";
import Leicester from "../../imports/Leicester/index";
import Spain from "../../imports/Spain/index";
import Bristol from "../../imports/Bristol/index";

const DESIGN_WIDTH  = 1440;
const DESIGN_HEIGHT = 1920;
const NAV_H = 80;
const MOBILE_BREAKPOINT = 768;

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

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < MOBILE_BREAKPOINT);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    update();
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  return isMobile;
}

function ScaledBranchPage({ children, onBack }: { children: React.ReactNode; onBack: () => void }) {
  const scale = useClampedScale();
  const isMobile = useIsMobile();
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      setFadeIn(true);
    });
  }, []);
  const mobileNavClearance = 96;

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
          paddingTop: isMobile ? mobileNavClearance : 0,
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

      {isMobile ? (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 100 }}>
          <MobileNav />
        </div>
      ) : (
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
      )}
    </div>
  );
}

function MobileBranchPage({ children, onBack }: { children: React.ReactNode; onBack: () => void }) {
  const [fadeIn, setFadeIn] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    requestAnimationFrame(() => setFadeIn(true));
  }, []);

  return (
    <div style={{ width: "100%", minHeight: "100vh", background: "#fcf9f2", position: "relative" }}>
      <div style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 100, height: isMobile ? "auto" : NAV_H }}>
        {isMobile ? <MobileNav /> : <Nav />}
      </div>

      <div
        style={{
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

function PlaceholderBranchPage({ city, onBack }: { city: string; onBack: () => void }) {
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
      justifyContent: "center", fontFamily: "'Inter', sans-serif", position: "relative",
    }}>
      <div style={{
        opacity: fadeIn ? 1 : 0,
        transform: fadeIn ? "scale(1)" : "scale(0.98)",
        transition: "opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1) 0.1s, transform 0.9s cubic-bezier(0.4, 0, 0.2, 1) 0.1s",
      }}>
        <div style={{ textAlign: "center", maxWidth: 560, padding: "0 24px" }}>
          <p style={{ fontSize: "clamp(11px, 2.2vw, 12px)", letterSpacing: "0.18em", textTransform: "uppercase", color: "#8b7f6a", marginBottom: 16 }}>
            AFC UK & Western Europe — Branch
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
    return <ResponsiveBranchPage onBack={onBack} Canvas={Manchester} Mobile={Manchester} />;
  }
  if (branch === "bexley") {
    return <ResponsiveBranchPage onBack={onBack} Canvas={Manchester} Mobile={Bexley} />;
  }
  if (branch === "peckham") {
    return <ResponsiveBranchPage onBack={onBack} Canvas={Manchester} Mobile={Peckham} />;
  }
  if (branch === "cranfield") {
    return <ResponsiveBranchPage onBack={onBack} Canvas={Manchester} Mobile={Cranfield} />;
  }
  if (branch === "birmingham") {
    return <ResponsiveBranchPage onBack={onBack} Canvas={Manchester} Mobile={Birmingham} />;
  }
 if (branch === "aberdeen") {
    return <ResponsiveBranchPage onBack={onBack} Canvas={Manchester} Mobile={Aberdeen} />;
  }
  if (branch === "italy") {
    return <ResponsiveBranchPage onBack={onBack} Canvas={Manchester} Mobile={Italy} />;
  }
  if (branch === "germany") {
    return <ResponsiveBranchPage onBack={onBack} Canvas={Manchester} Mobile={Germany} />;
  }
  if (branch === "sussex") {
    return <ResponsiveBranchPage onBack={onBack} Canvas={Manchester} Mobile={Sussex} />;
  }
  if (branch === "conventry") {
    return <ResponsiveBranchPage onBack={onBack} Canvas={Manchester} Mobile={Conventry} />;
  }
  if (branch === "demark") {
    return <ResponsiveBranchPage onBack={onBack} Canvas={Manchester} Mobile={Demark} />;
  }
  if (branch === "edinburgh") {
    return <ResponsiveBranchPage onBack={onBack} Canvas={Manchester} Mobile={Edinburgh} />;
  }
  if (branch === "france") {
    return <ResponsiveBranchPage onBack={onBack} Canvas={Manchester} Mobile={France} />;
  }
  if (branch === "ireland") {
    return <ResponsiveBranchPage onBack={onBack} Canvas={Manchester} Mobile={Ireland} />;
  }
  if (branch === "glasgow") {
    return <ResponsiveBranchPage onBack={onBack} Canvas={Manchester} Mobile={Glasgow} />;
  }
  if (branch === "liecester") {
    return <ResponsiveBranchPage onBack={onBack} Canvas={Manchester} Mobile={Leicester} />;
  }
  if (branch === "spain") {
    return <ResponsiveBranchPage onBack={onBack} Canvas={Manchester} Mobile={Spain} />;
  }
   if (branch === "bristol") {
    return <ResponsiveBranchPage onBack={onBack} Canvas={Manchester} Mobile={Bristol} />;
  }
  
  return <PlaceholderBranchPage city={branch} onBack={onBack} />;
}