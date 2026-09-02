"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  ArrowUp,
  Zap,
  Layers,
  LayoutGrid,
  Box,
  ShieldCheck,
  Cpu,
  Activity,
  Server,
  Compass,
  Clock,
  Database,
  Check,
  RefreshCw,
  Terminal,
  Briefcase,
  Code2,
  FileText,
  TrendingUp,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { WhyKyureeusFlywheel } from "@/components/features/whykyureeus-flywheel";

export default function WhyKyureeusPage() {
  return (
    <div className="flex flex-col flex-1 bg-[#F5F2EB] text-[#121212] min-h-screen w-full overflow-x-clip">
      {/* 1. Main Hero Section */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-10 md:py-14 lg:py-16 bg-[#F5F2EB] text-[#121212] overflow-hidden">
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Text & CTA */}
            <div className="flex flex-col items-start lg:col-span-6 space-y-4 sm:space-y-5 md:space-y-6">
              
              {/* Top Label */}
              <div className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-[#CF5A30] uppercase">
                <span className="h-[2px] w-4 bg-[#CF5A30]" />
                WHY KYUREEUS
              </div>

              {/* Headline */}
              <h1 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[64px] leading-[1.03] tracking-wide text-[#121212] uppercase">
                WE BUILD CAPABILITY INFRASTRUCTURE FOR INTELLIGENT ENTERPRISES.
              </h1>

              {/* Sub-content */}
              <p className="font-sans text-[15px] sm:text-base md:text-[18px] leading-relaxed text-[#3A3E40]">
                We are not building another education company. The world does not need more courses. It needs more people capable of solving consequential problems. That is the difference.
              </p>

              {/* Highlight Line */}
              <p className="font-sans text-[15px] sm:text-base md:text-[18px] font-extrabold text-[#CF5A30]">
                Build Capability. Create Enterprise Value.
              </p>

              {/* CTA Button */}
              <div className="pt-2 w-full sm:w-auto">
                <Link href="/capability-architecture" className="w-full sm:w-auto block">
                  <Button className="w-full sm:w-auto group flex items-center justify-center gap-2 rounded-[4px] bg-[#CF5A30] hover:bg-[#121212] text-[#F5F2EB] px-6 sm:px-7 py-5 sm:py-6 text-xs font-bold tracking-widest uppercase transition-colors duration-300 shadow-sm hover:shadow-md cursor-pointer font-sans min-h-[48px]">
                    EXPLORE THE CAPABILITY ARCHITECTURE
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>

            </div>

            {/* Right Column: Interactive Flywheel */}
            <div className="flex items-center justify-center lg:col-span-6 py-2 w-full">
              <div id="flywheel" className="relative max-w-[340px] sm:max-w-[460px] md:max-w-[560px] lg:max-w-[680px] qhd:max-w-[850px] uhd:max-w-[1100px] w-full flex items-center justify-center mx-auto">
                <WhyKyureeusFlywheel />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Three Model Comparison Section (01, 02, 03) */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center bg-white border-b border-[#121212]/10 py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#121212]/10 gap-8 lg:gap-0 items-stretch">
            
            {/* Column 01: The Old Model */}
            <div className="flex flex-col justify-between space-y-4 md:space-y-5 lg:px-8 first:pl-0 last:pr-0 pb-6 lg:pb-0">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-3xl sm:text-4xl font-extrabold text-[#666666]/40 tracking-tight">
                    01
                  </span>
                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-[#121212]/15 text-[#121212] bg-[#F5F2EB]/50">
                    <ArrowUp className="h-4.5 w-4.5" />
                  </div>
                </div>

                <span className="font-sans text-xs font-black tracking-widest text-[#666666] uppercase block">
                  THE OLD MODEL
                </span>

                <h2 className="font-bebas text-2xl sm:text-3xl md:text-[32px] leading-[1.1] tracking-wide text-[#121212] uppercase">
                  EDUCATION WAS DESIGNED FOR THE INDUSTRIAL AGE.
                </h2>

                <div className="space-y-3 font-sans text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#444444]">
                  <p>
                    It assumed knowledge was scarce. Teachers possessed it. Students acquired it. Degrees certified it.
                  </p>
                  <p>
                    That model worked when information moved slowly. It no longer does.
                  </p>
                </div>
              </div>

              <p className="font-sans text-[14.5px] sm:text-[15.5px] font-bold text-[#CF5A30] pt-2">
                Today, knowledge is everywhere. Capability is not.
              </p>
            </div>

            {/* Column 02: The New Model */}
            <div className="flex flex-col justify-between space-y-4 md:space-y-5 lg:px-8 pb-6 lg:pb-0 pt-6 lg:pt-0">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-3xl sm:text-4xl font-extrabold text-[#666666]/40 tracking-tight">
                    02
                  </span>
                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-[#121212]/15 text-[#121212] bg-[#F5F2EB]/50">
                    <Zap className="h-4.5 w-4.5" />
                  </div>
                </div>

                <span className="font-sans text-xs font-black tracking-widest text-[#666666] uppercase block">
                  THE NEW MODEL
                </span>

                <h2 className="font-bebas text-2xl sm:text-3xl md:text-[32px] leading-[1.1] tracking-wide text-[#121212] uppercase">
                  THE COMPETITIVE ADVANTAGE HAS CHANGED.
                </h2>

                <div className="space-y-3 font-sans text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#444444]">
                  <p>
                    Artificial intelligence can summarize. Search can retrieve. Software can automate.
                  </p>
                  <p>
                    But none of them can replace the ability to solve the right problem, build the right system and create measurable enterprise value.
                  </p>
                </div>
              </div>

              <p className="font-sans text-[14.5px] sm:text-[15.5px] font-bold text-[#CF5A30] pt-2">
                The future belongs to builders. Not browsers.
              </p>
            </div>

            {/* Column 03: Our Approach */}
            <div className="flex flex-col justify-between space-y-4 md:space-y-5 lg:px-8 pt-6 lg:pt-0 last:pr-0">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-3xl sm:text-4xl font-extrabold text-[#666666]/40 tracking-tight">
                    03
                  </span>
                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-[#121212]/15 text-[#121212] bg-[#F5F2EB]/50">
                    <Layers className="h-4.5 w-4.5" />
                  </div>
                </div>

                <span className="font-sans text-xs font-black tracking-widest text-[#666666] uppercase block">
                  OUR APPROACH
                </span>

                <h2 className="font-bebas text-2xl sm:text-3xl md:text-[32px] leading-[1.1] tracking-wide text-[#121212] uppercase">
                  WE BEGIN WHERE OTHERS FINISH.
                </h2>

                <p className="font-sans text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#444444]">
                  Most education asks, &quot;What should we teach?&quot; Kyureeus asks, &quot;What must this person become capable of doing?&quot; That single question changes everything.
                </p>

                <div className="space-y-2 pt-1">
                  {[
                    { left: "Instead of subjects", right: "We organize around enterprise jobs." },
                    { left: "Instead of lectures", right: "We build capability." },
                    { left: "Instead of exams", right: "We build solutions." },
                    { left: "Instead of graduation", right: "We build enterprise readiness." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-wrap sm:flex-nowrap items-center gap-2 text-[13.5px] sm:text-[14px] md:text-[14.5px] font-sans">
                      <span className="text-[#666666] font-normal leading-snug">{item.left}</span>
                      <span className="text-[#CF5A30] font-bold text-sm leading-none shrink-0">→</span>
                      <span className="font-bold text-[#121212] leading-snug">{item.right}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="font-sans text-[14.5px] sm:text-[15.5px] font-bold text-[#CF5A30] pt-2">
                Organized around work.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Output-Based Architecture Section (04, 05, 06) */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center bg-[#F4EFE6] border-b border-[#121212]/10 py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#121212]/10 gap-8 lg:gap-0 items-stretch">
            
            {/* Column 04: Complete Architectures */}
            <div className="flex flex-col justify-between space-y-4 md:space-y-5 lg:px-8 first:pl-0 last:pr-0 pb-6 lg:pb-0">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-3xl sm:text-4xl font-extrabold text-[#666666]/40 tracking-tight">
                    04
                  </span>
                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-[#121212]/15 text-[#121212] bg-white">
                    <LayoutGrid className="h-4.5 w-4.5" />
                  </div>
                </div>

                <span className="font-sans text-xs font-black tracking-widest text-[#666666] uppercase block">
                  COMPLETE ARCHITECTURES
                </span>

                <h2 className="font-bebas text-2xl sm:text-3xl md:text-[32px] leading-[1.1] tracking-wide text-[#121212] uppercase">
                  REAL ORGANIZATIONS DO NOT SOLVE ISOLATED PROBLEMS.
                </h2>

                <p className="font-sans text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#444444]">
                  Every Kyureeus pathway integrates business, engineering, AI, leadership and execution into one unified capability architecture.
                </p>
              </div>

              <p className="font-sans text-[14.5px] sm:text-[15.5px] font-bold text-[#CF5A30] pt-2">
                Connect systems, teams, and decisions.
              </p>
            </div>

            {/* Column 05: Something Real */}
            <div className="flex flex-col justify-between space-y-4 md:space-y-5 lg:px-8 pb-6 lg:pb-0 pt-6 lg:pt-0">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-3xl sm:text-4xl font-extrabold text-[#666666]/40 tracking-tight">
                    05
                  </span>
                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-[#121212]/15 text-[#121212] bg-white">
                    <Box className="h-4.5 w-4.5" />
                  </div>
                </div>

                <span className="font-sans text-xs font-black tracking-widest text-[#666666] uppercase block">
                  REAL ENTERPRISE EVIDENCE
                </span>

                <h2 className="font-bebas text-2xl sm:text-3xl md:text-[32px] leading-[1.1] tracking-wide text-[#121212] uppercase">
                  LEARNING WITHOUT EVIDENCE IS OPINION.
                </h2>

                <p className="font-sans text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#444444]">
                  Every Kyureeus bootcamp ends with something measurable.
                </p>

                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  {[
                    { icon: Cpu, label: "A product" },
                    { icon: Activity, label: "A platform" },
                    { icon: Server, label: "A system" },
                    { icon: Compass, label: "A strategy" },
                    { icon: Clock, label: "A business case" },
                    { icon: Database, label: "An operating model" }
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div 
                        key={idx} 
                        className="flex items-center gap-2 font-sans text-[13.5px] sm:text-[14.5px] font-bold text-[#121212]"
                      >
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-[#CF5A30]/10 text-[#CF5A30]">
                          <Icon className="h-3.5 w-3.5" />
                        </div>
                        <span>{item.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <p className="font-sans text-[14.5px] sm:text-[15.5px] font-bold text-[#CF5A30] pt-2">
                Demonstrated. Not declared.
              </p>
            </div>

            {/* Column 06: Built For Enterprises */}
            <div className="flex flex-col justify-between space-y-4 md:space-y-5 lg:px-8 pt-6 lg:pt-0 last:pr-0">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-3xl sm:text-4xl font-extrabold text-[#666666]/40 tracking-tight">
                    06
                  </span>
                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-[#121212]/15 text-[#121212] bg-white">
                    <ShieldCheck className="h-4.5 w-4.5" />
                  </div>
                </div>

                <span className="font-sans text-xs font-black tracking-widest text-[#666666] uppercase block">
                  BUILT FOR ENTERPRISES
                </span>

                <h2 className="font-bebas text-2xl sm:text-3xl md:text-[32px] leading-[1.1] tracking-wide text-[#121212] uppercase">
                  EVERY PATHWAY BEGINS WITH REAL WORK PERFORMED.
                </h2>

                <div className="space-y-2.5 pt-1">
                  {[
                    "Every project reflects real operating environments.",
                    "Every capability is validated against measurable outcomes.",
                    "Every learner graduates with auditable evidence."
                  ].map((text, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 font-sans text-[14px] sm:text-[15.5px] text-[#3A3E40] leading-snug">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#CF5A30]/10 text-[#CF5A30] mt-0.5">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="font-sans text-[14.5px] sm:text-[15.5px] font-bold text-[#CF5A30] pt-2">
                Real outcomes. Not assumptions.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Two Column Compounding & Operating System Section (07, 08) */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center bg-white border-b border-[#121212]/10 py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#121212]/10 gap-8 lg:gap-0 items-stretch">
            
            {/* Column 07: Learning That Compounds */}
            <div className="flex flex-col justify-between space-y-4 md:space-y-5 lg:px-8 first:pl-0 last:pr-0 pb-6 lg:pb-0">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-3xl sm:text-4xl font-extrabold text-[#666666]/40 tracking-tight">
                    07
                  </span>
                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-[#121212]/15 text-[#121212] bg-[#F5F2EB]/60">
                    <RefreshCw className="h-4.5 w-4.5" />
                  </div>
                </div>

                <span className="font-sans text-xs font-black tracking-widest text-[#666666] uppercase block">
                  LEARNING THAT COMPOUNDS
                </span>

                <h2 className="font-bebas text-3xl sm:text-4xl md:text-[40px] leading-[1.1] tracking-wide text-[#121212] uppercase">
                  TRADITIONAL EDUCATION ENDS WHEN THE COURSE ENDS.
                </h2>

                <div className="space-y-2.5 pt-1">
                  {[
                    "Kyureeus improves every time someone learns.",
                    "Every enterprise project strengthens the curriculum.",
                    "Every curriculum produces stronger builders.",
                    "Every builder creates better enterprise outcomes.",
                    "Every outcome improves Kyureeus."
                  ].map((text, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 font-sans text-[14px] sm:text-[15.5px] text-[#3A3E40] leading-snug">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#CF5A30]/10 text-[#CF5A30] mt-0.5">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="font-sans text-[14.5px] sm:text-[15.5px] font-bold text-[#CF5A30] pt-2">
                Learning becomes a flywheel. Not an event.
              </p>
            </div>

            {/* Column 08: This Is More Than Education */}
            <div className="flex flex-col justify-between space-y-4 md:space-y-5 lg:px-8 pt-6 lg:pt-0 last:pr-0">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-3xl sm:text-4xl font-extrabold text-[#666666]/40 tracking-tight">
                    08
                  </span>
                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-[#121212]/15 text-[#121212] bg-[#F5F2EB]/60">
                    <Terminal className="h-4.5 w-4.5" />
                  </div>
                </div>

                <span className="font-sans text-xs font-black tracking-widest text-[#666666] uppercase block">
                  THIS IS MORE THAN EDUCATION
                </span>

                <h2 className="font-bebas text-3xl sm:text-4xl md:text-[40px] leading-[1.1] tracking-wide text-[#121212] uppercase">
                  IT IS AN OPERATING SYSTEM FOR CAPABILITY.
                </h2>

                <div className="space-y-2.5 pt-1">
                  {[
                    "For builders creating modern platforms.",
                    "For organizations navigating intelligent transformation.",
                    "For industries transitioning to AI-native systems.",
                    "For the enduring future of enterprise work."
                  ].map((text, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 font-sans text-[14px] sm:text-[15.5px] font-bold text-[#3A3E40]">
                      <span className="h-2 w-2 rounded-full bg-[#CF5A30] shrink-0" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-3 bg-[#F5F2EB] p-4 sm:p-5 rounded-xl border border-[#121212]/5 shadow-2xs">
                  <blockquote className="font-bebas text-[17px] sm:text-[19px] md:text-[20px] leading-tight tracking-wide text-[#121212] uppercase">
                    &quot;BECAUSE THE COMPANIES THAT WIN TOMORROW WILL NOT SIMPLY KNOW MORE. THEY WILL BUILD BETTER.&quot;
                  </blockquote>
                </div>
              </div>

              <p className="font-sans text-[14.5px] sm:text-[15.5px] font-bold text-[#CF5A30] pt-2">
                Build better systems.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Final Bottom Dark CTA Section (09 Build The Future) */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center bg-[#1C1C1C] text-[#F5F2EB] border-t border-white/10 py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl w-full space-y-8 md:space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
            
            {/* Left Column */}
            <div className="flex flex-col items-start lg:col-span-7 space-y-4 sm:space-y-5 md:space-y-6">
              
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#CF5A30] uppercase">
                <span className="h-[2px] w-4 bg-[#CF5A30]" />
                09 BUILD THE FUTURE
              </div>

              <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl md:text-[50px] leading-[1.05] tracking-wide text-[#F5F2EB] uppercase">
                DON&apos;T PREPARE FOR YESTERDAY&apos;S JOBS. BUILD THE CAPABILITIES TOMORROW&apos;S ENTERPRISES CANNOT OPERATE WITHOUT.
              </h2>

              <div className="pt-1 w-full sm:w-auto">
                <Link href="/bootcamps" className="w-full sm:w-auto block">
                  <Button className="w-full sm:w-auto group flex items-center justify-center gap-2 rounded-[4px] bg-[#CF5A30] hover:bg-white text-[#F5F2EB] hover:text-[#121212] px-6 sm:px-8 py-5 text-xs sm:text-sm font-bold tracking-widest uppercase transition-colors duration-300 shadow-md cursor-pointer font-sans min-h-[48px]">
                    EXPLORE THE CAPABILITY ARCHITECTURE
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>

            </div>

            {/* Right Column: 5 Stacked Topic Cards */}
            <div className="flex flex-col space-y-2.5 lg:col-span-5 w-full">
              {[
                { icon: Briefcase, title: "REAL JOBS" },
                { icon: Code2, title: "REAL PROJECTS" },
                { icon: FileText, title: "REAL EVIDENCE" },
                { icon: TrendingUp, title: "REAL OUTCOMES" },
                { icon: Sparkles, title: "REAL IMPACT" }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={idx} 
                    whileHover={{ x: 6, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="group bg-[#242424] hover:bg-[#CF5A30] rounded-xl p-3.5 sm:p-4 border border-white/10 flex items-center gap-3.5 transition-colors duration-300 shadow-sm cursor-pointer"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#CF5A30]/15 group-hover:bg-white/20 text-[#CF5A30] group-hover:text-white transition-colors duration-300">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <span className="font-sans text-[13px] sm:text-[14px] font-black tracking-widest text-[#F5F2EB] group-hover:text-white transition-colors duration-300 uppercase">
                      {item.title}
                    </span>
                  </motion.div>
                );
              })}
            </div>

          </div>

          {/* Bottom Full-Width Tagline */}
          <div className="pt-6 border-t border-white/10 text-center">
            <h3 className="font-bebas text-xl sm:text-2xl md:text-[30px] tracking-widest text-[#F5F2EB] uppercase">
              THE FUTURE BELONGS TO BUILDERS. KYUREEUS BUILDS THEM.
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
}