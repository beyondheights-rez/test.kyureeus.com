"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Trophy, 
  Rocket, 
  Cpu, 
  Database, 
  Star,
  TrendingUp,
  Lightbulb,
  Activity,
  Users,
  Shield,
  Globe,
  Compass,
  Box,
  Settings,
  Send,
  BarChart2,
  RefreshCw,
  Building2,
  Code,
  Zap,
  Layers,
  UserCheck,
  Play,
  Smile,
  HelpCircle,
  Share2,
  LayoutGrid,
  BookOpen,
  Check,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CapabilityArchitecturePage() {
  return (
    <div className="flex flex-col flex-1 min-h-screen bg-[#FFFFFF] text-[#1C1C1C] w-full overflow-x-clip">
      
      {/* SECTION 01: Hero Two-Column Layout */}
      <section className="relative min-h-[calc(100vh-80px)] grid grid-cols-1 lg:grid-cols-12 bg-[#F5F2EB] text-[#121212] overflow-hidden">
        
        {/* Left Column */}
        <div className="lg:col-span-6 bg-[#F5F2EB] px-4 sm:px-8 md:px-12 lg:px-16 py-10 sm:py-16 md:py-24 flex flex-col justify-between">
          <div className="space-y-6 sm:space-y-8 max-w-xl">
            {/* Top Category Label */}
            <div className="text-xs font-extrabold tracking-widest text-[#1C1C1C] uppercase">
              CAPABILITY ARCHITECTURE
            </div>

            {/* Headline Title */}
            <h1 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[62px] leading-[1.02] tracking-wide uppercase">
              <span className="text-[#1C1C1C] block">
                CAPABILITY IS NOT A COURSE.
              </span>
              <span className="text-[#CF5A30] block pt-1">
                IT IS AN ARCHITECTURE.
              </span>
            </h1>

            {/* Descriptive Copy */}
            <div className="space-y-3.5 font-sans text-[15px] sm:text-base leading-relaxed text-[#1C1C1C]">
              <p>
                Capabilities do not exist in isolation.<br />
                They are connected. Interdependent. Progressive.
              </p>

              <p>
                That is why Kyureeus built the <strong className="font-bold text-[#1C1C1C]">Enterprise Capability Architecture</strong>.
              </p>

              <p>
                A comprehensive system that develops people who can solve today&apos;s problems and build tomorrow&apos;s enterprises.
              </p>
            </div>

            {/* Bold Summary Line */}
            <div className="font-sans text-[15px] sm:text-base font-bold text-[#1C1C1C] pt-1">
              Connected capabilities. Compounding impact.
            </div>

            {/* CTA Button */}
            <div className="pt-2 w-full sm:w-auto">
              <Link href="/bootcamps" className="w-full sm:w-auto block">
                <Button className="w-full sm:w-auto group flex items-center justify-center gap-2.5 rounded-[4px] bg-[#CF5A30] hover:bg-[#121212] text-[#F5F2EB] px-6 sm:px-8 py-5 sm:py-6 text-xs sm:text-sm font-bold tracking-widest uppercase transition-colors duration-300 shadow-md cursor-pointer min-h-[48px]">
                  EXPLORE THE ARCHITECTURE
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Dark Background with Stacked Metallic Oval Layers */}
        <div className="lg:col-span-6 bg-[#0E0E10] px-4 sm:px-8 py-12 sm:py-16 md:py-24 flex items-center justify-center relative overflow-hidden">
          <div className="w-full max-w-2xl flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-12 relative z-10">
            
            {/* Stacked Oval Disk Architecture Graphic */}
            <div className="flex-1 flex flex-col items-center space-y-5 sm:space-y-6 select-none w-full">
              
              {/* 1. ENTERPRISE OUTCOMES */}
              <div className="flex flex-col items-center w-full">
                <span className="font-sans text-[10.5px] sm:text-[11px] font-extrabold tracking-widest text-white uppercase text-center">
                  ENTERPRISE OUTCOMES
                </span>
                <span className="font-sans text-[10px] sm:text-[11px] text-gray-400 text-center mt-0.5 mb-1.5">
                  Performance. Innovation. Resilience. Growth.
                </span>
                <div className="w-full max-w-[220px] sm:max-w-[260px] md:max-w-[280px] h-8 sm:h-9 md:h-10 rounded-[100%] bg-gradient-to-r from-[#6B4434] via-[#D4A373] to-[#6B4434] shadow-[0_8px_20px_rgba(0,0,0,0.6)] border border-[#D4A373]/50 transform hover:scale-105 transition-transform duration-300 mx-auto" />
              </div>

              {/* Vertical Connecting Line */}
              <div className="h-3 sm:h-4 w-[2px] bg-gradient-to-b from-[#D4A373] to-gray-600 my-0.5" />

              {/* 2. CAPABILITY LAYERS */}
              <div className="flex flex-col items-center w-full">
                <span className="font-sans text-[10.5px] sm:text-[11px] font-extrabold tracking-widest text-white uppercase text-center">
                  CAPABILITY LAYERS
                </span>
                <span className="font-sans text-[10px] sm:text-[11px] text-gray-400 text-center mt-0.5 mb-1.5">
                  Executive. Operator. Builder. Foundations.
                </span>
                <div className="w-full max-w-[220px] sm:max-w-[260px] md:max-w-[280px] h-8 sm:h-9 md:h-10 rounded-[100%] bg-gradient-to-r from-[#8B523E] via-[#C87F63] to-[#8B523E] shadow-[0_8px_20px_rgba(0,0,0,0.6)] border border-[#C87F63]/50 transform hover:scale-105 transition-transform duration-300 mx-auto" />
              </div>

              {/* 3. CAPABILITY LAYER */}
              <div className="flex flex-col items-center w-full">
                <span className="font-sans text-[10.5px] sm:text-[11px] font-extrabold tracking-widest text-white uppercase text-center">
                  CAPABILITY LAYER
                </span>
                <span className="font-sans text-[10px] sm:text-[11px] text-gray-400 text-center mt-0.5 mb-1.5">
                  Business • Engineering • AI • Operations • Leadership
                </span>
                <div className="w-full max-w-[220px] sm:max-w-[260px] md:max-w-[280px] h-8 sm:h-9 md:h-10 rounded-[100%] bg-gradient-to-r from-[#7C5A42] via-[#E2B792] to-[#7C5A42] shadow-[0_8px_20px_rgba(0,0,0,0.6)] border border-[#E2B792]/50 transform hover:scale-105 transition-transform duration-300 mx-auto" />
              </div>

              {/* 4. FOUNDATION LAYER */}
              <div className="flex flex-col items-center w-full">
                <span className="font-sans text-[10.5px] sm:text-[11px] font-extrabold tracking-widest text-white uppercase text-center">
                  FOUNDATION LAYER
                </span>
                <span className="font-sans text-[10px] sm:text-[11px] text-gray-400 text-center mt-0.5 mb-1.5">
                  Mindset • Principles • Systems • Tools
                </span>
                <div className="w-full max-w-[220px] sm:max-w-[260px] md:max-w-[280px] h-8 sm:h-9 md:h-10 rounded-[100%] bg-gradient-to-r from-[#9A4A33] via-[#E28567] to-[#9A4A33] shadow-[0_8px_20px_rgba(0,0,0,0.6)] border border-[#E28567]/50 transform hover:scale-105 transition-transform duration-300 mx-auto" />
              </div>

              {/* PURPOSE */}
              <div className="flex flex-col items-center pt-1.5">
                <span className="font-sans text-[11px] font-extrabold tracking-widest text-[#CF5A30] uppercase text-center">
                  PURPOSE
                </span>
                <span className="font-sans text-[11px] text-gray-300 text-center mt-0.5">
                  Create enduring enterprise value.
                </span>
              </div>

            </div>

            {/* Floating Quote Card */}
            <div className="w-full md:w-56 shrink-0 bg-[#18181C] border border-[#2D2D35] p-5 sm:p-6 rounded-[8px] shadow-2xl space-y-2 sm:space-y-3">
              <span className="text-[#CF5A30] text-3xl font-serif leading-none block">“</span>
              <h3 className="font-bebas text-base sm:text-lg leading-snug tracking-wider text-white uppercase">
                ARCHITECTURE CREATES ORDER. ORDER CREATES CAPABILITY. CAPABILITY CREATES VALUE.
              </h3>
              <span className="text-[#CF5A30] text-3xl font-serif leading-none text-right block">”</span>
            </div>

          </div>
        </div>

      </section>

      {/* SECTION 02: Four Column Layout Grid */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center bg-[#FFFFFF] py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-20 border-b border-[#1C1C1C]/10">
        <div className="mx-auto max-w-7xl w-full">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-0 divide-y md:divide-y-0 lg:divide-x divide-[#1C1C1C]/15">
            
            {/* Column 01 */}
            <div className="lg:pr-6 flex flex-col justify-between pt-4 lg:pt-0 pb-4 lg:pb-0">
              <div className="space-y-2.5 sm:space-y-3 md:space-y-4">
                <span className="font-bebas text-3xl sm:text-4xl md:text-5xl font-bold text-[#CF5A30] block leading-none">
                  01
                </span>
                
                <div className="space-y-0.5">
                  <span className="font-sans text-xs font-black tracking-widest text-[#1C1C1C] uppercase block">
                    BUILT AS
                  </span>
                  <h2 className="font-bebas text-xl sm:text-2xl md:text-[26px] text-[#1C1C1C] uppercase leading-tight">
                    A COMPLETE SYSTEM
                  </h2>
                </div>

                <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-[#3A3E40]">
                  The architecture integrates every dimension required to create enterprise value.
                </p>

                <ul className="space-y-1.5 font-sans text-[13.5px] sm:text-[14.5px] font-medium text-[#1C1C1C] pt-1">
                  {["Business", "Engineering", "Artificial Intelligence", "Operations", "Leadership", "Execution"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full border-2 border-[#CF5A30] bg-transparent shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="font-sans text-[13px] sm:text-[14px] font-bold leading-normal text-[#1C1C1C] pt-3 mt-2">
                Because enterprises are systems. Capability must be too.
              </div>
            </div>

            {/* Column 02 */}
            <div className="lg:px-6 flex flex-col justify-between pt-4 lg:pt-0 pb-4 lg:pb-0">
              <div className="space-y-2.5 sm:space-y-3 md:space-y-4">
                <span className="font-bebas text-3xl sm:text-4xl md:text-5xl font-bold text-[#CF5A30] block leading-none">
                  02
                </span>
                
                <div className="space-y-0.5">
                  <span className="font-sans text-xs font-black tracking-widest text-[#1C1C1C] uppercase block">
                    FOUR LAYERS.
                  </span>
                  <h2 className="font-bebas text-xl sm:text-2xl md:text-[26px] text-[#1C1C1C] uppercase leading-tight">
                    ONE ARCHITECTURE
                  </h2>
                </div>

                <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-[#3A3E40]">
                  Every layer strengthens the one above, starting from foundational mindsets to final enterprise outcomes.
                </p>

                <div className="space-y-2 pt-1">
                  {[
                    { label: "Foundation Layer", desc: "Build the mindset, principles, systems and tools." },
                    { label: "Capability Layer", desc: "Develop integrated skills across all functions." },
                    { label: "Execution Layer", desc: "Apply capability to deliver measurable outcomes." },
                    { label: "Enterprise Outcomes", desc: "Create performance, innovation, resilience and growth." }
                  ].map((layer, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <div className="flex items-center gap-1.5 font-sans text-[13.5px] sm:text-[14.5px] font-bold text-[#1C1C1C]">
                        <span className="text-[#CF5A30]">➔</span>
                        <span>{layer.label}</span>
                      </div>
                      <p className="font-sans text-[12px] sm:text-[12.5px] text-[#555555] pl-4">
                        {layer.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="font-sans text-[13px] sm:text-[14px] font-bold leading-normal text-[#1C1C1C] pt-3 mt-2">
                Every layer strengthens the one above.
              </div>
            </div>

            {/* Column 03 */}
            <div className="lg:px-6 flex flex-col justify-between pt-4 lg:pt-0 pb-4 lg:pb-0">
              <div className="space-y-2.5 sm:space-y-3 md:space-y-4">
                <span className="font-bebas text-3xl sm:text-4xl md:text-5xl font-bold text-[#CF5A30] block leading-none">
                  03
                </span>
                
                <div className="space-y-0.5">
                  <span className="font-sans text-xs font-black tracking-widest text-[#1C1C1C] uppercase block">
                    DESIGNED FOR
                  </span>
                  <h2 className="font-bebas text-xl sm:text-2xl md:text-[26px] text-[#1C1C1C] uppercase leading-tight">
                    PROGRESSION
                  </h2>
                </div>

                <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-[#3A3E40]">
                  Learners move from foundational understanding to enterprise impact with clear steps:
                </p>

                <ul className="space-y-1.5 font-sans text-[13.5px] sm:text-[14.5px] font-medium text-[#1C1C1C] pt-1">
                  {[
                    "Understand the fundamentals.",
                    "Build cross-functional capability.",
                    "Execute in real environments.",
                    "Deliver measurable outcomes.",
                    "Lead transformation at scale."
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full border-2 border-[#CF5A30] bg-transparent shrink-0" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="font-sans text-[13px] sm:text-[14px] font-bold leading-normal text-[#1C1C1C] pt-3 mt-2">
                Progression is built into the architecture.
              </div>
            </div>

            {/* Column 04 */}
            <div className="lg:pl-6 flex flex-col justify-between pt-4 lg:pt-0">
              <div className="space-y-2.5 sm:space-y-3 md:space-y-4">
                <span className="font-bebas text-3xl sm:text-4xl md:text-5xl font-bold text-[#CF5A30] block leading-none">
                  04
                </span>
                
                <div className="space-y-0.5">
                  <span className="font-sans text-xs font-black tracking-widest text-[#1C1C1C] uppercase block">
                    CROSS-FUNCTIONAL
                  </span>
                  <h2 className="font-bebas text-xl sm:text-2xl md:text-[26px] text-[#1C1C1C] uppercase leading-tight">
                    BY DESIGN
                  </h2>
                </div>

                <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-[#3A3E40]">
                  Real enterprise problems do not belong to one function. Neither does our architecture.
                </p>

                <ul className="space-y-1.5 font-sans text-[13.5px] sm:text-[14.5px] font-medium text-[#1C1C1C] pt-1">
                  {["Break silos.", "Connect disciplines.", "Align teams.", "Accelerate execution."].map((text, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="font-bold text-[#CF5A30] text-base">+</span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="font-sans text-[13px] sm:text-[14px] font-bold leading-normal text-[#1C1C1C] pt-3 mt-2">
                Integration is the multiplier of capability.
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 05: 2-Column Section with Capability Matrix Card */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center bg-[#F4EFE6] py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-20 border-b border-[#1C1C1C]/10">
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-5 space-y-3.5 sm:space-y-4 md:space-y-5">
              <span className="font-bebas text-3xl sm:text-4xl md:text-5xl font-bold text-[#CF5A30] block leading-none">
                05
              </span>

              <div className="space-y-1.5">
                <span className="font-sans text-xs font-black tracking-widest text-[#555555] uppercase block">
                  THE KYUREEUS CAPABILITY ARCHITECTURE
                </span>
                <h2 className="font-bebas text-2xl sm:text-3xl md:text-[40px] leading-[1.05] tracking-wide text-[#1C1C1C] uppercase">
                  A CONNECTED SYSTEM THAT DEVELOPS BUILDERS, LEADERS AND TRANSFORMERS.
                </h2>
              </div>

              <p className="font-sans text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#3A3E40]">
                From first principles to enterprise impact, every capability has a place. Every capability has a purpose. Every capability creates value.
              </p>
            </div>

            {/* Right Column: Full Capability Matrix Grid Card */}
            <div className="lg:col-span-7 w-full overflow-x-auto">
              <div className="min-w-[440px] rounded-[14px] bg-[#18181C] shadow-xl border border-[#1C1C1C]/20 overflow-hidden text-left">
                
                {/* 1. ENTERPRISE OUTCOMES ROW */}
                <div className="grid grid-cols-12 border-b border-white/10">
                  <div className="col-span-4 bg-[#141416] p-3 sm:p-4 flex items-center gap-2 border-r border-white/10">
                    <Trophy className="h-4 w-4 text-white shrink-0" />
                    <div>
                      <span className="font-sans text-[10px] sm:text-[10.5px] font-extrabold tracking-widest text-white uppercase block leading-tight">
                        ENTERPRISE
                      </span>
                      <span className="font-sans text-[9px] sm:text-[9.5px] text-gray-400 uppercase tracking-wider block">
                        OUTCOMES
                      </span>
                    </div>
                  </div>
                  <div className="col-span-8 bg-[#F5F2EB] p-2.5 sm:p-3 grid grid-cols-3 gap-1.5 sm:gap-2 text-center text-[#1C1C1C]">
                    {[
                      { icon: TrendingUp, label: "Growth", highlight: true },
                      { icon: Lightbulb, label: "Innovation" },
                      { icon: Activity, label: "Operational Excellence" },
                      { icon: Users, label: "Customer Impact" },
                      { icon: Shield, label: "Resilience" },
                      { icon: Globe, label: "Sustainable Advantage" }
                    ].map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <div key={idx} className="flex flex-col items-center justify-center p-1 rounded hover:bg-white/60 transition-colors group cursor-pointer">
                          <Icon className={`h-3.5 w-3.5 mb-0.5 group-hover:scale-125 transition-all duration-300 ${item.highlight ? "text-[#CF5A30]" : "text-[#1C1C1C]"}`} />
                          <span className="font-sans text-[10.5px] sm:text-xs font-bold leading-tight">{item.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 2. EXECUTION LAYER ROW */}
                <div className="grid grid-cols-12 border-b border-white/10">
                  <div className="col-span-4 bg-[#141416] p-3 sm:p-4 flex items-center gap-2 border-r border-white/10">
                    <Rocket className="h-4 w-4 text-white shrink-0" />
                    <div>
                      <span className="font-sans text-[10px] sm:text-[10.5px] font-extrabold tracking-widest text-white uppercase block leading-tight">
                        EXECUTION
                      </span>
                      <span className="font-sans text-[9px] sm:text-[9.5px] text-gray-400 uppercase tracking-wider block">
                        LAYER
                      </span>
                    </div>
                  </div>
                  <div className="col-span-8 bg-[#F5F2EB] p-2.5 sm:p-3 grid grid-cols-3 gap-1.5 sm:gap-2 text-center text-[#1C1C1C]">
                    {[
                      { icon: Compass, label: "Strategy" },
                      { icon: Box, label: "Products" },
                      { icon: Settings, label: "Operations" },
                      { icon: Send, label: "Go-to-Market" },
                      { icon: BarChart2, label: "Performance" },
                      { icon: RefreshCw, label: "Continuous Improvement" }
                    ].map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <div key={idx} className="flex flex-col items-center justify-center p-1 rounded hover:bg-white/60 transition-colors group cursor-pointer">
                          <Icon className="h-3.5 w-3.5 text-[#1C1C1C] mb-0.5 group-hover:scale-125 transition-all duration-300" />
                          <span className="font-sans text-[10.5px] sm:text-xs font-bold leading-tight">{item.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 3. CAPABILITY LAYER ROW */}
                <div className="grid grid-cols-12 border-b border-white/10">
                  <div className="col-span-4 bg-[#141416] p-3 sm:p-4 flex items-center gap-2 border-r border-white/10">
                    <Cpu className="h-4 w-4 text-white shrink-0" />
                    <div>
                      <span className="font-sans text-[10px] sm:text-[10.5px] font-extrabold tracking-widest text-white uppercase block leading-tight">
                        CAPABILITY
                      </span>
                      <span className="font-sans text-[9px] sm:text-[9.5px] text-gray-400 uppercase tracking-wider block">
                        LAYER
                      </span>
                    </div>
                  </div>
                  <div className="col-span-8 bg-[#F5F2EB] p-2.5 sm:p-3 grid grid-cols-3 gap-1.5 sm:gap-2 text-center text-[#1C1C1C]">
                    {[
                      { icon: Building2, label: "Business" },
                      { icon: Code, label: "Engineering" },
                      { icon: Zap, label: "Artificial Intelligence", highlight: true },
                      { icon: Layers, label: "Operations" },
                      { icon: UserCheck, label: "Leadership" },
                      { icon: Play, label: "Execution" }
                    ].map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <div key={idx} className="flex flex-col items-center justify-center p-1 rounded hover:bg-white/60 transition-colors group cursor-pointer">
                          <Icon className={`h-3.5 w-3.5 mb-0.5 group-hover:scale-125 transition-all duration-300 ${item.highlight ? "text-[#CF5A30]" : "text-[#1C1C1C]"}`} />
                          <span className="font-sans text-[10.5px] sm:text-xs font-bold leading-tight">{item.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 4. FOUNDATION LAYER ROW */}
                <div className="grid grid-cols-12 border-b border-white/10">
                  <div className="col-span-4 bg-[#141416] p-3 sm:p-4 flex items-center gap-2 border-r border-white/10">
                    <Database className="h-4 w-4 text-white shrink-0" />
                    <div>
                      <span className="font-sans text-[10px] sm:text-[10.5px] font-extrabold tracking-widest text-white uppercase block leading-tight">
                        FOUNDATION
                      </span>
                      <span className="font-sans text-[9px] sm:text-[9.5px] text-gray-400 uppercase tracking-wider block">
                        LAYER
                      </span>
                    </div>
                  </div>
                  <div className="col-span-8 bg-[#F5F2EB] p-2.5 sm:p-3 grid grid-cols-3 gap-1.5 sm:gap-2 text-center text-[#1C1C1C]">
                    {[
                      { icon: Smile, label: "Mindset" },
                      { icon: HelpCircle, label: "First Principles" },
                      { icon: Share2, label: "Systems Thinking" },
                      { icon: LayoutGrid, label: "Tools & Platforms" },
                      { icon: BookOpen, label: "Data Literacy" }
                    ].map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <div key={idx} className="flex flex-col items-center justify-center p-1 rounded hover:bg-white/60 transition-colors group cursor-pointer">
                          <Icon className="h-3.5 w-3.5 text-[#1C1C1C] mb-0.5 group-hover:scale-125 transition-all duration-300" />
                          <span className="font-sans text-[10.5px] sm:text-xs font-bold leading-tight">{item.label}</span>
                        </div>
                      );
                    })}
                    <div className="flex flex-col items-center justify-center p-1 rounded text-gray-400">
                      <span className="font-sans text-[11px] font-bold">—</span>
                    </div>
                  </div>
                </div>

                {/* 5. PURPOSE ROW */}
                <div className="grid grid-cols-12">
                  <div className="col-span-4 bg-[#CF5A30] p-3 sm:p-4 flex items-center gap-2 text-white">
                    <Star className="h-4 w-4 fill-white text-white shrink-0" />
                    <span className="font-sans text-[11px] sm:text-xs font-black tracking-widest uppercase">
                      PURPOSE
                    </span>
                  </div>
                  <div className="col-span-8 bg-white p-3 sm:p-3.5 flex items-center justify-center text-center">
                    <span className="font-sans text-xs sm:text-sm font-extrabold text-[#1C1C1C] tracking-wide">
                      Create enduring enterprise value.
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 06, 07, 08: Three Column Layout Grid */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center bg-[#FFFFFF] py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-20 border-b border-[#1C1C1C]/10">
        <div className="mx-auto max-w-7xl w-full">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-0 divide-y md:divide-y-0 md:divide-x divide-[#1C1C1C]/15">
            
            {/* Column 06 */}
            <div className="md:pr-6 flex flex-col justify-between pt-4 md:pt-0 pb-4 md:pb-0">
              <div className="space-y-2.5 sm:space-y-3 md:space-y-4">
                <span className="font-bebas text-3xl sm:text-4xl md:text-5xl font-bold text-[#CF5A30] block leading-none">
                  06
                </span>
                
                <div className="space-y-0.5">
                  <span className="font-sans text-xs font-black tracking-widest text-[#1C1C1C] uppercase block">
                    BUILT TO ADAPT
                  </span>
                  <h2 className="font-bebas text-xl sm:text-2xl md:text-[26px] text-[#1C1C1C] uppercase leading-tight">
                    TO YOUR ENTERPRISE
                  </h2>
                </div>

                <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-[#3A3E40]">
                  Every organization is at a different place on its journey. The architecture adapts to your context, priorities and maturity.
                </p>

                <ul className="space-y-1.5 font-sans text-[13.5px] sm:text-[14.5px] font-medium text-[#1C1C1C] pt-1">
                  {["Assess current state.", "Map capability gaps.", "Build targeted pathways.", "Measure progress."].map((text, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full border-2 border-[#CF5A30] bg-transparent shrink-0" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="font-sans text-[13px] sm:text-[14px] font-bold leading-normal text-[#1C1C1C] pt-3 mt-2">
                Your architecture. Your transformation.
              </div>
            </div>

            {/* Column 07 */}
            <div className="md:px-6 flex flex-col justify-between pt-4 md:pt-0 pb-4 md:pb-0">
              <div className="space-y-2.5 sm:space-y-3 md:space-y-4">
                <span className="font-bebas text-3xl sm:text-4xl md:text-5xl font-bold text-[#CF5A30] block leading-none">
                  07
                </span>
                
                <div className="space-y-0.5">
                  <span className="font-sans text-xs font-black tracking-widest text-[#1C1C1C] uppercase block">
                    MEASURABLE.
                  </span>
                  <h2 className="font-bebas text-xl sm:text-2xl md:text-[26px] text-[#1C1C1C] uppercase leading-tight">
                    VISIBLE. REPEATABLE.
                  </h2>
                </div>

                <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-[#3A3E40]">
                  What gets measured gets built. Our architecture makes capability visible at every level.
                </p>

                <ul className="space-y-1.5 font-sans text-[13.5px] sm:text-[14.5px] font-medium text-[#1C1C1C] pt-1">
                  {[
                    "Capability frameworks",
                    "Assessment models",
                    "Progress dashboards",
                    "Outcome metrics",
                    "Impact measurement"
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#CF5A30] shrink-0 font-bold" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="font-sans text-[13px] sm:text-[14px] font-bold leading-normal text-[#1C1C1C] pt-3 mt-2">
                Visibility drives improvement. Measurement drives results.
              </div>
            </div>

            {/* Column 08 */}
            <div className="md:pl-6 flex flex-col justify-between pt-4 md:pt-0">
              <div className="space-y-2.5 sm:space-y-3 md:space-y-4">
                <span className="font-bebas text-3xl sm:text-4xl md:text-5xl font-bold text-[#CF5A30] block leading-none">
                  08
                </span>
                
                <div className="space-y-0.5">
                  <span className="font-sans text-xs font-black tracking-widest text-[#1C1C1C] uppercase block">
                    A LIVING ARCHITECTURE
                  </span>
                  <h2 className="font-bebas text-xl sm:text-2xl md:text-[26px] text-[#1C1C1C] uppercase leading-tight">
                    THAT EVOLVES
                  </h2>
                </div>

                <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-[#3A3E40]">
                  The world changes. Your capability architecture evolves with it to embrace:
                </p>

                <ul className="space-y-1.5 font-sans text-[13.5px] sm:text-[14.5px] font-medium text-[#1C1C1C] pt-1">
                  {[
                    "New technologies.",
                    "New business models.",
                    "New customer expectations.",
                    "New opportunities."
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full border-2 border-[#CF5A30] bg-transparent shrink-0" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="font-sans text-[13px] sm:text-[14px] font-bold leading-normal text-[#1C1C1C] pt-3 mt-2">
                Evolve the architecture. Stay ahead of change.
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center bg-[#0E0E10] text-[#FFFFFF] py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden select-none border-t border-white/10">
        <div className="mx-auto max-w-7xl w-full space-y-6 md:space-y-8">
          
          <div className="font-sans text-xs font-extrabold tracking-widest text-[#CF5A30] uppercase">
            BUILD THE FUTURE
          </div>

          <h2 className="font-bebas text-3xl sm:text-4xl md:text-[48px] lg:text-[54px] leading-[1.02] tracking-wide uppercase max-w-3xl">
            <span className="text-[#FFFFFF] block">GREAT ENTERPRISES ARE NOT</span>
            <span className="text-[#FFFFFF] block">BORN.</span>
            <span className="text-[#CF5A30] block pt-0.5">THEY ARE ARCHITECTED.</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-2 pb-1">
            
            <div className="space-y-2 group cursor-pointer">
              <Share2 className="h-5 w-5 text-[#CF5A30] group-hover:scale-125 transition-all duration-300" />
              <p className="font-sans text-sm sm:text-[15px] font-bold text-white leading-snug group-hover:text-[#CF5A30] transition-colors duration-300">
                Build connected capability
              </p>
            </div>

            <div className="space-y-2 group cursor-pointer">
              <Layers className="h-5 w-5 text-[#CF5A30] group-hover:scale-125 transition-all duration-300" />
              <p className="font-sans text-sm sm:text-[15px] font-bold text-white leading-snug group-hover:text-[#CF5A30] transition-colors duration-300">
                Strengthen every layer
              </p>
            </div>

            <div className="space-y-2 group cursor-pointer">
              <BarChart2 className="h-5 w-5 text-[#CF5A30] group-hover:scale-125 transition-all duration-300" />
              <p className="font-sans text-sm sm:text-[15px] font-bold text-white leading-snug group-hover:text-[#CF5A30] transition-colors duration-300">
                Create measurable impact
              </p>
            </div>

            <div className="space-y-2 group cursor-pointer">
              <Sparkles className="h-5 w-5 text-[#CF5A30] group-hover:scale-125 transition-all duration-300" />
              <p className="font-sans text-sm sm:text-[15px] font-bold text-white leading-snug group-hover:text-[#CF5A30] transition-colors duration-300">
                Compound enterprise value
              </p>
            </div>

          </div>

          <div className="pt-1 w-full sm:w-auto">
            <Link href="/bootcamps" className="w-full sm:w-auto block">
              <Button className="w-full sm:w-auto group flex items-center justify-center gap-2.5 rounded-[4px] bg-[#CF5A30] hover:bg-white text-white hover:text-[#121212] px-6 sm:px-8 py-5 text-xs sm:text-sm font-bold tracking-widest uppercase transition-colors duration-300 shadow-lg cursor-pointer min-h-[48px]">
                EXPLORE THE CAPABILITY ARCHITECTURE
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
