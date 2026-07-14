import React from "react";
import logoImg from "../../imports/image.png";
import logoImg1 from "../../imports/Homepage/5a015c837cc63a1e3afec59a04ef46d449dad5cf.png";
import logoSvg from "../../imports/5.svg";
import { Fireworks } from "./fireworks";
import svgPaths from "../../imports/Homepage/svg-ryk8ue9wk8";
import img1998 from "../../imports/Homepage/5a015c837cc63a1e3afec59a04ef46d449dad5cf.png";
import imgImage13 from "../../imports/Homepage/e81c2816bfc1af01bf28989def6b833cd0126703.png";
import imgImage12 from "../../imports/Homepage/00906276d94a619afd9053d491e72ee53b2c84f7.png";
import imgContainer from "../../imports/Homepage/00d5e033bbebac30ecfdda76a8b34cee926f16de.png";
import imgImage1 from "../../imports/Homepage/0f8a3c8fd5f3b15d7f224c591876d33827e7c776.png";
import imgContainer1 from "../../imports/Homepage/e616f666c01d8e532adf17336a5b7576e91684e5.png";
import imgImage8 from "../../imports/Homepage/3a8be516144b02ca05177fe3dd5d45cfd2484a87.png";
import imgContainer2 from "../../imports/Homepage/6071875ce23155069c81f3bdc40cd667fe0ec200.png";
import imgImage11 from "../../imports/Homepage/8342e6cea9f36db12564231fe9f8262a9126ccd2.png";
import imgImage3 from "../../imports/Homepage/00d5e033bbebac30ecfdda76a8b34cee926f16de.png";
import imgImage9 from "../../imports/Homepage/689a77beb788ca8a3f1ba0fab8bd0ba4ac88fa5a.png";
import imgImage16 from "../../imports/Homepage/d060be9ce61288ad16074db37bfbb70d4d8416b7.png";
import imgImage14 from "../../imports/Homepage/e3a2e759660a8d0ba4abbbb7455d7244230b5fa9.png";
import imgImage18 from "../../imports/Homepage/3b8e188b8820680ef46d22804ac760d971cfe95a.png";
import imgImage17 from "../../imports/Homepage/f2e30c0a264a39aae9ecc96a919006cbd7df2106.png";
import imgImage15 from "../../imports/Homepage/934c91a8c59703a23c154d5e409ad03b2b6d72cb.png";
import img51 from "../../imports/Homepage/8873fd3b316d2dfee9ed04e7d802995942646918.png";
import img91 from "../../imports/Homepage/968c2920f880959ab3393716584f0e350964c423.png";
import imgImage from "../../imports/Homepage/9ec56a815db13e6f5f4c4f51dc8c89bded734cf2.png";
import imgDreamyColorfulSmokeClouds2 from "../../imports/Frame19/9f5fd2117b550f89743011446393e79f9a3e46dc.png";

// ── NEW ASSETS ──────────────────────────────────────────────────────────────
// Placeholder references only — replace these three imports with your real
// files. Nothing else in the file needs to change once you do.
import imgStartedPhoto from "../../imports/Homepage/ukpic.png"; // ukhome2 left photo
import imgVideoPoster from "../../imports/Homepage/ukpic.png";       // ukhome3 video thumbnail
// import mp4 may lack type declarations in this TSX context; use require with ts-ignore
// @ts-ignore
import videoSrcPlaceholder from "../../imports/Homepage/aboutvideo.mp4";          // ukhome3 actual video file

// ─── Site-wide typography tokens ───────────────────────────────────────────
// Header font (site-wide): CRONDE
// Sub-heading / body copy (site-wide): Futura PT, Regular, 18px / 32px line-height
// Applied consistently across all sections below — this is the single source
// of truth for body-copy classes so every section stays in sync.
export const HEADER_FONT = "font-['CRONDE:Regular',sans-serif]";
export const BODY_COPY =
  "font-['Futura_PT:Book',sans-serif] text-[18px] leading-[32px]";

// ─── Timeline data ────────────────────────────────────────────────────────────

const TL_IMAGES = [
  "https://images.unsplash.com/photo-1614247262109-b20b6834cab9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY2h1cmNoJTIwY29uZ3JlZ2F0aW9uJTIwMTk1MHN8ZW58MXx8fHwxNzgzMzU0NTgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBnYXRoZXJpbmclMjB3b3JzaGlwJTIwMTk2MHN8ZW58MXx8fHwxNzgzMzU0NTgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1609234656388-0ff363383899?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGlyaXR1YWwlMjByZXZpZGlhbJTIwcHJheWVyJTIwbWVldGluZ3xlbnwxfHx8fDE3ODMzNTQ1ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1642307062789-65540354b12d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBidWlsZGluZyUyMGNvbW11bml0eSUyMGdhdGhlcmluZ3xlbnwxfHx8fDE3ODMzNTQ1ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWl0aCUyMGNlbGVicmF0aW9uJTIwd29yc2hpcCUyMGhhbmRzfGVufDF8fHx8MTc4MzM1NDU4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1532190795157-3f983fb7fa3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBtaW5pc3RyeSUyMGxlYWRlcnNoaXAlMjB0cmFpbmluZ3xlbnwxfHx8fDE3ODMzNTQ1ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1760992003987-efc5259bcfbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBzZXJ2aWNlJTIwaGVscGluZyUyMHBlb3BsZXxlbnwxfHx8fDE3ODMzNTQ1ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1622598453695-4fbaf151aadc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBhbm5pdmVyc2FyeSUyMGNlbGVicmF0aW9uJTIwcGVvcGxlfGVufDF8fHx8MTc4MzM1NDU4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1522158637959-30385a09e0da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaHVyY2glMjB3b3JzaGlwJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3ODMzNTQ1ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1521574778337-d962ef81733d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGNodXJjaCUyMG1pbmlzdHJ5JTIweY9uclMwJTIwcmVhY2h8ZW58MXx8fHwxNzgzMzU0NTg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1763735134124-b1bb75f5386e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjb25ncmVnYXRpb24lMjBkaXZlcnNlJTIwY29tbXVuaXR5fGVufDF8fHx8MTc4MzM1NDU4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1552600552-4d7c157e7db8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGlyaXR1YWwlMjBob3BlJTIwbGlnaHQlMjBjaHVyY2h8ZW58MXx8fHwxNzgzMzU0NTg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1684700746521-b625346ed912?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBtaXNzaW9uJTIwb3V0cmVhY2glMjBldXJvcGV8ZW58MXx8fHwxNzgzMzU0NTg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1707831853477-545a84511e57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZWxlYnJhdGlvbiUyMGNodXJjaCUyMGdvbGRlbiUyMGFubml2ZXJzYXJ5fGVufDF8fHx8MTc4MzM1NDU5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
];

