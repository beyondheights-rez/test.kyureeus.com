"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const pathname = usePathname();
  const hideCtaBanner = pathname !== "/";

  return (
    <footer className="w-full flex flex-col">
      
      {/* Optional Top Dark CTA Banner (shown on Home Page) */}
      {!hideCtaBanner && (
        <div className="bg-[#1C1C1E] text-[#F5F2EB] py-14 sm:py-16 md:py-20 qhd:py-32 uhd:py-44 px-4 sm:px-6 md:px-12 text-center flex flex-col items-center justify-center space-y-6 sm:space-y-8 qhd:space-y-12 border-b border-[#121212]">
          <div className="mx-auto max-w-4xl qhd:max-w-6xl uhd:max-w-7xl space-y-3 sm:space-y-4 qhd:space-y-6">
            <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-[64px] qhd:text-[84px] uhd:text-[110px] tracking-wide text-white uppercase leading-[1.05]">
              Learn Less. Build More.
            </h2>
            <p className="font-sans text-sm sm:text-base md:text-[18px] qhd:text-[22px] uhd:text-[28px] text-[#A1A1AA] max-w-2xl qhd:max-w-4xl uhd:max-w-5xl mx-auto leading-relaxed">
              Become the person who can build enterprises. Real projects, certified execution, measurable outcomes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4 qhd:gap-8 qhd:pt-8 w-full max-w-md sm:max-w-none">
            <Link href="/bootcamps" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto group flex items-center justify-center gap-2 rounded-[4px] bg-[#CF5A30] hover:bg-white text-white hover:text-[#121212] px-6 py-5 sm:py-6 qhd:px-8 qhd:py-8 qhd:text-sm uhd:px-11 uhd:py-10 uhd:text-base font-bold tracking-widest uppercase transition-colors duration-300 cursor-pointer min-h-[48px]">
                EXPLORE BOOTCAMPS
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
            
            <Link href="/contact" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto flex items-center justify-center rounded-[4px] bg-white hover:bg-[#F5F2EB] text-[#121212] px-6 py-5 sm:py-6 qhd:px-8 qhd:py-8 qhd:text-sm uhd:px-11 uhd:py-10 uhd:text-base font-bold tracking-widest uppercase transition-colors min-h-[48px]">
                CONTACT ENTERPRISE
              </Button>
            </Link>
          </div>
        </div>
      )}

      {/* Main Footer Directory Section */}
      <div className="bg-[#F8F8F9] text-[#121212] py-12 sm:py-16 md:py-20 qhd:py-28 uhd:py-36 px-4 sm:px-6 md:px-12 lg:px-24 qhd:px-32 uhd:px-44">
        <div className="mx-auto max-w-7xl fhd:max-w-[1500px] qhd:max-w-[2000px] uhd:max-w-[3000px] w-full space-y-10 sm:space-y-12 md:space-y-16 qhd:space-y-24">
          
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-start">
            
            {/* Left Brand & Social Column */}
            <div className="flex flex-col items-start space-y-4 sm:space-y-5 md:col-span-2 lg:col-span-5 qhd:space-y-8">
              {/* Brand Header / Logo */}
              <div className="space-y-2 qhd:space-y-4">
                <Link href="/" className="inline-block focus:outline-none">
                  <img
                    src="https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/kyureeus-assets/index-page/logo/Kyureeus.svg"
                    alt="Kyureeus Logo"
                    className="h-12 sm:h-14 md:h-16 lg:h-18 qhd:h-26 uhd:h-34 w-auto cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                  />
                </Link>
                <p className="font-sans text-[11px] sm:text-[12px] qhd:text-[14px] uhd:text-[18px] font-bold tracking-wider text-[#CF5A30] uppercase">
                  BUILDING ENTERPRISES CREATING ENDURING VALUE
                </p>
              </div>

              {/* Social Media Pill Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1 sm:pt-3 qhd:gap-5">
                <a
                  href="https://www.linkedin.com/showcase/kyureeus/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-gray-50 text-[#333333] hover:text-[#CF5A30] px-4 py-2 qhd:px-6 qhd:py-2.5 text-[12px] qhd:text-[14px] uhd:text-[18px] font-medium rounded-md border border-gray-200 transition-colors shadow-2xs min-h-[38px] flex items-center"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/kyureeus.edtech?igsh=MTlsNjJ3NjBudnprcQ==&igsi=MTlsNjJ3NjBudnprcQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-gray-50 text-[#333333] hover:text-[#CF5A30] px-4 py-2 qhd:px-6 qhd:py-2.5 text-[12px] qhd:text-[14px] uhd:text-[18px] font-medium rounded-md border border-gray-200 transition-colors shadow-2xs min-h-[38px] flex items-center"
                >
                  Instagram
                </a>
              </div>
            </div>

            {/* Right Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 md:col-span-2 lg:col-span-7 w-full lg:justify-end qhd:gap-36 pt-2 lg:pt-0">
              
              {/* Column 1: EXPLORE */}
              <div className="space-y-3 sm:space-y-4 qhd:space-y-6">
                <h4 className="font-sans text-[12px] qhd:text-[15px] uhd:text-[19px] font-bold tracking-wider text-[#121212] uppercase">
                  EXPLORE
                </h4>
                <ul className="space-y-2.5 sm:space-y-3 qhd:space-y-4.5 font-sans text-[13.5px] sm:text-[14px] qhd:text-[17px] uhd:text-[21px] text-[#555555]">
                  <li>
                    <Link href="/whykyureeus" className="hover:text-[#CF5A30] transition-colors py-1 inline-block">
                      Why Kyureeus
                    </Link>
                  </li>
                  <li>
                    <Link href="/bootcamps" className="hover:text-[#CF5A30] transition-colors py-1 inline-block">
                      Bootcamps
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-we-teach" className="hover:text-[#CF5A30] transition-colors py-1 inline-block">
                      How We Teach
                    </Link>
                  </li>
                  <li>
                    <Link href="/capability-architecture" className="hover:text-[#CF5A30] transition-colors py-1 inline-block">
                      Capability Architecture
                    </Link>
                  </li>
                  <li>
                    <Link href="/executive-learning-architecture" className="hover:text-[#CF5A30] transition-colors py-1 inline-block">
                      Executive Architecture
                    </Link>
                  </li>
                  <li>
                    <Link href="/the-flywheel" className="hover:text-[#CF5A30] transition-colors py-1 inline-block">
                      The Flywheel
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 2: COMPANY */}
              <div className="space-y-3 sm:space-y-4 qhd:space-y-6">
                <h4 className="font-sans text-[12px] qhd:text-[15px] uhd:text-[19px] font-bold tracking-wider text-[#121212] uppercase">
                  COMPANY
                </h4>
                <ul className="space-y-2.5 sm:space-y-3 qhd:space-y-4.5 font-sans text-[13.5px] sm:text-[14px] qhd:text-[17px] uhd:text-[21px] text-[#555555]">
                  <li>
                    <Link href="/about-us" className="hover:text-[#CF5A30] transition-colors py-1 inline-block">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-[#CF5A30] transition-colors py-1 inline-block">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy" className="hover:text-[#CF5A30] transition-colors py-1 inline-block">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/refund-policy" className="hover:text-[#CF5A30] transition-colors py-1 inline-block">
                      Refund Policy
                    </Link>
                  </li>
                </ul>
              </div>

            </div>

          </div>

          {/* Bottom Copyright Strip */}
          <div className="pt-6 sm:pt-8 border-t border-gray-200/80 font-sans text-[12px] sm:text-[13px] qhd:text-[15px] uhd:text-[19px] text-[#666666]">
            © 2026 Kyureeus. All rights reserved.
          </div>

        </div>
      </div>

    </footer>
  );
}
