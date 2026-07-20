import { useEffect, useRef, useState } from "react";
import imgCrest from "./0cce19fd4acc08db680fdccec6c96c1b9ad2b1e8.png";
import imgHero from "./da3529783d02f20216c63bb9f6bf68b91cb518b5.png";
import imgMobileHero from "./4986cb0ca9480b3dc025830e0fd805d9e9f8b29c.png";
import imgGallery from "./00906276d94a619afd9053d491e72ee53b2c84f7.png";

const BRANCH_ADDRESS = "Osny, Paris suburbs";
const GALLERY_IMAGES = Array.from({ length: 12 }, () => imgGallery);
const FACTS = [
  { label: "Current venue", value: "Osny, Paris suburbs (since 2025)" },
  { label: "Pastor", value: "Sis Patricia Sossa (ordained July 2025)" },
];

function ChevronIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m15 6-6 6 6 6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function DecorativeGrid({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute opacity-35 ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(#c9c6bd 1px, transparent 1px), linear-gradient(90deg, #c9c6bd 1px, transparent 1px)",
        backgroundSize: "180px 150px",
        transform: "rotate(-11deg)",
      }}
    />
  );
}

function BranchIntro() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f4f1ea]">
      <DecorativeGrid className="-inset-x-[8%] -inset-y-[55%]" />

      <div className="relative mx-auto grid w-full max-w-[1240px] gap-5 px-5 py-12 sm:px-8 sm:py-14 md:grid-cols-[1fr_auto] md:items-center md:gap-12 lg:px-12 lg:py-[92px]">
        <div className="flex min-w-0 flex-col items-center justify-center md:flex-row md:justify-start">
          <div className="min-w-0 text-center md:text-left">
            <p className="text-[18px] leading-none text-[#949494] sm:text-[21px] lg:text-[24px]">
              Group
            </p>
            <h1 className="mt-2 text-[56px] leading-[0.86] tracking-[-0.035em] text-[#38362d] sm:text-[64px] md:text-[clamp(42px,6vw,72px)]">
              <span className="md:hidden">France</span>
              <span className="hidden md:inline">France</span>
            </h1>
          </div>
        </div>

        <div className="mx-auto mt-1 w-full max-w-[340px] text-center md:mx-0 md:mt-0 md:text-left">
          <p className="text-[20px] font-bold leading-none text-[#38362d] lg:text-[24px]">
            Address
          </p>
          <p className="mt-3 text-[18px] leading-7 text-[#38362d] lg:text-[22px] lg:leading-8">
            {BRANCH_ADDRESS}
          </p>
        </div>
      </div>
    </section>
  );
}

function AddressListItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-5 md:block">
      <p className="shrink-0 text-[16px] font-bold leading-5 text-[#192441] md:text-[15px]">{label}</p>
      <p className="text-right text-[16px] leading-5 text-[#38362d] md:mt-2 md:text-left md:text-[15px]">{value}</p>
    </div>
  );
}

