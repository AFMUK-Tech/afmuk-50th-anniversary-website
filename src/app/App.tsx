import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  Section1,
  StoriesSection,
  PreTimelineSection, TimelineSection, PostTimelineSection,
  TIMELINE_DATA,
  PRE_H_TOTAL,
  STORIES_MIN_H,
} from "./components/sections";
import { Footer } from "./components/footer";
import Nav from "../imports/Nav/index";
import MobileNav from "./components/MobileNav";
import MobileGallery from "./components/MobileGallery";
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

// STORIES_DWELL_H governs how long (in scroll px) the Stories section stays
// pinned before the Timeline slides in.
const STORIES_DWELL_H   = 1000; // Increased to give more scroll room

const TIMELINE_VIS_H    = 782;
const TIMELINE_STEPS    = TIMELINE_DATA.length;
const SCROLL_PER_STEP   = 120;
const TIMELINE_SCROLL_H = TIMELINE_STEPS * SCROLL_PER_STEP;

const GALLERY_DWELL_H   = 600;

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
  return (
    <div style={{ height: height * scale, overflow: "hidden", width: "100%" }}>
      <div style={{ width: DESIGN_WIDTH, height, transform: `scale(${scale})`, transformOrigin: "top left" }}>
        {children}
      </div>
    </div>
  );
}

