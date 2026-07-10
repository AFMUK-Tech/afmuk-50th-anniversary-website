import React, { useEffect, useState } from "react";
import {
  Section1,
  StoriesSection,
  PreTimelineSection, TimelineSection, PostTimelineSection,
  TIMELINE_DATA,
} from "./components/sections";
import { Footer } from "./components/footer";
import Nav from "../imports/Nav/index";
import MobileNav from "./components/MobileNav";
import MobileTimeline from "./components/MobileTimeline";
import MobileGallery from "./components/MobileGallery";
import { GalleryPage } from "./components/gallery";
import { DepartmentPage } from "./components/department";
import { BranchPage } from "./components/BranchPage";
import { FounderPage } from "./components/FounderPage";
import { TimelineSheet } from "./components/TimelineSheet";
import PicturesPage from "../imports/PicturesPage/index";

const OTHER_BRANCHES = ["manchester", "bexley", "peckham", "cranfield", "birmingham", "aberdeen"] as const;
type BranchSlug = typeof OTHER_BRANCHES[number];

const DESIGN_WIDTH      = 1440;
const S1_HEIGHT         = 977;
const P1_END            = 0.5;
const S1_SCROLL_H       = Math.round(S1_HEIGHT * 1.5); // 1465

const NAV_H             = 80;
const PRE_H             = 1359;

const STORIES_VIS_H     = 900;
const STORIES_DWELL_H   = 600;

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

