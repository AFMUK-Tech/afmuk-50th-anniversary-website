import { useState, useEffect, useRef } from "react";
import svgPaths from "../../imports/Frame31/svg-f4epwvy9wh";
import { SiteHeader, useSiteScale, useIsMobile, DESIGN_WIDTH } from "./SiteHeader";
import imgImage17 from "../../imports/Frame31/ceea06c40e75febdac3e88f3d284c4e1d63ccd9e.png";
import imgImage16 from "../../imports/Frame31/d060be9ce61288ad16074db37bfbb70d4d8416b7.png";
import imgImage14 from "../../imports/Frame31/a74f4e0909ba84ee9c9c4e2716d87721443d1e91.png";
import imgImage15 from "../../imports/Frame31/4220d400525c50945c5ca0ef50b76d513a3cec9d.png";


function useContentHeight<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setHeight(entry.contentRect.height);
      }
    });
    observer.observe(el);
    setHeight(el.getBoundingClientRect().height);
    return () => observer.disconnect();
  }, []);

  return [ref, height] as const;
}

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

const CARD_SIZES = [
  { w: 161.962, h: 141.623 + 40, opacity: 0.34, shadow: 3.164 },
  { w: 271.728, h: 237.604 + 50, opacity: 0.5, shadow: 5.308 },
  { w: 369.189, h: 322.826 + 68, opacity: 1.0, shadow: 7.212 },
  { w: 271.728, h: 237.604 + 50, opacity: 0.5, shadow: 5.308 },
  { w: 161.962, h: 141.623 + 40, opacity: 0.34, shadow: 3.164 },
];

function CarouselCard({
  item,
  size,
}: {
  item: { img: string; label: string };
  size: (typeof CARD_SIZES)[number];
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
        paddingTop: size.w < 200 ? 7 : size.w < 300 ? 11 : 15,
        paddingLeft: size.w < 200 ? 7 : size.w < 300 ? 11 : 15,
        paddingRight: size.w < 200 ? 7 : size.w < 300 ? 11 : 15,
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
      <p
        style={{
          fontFamily: "'Futura PT', sans-serif",
          fontSize: size.w < 200 ? 11 : size.w < 300 ? 19 : 25,
          color: "#0f1421",
          whiteSpace: "nowrap",
          margin: 0,
        }}
      >
        {item.label}
      </p>
    </div>
  );
}

function FounderCarousel() {
  const [active, setActive] = useState(1);
  const total = ITEMS.length;

  const prev = () => setActive((i) => Math.max(0, i - 1));
  const next = () => setActive((i) => Math.min(total - 1, i + 1));

  const slots = [-2, -1, 0, 1, 2].map((offset) => {
    const idx = active + offset;
    if (idx < 0 || idx >= total) return null;
    return ITEMS[idx];
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 95, alignItems: "center", width: "100%", marginBottom: 64 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, width: "100%" }}>
        {slots.map((item, i) =>
          item ? (
            <CarouselCard key={active + (i - 2)} item={item} size={CARD_SIZES[i]} />
          ) : (
            <div key={`empty-${i}`} style={{ width: CARD_SIZES[i].w, flexShrink: 0 }} />
          )
        )}
      </div>

      <div style={{ display: "flex", gap: 47, alignItems: "center", justifyContent: "center" }}>
        <button
          onClick={prev}
          disabled={active === 0}
          style={{ background: "none", border: "none", cursor: active === 0 ? "default" : "pointer", opacity: active === 0 ? 0.3 : 1, padding: 0 }}
        >
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path d="M30 12L18 24L30 36" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          </svg>
        </button>

        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          {ITEMS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                border: "none",
                padding: 0,
                background: i === active ? "#192441" : "#D8D8D8",
                cursor: "pointer",
                transition: "background 0.2s ease",
              }}
            />
          ))}
        </div>

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

/* ---------- Mobile carousel: single card, clearly visible arrow buttons ---------- */