export const TIMELINE_DATA = [
  { year: 1976, title: "The First Sunday School",     text: "The first Apostolic Faith Sunday school meeting in the UK is held in a Brixton lounge, 18 Doverfield Road — three believers present, including Brother Shuaibu Adeoye." },
  { year: 1976, title: "A Fellowship on the Move",     text: "The young fellowship moves to Kintyre Court, Brixton, then to 10 Waller Road, New Cross, as attendance grows." },
  { year: 1979, title: "The First UK Pastor",          text: "Brother Victor Okusanya is ordained in Lagos and becomes the UK's first pastor." },
  { year: 1982, title: "A Building of Our Own",        text: "The congregation settles at 95 Fenham Road, Peckham — the UK's first dedicated Apostolic Faith church building." },
  { year: 2000, title: "A New Pastor Installed",       text: "Rev Victor Okusanya retires after 24 years; Brother Isaac Adigun is installed as UK pastor, 30 April 2000. The Welfare Ministry is founded under Sister Stella Adigun." },
  { year: 2001, title: "The First Camp Meeting",       text: "The first UK Camp Meeting is held, beginning an annual tradition of gathering, prayer, and renewal." },
  { year: 2002, title: "Music as Evangelism",          text: "The first Italy Christmas Concert is held in Treviglio — the start of a lasting musical evangelism tradition." },
  { year: 2003, title: "A New Work in Birmingham",     text: "The Apostolic Faith work begins in Birmingham, later home to the largest AFC facility in Western Europe." },
  { year: 2004, title: "Youth Camp Begins",            text: "The first Youth Camp is held, over the May bank holiday weekend — a tradition that continues every year since." },
  { year: 2005, title: "A Fellowship in Spain",        text: "The Spain fellowship begins in Murcia, gathered by Brother Yaya Bobo and Brother Femi's family." },
  { year: 2006, title: "Ireland's First Seed",         text: "The Dublin, Ireland house fellowship begins, following the Adeyemi family's relocation from London." },
  { year: 2007, title: "Bexley & Bristol Begin",       text: "The Bexley and Bristol works both begin — Bexley from a newspaper advert, Bristol from believers meeting in each other's homes." },
  { year: 2010, title: "Germany, Manchester & Birmingham", text: "The Germany work begins in Walldorf; Birmingham and Manchester churches are purchased as permanent homes." },
  { year: 2011, title: "Three Churches Dedicated",     text: "Bexley, Manchester, and Birmingham churches are dedicated, each gaining its own Elementary Department." },
  { year: 2015, title: "Denmark Re-Established",       text: "The Copenhagen, Denmark fellowship is re-established, beginning a story of faithfulness through years alone." },
  { year: 2016, title: "Glasgow's Travelodge Beginning", text: "The Glasgow fellowship begins, meeting in a rented Travelodge conference room." },
  { year: 2017, title: "Edinburgh & Coventry Begin",   text: "Edinburgh fellowship and Coventry congregation both begin; the Midlands work is restructured into Birmingham, Coventry, and Leicester." },
  { year: 2021, title: "Faithful Through COVID-19",    text: "Churches across the UK and Western Europe move to online and hybrid worship, and find new ways to stay connected." },
  { year: 2023, title: "Cranfield Dedicated",          text: "Cranfield Church is dedicated (15 October); Germany and Denmark each secure their first permanent worship venues; Leicester re-establishes as an independent congregation." },
  { year: 2024, title: "Aberdeen's Permanent Home",    text: "Aberdeen's Kingswells Parish Church is dedicated (4 August) after 26 years without a permanent home." },
  { year: 2025, title: "Rededication & New Beginnings", text: "Bexley Headquarters is formally rededicated after redevelopment (September); Sister Patricia Sossa is ordained pastor in France; Ireland is registered as a Charity in the Republic of Ireland (December)." },
  { year: 2026, title: "Golden Jubilee",               text: "The David Academy launches in Birmingham (April); the Italy church relaunches after eight years' dormancy; the first Mainland Europe Grand Maiden Mini-Camp Meeting is held in Lucca; the church marks its Golden Jubilee." },
].map((entry, i) => ({ ...entry, bgImage: TL_IMAGES[i % TL_IMAGES.length] }));

// ─── Section 1: Opening hero (splash — uksplash1 / uksplash2) ────────────────

function PhotoFrame() {
  return (
    <div className="border-[2.995px] border-solid border-white h-[169.935px] overflow-clip relative w-[241.989px]">
      <div className="absolute h-[213.353px] left-[-68.88px] top-[-25.46px] w-[319.711px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer2} />
      </div>
    </div>
  );
}

function PhotoFrame1() {
  return (
    <div className="border-[2.995px] border-solid border-white h-[169.935px] overflow-clip relative w-[241.989px]">
      <div className="absolute flex h-[463.364px] items-center justify-center left-[-125.28px] top-[-163.99px] w-[607.2px]">
        <div className="flex-none rotate-[11.33deg]">
          <div className="h-[363.104px] relative w-[546.535px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
          </div>
        </div>
      </div>
    </div>
  );
}

function PhotoFrame2() {
  return (
    <div className="border-[2.995px] border-solid border-white h-[169.935px] overflow-clip relative w-[241.989px]">
      <div className="absolute flex h-[303.554px] items-center justify-center left-[-97.37px] top-[-77.8px] w-[396.954px]">
        <div className="flex-none rotate-[11.33deg]">
          <div className="h-[238.049px] relative w-[357.16px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
          </div>
        </div>
      </div>
    </div>
  );
}

