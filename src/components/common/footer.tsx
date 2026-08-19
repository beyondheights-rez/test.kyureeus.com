"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const pathname = usePathname();
  const hideCtaBanner = pathname === "/whykyureeus" || pathname === "/bootcamps" || pathname === "/how-we-teach" || pathname === "/why-it-matters" || pathname === "/capability-architecture" || pathname === "/the-flywheel" || pathname === "/about-us" || pathname === "/contact" || pathname === "/privacy-policy" || pathname === "/refund-policy";

  return (
    <footer className="w-full flex flex-col">
      
      {/* Optional Top Dark CTA Banner (shown on Home Page) */}
      {!hideCtaBanner && (
        <div className="bg-[#1C1C1E] text-[#F5F2EB] py-20 px-6 md:px-12 text-center flex flex-col items-center justify-center space-y-8 border-b border-[#121212]">
          <div className="mx-auto max-w-4xl space-y-4">
            <h2 className="font-bebas text-4xl sm:text-5xl md:text-[64px] tracking-wide text-white uppercase leading-[1.05]">
              Learn Less. Build More.
            </h2>
            <p className="font-sans text-sm md:text-[18px] text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed">
              Become the person who can build enterprises. Real projects, certified execution, measurable outcomes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/bootcamps">
              <Button className="group flex items-center gap-2 rounded-[4px] bg-[#CF5A30] hover:bg-white text-white hover:text-[#121212] px-6 py-6 text-xs font-bold tracking-widest uppercase transition-colors duration-300 cursor-pointer">
                EXPLORE BOOTCAMPS
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
            
            <Link href="/contact">
              <Button className="rounded-[4px] bg-white hover:bg-[#F5F2EB] text-[#121212] px-6 py-6 text-xs font-bold tracking-widest uppercase transition-colors">
                CONTACT ENTERPRISE
              </Button>
            </Link>
          </div>
        </div>
      )}

      {/* Main Footer Directory Section */}
      <div className="bg-[#F8F8F9] text-[#121212] py-16 md:py-20 px-6 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl w-full space-y-16">
          
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Brand & Social Column */}
            <div className="flex flex-col items-start space-y-5 lg:col-span-5">
              {/* Brand Header / Logo */}
              <div className="space-y-2">
                <Link href="/" className="inline-block focus:outline-none">
                  <img
                    src="https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/kyureeus-assets/index-page/logo/Kyureeus.svg"
                    alt="Kyureeus Logo"
                    className="h-14 sm:h-16 md:h-20 w-auto cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                  />
                </Link>
                <p className="font-sans text-[11px] sm:text-[12px] font-bold tracking-wider text-[#CF5A30] uppercase">
                  BUILDING ENTERPRISES CREATING ENDURING VALUE
                </p>
              </div>

              {/* Social Media Pill Buttons */}
              <div className="flex items-center gap-3 pt-3">
                <a
                  href="https://www.linkedin.com/showcase/kyureeus/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-gray-50 text-[#333333] hover:text-[#CF5A30] px-4 py-1.5 text-[12px] font-medium rounded-md border border-gray-200 transition-colors shadow-2xs"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/kyureeus.edtech?igsh=MTlsNjJ3NjBudnprcQ==&igsi=MTlsNjJ3NjBudnprcQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-gray-50 text-[#333333] hover:text-[#CF5A30] px-4 py-1.5 text-[12px] font-medium rounded-md border border-gray-200 transition-colors shadow-2xs"
                >
                  Instagram
                </a>
              </div>
            </div>

            {/* Right Links Grid (2 columns matching design) */}
            <div className="flex flex-col sm:flex-row gap-12 sm:gap-24 lg:col-span-7 w-full justify-start sm:justify-end">
              
              {/* Column 1: EXPLORE */}
              <div className="space-y-4 sm:min-w-[160px]">
                <h4 className="font-sans text-[12px] font-bold tracking-wider text-[#121212] uppercase">
                  EXPLORE
                </h4>
                <ul className="space-y-3 font-sans text-[14px] text-[#555555]">
                  <li>
                    <Link href="/whykyureeus" className="hover:text-[#CF5A30] transition-colors">
                      Why Kyureeus
                    </Link>
                  </li>
                  <li>
                    <Link href="/bootcamps" className="hover:text-[#CF5A30] transition-colors">
                      Bootcamps
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-we-teach" className="hover:text-[#CF5A30] transition-colors">
                      How We Teach
                    </Link>
                  </li>
                  <li>
                    <Link href="/the-flywheel" className="hover:text-[#CF5A30] transition-colors">
                      The Flywheel
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 2: COMPANY */}
              <div className="space-y-4 sm:min-w-[160px]">
                <h4 className="font-sans text-[12px] font-bold tracking-wider text-[#121212] uppercase">
                  COMPANY
                </h4>
                <ul className="space-y-3 font-sans text-[14px] text-[#555555]">
                  <li>
                    <Link href="/about-us" className="hover:text-[#CF5A30] transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-[#CF5A30] transition-colors">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy" className="hover:text-[#CF5A30] transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/refund-policy" className="hover:text-[#CF5A30] transition-colors">
                      Refund Policy
                    </Link>
                  </li>
                </ul>
              </div>

            </div>

          </div>

          {/* Bottom Copyright Strip */}
          <div className="pt-8 border-t border-gray-200/80 font-sans text-[13px] text-[#666666]">
            © 2026 Kyureeus. All rights reserved.
          </div>

        </div>
      </div>

    </footer>
  );
}

