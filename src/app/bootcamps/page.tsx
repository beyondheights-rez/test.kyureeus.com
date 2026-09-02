"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
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
  RefreshCw
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BootcampsPage() {
  return (
    <div className="flex flex-col flex-1 bg-[#F5F2EB] text-[#121212] min-h-screen w-full overflow-x-clip">
      {/* 1. Bootcamps Hero Section */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-10 md:py-12 lg:py-14 bg-[#F5F2EB] text-[#121212] overflow-hidden">
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Headline & Info */}
            <div className="flex flex-col items-start lg:col-span-6 space-y-4 sm:space-y-5 md:space-y-6">
              
              {/* Category Label */}
              <div className="text-xs font-bold tracking-widest text-[#CF5A30] uppercase">
                BOOTCAMPS &amp; PATHWAYS
              </div>

              {/* Headline Title */}
              <h1 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-[58px] xl:text-[62px] leading-[1.05] tracking-wide uppercase">
                <span className="text-[#121212] block">LEARNING FOR THOSE</span>
                <span className="text-[#CF5A30] block pt-1">WHO BUILD.</span>
              </h1>

              {/* Description Paragraphs */}
              <div className="space-y-3 font-sans text-[15px] sm:text-base md:text-[17px] leading-relaxed text-[#3A3E40]">
                <p>
                  Kyureeus bootcamps are not collections of lectures. They are complete systems for developing the people modern enterprises need.
                </p>
                <p className="font-bold text-[#121212]">
                  Because organizations do not hire subjects. They hire builders.
                </p>
                <p className="font-bold text-[#CF5A30]">
                  Build Capability. Create Enterprise Value.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-1 w-full sm:w-auto">
                <Link href="#portfolio-layers" className="w-full sm:w-auto block">
                  <Button className="w-full sm:w-auto group flex items-center justify-center gap-2 rounded-[4px] bg-[#CF5A30] hover:bg-[#121212] text-[#F5F2EB] px-6 sm:px-8 py-5 text-xs sm:text-sm font-bold tracking-widest uppercase transition-colors duration-300 shadow-md cursor-pointer min-h-[48px]">
                    EXPLORE THE BOOTCAMP PORTFOLIO
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>

            </div>

            {/* Right Column: Workspace Photo */}
            <div className="lg:col-span-6 relative min-h-[260px] sm:min-h-[320px] lg:min-h-[380px] aspect-[16/10] sm:aspect-[4/3] lg:aspect-auto overflow-hidden flex items-center justify-center rounded-2xl border border-[#121212]/10 shadow-lg w-full">
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
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center bg-white py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-6 md:px-12 lg:px-20 border-b border-[#121212]/10">
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#121212]/10 gap-6 md:gap-8 lg:gap-0">
            
            {/* Column 01: NOT COURSES */}
            <div className="flex flex-col justify-between space-y-4 md:space-y-5 lg:px-6 first:pl-0 last:pr-0 pb-6 lg:pb-0">
              <div className="space-y-3 md:space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-3xl font-extrabold text-[#666666]/40 tracking-tight">
                    01
                  </span>
                  <span className="font-sans text-xs font-black tracking-widest text-[#CF5A30] uppercase">
                    NOT COURSES
                  </span>
                </div>

                <h2 className="font-bebas text-2xl sm:text-3xl md:text-[28px] leading-[1.1] tracking-wide text-[#121212] uppercase">
                  CAPABILITY ARCHITECTURES.
                </h2>

                <div className="space-y-2 font-sans text-[14px] sm:text-[14.5px] leading-relaxed text-[#444444]">
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

              <p className="font-sans text-[13px] sm:text-[13.5px] font-semibold text-[#CF5A30] pt-1 leading-snug">
                Because enterprises succeed through work. Not subjects.
              </p>
            </div>

            {/* Column 02: THE PROCESS */}
            <div className="flex flex-col justify-between space-y-4 md:space-y-5 lg:px-6 pb-6 lg:pb-0 pt-6 lg:pt-0">
              <div className="space-y-3 md:space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-3xl font-extrabold text-[#666666]/40 tracking-tight">
                    02
                  </span>
                  <span className="font-sans text-xs font-black tracking-widest text-[#CF5A30] uppercase">
                    THE PROCESS
                  </span>
                </div>

                <h2 className="font-bebas text-2xl sm:text-3xl md:text-[28px] leading-[1.1] tracking-wide text-[#121212] uppercase">
                  EVERY BOOTCAMP STARTS WITH A JOB.
                </h2>

                <p className="font-sans text-[14px] sm:text-[14.5px] leading-relaxed text-[#444444]">
                  What meaningful work must this person become capable of performing? Everything else follows.
                </p>

                <ul className="space-y-1.5 font-sans text-[13.5px] sm:text-[14px] font-medium text-[#3A3E40]">
                  {["The capability.", "The systems.", "The projects.", "The evidence.", "The enterprise outcome."].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-[#CF5A30] font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="font-sans text-[13px] sm:text-[13.5px] font-semibold text-[#CF5A30] pt-1 leading-snug">
                Learning becomes a consequence of building. Not the objective.
              </p>
            </div>

            {/* Column 03: INTEGRATION */}
            <div className="flex flex-col justify-between space-y-4 md:space-y-5 lg:px-6 pb-6 lg:pb-0 pt-6 lg:pt-0">
              <div className="space-y-3 md:space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-3xl font-extrabold text-[#666666]/40 tracking-tight">
                    03
                  </span>
                  <span className="font-sans text-xs font-black tracking-widest text-[#CF5A30] uppercase">
                    INTEGRATION
                  </span>
                </div>

                <h2 className="font-bebas text-2xl sm:text-3xl md:text-[28px] leading-[1.1] tracking-wide text-[#121212] uppercase">
                  BUILT AS COMPLETE ARCHITECTURES.
                </h2>

                <p className="font-sans text-[14px] sm:text-[14.5px] leading-relaxed text-[#444444]">
                  Each bootcamp integrates the capabilities required to solve an entire enterprise problem. Not isolated lessons. Complete systems.
                </p>

                <ul className="space-y-1 font-sans text-[13.5px] sm:text-[14px] font-bold text-[#121212]">
                  {["Business", "Engineering", "Artificial Intelligence", "Operations", "Leadership", "Execution"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-[#CF5A30]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="font-sans text-[13px] sm:text-[13.5px] font-semibold text-[#CF5A30] pt-1 leading-snug">
                Because enterprises do not reward specialization alone. They reward integration.
              </p>
            </div>

            {/* Column 04: MEASURABLE */}
            <div className="flex flex-col justify-between space-y-4 md:space-y-5 lg:px-6 pt-6 lg:pt-0">
              <div className="space-y-3 md:space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-3xl font-extrabold text-[#666666]/40 tracking-tight">
                    04
                  </span>
                  <span className="font-sans text-xs font-black tracking-widest text-[#CF5A30] uppercase">
                    MEASURABLE
                  </span>
                </div>

                <h2 className="font-bebas text-2xl sm:text-3xl md:text-[28px] leading-[1.1] tracking-wide text-[#121212] uppercase">
                  EVERY BOOTCAMP PRODUCES EVIDENCE.
                </h2>

                <p className="font-sans text-[14px] sm:text-[14.5px] leading-relaxed text-[#444444]">
                  Knowledge is invisible. Capability is observable. Every learner leaves with real physical/digital artifacts:
                </p>

                <ul className="space-y-1.5 font-sans text-[13.5px] sm:text-[14px] font-medium text-[#3A3E40]">
                  {[
                    "Products & Platforms",
                    "Operating models & AI systems",
                    "Strategies & Dashboards",
                    "Enterprise architectures"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-[#CF5A30] font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="font-sans text-[13px] sm:text-[13.5px] font-semibold text-[#CF5A30] pt-1 leading-snug">
                Evidence employers can evaluate. Because capability should never depend on a résumé.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Portfolio Layers Section (05, 06, 07, 08) */}
      <section id="portfolio-layers" className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center bg-[#F4EFE6] border-t border-[#121212]/10 py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl w-full space-y-4 sm:space-y-6">
          
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#CF5A30] uppercase">
              <span>05</span>
              <span>THE KYUREEUS CAPABILITY PORTFOLIO</span>
            </div>
            <h2 className="font-bebas text-3xl sm:text-4xl md:text-[38px] tracking-wide text-[#121212] uppercase leading-none">
              FOUR LAYERS. ONE PROGRESSION.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-stretch">
            
            {/* Card 1: FOUNDATIONAL CAPABILITIES */}
            <div className="group flex flex-col rounded-xl overflow-hidden border border-[#121212]/10 shadow-2xs hover:shadow-lg transition-all duration-300 bg-white cursor-pointer">
              <div className="bg-[#FBF8F3] group-hover:bg-[#F5F0E6] p-3.5 sm:p-4 border-b border-[#121212]/5 space-y-1.5 transition-colors duration-300">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#CF5A30]/10 group-hover:bg-[#CF5A30] text-[#CF5A30] group-hover:text-white transition-colors duration-300 shadow-2xs">
                    <BookOpen className="h-3.5 w-3.5" />
                  </div>
                  <h3 className="font-bebas text-lg md:text-[21px] tracking-wide text-[#121212] uppercase leading-none">
                    FOUNDATIONAL
                  </h3>
                </div>
                <p className="font-sans text-[12.5px] text-[#555555] leading-snug">
                  Learn operating language of modern business & tech.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 flex-1 bg-white">
                <ul className="space-y-1.5 font-sans text-[12.5px] sm:text-[13px] font-bold text-[#3A3E40]">
                  {[
                    "Business Foundations",
                    "Computing Systems",
                    "Software Engineering",
                    "Systems Thinking",
                    "Leadership Foundations",
                    "Critical Thinking"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#CF5A30] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 2: BUILDER ARCHITECTURES */}
            <div className="group flex flex-col rounded-xl overflow-hidden border border-[#121212]/10 shadow-2xs hover:shadow-lg transition-all duration-300 bg-white cursor-pointer">
              <div className="bg-[#FBF8F3] group-hover:bg-[#F5F0E6] p-3.5 sm:p-4 border-b border-[#121212]/5 space-y-1.5 transition-colors duration-300">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#CF5A30]/10 group-hover:bg-[#CF5A30] text-[#CF5A30] group-hover:text-white transition-colors duration-300 shadow-2xs">
                    <Cpu className="h-3.5 w-3.5" />
                  </div>
                  <h3 className="font-bebas text-lg md:text-[21px] tracking-wide text-[#121212] uppercase leading-none">
                    BUILDER
                  </h3>
                </div>
                <p className="font-sans text-[12.5px] text-[#555555] leading-snug">
                  Build complete products, systems & enterprises.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 flex-1 bg-white">
                <ul className="space-y-1 font-sans text-[12px] sm:text-[12.5px] font-bold text-[#3A3E40]">
                  {[
                    { name: "Robotics & Autonomy", href: "/bootcamps/robotics-engineering" },
                    { name: "AI Engineering", href: "/bootcamps/ai-engineering" },
                    { name: "Cybersecurity Architecture", href: "/bootcamps/cyber-security" },
                    { name: "Cloud & Platform Architecture", href: "/bootcamps/cloud-platform" },
                    { name: "Engineering Architecture", href: undefined },
                    { name: "Product Architecture", href: undefined },
                    { name: "Data & Intelligence", href: undefined },
                    { name: "Experience Design", href: undefined }
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#CF5A30] shrink-0" />
                      {item.href ? (
                        <Link href={item.href} className="hover:text-[#CF5A30] transition-colors">
                          {item.name}
                        </Link>
                      ) : (
                        <span>{item.name}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 3: OPERATOR ARCHITECTURES */}
            <div className="group flex flex-col rounded-xl overflow-hidden border border-[#121212]/10 shadow-2xs hover:shadow-lg transition-all duration-300 bg-white cursor-pointer">
              <div className="bg-[#FBF8F3] group-hover:bg-[#F5F0E6] p-3.5 sm:p-4 border-b border-[#121212]/5 space-y-1.5 transition-colors duration-300">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#CF5A30]/10 group-hover:bg-[#CF5A30] text-[#CF5A30] group-hover:text-white transition-colors duration-300 shadow-2xs">
                    <Settings className="h-3.5 w-3.5" />
                  </div>
                  <h3 className="font-bebas text-lg md:text-[21px] tracking-wide text-[#121212] uppercase leading-none">
                    OPERATOR
                  </h3>
                </div>
                <p className="font-sans text-[12.5px] text-[#555555] leading-snug">
                  Operate enterprise capabilities at scale.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 flex-1 bg-white">
                <ul className="space-y-1 font-sans text-[12px] sm:text-[12.5px] font-bold text-[#3A3E40]">
                  {[
                    "Engineering Management",
                    "Platform Operations",
                    "Revenue Operations",
                    "Product Operations",
                    "AI Platform Operations",
                    "Security Operations",
                    "Enterprise Transformation",
                    "Systems Assurance"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#CF5A30] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 4: EXECUTIVE ARCHITECTURES */}
            <div className="group flex flex-col rounded-xl overflow-hidden border border-[#121212]/10 shadow-2xs hover:shadow-lg transition-all duration-300 bg-white cursor-pointer">
              <div className="bg-[#FBF8F3] group-hover:bg-[#F5F0E6] p-3.5 sm:p-4 border-b border-[#121212]/5 space-y-1.5 transition-colors duration-300">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#CF5A30]/10 group-hover:bg-[#CF5A30] text-[#CF5A30] group-hover:text-white transition-colors duration-300 shadow-2xs">
                    <Award className="h-3.5 w-3.5" />
                  </div>
                  <h3 className="font-bebas text-lg md:text-[21px] tracking-wide text-[#121212] uppercase leading-none">
                    EXECUTIVE
                  </h3>
                </div>
                <p className="font-sans text-[12.5px] text-[#555555] leading-snug">
                  Lead organizations that compound enterprise value.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 flex-1 bg-white">
                <ul className="space-y-1 font-sans text-[12px] sm:text-[12.5px] font-bold text-[#3A3E40]">
                  {[
                    "Chief Product Officer",
                    "Chief Technology Officer",
                    "Chief AI Officer",
                    "Chief Information Officer",
                    "Chief InfoSec Officer",
                    "Chief Operating Officer",
                    "Chief Strategy Officer",
                    "Chief Executive Officer"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#CF5A30] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. The Builder Cycle Section */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center bg-white border-t border-[#121212]/10 py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#121212]/10 gap-8 lg:gap-0">
            
            {/* Column 06: DESIGNED WITH ENTERPRISE */}
            <div className="flex flex-col space-y-4 md:space-y-5 lg:px-10 first:pl-0 last:pr-0 pb-6 lg:pb-0">
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#CF5A30] uppercase">
                <span>06</span>
                <span>DESIGNED WITH ENTERPRISE</span>
              </div>

              <div className="space-y-2.5 pt-1">
                {[
                  "Every pathway is built from real industry problems.",
                  "Every framework reflects enterprise operating models.",
                  "Every project creates measurable outcomes.",
                  "Every outcome strengthens the curriculum.",
                  "The portfolio continuously improves."
                ].map((text, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 font-sans text-[14.5px] sm:text-[15px] text-[#3A3E40] leading-snug">
                    <Check className="h-4.5 w-4.5 text-[#CF5A30] shrink-0 mt-0.5" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              <p className="font-sans text-[14.5px] sm:text-[15px] font-bold text-[#CF5A30] pt-1">
                Just like the enterprises it serves.
              </p>
            </div>

            {/* Column 07: LEARN LIKE A BUILDER */}
            <div className="flex flex-col space-y-4 md:space-y-5 lg:px-10 pt-6 lg:pt-0">
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#CF5A30] uppercase">
                <span>07</span>
                <span>LEARN LIKE A BUILDER</span>
              </div>

              {/* 6-Step Builder Cycle Graphic */}
              <div className="flex flex-wrap items-center justify-center sm:justify-between gap-2.5 sm:gap-2 pt-1">
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
                      <div className="flex flex-col items-center text-center space-y-1.5 group cursor-pointer">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F5F2EB] group-hover:bg-[#CF5A30] text-[#CF5A30] group-hover:text-white transition-colors duration-200 shadow-2xs">
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="font-sans text-[11px] sm:text-xs font-bold text-[#121212] group-hover:text-[#CF5A30] transition-colors duration-200 uppercase tracking-wider">
                          {step.label}
                        </span>
                      </div>
                      {idx < arr.length - 1 && (
                        <span className="text-[#666666] text-xs font-sans pb-3 hidden sm:inline">→</span>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>

              <p className="font-sans text-[14px] sm:text-[14.5px] leading-relaxed text-[#555555]">
                That is how enterprises create value. That is how Kyureeus develops capability.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Final Bottom Dark CTA Section */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center bg-[#1C1C1C] text-[#F5F2EB] border-t border-white/10 py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl w-full">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Heading & CTA */}
            <div className="flex flex-col items-start lg:col-span-7 space-y-4 sm:space-y-5 md:space-y-6">
              <div className="text-xs font-bold tracking-widest text-[#CF5A30] uppercase">
                THE FUTURE BELONGS TO PEOPLE WHO CAN BUILD.
              </div>

              <h2 className="font-bebas text-3xl sm:text-4xl md:text-[42px] leading-[1.05] tracking-wide text-[#F5F2EB] uppercase">
                NOT BECAUSE THEY COMPLETED ANOTHER COURSE. BECAUSE THEY CAN SOLVE PROBLEMS OTHERS CANNOT.
              </h2>

              <p className="font-sans text-[15px] sm:text-[16.5px] text-[#A1A1AA]">
                Every bootcamp is one step toward becoming indispensable.
              </p>

              <div className="pt-1 w-full sm:w-auto">
                <Link href="/#bootcamps" className="w-full sm:w-auto block">
                  <Button className="w-full sm:w-auto group flex items-center justify-center gap-2 rounded-[4px] bg-[#CF5A30] hover:bg-white text-[#F5F2EB] hover:text-[#121212] px-6 sm:px-8 py-5 text-xs sm:text-sm font-bold tracking-widest uppercase transition-colors duration-300 shadow-md cursor-pointer min-h-[48px]">
                    EXPLORE THE BOOTCAMP PORTFOLIO
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column: Stacked Callout Lines */}
            <div className="flex flex-col items-start lg:items-end justify-center lg:text-right lg:col-span-5 space-y-1 pt-2 lg:pt-0">
              <span className="font-bebas text-2xl sm:text-3xl md:text-[38px] tracking-wide text-[#F5F2EB] uppercase leading-none">
                BUILD CAPABILITY.
              </span>
              <span className="font-bebas text-2xl sm:text-3xl md:text-[38px] tracking-wide text-[#CF5A30] uppercase leading-none">
                CREATE ENTERPRISE VALUE.
              </span>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