function PictureFrame() {
  return (
    <div className="-translate-x-1/2 absolute h-[230.519px] left-[calc(50%-27.02px)] top-[787px] w-[851.958px]">
      <div className="absolute flex h-[226.71px] items-center justify-center left-0 top-0 w-[277.691px]">
        <div className="flex-none rotate-[14.98deg]"><PhotoFrame /></div>
      </div>
      <div className="absolute flex h-[226.776px] items-center justify-center left-[287px] top-0 w-[277.726px]">
        <div className="-rotate-15 flex-none"><PhotoFrame1 /></div>
      </div>
      <div className="absolute flex h-[226.776px] items-center justify-center left-[574.23px] top-[3.74px] w-[277.726px]">
        <div className="flex-none rotate-15"><PhotoFrame2 /></div>
      </div>
    </div>
  );
}

export function Section1({ scrollProgress = 0 }: { scrollProgress?: number }) {
  const clamp = (v: number, lo: number, hi: number) =>
    Math.min(Math.max(Number.isFinite(v) ? v : lo, lo), hi);

  const sp = Number.isFinite(scrollProgress) ? scrollProgress : 0;

  // Phase 1: text + frames drift away (complete by sp = 0.65)
  const textHide    = clamp(sp / 0.65, 0, 1);
  const textOpacity = 1 - textHide;
  const textDriftY  = -textHide * 100; // design-px upward drift

  // Logo: starts appearing at sp = 0.25, fully visible at sp = 0.8
  const logoOpacity = clamp((sp - 0.25) / 0.55, 0, 1);

  // Fireworks fire once the logo is meaningfully visible
  const fireworksActive = logoOpacity > 0.4;

  // ── FIX: fireworks were hardcoded to a 1440x977 desktop canvas, so on
  // mobile viewports the particle field rendered far outside (or was scaled
  // far too small within) the visible area. Track the section's real
  // rendered size instead and feed that into the Fireworks component.
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const [dims, setDims] = React.useState({ width: 1440, height: 977 });

  React.useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        setDims({ width: rect.width, height: rect.height });
      }
    };

    update();

    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("orientationchange", update);

    return () => {
      ro.disconnect();
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-[100svh] md:h-[977px] left-0 overflow-clip relative w-full"
      style={{ backgroundImage: "linear-gradient(0.480792deg, rgb(25, 36, 65) 38.09%, rgb(1, 9, 25) 110.38%)" }}
    >
      {/* Smoke — fades with the hero text */}
      <div
        className="absolute flex items-center justify-center left-0 md:left-[-89px] mix-blend-color-burn top-0 md:top-[-1644px] w-full md:w-[1742px] h-full md:h-[3054px]"
        style={{ opacity: textOpacity }}
      >
        <div className="flex-none rotate-180">
          <div className="h-full md:h-[3054px] opacity-50 relative w-full md:w-[1742px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDreamyColorfulSmokeClouds2} />
          </div>
        </div>
      </div>

      {/* Fireworks — now sized to the real rendered box on every viewport,
          not a fixed desktop canvas, so mobile actually shows the effect */}
      <div className="absolute inset-0 w-full h-full [&>svg]:w-full [&>svg]:h-full pointer-events-none">
        <Fireworks active={fireworksActive} width={dims.width} height={dims.height} />
      </div>

      {/* 50th Anniversary logo — revealed beneath the hero content (uksplash2) */}
      <div
        className="absolute inset-0 flex items-center justify-center px-4"
        style={{ opacity: logoOpacity }}
      >
        <img
          src={logoImg}
          alt="50th Anniversary — AFC UK & Western Europe"
          className="w-[85%] sm:w-[75%] md:w-[90%] max-w-[620px] h-auto"
        />
      </div>

      {/* Hero text + picture frames — drift up and fade out (frontmost layer, uksplash1).
          FIX: switched from top-1/2/left-1/2 + translate hack to a flexbox-centered
          container. This is more reliable across mobile browsers where 100svh shifts
          as chrome (address bar) collapses/expands, and it removes the risk of the
          text block exceeding the box and getting silently clipped by overflow-clip. */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: textOpacity,
          transform: `translateY(${textDriftY}px)`,
        }}
        className="flex flex-col items-center justify-center px-4 sm:px-6"
      >
        <div className="w-full max-w-[596px] text-center">
          <p
            className={`${BODY_COPY} text-white mb-3 md:mb-4`}
            style={{
              fontSize: "clamp(16px, 4.5vw, 48px)",
              lineHeight: "clamp(24px, 6vw, 60px)",
            }}
          >
            {`"One generation shall praise thy works to another, and shall declare thy mighty acts."`}
          </p>
          <p
            className={`${BODY_COPY} text-white`}
            style={{
              fontSize: "clamp(13px, 3vw, 48px)",
              lineHeight: "clamp(20px, 4.5vw, 60px)",
            }}
          >
            — Psalm 145:4
          </p>
        </div>
        <div className="hidden lg:block">
          <PictureFrame />
        </div>
      </div>
    </div>
  );
}

// ─── Section 3 shared helpers ─────────────────────────────────────────────────

function ImgBg() {
  return (
    <div className="absolute h-full left-0 opacity-10 top-0 w-full pb-[10px] hidden md:block">
      <div className="absolute h-[1017px] left-[-83px] top-[-21px] w-[1525.873px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
    </div>
  );
}

function SmallFrame({ img }: { img: string }) {
  return (
    null
  );
}

// Diagonal grid pattern used behind the "Praise God With US!" hero (ukhome1)
function DiagonalGrid() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        opacity: 0.55,
        backgroundImage:
          "repeating-linear-gradient(35deg, transparent, transparent 77px, rgba(25,36,65,0.09) 77px, rgba(25,36,65,0.09) 78px)," +
          "repeating-linear-gradient(-35deg, transparent, transparent 77px, rgba(25,36,65,0.09) 77px, rgba(25,36,65,0.09) 78px)",
        maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black 40%, transparent 85%)",
        WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black 40%, transparent 85%)",
      }}
    />
  );
}