export default function App() {
  const [page, setPage] = useState<"home" | "gallery" | "pictures" | "founder" | "department" | BranchSlug>(() => {
    const h = window.location.hash.replace("#", "") as string;
    if (h === "gallery") return "gallery";
    if (h === "pictures") return "pictures";
    if (h === "founder") return "founder";
    if (h === "department") return "department";
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
  const [timelineY, setTimelineY]            = useState(900);
  const [galleryY, setGalleryY]              = useState(900);
  const [galleryOpacity, setGalleryOpacity]  = useState(0);
  const [activeYearIndex, setActiveIdx]      = useState(0);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const onHash = () => {
      const h = window.location.hash.replace("#", "") as string;
      if (h === "timeline") return; // handled by TimelineSheet
      else if (h === "gallery") setPage("gallery");
      else if (h === "pictures") setPage("pictures");
      else if (h === "founder") setPage("founder");
      else if (h === "department") setPage("department");
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

  useEffect(() => {
    const update = () => {
      setScale(window.innerWidth / DESIGN_WIDTH);
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
    const s1End      = S1_SCROLL_H * scale;
    const preEnd     = s1End + PRE_H * scale;
    const storiesEnd = preEnd + STORIES_DWELL_H * scale;
    const tlStart    = storiesEnd;
    const tlSlideEnd = tlStart + vh;
    const tlMainEnd  = tlSlideEnd + TIMELINE_SCROLL_H * scale;
    const tlExitEnd  = tlMainEnd + vh; // Timeline fully exits
    const galleryStart = tlExitEnd; // Gallery appears after timeline exits

    const onScroll = () => {
      const sy = window.scrollY;
      if (s1End <= 0) return;

      // Hero section
      const rawS1 = sy / s1End;
      setS1Progress(Number.isFinite(rawS1) ? Math.min(Math.max(rawS1, 0), 1) : 0);

      // PreTimeline
      setPreY(sy <= s1End ? 0 : Math.max(-(PRE_H * scale), -(sy - s1End)));

      // Stories
      if (sy <= storiesEnd) {
        setStoriesY(0);
      } else {
        setStoriesY(Math.max(-vh, -(sy - storiesEnd)));
      }

      // Timeline - slides up completely before gallery appears
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
        // Timeline exits completely
        const timelineExit = sy - tlMainEnd;
        setTimelineY(Math.max(-vh, -timelineExit));
        setActiveIdx(TIMELINE_STEPS - 1);
      } else {
        // Timeline fully hidden
        setTimelineY(-vh);
        setActiveIdx(TIMELINE_STEPS - 1);
      }

      // Gallery - appears immediately after timeline exits, no slide-in
      if (sy < galleryStart) {
        setGalleryY(vh);
        setGalleryOpacity(0);
      } else if (sy < galleryStart + GALLERY_DWELL_H * scale) {
        // Gallery locked in view
        setGalleryY(0);
        setGalleryOpacity(1);
      } else {
        // Gallery exits
        const galleryExit = sy - (galleryStart + GALLERY_DWELL_H * scale);
        setGalleryY(Math.max(-vh, -galleryExit));
        setGalleryOpacity(0);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [scale, vh]);

  const safeProgress   = Number.isFinite(s1Progress) ? s1Progress : 0;
  const phase1         = Math.min(safeProgress / P1_END, 1);
  const phase2         = Math.min(Math.max((safeProgress - P1_END) / (1 - P1_END), 0), 1);
  const heroTranslateY = -(phase2 * vh);

  const navOpacity    = phase2;
  const navTranslateY = (1 - phase2) * -NAV_H * scale;
  const canvasTop     = Math.max(0, (vh - S1_HEIGHT * scale) / 2);

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

  if ((OTHER_BRANCHES as readonly string[]).includes(page)) {
    return <><BranchPage branch={page} onBack={navigateHome} /><TimelineSheet /></>;
  }

  return (
    <div className="w-full bg-[#fcf9f2]">
      <TimelineSheet />

      {/*
       * Document scroll budget (in order)
       * ────────────────────────────────
       * S1_SCROLL_H × scale      hero phase-1 + curtain lift
       * PRE_H × scale            pre-timeline scrolls off
       * STORIES_DWELL_H × scale  stories visible
       * vh                       timeline slides in / stories slides out (push)
       * TIMELINE_SCROLL_H×scale  year-by-year dial
       * vh                       timeline exits completely
       * GALLERY_DWELL_H × scale  gallery locked visible
       * vh                       gallery slides off; footer revealed
       */}
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
        transition: "transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
      }}>
        <div style={{
          opacity: galleryOpacity,
          transform: `scale(${0.96 + (galleryOpacity * 0.04)})`,
          transition: "opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
          pointerEvents: galleryY === 0 ? "auto" : "none",
        }}>
          {device === 'mobile' || device === 'tablet' ? (
            <div style={{ width: '100%', height: '100vh' }}>
              <MobileGallery />
            </div>
          ) : (
            <div style={{ width: DESIGN_WIDTH, height: POST_H, transform: `scale(${scale})`, transformOrigin: "top left" }}>
              <PostTimelineSection />
            </div>
          )}
        </div>
      </div>

      {/* z:4 — Stories */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 4,
        overflow: "hidden", background: "#FCF9F2",
        transform: `translateY(${storiesY}px)`,
        pointerEvents: "none",
      }}>
        <div style={{
          opacity: fadeIn ? 1 : 0,
          transform: fadeIn ? "scale(1)" : "scale(0.98)",
          transition: "opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1), transform 0.9s cubic-bezier(0.4, 0, 0.2, 1)",
          pointerEvents: storiesY === 0 ? "auto" : "none",
        }}>
          <div style={{ width: DESIGN_WIDTH, height: STORIES_VIS_H, transform: `scale(${scale})`, transformOrigin: "top left" }}>
            <StoriesSection />
          </div>
        </div>
      </div>

      {/* z:5 — PreTimeline */}
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
        <div style={{ position: "absolute", top: canvasTop, left: 0, width: "100%", overflow: "hidden" }}>
          <div style={{
            opacity: fadeIn ? 1 : 0,
            transform: fadeIn ? "scale(1)" : "scale(0.98)",
            transition: "opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1), transform 0.9s cubic-bezier(0.4, 0, 0.2, 1)",
          }}>
            <div style={{ width: DESIGN_WIDTH, height: S1_HEIGHT, transform: `scale(${scale})`, transformOrigin: "top left" }}>
              <Section1 scrollProgress={phase1} />
            </div>
          </div>
        </div>
      </div>

      {/* z:20 — Nav */}
      <div style={{
        position: "fixed", top: 0, left: 0, width: "100%",
        height: device === 'mobile' ? 'auto' : NAV_H * scale, zIndex: 100, overflow: "visible",
        opacity: device === 'mobile' ? 1 : navOpacity, 
        transform: device === 'mobile' ? 'none' : `translateY(${navTranslateY}px)`,
        pointerEvents: device === 'mobile' ? 'auto' : (phase2 > 0.5 ? "auto" : "none"),
      }}>
        {device === 'mobile' ? (
          <MobileNav />
        ) : (
          <div style={{ width: DESIGN_WIDTH, height: NAV_H, transform: `scale(${scale})`, transformOrigin: "top left", position: "relative" }}>
            <Nav />
          </div>
        )}
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
          {device === 'mobile' || device === 'tablet' ? (
            <div style={{
              position: "absolute",
              inset: 0,
              pointerEvents: timelineY === 0 ? "auto" : "none",
            }}>
              <MobileTimeline activeYearIndex={activeYearIndex} />
            </div>
          ) : (
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
          )}
        </div>
      </div>

    </div>
  );
}