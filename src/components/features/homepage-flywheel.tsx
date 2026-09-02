"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface Segment {
  title: string;
  description: string;
  themeColor: string;
  bgColor: string;
  href: string;
  icon: React.ReactNode;
}

const SEGMENTS: Segment[] = [
  {
    title: "REAL PROBLEMS",
    description: "Identify systemic gaps & commercial pain points",
    themeColor: "#10b981", // Emerald Green
    bgColor: "#f0fdf4",     // Tint background
    href: "/why-it-matters",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    )
  },
  {
    title: "BUILD VALUABLE SOLUTIONS",
    description: "Design practical AI-driven enterprise apps",
    themeColor: "#f59e0b", // Orange/Amber
    bgColor: "#fff7ed",     // Tint background
    href: "/bootcamps",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .6 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
        <line x1="9" y1="18" x2="15" y2="18" />
        <line x1="10" y1="22" x2="14" y2="22" />
      </svg>
    )
  },
  {
    title: "DEPLOY THEM IN THE WORLD",
    description: "Ship production-ready code to environments",
    themeColor: "#f43f5e", // Rose/Pink
    bgColor: "#fff1f2",     // Tint background
    href: "/executive-learning-architecture",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M4.5 16.5c-1.5 1.26-2.5 3.19-2.5 5.5h20c0-2.31-1-4.24-2.5-5.5" />
        <path d="M12 2L2 9l10 7 10-7Z" />
        <line x1="12" y1="2" x2="12" y2="16" />
      </svg>
    )
  },
  {
    title: "PRODUCE MEASURABLE OUTCOMES",
    description: "Validate commercial value and business impact",
    themeColor: "#d946ef", // Magenta
    bgColor: "#fdf4ff",     // Tint background
    href: "/why-it-matters",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    )
  },
  {
    title: "CAPTURE EVIDENCE AND INSIGHT",
    description: "Document learnings, telemetry & user signals",
    themeColor: "#2563eb", // Blue
    bgColor: "#eff6ff",     // Tint background
    href: "/how-we-teach",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    )
  },
  {
    title: "IMPROVE THE CAPABILITY ARCHITECTURE",
    description: "Upgrade models, reusable modules & platform",
    themeColor: "#0ea5e9", // Sky Blue
    bgColor: "#f0f9ff",     // Tint background
    href: "/capability-architecture",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    )
  },
  {
    title: "DEVELOP STRONGER BUILDERS & LEADERS",
    description: "Upskill the workforce through targeted growth",
    themeColor: "#8b5cf6", // Violet/Purple
    bgColor: "#f5f3ff",     // Tint background
    href: "/about-us",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  {
    title: "SOLVE BIGGER PROBLEMS",
    description: "Tackle advanced automation & strategic objectives",
    themeColor: "#059669", // Green
    bgColor: "#ecfdf5",     // Tint background
    href: "/the-flywheel",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8l4 4-4 4M8 12h8" />
      </svg>
    )
  }
];

