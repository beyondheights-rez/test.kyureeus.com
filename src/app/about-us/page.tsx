"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  User, 
  Target, 
  Share2, 
  Atom, 
  ShieldCheck, 
  Check, 
  Users, 
  Compass, 
  FileText, 
  Activity, 
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AboutUsFlywheel } from "@/components/features/aboutus-flywheel";

export default function AboutUsPage() {
  return (
    <div className="flex flex-col flex-1 min-h-screen bg-[#F5F2EB] text-[#1C1C1C] w-full overflow-x-clip">
      
      {/* SECTION 01: About Us Hero Layout */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-10 md:py-14 lg:py-16 bg-[#F5F2EB] text-[#121212] overflow-hidden">
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 xl:gap-16 items-center">
            
            {/* Left Column */}
            <div className="flex flex-col items-start lg:col-span-6 space-y-4 sm:space-y-6 md:space-y-8">
              
              <div className="text-xs font-extrabold tracking-widest text-[#CF5A30] uppercase">
                ABOUT US
              </div>

              <h1 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[62px] leading-[1.02] tracking-wide uppercase">
                <span className="text-[#1C1C1C]">WE EXIST TO BUILD </span>
                <span className="text-[#CF5A30]">CAPABILITY </span>
                <span className="text-[#1C1C1C] block pt-1">THAT COMPOUNDS.</span>
              </h1>

              <div className="space-y-4 font-sans text-[15px] sm:text-base leading-relaxed text-[#3A3E40]">
                <p>
                  Kyureeus was founded on a simple belief. Enterprises do not transform through technology alone. They transform through the people who design, build, and lead with it.
                </p>

                <p>
                  We build the capability architectures, learning systems, and enterprise pathways that turn strategy into strength and potential into performance.
                </p>
              </div>

              <div className="font-sans text-[15px] sm:text-base font-bold text-[#CF5A30] pt-1">
                Building capability. Transforming enterprises.
              </div>

              <div className="pt-2 w-full sm:w-auto">
                <Link href="/whykyureeus" className="w-full sm:w-auto block">
                  <Button className="w-full sm:w-auto group flex items-center justify-center gap-2.5 rounded-[4px] bg-[#CF5A30] hover:bg-[#121212] text-[#F5F2EB] px-6 sm:px-8 py-5 sm:py-6 text-xs sm:text-sm font-bold tracking-widest uppercase transition-colors duration-300 shadow-md cursor-pointer min-h-[48px]">
                    Our Story
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>

            </div>

            {/* Right Column: Boardroom Photo */}
            <div className="lg:col-span-6 relative min-h-[260px] sm:min-h-[320px] lg:min-h-[420px] aspect-[16/10] sm:aspect-[4/3] lg:aspect-auto overflow-hidden flex items-center justify-center rounded-2xl border border-[#121212]/10 shadow-lg w-full">
              <img 
                src="https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/kyureeus-assets/KyureeusFlyWheel/photo2.jpg" 
                alt="Kyureeus Executive Boardroom" 
                loading="eager"
                decoding="async"
                crossOrigin="anonymous"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 02: WHO WE ARE */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center bg-white py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-20 border-b border-[#1C1C1C]/10">
        <div className="mx-auto max-w-7xl w-full space-y-8 md:space-y-10">
          
          <div className="text-center space-y-2">
            <div className="font-sans text-xs font-black tracking-widest text-[#CF5A30] uppercase">
              WHO WE ARE
            </div>

            <h2 className="font-bebas text-3xl sm:text-4xl md:text-[40px] text-[#1C1C1C] uppercase leading-tight tracking-wide">
              A CAPABILITY COMPANY FOR A WORLD BEING REBUILT.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6 lg:gap-0 divide-y sm:divide-y-0 lg:divide-x divide-[#1C1C1C]/15 pt-2">
            
            {/* Column 1 */}
            <div className="lg:pr-5 flex flex-col items-center text-center space-y-2.5 pt-4 lg:pt-0 group cursor-pointer">
              <div className="text-[#CF5A30] group-hover:scale-125 transition-all duration-300">
                <User className="h-6 w-6" />
              </div>
              <h3 className="font-sans text-[13.5px] sm:text-sm font-extrabold text-[#1C1C1C] group-hover:text-[#CF5A30] transition-colors duration-300 uppercase tracking-wide">
                BUILT BY PRACTITIONERS
              </h3>
              <p className="font-sans text-[13px] sm:text-[14px] text-[#444444] leading-relaxed">
                We have built products, platforms and enterprise systems across industries. We teach what we have built.
              </p>
            </div>

            {/* Column 2 */}
            <div className="lg:px-5 flex flex-col items-center text-center space-y-2.5 pt-4 lg:pt-0 group cursor-pointer">
              <div className="text-[#CF5A30] group-hover:scale-125 transition-all duration-300">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="font-sans text-[13.5px] sm:text-sm font-extrabold text-[#1C1C1C] group-hover:text-[#CF5A30] transition-colors duration-300 uppercase tracking-wide">
                OBSESSED WITH IMPACT
              </h3>
              <p className="font-sans text-[13px] sm:text-[14px] text-[#444444] leading-relaxed">
                Every program, project and framework is designed to create measurable enterprise outcomes.
              </p>
            </div>

            {/* Column 3 */}
            <div className="lg:px-5 flex flex-col items-center text-center space-y-2.5 pt-4 lg:pt-0 group cursor-pointer">
              <div className="text-[#CF5A30] group-hover:scale-125 transition-all duration-300">
                <Share2 className="h-6 w-6" />
              </div>
              <h3 className="font-sans text-[13.5px] sm:text-sm font-extrabold text-[#1C1C1C] group-hover:text-[#CF5A30] transition-colors duration-300 uppercase tracking-wide">
                ARCHITECTS OF CAPABILITY
              </h3>
              <p className="font-sans text-[13px] sm:text-[14px] text-[#444444] leading-relaxed">
                We design complete capability architectures that integrate business, technology and leadership.
              </p>
            </div>

            {/* Column 4 */}
            <div className="lg:px-5 flex flex-col items-center text-center space-y-2.5 pt-4 lg:pt-0 group cursor-pointer">
              <div className="text-[#CF5A30] group-hover:scale-125 transition-all duration-300">
                <Atom className="h-6 w-6" />
              </div>
              <h3 className="font-sans text-[13.5px] sm:text-sm font-extrabold text-[#1C1C1C] group-hover:text-[#CF5A30] transition-colors duration-300 uppercase tracking-wide">
                BELIEVERS IN COMPOUNDING
              </h3>
              <p className="font-sans text-[13px] sm:text-[14px] text-[#444444] leading-relaxed">
                Capability compounds. So does value. We build systems that get stronger every cycle.
              </p>
            </div>

            {/* Column 5 */}
            <div className="lg:pl-5 flex flex-col items-center text-center space-y-2.5 pt-4 lg:pt-0 group cursor-pointer">
              <div className="text-[#CF5A30] group-hover:scale-125 transition-all duration-300">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="font-sans text-[13.5px] sm:text-sm font-extrabold text-[#1C1C1C] group-hover:text-[#CF5A30] transition-colors duration-300 uppercase tracking-wide">
                GUIDED BY CONSCIENCE
              </h3>
              <p className="font-sans text-[13px] sm:text-[14px] text-[#444444] leading-relaxed">
                Technology without conscience creates risk. We build with responsibility, ethics and human impact.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 03: OUR STORY */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center bg-[#F4EFE6] py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-20 border-b border-[#1C1C1C]/10">
        <div className="mx-auto max-w-7xl w-full space-y-8 md:space-y-10">
          
          <div className="space-y-1.5">
            <div className="font-sans text-xs font-black tracking-widest text-[#CF5A30] uppercase">
              OUR STORY
            </div>

            <h2 className="font-bebas text-3xl sm:text-4xl md:text-[40px] text-[#1C1C1C] uppercase leading-tight tracking-wide">
              FROM ENTERPRISE CHALLENGES TO ENTERPRISE CAPABILITY.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-center">
            
            {/* Left Column: Story Points */}
            <div className="lg:col-span-3 xl:col-span-3 space-y-4">
              
              <div className="space-y-1">
                <div className="flex items-center gap-2 font-sans text-[13px] font-extrabold text-[#1C1C1C] uppercase tracking-wider">
                  <span className="h-2 w-2 rounded-full bg-[#CF5A30]" />
                  <span>THE SPARK</span>
                </div>
                <p className="font-sans text-[13.5px] sm:text-[14px] text-[#444444] leading-relaxed pl-4">
                  We saw the same pattern across industries. Technology was advancing, but organizations were struggling to adapt. The constraint was not tools. It was capability.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 font-sans text-[13px] font-extrabold text-[#1C1C1C] uppercase tracking-wider">
                  <span className="h-2 w-2 rounded-full bg-[#CF5A30]" />
                  <span>THE ANSWER</span>
                </div>
                <p className="font-sans text-[13.5px] sm:text-[14px] text-[#444444] leading-relaxed pl-4">
                  We set out to build a different kind of company. Not another training provider. Not another consultant. A capability company designed to develop real human-centered solutions.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 font-sans text-[13px] font-extrabold text-[#1C1C1C] uppercase tracking-wider">
                  <span className="h-2 w-2 rounded-full bg-[#CF5A30]" />
                  <span>THE JOURNEY</span>
                </div>
                <p className="font-sans text-[13.5px] sm:text-[14px] text-[#444444] leading-relaxed pl-4">
                  Today, Kyureeus partners with enterprises to design capability architectures, deliver immersive learning, and build the compounding strength that drives real change.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 font-sans text-[13px] font-extrabold text-[#1C1C1C] uppercase tracking-wider">
                  <span className="h-2 w-2 rounded-full bg-[#CF5A30]" />
                  <span>THE FUTURE</span>
                </div>
                <p className="font-sans text-[13.5px] sm:text-[14px] text-[#444444] leading-relaxed pl-4">
                  We are building the open capability infrastructure for the next era. Where people, strategy, and architecture align to create enduring value.
                </p>
              </div>

            </div>

            {/* Center Column: Interactive Flywheel */}
            <div className="lg:col-span-6 xl:col-span-6 flex items-center justify-center py-2">
              <div id="flywheel" className="w-full flex items-center justify-center mx-auto">
                <AboutUsFlywheel />
              </div>
            </div>

            {/* Right Column: Checkmark Statements */}
            <div className="lg:col-span-3 xl:col-span-3 space-y-3 sm:space-y-3.5">
              {[
                "We design the architecture.",
                "We develop the people.",
                "We solve real problems.",
                "We create measurable outcomes.",
                "We strengthen the enterprise—every cycle."
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-3 group cursor-pointer">
                  <div className="h-7 w-7 rounded-full bg-[#CF5A30]/15 text-[#CF5A30] flex items-center justify-center shrink-0 group-hover:bg-[#CF5A30] group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-2xs">
                    <Check className="h-4 w-4 stroke-[3]" />
                  </div>
                  <span className="font-sans text-[13.5px] sm:text-[14.5px] font-bold text-[#1C1C1C] group-hover:text-[#CF5A30] transition-colors duration-300">
                    {text}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 04: BY THE NUMBERS */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center bg-white py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-20 border-b border-[#1C1C1C]/10">
        <div className="mx-auto max-w-7xl w-full space-y-8 md:space-y-10">
          
          <div className="text-center space-y-2">
            <div className="font-sans text-xs font-black tracking-widest text-[#CF5A30] uppercase">
              BY THE NUMBERS
            </div>

            <h2 className="font-bebas text-3xl sm:text-4xl md:text-[40px] text-[#1C1C1C] uppercase leading-tight tracking-wide">
              PROVEN ARCHITECTURE. MEASURABLE GROWTH.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6 lg:gap-0 divide-y sm:divide-y-0 lg:divide-x divide-[#1C1C1C]/15 pt-2">
            
            {/* Column 1 */}
            <div className="lg:pr-5 flex flex-col items-center text-center space-y-1.5 pt-4 lg:pt-0">
              <div className="text-[#CF5A30]">
                <Users className="h-6 w-6" />
              </div>
              <span className="font-sans text-xs font-black text-[#555555] uppercase tracking-wider">
                ENTERPRISE PARTNERS
              </span>
              <div className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-[#1C1C1C] font-bold leading-none py-0.5">
                100+
              </div>
              <p className="font-sans text-[12.5px] sm:text-[13.5px] text-[#555555] leading-relaxed">
                Across global industries and fast-growing geographies
              </p>
            </div>

            {/* Column 2 */}
            <div className="lg:px-5 flex flex-col items-center text-center space-y-1.5 pt-4 lg:pt-0">
              <div className="text-[#CF5A30]">
                <Users className="h-6 w-6" />
              </div>
              <span className="font-sans text-xs font-black text-[#555555] uppercase tracking-wider">
                LEARNERS IMPACTED
              </span>
              <div className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-[#1C1C1C] font-bold leading-none py-0.5">
                50,000+
              </div>
              <p className="font-sans text-[12.5px] sm:text-[13.5px] text-[#555555] leading-relaxed">
                Builders, leaders and cross-functional practitioners
              </p>
            </div>

            {/* Column 3 */}
            <div className="lg:px-5 flex flex-col items-center text-center space-y-1.5 pt-4 lg:pt-0">
              <div className="text-[#CF5A30]">
                <Compass className="h-6 w-6" />
              </div>
              <span className="font-sans text-xs font-black text-[#555555] uppercase tracking-wider">
                BOOTCAMPS & PATHWAYS
              </span>
              <div className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-[#1C1C1C] font-bold leading-none py-0.5">
                50+
              </div>
              <p className="font-sans text-[12.5px] sm:text-[13.5px] text-[#555555] leading-relaxed">
                Custom-built capability architectures that scale
              </p>
            </div>

            {/* Column 4 */}
            <div className="lg:px-5 flex flex-col items-center text-center space-y-1.5 pt-4 lg:pt-0">
              <div className="text-[#CF5A30]">
                <FileText className="h-6 w-6" />
              </div>
              <span className="font-sans text-xs font-black text-[#555555] uppercase tracking-wider">
                ENTERPRISE PROJECTS
              </span>
              <div className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-[#1C1C1C] font-bold leading-none py-0.5">
                500+
              </div>
              <p className="font-sans text-[12.5px] sm:text-[13.5px] text-[#555555] leading-relaxed">
                Real projects shipped directly into live production
              </p>
            </div>

            {/* Column 5 */}
            <div className="lg:pl-5 flex flex-col items-center text-center space-y-1.5 pt-4 lg:pt-0">
              <div className="text-[#CF5A30]">
                <Activity className="h-6 w-6" />
              </div>
              <span className="font-sans text-xs font-black text-[#555555] uppercase tracking-wider">
                YEARS OF EXPERIENCE
              </span>
              <div className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-[#1C1C1C] font-bold leading-none py-0.5">
                20+
              </div>
              <p className="font-sans text-[12.5px] sm:text-[13.5px] text-[#555555] leading-relaxed">
                Building high-impact products and learning structures
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 05: OUR FOUNDING PRINCIPLES */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center bg-[#F5F2EB] py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-20 border-b border-[#1C1C1C]/10">
        <div className="mx-auto max-w-7xl w-full space-y-8 md:space-y-10">
          
          <div className="space-y-1.5">
            <div className="font-sans text-xs font-black tracking-widest text-[#CF5A30] uppercase">
              OUR FOUNDING PRINCIPLES
            </div>

            <h2 className="font-bebas text-3xl sm:text-4xl md:text-[40px] text-[#1C1C1C] uppercase leading-tight tracking-wide">
              THESE PRINCIPLES GUIDE EVERYTHING WE BUILD.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5 sm:gap-6 lg:gap-0 divide-y sm:divide-y-0 lg:divide-x divide-[#1C1C1C]/15 pt-2">
            
            {/* Principle 01 */}
            <div className="lg:pr-5 space-y-2 pt-4 lg:pt-0">
              <span className="font-bebas text-3xl font-bold text-[#CF5A30] block leading-none">
                01
              </span>
              <h3 className="font-sans text-[14.5px] sm:text-[15.5px] font-bold text-[#1C1C1C] leading-snug">
                Start with the job.
              </h3>
              <p className="font-sans text-[13px] sm:text-[13.5px] text-[#555555] leading-relaxed">
                We begin with the real work, not remote theories. Understanding context is everything.
              </p>
            </div>

            {/* Principle 02 */}
            <div className="lg:px-5 space-y-2 pt-4 lg:pt-0">
              <span className="font-bebas text-3xl font-bold text-[#CF5A30] block leading-none">
                02
              </span>
              <h3 className="font-sans text-[14.5px] sm:text-[15.5px] font-bold text-[#1C1C1C] leading-snug">
                Integrate disciplines.
              </h3>
              <p className="font-sans text-[13px] sm:text-[13.5px] text-[#555555] leading-relaxed">
                True capability isn&apos;t siloed. We design where technology meets practical business.
              </p>
            </div>

            {/* Principle 03 */}
            <div className="lg:px-5 space-y-2 pt-4 lg:pt-0">
              <span className="font-bebas text-3xl font-bold text-[#CF5A30] block leading-none">
                03
              </span>
              <h3 className="font-sans text-[14.5px] sm:text-[15.5px] font-bold text-[#1C1C1C] leading-snug">
                Build systems.
              </h3>
              <p className="font-sans text-[13px] sm:text-[13.5px] text-[#555555] leading-relaxed">
                Tools fade; systems persist and grow stronger. We construct for perpetuity.
              </p>
            </div>

            {/* Principle 04 */}
            <div className="lg:px-5 space-y-2 pt-4 lg:pt-0">
              <span className="font-bebas text-3xl font-bold text-[#CF5A30] block leading-none">
                04
              </span>
              <h3 className="font-sans text-[14.5px] sm:text-[15.5px] font-bold text-[#1C1C1C] leading-snug">
                Measure what matters.
              </h3>
              <p className="font-sans text-[13px] sm:text-[13.5px] text-[#555555] leading-relaxed">
                We track actual business outcomes, not just seat completion or hours.
              </p>
            </div>

            {/* Principle 05 */}
            <div className="lg:px-5 space-y-2 pt-4 lg:pt-0">
              <span className="font-bebas text-3xl font-bold text-[#CF5A30] block leading-none">
                05
              </span>
              <h3 className="font-sans text-[14.5px] sm:text-[15.5px] font-bold text-[#1C1C1C] leading-snug">
                Create public value.
              </h3>
              <p className="font-sans text-[13px] sm:text-[13.5px] text-[#555555] leading-relaxed">
                Every enterprise should strengthen its surrounding community ecosystem.
              </p>
            </div>

            {/* Principle 06 */}
            <div className="lg:pl-5 space-y-2 pt-4 lg:pt-0">
              <span className="font-bebas text-3xl font-bold text-[#CF5A30] block leading-none">
                06
              </span>
              <h3 className="font-sans text-[14.5px] sm:text-[15.5px] font-bold text-[#1C1C1C] leading-snug">
                Lead with conscience.
              </h3>
              <p className="font-sans text-[13px] sm:text-[13.5px] text-[#555555] leading-relaxed">
                Empower people with ethics, responsibility, and human-centered design.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 06: Dark Banner CTA */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center bg-[#121216] text-[#FFFFFF] py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-20 border-t border-white/10 select-none">
        <div className="mx-auto max-w-7xl w-full">
          
          <div className="space-y-5 sm:space-y-6 md:space-y-8 max-w-4xl">
            <h2 className="font-bebas text-3xl sm:text-4xl md:text-[42px] lg:text-[48px] leading-[1.05] tracking-wide text-white uppercase">
              <span className="block">JOIN US IN BUILDING A WORLD WHERE CAPABILITY CREATES</span>
              <span className="block pt-0.5">ENDURING VALUE.</span>
            </h2>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-sans text-sm sm:text-[15px] font-bold text-white">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4.5 w-4.5 text-[#CF5A30] shrink-0" />
                <span>Build capability.</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4.5 w-4.5 text-[#CF5A30] shrink-0" />
                <span>Transform enterprises.</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4.5 w-4.5 text-[#CF5A30] shrink-0" />
                <span>Strengthen the future.</span>
              </div>
            </div>

            <div className="pt-1 w-full sm:w-auto">
              <Link href="/contact" className="w-full sm:w-auto block">
                <Button className="w-full sm:w-auto group flex items-center justify-center gap-2.5 rounded-[6px] bg-[#CF5A30] hover:bg-white text-white hover:text-[#121212] px-6 sm:px-8 py-5 text-xs sm:text-sm font-bold tracking-wider uppercase transition-colors duration-300 shadow-lg cursor-pointer min-h-[48px]">
                  Talk to Us
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
