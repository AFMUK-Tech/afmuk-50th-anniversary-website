/// <reference path="../../types/images.d.ts" />

import { useState, useEffect, useRef } from "react";
import img34159 from "./logo.png";

// Each branch now carries a `group` so we can render them under
// "Branches" (UK locations) vs "Group" (international) headers,
// matching the two-section layout in the design.
const BRANCHES = [
  { label: "Peckham",           slug: "peckham",  group: "international" },
  { label: "Bexley",            slug: "bexley",   group: "international" },
  { label: "Glasgow & Paisley", slug: "glasgow",  group: "international" },
  { label: "Leicester",         slug: "leicester",group: "international" },
  { label: "Coventry",          slug: "coventry", group: "international" },
  { label: "Sussex",            slug: "sussex",   group: "international" },
  { label: "Ireland — Dublin & Belfast", slug: "ireland",  group: "international" },
  { label: "Germany",           slug: "germany",  group: "international" },
  { label: "France",            slug: "france",   group: "international" },
  { label: "Italy",             slug: "italy",    group: "international " },
  { label: "Denmark",           slug: "denmark",  group: "international" },
  { label: "Spain",             slug: "spain",    group: "international" },
  { label: "Bristol & Cardiff", slug: "bristol",  group: "branches" },
  { label: "Aberdeen",          slug: "aberdeen", group: "branches" },
  { label: "Edinburgh",         slug: "edinburgh",group: "branches" },
  { label: "Cranfield",         slug: "cranfield",group: "branches" },
  { label: "Birmingham",        slug: "birmingham",group: "branches" },
  { label: "Manchester",        slug: "manchester",group: "branches" },
];

const BRANCH_SECTIONS = [
  { title: "Branches", items: BRANCHES.filter((b) => b.group === "branches") },
  { title: "Group", items: BRANCHES.filter((b) => b.group === "international") },
];

const DEPARTMENTS = [
  { label: "Music department", slug: "music" },
  { label: "Ushering",         slug: "ushering" },
];

const NAV_FONT = "font-['Futura_PT',_sans-serif] font-normal";

// Distinct serif treatment for the section headers inside the Branches
// panel ("Branches" / "Group"), to match the reference design.
const SECTION_FONT = "font-['Futura_PT'] font-normal";

export default function Nav() {
  const [branchOpen, setBranchOpen] = useState(false);
  const [deptOpen, setDeptOpen] = useState(false);
  const branchRef = useRef<HTMLDivElement>(null);
  const deptRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!branchOpen && !deptOpen) return;
    const handler = (e: MouseEvent) => {
      if (branchRef.current && !branchRef.current.contains(e.target as Node)) {
        setBranchOpen(false);
      }
      if (deptRef.current && !deptRef.current.contains(e.target as Node)) {
        setDeptOpen(false);
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
                <div className="relative h-14.5 w-47 shrink-0 cursor-pointer" onClick={() => {
                  window.location.hash = ""; 
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}>
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
                className={`${NAV_FONT} leading-[18.144px] not-italic text-[#38362d] text-[15.778px] tracking-[-0.2367px] whitespace-nowrap cursor-pointer hover:opacity-60 transition-opacity`}
                onClick={() => { window.location.hash = "#founder"; }}
              >Founder</p>

              {/* Branches dropdown */}
              <div className="relative" ref={dropdownRef}>
                <div className="content-stretch flex gap-2 items-center cursor-pointer hover:opacity-60 transition-opacity" onClick={() => setBranchOpen(o => !o)}>
                  <p className="font-['Futura_PT:Book',sans-serif] font-normal leading-[18.144px] not-italic text-[#38362d] text-[15.778px] tracking-[-0.2367px] whitespace-nowrap">Branches</p>
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
                  <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.10)] py-2.5 px-1.5 min-w-105 max-h-[70vh] overflow-y-auto z-50 grid grid-cols-2 gap-x-1">
                    {BRANCHES.map(({ label, slug }) => (
                      <div
                        key={slug}
                        className="relative shrink-0 cursor-pointer hover:bg-[#f5f2eb] transition-colors rounded-[6px]"
                        onClick={() => { window.location.hash = `#${slug}`; setBranchOpen(false); }}
                      >
                        <div className="content-stretch flex items-center p-2.5 relative size-full">
                          <p className="font-['Futura_PT:Book',sans-serif] font-normal leading-[18.144px] not-italic text-[#38362d] text-[14px] tracking-[-0.2367px] whitespace-nowrap">{label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Departement */}
              <div className="content-stretch flex gap-2 items-center cursor-pointer hover:opacity-60 transition-opacity">
                <p className="font-['Futura_PT:Book',sans-serif] font-normal leading-[18.144px] not-italic text-[#38362d] text-[15.778px] tracking-[-0.2367px] whitespace-nowrap cursor-pointer hover:opacity-60 transition-opacity" onClick={() => {
                window.location.hash = "#department";
              }}>Department</p>
                <div className="flex items-center justify-center size-6">
                  <div className="-rotate-90 flex-none size-6">
                    <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                      <path d="M15 6L9 12L15 18" stroke="#38362d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>

              <p
                className="font-['Futura_PT:Book',sans-serif] font-normal leading-[18.144px] not-italic text-[#38362d] text-[15.778px] tracking-[-0.2367px] whitespace-nowrap cursor-pointer hover:opacity-60 transition-opacity"
                onClick={openTimeline}
              >
                Timeline
              </p>

              {/* Gallery */}
              <p
                className={`${NAV_FONT} leading-[18.144px] not-italic text-[#38362d] text-[15.778px] tracking-[-0.2367px] whitespace-nowrap cursor-pointer hover:opacity-60 transition-opacity`}
                onClick={() => { window.location.hash = "#gallery"; }}
              >Gallery</p>

              {/* Watch & Listen */}
              <p
                className={`${NAV_FONT} leading-[18.144px] not-italic text-[#38362d] text-[15.778px] tracking-[-0.2367px] whitespace-nowrap cursor-pointer hover:opacity-60 transition-opacity`}
                onClick={() => { window.location.hash = "#watch"; }}
              >Watch & Listen</p>

              <p
                className={`${NAV_FONT} leading-[18.144px] not-italic text-[#38362d] text-[15.778px] tracking-[-0.2367px] whitespace-nowrap cursor-pointer hover:opacity-60 transition-opacity`}
                onClick={() => { window.location.hash = "#shop"; }}
              >Shop</p>
            </div>

            {/* AFC UK button */}
            <div className="relative shrink-0 justify-self-end">
              <div className="relative flex items-center">
                <div className="bg-[#192441] content-stretch flex h-[37.867px] items-center justify-center px-[18.933px] relative rounded-[66.267px] shrink-0 cursor-pointer">
                  <p className={`${NAV_FONT} leading-[13.253px] not-italic text-[10.729px] text-center text-white tracking-[0.0552px] whitespace-nowrap`}>AFC UK</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