// Simple play-button video card used in the video section (ukhome3video)
function VideoPlayer() {
  const [playing, setPlaying] = React.useState(false);

  if (playing) {
    return (
      <div className="relative w-full max-w-[1096px] aspect-video rounded-[4px] overflow-hidden bg-black">
        <video
          src={videoSrcPlaceholder}
          controls
          autoPlay
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label="Play video"
      className="relative w-full max-w-[1096px] aspect-video rounded-[4px] overflow-hidden cursor-pointer border-0 p-0 block"
    >
      <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgVideoPoster} />
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="size-[56px] md:size-[84px] rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center border border-white/70">
          <svg width="20" height="23" viewBox="0 0 26 30" fill="none" className="md:w-[26px] md:h-[30px]">
            <path d="M0 0 L26 15 L0 30 Z" fill="white" />
          </svg>
        </div>
      </div>
    </button>
  );
}

// Rotating dial ring + surrounding year labels (desktop / tablet only — see
// mobile TimelineMobile component below for small screens).
// svgRotation: brings activeYearIndex tick to the visual 12-o'clock position
function TimelineRing({
  activeYearIndex,
  labelsOpacity = 1,
}: {
  activeYearIndex: number;
  labelsOpacity?: number;
}) {
  const total = TIMELINE_DATA.length;
  const svgRotation = 90 - activeYearIndex * (360 / total);

  const prev2 = TIMELINE_DATA[activeYearIndex - 2];
  const prev1 = TIMELINE_DATA[activeYearIndex - 1];
  const cur   = TIMELINE_DATA[activeYearIndex];
  const next1 = TIMELINE_DATA[activeYearIndex + 1];
  const next2 = TIMELINE_DATA[activeYearIndex + 2];

  // labelsOpacity overlays the show/hide logic for each label
  const fade = (show: boolean) => ({
    opacity: show ? labelsOpacity : 0,
    transition: "opacity 0.35s ease",
  });

  return (
    <>
      {/* Inner filled circle */}
      <div className="absolute flex items-center justify-center left-[487.71px] size-[465.353px] top-[611.94px]">
        <div className="-rotate-90 flex-none">
          <div className="relative size-[465.353px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 465.353 465.353">
              <circle cx="232.677" cy="232.677" fill="black" fillOpacity="0.48" r="232.273" stroke="#D9C7A8" strokeWidth="0.80661" />
            </svg>
          </div>
        </div>
      </div>

      {/* Outer dial ring — JS-controlled rotation, tick marks only */}
      <div className="absolute flex items-center justify-center left-[391px] size-[659px] top-[515px]">
        <div className="-rotate-90 flex-none">
          <div className="relative size-[659px]">
            <svg
              className="absolute block inset-0 size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 659 659"
              style={{
                transformOrigin: "center",
                transform: `rotate(${svgRotation}deg)`,
                transition: "transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              } as React.CSSProperties}
            >
              <circle cx="329.5" cy="329.5" r="329.097" stroke="#D9C7A8" strokeWidth="1" strokeOpacity="0.5" />
              {Array.from({ length: total }, (_, i) => {
                const isActive = i === activeYearIndex;
                const CX = 329.5, CY = 329.5, R = 329.097;
                const rad = (i * 360 / total) * (Math.PI / 180);
                const sin = Math.sin(rad), cos = Math.cos(rad);
                const tickLen = isActive ? 36 : 16;
                const tipX = CX + R * sin;
                const tipY = CY - R * cos;
                return (
                  <g key={i}>
                    <line
                      x1={CX + (R - tickLen) * sin}
                      y1={CY - (R - tickLen) * cos}
                      x2={tipX}
                      y2={tipY}
                      stroke={isActive ? "white" : "#D9C7A8"}
                      strokeWidth={isActive ? "2.5" : "0.8"}
                      strokeLinecap="round"
                      opacity={isActive ? 1 : 0.5}
                    />
                    {isActive && (
                      <circle cx={tipX} cy={tipY} r="4" fill="white" />
                    )}
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      </div>

      <div style={{
        position: "absolute",
        left: 717,
        top: 512,
        width: 7,
        height: 7,
        borderRadius: "50%",
        background: "white",
        boxShadow: "0 0 8px 2px rgba(255,255,255,0.6)",
        pointerEvents: "none",
      }} />

      {/* Far-left year (prev2) */}
      <div
        className={`-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col ${HEADER_FONT} justify-center leading-[0] left-[calc(50%-259.1px)] not-italic text-[#d9c7a8] text-[24px] text-center top-[736.26px] whitespace-nowrap`}
        style={fade(!!prev2)}
      >
        <p className="leading-[normal]">{prev2?.year ?? ""}</p>
      </div>

      {/* Near-left year (prev1) */}
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[40.919px] items-center justify-center left-[calc(50%-168.92px)] top-[623.14px] w-[47.873px]"
        style={fade(!!prev1)}
      >
        <div className="flex-none rotate-30">
          <div className={`[word-break:break-word] flex flex-col ${HEADER_FONT} justify-center leading-[0] not-italic relative text-[#d9c7a8] text-[24px] text-center whitespace-nowrap`}>
            <p className="leading-[normal]">{prev1?.year ?? ""}</p>
          </div>
        </div>
      </div>

      {/* Center year — large, white, bold */}
      <div className={`-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col ${HEADER_FONT} justify-center leading-[0] left-[calc(50%+0.5px)] not-italic text-center text-white top-[571.24px] whitespace-nowrap`}
           style={{ fontSize: 56, fontWeight: 700, opacity: labelsOpacity, transition: "opacity 0.35s ease" }}>
        <p className="leading-[normal]">{cur.year}</p>
      </div>

      {/* Near-right year (next1) */}
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[42.155px] items-center justify-center left-[calc(50%+183.45px)] top-[639.49px] w-[49.584px]"
        style={fade(!!next1)}
      >
        <div className="flex-none rotate-[-30.51deg]">
          <div className={`[word-break:break-word] flex flex-col ${HEADER_FONT} justify-center leading-[0] not-italic relative text-[#d9c7a8] text-[24px] text-center whitespace-nowrap`}>
            <p className="leading-[normal]">{next1?.year ?? ""}</p>
          </div>
        </div>
      </div>

      {/* Far-right year (next2) */}
      <div
        className={`-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col ${HEADER_FONT} justify-center leading-[0] left-[calc(50%+263.39px)] not-italic text-[#d9c7a8] text-[24px] text-center top-[742.52px] whitespace-nowrap`}
        style={fade(!!next2)}
      >
        <p className="leading-[normal]">{next2?.year ?? ""}</p>
      </div>
    </>
  );
}

function SVGGroups() {
  return (
    <div className="absolute contents inset-[-12.5%_14.58%] hidden md:block">
      <div className="absolute inset-[-12.5%_14.58%] opacity-10">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1020 1020">
          <g><path d={(svgPaths as any).p32d5c00} fill="var(--fill-0, #949494)" /></g>
        </svg>
      </div>
      {[
        { inset: "76.13%_16.36%_2.24%_25.01%", vb: "0 0 844.231 176.516", d: (svgPaths as any).p56d4880 },
        { inset: "61.41%_18.08%_17.07%_23.28%", vb: "0 0 844.421 175.579", d: (svgPaths as any).p77edd00 },
        { inset: "46.59%_19.82%_31.81%_21.55%", vb: "0 0 844.317 176.257", d: (svgPaths as any).pcc0b00 },
        { inset: "31.85%_21.54%_46.63%_19.81%", vb: "0 0 844.421 175.578", d: (svgPaths as any).p1387e580 },
        { inset: "17.07%_23.28%_61.41%_18.08%", vb: "0 0 844.421 175.58",  d: (svgPaths as any).p2637c180 },
        { inset: "2.25%_25.01%_76.15%_16.36%",  vb: "0 0 844.316 176.257", d: (svgPaths as any).p2defe450 },
        { inset: "-8.86%_24.36%_5.38%_63.44%",  vb: "0 0 175.568 844.402", d: (svgPaths as any).p1ab1b700 },
        { inset: "-5.3%_34.13%_1.82%_53.67%",   vb: "0 0 175.567 844.402", d: (svgPaths as any).p3607bf00 },
        { inset: "-1.74%_43.9%",                  vb: "0 0 175.568 844.402", d: (svgPaths as any).p9d11600  },
        { inset: "1.82%_53.68%_-5.3%_34.13%",   vb: "0 0 175.568 844.402", d: (svgPaths as any).p2faa4831 },
        { inset: "5.38%_63.45%_-8.86%_24.36%",  vb: "0 0 175.568 844.402", d: (svgPaths as any).p9deab80  },
      ].map((g, i) => (
        <div key={i} className="absolute opacity-10" style={{ inset: g.inset }}>
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox={g.vb}>
            <g><path d={g.d} fill="var(--fill-0, #949494)" /></g>
          </svg>
        </div>
      ))}
    </div>
  );
}

function PhotoCard() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip pb-[32px] pt-[8px] px-[8px] relative shadow-[0px_4px_4.2px_0px_rgba(0,0,0,0.07)] w-[215px]">
      <div className="h-[188px] overflow-clip relative shrink-0 w-[199px]">
        <div className="absolute h-[219px] left-[-73px] top-[-31px] w-[327.677px]">
          <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgContainer1} />
        </div>
      </div>
    </div>
  );
}

const WELCOME_H = 600;  // "Praise God With US!" hero
const STARTED_H = 722;  // "Where it all started"
const VIDEO_H   = 860;  // Video section
export const PRE_H_TOTAL = WELCOME_H + STARTED_H + VIDEO_H; // 2182 — import this in App.tsx, don't hardcode it there

export function PreTimelineSection() {
  return (
    <div className="bg-[#fcf9f2] relative w-full overflow-clip">

      {/* ══════════════════ MOBILE / TABLET (stacked, natural flow) ══════════════════ */}
      <div className="flex flex-col md:hidden">
        {/* 1. Hero */}
        <div className="relative mt-[-150px] w-full min-h-[100svh] overflow-hidden bg-[#fcf9f2] flex items-center justify-center px-6 py-16">
          <DiagonalGrid />
          <div className="relative flex flex-col items-center text-center max-w-[420px] z-10">
            <img
              src={logoImg1}
              alt="AFM 50th Anniversary"
              className="w-full max-w-[240px] h-auto"
            />
            <div className="mt-[-150px]">
              <p className={`${HEADER_FONT} text-[#192441] text-[38px] leading-[1.05]`}>
                Praise God
              </p>
              <p className={`${HEADER_FONT} text-[#192441] text-[38px] leading-[1.05]`}>
                With US!
              </p>
            </div>
            <p className={`${BODY_COPY} text-[#192441] mt-4`} style={{ opacity: 0.8 }}>
              I know not what God will accomplish in and through me, but I will do my best to be faithful.
            </p>
          </div>
        </div>

        {/* 2. Where it all started */}
        <div className="relative w-full bg-[#0f1421] px-6 py-16">
          <div className="flex flex-col items-center gap-8 max-w-[500px] mx-auto">
            <div className="w-full aspect-[4/3] relative overflow-hidden">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgStartedPhoto} />
              <div aria-hidden className="absolute border-[4px] border-solid border-white inset-0 pointer-events-none" />
            </div>
            <div className="flex flex-col gap-4 items-start text-white text-left">
              <p className={`${HEADER_FONT} text-[32px] leading-tight`}>Where it all started</p>
              <p className={`${BODY_COPY} opacity-90`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
              </p>
              <a
                href="#timeline"
                onClick={(e) => { e.preventDefault(); window.location.hash = "#timeline"; }}
                className={`${BODY_COPY} text-[15px] text-white underline underline-offset-4 decoration-1 cursor-pointer`}
              >
                Read Full Timeline
              </a>
            </div>
          </div>
        </div>

        {/* 3. Video section */}
        <div className="relative w-full bg-[#0f1421] px-6 py-14 flex items-center justify-center">
          <VideoPlayer />
        </div>
      </div>

      {/* ══════════════════ DESKTOP (pixel-perfect canvas) ══════════════════ */}
      <div className="hidden md:block relative w-[1440px] max-w-full mx-auto h-auto" style={{ height: PRE_H_TOTAL }}>

        {/* ============ 1. "PRAISE GOD WITH US!" hero (ukhome1) ============ */}
        <div
          className="absolute left-0 top-0 w-[1440px] overflow-hidden bg-[#fcf9f2] mt-[-100px] "
          style={{ height: WELCOME_H }}
        >
          <DiagonalGrid />

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center w-full max-w-[900px] px-8 z-10">

            <img
              src={logoImg1}
              alt="AFM 50th Anniversary"
              className="w-full max-w-[420px] h-auto"
            />
            <div className="mt-[-150px]">
              <p className={`${HEADER_FONT} text-[#192441] text-[64px] leading-[1]`}>
                Praise God
              </p>
              <p className={`${HEADER_FONT} text-[#192441] text-[64px] leading-[1]`}>
                With US!
              </p>
            </div>

            <p className={`${BODY_COPY} text-[#192441] max-w-[520px] mt-3`} style={{ opacity: 0.8 }}>
              I know not what God will accomplish in and through me, but I will do my best to be faithful.
            </p>
          </div>
        </div>

        {/* ============ 2. "WHERE IT ALL STARTED" dark two-column (ukhome2) ============
            top is now WELCOME_H, not a hardcoded 640 — always lines up with
            the actual bottom edge of the hero above, regardless of future edits. */}
        <div
          className="absolute left-0 w-[1440px] h-[722px] bg-[#0f1421] overflow-clip mt-[-50px]"
          style={{ top: WELCOME_H }}
        >
          <ImgBg />
          <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[62px] items-center left-1/2 top-[361px] w-[1000px]">
            <div className="h-[280px] relative shrink-0 w-[400px] overflow-clip">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgStartedPhoto} />
              <div aria-hidden className="absolute border-[5px] border-solid border-white inset-0 pointer-events-none" />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start leading-[0] not-italic relative shrink-0 text-white w-[538px]">
              <div className={`flex flex-col ${HEADER_FONT} justify-center min-w-full relative shrink-0 text-[48px] w-[min-content]`}>
                <p className="leading-[normal]">Where it all started</p>
              </div>
              <div className={`flex flex-col ${BODY_COPY} justify-center relative shrink-0 w-full opacity-90`}>
                <p className="leading-[32px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
                </p>
              </div>
              <a
                href="#timeline"
                onClick={(e) => { e.preventDefault(); window.location.hash = "#timeline"; }}
                className={`${BODY_COPY} text-[16px] text-white underline underline-offset-4 decoration-1 cursor-pointer`}
              >
                Read Full Timeline
              </a>
            </div>
          </div>
        </div>

        {/* ============ 3. VIDEO SECTION (ukhome3video) ============
            top is now WELCOME_H + STARTED_H, not a hardcoded 1322. */}
        <div
          className="absolute left-0 w-[1440px] h-[860px] bg-[#0f1421] flex items-center justify-center px-6 mt-[-50px]"
          style={{ top: WELCOME_H + STARTED_H }}
        >
          <VideoPlayer />
        </div>
      </div>
    </div>
  );
}

/**
 * TimelineSection — rendered inside a fixed fullscreen overlay managed by App
 * on desktop, and reused directly (with its own mobile branch below) inside
 * a swipeable viewer on mobile/tablet — see MobileTimelineViewer in App.tsx.
 * The design canvas is 1440 × 782 px on desktop; on small screens the
 * pixel-positioned dial ring and year labels don't fit, so a simplified
 * stacked card layout is shown instead below `md`.
 */
export function TimelineSection({
  activeYearIndex,
  transitionProgress = 0,
}: {
  activeYearIndex: number;
  transitionProgress?: number;
}) {
  const safeIndex = Math.min(Math.max(activeYearIndex, 0), TIMELINE_DATA.length - 1);
  const entry = TIMELINE_DATA[safeIndex];
  const tp = Math.min(Math.max(Number.isFinite(transitionProgress) ? transitionProgress : 0, 0), 1);

  // Helper: normalise tp into a sub-range [lo, hi] → 0…1
  const norm = (lo: number, hi: number) => Math.min(Math.max((tp - lo) / (hi - lo), 0), 1);


  const labelsOpacity  = 1 - norm(0.00, 0.20);
  const contentOpacity = 1 - norm(0.00, 0.35); // independent of any JS fade state
  const dotsOpacity    = 1 - norm(0.00, 0.30);
  const framesOpacity  = 1 - norm(0.00, 0.35);

  const ringMotion  = norm(0.15, 0.85);
  const ringScale   = 1 - ringMotion * 0.86;
  // translateY pushes the ring toward the logo circle position in the
  // next section (gallery logo is near the canvas top-centre)
  const ringDriftY  = -ringMotion * 300;
  const ringOpacity = 1 - norm(0.65, 1.00);

  // Background: interpolate #0f1421 → #fcf9f2 (gallery cream)
  const bgT = norm(0.20, 1.00);
  const bgR = Math.round(15  + (252 - 15)  * bgT);
  const bgG = Math.round(20  + (249 - 20)  * bgT);
  const bgB = Math.round(33  + (242 - 33)  * bgT);

  const imgBgOpacity = 1 - norm(0.70, 1.00);
  const bg = `rgb(${bgR},${bgG},${bgB})`;

  return (
    <div className="relative w-full h-full md:h-[782px] overflow-clip" style={{ background: bg }}>

      {/* ══════════════════ MOBILE / TABLET simplified card ══════════════════ */}
      <div className="flex md:hidden relative w-full h-full min-h-[100svh] flex-col items-center justify-center px-6 py-16">
        {/* background image tied to the active year */}
        <div className="absolute inset-0" style={{ opacity: Math.max(0.25, imgBgOpacity * 0.4) }}>
          <img
            key={safeIndex}
            src={entry.bgImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(15,20,33,0.8) 0%, rgba(15,20,33,0.9) 100%)" }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center max-w-[420px]" style={{ opacity: contentOpacity, transition: "opacity 0.25s ease" }}>
          <p
            className={`text-white mb-3 ${HEADER_FONT}`}
            style={{ fontSize: 44, opacity: labelsOpacity, transition: "opacity 0.35s ease" }}
          >
            {entry.year}
          </p>
          <h3 className={`${HEADER_FONT} text-[24px] text-white mb-3 leading-tight`}>
            {entry.title}
          </h3>
          <p className={`${BODY_COPY} text-white opacity-90`}>
            {entry.text}
          </p>
        </div>

        <div className="relative z-10 mt-8" style={{ opacity: dotsOpacity }}>
          <p className={`${BODY_COPY} text-[12px] text-[#D9C7A8] opacity-70 tracking-[0.14em] m-0`}>
            {String(activeYearIndex + 1).padStart(2, "0")} / {String(TIMELINE_DATA.length).padStart(2, "0")}
          </p>
        </div>
      </div>

      {/* ══════════════════ DESKTOP (pixel-perfect rotating dial) ══════════════════ */}
      <div className="hidden md:block relative w-[1440px] max-w-full mx-auto h-[782px] ">
        {/* Background image layer that changes with active year */}
        <div style={{
          position: "absolute",
          inset: 0,
          opacity: Math.max(0.25, imgBgOpacity * 0.35),
          transition: "opacity 1.2s cubic-bezier(0.25, 0.1, 0.25, 1)",
        }}>
          <img
            key={safeIndex}
            src={entry.bgImage}
            alt=""
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          {/* Dark overlay for text legibility */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(15,20,33,0.75) 0%, rgba(15,20,33,0.85) 100%)",
          }} />
        </div>

        {/* Texture background fades as colour transitions */}
        <div style={{ opacity: imgBgOpacity * 0.05 }}>
          <ImgBg />
        </div>

        {/* ── Ring layer ──────────────────────────────────────────────────── */}
        {/* Contracts toward canvas centre (50% 50%) and drifts upward.      */}
        {/* Because the ring arc is near the canvas bottom, scaling from      */}
        {/* canvas centre causes the visible arc to rise while shrinking.     */}
        <div style={{
          position: "absolute", inset: 0,
          transform: `translateY(${ringDriftY}px) scale(${ringScale})`,
          transformOrigin: "50% 50%",
          opacity: Math.max(0, ringOpacity),
          pointerEvents: "none",
        }}>
          <TimelineRing activeYearIndex={safeIndex} labelsOpacity={labelsOpacity} />
        </div>

        {/* Decorative frames — fade out with content */}
        <div style={{ position: "absolute", inset: 0, opacity: framesOpacity, pointerEvents: "none" }}>
          <div className="absolute flex h-[153.332px] items-center justify-center left-[37px] top-[293px] w-[187.781px]">
            <div className="flex-none rotate-15"><SmallFrame img={imgImage3} /></div>
          </div>
          <div className="absolute flex h-[153.332px] items-center justify-center left-[1210px] top-[362px] w-[187.781px]">
            <div className="-rotate-15 flex-none"><SmallFrame img={imgImage3} /></div>
          </div>
        </div>

        {/* Title */}
        <div
          className={`-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col ${HEADER_FONT} justify-center leading-[0] left-[calc(50%+7.5px)] not-italic text-center text-white top-[202px] whitespace-nowrap`}
          style={{ fontSize: 48, opacity: contentOpacity, transition: "opacity 0.25s ease" }}
        >
          <p className="leading-[normal]">{entry.title}</p>
        </div>

        {/* Body text */}
        <div
          className={`-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col ${BODY_COPY} justify-center left-[calc(50%+14px)] not-italic text-center text-white top-[337px] w-[770px]`}
          style={{ opacity: contentOpacity, transition: "opacity 0.16s ease" }}
        >
          <p className="leading-[32px]">{entry.text}</p>
        </div>

        {/* Year counter — e.g. "08 / 14" — replaces the dots */}
        <div
          className="absolute bottom-[32px] left-1/2 -translate-x-1/2"
          style={{ opacity: dotsOpacity }}
        >
          <p className={`${BODY_COPY} text-[13px] text-[#D9C7A8] opacity-55 tracking-[0.14em] m-0 whitespace-nowrap`}>
            {String(activeYearIndex + 1).padStart(2, "0")} / {String(TIMELINE_DATA.length).padStart(2, "0")}
          </p>
        </div>
      </div>
    </div>
  );
}

