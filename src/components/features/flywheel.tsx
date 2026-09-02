"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Lightbulb, 
  Rocket, 
  BarChart3, 
  Database, 
  Settings, 
  Users, 
  Target
} from "lucide-react";
import { cn } from "@/lib/utils/cn";

interface FlywheelSegment {
  id: string;
  number: string;
  title: string;
  description: string;
  shortDesc: string;
  icon: React.ComponentType<{ className?: string }>;
  wedgeBg: string;
  hoverWedgeBg: string;
  textColor: string;
  badgeColor: string;
}

const FLYWHEEL_DATA: FlywheelSegment[] = [
  {
    id: "real-problems",
    number: "01",
    title: "REAL PROBLEMS",
    description: "Identify systemic gaps & commercial pain points.",
    shortDesc: "Identify systemic gaps & commercial pain points",
    icon: Search,
    wedgeBg: "#F0FDF4",
    hoverWedgeBg: "#DCFCE7",
    textColor: "text-emerald-700",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-400",
  },
  {
    id: "build-valuable-solutions",
    number: "02",
    title: "BUILD VALUABLE SOLUTIONS",
    description: "Design practical, user-centric apps.",
    shortDesc: "Design practical, user-centric apps",
    icon: Lightbulb,
    wedgeBg: "#FFFBEB",
    hoverWedgeBg: "#FEF3C7",
    textColor: "text-amber-700",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-400",
  },
  {
    id: "deploy-them",
    number: "03",
    title: "DEPLOY THEM IN THE WORLD",
    description: "Ship production-ready code to environments.",
    shortDesc: "Ship production-ready code to environments",
    icon: Rocket,
    wedgeBg: "#FEF2F2",
    hoverWedgeBg: "#FEE2E2",
    textColor: "text-red-700",
    badgeColor: "bg-red-100 text-red-800 border-red-400",
  },
  {
    id: "produce-measurable-outcomes",
    number: "04",
    title: "PRODUCE MEASURABLE OUTCOMES",
    description: "Validate commercial value & business impact.",
    shortDesc: "Validate commercial value & business impact",
    icon: BarChart3,
    wedgeBg: "#FAF5FF",
    hoverWedgeBg: "#F3E8FF",
    textColor: "text-purple-700",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-400",
  },
  {
    id: "capture-evidence",
    number: "05",
    title: "CAPTURE EVIDENCE AND INSIGHT",
    description: "Document learnings, telemetry & user signals.",
    shortDesc: "Document learnings, telemetry & user signals",
    icon: Database,
    wedgeBg: "#ECFEFF",
    hoverWedgeBg: "#CFFAFE",
    textColor: "text-cyan-700",
    badgeColor: "bg-cyan-100 text-cyan-800 border-cyan-400",
  },
  {
    id: "improve-architecture",
    number: "06",
    title: "IMPROVE THE CAPABILITY ARCHITECTURE",
    description: "Upgrade models, reusable modules & platform.",
    shortDesc: "Upgrade models, reusable modules & platform",
    icon: Settings,
    wedgeBg: "#FEFCE8",
    hoverWedgeBg: "#FEF9C3",
    textColor: "text-yellow-700",
    badgeColor: "bg-yellow-100 text-yellow-800 border-yellow-400",
  },
  {
    id: "develop-builders",
    number: "07",
    title: "DEVELOP STRONGER BUILDERS & LEADERS",
    description: "Upskill the workforce through targeted growth.",
    shortDesc: "Upskill the workforce through targeted growth",
    icon: Users,
    wedgeBg: "#EFF6FF",
    hoverWedgeBg: "#DBEAFE",
    textColor: "text-indigo-700",
    badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-400",
  },
  {
    id: "solve-bigger-problems",
    number: "08",
    title: "SOLVE BIGGER PROBLEMS",
    description: "Tackle advanced automation & strategic objectives.",
    shortDesc: "Tackle advanced automation & strategic objectives",
    icon: Target,
    wedgeBg: "#F0F9FF",
    hoverWedgeBg: "#E0F2FE",
    textColor: "text-sky-700",
    badgeColor: "bg-sky-100 text-sky-800 border-sky-400",
  },
];