export function HomepageFlywheel() {
  const router = useRouter();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const size = 800;
  const cx = size / 2;
  const cy = size / 2;

  const innerRadius = 155;
  const outerRadius = 338;
  const outerRingRadius = 365;
  const numSegments = SEGMENTS.length;
  const anglePerSegment = 360 / numSegments;
  const gapDegrees = 4.5; // Gap between segments in degrees

  const handleNavigate = (href: string) => {
    router.push(href);
  };

  return (
    <div 
      className="relative w-full aspect-square max-w-[680px] qhd:max-w-[850px] uhd:max-w-[1100px] flex items-center justify-center select-none mx-auto"
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
        {/* 1. Spinning Outer Ring Line & Arrowheads */}
        <g className="outer-ring-group-spin">
          <circle
            cx={cx}
            cy={cy}
            r={outerRingRadius}
            className="fill-none stroke-[#090d16] stroke-[1.5px]"
          />
          {SEGMENTS.map((_, i) => {
            const arrowAngle = -90 + (i * anglePerSegment) + (anglePerSegment / 2);
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
          // Mid angle of the segment (Top-Right-1 starts offset by half a segment)
          const midAngle = -90 + (index * anglePerSegment) + (anglePerSegment / 2);
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

          const rMid = 250;
          const xContent = cx + rMid * Math.cos(radMid);
          const yContent = cy + rMid * Math.sin(radMid);

          const contentW = 190;
          const contentH = 150;
          const xOffset = (xContent - contentW / 2).toFixed(3);
          const yOffset = (yContent - contentH / 2).toFixed(3);

          const isHovered = hoveredIndex === index;
          const pushDist = 12;
          const tx = (Math.cos(radMid) * pushDist).toFixed(3);
          const ty = (Math.sin(radMid) * pushDist).toFixed(3);

          const transformStyle = isHovered
            ? `translate(${tx}px, ${ty}px) scale(1.02)`
            : "translate(0px, 0px) scale(1)";

          return (
            <g
              key={index}
              role="link"
              tabIndex={0}
              aria-label={`Navigate to ${seg.title}`}
              className="cursor-pointer transition-all duration-400 ease-out outline-none"
              style={{
                transform: transformStyle,
                transformOrigin: `${cx}px ${cy}px`,
                filter: isHovered
                  ? "drop-shadow(0 15px 30px rgba(0,0,0,0.1))"
                  : "drop-shadow(0 6px 12px rgba(0,0,0,0.04))"
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
              <path
                d={pathData}
                className="transition-colors duration-300 stroke-none"
                fill={seg.bgColor}
                style={{
                  filter: isHovered ? "brightness(0.98)" : "none"
                }}
              />
              <foreignObject
                x={xOffset}
                y={yOffset}
                width={contentW}
                height={contentH}
                className="overflow-visible select-none pointer-events-none"
              >
                <div className="w-full h-full flex flex-col items-center justify-center text-center p-1.5">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center mb-2.5 bg-white transition-transform duration-300 ease-out"
                    style={{
                      border: `2px solid ${seg.themeColor}`,
                      transform: isHovered ? "scale(1.1)" : "scale(1)",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)"
                    }}
                  >
                    <div
                      className="w-5 h-5 flex items-center justify-center"
                      style={{
                        stroke: seg.themeColor,
                        fill: "none"
                      }}
                    >
                      {seg.icon}
                    </div>
                  </div>
                  <div className="font-outfit text-[11px] font-bold tracking-[0.04em] text-[#0f172a] mb-1.5 leading-tight uppercase">
                    {seg.title}
                  </div>
                  <div className="text-[9px] leading-[1.35] text-[#64748b] max-w-[165px] font-sans font-normal">
                    {seg.description}
                  </div>
                </div>
              </foreignObject>
            </g>
          );
        })}

        {/* 3. Center Circle (System Core) */}
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
          {/* Outer Ring boundary */}
          <circle
            cx={cx}
            cy={cy}
            r={innerRadius + 4}
            className="fill-none stroke-white/15 stroke-[1px]"
          />
          {/* Core circle */}
          <circle
            cx={cx}
            cy={cy}
            r={140}
            className="fill-[#0a0e1a] stroke-white stroke-[1.5px] transition-all duration-300 group-hover:stroke-[#d85d2b] group-hover:scale-[1.02]"
            style={{
              transformOrigin: `${cx}px ${cy}px`,
              filter: "drop-shadow(0 10px 25px rgba(10, 14, 26, 0.25))"
            }}
          />
          <foreignObject
            x={cx - 140}
            y={cy - 140}
            width={280}
            height={280}
            className="overflow-visible select-none pointer-events-none"
          >
            <div className="w-full h-full flex flex-col items-center justify-center text-center p-6 text-white">
              {/* SVG Spark/Star Icon */}
              <svg className="w-[18px] h-[18px] mb-2 fill-[#d85d2b]" viewBox="0 0 24 24">
                <path d="M12 2L14.85 9.15L22 12L14.85 14.85L12 22L9.15 14.85L2 12L9.15 9.15Z" />
              </svg>
              
              <div className="font-outfit text-[9px] font-bold tracking-[0.1em] text-[#d85d2b] uppercase">
                SYSTEM CORE
              </div>
              
              <div className="w-8 h-[1px] bg-white/20 my-2" />
              
              <div className="font-outfit text-[11px] font-bold tracking-[0.05em] leading-[1.4] uppercase text-white max-w-[210px]">
                BUILD PEOPLE WHO CAN CREATE, OPERATE AND COMPOUND INTELLIGENT ENTERPRISES.
              </div>
              
              <div className="w-8 h-[1px] bg-white/20 my-2" />
              
              <div className="font-outfit text-[8px] font-semibold tracking-[0.08em] text-[#94a3b8] uppercase">
                CONTINUOUS PROGRESSION
              </div>
            </div>
          </foreignObject>
        </g>
      </svg>
    </div>
  );
}
