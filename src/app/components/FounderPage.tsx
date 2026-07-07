import { useState, useEffect } from "react";
import svgPaths from "../../imports/Frame31/svg-f4epwvy9wh";
import Nav from "../../imports/Nav/index";
import imgImage17 from "../../imports/Frame31/ceea06c40e75febdac3e88f3d284c4e1d63ccd9e.png";
import imgImage16 from "../../imports/Frame31/d060be9ce61288ad16074db37bfbb70d4d8416b7.png";
import imgImage14 from "../../imports/Frame31/a74f4e0909ba84ee9c9c4e2716d87721443d1e91.png";
import imgImage15 from "../../imports/Frame31/4220d400525c50945c5ca0ef50b76d513a3cec9d.png";

const DESIGN_WIDTH  = 1440;
const DESIGN_HEIGHT = 1175;
const NAV_H = 80;

// 12 carousel items cycling through the available images
const ITEMS = [
  { img: imgImage16, label: "Wales Camp Meeting 2019" },
  { img: imgImage17, label: "Wales Camp Meeting 2019" },
  { img: imgImage14, label: "Wales Camp Meeting 2019" },
  { img: imgImage15, label: "Wales Camp Meeting 2019" },
  { img: imgImage16, label: "Wales Camp Meeting 2019" },
  { img: imgImage17, label: "Wales Camp Meeting 2019" },
  { img: imgImage14, label: "Wales Camp Meeting 2019" },
  { img: imgImage15, label: "Wales Camp Meeting 2019" },
  { img: imgImage16, label: "Wales Camp Meeting 2019" },
  { img: imgImage17, label: "Wales Camp Meeting 2019" },
  { img: imgImage14, label: "Wales Camp Meeting 2019" },
  { img: imgImage15, label: "Wales Camp Meeting 2019" },
];

// Card config: [widthPx, heightPx, opacity, shadowBlur]
const CARD_SIZES = [
  { w: 161.962, h: 141.623 + 40,  opacity: 0.34, shadow: 3.164  },
  { w: 271.728, h: 237.604 + 50,  opacity: 0.50, shadow: 5.308  },
  { w: 369.189, h: 322.826 + 68,  opacity: 1.00, shadow: 7.212  },
  { w: 271.728, h: 237.604 + 50,  opacity: 0.50, shadow: 5.308  },
  { w: 161.962, h: 141.623 + 40,  opacity: 0.34, shadow: 3.164  },
];

