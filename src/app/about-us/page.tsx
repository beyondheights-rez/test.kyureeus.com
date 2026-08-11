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
  Cpu, 
  BookOpen, 
  Rocket, 
  Layers, 
  BarChart2, 
  RefreshCw,
  Sparkles,
  Users,
  Compass,
  FileText,
  Activity,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutUsPage() {
  return (
    <div className="flex flex-col flex-1 min-h-screen bg-[#F5F2EB] text-[#1C1C1C]">
      
      {/* SECTION 01: About Us Hero Layout (Warm Cream Left / Boardroom Image + Floating Mission Card Right) */}
      <section className="sticky top-0 h-screen z-10 flex items-center justify-center px-6 py-12 md:px-12 lg:px-20 bg-[#F5F2EB] text-[#121212] overflow-hidden">
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Warm Cream Background (#F5F2EB) */}
            <div className="flex flex-col items-start lg:col-span-6 space-y-6 md:space-y-8">
              
              {/* Top Category Label */}
              <div className="text-xs font-extrabold tracking-widest text-[#CF5A30] uppercase">
                ABOUT US
              </div>

              {/* Headline Title */}
              <h1 className="font-bebas text-4xl sm:text-5xl md:text-[56px] lg:text-[62px] leading-[1.02] tracking-wide uppercase">
                <span className="text-[#1C1C1C]">WE EXIST TO BUILD </span>
                <span className="text-[#CF5A30]">CAPABILITY </span>
                <span className="text-[#1C1C1C] block pt-1">THAT COMPOUNDS.</span>
              </h1>

              {/* Description Paragraphs */}
              <div className="space-y-5 font-sans text-[15px] leading-relaxed text-[#3A3E40]">
                <p>
                  Kyureeus was founded on a simple belief. Enterprises do not transform through technology alone. They transform through the people who design, build, and lead with it.
                </p>

                <p>
                  We build the capability architectures, learning systems, and enterprise pathways that turn strategy into strength and potential into performance.
                </p>
              </div>

              {/* Orange Bold Summary Statement */}
              <div className="font-sans text-[15px] font-bold text-[#CF5A30] pt-1">
                Building capability. Transforming enterprises.
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <Link href="/whykyureeus">
                  <Button className="group flex items-center gap-2.5 rounded-[4px] bg-[#CF5A30] hover:bg-[#121212] text-[#F5F2EB] px-8 py-6 text-xs sm:text-sm font-bold tracking-widest uppercase transition-colors duration-300 shadow-md cursor-pointer">
                    Our Story
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>

            </div>

            {/* Right Column: Boardroom Photo */}
            <div className="lg:col-span-6 relative min-h-[400px] lg:min-h-full overflow-hidden flex items-center justify-center rounded-2xl border border-[#121212]/10 shadow-lg">
              <img 
                src="https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/kyureeus-assets/KyureeusFlyWheel/photo2.jpg" 
                alt="Kyureeus Executive Boardroom" 
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Container wrapper for sections sliding over hero */}
      <div className="relative z-20 bg-[#F5F2EB]">
        {/* SECTION 02: WHO WE ARE (5-Column Grid Layout on #FFFFFF Clean White Background) */}
        <section className="relative bg-white py-16 md:py-24 px-6 md:px-12 lg:px-20 border-b border-[#1C1C1C]/10">
        <div className="mx-auto max-w-7xl w-full space-y-12">
          
          {/* Section Header */}
          <div className="text-center space-y-3">
            <div className="font-sans text-xs font-extrabold tracking-widest text-[#CF5A30] uppercase">
              WHO WE ARE
            </div>

            <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl text-[#1C1C1C] uppercase leading-tight tracking-wide">
              A CAPABILITY COMPANY FOR A WORLD BEING REBUILT.
            </h2>
          </div>

          {/* 5 Columns Grid with Vertical Dividers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-0 divide-y sm:divide-y-0 lg:divide-x divide-[#1C1C1C]/15 pt-4">
            
            {/* Column 1: BUILT BY PRACTITIONERS */}
            <div className="lg:pr-6 flex flex-col items-center text-center space-y-5 pt-6 lg:pt-0 group cursor-pointer">
              <div className="text-[#CF5A30] group-hover:scale-125 group-hover:-translate-y-1 group-hover:rotate-6 transition-all duration-300">
                <User className="h-7 w-7" />
              </div>
              <h3 className="font-sans text-xs sm:text-sm font-extrabold text-[#1C1C1C] group-hover:text-[#CF5A30] transition-colors duration-300 uppercase tracking-wide">
                BUILT BY PRACTITIONERS
              </h3>
              <p className="font-sans text-xs text-[#555555] leading-relaxed">
                We have built products, platforms and enterprise systems across industries. We teach what we have built.
              </p>
            </div>

            {/* Column 2: OBSESSED WITH IMPACT */}
            <div className="lg:px-6 flex flex-col items-center text-center space-y-5 pt-6 lg:pt-0 group cursor-pointer">
              <div className="text-[#CF5A30] group-hover:scale-125 group-hover:-translate-y-1 group-hover:rotate-6 transition-all duration-300">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="font-sans text-xs sm:text-sm font-extrabold text-[#1C1C1C] group-hover:text-[#CF5A30] transition-colors duration-300 uppercase tracking-wide">
                OBSESSED WITH IMPACT
              </h3>
              <p className="font-sans text-xs text-[#555555] leading-relaxed">
                Every program, project and framework is designed to create measurable enterprise outcomes.
              </p>
            </div>

            {/* Column 3: ARCHITECTS OF CAPABILITY */}
            <div className="lg:px-6 flex flex-col items-center text-center space-y-5 pt-6 lg:pt-0 group cursor-pointer">
              <div className="text-[#CF5A30] group-hover:scale-125 group-hover:-translate-y-1 group-hover:rotate-6 transition-all duration-300">
                <Share2 className="h-7 w-7" />
              </div>
              <h3 className="font-sans text-xs sm:text-sm font-extrabold text-[#1C1C1C] group-hover:text-[#CF5A30] transition-colors duration-300 uppercase tracking-wide">
                ARCHITECTS OF CAPABILITY
              </h3>
              <p className="font-sans text-xs text-[#555555] leading-relaxed">
                We design complete capability architectures that integrate business, technology and leadership.
              </p>
            </div>

            {/* Column 4: BELIEVERS IN COMPOUNDING */}
            <div className="lg:px-6 flex flex-col items-center text-center space-y-5 pt-6 lg:pt-0 group cursor-pointer">
              <div className="text-[#CF5A30] group-hover:scale-125 group-hover:-translate-y-1 group-hover:rotate-6 transition-all duration-300">
                <Atom className="h-7 w-7" />
              </div>
              <h3 className="font-sans text-xs sm:text-sm font-extrabold text-[#1C1C1C] group-hover:text-[#CF5A30] transition-colors duration-300 uppercase tracking-wide">
                BELIEVERS IN COMPOUNDING
              </h3>
              <p className="font-sans text-xs text-[#555555] leading-relaxed">
                Capability compounds. So does value. We build systems that get stronger every cycle.
              </p>
            </div>

            {/* Column 5: GUIDED BY CONSCIENCE */}
            <div className="lg:pl-6 flex flex-col items-center text-center space-y-5 pt-6 lg:pt-0 group cursor-pointer">
              <div className="text-[#CF5A30] group-hover:scale-125 group-hover:-translate-y-1 group-hover:rotate-6 transition-all duration-300">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <h3 className="font-sans text-xs sm:text-sm font-extrabold text-[#1C1C1C] group-hover:text-[#CF5A30] transition-colors duration-300 uppercase tracking-wide">
                GUIDED BY CONSCIENCE
              </h3>
              <p className="font-sans text-xs text-[#555555] leading-relaxed">
                Technology without conscience creates risk. We build with responsibility, ethics and human impact.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* SECTION 03: OUR STORY (3-Column Layout on #F4EFE6 Warm Beige Background matching Image 2) */}
      <section className="bg-[#F4EFE6] py-16 md:py-24 px-6 md:px-12 lg:px-20 border-b border-[#1C1C1C]/10">
        <div className="mx-auto max-w-7xl w-full space-y-12">
          
          {/* Section Header */}
          <div className="space-y-2">
            <div className="font-sans text-xs font-extrabold tracking-widest text-[#CF5A30] uppercase">
              OUR STORY
            </div>

            <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl text-[#1C1C1C] uppercase leading-tight tracking-wide">
              FROM ENTERPRISE CHALLENGES TO ENTERPRISE CAPABILITY.
            </h2>
          </div>

          {/* 3-Column Layout: Left Text Story / Center Ecosystem Wheel / Right Checkmark Bullet List */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column (lg:col-span-4): Timeline Paragraphs */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Point 1: THE SPARK */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 font-sans text-xs font-extrabold text-[#1C1C1C] uppercase tracking-wider">
                  <span className="h-2 w-2 rounded-full bg-[#CF5A30]" />
                  <span>THE SPARK</span>
                </div>
                <p className="font-sans text-xs text-[#555555] leading-relaxed pl-4">
                  We saw the same pattern across industries. Technology was advancing, but organizations were struggling to adapt. The constraint was not tools. It was capability.
                </p>
              </div>

              {/* Point 2: THE ANSWER */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 font-sans text-xs font-extrabold text-[#1C1C1C] uppercase tracking-wider">
                  <span className="h-2 w-2 rounded-full bg-[#CF5A30]" />
                  <span>THE ANSWER</span>
                </div>
                <p className="font-sans text-xs text-[#555555] leading-relaxed pl-4">
                  We set out to build a different kind of company. Not another training provider. Not another consultant. A capability company designed to develop real human-centered solutions.
                </p>
              </div>

              {/* Point 3: THE JOURNEY */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 font-sans text-xs font-extrabold text-[#1C1C1C] uppercase tracking-wider">
                  <span className="h-2 w-2 rounded-full bg-[#CF5A30]" />
                  <span>THE JOURNEY</span>
                </div>
                <p className="font-sans text-xs text-[#555555] leading-relaxed pl-4">
                  Today, Kyureeus partners with enterprises to design capability architectures, deliver immersive learning, and build the compounding strength that drives real change.
                </p>
              </div>

              {/* Point 4: THE FUTURE */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 font-sans text-xs font-extrabold text-[#1C1C1C] uppercase tracking-wider">
                  <span className="h-2 w-2 rounded-full bg-[#CF5A30]" />
                  <span>THE FUTURE</span>
                </div>
                <p className="font-sans text-xs text-[#555555] leading-relaxed pl-4">
                  We are building the open capability infrastructure for the next era. Where people, strategy, and architecture align to create enduring value.
                </p>
              </div>

            </div>

            {/* Center Column (lg:col-span-4): Flywheel Image */}
            <div className="lg:col-span-4 flex items-center justify-center py-4">
              <div id="flywheel" className="relative max-w-[420px] w-full flex items-center justify-center">
                <img 
                  src="https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/kyureeus-assets/KyureeusFlyWheel/About%20us%20flywheel.png" 
                  alt="About Us Capability Flywheel" 
                  className="w-full h-auto object-contain drop-shadow-md hover:scale-[1.03] transition-transform duration-300 scale-105"
                />
              </div>
            </div>

            {/* Right Column (lg:col-span-4): Checkmark Statements */}
            <div className="lg:col-span-4 space-y-5">
              
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="h-7 w-7 rounded-full bg-[#CF5A30]/15 text-[#CF5A30] flex items-center justify-center shrink-0 group-hover:bg-[#CF5A30] group-hover:text-white group-hover:scale-125 transition-all duration-300 shadow-xs">
                  <Check className="h-4 w-4 stroke-[3]" />
                </div>
                <span className="font-sans text-sm font-bold text-[#1C1C1C] group-hover:text-[#CF5A30] transition-colors duration-300">
                  We design the architecture.
                </span>
              </div>

              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="h-7 w-7 rounded-full bg-[#CF5A30]/15 text-[#CF5A30] flex items-center justify-center shrink-0 group-hover:bg-[#CF5A30] group-hover:text-white group-hover:scale-125 transition-all duration-300 shadow-xs">
                  <Check className="h-4 w-4 stroke-[3]" />
                </div>
                <span className="font-sans text-sm font-bold text-[#1C1C1C] group-hover:text-[#CF5A30] transition-colors duration-300">
                  We develop the people.
                </span>
              </div>

              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="h-7 w-7 rounded-full bg-[#CF5A30]/15 text-[#CF5A30] flex items-center justify-center shrink-0 group-hover:bg-[#CF5A30] group-hover:text-white group-hover:scale-125 transition-all duration-300 shadow-xs">
                  <Check className="h-4 w-4 stroke-[3]" />
                </div>
                <span className="font-sans text-sm font-bold text-[#1C1C1C] group-hover:text-[#CF5A30] transition-colors duration-300">
                  We solve real problems.
                </span>
              </div>

              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="h-7 w-7 rounded-full bg-[#CF5A30]/15 text-[#CF5A30] flex items-center justify-center shrink-0 group-hover:bg-[#CF5A30] group-hover:text-white group-hover:scale-125 transition-all duration-300 shadow-xs">
                  <Check className="h-4 w-4 stroke-[3]" />
                </div>
                <span className="font-sans text-sm font-bold text-[#1C1C1C] group-hover:text-[#CF5A30] transition-colors duration-300">
                  We create measurable outcomes.
                </span>
              </div>

              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="h-7 w-7 rounded-full bg-[#CF5A30]/15 text-[#CF5A30] flex items-center justify-center shrink-0 group-hover:bg-[#CF5A30] group-hover:text-white group-hover:scale-125 transition-all duration-300 shadow-xs">
                  <Check className="h-4 w-4 stroke-[3]" />
                </div>
                <span className="font-sans text-sm font-bold text-[#1C1C1C] group-hover:text-[#CF5A30] transition-colors duration-300">
                  We strengthen the enterprise—every cycle.
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* SECTION 04: BY THE NUMBERS (5-Column Impact Stats Grid on #FFFFFF Clean White Background) */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-12 lg:px-20 border-b border-[#1C1C1C]/10">
        <div className="mx-auto max-w-7xl w-full space-y-12">
          
          {/* Section Header */}
          <div className="text-center space-y-3">
            <div className="font-sans text-xs font-extrabold tracking-widest text-[#CF5A30] uppercase">
              BY THE NUMBERS
            </div>

            <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl text-[#1C1C1C] uppercase leading-tight tracking-wide">
              PROVEN ARCHITECTURE. MEASURABLE GROWTH.
            </h2>
          </div>

          {/* 5 Columns Grid with Vertical Dividers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-0 divide-y sm:divide-y-0 lg:divide-x divide-[#1C1C1C]/15 pt-4">
            
            {/* Column 1: ENTERPRISE PARTNERS */}
            <div className="lg:pr-6 flex flex-col items-center text-center space-y-3 pt-6 lg:pt-0">
              <div className="text-[#CF5A30]">
                <Users className="h-7 w-7" />
              </div>
              <span className="font-sans text-[11px] font-extrabold text-[#555555] uppercase tracking-wider">
                ENTERPRISE PARTNERS
              </span>
              <div className="font-bebas text-5xl sm:text-6xl text-[#1C1C1C] font-bold leading-none py-1">
                100+
              </div>
              <p className="font-sans text-xs text-[#555555] leading-relaxed">
                Across global industries and fast-growing geographies
              </p>
            </div>

            {/* Column 2: LEARNERS IMPACTED */}
            <div className="lg:px-6 flex flex-col items-center text-center space-y-3 pt-6 lg:pt-0">
              <div className="text-[#CF5A30]">
                <Users className="h-7 w-7" />
              </div>
              <span className="font-sans text-[11px] font-extrabold text-[#555555] uppercase tracking-wider">
                LEARNERS IMPACTED
              </span>
              <div className="font-bebas text-5xl sm:text-6xl text-[#1C1C1C] font-bold leading-none py-1">
                50,000+
              </div>
              <p className="font-sans text-xs text-[#555555] leading-relaxed">
                Builders, leaders and cross-functional practitioners
              </p>
            </div>

            {/* Column 3: BOOTCAMPS & PATHWAYS */}
            <div className="lg:px-6 flex flex-col items-center text-center space-y-3 pt-6 lg:pt-0">
              <div className="text-[#CF5A30]">
                <Compass className="h-7 w-7" />
              </div>
              <span className="font-sans text-[11px] font-extrabold text-[#555555] uppercase tracking-wider">
                BOOTCAMPS & PATHWAYS
              </span>
              <div className="font-bebas text-5xl sm:text-6xl text-[#1C1C1C] font-bold leading-none py-1">
                50+
              </div>
              <p className="font-sans text-xs text-[#555555] leading-relaxed">
                Custom-built capability architectures that scale
              </p>
            </div>

            {/* Column 4: ENTERPRISE PROJECTS */}
            <div className="lg:px-6 flex flex-col items-center text-center space-y-3 pt-6 lg:pt-0">
              <div className="text-[#CF5A30]">
                <FileText className="h-7 w-7" />
              </div>
              <span className="font-sans text-[11px] font-extrabold text-[#555555] uppercase tracking-wider">
                ENTERPRISE PROJECTS
              </span>
              <div className="font-bebas text-5xl sm:text-6xl text-[#1C1C1C] font-bold leading-none py-1">
                500+
              </div>
              <p className="font-sans text-xs text-[#555555] leading-relaxed">
                Real projects shipped directly into live production
              </p>
            </div>

            {/* Column 5: YEARS OF EXPERIENCE */}
            <div className="lg:pl-6 flex flex-col items-center text-center space-y-3 pt-6 lg:pt-0">
              <div className="text-[#CF5A30]">
                <Activity className="h-7 w-7" />
              </div>
              <span className="font-sans text-[11px] font-extrabold text-[#555555] uppercase tracking-wider">
                YEARS OF EXPERIENCE
              </span>
              <div className="font-bebas text-5xl sm:text-6xl text-[#1C1C1C] font-bold leading-none py-1">
                20+
              </div>
              <p className="font-sans text-xs text-[#555555] leading-relaxed">
                Building high-impact products and learning structures
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* SECTION 05: OUR FOUNDING PRINCIPLES (6-Column Principles Grid on #F5F2EB Warm Cream Background matching Image 2) */}
      <section className="bg-[#F5F2EB] py-16 md:py-24 px-6 md:px-12 lg:px-20 border-b border-[#1C1C1C]/10">
        <div className="mx-auto max-w-7xl w-full space-y-12">
          
          {/* Section Header */}
          <div className="space-y-2">
            <div className="font-sans text-xs font-extrabold tracking-widest text-[#CF5A30] uppercase">
              OUR FOUNDING PRINCIPLES
            </div>

            <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl text-[#1C1C1C] uppercase leading-tight tracking-wide">
              THESE PRINCIPLES GUIDE EVERYTHING WE BUILD.
            </h2>
          </div>

          {/* 6 Columns Grid with Vertical Dividers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-0 divide-y sm:divide-y-0 lg:divide-x divide-[#1C1C1C]/15 pt-4">
            
            {/* Principle 01 */}
            <div className="lg:pr-6 space-y-3 pt-6 lg:pt-0">
              <span className="font-bebas text-3xl font-bold text-[#CF5A30] block leading-none">
                01
              </span>
              <h3 className="font-sans text-sm font-bold text-[#1C1C1C] leading-snug">
                Start with the job.
              </h3>
              <p className="font-sans text-xs text-[#555555] leading-relaxed">
                We begin with the real work, not remote theories. Understanding context is everything.
              </p>
            </div>

            {/* Principle 02 */}
            <div className="lg:px-6 space-y-3 pt-6 lg:pt-0">
              <span className="font-bebas text-3xl font-bold text-[#CF5A30] block leading-none">
                02
              </span>
              <h3 className="font-sans text-sm font-bold text-[#1C1C1C] leading-snug">
                Integrate disciplines.
              </h3>
              <p className="font-sans text-xs text-[#555555] leading-relaxed">
                True capability isn&apos;t siloed. We design where technology meets practical business.
              </p>
            </div>

            {/* Principle 03 */}
            <div className="lg:px-6 space-y-3 pt-6 lg:pt-0">
              <span className="font-bebas text-3xl font-bold text-[#CF5A30] block leading-none">
                03
              </span>
              <h3 className="font-sans text-sm font-bold text-[#1C1C1C] leading-snug">
                Build systems.
              </h3>
              <p className="font-sans text-xs text-[#555555] leading-relaxed">
                Tools fade; systems persist and grow stronger. We construct for perpetuity.
              </p>
            </div>

            {/* Principle 04 */}
            <div className="lg:px-6 space-y-3 pt-6 lg:pt-0">
              <span className="font-bebas text-3xl font-bold text-[#CF5A30] block leading-none">
                04
              </span>
              <h3 className="font-sans text-sm font-bold text-[#1C1C1C] leading-snug">
                Measure what matters.
              </h3>
              <p className="font-sans text-xs text-[#555555] leading-relaxed">
                We track actual business outcomes, not just seat completion or hours.
              </p>
            </div>

            {/* Principle 05 */}
            <div className="lg:px-6 space-y-3 pt-6 lg:pt-0">
              <span className="font-bebas text-3xl font-bold text-[#CF5A30] block leading-none">
                05
              </span>
              <h3 className="font-sans text-sm font-bold text-[#1C1C1C] leading-snug">
                Create public value.
              </h3>
              <p className="font-sans text-xs text-[#555555] leading-relaxed">
                Every enterprise should strengthen its surrounding community ecosystem.
              </p>
            </div>

            {/* Principle 06 */}
            <div className="lg:pl-6 space-y-3 pt-6 lg:pt-0">
              <span className="font-bebas text-3xl font-bold text-[#CF5A30] block leading-none">
                06
              </span>
              <h3 className="font-sans text-sm font-bold text-[#1C1C1C] leading-snug">
                Lead with conscience.
              </h3>
              <p className="font-sans text-xs text-[#555555] leading-relaxed">
                Empower people with ethics, responsibility, and human-centered design.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* SECTION 06: Dark Banner CTA (#121216 Dark Background matching design screenshot) */}
      <section className="bg-[#121216] text-[#FFFFFF] py-16 md:py-20 px-6 md:px-12 lg:px-20 border-t border-white/10 select-none">
        <div className="mx-auto max-w-7xl w-full">
          
          {/* Headline, Sparkle Bullets & Left-Aligned CTA Button */}
          <div className="space-y-8 max-w-4xl">
            <h2 className="font-bebas text-3xl sm:text-4xl md:text-[42px] lg:text-[48px] leading-[1.05] tracking-wide text-white uppercase">
              <span className="block">JOIN US IN BUILDING A WORLD WHERE CAPABILITY CREATES</span>
              <span className="block pt-0.5">ENDURING VALUE.</span>
            </h2>

            {/* Sparkle Points Row */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 font-sans text-xs sm:text-sm font-bold text-white">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#CF5A30] shrink-0" />
                <span>Build capability.</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#CF5A30] shrink-0" />
                <span>Transform enterprises.</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#CF5A30] shrink-0" />
                <span>Strengthen the future.</span>
              </div>
            </div>

            {/* Talk to Us Button on Left Side Below Text */}
            <div className="pt-2">
              <Link href="/contact">
                <Button className="group flex items-center gap-2.5 rounded-[6px] bg-[#CF5A30] hover:bg-white text-white hover:text-[#121212] px-8 py-6 text-xs sm:text-sm font-bold tracking-wider uppercase transition-colors duration-300 shadow-lg cursor-pointer">
                  Talk to Us
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

          </div>

        </div>
      </section>
      </div>

    </div>
  );
}
