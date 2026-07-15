import logoImg from "../../imports/image.png";

// Site-wide typography tokens
const BODY_COPY = "font-['Futura_PT:Book',sans-serif]";

const NAV_LINKS: { label: string; hash: string }[] = [
  { label: "Stories",  hash: "watch" },
  { label: "Photos",   hash: "gallery" },
  { label: "Timeline", hash: "timeline" },
];

function go(hash: string) {
  window.location.hash = hash;
}

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#192441] px-6 py-10 sm:px-10 lg:h-[440px] lg:px-[96px] lg:py-[48px]">
      <div className="flex flex-col items-center gap-7 sm:flex-row sm:justify-between sm:gap-6">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); go(""); }}
          className="shrink-0"
          aria-label="Back to home"
        >
          <img
            src={logoImg}
            alt="AFM 50th Anniversary"
            className="h-auto w-[145px] object-contain lg:w-[170px]"
          />
        </a>

        {/* Nav links */}
        <nav className="order-3 flex flex-nowrap items-center justify-center gap-8 sm:order-none lg:gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={`#${link.hash}`}
              onClick={(e) => { e.preventDefault(); go(link.hash); }}
              className={`${BODY_COPY} whitespace-nowrap text-[13px] leading-none tracking-[0.02em] text-white/70 transition-colors hover:text-white lg:text-[14px]`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA pill — visible at every breakpoint, just shrinks */}
        <a
          href="https://www.afm-uk.com"
          target="_blank"
          rel="noreferrer"
          className={`inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-[#d9c7a8]/30 bg-[#d9c7a8]/10 px-7 py-3 ${BODY_COPY} text-[12px] leading-none tracking-[0.02em] text-[#d9c7a8] transition-colors hover:bg-[#d9c7a8]/15 lg:text-[13px]`}
        >
          AFM UK
        </a>
      </div>

      {/* ── Centered quote ────────────────────────────────────────────── */}
      <div className="mx-auto mt-10 max-w-[600px] px-2 text-center sm:mt-8 lg:mt-[-8px]">
        <p className={`${BODY_COPY} text-[15px] leading-[1.75] text-[#D9C7A8] sm:text-[16px] lg:text-[18px]`} style={{ opacity: 0.9 }}>
          {`"One generation shall praise thy works to another, and shall declare thy mighty acts."`}
        </p>
        <p className={`${BODY_COPY} mt-2 text-[11px] tracking-[0.08em] text-[#D9C7A8]/45 lg:text-[12px]`}>
          — Psalm 145:4
        </p>
      </div>

      {/* ── Divider ───────────────────────────────────────────────────── */}
      <div className="mt-10 h-px w-full bg-[#d9c7a8]/10 lg:mt-11" />

      {/* ── Bottom row: copyright · tagline ──────────────────────────── */}
      <div className="mt-5 flex flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
        <p className={`${BODY_COPY} text-[10px] tracking-[0.02em] text-white/35 lg:text-[11px]`}>
          © 2026 Apostolic Faith Mission Western Europe. All rights reserved.
        </p>
        <p className={`${BODY_COPY} text-[10px] tracking-[0.02em] text-[#D9C7A8]/45 lg:text-[11px]`}>
          Celebrating 50 years of faithful ministry
        </p>
      </div>
    </footer>
  );
}

export default Footer;
