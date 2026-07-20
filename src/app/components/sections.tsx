/// <reference path="../../types/images.d.ts" />

import React from "react";
import { Volume2, VolumeX } from "lucide-react";
import anniversaryThemeSrc from "../../assets/anniversary-theme.mp3";
import fireworksSoundSrc from "../../assets/fireworks.mp3";
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
  { year: 2000, title: "A New Pastor Installed",       text: "Rev Victor Okusanya retires after 24 years; Brother Isaac Adigun is installed as UK pastor, 30 April 2000." },
  { year: 2000, title: "The Welfare Ministry Founded", text: "The Welfare Ministry is founded under Sister Stella Adigun." },
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
      className="absolute bottom-[max(1rem,env(safe-area-inset-bottom))] left-1/2 flex w-[92vw] max-w-213 -translate-x-1/2 items-center justify-center gap-[2vw] sm:bottom-[clamp(1.5rem,4svh,3rem)] sm:gap-5 md:top-160"
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

function ScrollDownControl({
  className = "",
  onClick,
  opacity,
}: {
  className?: string;
  onClick?: () => void;
  opacity: number;
}) {
  return (
    <button
      aria-label="Scroll down"
      className={`flex flex-col items-center gap-2 border-0 bg-transparent p-2 text-white transition-opacity duration-300 ${className}`}
      onClick={onClick}
      style={{ opacity, pointerEvents: opacity > 0.35 ? "auto" : "none" }}
      type="button"
    >
      <svg aria-hidden="true" fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.99967 4.1665L10.4413 3.72484C10.3242 3.6078 10.1653 3.54205 9.99967 3.54205C9.83405 3.54205 9.6752 3.6078 9.55801 3.72484L9.99967 4.1665ZM9.99967 10.8332L9.55801 11.2748C9.6752 11.3919 9.83405 11.4576 9.99967 11.4576C10.1653 11.4576 10.3242 11.3919 10.4413 11.2748L9.99967 10.8332ZM7.89134 5.3915C7.78094 5.50998 7.72084 5.66669 7.72369 5.82861C7.72655 5.99052 7.79215 6.14501 7.90666 6.25952C8.02117 6.37403 8.17565 6.43963 8.33757 6.44248C8.49949 6.44534 8.6562 6.38524 8.77467 6.27484L7.89134 5.3915ZM11.2247 6.27484C11.2819 6.33624 11.3509 6.38549 11.4276 6.41965C11.5042 6.45381 11.587 6.47218 11.6709 6.47366C11.7548 6.47514 11.8382 6.45971 11.916 6.42827C11.9938 6.39684 12.0645 6.35005 12.1239 6.2907C12.1832 6.23135 12.23 6.16066 12.2614 6.08284C12.2929 6.00501 12.3083 5.92165 12.3068 5.83774C12.3054 5.75382 12.287 5.67105 12.2528 5.59439C12.2187 5.51772 12.1694 5.44872 12.108 5.3915L11.2247 6.27484ZM8.77467 8.72484C8.71746 8.66343 8.64846 8.61418 8.57179 8.58002C8.49512 8.54586 8.41236 8.52749 8.32844 8.52601C8.24452 8.52453 8.16117 8.53997 8.08334 8.5714C8.00552 8.60284 7.93482 8.64962 7.87548 8.70897C7.81613 8.76832 7.76934 8.83902 7.73791 8.91684C7.70647 8.99466 7.69103 9.07802 7.69251 9.16194C7.69399 9.24586 7.71236 9.32862 7.74652 9.40529C7.78068 9.48195 7.82994 9.55095 7.89134 9.60817L8.77467 8.72484ZM12.108 9.60817C12.1694 9.55095 12.2187 9.48195 12.2528 9.40529C12.287 9.32862 12.3054 9.24586 12.3068 9.16194C12.3083 9.07802 12.2929 8.99466 12.2614 8.91684C12.23 8.83902 12.1832 8.76832 12.1239 8.70897C12.0645 8.64962 11.9938 8.60284 11.916 8.5714C11.8382 8.53997 11.7548 8.52453 11.6709 8.52601C11.587 8.52749 11.5042 8.54586 11.4276 8.58002C11.3509 8.61418 11.2819 8.66343 11.2247 8.72484L12.108 9.60817ZM2.70801 8.33317V11.6665H3.95801V8.33317H2.70801ZM17.2913 11.6665V8.33317H16.0413V11.6665H17.2913ZM9.37467 4.1665V10.8332H10.6247V4.1665H9.37467ZM9.55801 3.72484L7.89134 5.3915L8.77467 6.27484L10.4413 4.60817L9.55801 3.72484ZM9.55801 4.60817L11.2247 6.27484L12.108 5.3915L10.4413 3.72484L9.55801 4.60817ZM10.4413 10.3915L8.77467 8.72484L7.89134 9.60817L9.55801 11.2748L10.4413 10.3915ZM10.4413 11.2748L12.108 9.60817L11.2247 8.72484L9.55801 10.3915L10.4413 11.2748ZM17.2913 8.33317C17.2913 6.3993 16.5231 4.54464 15.1557 3.17718C13.7882 1.80973 11.9335 1.0415 9.99967 1.0415V2.2915C11.602 2.2915 13.1387 2.92804 14.2718 4.06107C15.4048 5.1941 16.0413 6.73082 16.0413 8.33317H17.2913ZM9.99967 18.9582C10.9572 18.9582 11.9054 18.7696 12.7901 18.4031C13.6747 18.0367 14.4786 17.4996 15.1557 16.8225C15.8328 16.1454 16.3699 15.3416 16.7363 14.4569C17.1027 13.5722 17.2913 12.6241 17.2913 11.6665H16.0413C16.0413 13.2689 15.4048 14.8056 14.2718 15.9386C13.1387 17.0716 11.602 17.7082 9.99967 17.7082V18.9582ZM2.70801 11.6665C2.70801 13.6004 3.47623 15.455 4.84369 16.8225C6.21114 18.1899 8.0658 18.9582 9.99967 18.9582V17.7082C8.39732 17.7082 6.8606 17.0716 5.72757 15.9386C4.59454 14.8056 3.95801 13.2689 3.95801 11.6665H2.70801ZM3.95801 8.33317C3.95801 6.73082 4.59454 5.1941 5.72757 4.06107C6.8606 2.92804 8.39732 2.2915 9.99967 2.2915V1.0415C8.0658 1.0415 6.21114 1.80973 4.84369 3.17718C3.47623 4.54464 2.70801 6.3993 2.70801 8.33317H3.95801Z" fill="white" />
      </svg>
      <span className={`${BODY_COPY} text-[12px] font-normal leading-none`}>scroll down</span>
    </button>
  );
}

