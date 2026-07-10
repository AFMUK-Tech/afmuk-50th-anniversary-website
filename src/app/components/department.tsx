import React from "react";
import type { ReactElement } from "react";
import Nav from "../../imports/Nav/index";

const DESIGN_WIDTH = 1440;
const DESIGN_HEIGHT = 980;
const NAV_H = 80;

interface DepartmentCard {
  title: string;
  description: string;
}

const DEPARTMENT_CARDS: DepartmentCard[] = [
  {
    title: "50 Years of Youth Ministry",
    description:
      "Young people have always been at the heart of AFM Western Europe — the next generation carrying the torch of faithful witness.",
  },
  {
    title: "50 Years of Youth Ministry",
    description:
      "Young people have always been at the heart of AFM Western Europe — the next generation carrying the torch of faithful witness.",
  },
  {
    title: "50 Years of Youth Ministry",
    description:
      "Young people have always been at the heart of AFM Western Europe — the next generation carrying the torch of faithful witness.",
  },
  {
    title: "50 Years of Youth Ministry",
    description:
      "Young people have always been at the heart of AFM Western Europe — the next generation carrying the torch of faithful witness.",
  },
  {
    title: "50 Years of Youth Ministry",
    description:
      "Young people have always been at the heart of AFM Western Europe — the next generation carrying the torch of faithful witness.",
  },
  {
    title: "50 Years of Youth Ministry",
    description:
      "Young people have always been at the heart of AFM Western Europe — the next generation carrying the torch of faithful witness.",
  },
];

function CrestIcon(): ReactElement {
  return (
    <svg
      width="90"
      height="104"
      viewBox="0 0 90 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      {/* Arched banner */}
      <path
        d="M8 20 C 20 6, 70 6, 82 20"
        stroke="#192441"
        strokeWidth="1.4"
        fill="none"
      />
      <text
        x="45"
        y="16"
        textAnchor="middle"
        fontSize="8"
        fontFamily="Futura PT, sans-serif"
        letterSpacing="1"
        fill="#192441"
      >
        MANCHESTER
      </text>

      {/* Shield outline */}
      <path
        d="M18 24 H72 V58 C72 78, 56 92, 45 98 C34 92, 18 78, 18 58 Z"
        stroke="#192441"
        strokeWidth="1.6"
        fill="none"
      />

      {/* Inner globe */}
      <circle cx="45" cy="44" r="13" stroke="#192441" strokeWidth="1.1" fill="none" />
      <ellipse cx="45" cy="44" rx="6" ry="13" stroke="#192441" strokeWidth="0.8" fill="none" />
      <line x1="32" y1="44" x2="58" y2="44" stroke="#192441" strokeWidth="0.8" />
      <line x1="34" y1="37" x2="56" y2="37" stroke="#192441" strokeWidth="0.6" />
      <line x1="34" y1="51" x2="56" y2="51" stroke="#192441" strokeWidth="0.6" />

      {/* Tower / building base */}
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
        style={{
          margin: 0,
          marginBottom: 14,
          fontSize: "clamp(16px, 1.39vw, 20px)",
          fontWeight: 500,
          color: "#0f1421",
          lineHeight: "normal",
        }}
      >
        {card.title}
      </h3>
      <p
        style={{
          margin: 0,
          fontSize: "clamp(11px, 0.83vw, 12px)",
          lineHeight: 1.6,
          color: "#6b6b6b",
          fontFamily: "Futura PT, sans-serif",
        }}
      >
        {card.description}
      </p>
    </div>
  );
}

function DepartmentWatermark(): ReactElement {
  return (
    <svg
      className="absolute inset-0"
      style={{ width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="departmentDiagGrid"
          width="110"
          height="110"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(12)"
        >
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
    <div
      className="bg-[#fcf9f2] relative"
      style={{ width: DESIGN_WIDTH, height: DESIGN_HEIGHT, overflow: "hidden" }}
    >
      <DepartmentWatermark />

      {/* Title */}
      <div
        className="-translate-x-1/2 absolute flex flex-col font-['CRONDE:Regular',sans-serif] justify-center leading-[0] not-italic text-[#0f1421] text-center"
        style={{
          left: "50%",
          top: 68,
          width: "60%",
          fontSize: "clamp(36px, 4.44vw, 64px)",
        }}
      >
        <p className="leading-[normal]">Department</p>
      </div>

      {/* Description paragraph */}
      <div
        className="-translate-x-1/2 absolute font-['Futura_PT:Book',sans-serif] text-center"
        style={{
          left: "50%",
          top: 148,
          width: "58%",
          fontSize: "clamp(13px, 1.11vw, 16px)",
          lineHeight: 1.7,
          color: "#3b3b3b",
        }}
      >
        <p style={{ margin: 0 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
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

interface DepartmentPageProps {
  onBack?: () => void;
}

export function DepartmentPage(_props: DepartmentPageProps = {}): ReactElement {
  const [scale, setScale] = React.useState<number>(window.innerWidth / DESIGN_WIDTH);
  const [fadeIn, setFadeIn] = React.useState<boolean>(false);

  React.useEffect(() => {
    const update = () => {
      const newScale = window.innerWidth / DESIGN_WIDTH;
      setScale(Math.min(Math.max(newScale, 0.3), 1.2));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  React.useEffect(() => {
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
      <div
        style={{
          opacity: fadeIn ? 1 : 0,
          transform: fadeIn ? "scale(1)" : "scale(0.98)",
          transition:
            "opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1) 0.1s, transform 0.9s cubic-bezier(0.4, 0, 0.2, 1) 0.1s",
        }}
      >
        <div
          style={{
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
              transformOrigin: "top left",
            }}
          >
            <DepartmentCanvas />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: NAV_H * Math.min(scale, 1),
          zIndex: 100,
          overflow: "visible",
        }}
      >
        <div
          style={{
            width: DESIGN_WIDTH,
            height: NAV_H,
            transform: `scale(${Math.min(scale, 1)})`,
            transformOrigin: "top left",
          }}
        >
          <Nav />
        </div>
      </div>
    </div>
  );
}

export default DepartmentPage;