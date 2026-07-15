import { useState, useEffect, useRef } from "react";
import img34159 from "./9ec56a815db13e6f5f4c4f51dc8c89bded734cf2.png";

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
  }, [branchOpen, deptOpen]);

  return (
    <div className="bg-white content-stretch flex items-center justify-center relative size-full" data-name="Nav">
      <div className="flex-[1_0_0] h-full max-w-[1920px] min-w-px relative">
        <div className="flex flex-row items-center justify-center max-w-[inherit] size-full">
          <div className="content-stretch flex items-center justify-between max-w-[inherit] px-[18.933px] relative size-full">

            {/* Logo */}
            <div className="min-w-[129.378px] relative shrink-0 w-[387.345px]">
              <div className="content-stretch flex flex-col items-center min-w-[inherit] pr-[257.671px] relative size-full">
                <div className="h-[39.444px] relative shrink-0 w-[129.378px] cursor-pointer" onClick={() => {
                  window.location.hash = "";
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}>
                  <div className="overflow-clip relative rounded-[inherit] size-full">
                    <div className="absolute left-[-28.87px] size-[187.756px] top-[-75.73px]">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img34159} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Nav links */}
            <div className="content-stretch flex gap-[25.244px] items-center relative shrink-0">
              <p
                className={`${NAV_FONT} leading-[18.144px] not-italic text-[#38362d] text-[15.778px] tracking-[-0.2367px] whitespace-nowrap cursor-pointer hover:opacity-60 transition-opacity`}
                onClick={() => { window.location.hash = "#founder"; }}
              >Founder</p>

              {/* Branches dropdown */}
              <div className="relative" ref={branchRef}>
                <div
                  className="content-stretch flex gap-[8px] items-center cursor-pointer hover:opacity-60 transition-opacity"
                  onClick={() => { setBranchOpen((o) => !o); setDeptOpen(false); }}
                >
                  <p className={`${NAV_FONT} leading-[18.144px] not-italic text-[#38362d] text-[15.778px] tracking-[-0.2367px] whitespace-nowrap`}>Branches</p>
                  <div className="flex items-center justify-center size-[24px]">
                    <div className={`flex-none size-[24px] transition-transform duration-200 ${branchOpen ? "rotate-90" : "-rotate-90"}`}>
                      <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                        <path d="M15 6L9 12L15 18" stroke="#38362d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Dropdown panel */}
                {branchOpen && (
                  <div className="absolute top-full left-0 mt-[12px] bg-white rounded-[12px] shadow-[0_8px_32px_rgba(0,0,0,0.12)] py-[28px] px-[32px] w-[560px] max-h-[75vh] overflow-y-auto z-50">
                    {BRANCH_SECTIONS.map((section, sIdx) => (
                      <div key={section.title} className={sIdx > 0 ? "mt-[28px]" : ""}>
                        {/* Section header: label + horizontal rule */}
                        <div className="flex items-center gap-[14px] mb-[22px]">
                          <p className={`${SECTION_FONT} text-[#192441] text-[19px] leading-[22px] whitespace-nowrap`}>
                            {section.title}
                          </p>
                          <div className="flex-1 h-[1px] bg-[#d9bf94]" />
                        </div>

                        {/* 3-column grid of items */}
                        <div className="grid grid-cols-3 gap-x-[24px] gap-y-[20px]">
                          {section.items.map(({ label, slug }) => (
                            <p
                              key={slug}
                              className={`${NAV_FONT} text-[#3a3a34] text-[15.5px] leading-[19px] tracking-[-0.2px] whitespace-nowrap cursor-pointer hover:opacity-60 transition-opacity`}
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

              {/* Department dropdown */}
              <div className="relative" ref={deptRef}>
                <div
                  className="content-stretch flex gap-[8px] items-center cursor-pointer hover:opacity-60 transition-opacity"
                  onClick={() => { setDeptOpen((o) => !o); setBranchOpen(false); }}
                >
                  <p className={`${NAV_FONT} leading-[18.144px] not-italic text-[#38362d] text-[15.778px] tracking-[-0.2367px] whitespace-nowrap`}>Department</p>
                  <div className="flex items-center justify-center size-[24px]">
                    <div className={`flex-none size-[24px] transition-transform duration-200 ${deptOpen ? "rotate-90" : "-rotate-90"}`}>
                      <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                        <path d="M15 6L9 12L15 18" stroke="#38362d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Dropdown panel */}
                {deptOpen && (
                  <div className="absolute top-full left-0 mt-[12px] bg-white rounded-[12px] shadow-[0_8px_32px_rgba(0,0,0,0.12)] py-[16px] px-[8px] min-w-[300px] max-h-[70vh] overflow-y-auto z-50">
                    {DEPARTMENTS.map(({ label, slug }) => (
                      <div
                        key={slug}
                        className="relative shrink-0 cursor-pointer hover:bg-[#f5f2eb] transition-colors rounded-[8px]"
                        onClick={() => { window.location.hash = `#${slug}`; setDeptOpen(false); }}
                      >
                        <div className="content-stretch flex items-center px-[18px] py-[16px] relative size-full">
                          <p className={`${NAV_FONT} leading-[19px] not-italic text-[#3a3a34] text-[15.5px] tracking-[-0.2px] whitespace-nowrap`}>{label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <p className={`${NAV_FONT} leading-[18.144px] not-italic text-[#38362d] text-[15.778px] tracking-[-0.2367px] whitespace-nowrap cursor-pointer hover:opacity-60 transition-opacity`} onClick={() => {
                window.location.hash = "#timeline";
              }}>Timeline</p>

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
            <div className="h-[37.867px] min-w-[116.338px] relative shrink-0 w-[373.933px]">
              <div className="content-stretch flex flex-col items-center min-w-[inherit] pl-[257.671px] relative size-full">
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