export function Section1({
  scrollProgress = 0,
  staticReveal = false,
  anniversaryInView = true,
  onScrollDown,
}: {
  scrollProgress?: number;
  staticReveal?: boolean;
  anniversaryInView?: boolean;
  onScrollDown?: (stage: "bible" | "anniversary") => void;
}) {
  const clamp = (v: number, lo: number, hi: number) =>
    Math.min(Math.max(Number.isFinite(v) ? v : lo, lo), hi);

  const sp = staticReveal ? 1 : (Number.isFinite(scrollProgress) ? scrollProgress : 0);

  const textHide    = clamp(sp / 0.65, 0, 1);
  const textOpacity = 1 - textHide;
  const textDriftY  = -textHide * 100;

  const logoOpacity = clamp((sp - 0.25) / 0.55, 0, 1);
  const openingAudioActive = anniversaryInView;
  const fireworksActive = logoOpacity > 0.4 && anniversaryInView;
  const [soundEnabled, setSoundEnabled] = React.useState(true);
  const themeAudioRef = React.useRef<HTMLAudioElement | null>(null);
  const themeAudioUnlockedRef = React.useRef(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);
  const audioUnlockedRef = React.useRef(false);

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

  const getThemeAudio = React.useCallback(() => {
    if (!themeAudioRef.current) {
      const audio = new Audio(anniversaryThemeSrc);
      audio.loop = true;
      audio.preload = "auto";
      audio.volume = 0.55;
      themeAudioRef.current = audio;
    }
    return themeAudioRef.current;
  }, []);

  const startThemeAudio = React.useCallback(async () => {
    const audio = getThemeAudio();
    try {
      await audio.play();
      themeAudioUnlockedRef.current = true;
    } catch {
      // Browsers may block sound until the user's first interaction.
    }
  }, [getThemeAudio]);

  const getFireworksAudio = React.useCallback(() => {
    if (!audioRef.current) {
      const audio = new Audio(fireworksSoundSrc);
      audio.loop = true;
      audio.preload = "auto";
      audio.volume = 0.2;
      audioRef.current = audio;
    }
    return audioRef.current;
  }, []);

  const startFireworksAudio = React.useCallback(async () => {
    const audio = getFireworksAudio();
    audio.muted = false;
    try {
      await audio.play();
      audioUnlockedRef.current = true;
    } catch {
      // Browsers may block sound until the user's first interaction.
    }
  }, [getFireworksAudio]);

  React.useEffect(() => {
    const audio = getThemeAudio();
    if (openingAudioActive) {
      void startThemeAudio();
      return;
    }

    audio.pause();
    audio.currentTime = 0;
  }, [getThemeAudio, openingAudioActive, startThemeAudio]);

  React.useEffect(() => {
    if (!openingAudioActive || themeAudioUnlockedRef.current) return;

    const unlockThemeAudio = () => {
      if (!themeAudioUnlockedRef.current) void startThemeAudio();
    };

    window.addEventListener("pointerdown", unlockThemeAudio);
    window.addEventListener("keydown", unlockThemeAudio);
    window.addEventListener("touchstart", unlockThemeAudio, { passive: true });
    window.addEventListener("wheel", unlockThemeAudio, { passive: true });

    return () => {
      window.removeEventListener("pointerdown", unlockThemeAudio);
      window.removeEventListener("keydown", unlockThemeAudio);
      window.removeEventListener("touchstart", unlockThemeAudio);
      window.removeEventListener("wheel", unlockThemeAudio);
    };
  }, [openingAudioActive, startThemeAudio]);

  React.useEffect(() => {
    const audio = getFireworksAudio();
    if (soundEnabled && fireworksActive) {
      void startFireworksAudio();
      return;
    }

    audio.pause();
    if (!fireworksActive) audio.currentTime = 0;
  }, [fireworksActive, getFireworksAudio, soundEnabled, startFireworksAudio]);

  React.useEffect(() => {
    if (!soundEnabled || audioUnlockedRef.current) return;

    const unlockAudio = () => {
      if (audioUnlockedRef.current) return;
      const audio = getFireworksAudio();

      if (fireworksActive) {
        void startFireworksAudio();
        return;
      }

      const previousVolume = audio.volume;
      audio.muted = false;
      audio.volume = 0;
      void audio.play().then(() => {
        audio.pause();
        audio.currentTime = 0;
        audio.volume = previousVolume;
        audioUnlockedRef.current = true;
      }).catch(() => {
        audio.volume = previousVolume;
      });
    };

    window.addEventListener("pointerdown", unlockAudio);
    window.addEventListener("keydown", unlockAudio);
    window.addEventListener("touchstart", unlockAudio, { passive: true });
    window.addEventListener("wheel", unlockAudio, { passive: true });

    return () => {
      window.removeEventListener("pointerdown", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
      window.removeEventListener("wheel", unlockAudio);
    };
  }, [fireworksActive, getFireworksAudio, soundEnabled, startFireworksAudio]);

  React.useEffect(() => {
    return () => {
      const themeAudio = themeAudioRef.current;
      if (themeAudio) {
        themeAudio.pause();
        themeAudio.removeAttribute("src");
        themeAudio.load();
        themeAudioRef.current = null;
      }

      const audio = audioRef.current;
      if (!audio) return;
      audio.pause();
      audio.removeAttribute("src");
      audio.load();
      audioRef.current = null;
    };
  }, []);

  const toggleFireworksSound = async () => {
    const audio = getFireworksAudio();
    if (soundEnabled) {
      setSoundEnabled(false);
      audio.pause();
      return;
    }

    setSoundEnabled(true);
    if (fireworksActive) await startFireworksAudio();
  };

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
        <Fireworks active={fireworksActive} height={dims.height} width={dims.width} />
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
              fontSize: dims.width < 768 ? "clamp(21px, 5.5vw, 25px)" : "clamp(16px, 4.5vw, 48px)",
              lineHeight: dims.width < 768 ? "1.45" : "clamp(24px, 6vw, 60px)",
            }}
          >
            {`"One generation shall praise thy works to another, and shall declare thy mighty acts."`}
          </p>
          <p
            className={`${BODY_COPY} text-white`}
            style={{
              fontSize: dims.width < 768 ? "clamp(15px, 3.8vw, 17px)" : "clamp(13px, 3vw, 48px)",
              lineHeight: dims.width < 768 ? "1.4" : "clamp(20px, 4.5vw, 60px)",
            }}
          >
            — Psalm 145:4
          </p>
        </div>
        <PictureFrame />
      </div>

      <ScrollDownControl
        className="absolute left-1/2 top-[60%] z-20 -translate-x-1/2"
        onClick={() => onScrollDown?.("anniversary")}
        opacity={textOpacity}
      />

      <ScrollDownControl
        className="absolute bottom-[max(36px,8svh)] left-1/2 z-20 -translate-x-1/2"
        onClick={() => onScrollDown?.("anniversary")}
        opacity={logoOpacity}
      />

      {logoOpacity > 0.35 && (
        <button
          aria-label={soundEnabled ? "Mute fireworks sound" : "Play fireworks sound"}
          aria-pressed={soundEnabled}
          className="absolute right-5 top-[max(20px,env(safe-area-inset-top))] z-30 flex size-11 items-center justify-center rounded-full border border-white/55 bg-[#0f1421]/55 text-white backdrop-blur-sm transition-colors hover:bg-white/15 sm:right-8 sm:top-8"
          onClick={() => void toggleFireworksSound()}
          style={{ opacity: logoOpacity }}
          title={soundEnabled ? "Mute fireworks sound" : "Play fireworks sound"}
          type="button"
        >
          {soundEnabled ? <Volume2 aria-hidden="true" size={22} /> : <VolumeX aria-hidden="true" size={22} />}
        </button>
      )}
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
          <p className={`${BODY_COPY} mt-7 max-w-155 text-white/90`}>
           On Sunday, 11 April 1976, Brother Victor Okusanya — a young music student newly arrived from Nigeria