function MobileTimelineViewer() {
  const [idx, setIdx] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const total = TIMELINE_DATA.length;

  const goTo = (next: number) => {
    setIdx(Math.min(Math.max(next, 0), total - 1));
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = (e.changedTouches[0]?.clientX ?? touchStartX.current) - touchStartX.current;
    if (Math.abs(dx) > 40) {
      if (dx < 0) goTo(idx + 1); // swipe left -> next
      else goTo(idx - 1);        // swipe right -> prev
    }
    touchStartX.current = null;
  };

  return (
    <div
      id="timeline"
      className="relative w-full"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <TimelineSection activeYearIndex={idx} transitionProgress={0} />

      {/* Prev / next controls */}
      <div className="absolute inset-x-0 bottom-6 flex items-center justify-center gap-6 z-10 pointer-events-none">
        <button
          type="button"
          onClick={() => goTo(idx - 1)}
          disabled={idx === 0}
          aria-label="Previous year"
          className="pointer-events-auto size-11 rounded-full bg-white/10 border border-white/30 text-white text-xl flex items-center justify-center disabled:opacity-25 backdrop-blur-sm"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => goTo(idx + 1)}
          disabled={idx === total - 1}
          aria-label="Next year"
          className="pointer-events-auto size-11 rounded-full bg-white/10 border border-white/30 text-white text-xl flex items-center justify-center disabled:opacity-25 backdrop-blur-sm"
        >
          ›
        </button>
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
  const [vw, setVw]                          = useState(1440);
  const [vh, setVh]                          = useState(900);
  const [device, setDevice]                  = useState<DeviceType>('desktop');
  const [s1Progress, setS1Progress]          = useState(0);
  const [preY, setPreY]                      = useState(0);
  const [storiesY, setStoriesY]              = useState(0);
  const [storiesOpacity, setStoriesOpacity]  = useState(1);
  const [timelineY, setTimelineY]            = useState(900);
  const [galleryY, setGalleryY]              = useState(900);
  const [galleryOpacity, setGalleryOpacity]  = useState(0);
  const [activeYearIndex, setActiveIdx]      = useState(0);
  const [fadeIn, setFadeIn] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [storiesH, setStoriesH] = useState(STORIES_MIN_H);
  const storiesRef = useRef<HTMLDivElement>(null);

  // Calculate storiesScale BEFORE it's used in useEffect
  const storiesScale = (scale > 0 && vh > 0 && storiesH > 0) 
    ? Math.min(scale, vh / storiesH) 
    : scale;

  // Track scroll position for mobile nav visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Show nav after scrolling past the splash screen (50% of viewport height)
      const threshold = window.innerHeight * 0.5;
      setShowMobileNav(scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      setVw(window.innerWidth);
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
    if (device !== 'desktop') return;

    const s1End      = S1_SCROLL_H * scale;
    const preEnd     = s1End + PRE_H * scale;
    const storiesStart = preEnd;
    const storiesEnd = storiesStart + STORIES_DWELL_H * scale;
    const tlStart    = storiesEnd;
    const tlSlideEnd = tlStart + vh;
    const tlMainEnd  = tlSlideEnd + TIMELINE_SCROLL_H * scale;
    const tlExitEnd  = tlMainEnd + vh;
    const galleryStart = tlExitEnd;

    const onScroll = () => {
      const sy = window.scrollY;
      if (s1End <= 0) return;

      // Hero section
      const rawS1 = sy / s1End;
      setS1Progress(Number.isFinite(rawS1) ? Math.min(Math.max(rawS1, 0), 1) : 0);

      // PreTimeline
      setPreY(sy <= s1End ? 0 : Math.max(-(PRE_H * scale), -(sy - s1End)));

      // Stories - OUTER SCROLL CONTROLS INNER CONTENT
      if (sy >= storiesStart && sy < storiesEnd) {
        // Stories section is in view - calculate scroll progress within the section
        const progress = (sy - storiesStart) / (STORIES_DWELL_H * scale);
        
        // Apply translateY to scroll the content upward
        // We want to show the content progressively
        const maxTranslate = -(storiesH * storiesScale - vh);
        const translateY = -progress * (storiesH * storiesScale - vh);
        
        setStoriesY(Math.max(maxTranslate, Math.min(0, translateY)));
        setStoriesOpacity(1);
        
        // Scroll the inner content using the outer scroll
        if (storiesRef.current) {
          const scrollTop = progress * (storiesRef.current.scrollHeight - storiesRef.current.clientHeight);
          storiesRef.current.scrollTop = scrollTop;
        }
      } else if (sy < storiesStart) {
        setStoriesY(0);
        setStoriesOpacity(1);
      } else {
        // After stories section, fade it out
        const fadeProgress = (sy - storiesEnd) / (vh * 0.5);
        setStoriesOpacity(Math.max(0, 1 - fadeProgress));
        setStoriesY(-(storiesH * storiesScale - vh)); // Fully scrolled
      }

      // Timeline
      if (sy < tlStart) {
        setTimelineY(vh);
        setActiveIdx(0);
      } else if (sy < tlSlideEnd) {
        setTimelineY(Math.max(0, vh - (sy - tlStart)));
        setActiveIdx(0);
      } else if (sy < tlMainEnd) {
        setTimelineY(0);
        const p = (sy - tlSlideEnd) / (TIMELINE_SCROLL_H * scale);
        setActiveIdx(Math.min(Math.floor(p * TIMELINE_STEPS), TIMELINE_STEPS - 1));
      } else if (sy < tlExitEnd) {
        const timelineExit = sy - tlMainEnd;
        setTimelineY(Math.max(-vh, -timelineExit));
        setActiveIdx(TIMELINE_STEPS - 1);
      } else {
        setTimelineY(-vh);
        setActiveIdx(TIMELINE_STEPS - 1);
      }

      // Gallery
      if (sy < galleryStart) {
        setGalleryY(vh);
        setGalleryOpacity(0);
      } else if (sy < galleryStart + GALLERY_DWELL_H * scale) {
        setGalleryY(0);
        setGalleryOpacity(1);
      } else {
        const galleryExit = sy - (galleryStart + GALLERY_DWELL_H * scale);
        setGalleryY(Math.max(-vh, -galleryExit));
        setGalleryOpacity(0);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [scale, vh, device, storiesH, storiesScale]);

  const safeProgress   = Number.isFinite(s1Progress) ? s1Progress : 0;
  const phase1         = Math.min(safeProgress / P1_END, 1);
  const phase2         = Math.min(Math.max((safeProgress - P1_END) / (1 - P1_END), 0), 1);
  const heroTranslateY = -(phase2 * vh);

  const navOpacity    = phase2;
  const navTranslateY = (1 - phase2) * -NAV_H * scale;

  const heroFitScale  = (scale > 0 && vh > 0) ? Math.min(scale, vh / S1_HEIGHT) : scale;
  const heroOffsetX   = (vw - DESIGN_WIDTH * heroFitScale) / 2;
  const heroOffsetY   = Math.max(0, (vh - S1_HEIGHT * heroFitScale) / 2);

  // Stories: fit-to-viewport pattern
  const storiesOffsetX = (vw - DESIGN_WIDTH  * storiesScale) / 2;
  const storiesOffsetY = Math.max(0, (vh - storiesH * storiesScale) / 2);

  const tlScale   = (scale > 0 && vh > 0) ? Math.max(scale, vh / TIMELINE_VIS_H) : scale;
  const tlOffsetX = (vw - DESIGN_WIDTH    * tlScale) / 2;
  const tlOffsetY = (vh - TIMELINE_VIS_H * tlScale) / 2;

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
            <div style={{ width: "100%", height: 1178 * scale, overflow: "hidden" }}>
              <div style={{ width: 1440, height: 1178, transform: `scale(${scale})`, transformOrigin: "top left" }}>
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
      <div className="w-full bg-[#fcf9f2] overflow-x-hidden">
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

        <Section1 scrollProgress={0} staticReveal />
        <PreTimelineSection />
        <StoriesSection />
        <MobileTimelineViewer />
        <PostTimelineSection />
        <Footer />
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // DESKTOP home page: pinned-canvas scrollytelling
  // ─────────────────────────────────────────────────────────────────────────
  return (
    <div className="w-full bg-[#fcf9f2]">
      <TimelineSheet />

      {/* Spacers for scroll-driven animation */}
      <div style={{ height: S1_SCROLL_H       * scale }} />
      <div style={{ height: PRE_H             * scale }} />
      <div style={{ height: STORIES_DWELL_H   * scale }} />
      <div style={{ height: vh                        }} />
      <div style={{ height: TIMELINE_SCROLL_H * scale }} />
      <div style={{ height: vh                        }} />
      <div style={{ height: GALLERY_DWELL_H   * scale }} />
      <div style={{ height: vh                        }} />

      <ScaledBlock height={FOOTER_H} scale={scale}>
        <Footer />
      </ScaledBlock>

      {/* z:2 — Gallery */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 2,
        overflow: "hidden", background: "#fcf9f2",
        transform: `translateY(${galleryY}px)`,
        pointerEvents: "none",
      }}>
        <div style={{
          opacity: galleryOpacity,
          transform: `scale(${0.96 + (galleryOpacity * 0.04)})`,
          transition: "opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
          pointerEvents: galleryY === 0 ? "auto" : "none",
        }}>
          <div style={{ width: DESIGN_WIDTH, height: POST_H, transform: `scale(${scale})`, transformOrigin: "top left" }}>
            <PostTimelineSection />
          </div>
        </div>
      </div>

      {/* z:4 — Stories - OUTER SCROLL CONTROLS INNER SCROLL */}
      <div style={{
        position: "fixed", 
        top: 0, 
        left: 0, 
        width: "100%",
        height: "100vh",
        zIndex: 4,
        overflow: "hidden",
        background: "#FCF9F2",
        pointerEvents: "none",
        opacity: storiesOpacity,
        transition: "opacity 0.5s ease",
      }}>
        <div
          ref={storiesRef}
          style={{
            position: "absolute",
            top: storiesOffsetY,
            left: storiesOffsetX,
            width: DESIGN_WIDTH,
            height: storiesH,
            transform: `scale(${storiesScale})`,
            transformOrigin: "top left",
            overflowY: "scroll",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            pointerEvents: "auto",
          }}
        >
          {/* Hide scrollbar */}
          <style>
            {`
              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>
          <div className="hide-scrollbar" style={{ width: "100%", height: "100%" }}>
            <StoriesSection onHeightChange={setStoriesH} />
          </div>
        </div>
      </div>

      {/* z:5 — Intro block */}
      <div style={{
        position: "fixed", top: 0, left: 0, width: "100%",
        height: PRE_H * scale, zIndex: 5, overflow: "hidden",
        transform: `translateY(${preY}px)`,
        pointerEvents: "none",
      }}>
        <div style={{ paddingTop: NAV_H * scale, width: "100%", height: "100%", boxSizing: "border-box" }}>
          <div style={{
            opacity: fadeIn ? 1 : 0,
            transform: fadeIn ? "scale(1)" : "scale(0.98)",
            transition: "opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1), transform 0.9s cubic-bezier(0.4, 0, 0.2, 1)",
            pointerEvents: preY === 0 ? "auto" : "none",
          }}>
            <div style={{ width: DESIGN_WIDTH, height: PRE_H, transform: `scale(${scale})`, transformOrigin: "top left" }}>
              <PreTimelineSection />
            </div>
          </div>
        </div>
      </div>

      {/* z:10 — Hero */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 10, overflow: "hidden",
        backgroundImage: "linear-gradient(0.480792deg, rgb(25, 36, 65) 38.09%, rgb(1, 9, 25) 110.38%)",
        transform: `translateY(${heroTranslateY}px)`,
        pointerEvents: heroTranslateY <= -vh ? "none" : "auto",
      }}>
        <div style={{
          opacity: fadeIn ? 1 : 0,
          transform: fadeIn ? "scale(1)" : "scale(0.98)",
          transition: "opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1), transform 0.9s cubic-bezier(0.4, 0, 0.2, 1)",
        }}>
          <div style={{
            position: "absolute",
            top: heroOffsetY, left: heroOffsetX,
            width: DESIGN_WIDTH, height: S1_HEIGHT,
            transform: `scale(${heroFitScale})`, transformOrigin: "top left",
          }}>
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
        <div style={{ width: DESIGN_WIDTH, height: NAV_H, transform: `scale(${scale})`, transformOrigin: "top left", position: "relative" }}>
          <Nav />
        </div>
      </div>

      {/* z:50 — Timeline */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 50, overflow: "hidden",
        transform: `translateY(${timelineY}px)`,
        pointerEvents: "none",
      }}>
        <div style={{
          opacity: fadeIn ? 1 : 0,
          transform: fadeIn ? "scale(1)" : "scale(0.98)",
          transition: "opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1), transform 0.9s cubic-bezier(0.4, 0, 0.2, 1)",
        }}>
          <div style={{
            position: "absolute",
            top: tlOffsetY, left: tlOffsetX,
            width: DESIGN_WIDTH, height: TIMELINE_VIS_H,
            transform: `scale(${tlScale})`, transformOrigin: "top left",
            pointerEvents: timelineY === 0 ? "auto" : "none",
          }}>
            <TimelineSection
              activeYearIndex={activeYearIndex}
              transitionProgress={0}
            />
          </div>
        </div>
      </div>

    </div>
  );
}