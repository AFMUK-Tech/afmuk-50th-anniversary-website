import React from "react";
import logoImg from "../../imports/image.png";

// Site-wide typography tokens
const HEADER_FONT = "font-['CRONDE:Regular',sans-serif]";
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
    <footer className="relative w-full bg-[#192441] overflow-hidden px-4 sm:px-10 md:px-16 pt-5 sm:pt-10 md:pt-12 pb-3 sm:pb-6 md:pb-8">
      {/* ── Top row: logo · nav · CTA — stays one row at every breakpoint ── */}
      <div className="flex flex-row items-center justify-between gap-1.5 sm:gap-6 md:gap-6">
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
            className="h-[22px] sm:h-[44px] md:h-[72px] w-[62px] sm:w-[120px] md:w-[200px] object-contain"
          />
        </a>

        {/* Nav links */}
        <nav className="flex items-center gap-1.5 sm:gap-9 md:gap-10 flex-nowrap justify-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={`#${link.hash}`}
              onClick={(e) => { e.preventDefault(); go(link.hash); }}
              className={`${BODY_COPY} text-[10px] sm:text-[14px] tracking-[0.02em] leading-none text-white/85 hover:text-white transition-colors whitespace-nowrap`}
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
          className={`shrink-0 inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.06] px-4 sm:px-6 py-1 sm:py-2.5 ${BODY_COPY} text-[10px] sm:text-[13px] tracking-[0.02em] leading-none text-white/90 hover:bg-white/[0.1] hover:border-white/25 transition-colors whitespace-nowrap`}
        >
          AFM UK
        </a>
      </div>

      {/* ── Centered quote ────────────────────────────────────────────── */}
      <div className="mt-4 sm:mt-8 md:mt-8 mx-auto max-w-[600px] text-center px-2 sm:px-4">
        <p className={`${BODY_COPY} text-[9px] sm:text-[16px] md:text-[18px] leading-[14px] sm:leading-[28px] md:leading-[32px] text-[#D9C7A8]`} style={{ opacity: 0.9 }}>
          {`"One generation shall praise thy works to another, and shall declare thy mighty acts."`}
        </p>
        <p className={`${BODY_COPY} text-[10px] sm:text-[13px] tracking-[0.04em] text-[#D9C7A8]/55 mt-1 sm:mt-2`}>
          — Psalm 145:4
        </p>
      </div>

      {/* ── Divider ───────────────────────────────────────────────────── */}
      <div className="mt-4 sm:mt-8 md:mt-10 h-px w-full bg-white/10" />

      {/* ── Bottom row: copyright · tagline ──────────────────────────── */}
      <div className="mt-3 sm:mt-6 flex flex-col md:flex-row items-center justify-between gap-1 sm:gap-2 md:gap-0 text-center md:text-left">
        <p className={`${BODY_COPY} text-[6px] sm:text-[12px] tracking-[0.02em] text-white/40`}>
          © 2026 Apostolic Faith Mission Western Europe. All rights reserved.
        </p>
        <p className={`${BODY_COPY} text-[6px] sm:text-[12px] tracking-[0.02em] text-[#D9C7A8]/55`}>
          Celebrating 50 years of faithful ministry
        </p>
      </div>
    </footer>
  );
}

export default Footer;