export function PostTimelineSection() {
  return (
    <div className="bg-[#fcf9f2] relative w-full overflow-clip">

      {/* ══════════════════ MOBILE / TABLET ══════════════════ */}
      <div className="flex md:hidden flex-col items-center text-center px-6 py-16 gap-8">
        <p className={`${HEADER_FONT} text-[#192441] text-[44px] leading-tight`}>
          50 Years<br />{`Of God's Faithful Ministry`}
        </p>
        <div className="grid grid-cols-2 gap-4 w-full max-w-[420px]">
          <div className="rounded-[3px] overflow-hidden ">
            <img alt="" className="w-full h-full object-cover" src={imgContainer1} />
          </div>
          <div className="rounded-[3px] overflow-hidden mt-6">
            <img alt="" className="w-full h-full object-cover" src={imgContainer2} />
          </div>
        </div>
        <button
          onClick={() => { window.location.hash = "#gallery"; }}
          className="flex items-center justify-center p-[12px] rounded-[2px] w-full max-w-[280px] bg-[#192441] cursor-pointer border-0"
        >
          <span className={`${BODY_COPY} text-[16px] text-white`}>
            View Full Gallery
          </span>
        </button>
      </div>

      {/* ══════════════════ DESKTOP (pixel-perfect canvas, unchanged) ══════════════════ */}
      <div className="hidden md:block relative w-[1440px] max-w-full mx-auto h-[860px]">
        <div className="absolute left-0 top-[7px] w-[1440px]">
          <div className="h-[816px] left-0 overflow-clip relative w-[1440px]">
            <SVGGroups />
            <div className="absolute left-[74px] top-[113px]"><PhotoCard /></div>
            <div className="absolute flex h-[244.998px] items-center justify-center left-[108.94px] top-[503.5px] w-[233.118px]">
              <div className="flex-none rotate-[4.74deg]"><PhotoCard /></div>
            </div>
            <div className="absolute left-[1093px] top-[316px]"><PhotoCard /></div>
            <div className="absolute flex h-[289.163px] items-center justify-center left-[1079px] top-[468px] w-[281.581px]">
              <div className="flex-none rotate-[20.65deg]"><PhotoCard /></div>
            </div>
            <div className="absolute flex h-[272.731px] items-center justify-center left-[1078px] top-[76px] w-[263.21px]">
              <div className="flex-none rotate-[13.81deg]"><PhotoCard /></div>
            </div>
            <div className={`-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col ${HEADER_FONT} justify-center leading-[0] left-[calc(50%+0.5px)] not-italic text-[#192441] text-[72px] text-center top-[416.5px] w-[525px]`}>
              <p className="leading-[normal]">Years<br />{`Of God's Faithful Ministry`}</p>
            </div>
            <div className="absolute flex h-[272.02px] items-center justify-center left-[102.33px] top-[280.35px] w-[262.426px]">
              <div className="flex-none rotate-[-13.55deg]">
                <div className="bg-white content-stretch flex flex-col items-start overflow-clip pb-[32px] pt-[8px] px-[8px] relative shadow-[0px_0px_9.2px_0px_rgba(0,0,0,0.07)] w-[215px]">
                  <div className="h-[188px] overflow-clip relative shrink-0 w-[199px]">
                    <div className="absolute h-[219px] left-[-73px] top-[-31px] w-[327.677px]">
                      <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgContainer1} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => { window.location.hash = "#gallery"; }}
              className="absolute flex h-[42px] items-center justify-center left-[603px] p-[12px] rounded-[2px] top-[601px] w-[235px] bg-[#192441] cursor-pointer border-0"
            >
              <div className={`[word-break:break-word] flex flex-col ${BODY_COPY} justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap`}>
                <p className="leading-[normal]">View Full Gallery</p>
              </div>
            </button>
            <div className="absolute left-[640px] size-[172px] top-[113px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute left-[-35.58%] max-w-none size-[171.15%] top-[-35.58%]" src={img51} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Stories section (ukhome4 — "Voices of the Journey") ─────────────────────