export function Flywheel() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // SVG dimensions
  const size = 580;
  const center = size / 2;
  const R = 275; // Outer radius
  const r = 160; // Inner radius

  // Calculate SVG Wedge Path with clean gaps between cards
  const getWedgePath = (index: number) => {
    const startAngleDeg = index * 45 - 67.5;
    const endAngleDeg = (index + 1) * 45 - 67.5;

    const gap = 1.2;
    const sRad = ((startAngleDeg + gap) * Math.PI) / 180;
    const eRad = ((endAngleDeg - gap) * Math.PI) / 180;

    const xOs = center + R * Math.cos(sRad);
    const yOs = center + R * Math.sin(sRad);
    const xOe = center + R * Math.cos(eRad);
    const yOe = center + R * Math.sin(eRad);

    const xIs = center + r * Math.cos(sRad);
    const yIs = center + r * Math.sin(sRad);
    const xIe = center + r * Math.cos(eRad);
    const yIe = center + r * Math.sin(eRad);

    return `M ${xOs} ${yOs} A ${R} ${R} 0 0 1 ${xOe} ${yOe} L ${xIe} ${yIe} A ${r} ${r} 0 0 0 ${xIs} ${yIs} Z`;
  };

  return (
    <div className="relative flex items-center justify-center select-none w-[340px] h-[340px] xs:w-[420px] xs:h-[420px] sm:w-[500px] sm:h-[500px] md:w-[580px] md:h-[580px]">
      
      {/* 1. Outer Rotational Arrow Orbit Ring */}
      <div className="absolute inset-0 -z-10 rounded-full border border-black/15 p-1.5 animate-[spin_120s_linear_infinite]">
        <svg viewBox="0 0 100 100" className="w-full h-full text-black/60">
          <circle cx="50" cy="50" r="48.5" fill="none" stroke="currentColor" strokeWidth="0.6" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <polygon 
              key={angle}
              points="50,0.5 53,4.5 47,4.5" 
              fill="currentColor" 
              transform={`rotate(${angle} 50 50)`} 
            />
          ))}
        </svg>
      </div>

      {/* 2. Interactive SVG Wedges with Pastel Fill Colors matching Image 2 */}
      <svg 
        viewBox={`0 0 ${size} ${size}`} 
        className="w-full h-full drop-shadow-md"
      >
        <g>
          {FLYWHEEL_DATA.map((segment, idx) => {
            const isHovered = hoveredIdx === idx;
            const path = getWedgePath(idx);

            return (
              <path
                key={segment.id}
                d={path}
                fill={isHovered ? segment.hoverWedgeBg : segment.wedgeBg}
                stroke="#1C1C1C"
                strokeWidth="1.5"
                className="cursor-pointer transition-colors duration-200"
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              />
            );
          })}
        </g>
      </svg>

      {/* 3. HTML Content Overlay Radially Positioned Over Each Pastel Wedge */}
      {FLYWHEEL_DATA.map((segment, idx) => {
        const labelR = (R + r) / 2;
        const angleRad = ((idx * 45 - 45) * Math.PI) / 180;
        
        const xPct = 50 + (labelR / (size / 2)) * 50 * Math.cos(angleRad);
        const yPct = 50 + (labelR / (size / 2)) * 50 * Math.sin(angleRad);

        const IconComponent = segment.icon;
        const isHovered = hoveredIdx === idx;

        return (
          <div
            key={segment.id}
            style={{
              position: "absolute",
              left: `${xPct}%`,
              top: `${yPct}%`,
              transform: "translate(-50%, -50%)",
            }}
            className="pointer-events-none flex flex-col items-center justify-center text-center w-[22%] max-w-[110px]"
          >
            {/* Stage Number Circular Badge */}
            <div 
              className={cn(
                "flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full text-[9px] sm:text-[10px] font-extrabold border shadow-xs mb-1",
                segment.badgeColor
              )}
            >
              {segment.number}
            </div>

            {/* Circular Icon Container matching Image 2 */}
            <div className={cn(
              "flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white border border-black/15 shadow-xs mb-0.5 transition-transform duration-200",
              isHovered ? "scale-110" : ""
            )}>
              <IconComponent className={cn("h-4 w-4 sm:h-4.5 sm:w-4.5", segment.textColor)} />
            </div>

            {/* Stage Title */}
            <span 
              className="mt-1 text-[8px] sm:text-[9px] font-extrabold tracking-wider leading-tight text-[#1C1C1C] uppercase"
            >
              {segment.title}
            </span>

            {/* Stage Short Description */}
            <span 
              className="hidden mt-0.5 text-[7px] sm:text-[7.5px] leading-tight text-[#555555] max-w-[90px] md:block font-medium"
            >
              {segment.shortDesc}
            </span>
          </div>
        );
      })}

      {/* 4. Center System Core Dark Circle matching Image 2 */}
      <div 
        style={{
          width: `${(r / (size / 2)) * 100}%`,
          height: `${(r / (size / 2)) * 100}%`,
        }}
        className="absolute rounded-full bg-[#121216] p-5 flex flex-col items-center justify-center text-center text-[#FFFFFF] shadow-2xl border-4 border-[#FFFFFF] pointer-events-none z-10"
      >
        <AnimatePresence mode="wait">
          {hoveredIdx === null ? (
            <motion.div
              key="default"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center justify-center h-full space-y-1.5"
            >
              {/* Red 4-Point Sparkle Star Logo */}
              <div className="text-[#CF5A30]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
                </svg>
              </div>

              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#CF5A30] uppercase">
                SYSTEM CORE
              </span>

              <h4 className="font-bebas text-sm sm:text-base leading-snug tracking-wide text-white uppercase max-w-[190px]">
                BUILD PEOPLE WHO CAN CREATE, OPERATE AND COMPOUND INTELLIGENT ENTERPRISES.
              </h4>

              <span className="text-[8px] font-semibold tracking-widest text-gray-400 uppercase pt-1">
                CONTINUOUS PROGRESSION
              </span>
            </motion.div>
          ) : (
            <motion.div
              key={hoveredIdx}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              className="flex flex-col items-center justify-center h-full px-2"
            >
              {/* Hovered Stage Details */}
              <div 
                className={cn(
                  "p-2 rounded-full mb-1 bg-white/10",
                  FLYWHEEL_DATA[hoveredIdx].textColor
                )}
              >
                {React.createElement(FLYWHEEL_DATA[hoveredIdx].icon, { className: "h-5 w-5" })}
              </div>

              <span className="text-[9px] font-extrabold tracking-widest text-gray-400">
                STAGE {FLYWHEEL_DATA[hoveredIdx].number}
              </span>

              <h4 className={cn("font-bebas text-sm sm:text-base tracking-wider uppercase mt-0.5", FLYWHEEL_DATA[hoveredIdx].textColor)}>
                {FLYWHEEL_DATA[hoveredIdx].title}
              </h4>

              <p className="text-[10px] leading-snug text-gray-200 mt-1 max-w-[180px] font-medium">
                {FLYWHEEL_DATA[hoveredIdx].description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}
