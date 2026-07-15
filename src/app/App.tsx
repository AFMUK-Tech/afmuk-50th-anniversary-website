import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  Section1,
  StoriesSection,
  PreTimelineSection, TimelineSection, PostTimelineSection,
  TIMELINE_DATA,
  PRE_H_TOTAL,
} from "./components/sections";
import { Footer } from "./components/footer";
import Nav from "../imports/Nav/index";
import MobileNav from "./components/MobileNav";
import { GalleryPage } from "./components/gallery";
import { DepartmentPage } from "./components/department";
import { BranchPage } from "./components/BranchPage";
import { FounderPage } from "./components/FounderPage";
import { TimelineSheet } from "./components/TimelineSheet";
import PicturesPage from "../imports/PicturesPage/index";
import { TestimoniesPage } from "./components/TestimoniesPage";
import { ShopPage } from "./components/ShopPage";

const OTHER_BRANCHES = [
  "manchester", "bexley", "peckham", "cranfield", "birmingham", "aberdeen",
  "bristol", "glasgow", "edinburgh", "coventry", "sussex", "leicester", "ireland",
  "germany", "france", "italy", "denmark", "spain",
] as const;
type BranchSlug = typeof OTHER_BRANCHES[number];

const DESIGN_WIDTH      = 1440;
const S1_HEIGHT         = 977;
const P1_END            = 0.5;
const S1_SCROLL_H       = Math.round(S1_HEIGHT * 1.5); // 1465

const NAV_H             = 80;

// PRE_H covers the combined "intro" block rendered by PreTimelineSection:
//   Praise-God-With-Us hero + Where-it-all-started + Video.
const PRE_H              = PRE_H_TOTAL;

const TIMELINE_STEPS    = TIMELINE_DATA.length;
const SCROLL_PER_STEP   = 120;
const TIMELINE_SCROLL_H = TIMELINE_STEPS * SCROLL_PER_STEP;

const POST_H   = 860;
const FOOTER_H = 440;

// Responsive breakpoints
const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
};

// Cap how far the 1440px design canvas is allowed to scale UP.
const MAX_SCALE = 1;

type DeviceType = 'mobile' | 'tablet' | 'desktop';

