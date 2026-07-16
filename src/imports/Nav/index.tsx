/// <reference path="../../types/images.d.ts" />

import { useState, useEffect, useRef } from "react";
import img34159 from "./logo.png";

// Font FAMILY is controlled globally (fonts.css / globals.css):
// - var(--font-body) is the base font on <body>, and every <p>/<button>
//   below inherits it directly (Tailwind's preflight sets
//   `button { font: inherit }`) — no inline fontFamily needed.
// - var(--font-heading) only applies via the h1-h6 tag rule (or the
//   .site-heading utility class for non-heading tags that still want the
//   heading font, like the "Branches"/"Group" section headings below).
// Keep this in sync with global.css / MobileNav / DepartmentPage / TestimoniesPage / ShopPage.

const BRANCH_GROUPS = [
  {
    heading: "Branches",
    items: [
      { label: "Peckham", slug: "peckham" },
      { label: "Bexley", slug: "bexley" },
      { label: "Aberdeen", slug: "aberdeen" },
      { label: "Cranfield", slug: "cranfield" },
      { label: "Birmingham", slug: "birmingham" },
      { label: "Manchester", slug: "manchester" },
    ],
  },
  {
    heading: "Group",
    items: [
      { label: "Glasgow & Paisley", slug: "glasgow" },
      { label: "Leicester", slug: "leicester" },
      { label: "Coventry", slug: "coventry" },
      { label: "Sussex", slug: "sussex" },
      { label: "Ireland — Dublin & Belfast", slug: "ireland" },
      { label: "Germany", slug: "germany" },
      { label: "France", slug: "france" },
      { label: "Italy", slug: "italy" },
      { label: "Denmark", slug: "denmark" },
      { label: "Spain", slug: "spain" },
    ],
  },
];

// fontFamily intentionally omitted — this is a <p>, so it already inherits
// var(--font-body) from the global tag rule / body default.
const navLinkStyle: React.CSSProperties = {
  fontWeight: 400,
  lineHeight: "18.144px",
  fontStyle: "normal",
  color: "#38362d",
  fontSize: "15.778px",
  letterSpacing: "-0.2367px",
};

export default function Nav() {
  const [branchOpen, setBranchOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!branchOpen) return;
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setBranchOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [branchOpen]);

  const openTimeline = () => {
    if (window.location.hash !== "#timeline") {
      window.history.pushState(
        null,
        "",
        window.location.pathname + window.location.search + "#timeline",
      );
    }
    window.dispatchEvent(new Event("timeline:open"));
  };

  return (
    <div className="bg-white content-stretch flex items-center justify-center relative size-full" data-name="Nav">
      <div className="flex-[1_0_0] h-full w-full relative">
        <div className="flex flex-row items-center justify-center max-w-[inherit] size-full">
          <div className="relative grid size-full max-w-[inherit] grid-cols-[1fr_auto_1fr] items-center px-[18.933px]">

            {/* Logo */}
            <div className="relative shrink-0 justify-self-start">
              <div className="relative flex items-center">
                <div
                  className="relative h-14.5 w-47 shrink-0 cursor-pointer"
                  onClick={() => {
                    window.location.hash = "";
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <div className="overflow-clip relative rounded-[inherit] size-full">
                    <div className="absolute -left-11.5 -top-[115px] size-70">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img34159} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Nav links */}
            <div className="relative flex shrink-0 items-center gap-[25.244px] justify-self-center">
              <p
                style={navLinkStyle}
                className="whitespace-nowrap cursor-pointer hover:opacity-60 transition-opacity"
                onClick={() => { window.location.hash = "#founder"; }}
              >
                Founder
              </p>

              {/* Branches dropdown */}
              <div className="relative" ref={dropdownRef}>
                <div className="content-stretch flex gap-2 items-center cursor-pointer hover:opacity-60 transition-opacity" onClick={() => setBranchOpen(o => !o)}>
                  <p style={navLinkStyle} className="whitespace-nowrap">Branches</p>
                  <div className="flex items-center justify-center size-6">
                    <div className={`flex-none size-6 transition-transform duration-200 ${branchOpen ? "rotate-90" : "-rotate-90"}`}>
                      <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                        <path d="M15 6L9 12L15 18" stroke="#38362d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Dropdown panel */}
                {branchOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.14)] py-9 px-10 w-[620px] max-h-[75vh] overflow-y-auto z-50">
                    {BRANCH_GROUPS.map((group, gi) => (
                      <div key={group.heading} className={gi > 0 ? "mt-8" : ""}>
                        {/* Section heading + rule */}
                        <div className="flex items-center gap-4 mb-5">
                          {/* .site-heading -> var(--font-heading), since <span> isn't in the h1-h6 tag rule */}
                          <span className="site-heading text-[#192441] text-[21px] whitespace-nowrap">
                            {group.heading}
                          </span>
                          <div className="flex-1 h-px bg-[#c9a771]" />
                        </div>

                        {/* Items grid — <p> inherits var(--font-body) directly, no inline fontFamily needed */}
                        <div className="grid grid-cols-3 gap-x-8 gap-y-5">
                          {group.items.map(({ label, slug }) => (
                            <p
                              key={slug}
                              style={{ fontWeight: 400, letterSpacing: "-0.2px", lineHeight: "20px" }}
                              className="text-[#54524a] text-[15.5px] cursor-pointer hover:text-[#192441] transition-colors"
                              onClick={() => { window.location.hash = `#${slug}`; setBranchOpen(false); }}
                            >
                              {label}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Department */}
              <div className="content-stretch flex gap-2 items-center cursor-pointer hover:opacity-60 transition-opacity">
                <p
                  style={navLinkStyle}
                  className="whitespace-nowrap cursor-pointer hover:opacity-60 transition-opacity"
                  onClick={() => { window.location.hash = "#department"; }}
                >
                  Department
                </p>
               
              </div>

              <p
                style={navLinkStyle}
                className="whitespace-nowrap cursor-pointer hover:opacity-60 transition-opacity"
                onClick={openTimeline}
              >
                Timeline
              </p>

              {/* Gallery */}
              <p
                style={navLinkStyle}
                className="whitespace-nowrap cursor-pointer hover:opacity-60 transition-opacity"
                onClick={() => { window.location.hash = "#gallery"; }}
              >
                Gallery
              </p>

              {/* Watch & Listen */}
              <p
                style={navLinkStyle}
                className="whitespace-nowrap cursor-pointer hover:opacity-60 transition-opacity"
                onClick={() => { window.location.hash = "#watch"; }}
              >
                Watch & Listen
              </p>

              <p
                style={navLinkStyle}
                className="whitespace-nowrap cursor-pointer hover:opacity-60 transition-opacity"
                onClick={() => { window.location.hash = "#shop"; }}
              >
                Shop
              </p>
            </div>

            {/* AFC UK button */}
            <div className="relative shrink-0 justify-self-end">
              <div className="relative flex items-center">
                <div className="bg-[#192441] content-stretch flex h-[37.867px] items-center justify-center px-[18.933px] relative rounded-[66.267px] shrink-0 cursor-pointer">
                  {/* <p> inherits var(--font-body) directly, no inline fontFamily needed */}
                  <p
                    style={{ fontWeight: 400, lineHeight: "13.253px", letterSpacing: "0.0552px" }}
                    className="text-[10.729px] text-center text-white whitespace-nowrap"
                  >
                    AFC UK
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}