function FounderCarouselMobile() {
  const [active, setActive] = useState(0);
  const total = ITEMS.length;
  const item = ITEMS[active];

  const prev = () => setActive((i) => Math.max(0, i - 1));
  const next = () => setActive((i) => Math.min(total - 1, i + 1));

  const arrowButtonStyle = (disabled: boolean): React.CSSProperties => ({
    width: 44,
    height: 44,
    borderRadius: "50%",
    border: "none",
    background: disabled ? "#c7c2b4" : "#192441",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: disabled ? "default" : "pointer",
    boxShadow: "0px 2px 6px 0px rgba(0,0,0,0.15)",
    flexShrink: 0,
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "center", width: "100%" }}>
      <div
        style={{
          background: "#fff",
          width: "100%",
          maxWidth: 300,
          boxShadow: "0px 3px 8px 0px rgba(0,0,0,0.08)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "12px 12px 24px",
        }}
      >
        <div style={{ width: "100%", aspectRatio: "1 / 0.87", overflow: "hidden", position: "relative" }}>
          <img
            src={item.img}
            alt={item.label}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <p style={{ fontFamily: "'Futura PT', sans-serif", fontSize: 15, color: "#0f1421", margin: "14px 0 0" }}>
          {item.label}
        </p>
      </div>

      {/* Arrows + position counter — fits on any phone width, nothing scrolls off-screen */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 24, width: "100%" }}>
        <button onClick={prev} disabled={active === 0} aria-label="Previous photo" style={arrowButtonStyle(active === 0)}>
          <svg width="18" height="18" viewBox="0 0 48 48" fill="none">
            <path d="M30 12L18 24L30 36" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          </svg>
        </button>

        <span
          style={{
            fontFamily: "'Futura PT', sans-serif",
            fontSize: 14,
            color: "#6b6b6b",
            minWidth: 48,
            textAlign: "center",
          }}
        >
          {active + 1} / {total}
        </span>

        <button onClick={next} disabled={active === total - 1} aria-label="Next photo" style={arrowButtonStyle(active === total - 1)}>
          <svg width="18" height="18" viewBox="0 0 48 48" fill="none">
            <path d="M30 12L18 24L30 36" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" transform="rotate(180 24 24)" />
          </svg>
        </button>
      </div>
    </div>
  );
}

/* ---------- Mobile page body ---------- */

