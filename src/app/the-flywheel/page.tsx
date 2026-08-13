"use client";

import React from "react";
import Link from "next/link";
import { 
  Cpu,
  Building2,
  ArrowRight, 
  Brain, 
  Zap, 
  Target, 
  FileText, 
  Layers, 
  Handshake, 
  Compass, 
  RefreshCw,
  Check,
  TrendingUp,
  Users,
  Shield,
  UserCheck,
  Rocket,
  BarChart2,
  Activity,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TheFlywheelPage() {
  return (
    <div className="flex flex-col flex-1 min-h-screen bg-[#F5F2EB] text-[#1C1C1C]">
      
      {/* SECTION 01: Hero Section (2-Column: Left Copy / Right Circular Flywheel Diagram) */}
      <section className="sticky top-0 min-h-[calc(100vh-80px)] z-10 flex items-center justify-center px-6 py-10 sm:py-12 md:px-12 lg:px-20 bg-[#F5F2EB] text-[#121212] overflow-hidden">
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Headline & Description */}
            <div className="lg:col-span-6 space-y-8">
              {/* Category Label */}
              <div className="text-xs font-extrabold tracking-widest text-[#CF5A30] uppercase">
                THE FLYWHEEL
              </div>

              {/* Headline Title */}
              <h1 className="font-bebas text-4xl sm:text-5xl md:text-[56px] lg:text-[62px] leading-[1.02] tracking-wide uppercase">
                <span className="text-[#1C1C1C] block">
                  CAPABILITY COMPOUNDS.
                </span>
                <span className="text-[#CF5A30] block pt-1">
                  SO DOES VALUE.
                </span>
              </h1>

              {/* Description Paragraphs */}
              <div className="space-y-4 font-sans text-[15px] leading-relaxed text-[#3A3E40]">
                <p>
                  Transformation is not a one-time project. It is a continuous cycle of building capability and driving performance outcomes.
                </p>

                <p>
                  The <strong className="font-bold text-[#1C1C1C]">Kyureeus Flywheel</strong> is how organizations get stronger every cycle.
                </p>
              </div>

              {/* Summary Statement */}
              <div className="font-sans text-[15px] font-bold text-[#CF5A30]">
                Build capability. Create outcomes. Strengthen the future.
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <Link href="#flywheel-details">
                  <Button className="group flex items-center gap-2.5 rounded-[4px] bg-[#CF5A30] hover:bg-[#121212] text-[#F5F2EB] px-8 py-6 text-xs sm:text-sm font-bold tracking-widest uppercase transition-colors duration-300 shadow-md cursor-pointer">
                    SEE THE FLYWHEEL IN ACTION
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column: Flywheel Image */}
            <div className="lg:col-span-6 flex items-center justify-center py-4">
              <div id="flywheel" className="relative max-w-[640px] w-full flex items-center justify-center">
                <img 
                  src="https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/kyureeus-assets/KyureeusFlyWheel/The%20flywheel%20page%20wheel%201.png" 
                  alt="The Flywheel Engine" 
                  loading="eager"
                  decoding="async"
                  crossOrigin="anonymous"
                  className="w-full h-auto object-contain drop-shadow-md hover:scale-[1.03] transition-transform duration-300 scale-105"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Container wrapper for sections sliding over hero */}
      <div className="relative z-20 bg-[#F5F2EB]">
        {/* SECTION 02: Six Boxes Section (#F4EFE6 Warm Beige Background) */}
        <section id="flywheel-details" className="relative bg-[#F4EFE6] py-16 md:py-24 px-6 md:px-12 lg:px-20 border-b border-[#1C1C1C]/10">
          <div className="mx-auto max-w-7xl w-full">
          
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
              
              {/* Box 01: ENTERPRISE CHALLENGES */}
              <div className="group bg-white p-6 sm:p-7 rounded-[16px] border border-[#1C1C1C]/10 shadow-xs flex flex-col justify-between space-y-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <div className="space-y-5">
                  <span className="font-bebas text-3xl font-bold text-[#555555] group-hover:text-[#CF5A30] transition-colors duration-300">
                    01
                  </span>
                  
                  <div className="h-10 w-10 rounded-full border border-[#1C1C1C]/20 flex items-center justify-center text-[#1C1C1C] group-hover:bg-[#CF5A30] group-hover:border-[#CF5A30] group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xs">
                    <Handshake className="h-5 w-5" />
                  </div>

                  <h3 className="font-bebas text-xl sm:text-2xl text-[#1C1C1C] group-hover:text-[#CF5A30] transition-colors duration-300 uppercase leading-tight">
                    ENTERPRISE CHALLENGES
                  </h3>

                  <ul className="space-y-2 font-sans text-xs text-[#555555] leading-relaxed">
                    <li>Markets change.</li>
                    <li>Technology advances.</li>
                    <li>Customer expectations rise.</li>
                    <li>New problems emerge.</li>
                  </ul>
                </div>

                <div className="font-sans text-xs font-bold text-[#CF5A30] pt-4 border-t border-[#1C1C1C]/10">
                  The enterprise identifies what must change.
                </div>
              </div>


              {/* Box 02: CAPABILITY DEVELOPMENT */}
              <div className="group bg-white p-6 sm:p-7 rounded-[16px] border border-[#1C1C1C]/10 shadow-xs flex flex-col justify-between space-y-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <div className="space-y-5">
                  <span className="font-bebas text-3xl font-bold text-[#555555] group-hover:text-[#CF5A30] transition-colors duration-300">
                    02
                  </span>
                  
                  <div className="h-10 w-10 rounded-full border border-[#1C1C1C]/20 flex items-center justify-center text-[#1C1C1C] group-hover:bg-[#CF5A30] group-hover:border-[#CF5A30] group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xs">
                    <Brain className="h-5 w-5" />
                  </div>

                  <h3 className="font-bebas text-xl sm:text-2xl text-[#1C1C1C] group-hover:text-[#CF5A30] transition-colors duration-300 uppercase leading-tight">
                    CAPABILITY DEVELOPMENT
                  </h3>

                  <ul className="space-y-2 font-sans text-xs text-[#555555] leading-relaxed">
                    <li>The right people are developed.</li>
                    <li>Skills are integrated.</li>
                    <li>Mindsets are strengthened.</li>
                    <li>Judgment is built.</li>
                  </ul>
                </div>

                <div className="font-sans text-xs font-bold text-[#CF5A30] pt-4 border-t border-[#1C1C1C]/10">
                  Capability becomes the advantage.
                </div>
              </div>


              {/* Box 03: EXECUTION */}
              <div className="group bg-white p-6 sm:p-7 rounded-[16px] border border-[#1C1C1C]/10 shadow-xs flex flex-col justify-between space-y-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <div className="space-y-5">
                  <span className="font-bebas text-3xl font-bold text-[#555555] group-hover:text-[#CF5A30] transition-colors duration-300">
                    03
                  </span>
                  
                  <div className="h-10 w-10 rounded-full border border-[#1C1C1C]/20 flex items-center justify-center text-[#1C1C1C] group-hover:bg-[#CF5A30] group-hover:border-[#CF5A30] group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xs">
                    <Zap className="h-5 w-5" />
                  </div>

                  <h3 className="font-bebas text-xl sm:text-2xl text-[#1C1C1C] group-hover:text-[#CF5A30] transition-colors duration-300 uppercase leading-tight">
                    EXECUTION
                  </h3>

                  <ul className="space-y-2 font-sans text-xs text-[#555555] leading-relaxed">
                    <li>Capability is applied to real initiatives.</li>
                    <li>Ideas become plans.</li>
                    <li>Plans become systems.</li>
                    <li>Systems go live.</li>
                  </ul>
                </div>

                <div className="font-sans text-xs font-bold text-[#CF5A30] pt-4 border-t border-[#1C1C1C]/10">
                  Execution turns capability into action.
                </div>
              </div>


              {/* Box 04: OUTCOMES */}
              <div className="group bg-white p-6 sm:p-7 rounded-[16px] border border-[#1C1C1C]/10 shadow-xs flex flex-col justify-between space-y-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <div className="space-y-5">
                  <span className="font-bebas text-3xl font-bold text-[#555555] group-hover:text-[#CF5A30] transition-colors duration-300">
                    04
                  </span>
                  
                  <div className="h-10 w-10 rounded-full border border-[#1C1C1C]/20 flex items-center justify-center text-[#1C1C1C] group-hover:bg-[#CF5A30] group-hover:border-[#CF5A30] group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xs">
                    <Target className="h-5 w-5" />
                  </div>

                  <h3 className="font-bebas text-xl sm:text-2xl text-[#1C1C1C] group-hover:text-[#CF5A30] transition-colors duration-300 uppercase leading-tight">
                    OUTCOMES
                  </h3>

                  <ul className="space-y-2 font-sans text-xs text-[#555555] leading-relaxed">
                    <li>Performance improves.</li>
                    <li>Processes are optimized.</li>
                    <li>Products are launched.</li>
                    <li>Value is created.</li>
                  </ul>
                </div>

                <div className="font-sans text-xs font-bold text-[#CF5A30] pt-4 border-t border-[#1C1C1C]/10">
                  Outcomes prove the impact.
                </div>
              </div>


              {/* Box 05: EVIDENCE */}
              <div className="group bg-white p-6 sm:p-7 rounded-[16px] border border-[#1C1C1C]/10 shadow-xs flex flex-col justify-between space-y-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <div className="space-y-5">
                  <span className="font-bebas text-3xl font-bold text-[#555555] group-hover:text-[#CF5A30] transition-colors duration-300">
                    05
                  </span>
                  
                  <div className="h-10 w-10 rounded-full border border-[#1C1C1C]/20 flex items-center justify-center text-[#1C1C1C] group-hover:bg-[#CF5A30] group-hover:border-[#CF5A30] group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xs">
                    <FileText className="h-5 w-5" />
                  </div>

                  <h3 className="font-bebas text-xl sm:text-2xl text-[#1C1C1C] group-hover:text-[#CF5A30] transition-colors duration-300 uppercase leading-tight">
                    EVIDENCE
                  </h3>

                  <ul className="space-y-2 font-sans text-xs text-[#555555] leading-relaxed">
                    <li>Execution generates data.</li>
                    <li>Results are measured.</li>
                    <li>Insights are captured.</li>
                    <li>Capability is validated.</li>
                  </ul>
                </div>

                <div className="font-sans text-xs font-bold text-[#CF5A30] pt-4 border-t border-[#1C1C1C]/10">
                  Evidence informs the next cycle.
                </div>
              </div>


              {/* Box 06: ENTERPRISE ADVANTAGE */}
              <div className="group bg-white p-6 sm:p-7 rounded-[16px] border border-[#1C1C1C]/10 shadow-xs flex flex-col justify-between space-y-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <div className="space-y-5">
                  <span className="font-bebas text-3xl font-bold text-[#555555] group-hover:text-[#CF5A30] transition-colors duration-300">
                    06
                  </span>
                  
                  <div className="h-10 w-10 rounded-full border border-[#1C1C1C]/20 flex items-center justify-center text-[#1C1C1C] group-hover:bg-[#CF5A30] group-hover:border-[#CF5A30] group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xs">
                    <Building2 className="h-5 w-5" />
                  </div>

                  <h3 className="font-bebas text-xl sm:text-2xl text-[#1C1C1C] group-hover:text-[#CF5A30] transition-colors duration-300 uppercase leading-tight">
                    ENTERPRISE ADVANTAGE
                  </h3>

                  <ul className="space-y-2 font-sans text-xs text-[#555555] leading-relaxed">
                    <li>The organization grows stronger.</li>
                    <li>Capability compounds.</li>
                    <li>Resilience increases.</li>
                    <li>The flywheel turns faster.</li>
                  </ul>
                </div>

                <div className="font-sans text-xs font-bold text-[#CF5A30] pt-4 border-t border-[#1C1C1C]/10">
                  Advantage becomes enduring.
                </div>
              </div>

            </div>

          </div>
        </section>


      {/* SECTION 03: Three Cards Section (#F5F2EB Background matching new design screenshot) */}
      <section className="bg-[#F5F2EB] py-16 md:py-24 px-6 md:px-12 lg:px-20 border-b border-[#1C1C1C]/10">
        <div className="mx-auto max-w-7xl w-full">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 07: THE FLYWHEEL TURNS */}
            <div className="group bg-white p-8 sm:p-9 rounded-[16px] border border-[#1C1C1C]/10 shadow-md flex flex-col justify-between space-y-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div className="space-y-6">
                <span className="font-bebas text-4xl font-bold text-[#1C1C1C] block leading-none group-hover:text-[#CF5A30] transition-colors duration-300">
                  07
                </span>
                
                <span className="font-sans text-xs font-extrabold tracking-widest text-[#555555] uppercase block">
                  THE FLYWHEEL TURNS
                </span>

                {/* Diagram Viewport Image */}
                <div className="py-4 flex items-center justify-center relative">
                  <img 
                    src="https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/kyureeus-assets/KyureeusFlyWheel/diagram-viewport.png" 
                    alt="The Flywheel Turns Diagram" 
                    loading="lazy"
                    decoding="async"
                    crossOrigin="anonymous"
                    className="w-full max-w-[280px] h-auto object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Bottom Orange Title & Text */}
              <div className="space-y-1 pt-4 border-t border-[#1C1C1C]/10">
                <div className="font-sans text-base font-bold text-[#CF5A30]">
                  Then the cycle begins again.
                </div>
                <p className="font-sans text-xs text-[#555555] leading-relaxed">
                  Each turn is faster, stronger, and more valuable than the one before.
                </p>
              </div>
            </div>


            {/* Card 08: WHY IT COMPOUNDS */}
            <div className="group bg-white p-8 sm:p-9 rounded-[16px] border border-[#1C1C1C]/10 shadow-md flex flex-col justify-between space-y-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div className="space-y-6">
                <span className="font-bebas text-4xl font-bold text-[#1C1C1C] block leading-none group-hover:text-[#CF5A30] transition-colors duration-300">
                  08
                </span>
                
                <span className="font-sans text-xs font-extrabold tracking-widest text-[#555555] uppercase block">
                  WHY IT COMPOUNDS
                </span>

                {/* Checkmark List */}
                <div className="space-y-5 pt-2">
                  
                  <div className="flex items-start gap-3 group/item">
                    <Check className="h-4 w-4 text-[#CF5A30] group-hover/item:scale-125 shrink-0 font-bold mt-0.5 transition-transform duration-300" />
                    <div className="space-y-0.5">
                      <div className="font-sans text-sm font-bold text-[#1C1C1C] group-hover/item:text-[#CF5A30] transition-colors duration-300">
                        Compounding Capability
                      </div>
                      <p className="font-sans text-xs text-[#555555]">
                        Every cycle develops stronger people and better systems.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 group/item">
                    <Check className="h-4 w-4 text-[#CF5A30] group-hover/item:scale-125 shrink-0 font-bold mt-0.5 transition-transform duration-300" />
                    <div className="space-y-0.5">
                      <div className="font-sans text-sm font-bold text-[#1C1C1C] group-hover/item:text-[#CF5A30] transition-colors duration-300">
                        Compounding Outcomes
                      </div>
                      <p className="font-sans text-xs text-[#555555]">
                        Better capability delivers better results at greater scale.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 group/item">
                    <Check className="h-4 w-4 text-[#CF5A30] group-hover/item:scale-125 shrink-0 font-bold mt-0.5 transition-transform duration-300" />
                    <div className="space-y-0.5">
                      <div className="font-sans text-sm font-bold text-[#1C1C1C] group-hover/item:text-[#CF5A30] transition-colors duration-300">
                        Compounding Knowledge
                      </div>
                      <p className="font-sans text-xs text-[#555555]">
                        Evidence captured today becomes capability tomorrow.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 group/item">
                    <Check className="h-4 w-4 text-[#CF5A30] group-hover/item:scale-125 shrink-0 font-bold mt-0.5 transition-transform duration-300" />
                    <div className="space-y-0.5">
                      <div className="font-sans text-sm font-bold text-[#1C1C1C] group-hover/item:text-[#CF5A30] transition-colors duration-300">
                        Compounding Advantage
                      </div>
                      <p className="font-sans text-xs text-[#555555]">
                        Competitors can buy tools. They cannot replicate your flywheel.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom Orange Summary Statement */}
              <div className="font-sans text-sm font-bold text-[#CF5A30] pt-4 border-t border-[#1C1C1C]/10">
                Compounding is how great enterprises stay great.
              </div>
            </div>


            {/* Card 09: THE RESULT */}
            <div className="group bg-white p-8 sm:p-9 rounded-[16px] border border-[#1C1C1C]/10 shadow-md flex flex-col justify-between space-y-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div className="space-y-6">
                <span className="font-bebas text-4xl font-bold text-[#1C1C1C] block leading-none group-hover:text-[#CF5A30] transition-colors duration-300">
                  09
                </span>
                
                <span className="font-sans text-xs font-extrabold tracking-widest text-[#555555] uppercase block">
                  THE RESULT
                </span>

                {/* List with Icons + Exponential Compound Chart Graphic */}
                <div className="grid grid-cols-12 gap-4 items-center pt-2">
                  
                  {/* Left Side Feature Items */}
                  <div className="col-span-7 space-y-4">
                    <div className="flex items-center gap-3 group/icon">
                      <div className="h-8 w-8 rounded-full border border-[#1C1C1C]/20 flex items-center justify-center text-[#1C1C1C] shrink-0 group-hover/icon:bg-[#CF5A30] group-hover/icon:border-[#CF5A30] group-hover/icon:text-white group-hover/icon:scale-110 transition-all duration-300">
                        <Users className="h-4 w-4" />
                      </div>
                      <span className="font-sans text-xs font-bold text-[#1C1C1C] group-hover/icon:text-[#CF5A30] transition-colors duration-300">Stronger capability.</span>
                    </div>

                    <div className="flex items-center gap-3 group/icon">
                      <div className="h-8 w-8 rounded-full border border-[#1C1C1C]/20 flex items-center justify-center text-[#1C1C1C] shrink-0 group-hover/icon:bg-[#CF5A30] group-hover/icon:border-[#CF5A30] group-hover/icon:text-white group-hover/icon:scale-110 transition-all duration-300">
                        <Target className="h-4 w-4" />
                      </div>
                      <span className="font-sans text-xs font-bold text-[#1C1C1C] group-hover/icon:text-[#CF5A30] transition-colors duration-300">Better decisions.</span>
                    </div>

                    <div className="flex items-center gap-3 group/icon">
                      <div className="h-8 w-8 rounded-full border border-[#1C1C1C]/20 flex items-center justify-center text-[#1C1C1C] shrink-0 group-hover/icon:bg-[#CF5A30] group-hover/icon:border-[#CF5A30] group-hover/icon:text-white group-hover/icon:scale-110 transition-all duration-300">
                        <TrendingUp className="h-4 w-4" />
                      </div>
                      <span className="font-sans text-xs font-bold text-[#1C1C1C] group-hover/icon:text-[#CF5A30] transition-colors duration-300">Higher performance.</span>
                    </div>

                    <div className="flex items-center gap-3 group/icon">
                      <div className="h-8 w-8 rounded-full border border-[#1C1C1C]/20 flex items-center justify-center text-[#1C1C1C] shrink-0 group-hover/icon:bg-[#CF5A30] group-hover/icon:border-[#CF5A30] group-hover/icon:text-white group-hover/icon:scale-110 transition-all duration-300">
                        <Shield className="h-4 w-4" />
                      </div>
                      <span className="font-sans text-xs font-bold text-[#1C1C1C]">Enduring advantage.</span>
                    </div>
                  </div>

                  {/* Right Side Exponential Upward Compound Bar Chart */}
                  <div className="col-span-5 flex items-end justify-center h-44 relative">
                    <svg viewBox="0 0 100 120" className="w-full h-full">
                      {/* 6 Increasing Compound Bars */}
                      <rect x="5" y="100" width="9" height="15" fill="#F4EFE6" rx="2" />
                      <rect x="20" y="85" width="9" height="30" fill="#F4EFE6" rx="2" />
                      <rect x="35" y="68" width="9" height="47" fill="#F4EFE6" rx="2" />
                      <rect x="50" y="48" width="9" height="67" fill="#F4EFE6" rx="2" />
                      <rect x="65" y="25" width="9" height="90" fill="#F4EFE6" rx="2" />
                      <rect x="80" y="5" width="9" height="110" fill="#F4EFE6" rx="2" />

                      {/* Smooth Exponential Upward Arrow Line */}
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

              {/* Bottom Bold Text & Orange Summary */}
              <div className="space-y-1 pt-4 border-t border-[#1C1C1C]/10">
                <div className="font-sans text-xs font-bold text-[#1C1C1C] leading-snug">
                  A self-reinforcing system that builds enterprise value every cycle.
                </div>
                <div className="font-sans text-xs font-bold text-[#CF5A30]">
                  That is the Kyureeus Flywheel.
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* SECTION 10: The Bottom Line (#0E0E10 Dark Background matching design screenshot) */}
      <section className="bg-[#0E0E10] text-[#FFFFFF] py-20 md:py-28 px-6 md:px-12 lg:px-20 overflow-hidden select-none border-t border-white/10">
        <div className="mx-auto max-w-7xl w-full space-y-16">
          
          {/* Top Headline & CTA Button Container */}
          <div className="space-y-8 max-w-3xl">
            
            {/* Category Number & Label */}
            <div className="flex items-center gap-2">
              <span className="font-bebas text-2xl font-bold text-[#CF5A30]">10</span>
              <span className="font-sans text-xs font-extrabold tracking-widest text-gray-400 uppercase">
                THE BOTTOM LINE
              </span>
            </div>

            {/* Headline Title */}
            <h2 className="font-bebas text-4xl sm:text-5xl md:text-[56px] lg:text-[62px] leading-[1.02] tracking-wide uppercase">
              <span className="text-[#FFFFFF] block">ONE CYCLE CREATES MOMENTUM.</span>
              <span className="text-[#FFFFFF] block">MANY CYCLES CREATE DOMINANCE.</span>
              <span className="text-[#CF5A30] block pt-1">BUILD THE FLYWHEEL. STAY AHEAD.</span>
            </h2>

            {/* CTA Button placed directly below text */}
            <div className="pt-2">
              <Link href="/bootcamps">
                <Button className="group flex items-center gap-2.5 rounded-[4px] bg-[#CF5A30] hover:bg-white text-white hover:text-[#121212] px-8 py-6 text-xs sm:text-sm font-bold tracking-widest uppercase transition-colors duration-300 shadow-lg cursor-pointer">
                  BUILD YOUR FLYWHEEL
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

          </div>

          {/* Bottom 5-Column Feature Nodes Grid */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
            
            {/* Node 1 */}
            <div className="space-y-4 group cursor-pointer">
              <div className="h-10 w-10 rounded-full border border-white/30 flex items-center justify-center text-white shrink-0 group-hover:bg-[#CF5A30] group-hover:border-[#CF5A30] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm">
                <Target className="h-5 w-5" />
              </div>
              <p className="font-sans text-xs sm:text-sm font-bold text-white leading-snug group-hover:text-[#CF5A30] transition-colors duration-300">
                Solve real enterprise problems.
              </p>
            </div>

            {/* Node 2 */}
            <div className="space-y-4 group cursor-pointer">
              <div className="h-10 w-10 rounded-full border border-white/30 flex items-center justify-center text-white shrink-0 group-hover:bg-[#CF5A30] group-hover:border-[#CF5A30] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm">
                <Brain className="h-5 w-5" />
              </div>
              <p className="font-sans text-xs sm:text-sm font-bold text-white leading-snug group-hover:text-[#CF5A30] transition-colors duration-300">
                Develop exceptional capability.
              </p>
            </div>

            {/* Node 3 */}
            <div className="space-y-4 group cursor-pointer">
              <div className="h-10 w-10 rounded-full border border-white/30 flex items-center justify-center text-white shrink-0 group-hover:bg-[#CF5A30] group-hover:border-[#CF5A30] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm">
                <Zap className="h-5 w-5" />
              </div>
              <p className="font-sans text-xs sm:text-sm font-bold text-white leading-snug group-hover:text-[#CF5A30] transition-colors duration-300">
                Execute with focus and excellence.
              </p>
            </div>

            {/* Node 4 */}
            <div className="space-y-4 group cursor-pointer">
              <div className="h-10 w-10 rounded-full border border-white/30 flex items-center justify-center text-white shrink-0 group-hover:bg-[#CF5A30] group-hover:border-[#CF5A30] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm">
                <Activity className="h-5 w-5" />
              </div>
              <p className="font-sans text-xs sm:text-sm font-bold text-white leading-snug group-hover:text-[#CF5A30] transition-colors duration-300">
                Create measurable outcomes and business value.
              </p>
            </div>

            {/* Node 5 */}
            <div className="space-y-4 group cursor-pointer">
              <div className="h-10 w-10 rounded-full border border-white/30 flex items-center justify-center text-white shrink-0 group-hover:bg-[#CF5A30] group-hover:border-[#CF5A30] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm">
                <Sparkles className="h-5 w-5" />
              </div>
              <p className="font-sans text-xs sm:text-sm font-bold text-white leading-snug group-hover:text-[#CF5A30] transition-colors duration-300">
                Strengthen your flywheel every cycle.
              </p>
            </div>

          </div>

        </div>
      </section>
      </div>

    </div>
  );
}
