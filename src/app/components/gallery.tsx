// Provide module declarations for PNG imports to satisfy TypeScript
declare module "*.png" { const value: string; export default value }

import React from "react";
import svgPaths from "../../imports/Frame28-1/svg-507rsgd0a0";
import Nav from "../../imports/Nav/index";
import imgImage14 from "../../imports/Frame28-1/13080b4795fd0ccbe725b61298f65577a198e84f.png";
import imgImage18 from "../../imports/Frame28-1/b6cb69d93159764d9138d35c046c9a5205c45338.png";
import imgImage15 from "../../imports/Frame28-1/4220d400525c50945c5ca0ef50b76d513a3cec9d.png";
// The build may not always include every image file. Attempt to require the
// image at runtime and fall back to an empty string if it's missing so TypeScript
// and the bundler won't fail the build.
let imgImage16: string = "";
try {
  // @ts-ignore - allow dynamic require; file may be absent in some environments
  imgImage16 = require("../../imports/Frame28-1/f5b7af79a4a605ff9cc0d053e532afee9d16cbd7.png");
} catch (e) {
  imgImage16 = "";
}
import imgImage17 from "../../imports/Frame28-1/f2e30c0a264a39aae9ecc96a919006cbd7df2106.png";

interface SvgPaths {
  [key: string]: string;
}

const _svgPaths = svgPaths as unknown as SvgPaths;

import type { ReactElement } from "react";


const DESIGN_WIDTH  = 1440;
const DESIGN_HEIGHT = 1000;
const NAV_H = 80;

// Each slide: which image goes in each of the 5 card slots
// Slots: center (straight), topRight (+20°), left (-30°), centerLeft (-20°), right (+30°)
interface Slide {
  label: string;
  center: string;
  topRight: string;
  left: string;
  centerLeft: string;
  right: string;
}

const SLIDES: Slide[] = [
  { label: "Wales Camp Meeting 2019",   center: imgImage17, topRight: imgImage14, left: imgImage18, centerLeft: imgImage15, right: imgImage16 },
  { label: "Golden Jubilee 2023",        center: imgImage14, topRight: imgImage16, left: imgImage15, centerLeft: imgImage17, right: imgImage18 },
  { label: "Annual Convention 2018",     center: imgImage15, topRight: imgImage18, left: imgImage17, centerLeft: imgImage16, right: imgImage14 },
  { label: "Camp Meeting Memories",      center: imgImage16, topRight: imgImage15, left: imgImage14, centerLeft: imgImage18, right: imgImage17 },
  { label: "AFM UK Gathering 2020",      center: imgImage18, topRight: imgImage17, left: imgImage16, centerLeft: imgImage14, right: imgImage15 },
];

// Polaroid card image slot — the inner image container from Figma
interface CardImgProps {
  src: string;
  isCenter: boolean;
}

function CardImg({ src, isCenter }: CardImgProps): ReactElement {
  return (
    <img
      src={src}
      alt=""
      style={{
        position: "absolute", inset: 0,
        width: "100%", height: "100%",
        objectFit: "cover",
        pointerEvents: "none",
        filter: isCenter ? "none" : "grayscale(100%)",
        transition: "filter 1.2s cubic-bezier(0.25, 0.1, 0.25, 1)",
      }}
    />
  );
}

