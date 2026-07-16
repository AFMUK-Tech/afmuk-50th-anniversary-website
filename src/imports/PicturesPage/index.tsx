import { useEffect, useState } from "react";
import svgPaths from "./svg-1z3hz3v4ir";
import { SiteHeader, useSiteScale, useIsMobile, NAV_H } from "../../app/components/SiteHeader";
import imgImage from "./9ec56a815db13e6f5f4c4f51dc8c89bded734cf2.png";
import imgImage18 from "./3b8e188b8820680ef46d22804ac760d971cfe95a.png";
import imgImage15 from "./934c91a8c59703a23c154d5e409ad03b2b6d72cb.png";
import imgImage17 from "./f2e30c0a264a39aae9ecc96a919006cbd7df2106.png";
import imgImage16 from "./d060be9ce61288ad16074db37bfbb70d4d8416b7.png";
import imgImage14 from "./e3a2e759660a8d0ba4abbbb7455d7244230b5fa9.png";

const ALBUM_TITLE = "Wales Camp Meeting 2019";

const PHOTOS = [
  imgImage, imgImage18, imgImage15, imgImage17,
  imgImage16, imgImage14, imgImage, imgImage18,
  imgImage15, imgImage17,
];

const MOBILE_NAV_CLEARANCE = 96;

function ChevronLeftIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M15 6L9 12L15 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

function BackToGalleryLink() {
  return (
    <button
      type="button"
      onClick={() => {
        window.location.hash = "gallery";
      }}
      className="inline-flex cursor-pointer items-center gap-2.5 border-0 bg-transparent p-0 text-[16px] text-[#0f1421] transition-opacity hover:opacity-70 sm:gap-3 sm:text-[20px] lg:text-[24px]"
    >
      <ChevronLeftIcon />
      Back to gallery
    </button>
  );
}

function DecorativeGrid() {
  return (
    <div className="pointer-events-none absolute inset-[0_6.81%_3.06%_6.81%] opacity-20" aria-hidden="true">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1244 1142">
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
      </svg>
    </div>
  );
}

function PhotoCard({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="m-0 bg-white p-2 pb-6 shadow-[0_4px_14px_rgba(0,0,0,0.08)] sm:p-3 sm:pb-8">
      <div className="aspect-square w-full overflow-hidden bg-[#ece8df]">
        <img src={src} alt={alt} className="block h-full w-full object-cover" loading="lazy" />
      </div>
    </figure>
  );
}

export default function PicturesPage() {
  const scale = useSiteScale();
  const isMobile = useIsMobile();
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setFadeIn(true));
  }, []);

  return (
    <div style={{ width: "100%", minHeight: "100vh", background: "#fcf9f2", position: "relative" }}>
      <SiteHeader />

      <div
        style={{
          opacity: fadeIn ? 1 : 0,
          transform: fadeIn ? "scale(1)" : "scale(0.98)",
          transition: "opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1) 0.1s, transform 0.9s cubic-bezier(0.4, 0, 0.2, 1) 0.1s",
          paddingTop: isMobile ? MOBILE_NAV_CLEARANCE : NAV_H * scale,
        }}
      >
        <main className="relative isolate overflow-hidden px-5 pb-20 pt-10 sm:px-8 sm:pb-24 sm:pt-14 lg:px-12 lg:pb-28 lg:pt-16">
          <DecorativeGrid />

          <div className="relative mx-auto max-w-[1240px] text-center">
            <BackToGalleryLink />

            <h1 className="mx-auto mt-6 max-w-[900px] text-[clamp(40px,7vw,88px)] leading-[0.95] tracking-[-0.02em] text-[#0f1421] sm:mt-10">
              {ALBUM_TITLE}
            </h1>

            <div className="mt-12 grid grid-cols-2 gap-4 sm:mt-16 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
              {PHOTOS.map((src, i) => (
                <PhotoCard key={i} src={src} alt={`${ALBUM_TITLE} photograph ${i + 1}`} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