const STORIES = [
  {
    img: imgImage3,
    title: "Only Three of Us Were Present",
    text: "On 11 April 1976, Brother Shuaibu Adeoye, Brother Victor Okusanya, and Sister Comfort Martins held the very first Apostolic Faith Sunday school lesson in the UK, in a Brixton lounge.",
    tag: "1976",
  },
  {
    img: imgContainer1,
    title: "Dami's Story — A Testimony of Faithfulness",
    text: "In July 2022, a Birmingham Church family watched God turn a medical emergency no one expected their daughter to survive into a full and lasting recovery.",
    tag: "2022",
  },
  {
    img: imgContainer2,
    title: "Fifty Years of Testimonies",
    text: "Healing, provision, restored families, and lives turned toward Christ — real stories gathered from across our branches over five decades of ministry.",
    tag: "1976–2026",
  },
];

// ── FIX: exported height/anchor so App.tsx (or any absolute-offset layout
// math for surrounding sections) can size this section correctly instead of
// guessing — the previous file had no such export, unlike PreTimelineSection,
// which is the most likely reason this section was being clipped.
export const STORIES_MIN_H = 800;

export function StoriesSection() {
  return (
    // FIX: removed `overflow-clip` — this section has no fixed height (it
    // uses minHeight + "auto" so content-driven height can grow), so clipping
    // overflow here silently cuts off content whenever the cards + heading +
    // CTA add up to more than the 800px minimum. Letting the box grow
    // naturally is what "height: auto" was already trying to do.
    <div
      className="relative w-full px-4 md:px-0"
      style={{ minHeight: STORIES_MIN_H, background: "#FCF9F2" }}
    >
      {/* Heading */}
      <div className="mt-8 pt-12 md:pt-20 pb-8 md:pb-0 mx-auto max-w-[680px] text-center">
        <p className={`${BODY_COPY} text-[10px] md:text-[12px] text-[#192441] tracking-[0.22em] opacity-45 uppercase mb-4 md:mb-5`}>
          Stories of Ministry
        </p>
        <h2 className={`${HEADER_FONT} text-[36px] md:text-[58px] text-[#192441] leading-tight mb-4 md:mb-6`}>
          Voices of the Journey
        </h2>
        <p className={`${BODY_COPY} text-[#192441] opacity-55`}>
          Across five decades, the Gospel has transformed lives throughout Western Europe.
        </p>
      </div>

      {/* Story cards */}
      <div className="mt-10 md:mt-16 mb-12 md:mb-0 mx-auto max-w-[1200px] flex flex-col md:flex-row gap-8 md:gap-11">
        {STORIES.map((story, i) => (
          <div key={i} className="flex-1 flex flex-col">
            {/* Photo */}
            <div className="h-[180px] md:h-[216px] overflow-hidden rounded-[3px] relative">
              <img
                src={story.img}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            {/* Meta */}
            <p className={`${BODY_COPY} text-[11px] md:text-[12px] text-[#192441] opacity-45 mt-4 md:mt-5 mb-2 tracking-[0.14em]`}>
              {story.tag}
            </p>
            <h3 className={`${HEADER_FONT} text-[18px] md:text-[22px] text-[#192441] mb-2 md:mb-3 leading-tight`}>
              {story.title}
            </h3>
            <p className={`${BODY_COPY} text-[#192441] opacity-60`}>
              {story.text}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="pb-20 md:pb-[60px] flex justify-center">
        <div
          onClick={() => { window.location.hash = "#watch"; }}
          className={`${BODY_COPY} bg-[#192441] text-white text-[13px] md:text-[14px] tracking-wide py-3 md:py-3.5 px-8 md:px-9 rounded-full cursor-pointer whitespace-nowrap`}
        >
          View All Stories
        </div>
      </div>

      {/* Bottom rule */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#192441] opacity-8" />
    </div>
  );
}