/// <reference path="../../types/images.d.ts" />

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import img34159 from "../../imports/Nav/logo.png";

// Shared typography tokens — keep in sync with global.css / DepartmentPage / TestimoniesPage / ShopPage
const FONT_HEADING = "'CRONDE', serif";
const FONT_BODY = "'Futura PT', sans-serif";

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
      { label: "Edinburgh", slug: "edinburgh" },
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

export default function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [branchOpen, setBranchOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setBranchOpen(false);
  };

  const handleBranchClick = (slug: string) => {
    navigateTo(`#${slug}`);
    closeMenu();
  };

  const navigateTo = (hash: string) => {
    const nextUrl = window.location.pathname + window.location.search + hash;
    window.history.pushState(null, "", nextUrl);
    // pushState does not emit hashchange. Dispatching it also handles Home when
    // the timeline has already removed its own hash from a non-home page.
    window.dispatchEvent(new HashChangeEvent("hashchange"));
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

    navigateTo(hash);
    closeMenu();
  };

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  // Sub-heading & body copy spec: Futura PT, Regular, 18px, 32px line-height.
  const navItemClass =
    "text-left px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors text-[18px] leading-[32px] font-normal";

  return (
    <>
      {/* Mobile Header */}
      <div className="relative z-100 flex min-h-18 items-center justify-between bg-white px-4 py-2.5 sm:px-6">
        {/* Logo */}
        <div
          className="relative h-14.5 w-47 cursor-pointer overflow-clip"
          onClick={() => {
            navigateTo("");
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
            className={`fixed inset-0 z-998 touch-none bg-black/55 transition-opacity duration-300 ${menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
            onClick={closeMenu}
          />

          <aside
            aria-label="Mobile navigation"
            aria-hidden={!menuOpen}
            className={`fixed inset-y-0 right-0 z-999 w-[min(86vw,360px)] overscroll-contain bg-white shadow-2xl transition-transform duration-300 ease-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            <div className="flex flex-col h-full">
              {/* Menu Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <span style={{ fontFamily: FONT_HEADING }} className="text-lg">
                  Menu
                </span>
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
                    style={{ fontFamily: FONT_BODY }}
                    className={navItemClass}
                  >
                    Home
                  </button>

                  {/* Branches Dropdown */}
                  <div>
                    <button
                      onClick={() => setBranchOpen(!branchOpen)}
                      style={{ fontFamily: FONT_BODY }}
                      className={`w-full ${navItemClass} flex items-center justify-between`}
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
                              <span
                                style={{ fontFamily: FONT_HEADING }}
                                className="text-[#192441] text-[16px] whitespace-nowrap"
                              >
                                {group.heading}
                              </span>
                              <div className="flex-1 h-px bg-[#c9a771]" />
                            </div>
                            <div className="grid grid-cols-2 gap-x-2 gap-y-0.5">
                              {group.items.map((branch) => (
                                <button
                                  key={branch.slug}
                                  onClick={() => handleBranchClick(branch.slug)}
                                  style={{ fontFamily: FONT_BODY }}
                                  className="text-left px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors text-[18px] leading-[32px] font-normal text-gray-700"
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
                    style={{ fontFamily: FONT_BODY }}
                    className={navItemClass}
                  >
                    Department
                  </button>

                  {/* Timeline */}
                  <button
                    onClick={() => handleNavClick("#timeline")}
                    style={{ fontFamily: FONT_BODY }}
                    className={navItemClass}
                  >
                    Timeline
                  </button>

                  {/* Gallery */}
                  <button
                    onClick={() => handleNavClick("#gallery")}
                    style={{ fontFamily: FONT_BODY }}
                    className={navItemClass}
                  >
                    Gallery
                  </button>

                  {/* Watch & Listen */}
                  <button
                    onClick={() => handleNavClick("#watch")}
                    style={{ fontFamily: FONT_BODY }}
                    className={navItemClass}
                  >
                    Watch & Listen
                  </button>

                  {/* Founder */}
                  <button
                    onClick={() => handleNavClick("#founder")}
                    style={{ fontFamily: FONT_BODY }}
                    className={navItemClass}
                  >
                    Founder
                  </button>

                  {/* Shop */}
                  <button
                    onClick={() => handleNavClick("#shop")}
                    style={{ fontFamily: FONT_BODY }}
                    className={navItemClass}
                  >
                    Shop
                  </button>
                </div>
              </div>

              {/* Menu Footer */}
              <div className="p-4 border-t bg-gray-50">
                <p
                  style={{ fontFamily: FONT_BODY }}
                  className="text-xs text-gray-600 text-center"
                >
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