function CarouselCard({
  item, size,
}: {
  item: { img: string; label: string };
  size: typeof CARD_SIZES[number];
}) {
  const imgH = size.h - (size.w < 200 ? 40 : size.w < 300 ? 50 : 68);
  return (
    <div
      style={{
        background: "#fff",
        width: size.w,
        flexShrink: 0,
        opacity: size.opacity,
        boxShadow: `0px ${size.shadow * 0.44}px ${size.shadow}px 0px rgba(0,0,0,0.07)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        paddingBottom: size.w < 200 ? 17 : size.w < 300 ? 30 : 41,
        paddingTop:    size.w < 200 ? 7  : size.w < 300 ? 11 : 15,
        paddingLeft:   size.w < 200 ? 7  : size.w < 300 ? 11 : 15,
        paddingRight:  size.w < 200 ? 7  : size.w < 300 ? 11 : 15,
        gap: size.w < 200 ? 9 : size.w < 300 ? 15 : 20,
        transition: "opacity 0.3s ease, width 0.3s ease",
      }}
    >
      <div style={{ width: "100%", height: imgH, overflow: "hidden", position: "relative" }}>
        <img
          src={item.img}
          alt={item.label}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            pointerEvents: "none",
            filter: size.opacity === 1 ? "none" : "grayscale(100%)",
            transition: "filter 0.3s ease",
          }}
        />
      </div>
      <p style={{
        fontFamily: "'Futura PT', sans-serif",
        fontSize: size.w < 200 ? 11 : size.w < 300 ? 19 : 25,
        color: "#0f1421",
        whiteSpace: "nowrap",
        margin: 0,
      }}>
        {item.label}
      </p>
    </div>
  );
}

function FounderCarousel() {
  const [active, setActive] = useState(1); // start at index 1 so we can go left
  const total = ITEMS.length;

  const prev = () => setActive(i => Math.max(0, i - 1));
  const next = () => setActive(i => Math.min(total - 1, i + 1));

  // Visible window: active-2 … active+2 (clamped to array bounds)
  const slots = [-2, -1, 0, 1, 2].map(offset => {
    const idx = active + offset;
    if (idx < 0 || idx >= total) return null;
    return ITEMS[idx];
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 95, alignItems: "center", width: "100%" }}>
      {/* Cards */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        width: "100%",
      }}>
        {slots.map((item, i) => (
          item ? (
            <CarouselCard key={active + (i - 2)} item={item} size={CARD_SIZES[i]} />
          ) : (
            <div key={`empty-${i}`} style={{ width: CARD_SIZES[i].w, flexShrink: 0 }} />
          )
        ))}
      </div>

      {/* Controls */}
      <div style={{ display: "flex", gap: 47, alignItems: "center", justifyContent: "center" }}>
        {/* Left chevron */}
        <button
          onClick={prev}
          disabled={active === 0}
          style={{ background: "none", border: "none", cursor: active === 0 ? "default" : "pointer", opacity: active === 0 ? 0.3 : 1, padding: 0 }}
        >
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path d="M30 12L18 24L30 36" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          </svg>
        </button>

        {/* Dots */}
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          {ITEMS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: 12, height: 12, borderRadius: "50%", border: "none", padding: 0,
                background: i === active ? "#192441" : "#D8D8D8",
                cursor: "pointer",
                transition: "background 0.2s ease",
              }}
            />
          ))}
        </div>

        {/* Right chevron */}
        <button
          onClick={next}
          disabled={active === total - 1}
          style={{ background: "none", border: "none", cursor: active === total - 1 ? "default" : "pointer", opacity: active === total - 1 ? 0.3 : 1, padding: 0 }}
        >
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path d="M30 12L18 24L30 36" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" transform="rotate(180 24 24)" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export function FounderPage({ onBack }: { onBack: () => void }) {
  const [scale, setScale] = useState(window.innerWidth / DESIGN_WIDTH);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const update = () => setScale(window.innerWidth / DESIGN_WIDTH);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
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
        opacity: fadeIn ? 1 : 0,
        transform: fadeIn ? "scale(1)" : "scale(0.98)",
        transition: "opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1) 0.1s, transform 0.9s cubic-bezier(0.4, 0, 0.2, 1) 0.1s",
      }}>
        {/* Scaled design canvas */}
        <div style={{ width: "100%", height: DESIGN_HEIGHT * scale, overflow: "hidden" }}>
          <div style={{
            width: DESIGN_WIDTH, height: DESIGN_HEIGHT,
            transform: `scale(${scale})`, transformOrigin: "top left",
            position: "relative",
          }}>
            {/* SVG watermark */}
            <div style={{ position: "absolute", inset: "0 6.81% 3.06% 6.81%" }}>
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1244 1142">
                <g opacity="0.2">
                  <path d={svgPaths.p1d9a8400} fill="#949494" />
                  <path d={svgPaths.p56bbc40}  fill="#949494" />
                  <path d={svgPaths.p35f8ee80}  fill="#949494" />
                  <path d={svgPaths.p3de18b80}  fill="#949494" />
                  <path d={svgPaths.p85df300}   fill="#949494" />
                  <path d={svgPaths.p2733e000}  fill="#949494" />
                  <path d={svgPaths.p3d407f00}  fill="#949494" />
                  <path d={svgPaths.pd613700}   fill="#949494" />
                  <path d={svgPaths.p9c00100}   fill="#949494" />
                  <path d={svgPaths.p1e936c00}  fill="#949494" />
                  <path d={svgPaths.p2315e700}  fill="#949494" />
                  <path d={svgPaths.p36f7a300}  fill="#949494" />
                </g>
              </svg>
            </div>

            {/* Content */}
            <div style={{
              position: "absolute",
              left: 98, top: 166,
              width: 1240,
              display: "flex",
              flexDirection: "column",
              gap: 95,
              alignItems: "center",
            }}>
              {/* Title */}
              <p style={{
                fontFamily: "'CRONDE', serif",
                fontSize: 88,
                color: "#0f1421",
                textAlign: "center",
                margin: 0,
                lineHeight: 1,
                width: "100%",
              }}>
                Founders
              </p>

              <FounderCarousel />
            </div>
          </div>
        </div>
      </div>

      {/* Live interactive nav */}
      <div style={{
        position: "fixed", top: 0, left: 0, width: "100%",
        height: NAV_H * scale, zIndex: 100, overflow: "visible",
      }}>
        <div style={{
          width: DESIGN_WIDTH, height: NAV_H,
          transform: `scale(${scale})`, transformOrigin: "top left",
        }}>
          <Nav />
        </div>
      </div>
    </div>
  );
}