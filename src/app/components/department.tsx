import { useEffect, useState } from "react";
import type { ReactElement } from "react";
import { SiteHeader, useSiteScale, useIsMobile, DESIGN_WIDTH } from "./SiteHeader";
import deptCrestImg from "../../assets/department-crest.png";

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
  ctaHref: string;
  slug: string;
}

const DEPARTMENT_CARDS: DepartmentCard[] = [
  {
    title: "Music & the David Academy",
    description:
      "From a single organ in the earliest Peckham services to Birmingham's David Academy, launched April 2026 — training musicians aged four to forty in the spirit of consecrated service.",
    ctaHref: "#dept-music",
    slug: "dept-music",
  },
  {
    title: "Choir & Orchestra",
    description:
      "Carrying the Gospel to audiences a sermon alone might never reach — from Italy's Christmas Concerts to annual concerts across Peckham, Bexley, Manchester, Birmingham, and Aberdeen.",
    ctaHref: "#dept-choir",
    slug: "dept-choir",
  },
  {
    title: "Sunday School & Elementary",
    description:
      "Every branch runs its own children's department on a shared UK-wide calendar — because the children God has added to this church are part of it today, not just tomorrow.",
    ctaHref: "#dept-sunday-school",
    slug: "dept-sunday-school",
  },
  {
    title: "Youth Ministry",
    description:
      "Born in 2004 as a single May bank holiday camp, Youth Camp now draws 240 young people from across the UK, Western Europe, and beyond each year.",
    ctaHref: "#dept-youth",
    slug: "dept-youth",
  },
  {
    title: "Ushering",
    description:
      "Serving since Howbury Mission in the early 1980s — the quiet ministry of arranging chairs, welcoming strangers, and making room for one more.",
    ctaHref: "#dept-ushering",
    slug: "dept-ushering",
  },
  {
    title: "Welfare",
    description:
      "Twenty-five years of turning faith into action — God's Love Day, Health Awareness Month, and the Jehovah Jireh Food Outreach, which supported over sixty-five families in 2025.",
    ctaHref: "#dept-welfare",
    slug: "dept-welfare",
  },
];

function DepartmentCardView({ card }: { card: DepartmentCard }): ReactElement {
  return (
    <div
      role="link"
      tabIndex={0}
      onClick={() => { window.location.hash = card.slug; }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") window.location.hash = card.slug;
      }}
      style={{
        background: "#ffffff",
        boxShadow: "0px 2px 10px 0px rgba(0,0,0,0.06)",
        padding: "32px 28px 28px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        cursor: "pointer",
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
      <div style={{ marginBottom: 22, width: "100%", display: "flex", justifyContent: "center" }}>
        <img src={deptCrestImg} alt="" style={{ width: "50%", maxWidth: 220, minWidth: 140, height: "auto", display: "block" }} />
      </div>
      <p
        role="heading"
        aria-level={3}
        style={{ ...BODY_STYLE, margin: 0, marginBottom: 14, color: "#0f1421" }}
      >
        {card.title}
      </p>
      <p style={{ ...BODY_STYLE, color: "#6b6b6b", margin: 0 }}>
        {card.description}
      </p>
      <a
        href={card.ctaHref}
        style={{
          display: "inline-block",
          background: "#192441",
          color: "#fff",
          fontFamily: "'Futura PT', sans-serif",
          fontSize: 11,
          letterSpacing: "0.03em",
          padding: "10px 22px",
          borderRadius: 999,
          cursor: "pointer",
          marginTop: 18,
          textDecoration: "none",
        }}
      >
        Join a Ministry
      </a>
    </div>
  );
}

export function DepartmentWatermark(): ReactElement {
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
        Every branch carries its calling through the people who serve it — voices raised in song, children discipled from their earliest years, young people gathered each May, hospitality quietly offered at the door, and real needs met with real hands. Explore the ministries that have shaped this church for fifty years, and find where you might serve.
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
          Every branch carries its calling through ministry — music, children, youth, hospitality, and care. Explore where you might serve.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {DEPARTMENT_CARDS.map((card, i) => (
            <div
              key={i}
              role="link"
              tabIndex={0}
              onClick={() => { window.location.hash = card.slug; }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") window.location.hash = card.slug;
              }}
              style={{
                background: "#ffffff",
                boxShadow: "0px 2px 10px 0px rgba(0,0,0,0.06)",
                padding: "28px 20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <div style={{ marginBottom: 16, width: "100%", display: "flex", justifyContent: "center" }}>
                <img src={deptCrestImg} alt="" style={{ width: "45%", maxWidth: 200, minWidth: 130, height: "auto", display: "block" }} />
              </div>
              <p
                role="heading"
                aria-level={3}
                style={{ ...BODY_STYLE, margin: 0, marginBottom: 10, color: "#0f1421" }}
              >
                {card.title}
              </p>
              <p style={{ ...BODY_STYLE, color: "#6b6b6b", margin: 0 }}>
                {card.description}
              </p>
              <a
                href={card.ctaHref}
                style={{
                  display: "inline-block",
                  background: "#192441",
                  color: "#fff",
                  fontFamily: "'Futura PT', sans-serif",
                  fontSize: 12,
                  letterSpacing: "0.03em",
                  padding: "10px 24px",
                  borderRadius: 999,
                  cursor: "pointer",
                  marginTop: 16,
                  textDecoration: "none",
                }}
              >
                Join a Ministry
              </a>
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