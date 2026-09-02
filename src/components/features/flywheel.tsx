"use client";

import React from "react";
import { 
  Compass, 
  Cpu, 
  Globe, 
  BarChart3, 
  Database, 
  Settings, 
  Users, 
  Target 
} from "lucide-react";
import { cn } from "@/lib/utils/cn";

export interface FlywheelSegment {
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

export const FLYWHEEL_DATA: FlywheelSegment[] = [
  {
    id: "real-problems",
    number: "01",
    title: "REAL PROBLEMS",
    description: "Identify systemic gaps & commercial pain points.",
    shortDesc: "Identify systemic gaps & commercial pain points",
    icon: Compass,
    wedgeBg: "#ECFDF5",
    hoverWedgeBg: "#D1FAE5",
    textColor: "text-emerald-700",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-400",
  },
  {
    id: "valuable-solutions",
    number: "02",
    title: "BUILD VALUABLE SOLUTIONS",
    description: "Design practical AI-driven enterprise apps.",
    shortDesc: "Design practical AI-driven enterprise apps",
    icon: Cpu,
    wedgeBg: "#FFF7ED",
    hoverWedgeBg: "#FFEDD5",
    textColor: "text-amber-700",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-400",
  },
  {
    id: "deploy-world",
    number: "03",
    title: "DEPLOY THEM IN THE WORLD",
    description: "Ship production-ready code to environments.",
    shortDesc: "Ship production-ready code to environments",
    icon: Globe,
    wedgeBg: "#FFF1F2",
    hoverWedgeBg: "#FFE4E6",
    textColor: "text-rose-700",
    badgeColor: "bg-rose-100 text-rose-800 border-rose-400",
  },
  {
    id: "measurable-outcomes",
    number: "04",
    title: "PRODUCE MEASURABLE OUTCOMES",
    description: "Validate commercial value and business impact.",
    shortDesc: "Validate commercial value and business impact",
    icon: BarChart3,
    wedgeBg: "#FDF4FF",
    hoverWedgeBg: "#FAE8FF",
    textColor: "text-fuchsia-700",
    badgeColor: "bg-fuchsia-100 text-fuchsia-800 border-fuchsia-400",
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

      {/* 2. Static SVG Wedges with Pastel Fill Colors */}
      <svg 
        viewBox={`0 0 ${size} ${size}`} 
        className="w-full h-full drop-shadow-md"
      >
        <g>
          {FLYWHEEL_DATA.map((segment, idx) => {
            const path = getWedgePath(idx);

            return (
              <path
                key={segment.id}
                d={path}
                fill={segment.wedgeBg}
                stroke="#1C1C1C"
                strokeWidth="1.5"
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

            {/* Circular Icon Container */}
            <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white border border-black/15 shadow-xs mb-0.5">
              <IconComponent className={cn("h-4 w-4 sm:h-4.5 sm:w-4.5", segment.textColor)} />
            </div>

            {/* Stage Title */}
            <span 
              className="mt-1 text-[8px] sm:text-[9px] font-extrabold tracking-wider leading-tight text-[#1C1C1C] uppercase"
            >
              {segment.title}
            </span>

            {/* Stage Description Subtitle */}
            <p className="hidden xs:block mt-0.5 text-[7px] sm:text-[8px] text-[#555555] leading-tight line-clamp-2 px-1 font-sans">
              {segment.shortDesc}
            </p>
          </div>
        );
      })}

      {/* 4. Center Circle Component */}
      <div 
        className="absolute z-10 flex flex-col items-center justify-center rounded-full bg-[#1C1C1C] text-center text-white border-2 border-white shadow-xl w-[120px] h-[120px] xs:w-[145px] xs:h-[145px] sm:w-[170px] sm:h-[170px] md:w-[200px] md:h-[200px] p-2 sm:p-4"
      >
        <span className="font-bebas text-[11px] sm:text-[13px] tracking-widest text-[#CF5A30] uppercase mb-0.5">
          SYSTEM CORE
        </span>
        
        <h4 className="font-bebas text-[10px] sm:text-[13px] md:text-[15px] leading-tight uppercase text-white font-bold max-w-[150px]">
          BUILD PEOPLE WHO CAN BUILD ENTERPRISES
        </h4>

        <div className="w-8 h-[1px] bg-white/20 my-1 sm:my-1.5" />

        <p className="text-[7.5px] sm:text-[9px] text-[#A1A1AA] font-semibold tracking-wider uppercase font-sans">
          Continuous Progression
        </p>
      </div>

    </div>
  );
}
