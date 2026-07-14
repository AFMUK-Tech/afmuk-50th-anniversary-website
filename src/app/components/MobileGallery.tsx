import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import imgImage14 from "../../imports/Frame28-1/13080b4795fd0ccbe725b61298f65577a198e84f.png";
import imgImage18 from "../../imports/Frame28-1/b6cb69d93159764d9138d35c046c9a5205c45338.png";
import imgImage15 from "../../imports/Frame28-1/4220d400525c50945c5ca0ef50b76d513a3cec9d.png";
import imgImage16 from "../../imports/Frame28-1/f5b7af79a4a605ff9cc0d053e532afee9d16cbd7.png";
import imgImage17 from "../../imports/Frame28-1/f2e30c0a264a39aae9ecc96a919006cbd7df2106.png";

const IMAGES = [
  { src: imgImage17, label: "Wales Camp Meeting 2019" },
  { src: imgImage14, label: "Golden Jubilee 2023" },
  { src: imgImage15, label: "Annual Convention 2018" },
  { src: imgImage16, label: "Camp Meeting Memories" },
  { src: imgImage18, label: "AFC UK Gathering 2020" },
];

export default function MobileGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % IMAGES.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      handleNext();
    }

    if (touchStart - touchEnd < -75) {
      handlePrev();
    }
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % IMAGES.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div className="w-full h-full bg-[#fcf9f2] flex flex-col items-center justify-center py-8 sm:py-12">
      {/* Header */}
      <div className="text-center mb-6 sm:mb-10 px-4">
        <h2 className="font-['CRONDE',sans-serif] text-[#0f1421] text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">
          Our pictures over the years
        </h2>
        <p className="font-['Futura_PT',sans-serif] font-normal text-[#0f1421]/70 text-[18px] leading-[32px]">
          {IMAGES[activeIndex].label}
        </p>
      </div>

      {/* Gallery Container */}
      <div className="relative w-full max-w-md px-4 sm:max-w-2xl md:max-w-4xl">
        {/* Main Image Card */}
        <div
          ref={containerRef}
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className=" rounded-sm p-3 sm:p-4 mx-auto max-w-sm sm:max-w-md transition-transform duration-500 hover:scale-105">
            <div className="relative overflow-hidden rounded-md aspect-[4/5]">
              <img
                src={IMAGES[activeIndex].src}
                alt={IMAGES[activeIndex].label}
                className="w-full h-full object-cover transition-opacity duration-500"
                style={{
                  filter: "none",
                }}
              />
            </div>

            {/* Polaroid Caption */}
            <div className="text-center mt-[-150px] sm:mt-[-16px]">
              <p className="font-['Futura_PT',sans-serif] font-normal text-[#0f1421] text-[18px] leading-[32px]">
                {IMAGES[activeIndex].label}
              </p>
            </div>
          </div>

          {/* Navigation Arrows - Desktop & Tablet */}
          <button
            onClick={handlePrev}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 bg-white/90 hover:bg-white shadow-lg p-3 rounded-full transition-all hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} className="text-[#0f1421]" />
          </button>

          <button
            onClick={handleNext}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 bg-white/90 hover:bg-white shadow-lg p-3 rounded-full transition-all hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight size={24} className="text-[#0f1421]" />
          </button>
        </div>

        {/* Navigation Arrows - Mobile (Below Image) */}
        <div className="flex sm:hidden justify-center space-x-4 mt-6">
          <button
            onClick={handlePrev}
            className="bg-white/90 shadow-lg p-3 rounded-full transition-all active:scale-95"
            aria-label="Previous image"
          >
            <ChevronLeft size={16} className="text-[#0f1421]" />
          </button>

          <button
            onClick={handleNext}
            className="bg-white/90 shadow-lg p-3 rounded-full transition-all active:scale-95"
            aria-label="Next image"
          >
            <ChevronRight size={16} className="text-[#0f1421]" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-6 sm:mt-8">
          {IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`
                transition-all duration-300
                ${
                  index === activeIndex
                    ? "w-6 h-1.5 bg-[#0f1421]"
                    : "w-1.5 h-1.5 bg-[#0f1421]/30 hover:bg-[#0f1421]/50"
                }
                rounded-full
              `}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>

        {/* Swipe Hint (Mobile Only) */}
        <div className="sm:hidden text-center mt-4">
          <p className="font-['Futura_PT',sans-serif] font-normal text-[#0f1421]/50 text-[18px] leading-[32px]">
            Swipe left or right to see more
          </p>
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => {
              window.location.hash = "#pictures";
            }}
            className="bg-[#0f1421] text-white px-6 py-3 rounded-lg font-['Futura_PT',sans-serif] font-medium text-[18px] leading-[32px] hover:bg-[#0f1421]/90 transition-colors shadow-lg"
          >
            View Full Gallery
          </button>
        </div>
      </div>
    </div>
  );
}