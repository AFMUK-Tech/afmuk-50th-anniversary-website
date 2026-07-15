/// <reference path="../../types/images.d.ts" />

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import img34159 from "../../imports/Nav/logo.png";

const BRANCH_GROUPS = [
  {
    heading: "Branches",
    items: [
      { label: "Peckham", slug: "peckham" },
      { label: "Bexley", slug: "bexley" },
  { label: "Aberdeen",          slug: "aberdeen" },
  { label: "Cranfield",         slug: "cranfield" },
  { label: "Birmingham",        slug: "birmingham"},
  { label: "Manchester",        slug: "manchester"},
    ],
  },
  {
    heading: "Group",
    items: [
  { label: "Glasgow & Paisley", slug: "glasgow", },
  { label: "Leicester",         slug: "leicester"},
  { label: "Coventry",          slug: "coventry" },
  { label: "Edinburgh",         slug: "edinburgh" },
  { label: "Sussex",            slug: "sussex" },
  { label: "Ireland — Dublin & Belfast", slug: "ireland" },
  { label: "Germany",           slug: "germany" },
  { label: "France",            slug: "france"},
  { label: "Italy",             slug: "italy" },
  { label: "Denmark",           slug: "denmark" },
  { label: "Spain",             slug: "spain"},
    ],
  },
];


export default function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [branchOpen, setBranchOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setBranchOpen(false);
  };

  const handleBranchClick = (slug: string) => {
    window.location.hash = `#${slug}`;
    closeMenu();
  };

  const handleNavClick = (hash: string) => {
    if (hash === "#timeline") {
      closeMenu();
      requestAnimationFrame(() => {
        if (window.location.hash !== hash) {
          window.history.pushState(
            null,
            "",
            window.location.pathname + window.location.search + hash,
          );
        }
        window.dispatchEvent(new Event("timeline:open"));
      });
      return;
    }

    window.location.hash = hash;
    closeMenu();
  };

  useEffect(() => {
    if (!menuOpen) return;

    const scrollPosition = window.scrollY;
    const previousOverflow = document.body.style.overflow;
    const previousPosition = document.body.style.position;
    const previousTop = document.body.style.top;
    const previousWidth = document.body.style.width;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = "100%";
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.position = previousPosition;
      document.body.style.top = previousTop;
      document.body.style.width = previousWidth;
      document.documentElement.style.overflow = previousHtmlOverflow;
      window.removeEventListener("keydown", closeOnEscape);
      window.scrollTo(0, scrollPosition);
    };
  }, [menuOpen]);

  return (
    <>
      {/* Mobile Header */}
      <div className="relative z-100 flex min-h-18 items-center justify-between bg-white px-4 py-2.5 sm:px-6">
        {/* Logo */}
        <div
          className="relative h-14.5 w-47 cursor-pointer overflow-clip"
          onClick={() => {
            window.location.hash = "";
            window.scrollTo({ top: 0, behavior: "smooth" });
            closeMenu();
          }}
        >
          <div className="absolute -left-11.5 -top-28 size-70">
            <img
              alt="Logo"
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={img34159}
            />
          </div>
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {createPortal(
        <>
          <div
            aria-hidden="true"
            className={`fixed inset-0 z-998 bg-black/55 transition-opacity duration-300 ${menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
            onClick={closeMenu}
          />

          <aside
            aria-label="Mobile navigation"
            aria-hidden={!menuOpen}
            className={`fixed inset-y-0 right-0 z-999 w-[min(86vw,360px)] bg-white shadow-2xl transition-transform duration-300 ease-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
          >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <span className="font-['CRONDE:Regular',sans-serif] text-lg">Menu</span>
            <button
              onClick={closeMenu}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto">
            <div className="flex flex-col p-4 space-y-1">
              {/* Home */}
              <button
                onClick={() => handleNavClick("")}
                className="text-left px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors font-['Futura_PT:Book',sans-serif] text-sm"
              >
                Home
              </button>

              {/* Branches Dropdown */}
              <div>
                <button
                  onClick={() => setBranchOpen(!branchOpen)}
                  className="w-full text-left px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors font-['Futura_PT:Book',sans-serif] text-sm flex items-center justify-between"
                >
                  <span>Branches</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      branchOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Branch Submenu — grouped */}
                {branchOpen && (
                  <div className="pl-4 pr-2 pt-2 pb-3 space-y-5">
                    {BRANCH_GROUPS.map((group) => (
                      <div key={group.heading}>
                        <div className="flex items-center gap-3 mb-2.5 px-4">
                          <span className="font-['CRONDE:Regular',sans-serif] text-[#192441] text-[16px] whitespace-nowrap">
                            {group.heading}
                          </span>
                          <div className="flex-1 h-px bg-[#c9a771]" />
                        </div>
                        <div className="grid grid-cols-2 gap-x-2 gap-y-0.5">
                          {group.items.map((branch) => (
                            <button
                              key={branch.slug}
                              onClick={() => handleBranchClick(branch.slug)}
                              className="text-left px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors font-['Futura_PT:Book',sans-serif] text-sm text-gray-700"
                            >
                              {branch.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Department */}
              <button
                onClick={() => handleNavClick("#department")}
                className="text-left px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors font-['Futura_PT:Book',sans-serif] text-sm"
              >
                Department
              </button>

              {/* Timeline */}
              <button
                onClick={() => handleNavClick("#timeline")}
                className="text-left px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors font-['Futura_PT:Book',sans-serif] text-sm"
              >
                Timeline
              </button>

              {/* Gallery */}
              <button
                onClick={() => handleNavClick("#gallery")}
                className="text-left px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors font-['Futura_PT:Book',sans-serif] text-sm"
              >
                Gallery
              </button>

              {/* Watch & Listen */}
              <button
                onClick={() => handleNavClick("#watch")}
                className="text-left px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors font-['Futura_PT:Book',sans-serif] text-sm"
              >
                Watch & Listen
              </button>

              {/* Founder */}
              <button
                onClick={() => handleNavClick("#founder")}
                className="text-left px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors font-['Futura_PT:Book',sans-serif] text-sm"
              >
                Founder
              </button>

              {/* Shop */}
              <button
                onClick={() => handleNavClick("#shop")}
                className="text-left px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors font-['Futura_PT:Book',sans-serif] text-sm"
              >
                Shop
              </button>
            </div>
          </div>

          {/* Menu Footer */}
          <div className="p-4 border-t bg-gray-50">
            <p className="text-xs text-gray-600 text-center font-['Futura_PT:Book',sans-serif]">
              Apostolic Faith Church — UK & Western Europe
            </p>
          </div>
        </div>
          </aside>
        </>,
        document.body,
      )}
    </>
  );
}