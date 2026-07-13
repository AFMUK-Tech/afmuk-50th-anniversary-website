import svgPaths from "./svg-ryk8ue9wk8";
import MobileTimeline from "../../app/components/MobileTimeline"; // adjust path to match your folder structure
/* ---------------------------------------------------------------
 * IMAGE IMPORTS
 * ---------------------------------------------------------------
 * Existing assets (from your original file) — keep these paths as-is
 * if the files still live in the same folder.
 */
import img1998 from "./5a015c837cc63a1e3afec59a04ef46d449dad5cf.png";
import imgImage13 from "./e81c2816bfc1af01bf28989def6b833cd0126703.png";
import imgImage12 from "./00906276d94a619afd9053d491e72ee53b2c84f7.png";
import imgContainer from "./00d5e033bbebac30ecfdda76a8b34cee926f16de.png";
import imgContainer1 from "./e616f666c01d8e532adf17336a5b7576e91684e5.png";
import imgContainer2 from "./6071875ce23155069c81f3bdc40cd667fe0ec200.png";
import imgImage3 from "./00d5e033bbebac30ecfdda76a8b34cee926f16de.png";
import imgImage9 from "./689a77beb788ca8a3f1ba0fab8bd0ba4ac88fa5a.png";
import imgImage16 from "./d060be9ce61288ad16074db37bfbb70d4d8416b7.png";
import imgImage14 from "./e3a2e759660a8d0ba4abbbb7455d7244230b5fa9.png";
import imgImage18 from "./3b8e188b8820680ef46d22804ac760d971cfe95a.png";
import imgImage17 from "./f2e30c0a264a39aae9ecc96a919006cbd7df2106.png";
import imgImage15 from "./934c91a8c59703a23c154d5e409ad03b2b6d72cb.png";
import img51 from "./8873fd3b316d2dfee9ed04e7d802995942646918.png";
import img91 from "./968c2920f880959ab3393716584f0e350964c423.png";
import imgImage from "./9ec56a815db13e6f5f4c4f51dc8c89bded734cf2.png";

/**
 * NEW ASSETS — these are the pieces the mobile screenshot shows that
 * weren't in the previous version of the file: the black-and-white
 * photo-collage strip on the very first screen, and the gold
 * "50th Anniversary" badge/seal on the second screen.
 *
 * Swap these paths for your real exported files (same names/format as
 * the rest of the figma export, e.g. "./<hash>.png").
 */
import imgPhotoStrip1 from "./photo-strip-1.png";
import imgPhotoStrip2 from "./photo-strip-2.png";
import imgPhotoStrip3 from "./photo-strip-3.png";
import imgAnniversaryBadge from "./anniversary-badge.png";

/* ---------------------------------- Nav ---------------------------------- */

interface NavLinkProps {
  children: React.ReactNode;
}

function NavLink({ children }: NavLinkProps) {
  return (
    <a
      href="#"
      className="font-['Inter:Regular',sans-serif] font-normal text-[#38362d] text-[14px] lg:text-[15.778px] tracking-[-0.2367px] whitespace-nowrap hover:text-[#192441] transition-colors"
    >
      {children}
    </a>
  );
}

function ChevronDown() {
  return (
    <svg className="size-[16px] lg:size-[24px]" fill="none" viewBox="0 0 24 24">
      <path
        d="M15 6L9 12L15 18"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        transform="rotate(-90 12 12)"
      />
    </svg>
  );
}

function NavBar() {
  return (
    <div className="sticky top-0 z-50 bg-white w-full">
      <div className="mx-auto flex h-[63px] max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-[18.933px]">
        <a href="#" className="relative h-[36px] w-[70px] shrink-0 overflow-hidden sm:h-[39px] sm:w-[90px]">
          <img alt="Logo" className="absolute left-[-15%] top-[-40%] h-[190%] w-[190%] max-w-none object-cover" src={imgImage} />
        </a>

        <div className="hidden items-center gap-6 lg:flex lg:gap-[25.244px]">
          <NavLink>Founder</NavLink>
          <div className="flex items-center gap-2">
            <NavLink>Branches</NavLink>
            <ChevronDown />
          </div>
          <div className="flex items-center gap-2">
            <NavLink>Departement</NavLink>
            <ChevronDown />
          </div>
          <NavLink>Timeline</NavLink>
          <NavLink>Shop</NavLink>
        </div>

        <a href="#" className="shrink-0 rounded-full bg-[#192441] px-4 py-2 text-[10px] tracking-[0.05px] text-white sm:text-[10.729px] lg:px-[18.933px]">
          AFM UK
        </a>
      </div>

      <div className="flex items-center gap-5 overflow-x-auto px-4 pb-3 lg:hidden">
        <NavLink>Founder</NavLink>
        <NavLink>Branches</NavLink>
        <NavLink>Departement</NavLink>
        <NavLink>Timeline</NavLink>
        <NavLink>Shop</NavLink>
      </div>
    </div>
  );
}

