import { useEffect, useRef, useState } from "react";
import svgPaths from "./svg-qle47qowmk";
import imgCrest from "./6289e65571dab6c414b3b1e11ca90d8fc1b7d1fe.png";
import imgHero from "./4986cb0ca9480b3dc025830e0fd805d9e9f8b29c.png";
import imgGallery from "./00906276d94a619afd9053d491e72ee53b2c84f7.png";

const GALLERY_IMAGES = Array.from({ length: 12 }, () => imgGallery);
const BRANCH_ADDRESS = "21 pekam road North London";
const STORY_COPY =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

function ChevronIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24">
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

function BackgroundPattern({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute opacity-20 ${className}`}>
      <svg className="size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1244 1142">
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

function Crest() {
  return (
    <div className="size-30 shrink-0 overflow-hidden" aria-hidden="true">
      <img
        alt=""
        className="size-full scale-[1.84] object-contain"
        src={imgCrest}
      />
    </div>
  );
}

function AddressBlock() {
  return (
    <div className="text-center md:text-left">
      <p className="font-['Futura_PT:Heavy',sans-serif] text-[20px] font-bold leading-none text-[#38362d] md:text-[24px]">
        Address
      </p>
      <p className="mt-4 font-['Futura_PT:Book',sans-serif] text-[18px] leading-6 text-[#38362d] md:mt-3 md:text-[24px] md:leading-8">
        {BRANCH_ADDRESS}
      </p>
    </div>
  );
}

function BranchTitle() {
  return (
    <section className="relative min-h-94 overflow-hidden bg-[#f4f1ea] md:min-h-[371px]">
      <BackgroundPattern className="-inset-x-[8%] -inset-y-[20%] md:inset-x-[6.81%] md:-top-[28%] md:bottom-0" />

      <div className="relative z-10 mx-auto flex min-h-94 w-full max-w-[1096px] flex-col items-center justify-center px-6 pb-7 text-center md:min-h-[371px] md:flex-row md:items-end md:justify-between md:pb-10.5 md:text-left">
        <div className="flex flex-col items-center md:flex-row md:gap-3">
          <Crest />
          <div className="-mt-1 flex flex-col items-center gap-1 md:mt-0 md:items-start md:gap-2">
            <p className="font-['Futura_PT:Book',sans-serif] text-[20px] leading-none text-[#949494] md:text-[24px]">
              Branch
            </p>
            <h1 className="font-['CRONDE:Regular',sans-serif] text-[52px] leading-none text-[#38362d] md:text-[64px]">
              Manchester
            </h1>
          </div>
        </div>

        <div className="mt-5 md:mb-4 md:mt-0">
          <AddressBlock />
        </div>
      </div>
    </section>
  );
}

function HeroImage() {
  return (
    <div className="relative h-55.5 w-full overflow-hidden sm:h-80 md:h-[579px]">
      <img
        alt="Manchester church building exterior"
        className="absolute inset-0 size-full object-cover object-[center_20%] md:object-[center_47%]"
        src={imgHero}
      />
    </div>
  );
}

function AddressListItem({ mobileOnly = false }: { mobileOnly?: boolean }) {
  return (
    <div className={`grid grid-cols-[95px_1fr] items-start gap-6 md:block ${mobileOnly ? "md:hidden" : ""}`}>
      <p className="font-['Futura_PT:Heavy',sans-serif] text-[18px] font-bold leading-6 text-[#192441] md:text-[16px]">
        Address
      </p>
      <p className="font-['Futura_PT:Book',sans-serif] text-right text-[18px] leading-6 text-[#38362d] md:mt-2 md:text-left md:text-[16px]">
        {BRANCH_ADDRESS}
      </p>
    </div>
  );
}

function StorySection() {
  return (
    <section className="relative overflow-hidden bg-[#f4f1ea] px-6 pb-18 pt-18 sm:px-10 md:px-0 md:pb-20 md:pt-22">
      <BackgroundPattern className="-inset-x-[45%] -top-[10%] bottom-0 md:inset-x-[6.81%] md:-top-[35%] md:-bottom-[15%]" />

      <div className="relative z-10 mx-auto flex max-w-[1096px] flex-col md:grid md:grid-cols-[240px_minmax(0,1fr)] md:gap-10">
        <aside className="order-2 mt-12 flex flex-col gap-5 border-t border-[#38362d] pt-8 md:order-1 md:mt-0 md:gap-6 md:border-r md:border-t-0 md:pr-12 md:pt-1">
          <AddressListItem />
          <AddressListItem />
          <AddressListItem />
          <AddressListItem />
          <AddressListItem mobileOnly />
        </aside>

        <article className="order-1 md:order-2">
          <h2 className="font-['CRONDE:Regular',sans-serif] text-[44px] leading-none text-[#192441] md:text-[48px]">
            Loreum Ipsum
          </h2>
          <p className="mt-11 font-['Futura_PT:Book',sans-serif] text-[18px] leading-[1.5] text-[#38362d] md:mt-8 md:text-[24px] md:leading-[1.35]">
            {STORY_COPY}
          </p>
          <p className="mt-6 hidden font-['Futura_PT:Book',sans-serif] text-[24px] leading-[1.35] text-[#38362d] 2xl:block">
            {STORY_COPY}
          </p>
        </article>
      </div>
    </section>
  );
}

function Gallery() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const clampedIndex = Math.max(0, Math.min(index, GALLERY_IMAGES.length - 1));
    const card = scroller.children[clampedIndex] as HTMLElement | undefined;
    if (card) scroller.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
  };

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const handleScroll = () => {
      const cards = Array.from(scroller.children) as HTMLElement[];
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      cards.forEach((card, index) => {
        const distance = Math.abs(card.offsetLeft - scroller.scrollLeft);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    scroller.addEventListener("scroll", handleScroll, { passive: true });
    return () => scroller.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative bg-[#f4f1ea] pb-44 pt-3 md:pb-30 md:pt-0">
      <div className="mx-auto flex w-full max-w-[1290px] items-center gap-3 md:gap-11.25">
        <button
          aria-label="Previous photo"
          className="hidden size-12 shrink-0 items-center justify-center text-black transition-opacity hover:opacity-60 disabled:opacity-25 md:flex"
          disabled={activeIndex === 0}
          onClick={() => scrollToIndex(activeIndex - 1)}
          type="button"
        >
          <ChevronIcon className="size-12" />
        </button>

        <div
          ref={scrollerRef}
          className="flex flex-1 snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {GALLERY_IMAGES.map((src, index) => (
            <figure
              className="w-[30vw] min-w-[136px] shrink-0 snap-start bg-white p-2 pb-6 md:w-[336px] md:min-w-[336px] md:pb-8"
              key={`${src}-${index}`}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  alt="Manchester congregation gathered together"
                  className="absolute -left-[48.75%] -top-[51.667%] h-[205%] w-[230.625%] max-w-none"
                  src={src}
                />
              </div>
            </figure>
          ))}
        </div>

        <button
          aria-label="Next photo"
          className="hidden size-12 shrink-0 items-center justify-center text-black transition-opacity hover:opacity-60 disabled:opacity-25 md:flex"
          disabled={activeIndex === GALLERY_IMAGES.length - 1}
          onClick={() => scrollToIndex(activeIndex + 1)}
          type="button"
        >
          <ChevronIcon className="size-12 rotate-180" />
        </button>
      </div>

      <div className="mt-7 flex items-center justify-center gap-8 md:mt-8">
        <button
          aria-label="Previous photo"
          className="flex size-6 items-center justify-center text-black disabled:opacity-25"
          disabled={activeIndex === 0}
          onClick={() => scrollToIndex(activeIndex - 1)}
          type="button"
        >
          <ChevronIcon className="size-6" />
        </button>

        <div className="flex items-center gap-1" role="group" aria-label="Choose a gallery photo">
          {GALLERY_IMAGES.map((_, index) => (
            <button
              aria-current={activeIndex === index}
              aria-label={`Go to photo ${index + 1}`}
              className={`size-1.5 rounded-full border-0 p-0 transition-colors ${
                activeIndex === index ? "bg-[#192441]" : "bg-[#d2d2d2]"
              }`}
              key={index}
              onClick={() => scrollToIndex(index)}
              type="button"
            />
          ))}
        </div>

        <button
          aria-label="Next photo"
          className="flex size-6 items-center justify-center text-black disabled:opacity-25"
          disabled={activeIndex === GALLERY_IMAGES.length - 1}
          onClick={() => scrollToIndex(activeIndex + 1)}
          type="button"
        >
          <ChevronIcon className="size-6 rotate-180" />
        </button>
      </div>
    </section>
  );
}

export default function Manchester() {
  return (
    <main className="w-full overflow-x-hidden bg-[#f4f1ea]">
      <BranchTitle />
      <HeroImage />
      <StorySection />
      <Gallery />
    </main>
  );
}
