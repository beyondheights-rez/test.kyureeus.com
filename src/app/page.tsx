"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  AlertTriangle, 
  Code2, 
  RefreshCw, 
  Check, 
  X, 
  User, 
  Box, 
  Folder, 
  FileText, 
  BarChart3, 
  LayoutGrid, 
  Code, 
  Settings, 
  Award,
  Search,
  SquarePen,
  Send,
  Activity,
  Lock,
  Users,
  Layers
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HomepageFlywheel } from "@/components/features/homepage-flywheel";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-[#F5F2EB] text-[#121212] w-full overflow-x-clip">
      {/* 1. Home Page - Hero Section */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-10 md:py-14 bg-[#F5F2EB] text-[#121212] overflow-hidden">
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 gap-8 sm:gap-10 items-center lg:grid-cols-12 lg:gap-14 xl:gap-16">
            
            {/* Left Column: Typography & Text */}
            <div className="flex flex-col items-start lg:col-span-6 space-y-4 sm:space-y-6 md:space-y-8 qhd:space-y-12">
              
              {/* Top Badge */}
              <div className="inline-flex items-center rounded-md border border-[#121212] px-3 sm:px-3.5 py-1.5 qhd:px-4 qhd:py-2 text-xs sm:text-[13px] qhd:text-[14px] font-black tracking-widest text-[#121212] uppercase">
                FOR ENTERPRISES
              </div>

              {/* Headline */}
              <h1 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] qhd:text-[90px] uhd:text-[115px] tracking-wide text-[#121212] uppercase leading-[1.05]">
                BUILD PEOPLE WHO BUILD BETTER ENTERPRISES.
              </h1>

              <p className="font-sans text-base sm:text-lg md:text-[20px] leading-relaxed text-[#121212] qhd:text-[25px] uhd:text-[31px]">
                The world does not need more courses. It needs more people who can solve harder problems.
              </p>

              {/* Paragraph with Coral accent */}
              <p className="font-sans text-[15px] sm:text-base md:text-[18px] leading-relaxed text-[#555555] max-w-xl qhd:max-w-2xl uhd:max-w-4xl qhd:text-[22px] uhd:text-[26px]">
                Kyureeus exists to build enterprise capability—from first principles to executive leadership. Every bootcamp begins with one question:{" "}
                <span className="font-extrabold text-[#CF5A30]">
                  What must this person become capable of doing?
                </span>
              </p>

              {/* CTA Button */}
              <div className="pt-2 w-full sm:w-auto">
                <Link href="#flywheel" className="w-full sm:w-auto block">
                  <Button className="w-full sm:w-auto group flex items-center justify-center gap-2 rounded-[4px] bg-[#CF5A30] hover:bg-[#121212] text-[#F5F2EB] px-6 sm:px-7 py-5 sm:py-6 qhd:px-8 qhd:py-8 text-xs sm:text-sm qhd:text-base font-bold tracking-widest uppercase transition-colors duration-300 shadow-sm hover:shadow-md cursor-pointer min-h-[48px]">
                    EXPLORE THE CAPABILITY FLYWHEEL
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>

            </div>

            {/* Right Column: Interactive Flywheel */}
            <div className="flex items-center justify-center lg:col-span-6 py-2 sm:py-4 w-full">
              <div id="flywheel" className="relative max-w-[340px] sm:max-w-[460px] md:max-w-[560px] lg:max-w-[680px] qhd:max-w-[850px] uhd:max-w-[1100px] w-full flex items-center justify-center mx-auto">
                <HomepageFlywheel />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Home Page - Why Kyureeus Section */}
      <section id="why-kyureeus" className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center bg-white py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-20 border-t border-[#121212]/10">
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#121212]/10 gap-8 lg:gap-0">
            
            {/* Column 1: The Problem */}
            <div className="flex flex-col space-y-4 md:space-y-5 lg:px-8 first:pl-0 last:pr-0 pb-6 lg:pb-0">
              <div className="flex items-center gap-3 group cursor-pointer">
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 6 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#121212]/5 group-hover:bg-[#CF5A30] border border-[#121212]/15 text-[#121212] group-hover:text-white transition-colors duration-200"
                >
                  <AlertTriangle className="h-4 w-4" />
                </motion.div>
                <span className="font-sans text-xs font-black tracking-widest text-[#666666] group-hover:text-[#CF5A30] transition-colors duration-200 uppercase">
                  THE PROBLEM
                </span>
              </div>
              
              <h2 className="font-bebas text-2xl sm:text-3xl md:text-[34px] tracking-wide text-[#121212] uppercase leading-[1.1]">
                ENTERPRISE EDUCATION IS BROKEN.
              </h2>
              
              <p className="font-sans text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#444444]">
                Most education begins with abstract subjects: Cybersecurity, AI, Cloud, Business. But enterprises never buy subjects. They buy outcomes.
              </p>
              
              <ul className="space-y-2.5 pt-1">
                {[
                  "Reduce operational risk.",
                  "Launch innovative products.",
                  "Scale mission-critical infrastructure.",
                  "Increase predictable revenue.",
                  "Transform traditional industries."
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[14px] sm:text-[15px] text-[#121212] font-semibold font-sans">
                    <span className="h-2 w-2 rounded-full bg-[#CF5A30] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <p className="font-sans text-[14.5px] sm:text-[15.5px] font-extrabold text-[#121212] pt-2">
                Kyureeus teaches work—not topics.
              </p>
            </div>

            {/* Column 2: Our Philosophy */}
            <div className="flex flex-col space-y-4 md:space-y-5 lg:px-8 pb-6 lg:pb-0 pt-6 lg:pt-0">
              <div className="flex items-center gap-3 group cursor-pointer">
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 6 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#121212]/5 group-hover:bg-[#CF5A30] border border-[#121212]/15 text-[#121212] group-hover:text-white transition-colors duration-200"
                >
                  <Code2 className="h-4 w-4" />
                </motion.div>
                <span className="font-sans text-xs font-black tracking-widest text-[#666666] group-hover:text-[#CF5A30] transition-colors duration-200 uppercase">
                  OUR PHILOSOPHY
                </span>
              </div>
              
              <h2 className="font-bebas text-2xl sm:text-3xl md:text-[34px] tracking-wide text-[#121212] uppercase leading-[1.1]">
                START WITH THE JOB. NOT THE COURSE.
              </h2>
              
              <p className="font-sans text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#444444]">
                Every bootcamp starts with an enterprise job that needs to be done. Every module exists because someone must eventually perform meaningful work. Every assessment proves real capability—not memorization.
              </p>
              
              <p className="font-sans text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#444444]">
                Our graduates do not finish a program with just a certificate. They finish capable of delivering immediate, tangible enterprise outcomes.
              </p>
            </div>

            {/* Column 3: The Flywheel */}
            <div className="flex flex-col space-y-4 md:space-y-5 lg:px-8 pt-6 lg:pt-0">
              <div className="flex items-center gap-3 group cursor-pointer">
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 6 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#121212]/5 group-hover:bg-[#CF5A30] border border-[#121212]/15 text-[#121212] group-hover:text-white transition-colors duration-200"
                >
                  <RefreshCw className="h-4 w-4" />
                </motion.div>
                <span className="font-sans text-xs font-black tracking-widest text-[#666666] group-hover:text-[#CF5A30] transition-colors duration-200 uppercase">
                  THE FLYWHEEL
                </span>
              </div>
              
              <h2 className="font-bebas text-2xl sm:text-3xl md:text-[34px] tracking-wide text-[#121212] uppercase leading-[1.1]">
                CAPABILITY THAT COMPOUNDS.
              </h2>
              
              <p className="font-sans text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#444444]">
                Discover real-world engineering and product problems. Create production-ready solutions. Deploy them under constraint. Measure the business outcomes. This iterative cycle makes both the builder and the organization incrementally stronger.
              </p>
              
              <p className="font-sans text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#444444]">
                As builders level up, the enterprise capability compounds organically.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Home Page - Why It Matters (Output) Section */}
      <section id="why-it-matters" className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center bg-[#EFEBE0] border-t border-[#121212]/10 py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl w-full space-y-8 md:space-y-10">
          
          {/* Row 1: System Comparison & Title */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Side: Comparison cards */}
            <div className="relative flex flex-col sm:flex-row items-stretch justify-center gap-4 lg:col-span-7">
              
              {/* Card 1: Traditional Education */}
              <div className="flex-1 bg-white border border-[#121212]/10 rounded-xl p-5 sm:p-6 md:p-8 flex flex-col space-y-4">
                <span className="font-sans text-xs font-black tracking-widest text-[#666666] uppercase">
                  TRADITIONAL EDUCATION
                </span>
                
                <ul className="space-y-3 flex-1">
                  {[
                    "Starts with abstract theory and subjects",
                    "Measures passive attendance and grades",
                    "Ends with certificates of completion",
                    "Optimizes for syllabus coverage"
                  ].map((item, index) => (
                    <motion.li 
                      key={item} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, margin: "-50px" }}
                      transition={{ duration: 0.4, delay: index * 0.15 }}
                      className="flex items-start gap-2.5 text-[14px] sm:text-[15px] text-[#121212] font-sans font-medium leading-snug"
                    >
                      <motion.span 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ type: "spring", stiffness: 300, damping: 18, delay: index * 0.15 + 0.1 }}
                        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-[#DC2626] mt-0.5"
                      >
                        <X className="h-3.5 w-3.5 stroke-[2.5]" />
                      </motion.span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* VS Circular Badge */}
              <div className="self-center my-1 sm:my-0 sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-[#121212] text-[#F5F2EB] text-xs font-black shadow-md z-10 border border-[#F5F2EB]">
                VS
              </div>

              {/* Card 2: Kyureeus System */}
              <div className="flex-1 bg-white border-2 border-[#CF5A30] rounded-xl p-5 sm:p-6 md:p-8 flex flex-col space-y-4">
                <span className="font-sans text-xs font-black tracking-widest text-[#CF5A30] uppercase">
                  KYUREEUS SYSTEM
                </span>
                
                <ul className="space-y-3 flex-1">
                  {[
                    "Starts with actual enterprise work",
                    "Measures verified execution capability",
                    "Ends with production-ready systems",
                    "Optimizes for concrete business impact"
                  ].map((item, index) => (
                    <motion.li 
                      key={item} 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, margin: "-50px" }}
                      transition={{ duration: 0.4, delay: index * 0.15 }}
                      className="flex items-start gap-2.5 text-[14px] sm:text-[15px] text-[#121212] font-sans font-medium leading-snug"
                    >
                      <motion.span 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: [0, 1.3, 1] }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5, delay: index * 0.15 + 0.1 }}
                        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#16A34A] text-white shadow-sm border border-green-400/30 mt-0.5"
                      >
                        <Check className="h-3.5 w-3.5 stroke-[3]" />
                      </motion.span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Right Side: Headline and Subtitle */}
            <div className="flex flex-col items-start lg:col-span-5 space-y-4 sm:space-y-5 lg:pl-4">
              
              <div className="inline-flex items-center rounded-md border border-[#121212] px-3.5 py-1.5 text-xs font-black tracking-widest text-[#121212] uppercase">
                THE OUTPUT
              </div>

              <h2 className="font-bebas text-3xl sm:text-4xl md:text-[44px] tracking-wide text-[#121212] uppercase leading-[1.1]">
                EVERY BOOTCAMP PRODUCES FIVE DISTINCT ASSETS.
              </h2>

              <p className="font-sans text-[15px] sm:text-base md:text-[18px] leading-relaxed text-[#555555]">
                We do not believe in paper validation. Our curriculum is built so every student exits with tangible proof of their new capability.
              </p>

            </div>

          </div>

          {/* Row 2: Five boxes representing the 5 assets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 pt-2">
            
            {/* Box 1: A Capability */}
            <motion.div 
              whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
              className="group bg-white border border-[#121212]/5 rounded-xl p-5 sm:p-6 flex flex-col space-y-3 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#CF5A30]/10 group-hover:bg-[#CF5A30] text-[#CF5A30] group-hover:text-white transition-colors duration-300 shadow-2xs">
                <User className="h-4 w-4" />
              </div>
              <h3 className="font-bebas text-[22px] sm:text-[24px] tracking-wide text-[#121212] group-hover:text-[#CF5A30] transition-colors duration-300 uppercase leading-none">
                A Capability
              </h3>
              <p className="font-sans text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#555555]">
                A verified set of skills built to accomplish specific tasks under enterprise constraints.
              </p>
            </motion.div>

            {/* Box 2: A System */}
            <motion.div 
              whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
              className="group bg-white border border-[#121212]/5 rounded-xl p-5 sm:p-6 flex flex-col space-y-3 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#CF5A30]/10 group-hover:bg-[#CF5A30] text-[#CF5A30] group-hover:text-white transition-colors duration-300 shadow-2xs">
                <Box className="h-4 w-4" />
              </div>
              <h3 className="font-bebas text-[22px] sm:text-[24px] tracking-wide text-[#121212] group-hover:text-[#CF5A30] transition-colors duration-300 uppercase leading-none">
                A System
              </h3>
              <p className="font-sans text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#555555]">
                A production-grade system designed, written, and deployed to live cloud infrastructure.
              </p>
            </motion.div>

            {/* Box 3: A Portfolio Artifact */}
            <motion.div 
              whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
              className="group bg-white border border-[#121212]/5 rounded-xl p-5 sm:p-6 flex flex-col space-y-3 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#CF5A30]/10 group-hover:bg-[#CF5A30] text-[#CF5A30] group-hover:text-white transition-colors duration-300 shadow-2xs">
                <Folder className="h-4 w-4" />
              </div>
              <h3 className="font-bebas text-[22px] sm:text-[24px] tracking-wide text-[#121212] group-hover:text-[#CF5A30] transition-colors duration-300 uppercase leading-none">
                A Portfolio Artifact
              </h3>
              <p className="font-sans text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#555555]">
                A comprehensive public artifact documenting system architecture and decisions.
              </p>
            </motion.div>

            {/* Box 4: Evidence */}
            <motion.div 
              whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
              className="group bg-white border border-[#121212]/5 rounded-xl p-5 sm:p-6 flex flex-col space-y-3 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#CF5A30]/10 group-hover:bg-[#CF5A30] text-[#CF5A30] group-hover:text-white transition-colors duration-300 shadow-2xs">
                <FileText className="h-4 w-4" />
              </div>
              <h3 className="font-bebas text-[22px] sm:text-[24px] tracking-wide text-[#121212] group-hover:text-[#CF5A30] transition-colors duration-300 uppercase leading-none">
                Evidence
              </h3>
              <p className="font-sans text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#555555]">
                Verifiable logs, commit history, and performance audits proving real execution.
              </p>
            </motion.div>

            {/* Box 5: Measurable Outcomes */}
            <motion.div 
              whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
              className="group bg-white border border-[#121212]/5 rounded-xl p-5 sm:p-6 flex flex-col space-y-3 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#CF5A30]/10 group-hover:bg-[#CF5A30] text-[#CF5A30] group-hover:text-white transition-colors duration-300 shadow-2xs">
                <BarChart3 className="h-4 w-4" />
              </div>
              <h3 className="font-bebas text-[22px] sm:text-[24px] tracking-wide text-[#121212] group-hover:text-[#CF5A30] transition-colors duration-300 uppercase leading-none">
                Measurable Outcomes
              </h3>
              <p className="font-sans text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#555555]">
                Clear analytics showing how the built system directly optimizes key business KPIs.
              </p>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 4. Home Page - Capability Architecture Section */}
      <section id="capability-architecture" className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center bg-white border-t border-[#121212]/10 py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl w-full space-y-8 md:space-y-10">
          
          {/* Header */}
          <div className="flex flex-col items-start space-y-4 md:space-y-5">
            <div className="inline-flex items-center rounded-md border border-[#121212] px-3.5 py-1.5 text-xs font-black tracking-widest text-[#121212] uppercase">
              THE PORTFOLIO
            </div>

            <h2 className="font-bebas text-3xl sm:text-4xl md:text-[46px] tracking-wide text-[#121212] uppercase leading-[1.05]">
              FOUR LAYERS. ONE CORE ARCHITECTURE.
            </h2>

            <p className="font-sans text-[15px] sm:text-base leading-relaxed text-[#555555] max-w-2xl md:text-[17px]">
              Our portfolio of programs scales smoothly across all four primary dimensions of corporate execution and capability.
            </p>
          </div>

          {/* Row 2: Four boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-2">
            
            {/* Card 1: Foundations */}
            <motion.div 
              whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
              className="group bg-[#F5F2EB] hover:bg-[#FAF4EC] border border-[#121212]/10 rounded-xl p-5 sm:p-6 lg:p-7 flex flex-col justify-between space-y-5 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="font-sans text-[28px] sm:text-[32px] font-extrabold text-[#CF5A30] leading-none">
                  01
                </span>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#CF5A30]/10 group-hover:bg-[#CF5A30] text-[#121212] group-hover:text-white transition-colors duration-300">
                  <LayoutGrid className="h-4.5 w-4.5 stroke-[1.5]" />
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-bebas text-[26px] sm:text-[28px] tracking-wide text-[#121212] group-hover:text-[#CF5A30] transition-colors duration-300 uppercase leading-none">
                  Foundations
                </h3>
                <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-[#555555]">
                  Learn how modern production systems work. Master the absolute fundamentals of cloud, security, and container execution.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Builder */}
            <motion.div 
              whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
              className="group bg-[#F5F2EB] hover:bg-[#FAF4EC] border border-[#121212]/10 rounded-xl p-5 sm:p-6 lg:p-7 flex flex-col justify-between space-y-5 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="font-sans text-[28px] sm:text-[32px] font-extrabold text-[#CF5A30] leading-none">
                  02
                </span>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#CF5A30]/10 group-hover:bg-[#CF5A30] text-[#121212] group-hover:text-white transition-colors duration-300">
                  <Code className="h-4.5 w-4.5 stroke-[1.5]" />
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-bebas text-[26px] sm:text-[28px] tracking-wide text-[#121212] group-hover:text-[#CF5A30] transition-colors duration-300 uppercase leading-none">
                  Builder
                </h3>
                <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-[#555555]">
                  Learn how scalable, high-availability systems are designed, programmed, and systematically tested.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Operator */}
            <motion.div 
              whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
              className="group bg-[#F5F2EB] hover:bg-[#FAF4EC] border border-[#121212]/10 rounded-xl p-5 sm:p-6 lg:p-7 flex flex-col justify-between space-y-5 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="font-sans text-[28px] sm:text-[32px] font-extrabold text-[#CF5A30] leading-none">
                  03
                </span>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#CF5A30]/10 group-hover:bg-[#CF5A30] text-[#121212] group-hover:text-white transition-colors duration-300">
                  <Settings className="h-4.5 w-4.5 stroke-[1.5]" />
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-bebas text-[26px] sm:text-[28px] tracking-wide text-[#121212] group-hover:text-[#CF5A30] transition-colors duration-300 uppercase leading-none">
                  Operator
                </h3>
                <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-[#555555]">
                  Learn how complex cloud-native architectures are run, securely monitored, and automated in production.
                </p>
              </div>
            </motion.div>

            {/* Card 4: Executive */}
            <motion.div 
              whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
              className="group bg-[#F5F2EB] hover:bg-[#FAF4EC] border border-[#121212]/10 rounded-xl p-5 sm:p-6 lg:p-7 flex flex-col justify-between space-y-5 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="font-sans text-[28px] sm:text-[32px] font-extrabold text-[#CF5A30] leading-none">
                  04
                </span>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#CF5A30]/10 group-hover:bg-[#CF5A30] text-[#121212] group-hover:text-white transition-colors duration-300">
                  <Award className="h-4.5 w-4.5 stroke-[1.5]" />
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-bebas text-[26px] sm:text-[28px] tracking-wide text-[#121212] group-hover:text-[#CF5A30] transition-colors duration-300 uppercase leading-none">
                  Executive
                </h3>
                <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-[#555555]">
                  Learn how enterprises compound technological value. Connect architecture decisions directly to business margins.
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 5. Home Page - Bootcamps Pathways Section */}
      <section id="bootcamps" className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center bg-[#F5F2EB] border-t border-[#121212]/10 py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl w-full space-y-8 md:space-y-10">
          
          {/* Header row */}
          <div className="flex flex-col items-start space-y-4 md:space-y-5">
            <div className="inline-flex items-center rounded-md border border-[#121212] px-3.5 py-1.5 text-xs font-black tracking-widest text-[#121212] uppercase">
              BOOTCAMPS
            </div>
            
            <h2 className="font-bebas text-3xl sm:text-4xl md:text-[46px] tracking-wide text-[#121212] uppercase leading-[1.05]">
              ACCELERATED PROGRAMS BUILT FOR IMPACT.
            </h2>
            
            <p className="font-sans text-[15px] sm:text-base leading-relaxed text-[#555555] max-w-2xl md:text-[17px]">
              Choose from six specialized pathways designed to solve distinct enterprise engineering bottlenecks.
            </p>
          </div>

          {/* 6 Column Pathway Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-5">
            
            {/* Pathway 1: Discover */}
            <motion.div 
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="group bg-white border border-[#121212]/10 rounded-xl p-5 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="space-y-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#CF5A30]/10 group-hover:bg-[#CF5A30] text-[#CF5A30] group-hover:text-white transition-colors duration-300 shadow-2xs">
                  <Search className="h-4.5 w-4.5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bebas text-[24px] sm:text-[26px] tracking-wide text-[#121212] group-hover:text-[#CF5A30] transition-colors duration-300 uppercase">Discover</h3>
                  <p className="font-sans text-[13px] sm:text-[13.5px] text-[#555555] leading-tight">Find problems worth solving.</p>
                </div>
                
                <hr className="border-[#121212]/10" />
                
                <ul className="space-y-2 pt-1">
                  {[
                    "Jobs-to-be-Done analysis",
                    "Customer validation",
                    "Architecture auditing",
                    "Root cause telemetry",
                    "Business mapping"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[12.5px] sm:text-[13px] text-[#121212] font-semibold leading-snug font-sans">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#CF5A30] mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/bootcamps" className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-black tracking-wider text-[#CF5A30] uppercase hover:underline pt-2 font-sans">
                Explore <span className="text-[13px]">&gt;</span>
              </Link>
            </motion.div>

            {/* Pathway 2: Create */}
            <motion.div 
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="group bg-white border border-[#121212]/10 rounded-xl p-5 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="space-y-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#CF5A30]/10 group-hover:bg-[#CF5A30] text-[#CF5A30] group-hover:text-white transition-colors duration-300 shadow-2xs">
                  <SquarePen className="h-4.5 w-4.5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bebas text-[24px] sm:text-[26px] tracking-wide text-[#121212] group-hover:text-[#CF5A30] transition-colors duration-300 uppercase">Create</h3>
                  <p className="font-sans text-[13px] sm:text-[13.5px] text-[#555555] leading-tight">Turn concepts into code.</p>
                </div>
                
                <hr className="border-[#121212]/10" />
                
                <ul className="space-y-2 pt-1">
                  {[
                    "System design patterns",
                    "Modern language runtimes",
                    "REST & gRPC APIs",
                    "Testing strategies",
                    "Data modeling"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[12.5px] sm:text-[13px] text-[#121212] font-semibold leading-snug font-sans">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#CF5A30] mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/bootcamps" className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-black tracking-wider text-[#CF5A30] uppercase hover:underline pt-2 font-sans">
                Explore <span className="text-[13px]">&gt;</span>
              </Link>
            </motion.div>

            {/* Pathway 3: Deliver */}
            <motion.div 
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="group bg-white border border-[#121212]/10 rounded-xl p-5 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="space-y-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#CF5A30]/10 group-hover:bg-[#CF5A30] text-[#CF5A30] group-hover:text-white transition-colors duration-300 shadow-2xs">
                  <Send className="h-4.5 w-4.5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bebas text-[24px] sm:text-[26px] tracking-wide text-[#121212] group-hover:text-[#CF5A30] transition-colors duration-300 uppercase">Deliver</h3>
                  <p className="font-sans text-[13px] sm:text-[13.5px] text-[#555555] leading-tight">Deploy robust software.</p>
                </div>
                
                <hr className="border-[#121212]/10" />
                
                <ul className="space-y-2 pt-1">
                  {[
                    "CI/CD pipelines",
                    "Docker & Kubernetes",
                    "Infrastructure as Code",
                    "Cloud architecture",
                    "Release safety"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[12.5px] sm:text-[13px] text-[#121212] font-semibold leading-snug font-sans">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#CF5A30] mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/bootcamps" className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-black tracking-wider text-[#CF5A30] uppercase hover:underline pt-2 font-sans">
                Explore <span className="text-[13px]">&gt;</span>
              </Link>
            </motion.div>

            {/* Pathway 4: Grow */}
            <motion.div 
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="group bg-white border border-[#121212]/10 rounded-xl p-5 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="space-y-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#CF5A30]/10 group-hover:bg-[#CF5A30] text-[#CF5A30] group-hover:text-white transition-colors duration-300 shadow-2xs">
                  <Activity className="h-4.5 w-4.5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bebas text-[24px] sm:text-[26px] tracking-wide text-[#121212] group-hover:text-[#CF5A30] transition-colors duration-300 uppercase">Grow</h3>
                  <p className="font-sans text-[13px] sm:text-[13.5px] text-[#555555] leading-tight">Scale systems safely.</p>
                </div>
                
                <hr className="border-[#121212]/10" />
                
                <ul className="space-y-2 pt-1">
                  {[
                    "Horizontal scaling",
                    "Distributed cache",
                    "Message brokers",
                    "Query optimization",
                    "Performance tuning"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[12.5px] sm:text-[13px] text-[#121212] font-semibold leading-snug font-sans">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#CF5A30] mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/bootcamps" className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-black tracking-wider text-[#CF5A30] uppercase hover:underline pt-2 font-sans">
                Explore <span className="text-[13px]">&gt;</span>
              </Link>
            </motion.div>

            {/* Pathway 5: Protect */}
            <motion.div 
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="group bg-white border border-[#121212]/10 rounded-xl p-5 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="space-y-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#CF5A30]/10 group-hover:bg-[#CF5A30] text-[#CF5A30] group-hover:text-white transition-colors duration-300 shadow-2xs">
                  <Lock className="h-4.5 w-4.5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bebas text-[24px] sm:text-[26px] tracking-wide text-[#121212] group-hover:text-[#CF5A30] transition-colors duration-300 uppercase">Protect</h3>
                  <p className="font-sans text-[13px] sm:text-[13.5px] text-[#555555] leading-tight">Preserve operational trust.</p>
                </div>
                
                <hr className="border-[#121212]/10" />
                
                <ul className="space-y-2 pt-1">
                  {[
                    "Identity & Access IAM",
                    "Network topology",
                    "Data encryption",
                    "Vulnerability auditing",
                    "Threat modeling"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[12.5px] sm:text-[13px] text-[#121212] font-semibold leading-snug font-sans">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#CF5A30] mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/bootcamps" className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-black tracking-wider text-[#CF5A30] uppercase hover:underline pt-2 font-sans">
                Explore <span className="text-[13px]">&gt;</span>
              </Link>
            </motion.div>

            {/* Pathway 6: Compound */}
            <motion.div 
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="group bg-white border border-[#121212]/10 rounded-xl p-5 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="space-y-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#CF5A30]/10 group-hover:bg-[#CF5A30] text-[#CF5A30] group-hover:text-white transition-colors duration-300 shadow-2xs">
                  <Users className="h-4.5 w-4.5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bebas text-[24px] sm:text-[26px] tracking-wide text-[#121212] group-hover:text-[#CF5A30] transition-colors duration-300 uppercase">Compound</h3>
                  <p className="font-sans text-[13px] sm:text-[13.5px] text-[#555555] leading-tight">Drive team performance.</p>
                </div>
                
                <hr className="border-[#121212]/10" />
                
                <ul className="space-y-2 pt-1">
                  {[
                    "Engineering leadership",
                    "Metric dashboards",
                    "Tech debt strategies",
                    "Hiring frameworks",
                    "Execution rhythm"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[12.5px] sm:text-[13px] text-[#121212] font-semibold leading-snug font-sans">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#CF5A30] mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/bootcamps" className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-black tracking-wider text-[#CF5A30] uppercase hover:underline pt-2 font-sans">
                Explore <span className="text-[13px]">&gt;</span>
              </Link>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 6. Home Page - How We Teach Section */}
      <section id="how-we-teach" className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center bg-white border-t border-[#121212]/10 py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-start">
            
            {/* Left Column: How We Teach */}
            <div className="flex flex-col space-y-5 sm:space-y-6">
              
              <div className="flex flex-col items-start space-y-3 sm:space-y-4">
                <div className="inline-flex items-center rounded-md border border-[#121212] px-3.5 py-1.5 text-xs font-black tracking-widest text-[#121212] uppercase">
                  HOW WE TEACH
                </div>
                <h2 className="font-bebas text-3xl sm:text-4xl md:text-[42px] tracking-wide text-[#121212] uppercase leading-[1.1] max-w-md">
                  LEARNING HAPPENS BY DOING. UNDER CONSTRAINT.
                </h2>
                <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-[#555555]">
                  We abandon passive lectures. Every learner moves continuously through our core loop to construct robust, enterprise-ready systems.
                </p>
              </div>

              {/* 6 Step Vertical List */}
              <div className="space-y-2.5">
                {[
                  { num: "1", title: "Understand", desc: "Identify and decompose the business problem first." },
                  { num: "2", title: "Design", desc: "Model architecture alternatives on paper with explicit constraints." },
                  { num: "3", title: "Build", desc: "Write production-grade code adhering to clean testing practices." },
                  { num: "4", title: "Operate", desc: "Deploy to actual cloud providers with active load testing." },
                  { num: "5", title: "Measure", desc: "Monitor telemetry dashboards to verify system stability." },
                  { num: "6", title: "Improve", desc: "Refactor performance bottlenecks and address tech debt." }
                ].map((step) => (
                  <motion.div 
                    key={step.num} 
                    whileHover={{ x: 6, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="group bg-[#F5F2EB] hover:bg-[#FAF4EC] rounded-lg p-3 sm:p-3.5 flex items-center gap-3.5 border border-[#121212]/5 shadow-2xs hover:shadow-md transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#121212] group-hover:bg-[#CF5A30] text-[#F5F2EB] text-xs font-black transition-colors duration-300">
                      {step.num}
                    </div>
                    <p className="font-sans text-[13.5px] sm:text-[14.5px] text-[#121212] leading-snug">
                      <span className="font-bold text-[#121212] group-hover:text-[#CF5A30] transition-colors duration-300 mr-1.5">{step.title}</span>
                      <span className="text-[#555555]">{step.desc}</span>
                    </p>
                  </motion.div>
                ))}
              </div>

            </div>

            {/* Right Column: Evidence Matters */}
            <div className="flex flex-col space-y-5 sm:space-y-6 justify-between pt-4 lg:pt-0">
              
              <div className="flex flex-col items-start space-y-3 sm:space-y-4">
                <div className="inline-flex items-center rounded-md border border-[#121212] px-3.5 py-1.5 text-xs font-black tracking-widest text-[#121212] uppercase">
                  EVIDENCE MATTERS
                </div>
                <h2 className="font-bebas text-3xl sm:text-4xl md:text-[42px] tracking-wide text-[#121212] uppercase leading-[1.1] max-w-md">
                  EVERY PROJECT PRODUCES VERIFIED EVIDENCE.
                </h2>
                <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-[#555555]">
                  Our platform systematically captures telemetry, code metrics, and architectures generated during execution.
                </p>
              </div>

              {/* 4 Item Vertical List */}
              <div className="space-y-3 flex-1 pt-1">
                {[
                  { icon: Layers, title: "Architecture Blueprint", desc: "Verified SVG graphs mapping cloud infrastructure." },
                  { icon: FileText, title: "Production Log History", desc: "Real runtime telemetry proving fault tolerance." },
                  { icon: Code, title: "Code Audit Records", desc: "Detailed pull-request history and static tests." },
                  { icon: BarChart3, title: "Outcomes Dashboards", desc: "Business KPI metrics mapped directly from system performance." }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div 
                      key={idx} 
                      whileHover={{ x: 6, scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className="group bg-[#F5F2EB] hover:bg-[#FAF4EC] rounded-lg p-3.5 sm:p-4 flex items-center gap-3.5 sm:gap-4 border border-[#121212]/5 shadow-2xs hover:shadow-md transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-[#CF5A30]/10 group-hover:bg-[#CF5A30] text-[#CF5A30] group-hover:text-white transition-colors duration-300 shadow-2xs">
                        <Icon className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="font-sans text-[14.5px] sm:text-[16px] font-extrabold text-[#121212] group-hover:text-[#CF5A30] transition-colors duration-300 leading-snug">
                          {item.title}
                        </h4>
                        <p className="font-sans text-[13px] sm:text-[14px] text-[#555555] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* CTA Button */}
              <div className="pt-2 w-full sm:w-auto">
                <Link href="/how-we-teach" className="w-full sm:w-auto block">
                  <Button className="w-full sm:w-auto group flex items-center justify-center gap-2 rounded-[4px] bg-[#CF5A30] hover:bg-[#121212] text-[#F5F2EB] px-6 sm:px-7 py-5 text-xs sm:text-sm font-bold tracking-widest uppercase transition-colors duration-300 shadow-sm hover:shadow-md cursor-pointer min-h-[48px]">
                    SEE HOW WE TEACH
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 7. Home Page - Partnership / CTA Section */}
      <section id="partnership" className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center bg-[#EFEBE0] border-t border-[#121212]/10 py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
            
            {/* Left Column: CTA Pitch */}
            <div className="flex flex-col items-start lg:col-span-6 space-y-4 sm:space-y-5 md:space-y-6">
              
              <div className="inline-flex items-center rounded-md border border-[#121212] px-3.5 py-1.5 text-xs font-black tracking-widest text-[#121212] uppercase font-sans">
                FOR LEADERSHIP
              </div>

              <h2 className="font-bebas text-3xl sm:text-4xl md:text-[52px] lg:text-[56px] tracking-wide text-[#121212] uppercase leading-[1.02]">
                STOP HIRING POTENTIAL. START BUILDING CAPABILITY.
              </h2>

              <p className="font-sans text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed text-[#555555] max-w-lg">
                Instead of spending months search-filtering candidates with uncertain real-world execution capacity, upskill your existing engineering cohorts into elite, unified architectural builders.
              </p>

              <div className="pt-2 w-full sm:w-auto">
                <Link href="/contact" className="w-full sm:w-auto block">
                  <Button className="w-full sm:w-auto group flex items-center justify-center gap-2.5 rounded-[4px] bg-[#CF5A30] hover:bg-[#121212] text-[#F5F2EB] px-6 sm:px-8 py-5 text-xs sm:text-sm font-bold tracking-widest uppercase transition-colors duration-300 shadow-sm hover:shadow-md cursor-pointer font-sans min-h-[48px]">
                    PARTNER WITH KYUREEUS
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>

            </div>

            {/* Right Column: Stacked White Cards */}
            <div className="flex flex-col space-y-3.5 sm:space-y-4 lg:col-span-6 w-full lg:pl-4">
              
              <h3 className="font-bebas text-2xl sm:text-3xl tracking-wide text-[#121212] uppercase leading-tight pb-1">
                ENTERPRISE ENGAGEMENT OPTIONS
              </h3>

              {/* Card 1 */}
              <div className="bg-white rounded-xl p-5 sm:p-6 border border-[#121212]/10 hover:shadow-md transition-all duration-300 space-y-2 group cursor-pointer">
                <h4 className="font-sans text-base sm:text-lg md:text-[19px] font-bold text-[#121212] group-hover:text-[#CF5A30] transition-colors duration-300">
                  Custom Bootcamp Cohorts
                </h4>
                <p className="font-sans text-[14px] sm:text-[15px] text-[#555555] leading-relaxed">
                  Sponsor 10-30 engineers to build architectures tailored specifically to your internal platforms.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl p-5 sm:p-6 border border-[#121212]/10 hover:shadow-md transition-all duration-300 space-y-2 group cursor-pointer">
                <h4 className="font-sans text-base sm:text-lg md:text-[19px] font-bold text-[#121212] group-hover:text-[#CF5A30] transition-colors duration-300">
                  Architectural Consulting
                </h4>
                <p className="font-sans text-[14px] sm:text-[15px] text-[#555555] leading-relaxed">
                  Strategic partnership mapping capability deficiencies to system-level bottlenecks.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-xl p-5 sm:p-6 border border-[#121212]/10 hover:shadow-md transition-all duration-300 space-y-2 group cursor-pointer">
                <h4 className="font-sans text-base sm:text-lg md:text-[19px] font-bold text-[#121212] group-hover:text-[#CF5A30] transition-colors duration-300">
                  Executive Alignment Sessions
                </h4>
                <p className="font-sans text-[14px] sm:text-[15px] text-[#555555] leading-relaxed">
                  2-day bootcamps mapping engineering design to actual business margins.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
