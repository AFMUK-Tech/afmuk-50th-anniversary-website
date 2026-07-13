import { useEffect, useState } from "react";
import type { ReactElement } from "react";
import Nav from "../../imports/Nav/index";
import MobileNav from "./MobileNav";

const DESIGN_WIDTH = 1440;
const DESIGN_HEIGHT = 1120;
const NAV_H = 80;

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
      <text x="45" y="16" textAnchor="middle" fontSize="8" fontFamily="Futura PT, sans-serif" letterSpacing="1" fill="#192441">
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
      <h3
        className="font-['Futura_PT:Book',sans-serif]"
        style={{ margin: 0, marginBottom: 14, fontSize: "clamp(16px, 1.39vw, 20px)", fontWeight: 500, color: "#0f1421", lineHeight: "normal" }}
      >
        {card.title}
      </h3>
      <p style={{ margin: 0, fontSize: "clamp(11px, 0.83vw, 12px)", lineHeight: 1.6, color: "#6b6b6b", fontFamily: "Futura PT, sans-serif" }}>
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

/* ---------- Desktop / tablet canvas (fixed-width, scaled) ---------- */

function DepartmentCanvas(): ReactElement {
  return (
    <div style={{ width: "100%", minHeight: "100vh", background: "#fcf9f2", position: "relative" }}>
      <DepartmentWatermark />

      {/* Title */}
      <div
        className="-translate-x-1/2 absolute flex flex-col font-['CRONDE:Regular',sans-serif] justify-center leading-[0] not-italic text-[#0f1421] text-center"
        style={{ left: "50%", top: 68, width: "60%", fontSize: "clamp(36px, 4.44vw, 64px)" }}
      >
        <p className="leading-[normal]">Departments & Ministries</p>
      </div>

      {/* Description paragraph */}
      <div
        className="-translate-x-1/2 absolute font-['Futura_PT:Book',sans-serif] text-center"
        style={{ left: "50%", top: 148, width: "58%", fontSize: "clamp(13px, 1.11vw, 16px)", lineHeight: 1.7, color: "#3b3b3b" }}
      >
        <p style={{ margin: 0 }}>
          Every ministry below is drawn from our fifty-year history — from a
          single organ in the earliest Peckham services to a national Youth
          Camp drawing 240 people a year. Whatever your gifting, there is a
          place to serve.
        </p>
      </div>

      {/* Cards grid */}
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

/* ---------- Mobile layout (natural sizing, single column, no scale transform) ---------- */

function DepartmentMobile(): ReactElement {
  return (
    <div style={{ width: "100%", background: "#fcf9f2", position: "relative", paddingTop: 96, paddingBottom: 48 }}>
      <div style={{ position: "relative", padding: "0 20px" }}>
        <h1
          className="font-['CRONDE:Regular',sans-serif]"
          style={{ margin: 0, marginBottom: 12, fontSize: 30, color: "#0f1421", textAlign: "center", lineHeight: 1.15 }}
        >
          Departments & Ministries
        </h1>
        <p
          className="font-['Futura_PT:Book',sans-serif]"
          style={{ margin: "0 auto 28px", maxWidth: 480, fontSize: 14, lineHeight: 1.7, color: "#3b3b3b", textAlign: "center" }}
        >
          Every ministry below is drawn from our fifty-year history — from a
          single organ in the earliest Peckham services to a national Youth
          Camp drawing 240 people a year. Whatever your gifting, there is a
          place to serve.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {DEPARTMENT_CARDS.map((card, i) => (
            <div
              key={i}
              style={{
                background: "#ffffff",
                boxShadow: "0px 2px 10px 0px rgba(0,0,0,0.06)",
                padding: "24px 20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <div style={{ marginBottom: 16 }}>
                <CrestIcon size={64} />
              </div>
              <h3
                className="font-['Futura_PT:Book',sans-serif]"
                style={{ margin: 0, marginBottom: 10, fontSize: 17, fontWeight: 500, color: "#0f1421", lineHeight: 1.3 }}
              >
                {card.title}
              </h3>
              <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: "#6b6b6b", fontFamily: "Futura PT, sans-serif" }}>
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function DepartmentPage({ onBack }: { onBack?: () => void } = {}): ReactElement {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  const [fadeIn, setFadeIn] = useState(false);
  const [scale, setScale] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth / DESIGN_WIDTH : 1
  );

  useEffect(() => {
    const update = () => {
      setIsMobile(window.innerWidth < 768);
      setScale(Math.min(Math.max(window.innerWidth / DESIGN_WIDTH, 0.3), 1.2));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => setFadeIn(true));
  }, []);

  return (
    <div style={{ width: "100%", minHeight: "100vh", background: "#fcf9f2", position: "relative" }}>
      <div style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 100, height: isMobile ? "auto" : NAV_H }}>
        {isMobile ? <MobileNav /> : <Nav />}
      </div>

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
          <div style={{ width: "100%", height: DESIGN_HEIGHT * scale, overflow: "hidden" }}>
            <div style={{ width: DESIGN_WIDTH, height: DESIGN_HEIGHT, transform: `scale(${scale})`, transformOrigin: "top left" }}>
              <DepartmentCanvas />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DepartmentPage;