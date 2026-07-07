import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { TIMELINE_DATA } from "./sections";

interface MobileTimelineProps {
  activeYearIndex: number;
  onYearChange?: (index: number) => void;
}

export default function MobileTimeline({
  activeYearIndex,
  onYearChange,
}: MobileTimelineProps) {
  const [expandedIndex, setExpandedIndex] = useState(activeYearIndex);

  useEffect(() => {
    setExpandedIndex(activeYearIndex);
  }, [activeYearIndex]);

  const handleYearClick = (index: number) => {
    setExpandedIndex(index);
    onYearChange?.(index);
  };

  return (
    <div className="w-full h-full bg-[#0f1421] overflow-auto">
      <div className="container-responsive py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-['CRONDE:Regular',sans-serif] text-white text-3xl sm:text-4xl md:text-5xl mb-4">
            Our Journey
          </h2>
          <p className="font-['Poppins:400',sans-serif] text-[#D9C7A8] text-sm sm:text-base max-w-2xl mx-auto px-4">
            Sixty-five years of faith, ministry, and impact across Western Europe
          </p>
        </div>

        {/* Timeline List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {TIMELINE_DATA.map((item, index) => {
            const isActive = index === activeYearIndex;
            const isExpanded = index === expandedIndex;

            return (
              <div
                key={index}
                className={`
                  bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden
                  transition-all duration-300
                  ${isActive ? "ring-2 ring-[#D9C7A8]" : ""}
                `}
                style={{
                  backgroundImage: isExpanded
                    ? `linear-gradient(rgba(15, 20, 33, 0.85), rgba(15, 20, 33, 0.85)), url(${item.bgImage})`
                    : undefined,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Year Header - Always Visible */}
                <button
                  onClick={() => handleYearClick(index)}
                  className="w-full text-left px-4 sm:px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    {/* Year Badge */}
                    <div
                      className={`
                      font-['CRONDE:Regular',sans-serif] text-xl sm:text-2xl
                      ${isActive ? "text-[#D9C7A8]" : "text-white"}
                      transition-colors
                    `}
                    >
                      {item.year}
                    </div>

                    {/* Title */}
                    <div
                      className={`
                      font-['Poppins:500',sans-serif] text-sm sm:text-base
                      ${isActive ? "text-white" : "text-white/80"}
                      transition-colors
                    `}
                    >
                      {item.title}
                    </div>
                  </div>

                  {/* Expand Icon */}
                  <div className="text-[#D9C7A8]">
                    {isExpanded ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </div>
                </button>

                {/* Expanded Content */}
                <div
                  className={`
                    overflow-hidden transition-all duration-300
                    ${isExpanded ? "max-h-96" : "max-h-0"}
                  `}
                >
                  <div className="px-4 sm:px-6 pb-4 pt-2">
                    <p className="font-['Poppins:400',sans-serif] text-white/90 text-sm sm:text-base leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Scroll Indicator (Mobile Only) */}
        <div className="mt-8 text-center sm:hidden">
          <div className="inline-flex items-center space-x-2 text-[#D9C7A8]/60 text-xs">
            <ChevronDown size={16} className="animate-bounce" />
            <span>Scroll to explore all years</span>
          </div>
        </div>
      </div>
    </div>
  );
}
