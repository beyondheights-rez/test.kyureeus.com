"use client";

import React from "react";
import Link from "next/link";
import {
  Brain,
  Award,
  Monitor,
  ShieldCheck,
  Users,
  Briefcase,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function WhyItMattersPage() {
  return (
    <div className="flex flex-col flex-1 bg-[#F5F2EB] text-[#1C1C1C] min-h-screen">

      {/* SECTION 01: Hero Section - Three Column Layout */}
      <section className="sticky top-0 h-screen z-10 flex items-center justify-center px-6 py-12 md:px-12 lg:px-20 bg-[#F5F2EB] text-[#121212] overflow-hidden">
        <div className="mx-auto max-w-7xl w-full">
          {/* Top Category Label */}
          <div className="text-xs font-extrabold tracking-widest text-[#CF5A30] uppercase mb-8">
            WHY IT MATTERS
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Column 1: Main Headline */}
            <div className="lg:col-span-6 space-y-4">
              <h1 className="font-bebas text-4xl sm:text-5xl md:text-[56px] lg:text-[62px] leading-[1.02] tracking-wide uppercase">
                <span className="text-[#1C1C1C] block">
                  THE FUTURE WILL NOT BELONG TO THE MOST EDUCATED.
                </span>
                <span className="text-[#CF5A30] block pt-2">
                  IT WILL BELONG TO THE MOST CAPABLE.
                </span>
              </h1>
            </div>

            {/* Column 2: Explanatory Paragraphs */}
            <div className="lg:col-span-3 space-y-5 font-sans text-[15px] leading-relaxed text-[#1C1C1C]">
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
              <div id="flywheel" className="relative max-w-[560px] w-full flex items-center justify-center">
                <img 
                  src="https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/kyureeus-assets/KyureeusFlyWheel/Why%20it%20matters.png" 
                  alt="Why It Matters Flywheel" 
                  className="w-full h-auto object-contain drop-shadow-md hover:scale-[1.05] transition-transform duration-300 scale-125"
                />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* SECTION 02: The Problem (Four Column Layout + Bottom Banner) */}
      <section className="bg-white border-b border-[#1C1C1C]/10 py-16 md:py-24 px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl w-full space-y-16">

          {/* Top 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">

            {/* Column 1: Number + Label + Title */}
            <div className="lg:col-span-4 flex items-start gap-4">
              <span className="font-bebas text-6xl sm:text-7xl font-bold text-[#CF5A30] leading-none shrink-0">
                02
              </span>
              <div className="space-y-2 pt-1">
                <span className="font-sans text-[11px] font-extrabold tracking-widest text-[#CF5A30] uppercase block">
                  THE PROBLEM
                </span>
                <h2 className="font-bebas text-2xl sm:text-3xl md:text-[32px] leading-[1.08] tracking-wide text-[#1C1C1C] uppercase">
                  WE OPTIMIZED LEARNING. WE FORGOT PERFORMANCE.
                </h2>
              </div>
            </div>

            {/* Column 2: Paragraph text */}
            <div className="lg:col-span-3 space-y-4 font-sans text-[15px] leading-relaxed text-[#1C1C1C]">
              <p>
                For decades, education has measured success by what people know.
              </p>
              <p>
                Modern enterprises measure success by what people can do.
              </p>
              <p className="font-bold text-[#CF5A30]">
                There is a profound difference.
              </p>
            </div>

            {/* Column 3: Bullet points */}
            <div className="lg:col-span-3 space-y-3 font-sans text-[15px] leading-relaxed text-[#1C1C1C]">
              <p>• Information does not build products.</p>
              <p>• Certificates do not operate businesses.</p>
              <p>• Knowledge alone does not create innovation.</p>
              <p className="font-bold text-[#1C1C1C] pt-1">
                Capability does.
              </p>
            </div>

            {/* Column 4: Document with Target Sight Graphic Icon */}
            <div className="lg:col-span-2 flex items-center justify-center lg:justify-end py-2">
              <motion.div 
                whileHover={{ scale: 1.18, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="relative w-44 h-44 sm:w-48 sm:h-48 select-none cursor-pointer"
              >
                <svg viewBox="0 0 160 160" className="w-full h-full">
                  {/* Document Card Outline */}
                  <rect
                    x="20"
                    y="15"
                    width="95"
                    height="125"
                    rx="4"
                    fill="#F5F2EB"
                    stroke="#CF5A30"
                    strokeWidth="1.5"
                  />
                  {/* Horizontal Document Lines */}
                  <line x1="36" y1="42" x2="98" y2="42" stroke="#CF5A30" strokeWidth="2" strokeLinecap="round" />
                  <line x1="36" y1="62" x2="98" y2="62" stroke="#CF5A30" strokeWidth="2" strokeLinecap="round" />
                  <line x1="36" y1="82" x2="75" y2="82" stroke="#CF5A30" strokeWidth="2" strokeLinecap="round" />

                  {/* Target Sight Overlay Icon at Bottom-Right */}
                  <g transform="translate(118, 105)">
                    {/* Background Circle */}
                    <circle cx="0" cy="0" r="28" fill="#FFFFFF" stroke="#1C1C1C" strokeWidth="1.5" />
                    {/* Inner Target Circle */}
                    <circle cx="0" cy="0" r="11" fill="none" stroke="#1C1C1C" strokeWidth="1.5" />
                    {/* Target Crosshairs Lines */}
                    <line x1="-34" y1="0" x2="-22" y2="0" stroke="#1C1C1C" strokeWidth="1.5" />
                    <line x1="22" y1="0" x2="34" y2="0" stroke="#1C1C1C" strokeWidth="1.5" />
                    <line x1="0" y1="-34" x2="0" y2="-22" stroke="#1C1C1C" strokeWidth="1.5" />
                    <line x1="0" y1="22" x2="0" y2="34" stroke="#1C1C1C" strokeWidth="1.5" />
                  </g>
                </svg>
              </motion.div>
            </div>

          </div>

          {/* Bottom Wide Text Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
            <div className="lg:col-start-5 lg:col-span-8">
              <p className="font-sans text-[15px] md:text-[16px] leading-relaxed text-[#1C1C1C]">
                The world&apos;s largest skills gap is not a shortage of intelligence. It is a shortage of people who can consistently create enterprise value.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* Container wrapper for sections sliding over hero */}
      <div className="relative z-20 bg-[#F5F2EB]">
        {/* SECTION 02: Two Column Feature Split (01 & 02) */}
        <section className="relative bg-white py-16 md:py-24 px-6 md:px-12 lg:px-20 border-b border-[#1C1C1C]/10">
        <div className="mx-auto max-w-7xl w-full space-y-16">

          {/* Top 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">

            {/* Column 1: Number + Label + Title */}
            <div className="lg:col-span-4 flex items-start gap-4">
              <span className="font-bebas text-6xl sm:text-7xl font-bold text-[#CF5A30] leading-none shrink-0">
                03
              </span>
              <div className="space-y-2 pt-1">
                <span className="font-sans text-[11px] font-extrabold tracking-widest text-[#CF5A30] uppercase block">
                  THE SHIFT
                </span>
                <h2 className="font-bebas text-2xl sm:text-3xl md:text-[32px] leading-[1.08] tracking-wide text-[#1C1C1C] uppercase">
                  EVERY INDUSTRY IS BECOMING AN INTELLIGENT SYSTEM.
                </h2>
              </div>
            </div>

            {/* Column 2: Paragraph text */}
            <div className="lg:col-span-3 space-y-4 font-sans text-[15px] leading-relaxed text-[#1C1C1C]">
              <p>
                Artificial Intelligence is changing every profession.
              </p>
              <p>
                Automation is changing every workflow.
              </p>
              <p>
                Software is becoming infrastructure.
              </p>
            </div>

            {/* Column 3: Bullet points */}
            <div className="lg:col-span-3 space-y-3 font-sans text-[15px] leading-relaxed text-[#1C1C1C]">
              <p>• Data is becoming a strategic asset.</p>
              <p>• Every company is becoming a technology company.</p>
              <p>• Every technology company is becoming an AI company.</p>
              <p className="font-bold text-[#1C1C1C] pt-1">
                • Every AI company must become a trusted enterprise.
              </p>
            </div>

            {/* Column 4: Star/Network Topology Circle Graphic Icon */}
            <div className="lg:col-span-2 flex items-center justify-center lg:justify-end py-2">
              <motion.div 
                whileHover={{ scale: 1.18, rotate: 6 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="relative w-44 h-44 sm:w-48 sm:h-48 select-none cursor-pointer"
              >
                <svg viewBox="0 0 160 160" className="w-full h-full">
                  {/* Dashed Outer Circle */}
                  <circle
                    cx="80"
                    cy="80"
                    r="58"
                    fill="none"
                    stroke="#CF5A30"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />

                  {/* 3 Intersecting Diametrical Lines */}
                  {/* Vertical Line */}
                  <line x1="80" y1="22" x2="80" y2="138" stroke="#1C1C1C" strokeWidth="1.5" />
                  {/* Diagonal Line 1 (Top-Left to Bottom-Right) */}
                  <line x1="29.8" y1="51" x2="130.2" y2="109" stroke="#1C1C1C" strokeWidth="1.5" />
                  {/* Diagonal Line 2 (Bottom-Left to Top-Right) */}
                  <line x1="29.8" y1="109" x2="130.2" y2="51" stroke="#1C1C1C" strokeWidth="1.5" />

                  {/* 6 Black Solid Nodes around circle circumference */}
                  <circle cx="80" cy="22" r="5" fill="#1C1C1C" />
                  <circle cx="130.2" cy="51" r="5" fill="#1C1C1C" />
                  <circle cx="130.2" cy="109" r="5" fill="#1C1C1C" />
                  <circle cx="80" cy="138" r="5" fill="#1C1C1C" />
                  <circle cx="29.8" cy="109" r="5" fill="#1C1C1C" />
                  <circle cx="29.8" cy="51" r="5" fill="#1C1C1C" />
                </svg>
              </motion.div>
            </div>

          </div>

          {/* Bottom Wide Text Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
            <div className="lg:col-start-5 lg:col-span-8">
              <p className="font-sans text-[15px] md:text-[16px] leading-relaxed text-[#1C1C1C]">
                The future belongs to people who understand how these systems work together. Not individually. As complete architectures.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* SECTION 04: The Real Job (Four Column Layout + Bottom Banner) */}
      <section className="bg-white border-b border-[#1C1C1C]/10 py-16 md:py-24 px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl w-full space-y-16">

          {/* Top 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">

            {/* Column 1: Number + Label + Title */}
            <div className="lg:col-span-4 flex items-start gap-4">
              <span className="font-bebas text-6xl sm:text-7xl font-bold text-[#CF5A30] leading-none shrink-0">
                04
              </span>
              <div className="space-y-2 pt-1">
                <span className="font-sans text-[11px] font-extrabold tracking-widest text-[#CF5A30] uppercase block">
                  THE REAL JOB
                </span>
                <h2 className="font-bebas text-2xl sm:text-3xl md:text-[32px] leading-[1.08] tracking-wide text-[#1C1C1C] uppercase">
                  ENTERPRISES DO NOT HIRE KNOWLEDGE. THEY HIRE OUTCOMES.
                </h2>
              </div>
            </div>

            {/* Column 2: Sub-heading statement */}
            <div className="lg:col-span-3 font-sans text-[15px] leading-relaxed text-[#1C1C1C]">
              <h3 className="font-bebas text-2xl sm:text-3xl md:text-[28px] leading-[1.1] tracking-wide text-[#1C1C1C] uppercase">
                EVERY EXECUTIVE ASKS THE SAME QUESTIONS.
              </h3>
            </div>

            {/* Column 3: Checkmark questions */}
            <div className="lg:col-span-3 space-y-3 font-sans text-[15px] leading-relaxed text-[#1C1C1C]">
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

            {/* Column 4: Target Bullseye Graphic Icon */}
            <div className="lg:col-span-2 flex items-center justify-center lg:justify-end py-2">
              <motion.div 
                whileHover={{ scale: 1.18, rotate: 6 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="relative w-44 h-44 sm:w-48 sm:h-48 select-none cursor-pointer"
              >
                <svg viewBox="0 0 160 160" className="w-full h-full">
                  {/* Outer Circle */}
                  <circle
                    cx="80"
                    cy="80"
                    r="52"
                    fill="none"
                    stroke="#CF5A30"
                    strokeWidth="1.5"
                  />

                  {/* Middle Circle */}
                  <circle
                    cx="80"
                    cy="80"
                    r="32"
                    fill="none"
                    stroke="#CF5A30"
                    strokeWidth="1.5"
                  />

                  {/* Center Solid Circle */}
                  <circle
                    cx="80"
                    cy="80"
                    r="15"
                    fill="#CF5A30"
                  />

                  {/* Pointer Line */}
                  <line
                    x1="80"
                    y1="80"
                    x2="32"
                    y2="32"
                    stroke="#1C1C1C"
                    strokeWidth="2"
                  />

                  {/* Pointer Tip Node Box */}
                  <rect
                    x="27"
                    y="27"
                    width="10"
                    height="10"
                    fill="#1C1C1C"
                  />
                </svg>
              </motion.div>
            </div>

          </div>

          {/* Bottom Wide Text Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
            <div className="lg:col-start-5 lg:col-span-8">
              <p className="font-sans text-[15px] md:text-[16px] leading-relaxed text-[#1C1C1C]">
                Capability is simply the ability to create an outcome that someone else values. Everything else is preparation.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* SECTION 05: The Kyureeus Difference (Four Column Layout) */}
      <section className="bg-white border-b border-[#1C1C1C]/10 py-16 md:py-24 px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl w-full space-y-16">

          {/* Top 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">

            {/* Column 1: Number + Label + Title */}
            <div className="lg:col-span-4 flex items-start gap-4">
              <span className="font-bebas text-6xl sm:text-7xl font-bold text-[#CF5A30] leading-none shrink-0">
                06
              </span>
              <div className="space-y-2 pt-1">
                <span className="font-sans text-[11px] font-extrabold tracking-widest text-[#CF5A30] uppercase block">
                  THE CAPABILITY ECONOMY
                </span>
                <h2 className="font-bebas text-2xl sm:text-3xl md:text-[32px] leading-[1.08] tracking-wide text-[#1C1C1C] uppercase">
                  THE COMPANIES THAT WIN TOMORROW WILL NOT SIMPLY EMPLOY MORE PEOPLE.
                </h2>
              </div>
            </div>

            {/* Column 2: Sub-heading statement */}
            <div className="lg:col-span-3 font-sans text-[15px] leading-relaxed text-[#1C1C1C]">
              <h3 className="font-bebas text-2xl sm:text-3xl md:text-[28px] leading-[1.1] tracking-wide text-[#1C1C1C] uppercase">
                THEY WILL EMPLOY PEOPLE WHO COMPOUND VALUE.
              </h3>
            </div>

            {/* Column 3: Roles list */}
            <div className="lg:col-span-3 space-y-2 font-sans text-[14px] font-bold text-[#1C1C1C]">
              <p className="text-[#CF5A30]">Builders</p>
              <p>Operators</p>
              <p>Architects</p>
              <p>Product leaders</p>
              <p>AI engineers</p>
              <p>Security leaders</p>
              <p>Technology executives</p>
            </div>

            {/* Column 4: Ascending Bar Chart with Exponential Curve Graphic */}
            <div className="lg:col-span-2 flex items-center justify-center lg:justify-end py-2">
              <motion.div 
                whileHover={{ scale: 1.15, y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="relative w-44 h-36 select-none cursor-pointer"
              >
                <svg viewBox="0 0 180 140" className="w-full h-full overflow-visible">
                  {/* Baseline */}
                  <line x1="5" y1="125" x2="175" y2="125" stroke="#1C1C1C" strokeWidth="1" />

                  {/* 6 Stepped Outline Bars */}
                  <rect x="10" y="112" width="12" height="13" fill="#FFFFFF" stroke="#1C1C1C" strokeWidth="1.2" />
                  <rect x="27" y="103" width="12" height="22" fill="#FFFFFF" stroke="#1C1C1C" strokeWidth="1.2" />
                  <rect x="44" y="90" width="12" height="35" fill="#FFFFFF" stroke="#1C1C1C" strokeWidth="1.2" />
                  <rect x="61" y="73" width="12" height="52" fill="#FFFFFF" stroke="#1C1C1C" strokeWidth="1.2" />
                  <rect x="78" y="52" width="12" height="73" fill="#FFFFFF" stroke="#1C1C1C" strokeWidth="1.2" />
                  <rect x="95" y="27" width="12" height="98" fill="#FFFFFF" stroke="#1C1C1C" strokeWidth="1.2" />

                  {/* 7th Highlighted Solid Terracotta Bar */}
                  <rect x="112" y="12" width="15" height="113" fill="#CF5A30" rx="1" />

                  {/* Smooth Exponential Curved Arrow */}
                  <path
                    d="M 8 115 Q 85 95 110 12"
                    fill="none"
                    stroke="#CF5A30"
                    strokeWidth="1.8"
                  />
                  {/* Arrowhead */}
                  <path
                    d="M 104 18 L 110 12 L 111 20"
                    fill="none"
                    stroke="#CF5A30"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            </div>

          </div>

          {/* Bottom Text Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
            <div className="lg:col-start-5 lg:col-span-8">
              <p className="font-sans text-[14px] md:text-[15px] leading-relaxed text-[#666666]">
                People capable of improving the enterprise every time they make a decision. That is the new competitive advantage. Not knowledge. Capability.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* SECTION 07: Why This Changes Everything (Four Column Layout) */}
      <section className="bg-[#F5F2EB] border-b border-[#1C1C1C]/10 py-16 md:py-24 px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl w-full space-y-16">

          {/* Top 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">

            {/* Column 1: Number + Label + Title */}
            <div className="lg:col-span-4 flex items-start gap-4">
              <span className="font-bebas text-6xl sm:text-7xl font-bold text-[#CF5A30] leading-none shrink-0">
                07
              </span>
              <div className="space-y-2 pt-1">
                <span className="font-sans text-[11px] font-extrabold tracking-widest text-[#CF5A30] uppercase block">
                  WHY THIS CHANGES EVERYTHING
                </span>
                <h2 className="font-bebas text-2xl sm:text-3xl md:text-[32px] leading-[1.08] tracking-wide text-[#1C1C1C] uppercase">
                  THE TRADITIONAL EDUCATION MODEL ENDS WITH GRADUATION.
                </h2>
              </div>
            </div>

            {/* Column 2: Sub-heading copy */}
            <div className="lg:col-span-3 space-y-8 font-sans text-[15px] leading-relaxed text-[#1C1C1C]">
              <h3 className="font-bebas text-2xl sm:text-3xl md:text-[28px] leading-[1.1] tracking-wide text-[#1C1C1C] uppercase">
                THE KYUREEUS MODEL BEGINS THERE.
              </h3>
            </div>

            {/* Column 3: Chain of outcomes list */}
            <div className="lg:col-span-3 space-y-3 font-sans text-[15px] leading-relaxed text-[#1C1C1C]">
              <p>• Real enterprise problems create projects.</p>
              <p>• Projects create evidence.</p>
              <p>• Evidence creates trust.</p>
              <p>• Trust creates opportunity.</p>
              <p>• Opportunity creates experience.</p>
              <p>• Experience creates capability.</p>
              <p>• Capability creates better enterprises.</p>
              <p className="font-bold text-[#CF5A30] pt-1">
                • And better enterprises create a better world.
              </p>
            </div>

            {/* Column 4: Intersecting Circles Lens Graphic Icon */}
            <div className="lg:col-span-2 flex items-center justify-center lg:justify-end py-2">
              <motion.div 
                whileHover={{ scale: 1.18, rotate: 6 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="relative w-44 h-44 sm:w-48 sm:h-48 select-none cursor-pointer"
              >
                <svg viewBox="0 0 160 160" className="w-full h-full">
                  {/* Left Dashed Circle */}
                  <circle
                    cx="55"
                    cy="80"
                    r="30"
                    fill="none"
                    stroke="#CF5A30"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                  />

                  {/* Right Dashed Circle */}
                  <circle
                    cx="85"
                    cy="80"
                    r="30"
                    fill="none"
                    stroke="#CF5A30"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                  />

                  {/* Intersection Node Dot */}
                  <circle
                    cx="70"
                    cy="80"
                    r="4.5"
                    fill="#1C1C1C"
                  />

                  {/* Top Ray Line */}
                  <line
                    x1="20"
                    y1="80"
                    x2="130"
                    y2="45"
                    stroke="#1C1C1C"
                    strokeWidth="1.5"
                  />

                  {/* Bottom Ray Line */}
                  <line
                    x1="20"
                    y1="80"
                    x2="130"
                    y2="115"
                    stroke="#1C1C1C"
                    strokeWidth="1.5"
                  />
                </svg>
              </motion.div>
            </div>

          </div>

          {/* Bottom Subtitle / Flywheel text */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2">
            <div className="lg:col-start-5 lg:col-span-8">
              <p className="font-sans text-[15px] leading-relaxed text-[#1C1C1C]">
             
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* Final Call to Action Section (Dark Background #1C1C1C, White Title & Orange Accents #CF5A30) */}
      <section className="relative bg-[#1C1C1C] text-[#FFFFFF] py-20 md:py-28 px-6 md:px-12 lg:px-20 overflow-hidden select-none">
        {/* Background Watermark K on Far Left */}
        <div className="absolute -left-6 md:-left-8 top-1/2 -translate-y-1/2 font-bebas text-[180px] sm:text-[240px] md:text-[320px] font-bold text-white/[0.06] pointer-events-none leading-none select-none">
          K
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center space-y-6 md:space-y-8 flex flex-col items-center">
          {/* Top Label */}
          <div className="font-sans text-xs sm:text-sm font-extrabold tracking-widest text-[#CF5A30] uppercase">
            THE FUTURE BELONGS TO BUILDERS.
          </div>

          {/* Headline Statement (White) */}
          <h2 className="font-bebas text-2xl sm:text-3xl md:text-[38px] lg:text-[44px] leading-[1.08] tracking-wide text-[#FFFFFF] uppercase max-w-4xl">
            THE NEXT GENERATION WILL NOT BE DEFINED BY THE DEGREES THEY COLLECT. IT WILL BE DEFINED BY THE PROBLEMS THEY SOLVE. THE SYSTEMS THEY BUILD. THE ORGANIZATIONS THEY TRANSFORM. THE VALUE THEY CREATE.
          </h2>

          {/* Sub-statement (Orange) */}
          <p className="font-sans text-sm sm:text-base font-extrabold tracking-wider text-[#CF5A30] uppercase">
            KYUREEUS EXISTS TO BUILD THE PEOPLE WHO BUILD THE FUTURE.
          </p>

          {/* CTA Button */}
          <div className="pt-3">
            <Link href="/bootcamps">
              <Button className="group flex items-center gap-2.5 rounded-[4px] bg-[#CF5A30] hover:bg-white text-white hover:text-[#121212] px-8 py-6 text-xs sm:text-sm font-bold tracking-widest uppercase transition-colors duration-300 shadow-lg cursor-pointer">
                EXPLORE THE CAPABILITY ARCHITECTURE
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}

