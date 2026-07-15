// gallery.tsx
import { useEffect, useState } from "react";
import type { ReactElement } from "react";
import svgPaths from "../../imports/Frame28-1/svg-507rsgd0a0";
import { SiteHeader, useSiteScale, useIsMobile, DESIGN_WIDTH } from "./SiteHeader";

// Static imports
import image14 from "../../imports/Frame28-1/13080b4795fd0ccbe725b61298f65577a198e84f.png";
import image15 from "../../imports/Frame28-1/4220d400525c50945c5ca0ef50b76d513a3cec9d.png";
import image16 from "../../imports/Frame28-1/f5b7af79a4a605ff9cc0d053e532afee9d16cbd7.png";
import image17 from "../../imports/Frame28-1/f2e30c0a264a39aae9ecc96a919006cbd7df2106.png";
import image18 from "../../imports/Frame28-1/b6cb69d93159764d9138d35c046c9a5205c45338.png";

interface SvgPaths {
  [key: string]: string;
}
const _svgPaths = svgPaths as unknown as SvgPaths;

const DESIGN_HEIGHT = 1000;

interface Slide {
  label: string;
  center: string;
  topRight: string;
  left: string;
  centerLeft: string;
  right: string;
}

const SLIDES: Slide[] = [
  { label: "Wales Camp Meeting 2019", center: image17, topRight: image14, left: image18, centerLeft: image15, right: image16 },
  { label: "Golden Jubilee 2026", center: image14, topRight: image16, left: image15, centerLeft: image17, right: image18 },
  { label: "Annual Convention 2018", center: image15, topRight: image18, left: image17, centerLeft: image16, right: image14 },
  { label: "Camp Meeting Memories", center: image16, topRight: image15, left: image14, centerLeft: image18, right: image17 },
  { label: "AFC UK Gathering 2020", center: image18, topRight: image17, left: image16, centerLeft: image14, right: image15 },
];

interface CardImgProps {
  src: string;
  isCenter: boolean;
}

function CardImg({ src, isCenter }: CardImgProps): ReactElement {
  return (
    <img
      src={src}
      alt="Gallery image"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        pointerEvents: "none",
        filter: isCenter ? "none" : "grayscale(100%)",
        transition: "filter 1.2s cubic-bezier(0.25, 0.1, 0.25, 1)",
      }}
    />
  );
}

/* ---------- Desktop / tablet canvas (fixed-width, scaled) ---------- */

