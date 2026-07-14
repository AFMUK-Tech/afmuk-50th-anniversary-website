import { useState } from "react";
import { Menu, X } from "lucide-react";
import img34159 from "../../imports/Nav/9ec56a815db13e6f5f4c4f51dc8c89bded734cf2.png";


const BRANCHES = [
  { label: "Peckham", slug: "peckham" },
  { label: "Bexley", slug: "bexley" },
  { label: "Bristol & Cardiff", slug: "bristol" },
  { label: "Aberdeen", slug: "aberdeen" },
  { label: "Glasgow & Paisley", slug: "glasgow" },
  { label: "Edinburgh", slug: "edinburgh" },
  { label: "Cranfield", slug: "cranfield" },
  { label: "Birmingham", slug: "birmingham" },
  { label: "Manchester", slug: "manchester" },
  { label: "Leicester", slug: "leicester" },
  { label: "Coventry", slug: "coventry" },
  { label: "Sussex", slug: "sussex" },
  { label: "Ireland — Dublin & Belfast", slug: "ireland" },
  { label: "Germany", slug: "germany" },
  { label: "France", slug: "france" },
  { label: "Italy", slug: "italy" },
  { label: "Denmark", slug: "denmark" },
  { label: "Spain", slug: "spain" },
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
    window.location.hash = hash;
    closeMenu();
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="bg-white flex items-center justify-between px-4 py-3 relative z-[100]">
        {/* Logo */}
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

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[998]"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-[300px] bg-white z-[999] shadow-2xl transform transition-transform duration-300 ease-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
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

                {/* Branch Submenu */}
                {branchOpen && (
                  <div className="pl-4 mt-1 space-y-1">
                    {BRANCHES.map((branch) => (
                      <button
                        key={branch.slug}
                        onClick={() => handleBranchClick(branch.slug)}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors font-['Futura_PT:Book',sans-serif] text-sm text-gray-700"
                      >
                        {branch.label}
                      </button>
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
      </div>
    </>
  );
}