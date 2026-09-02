"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, User, Activity, Database, Lock, Shield, KeyRound, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col flex-1 bg-[#F6F4EE] text-[#121212] w-full overflow-x-clip">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-start px-4 sm:px-6 md:px-12 lg:px-20 pt-20 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 bg-[#F5F2EB]">
        <div className="mx-auto max-w-7xl w-full">
          <div className="max-w-4xl flex flex-col items-start space-y-4 sm:space-y-6">
            {/* Outline Badge */}
            <div className="border border-[#CF5A30]/50 text-[#CF5A30] px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-widest rounded-[4px] bg-[#CF5A30]/5">
              PRIVACY POLICY
            </div>

            {/* Main Heading */}
            <h1 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-[80px] tracking-wide text-[#121212] uppercase leading-[1.0]">
              YOUR PRIVACY MATTERS TO US.
            </h1>

            {/* Description Text */}
            <p className="font-sans text-sm sm:text-base md:text-[18px] text-[#3A3E40] leading-relaxed max-w-3xl">
              This Privacy Policy explains how personal information is collected, used, disclosed, stored, and protected when you use All-i, our cybersecurity awareness video streaming and assessment services.
            </p>

            {/* Subtext Accent */}
            <p className="font-sans text-sm sm:text-base font-bold text-[#CF5A30] tracking-wide">
              Transparency. Security. Trust.
            </p>

            {/* Button */}
            <div className="pt-2 w-full sm:w-auto">
              <Link href="/contact" className="w-full sm:w-auto block">
                <Button className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 bg-[#CF5A30] hover:bg-[#121212] text-white hover:text-white px-6 sm:px-7 py-5 sm:py-6 text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-[4px] shadow-sm cursor-pointer border-0 min-h-[48px]">
                  CONTACT US
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: ABOUT KYUREEUS AND THIS PRODUCT */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center w-full bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl flex flex-col items-center text-center space-y-4 sm:space-y-6">
          <div className="border border-[#CF5A30]/50 text-[#CF5A30] px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-widest rounded-[4px] bg-[#F6F4EE]/60">
            ABOUT KYUREEUS AND THIS PRODUCT
          </div>

          <h2 className="font-bebas text-3xl sm:text-4xl md:text-[54px] tracking-wide text-[#121212] uppercase leading-[1.05]">
            ALL-I: CYBERSECURITY AWARENESS BY KYUREEUS.
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#555555] leading-relaxed max-w-3xl">
            All-i is a cybersecurity awareness video streaming and quiz platform operated under the Kyureeus platform. Kyureeus builds technology platforms focused on security, trust, and enterprise-grade reliability. This Privacy Policy applies specifically to All-i while aligning with Kyureeus&apos; broader privacy and security principles across its ecosystem.
          </p>
        </div>
      </section>

      {/* SECTION 2: SCOPE */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center w-full bg-[#F9F8F3] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl flex flex-col items-start space-y-4 sm:space-y-6 w-full">
          <div className="border border-[#CF5A30]/50 text-[#CF5A30] px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-widest rounded-[4px] bg-white/60">
            SCOPE
          </div>

          <h2 className="font-bebas text-3xl sm:text-4xl md:text-[54px] tracking-wide text-[#121212] uppercase leading-[1.05]">
            WHAT THIS PRIVACY POLICY COVERS.
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#555555] leading-relaxed max-w-4xl">
            This Privacy Policy applies to all users who access or use the Services, including individual learners, enterprise users, administrators, instructors, and visitors. It covers our web applications, mobile applications, video streaming services, quizzes, assessments, certifications, analytics dashboards, and support interactions. This policy does not apply to third-party websites, applications, or services that may be linked from the platform.
          </p>
        </div>
      </section>

      {/* SECTION 3: DATA COLLECTION */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center w-full bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl space-y-10 sm:space-y-16 w-full">
          
          <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6">
            <div className="border border-[#CF5A30]/50 text-[#CF5A30] px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-widest rounded-[4px] bg-[#F6F4EE]/60">
              DATA COLLECTION
            </div>

            <h2 className="font-bebas text-3xl sm:text-4xl md:text-[54px] tracking-wide text-[#121212] uppercase leading-[1.05]">
              INFORMATION WE COLLECT.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-0 md:divide-x divide-[#121212]/15">
            
            {/* Column 1 */}
            <div className="group flex flex-col items-start space-y-3.5 sm:space-y-4 md:px-8 first:pl-0">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#CF5A30]/10 text-[#CF5A30] flex items-center justify-center transition-all duration-300 group-hover:bg-[#CF5A30] group-hover:text-white shadow-2xs">
                <User className="w-5 h-5" />
              </div>

              <h3 className="font-bebas text-xl sm:text-2xl tracking-wide text-[#121212] uppercase pt-1">
                INFORMATION YOU PROVIDE
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#555555] leading-relaxed">
                Name, email address, organizational affiliation, role or designation, account identifiers, and learning-related information such as progress, completion status, quiz responses, scores, and certifications.
              </p>
            </div>

            {/* Column 2 */}
            <div className="group flex flex-col items-start space-y-3.5 sm:space-y-4 md:px-8">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#CF5A30]/10 text-[#CF5A30] flex items-center justify-center transition-all duration-300 group-hover:bg-[#CF5A30] group-hover:text-white shadow-2xs">
                <Activity className="w-5 h-5" />
              </div>

              <h3 className="font-bebas text-xl sm:text-2xl tracking-wide text-[#121212] uppercase pt-1">
                AUTOMATIC COLLECTION
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#555555] leading-relaxed">
                Device and browser details, operating system type, IP address, approximate geographic location, session timestamps, navigation behavior, video playback metrics, and quiz interaction data.
              </p>
            </div>

            {/* Column 3 */}
            <div className="group flex flex-col items-start space-y-3.5 sm:space-y-4 md:px-8 last:pr-0">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#CF5A30]/10 text-[#CF5A30] flex items-center justify-center transition-all duration-300 group-hover:bg-[#CF5A30] group-hover:text-white shadow-2xs">
                <Database className="w-5 h-5" />
              </div>

              <h3 className="font-bebas text-xl sm:text-2xl tracking-wide text-[#121212] uppercase pt-1">
                COOKIES &amp; TECHNOLOGIES
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#555555] leading-relaxed">
                Cookies and similar technologies support essential platform functionality, maintain secure sessions, remember preferences, and analyze usage at an aggregate level.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 4: HOW WE USE YOUR DATA */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center w-full bg-[#F9F8F3] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl flex flex-col items-start space-y-4 sm:space-y-6 w-full">
          <div className="border border-[#CF5A30]/50 text-[#CF5A30] px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-widest rounded-[4px] bg-white/60">
            HOW WE USE YOUR DATA
          </div>

          <h2 className="font-bebas text-3xl sm:text-4xl md:text-[54px] tracking-wide text-[#121212] uppercase leading-[1.05]">
            HOW WE USE PERSONAL INFORMATION.
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#555555] leading-relaxed max-w-4xl">
            Personal information is used to deliver cybersecurity awareness content, stream videos, conduct quizzes and assessments, track learning progress, and generate reports or dashboards for users and authorized enterprise administrators. Information is also used to secure the platform, monitor system health, detect suspicious activity, respond to support requests, communicate service-related updates, and comply with applicable legal and regulatory requirements.
          </p>

          <p className="font-sans text-sm sm:text-base font-bold text-[#CF5A30] pt-1">
            Kyureeus does not use personal information for targeted advertising or behavioral profiling.
          </p>
        </div>
      </section>

      {/* SECTION 5: LEGAL BASIS & DATA SHARING */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center w-full bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 md:divide-x divide-[#121212]/15 w-full">
          
          <div className="flex flex-col items-start space-y-4 sm:space-y-6 md:pr-12">
            <div className="border border-[#CF5A30]/50 text-[#CF5A30] px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-widest rounded-[4px] bg-[#F6F4EE]/60">
              LEGAL BASIS
            </div>

            <h2 className="font-bebas text-3xl sm:text-4xl md:text-[48px] tracking-wide text-[#121212] uppercase leading-[1.05]">
              LEGAL BASIS FOR PROCESSING.
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#555555] leading-relaxed">
              Where required by applicable law, Kyureeus processes personal information based on lawful grounds including performance of a contract, legitimate interests such as security and fraud prevention, compliance with legal obligations, or user consent.
            </p>
          </div>

          <div className="flex flex-col items-start space-y-4 sm:space-y-6 md:pl-12">
            <div className="border border-[#CF5A30]/50 text-[#CF5A30] px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-widest rounded-[4px] bg-[#F6F4EE]/60">
              DATA SHARING
            </div>

            <h2 className="font-bebas text-3xl sm:text-4xl md:text-[48px] tracking-wide text-[#121212] uppercase leading-[1.05]">
              SHARING &amp; DISCLOSURE.
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#555555] leading-relaxed">
              Kyureeus does not sell personal information. Personal information may be shared with trusted service providers bound by contractual obligations to protect it. Information may also be disclosed where required by law or to protect the rights, safety, and integrity of Kyureeus and its users.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 6: ENTERPRISE ACCESS & DATA RETENTION */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center w-full bg-[#F9F8F3] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 md:divide-x divide-[#121212]/15 w-full">
          
          <div className="flex flex-col items-start space-y-4 sm:space-y-6 md:pr-12">
            <div className="border border-[#CF5A30]/50 text-[#CF5A30] px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-widest rounded-[4px] bg-white/60">
              ENTERPRISE ACCESS
            </div>

            <h2 className="font-bebas text-3xl sm:text-4xl md:text-[48px] tracking-wide text-[#121212] uppercase leading-[1.05]">
              ENTERPRISE &amp; ORGANIZATIONAL ACCESS.
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#555555] leading-relaxed">
              For enterprise deployments, organizations may designate administrators who can access user learning data, completion metrics, certifications, and aggregated quiz results. Such access is governed by contractual agreements, role-based access controls, and organizational policies.
            </p>
          </div>

          <div className="flex flex-col items-start space-y-4 sm:space-y-6 md:pl-12">
            <div className="border border-[#CF5A30]/50 text-[#CF5A30] px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-widest rounded-[4px] bg-white/60">
              DATA RETENTION
            </div>

            <h2 className="font-bebas text-3xl sm:text-4xl md:text-[48px] tracking-wide text-[#121212] uppercase leading-[1.05]">
              DATA RETENTION PRACTICES.
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#555555] leading-relaxed">
              Kyureeus retains personal information only for as long as necessary to fulfill the stated purposes or to meet legal, regulatory, or contractual obligations. When information is no longer required, it is securely deleted, anonymized, or archived.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 7: SECURITY OF PERSONAL INFORMATION */}
      <section className="relative min-h-[70vh] sm:min-h-[75vh] flex items-center justify-center w-full bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl space-y-10 sm:space-y-16 w-full">
          
          <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6">
            <div className="border border-[#CF5A30]/50 text-[#CF5A30] px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-widest rounded-[4px] bg-[#F6F4EE]/60">
              SECURITY
            </div>

            <h2 className="font-bebas text-3xl sm:text-4xl md:text-[54px] tracking-wide text-[#121212] uppercase leading-[1.05]">
              SECURITY OF PERSONAL INFORMATION.
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#555555] leading-relaxed max-w-4xl">
              Security is fundamental to Kyureeus as a cybersecurity-focused platform. We implement administrative, technical, and physical safeguards designed to protect personal information, including encryption of data in transit and at rest, role-based access controls, secure authentication mechanisms, multi-factor authentication where applicable, continuous monitoring, and regular security assessments.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-0 sm:divide-x divide-[#121212]/15 pt-2 sm:pt-4">
            
            {[
              { icon: Lock, label: "ENCRYPTION" },
              { icon: Shield, label: "ACCESS CONTROLS" },
              { icon: KeyRound, label: "MFA" },
              { icon: Activity, label: "MONITORING" },
              { icon: CheckCircle2, label: "ASSESSMENTS" }
            ].map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="group flex flex-col items-center justify-center space-y-2.5 sm:space-y-3 cursor-pointer py-3 sm:py-4 sm:px-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#CF5A30]/10 text-[#CF5A30] flex items-center justify-center transition-all duration-300 group-hover:bg-[#CF5A30] group-hover:text-white shadow-2xs">
                    <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                  </div>
                  <span className="font-bebas text-xs sm:text-sm md:text-base tracking-wider text-[#121212] uppercase group-hover:text-[#CF5A30] transition-colors text-center">
                    {pillar.label}
                  </span>
                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* SECTION 8: OTHER IMPORTANT INFORMATION */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center w-full bg-[#F9F8F3] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl space-y-8 sm:space-y-12 w-full">
          
          <div className="flex flex-col items-start space-y-3 sm:space-y-4">
            <div className="border border-[#CF5A30]/50 text-[#CF5A30] px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-widest rounded-[4px] bg-white/60">
              ADDITIONAL POLICIES
            </div>

            <h2 className="font-bebas text-3xl sm:text-4xl md:text-[54px] tracking-wide text-[#121212] uppercase leading-[1.05]">
              OTHER IMPORTANT INFORMATION.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-0 md:divide-x divide-[#121212]/15 pt-2 sm:pt-4">
            
            <div className="flex flex-col items-start space-y-2.5 sm:space-y-3 md:px-8 first:pl-0">
              <span className="font-bebas text-xl sm:text-2xl font-bold text-[#CF5A30]">
                01
              </span>
              <h3 className="font-sans text-sm sm:text-base font-bold text-[#121212]">
                International Transfers
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#555555] leading-relaxed">
                Kyureeus operates globally. Where international data transfers occur, safeguards ensure personal information remains protected.
              </p>
            </div>

            <div className="flex flex-col items-start space-y-2.5 sm:space-y-3 md:px-8">
              <span className="font-bebas text-xl sm:text-2xl font-bold text-[#CF5A30]">
                02
              </span>
              <h3 className="font-sans text-sm sm:text-base font-bold text-[#121212]">
                Children Privacy
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#555555] leading-relaxed">
                Services are not directed toward children under 13. Kyureeus does not knowingly collect personal information from children.
              </p>
            </div>

            <div className="flex flex-col items-start space-y-2.5 sm:space-y-3 md:px-8 last:pr-0">
              <span className="font-bebas text-xl sm:text-2xl font-bold text-[#CF5A30]">
                03
              </span>
              <h3 className="font-sans text-sm sm:text-base font-bold text-[#121212]">
                Your Rights
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#555555] leading-relaxed">
                Users may have rights to access, correct, delete, restrict, or receive a copy of their personal information.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 9: DARK CTA BANNER */}
      <section className="relative w-full bg-[#18181A] text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
          
          <div className="space-y-3 sm:space-y-4 max-w-3xl">
            <h2 className="font-bebas text-2xl sm:text-3xl md:text-[44px] text-white uppercase tracking-wide leading-[1.05]">
              QUESTIONS ABOUT YOUR PRIVACY? WE ARE HERE TO HELP.
            </h2>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1 sm:pt-2 font-sans text-xs sm:text-sm text-[#D1D1D6]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#CF5A30]" />
                Direct transparency.
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#CF5A30]" />
                Strict security standards.
              </div>
            </div>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <Link href="/contact" className="w-full sm:w-auto block">
              <Button className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 bg-[#CF5A30] hover:bg-white text-white hover:text-[#121212] px-6 sm:px-7 py-5 sm:py-6 text-xs font-bold tracking-widest uppercase transition-colors duration-300 rounded-[4px] cursor-pointer min-h-[48px]">
                Contact Us
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
