"use client";

import React from "react";
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
    title: "Real Problems",
    themeColor: "#059669", // Emerald Green
    bgColor: "#ecfdf5",     // Tint background
    href: "/why-it-matters",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    )
  },
  {
    title: "Active Architecture",
    themeColor: "#d97706", // Amber
    bgColor: "#fffbeb",     // Tint background
    href: "/capability-architecture",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    )
  },
  {
    title: "Adversarial Review",
    themeColor: "#dc2626", // Red
    bgColor: "#fef2f2",     // Tint background
    href: "/bootcamps/cyber-security",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    )
  },
  {
    title: "Production Deploy",
    themeColor: "#7c3aed", // Violet
    bgColor: "#f5f3ff",     // Tint background
    href: "/executive-learning-architecture",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M4.5 16.5c-1.5 1.26-2.5 3.19-2.5 5.5h20c0-2.31-1-4.24-2.5-5.5" />
        <path d="M12 2L2 9l10 7 10-7Z" />
        <line x1="12" y1="2" x2="12" y2="16" />
      </svg>
    )
  },
  {
    title: "Evidence Generated",
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

        {/* 2. Static Segments */}
        {SEGMENTS.map((seg, index) => {
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

          const rMid = 240;
          const xContent = cx + rMid * Math.cos(radMid);
          const yContent = cy + rMid * Math.sin(radMid);

          const contentW = 180;
          const contentH = 140;
          const xOffset = (xContent - contentW / 2).toFixed(3);
          const yOffset = (yContent - contentH / 2).toFixed(3);

          return (
            <g
              key={index}
              role="link"
              tabIndex={0}
              aria-label={`Navigate to ${seg.title}`}
              className="cursor-pointer outline-none"
              style={{
                transform: "translate(0px, 0px) scale(1)",
                transformOrigin: `${cx}px ${cy}px`,
                filter: "drop-shadow(0 6px 15px rgba(0, 0, 0, 0.05))"
              }}
              onClick={() => handleNavigate(seg.href)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleNavigate(seg.href);
                }
              }}
            >
              {/* Segment background path */}
              <path
                d={pathData}
                fill={seg.bgColor}
                className="stroke-none"
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
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-2 bg-white shadow-xs shrink-0"
                    style={{
                      border: `2px solid ${seg.themeColor}`,
                      color: seg.themeColor
                    }}
                  >
                    {seg.icon}
                  </div>

                  {/* Title */}
                  <div className="font-outfit text-[12px] sm:text-[13px] font-bold tracking-wider text-[#0f172a] uppercase leading-tight px-1">
                    {seg.title}
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
          className="cursor-pointer outline-none"
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
            className="fill-[#0a0e1a] stroke-[#CF5A30] stroke-[3.5px]"
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
                KYUREEUS ENGINE
              </div>
              <div className="font-sans text-[10px] tracking-wide text-[#94a3b8] font-medium">
                Continuous Capability Flywheel
              </div>
            </div>
          </foreignObject>
        </g>
      </svg>
    </div>
  );
}