— gathered three believers in a Brixton lounge for the very first Apostolic Faith Sunday school lesson in
the UK. From that single meeting, God has built a family of churches now spanning Scotland, England,
Wales, Ireland, and seven countries across mainland Europe. Fifty years on, we remain committed to
the same three words that have guided us from the start: Pray, Preach, Publish.
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
             Fifty Years of 
              <br />
              God’s Faithfulness
            </h1>
            <p className={`${BODY_COPY} mt-8 max-w-155 text-[#0f1421]`}>
             We are the Apostolic Faith Church — a Bible-believing, Spirit-filled family of churches across the UK and Western 
Europe, built on prayer, holiness, and the Gospel of Jesus Christ. In 2026 we celebrate fifty years since our first UK 
meeting in a Brixton lounge in 1976. Earnestly contend for the faith.
            </p>
          </div>
        </section>

        <div className="min-h-svh w-full">
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
              Fifty Years of 
              <br />
              God’s Faithfulness
            </h1>
            <p className={`${BODY_COPY} mt-12 max-w-190 text-[#0f1421]`}>
             We are the Apostolic Faith Church — a Bible-believing, Spirit-filled family of churches across the UK and Western 
Europe, built on prayer, holiness, and the Gospel of Jesus Christ. In 2026 we celebrate fifty years since our first UK 
meeting in a Brixton lounge in 1976. Earnestly contend for the faith.
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
  const mobileRingScale = typeof window === "undefined"
    ? 0.55
    : Math.min(Math.max(window.innerWidth / 720, 0.48), 1);

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
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[clamp(265px,38svh,340px)] overflow-hidden"
            style={{ opacity: Math.max(0, ringOpacity) }}
          >
            <div
              className="absolute bottom-0 left-1/2 h-195.5 w-360 origin-bottom"
              style={{
                transform: `translateX(-50%) translateY(${ringDriftY}px) scale(${mobileRingScale * ringScale})`,
                transformOrigin: "50% 100%",
                transition: "transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            >
              <TimelineRing activeYearIndex={safeIndex} labelsOpacity={labelsOpacity} />
            </div>
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
    title: "A Lounge in Brixton",
    text: "Three believers gathered for the very first Apostolic Faith Sunday school lesson in the UK — the small beginning from which this entire fifty-year story grew.",
    tag: "1976",
  },
  {
    img: imgImage8,
    title: "A Testimony of God's Faithfulness",
    text: "When a Birmingham family's three-year-old daughter faced a life-threatening medical emergency, the whole church stood in prayer — and watched God do what doctors could not explain. (Full story on the Watch & Listen page.)",
    tag: "2022",
  },
  {
    img: imgImage11,
    title: "The David Academy",
    text: "Fifty years after Rev Victor Okusanya first gave his music to the church alone, Birmingham's David Academy carries that same conviction to a new generation of musicians, aged four to forty.",
    tag: "2026",
  },
];
export const STORIES_MIN_H = 920;

export function StoriesSection() {
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
          <p className={`${BODY_COPY} mt-7 text-[#192441]/55`}>
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
              <p className={`${BODY_COPY} mt-4 text-[#192441]/60`}>
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
