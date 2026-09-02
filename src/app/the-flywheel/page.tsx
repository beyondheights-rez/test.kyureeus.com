"use client";

import React from "react";
import Link from "next/link";
import { 
  Building2, 
  ArrowRight, 
  Brain, 
  Zap, 
  Target, 
  FileText, 
  Handshake, 
  TrendingUp, 
  Users, 
  Shield, 
  Check, 
  Sparkles,
  Activity
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { TheFlywheelPageFlywheel } from "@/components/features/theflywheel-flywheel";

export default function TheFlywheelPage() {
  return (
    <div className="flex flex-col flex-1 min-h-screen bg-[#F5F2EB] text-[#1C1C1C] w-full overflow-x-clip">
      
      {/* SECTION 01: Hero Section (2-Column: Left Copy / Right Circular Flywheel Diagram) */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-10 md:py-14 lg:py-16 bg-[#F5F2EB] text-[#121212] overflow-hidden">
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 xl:gap-16 items-center">
            
            {/* Left Column: Headline & Description */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6 md:space-y-8">
              {/* Category Label */}
              <div className="text-xs font-extrabold tracking-widest text-[#CF5A30] uppercase">
                THE FLYWHEEL
              </div>

              {/* Headline Title */}
              <h1 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[62px] leading-[1.02] tracking-wide uppercase">
                <span className="text-[#1C1C1C] block">
                  CAPABILITY COMPOUNDS.
                </span>
                <span className="text-[#CF5A30] block pt-1">
                  SO DOES VALUE.
                </span>
              </h1>

              {/* Description Paragraphs */}
              <div className="space-y-3.5 font-sans text-[15px] sm:text-base leading-relaxed text-[#3A3E40]">
                <p>
                  Transformation is not a one-time project. It is a continuous cycle of building capability and driving performance outcomes.
                </p>

                <p>
                  The <strong className="font-bold text-[#1C1C1C]">Kyureeus Flywheel</strong> is how organizations get stronger every cycle.
                </p>
              </div>

              {/* Summary Statement */}
              <div className="font-sans text-[15px] sm:text-base font-bold text-[#CF5A30]">
                Build capability. Create outcomes. Strengthen the future.
              </div>

              {/* CTA Button */}
              <div className="pt-2 w-full sm:w-auto">
                <Link href="#flywheel-details" className="w-full sm:w-auto block">
                  <Button className="w-full sm:w-auto group flex items-center justify-center gap-2.5 rounded-[4px] bg-[#CF5A30] hover:bg-[#121212] text-[#F5F2EB] px-6 sm:px-8 py-5 sm:py-6 text-xs sm:text-sm font-bold tracking-widest uppercase transition-colors duration-300 shadow-md cursor-pointer min-h-[48px]">
                    SEE THE FLYWHEEL IN ACTION
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column: Interactive Flywheel */}
            <div className="lg:col-span-6 flex items-center justify-center py-2 sm:py-4 w-full">
              <div id="flywheel" className="relative max-w-[340px] sm:max-w-[460px] md:max-w-[560px] lg:max-w-[680px] qhd:max-w-[850px] uhd:max-w-[1100px] w-full flex items-center justify-center mx-auto">
                <TheFlywheelPageFlywheel />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 02: Six Boxes Section (#F4EFE6 Warm Beige Background) */}
      <section id="flywheel-details" className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center bg-[#F4EFE6] py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-20 border-b border-[#1C1C1C]/10">
        <div className="mx-auto max-w-7xl w-full">
        
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-5">
            
            {/* Box 01: ENTERPRISE CHALLENGES */}
            <div className="group bg-white p-4 sm:p-5 rounded-[14px] border border-[#1C1C1C]/10 shadow-2xs flex flex-col justify-between space-y-4 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer">
              <div className="space-y-3">
                <span className="font-bebas text-3xl font-bold text-[#555555] group-hover:text-[#CF5A30] transition-colors duration-300">
                  01
                </span>
                
                <div className="h-9 w-9 rounded-full border border-[#1C1C1C]/20 flex items-center justify-center text-[#1C1C1C] group-hover:bg-[#CF5A30] group-hover:border-[#CF5A30] group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-2xs">
                  <Handshake className="h-4.5 w-4.5" />
                </div>

                <h3 className="font-bebas text-xl sm:text-[22px] text-[#1C1C1C] group-hover:text-[#CF5A30] transition-colors duration-300 uppercase leading-tight">
                  ENTERPRISE CHALLENGES
                </h3>

                <ul className="space-y-2 font-sans text-[13.5px] sm:text-[14px] text-[#444444] leading-relaxed">
                  <li>Markets change.</li>
                  <li>Technology advances.</li>
                  <li>Customer expectations rise.</li>
                  <li>New problems emerge.</li>
                </ul>
              </div>

              <div className="font-sans text-[13px] sm:text-[13.5px] font-bold text-[#CF5A30] pt-2.5 border-t border-[#1C1C1C]/10">
                The enterprise identifies what must change.
              </div>
            </div>

            {/* Box 02: CAPABILITY DEVELOPMENT */}
            <div className="group bg-white p-4 sm:p-5 rounded-[14px] border border-[#1C1C1C]/10 shadow-2xs flex flex-col justify-between space-y-4 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer">
              <div className="space-y-3">
                <span className="font-bebas text-3xl font-bold text-[#555555] group-hover:text-[#CF5A30] transition-colors duration-300">
                  02
                </span>
                
                <div className="h-9 w-9 rounded-full border border-[#1C1C1C]/20 flex items-center justify-center text-[#1C1C1C] group-hover:bg-[#CF5A30] group-hover:border-[#CF5A30] group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-2xs">
                  <Brain className="h-4.5 w-4.5" />
                </div>

                <h3 className="font-bebas text-xl sm:text-[22px] text-[#1C1C1C] group-hover:text-[#CF5A30] transition-colors duration-300 uppercase leading-tight">
                  CAPABILITY DEVELOPMENT
                </h3>

                <ul className="space-y-2 font-sans text-[13.5px] sm:text-[14px] text-[#444444] leading-relaxed">
                  <li>The right people are developed.</li>
                  <li>Skills are integrated.</li>
                  <li>Mindsets are strengthened.</li>
                  <li>Judgment is built.</li>
                </ul>
              </div>

              <div className="font-sans text-[13px] sm:text-[13.5px] font-bold text-[#CF5A30] pt-2.5 border-t border-[#1C1C1C]/10">
                Capability becomes the advantage.
              </div>
            </div>

            {/* Box 03: EXECUTION */}
            <div className="group bg-white p-4 sm:p-5 rounded-[14px] border border-[#1C1C1C]/10 shadow-2xs flex flex-col justify-between space-y-4 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer">
              <div className="space-y-3">
                <span className="font-bebas text-3xl font-bold text-[#555555] group-hover:text-[#CF5A30] transition-colors duration-300">
                  03
                </span>
                
                <div className="h-9 w-9 rounded-full border border-[#1C1C1C]/20 flex items-center justify-center text-[#1C1C1C] group-hover:bg-[#CF5A30] group-hover:border-[#CF5A30] group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-2xs">
                  <Zap className="h-4.5 w-4.5" />
                </div>

                <h3 className="font-bebas text-xl sm:text-[22px] text-[#1C1C1C] group-hover:text-[#CF5A30] transition-colors duration-300 uppercase leading-tight">
                  EXECUTION
                </h3>

                <ul className="space-y-2 font-sans text-[13.5px] sm:text-[14px] text-[#444444] leading-relaxed">
                  <li>Applied to real initiatives.</li>
                  <li>Ideas become plans.</li>
                  <li>Plans become systems.</li>
                  <li>Systems go live.</li>
                </ul>
              </div>

              <div className="font-sans text-[13px] sm:text-[13.5px] font-bold text-[#CF5A30] pt-2.5 border-t border-[#1C1C1C]/10">
                Execution turns capability into action.
              </div>
            </div>

            {/* Box 04: OUTCOMES */}
            <div className="group bg-white p-4 sm:p-5 rounded-[14px] border border-[#1C1C1C]/10 shadow-2xs flex flex-col justify-between space-y-4 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer">
              <div className="space-y-3">
                <span className="font-bebas text-3xl font-bold text-[#555555] group-hover:text-[#CF5A30] transition-colors duration-300">
                  04
                </span>
                
                <div className="h-9 w-9 rounded-full border border-[#1C1C1C]/20 flex items-center justify-center text-[#1C1C1C] group-hover:bg-[#CF5A30] group-hover:border-[#CF5A30] group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-2xs">
                  <Target className="h-4.5 w-4.5" />
                </div>

                <h3 className="font-bebas text-xl sm:text-[22px] text-[#1C1C1C] group-hover:text-[#CF5A30] transition-colors duration-300 uppercase leading-tight">
                  OUTCOMES
                </h3>

                <ul className="space-y-2 font-sans text-[13.5px] sm:text-[14px] text-[#444444] leading-relaxed">
                  <li>Performance improves.</li>
                  <li>Processes are optimized.</li>
                  <li>Products are launched.</li>
                  <li>Value is created.</li>
                </ul>
              </div>

              <div className="font-sans text-[13px] sm:text-[13.5px] font-bold text-[#CF5A30] pt-2.5 border-t border-[#1C1C1C]/10">
                Outcomes prove the impact.
              </div>
            </div>

            {/* Box 05: EVIDENCE */}
            <div className="group bg-white p-4 sm:p-5 rounded-[14px] border border-[#1C1C1C]/10 shadow-2xs flex flex-col justify-between space-y-4 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer">
              <div className="space-y-3">
                <span className="font-bebas text-3xl font-bold text-[#555555] group-hover:text-[#CF5A30] transition-colors duration-300">
                  05
                </span>
                
                <div className="h-9 w-9 rounded-full border border-[#1C1C1C]/20 flex items-center justify-center text-[#1C1C1C] group-hover:bg-[#CF5A30] group-hover:border-[#CF5A30] group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-2xs">
                  <FileText className="h-4.5 w-4.5" />
                </div>

                <h3 className="font-bebas text-xl sm:text-[22px] text-[#1C1C1C] group-hover:text-[#CF5A30] transition-colors duration-300 uppercase leading-tight">
                  EVIDENCE
                </h3>

                <ul className="space-y-2 font-sans text-[13.5px] sm:text-[14px] text-[#444444] leading-relaxed">
                  <li>Execution generates data.</li>
                  <li>Results are measured.</li>
                  <li>Insights are captured.</li>
                  <li>Capability is validated.</li>
                </ul>
              </div>

              <div className="font-sans text-[13px] sm:text-[13.5px] font-bold text-[#CF5A30] pt-2.5 border-t border-[#1C1C1C]/10">
                Evidence informs the next cycle.
              </div>
            </div>

            {/* Box 06: ENTERPRISE ADVANTAGE */}
            <div className="group bg-white p-4 sm:p-5 rounded-[14px] border border-[#1C1C1C]/10 shadow-2xs flex flex-col justify-between space-y-4 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer">
              <div className="space-y-3">
                <span className="font-bebas text-3xl font-bold text-[#555555] group-hover:text-[#CF5A30] transition-colors duration-300">
                  06
                </span>
                
                <div className="h-9 w-9 rounded-full border border-[#1C1C1C]/20 flex items-center justify-center text-[#1C1C1C] group-hover:bg-[#CF5A30] group-hover:border-[#CF5A30] group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-2xs">
                  <Building2 className="h-4.5 w-4.5" />
                </div>

                <h3 className="font-bebas text-xl sm:text-[22px] text-[#1C1C1C] group-hover:text-[#CF5A30] transition-colors duration-300 uppercase leading-tight">
                  ENTERPRISE ADVANTAGE
                </h3>

                <ul className="space-y-2 font-sans text-[13.5px] sm:text-[14px] text-[#444444] leading-relaxed">
                  <li>Organization grows stronger.</li>
                  <li>Capability compounds.</li>
                  <li>Resilience increases.</li>
                  <li>Flywheel turns faster.</li>
                </ul>
              </div>

              <div className="font-sans text-[13px] sm:text-[13.5px] font-bold text-[#CF5A30] pt-2.5 border-t border-[#1C1C1C]/10">
                Advantage becomes enduring.
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 03: Three Cards Section (#F5F2EB Background) */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center bg-[#F5F2EB] py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-20 border-b border-[#1C1C1C]/10">
        <div className="mx-auto max-w-7xl w-full">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            
            {/* Card 07: THE FLYWHEEL TURNS */}
            <div className="group bg-white p-5 sm:p-6 lg:p-7 rounded-[16px] border border-[#1C1C1C]/10 shadow-md flex flex-col justify-between space-y-6 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer">
              <div className="space-y-4">
                <span className="font-bebas text-3xl font-bold text-[#1C1C1C] block leading-none group-hover:text-[#CF5A30] transition-colors duration-300">
                  07
                </span>
                
                <span className="font-sans text-xs font-black tracking-widest text-[#555555] uppercase block">
                  THE FLYWHEEL TURNS
                </span>

                {/* Diagram Viewport Image */}
                <div className="py-2 flex items-center justify-center relative">
                  <img 
                    src="https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/kyureeus-assets/KyureeusFlyWheel/diagram-viewport.png" 
                    alt="The Flywheel Turns Diagram" 
                    loading="eager"
                    decoding="async"
                    crossOrigin="anonymous"
                    className="w-full max-w-[200px] sm:max-w-[220px] h-auto object-contain drop-shadow-xs group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Bottom Orange Title & Text */}
              <div className="space-y-1 pt-3 border-t border-[#1C1C1C]/10">
                <div className="font-sans text-[15px] sm:text-[16px] font-bold text-[#CF5A30]">
                  Then the cycle begins again.
                </div>
                <p className="font-sans text-[13px] sm:text-[14px] text-[#555555] leading-relaxed">
                  Each turn is faster, stronger, and more valuable than the one before.
                </p>
              </div>
            </div>

            {/* Card 08: WHY IT COMPOUNDS */}
            <div className="group bg-white p-5 sm:p-6 lg:p-7 rounded-[16px] border border-[#1C1C1C]/10 shadow-md flex flex-col justify-between space-y-6 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer">
              <div className="space-y-4">
                <span className="font-bebas text-3xl font-bold text-[#1C1C1C] block leading-none group-hover:text-[#CF5A30] transition-colors duration-300">
                  08
                </span>
                
                <span className="font-sans text-xs font-black tracking-widest text-[#555555] uppercase block">
                  WHY IT COMPOUNDS
                </span>

                {/* Checkmark List */}
                <div className="space-y-3 pt-1">
                  
                  <div className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-[#CF5A30] shrink-0 font-bold mt-0.5" />
                    <div className="space-y-0.5">
                      <div className="font-sans text-[14px] sm:text-[15px] font-bold text-[#1C1C1C] group-hover:text-[#CF5A30] transition-colors duration-300">
                        Compounding Capability
                      </div>
                      <p className="font-sans text-[12.5px] sm:text-[13.5px] text-[#555555]">
                        Every cycle develops stronger people and better systems.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-[#CF5A30] shrink-0 font-bold mt-0.5" />
                    <div className="space-y-0.5">
                      <div className="font-sans text-[14px] sm:text-[15px] font-bold text-[#1C1C1C] group-hover:text-[#CF5A30] transition-colors duration-300">
                        Compounding Outcomes
                      </div>
                      <p className="font-sans text-[12.5px] sm:text-[13.5px] text-[#555555]">
                        Better capability delivers better results at greater scale.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-[#CF5A30] shrink-0 font-bold mt-0.5" />
                    <div className="space-y-0.5">
                      <div className="font-sans text-[14px] sm:text-[15px] font-bold text-[#1C1C1C] group-hover:text-[#CF5A30] transition-colors duration-300">
                        Compounding Knowledge
                      </div>
                      <p className="font-sans text-[12.5px] sm:text-[13.5px] text-[#555555]">
                        Evidence captured today becomes capability tomorrow.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-[#CF5A30] shrink-0 font-bold mt-0.5" />
                    <div className="space-y-0.5">
                      <div className="font-sans text-[14px] sm:text-[15px] font-bold text-[#1C1C1C] group-hover:text-[#CF5A30] transition-colors duration-300">
                        Compounding Advantage
                      </div>
                      <p className="font-sans text-[12.5px] sm:text-[13.5px] text-[#555555]">
                        Competitors can buy tools. They cannot replicate your flywheel.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom Summary */}
              <div className="font-sans text-[13.5px] sm:text-[14.5px] font-bold text-[#CF5A30] pt-3 border-t border-[#1C1C1C]/10">
                Compounding is how great enterprises stay great.
              </div>
            </div>

            {/* Card 09: THE RESULT */}
            <div className="group bg-white p-5 sm:p-6 lg:p-7 rounded-[16px] border border-[#1C1C1C]/10 shadow-md flex flex-col justify-between space-y-6 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer">
              <div className="space-y-4">
                <span className="font-bebas text-3xl font-bold text-[#1C1C1C] block leading-none group-hover:text-[#CF5A30] transition-colors duration-300">
                  09
                </span>
                
                <span className="font-sans text-xs font-black tracking-widest text-[#555555] uppercase block">
                  THE RESULT
                </span>

                {/* List with Icons + Exponential Compound Chart Graphic */}
                <div className="grid grid-cols-12 gap-3 items-center pt-1">
                  
                  {/* Left Side Feature Items */}
                  <div className="col-span-7 space-y-2.5">
                    <div className="flex items-center gap-2">
                      <div className="h-7 w-7 rounded-full border border-[#1C1C1C]/20 flex items-center justify-center text-[#1C1C1C] shrink-0 group-hover:bg-[#CF5A30] group-hover:border-[#CF5A30] group-hover:text-white transition-all duration-300">
                        <Users className="h-3.5 w-3.5" />
                      </div>
                      <span className="font-sans text-[12.5px] sm:text-[13px] font-bold text-[#121212] group-hover:text-[#CF5A30] transition-colors duration-300">Stronger capability.</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="h-7 w-7 rounded-full border border-[#1C1C1C]/20 flex items-center justify-center text-[#1C1C1C] shrink-0 group-hover:bg-[#CF5A30] group-hover:border-[#CF5A30] group-hover:text-white transition-all duration-300">
                        <Target className="h-3.5 w-3.5" />
                      </div>
                      <span className="font-sans text-[12.5px] sm:text-[13px] font-bold text-[#121212] group-hover:text-[#CF5A30] transition-colors duration-300">Better decisions.</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="h-7 w-7 rounded-full border border-[#1C1C1C]/20 flex items-center justify-center text-[#1C1C1C] shrink-0 group-hover:bg-[#CF5A30] group-hover:border-[#CF5A30] group-hover:text-white transition-all duration-300">
                        <TrendingUp className="h-3.5 w-3.5" />
                      </div>
                      <span className="font-sans text-[12.5px] sm:text-[13px] font-bold text-[#121212] group-hover:text-[#CF5A30] transition-colors duration-300">Higher performance.</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="h-7 w-7 rounded-full border border-[#1C1C1C]/20 flex items-center justify-center text-[#1C1C1C] shrink-0 group-hover:bg-[#CF5A30] group-hover:border-[#CF5A30] group-hover:text-white transition-all duration-300">
                        <Shield className="h-3.5 w-3.5" />
                      </div>
                      <span className="font-sans text-[12.5px] sm:text-[13px] font-bold text-[#121212]">Enduring advantage.</span>
                    </div>
                  </div>

                  {/* Right Side Exponential Upward Compound Bar Chart */}
                  <div className="col-span-5 flex items-end justify-center h-32 sm:h-36 relative">
                    <svg viewBox="0 0 100 120" className="w-full h-full">
                      <rect x="5" y="100" width="9" height="15" fill="#F4EFE6" rx="2" />
                      <rect x="20" y="85" width="9" height="30" fill="#F4EFE6" rx="2" />
                      <rect x="35" y="68" width="9" height="47" fill="#F4EFE6" rx="2" />
                      <rect x="50" y="48" width="9" height="67" fill="#F4EFE6" rx="2" />
                      <rect x="65" y="25" width="9" height="90" fill="#F4EFE6" rx="2" />
                      <rect x="80" y="5" width="9" height="110" fill="#F4EFE6" rx="2" />

                      <path
                        d="M 5 105 Q 50 80 85 10"
                        fill="none"
                        stroke="#CF5A30"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      <polygon points="85,5 88,15 78,12" fill="#CF5A30" />
                    </svg>
                  </div>

                </div>
              </div>

              {/* Bottom Bold Text & Summary */}
              <div className="space-y-0.5 pt-3 border-t border-[#1C1C1C]/10">
                <div className="font-sans text-[13px] sm:text-[14px] font-bold text-[#1C1C1C] leading-snug">
                  A self-reinforcing system that builds enterprise value every cycle.
                </div>
                <div className="font-sans text-[13px] sm:text-[14px] font-bold text-[#CF5A30]">
                  That is the Kyureeus Flywheel.
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 10: The Bottom Line */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center bg-[#0E0E10] text-[#FFFFFF] py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden select-none border-t border-white/10">
        <div className="mx-auto max-w-7xl w-full space-y-8 md:space-y-10">
          
          {/* Top Headline & CTA Button Container */}
          <div className="space-y-4 sm:space-y-5 max-w-3xl">
            
            <div className="flex items-center gap-2">
              <span className="font-bebas text-xl font-bold text-[#CF5A30]">10</span>
              <span className="font-sans text-xs font-black tracking-widest text-gray-400 uppercase">
                THE BOTTOM LINE
              </span>
            </div>

            <h2 className="font-bebas text-3xl sm:text-4xl md:text-[48px] lg:text-[54px] leading-[1.02] tracking-wide uppercase">
              <span className="text-[#FFFFFF] block">ONE CYCLE CREATES MOMENTUM.</span>
              <span className="text-[#FFFFFF] block">MANY CYCLES CREATE DOMINANCE.</span>
              <span className="text-[#CF5A30] block pt-0.5">BUILD THE FLYWHEEL. STAY AHEAD.</span>
            </h2>

            <div className="pt-1 w-full sm:w-auto">
              <Link href="/bootcamps" className="w-full sm:w-auto block">
                <Button className="w-full sm:w-auto group flex items-center justify-center gap-2.5 rounded-[4px] bg-[#CF5A30] hover:bg-white text-white hover:text-[#121212] px-6 sm:px-8 py-5 text-xs sm:text-sm font-bold tracking-widest uppercase transition-colors duration-300 shadow-lg cursor-pointer min-h-[48px]">
                  BUILD YOUR FLYWHEEL
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

          </div>

          {/* Bottom 5-Column Feature Nodes Grid */}
          <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            
            {/* Node 1 */}
            <div className="space-y-2 group cursor-pointer">
              <div className="h-9 w-9 rounded-full border border-white/30 flex items-center justify-center text-white shrink-0 group-hover:bg-[#CF5A30] group-hover:border-[#CF5A30] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm">
                <Target className="h-4.5 w-4.5" />
              </div>
              <p className="font-sans text-sm sm:text-[15px] font-bold text-white leading-snug group-hover:text-[#CF5A30] transition-colors duration-300">
                Solve real enterprise problems.
              </p>
            </div>

            {/* Node 2 */}
            <div className="space-y-2 group cursor-pointer">
              <div className="h-9 w-9 rounded-full border border-white/30 flex items-center justify-center text-white shrink-0 group-hover:bg-[#CF5A30] group-hover:border-[#CF5A30] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm">
                <Brain className="h-4.5 w-4.5" />
              </div>
              <p className="font-sans text-sm sm:text-[15px] font-bold text-white leading-snug group-hover:text-[#CF5A30] transition-colors duration-300">
                Develop exceptional capability.
              </p>
            </div>

            {/* Node 3 */}
            <div className="space-y-2 group cursor-pointer">
              <div className="h-9 w-9 rounded-full border border-white/30 flex items-center justify-center text-white shrink-0 group-hover:bg-[#CF5A30] group-hover:border-[#CF5A30] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm">
                <Zap className="h-4.5 w-4.5" />
              </div>
              <p className="font-sans text-sm sm:text-[15px] font-bold text-white leading-snug group-hover:text-[#CF5A30] transition-colors duration-300">
                Execute with focus and excellence.
              </p>
            </div>

            {/* Node 4 */}
            <div className="space-y-2 group cursor-pointer">
              <div className="h-9 w-9 rounded-full border border-white/30 flex items-center justify-center text-white shrink-0 group-hover:bg-[#CF5A30] group-hover:border-[#CF5A30] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm">
                <Activity className="h-4.5 w-4.5" />
              </div>
              <p className="font-sans text-sm sm:text-[15px] font-bold text-white leading-snug group-hover:text-[#CF5A30] transition-colors duration-300">
                Create measurable outcomes and business value.
              </p>
            </div>

            {/* Node 5 */}
            <div className="space-y-2 group cursor-pointer">
              <div className="h-9 w-9 rounded-full border border-white/30 flex items-center justify-center text-white shrink-0 group-hover:bg-[#CF5A30] group-hover:border-[#CF5A30] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm">
                <Sparkles className="h-4.5 w-4.5" />
              </div>
              <p className="font-sans text-sm sm:text-[15px] font-bold text-white leading-snug group-hover:text-[#CF5A30] transition-colors duration-300">
                Strengthen your flywheel every cycle.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
