"use client";

import React from "react";
import Link from "next/link";
import { 
  Target,
  Code,
  Award,
  ArrowRight, 
  Building2, 
  Share2, 
  Code2, 
  BarChart3, 
  TrendingUp, 
  Users,
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
  FileText,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function WhyKyureeusPage() {
  return (
    <div className="flex flex-col flex-1 bg-[#F5F2EB] text-[#121212] min-h-screen">
      {/* 1. Main Hero Section */}
      <section className="sticky top-0 h-screen z-10 flex items-center justify-center px-6 py-12 md:px-12 lg:px-20 bg-[#F5F2EB] text-[#121212] overflow-hidden">
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Text & CTA */}
            <div className="flex flex-col items-start lg:col-span-6 space-y-6 md:space-y-8">
              
              {/* Top Label */}
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#CF5A30] uppercase">
                <span className="h-[2px] w-4 bg-[#CF5A30]" />
                WHY KYUREEUS
              </div>

              {/* 64px Bebas Neue Headline */}
              <h1 className="font-bebas text-4xl sm:text-5xl md:text-[64px] leading-[1.05] tracking-wide text-[#121212] uppercase">
                WE BUILD CAPABILITY INFRASTRUCTURE FOR INTELLIGENT ENTERPRISES.
              </h1>

              {/* 18px SF Pro Display Sub-content */}
              <p className="font-sans text-base md:text-[18px] leading-relaxed text-[#3A3E40]">
                We are not building another education company. The world does not need more courses. It needs more people capable of solving consequential problems. That is the difference.
              </p>

              {/* 18px SF Pro Display Highlight Line */}
              <p className="font-sans text-base md:text-[18px] font-extrabold text-[#CF5A30]">
                Build Capability. Create Enterprise Value.
              </p>

              {/* CTA Button */}
              <div className="pt-2">
                <Link href="/#capability-architecture">
                  <Button className="group flex items-center gap-2 rounded-[4px] bg-[#CF5A30] hover:bg-[#121212] text-[#F5F2EB] px-7 py-6 text-xs font-bold tracking-widest uppercase transition-colors duration-300 shadow-sm hover:shadow-md cursor-pointer">
                    EXPLORE THE CAPABILITY ARCHITECTURE
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>

            </div>

            {/* Right Column: Flywheel Image */}
            <div className="flex items-center justify-center lg:col-span-6 py-4">
              <div id="flywheel" className="relative max-w-[640px] w-full flex items-center justify-center">
                <img 
                  src="https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/kyureeus-assets/KyureeusFlyWheel/why%20kyureeus.png" 
                  alt="Why Kyureeus Flywheel" 
                  className="w-full h-auto object-contain drop-shadow-md hover:scale-[1.03] transition-transform duration-300 scale-105"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Container wrapper for sections sliding over hero */}
      <div className="relative z-20 bg-[#F5F2EB]">
        {/* 2. Three Model Comparison Section (01, 02, 03) */}
        <section className="relative bg-white py-16 md:py-24 px-6 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl w-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#121212]/10 gap-12 lg:gap-0">
              
              {/* Column 01: The Old Model */}
              <div className="flex flex-col space-y-6 lg:px-8 first:pl-0 last:pr-0 pb-8 lg:pb-0">
                {/* Number and Icon Badge Header */}
                <div className="flex items-center justify-between">
                  <span className="font-sans text-3xl font-extrabold text-[#666666]/40 tracking-tight">
                    01
                  </span>
                  <motion.div 
                    whileHover={{ scale: 1.15, rotate: 6, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#121212]/15 text-[#121212] bg-[#F5F2EB]/50 hover:bg-[#CF5A30] hover:text-white hover:border-[#CF5A30] hover:shadow-md transition-colors duration-200 cursor-pointer"
                  >
                    <ArrowUp className="h-4 w-4" />
                  </motion.div>
                </div>

                {/* Label */}
                <span className="font-sans text-[11px] font-bold tracking-widest text-[#666666] uppercase">
                  THE OLD MODEL
                </span>

              {/* 32px Bebas Neue Heading */}
              <h2 className="font-bebas text-2xl sm:text-3xl md:text-[32px] leading-[1.1] tracking-wide text-[#121212] uppercase">
                EDUCATION WAS DESIGNED FOR THE INDUSTRIAL AGE.
              </h2>

              {/* 15px SF Pro Display Body Copy */}
              <div className="space-y-4 font-sans text-[15px] leading-relaxed text-[#555555]">
                <p>
                  It assumed knowledge was scarce. Teachers possessed it. Students acquired it. Degrees certified it.
                </p>
                <p>
                  That model worked when information moved slowly. It no longer does.
                </p>
              </div>

              {/* 15px SF Pro Display Coral Highlight */}
              <p className="font-sans text-[15px] font-bold text-[#CF5A30] pt-2">
                Today, knowledge is everywhere. Capability is not.
              </p>
            </div>

            {/* Column 02: The New Model */}
            <div className="flex flex-col space-y-6 lg:px-8 pb-8 lg:pb-0 pt-8 lg:pt-0">
              {/* Number and Icon Badge Header */}
              <div className="flex items-center justify-between">
                <span className="font-sans text-3xl font-extrabold text-[#666666]/40 tracking-tight">
                  02
                </span>
                <motion.div 
                  whileHover={{ scale: 1.15, rotate: 6, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#121212]/15 text-[#121212] bg-[#F5F2EB]/50 hover:bg-[#CF5A30] hover:text-white hover:border-[#CF5A30] hover:shadow-md transition-colors duration-200 cursor-pointer"
                >
                  <Zap className="h-4 w-4" />
                </motion.div>
              </div>

              {/* Label */}
              <span className="font-sans text-[11px] font-bold tracking-widest text-[#666666] uppercase">
                THE NEW MODEL
              </span>

              {/* 32px Bebas Neue Heading */}
              <h2 className="font-bebas text-2xl sm:text-3xl md:text-[32px] leading-[1.1] tracking-wide text-[#121212] uppercase">
                THE COMPETITIVE ADVANTAGE HAS CHANGED.
              </h2>

              {/* 15px SF Pro Display Body Copy */}
              <div className="space-y-4 font-sans text-[15px] leading-relaxed text-[#555555]">
                <p>
                  Artificial intelligence can summarize. Search can retrieve. Software can automate.
                </p>
                <p>
                  But none of them can replace the ability to solve the right problem, build the right system and create measurable enterprise value.
                </p>
              </div>

              {/* 15px SF Pro Display Coral Highlight */}
              <p className="font-sans text-[15px] font-bold text-[#CF5A30] pt-2">
                The future belongs to builders. Not browsers.
              </p>
            </div>

            {/* Column 03: Our Approach */}
            <div className="flex flex-col space-y-6 lg:px-8 pt-8 lg:pt-0">
              {/* Number and Icon Badge Header */}
              <div className="flex items-center justify-between">
                <span className="font-sans text-3xl font-extrabold text-[#666666]/40 tracking-tight">
                  03
                </span>
                <motion.div 
                  whileHover={{ scale: 1.15, rotate: 6, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#121212]/15 text-[#121212] bg-[#F5F2EB]/50 hover:bg-[#CF5A30] hover:text-white hover:border-[#CF5A30] hover:shadow-md transition-colors duration-200 cursor-pointer"
                >
                  <Layers className="h-4 w-4" />
                </motion.div>
              </div>

              {/* Label */}
              <span className="font-sans text-[11px] font-bold tracking-widest text-[#666666] uppercase">
                THE NEW MODEL
              </span>

              {/* 32px Bebas Neue Heading */}
              <h2 className="font-bebas text-2xl sm:text-3xl md:text-[32px] leading-[1.1] tracking-wide text-[#121212] uppercase">
                WE BEGIN WHERE OTHERS FINISH.
              </h2>

              {/* 15px SF Pro Display Body Copy */}
              <p className="font-sans text-[15px] leading-relaxed text-[#555555]">
                Most education asks, &quot;What should we teach?&quot; Kyureeus asks, &quot;What must this person become capable of doing?&quot; That single question changes everything.
              </p>

              {/* Comparison List with Red Arrows */}
              <div className="space-y-3.5 pt-4">
                {[
                  { left: "Instead of subjects...", right: "We organize around enterprise jobs." },
                  { left: "Instead of lectures...", right: "We build capability." },
                  { left: "Instead of exams...", right: "We build solutions." },
                  { left: "Instead of graduation...", right: "We build enterprise readiness." }
                ].map((item, idx) => (
                  <div key={idx} className="grid grid-cols-[140px_20px_1fr] items-start text-[13px] md:text-[14px] font-sans">
                    <span className="text-[#666666] font-normal leading-snug">{item.left}</span>
                    <span className="text-[#CF5A30] font-bold text-sm leading-snug">→</span>
                    <span className="font-extrabold text-[#121212] leading-snug">{item.right}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Three Column Section 2 (04, 05, 06) */}
      <section className="bg-[#F5F2EB] border-t border-[#121212]/10 py-16 md:py-24 px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#121212]/10 gap-12 lg:gap-0">
            
            {/* Column 04: Complete Architectures */}
            <div className="flex flex-col space-y-6 lg:px-8 first:pl-0 last:pr-0 pb-8 lg:pb-0">
              {/* Number and Icon Badge Header */}
              <div className="flex items-center justify-between">
                <span className="font-sans text-3xl font-extrabold text-[#666666]/40 tracking-tight">
                  04
                </span>
                <motion.div 
                  whileHover={{ scale: 1.15, rotate: 6, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#121212]/15 text-[#121212] bg-white/60 hover:bg-[#CF5A30] hover:text-white hover:border-[#CF5A30] hover:shadow-md transition-colors duration-200 cursor-pointer"
                >
                  <LayoutGrid className="h-4 w-4" />
                </motion.div>
              </div>

              {/* Label */}
              <span className="font-sans text-[11px] font-bold tracking-widest text-[#666666] uppercase">
                WE BUILD COMPLETE ARCHITECTURES
              </span>

              {/* 32px Bebas Neue Heading */}
              <h2 className="font-bebas text-2xl sm:text-3xl md:text-[32px] leading-[1.1] tracking-wide text-[#121212] uppercase">
                REAL ORGANIZATIONS DO NOT SOLVE ISOLATED PROBLEMS. NEITHER SHOULD EDUCATION.
              </h2>

              {/* 15px SF Pro Display Body Copy */}
              <p className="font-sans text-[15px] leading-relaxed text-[#555555]">
                Every Kyureeus pathway integrates business, engineering, AI, leadership and execution into one capability architecture.
              </p>

              {/* 15px SF Pro Display Coral Highlight */}
              <p className="font-sans text-[15px] font-bold text-[#CF5A30] pt-2">
                Because enterprises do not hire isolated skill sets. They hire people who can connect systems, teams and decisions.
              </p>
            </div>

            {/* Column 05: Something Real */}
            <div className="flex flex-col space-y-6 lg:px-8 pb-8 lg:pb-0 pt-8 lg:pt-0">
              {/* Number and Icon Badge Header */}
              <div className="flex items-center justify-between">
                <span className="font-sans text-3xl font-extrabold text-[#666666]/40 tracking-tight">
                  05
                </span>
                <motion.div 
                  whileHover={{ scale: 1.15, rotate: 6, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#121212]/15 text-[#121212] bg-white/60 hover:bg-[#CF5A30] hover:text-white hover:border-[#CF5A30] hover:shadow-md transition-colors duration-200 cursor-pointer"
                >
                  <Box className="h-4 w-4" />
                </motion.div>
              </div>

              {/* Label */}
              <span className="font-sans text-[11px] font-bold tracking-widest text-[#666666] uppercase">
                EVERY BOOTCAMP CREATES SOMETHING REAL
              </span>

              {/* 32px Bebas Neue Heading */}
              <h2 className="font-bebas text-2xl sm:text-3xl md:text-[32px] leading-[1.1] tracking-wide text-[#121212] uppercase">
                LEARNING WITHOUT EVIDENCE IS OPINION.
              </h2>

              {/* Sub-statement */}
              <p className="font-sans text-[15px] leading-relaxed text-[#555555]">
                Every Kyureeus bootcamp ends with something measurable.
              </p>

              {/* 6 Output Items with Icons */}
              <div className="space-y-2.5 pt-1">
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
                    <motion.div 
                      key={idx} 
                      whileHover={{ x: 6 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className="flex items-center gap-3 font-sans text-[14px] font-bold text-[#121212] cursor-pointer"
                    >
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-[#CF5A30]/10 text-[#CF5A30]">
                        <Icon className="h-3.5 w-3.5" />
                      </div>
                      <span>{item.label}</span>
                    </motion.div>
                  );
                })}
              </div>

              {/* 15px SF Pro Display Coral Highlight */}
              <p className="font-sans text-[15px] font-bold text-[#CF5A30] pt-2">
                Because capability is demonstrated. Not declared.
              </p>
            </div>

            {/* Column 06: Built For Enterprises */}
            <div className="flex flex-col space-y-6 lg:px-8 pt-8 lg:pt-0">
              {/* Number and Icon Badge Header */}
              <div className="flex items-center justify-between">
                <span className="font-sans text-3xl font-extrabold text-[#666666]/40 tracking-tight">
                  06
                </span>
                <motion.div 
                  whileHover={{ scale: 1.15, rotate: 6, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#121212]/15 text-[#121212] bg-white/60 hover:bg-[#CF5A30] hover:text-white hover:border-[#CF5A30] hover:shadow-md transition-colors duration-200 cursor-pointer"
                >
                  <ShieldCheck className="h-4 w-4" />
                </motion.div>
              </div>

              {/* Label */}
              <span className="font-sans text-[11px] font-bold tracking-widest text-[#666666] uppercase">
                BUILT WITH ENTERPRISE. BUILT FOR ENTERPRISES.
              </span>

              {/* 32px Bebas Neue Heading */}
              <h2 className="font-bebas text-2xl sm:text-3xl md:text-[32px] leading-[1.1] tracking-wide text-[#121212] uppercase">
                EVERY PATHWAY BEGINS WITH WORK THAT ORGANIZATIONS ACTUALLY NEED PERFORMED.
              </h2>

              {/* 3 Checkmark Items */}
              <div className="space-y-4 pt-2">
                {[
                  "Every project reflects real operating environments.",
                  "Every capability is validated against measurable outcomes.",
                  "Every learner graduates with evidence."
                ].map((text, idx) => (
                  <div key={idx} className="flex items-start gap-3 font-sans text-[15px] text-[#3A3E40] leading-snug">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#CF5A30]/10 text-[#CF5A30] mt-0.5">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              {/* 15px SF Pro Display Coral Highlight */}
              <p className="font-sans text-[15px] font-bold text-[#CF5A30] pt-4">
                Not assumptions.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Two Column Compounding & Operating System Section (07, 08) */}
      <section className="bg-[#F9F9FB] border-t border-[#121212]/10 py-16 md:py-24 px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#121212]/10 gap-12 lg:gap-0">
            
            {/* Column 07: Learning That Compounds */}
            <div className="flex flex-col space-y-6 lg:px-10 first:pl-0 last:pr-0 pb-8 lg:pb-0">
              {/* Number and Icon Badge Header */}
              <div className="flex items-center justify-between">
                <span className="font-sans text-3xl font-extrabold text-[#666666]/40 tracking-tight">
                  07
                </span>
                <motion.div 
                  whileHover={{ scale: 1.15, rotate: 6, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#121212]/15 text-[#121212] bg-white hover:bg-[#CF5A30] hover:text-white hover:border-[#CF5A30] hover:shadow-md transition-colors duration-200 cursor-pointer"
                >
                  <RefreshCw className="h-4 w-4" />
                </motion.div>
              </div>

              {/* Label */}
              <span className="font-sans text-[11px] font-bold tracking-widest text-[#666666] uppercase">
                LEARNING THAT COMPOUNDS
              </span>

              {/* 44px Bebas Neue Heading */}
              <h2 className="font-bebas text-3xl sm:text-4xl md:text-[44px] leading-[1.1] tracking-wide text-[#121212] uppercase">
                TRADITIONAL EDUCATION ENDS WHEN THE COURSE ENDS.
              </h2>

              {/* 5 Checkmark Items */}
              <div className="space-y-4 pt-2">
                {[
                  "Kyureeus improves every time someone learns.",
                  "Every enterprise project strengthens the curriculum.",
                  "Every curriculum produces stronger builders.",
                  "Every builder creates better enterprise outcomes.",
                  "Every outcome improves Kyureeus."
                ].map((text, idx) => (
                  <div key={idx} className="flex items-start gap-3 font-sans text-[15px] text-[#3A3E40] leading-snug">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#CF5A30]/10 text-[#CF5A30] mt-0.5">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              {/* 15px SF Pro Display Coral Highlight */}
              <p className="font-sans text-[15px] font-bold text-[#CF5A30] pt-4">
                Learning becomes a flywheel. Not an event.
              </p>
            </div>

            {/* Column 08: This Is More Than Education */}
            <div className="flex flex-col space-y-6 lg:px-10 pt-8 lg:pt-0">
              {/* Number and Icon Badge Header */}
              <div className="flex items-center justify-between">
                <span className="font-sans text-3xl font-extrabold text-[#666666]/40 tracking-tight">
                  08
                </span>
                <motion.div 
                  whileHover={{ scale: 1.15, rotate: 6, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#121212]/15 text-[#121212] bg-white hover:bg-[#CF5A30] hover:text-white hover:border-[#CF5A30] hover:shadow-md transition-colors duration-200 cursor-pointer"
                >
                  <Terminal className="h-4 w-4" />
                </motion.div>
              </div>

              {/* Label */}
              <span className="font-sans text-[11px] font-bold tracking-widest text-[#666666] uppercase">
                THIS IS MORE THAN EDUCATION
              </span>

              {/* 44px Bebas Neue Heading */}
              <h2 className="font-bebas text-3xl sm:text-4xl md:text-[44px] leading-[1.1] tracking-wide text-[#121212] uppercase">
                IT IS AN OPERATING SYSTEM FOR DEVELOPING ENTERPRISE CAPABILITY.
              </h2>

              {/* 4 Bullet Points with Coral Dots */}
              <div className="space-y-3 pt-2">
                {[
                  "For learners.",
                  "For organizations.",
                  "For industries.",
                  "For the future of intelligent work."
                ].map((text, idx) => (
                  <div key={idx} className="flex items-center gap-3 font-sans text-[15px] font-bold text-[#3A3E40]">
                    <span className="h-2 w-2 rounded-full bg-[#CF5A30] shrink-0" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              {/* Bottom Quote Card */}
              <motion.div 
                whileHover={{ y: -8, transition: { duration: 0.25, ease: "easeOut" } }}
                className="mt-6 bg-[#F5F2EB] p-6 md:p-8 rounded-xl border border-[#121212]/5 shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              >
                <blockquote className="font-bebas text-[20px] md:text-[24px] leading-tight tracking-wide text-[#121212] uppercase">
                  &quot;BECAUSE THE COMPANIES THAT WIN TOMORROW WILL NOT SIMPLY KNOW MORE. THEY WILL BUILD BETTER.&quot;
                </blockquote>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Dark CTA & Real Outputs Section (09 Build The Future) */}
      <section className="bg-[#1C1C1C] text-[#F5F2EB] border-t border-white/10 py-16 md:py-24 px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Heading & Coral CTA */}
            <div className="flex flex-col items-start lg:col-span-7 space-y-6 md:space-y-8">
              
              {/* Top Label */}
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#CF5A30] uppercase">
                <span className="h-[2px] w-4 bg-[#CF5A30]" />
                09 BUILD THE FUTURE
              </div>

              {/* 56px Bebas Neue Headline */}
              <h2 className="font-bebas text-4xl sm:text-5xl md:text-[56px] leading-[1.05] tracking-wide text-[#F5F2EB] uppercase">
                DON&apos;T PREPARE FOR YESTERDAY&apos;S JOBS. BUILD THE CAPABILITIES TOMORROW&apos;S ENTERPRISES CANNOT OPERATE WITHOUT.
              </h2>

              {/* Coral CTA Button */}
              <div className="pt-2">
                <Link href="/#capability-architecture">
                  <Button className="group flex items-center gap-2 rounded-[4px] bg-[#CF5A30] hover:bg-white text-[#F5F2EB] hover:text-[#121212] px-7 py-6 text-xs font-bold tracking-widest uppercase transition-colors duration-300 shadow-md cursor-pointer">
                    EXPLORE THE CAPABILITY ARCHITECTURE
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>

            </div>

            {/* Right Column: 5 Stacked Topic Cards */}
            <div className="flex flex-col space-y-3.5 lg:col-span-5 w-full">
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
                    whileHover={{ x: 8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="group bg-[#242424] hover:bg-[#CF5A30] rounded-xl p-4 md:p-4.5 border border-white/10 flex items-center gap-4 transition-colors duration-300 shadow-md cursor-pointer"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#CF5A30]/15 group-hover:bg-white/20 text-[#CF5A30] group-hover:text-white transition-colors duration-300">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="font-sans text-[13px] font-bold tracking-widest text-[#F5F2EB] group-hover:text-white transition-colors duration-300 uppercase">
                      {item.title}
                    </span>
                  </motion.div>
                );
              })}
            </div>

          </div>

          {/* Bottom Full-Width Tagline */}
          <div className="mt-16 pt-12 border-t border-white/10 text-center">
            <h3 className="font-bebas text-2xl sm:text-3xl md:text-[32px] tracking-widest text-[#F5F2EB] uppercase">
              THE FUTURE BELONGS TO BUILDERS. KYUREEUS BUILDS THEM.
            </h3>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}