import { useEffect, useRef, useState } from "react";
import svgPaths from "./svg-qle47qowmk";
// Removed imgLogo as it's handled by the parent nav now
import imgCrest from "./6289e65571dab6c414b3b1e11ca90d8fc1b7d1fe.png";
import imgHero from "./4986cb0ca9480b3dc025830e0fd805d9e9f8b29c.png";
import imgGallery from "./00906276d94a619afd9053d491e72ee53b2c84f7.png";

const GALLERY_IMAGES = [imgGallery, imgGallery, imgGallery];
const BRANCH_ADDRESS = "21 pekam road North London";

/* --------------------------------- Icons -------------------------------- */

function ChevronIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M15 6L9 12L15 18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

/* ------------------------------ Branch title ------------------------------ */

function BranchTitle() {
  return (
    <div className="mx-auto flex w-full max-w-[1096px] flex-col items-center gap-8 px-4 pt-10 pb-2 text-center sm:pt-12 sm:pb-3 md:flex-row md:items-center md:justify-between md:text-left lg:pt-16 lg:pb-4">
      
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <p className="font-['Futura_PT'] text-lg text-[#949494] sm:text-xl lg:text-2xl">
            Branch
          </p>
          <h1 className="font-['CRONDE:Regular'] text-4xl leading-none text-[#38362d] sm:text-5xl lg:text-[64px]">
            Manchester
          </h1>
      </div>

      <div className="hidden flex-col items-center gap-1 sm:gap-2 md:flex md:items-end md:text-right">
        <p className="font-['Futura_PT:Heavy',sans-serif] text-lg text-[#38362d] sm:text-xl lg:text-2xl">
          Address
        </p>
        <p className="font-['Futura_PT:Book',sans-serif] text-base leading-7 text-[#38362d] sm:text-lg lg:text-[18px] lg:leading-[32px]">
          {BRANCH_ADDRESS}
        </p>
      </div>
    </div>
  );
}

/* -------------------------------- Hero image ------------------------------ */

function HeroImage() {
  return (
    <div className="relative h-[220px] w-full overflow-hidden sm:h-[340px] md:h-[400px] lg:h-[579px]">
      <img
        src={imgHero}
        alt="Manchester church building exterior"
        className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
      />
    </div>
  );
}

/* ------------------------------ Background art ----------------------------- */

function BackgroundPattern() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-[6.81%] top-0 bottom-[15%] opacity-20"
    >
      <svg className="h-full w-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1244 1142">
        <g>
          <path d={svgPaths.p1d9a8400} fill="#949494" />
          <path d={svgPaths.p56bbc40} fill="#949494" />
          <path d={svgPaths.p35f8ee80} fill="#949494" />
          <path d={svgPaths.p3de18b80} fill="#949494" />
          <path d={svgPaths.p85df300} fill="#949494" />
          <path d={svgPaths.p2733e000} fill="#949494" />
          <path d={svgPaths.p3d407f00} fill="#949494" />
          <path d={svgPaths.pd613700} fill="#949494" />
          <path d={svgPaths.p9c00100} fill="#949494" />
          <path d={svgPaths.p1e936c00} fill="#949494" />
          <path d={svgPaths.p2315e700} fill="#949494" />
          <path d={svgPaths.p36f7a300} fill="#949494" />
        </g>
      </svg>
    </div>
  );
}

/* --------------------------- Address + Lorem Ipsum -------------------------- */

function AddressListItem() {
  return (
    <div className="flex flex-col gap-1">
      <p className="font-['Futura_PT:Heavy',sans-serif] text-sm text-[#38362d]">Address</p>
      <p className="font-['Futura_PT:Book',sans-serif] text-sm leading-6 text-[#38362d]">
        {BRANCH_ADDRESS}
      </p>
    </div>
  );
}

