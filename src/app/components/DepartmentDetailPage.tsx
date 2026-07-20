import { useEffect, useRef, useState } from "react";
import type { ReactElement } from "react";
import { SiteHeader, useSiteScale, useIsMobile, DESIGN_WIDTH } from "./SiteHeader";
import { DepartmentWatermark } from "./department";
import { DEPARTMENT_DETAILS, type DepartmentDetail } from "../data/departmentContent";
import deptCrestImg from "../../assets/department-crest.png";

// Font FAMILY is controlled globally (fonts.css / globals.css) via
// var(--font-heading) on h1-h6/.site-heading and var(--font-body) on
// p/li/label/blockquote/figcaption — see department.tsx for the full note.
import { BODY_STYLE, headingSize } from "../../styles/typography";

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

function BackLink({ onBack }: { onBack: () => void }): ReactElement {
  return (
    <p
      onClick={onBack}
      style={{
        ...BODY_STYLE,
        fontSize: 13,
        letterSpacing: "0.03em",
        color: "#8b7f6a",
        cursor: "pointer",
        margin: 0,
      }}
    >
      ← All Departments
    </p>
  );
}

function DepartmentDetailBody({ detail }: { detail: DepartmentDetail }): ReactElement {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <img src={deptCrestImg} alt="" style={{ width: "45%", maxWidth: 260, minWidth: 160, height: "auto", display: "block", margin: "0 auto" }} />
        <h1
          className="text-[#0f1421]"
          style={{ ...headingSize(56, { lineHeight: 1.05 }), margin: 0, marginTop: 20 }}
        >
          {detail.title}
        </h1>
        <p
          className="site-heading text-[#192441]"
          style={{ ...headingSize(24, { lineHeight: 1.2 }), margin: 0, marginTop: 10 }}
        >
          {detail.subtitle}
        </p>
        <p
          style={{
            ...BODY_STYLE,
            color: "#6b6b6b",
            fontStyle: "italic",
            margin: "18px auto 0",
            maxWidth: 560,
          }}
        >
          {detail.tagline}
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 44 }}>
        {detail.paragraphs.map((p, i) => (
          <p
            key={i}
            style={{
              ...BODY_STYLE,
              color: "#28241c",
              margin: 0,
            }}
          >
            {p}
          </p>
        ))}
      </div>

      <div style={{ marginTop: 44, textAlign: "center" }}>
        <a
          href={detail.ctaHref}
          style={{
            display: "inline-block",
            background: "#192441",
            color: "#fff",
            fontFamily: "'Futura PT', sans-serif",
            fontSize: 14,
            letterSpacing: "0.03em",
            padding: "14px 34px",
            borderRadius: 999,
            cursor: "pointer",
            textDecoration: "none",
          }}
        >
          Join a Ministry
        </a>
      </div>
    </>
  );
}

function DepartmentDetailMobile({
  detail,
  onBack,
}: {
  detail: DepartmentDetail;
  onBack: () => void;
}): ReactElement {
  return (
    <div style={{ width: "100%", background: "#fcf9f2", position: "relative", paddingTop: 96, paddingBottom: 64 }}>
      <div style={{ maxWidth: 560, margin: "0 auto", padding: "0 20px" }}>
        <div style={{ marginBottom: 24 }}>
          <BackLink onBack={onBack} />
        </div>
        <DepartmentDetailBody detail={detail} />
      </div>
    </div>
  );
}

export function DepartmentDetailPage({
  slug,
  onBack,
}: {
  slug: string;
  onBack: () => void;
}): ReactElement {
  const isMobile = useIsMobile();
  const scale = useSiteScale();
  const [fadeIn, setFadeIn] = useState(false);
  const [contentRef, contentHeight] = useContentHeight<HTMLDivElement>();

  useEffect(() => {
    requestAnimationFrame(() => setFadeIn(true));
  }, []);

  const detail = DEPARTMENT_DETAILS[slug];
  if (!detail) return <></>;

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
          <DepartmentDetailMobile detail={detail} onBack={onBack} />
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
                <DepartmentWatermark />

                <div
                  style={{
                    position: "relative",
                    paddingLeft: 98,
                    paddingRight: 98,
                    paddingTop: 100,
                    paddingBottom: 120,
                    boxSizing: "border-box",
                  }}
                >
                  <div style={{ marginBottom: 40 }}>
                    <BackLink onBack={onBack} />
                  </div>

                  <div style={{ maxWidth: 900, margin: "0 auto" }}>
                    <DepartmentDetailBody detail={detail} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DepartmentDetailPage;
