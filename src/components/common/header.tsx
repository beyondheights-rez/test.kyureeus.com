"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "WHY KYUREEUS", href: "/whykyureeus" },
  { label: "BOOTCAMPS", href: "/bootcamps" },
  { label: "HOW WE TEACH", href: "/how-we-teach" },
  { label: "WHY IT MATTERS", href: "/why-it-matters" },
  { label: "CAPABILITY ARCHITECTURE", href: "/capability-architecture" },
  { label: "THE FLYWHEEL", href: "/the-flywheel" },
  { label: "ABOUT US", href: "/about-us" },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const activeIndex = NAV_LINKS.findIndex((link) => 
    link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)
  );

  return (
    <header className="sticky top-0 z-[100] w-full border-b border-[#121212]/15 bg-[#F5F2EB]/95 backdrop-blur-md px-3 sm:px-6 lg:px-8 py-3.5 transition-all duration-300 shadow-xs">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between">
        
        {/* Left Section: Brand Logo (Positioned cleanly on the left with pointer cursor) */}
        <Link 
          href="/" 
          className="group flex items-center gap-3 pl-1 sm:pl-2 focus:outline-none shrink-0 cursor-pointer"
        >
          <img 
            src="/assets/icons/Kyureeus.svg" 
            alt="Kyureeus Logo" 
            className="h-10 sm:h-11 md:h-12 w-auto transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </Link>

        {/* Center Section: Navigation Links */}
        <nav className="hidden items-center lg:flex px-1 xl:px-2">
          <ul className="flex items-center gap-0.5 xl:gap-1.5 2xl:gap-2.5">
            {NAV_LINKS.map((link, idx) => {
              const isActive = activeIndex === idx;

              return (
                <li key={link.label} className="relative">
                  <Link
                    href={link.href}
                    className={cn(
                      "relative block px-1.5 xl:px-2.5 2xl:px-3 py-2 font-sans text-[10px] xl:text-[11.5px] 2xl:text-[12px] font-extrabold tracking-wider whitespace-nowrap transition-colors duration-200 focus:outline-none select-none cursor-pointer",
                      isActive 
                        ? "text-[#CF5A30]" 
                        : "text-[#1C1C1C] hover:text-[#CF5A30]"
                    )}
                  >
                    {link.label}

                    {/* Active Underline Line (Fixed static positioning for active page) */}
                    {isActive && (
                      <span className="absolute bottom-0 left-1.5 right-1.5 xl:left-2.5 xl:right-2.5 h-[2.5px] bg-[#CF5A30] rounded-full" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right Section: Call to Action Button */}
        <div className="hidden items-center lg:block shrink-0">
          <Link href="/contact" className="focus:outline-none">
            <Button 
              className="group relative flex items-center gap-2 overflow-hidden rounded-[8px] bg-[#CF5A30] hover:bg-[#121212] px-5 py-5 font-sans text-[11px] font-bold tracking-widest text-[#F5F2EB] shadow-md transition-colors duration-300 hover:shadow-lg active:scale-98 cursor-pointer"
            >
              TALK TO US
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-[#121212]/15 text-[#121212] transition-colors hover:bg-[#121212]/5 lg:hidden focus:outline-none cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute left-0 right-0 top-[100%] border-b border-[#121212] bg-[#F5F2EB] px-6 py-6 shadow-xl lg:hidden z-50"
        >
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link, idx) => {
              const isActive = activeIndex === idx;
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                    }}
                    className={cn(
                      "block py-2 font-sans text-[12px] font-bold tracking-widest transition-colors cursor-pointer",
                      isActive ? "text-[#CF5A30] border-l-2 border-[#CF5A30] pl-3" : "text-[#1C1C1C] hover:text-[#CF5A30] pl-0"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2 border-t border-[#121212]/10">
              <Link 
                href="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="focus:outline-none"
              >
                <Button className="w-full flex items-center justify-center gap-2 rounded-[8px] bg-[#CF5A30] hover:bg-[#121212] py-5 font-sans text-[11px] font-bold tracking-widest text-[#F5F2EB] transition-colors duration-300 cursor-pointer">
                  TALK TO US
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
}
