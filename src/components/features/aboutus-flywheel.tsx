"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface Segment {
  title: string;
  description: string;
  themeColor: string;
  href: string;
  icon: React.ReactNode;
}

const SEGMENTS: Segment[] = [
  {
    title: "CAPABILITY ARCHITECTURE",
    description: "Design and evolve the systems, tools and frameworks that power growth",
    themeColor: "#0ea5e9", // Sky Blue
    href: "/capability-architecture",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
      </svg>
    )
  },
  {
    title: "BOOTCAMPS & PATHWAYS",
    description: "Structured learning journeys that build deep technical capability",
    themeColor: "#f97316", // Orange
    href: "/bootcamps",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    )
  },
  {
    title: "ENTERPRISE PROJECTS",
    description: "Real-world project engagements that create value and build skill",
    themeColor: "#e11d48", // Crimson/Rose
    href: "/executive-learning-architecture",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    )
  },
  {
    title: "OPERATING MODELS",
    description: "Proven frameworks and operating patterns for intelligent execution",
    themeColor: "#8b5cf6", // Purple
    href: "/how-we-teach",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
        <line x1="4" y1="21" x2="4" y2="14" />
        <line x1="4" y1="10" x2="4" y2="3" />
        <line x1="12" y1="21" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12" y2="3" />
        <line x1="20" y1="21" x2="20" y2="16" />
        <line x1="20" y1="12" x2="20" y2="3" />
        <line x1="1" y1="14" x2="7" y2="14" />
        <line x1="9" y1="8" x2="15" y2="8" />
        <line x1="17" y1="16" x2="23" y2="16" />
      </svg>
    )
  },
  {
    title: "MEASUREMENT & EVIDENCE",
    description: "Rigorous tracking of outcomes, impact, and capability growth",
    themeColor: "#2563eb", // Blue
    href: "/why-it-matters",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
        <path d="M22 12A10 10 0 0 0 12 2v10z" />
      </svg>
    )
  },
  {
    title: "CONTINUOUS COMPOUNDING",
    description: "Systematic reinvestment of learnings to accelerate capability",
    themeColor: "#10b981", // Emerald Green
    href: "/the-flywheel",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    )
  }
];

