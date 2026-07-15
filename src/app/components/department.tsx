import { useEffect, useState } from "react";
import type { ReactElement } from "react";
import { SiteHeader, useSiteScale, useIsMobile, DESIGN_WIDTH } from "./SiteHeader";

// Font FAMILY is controlled globally (fonts.css / globals.css) via
// var(--font-heading) on h1-h6/.site-heading and var(--font-body) on
// p/li/label/blockquote/figcaption. This file only imports size/weight
// helpers — it never sets fontFamily inline, since inline styles can't
// beat the global !important tag rules anyway.
import { BODY_STYLE, headingSize } from "../../styles/typography";

const DESIGN_HEIGHT = 1120;

interface DepartmentCard {
  title: string;
  description: string;
}

const DEPARTMENT_CARDS: DepartmentCard[] = [
  {
    title: "Music & the David Academy",
    description:
      "From a single organ in the earliest Peckham services to Birmingham's David Academy, launched April 2026 — training musicians aged four to forty in the spirit of consecrated service.",
  },
  {
    title: "Choir & Orchestra",
    description:
      "Carrying the Gospel to audiences a sermon alone might never reach — from Italy's Christmas Concerts to annual concerts across Peckham, Bexley, Manchester, Birmingham, and Aberdeen.",
  },
  {
    title: "Sunday School & Elementary",
    description:
      "Every branch runs its own children's department on a shared UK-wide calendar — because the children God has added to this church are part of it today, not just tomorrow.",
  },
  {
    title: "Youth Ministry",
    description:
      "Born in 2004 as a single May bank holiday camp, Youth Camp now draws 240 young people from across the UK, Western Europe, and beyond each year.",
  },
  {
    title: "Ushering",
    description:
      "Serving since Howbury Mission in the early 1980s — the quiet ministry of arranging chairs, welcoming strangers, and making room for one more.",
  },
  {
    title: "Welfare",
    description:
      "Twenty-five years of turning faith into action — God's Love Day, Health Awareness Month, and the Jehovah Jireh Food Outreach, which supported over sixty-five families in 2025.",
  },
];

function CrestIcon({ size = 90 }: { size?: number }): ReactElement {
  const h = (size * 104) / 90;
  return (
    <svg width={size} height={h} viewBox="0 0 90 104" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
      <path d="M8 20 C 20 6, 70 6, 82 20" stroke="#192441" strokeWidth="1.4" fill="none" />
      <text x="45" y="16" textAnchor="middle" fontSize="8" fontFamily="var(--font-body)" letterSpacing="1" fill="#192441">
        AFC 1976
      </text>
      <path d="M18 24 H72 V58 C72 78, 56 92, 45 98 C34 92, 18 78, 18 58 Z" stroke="#192441" strokeWidth="1.6" fill="none" />
      <circle cx="45" cy="44" r="13" stroke="#192441" strokeWidth="1.1" fill="none" />
      <ellipse cx="45" cy="44" rx="6" ry="13" stroke="#192441" strokeWidth="0.8" fill="none" />
      <line x1="32" y1="44" x2="58" y2="44" stroke="#192441" strokeWidth="0.8" />
      <line x1="34" y1="37" x2="56" y2="37" stroke="#192441" strokeWidth="0.6" />
      <line x1="34" y1="51" x2="56" y2="51" stroke="#192441" strokeWidth="0.6" />
      <g transform="translate(0,60)">
        <path d="M38 0 L45 -8 L52 0 V22 H38 Z" stroke="#192441" strokeWidth="1.1" fill="none" />
        <line x1="41" y1="4" x2="41" y2="18" stroke="#192441" strokeWidth="0.7" />
        <line x1="49" y1="4" x2="49" y2="18" stroke="#192441" strokeWidth="0.7" />
        <line x1="45" y1="0" x2="45" y2="22" stroke="#192441" strokeWidth="0.7" />
      </g>
    </svg>
  );
}