function StorySection() {
  return (
    <section className="relative bg-[#f4f1ea] px-4 py-14 sm:px-6 sm:py-20 lg:px-0 lg:py-24">
      <BackgroundPattern />

      <div className="relative mx-auto flex max-w-[1096px] flex-col md:flex-row md:gap-12 lg:gap-16">
        <div className="order-2 mt-10 flex flex-col gap-6 border-t border-[#e5e1d6] pt-6 md:order-1 md:mt-0 md:w-[160px] md:shrink-0 md:border-t-0 md:pt-0 lg:w-[180px]">
          <AddressListItem />
          <AddressListItem />
          <AddressListItem />
          <AddressListItem />
        </div>

        <div className="order-1 flex flex-col md:order-2 md:flex-1">
          <div className="flex flex-col gap-5 sm:gap-6">
            <h2 className="font-['CRONDE:Regular',sans-serif] text-3xl text-[#38362d] sm:text-4xl lg:text-[48px]">
              A Food Bank That Became a Doorway
            </h2>
            <p className="font-['Futura_PT:Book',sans-serif] text-base leading-7 text-[#38362d] sm:text-[18px] sm:leading-[32px]">
              Since Brother Toyin Emitola became pastor in January 2018, Manchester's weekly attendance has grown from around thirty to a consistent 150–180.
              Through the pandemic, the church renovated its building; since then, Christmas has become a season of community outreach — carol visits, litter-picking, and a hot chocolate stand outside the church door.
              A food bank has grown from that same spirit of hospitality, becoming a clear doorway for newcomers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Gallery --------------------------------- */

function Gallery() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(index, GALLERY_IMAGES.length - 1));
    const card = el.children[clamped] as HTMLElement | undefined;
    if (card) {
      el.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
    }
  };

  const scrollByCard = (direction: 1 | -1) => {
    scrollToIndex(activeIndex + direction);
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const handleScroll = () => {
      const cards = Array.from(el.children) as HTMLElement[];
      let closest = 0;
      let closestDistance = Infinity;
      cards.forEach((card, i) => {
        const distance = Math.abs(card.offsetLeft - el.scrollLeft);
        if (distance < closestDistance) {
          closestDistance = distance;
          closest = i;
        }
      });
      setActiveIndex(closest);
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative bg-[#f4f1ea] px-4 pb-14 sm:px-6 sm:pb-20 lg:px-0 lg:pb-24">
      <div className="mx-auto flex max-w-[1290px] items-center gap-3 sm:gap-6 lg:gap-[45px]">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Previous photos"
          className="hidden shrink-0 items-center justify-center text-[#38362d] transition-opacity hover:opacity-70 lg:flex"
        >
          <ChevronIcon className="size-8 lg:size-12" />
        </button>

        <div
          ref={scrollerRef}
          className="flex flex-1 snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-4"
        >
          {GALLERY_IMAGES.map((src, i) => (
            <div
              key={i}
              className="w-[85%] shrink-0 snap-start bg-white p-2 pb-6 sm:w-[46%] md:w-[31%] lg:w-[320px]"
            >
              <div className="h-[170px] w-full overflow-hidden sm:h-[210px] lg:h-[240px]">
                <img
                  src={src}
                  alt="Manchester congregation gathered together"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Next photos"
          className="hidden shrink-0 items-center justify-center text-[#38362d] transition-opacity hover:opacity-70 lg:flex"
        >
          <ChevronIcon className="size-8 rotate-180 lg:size-12" />
        </button>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4 lg:hidden">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Previous photos"
          className="text-[#38362d]"
        >
          <ChevronIcon className="size-5" />
        </button>

        <div className="flex items-center gap-1">
          {GALLERY_IMAGES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to photo ${i + 1}`}
              aria-current={activeIndex === i}
              className={`box-content rounded-full border-0 p-0 leading-none transition-all ${
                activeIndex === i ? "h-1 w-3 bg-[#192441]" : "h-1 w-1 bg-[#c9c4b4]"
              }`}
              style={{ minWidth: 0, minHeight: 0 }}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Next photos"
          className="text-[#38362d]"
        >
          <ChevronIcon className="size-5 rotate-180" />
        </button>
      </div>
    </section>
  );
}

/* --------------------------------- Glasgow -------------------------------- */

export default function Glasgow() {
  return (
    <div className="w-full bg-[#f4f1ea]">
      <BranchTitle />
      <Gallery />
      <StorySection />
    </div>
  );
}
