import { useState } from "react";
import { Menu, X } from "lucide-react";
import img34159 from "../../imports/Nav/9ec56a815db13e6f5f4c4f51dc8c89bded734cf2.png";

// Same grouping as the desktop Nav — `group` decides whether a branch
// renders under the "Branches" or "Group" sub-header in the accordion.
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

// FIX: same invalid-CSS-colon issue as elsewhere (`Futura_PT:Book`,
// `CRONDE:Regular` aren't valid unquoted font-family values). Split
// family/weight so the browser can resolve against your @font-face rules.
const HEADER_FONT  = "font-['Cronde',_sans-serif] font-normal";
const BODY_FONT    = "font-['Futura_PT',_sans-serif] font-normal";
const SECTION_FONT = "font-['GT_Sectra',_serif] font-normal";

export default function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [branchOpen, setBranchOpen] = useState(false);
  const [deptOpen, setDeptOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setBranchOpen(false);
    setDeptOpen(false);
  };

  const handleBranchClick = (slug: string) => {
    window.location.hash = `#${slug}`;
    closeMenu();
  };

  const handleDeptClick = (slug: string) => {
    window.location.hash = `#${slug}`;
    closeMenu();
  };

  const handleNavClick = (hash: string) => {
    window.location.hash = hash;
    closeMenu();
  };

  return (
    <>
      {/* FIX: this header now controls its own visibility entirely — it's
          a plain `sticky` bar with a solid background, always rendered.
          Previously App.tsx wrapped this whole component in a
          translate-y-full/translate-y-0 toggle gated behind a scroll
          threshold, so on first load — and any time that scroll math
          didn't line up with the actual splash height — the entire nav
          sat off-screen above the viewport. That was the root cause of
          "the mobile nav is not showing." App.tsx no longer manages this
          component's transform at all. */}
      <div className="sticky top-0 left-0 right-0 z-[9999] bg-white flex items-center justify-between px-4 py-3 shadow-sm">
        <div
          className="h-10 w-32 cursor-pointer overflow-clip relative"
          onClick={() => {
            window.location.hash = "";
            window.scrollTo({ top: 0, behavior: "smooth" });
            closeMenu();
          }}
        >
          <div className="absolute left-[-28.87px] size-[187.756px] top-[-75.73px]">
            <img
              alt="Logo"
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={img34159}
            />
          </div>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[998]"
          onClick={closeMenu}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-[300px] bg-white z-[999] shadow-2xl transform transition-transform duration-300 ease-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <span className={`${HEADER_FONT} text-lg`}>Menu</span>
            <button
              onClick={closeMenu}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="flex flex-col p-4 space-y-1">
              <button
                onClick={() => handleNavClick("")}
                className={`text-left px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors ${BODY_FONT} text-sm`}
              >
                Home
              </button>

              {/* Branches accordion — sectioned into "Branches" / "Group" */}
              <div>
                <button
                  onClick={() => { setBranchOpen(!branchOpen); setDeptOpen(false); }}
                  className={`w-full text-left px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors ${BODY_FONT} text-sm flex items-center justify-between`}
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

                {branchOpen && (
                  <div className="pl-4 pr-2 mt-1 pb-2">
                    {BRANCH_SECTIONS.map((section, sIdx) => (
                      <div key={section.title} className={sIdx > 0 ? "mt-4" : ""}>
                        {/* Section header: label + horizontal rule */}
                        <div className="flex items-center gap-3 px-4 mb-2">
                          <p className={`${SECTION_FONT} text-[#192441] text-[15px] leading-[18px] whitespace-nowrap`}>
                            {section.title}
                          </p>
                          <div className="flex-1 h-[1px] bg-[#d9bf94]" />
                        </div>

                        <div className="space-y-1">
                          {section.items.map((branch) => (
                            <button
                              key={branch.slug}
                              onClick={() => handleBranchClick(branch.slug)}
                              className={`w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors ${BODY_FONT} text-sm text-gray-700`}
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

              {/* Department accordion */}
              <div>
                <button
                  onClick={() => { setDeptOpen(!deptOpen); setBranchOpen(false); }}
                  className={`w-full text-left px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors ${BODY_FONT} text-sm flex items-center justify-between`}
                >
                  <span>Department</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      deptOpen ? "rotate-180" : ""
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

                {deptOpen && (
                  <div className="pl-4 mt-1 space-y-1">
                    {DEPARTMENTS.map((dept) => (
                      <button
                        key={dept.slug}
                        onClick={() => handleDeptClick(dept.slug)}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors ${BODY_FONT} text-sm text-gray-700`}
                      >
                        {dept.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => handleNavClick("#gallery")}
                className={`text-left px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors ${BODY_FONT} text-sm`}
              >
                Gallery
              </button>

              <button
                onClick={() => handleNavClick("#watch")}
                className={`text-left px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors ${BODY_FONT} text-sm`}
              >
                Watch & Listen
              </button>

              <button
                onClick={() => handleNavClick("#founder")}
                className={`text-left px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors ${BODY_FONT} text-sm`}
              >
                Founder
              </button>

              <button
                onClick={() => handleNavClick("#shop")}
                className={`text-left px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors ${BODY_FONT} text-sm`}
              >
                Shop
              </button>
            </div>
          </div>

          <div className="p-4 border-t bg-gray-50">
            <p className={`text-xs text-gray-600 text-center ${BODY_FONT}`}>
              Apostolic Faith Church — UK & Western Europe
            </p>
          </div>
        </div>
      </div>
    </>
  );
}