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
    title: "Real Problems from Enterprises",
    themeColor: "#0ea5e9", // Teal/Sky Blue
    bgColor: "#f0f9ff",     // Tint background
    href: "/why-it-matters",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    )
  },
  {
    title: "Capability Architectures",
    themeColor: "#f97316", // Orange
    bgColor: "#fff7ed",     // Tint background
    href: "/capability-architecture",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    )
  },
  {
    title: "Real Solutions Built",
    themeColor: "#f43f5e", // Red/Coral
    bgColor: "#fff1f2",     // Tint background
    href: "/bootcamps",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    )
  },
  {
    title: "Measurable Evidence",
    themeColor: "#8b5cf6", // Purple
    bgColor: "#f5f3ff",     // Tint background
    href: "/how-we-teach",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    )
  },
  {
    title: "Enterprise Outcomes",
    themeColor: "#2563eb", // Blue
    bgColor: "#eff6ff",     // Tint background
    href: "/why-it-matters",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M23 6l-9.5 9.5-5-5L1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    )
  },
  {
    title: "Stronger Builders",
    themeColor: "#65a30d", // Olive/Yellow-Green
    bgColor: "#f7fee7",     // Tint background
    href: "/about-us",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  }
];

export function WhyKyureeusFlywheel() {
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
          aria-label="Navigate to Why Kyureeus"
          className="cursor-pointer group outline-none"
          onClick={() => handleNavigate("/whykyureeus")}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleNavigate("/whykyureeus");
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
                CAPABILITY CREATES ENTERPRISE VALUE.
              </div>
            </div>
          </foreignObject>
        </g>
      </svg>
    </div>
  );
}
