// MobileGallery.tsx
import { useRef, useState } from "react";
import type { ReactElement, TouchEvent } from "react";

interface Slide {
  label: string;
  center: string;
  topRight: string;
  left: string;
  centerLeft: string;
  right: string;
}

interface CardImgProps {
  src: string;
  isCenter: boolean;
}

interface GalleryMobileProps {
  slides: Slide[];
  CardImg: (props: CardImgProps) => ReactElement;
}

/**
 * Mobile version of the desktop card-fan gallery.
 * 3 standalone cards (left / center / right) laid out side-by-side —
 * no overlap — each gently tilted for the same fan character as
 * desktop, but sitting in its own slot. Built mobile-first:
 * - swipeable (touch drag left/right changes slide)
 * - small tap-friendly dots (span, not button)
 * - all sizing in vw so it's fluid at any phone width
 */
export default function GalleryMobile({ slides, CardImg }: GalleryMobileProps): ReactElement {
  const [active, setActive] = useState<number>(0);
  const total = slides.length;
  const slide = slides[active];

  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef<number>(0);

  const prev = () => setActive((i) => (i - 1 + total) % total);
  const next = () => setActive((i) => (i + 1) % total);

  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const onTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const onTouchEnd = () => {
    const threshold = 40;
    if (touchDeltaX.current > threshold) {
      prev();
    } else if (touchDeltaX.current < -threshold) {
      next();
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  const cardFrameStyle: React.CSSProperties = {
    background: "#fff",
    overflow: "hidden",
    boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.08)",
  };

  return (
    <div
      style={{
        width: "100%",
        background: "#fcf9f2",
        padding: "14vw  10vw",
        
        position: "relative",
        overflow: "hidden",
        touchAction: "pan-y",
      }}
    >
      {/* Title */}
      <div
        className="font-['CRONDE:Regular'] not-italic text-[#0f1421] text-center"
        style={{
          padding: "6vw 6vw",
          marginBottom: "10vw",
          fontSize: "clamp(28px, 8.2vw, 40px)",
          lineHeight: 1.15,
        }}
      >
        <p>Our pictures over the years</p>
      </div>

      {/* Card row — 3 standalone cards, no overlap */}
      <div
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "10vw",
          
        }}
      >
        {/* Left card, rotate -8deg */}
        <div
          style={{
            width: "27vw",
            transform: "rotate(-20deg)",
            transition: "all 1.2s cubic-bezier(0.25,0.1,0.25,1)",
          }}
        >
          <div style={{ ...cardFrameStyle, padding: "2.6vw 2.6vw 3vw" }}>
            <div style={{ position: "relative", width: "100%", aspectRatio: "224 / 212", overflow: "hidden" }}>
              <CardImg src={slide.left} isCenter={false} />
            </div>
          </div>
        </div>

        {/* Center card, straight */}
        <button
          onClick={() => {
            window.location.hash = "#pictures";
          }}
          className="border-0 p-0 cursor-pointer"
          style={{
            ...cardFrameStyle,
            width: "50vw",
            padding: "3vw 3vw 3vw",
            boxShadow: "0px 6px 14px 0px rgba(0,0,0,0.12)",
            transition: "all 1.2s cubic-bezier(0.25,0.1,0.25,1), transform 0.2s ease",
          }}
        >
          <div style={{ position: "relative", width: "100%", aspectRatio: "224 / 212", overflow: "hidden" }}>
            <CardImg src={slide.center} isCenter={true} />
          </div>
        </button>

        {/* Right card, rotate +8deg */}
        <div
          style={{
            width: "27vw",
            transform: "rotate(20deg)",
            transition: "all 1.2s cubic-bezier(0.25,0.1,0.25,1)",
          }}
        >
          <div style={{ ...cardFrameStyle, padding: "2.6vw 2.6vw 3vw" }}>
            <div style={{ position: "relative", width: "100%", aspectRatio: "224 / 212", overflow: "hidden" }}>
              <CardImg src={slide.right} isCenter={false} />
            </div>
          </div>
        </div>
      </div>

      {/* Label */}
      <div style={{ textAlign: "center", marginTop: "8vw" }}>
        <p
          className="font-['Futura_PT:Book',sans-serif] not-italic text-[#0f1421]"
          style={{
            fontSize: "clamp(16px, 4.6vw, 22px)",
            transition: "opacity 0.8s cubic-bezier(0.25,0.1,0.25,1)",
          }}
        >
          {slide.label}
        </p>
      </div>

      {/* Navigation: prev / dots / next */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "4vw",
          marginTop: "5vw",
        }}
      >
        <button
          onClick={prev}
          aria-label="Previous slide"
          style={{ background: "none", border: "none", padding: "2vw", cursor: "pointer" }}
        >
          <svg width="22" height="22" viewBox="0 0 48 48" fill="none">
            <path d="M30 12L18 24L30 36" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          </svg>
        </button>

       <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
       {slides.map((_, i) => (
         <span
         key={i}
      onClick={() => setActive(i)}
      style={{
        width: 6,
        height: 6,
        borderRadius: "50%",
        display: "inline-block",
        backgroundColor: i === active ? "#192441" : "#D8D8D8",
        cursor: "pointer",
        transition: "background-color 0.2s ease",
      }}
    />
  ))}
</div>
        <button
          onClick={next}
          aria-label="Next slide"
          style={{ background: "none", border: "none", padding: "2vw", cursor: "pointer" }}
        >
          <svg width="22" height="22" viewBox="0 0 48 48" fill="none">
            <path
              d="M30 12L18 24L30 36"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              transform="rotate(180 24 24)"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}