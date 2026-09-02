"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhyItMattersPage() {
  return (
    <div className="flex flex-col flex-1 bg-[#F5F2EB] text-[#1C1C1C] min-h-screen w-full overflow-x-clip">

      {/* SECTION 01: Hero Section - Three Column Layout */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-10 md:py-14 lg:py-16 bg-[#F5F2EB] text-[#121212] overflow-hidden">
        <div className="mx-auto max-w-7xl w-full">
          {/* Top Category Label */}
          <div className="text-xs font-extrabold tracking-widest text-[#CF5A30] uppercase mb-4 sm:mb-6 md:mb-8">
            WHY IT MATTERS
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 xl:gap-16 items-center">

            {/* Column 1: Main Headline */}
            <div className="lg:col-span-6 space-y-4">
              <h1 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[62px] leading-[1.02] tracking-wide uppercase">
                <span className="text-[#1C1C1C] block">
                  THE FUTURE WILL NOT BELONG TO THE MOST EDUCATED.
                </span>
                <span className="text-[#CF5A30] block pt-1 sm:pt-2">
                  IT WILL BELONG TO THE MOST CAPABLE.
                </span>
              </h1>
            </div>

            {/* Column 2: Explanatory Paragraphs */}
            <div className="lg:col-span-3 space-y-3.5 sm:space-y-4 font-sans text-[15px] sm:text-base leading-relaxed text-[#1C1C1C]">
              <p>
                The world has never produced more graduates. More certifications. More online courses. More information.
              </p>

              <p>
                Yet organizations everywhere struggle to find people who can solve consequential problems.
              </p>

              <p className="font-bold text-[#1C1C1C]">
                Knowledge has become abundant. Capability has become scarce.
              </p>

              <p className="font-bold text-[#CF5A30]">
                That is the gap Kyureeus exists to close.
              </p>
            </div>

            {/* Column 3: Flywheel Image */}
            <div className="lg:col-span-3 flex items-center justify-center lg:justify-end py-2">
              <div id="flywheel" className="relative max-w-[280px] sm:max-w-[340px] md:max-w-[420px] lg:max-w-[560px] w-full flex items-center justify-center mx-auto">
                <img 
                  src="https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/kyureeus-assets/KyureeusFlyWheel/Why%20it%20matters.png" 
                  alt="Why It Matters Flywheel" 
                  loading="eager"
                  decoding="async"
                  crossOrigin="anonymous"
                  className="w-full h-auto object-contain drop-shadow-md hover:scale-[1.03] transition-transform duration-300"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 02: The Problem */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center bg-white border-b border-[#1C1C1C]/10 py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl w-full space-y-6 md:space-y-8">

          {/* Top 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-center">

            {/* Column 1: Number + Label + Title */}
            <div className="lg:col-span-4 flex items-start gap-3 sm:gap-4">
              <span className="font-bebas text-4xl sm:text-5xl md:text-6xl font-bold text-[#CF5A30] leading-none shrink-0">
                02
              </span>
              <div className="space-y-1 sm:space-y-1.5 pt-0.5">
                <span className="font-sans text-xs font-black tracking-widest text-[#CF5A30] uppercase block">
                  THE PROBLEM
                </span>
                <h2 className="font-bebas text-2xl sm:text-3xl md:text-[32px] leading-[1.08] tracking-wide text-[#1C1C1C] uppercase">
                  WE OPTIMIZED LEARNING. WE FORGOT PERFORMANCE.
                </h2>
              </div>
            </div>

            {/* Column 2: Paragraph text */}
            <div className="lg:col-span-3 space-y-2 font-sans text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#1C1C1C]">
              <p>Traditional education measures attendance.</p>
              <p>Certificates measure completion.</p>
              <p>Exams measure memory.</p>
            </div>

            {/* Column 3: Red Crossout Items */}
            <div className="lg:col-span-3 space-y-1.5 font-sans text-[14.5px] sm:text-[15.5px] font-bold text-[#CF5A30]">
              <p className="flex items-center gap-2">
                <span>✕</span> None of them measure capability.
              </p>
              <p className="flex items-center gap-2">
                <span>✕</span> None of them measure judgment.
              </p>
              <p className="flex items-center gap-2">
                <span>✕</span> None of them measure execution.
              </p>
            </div>

            {/* Column 4: Concentric Target Circle Graphic */}
            <div className="lg:col-span-2 flex items-center justify-center lg:justify-end py-1">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 select-none cursor-pointer">
                <svg viewBox="0 0 160 160" className="w-full h-full">
                  <circle
                    cx="80"
                    cy="80"
                    r="65"
                    fill="none"
                    stroke="#CF5A30"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="42"
                    fill="none"
                    stroke="#CF5A30"
                    strokeWidth="1.5"
                  />
                  <line x1="68" y1="68" x2="92" y2="92" stroke="#1C1C1C" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="92" y1="68" x2="68" y2="92" stroke="#1C1C1C" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>

          </div>

          {/* Bottom Wide Text Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 pt-2">
            <div className="lg:col-start-5 lg:col-span-8">
              <p className="font-sans text-[15px] sm:text-[16px] md:text-[17px] font-medium leading-relaxed text-[#1C1C1C]">
                The world&apos;s largest skills gap is not a shortage of intelligence. It is a shortage of people who can consistently create enterprise value.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 03: The Shift */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center bg-white border-b border-[#1C1C1C]/10 py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl w-full space-y-6 md:space-y-8">

          {/* Top 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-center">

            {/* Column 1: Number + Label + Title */}
            <div className="lg:col-span-4 flex items-start gap-3 sm:gap-4">
              <span className="font-bebas text-4xl sm:text-5xl md:text-6xl font-bold text-[#CF5A30] leading-none shrink-0">
                03
              </span>
              <div className="space-y-1 sm:space-y-1.5 pt-0.5">
                <span className="font-sans text-xs font-black tracking-widest text-[#CF5A30] uppercase block">
                  THE SHIFT
                </span>
                <h2 className="font-bebas text-2xl sm:text-3xl md:text-[32px] leading-[1.08] tracking-wide text-[#1C1C1C] uppercase">
                  EVERY INDUSTRY IS BECOMING AN INTELLIGENT SYSTEM.
                </h2>
              </div>
            </div>

            {/* Column 2: Paragraph text */}
            <div className="lg:col-span-3 space-y-2 font-sans text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#1C1C1C]">
              <p>Artificial Intelligence is changing every profession.</p>
              <p>Automation is changing every workflow.</p>
              <p>Software is becoming infrastructure.</p>
            </div>

            {/* Column 3: Bullet points */}
            <div className="lg:col-span-3 space-y-1.5 font-sans text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#1C1C1C]">
              <p>• Data is becoming a strategic asset.</p>
              <p>• Every company is becoming a technology company.</p>
              <p>• Every technology company is becoming an AI company.</p>
              <p className="font-bold text-[#1C1C1C] pt-0.5">
                • Every AI company must become a trusted enterprise.
              </p>
            </div>

            {/* Column 4: Network Graphic */}
            <div className="lg:col-span-2 flex items-center justify-center lg:justify-end py-1">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 select-none cursor-pointer">
                <svg viewBox="0 0 160 160" className="w-full h-full">
                  <circle
                    cx="80"
                    cy="80"
                    r="58"
                    fill="none"
                    stroke="#CF5A30"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                  <line x1="80" y1="22" x2="80" y2="138" stroke="#1C1C1C" strokeWidth="1.5" />
                  <line x1="29.8" y1="51" x2="130.2" y2="109" stroke="#1C1C1C" strokeWidth="1.5" />
                  <line x1="29.8" y1="109" x2="130.2" y2="51" stroke="#1C1C1C" strokeWidth="1.5" />
                  <circle cx="80" cy="22" r="5" fill="#1C1C1C" />
                  <circle cx="130.2" cy="51" r="5" fill="#1C1C1C" />
                  <circle cx="130.2" cy="109" r="5" fill="#1C1C1C" />
                  <circle cx="80" cy="138" r="5" fill="#1C1C1C" />
                  <circle cx="29.8" cy="109" r="5" fill="#1C1C1C" />
                  <circle cx="29.8" cy="51" r="5" fill="#1C1C1C" />
                </svg>
              </div>
            </div>

          </div>

          {/* Bottom Wide Text Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 pt-2">
            <div className="lg:col-start-5 lg:col-span-8">
              <p className="font-sans text-[15px] sm:text-[16px] md:text-[17px] font-medium leading-relaxed text-[#1C1C1C]">
                The future belongs to people who understand how these systems work together. Not individually. As complete architectures.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 04: The Real Job */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center bg-white border-b border-[#1C1C1C]/10 py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl w-full space-y-6 md:space-y-8">

          {/* Top 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-center">

            {/* Column 1: Number + Label + Title */}
            <div className="lg:col-span-4 flex items-start gap-3 sm:gap-4">
              <span className="font-bebas text-4xl sm:text-5xl md:text-6xl font-bold text-[#CF5A30] leading-none shrink-0">
                04
              </span>
              <div className="space-y-1 sm:space-y-1.5 pt-0.5">
                <span className="font-sans text-xs font-black tracking-widest text-[#CF5A30] uppercase block">
                  THE REAL JOB
                </span>
                <h2 className="font-bebas text-2xl sm:text-3xl md:text-[32px] leading-[1.08] tracking-wide text-[#1C1C1C] uppercase">
                  ENTERPRISES DO NOT HIRE KNOWLEDGE. THEY HIRE OUTCOMES.
                </h2>
              </div>
            </div>

            {/* Column 2: Sub-heading statement */}
            <div className="lg:col-span-3 font-sans text-[15px] sm:text-[15.5px] leading-relaxed text-[#1C1C1C]">
              <h3 className="font-bebas text-xl sm:text-2xl md:text-[28px] leading-[1.1] tracking-wide text-[#1C1C1C] uppercase">
                EVERY EXECUTIVE ASKS THE SAME QUESTIONS.
              </h3>
            </div>

            {/* Column 3: Checkmark questions */}
            <div className="lg:col-span-3 space-y-1.5 font-sans text-[14px] sm:text-[15px] leading-relaxed text-[#1C1C1C]">
              <p className="flex items-start gap-2">
                <span className="font-bold text-[#1C1C1C]">✓</span>
                <span>Can this person solve difficult problems?</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="font-bold text-[#1C1C1C]">✓</span>
                <span>Can they build systems?</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="font-bold text-[#1C1C1C]">✓</span>
                <span>Can they lead teams?</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="font-bold text-[#1C1C1C]">✓</span>
                <span>Can they improve how the organization operates?</span>
              </p>
              <p className="flex items-start gap-2 font-bold text-[#CF5A30]">
                <span className="font-bold text-[#CF5A30]">✓</span>
                <span>Can they create measurable value?</span>
              </p>
            </div>

            {/* Column 4: Target Bullseye Graphic */}
            <div className="lg:col-span-2 flex items-center justify-center lg:justify-end py-1">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 select-none cursor-pointer">
                <svg viewBox="0 0 160 160" className="w-full h-full">
                  <circle cx="80" cy="80" r="52" fill="none" stroke="#CF5A30" strokeWidth="1.5" />
                  <circle cx="80" cy="80" r="32" fill="none" stroke="#CF5A30" strokeWidth="1.5" />
                  <circle cx="80" cy="80" r="15" fill="#CF5A30" />
                  <line x1="80" y1="80" x2="32" y2="32" stroke="#1C1C1C" strokeWidth="2" />
                  <rect x="27" y="27" width="10" height="10" fill="#1C1C1C" />
                </svg>
              </div>
            </div>

          </div>

          {/* Bottom Wide Text Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 pt-2">
            <div className="lg:col-start-5 lg:col-span-8">
              <p className="font-sans text-[15px] sm:text-[16px] md:text-[17px] font-medium leading-relaxed text-[#1C1C1C]">
                Capability is simply the ability to create an outcome that someone else values. Everything else is preparation.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 05: The Capability Economy */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center bg-white border-b border-[#1C1C1C]/10 py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl w-full space-y-6 md:space-y-8">

          {/* Top 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-center">

            {/* Column 1: Number + Label + Title */}
            <div className="lg:col-span-4 flex items-start gap-3 sm:gap-4">
              <span className="font-bebas text-4xl sm:text-5xl md:text-6xl font-bold text-[#CF5A30] leading-none shrink-0">
                06
              </span>
              <div className="space-y-1 sm:space-y-1.5 pt-0.5">
                <span className="font-sans text-xs font-black tracking-widest text-[#CF5A30] uppercase block">
                  THE CAPABILITY ECONOMY
                </span>
                <h2 className="font-bebas text-2xl sm:text-3xl md:text-[32px] leading-[1.08] tracking-wide text-[#1C1C1C] uppercase">
                  THE COMPANIES THAT WIN TOMORROW WILL NOT SIMPLY EMPLOY MORE PEOPLE.
                </h2>
              </div>
            </div>

            {/* Column 2: Sub-heading statement */}
            <div className="lg:col-span-3 font-sans text-[15px] sm:text-[15.5px] leading-relaxed text-[#1C1C1C]">
              <h3 className="font-bebas text-xl sm:text-2xl md:text-[28px] leading-[1.1] tracking-wide text-[#1C1C1C] uppercase">
                THEY WILL EMPLOY PEOPLE WHO COMPOUND VALUE.
              </h3>
            </div>

            {/* Column 3: Roles list */}
            <div className="lg:col-span-3 space-y-1 font-sans text-[14px] sm:text-[15px] font-bold text-[#1C1C1C]">
              <p className="text-[#CF5A30]">Builders</p>
              <p>Operators</p>
              <p>Architects</p>
              <p>Product leaders</p>
              <p>AI engineers</p>
              <p>Security leaders</p>
              <p>Technology executives</p>
            </div>

            {/* Column 4: Ascending Bar Chart Graphic */}
            <div className="lg:col-span-2 flex items-center justify-center lg:justify-end py-1">
              <div className="relative w-32 h-28 select-none cursor-pointer">
                <svg viewBox="0 0 180 140" className="w-full h-full overflow-visible">
                  <line x1="5" y1="125" x2="175" y2="125" stroke="#1C1C1C" strokeWidth="1" />
                  <rect x="10" y="112" width="12" height="13" fill="#FFFFFF" stroke="#1C1C1C" strokeWidth="1.2" />
                  <rect x="27" y="103" width="12" height="22" fill="#FFFFFF" stroke="#1C1C1C" strokeWidth="1.2" />
                  <rect x="44" y="90" width="12" height="35" fill="#FFFFFF" stroke="#1C1C1C" strokeWidth="1.2" />
                  <rect x="61" y="73" width="12" height="52" fill="#FFFFFF" stroke="#1C1C1C" strokeWidth="1.2" />
                  <rect x="78" y="52" width="12" height="73" fill="#FFFFFF" stroke="#1C1C1C" strokeWidth="1.2" />
                  <rect x="95" y="27" width="12" height="98" fill="#FFFFFF" stroke="#1C1C1C" strokeWidth="1.2" />
                  <rect x="112" y="12" width="15" height="113" fill="#CF5A30" rx="1" />
                  <path d="M 8 115 Q 85 95 110 12" fill="none" stroke="#CF5A30" strokeWidth="1.8" />
                  <path d="M 104 18 L 110 12 L 111 20" fill="none" stroke="#CF5A30" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

          </div>

          {/* Bottom Text Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 pt-2">
            <div className="lg:col-start-5 lg:col-span-8">
              <p className="font-sans text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#555555]">
                People capable of improving the enterprise every time they make a decision. That is the new competitive advantage. Not knowledge. Capability.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 07: Why This Changes Everything */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center bg-[#F5F2EB] border-b border-[#1C1C1C]/10 py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl w-full space-y-6 md:space-y-8">

          {/* Top 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-center">

            {/* Column 1: Number + Label + Title */}
            <div className="lg:col-span-4 flex items-start gap-3 sm:gap-4">
              <span className="font-bebas text-4xl sm:text-5xl md:text-6xl font-bold text-[#CF5A30] leading-none shrink-0">
                07
              </span>
              <div className="space-y-1 sm:space-y-1.5 pt-0.5">
                <span className="font-sans text-xs font-black tracking-widest text-[#CF5A30] uppercase block">
                  WHY THIS CHANGES EVERYTHING
                </span>
                <h2 className="font-bebas text-2xl sm:text-3xl md:text-[32px] leading-[1.08] tracking-wide text-[#1C1C1C] uppercase">
                  THE TRADITIONAL EDUCATION MODEL ENDS WITH GRADUATION.
                </h2>
              </div>
            </div>

            {/* Column 2: Sub-heading copy */}
            <div className="lg:col-span-3 space-y-3 font-sans text-[15px] sm:text-[15.5px] leading-relaxed text-[#1C1C1C]">
              <h3 className="font-bebas text-xl sm:text-2xl md:text-[28px] leading-[1.1] tracking-wide text-[#1C1C1C] uppercase">
                THE KYUREEUS MODEL BEGINS THERE.
              </h3>
            </div>

            {/* Column 3: Chain of outcomes list */}
            <div className="lg:col-span-3 space-y-1.5 font-sans text-[14px] sm:text-[15px] leading-relaxed text-[#1C1C1C]">
              <p>• Real enterprise problems create projects.</p>
              <p>• Projects create evidence.</p>
              <p>• Evidence creates trust.</p>
              <p>• Trust creates opportunity.</p>
              <p>• Opportunity creates experience.</p>
              <p>• Experience creates capability.</p>
              <p>• Capability creates better enterprises.</p>
              <p className="font-bold text-[#CF5A30] pt-0.5">
                • And better enterprises create a better world.
              </p>
            </div>

            {/* Column 4: Intersecting Circles Graphic */}
            <div className="lg:col-span-2 flex items-center justify-center lg:justify-end py-1">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 select-none cursor-pointer">
                <svg viewBox="0 0 160 160" className="w-full h-full">
                  <circle cx="55" cy="80" r="30" fill="none" stroke="#CF5A30" strokeWidth="1.5" strokeDasharray="3 3" />
                  <circle cx="85" cy="80" r="30" fill="none" stroke="#CF5A30" strokeWidth="1.5" strokeDasharray="3 3" />
                  <circle cx="70" cy="80" r="4.5" fill="#1C1C1C" />
                  <line x1="20" y1="80" x2="130" y2="45" stroke="#1C1C1C" strokeWidth="1.5" />
                  <line x1="20" y1="80" x2="130" y2="115" stroke="#1C1C1C" strokeWidth="1.5" />
                </svg>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center bg-[#1C1C1C] text-[#FFFFFF] py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden select-none">
        <div className="relative z-10 mx-auto max-w-5xl text-center space-y-4 sm:space-y-5 md:space-y-6 flex flex-col items-center">
          <div className="font-sans text-xs sm:text-sm font-extrabold tracking-widest text-[#CF5A30] uppercase">
            THE FUTURE BELONGS TO BUILDERS.
          </div>

          <h2 className="font-bebas text-2xl sm:text-3xl md:text-[42px] lg:text-[46px] leading-[1.08] tracking-wide text-[#FFFFFF] uppercase max-w-4xl">
            THE NEXT GENERATION WILL NOT BE DEFINED BY THE DEGREES THEY COLLECT. IT WILL BE DEFINED BY THE PROBLEMS THEY SOLVE. THE SYSTEMS THEY BUILD. THE ORGANIZATIONS THEY TRANSFORM. THE VALUE THEY CREATE.
          </h2>

          <p className="font-sans text-xs sm:text-sm md:text-base font-extrabold tracking-wider text-[#CF5A30] uppercase">
            KYUREEUS EXISTS TO BUILD THE PEOPLE WHO BUILD THE FUTURE.
          </p>

          <div className="pt-2 w-full sm:w-auto">
            <Link href="/capability-architecture" className="w-full sm:w-auto block">
              <Button className="w-full sm:w-auto group flex items-center justify-center gap-2.5 rounded-[4px] bg-[#CF5A30] hover:bg-white text-white hover:text-[#121212] px-6 sm:px-8 py-5 text-xs sm:text-sm font-bold tracking-widest uppercase transition-colors duration-300 shadow-lg cursor-pointer min-h-[48px]">
                EXPLORE THE CAPABILITY ARCHITECTURE
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
