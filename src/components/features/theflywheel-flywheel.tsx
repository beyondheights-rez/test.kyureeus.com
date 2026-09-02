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
    title: "ENTERPRISE CHALLENGES",
    description: "Real problems create the need.",
    themeColor: "#0ea5e9", // Teal/Sky Blue
    bgColor: "#f0f9ff",     // Tint background
    href: "/why-it-matters",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  {
    title: "CAPABILITY DEVELOPMENT",
    description: "People build the capability to solve them.",
    themeColor: "#f97316", // Orange
    bgColor: "#fff7ed",     // Tint background
    href: "/bootcamps",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-4.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-4.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2z" />
      </svg>
    )
  },
  {
    title: "EXECUTION",
    description: "Capability is applied to real work.",
    themeColor: "#f43f5e", // Red/Coral
    bgColor: "#fff1f2",     // Tint background
    href: "/executive-learning-architecture",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    )
  },
  {
    title: "RESULTS",
    description: "Measurable results are achieved.",
    themeColor: "#8b5cf6", // Purple
    bgColor: "#f5f3ff",     // Tint background
    href: "/why-it-matters",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    )
  },
  {
    title: "EVIDENCE",
    description: "Outcomes generate evidence and insight.",
    themeColor: "#2563eb", // Blue
    bgColor: "#eff6ff",     // Tint background
    href: "/how-we-teach",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    )
  },
  {
    title: "ARCHITECTURE IMPROVEMENT",
    description: "Evidence refines the capability architecture.",
    themeColor: "#10b981", // Emerald/Green
    bgColor: "#ecfdf5",     // Tint background
    href: "/capability-architecture",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    )
  }
];

export function TheFlywheelPageFlywheel() {
  const router = useRouter();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const size = 800;
  const cx = size / 2;
  const cy = size / 2;

  const innerRadius = 145;
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
      className="relative w-full aspect-square max-w-[760px] qhd:max-w-[950px] uhd:max-w-[1250px] flex items-center justify-center select-none mx-auto"
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

          const rMid = 240;
          const xContent = cx + rMid * Math.cos(radMid);
          const yContent = cy + rMid * Math.sin(radMid);

          const contentW = 190;
          const contentH = 140;
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
                  filter: isHovered ? "brightness(0.97)" : "none"
                }}
              />
              <foreignObject
                x={xOffset}
                y={yOffset}
                width={contentW}
                height={contentH}
                className="overflow-visible select-none pointer-events-none"
              >
                <div className="w-full h-full flex flex-col items-center justify-center text-center p-2">
                  <div
                    className="w-[52px] h-[52px] rounded-full flex items-center justify-center mb-3 bg-white transition-transform duration-300 ease-out shrink-0"
                    style={{
                      border: `2.5px solid ${seg.themeColor}`,
                      transform: isHovered ? "scale(1.1)" : "scale(1)",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)"
                    }}
                  >
                    <div
                      className="w-6 h-6 flex items-center justify-center"
                      style={{
                        stroke: seg.themeColor,
                        fill: "none"
                      }}
                    >
                      {seg.icon}
                    </div>
                  </div>
                  <div className="font-outfit text-[11.5px] font-bold tracking-[0.04em] text-[#0f172a] mb-1.5 uppercase leading-[1.3] text-center mx-auto max-w-[170px]">
                    {seg.title}
                  </div>
                  <div className="text-[9.5px] leading-[1.4] text-[#64748b] max-w-[175px] font-sans font-normal text-center mx-auto">
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
            r={130}
            className="fill-[#1e2229] stroke-white stroke-[3.5px] transition-all duration-300 group-hover:stroke-[#CF5A30] group-hover:scale-[1.02]"
            style={{
              transformOrigin: `${cx}px ${cy}px`,
              filter: "drop-shadow(0 10px 25px rgba(30, 34, 41, 0.25))"
            }}
          />
          <foreignObject
            x={cx - 130}
            y={cy - 130}
            width={260}
            height={260}
            className="overflow-visible select-none pointer-events-none"
          >
            <div className="w-full h-full flex flex-col items-center justify-center text-center p-5 text-white">
              <div className="font-outfit text-[14px] font-bold tracking-[0.08em] text-white uppercase leading-[1.35] mb-1.5 max-w-[180px] text-center mx-auto">
                THE KYUREEUS FLYWHEEL
              </div>
              <div className="font-sans text-[9.5px] tracking-[0.02em] text-[#d1d5db] font-normal leading-[1.4] max-w-[160px] text-center mx-auto">
                Every cycle makes the enterprise stronger.
              </div>
            </div>
          </foreignObject>
        </g>
      </svg>
    </div>
  );
}
