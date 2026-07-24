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
import { DepartmentDetailPage } from "./components/DepartmentDetailPage";
import { BranchPage } from "./components/BranchPage";
import { FounderPage } from "./components/FounderPage";
import { TimelineSheet } from "./components/TimelineSheet";
import PicturesPage from "../imports/PicturesPage/index";
import { TestimoniesPage } from "./components/TestimoniesPage";
import { ShopPage } from "./components/ShopPage";

const OTHER_BRANCHES = [
  "manchester", "bexley", "peckham", "cranfield", "birmingham", "aberdeen",
  "bristolcardiff", "glasgow", "edinburgh", "coventry", "sussex", "leicester", "ireland",
  "germany", "france", "italy", "denmark", "spain",
] as const;
type BranchSlug = typeof OTHER_BRANCHES[number];

const DEPARTMENT_SLUGS = [
  "dept-music", "dept-choir", "dept-sunday-school", "dept-youth", "dept-ushering", "dept-welfare",
] as const;
type DepartmentSlug = typeof DEPARTMENT_SLUGS[number];

const DESIGN_WIDTH      = 1440;
const S1_HEIGHT         = 977;
const P1_END            = 0.5;
// ~2.25× viewport gives the bible → anniversary → exit sequence enough
// travel that a normal wheel/swipe doesn't race through the whole intro.
const S1_SCROLL_H       = Math.round(S1_HEIGHT * 2.25);
const HERO_SCROLL_VH    = 2.25;
// Keep opening audio/fireworks alive until the hero is mostly scrolled away
// (previously cut at 15%, which killed sound while the logo was still on screen).
const ANNIVERSARY_AUDIO_UNTIL = 0.85;

const NAV_H             = 80;

// PRE_H covers the combined "intro" block rendered by PreTimelineSection:
//   Praise-God-With-Us hero + Where-it-all-started + Video.
const PRE_H              = PRE_H_TOTAL;

const TIMELINE_STEPS    = TIMELINE_DATA.length;
const SCROLL_PER_STEP   = 240;
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

function getDeviceType(width = window.innerWidth): DeviceType {
  if (width < BREAKPOINTS.mobile) return "mobile";
  if (width < BREAKPOINTS.tablet) return "tablet";
  return "desktop";
}

export default function App() {
  const [page, setPage] = useState<"home" | "gallery" | "pictures" | "founder" | "department" | "watch" | "shop" | BranchSlug | DepartmentSlug>(() => {
    const h = window.location.hash.replace("#", "") as string;
    if (h === "gallery") return "gallery";
    if (h === "pictures") return "pictures";
    if (h === "founder") return "founder";
    if (h === "department") return "department";
    if (h === "watch") return "watch";
    if (h === "shop") return "shop";
    if (h === "timeline") return "home"; // sheet handles itself
    if ((OTHER_BRANCHES as readonly string[]).includes(h)) return h as BranchSlug;
    if ((DEPARTMENT_SLUGS as readonly string[]).includes(h)) return h as DepartmentSlug;
    return "home";
  });
  const [scale, setScale] = useState(() => Math.min(window.innerWidth / DESIGN_WIDTH, MAX_SCALE));
  const [vh, setVh] = useState(() => window.innerHeight);
  const [device, setDevice] = useState<DeviceType>(() => getDeviceType());
  const [s1Progress, setS1Progress] = useState(0);
  const [activeYearIndex, setActiveIdx] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const timelineScrollRef = useRef<HTMLDivElement>(null);
  const preTimelineRef = useRef<HTMLElement>(null);
  const lastYearIdxRef = useRef(0);
  const heroScrollDistance = device === "desktop"
    ? S1_SCROLL_H * scale
    : vh * HERO_SCROLL_VH;

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
      else if ((DEPARTMENT_SLUGS as readonly string[]).includes(h)) setPage(h as DepartmentSlug);
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
      const width = window.innerWidth;
      setScale(Math.min(width / DESIGN_WIDTH, MAX_SCALE));
      setVh(window.innerHeight);
      setDevice(getDeviceType(width));
    };
    update();
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  useEffect(() => {
    const s1End = heroScrollDistance;
    let rafId = 0;

    const updateFromScroll = () => {
      rafId = 0;
      const sy = window.scrollY;
      if (s1End <= 0) return;

      const rawS1 = sy / s1End;
      const nextProgress = Number.isFinite(rawS1) ? Math.min(Math.max(rawS1, 0), 1) : 0;
      setS1Progress((prev) => (Math.abs(prev - nextProgress) < 0.0008 ? prev : nextProgress));

      if (device !== "desktop") {
        const showNav = nextProgress > 0.75;
        setShowMobileNav((prev) => (prev === showNav ? prev : showNav));
      }

      const timeline = timelineScrollRef.current;
      if (timeline) {
        const rect = timeline.getBoundingClientRect();
        const scrollDistance = Math.max(1, rect.height - vh);
        const progress = Math.min(Math.max(-rect.top / scrollDistance, 0), 1);
        const nextIdx = Math.min(Math.floor(progress * TIMELINE_STEPS), TIMELINE_STEPS - 1);
        if (nextIdx !== lastYearIdxRef.current) {
          lastYearIdxRef.current = nextIdx;
          setActiveIdx(nextIdx);
        }
      }
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(updateFromScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateFromScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [heroScrollDistance, vh, device]);

  const safeProgress   = Number.isFinite(s1Progress) ? s1Progress : 0;
  const phase1         = Math.min(safeProgress / P1_END, 1);
  const phase2         = Math.min(Math.max((safeProgress - P1_END) / (1 - P1_END), 0), 1);
  const heroTranslateY = -(phase2 * vh);
  const anniversaryInView = phase2 < ANNIVERSARY_AUDIO_UNTIL;

  const navOpacity    = phase2;
  const navTranslateY = (1 - phase2) * -NAV_H * scale;

  const navigateHome = () => { window.location.hash = ""; };
  // bible → midpoint (logo reveal); anniversary → end of hero spacer (content enters).
  // Never scroll backwards from a later stage — advance forward instead.
  const scrollHeroForward = (stage: "bible" | "anniversary") => {
    const bibleTarget = heroScrollDistance * P1_END;
    const endTarget = heroScrollDistance;
    const current = window.scrollY;
    const target =
      stage === "bible" && current < bibleTarget - 12
        ? bibleTarget
        : endTarget;

    if (Math.abs(current - target) < 8) return;
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  if (page === "gallery") {
    return <><GalleryPage onBack={navigateHome} /><TimelineSheet /></>;
  }

  if (page === "pictures") {
    return <><PicturesPage /><TimelineSheet /></>;
  }

  if (page === "founder") {
    return <><FounderPage onBack={navigateHome} /><TimelineSheet /></>;
  }

  if (page === "department") {
    return <><DepartmentPage onBack={navigateHome} /><TimelineSheet /></>;
  }

  if ((DEPARTMENT_SLUGS as readonly string[]).includes(page)) {
    return <><DepartmentDetailPage slug={page} onBack={() => { window.location.hash = "department"; }} /><TimelineSheet /></>;
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

        <main ref={preTimelineRef} className="relative z-20 w-full max-w-full bg-[#fcf9f2]">
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
          <Section1 anniversaryInView={anniversaryInView} onScrollDown={scrollHeroForward} scrollProgress={phase1} />
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

      <main ref={preTimelineRef} className="relative z-20 w-full max-w-full bg-[#fcf9f2]">
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
            <Section1 anniversaryInView={anniversaryInView} onScrollDown={scrollHeroForward} scrollProgress={phase1} />
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