function FounderMobile() {
  return (
    <div style={{ width: "100%", background: "#fcf9f2", position: "relative", paddingTop: 96, paddingBottom: 64 }}>
      <div style={{ padding: "0 20px", display: "flex", flexDirection: "column", gap: 40, alignItems: "center" }}>
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              fontFamily: "'Futura PT', sans-serif",
              fontSize: 12,
              letterSpacing: "0.08em",
              color: "#8b7f6a",
              textTransform: "uppercase",
              margin: 0,
              marginBottom: 12,
            }}
          >
            Brother Victor Okusanya
          </p>
          <p style={{ 
            fontFamily: "'CRONDE', serif", 
            fontSize: 42, 
            color: "#0f1421", 
            margin: 0, 
            lineHeight: 1.05 
          }}>
            Founder
          </p>
          <p style={{ 
            fontFamily: "'Futura PT', sans-serif", 
            fontSize: 16, 
            color: "#6b6b6b", 
            marginTop: 16 
          }}>
            The man who carried the Gospel to the United Kingdom, and never looked back.
          </p>
        </div>

        <div style={{ width: "100%", maxWidth: 640, display: "flex", flexDirection: "column", gap: 20 }}>
          <p style={{ 
            fontFamily: "'Futura PT', sans-serif", 
            fontSize: 15, 
            lineHeight: 1.75, 
            color: "#28241c", 
            margin: 0 
          }}>
            Brother Victor Olusegun Okusanya founded the Apostolic Faith work in the United Kingdom in 1976, arriving in London the year before as a young music scholarship student at Goldsmith College. He served as the UK's first pastor for twenty-four years, from his ordination in Lagos in 1979 until his retirement in April 2000.
          </p>
          <p style={{ 
            fontFamily: "'Futura PT', sans-serif", 
            fontSize: 15, 
            lineHeight: 1.75, 
            color: "#28241c", 
            margin: 0 
          }}>
            Those who knew him remember a man of deep prayer and remarkable generosity — on one occasion giving away a brand-new pair of shoes to a man in need before he had worn them himself. Sister Chioma Okere, a member of the congregation he served, once described him as "all things to all men" — father, brother, uncle, and even solicitor to the members in his care.
          </p>
          <p style={{ 
            fontFamily: "'Futura PT', sans-serif", 
            fontSize: 15, 
            lineHeight: 1.75, 
            color: "#28241c", 
            margin: 0 
          }}>
            Though a trained musician, he chose never to use his music degree for secular income, believing the gift belonged to the church alone — a conviction that laid the foundation for a music ministry that continues to this day through Salem Academy of Music and, in 2026, Birmingham's David Academy.
          </p>
          <p style={{ 
            fontFamily: "'Futura PT', sans-serif", 
            fontSize: 15, 
            lineHeight: 1.75, 
            color: "#28241c", 
            margin: 0 
          }}>
            His final sermon before retirement was titled "Don't Deal in Sin, Don't Deal with Man, Deal with God" — words his family remember as capturing the whole of his ministry. On 30 April 2000, he passed leadership to Brother Isaac Adigun in a service attended by church leaders from Portland, Lagos, and Scandinavia.
          </p>

          <blockquote
            style={{
              borderLeft: "3px solid #D9C7A8",
              margin: "8px 0",
              padding: "6px 0 6px 20px",
              fontFamily: "'CRONDE', serif",
              fontSize: 18,
              lineHeight: 1.5,
              color: "#192441",
              fontStyle: "italic",
            }}
          >
            "Our first Sunday School service was held on Sunday, 11 April 1976, at 18 Doverfield Road, Clapham Park — the home of Brother Victor Okusanya's sister. Only three members were present: Brother Victor Okusanya, Sister Comfort Martins, and myself."
            <div style={{ 
              fontFamily: "'Futura PT', sans-serif", 
              fontSize: 13, 
              fontStyle: "normal", 
              color: "#6b6b6b", 
              marginTop: 12 
            }}>
              Brother Shuaibu Adeoye, one of the three present at the very first meeting, 11 April 1976
            </div>
          </blockquote>

          <p style={{ 
            fontFamily: "'Futura PT', sans-serif", 
            fontSize: 15, 
            lineHeight: 1.75, 
            color: "#28241c", 
            margin: 0 
          }}>
            Brother Adeoye, then a young British Petroleum scholarship student newly arrived from Nigeria, had written to the church's Portland headquarters asking where to worship in London. Portland connected him with Brother Okusanya, who had arrived in London a few months earlier with the same aim — to start an Apostolic Faith fellowship in the city. From that first meeting of three, in a borrowed lounge, the whole of this fifty-year story began.
          </p>

          <div style={{ marginTop: 8 }}>
            <p style={{ 
              fontFamily: "'CRONDE', serif", 
              fontSize: 22, 
              color: "#192441", 
              margin: 0, 
              marginBottom: 12 
            }}>
              The Women Behind the Work
            </p>
            <p style={{ 
              fontFamily: "'Futura PT', sans-serif", 
              fontSize: 15, 
              lineHeight: 1.75, 
              color: "#28241c", 
              margin: 0 
            }}>
              Sister Grace Oluyemi Okusanya carried much of the administrative weight of the early church alongside her husband. Sister Florence Osayemi's own account of the wider hardship faced by early wives on student visas — far from home, often alone during the week — is a reminder that this church was built by families, not by one man alone.
            </p>
          </div>

          <p style={{ 
            fontFamily: "'CRONDE', serif", 
            fontSize: 17, 
            color: "#192441", 
            textAlign: "center", 
            margin: "8px 0 0", 
            fontStyle: "italic" 
          }}>
            "Earnestly contend for the faith which was once delivered unto the saints." — Jude 3
          </p>

          <div style={{ textAlign: "center", marginTop: 4 }}>
            <div
              style={{
                display: "inline-block",
                background: "#192441",
                color: "#fff",
                fontFamily: "'Futura PT', sans-serif",
                fontSize: 13,
                letterSpacing: "0.03em",
                padding: "12px 24px",
                borderRadius: 999,
                cursor: "pointer",
              }}
            >
              Read the Full Story in Our 50th Anniversary Book
            </div>
          </div>
        </div>

        <FounderCarouselMobile />
      </div>
    </div>
  );
}