function ScaledBlock({
  height, scale, children,
}: { height: number; scale: number; children: React.ReactNode }) {
  const shouldScale = scale < 1;

  return (
    <div style={{ height: height * (shouldScale ? scale : 1), overflow: "hidden", width: "100%", position: "relative" }}>
      <div style={{
        width: shouldScale ? DESIGN_WIDTH : "100%",
        height,
        position: "absolute",
        left: shouldScale ? "50%" : 0,
        transform: shouldScale ? `translateX(-50%) scale(${scale})` : "none",
        transformOrigin: "top center",
      }}>
        {children}
      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState<"home" | "gallery" | "pictures" | "founder" | "department" | "watch" | "shop" | BranchSlug>(() => {
    const h = window.location.hash.replace("#", "") as string;
    if (h === "gallery") return "gallery";
    if (h === "pictures") return "pictures";
    if (h === "founder") return "founder";
    if (h === "department") return "department";
    if (h === "watch") return "watch";
    if (h === "shop") return "shop";
    if (h === "timeline") return "home"; // sheet handles itself
    if ((OTHER_BRANCHES as readonly string[]).includes(h)) return h as BranchSlug;
    return "home";
  });
  const [scale, setScale]                    = useState(1);
  const [vh, setVh]                          = useState(900);
  const [device, setDevice]                  = useState<DeviceType>('desktop');
  const [s1Progress, setS1Progress]          = useState(0);
  const [activeYearIndex, setActiveIdx]      = useState(0);
  const [fadeIn, setFadeIn] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const timelineScrollRef = useRef<HTMLDivElement>(null);
  const heroScrollDistance = device === 'desktop'
    ? S1_SCROLL_H * scale
    : vh * 1.5;

  useEffect(() => {
    const onHash = () => {
      const h = window.location.hash.replace("#", "") as string;
      if (h === "timeline") return; // handled by TimelineSheet
      else if (h === "gallery") setPage("gallery");
      else if (h === "pictures") setPage("pictures");
      else if (h === "founder") setPage("founder");
      else if (h === "department") setPage("department");
      else if (h === "watch") setPage("watch");
      else if (h === "shop") setPage("shop");
      else if ((OTHER_BRANCHES as readonly string[]).includes(h)) setPage(h as BranchSlug);
      else {
        setPage("home");
        setFadeIn(false);
        requestAnimationFrame(() => {
          setFadeIn(true);
        });
      }
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // Initial fade-in on mount
  useEffect(() => {
    requestAnimationFrame(() => {
      setFadeIn(true);
    });
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  useEffect(() => {
    const update = () => {
      const rawScale = window.innerWidth / DESIGN_WIDTH;
      setScale(Math.min(rawScale, MAX_SCALE));
      setVh(window.innerHeight);
      if (window.innerWidth < BREAKPOINTS.mobile) setDevice('mobile');
      else if (window.innerWidth < BREAKPOINTS.tablet) setDevice('tablet');
      else setDevice('desktop');
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const s1End = heroScrollDistance;

    const onScroll = () => {
      const sy = window.scrollY;
      if (s1End <= 0) return;

      const rawS1 = sy / s1End;
      setS1Progress(Number.isFinite(rawS1) ? Math.min(Math.max(rawS1, 0), 1) : 0);

      if (device !== 'desktop') {
        setShowMobileNav(rawS1 > 0.75);
      }

      const timeline = timelineScrollRef.current;
      if (timeline) {
        const rect = timeline.getBoundingClientRect();
        const scrollDistance = Math.max(1, rect.height - vh);
        const progress = Math.min(Math.max(-rect.top / scrollDistance, 0), 1);
        setActiveIdx(Math.min(Math.floor(progress * TIMELINE_STEPS), TIMELINE_STEPS - 1));
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [heroScrollDistance, vh, device]);

  const safeProgress   = Number.isFinite(s1Progress) ? s1Progress : 0;
  const phase1         = Math.min(safeProgress / P1_END, 1);
  const phase2         = Math.min(Math.max((safeProgress - P1_END) / (1 - P1_END), 0), 1);
  const heroTranslateY = -(phase2 * vh);

  const navOpacity    = phase2;
  const navTranslateY = (1 - phase2) * -NAV_H * scale;

  const navigateHome = () => { window.location.hash = ""; };

  if (page === "gallery") {
    return <><GalleryPage onBack={navigateHome} /><TimelineSheet /></>;
  }

  if (page === "pictures") {
    return (
      <>
        <div style={{ width: "100%", minHeight: "100vh", background: "#fcf9f2", position: "relative" }}>
          <div style={{
            opacity: fadeIn ? 1 : 0,
            transform: fadeIn ? "scale(1)" : "scale(0.98)",
            transition: "opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1) 0.1s, transform 0.9s cubic-bezier(0.4, 0, 0.2, 1) 0.1s",
          }}>
            <div style={{ width: "100%", height: 1178 * scale, overflow: "hidden", position: "relative" }}>
              <div style={{ width: 1440, height: 1178, position: "absolute", left: "50%", transform: `translateX(-50%) scale(${scale})`, transformOrigin: "top center" }}>
                <PicturesPage onBack={navigateHome} />
              </div>
            </div>
          </div>
        </div>
        <TimelineSheet />
      </>
    );
  }

  if (page === "founder") {
    return <><FounderPage onBack={navigateHome} /><TimelineSheet /></>;
  }

  if (page === "department") {
    return <><DepartmentPage onBack={navigateHome} /><TimelineSheet /></>;
  }

  if (page === "watch") {
    return <><TestimoniesPage onBack={navigateHome} /><TimelineSheet /></>;
  }

  if (page === "shop") {
    return <><ShopPage onBack={navigateHome} /><TimelineSheet /></>;
  }

  if ((OTHER_BRANCHES as readonly string[]).includes(page)) {
    return <><BranchPage branch={page} onBack={navigateHome} /><TimelineSheet /></>;
  }

  // ─────────────────────────────────────────────────────────────────────────
  // MOBILE / TABLET home page: natural document flow, no scroll-jacking.
  // ─────────────────────────────────────────────────────────────────────────
  if (device === 'mobile' || device === 'tablet') {
    return (
      <div className="w-full max-w-full bg-[#fcf9f2] overflow-x-clip">
        <TimelineSheet />
        
        {/* Mobile Nav - sticky after splash screen */}
        <div 
          className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ${
            showMobileNav ? 'translate-y-0' : '-translate-y-full'
          }`}
          style={{ pointerEvents: showMobileNav ? 'auto' : 'none' }}
        >
          <MobileNav />
        </div>

        <div aria-hidden style={{ height: heroScrollDistance }} />

        <main className="relative z-20 w-full max-w-full bg-[#fcf9f2]">
          <PreTimelineSection />
          <StoriesSection />
          <div
            id="timeline"
            ref={timelineScrollRef}
            style={{ height: TIMELINE_SCROLL_H + vh, position: "relative" }}
          >
            <div
              style={{
                position: "sticky",
                top: 0,
                height: "100svh",
                width: "100%",
                overflow: "hidden",
                background: "#0f1421",
              }}
            >
              <TimelineSection
                activeYearIndex={activeYearIndex}
                transitionProgress={0}
                showMobileRing
              />
            </div>
          </div>
          <PostTimelineSection />
          <Footer />
        </main>

        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 10,
            overflow: "hidden",
            backgroundImage: "linear-gradient(0.480792deg, rgb(25, 36, 65) 38.09%, rgb(1, 9, 25) 110.38%)",
            transform: `translateY(${heroTranslateY}px)`,
            pointerEvents: heroTranslateY <= -vh ? "none" : "auto",
          }}
        >
          <Section1 scrollProgress={phase1} />
        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // DESKTOP home page: natural flow with only the hero and timeline pinned.
  // ─────────────────────────────────────────────────────────────────────────
  return (
    <div className="w-full max-w-full bg-[#fcf9f2] overflow-x-clip">
      <TimelineSheet />

      <div aria-hidden style={{ height: heroScrollDistance }} />

      <main className="relative z-20 w-full max-w-full bg-[#fcf9f2]">
        <ScaledBlock height={PRE_H} scale={scale}>
          <PreTimelineSection />
        </ScaledBlock>

        <StoriesSection />

        <div
          id="timeline"
          ref={timelineScrollRef}
          style={{ height: TIMELINE_SCROLL_H * scale + vh, position: "relative" }}
        >
          <div
            style={{
              position: "sticky",
              top: 0,
              height: "100svh",
              width: "100%",
              overflow: "hidden",
              background: "#0f1421",
            }}
          >
            <TimelineSection activeYearIndex={activeYearIndex} transitionProgress={0} />
          </div>
        </div>

        <ScaledBlock height={POST_H} scale={scale}>
          <PostTimelineSection />
        </ScaledBlock>

        <ScaledBlock height={FOOTER_H} scale={scale}>
          <Footer />
        </ScaledBlock>
      </main>

      {/* z:10 — Hero */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 10, overflow: "hidden",
        backgroundImage: "linear-gradient(0.480792deg, rgb(25, 36, 65) 38.09%, rgb(1, 9, 25) 110.38%)",
        transform: `translateY(${heroTranslateY}px)`,
        pointerEvents: heroTranslateY <= -vh ? "none" : "auto",
      }}>
        <div style={{
          opacity: fadeIn ? 1 : 0,
          transition: "opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1)",
          width: "100%",
          height: "100%",
        }}>
          <div style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
            <Section1 scrollProgress={phase1} />
          </div>
        </div>
      </div>

      {/* z:20 — Nav */}
      <div style={{
        position: "fixed", top: 0, left: 0, width: "100%",
        height: NAV_H * scale, zIndex: 100, overflow: "visible",
        opacity: navOpacity,
        transform: `translateY(${navTranslateY}px)`,
        pointerEvents: phase2 > 0.5 ? "auto" : "none",
      }}>
        <div style={{
          width: scale < 1 ? DESIGN_WIDTH : "100%",
          height: NAV_H,
          position: "absolute",
          left: scale < 1 ? "50%" : 0,
          transform: scale < 1 ? `translateX(-50%) scale(${scale})` : "none",
          transformOrigin: "top center",
        }}>
          <Nav />
        </div>
      </div>

    </div>
  );
}