function StorySection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f4f1ea] px-5 pb-16 pt-4 sm:px-8 sm:pb-20 sm:pt-18 lg:px-12 lg:pb-14 lg:pt-4">
      <DecorativeGrid className="-left-[5%] -right-[5%] -top-[155px] h-[320px]" />

      <div className="relative mx-auto grid max-w-[1240px] gap-10 md:grid-cols-[190px_minmax(0,1fr)] md:gap-10 lg:grid-cols-[210px_minmax(0,1fr)] lg:gap-12">
        <aside className="order-2 grid grid-cols-1 gap-y-5 border-t border-[#38362d] pt-8 md:order-1 md:content-start md:gap-7 md:border-r md:border-t-0 md:pb-0 md:pr-10 md:pt-0 lg:pr-12" aria-label="Branch addresses">
          {FACTS.map((f) => (
            <AddressListItem key={f.label} label={f.label} value={f.value} />
          ))}
        </aside>

        <article className="order-1 md:order-2">
          <h2 className="text-[clamp(38px,5vw,54px)] leading-none tracking-[-0.025em] text-[#192441]">
            Nearly Four Decades of French-Language Ministry
          </h2>
          <div className="mt-8 space-y-7 text-[18px] leading-[32px] text-[#38362d]">
            <p className="hidden md:block">
              The Apostolic Faith work in France has grown steadily under a succession of dedicated leaders, from Sister Suzanne Vimadje in the 2000s to Brother Mathieu Bobo's long pastorate. In 2018, a Translation Department was established to carry devotionals, tracts, and teaching materials into French — work that by 2023 had grown to include translating the church's own hymn book. A Youth Department followed in 2019, and an Evangelism Department more recently, led by Olivier Vimadge.
            </p>
            <p>
              Like many congregations, France moved through a string of rented venues during and after the pandemic, before settling in Osny, in the Paris suburbs, in 2025 — the same year Brother Mathieu Bobo retired after decades of service and Sister Patricia Sossa was ordained as the new pastor in charge of the work in France, at the UK Camp Meeting that July. Regional Director Brother Francis Odudu has since begun weaving France into a wider circle of joint events with Germany, Ireland, and Spain, culminating in a joint revival held in Italy in 2026 — proof that the French work, however far from London, has never stood alone.
            </p>
          </div>
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

    const nextIndex = Math.max(0, Math.min(index, GALLERY_IMAGES.length - 1));
    const card = scroller.children[nextIndex] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  };

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const handleScroll = () => {
      const cards = Array.from(scroller.children) as HTMLElement[];
      const nearest = cards.reduce(
        (result, card, index) => {
          const distance = Math.abs(card.offsetLeft - scroller.scrollLeft);
          return distance < result.distance ? { index, distance } : result;
        },
        { index: 0, distance: Number.POSITIVE_INFINITY },
      );
      setActiveIndex(nearest.index);
    };

    scroller.addEventListener("scroll", handleScroll, { passive: true });
    return () => scroller.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-[#f4f1ea] pb-14 pt-2 sm:px-8 sm:pb-14 sm:pt-0 lg:px-10 lg:pb-22">
      <div className="mx-auto flex max-w-[1320px] items-center gap-3 sm:gap-5 lg:gap-8">
        <button
          type="button"
          aria-label="Previous photos"
          onClick={() => scrollToIndex(activeIndex - 1)}
          disabled={activeIndex === 0}
          className="hidden shrink-0 text-[#111] transition-opacity hover:opacity-60 disabled:opacity-30 sm:grid sm:size-12 sm:place-items-center"
        >
          <ChevronIcon className="size-10" />
        </button>

        <div
          ref={scrollerRef}
          className="flex flex-1 snap-x snap-mandatory gap-2.5 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-4"
        >
          {GALLERY_IMAGES.map((src, index) => (
            <figure
              key={index}
              className="m-0 w-[29%] shrink-0 snap-start bg-white p-1.5 pb-4 sm:w-[calc((100%-16px)/2)] sm:p-2 sm:pb-6 lg:w-[calc((100%-32px)/3)] lg:pb-7"
            >
              <div className="aspect-[0.9/1] w-full overflow-hidden sm:aspect-[1.28/1]">
                <img
                  src={src}
                  alt={`France branch gathering ${index + 1}`}
                  className="block"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "32% center" }}
                  loading={index < 3 ? "eager" : "lazy"}
                />
              </div>
            </figure>
          ))}
        </div>

        <button
          type="button"
          aria-label="Next photos"
          onClick={() => scrollToIndex(activeIndex + 1)}
          disabled={activeIndex === GALLERY_IMAGES.length - 1}
          className="hidden shrink-0 text-[#111] transition-opacity hover:opacity-60 disabled:opacity-30 sm:grid sm:size-12 sm:place-items-center"
        >
          <ChevronIcon className="size-10 rotate-180" />
        </button>
      </div>

      <div className="mt-6 flex items-center justify-center gap-7 sm:hidden">
        <button type="button" aria-label="Previous photos" onClick={() => scrollToIndex(activeIndex - 1)} className="grid size-9 place-items-center text-[#111]">
          <ChevronIcon className="size-6" />
        </button>
        <div className="flex items-center justify-center gap-1">
          {GALLERY_IMAGES.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to photo ${index + 1}`}
              aria-current={activeIndex === index ? "true" : undefined}
              onClick={() => scrollToIndex(index)}
              className={`!min-h-0 !min-w-0 rounded-full transition-all ${
                activeIndex === index ? "size-2 bg-[#192441]" : "size-1.5 bg-[#cfd1d3]"
              }`}
            />
          ))}
        </div>
        <button type="button" aria-label="Next photos" onClick={() => scrollToIndex(activeIndex + 1)} className="grid size-9 place-items-center text-[#111]">
          <ChevronIcon className="size-6 rotate-180" />
        </button>
      </div>
    </section>
  );
}

export default function France() {
  return (
    <main className="w-full overflow-x-clip bg-[#f4f1ea]">
      <BranchIntro />
      <Gallery />
      <StorySection />
    </main>
  );
}