export function FounderPage({ onBack }: { onBack?: () => void } = {}) {
  const scale = useSiteScale();
  const isMobile = useIsMobile();
  const [fadeIn, setFadeIn] = useState(false);
  const [contentRef, contentHeight] = useContentHeight<HTMLDivElement>();

  useEffect(() => {
    requestAnimationFrame(() => {
      setFadeIn(true);
    });
  }, []);

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#fcf9f2",
        position: "relative",
      }}
    >
      <SiteHeader />

      <div
        style={{
          opacity: fadeIn ? 1 : 0,
          transform: fadeIn ? "scale(1)" : "scale(0.98)",
          transition: "opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1) 0.1s, transform 0.9s cubic-bezier(0.4, 0, 0.2, 1) 0.1s",
        }}
      >
        {isMobile ? (
          <FounderMobile />
        ) : (
          <div style={{ width: "100%", display: "flex", justifyContent: "center", overflowX: "hidden" }}>
            <div style={{ width: DESIGN_WIDTH * scale, height: contentHeight ? contentHeight * scale : undefined, overflow: "hidden" }}>
              <div
                ref={contentRef}
                style={{
                  width: DESIGN_WIDTH,
                  transform: `scale(${scale})`,
                  transformOrigin: "top left",
                  position: "relative",
                }}
              >
                {/* SVG watermark */}
                <div style={{ position: "absolute", inset: "0 6.81% 3.06% 6.81%" }}>
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1244 1142">
                    <g opacity="0.2">
                      <path d={svgPaths.p1d9a8400} fill="#949494" />
                      <path d={svgPaths.p56bbc40} fill="#949494" />
                      <path d={svgPaths.p35f8ee80} fill="#949494" />
                      <path d={svgPaths.p3de18b80} fill="#949494" />
                      <path d={svgPaths.p85df300} fill="#949494" />
                      <path d={svgPaths.p2733e000} fill="#949494" />
                      <path d={svgPaths.p3d407f00} fill="#949494" />
                      <path d={svgPaths.pd613700} fill="#949494" />
                      <path d={svgPaths.p9c00100} fill="#949494" />
                      <path d={svgPaths.p1e936c00} fill="#949494" />
                      <path d={svgPaths.p2315e700} fill="#949494" />
                      <path d={svgPaths.p36f7a300} fill="#949494" />
                    </g>
                  </svg>
                </div>

                {/* Content */}
                <div
                  style={{
                    position: "relative",
                    paddingLeft: 98,
                    paddingRight: 98,
                    paddingTop: 166,
                    paddingBottom: 120,
                    width: 1240 + 196,
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "column",
                    gap: 64,
                    alignItems: "center",
                  }}
                >
                  <div style={{ textAlign: "center" }}>
                    <p
                      style={{
                        fontFamily: "'Futura PT', sans-serif",
                        fontSize: 15,
                        letterSpacing: "0.08em",
                        color: "#8b7f6a",
                        textTransform: "uppercase",
                        margin: 0,
                        marginBottom: 18,
                      }}
                    >
                      Brother Victor Okusanya
                    </p>
                    <p
                      style={{
                        fontFamily: "'CRONDE', serif",
                        fontSize: 80,
                        color: "#0f1421",
                        textAlign: "center",
                        margin: 0,
                        lineHeight: 1,
                        width: "100%",
                      }}
                    >
                      Founder
                    </p>
                    <p
                      style={{
                        fontFamily: "'Futura PT', sans-serif",
                        fontSize: 22,
                        color: "#6b6b6b",
                        marginTop: 24,
                      }}
                    >
                      The man who carried the Gospel to the United Kingdom, and never looked back.
                    </p>
                  </div>

                  <div style={{ width: 980, display: "flex", flexDirection: "column", gap: 28 }}>
                    <p style={{ 
                      fontFamily: "'Futura PT', sans-serif", 
                      fontSize: 20, 
                      lineHeight: 1.75, 
                      color: "#28241c", 
                      margin: 0 
                    }}>
                      Brother Victor Olusegun Okusanya founded the Apostolic Faith work in the United Kingdom in 1976, arriving in London the year before as a young music scholarship student at Goldsmith College. He served as the UK's first pastor for twenty-four years, from his ordination in Lagos in 1979 until his retirement in April 2000.
                    </p>
                    <p style={{ 
                      fontFamily: "'Futura PT', sans-serif", 
                      fontSize: 20, 
                      lineHeight: 1.75, 
                      color: "#28241c", 
                      margin: 0 
                    }}>
                      Those who knew him remember a man of deep prayer and remarkable generosity — on one occasion giving away a brand-new pair of shoes to a man in need before he had worn them himself. Sister Chioma Okere, a member of the congregation he served, once described him as "all things to all men" — father, brother, uncle, and even solicitor to the members in his care.
                    </p>
                    <p style={{ 
                      fontFamily: "'Futura PT', sans-serif", 
                      fontSize: 20, 
                      lineHeight: 1.75, 
                      color: "#28241c", 
                      margin: 0 
                    }}>
                      Though a trained musician, he chose never to use his music degree for secular income, believing the gift belonged to the church alone — a conviction that laid the foundation for a music ministry that continues to this day through Salem Academy of Music and, in 2026, Birmingham's David Academy.
                    </p>
                    <p style={{ 
                      fontFamily: "'Futura PT', sans-serif", 
                      fontSize: 20, 
                      lineHeight: 1.75, 
                      color: "#28241c", 
                      margin: 0 
                    }}>
                      His final sermon before retirement was titled "Don't Deal in Sin, Don't Deal with Man, Deal with God" — words his family remember as capturing the whole of his ministry. On 30 April 2000, he passed leadership to Brother Isaac Adigun in a service attended by church leaders from Portland, Lagos, and Scandinavia.
                    </p>

                    <blockquote
                      style={{
                        borderLeft: "3px solid #D9C7A8",
                        margin: "16px 0",
                        padding: "6px 0 6px 32px",
                        fontFamily: "'CRONDE', serif",
                        fontSize: 26,
                        lineHeight: 1.5,
                        color: "#192441",
                        fontStyle: "italic",
                      }}
                    >
                      "Our first Sunday School service was held on Sunday, 11 April 1976, at 18 Doverfield Road, Clapham Park — the home of Brother Victor Okusanya's sister. Only three members were present: Brother Victor Okusanya, Sister Comfort Martins, and myself."
                      <div style={{ 
                        fontFamily: "'Futura PT', sans-serif", 
                        fontSize: 16, 
                        fontStyle: "normal", 
                        color: "#6b6b6b", 
                        marginTop: 14 
                      }}>
                        Brother Shuaibu Adeoye, one of the three present at the very first meeting, 11 April 1976
                      </div>
                    </blockquote>

                    <p style={{ 
                      fontFamily: "'Futura PT', sans-serif", 
                      fontSize: 20, 
                      lineHeight: 1.75, 
                      color: "#28241c", 
                      margin: 0 
                    }}>
                      Brother Adeoye, then a young British Petroleum scholarship student newly arrived from Nigeria, had written to the church's Portland headquarters asking where to worship in London. Portland connected him with Brother Okusanya, who had arrived in London a few months earlier with the same aim — to start an Apostolic Faith fellowship in the city. From that first meeting of three, in a borrowed lounge, the whole of this fifty-year story began.
                    </p>

                    <div style={{ marginTop: 12 }}>
                      <p style={{ 
                        fontFamily: "'CRONDE', serif", 
                        fontSize: 32, 
                        color: "#192441", 
                        margin: 0, 
                        marginBottom: 16 
                      }}>
                        The Women Behind the Work
                      </p>
                      <p style={{ 
                        fontFamily: "'Futura PT', sans-serif", 
                        fontSize: 20, 
                        lineHeight: 1.75, 
                        color: "#28241c", 
                        margin: 0 
                      }}>
                        Sister Grace Oluyemi Okusanya carried much of the administrative weight of the early church alongside her husband. Sister Florence Osayemi's own account of the wider hardship faced by early wives on student visas — far from home, often alone during the week — is a reminder that this church was built by families, not by one man alone.
                      </p>
                    </div>

                    <p style={{ 
                      fontFamily: "'CRONDE', serif", 
                      fontSize: 22, 
                      color: "#192441", 
                      textAlign: "center", 
                      margin: "16px 0 0", 
                      fontStyle: "italic" 
                    }}>
                      "Earnestly contend for the faith which was once delivered unto the saints." — Jude 3
                    </p>

                    <div style={{ textAlign: "center", marginTop: 8 }}>
                      <div
                        style={{
                          display: "inline-block",
                          background: "#192441",
                          color: "#fff",
                          fontFamily: "'Futura PT', sans-serif",
                          fontSize: 15,
                          letterSpacing: "0.03em",
                          padding: "14px 32px",
                          borderRadius: 999,
                          cursor: "pointer",
                        }}
                      >
                        Read the Full Story in Our 50th Anniversary Book
                      </div>
                    </div>
                  </div>

                  <FounderCarousel />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FounderPage;