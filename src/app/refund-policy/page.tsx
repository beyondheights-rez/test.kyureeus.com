"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Users, Award, Mail, Phone, Sparkle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RefundPolicyPage() {
  return (
    <div className="flex flex-col flex-1 bg-[#F5F2EB] text-[#121212] w-full overflow-x-clip">
      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-start px-4 sm:px-6 md:px-12 lg:px-20 pt-20 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 bg-[#F5F2EB]">
        <div className="mx-auto max-w-7xl w-full">
          <div className="max-w-4xl flex flex-col items-start space-y-4 sm:space-y-6">
            {/* Badge */}
            <div className="border border-[#CF5A30]/50 text-[#CF5A30] px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-widest rounded-[4px] bg-[#CF5A30]/5">
              REFUND POLICY
            </div>

            {/* Main Heading */}
            <h1 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-[80px] tracking-wide text-[#121212] uppercase leading-[1.0]">
              FAIR AND TRANSPARENT REFUND TERMS.
            </h1>

            {/* Description Text */}
            <p className="font-sans text-sm sm:text-base md:text-[18px] text-[#3A3E40] leading-relaxed max-w-3xl">
              Thank you for choosing Kyureeus courses. We strive to ensure that every learner has a rewarding experience while exploring, evaluating, and purchasing our courses whether self-paced or instructor-led.
            </p>

            {/* Highlighted accent text */}
            <p className="font-sans text-sm sm:text-base font-bold text-[#CF5A30] tracking-wide">
              Clear policies. Trusted process.
            </p>

            {/* Action Button */}
            <div className="pt-2 w-full sm:w-auto">
              <Link href="/contact" className="w-full sm:w-auto block">
                <Button className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 bg-[#CF5A30] hover:bg-black text-white hover:text-white px-6 sm:px-7 py-5 sm:py-6 text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-[4px] shadow-sm cursor-pointer border-0 min-h-[48px]">
                  Contact Us
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR COMMITMENT */}
      <section className="relative bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 border-t border-b border-black/5 shadow-[0_-8px_30px_rgba(0,0,0,0.03)]">
        <div className="mx-auto max-w-4xl flex flex-col items-center text-center space-y-4 sm:space-y-6">
          <div className="border border-[#CF5A30]/50 text-[#CF5A30] px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-widest rounded-[4px] bg-[#F5F2EB]/40">
            OUR COMMITMENT
          </div>

          <h2 className="font-bebas text-3xl sm:text-4xl md:text-[54px] tracking-wide text-[#121212] uppercase leading-[1.05]">
            YOUR PURCHASE, OUR PROMISE.
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#555555] leading-relaxed max-w-3xl">
            Like any online purchase, our offerings are governed by specific terms and conditions. By purchasing a course from Kyureeus, you agree to our Privacy Policy, Terms of Use, and this Refund Policy.
          </p>
        </div>
      </section>

      {/* SECTION 3: REFUND ELIGIBILITY */}
      <section className="relative bg-[#F9F8F3] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 shadow-[0_-8px_30px_rgba(0,0,0,0.03)]">
        <div className="mx-auto max-w-7xl w-full space-y-10 sm:space-y-16">
          
          <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6">
            <div className="border border-[#CF5A30]/50 text-[#CF5A30] px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-widest rounded-[4px] bg-white/40">
              REFUND ELIGIBILITY
            </div>

            <h2 className="font-bebas text-3xl sm:text-4xl md:text-[54px] tracking-wide text-[#121212] uppercase leading-[1.05]">
              REFUND CONDITIONS BY PROGRAM TYPE.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x divide-black/10">
            
            {/* Column 1: Self-Paced Learning */}
            <div className="group flex flex-col space-y-4 sm:space-y-6 md:px-8 first:pl-0">
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-[#CF5A30] transition-all duration-300 group-hover:scale-110" />
                <h3 className="font-bebas text-xl sm:text-2xl tracking-wide text-[#121212] uppercase transition-colors duration-300 group-hover:text-[#CF5A30]">
                  Self-Paced Learning
                </h3>
              </div>
              
              <ul className="space-y-3 sm:space-y-4 flex-1">
                {[
                  "Submit refund request within 7 days of purchase",
                  "Consumed less than 25% of video content",
                  "No exam voucher or learning kit requested or received"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm md:text-[15px] text-[#555555] font-sans leading-relaxed">
                    <span className="w-1.5 h-1.5 bg-[#CF5A30] rounded-xs mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-[11px] sm:text-xs md:text-[13px] text-gray-400 italic pt-1">
                Any request not meeting all conditions will not be accepted.
              </p>
            </div>

            {/* Column 2: Instructor-Led Training */}
            <div className="group flex flex-col space-y-4 sm:space-y-6 md:px-8">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#CF5A30] transition-all duration-300 group-hover:scale-110" />
                <h3 className="font-bebas text-xl sm:text-2xl tracking-wide text-[#121212] uppercase transition-colors duration-300 group-hover:text-[#CF5A30]">
                  Instructor-Led Training
                </h3>
              </div>
              
              <ul className="space-y-3 sm:space-y-4 flex-1">
                {[
                  "Submit refund request within 7 days of purchase",
                  "Consumed less than 25% of video content",
                  "Not attended more than one live class",
                  "No exam voucher or learning kit requested or received"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm md:text-[15px] text-[#555555] font-sans leading-relaxed">
                    <span className="w-1.5 h-1.5 bg-[#CF5A30] rounded-xs mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-[11px] sm:text-xs md:text-[13px] text-gray-400 italic pt-1">
                Any request not meeting all conditions will not be accepted.
              </p>
            </div>

            {/* Column 3: Bootcamps & Degrees */}
            <div className="group flex flex-col space-y-4 sm:space-y-6 md:px-8 last:pr-0">
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#CF5A30] transition-all duration-300 group-hover:scale-110" />
                <h3 className="font-bebas text-xl sm:text-2xl tracking-wide text-[#121212] uppercase transition-colors duration-300 group-hover:text-[#CF5A30]">
                  Bootcamps &amp; Degrees
                </h3>
              </div>
              
              <ul className="space-y-3 sm:space-y-4 flex-1">
                {[
                  "Submit refund request within 7 days from official start date",
                  "Applies to regular class (live or recorded)",
                  "Applicable whether you attended the session or not"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm md:text-[15px] text-[#555555] font-sans leading-relaxed">
                    <span className="w-1.5 h-1.5 bg-[#CF5A30] rounded-xs mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-[11px] sm:text-xs md:text-[13px] text-gray-400 italic pt-1">
                Any request not meeting all conditions will not be accepted.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: RESCHEDULING & CANCELLATIONS */}
      <section className="relative bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 border-t border-b border-black/5 shadow-[0_-8px_30px_rgba(0,0,0,0.03)]">
        <div className="mx-auto max-w-4xl flex flex-col items-center text-center space-y-4 sm:space-y-6">
          <div className="border border-[#CF5A30]/50 text-[#CF5A30] px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-widest rounded-[4px] bg-[#F5F2EB]/40">
            IMPORTANT NOTICE
          </div>

          <h2 className="font-bebas text-3xl sm:text-4xl md:text-[54px] tracking-wide text-[#121212] uppercase leading-[1.05]">
            RESCHEDULING &amp; CANCELLATIONS.
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#555555] leading-relaxed max-w-3xl">
            For instructor-led training and university-partnered programs, Kyureeus reserves the right to reschedule or cancel any class or session due to unavoidable circumstances. In such cases, Kyureeus will reschedule the cancelled class or session.
          </p>
        </div>
      </section>

      {/* SECTION 5: HOW TO INITIATE A REFUND REQUEST */}
      <section className="relative bg-[#F5F2EB] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 shadow-[0_-8px_30px_rgba(0,0,0,0.03)]">
        <div className="mx-auto max-w-7xl w-full space-y-6 sm:space-y-8">
          
          <div className="flex flex-col items-start text-left space-y-3 sm:space-y-4">
            <div className="border border-[#CF5A30]/50 text-[#CF5A30] px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-widest rounded-[4px] bg-white/40">
              HOW TO REQUEST
            </div>

            <h2 className="font-bebas text-3xl sm:text-4xl md:text-[54px] tracking-wide text-[#121212] uppercase leading-[1.05]">
              HOW TO INITIATE A REFUND REQUEST.
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#555555] leading-relaxed">
              Refund requests can be initiated through the following methods:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-2 sm:pt-4">
            
            {/* Card 1: Email */}
            <div className="group bg-white rounded-[8px] border border-black/5 p-6 sm:p-8 md:p-10 flex flex-col justify-between shadow-2xs">
              <div>
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 rounded-[8px] bg-[#CF5A30]/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#CF5A30] group-hover:text-white">
                    <Mail className="w-5 h-5 text-[#CF5A30] transition-all duration-300 group-hover:text-white" />
                  </div>
                  <h3 className="font-bebas text-xl sm:text-2xl tracking-wide text-[#121212] uppercase transition-colors duration-300 group-hover:text-[#CF5A30]">
                    SEND US AN EMAIL.
                  </h3>
                </div>
                
                <p className="font-sans text-xs sm:text-sm md:text-[15px] text-[#555555] leading-relaxed mb-4 sm:mb-6">
                  You may send a refund request email to the official Kyureeus support email address listed in the Contact section of the Kyureeus website. Please include your course details, purchase information, and reason for the refund.
                </p>
              </div>

              <div>
                <div className="h-[1px] bg-black/5 w-full my-4 sm:my-6" />
                <a 
                  href="mailto:info@kyureeus.com" 
                  className="font-sans text-sm font-bold text-[#CF5A30] hover:text-black transition-colors duration-200"
                >
                  info@kyureeus.com
                </a>
              </div>
            </div>

            {/* Card 2: Office */}
            <div className="group bg-white rounded-[8px] border border-black/5 p-6 sm:p-8 md:p-10 flex flex-col justify-between shadow-2xs">
              <div>
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 rounded-[8px] bg-[#CF5A30]/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#CF5A30] group-hover:text-white">
                    <Phone className="w-5 h-5 text-[#CF5A30] transition-all duration-300 group-hover:text-white" />
                  </div>
                  <h3 className="font-bebas text-xl sm:text-2xl tracking-wide text-[#121212] uppercase transition-colors duration-300 group-hover:text-[#CF5A30]">
                    VISIT OUR OFFICE.
                  </h3>
                </div>
                
                <p className="font-sans text-xs sm:text-sm md:text-[15px] text-[#555555] leading-relaxed mb-4 sm:mb-6">
                  You may also reach out directly to our Kyureeus office to initiate a refund request. Our team will guide you through the required process.
                </p>
              </div>

              <div>
                <div className="h-[1px] bg-black/5 w-full my-4 sm:my-6" />
                <span className="font-sans text-sm font-bold text-[#CF5A30]">
                  Kyureeus Office HQ
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6: REFUNDS FOR DUPLICATE PAYMENTS */}
      <section className="relative bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 border-t border-b border-black/5 shadow-[0_-8px_30px_rgba(0,0,0,0.03)]">
        <div className="mx-auto max-w-4xl flex flex-col items-center text-center space-y-4 sm:space-y-6">
          <div className="border border-[#CF5A30]/50 text-[#CF5A30] px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-widest rounded-[4px] bg-[#F5F2EB]/40">
            DUPLICATE PAYMENTS
          </div>

          <h2 className="font-bebas text-3xl sm:text-4xl md:text-[54px] tracking-wide text-[#121212] uppercase leading-[1.05]">
            REFUNDS FOR DUPLICATE PAYMENTS.
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#555555] leading-relaxed max-w-3xl">
            Any duplicate payment made for the same course will be refunded through the original method of payment. After the refund request has been successfully submitted and verified, a Kyureeus executive will connect with you shortly to assist with the refund process.
          </p>
        </div>
      </section>

      {/* SECTION 7: REVISION NOTICE */}
      <section className="relative bg-[#F9F8F3] py-6 sm:py-8 px-4 sm:px-6 text-center border-b border-black/5">
        <p className="font-sans text-xs sm:text-sm font-bold text-[#CF5A30] tracking-wide">
          Kyureeus reserves the right to revise or update this Refund Policy at any time without prior notice.
        </p>
      </section>

      {/* SECTION 8: DARK CTA SECTION */}
      <section className="relative bg-[#121212] text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
          
          <div className="flex flex-col space-y-3 sm:space-y-4">
            <h2 className="font-bebas text-2xl sm:text-3xl md:text-[48px] tracking-wide uppercase leading-tight">
              NEED HELP WITH A REFUND? WE ARE HERE FOR YOU.
            </h2>
            <div className="flex flex-wrap gap-x-6 sm:gap-x-8 gap-y-2 sm:gap-y-3 pt-1">
              <div className="flex items-center gap-2 text-xs sm:text-sm md:text-[15px] font-sans text-white/90">
                <Sparkle className="w-4 h-4 text-[#CF5A30] fill-[#CF5A30]" />
                <span>Direct transparency.</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm md:text-[15px] font-sans text-white/90">
                <Sparkle className="w-4 h-4 text-[#CF5A30] fill-[#CF5A30]" />
                <span>Strict security standards.</span>
              </div>
            </div>
          </div>

          <div className="shrink-0 w-full sm:w-auto pt-2 md:pt-0">
            <Link href="/contact" className="w-full sm:w-auto block">
              <Button className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 bg-[#CF5A30] hover:bg-white text-white hover:text-black px-6 sm:px-7 py-5 sm:py-6 text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-[4px] shadow-sm cursor-pointer border-0 min-h-[48px]">
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
