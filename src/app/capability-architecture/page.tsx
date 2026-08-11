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
    <div className="flex flex-col flex-1 min-h-screen bg-[#FFFFFF] text-[#1C1C1C]">
      
      {/* SECTION 01: Hero Two-Column Layout (Cream Left / #0E0E10 Dark Right with 3D Ovals & Quote) */}
      <section className="sticky top-0 h-screen z-10 grid grid-cols-1 lg:grid-cols-12 bg-[#F5F2EB] text-[#121212] overflow-hidden">
        
        {/* Left Column: Warm Cream Background (#F5F2EB) */}
        <div className="lg:col-span-6 bg-[#F5F2EB] px-8 sm:px-12 md:px-16 py-16 md:py-24 flex flex-col justify-between">
          <div className="space-y-8 max-w-xl">
            {/* Top Category Label */}
            <div className="text-xs font-extrabold tracking-widest text-[#1C1C1C] uppercase">
              CAPABILITY ARCHITECTURE
            </div>

            {/* Headline Title */}
            <h1 className="font-bebas text-4xl sm:text-5xl md:text-[56px] lg:text-[62px] leading-[1.02] tracking-wide uppercase">
              <span className="text-[#1C1C1C] block">
                CAPABILITY IS NOT A COURSE.
              </span>
              <span className="text-[#CF5A30] block pt-1">
                IT IS AN ARCHITECTURE.
              </span>
            </h1>

            {/* Descriptive Copy */}
            <div className="space-y-4 font-sans text-[15px] leading-relaxed text-[#1C1C1C]">
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
            <div className="font-sans text-[15px] font-bold text-[#1C1C1C] pt-2">
              Connected capabilities. Compounding impact.
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link href="/bootcamps">
                <Button className="group flex items-center gap-2.5 rounded-[4px] bg-[#CF5A30] hover:bg-[#121212] text-[#F5F2EB] px-8 py-6 text-xs sm:text-sm font-bold tracking-widest uppercase transition-colors duration-300 shadow-md cursor-pointer">
                  EXPLORE THE ARCHITECTURE
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Dark Background (#0E0E10) with Stacked Metallic Oval Layers & Quote Card */}
        <div className="lg:col-span-6 bg-[#0E0E10] px-6 sm:px-10 py-16 md:py-24 flex items-center justify-center relative overflow-hidden">
          <div className="w-full max-w-2xl flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-12 relative z-10">
            
            {/* Stacked Oval Disk Architecture Graphic */}
            <div className="flex-1 flex flex-col items-center space-y-6 select-none w-full">
              
              {/* 1. ENTERPRISE OUTCOMES */}
              <div className="flex flex-col items-center w-full">
                <span className="font-sans text-[11px] font-extrabold tracking-widest text-white uppercase text-center">
                  ENTERPRISE OUTCOMES
                </span>
                <span className="font-sans text-[11px] text-gray-400 text-center mt-0.5 mb-2">
                  Performance. Innovation. Resilience. Growth.
                </span>
                {/* Metallic Oval Disk 1 */}
                <div className="w-56 sm:w-64 md:w-72 h-10 rounded-[100%] bg-gradient-to-r from-[#6B4434] via-[#D4A373] to-[#6B4434] shadow-[0_8px_20px_rgba(0,0,0,0.6)] border border-[#D4A373]/50 transform hover:scale-105 transition-transform duration-300" />
              </div>

              {/* Vertical Connecting Line */}
              <div className="h-4 w-[2px] bg-gradient-to-b from-[#D4A373] to-gray-600 my-1" />

              {/* 2. CAPABILITY LAYERS */}
              <div className="flex flex-col items-center w-full">
                <span className="font-sans text-[11px] font-extrabold tracking-widest text-white uppercase text-center">
                  CAPABILITY LAYERS
                </span>
                <span className="font-sans text-[11px] text-gray-400 text-center mt-0.5 mb-2">
                  Executive. Operator. Builder. Foundations.
                </span>
                {/* Metallic Oval Disk 2 */}
                <div className="w-56 sm:w-64 md:w-72 h-10 rounded-[100%] bg-gradient-to-r from-[#8B523E] via-[#C87F63] to-[#8B523E] shadow-[0_8px_20px_rgba(0,0,0,0.6)] border border-[#C87F63]/50 transform hover:scale-105 transition-transform duration-300" />
              </div>

              {/* 3. CAPABILITY LAYER */}
              <div className="flex flex-col items-center w-full">
                <span className="font-sans text-[11px] font-extrabold tracking-widest text-white uppercase text-center">
                  CAPABILITY LAYER
                </span>
                <span className="font-sans text-[11px] text-gray-400 text-center mt-0.5 mb-2">
                  Business • Engineering • AI • Operations • Leadership
                </span>
                {/* Metallic Oval Disk 3 */}
                <div className="w-56 sm:w-64 md:w-72 h-10 rounded-[100%] bg-gradient-to-r from-[#7C5A42] via-[#E2B792] to-[#7C5A42] shadow-[0_8px_20px_rgba(0,0,0,0.6)] border border-[#E2B792]/50 transform hover:scale-105 transition-transform duration-300" />
              </div>

              {/* 4. FOUNDATION LAYER */}
              <div className="flex flex-col items-center w-full">
                <span className="font-sans text-[11px] font-extrabold tracking-widest text-white uppercase text-center">
                  FOUNDATION LAYER
                </span>
                <span className="font-sans text-[11px] text-gray-400 text-center mt-0.5 mb-2">
                  Mindset • Principles • Systems • Tools
                </span>
                {/* Metallic Oval Disk 4 */}
                <div className="w-56 sm:w-64 md:w-72 h-10 rounded-[100%] bg-gradient-to-r from-[#9A4A33] via-[#E28567] to-[#9A4A33] shadow-[0_8px_20px_rgba(0,0,0,0.6)] border border-[#E28567]/50 transform hover:scale-105 transition-transform duration-300" />
              </div>

              {/* PURPOSE */}
              <div className="flex flex-col items-center pt-2">
                <span className="font-sans text-[11px] font-extrabold tracking-widest text-[#CF5A30] uppercase text-center">
                  PURPOSE
                </span>
                <span className="font-sans text-[11px] text-gray-300 text-center mt-0.5">
                  Create enduring enterprise value.
                </span>
              </div>

            </div>

            {/* Floating Quote Card */}
            <div className="w-full md:w-56 shrink-0 bg-[#18181C] border border-[#2D2D35] p-6 rounded-[8px] shadow-2xl space-y-3">
              <span className="text-[#CF5A30] text-3xl font-serif leading-none block">“</span>
              <h3 className="font-bebas text-lg leading-snug tracking-wider text-white uppercase">
                ARCHITECTURE CREATES ORDER. ORDER CREATES CAPABILITY. CAPABILITY CREATES VALUE.
              </h3>
              <span className="text-[#CF5A30] text-3xl font-serif leading-none text-right block">”</span>
            </div>

          </div>
        </div>

      </section>


      {/* Container wrapper for sections sliding over hero */}
      <div className="relative z-20 bg-[#F5F2EB]">
        {/* SECTION 02: Four Column Layout Grid (#FFFFFF Clean White Background with Vertical Lines) */}
        <section className="relative bg-[#FFFFFF] py-16 md:py-24 px-6 md:px-12 lg:px-20 border-b border-[#1C1C1C]/10">
        <div className="mx-auto max-w-7xl w-full">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 divide-y md:divide-y-0 lg:divide-x divide-[#1C1C1C]/15">
            
            {/* Column 01: BUILT AS A COMPLETE SYSTEM */}
            <div className="lg:pr-8 flex flex-col justify-between pt-6 lg:pt-0">
              <div className="space-y-6">
                <span className="font-bebas text-5xl sm:text-6xl font-bold text-[#CF5A30] block leading-none">
                  01
                </span>
                
                <div className="space-y-1">
                  <span className="font-sans text-[11px] font-extrabold tracking-widest text-[#1C1C1C] uppercase block">
                    BUILT AS
                  </span>
                  <h2 className="font-bebas text-2xl sm:text-3xl text-[#1C1C1C] uppercase leading-tight">
                    A COMPLETE SYSTEM
                  </h2>
                </div>

                <p className="font-sans text-sm leading-relaxed text-[#3A3E40]">
                  The architecture integrates every dimension required to create enterprise value.
                </p>

                {/* Hollow Orange Circle Bullet List */}
                <ul className="space-y-2.5 font-sans text-sm text-[#1C1C1C] pt-2">
                  <li className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full border-2 border-[#CF5A30] bg-transparent shrink-0" />
                    <span>Business</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full border-2 border-[#CF5A30] bg-transparent shrink-0" />
                    <span>Engineering</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full border-2 border-[#CF5A30] bg-transparent shrink-0" />
                    <span>Artificial Intelligence</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full border-2 border-[#CF5A30] bg-transparent shrink-0" />
                    <span>Operations</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full border-2 border-[#CF5A30] bg-transparent shrink-0" />
                    <span>Leadership</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full border-2 border-[#CF5A30] bg-transparent shrink-0" />
                    <span>Execution</span>
                  </li>
                </ul>
              </div>

              {/* Bottom Bold Statement */}
              <div className="font-sans text-xs font-bold leading-normal text-[#1C1C1C] pt-8 mt-6">
                Because enterprises are systems. Capability must be too.
              </div>
            </div>


            {/* Column 02: FOUR LAYERS. ONE ARCHITECTURE */}
            <div className="lg:px-8 flex flex-col justify-between pt-6 lg:pt-0">
              <div className="space-y-6">
                <span className="font-bebas text-5xl sm:text-6xl font-bold text-[#CF5A30] block leading-none">
                  02
                </span>
                
                <div className="space-y-1">
                  <span className="font-sans text-[11px] font-extrabold tracking-widest text-[#1C1C1C] uppercase block">
                    FOUR LAYERS.
                  </span>
                  <h2 className="font-bebas text-2xl sm:text-3xl text-[#1C1C1C] uppercase leading-tight">
                    ONE ARCHITECTURE
                  </h2>
                </div>

                <p className="font-sans text-sm leading-relaxed text-[#3A3E40]">
                  Every layer strengthens the one above, starting from foundational mindsets to final enterprise outcomes.
                </p>

                {/* Arrow List */}
                <div className="space-y-4 pt-2">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2 font-sans text-sm font-bold text-[#1C1C1C]">
                      <span>➔</span>
                      <span>Foundation Layer</span>
                    </div>
                    <p className="font-sans text-[12px] text-[#555555] pl-5">
                      Build the mindset, principles, systems and tools.
                    </p>
                  </div>

                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2 font-sans text-sm font-bold text-[#1C1C1C]">
                      <span>➔</span>
                      <span>Capability Layer</span>
                    </div>
                    <p className="font-sans text-[12px] text-[#555555] pl-5">
                      Develop integrated skills across all functions.
                    </p>
                  </div>

                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2 font-sans text-sm font-bold text-[#1C1C1C]">
                      <span>➔</span>
                      <span>Execution Layer</span>
                    </div>
                    <p className="font-sans text-[12px] text-[#555555] pl-5">
                      Apply capability to deliver measurable outcomes.
                    </p>
                  </div>

                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2 font-sans text-sm font-bold text-[#1C1C1C]">
                      <span>➔</span>
                      <span>Enterprise Outcomes</span>
                    </div>
                    <p className="font-sans text-[12px] text-[#555555] pl-5">
                      Create performance, innovation, resilience and growth.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Bold Statement */}
              <div className="font-sans text-xs font-bold leading-normal text-[#1C1C1C] pt-8 mt-6">
                Every layer strengthens the one above.
              </div>
            </div>


            {/* Column 03: DESIGNED FOR PROGRESSION */}
            <div className="lg:px-8 flex flex-col justify-between pt-6 lg:pt-0">
              <div className="space-y-6">
                <span className="font-bebas text-5xl sm:text-6xl font-bold text-[#CF5A30] block leading-none">
                  03
                </span>
                
                <div className="space-y-1">
                  <span className="font-sans text-[11px] font-extrabold tracking-widest text-[#1C1C1C] uppercase block">
                    DESIGNED FOR
                  </span>
                  <h2 className="font-bebas text-2xl sm:text-3xl text-[#1C1C1C] uppercase leading-tight">
                    PROGRESSION
                  </h2>
                </div>

                <p className="font-sans text-sm leading-relaxed text-[#3A3E40]">
                  Learners move from foundational understanding to enterprise impact with clear steps:
                </p>

                {/* Hollow Orange Circle Bullet List */}
                <ul className="space-y-2.5 font-sans text-sm text-[#1C1C1C] pt-2">
                  <li className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full border-2 border-[#CF5A30] bg-transparent shrink-0" />
                    <span>Understand the fundamentals.</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full border-2 border-[#CF5A30] bg-transparent shrink-0" />
                    <span>Build cross-functional capability.</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full border-2 border-[#CF5A30] bg-transparent shrink-0" />
                    <span>Execute in real environments.</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full border-2 border-[#CF5A30] bg-transparent shrink-0" />
                    <span>Deliver measurable outcomes.</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full border-2 border-[#CF5A30] bg-transparent shrink-0" />
                    <span>Lead transformation at scale.</span>
                  </li>
                </ul>
              </div>

              {/* Bottom Bold Statement */}
              <div className="font-sans text-xs font-bold leading-normal text-[#1C1C1C] pt-8 mt-6">
                Progression is built into the architecture.
              </div>
            </div>


            {/* Column 04: CROSS-FUNCTIONAL BY DESIGN */}
            <div className="lg:pl-8 flex flex-col justify-between pt-6 lg:pt-0">
              <div className="space-y-6">
                <span className="font-bebas text-5xl sm:text-6xl font-bold text-[#CF5A30] block leading-none">
                  04
                </span>
                
                <div className="space-y-1">
                  <span className="font-sans text-[11px] font-extrabold tracking-widest text-[#1C1C1C] uppercase block">
                    CROSS-FUNCTIONAL
                  </span>
                  <h2 className="font-bebas text-2xl sm:text-3xl text-[#1C1C1C] uppercase leading-tight">
                    BY DESIGN
                  </h2>
                </div>

                <p className="font-sans text-sm leading-relaxed text-[#3A3E40]">
                  Real enterprise problems do not belong to one function. Neither does our architecture.
                </p>

                {/* Plus Sign List */}
                <ul className="space-y-3 font-sans text-sm text-[#1C1C1C] pt-2">
                  <li className="flex items-center gap-2.5">
                    <span className="font-bold text-[#1C1C1C] text-base">+</span>
                    <span>Break silos.</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="font-bold text-[#1C1C1C] text-base">+</span>
                    <span>Connect disciplines.</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="font-bold text-[#1C1C1C] text-base">+</span>
                    <span>Align teams.</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="font-bold text-[#1C1C1C] text-base">+</span>
                    <span>Accelerate execution.</span>
                  </li>
                </ul>
              </div>

              {/* Bottom Bold Statement */}
              <div className="font-sans text-xs font-bold leading-normal text-[#1C1C1C] pt-8 mt-6">
                Integration is the multiplier of capability.
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* SECTION 05: 2-Column Section with Interactive Matrix Card (#F4EFE6 Warm Cream Background) */}
      <section className="bg-[#F4EFE6] py-16 md:py-24 px-6 md:px-12 lg:px-20 border-b border-[#1C1C1C]/10">
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Number + Title + Sub-text */}
            <div className="lg:col-span-5 space-y-6">
              <span className="font-bebas text-5xl sm:text-6xl font-bold text-[#CF5A30] block leading-none">
                05
              </span>

              <div className="space-y-2">
                <span className="font-sans text-[11px] font-extrabold tracking-widest text-[#555555] uppercase block">
                  THE KYUREEUS CAPABILITY ARCHITECTURE
                </span>
                <h2 className="font-bebas text-3xl sm:text-4xl md:text-[42px] leading-[1.05] tracking-wide text-[#1C1C1C] uppercase">
                  A CONNECTED SYSTEM THAT DEVELOPS BUILDERS, LEADERS AND TRANSFORMERS.
                </h2>
              </div>

              <p className="font-sans text-sm md:text-[15px] leading-relaxed text-[#3A3E40]">
                From first principles to enterprise impact, every capability has a place. Every capability has a purpose. Every capability creates value.
              </p>
            </div>

            {/* Right Column: Full Capability Matrix Grid Card */}
            <div className="lg:col-span-7">
              <div className="rounded-[16px] bg-[#18181C] shadow-2xl border border-[#1C1C1C]/20 overflow-hidden text-left">
                
                {/* 1. ENTERPRISE OUTCOMES ROW */}
                <div className="grid grid-cols-12 border-b border-white/10">
                  <div className="col-span-4 bg-[#141416] p-4 sm:p-5 flex items-center gap-2.5 border-r border-white/10">
                    <Trophy className="h-4 w-4 text-white shrink-0" />
                    <div>
                      <span className="font-sans text-[10px] font-extrabold tracking-widest text-white uppercase block leading-tight">
                        ENTERPRISE
                      </span>
                      <span className="font-sans text-[9px] text-gray-400 uppercase tracking-wider block">
                        OUTCOMES
                      </span>
                    </div>
                  </div>
                  <div className="col-span-8 bg-[#F5F2EB] p-3 sm:p-4 grid grid-cols-3 gap-2 text-center text-[#1C1C1C]">
                    <div className="flex flex-col items-center justify-center p-1.5 rounded hover:bg-white/60 transition-colors group cursor-pointer">
                      <TrendingUp className="h-3.5 w-3.5 text-[#CF5A30] mb-1 group-hover:scale-125 group-hover:-translate-y-0.5 group-hover:text-[#CF5A30] transition-all duration-300" />
                      <span className="font-sans text-[11px] font-bold">Growth</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-1.5 rounded hover:bg-white/60 transition-colors group cursor-pointer">
                      <Lightbulb className="h-3.5 w-3.5 text-[#1C1C1C] mb-1 group-hover:scale-125 group-hover:-translate-y-0.5 group-hover:text-[#CF5A30] transition-all duration-300" />
                      <span className="font-sans text-[11px] font-bold">Innovation</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-1.5 rounded hover:bg-white/60 transition-colors group cursor-pointer">
                      <Activity className="h-3.5 w-3.5 text-[#1C1C1C] mb-1 group-hover:scale-125 group-hover:-translate-y-0.5 group-hover:text-[#CF5A30] transition-all duration-300" />
                      <span className="font-sans text-[11px] font-bold">Operational Excellence</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-1.5 rounded hover:bg-white/60 transition-colors group cursor-pointer">
                      <Users className="h-3.5 w-3.5 text-[#1C1C1C] mb-1 group-hover:scale-125 group-hover:-translate-y-0.5 group-hover:text-[#CF5A30] transition-all duration-300" />
                      <span className="font-sans text-[11px] font-bold">Customer Impact</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-1.5 rounded hover:bg-white/60 transition-colors group cursor-pointer">
                      <Shield className="h-3.5 w-3.5 text-[#1C1C1C] mb-1 group-hover:scale-125 group-hover:-translate-y-0.5 group-hover:text-[#CF5A30] transition-all duration-300" />
                      <span className="font-sans text-[11px] font-bold">Resilience</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-1.5 rounded hover:bg-white/60 transition-colors group cursor-pointer">
                      <Globe className="h-3.5 w-3.5 text-[#1C1C1C] mb-1 group-hover:scale-125 group-hover:-translate-y-0.5 group-hover:text-[#CF5A30] transition-all duration-300" />
                      <span className="font-sans text-[11px] font-bold">Sustainable Advantage</span>
                    </div>
                  </div>
                </div>

                {/* 2. EXECUTION LAYER ROW */}
                <div className="grid grid-cols-12 border-b border-white/10">
                  <div className="col-span-4 bg-[#141416] p-4 sm:p-5 flex items-center gap-2.5 border-r border-white/10">
                    <Rocket className="h-4 w-4 text-white shrink-0" />
                    <div>
                      <span className="font-sans text-[10px] font-extrabold tracking-widest text-white uppercase block leading-tight">
                        EXECUTION
                      </span>
                      <span className="font-sans text-[9px] text-gray-400 uppercase tracking-wider block">
                        LAYER
                      </span>
                    </div>
                  </div>
                  <div className="col-span-8 bg-[#F5F2EB] p-3 sm:p-4 grid grid-cols-3 gap-2 text-center text-[#1C1C1C]">
                    <div className="flex flex-col items-center justify-center p-1.5 rounded hover:bg-white/60 transition-colors group cursor-pointer">
                      <Compass className="h-3.5 w-3.5 text-[#1C1C1C] mb-1 group-hover:scale-125 group-hover:-translate-y-0.5 group-hover:text-[#CF5A30] transition-all duration-300" />
                      <span className="font-sans text-[11px] font-bold">Strategy</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-1.5 rounded hover:bg-white/60 transition-colors group cursor-pointer">
                      <Box className="h-3.5 w-3.5 text-[#1C1C1C] mb-1 group-hover:scale-125 group-hover:-translate-y-0.5 group-hover:text-[#CF5A30] transition-all duration-300" />
                      <span className="font-sans text-[11px] font-bold">Products</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-1.5 rounded hover:bg-white/60 transition-colors group cursor-pointer">
                      <Settings className="h-3.5 w-3.5 text-[#1C1C1C] mb-1 group-hover:scale-125 group-hover:-translate-y-0.5 group-hover:text-[#CF5A30] transition-all duration-300" />
                      <span className="font-sans text-[11px] font-bold">Operations</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-1.5 rounded hover:bg-white/60 transition-colors group cursor-pointer">
                      <Send className="h-3.5 w-3.5 text-[#1C1C1C] mb-1 group-hover:scale-125 group-hover:-translate-y-0.5 group-hover:text-[#CF5A30] transition-all duration-300" />
                      <span className="font-sans text-[11px] font-bold">Go-to-Market</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-1.5 rounded hover:bg-white/60 transition-colors group cursor-pointer">
                      <BarChart2 className="h-3.5 w-3.5 text-[#1C1C1C] mb-1 group-hover:scale-125 group-hover:-translate-y-0.5 group-hover:text-[#CF5A30] transition-all duration-300" />
                      <span className="font-sans text-[11px] font-bold">Performance</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-1.5 rounded hover:bg-white/60 transition-colors group cursor-pointer">
                      <RefreshCw className="h-3.5 w-3.5 text-[#1C1C1C] mb-1 group-hover:scale-125 group-hover:-translate-y-0.5 group-hover:text-[#CF5A30] transition-all duration-300" />
                      <span className="font-sans text-[11px] font-bold">Continuous Improvement</span>
                    </div>
                  </div>
                </div>

                {/* 3. CAPABILITY LAYER ROW */}
                <div className="grid grid-cols-12 border-b border-white/10">
                  <div className="col-span-4 bg-[#141416] p-4 sm:p-5 flex items-center gap-2.5 border-r border-white/10">
                    <Cpu className="h-4 w-4 text-white shrink-0" />
                    <div>
                      <span className="font-sans text-[10px] font-extrabold tracking-widest text-white uppercase block leading-tight">
                        CAPABILITY
                      </span>
                      <span className="font-sans text-[9px] text-gray-400 uppercase tracking-wider block">
                        LAYER
                      </span>
                    </div>
                  </div>
                  <div className="col-span-8 bg-[#F5F2EB] p-3 sm:p-4 grid grid-cols-3 gap-2 text-center text-[#1C1C1C]">
                    <div className="flex flex-col items-center justify-center p-1.5 rounded hover:bg-white/60 transition-colors group cursor-pointer">
                      <Building2 className="h-3.5 w-3.5 text-[#1C1C1C] mb-1 group-hover:scale-125 group-hover:-translate-y-0.5 group-hover:text-[#CF5A30] transition-all duration-300" />
                      <span className="font-sans text-[11px] font-bold">Business</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-1.5 rounded hover:bg-white/60 transition-colors group cursor-pointer">
                      <Code className="h-3.5 w-3.5 text-[#1C1C1C] mb-1 group-hover:scale-125 group-hover:-translate-y-0.5 group-hover:text-[#CF5A30] transition-all duration-300" />
                      <span className="font-sans text-[11px] font-bold">Engineering</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-1.5 rounded hover:bg-white/60 transition-colors group cursor-pointer">
                      <Zap className="h-3.5 w-3.5 text-[#CF5A30] mb-1 group-hover:scale-125 group-hover:-translate-y-0.5 group-hover:text-[#CF5A30] transition-all duration-300" />
                      <span className="font-sans text-[11px] font-bold">Artificial Intelligence</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-1.5 rounded hover:bg-white/60 transition-colors group cursor-pointer">
                      <Layers className="h-3.5 w-3.5 text-[#1C1C1C] mb-1 group-hover:scale-125 group-hover:-translate-y-0.5 group-hover:text-[#CF5A30] transition-all duration-300" />
                      <span className="font-sans text-[11px] font-bold">Operations</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-1.5 rounded hover:bg-white/60 transition-colors group cursor-pointer">
                      <UserCheck className="h-3.5 w-3.5 text-[#1C1C1C] mb-1 group-hover:scale-125 group-hover:-translate-y-0.5 group-hover:text-[#CF5A30] transition-all duration-300" />
                      <span className="font-sans text-[11px] font-bold">Leadership</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-1.5 rounded hover:bg-white/60 transition-colors group cursor-pointer">
                      <Play className="h-3.5 w-3.5 text-[#1C1C1C] mb-1 group-hover:scale-125 group-hover:-translate-y-0.5 group-hover:text-[#CF5A30] transition-all duration-300" />
                      <span className="font-sans text-[11px] font-bold">Execution</span>
                    </div>
                  </div>
                </div>

                {/* 4. FOUNDATION LAYER ROW */}
                <div className="grid grid-cols-12 border-b border-white/10">
                  <div className="col-span-4 bg-[#141416] p-4 sm:p-5 flex items-center gap-2.5 border-r border-white/10">
                    <Database className="h-4 w-4 text-white shrink-0" />
                    <div>
                      <span className="font-sans text-[10px] font-extrabold tracking-widest text-white uppercase block leading-tight">
                        FOUNDATION
                      </span>
                      <span className="font-sans text-[9px] text-gray-400 uppercase tracking-wider block">
                        LAYER
                      </span>
                    </div>
                  </div>
                  <div className="col-span-8 bg-[#F5F2EB] p-3 sm:p-4 grid grid-cols-3 gap-2 text-center text-[#1C1C1C]">
                    <div className="flex flex-col items-center justify-center p-1.5 rounded hover:bg-white/60 transition-colors group cursor-pointer">
                      <Smile className="h-3.5 w-3.5 text-[#1C1C1C] mb-1 group-hover:scale-125 group-hover:-translate-y-0.5 group-hover:text-[#CF5A30] transition-all duration-300" />
                      <span className="font-sans text-[11px] font-bold">Mindset</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-1.5 rounded hover:bg-white/60 transition-colors group cursor-pointer">
                      <HelpCircle className="h-3.5 w-3.5 text-[#1C1C1C] mb-1 group-hover:scale-125 group-hover:-translate-y-0.5 group-hover:text-[#CF5A30] transition-all duration-300" />
                      <span className="font-sans text-[11px] font-bold">First Principles</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-1.5 rounded hover:bg-white/60 transition-colors group cursor-pointer">
                      <Share2 className="h-3.5 w-3.5 text-[#1C1C1C] mb-1 group-hover:scale-125 group-hover:-translate-y-0.5 group-hover:text-[#CF5A30] transition-all duration-300" />
                      <span className="font-sans text-[11px] font-bold">Systems Thinking</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-1.5 rounded hover:bg-white/60 transition-colors group cursor-pointer">
                      <LayoutGrid className="h-3.5 w-3.5 text-[#1C1C1C] mb-1 group-hover:scale-125 group-hover:-translate-y-0.5 group-hover:text-[#CF5A30] transition-all duration-300" />
                      <span className="font-sans text-[11px] font-bold">Tools & Platforms</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-1.5 rounded hover:bg-white/60 transition-colors group cursor-pointer">
                      <BookOpen className="h-3.5 w-3.5 text-[#1C1C1C] mb-1 group-hover:scale-125 group-hover:-translate-y-0.5 group-hover:text-[#CF5A30] transition-all duration-300" />
                      <span className="font-sans text-[11px] font-bold">Data Literacy</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-1.5 rounded text-gray-400">
                      <span className="font-sans text-[11px] font-bold">—</span>
                    </div>
                  </div>
                </div>

                {/* 5. PURPOSE ROW */}
                <div className="grid grid-cols-12">
                  <div className="col-span-4 bg-[#CF5A30] p-4 sm:p-5 flex items-center gap-2.5 text-white">
                    <Star className="h-4 w-4 fill-white text-white shrink-0" />
                    <span className="font-sans text-[11px] font-extrabold tracking-widest uppercase">
                      PURPOSE
                    </span>
                  </div>
                  <div className="col-span-8 bg-white p-4 flex items-center justify-center text-center">
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


      {/* SECTION 06, 07, 08: Three Column Layout Grid (#FFFFFF Clean White Background with Vertical Lines) */}
      <section className="bg-[#FFFFFF] py-16 md:py-24 px-6 md:px-12 lg:px-20 border-b border-[#1C1C1C]/10">
        <div className="mx-auto max-w-7xl w-full">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-0 divide-y md:divide-y-0 md:divide-x divide-[#1C1C1C]/15">
            
            {/* Column 06: BUILT TO ADAPT TO YOUR ENTERPRISE */}
            <div className="md:pr-8 flex flex-col justify-between pt-6 md:pt-0">
              <div className="space-y-6">
                <span className="font-bebas text-5xl sm:text-6xl font-bold text-[#CF5A30] block leading-none">
                  06
                </span>
                
                <div className="space-y-1">
                  <span className="font-sans text-[11px] font-extrabold tracking-widest text-[#1C1C1C] uppercase block">
                    BUILT TO ADAPT
                  </span>
                  <h2 className="font-bebas text-2xl sm:text-3xl text-[#1C1C1C] uppercase leading-tight">
                    TO YOUR ENTERPRISE
                  </h2>
                </div>

                <p className="font-sans text-sm leading-relaxed text-[#3A3E40]">
                  Every organization is at a different place on its journey. The architecture adapts to your context, priorities and maturity.
                </p>

                {/* Hollow Orange Circle Bullet List */}
                <ul className="space-y-2.5 font-sans text-sm text-[#1C1C1C] pt-2">
                  <li className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full border-2 border-[#CF5A30] bg-transparent shrink-0" />
                    <span>Assess current state.</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full border-2 border-[#CF5A30] bg-transparent shrink-0" />
                    <span>Map capability gaps.</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full border-2 border-[#CF5A30] bg-transparent shrink-0" />
                    <span>Build targeted pathways.</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full border-2 border-[#CF5A30] bg-transparent shrink-0" />
                    <span>Measure progress.</span>
                  </li>
                </ul>
              </div>

              {/* Bottom Bold Statement */}
              <div className="font-sans text-xs font-bold leading-normal text-[#1C1C1C] pt-8 mt-6">
                Your architecture. Your transformation.
              </div>
            </div>


            {/* Column 07: MEASURABLE. VISIBLE. REPEATABLE. */}
            <div className="md:px-8 flex flex-col justify-between pt-6 md:pt-0">
              <div className="space-y-6">
                <span className="font-bebas text-5xl sm:text-6xl font-bold text-[#CF5A30] block leading-none">
                  07
                </span>
                
                <div className="space-y-1">
                  <span className="font-sans text-[11px] font-extrabold tracking-widest text-[#1C1C1C] uppercase block">
                    MEASURABLE.
                  </span>
                  <h2 className="font-bebas text-2xl sm:text-3xl text-[#1C1C1C] uppercase leading-tight">
                    VISIBLE. REPEATABLE.
                  </h2>
                </div>

                <p className="font-sans text-sm leading-relaxed text-[#3A3E40]">
                  What gets measured gets built. Our architecture makes capability visible at every level.
                </p>

                {/* Checkmark List */}
                <ul className="space-y-2.5 font-sans text-sm text-[#1C1C1C] pt-2">
                  <li className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-[#1C1C1C] shrink-0 font-bold" />
                    <span>Capability frameworks</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-[#1C1C1C] shrink-0 font-bold" />
                    <span>Assessment models</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-[#1C1C1C] shrink-0 font-bold" />
                    <span>Progress dashboards</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-[#1C1C1C] shrink-0 font-bold" />
                    <span>Outcome metrics</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-[#1C1C1C] shrink-0 font-bold" />
                    <span>Impact measurement</span>
                  </li>
                </ul>
              </div>

              {/* Bottom Bold Statement */}
              <div className="font-sans text-xs font-bold leading-normal text-[#1C1C1C] pt-8 mt-6">
                Visibility drives improvement. Measurement drives results.
              </div>
            </div>


            {/* Column 08: A LIVING ARCHITECTURE THAT EVOLVES */}
            <div className="md:pl-8 flex flex-col justify-between pt-6 md:pt-0">
              <div className="space-y-6">
                <span className="font-bebas text-5xl sm:text-6xl font-bold text-[#CF5A30] block leading-none">
                  08
                </span>
                
                <div className="space-y-1">
                  <span className="font-sans text-[11px] font-extrabold tracking-widest text-[#1C1C1C] uppercase block">
                    A LIVING ARCHITECTURE
                  </span>
                  <h2 className="font-bebas text-2xl sm:text-3xl text-[#1C1C1C] uppercase leading-tight">
                    THAT EVOLVES
                  </h2>
                </div>

                <p className="font-sans text-sm leading-relaxed text-[#3A3E40]">
                  The world changes. Your capability architecture evolves with it to embrace:
                </p>

                {/* Hollow Orange Circle Bullet List */}
                <ul className="space-y-2.5 font-sans text-sm text-[#1C1C1C] pt-2">
                  <li className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full border-2 border-[#CF5A30] bg-transparent shrink-0" />
                    <span>New technologies.</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full border-2 border-[#CF5A30] bg-transparent shrink-0" />
                    <span>New business models.</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full border-2 border-[#CF5A30] bg-transparent shrink-0" />
                    <span>New customer expectations.</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full border-2 border-[#CF5A30] bg-transparent shrink-0" />
                    <span>New opportunities.</span>
                  </li>
                </ul>
              </div>

              {/* Bottom Bold Statement */}
              <div className="font-sans text-xs font-bold leading-normal text-[#1C1C1C] pt-8 mt-6">
                Evolve the architecture. Stay ahead of change.
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* Final Call to Action Section (Dark #0E0E10 / #121212 Background matching Image 2 design) */}
      <section className="relative bg-[#0E0E10] text-[#FFFFFF] py-20 md:py-28 px-6 md:px-12 lg:px-20 overflow-hidden select-none border-t border-white/10">
        <div className="mx-auto max-w-7xl w-full space-y-10">
          
          {/* Top Label */}
          <div className="font-sans text-xs font-extrabold tracking-widest text-[#CF5A30] uppercase">
            BUILD THE FUTURE
          </div>

          {/* Headline Title */}
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-[56px] lg:text-[64px] leading-[1.02] tracking-wide uppercase max-w-3xl">
            <span className="text-[#FFFFFF] block">GREAT ENTERPRISES ARE NOT</span>
            <span className="text-[#FFFFFF] block">BORN.</span>
            <span className="text-[#CF5A30] block pt-1">THEY ARE ARCHITECTED.</span>
          </h2>

          {/* 4 Feature Nodes Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-4 pb-2">
            
            {/* Feature 1 */}
            <div className="space-y-3 group cursor-pointer">
              <Share2 className="h-6 w-6 text-[#CF5A30] group-hover:scale-125 group-hover:-translate-y-1 transition-all duration-300" />
              <p className="font-sans text-xs sm:text-sm font-bold text-white leading-snug group-hover:text-[#CF5A30] transition-colors duration-300">
                Build connected capability
              </p>
            </div>

            {/* Feature 2 */}
            <div className="space-y-3 group cursor-pointer">
              <Layers className="h-6 w-6 text-[#CF5A30] group-hover:scale-125 group-hover:-translate-y-1 transition-all duration-300" />
              <p className="font-sans text-xs sm:text-sm font-bold text-white leading-snug group-hover:text-[#CF5A30] transition-colors duration-300">
                Strengthen every layer
              </p>
            </div>

            {/* Feature 3 */}
            <div className="space-y-3 group cursor-pointer">
              <BarChart2 className="h-6 w-6 text-[#CF5A30] group-hover:scale-125 group-hover:-translate-y-1 transition-all duration-300" />
              <p className="font-sans text-xs sm:text-sm font-bold text-white leading-snug group-hover:text-[#CF5A30] transition-colors duration-300">
                Create measurable impact
              </p>
            </div>

            {/* Feature 4 */}
            <div className="space-y-3 group cursor-pointer">
              <Sparkles className="h-6 w-6 text-[#CF5A30] group-hover:scale-125 group-hover:-translate-y-1 transition-all duration-300" />
              <p className="font-sans text-xs sm:text-sm font-bold text-white leading-snug group-hover:text-[#CF5A30] transition-colors duration-300">
                Compound enterprise value
              </p>
            </div>

          </div>

          {/* CTA Button */}
          <div className="pt-2">
            <Link href="/bootcamps">
              <Button className="group flex items-center gap-2.5 rounded-[4px] bg-[#CF5A30] hover:bg-white text-white hover:text-[#121212] px-8 py-6 text-xs sm:text-sm font-bold tracking-widest uppercase transition-colors duration-300 shadow-lg cursor-pointer">
                EXPLORE THE CAPABILITY ARCHITECTURE
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

        </div>
      </section>
      </div>
    </div>
  );
}
