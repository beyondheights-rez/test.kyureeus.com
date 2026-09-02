"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface Segment {
  title: string;
  themeColor: string;
  bgColor: string;
  href: string;
  icon: React.ReactNode;
}

const SEGMENTS: Segment[] = [
  {
    title: "UNDERSTAND",
    themeColor: "#137333", // Green
    bgColor: "#E6F4EA",     // Tint background
    href: "/why-it-matters",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-4.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-4.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2z" />
      </svg>
    )
  },
  {
    title: "DESIGN",
    themeColor: "#C45100", // Orange
    bgColor: "#FDF2E9",     // Tint background
    href: "/capability-architecture",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="m12 19-7-7 3.86-3.86a6 6 0 0 1 8.49 8.49L12 19Z" />
        <path d="m9 11 4 4" />
        <path d="m5 19 3-3" />
        <path d="m14 4 6 6" />
      </svg>
    )
  },
  {
    title: "BUILD",
    themeColor: "#C5221F", // Red
    bgColor: "#FCE8E6",     // Tint background
    href: "/bootcamps",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
      </svg>
    )
  },
  {
    title: "IMPROVE",
    themeColor: "#7B1FA2", // Purple
    bgColor: "#F3E8FD",     // Tint background
    href: "/the-flywheel",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    )
  },
  {
    title: "DEPLOY",
    themeColor: "#3F51B5", // Indigo/Blue
    bgColor: "#E8EAF6",     // Tint background
    href: "/executive-learning-architecture",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 8.58" />
        <path d="m13 11-4 6h3l-3 5 7-7h-3z" />
      </svg>
    )
  },
  {
    title: "REPEAT",
    themeColor: "#827717", // Olive
    bgColor: "#F9F9E0",     // Tint background
    href: "/how-we-teach",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
        <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
        <path d="M16 16h5v5" />
      </svg>
    )
  }
];

export function HowWeTeachFlywheel() {
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

          const rMid = 240;
          const xContent = cx + rMid * Math.cos(radMid);
          const yContent = cy + rMid * Math.sin(radMid);

          const contentW = 180;
          const contentH = 135;
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
                  <div className="font-outfit text-[13px] font-bold tracking-[0.03em] text-[#0f172a] leading-[1.35] uppercase max-w-[155px] text-center mx-auto">
                    {seg.title}
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
          aria-label="Navigate to How We Teach"
          className="cursor-pointer group outline-none"
          onClick={() => handleNavigate("/how-we-teach")}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleNavigate("/how-we-teach");
            }
          }}
        >
          <circle
            cx={cx}
            cy={cy}
            r={130}
            className="fill-[#0a0e1a] stroke-white stroke-[3.5px] transition-all duration-300 group-hover:stroke-[#CF5A30] group-hover:scale-[1.02]"
            style={{
              transformOrigin: `${cx}px ${cy}px`,
              filter: "drop-shadow(0 10px 25px rgba(10, 14, 26, 0.25))"
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
              <div className="flex flex-col items-center mb-2.5">
                {/* Custom Kyureeus 'K' Logo Shape */}
                <svg className="w-9 h-9 mb-1.5 fill-white" viewBox="0 0 24 24">
                  <path d="M6 3v18h3v-7.5l6 7.5h4l-7-8.75 6.5-9.25h-4l-5.5 7.75V3Z" />
                </svg>
                <div className="font-outfit text-[11.5px] font-bold tracking-[0.12em] text-white uppercase text-center">
                  KYUREEUS
                </div>
                <div className="text-[8px] tracking-[0.08em] text-[#94a3b8] uppercase font-semibold mt-0.5 text-center">
                  A Rezilyens Company
                </div>
              </div>
              
              <div className="w-10 h-[1px] bg-white/15 my-2.5 mx-auto" />
              
              <div className="font-outfit text-[13.5px] font-bold tracking-[0.05em] leading-[1.4] uppercase text-white max-w-[190px] text-center mx-auto">
                BUILDING PEOPLE WHO BUILD THE FUTURE
              </div>
            </div>
          </foreignObject>
        </g>
      </svg>
    </div>
  );
}
