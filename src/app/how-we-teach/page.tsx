"use client";

import React from "react";
import Link from "next/link";
import { 
  SquarePen,
  Code,
  Brain, 
  Edit3, 
  Cpu, 
  Activity, 
  Send, 
  RefreshCw,
  Briefcase,
  Folder,
  Wrench,
  Star,
  Settings,
  FileText,
  Target,
  BookOpen,
  Code2,
  CheckCircle,
  CheckCircle2,
  CloudUpload,
  TrendingUp,
  Monitor,
  BarChart3,
  LayoutGrid,
  Zap,
  Users,
  Play,
  Search,
  User,
  Compass,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HowWeTeachFlywheel } from "@/components/features/howweteach-flywheel";

export default function HowWeTeachPage() {
  return (
    <div className="flex flex-col flex-1 bg-[#F5F2EB] text-[#121212] min-h-screen w-full overflow-x-clip">
      {/* 1. How We Teach Hero Section */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-10 md:py-14 lg:py-16 bg-[#F5F2EB] text-[#121212] overflow-hidden">
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 xl:gap-16 items-center">
            
            {/* Left Column: Text & Statements */}
            <div className="flex flex-col items-start lg:col-span-6 space-y-4 sm:space-y-6 md:space-y-8">
              
              {/* Badge/Label */}
              <div className="text-xs font-bold tracking-widest text-[#CF5A30] uppercase">
                HOW WE TEACH
              </div>

              {/* Headline */}
              <h1 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.05] tracking-wide text-[#121212] uppercase">
                CAPABILITY CANNOT BE DOWNLOADED. <span className="text-[#CF5A30]">IT MUST BE BUILT.</span>
              </h1>

              {/* Sub-content */}
              <div className="space-y-4 font-sans text-[15px] sm:text-[16px] leading-relaxed text-[#3A3E40]">
                <p>
                  The world has optimized learning for consumption. Watch the lecture. Read the book. Pass the exam. Collect the certificate.
                </p>

                {/* 3 Red Crossout Items */}
                <div className="space-y-1.5 font-bold text-[#CF5A30] text-[15px] sm:text-[16px]">
                  <p className="flex items-center gap-2">
                    <span className="font-sans font-black text-base sm:text-lg">✕</span> That is not how engineers build.
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-sans font-black text-base sm:text-lg">✕</span> It is not how entrepreneurs create.
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-sans font-black text-base sm:text-lg">✕</span> It is not how enterprises transform.
                  </p>
                </div>

                <p>
                  Kyureeus teaches the way capability is actually developed. By solving real problems.
                </p>
              </div>

              {/* Tagline */}
              <div className="pt-1">
                <h2 className="font-bebas text-xl sm:text-2xl md:text-[24px] tracking-wide text-[#121212] uppercase font-bold">
                  LEARN BY BUILDING. BUILD BY SOLVING.
                </h2>
              </div>

            </div>

            {/* Right Column: Interactive Flywheel */}
            <div className="flex items-center justify-center lg:col-span-6 py-2 sm:py-4 w-full">
              <div id="flywheel" className="relative max-w-[340px] sm:max-w-[460px] md:max-w-[560px] lg:max-w-[680px] qhd:max-w-[850px] uhd:max-w-[1100px] w-full flex items-center justify-center mx-auto">
                <HowWeTeachFlywheel />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Two Column Real Jobs & Real Consequences Section (01, 02) */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center bg-white py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-20 border-b border-[#121212]/10">
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#121212]/10 gap-8 lg:gap-0">
            
            {/* Column 02: WE START WITH THE JOB */}
            <div className="flex flex-col justify-between space-y-4 sm:space-y-5 md:space-y-6 lg:px-8 first:pl-0 last:pr-0 pb-6 lg:pb-0">
              <div className="space-y-3.5 sm:space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-sans text-3xl font-extrabold text-[#CF5A30]">02</span>
                  <span className="font-sans text-xs font-black tracking-widest text-[#CF5A30] uppercase">
                    WE DO NOT START WITH CONTENT
                  </span>
                </div>

                <h2 className="font-bebas text-2xl sm:text-3xl md:text-[32px] leading-[1.1] tracking-wide text-[#121212] uppercase">
                  WE START WITH THE JOB.
                </h2>

                <p className="font-sans text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#444444]">
                  Every bootcamp begins with one question: What meaningful work must this learner become capable of performing? That job determines everything.
                </p>

                <div className="bg-[#F7F3E9] rounded-xl p-4 sm:p-5 text-center shadow-2xs">
                  <p className="font-sans text-[14px] sm:text-[15px] md:text-[16px] font-bold text-[#121212] leading-relaxed">
                    &quot;What meaningful work must this learner become capable of performing?&quot;
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-3 border-t border-[#121212]/5">
                {[
                  { icon: Briefcase, label: "The capabilities" },
                  { icon: Folder, label: "The systems" },
                  { icon: Wrench, label: "The tools" },
                  { icon: Target, label: "The projects" }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={idx} 
                      className="group flex flex-col items-center text-center space-y-1.5 sm:space-y-2 p-2.5 sm:p-3 rounded-xl bg-transparent hover:bg-[#FAF4EC] transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-[#CF5A30]/10 group-hover:bg-[#CF5A30] text-[#CF5A30] group-hover:text-white transition-all duration-300 shadow-2xs">
                        <Icon className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                      </div>
                      <span className="font-sans text-xs sm:text-[13px] font-bold text-[#121212] group-hover:text-[#CF5A30] transition-colors duration-300">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Column 03: KNOWLEDGE EXPLAINS. CAPABILITY PERFORMS. */}
            <div className="flex flex-col justify-between space-y-4 sm:space-y-5 md:space-y-6 lg:px-8 pt-6 lg:pt-0">
              <div className="space-y-3.5 sm:space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-sans text-3xl font-extrabold text-[#CF5A30]">03</span>
                  <span className="font-sans text-xs font-black tracking-widest text-[#CF5A30] uppercase">
                    FROM THEORY TO CONSEQUENCE
                  </span>
                </div>

                <h2 className="font-bebas text-2xl sm:text-3xl md:text-[32px] leading-[1.1] tracking-wide text-[#121212] uppercase">
                  KNOWLEDGE EXPLAINS. CAPABILITY PERFORMS.
                </h2>

                <p className="font-sans text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#444444]">
                  Every concept is immediately applied to a real enterprise problem.
                </p>

                <ul className="space-y-2 font-sans text-[14px] sm:text-[15px] font-bold text-[#121212]">
                  {[
                    "Ideas become plans.",
                    "Decisions become systems.",
                    "Systems create measurable outcomes."
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-[#CF5A30] font-bold">•</span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>

                <p className="font-sans text-[14px] sm:text-[15px] font-bold text-[#CF5A30] pt-1">
                  Because understanding only matters when it changes what you can build.
                </p>
              </div>

              <div className="space-y-3 pt-3 border-t border-[#121212]/5">
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {[
                    { icon: Star, label: "The capabilities" },
                    { icon: Settings, label: "The systems" },
                    { icon: Wrench, label: "The tools" },
                    { icon: Folder, label: "The projects" },
                    { icon: FileText, label: "The evidence" },
                    { icon: Target, label: "The outcome" }
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div 
                        key={idx} 
                        className="group flex flex-col items-center text-center space-y-1 p-1 rounded-lg hover:bg-[#CF5A30]/5 transition-colors duration-200 cursor-pointer"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#CF5A30]/30 group-hover:border-[#CF5A30] group-hover:bg-[#CF5A30] text-[#CF5A30] group-hover:text-white transition-colors duration-200 shadow-2xs">
                          <Icon className="h-3.5 w-3.5" />
                        </div>
                        <span className="font-sans text-[10.5px] sm:text-[11.5px] text-[#3A3E40] group-hover:text-[#CF5A30] font-semibold leading-tight transition-colors duration-200">
                          {item.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <p className="font-sans text-xs sm:text-[13px] font-bold tracking-wider text-[#121212] uppercase pt-1">
                  LEARNING IS ORGANIZED AROUND WORK. NOT CHAPTERS.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. The 7-Step Learning Loop Section (04) */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center bg-[#F4EFE6] border-t border-[#121212]/10 py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl w-full space-y-6 md:space-y-8">
          
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="font-sans text-3xl font-extrabold text-[#CF5A30]">04</span>
              <span className="font-sans text-xs font-black tracking-widest text-[#CF5A30] uppercase">
                THE KYUREEUS LEARNING LOOP
              </span>
            </div>
            <h2 className="font-bebas text-3xl sm:text-4xl md:text-[40px] tracking-wide text-[#121212] uppercase">
              EVERY LEARNER MOVES THROUGH THE SAME CAPABILITY CYCLE.
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 sm:gap-3 md:gap-4 items-start">
            {[
              { num: 1, title: "UNDERSTAND", caption: "Learn first principles.", icon: BookOpen },
              { num: 2, title: "DESIGN", caption: "Translate ideas into solutions.", icon: Edit3 },
              { num: 3, title: "BUILD", caption: "Create working systems.", icon: Code2 },
              { num: 4, title: "TEST", caption: "Validate against real conditions.", icon: CheckCircle },
              { num: 5, title: "IMPROVE", caption: "Learn from evidence.", icon: TrendingUp },
              { num: 6, title: "DEPLOY", caption: "Deliver enterprise value.", icon: CloudUpload },
              { num: 7, title: "REPEAT", caption: "Solve consequential problems.", icon: RefreshCw }
            ].map((step, idx) => {
              const Icon = step.icon;
              return (
                <div 
                  key={idx} 
                  className="group flex flex-col items-center text-center space-y-2 p-2.5 sm:p-3 rounded-xl hover:bg-[#FAF4EC] transition-all duration-300 cursor-pointer bg-white/50"
                >
                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-[#CF5A30]/10 group-hover:bg-[#CF5A30] text-[#CF5A30] group-hover:text-white transition-colors duration-300 shadow-2xs">
                    <Icon className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                  </div>

                  <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#121212] group-hover:bg-[#CF5A30] text-white font-sans text-xs font-black transition-colors duration-300 shadow-sm">
                    {step.num}
                  </div>

                  <div className="space-y-1">
                    <span className="font-sans text-[11px] sm:text-xs md:text-[13px] font-bold text-[#121212] group-hover:text-[#CF5A30] transition-colors duration-300 uppercase tracking-wider block">
                      {step.title}
                    </span>
                    <p className="font-sans text-[11px] sm:text-[12px] md:text-[12.5px] text-[#555555] leading-tight">
                      {step.caption}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-2 text-center">
            <h3 className="font-bebas text-lg sm:text-xl md:text-2xl lg:text-[26px] tracking-wide text-[#CF5A30] uppercase">
              EVERY CYCLE BUILDS CONFIDENCE. EVERY CYCLE BUILDS JUDGMENT. EVERY CYCLE BUILDS CAPABILITY.
            </h3>
          </div>

        </div>
      </section>

      {/* 4. Evidence Over Certification & Multi-Disciplinary (05, 06) */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center bg-white border-t border-[#121212]/10 py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#121212]/10 gap-8 lg:gap-0">
            
            {/* Column 05: EVERY BOOTCAMP PRODUCES EVIDENCE */}
            <div className="flex flex-col justify-between space-y-4 sm:space-y-6 lg:px-8 first:pl-0 last:pr-0 pb-6 lg:pb-0">
              <div className="space-y-3.5 sm:space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-sans text-3xl font-extrabold text-[#CF5A30]">05</span>
                  <span className="font-sans text-xs font-black tracking-widest text-[#CF5A30] uppercase">
                    EVERY BOOTCAMP PRODUCES EVIDENCE
                  </span>
                </div>

                <h2 className="font-bebas text-2xl sm:text-3xl md:text-[32px] leading-[1.1] tracking-wide text-[#121212] uppercase">
                  KNOWLEDGE IS DIFFICULT TO EVALUATE. EVIDENCE IS NOT.
                </h2>

                <div className="space-y-2.5 sm:space-y-3 pt-1">
                  {[
                    { icon: Briefcase, label: "Enterprise projects" },
                    { icon: Monitor, label: "Working software & AI systems" },
                    { icon: BarChart3, label: "Business strategies & roadmaps" },
                    { icon: LayoutGrid, label: "Architectures & operating models" }
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="flex items-center gap-2.5 font-sans text-[14.5px] sm:text-[15.5px] font-bold text-[#121212]">
                        <Icon className="h-5 w-5 text-[#CF5A30] shrink-0" />
                        <span>{item.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <p className="font-sans text-[14px] sm:text-[15px] text-[#555555] pt-2">
                Employers evaluate what you built. Not what you memorized.
              </p>
            </div>

            {/* Column 06: INTEGRATION, NOT ISOLATION. */}
            <div className="flex flex-col justify-between space-y-4 sm:space-y-6 lg:px-8 pt-6 lg:pt-0">
              <div className="space-y-3.5 sm:space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-sans text-3xl font-extrabold text-[#CF5A30]">06</span>
                  <span className="font-sans text-xs font-black tracking-widest text-[#CF5A30] uppercase">
                    LEARN THE WAY ENTERPRISES WORK
                  </span>
                </div>

                <h2 className="font-bebas text-2xl sm:text-3xl md:text-[32px] leading-[1.1] tracking-wide text-[#121212] uppercase">
                  INTEGRATION, NOT ISOLATION.
                </h2>

                <p className="font-sans text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#444444]">
                  Real organizations do not separate business from technology. Or engineering from leadership. Neither do we.
                </p>

                <div className="flex flex-wrap gap-2 sm:gap-2.5 pt-1">
                  {[
                    { icon: TrendingUp, label: "Business" },
                    { icon: Cpu, label: "Engineering" },
                    { icon: Zap, label: "AI" },
                    { icon: Settings, label: "Operations" },
                    { icon: Users, label: "Leadership" },
                    { icon: Play, label: "Execution" }
                  ].map((badge, idx) => {
                    const Icon = badge.icon;
                    return (
                      <div 
                        key={idx} 
                        className="group bg-[#F5F2EB] hover:bg-[#CF5A30] border border-[#121212]/5 hover:border-[#CF5A30] px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-lg font-sans font-bold text-[12.5px] sm:text-[13.5px] text-[#121212] hover:text-white flex items-center gap-2 shadow-2xs hover:shadow-md transition-colors duration-200 cursor-pointer"
                      >
                        <Icon className="h-4 w-4 text-[#CF5A30] group-hover:text-white transition-colors duration-200" />
                        <span>{badge.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-[#555555] pt-2">
                Every Kyureeus experience integrates multiple disciplines into one complete capability architecture. Because enterprise problems are interconnected. Learning should be too.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Feedback & Compounding Section (07 & 08) */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center bg-[#F4EFE6] border-t border-[#121212]/10 py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#121212]/10 gap-8 lg:gap-0">
            
            {/* Column 07: BETTER FEEDBACK. BETTER BUILDERS. */}
            <div className="flex flex-col justify-between space-y-4 sm:space-y-6 lg:px-8 first:pl-0 last:pr-0 pb-6 lg:pb-0">
              <div className="space-y-3.5 sm:space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-sans text-3xl font-extrabold text-[#CF5A30]">07</span>
                  <span className="font-sans text-xs font-black tracking-widest text-[#CF5A30] uppercase">
                    FEEDBACK CREATES MASTERY
                  </span>
                </div>

                <h2 className="font-bebas text-2xl sm:text-3xl md:text-[32px] leading-[1.1] tracking-wide text-[#121212] uppercase">
                  BETTER FEEDBACK. BETTER BUILDERS.
                </h2>

                <div className="space-y-2 pt-1 font-sans text-[14px] sm:text-[15px] text-[#3A3E40]">
                  {[
                    { icon: CheckCircle2, text: "Every project is reviewed." },
                    { icon: Edit3, text: "Every design is challenged." },
                    { icon: Search, text: "Every assumption is tested." },
                    { icon: RefreshCw, text: "Every iteration improves the result." }
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div 
                        key={idx} 
                        className="group flex items-center gap-3 p-2 rounded-lg hover:bg-[#CF5A30]/5 transition-colors duration-200 cursor-pointer"
                      >
                        <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-[#CF5A30]/10 group-hover:bg-[#CF5A30] text-[#CF5A30] group-hover:text-white transition-colors duration-200 shadow-2xs">
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="font-bold text-[#121212] group-hover:text-[#CF5A30] transition-colors duration-200">{item.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-1.5 pt-2">
                <p className="font-sans text-[14px] text-[#666666]">
                  The goal is not perfection.
                </p>
                <p className="font-sans text-[14.5px] sm:text-[15px] font-bold text-[#CF5A30] leading-snug">
                  The goal is continuously improving judgment. That is how experts are developed.
                </p>
              </div>
            </div>

            {/* Column 08: THE SYSTEM GETS SMARTER EVERY CYCLE. */}
            <div className="flex flex-col justify-between space-y-4 sm:space-y-6 lg:px-8 pt-6 lg:pt-0">
              <div className="space-y-3.5 sm:space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-sans text-3xl font-extrabold text-[#CF5A30]">08</span>
                  <span className="font-sans text-xs font-black tracking-widest text-[#CF5A30] uppercase">
                    LEARNING THAT COMPOUNDS
                  </span>
                </div>

                <h2 className="font-bebas text-2xl sm:text-3xl md:text-[32px] leading-[1.1] tracking-wide text-[#121212] uppercase">
                  THE SYSTEM GETS SMARTER EVERY CYCLE.
                </h2>

                <div className="space-y-2 pt-1 font-sans text-[14px] sm:text-[15px] text-[#3A3E40]">
                  {[
                    { icon: User, text: "Every learner strengthens Kyureeus." },
                    { icon: Briefcase, text: "Every enterprise project improves the curriculum." },
                    { icon: Settings, text: "Every outcome refines the architecture." },
                    { icon: Zap, text: "Every new capability helps the next generation build faster." }
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div 
                        key={idx} 
                        className="group flex items-center gap-3 p-2 rounded-lg hover:bg-[#CF5A30]/5 transition-colors duration-200 cursor-pointer"
                      >
                        <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-[#CF5A30]/10 group-hover:bg-[#CF5A30] text-[#CF5A30] group-hover:text-white transition-colors duration-200 shadow-2xs">
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="font-bold text-[#121212] group-hover:text-[#CF5A30] transition-colors duration-200">{item.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-[#555555] pt-2">
                The learning system becomes smarter with every cycle. That is how capability compounds.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Capability Studio Section (09) */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center bg-white border-t border-[#121212]/10 py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading & 5 Round Coral Badges */}
            <div className="flex flex-col items-start lg:col-span-6 space-y-4 sm:space-y-5 md:space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-sans text-3xl font-extrabold text-[#CF5A30]">09</span>
                <span className="font-sans text-xs font-black tracking-widest text-[#CF5A30] uppercase">
                  THIS IS NOT A CLASSROOM
                </span>
              </div>

              <h2 className="font-bebas text-2xl sm:text-3xl md:text-[34px] leading-[1.1] tracking-wide text-[#121212] uppercase">
                IT IS A CAPABILITY STUDIO.
              </h2>

              <div className="space-y-2 pt-1 w-full">
                {[
                  { icon: Edit3, text: "A design lab." },
                  { icon: Cpu, text: "An engineering workshop." },
                  { icon: Briefcase, text: "A product office." },
                  { icon: Compass, text: "A strategy simulation." },
                  { icon: Users, text: "A leadership simulation." }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={idx} 
                      className="group flex items-center gap-3 font-sans text-[14.5px] sm:text-[16px] font-bold text-[#3A3E40] p-1.5 rounded-lg hover:bg-[#FAF4EC] transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#CF5A30] text-white shadow-2xs group-hover:bg-[#E05326] transition-colors duration-300">
                        <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </div>
                      <span className="group-hover:text-[#CF5A30] transition-colors duration-300">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Light Beige Container Box */}
            <div className="lg:col-span-6 w-full">
              <div className="bg-[#F7F4EC] border border-[#121212]/5 rounded-2xl p-5 sm:p-7 md:p-9 shadow-2xs hover:shadow-lg transition-all duration-300">
                <p className="font-sans text-[15px] sm:text-[17px] md:text-[18px] leading-relaxed text-[#3A3E40]">
                  A place where ideas become enterprise outcomes. Because the future is built by people who practice creating value. Not by people who simply study it.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Dark Final CTA Section */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center bg-[#0E0E10] text-[#F5F2EB] border-t border-white/10 py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl w-full">
          <div className="flex flex-col items-start space-y-4 md:space-y-5">
            <h2 className="font-bebas text-3xl sm:text-4xl md:text-[42px] leading-[1.05] tracking-wide text-[#F5F2EB] uppercase">
              THE FUTURE BELONGS TO PEOPLE WHO CAN BUILD.
            </h2>

            <p className="font-sans text-[15px] sm:text-[16.5px] leading-relaxed text-[#A1A1AA] max-w-3xl">
              Not because they completed another course. Because they can solve problems others cannot. Every bootcamp is one step toward becoming indispensable.
            </p>

            <div className="pt-1 w-full sm:w-auto">
              <Link href="/bootcamps" className="w-full sm:w-auto block">
                <Button className="w-full sm:w-auto group flex items-center justify-center gap-2 rounded-[4px] bg-[#CF5A30] hover:bg-white text-[#F5F2EB] hover:text-[#121212] px-6 sm:px-8 py-5 text-xs sm:text-sm font-bold tracking-widest uppercase transition-colors duration-300 shadow-md cursor-pointer min-h-[48px]">
                  EXPLORE THE BOOTCAMP PORTFOLIO
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
