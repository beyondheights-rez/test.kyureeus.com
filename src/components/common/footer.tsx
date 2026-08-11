"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const pathname = usePathname();
  const hideCtaBanner = pathname === "/whykyureeus" || pathname === "/bootcamps" || pathname === "/how-we-teach" || pathname === "/why-it-matters" || pathname === "/capability-architecture" || pathname === "/the-flywheel" || pathname === "/about-us" || pathname === "/contact";

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
      <div className="bg-[#F9F9FB] text-[#121212] py-16 md:py-20 px-6 md:px-12 lg:px-20 border-t border-[#121212]/10">
        <div className="mx-auto max-w-7xl w-full space-y-16">
          
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Brand & Social Column (lg:col-span-4) */}
            <div className="flex flex-col items-start space-y-6 lg:col-span-4">
              {/* Brand Logo Image */}
              <div className="space-y-3">
                <Link href="/" className="inline-block focus:outline-none">
                  <img 
                    src="/assets/icons/Kyureeus.svg" 
                    alt="Kyureeus Logo" 
                    className="h-14 sm:h-16 md:h-20 w-auto cursor-pointer transition-transform duration-300 hover:scale-[1.03]" 
                  />
                </Link>
                <p className="font-sans text-[11px] font-bold tracking-wider text-[#CF5A30] uppercase">
                  BUILDING ENTERPRISES CREATING ENDURING VALUE
                </p>
              </div>

              {/* Social Media Pill Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 pt-2">
                {[
                  { name: "LinkedIn", href: "https://linkedin.com" },
                  { name: "Twitter/X", href: "https://twitter.com" },
                  { name: "YouTube", href: "https://youtube.com" },
                  { name: "Instagram", href: "https://instagram.com" }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-[#F5F2EB] text-[#121212] hover:text-[#CF5A30] px-4 py-2 text-[12px] font-medium rounded-lg border border-[#121212]/10 hover:border-[#CF5A30]/40 transition-all shadow-2xs"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Right Links Grid (lg:col-span-8) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:col-span-8 w-full">
              
              {/* Column 1: EXPLORE */}
              <div className="space-y-4">
                <span className="font-sans text-[12px] font-extrabold tracking-wider text-[#121212] uppercase block">
                  EXPLORE
                </span>
                <ul className="space-y-3 font-sans text-[13px] text-[#555555]">
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
                    <Link href="/#flywheel" className="hover:text-[#CF5A30] transition-colors">
                      The Flywheel
                    </Link>
                  </li>
                  <li>
                    <Link href="/#blog" className="hover:text-[#CF5A30] transition-colors">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 2: FOR ENTERPRISES */}
              <div className="space-y-4">
                <span className="font-sans text-[12px] font-extrabold tracking-wider text-[#121212] uppercase block">
                  FOR ENTERPRISES
                </span>
                <ul className="space-y-3 font-sans text-[13px] text-[#555555]">
                  <li>
                    <Link href="/#enterprise" className="hover:text-[#CF5A30] transition-colors">
                      Enterprise Solutions
                    </Link>
                  </li>
                  <li>
                    <Link href="/#approach" className="hover:text-[#CF5A30] transition-colors">
                      Our Approach
                    </Link>
                  </li>
                  <li>
                    <Link href="/#stories" className="hover:text-[#CF5A30] transition-colors">
                      Success Stories
                    </Link>
                  </li>
                  <li>
                    <Link href="/#partners" className="hover:text-[#CF5A30] transition-colors">
                      Partners
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 3: COMPANY */}
              <div className="space-y-4">
                <span className="font-sans text-[12px] font-extrabold tracking-wider text-[#121212] uppercase block">
                  COMPANY
                </span>
                <ul className="space-y-3 font-sans text-[13px] text-[#555555]">
                  <li>
                    <Link href="/#about" className="hover:text-[#CF5A30] transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/#leadership" className="hover:text-[#CF5A30] transition-colors">
                      Leadership
                    </Link>
                  </li>
                  <li>
                    <Link href="/#careers" className="hover:text-[#CF5A30] transition-colors">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="/#contact" className="hover:text-[#CF5A30] transition-colors">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 4: RESOURCES */}
              <div className="space-y-4">
                <span className="font-sans text-[12px] font-extrabold tracking-wider text-[#121212] uppercase block">
                  RESOURCES
                </span>
                <ul className="space-y-3 font-sans text-[13px] text-[#555555]">
                  <li>
                    <Link href="/#architecture" className="hover:text-[#CF5A30] transition-colors">
                      Capability Architecture
                    </Link>
                  </li>
                  <li>
                    <Link href="/#educators" className="hover:text-[#CF5A30] transition-colors">
                      For Educators
                    </Link>
                  </li>
                  <li>
                    <Link href="/#learners" className="hover:text-[#CF5A30] transition-colors">
                      For Learners
                    </Link>
                  </li>
                  <li>
                    <Link href="/#papers" className="hover:text-[#CF5A30] transition-colors">
                      White Papers
                    </Link>
                  </li>
                </ul>
              </div>

            </div>

          </div>

          {/* Bottom Copyright & Terms Strip */}
          <div className="pt-8 border-t border-[#121212]/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-[12px] text-[#666666]">
            <div>
              © 2025 Kyureeus. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="hover:text-[#121212] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-use" className="hover:text-[#121212] transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
}