function DepartmentCardView({ card }: { card: DepartmentCard }): ReactElement {
  return (
    <div
      style={{
        background: "#ffffff",
        boxShadow: "0px 2px 10px 0px rgba(0,0,0,0.06)",
        padding: "32px 28px 28px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0px 8px 20px 0px rgba(0,0,0,0.10)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0px 2px 10px 0px rgba(0,0,0,0.06)";
      }}
    >
      <div style={{ marginBottom: 22 }}>
        <CrestIcon />
      </div>
      <p
        role="heading"
        aria-level={3}
        style={{ ...BODY_STYLE, margin: 0, marginBottom: 14, color: "#0f1421" }}
      >
        {card.title}
      </p>
      <p style={{ ...BODY_STYLE, fontSize: "clamp(11px, 0.83vw, 12px)", lineHeight: 1.6, color: "#6b6b6b", margin: 0 }}>
        {card.description}
      </p>
    </div>
  );
}

function DepartmentWatermark(): ReactElement {
  return (
    <svg className="absolute inset-0" style={{ width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="departmentDiagGrid" width="110" height="110" patternUnits="userSpaceOnUse" patternTransform="rotate(12)">
          <line x1="0" y1="0" x2="0" y2="110" stroke="#d9d3c2" strokeWidth="1" />
          <line x1="0" y1="0" x2="110" y2="0" stroke="#d9d3c2" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#departmentDiagGrid)" opacity="0.5" />
    </svg>
  );
}

function DepartmentCanvas(): ReactElement {
  return (
    <div style={{ width: "100%", minHeight: "100vh", background: "#fcf9f2", position: "relative" }}>
      <DepartmentWatermark />

      <h1
        className="-translate-x-1/2 absolute mt-10 text-[#0f1421] text-center"
        style={{
          ...headingSize(64, { lineHeight: "normal" }),
          left: "50%",
          top: 68,
          width: "60%",
          margin: 0,
        }}
      >
        Department
      </h1>

      <p
        className="-translate-x-1/2 absolute mt-10 text-center"
        style={{ ...BODY_STYLE, left: "50%", top: 148, width: "58%", color: "#3b3b3b", margin: 0 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
      </p>

      <div
        className="absolute"
        style={{
          left: "9.7%",
          right: "9.7%",
          top: 288,
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          columnGap: 40,
          rowGap: 40,
        }}
      >
        {DEPARTMENT_CARDS.map((card, i) => (
          <DepartmentCardView key={i} card={card} />
        ))}
      </div>
    </div>
  );
}

function DepartmentMobile(): ReactElement {
  return (
    <div style={{ width: "100%", background: "#fcf9f2", position: "relative", paddingTop: 96, paddingBottom: 48 }}>
      {/* Centered content wrapper */}
      <div style={{ maxWidth: 480, margin: "0 auto", padding: "0 20px" }}>
        <h1 style={{ ...headingSize(32, { lineHeight: 1.15 }), color: "#0f1421", textAlign: "center", margin: 0, marginBottom: 12 }}>
          Department
        </h1>
        <p style={{ ...BODY_STYLE, margin: "0 auto 28px", maxWidth: 480, color: "#3b3b3b", textAlign: "center" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {DEPARTMENT_CARDS.map((card, i) => (
            <div
              key={i}
              style={{
                background: "#ffffff",
                boxShadow: "0px 2px 10px 0px rgba(0,0,0,0.06)",
                padding: "28px 20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <div style={{ marginBottom: 16 }}>
                <CrestIcon size={64} />
              </div>
              <p
                role="heading"
                aria-level={3}
                style={{ ...BODY_STYLE, margin: 0, marginBottom: 10, color: "#0f1421" }}
              >
                {card.title}
              </p>
              <p style={{ ...BODY_STYLE, fontSize: 13.5, lineHeight: 1.6, color: "#6b6b6b", margin: 0 }}>
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function DepartmentPage({ onBack: _onBack }: { onBack?: () => void } = {}): ReactElement {
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
          <DepartmentMobile />
        ) : (
          // ── Desktop: centered with flex ──
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              height: DESIGN_HEIGHT * scale,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: DESIGN_WIDTH,
                height: DESIGN_HEIGHT,
                transform: `scale(${scale})`,
                transformOrigin: "top center", // scale from the top-middle so it stays centred
              }}
            >
              <DepartmentCanvas />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DepartmentPage;