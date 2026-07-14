import { useState, useEffect, useRef } from "react";
import img34159 from "./9ec56a815db13e6f5f4c4f51dc8c89bded734cf2.png";

const BRANCHES = [
  { label: "Peckham",           slug: "peckham" },
  { label: "Bexley",            slug: "bexley" },
  { label: "Bristol & Cardiff", slug: "bristol" },
  { label: "Aberdeen",          slug: "aberdeen" },
  { label: "Glasgow & Paisley", slug: "glasgow" },
  { label: "Edinburgh",         slug: "edinburgh" },
  { label: "Cranfield",         slug: "cranfield" },
  { label: "Birmingham",        slug: "birmingham" },
  { label: "Manchester",        slug: "manchester" },
  { label: "Leicester",         slug: "leicester" },
  { label: "Coventry",          slug: "coventry" },
  { label: "Sussex",            slug: "sussex" },
  { label: "Ireland — Dublin & Belfast", slug: "ireland" },
  { label: "Germany",           slug: "germany" },
  { label: "France",            slug: "france" },
  { label: "Italy",             slug: "italy" },
  { label: "Denmark",           slug: "denmark" },
  { label: "Spain",             slug: "spain" },
];

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
                className="font-['Futura_PT:Book',sans-serif] font-normal leading-[18.144px] not-italic text-[#38362d] text-[15.778px] tracking-[-0.2367px] whitespace-nowrap cursor-pointer hover:opacity-60 transition-opacity"
                onClick={() => { window.location.hash = "#founder"; }}
              >Founder</p>

              {/* Branches dropdown */}
              <div className="relative" ref={dropdownRef}>
                <div className="content-stretch flex gap-[8px] items-center cursor-pointer hover:opacity-60 transition-opacity" onClick={() => setBranchOpen(o => !o)}>
                  <p className="font-['Futura_PT:Book',sans-serif] font-normal leading-[18.144px] not-italic text-[#38362d] text-[15.778px] tracking-[-0.2367px] whitespace-nowrap">Branches</p>
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
                  <div className="absolute top-full left-0 mt-[8px] bg-white rounded-[8px] shadow-[0_4px_24px_rgba(0,0,0,0.10)] py-[10px] px-[6px] min-w-[420px] max-h-[70vh] overflow-y-auto z-50 grid grid-cols-2 gap-x-[4px]">
                    {BRANCHES.map(({ label, slug }) => (
                      <div
                        key={slug}
                        className="relative shrink-0 cursor-pointer hover:bg-[#f5f2eb] transition-colors rounded-[6px]"
                        onClick={() => { window.location.hash = `#${slug}`; setBranchOpen(false); }}
                      >
                        <div className="content-stretch flex items-center p-[10px] relative size-full">
                          <p className="font-['Futura_PT:Book',sans-serif] font-normal leading-[18.144px] not-italic text-[#38362d] text-[14px] tracking-[-0.2367px] whitespace-nowrap">{label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Departement */}
              <div className="content-stretch flex gap-[8px] items-center cursor-pointer hover:opacity-60 transition-opacity">
                <p className="font-['Futura_PT:Book',sans-serif] font-normal leading-[18.144px] not-italic text-[#38362d] text-[15.778px] tracking-[-0.2367px] whitespace-nowrap cursor-pointer hover:opacity-60 transition-opacity" onClick={() => {
                window.location.hash = "#department";
              }}>Department</p>
                <div className="flex items-center justify-center size-[24px]">
                  <div className="-rotate-90 flex-none size-[24px]">
                    <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                      <path d="M15 6L9 12L15 18" stroke="#38362d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>

              <p className="font-['Futura_PT:Book',sans-serif] font-normal leading-[18.144px] not-italic text-[#38362d] text-[15.778px] tracking-[-0.2367px] whitespace-nowrap cursor-pointer hover:opacity-60 transition-opacity" onClick={() => {
                window.location.hash = "#timeline";
              }}>Timeline</p>

              {/* Gallery */}
              <p
                className="font-['Futura_PT:Book',sans-serif] font-normal leading-[18.144px] not-italic text-[#38362d] text-[15.778px] tracking-[-0.2367px] whitespace-nowrap cursor-pointer hover:opacity-60 transition-opacity"
                onClick={() => { window.location.hash = "#gallery"; }}
              >Gallery</p>

              {/* Watch & Listen */}
              <p
                className="font-['Futura_PT:Book',sans-serif] font-normal leading-[18.144px] not-italic text-[#38362d] text-[15.778px] tracking-[-0.2367px] whitespace-nowrap cursor-pointer hover:opacity-60 transition-opacity"
                onClick={() => { window.location.hash = "#watch"; }}
              >Watch & Listen</p>

              <p
                className="font-['Futura_PT:Book',sans-serif] font-normal leading-[18.144px] not-italic text-[#38362d] text-[15.778px] tracking-[-0.2367px] whitespace-nowrap cursor-pointer hover:opacity-60 transition-opacity"
                onClick={() => { window.location.hash = "#shop"; }}
              >Shop</p>
            </div>

            {/* AFC UK button */}
            <div className="h-[37.867px] min-w-[116.338px] relative shrink-0 w-[373.933px]">
              <div className="content-stretch flex flex-col items-center min-w-[inherit] pl-[257.671px] relative size-full">
                <div className="bg-[#192441] content-stretch flex h-[37.867px] items-center justify-center px-[18.933px] relative rounded-[66.267px] shrink-0 cursor-pointer">
                  <p className="font-['Futura_PT:Book',sans-serif] font-normal leading-[13.253px] not-italic text-[10.729px] text-center text-white tracking-[0.0552px] whitespace-nowrap">AFC UK</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}