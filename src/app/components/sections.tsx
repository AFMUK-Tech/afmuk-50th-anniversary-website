/// <reference path="../../types/images.d.ts" />

import React from "react";
import logoImg from "../../imports/image.png";
import logoImg1 from "../../imports/Homepage/5a015c837cc63a1e3afec59a04ef46d449dad5cf.png";
import { Fireworks } from "./fireworks";
import svgPaths from "../../imports/Homepage/svg-ryk8ue9wk8";
import imgImage13 from "../../imports/Homepage/e81c2816bfc1af01bf28989def6b833cd0126703.png";
import imgImage1 from "../../imports/Homepage/0f8a3c8fd5f3b15d7f224c591876d33827e7c776.png";
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
import imgDreamyColorfulSmokeClouds2 from "../../imports/Frame19/9f5fd2117b550f89743011446393e79f9a3e46dc.png";
import imgPrayerPhoto from "../../imports/Frame19/ce8c1a1065b04074fbc18eb2c06e7366056f0343.png";

// ── NEW ASSETS ──────────────────────────────────────────────────────────────
import imgVideoPoster from "../../imports/Homepage/ukpic.png";
// @ts-ignore
import videoSrcPlaceholder from "../../imports/Homepage/aboutvideo.mp4";

// ─── Site-wide typography tokens ───────────────────────────────────────────
export const HEADER_FONT = "site-heading";
export const BODY_COPY =
  "site-body text-[18px] leading-[32px]";

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

function PictureFrame() {
  const photos = [imgContainer2, imgPrayerPhoto, imgImage3];
  const rotations = ["rotate-[8deg]", "-rotate-[8deg]", "rotate-[8deg]"];

  return (
    <div
      className="absolute bottom-[max(1rem,env(safe-area-inset-bottom))] top-40 md:top-160 left-1/2 flex w-[92vw] max-w-213 -translate-x-1/2 items-center justify-center gap-[2vw] sm:bottom-[clamp(1.5rem,4svh,3rem)] sm:gap-5"
      aria-label="Photos from the church's ministry"
    >
      {photos.map((photo, index) => (
        <div
          key={photo}
          className={`relative aspect-[1.424/1] w-[30%] shrink-0 overflow-hidden border-2 border-white sm:border-[3px] ${rotations[index]}`}
        >
          <img
            alt=""
            className="absolute inset-0 size-full max-w-none object-cover pointer-events-none"
            src={photo}
            style={{ height: "100%", maxWidth: "none" }}
          />
        </div>
      ))}
    </div>
  );
}

export function Section1({
  scrollProgress = 0,
  staticReveal = false,
}: { scrollProgress?: number; staticReveal?: boolean }) {
  const clamp = (v: number, lo: number, hi: number) =>
    Math.min(Math.max(Number.isFinite(v) ? v : lo, lo), hi);

  const sp = staticReveal ? 1 : (Number.isFinite(scrollProgress) ? scrollProgress : 0);

  const textHide    = clamp(sp / 0.65, 0, 1);
  const textOpacity = staticReveal ? 1 : 1 - textHide;
  const textDriftY  = staticReveal ? 0 : -textHide * 100;

  const logoOpacity = staticReveal ? 1 : clamp((sp - 0.25) / 0.55, 0, 1);
  const fireworksActive = staticReveal ? true : logoOpacity > 0.4;

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
      className="relative left-0 h-dvh min-h-svh w-full max-w-none overflow-clip"
      style={{ backgroundImage: "linear-gradient(0.480792deg, rgb(25, 36, 65) 38.09%, rgb(1, 9, 25) 110.38%)" }}
    >
      <img
        alt=""
        className="absolute inset-0 size-full max-w-none rotate-180 object-cover opacity-50 mix-blend-color-burn pointer-events-none"
        src={imgDreamyColorfulSmokeClouds2}
        style={{ height: "100%", maxWidth: "none" }}
      />

      <div className="absolute inset-0 w-full h-full [&>svg]:w-full [&>svg]:h-full pointer-events-none">
        <Fireworks active={fireworksActive} width={dims.width} height={dims.height} />
      </div>

      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ opacity: logoOpacity }}
      >
        <img
          src={logoImg}
          alt="50th Anniversary — AFC UK & Western Europe"
          className="h-auto object-contain"
          style={{ width: "min(82vw, 560px)" }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: textOpacity,
          transform: `translateY(${textDriftY}px)`,
        }}
        className="flex w-full flex-col items-center justify-center"
      >
        <div className="w-[92vw] max-w-149 -translate-y-[clamp(1.5rem,8svh,5rem)] text-center sm:w-[88vw]">
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
        <PictureFrame />
      </div>
    </div>
  );
}