function GalleryCanvas(): ReactElement {
  const [active, setActive] = React.useState<number>(0);
  const slide = SLIDES[active];
  const total = SLIDES.length;

  const prev = () => setActive(i => (i - 1 + total) % total);
  const next = () => setActive(i => (i + 1) % total);

  return (
    <div className="bg-[#fcf9f2] relative" style={{ width: DESIGN_WIDTH, height: DESIGN_HEIGHT }}>

      {/* SVG watermark */}
      <div className="absolute inset-[0_6.81%_3.06%_6.81%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1244 947.143">
          <g opacity="0.2">
            <path d={svgPaths.p37e8bf00} fill="#949494" />
            <path d={svgPaths.p393c3f00} fill="#949494" />
            <path d={svgPaths.p23e19200} fill="#949494" />
            <path d={svgPaths.p14e19df0} fill="#949494" />
            <path d={svgPaths.pc527900}  fill="#949494" />
            <path d={svgPaths.p225f3400} fill="#949494" />
            <path d={svgPaths.p14b90000} fill="#949494" />
            <path d={svgPaths.p39cbce70} fill="#949494" />
            <path d={svgPaths.p3dca9000} fill="#949494" />
            <path d={svgPaths.p329cd300} fill="#949494" />
            <path d={svgPaths.p25ff8f0}  fill="#949494" />
            <path d={svgPaths.p31b0d680} fill="#949494" />
          </g>
        </svg>
      </div>

      {/* Title */}
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['CRONDE:Regular',sans-serif] justify-center leading-[0] not-italic text-[#0f1421] text-[88px] text-center"
        style={{ left: 692, top: 238, width: 550 }}>
        <p className="leading-[normal]">Our pictures over the years</p>
      </div>

      {/* Frame14 — card container */}
      <div style={{ position: "absolute", height: 578, left: -89, top: 369, width: 1631.549 }}>

        {/* Frame9 — center card, straight */}
        <button
          onClick={() => { window.location.hash = "#pictures"; }}
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
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
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
        <div className="absolute flex items-center justify-center" style={{ 
          height: 323.928, 
          left: 1012.32, 
          top: 49, 
          width: 315.183,
          transition: "all 1.2s cubic-bezier(0.25, 0.1, 0.25, 1)",
        }}>
          <div style={{ transform: "rotate(20deg)" }}>
            <div className="bg-white overflow-clip shadow-[0px_4.502px_4.727px_0px_rgba(0,0,0,0.07)]"
              style={{ width: 242.003, paddingTop: 9.005, paddingLeft: 9.005, paddingRight: 9.005, paddingBottom: 36.019 }}>
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
        <div className="absolute flex items-center justify-center" style={{ 
          height: 343.254, 
          left: 0, 
          top: 191, 
          width: 337.898,
          transition: "all 1.2s cubic-bezier(0.25, 0.1, 0.25, 1)",
        }}>
          <div style={{ transform: "rotate(-30deg)" }}>
            <div className="bg-white overflow-clip shadow-[0px_4.502px_4.727px_0px_rgba(0,0,0,0.07)]"
              style={{ width: 242.003, paddingTop: 9.005, paddingLeft: 9.005, paddingRight: 9.005, paddingBottom: 36.019 }}>
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
        <div className="absolute flex items-center justify-center" style={{ 
          height: 323.928, 
          left: 301, 
          top: 49, 
          width: 315.183,
          transition: "all 1.2s cubic-bezier(0.25, 0.1, 0.25, 1)",
        }}>
          <div style={{ transform: "rotate(-20deg)" }}>
            <div className="bg-white overflow-clip shadow-[0px_4.502px_4.727px_0px_rgba(0,0,0,0.07)]"
              style={{ width: 242.003, paddingTop: 9.005, paddingLeft: 9.005, paddingRight: 9.005, paddingBottom: 36.019 }}>
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
        <div className="absolute flex items-center justify-center" style={{ 
          height: 343.254, 
          left: 1293.65, 
          top: 191, 
          width: 337.898,
          transition: "all 1.2s cubic-bezier(0.25, 0.1, 0.25, 1)",
        }}>
          <div style={{ transform: "rotate(30deg)" }}>
            <div className="bg-white overflow-clip shadow-[0px_4.502px_4.727px_0px_rgba(0,0,0,0.07)]"
              style={{ width: 242.003, paddingTop: 9.005, paddingLeft: 9.005, paddingRight: 9.005, paddingBottom: 36.019 }}>
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

        {/* Frame11 — Label text (moved up) */}
        <div className="-translate-x-1/2 absolute flex items-center justify-center"
          style={{ left: "calc(50% - 6.27px)", top: 453 }}>
          <div className="flex flex-col font-['Futura_PT:Book',sans-serif] justify-center not-italic text-[#0f1421] text-[40px] text-center whitespace-nowrap" 
            style={{ 
              lineHeight: 0,
              transition: "opacity 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)",
            }}>
            <p style={{ lineHeight: "normal" }}>{slide.label}</p>
          </div>
        </div>

        {/* Navigation controls — arrows + dots together */}
        <div className="-translate-x-1/2 absolute flex gap-[20px] items-center justify-center"
          style={{ left: "calc(50% - 6.27px)", top: 566 }}>
          <button
            onClick={prev}
            style={{ 
              background: "none", 
              border: "none", 
              padding: 0, 
              cursor: "pointer",
              transition: "opacity 0.3s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path d="M30 12L18 24L30 36" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            </svg>
          </button>

          <div className="flex items-center gap-[10px]">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  width: 12, height: 12, borderRadius: "50%", border: "none", padding: 0,
                  background: i === active ? "#192441" : "#D8D8D8",
                  cursor: "pointer",
                  transition: "background 0.8s cubic-bezier(0.25, 0.1, 0.25, 1), transform 0.3s ease",
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.3)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
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
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path d="M30 12L18 24L30 36" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" transform="rotate(180 24 24)" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

interface GalleryPageProps { onBack: () => void }

export function GalleryPage({ onBack }: GalleryPageProps): ReactElement {
  const [scale, setScale] = React.useState<number>(window.innerWidth / DESIGN_WIDTH);
  const [fadeIn, setFadeIn] = React.useState<boolean>(false);

  React.useEffect(() => {
    const update = () => setScale(window.innerWidth / DESIGN_WIDTH);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  React.useEffect(() => {
    // Trigger fade-in animation
    requestAnimationFrame(() => {
      setFadeIn(true);
    });
  }, []);

  return (
    <div style={{ 
      width: "100%", 
      minHeight: "100vh", 
      background: "#fcf9f2", 
      position: "relative",
    }}>
      <div style={{
        opacity: fade