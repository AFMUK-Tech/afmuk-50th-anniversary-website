import React from "react";

// ── LOGO ─────────────────────────────────────────────────────────────────
// Swap this for your real 50th-anniversary logo file — nothing else in this
// component needs to change once you do.
import logoImg from "../../imports/image.png";

// Site-wide typography tokens (kept local so this file is drop-in on its
// own — if you already export HEADER_FONT / BODY_COPY from sections.tsx,
// feel free to import those instead and delete these two lines).
const HEADER_FONT = "font-['CRONDE:Regular',sans-serif]";
const BODY_COPY = "font-['Futura_PT:Book',sans-serif] text-[18px] leading-[32px]";

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
    <footer className="relative w-full bg-[#192441] overflow-hidden px-6 sm:px-10 md:px-16 pt-10 md:pt-12 pb-6 md:pb-8">
      {/* ── Top row: logo · nav · CTA ─────────────────────────────────── */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-6">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); go(""); }}
          className="shrink-0 order-1"
          aria-label="Back to home"
        >
          <img
            src={logoImg}
            alt="AFM 50th Anniversary"
            className="h-[36px] sm:h-[44px] md:h-[72px] w-[100px] sm:w-[120px] md:w-[200px] object-contain"
          />
        </a>

        {/* Nav links */}
        <nav className="order-3 md:order-2 flex items-center gap-6 sm:gap-9 md:gap-10 md:pt-4 flex-wrap justify-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={`#${link.hash}`}
              onClick={(e) => { e.preventDefault(); go(link.hash); }}
              className="font-['Futura_PT:Book',sans-serif] text-[14px] tracking-[0.02em] text-white/85 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA pill */}
        <a
          href="https://www.afm-uk.com"
          target="_blank"
          rel="noreferrer"
          className="order-2 md:order-3 shrink-0 inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.06] px-6 py-2.5 font-['Futura_PT:Book',sans-serif] text-[13px] tracking-[0.02em] text-white/90 hover:bg-white/[0.1] hover:border-white/25 transition-colors whitespace-nowrap"
        >
          AFM UK
        </a>
      </div>

      {/* ── Centered quote ────────────────────────────────────────────── */}
      <div className="mt-10 md:mt-8 mx-auto max-w-[600px] text-center px-4">
        <p className={`${BODY_COPY} text-[#D9C7A8]`} style={{ opacity: 0.9 }}>
          {`"One generation shall praise thy works to another, and shall declare thy mighty acts."`}
        </p>
        <p className="font-['Futura_PT:Book',sans-serif] text-[13px] tracking-[0.04em] text-[#D9C7A8]/55 mt-2">
          — Psalm 145:4
        </p>
      </div>

      {/* ── Divider ───────────────────────────────────────────────────── */}
      <div className="mt-10 md:mt-10 h-px w-full bg-white/10" />

      {/* ── Bottom row: copyright · tagline ──────────────────────────── */}
      <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0 text-center md:text-left">
        <p className="font-['Futura_PT:Book',sans-serif] text-[12px] tracking-[0.02em] text-white/40">
          © 2026 Apostolic Faith Mission Western Europe. All rights reserved.
        </p>
        <p className="font-['Futura_PT:Book',sans-serif] text-[12px] tracking-[0.02em] text-[#D9C7A8]/55">
          Celebrating 50 years of faithful ministry
        </p>
      </div>
    </footer>
  );
}

export default Footer;