// ─── Section 3 shared helpers ─────────────────────────────────────────────────

function ImgBg() {
  return (
    <div className="absolute h-full left-0 opacity-10 top-0 w-full pb-2.5 hidden md:block">
      <div className="absolute h-254.25 -left-20.75 -top-5.25 w-[1525.873px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
    </div>
  );
}

function SmallFrame({ img: _img }: { img: string }) {
  return null;
}

function DiagonalGrid() {
  return (
    <div
      className="pointer-events-none absolute left-1/2 top-1/2 h-[84%] w-[145%] max-w-260 -translate-x-1/2 -translate-y-1/2 rotate-[-10deg] border border-[#192441]/10 sm:h-[90%] sm:w-[105%] lg:h-[88%] lg:w-[72%]"
      style={{
        opacity: 0.62,
        backgroundImage:
          "linear-gradient(rgba(25,36,65,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(25,36,65,0.12) 1px, transparent 1px)",
        backgroundSize: "clamp(105px, 13vw, 185px) clamp(90px, 11vw, 150px)",
      }}
    />
  );
}

function JubileeLockup() {
  return (
    <div className="relative h-18 w-65 overflow-hidden sm:h-23 sm:w-85 lg:h-29.5 lg:w-110">
      <img
        src={logoImg1}
        alt="The Apostolic Faith Mission Western Europe — 50th Anniversary, 1976–2026"
        className="pointer-events-none absolute left-1/2 top-1/2 w-[160%] max-w-none -translate-x-1/2 -translate-y-1/2"
        style={{ maxWidth: "none" }}
      />
    </div>
  );
}

