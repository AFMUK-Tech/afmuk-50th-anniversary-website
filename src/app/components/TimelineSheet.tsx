import { useCallback, useEffect, useRef, useState } from "react";
import { TimelineSection, TIMELINE_DATA } from "./sections";

const DESIGN_WIDTH = 1440;
const MOBILE_TIMELINE_BREAKPOINT = 1024;
const SCROLL_PER_STEP = 120;
const TIMELINE_STEPS = TIMELINE_DATA.length;

export function TimelineSheet() {
  const [open, setOpen] = useState(window.location.hash === "#timeline");
  const [activeIdx, setActiveIdx] = useState(0);
  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const scrollRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    if (window.location.hash === "#timeline") {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search,
      );
    }
    setOpen(false);
  }, []);

  useEffect(() => {
    const openTimeline = () => {
      setActiveIdx(0);
      setOpen(true);
    };

    const onHashChange = () => {
      if (window.location.hash === "#timeline") {
        openTimeline();
      } else {
        setOpen(false);
      }
    };

    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("popstate", onHashChange);
    window.addEventListener("timeline:open", openTimeline);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("popstate", onHashChange);
      window.removeEventListener("timeline:open", openTimeline);
    };
  }, []);

  useEffect(() => {
    const updateViewport = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", updateViewport);
    window.addEventListener("orientationchange", updateViewport);
    return () => {
      window.removeEventListener("resize", updateViewport);
      window.removeEventListener("orientationchange", updateViewport);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const scrollPosition = window.scrollY;
    const previousOverflow = document.body.style.overflow;
    const previousPosition = document.body.style.position;
    const previousTop = document.body.style.top;
    const previousWidth = document.body.style.width;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = "100%";
    document.documentElement.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    requestAnimationFrame(() => scrollRef.current?.scrollTo({ top: 0 }));

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.position = previousPosition;
      document.body.style.top = previousTop;
      document.body.style.width = previousWidth;
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.removeEventListener("keydown", onKeyDown);
      window.scrollTo(0, scrollPosition);
    };
  }, [close, open]);

  if (!open) return null;

  const useMobileExperience = viewport.width < MOBILE_TIMELINE_BREAKPOINT;
  const desktopScale = Math.min(viewport.width / DESIGN_WIDTH, 1);
  const scrollDistance =
    TIMELINE_STEPS * SCROLL_PER_STEP *
    (useMobileExperience ? 1 : desktopScale);

  const updateActiveYear = () => {
    const scroller = scrollRef.current;
    if (!scroller) return;

    const maxScroll = Math.max(1, scroller.scrollHeight - scroller.clientHeight);
    const progress = Math.min(Math.max(scroller.scrollTop / maxScroll, 0), 1);
    setActiveIdx(
      Math.min(Math.floor(progress * TIMELINE_STEPS), TIMELINE_STEPS - 1),
    );
  };

  return (
    <>
      <style>{`
        @keyframes timelineSheetIn {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div
        aria-hidden="true"
        className="fixed inset-0 z-1000 bg-black/60"
        onClick={close}
      />

      <div
        aria-label="Timeline"
        aria-modal="true"
        className="fixed inset-0 z-1001 overflow-hidden bg-[#0f1421]"
        role="dialog"
        style={{ animation: "timelineSheetIn 0.35s cubic-bezier(0.32,0.72,0,1)" }}
      >
        <button
          aria-label="Close timeline"
          className="fixed right-5 top-[max(16px,env(safe-area-inset-top))] z-1010 flex size-10 items-center justify-center rounded-full border border-white/25 bg-[#0f1421]/70 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          onClick={close}
          type="button"
        >
          <svg
            aria-hidden="true"
            fill="none"
            height="18"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            width="18"
          >
            <line x1="18" x2="6" y1="6" y2="18" />
            <line x1="6" x2="18" y1="6" y2="18" />
          </svg>
        </button>

        <div
          ref={scrollRef}
          className="h-full overflow-y-auto overscroll-contain"
          onScroll={updateActiveYear}
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <div
            className="relative w-full"
            style={{ height: scrollDistance + viewport.height }}
          >
            <div className="sticky top-0 h-svh w-full overflow-hidden bg-[#0f1421]">
              <TimelineSection
                activeYearIndex={activeIdx}
                showMobileRing={useMobileExperience}
                transitionProgress={0}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