export function AboutUsFlywheel() {
  const router = useRouter();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const size = 800;
  const cx = size / 2;
  const cy = size / 2;

  const innerRadius = 142;
  const outerRadius = 330;
  const outerRingRadius = 360;
  const numSegments = SEGMENTS.length;
  const anglePerSegment = 360 / numSegments;
  const gapDegrees = 5.5; // Gap between segments in degrees

  const handleNavigate = (href: string) => {
    router.push(href);
  };

  return (
    <div 
      className="relative w-full aspect-square max-w-[340px] sm:max-w-[460px] md:max-w-[560px] lg:max-w-[620px] xl:max-w-[680px] qhd:max-w-[850px] uhd:max-w-[1100px] flex items-center justify-center select-none mx-auto"
      onTouchStart={() => setHoveredIndex(null)}
    >
      <style>{`
        @keyframes spin-clockwise {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .outer-ring-group-spin {
          transform-origin: 400px 400px;
          animation: spin-clockwise 30s linear infinite;
        }
      `}</style>

      <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full overflow-visible">
        {/* 1. Spinning Outer Ring Line & Arrows */}
        <g className="outer-ring-group-spin">
          <circle
            cx={cx}
            cy={cy}
            r={outerRingRadius}
            className="fill-none stroke-[#090d16] stroke-[1.5px]"
          />
          {SEGMENTS.map((_, i) => {
            const arrowAngle = -90 + (i * anglePerSegment);
            const radArrow = (arrowAngle * Math.PI) / 180;
            const ax = (cx + outerRingRadius * Math.cos(radArrow)).toFixed(3);
            const ay = (cy + outerRingRadius * Math.sin(radArrow)).toFixed(3);

            return (
              <g key={i} transform={`translate(${ax}, ${ay}) rotate(${arrowAngle + 180})`}>
                <polygon points="0,-8 6,5 -6,5" className="fill-[#090d16]" />
              </g>
            );
          })}
        </g>

        {/* 2. Segments */}
        {SEGMENTS.map((seg, index) => {
          // Mid angle of the segment (Top starts at -90 deg)
          const midAngle = -90 + (index * anglePerSegment);
          const startAngle = midAngle - (anglePerSegment / 2) + (gapDegrees / 2);
          const endAngle = midAngle + (anglePerSegment / 2) - (gapDegrees / 2);

          const radStart = (startAngle * Math.PI) / 180;
          const radEnd = (endAngle * Math.PI) / 180;
          const radMid = (midAngle * Math.PI) / 180;

          const xOuterStart = (cx + outerRadius * Math.cos(radStart)).toFixed(3);
          const yOuterStart = (cy + outerRadius * Math.sin(radStart)).toFixed(3);
          const xOuterEnd = (cx + outerRadius * Math.cos(radEnd)).toFixed(3);
          const yOuterEnd = (cy + outerRadius * Math.sin(radEnd)).toFixed(3);

          const xInnerStart = (cx + innerRadius * Math.cos(radStart)).toFixed(3);
          const yInnerStart = (cy + innerRadius * Math.sin(radStart)).toFixed(3);
          const xInnerEnd = (cx + innerRadius * Math.cos(radEnd)).toFixed(3);
          const yInnerEnd = (cy + innerRadius * Math.sin(radEnd)).toFixed(3);

          const pathData = [
            `M ${xInnerStart} ${yInnerStart}`,
            `L ${xOuterStart} ${yOuterStart}`,
            `A ${outerRadius} ${outerRadius} 0 0 1 ${xOuterEnd} ${yOuterEnd}`,
            `L ${xInnerEnd} ${yInnerEnd}`,
            `A ${innerRadius} ${innerRadius} 0 0 0 ${xInnerStart} ${yInnerStart}`,
            `Z`
          ].join(" ");

          // Content centroid precisely centered in wedge
          const rMid = 240;
          const xContent = cx + rMid * Math.cos(radMid);
          const yContent = cy + rMid * Math.sin(radMid);

          const contentW = 210;
          const contentH = 160;
          const xOffset = xContent - contentW / 2;
          const yOffset = yContent - contentH / 2;

          // Radial push translation on hover
          const pushDist = 14;
          const tx = hoveredIndex === index ? Math.cos(radMid) * pushDist : 0;
          const ty = hoveredIndex === index ? Math.sin(radMid) * pushDist : 0;
          const isHovered = hoveredIndex === index;

          return (
            <g
              key={index}
              role="link"
              tabIndex={0}
              aria-label={`Navigate to ${seg.title}`}
              className="cursor-pointer transition-all duration-300 outline-none"
              style={{
                transform: `translate(${tx}px, ${ty}px) scale(${isHovered ? 1.02 : 1})`,
                transformOrigin: `${cx}px ${cy}px`,
                filter: isHovered
                  ? "drop-shadow(0 15px 35px rgba(0, 0, 0, 0.12))"
                  : "drop-shadow(0 6px 15px rgba(0, 0, 0, 0.05))",
                transition: "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), filter 0.4s cubic-bezier(0.25, 1, 0.5, 1)"
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleNavigate(seg.href)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleNavigate(seg.href);
                }
              }}
              onTouchStart={(e) => {
                e.stopPropagation();
                setHoveredIndex(index);
              }}
            >
              {/* Segment background path */}
              <path
                d={pathData}
                fill={isHovered ? "#fafafa" : "#ffffff"}
                className="transition-colors duration-300"
              />

              {/* Segment HTML Content */}
              <foreignObject
                x={xOffset}
                y={yOffset}
                width={contentW}
                height={contentH}
                className="pointer-events-none"
              >
                <div className="w-full h-full flex flex-col items-center justify-center text-center p-2">
                  {/* Icon Circle Container */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-2.5 bg-white transition-all duration-300 shadow-xs shrink-0"
                    style={{
                      border: `2px solid ${seg.themeColor}`,
                      color: seg.themeColor,
                      transform: isHovered ? "scale(1.1)" : "scale(1)"
                    }}
                  >
                    {seg.icon}
                  </div>

                  {/* Title */}
                  <div className="font-outfit text-[11px] sm:text-[11.5px] font-bold tracking-wider text-[#0f172a] uppercase leading-tight mb-1 px-1">
                    {seg.title}
                  </div>

                  {/* Description */}
                  <div className="font-sans text-[9px] sm:text-[9.5px] leading-snug text-[#64748b] max-w-[170px] font-normal">
                    {seg.description}
                  </div>
                </div>
              </foreignObject>
            </g>
          );
        })}

        {/* 3. Center Circle */}
        <g
          role="link"
          tabIndex={0}
          aria-label="Navigate to The Flywheel"
          className="cursor-pointer group outline-none"
          onClick={() => handleNavigate("/the-flywheel")}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleNavigate("/the-flywheel");
            }
          }}
        >
          <circle
            cx={cx}
            cy={cy}
            r={125}
            className="fill-[#0a0e1a] stroke-[#f97316] stroke-[3.5px] transition-all duration-300 group-hover:stroke-white group-hover:scale-[1.02]"
            style={{
              transformOrigin: `${cx}px ${cy}px`,
              filter: "drop-shadow(0 10px 20px rgba(10, 14, 26, 0.15))"
            }}
          />

          <foreignObject
            x={cx - 125}
            y={cy - 125}
            width={250}
            height={250}
            className="pointer-events-none"
          >
            <div className="w-full h-full flex flex-col items-center justify-center text-center p-5">
              <div className="font-outfit text-[14px] font-bold tracking-wider text-white uppercase leading-snug mb-1">
                OUR CAPABILITY ECOSYSTEM
              </div>
              <div className="font-sans text-[10px] tracking-wide text-[#94a3b8] font-medium">
                Enterprise Capability Engine
              </div>
            </div>
          </foreignObject>
        </g>
      </svg>
    </div>
  );
}