function VideoPlayer() {
  const [playing, setPlaying] = React.useState(false);

  if (playing) {
    return (
      <div className="relative size-full overflow-hidden bg-black">
        <video
          src={videoSrcPlaceholder}
          controls
          autoPlay
          className="absolute inset-0 size-full object-cover"
          style={{ height: "100%" }}
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label="Play video"
      className="relative block size-full cursor-pointer overflow-hidden border-0 bg-black p-0"
    >
      <img
        alt=""
        className="absolute inset-0 size-full max-w-none object-cover"
        src={imgVideoPoster}
        style={{ height: "100%", maxWidth: "none" }}
      />
    </button>
  );
}

function StartedFeature() {
  return (
    <section className="relative isolate flex size-full items-center overflow-hidden bg-[#030711] px-5 py-16 sm:px-8 lg:px-12">
      <img
        src={imgImage13}
        alt=""
        className="absolute inset-0 -z-20 size-full max-w-none scale-105 object-cover"
        style={{ height: "100%", maxWidth: "none" }}
      />
      <div className="absolute inset-0 -z-10 bg-[#020711]/80" />

      <div className="mx-auto grid w-full max-w-274 items-center gap-10 lg:grid-cols-[400px_1fr] lg:gap-15.5">
        <div className="relative aspect-400/280 w-full overflow-hidden border-4 border-white sm:border-[5px]">
          <img
            src={imgImage13}
            alt="A woman and man speaking at an Apostolic Faith gathering"
            className="absolute inset-0 size-full max-w-none object-cover"
            style={{ height: "100%", maxWidth: "none" }}
          />
        </div>

        <div className="flex flex-col items-start text-left text-white">
          <h2 className={`${HEADER_FONT} text-[clamp(38px,5vw,52px)] leading-[1.05]`}>
            Where it all started
          </h2>
          <p className={`${BODY_COPY} mt-7 max-w-155 text-[17px] leading-[1.6] text-white/90 sm:text-[19px]`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
          </p>
          <a
            href="#timeline"
            onClick={(event) => {
              event.preventDefault();
              if (window.location.hash !== "#timeline") {
                window.history.pushState(
                  null,
                  "",
                  window.location.pathname + window.location.search + "#timeline",
                );
              }
              window.dispatchEvent(new Event("timeline:open"));
            }}
            className={`${BODY_COPY} mt-8 text-[17px] leading-none text-white underline decoration-1 underline-offset-4`}
          >
            Read Full Timeline
          </a>
        </div>
      </div>
    </section>
  );
}

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

  const fade = (show: boolean) => ({
    opacity: show ? labelsOpacity : 0,
    transition: "opacity 0.35s ease",
  });

  return (
    <>
      <div className="absolute flex items-center justify-center left-[487.71px] size-[465.353px] top-[611.94px]">
        <div className="-rotate-90 flex-none">
          <div className="relative size-[465.353px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 465.353 465.353">
              <circle cx="232.677" cy="232.677" fill="black" fillOpacity="0.48" r="232.273" stroke="#D9C7A8" strokeWidth="0.80661" />
            </svg>
          </div>
        </div>
      </div>

      <div className="absolute flex items-center justify-center left-97.75 size-164.75 top-128.75">
        <div className="-rotate-90 flex-none">
          <div className="relative size-164.75">
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

      <div
        className={`-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col ${HEADER_FONT} justify-center leading-0 left-[calc(50%-259.1px)] not-italic text-[#d9c7a8] text-[24px] text-center top-[736.26px] whitespace-nowrap`}
        style={fade(!!prev2)}
      >
        <p className={`${HEADER_FONT} leading-normal`}>{prev2?.year ?? ""}</p>
      </div>

      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[40.919px] items-center justify-center left-[calc(50%-168.92px)] top-[623.14px] w-[47.873px]"
        style={fade(!!prev1)}
      >
        <div className="flex-none rotate-30">
          <div className={`[word-break:break-word] flex flex-col ${HEADER_FONT} justify-center leading-0 not-italic relative text-[#d9c7a8] text-[24px] text-center whitespace-nowrap`}>
            <p className={`${HEADER_FONT} leading-normal`}>{prev1?.year ?? ""}</p>
          </div>
        </div>
      </div>

      <div className={`-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col ${HEADER_FONT} justify-center leading-0 left-[calc(50%+0.5px)] not-italic text-center text-white top-[571.24px] whitespace-nowrap`}
           style={{ fontSize: 56, fontWeight: 700, opacity: labelsOpacity, transition: "opacity 0.35s ease" }}>
        <p className={`${HEADER_FONT} leading-normal`}>{cur.year}</p>
      </div>

      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[42.155px] items-center justify-center left-[calc(50%+183.45px)] top-[639.49px] w-[49.584px]"
        style={fade(!!next1)}
      >
        <div className="flex-none rotate-[-30.51deg]">
          <div className={`[word-break:break-word] flex flex-col ${HEADER_FONT} justify-center leading-0 not-italic relative text-[#d9c7a8] text-[24px] text-center whitespace-nowrap`}>
            <p className={`${HEADER_FONT} leading-normal`}>{next1?.year ?? ""}</p>
          </div>
        </div>
      </div>

      <div
        className={`-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col ${HEADER_FONT} justify-center leading-0 left-[calc(50%+263.39px)] not-italic text-[#d9c7a8] text-[24px] text-center top-[742.52px] whitespace-nowrap`}
        style={fade(!!next2)}
      >
        <p className={`${HEADER_FONT} leading-normal`}>{next2?.year ?? ""}</p>
      </div>
    </>
  );
}

function MobileTimelineRing({
  activeYearIndex,
  labelsOpacity = 1,
}: {
  activeYearIndex: number;
  labelsOpacity?: number;
}) {
  const entryAt = (offset: number) => TIMELINE_DATA[activeYearIndex + offset];

  return (
    <svg
      aria-hidden="true"
      className="block h-full w-full overflow-visible"
      viewBox="0 0 404 250"
      preserveAspectRatio="xMidYMax meet"
    >
      <g fill="none" stroke="#D9C7A8">
        <path d="M 3 250 A 199 199 0 0 1 401 250" strokeOpacity="0.65" strokeWidth="0.8" />
        <path d="M 63 250 A 139 139 0 0 1 341 250" strokeOpacity="0.65" strokeWidth="0.8" />

        {Array.from({ length: 13 }, (_, index) => {
          const angle = Math.PI + (Math.PI * index) / 12;
          const outerRadius = 199;
          const tickLength = index === 6 ? 18 : 10;
          const x1 = 202 + (outerRadius - tickLength) * Math.cos(angle);
          const y1 = 250 + (outerRadius - tickLength) * Math.sin(angle);
          const x2 = 202 + outerRadius * Math.cos(angle);
          const y2 = 250 + outerRadius * Math.sin(angle);

          return (
            <line
              key={index}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={index === 6 ? "white" : "#D9C7A8"}
              strokeOpacity={index === 6 ? 1 : 0.45}
              strokeWidth={index === 6 ? 1.6 : 0.8}
            />
          );
        })}
      </g>

      <circle cx="202" cy="51" r="3" fill="white" />
      <circle cx="202" cy="51" r="8" fill="white" opacity="0.08" />

      <g
        fill="#D9C7A8"
        fontFamily="CRONDE, serif"
        fontSize="13"
        textAnchor="middle"
        style={{ opacity: labelsOpacity, transition: "opacity 0.35s ease" }}
      >
        <text x="55" y="179" transform="rotate(24 55 179)">{entryAt(-2)?.year ?? ""}</text>
        <text x="105" y="103" transform="rotate(35 105 103)">{entryAt(-1)?.year ?? ""}</text>
        <text x="299" y="103" transform="rotate(-35 299 103)">{entryAt(1)?.year ?? ""}</text>
        <text x="349" y="179" transform="rotate(-24 349 179)">{entryAt(2)?.year ?? ""}</text>
      </g>

      <text
        x="202"
        y="90"
        fill="white"
        fontFamily="CRONDE, serif"
        fontSize="29"
        fontWeight="700"
        textAnchor="middle"
        style={{ opacity: labelsOpacity, transition: "opacity 0.35s ease" }}
      >
        {TIMELINE_DATA[activeYearIndex].year}
      </text>
    </svg>
  );
}

function SVGGroups() {
  return (
    <div className="absolute inset-[-12.5%_14.58%] hidden md:block">
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

function GalleryPolaroid({
  img,
  className = "",
}: {
  img: string;
  className?: string;
}) {
  return (
    <div
      className={`bg-white p-2 pb-8 shadow-[0_5px_12px_rgba(25,36,65,0.14)] ${className}`}
    >
      <div className="aspect-[1.06/1] w-full overflow-hidden bg-[#ece8df]">
        <img alt="" className="size-full max-w-none object-cover" src={img} style={{ height: "100%", maxWidth: "none" }} />
      </div>
    </div>
  );
}

const WELCOME_H = 900;
const STARTED_H = 722;
const VIDEO_H   = 578;
export const PRE_H_TOTAL = WELCOME_H + STARTED_H + VIDEO_H;

export function PreTimelineSection() {
  return (
    <div className="bg-[#fcf9f2] relative w-full overflow-clip">
      <div className="flex flex-col lg:hidden">
        <section className="relative flex min-h-svh w-full items-center justify-center overflow-hidden bg-[#fcf9f2] px-5 py-16">
          <DiagonalGrid />
          <div className="relative z-10 flex w-full max-w-180 flex-col items-center text-center">
            <JubileeLockup />
            <h1 className={`${HEADER_FONT} mt-8 text-[clamp(48px,15vw,76px)] leading-[0.9] text-[#0f1421]`}>
              Praise God
              <br />
              With US!
            </h1>
            <p className={`${BODY_COPY} mt-8 max-w-155 text-[17px] leading-[1.65] text-[#0f1421] sm:text-[20px]`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </section>

        <div className="h-svh w-full">
          <StartedFeature />
        </div>

        <div className="relative h-[50svh] w-full overflow-hidden bg-black sm:aspect-767/307 sm:h-auto">
          <VideoPlayer />
        </div>
      </div>

      <div className="relative hidden h-auto w-full lg:block" style={{ height: PRE_H_TOTAL }}>
        <section
          className="absolute left-0 top-0 flex w-full items-center justify-center overflow-hidden bg-[#fcf9f2]"
          style={{ height: WELCOME_H }}
        >
          <DiagonalGrid />

          <div className="relative z-10 flex w-full max-w-250 flex-col items-center px-8 text-center">
            <JubileeLockup />
            <h1 className={`${HEADER_FONT} mt-12 text-[128px] leading-[0.86] text-[#0f1421]`}>
              Praise God
              <br />
              With US!
            </h1>
            <p className={`${BODY_COPY} mt-12 max-w-190 text-[24px] leading-[1.45] text-[#0f1421]`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </section>

        <div
          className="absolute left-0 h-180.5 w-full overflow-hidden bg-[#030711]"
          style={{ top: WELCOME_H }}
        >
          <StartedFeature />
        </div>

        <div
          className="absolute left-0 h-144.5 w-full overflow-hidden bg-black"
          style={{ top: WELCOME_H + STARTED_H }}
        >
          <VideoPlayer />
        </div>
      </div>
    </div>
  );
}

export function TimelineSection({
  activeYearIndex,
  transitionProgress = 0,
  showMobileRing = false,
}: {
  activeYearIndex: number;
  transitionProgress?: number;
  showMobileRing?: boolean;
}) {
  const safeIndex = Math.min(Math.max(activeYearIndex, 0), TIMELINE_DATA.length - 1);
  const entry = TIMELINE_DATA[safeIndex];
  const tp = Math.min(Math.max(Number.isFinite(transitionProgress) ? transitionProgress : 0, 0), 1);

  const norm = (lo: number, hi: number) => Math.min(Math.max((tp - lo) / (hi - lo), 0), 1);

  const labelsOpacity  = 1 - norm(0.00, 0.20);
  const contentOpacity = 1 - norm(0.00, 0.35);
  const dotsOpacity    = 1 - norm(0.00, 0.30);
  const framesOpacity  = 1 - norm(0.00, 0.35);

  const ringMotion  = norm(0.15, 0.85);
  const ringScale   = 1 - ringMotion * 0.86;
  const ringDriftY  = -ringMotion * 300;
  const ringOpacity = 1 - norm(0.65, 1.00);

  const bgT = norm(0.20, 1.00);
  const bgR = Math.round(15  + (252 - 15)  * bgT);
  const bgG = Math.round(20  + (249 - 20)  * bgT);
  const bgB = Math.round(33  + (242 - 33)  * bgT);

  const imgBgOpacity = 1 - norm(0.70, 1.00);
  const bg = `rgb(${bgR},${bgG},${bgB})`;

  return (
    <div className="relative size-full min-h-svh overflow-hidden" style={{ background: bg }}>
      <div
        className="absolute inset-0"
        style={{ transition: "opacity 1.2s cubic-bezier(0.25, 0.1, 0.25, 1)" }}
      >
        <img
          key={safeIndex}
          src={entry.bgImage}
          alt=""
          className="absolute inset-0 size-full max-w-none object-cover"
          style={{
            height: "100%",
            maxWidth: "none",
            opacity: imgBgOpacity * 0.78,
            transition: "opacity 1.2s cubic-bezier(0.25, 0.1, 0.25, 1)",
          }}
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,20,33,0.68)_0%,rgba(15,20,33,0.8)_100%)]"
          style={{ opacity: imgBgOpacity }}
        />
      </div>

      <div className={`relative flex size-full flex-col items-center px-5 py-12 sm:px-8 lg:hidden ${showMobileRing ? "justify-start pt-[clamp(110px,22svh,176px)]" : "justify-center"}`}>
        <div className="relative z-10 flex w-full max-w-170 flex-col items-center text-center" style={{ opacity: contentOpacity, transition: "opacity 0.25s ease" }}>
          {!showMobileRing && (
            <p
              className={`text-white mb-3 ${HEADER_FONT}`}
              style={{ fontSize: 44, opacity: labelsOpacity, transition: "opacity 0.35s ease" }}
            >
              {entry.year}
            </p>
          )}
          <h3 className={`${HEADER_FONT} mb-5 text-[clamp(34px,10vw,52px)] leading-[0.98] text-white`}>
            {entry.title}
          </h3>
          <p className={`${BODY_COPY} max-w-155 pt-10 text-[clamp(16px,4.7vw,21px)] leading-[1.55] text-white opacity-90`}>
            {entry.text}
          </p>
        </div>

        {showMobileRing && (
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[clamp(270px,38svh,330px)] overflow-hidden"
            style={{ opacity: Math.max(0, ringOpacity) }}
          >
            <MobileTimelineRing activeYearIndex={safeIndex} labelsOpacity={labelsOpacity} />
          </div>
        )}

        <div className={`${showMobileRing ? "absolute bottom-6" : "relative mt-8"} z-10`} style={{ opacity: dotsOpacity }}>
          <p className={`${BODY_COPY} text-[12px] text-[#D9C7A8] opacity-70 tracking-[0.14em] m-0`}>
            {String(activeYearIndex + 1).padStart(2, "0")} / {String(TIMELINE_DATA.length).padStart(2, "0")}
          </p>
        </div>
      </div>

      <div className="absolute inset-0 hidden lg:block">
        <div style={{ opacity: imgBgOpacity * 0.05 }}>
          <ImgBg />
        </div>

        <div className="pointer-events-none absolute bottom-0 left-1/2 h-195.5 w-360 origin-bottom -translate-x-1/2 scale-[0.72] xl:scale-[0.89] min-[1440px]:scale-100 min-[1600px]:scale-[1.12] min-[1920px]:scale-[1.33]">
          <div style={{
            position: "absolute",
            inset: 0,
            transform: `translateY(${ringDriftY}px) scale(${ringScale})`,
            transformOrigin: "50% 100%",
            opacity: Math.max(0, ringOpacity),
          }}>
            <TimelineRing activeYearIndex={safeIndex} labelsOpacity={labelsOpacity} />
          </div>
        </div>

        <div style={{ position: "absolute", inset: 0, opacity: framesOpacity, pointerEvents: "none" }}>
          <div className="absolute flex h-[153.332px] items-center justify-center left-9.25 top-73.25 w-[187.781px]">
            <div className="flex-none rotate-15"><SmallFrame img={imgImage3} /></div>
          </div>
          <div className="absolute flex h-[153.332px] items-center justify-center left-302.5 top-90.5 w-[187.781px]">
            <div className="-rotate-15 flex-none"><SmallFrame img={imgImage3} /></div>
          </div>
        </div>

        <div
          className="absolute left-1/2 top-[18%] flex w-[min(90vw,1000px)] -translate-x-1/2 flex-col justify-center text-center text-white"
          style={{ fontSize: "clamp(44px, 4.5vw, 72px)", opacity: contentOpacity, transition: "opacity 0.25s ease" }}
        >
          <h3
            className={`${HEADER_FONT} leading-normal`}
            style={{ fontSize: "clamp(44px, 4.5vw, 72px)" }}
          >
            {entry.title}
          </h3>
        </div>

        <div
          className="absolute left-1/2 top-[36%] flex w-[min(76vw,1080px)] -translate-x-1/2 flex-col justify-center text-center text-white"
          style={{ opacity: contentOpacity, transition: "opacity 0.16s ease" }}
        >
          <p className={`${BODY_COPY} text-[clamp(18px,1.55vw,24px)] leading-[1.45]`}>{entry.text}</p>
        </div>

        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
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
  const galleryPhotos = [imgImage9, imgImage17, imgImage16, imgImage15, imgImage14, imgImage18];

  return (
    <div className="bg-[#fcf9f2] relative w-full overflow-clip">
      <div className="relative flex min-h-190 flex-col items-center overflow-hidden px-1 py-10 text-center sm:min-h-245 sm:px-5 sm:py-16 lg:hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-190 w-190 -translate-x-1/2 -translate-y-1/2 rotate-[-10deg] opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(#192441 1px, transparent 1px), linear-gradient(90deg, #192441 1px, transparent 1px)",
            backgroundSize: "145px 145px",
          }}
        />

        <div className="relative z-10 size-26.5 overflow-hidden sm:size-32">
          <img
            alt="AFM Western Europe 50th Anniversary"
            className="absolute left-1/2 top-1/2 size-[190%] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain"
            src={img51}
          />
        </div>

        <h2 className={`${HEADER_FONT} relative z-10 mt-6 text-[35px] leading-[0.92] text-[#192441] sm:mt-7 sm:text-[44px] sm:leading-[0.98]`}>
          Years<br />{`Of God's Faithful Ministry`}
        </h2>

        <div className="relative z-10 mt-9 flex w-full items-center justify-center overflow-visible px-1 sm:hidden">
          {galleryPhotos.slice(0, 3).map((photo, index) => (
            <GalleryPolaroid
              key={photo}
              img={photo}
              className={`w-[38%] max-w-38.5 shrink-0 p-1.5 pb-5 ${index > 0 ? "ml-[-6%]" : ""} ${["-rotate-1", "rotate-[-13deg] z-10", "rotate-[7deg]"][index]}`}
            />
          ))}
        </div>

        <div className="relative z-10 mt-10 hidden w-full max-w-130 grid-cols-2 gap-x-3 gap-y-5 px-2 sm:grid sm:gap-x-6">
          {galleryPhotos.map((photo, index) => (
            <GalleryPolaroid
              key={photo}
              img={photo}
              className={`w-full ${["-rotate-3", "rotate-4", "rotate-2", "-rotate-2", "-rotate-4", "rotate-3"][index]}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => { window.location.hash = "#gallery"; }}
          className={`relative z-10 mt-10 flex w-42 items-center justify-center rounded-[2px] border-0 bg-[#192441] px-4 py-2.5 text-[14px] text-white sm:mt-12 sm:w-full sm:max-w-70 sm:p-3 sm:text-[16px] ${BODY_COPY}`}
        >
          View Full Gallery
        </button>
      </div>

      <div className="hidden lg:block relative w-360 max-w-full mx-auto h-215">
        <div className="absolute inset-0 overflow-hidden">
          <SVGGroups />
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-262.5 w-330 -translate-x-1/2 -translate-y-1/2 rotate-[-10deg] opacity-[0.1]"
            style={{
              backgroundImage:
                "linear-gradient(#192441 1px, transparent 1px), linear-gradient(90deg, #192441 1px, transparent 1px)",
              backgroundSize: "185px 150px",
            }}
          />

          <GalleryPolaroid img={imgImage9} className="absolute left-19 top-28 w-55.5" />
          <GalleryPolaroid img={imgImage17} className="absolute left-28 top-76.25 w-62.5 rotate-[-13deg]" />
          <GalleryPolaroid img={imgImage16} className="absolute left-29 top-142 w-55 rotate-[5deg]" />

          <GalleryPolaroid img={imgImage15} className="absolute right-18.75 top-19.5 w-61.25 rotate-14" />
          <GalleryPolaroid img={imgImage14} className="absolute right-23 top-82.5 w-55.5" />
          <GalleryPolaroid img={imgImage18} className="absolute right-21 top-137 w-62.5 rotate-20" />

          <div className="absolute left-1/2 top-26.5 size-45.5 -translate-x-1/2 overflow-hidden">
            <img
              alt="AFM Western Europe 50th Anniversary"
              className="absolute left-1/2 top-1/2 size-[190%] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain"
              src={img51}
            />
          </div>

          <h2 className={`${HEADER_FONT} absolute left-1/2 top-83.5 w-140 -translate-x-1/2 text-center text-[72px] leading-[0.96] text-[#192441]`}>
            Years<br />{`Of God's Faithful Ministry`}
          </h2>

          <button
            type="button"
            onClick={() => { window.location.hash = "#gallery"; }}
            className={`absolute left-1/2 top-153.75 flex h-11.5 w-62 -translate-x-1/2 items-center justify-center rounded-[2px] border-0 bg-[#192441] text-[16px] text-white ${BODY_COPY}`}
          >
            View Full Gallery
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Stories section ──────────────────────────────────────────────────────────

const STORIES = [
  {
    img: imgImage1,
    title: "A Church Planted in Amsterdam",
    text: "From a small gathering of six believers, a thriving congregation emerged that continues to shape the city today.",
    tag: "1971",
  },
  {
    img: imgImage8,
    title: "The European Leadership Summit",
    text: "In 1987, pastors from twelve nations gathered for the first time, forging bonds that would define the mission's next chapter.",
    tag: "1987",
  },
  {
    img: imgImage11,
    title: "50 Years of Youth Ministry",
    text: "Young people have always been at the heart of AFM Western Europe — the next generation carrying the torch of faithful witness.",
    tag: "2007",
  },
];
export const STORIES_MIN_H = 920;

export function StoriesSection({
  onHeightChange,
}: {
  onHeightChange?: (h: number) => void;
}) {
  const rootRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = rootRef.current;
    if (!el || !onHeightChange) return;

    const report = () => onHeightChange(el.scrollHeight);
    report();

    const ro = new ResizeObserver(report);
    ro.observe(el);
    return () => ro.disconnect();
  }, [onHeightChange]);

  return (
    <section className="w-full bg-white p-3 sm:p-5 lg:p-6">
      <div
        className="relative flex w-full flex-col items-center bg-[#fcf9f2] px-5 py-16 sm:px-8 sm:py-20 lg:min-h-230 lg:px-14 lg:py-20"
        style={{ minHeight: STORIES_MIN_H }}
      >
        <header className="mx-auto max-w-190 text-center">
          <p className={`${BODY_COPY} text-[10px] uppercase tracking-[0.28em] text-[#192441]/45 sm:text-[12px]`}>
            Stories of Ministry
          </p>
          <h2 className={`${HEADER_FONT} mt-5 text-[clamp(42px,5vw,66px)] leading-[1.02] text-[#192441]`}>
            Voices of the Journey
          </h2>
          <p className={`${BODY_COPY} mt-7 text-[16px] leading-[1.6] text-[#192441]/55 sm:text-[18px]`}>
            Across five decades, the Gospel has transformed lives throughout Western Europe.
          </p>
        </header>

        <div className="mx-auto mt-14 grid w-full max-w-337 grid-cols-1 gap-10 sm:mt-20 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {STORIES.map((story) => (
            <article key={story.title} className="flex min-w-0 flex-col">
              <div className="relative aspect-[1.72/1] w-full overflow-hidden rounded-[3px] bg-[#192441]/5">
                <img
                  src={story.img}
                  alt=""
                  className="absolute inset-0 size-full max-w-none object-cover"
                  style={{ height: "100%", maxWidth: "none" }}
                />
              </div>
              <p className={`${BODY_COPY} mt-5 text-[11px] leading-none tracking-[0.14em] text-[#192441]/45 sm:text-[12px]`}>
                {story.tag}
              </p>
              <h3 className={`${HEADER_FONT} mt-3 text-[24px] leading-[1.1] text-[#192441] sm:text-[26px]`}>
                {story.title}
              </h3>
              <p className={`${BODY_COPY} mt-4 text-[16px] leading-[1.55] text-[#192441]/60 sm:text-[18px]`}>
                {story.text}
              </p>
            </article>
          ))}
        </div>

        <button
          type="button"
          onClick={() => { window.location.hash = "#watch"; }}
          className={`${BODY_COPY} mt-16 rounded-full border-0 bg-[#192441] px-10 py-4 text-[14px] leading-none tracking-wide text-white sm:mt-20`}
        >
          View All Stories
        </button>
      </div>
    </section>
  );
}