function GalleryCanvas(): ReactElement {
  const [active, setActive] = useState<number>(0);
  const slide = SLIDES[active];
  const total = SLIDES.length;

  const prev = () => setActive(i => (i - 1 + total) % total);
  const next = () => setActive(i => (i + 1) % total);

  return (
    <div style={{ width: "100%", minHeight: "100vh", background: "#fcf9f2", position: "relative" }}>
      {/* SVG watermark */}
      <div className="absolute inset-[0_6.81%_3.06%_6.81%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1244 947.143">
          <g opacity="0.2">
            <path d={_svgPaths.p37e8bf00} fill="#949494" />
            <path d={_svgPaths.p393c3f00} fill="#949494" />
            <path d={_svgPaths.p23e19200} fill="#949494" />
            <path d={_svgPaths.p14e19df0} fill="#949494" />
            <path d={_svgPaths.pc527900} fill="#949494" />
            <path d={_svgPaths.p225f3400} fill="#949494" />
            <path d={_svgPaths.p14b90000} fill="#949494" />
            <path d={_svgPaths.p39cbce70} fill="#949494" />
            <path d={_svgPaths.p3dca9000} fill="#949494" />
            <path d={_svgPaths.p329cd300} fill="#949494" />
            <path d={_svgPaths.p25ff8f0} fill="#949494" />
            <path d={_svgPaths.p31b0d680} fill="#949494" />
          </g>
        </svg>
      </div>

      {/* Title */}
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute mt-10 flex flex-col font-['CRONDE:Regular'] justify-center leading-[0] not-italic text-[#0f1421] text-center"
        style={{
          left: "50%",
          top: "18%",
          width: "70%",
          maxWidth: 900,
          fontSize: "clamp(32px, 6.11vw, 88px)",
          whiteSpace: "normal",
          wordBreak: "break-word",
        }}
      >
        <p className="leading-[normal]">Our pictures over the years</p>
      </div>

      {/* Frame14 — card container */}
      <div
        style={{
          position: "absolute",
          height: 578,
          left: "50%",
          top: 330,
          width: 1631.549,
          transform: "translateX(-50%)",
          transformOrigin: "top center",
        }}
      >
        {/* Frame9 — center card, straight */}
        <button
          onClick={() => {
            window.location.hash = "#pictures";
          }}
          className="absolute bg-white overflow-clip shadow-[0px_0px_10.355px_0px_rgba(0,0,0,0.07)] border-0 p-0 cursor-pointer"
          style={{
            left: 689.65,
            top: 0,
            width: 242.003,
            paddingTop: 9.005,
            paddingLeft: 9.005,
            paddingRight: 9.005,
            paddingBottom: 36.019,
            transition: "all 1.2s cubic-bezier(0.25, 0.1, 0.25, 1), transform 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <div className="overflow-clip relative" style={{ height: 211.612, width: 223.993 }}>
            <div className="absolute flex items-center justify-center" style={{ height: 329.368, left: -158.98, top: -3.71, width: 484.105 }}>
              <div style={{ transform: "rotate(-1.45deg)", position: "relative", height: 317.397, width: 476.211 }}>
                <CardImg src={slide.center} isCenter={true} />
              </div>
            </div>
          </div>
        </button>

        {/* Frame1 — top-right, rotate +20° */}
        <div
          className="absolute flex items-center justify-center"
          style={{
            height: 323.928,
            left: 1012.32,
            top: 49,
            width: 315.183,
            transition: "all 1.2s cubic-bezier(0.25, 0.1, 0.25, 1)",
          }}
        >
          <div style={{ transform: "rotate(20deg)" }}>
            <div
              className="bg-white overflow-clip shadow-[0px_4.502px_4.727px_0px_rgba(0,0,0,0.07)]"
              style={{ width: 242.003, paddingTop: 9.005, paddingLeft: 9.005, paddingRight: 9.005, paddingBottom: 36.019 }}
            >
              <div className="overflow-clip relative" style={{ height: 211.612, width: 223.993 }}>
                <div className="absolute flex items-center justify-center" style={{ height: 585.238, left: -364.8, top: -148.58, width: 878.071 }}>
                  <div style={{ transform: "rotate(180deg) scaleY(-1)", position: "relative", height: 585.238, width: 878.071 }}>
                    <CardImg src={slide.topRight} isCenter={false} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Frame4 — left, rotate -30° */}
        <div
          className="absolute flex items-center justify-center"
          style={{
            height: 343.254,
            left: 0,
            top: 191,
            width: 337.898,
            transition: "all 1.2s cubic-bezier(0.25, 0.1, 0.25, 1)",
          }}
        >
          <div style={{ transform: "rotate(-30deg)" }}>
            <div
              className="bg-white overflow-clip shadow-[0px_4.502px_4.727px_0px_rgba(0,0,0,0.07)]"
              style={{ width: 242.003, paddingTop: 9.005, paddingLeft: 9.005, paddingRight: 9.005, paddingBottom: 36.019 }}
            >
              <div className="overflow-clip relative" style={{ height: 211.612, width: 223.993 }}>
                <div className="absolute flex items-center justify-center" style={{ height: 523.068, left: -191.03, top: -247.91, width: 702.395 }}>
                  <div style={{ transform: "rotate(8.82deg)", position: "relative", height: 429.334, width: 644.159 }}>
                    <CardImg src={slide.left} isCenter={false} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Frame5 — center-left, rotate -20° */}
        <div
          className="absolute flex items-center justify-center"
          style={{
            height: 323.928,
            left: 301,
            top: 49,
            width: 315.183,
            transition: "all 1.2s cubic-bezier(0.25, 0.1, 0.25, 1)",
          }}
        >
          <div style={{ transform: "rotate(-20deg)" }}>
            <div
              className="bg-white overflow-clip shadow-[0px_4.502px_4.727px_0px_rgba(0,0,0,0.07)]"
              style={{ width: 242.003, paddingTop: 9.005, paddingLeft: 9.005, paddingRight: 9.005, paddingBottom: 36.019 }}
            >
              <div className="overflow-clip relative" style={{ height: 211.612, width: 223.993 }}>
                <div className="-translate-x-1/2 absolute flex items-center justify-center" style={{ height: 249.462, left: "calc(50% + 3.45px)", top: -7.19, width: 367.998 }}>
                  <div style={{ transform: "rotate(1.19deg)", position: "relative", height: 241.976, width: 363.052 }}>
                    <CardImg src={slide.centerLeft} isCenter={false} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Frame7 — right, rotate +30° */}
        <div
          className="absolute flex items-center justify-center"
          style={{
            height: 343.254,
            left: 1293.65,
            top: 191,
            width: 337.898,
            transition: "all 1.2s cubic-bezier(0.25, 0.1, 0.25, 1)",
          }}
        >
          <div style={{ transform: "rotate(30deg)" }}>
            <div
              className="bg-white overflow-clip shadow-[0px_4.502px_4.727px_0px_rgba(0,0,0,0.07)]"
              style={{ width: 242.003, paddingTop: 9.005, paddingLeft: 9.005, paddingRight: 9.005, paddingBottom: 36.019 }}
            >
              <div className="overflow-clip relative" style={{ height: 211.612, width: 223.993 }}>
                <div className="absolute flex items-center justify-center" style={{ height: 240.898, left: -123.02, top: -19.45, width: 358.495 }}>
                  <div style={{ transform: "rotate(-0.57deg)", position: "relative", height: 237.384, width: 356.163 }}>
                    <CardImg src={slide.right} isCenter={false} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Frame11 — Label text */}
        <div className="-translate-x-1/2 absolute flex items-center justify-center" style={{ left: "calc(50% - 6.27px)", top: 350 }}>
          <div
            className="flex flex-col font-['Futura_PT:Book',sans-serif] justify-center not-italic text-[#0f1421] text-[40px] text-center whitespace-nowrap"
            style={{
              lineHeight: 0,
              transition: "opacity 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)",
              fontSize: "clamp(20px, 2.78vw, 40px)",
            }}
          >
            <p style={{ lineHeight: "normal" }}>{slide.label}</p>
          </div>
        </div>

        {/* Navigation controls */}
        <div className="-translate-x-1/2 absolute flex gap-[20px] items-center justify-center" style={{ left: "calc(50% - 6.27px)", top: 400 }}>
          <button
            onClick={prev}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              transition: "opacity 0.3s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ width: "clamp(32px, 3.33vw, 48px)", height: "clamp(32px, 3.33vw, 48px)" }}>
              <path d="M30 12L18 24L30 36" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            </svg>
          </button>

          <div className="flex items-center gap-[10px]">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  width: "clamp(8px, 0.83vw, 12px)",
                  height: "clamp(8px, 0.83vw, 12px)",
                  borderRadius: "50%",
                  border: "none",
                  padding: 0,
                  background: i === active ? "#192441" : "#D8D8D8",
                  cursor: "pointer",
                  transition: "background 0.8s cubic-bezier(0.25, 0.1, 0.25, 1), transform 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.3)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            ))}
          </div>

          <button
            onClick={next}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              transition: "opacity 0.3s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ width: "clamp(32px, 3.33vw, 48px)", height: "clamp(32px, 3.33vw, 48px)" }}>
              <path d="M30 12L18 24L30 36" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" transform="rotate(180 24 24)" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------- Mobile layout (natural sizing, single card, no scale transform) ---------- */

function GalleryMobile(): ReactElement {
  const [active, setActive] = useState<number>(0);
  const slide = SLIDES[active];
  const total = SLIDES.length;

  const prev = () => setActive(i => (i - 1 + total) % total);
  const next = () => setActive(i => (i + 1) % total);

  return (
    <div style={{ width: "100%", minHeight: "100svh", background: "#fcf9f2", position: "relative", paddingTop: 112, paddingBottom: 48, overflow: "hidden" }}>
      <div className="absolute inset-[-4%_-55%_0] opacity-20" style={{ transform: "rotate(-10deg)" }}>
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1244 947.143">
          <g>
            {Object.values(_svgPaths).map((path, index) => <path key={index} d={path} fill="#949494" />)}
          </g>
        </svg>
      </div>

      <div style={{ position: "relative", padding: "0 18px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1
          className="font-['CRONDE:Regular',sans-serif]"
          style={{ margin: 0, width: "min(86vw, 330px)", fontSize: "clamp(48px, 14vw, 60px)", color: "#0f1421", textAlign: "center", lineHeight: 0.9 }}
        >
          Our pictures
          <br />
          over the
          <br />
          years
        </h1>

        <div style={{ position: "relative", width: "100vw", height: "clamp(180px, 56vw, 250px)", marginTop: 64 }}>
          <div className="absolute bg-white shadow-[0_4px_10px_rgba(0,0,0,.10)]" style={{ width: "clamp(120px,36vw,170px)", padding: "7px 7px 24px", left: "-16%", top: 30, transform: "rotate(-20deg)" }}>
            <div style={{ position: "relative", aspectRatio: "1.05/1", overflow: "hidden" }}><CardImg src={slide.centerLeft} isCenter={false} /></div>
          </div>
          <button
            onClick={() => { window.location.hash = "#pictures"; }}
            className="absolute left-1/2 z-10 -translate-x-1/2 border-0 bg-white shadow-[0_3px_12px_rgba(0,0,0,.10)] cursor-pointer"
            style={{ width: "clamp(112px, 31vw, 150px)", padding: "7px 7px 24px", top: 0 }}
          >
            <div style={{ position: "relative", width: "100%", aspectRatio: "1 / 1.08", overflow: "hidden" }}><CardImg src={slide.center} isCenter={true} /></div>
          </button>
          <div className="absolute bg-white shadow-[0_4px_10px_rgba(0,0,0,.10)]" style={{ width: "clamp(120px,36vw,170px)", padding: "7px 7px 24px", right: "-16%", top: 30, transform: "rotate(20deg)" }}>
            <div style={{ position: "relative", aspectRatio: "1.05/1", overflow: "hidden" }}><CardImg src={slide.topRight} isCenter={false} /></div>
          </div>
        </div>

        <p
          className="font-['Futura_PT:Book',sans-serif]"
          style={{ margin: "4px 0 0", fontSize: 15, color: "#0f1421", textAlign: "center" }}
        >
          {slide.label}
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 6 }}>
          <button
            onClick={prev}
            aria-label="Previous"
            style={{ background: "none", border: "none", padding: 8, cursor: "pointer" }}
          >
            <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
              <path d="M30 12L18 24L30 36" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            </svg>
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to slide ${i + 1}`}
                style={{
                  display: "grid",
                  placeItems: "center",
                  width: 32,
                  height: 44,
                  border: "none",
                  padding: 0,
                  background: "transparent",
                  cursor: "pointer",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    display: "block",
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: i === active ? "#192441" : "#D8D8D8",
                    transition: "background 0.25s ease, transform 0.25s ease",
                    transform: i === active ? "scale(1.2)" : "scale(1)",
                  }}
                />
              </button>
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next"
            style={{ background: "none", border: "none", padding: 8, cursor: "pointer" }}
          >
            <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
              <path d="M30 12L18 24L30 36" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" transform="rotate(180 24 24)" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export function GalleryPage({ onBack: _onBack }: { onBack?: () => void } = {}): ReactElement {
  const isMobile = useIsMobile();
  const scale = useSiteScale();
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
          transition: "opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1) 0.1s, transform 0.9s cubic-bezier(0.4, 0, 0.2, 1) 0.1s",
        }}
      >
        {isMobile ? (
          <GalleryMobile />
        ) : (
          <div style={{ width: "100%", height: DESIGN_HEIGHT * scale, overflow: "hidden" }}>
            <div style={{ width: scale < 1 ? DESIGN_WIDTH : "100%", height: DESIGN_HEIGHT, transform: scale < 1 ? `scale(${scale})` : "none", transformOrigin: "top left" }}>
              <GalleryCanvas />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default GalleryPage;