/* ------------------------------- Watermark -------------------------------- */

interface VectorWatermarkProps {
  className?: string;
}

function VectorWatermark({ className = "" }: VectorWatermarkProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 flex items-center justify-center opacity-20 ${className}`}>
      <svg className="h-[140%] w-[140%] max-w-none sm:h-full sm:w-full" fill="none" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1020 1020">
        <g opacity={1}>
          <path d={svgPaths.p1560df80} fill="#949494" />
          <path d={svgPaths.p3970d30} fill="#949494" />
          <path d={svgPaths.pe9985f0} fill="#949494" />
          <path d={svgPaths.p3a584970} fill="#949494" />
          <path d={svgPaths.p618ec00} fill="#949494" />
          <path d={svgPaths.p205d2500} fill="#949494" />
          <path d={svgPaths.p15a41e00} fill="#949494" />
          <path d={svgPaths.p31c04900} fill="#949494" />
          <path d={svgPaths.p3dba9d00} fill="#949494" />
          <path d={svgPaths.p1f23f680} fill="#949494" />
          <path d={svgPaths.p3d550f00} fill="#949494" />
          <path d={svgPaths.p21ab5e00} fill="#949494" />
        </g>
      </svg>
    </div>
  );
}

/* --------------------------------- Eyebrow --------------------------------- */

function JubileeEyebrow() {
  return (
    <div className="flex flex-col items-center gap-1 text-center">
      <p className="font-['CRONDE:Regular',sans-serif] text-[16px] leading-none text-[#d9c7a8] sm:text-[15px] lg:text-[15px]">Golden</p>
      <p className="font-['CRONDE:Regular',sans-serif] text-[16px] leading-none text-white sm:text-[15px] lg:text-[15px]">Jubilee</p>
      <p className="mt-5 max-w-[94vw] font-['Futura_PT:Book',sans-serif] text-[20px] leading-[1.5] text-white sm:max-w-[500px] sm:text-[22px] lg:max-w-[596px] lg:text-[24px]">
        "One generation shall praise thy works to another, and shall declare thy mighty acts."
        <br />
        <br />
        — Psalm 145:4
      </p>
    </div>
  );
}

/* ============================================================
 * SCREEN 1 — Quote hero with B&W photo-collage strip
 * ============================================================ */

function QuoteHero() {
  const photos: string[] = [imgPhotoStrip1, imgPhotoStrip2, imgPhotoStrip3];

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-[#0f1421] px-6 py-20 text-center sm:py-28">
      <div className="relative z-10 flex w-full max-w-[560px] flex-col items-center gap-10 sm:gap-14">
        <p className="font-['Futura_PT:Book',sans-serif] text-[56px] italic leading-[1.5] text-white sm:text-[28px] lg:text-[32px]">
          "One generation shall praise thy works to another, and shall declare thy mighty acts."
        </p>
        <p className="font-['Futura_PT:Book',sans-serif] text-[16px] tracking-[1px] text-[#d9c7a8] sm:text-[16px]">
          — Psalm 145:4
        </p>

        {/* Collage strip of three overlapping/rotated black-and-white photos */}
        <div className="relative mt-4 flex h-[70px] w-full max-w-[280px] items-center justify-center sm:h-[90px] sm:max-w-[360px]">
          <div className="absolute left-[0%] h-[64px] w-[90px] -rotate-6 overflow-hidden rounded-[2px] shadow-lg sm:h-[80px] sm:w-[110px]">
            <img alt="" className="h-full w-full object-cover grayscale" src={photos[0]} />
          </div>
          <div className="absolute z-10 h-[64px] w-[90px] overflow-hidden rounded-[2px] shadow-lg sm:h-[80px] sm:w-[110px]">
            <img alt="" className="h-full w-full object-cover grayscale" src={photos[1]} />
          </div>
          <div className="absolute right-[0%] h-[64px] w-[90px] rotate-6 overflow-hidden rounded-[2px] shadow-lg sm:h-[80px] sm:w-[110px]">
            <img alt="" className="h-full w-full object-cover grayscale" src={photos[2]} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
 * SCREEN 2 — Anniversary badge splash
 * ============================================================ */

function AnniversarySplash() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-[#0f1421] px-6 py-20 text-center sm:py-28">
      <div className="flex w-full max-w-[420px] flex-col items-center gap-6">
        <img
          alt="AFM Western Europe 50th Anniversary, 1976 to 2026"
          className="h-auto w-full max-w-[240px] object-contain sm:max-w-[300px] lg:max-w-[340px]"
          src={imgAnniversaryBadge}
        />
      </div>
    </div>
  );
}

/* ============================================================
 * SCREEN 3 — "Praise God With Us" hero
 * ============================================================ */

function Hero() {
  return (
    <div className="relative w-full overflow-hidden bg-[#fcf9f2] py-16 sm:py-20 lg:py-28" data-name="Hero">
      <VectorWatermark />
      <div className="relative mx-auto flex w-full max-w-[900px] flex-col items-center gap-6 px-4 text-center sm:gap-8 sm:px-8 lg:gap-[34px]">
        <div className="relative h-[60px] w-[190px] sm:h-[85px] sm:w-[270px] lg:h-[109px] lg:w-[337px]">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute left-[-22.15%] top-[-172.98%] h-[443.28%] w-[143.62%] max-w-none" src={img1998} />
          </div>
        </div>

        <h1 className="font-['CRONDE:Regular',sans-serif] text-[#0f1421] text-[42px] leading-tight sm:text-[64px] lg:text-[96px]">
          Praise God With US!
        </h1>
        <p className="max-w-[601px] font-['Futura_PT:Book',sans-serif] text-[16px] text-[#0f1421] sm:text-[20px] lg:text-[24px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
}

/* ============================================================
 * SCREEN 4 — "Where it all started" + video
 * ============================================================ */

function Intro() {
  return (
    <div className="relative w-full overflow-hidden bg-[#0f1421] py-16 sm:py-20 lg:py-28" data-name="intro">
      <div className="absolute inset-0">
        <img alt="" className="h-full w-full object-cover" src={imgImage13} />
        <div className="absolute inset-0 bg-[#172037] mix-blend-multiply" />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1096px] flex-col items-center gap-8 px-4 sm:px-8 lg:flex-row lg:items-center lg:gap-[62px]">
        <div className="w-full max-w-[400px] shrink-0 overflow-hidden border-[4.948px] border-white sm:max-w-[450px] lg:w-[400px]">
          <div className="relative aspect-[399/281] w-full overflow-hidden">
            <img alt="" className="absolute -left-[40%] -top-[45%] w-[190%] max-w-none object-cover" src={imgImage12} />
          </div>
        </div>

        <div className="flex w-full flex-col items-start gap-4 text-white sm:gap-6 lg:max-w-[601px] lg:gap-[34px]">
          <h2 className="font-['CRONDE:Regular',sans-serif] text-[30px] leading-tight sm:text-[38px] lg:text-[48px]">
            Where it all started
          </h2>
          <p className="font-['Futura_PT:Book',sans-serif] text-[15px] leading-relaxed sm:text-[18px] lg:text-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>
          <p className="font-['Futura_PT:Book',sans-serif] text-[15px] underline sm:text-[18px] lg:text-[24px]">
            Read Full Timeline
          </p>
        </div>
      </div>
    </div>
  );
}

function VideoBanner() {
  return (
    <div className="relative aspect-video w-full overflow-hidden bg-black sm:aspect-[21/9]">
      <img alt="" className="h-full w-full object-cover" src={imgImage12} />
      <button
        type="button"
        aria-label="Play video"
        className="absolute left-1/2 top-1/2 flex size-[80px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/50 transition hover:bg-white/70 sm:size-[120px] lg:size-[160px]"
      >
        <svg className="h-[30%] w-[30%] fill-[#1F2349] opacity-70" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>
    </div>
  );
}

/* ============================================================
 * SCREEN 5 — "Voices of the Journey" story cards
 * ============================================================ */

interface StoryCardProps {
  img: string;
  year: string;
  title: string;
  body: string;
  imgClass?: string;
}

function StoryCard({ img, year, title, body, imgClass = "" }: StoryCardProps) {
  return (
    <div className="flex w-full max-w-[380px] flex-col items-start sm:max-w-none">
      <div className="relative aspect-[292/170] w-full overflow-hidden rounded-[3px]">
        <img alt="" className={`absolute inset-0 h-full w-full object-cover ${imgClass}`} src={img} />
      </div>
      <p className="mt-4 font-['Futura_PT:Book',sans-serif] text-[10px] uppercase tracking-[1.3px] text-[#192441] opacity-45">
        {year}
      </p>
      <h3 className="mt-2 font-['CRONDE:Regular',sans-serif] text-[17px] text-[#192441] sm:text-[18px]">{title}</h3>
      <p className="mt-2 font-['Futura_PT:Book',sans-serif] text-[14px] leading-relaxed text-[#192441] opacity-60">{body}</p>
    </div>
  );
}

function StorySection() {
  return (
    <div className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center gap-10 px-4 sm:gap-14 sm:px-8 lg:gap-[72px]">
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="font-['Futura_PT:Book',sans-serif] text-[9px] uppercase tracking-[2px] text-[#192441] opacity-45">
            Stories of Ministry
          </p>
          <h2 className="font-['CRONDE:Regular',sans-serif] text-[30px] text-[#192441] sm:text-[38px] lg:text-[45.756px]">
            Voices of the Journey
          </h2>
          <p className="max-w-[500px] font-['Futura_PT:Book',sans-serif] text-[13px] text-[#192441] opacity-55 sm:text-[14.2px]">
            Across five decades, the Gospel has transformed lives throughout Western Europe.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 place-items-center gap-10 sm:grid-cols-2 sm:place-items-stretch lg:grid-cols-3 lg:gap-[34.711px]">
          <StoryCard
            img={imgContainer}
            imgClass="scale-[2.5] -translate-x-[10%] -translate-y-[8%]"
            year="1971"
            title="A Church Planted in Amsterdam"
            body="From a small gathering of six believers, a thriving congregation emerged that continues to shape the city today."
          />
          <StoryCard
            img={imgContainer1}
            imgClass="scale-[1.4]"
            year="1987"
            title="The European Leadership Summit"
            body="In 1987, pastors from twelve nations gathered for the first time, forging bonds that would define the mission's next chapter."
          />
          <StoryCard
            img={imgContainer2}
            imgClass="scale-[1.1]"
            year="2007"
            title="50 Years of Youth Ministry"
            body="Young people have always been at the heart of AFM Western Europe — the next generation carrying the torch of faithful witness."
          />
        </div>

        <button type="button" className="rounded-full bg-[#192441] px-6 py-3 font-['Futura_PT:Book',sans-serif] text-[12px] tracking-[0.4px] text-white sm:text-[13px]">
          View All Stories
        </button>
      </div>
    </div>
  );
}

/* ============================================================
 * Extra section (not one of the 6 screenshot frames, but present
 * in the source design as a later scroll position) — concentric
 * ring / vertical timeline. Kept so no content is lost.
 * ============================================================ */

function TimelineHero() {
  return (
    <div className="relative w-full overflow-hidden bg-[#0f1421] py-16 sm:py-20 lg:py-28" data-name="Hero">
      <div className="absolute inset-0">
        <img alt="" className="h-full w-full object-cover" src={imgImage3} />
        <div className="absolute inset-0 bg-[#172037] mix-blend-multiply" />
      </div>

      <div className="relative mx-auto flex w-full max-w-[900px] flex-col items-center px-4 text-center">
        <JubileeEyebrow />

        <h2 className="mt-10 font-['CRONDE:Regular',sans-serif] text-[32px] text-white sm:mt-14 sm:text-[40px] lg:mt-16 lg:text-[48px]">
          Loreum Ipsum
        </h2>
        <p className="mt-6 max-w-[770px] font-['Futura_PT:Book',sans-serif] text-[15px] leading-relaxed text-white sm:text-[17px] lg:mt-8 lg:text-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        {/* Desktop/tablet: concentric ring */}
        <div className="relative mt-12 hidden h-[420px] w-[420px] items-center justify-center sm:mt-16 sm:flex lg:h-[600px] lg:w-[600px]">
          <div className="absolute size-[70%] rounded-full border border-[#d9c7a8]/40 bg-black/20" />
          <div className="absolute size-full rounded-full border border-[#d9c7a8]/60" />
          <span className="absolute -left-2 top-[15%] font-['CRONDE:Regular',sans-serif] text-[16px] text-[#d9c7a8] sm:text-[20px] lg:text-[24px]">
            1957
          </span>
          <span className="absolute left-[8%] top-[38%] rotate-[30deg] font-['CRONDE:Regular',sans-serif] text-[16px] text-[#d9c7a8] sm:text-[20px] lg:text-[24px]">
            1967
          </span>
          <span className="absolute font-['CRONDE:Regular',sans-serif] text-[32px] text-white sm:text-[40px] lg:text-[48px]">
            1997
          </span>
          <span className="absolute right-[8%] top-[42%] rotate-[-30deg] font-['CRONDE:Regular',sans-serif] text-[16px] text-[#d9c7a8] sm:text-[20px] lg:text-[24px]">
            2001
          </span>
          <span className="absolute -right-2 top-[18%] font-['CRONDE:Regular',sans-serif] text-[16px] text-[#d9c7a8] sm:text-[20px] lg:text-[24px]">
            2014
          </span>
        </div>
      </div>

      {/* Mobile: full accordion timeline, full width so it isn't squeezed into the 900px text column above */}
      <div className="mt-12 w-full sm:hidden">
        <MobileTimeline activeYearIndex={0} />
      </div>
    </div>
  );
}
/* ============================================================
 * SCREEN 6 — "50 Years Of God's Faithful Ministry" gallery
 * ============================================================ */

interface PolaroidPhotoProps {
  img: string;
  className: string;
  rotate?: string;
}

function PolaroidPhoto({ img, className, rotate = "" }: PolaroidPhotoProps) {
  return (
    <div className={`absolute hidden overflow-hidden bg-white p-2 pb-8 shadow-[0px_4px_4.2px_0px_rgba(0,0,0,0.07)] lg:block ${rotate} ${className}`}>
      <div className="h-[188px] w-[199px] overflow-hidden">
        <img alt="" className="h-full w-full object-cover" src={img} />
      </div>
    </div>
  );
}

function GallerySection() {
  const photos: string[] = [imgImage9, imgImage16, imgImage14, imgImage18, imgImage17, imgImage15];

  return (
    <div className="relative w-full overflow-hidden bg-[#fcf9f2] py-16 sm:py-20 lg:py-28" data-name="gallery">
      <VectorWatermark />

      <div className="relative mx-auto flex w-full max-w-[900px] flex-col items-center px-4 text-center">
        {/* Small circular logo mark, matching the top of screen 6 */}
        <div className="relative size-[56px] sm:size-[64px]" data-name="mark">
          <div className="absolute inset-0 overflow-hidden rounded-full">
            <img alt="" className="h-full w-full object-cover" src={img51} />
          </div>
        </div>

        <h2 className="mt-6 font-['CRONDE:Regular',sans-serif] text-[36px] leading-tight text-[#192441] sm:mt-8 sm:text-[48px] lg:text-[72px]">
          50 Years
          <br />
          Of God&apos;s Faithful Ministry
        </h2>

        <button
          type="button"
          className="mt-8 w-full max-w-[280px] rounded-[2px] bg-[#192441] px-6 py-3 font-['Futura_PT:Book',sans-serif] text-[15px] text-white sm:mt-10 sm:w-auto lg:text-[16px]"
        >
          View Full Gallery
        </button>

        {/* Photo grid — 2 cols on mobile, matching screen 6, scaling up on larger screens */}
        <div className="relative mt-10 grid w-full grid-cols-2 gap-3 sm:mt-14 sm:grid-cols-3 sm:gap-4 lg:mt-16 lg:hidden">
          {photos.map((p, i) => (
            <div key={i} className="aspect-square overflow-hidden bg-white p-1.5 shadow-[0px_4px_4.2px_0px_rgba(0,0,0,0.07)]">
              <img alt="" className="h-full w-full object-cover" src={p} />
            </div>
          ))}
        </div>

        {/* Scattered polaroid layout, desktop/large screens only */}
        <div className="relative mt-16 hidden h-[420px] w-full lg:block">
          <PolaroidPhoto img={photos[0]} className="left-[2%] top-0" />
          <PolaroidPhoto img={photos[1]} className="left-[20%] top-[52%]" rotate="rotate-[5deg]" />
          <PolaroidPhoto img={photos[2]} className="right-[2%] top-[35%]" />
          <PolaroidPhoto img={photos[3]} className="right-[6%] top-0" rotate="rotate-[21deg]" />
          <PolaroidPhoto img={photos[4]} className="left-[38%] top-[38%]" rotate="rotate-[-14deg]" />
          <PolaroidPhoto img={photos[5]} className="right-[10%] top-[8%]" rotate="rotate-[14deg]" />
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------- Footer ---------------------------------- */

function Footer() {
  return (
    <footer className="w-full bg-[#192441] py-12 sm:py-16 lg:py-20" data-name="footer">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center gap-10 px-4 sm:px-8 lg:gap-[72px]">
        <div className="flex w-full flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="relative h-[100px] w-[110px] shrink-0 overflow-hidden sm:h-[120px] sm:w-[132px] lg:h-[145px] lg:w-[160px]">
            <img alt="" className="absolute left-[-32%] top-[-40%] h-[180%] w-[163%] max-w-none object-cover" src={img91} />
          </div>
          <span className="rounded-full border border-[#d9c7a8]/30 bg-[#d9c7a8]/10 px-5 py-2 font-['Futura_PT:Book',sans-serif] text-[11px] tracking-[0.4px] text-[#d9c7a8]">
            AFM UK
          </span>
        </div>

        <div className="flex flex-col items-center gap-4 text-center sm:gap-6">
          <div className="flex flex-wrap items-center justify-center gap-5 opacity-75 sm:gap-8 lg:gap-[37.867px]">
            <span className="font-['Futura_PT:Book',sans-serif] text-[12px] tracking-[0.25px] text-white sm:text-[12.622px]">Stories</span>
            <span className="font-['Futura_PT:Book',sans-serif] text-[12px] tracking-[0.25px] text-white sm:text-[12.622px]">Photos</span>
            <span className="font-['Futura_PT:Book',sans-serif] text-[12px] tracking-[0.25px] text-white sm:text-[12.622px]">Timeline</span>
          </div>

          <div className="flex flex-col items-center gap-4 opacity-80">
            <p className="font-['Futura_PT:Book',sans-serif] text-[13px] leading-relaxed text-[#d9c7a8] sm:text-[14.989px]">
              "One generation shall praise thy works to another,
              <br />
              and shall declare thy mighty acts."
            </p>
            <p className="font-['Futura_PT:Book',sans-serif] text-[9px] tracking-[0.6px] text-[#d9c7a8] opacity-50 sm:text-[10.256px]">
              — Psalm 145:4
            </p>
          </div>
        </div>

        <div className="w-full border-t border-[#d9c7a8]/10 pt-5">
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <p className="text-center font-['Futura_PT:Book',sans-serif] text-[9px] tracking-[0.28px] text-white opacity-35 sm:text-[9.467px]">
              © 2026 Apostolic Faith Mission Western Europe. All rights reserved.
            </p>
            <p className="text-center font-['Futura_PT:Book',sans-serif] text-[9px] tracking-[0.28px] text-[#d9c7a8] opacity-40 sm:text-[9.467px]">
              Celebrating 50 years of faithful ministry
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------------------------- Page ---------------------------------- */
/*
 * Section order now follows the 6 mobile screens from your screenshot,
 * left to right:
 *   1. QuoteHero        — dark quote + photo collage strip
 *   2. AnniversarySplash — gold "50th Anniversary" badge
 *   3. Hero              — "Praise God With US!"
 *   4. Intro + VideoBanner — "Where it all started" + video
 *   5. StorySection      — "Voices of the Journey"
 *   6. GallerySection    — "50 Years Of God's Faithful Ministry"
 *
 * TimelineHero is kept after these because it exists in the original
 * source file (concentric-ring timeline) but wasn't one of the 6
 * captured frames — remove it if it isn't actually part of this page.
 */
export default function Homepage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-white" data-name="Homepage">
      <NavBar />
      <QuoteHero />
      <AnniversarySplash />
      <Hero />
      <Intro />
      <VideoBanner />
      <StorySection />
      <GallerySection />
      <TimelineHero />
      <Footer />
    </div>
  );
}