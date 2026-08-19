"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  Cpu, 
  Settings, 
  Award,
  Check,
  HelpCircle,
  Edit3,
  Send,
  Activity,
  TrendingUp,
  RefreshCw,
  Target,
  Terminal,
  Shield,
  CheckCircle2,
  Zap
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function BootcampsPage() {
  return (
    <div className="flex flex-col flex-1 bg-[#F5F2EB] text-[#121212] min-h-screen">
      {/* 1. Main Hero Section */}
      <section className="sticky top-0 min-h-[calc(100vh-80px)] z-10 flex items-center justify-center px-6 py-10 sm:py-12 md:px-12 lg:px-20 bg-[#F5F2EB] text-[#121212] overflow-hidden">
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Left Column: Text & Actions */}
            <div className="flex flex-col items-start lg:col-span-6 space-y-5 md:space-y-6 lg:space-y-8">
              
              {/* Badge/Label */}
              <div className="text-xs font-bold tracking-widest text-[#CF5A30] uppercase">
                BOOTCAMPS
              </div>

              {/* 64px Bebas Neue Heading with Coral Highlight */}
              <h1 className="font-bebas text-4xl sm:text-5xl md:text-[56px] lg:text-[64px] leading-[1.05] tracking-wide text-[#121212] uppercase">
                EVERY ENTERPRISE RUNS ON CAPABILITY. <span className="text-[#CF5A30]">EVERY CAPABILITY CAN BE BUILT.</span>
              </h1>

              {/* 16px SF Pro Display Sub-content */}
              <div className="space-y-4 font-sans text-[15px] sm:text-[16px] leading-relaxed text-[#3A3E40]">
                <p>
                  Kyureeus bootcamps are not collections of lectures. They are complete systems for developing the people modern enterprises need.
                </p>
                <p className="font-bold text-[#121212]">
                  Because organizations do not hire subjects. They hire builders.
                </p>
                {/* Coral highlighted line */}
                <p className="font-bold text-[#CF5A30]">
                  Build Capability. Create Enterprise Value.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <Link href="/#bootcamps">
                  <Button className="group flex items-center gap-2 rounded-[4px] bg-[#CF5A30] hover:bg-[#121212] text-[#F5F2EB] px-7 py-6 text-xs font-bold tracking-widest uppercase transition-colors duration-300 shadow-sm hover:shadow-md cursor-pointer">
                    EXPLORE THE BOOTCAMP PORTFOLIO
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>

            </div>

            {/* Right Column: Workspace Photo */}
            <div className="lg:col-span-6 relative min-h-[280px] sm:min-h-[360px] lg:min-h-[440px] aspect-[4/3] lg:aspect-auto overflow-hidden flex items-center justify-center rounded-2xl border border-[#121212]/10 shadow-lg">
              <img 
                src="https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/kyureeus-assets/KyureeusFlyWheel/photo1.jpg" 
                alt="Kyureeus Enterprise Bootcamp Workstation" 
                loading="eager"
                decoding="async"
                crossOrigin="anonymous"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>

          </div>
        </div>
      </section>

        {/* 2. Four Column Methodology Section (01, 02, 03, 04) */}
        <section className="sticky top-0 z-20 bg-white py-16 md:py-24 px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#121212]/10 gap-12 lg:gap-0">
            
            {/* Column 01: NOT COURSES */}
            <div className="flex flex-col justify-between space-y-6 lg:px-6 first:pl-0 last:pr-0 pb-8 lg:pb-0">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-2xl font-extrabold text-[#666666]/40 tracking-tight">
                    01
                  </span>
                  <span className="font-sans text-[11px] font-extrabold tracking-widest text-[#CF5A30] uppercase">
                    NOT COURSES
                  </span>
                </div>

                <h2 className="font-bebas text-2xl sm:text-3xl md:text-[32px] leading-[1.1] tracking-wide text-[#121212] uppercase">
                  CAPABILITY ARCHITECTURES.
                </h2>

                <div className="space-y-4 font-sans text-[14px] leading-relaxed text-[#555555]">
                  <p>
                    Most learning platforms organize education around subjects. Marketing. Finance. Programming. Cybersecurity.
                  </p>
                  <p className="font-bold text-[#121212]">
                    Kyureeus organizes learning around enterprise jobs.
                  </p>
                </div>

                <p className="font-sans text-[14px] font-bold text-[#CF5A30]">
                  Discover. Build. Deliver. Grow. Protect. Compound.
                </p>
              </div>

              <p className="font-sans text-[13px] text-[#CF5A30] pt-4 leading-snug">
                Because enterprises succeed through work. Not subjects.
              </p>
            </div>

            {/* Column 02: THE PROCESS */}
            <div className="flex flex-col justify-between space-y-6 lg:px-6 pb-8 lg:pb-0 pt-8 lg:pt-0">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-2xl font-extrabold text-[#666666]/40 tracking-tight">
                    02
                  </span>
                  <span className="font-sans text-[11px] font-extrabold tracking-widest text-[#CF5A30] uppercase">
                    THE PROCESS
                  </span>
                </div>

                <h2 className="font-bebas text-2xl sm:text-3xl md:text-[32px] leading-[1.1] tracking-wide text-[#121212] uppercase">
                  EVERY BOOTCAMP STARTS WITH A JOB.
                </h2>

                <p className="font-sans text-[14px] leading-relaxed text-[#555555]">
                  What meaningful work must this person become capable of performing? Everything else follows.
                </p>

                <ul className="space-y-2 font-sans text-[14px] text-[#3A3E40]">
                  {["The capability.", "The systems.", "The projects.", "The evidence.", "The enterprise outcome."].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-[#666666]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="font-sans text-[13px] text-[#CF5A30] pt-4 leading-snug">
                Learning becomes a consequence of building. Not the objective.
              </p>
            </div>

            {/* Column 03: INTEGRATION */}
            <div className="flex flex-col justify-between space-y-6 lg:px-6 pb-8 lg:pb-0 pt-8 lg:pt-0">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-2xl font-extrabold text-[#666666]/40 tracking-tight">
                    03
                  </span>
                  <span className="font-sans text-[11px] font-extrabold tracking-widest text-[#CF5A30] uppercase">
                    INTEGRATION
                  </span>
                </div>

                <h2 className="font-bebas text-2xl sm:text-3xl md:text-[32px] leading-[1.1] tracking-wide text-[#121212] uppercase">
                  BUILT AS COMPLETE ARCHITECTURES.
                </h2>

                <p className="font-sans text-[14px] leading-relaxed text-[#555555]">
                  Each bootcamp integrates the capabilities required to solve an entire enterprise problem. Not isolated lessons. Complete systems.
                </p>

                <ul className="space-y-2 font-sans text-[14px] font-bold text-[#121212]">
                  {["Business", "Engineering", "Artificial Intelligence", "Operations", "Leadership", "Execution"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-[#CF5A30]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="font-sans text-[13px] text-[#CF5A30] pt-4 leading-snug">
                Because enterprises do not reward specialization alone. They reward integration.
              </p>
            </div>

            {/* Column 04: MEASURABLE */}
            <div className="flex flex-col justify-between space-y-6 lg:px-6 pt-8 lg:pt-0">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-2xl font-extrabold text-[#666666]/40 tracking-tight">
                    04
                  </span>
                  <span className="font-sans text-[11px] font-extrabold tracking-widest text-[#CF5A30] uppercase">
                    MEASURABLE
                  </span>
                </div>

                <h2 className="font-bebas text-2xl sm:text-3xl md:text-[32px] leading-[1.1] tracking-wide text-[#121212] uppercase">
                  EVERY BOOTCAMP PRODUCES EVIDENCE.
                </h2>

                <p className="font-sans text-[14px] leading-relaxed text-[#555555]">
                  Knowledge is invisible. Capability is observable. Every learner leaves with real physical/digital artifacts:
                </p>

                <ul className="space-y-2 font-sans text-[14px] text-[#3A3E40]">
                  {[
                    "Products & Platforms",
                    "Operating models & AI systems",
                    "Strategies & Dashboards",
                    "Enterprise architectures"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-[#666666]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="font-sans text-[13px] text-[#CF5A30] pt-4 leading-snug">
                Evidence employers can evaluate. Because capability should never depend on a résumé.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Four Layer Capability Portfolio Section (05) */}
      <section className="sticky top-0 z-30 bg-[#F4EFE6] border-t border-[#121212]/10 py-16 md:py-24 px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl w-full space-y-12">
          
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#CF5A30] uppercase">
              <span>05</span>
              <span>THE KYUREEUS CAPABILITY PORTFOLIO</span>
            </div>
            <h2 className="font-bebas text-3xl sm:text-4xl md:text-[42px] tracking-wide text-[#121212] uppercase">
              FOUR LAYERS. ONE PROGRESSION.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-stretch">
            
            {/* Card 1: FOUNDATIONAL CAPABILITIES */}
            <motion.div 
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="group flex flex-col rounded-2xl overflow-hidden border border-[#121212]/10 shadow-sm hover:shadow-xl transition-all duration-300 bg-white cursor-pointer"
            >
              <div className="bg-[#FBF8F3] group-hover:bg-[#F5F0E6] p-6 border-b border-[#121212]/5 space-y-3 transition-colors duration-300">
                <motion.div 
                  whileHover={{ scale: 1.15, rotate: 6 }}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#CF5A30]/10 group-hover:bg-[#CF5A30] text-[#CF5A30] group-hover:text-white transition-colors duration-300 shadow-xs"
                >
                  <BookOpen className="h-5 w-5" />
                </motion.div>
                <h3 className="font-bebas text-2xl md:text-[24px] tracking-wide text-[#121212] uppercase leading-none">
                  FOUNDATIONAL CAPABILITIES
                </h3>
                <p className="font-sans text-[14px] text-[#666666] leading-snug">
                  Learn the operating language of modern business and technology.
                </p>
              </div>

              <div className="p-6 flex-1 bg-white">
                <ul className="space-y-3 font-sans text-[14px] font-bold text-[#3A3E40]">
                  {[
                    "Business Foundations",
                    "Computing Systems",
                    "Software Engineering",
                    "Systems Thinking",
                    "Leadership Foundations",
                    "Critical Thinking"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#CF5A30] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Card 2: BUILDER ARCHITECTURES */}
            <motion.div 
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="group flex flex-col rounded-2xl overflow-hidden border border-[#121212]/10 shadow-sm hover:shadow-xl transition-all duration-300 bg-white cursor-pointer"
            >
              <div className="bg-[#FBF8F3] group-hover:bg-[#F5F0E6] p-6 border-b border-[#121212]/5 space-y-3 transition-colors duration-300">
                <motion.div 
                  whileHover={{ scale: 1.15, rotate: 6 }}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#CF5A30]/10 group-hover:bg-[#CF5A30] text-[#CF5A30] group-hover:text-white transition-colors duration-300 shadow-xs"
                >
                  <Cpu className="h-5 w-5" />
                </motion.div>
                <h3 className="font-bebas text-2xl md:text-[24px] tracking-wide text-[#121212] uppercase leading-none">
                  BUILDER ARCHITECTURES
                </h3>
                <p className="font-sans text-[14px] text-[#666666] leading-snug">
                  Build complete products, systems and enterprises.
                </p>
              </div>

              <div className="p-6 flex-1 bg-white">
                <ul className="space-y-3 font-sans text-[14px] font-bold text-[#3A3E40]">
                  {[
                    "Engineering Architecture",
                    "AI Engineering",
                    "Product Architecture",
                    "Cybersecurity Architecture",
                    "Cloud & Platform Architecture",
                    "Data & Intelligence Architecture",
                    "Robotics & Autonomy",
                    "Industrial Intelligence",
                    "Experience Design"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#CF5A30] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Card 3: OPERATOR ARCHITECTURES */}
            <motion.div 
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="group flex flex-col rounded-2xl overflow-hidden border border-[#121212]/10 shadow-sm hover:shadow-xl transition-all duration-300 bg-white cursor-pointer"
            >
              <div className="bg-[#FBF8F3] group-hover:bg-[#F5F0E6] p-6 border-b border-[#121212]/5 space-y-3 transition-colors duration-300">
                <motion.div 
                  whileHover={{ scale: 1.15, rotate: 6 }}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#CF5A30]/10 group-hover:bg-[#CF5A30] text-[#CF5A30] group-hover:text-white transition-colors duration-300 shadow-xs"
                >
                  <Settings className="h-5 w-5" />
                </motion.div>
                <h3 className="font-bebas text-2xl md:text-[24px] tracking-wide text-[#121212] uppercase leading-none">
                  OPERATOR ARCHITECTURES
                </h3>
                <p className="font-sans text-[14px] text-[#666666] leading-snug">
                  Operate enterprise capabilities at scale.
                </p>
              </div>

              <div className="p-6 flex-1 bg-white">
                <ul className="space-y-3 font-sans text-[14px] font-bold text-[#3A3E40]">
                  {[
                    "Engineering Management",
                    "Platform Operations",
                    "Revenue Operations",
                    "Product Operations",
                    "AI Platform Operations",
                    "Security Operations",
                    "Enterprise Transformation",
                    "Supply Chain",
                    "Systems Assurance"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#CF5A30] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Card 4: EXECUTIVE ARCHITECTURES */}
            <motion.div 
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="group flex flex-col rounded-2xl overflow-hidden border border-[#121212]/10 shadow-sm hover:shadow-xl transition-all duration-300 bg-white cursor-pointer"
            >
              <div className="bg-[#FBF8F3] group-hover:bg-[#F5F0E6] p-6 border-b border-[#121212]/5 space-y-3 transition-colors duration-300">
                <motion.div 
                  whileHover={{ scale: 1.15, rotate: 6 }}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#CF5A30]/10 group-hover:bg-[#CF5A30] text-[#CF5A30] group-hover:text-white transition-colors duration-300 shadow-xs"
                >
                  <Award className="h-5 w-5" />
                </motion.div>
                <h3 className="font-bebas text-2xl md:text-[24px] tracking-wide text-[#121212] uppercase leading-none">
                  EXECUTIVE ARCHITECTURES
                </h3>
                <p className="font-sans text-[14px] text-[#666666] leading-snug">
                  Lead organizations that compound enterprise value.
                </p>
              </div>

              <div className="p-6 flex-1 bg-white">
                <ul className="space-y-3 font-sans text-[14px] font-bold text-[#3A3E40]">
                  {[
                    "Chief Product Officer",
                    "Chief Technology Officer",
                    "Chief AI Officer",
                    "Chief Information Officer",
                    "Chief Information Security Officer",
                    "Chief Operating Officer",
                    "Chief Strategy Officer",
                    "Chief Revenue Officer",
                    "Chief Executive Officer"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#CF5A30] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 4. Two Column Designed With Enterprise & Builder Cycle Section (06, 07) */}
      <section className="sticky top-0 z-40 bg-white border-t border-[#121212]/10 py-16 md:py-24 px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#121212]/10 gap-12 lg:gap-0">
            
            {/* Column 06: DESIGNED WITH ENTERPRISE */}
            <div className="flex flex-col space-y-6 lg:px-10 first:pl-0 last:pr-0 pb-8 lg:pb-0">
              {/* Header Label */}
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#CF5A30] uppercase">
                <span>06</span>
                <span>DESIGNED WITH ENTERPRISE</span>
              </div>

              {/* 5 Checkmark Items */}
              <div className="space-y-4 pt-2">
                {[
                  "Every pathway is built from real industry problems.",
                  "Every framework reflects enterprise operating models.",
                  "Every project creates measurable outcomes.",
                  "Every outcome strengthens the curriculum.",
                  "The portfolio continuously improves."
                ].map((text, idx) => (
                  <div key={idx} className="flex items-start gap-3 font-sans text-[15px] text-[#3A3E40] leading-snug">
                    <Check className="h-4 w-4 text-[#CF5A30] shrink-0 mt-0.5" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              {/* Coral Highlight Line */}
              <p className="font-sans text-[15px] font-bold text-[#CF5A30] pt-4">
                Just like the enterprises it serves.
              </p>
            </div>

            {/* Column 07: LEARN LIKE A BUILDER */}
            <div className="flex flex-col space-y-8 lg:px-10 pt-8 lg:pt-0">
              {/* Header Label */}
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#CF5A30] uppercase">
                <span>07</span>
                <span>LEARN LIKE A BUILDER</span>
              </div>

              {/* 6-Step Horizontal Builder Cycle Graphic */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                {[
                  { icon: HelpCircle, label: "Experience" },
                  { icon: Edit3, label: "Design" },
                  { icon: Send, label: "Deploy" },
                  { icon: Activity, label: "Measure" },
                  { icon: TrendingUp, label: "Improve" },
                  { icon: RefreshCw, label: "Repeat" }
                ].map((step, idx, arr) => {
                  const Icon = step.icon;
                  return (
                    <React.Fragment key={idx}>
                      <div className="flex flex-col items-center text-center space-y-2 group cursor-pointer">
                        <motion.div 
                          whileHover={{ scale: 1.2, rotate: 6, y: -2 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F2EB] group-hover:bg-[#CF5A30] text-[#CF5A30] group-hover:text-white transition-colors duration-200 shadow-xs group-hover:shadow-md"
                        >
                          <Icon className="h-4.5 w-4.5" />
                        </motion.div>
                        <span className="font-sans text-[10px] font-bold text-[#121212] group-hover:text-[#CF5A30] transition-colors duration-200 uppercase tracking-wider">
                          {step.label}
                        </span>
                      </div>
                      {idx < arr.length - 1 && (
                        <span className="text-[#666666] text-xs font-sans pb-6">→</span>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>

              {/* Sub-text */}
              <p className="font-sans text-[15px] leading-relaxed text-[#666666] pt-2">
                That is how enterprises create value. That is how Kyureeus develops capability.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Dark CTA & Final Outcome Section (08 / bg-[#1C1C1C]) */}
      <section className="sticky top-0 z-50 bg-[#1C1C1C] text-[#F5F2EB] border-t border-white/10 py-16 md:py-24 px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl w-full">

          {/* Main 2-Column Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-4">
            
            {/* Left Column: Heading & CTA */}
            <div className="flex flex-col items-start lg:col-span-7 space-y-6 md:space-y-8">
              <div className="text-xs font-bold tracking-widest text-[#CF5A30] uppercase">
                THE FUTURE BELONGS TO PEOPLE WHO CAN BUILD.
              </div>

              {/* 44px Bebas Neue Headline */}
              <h2 className="font-bebas text-3xl sm:text-4xl md:text-[44px] leading-[1.05] tracking-wide text-[#F5F2EB] uppercase">
                NOT BECAUSE THEY COMPLETED ANOTHER COURSE. BECAUSE THEY CAN SOLVE PROBLEMS OTHERS CANNOT.
              </h2>

              <p className="font-sans text-[15px] text-[#A1A1AA]">
                Every bootcamp is one step toward becoming indispensable.
              </p>

              <div className="pt-2">
                <Link href="/#bootcamps">
                  <Button className="group flex items-center gap-2 rounded-[4px] bg-[#CF5A30] hover:bg-white text-[#F5F2EB] hover:text-[#121212] px-7 py-6 text-xs font-bold tracking-widest uppercase transition-colors duration-300 shadow-md cursor-pointer">
                    EXPLORE THE BOOTCAMP PORTFOLIO
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column: Stacked Callout Lines */}
            <div className="flex flex-col items-start lg:items-end justify-center lg:text-right lg:col-span-5 space-y-1">
              <span className="font-bebas text-3xl sm:text-4xl md:text-[40px] tracking-wide text-[#F5F2EB] uppercase leading-none">
                BUILD CAPABILITY.
              </span>
              <span className="font-bebas text-3xl sm:text-4xl md:text-[40px] tracking-wide text-[#CF5A30] uppercase leading-none">
                CREATE ENTERPRISE VALUE.
              </span>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
