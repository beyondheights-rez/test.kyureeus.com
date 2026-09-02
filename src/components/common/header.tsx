"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X, Layers, ShieldCheck, Cpu, Cloud } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { Button } from "@/components/ui/button";

interface SubNavItem {
  label: string;
  href: string;
  tagline: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface NavItem {
  label: string;
  href: string;
  subItems?: SubNavItem[];
}

const NAV_ITEMS: NavItem[] = [
  { label: "HOME", href: "/" },
  { label: "WHY KYUREEUS", href: "/whykyureeus" },
  {
    label: "BOOTCAMPS",
    href: "/bootcamps",
    subItems: [
      {
        label: "CYBER SECURITY",
        href: "/bootcamps/cyber-security",
        tagline: "Offensive & defensive enterprise security systems",
        icon: ShieldCheck,
      },
      {
        label: "AI ENGINEERING BOOTCAMP",
        href: "/bootcamps/ai-engineering",
        tagline: "Production LLMs, agentic workflows & intelligence systems",
        icon: Cpu,
      },
      {
        label: "CLOUD & PLATFORM ENGINEERING BOOTCAMP",
        href: "/bootcamps/cloud-platform",
        tagline: "Scalable cloud infra, distributed systems & Kubernetes",
        icon: Cloud,
      },
    ],
  },
  { label: "HOW WE TEACH", href: "/how-we-teach" },
  { label: "WHY IT MATTERS", href: "/why-it-matters" },
  {
    label: "ARCHITECTURE",
    href: "/capability-architecture",
    subItems: [
      {
        label: "CAPABILITY ARCHITECTURE",
        href: "/capability-architecture",
        tagline: "Enterprise workforce blueprint & capability graph",
        icon: Layers,
      },
      {
        label: "EXECUTIVE ARCHITECTURE",
        href: "/executive-learning-architecture",
        tagline: "AI × Security governance & decision frameworks",
        icon: ShieldCheck,
      },
    ],
  },
  { label: "THE FLYWHEEL", href: "/the-flywheel" },
  { label: "ABOUT US", href: "/about-us" },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [openMobileSubmenus, setOpenMobileSubmenus] = useState<Record<string, boolean>>({
    BOOTCAMPS: true,
    ARCHITECTURE: true,
  });
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleMobileSubmenu = (label: string) => {
    setOpenMobileSubmenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  // Close mobile menu on route change
  const prevPathRef = useRef(pathname);
  useEffect(() => {
    if (prevPathRef.current !== pathname) {
      prevPathRef.current = pathname;
      setIsMobileMenuOpen(false);
    }
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const isLinkActive = (item: NavItem) => {
    if (item.subItems) {
      return item.subItems.some((sub) => pathname === sub.href || pathname.startsWith(sub.href));
    }
    return item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
  };

  return (
    <header className="sticky top-0 z-[100] w-full border-b border-[#121212]/15 bg-[#F5F2EB]/95 backdrop-blur-md px-3.5 sm:px-6 lg:px-8 qhd:px-12 uhd:px-16 py-2.5 sm:py-3 qhd:py-5 uhd:py-6 transition-all duration-300 shadow-2xs">
      <div className="mx-auto flex max-w-[1440px] qhd:max-w-[2200px] uhd:max-w-[3200px] items-center justify-between gap-3 sm:gap-4">
        
        {/* Left Section: Brand Logo */}
        <Link 
          href="/" 
          className="group flex items-center gap-2 sm:gap-3 focus:outline-none shrink-0 cursor-pointer"
        >
          <img 
            src="/assets/icons/Kyureeus.svg" 
            alt="Kyureeus Logo" 
            className="h-8 sm:h-9 md:h-10 lg:h-9 xl:h-11 qhd:h-14 uhd:h-16 w-auto transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </Link>

        {/* Center Section: Navigation Links (Desktop) */}
        <nav className="hidden items-center lg:flex">
          <ul className="flex items-center gap-1 xl:gap-2 2xl:gap-3 qhd:gap-5">
            {NAV_ITEMS.map((item) => {
              const active = isLinkActive(item);
              const hasDropdown = Boolean(item.subItems && item.subItems.length > 0);

              if (hasDropdown) {
                const isOpen = activeDropdown === item.label;

                return (
                  <li 
                    key={item.label} 
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setActiveDropdown(null)}
                      className={cn(
                        "relative flex items-center gap-1 px-2.5 xl:px-3 py-2 font-sans text-[11px] xl:text-[12px] 2xl:text-[13px] qhd:text-[15px] font-extrabold tracking-wider whitespace-nowrap transition-colors duration-200 focus:outline-none select-none cursor-pointer min-h-[40px]",
                        active || isOpen 
                          ? "text-[#CF5A30]" 
                          : "text-[#1C1C1C] hover:text-[#CF5A30]"
                      )}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", isOpen && "rotate-180")} />

                      {/* Active underline */}
                      {active && (
                        <span className="absolute bottom-0 left-2.5 right-2.5 h-[2.5px] bg-[#CF5A30] rounded-full" />
                      )}
                    </Link>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.15, ease: "easeOut" }}
                          className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[350px] z-50"
                        >
                          <div className="rounded-[12px] border-2 border-[#121212]/15 bg-[#FAF8F3] p-2 shadow-2xl backdrop-blur-md">
                            {item.subItems?.map((sub) => {
                              const SubIcon = sub.icon;
                              const isSubActive = pathname === sub.href;

                              return (
                                <Link
                                  key={sub.href}
                                  href={sub.href}
                                  onClick={() => setActiveDropdown(null)}
                                  className={cn(
                                    "group flex items-start gap-3 p-3 rounded-[8px] transition-all duration-200 cursor-pointer min-h-[44px]",
                                    isSubActive 
                                      ? "bg-[#CF5A30]/10 border border-[#CF5A30]/30" 
                                      : "hover:bg-[#121212]/5"
                                  )}
                                >
                                  <div className={cn(
                                    "p-2 rounded-md transition-colors mt-0.5 shrink-0",
                                    isSubActive 
                                      ? "bg-[#CF5A30] text-white" 
                                      : "bg-[#121212]/5 text-[#121212] group-hover:bg-[#CF5A30] group-hover:text-white"
                                  )}>
                                    <SubIcon className="w-4 h-4" />
                                  </div>
                                  <div className="space-y-0.5">
                                    <div className={cn(
                                      "font-bebas text-base tracking-wide uppercase transition-colors",
                                      isSubActive ? "text-[#CF5A30]" : "text-[#121212] group-hover:text-[#CF5A30]"
                                    )}>
                                      {sub.label}
                                    </div>
                                    <p className="font-sans text-[11px] text-[#666666] leading-tight">
                                      {sub.tagline}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              }

              return (
                <li key={item.label} className="relative">
                  <Link
                    href={item.href}
                    className={cn(
                      "relative block px-2 xl:px-2.5 2xl:px-3 py-2 font-sans text-[11px] xl:text-[12px] 2xl:text-[13px] qhd:text-[15px] font-extrabold tracking-wider whitespace-nowrap transition-colors duration-200 focus:outline-none select-none cursor-pointer min-h-[40px] flex items-center",
                      active 
                        ? "text-[#CF5A30]" 
                        : "text-[#1C1C1C] hover:text-[#CF5A30]"
                    )}
                  >
                    {item.label}

                    {/* Active Underline Line */}
                    {active && (
                      <span className="absolute bottom-0 left-2 right-2 h-[2.5px] bg-[#CF5A30] rounded-full" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right Section: Call to Action Button (Desktop) */}
        <div className="hidden items-center lg:block shrink-0">
          <Link href="/contact" className="focus:outline-none">
            <Button 
              className="group relative flex items-center gap-2 overflow-hidden rounded-[8px] bg-[#CF5A30] hover:bg-[#121212] px-4 py-3 xl:px-5 xl:py-4 qhd:px-7 qhd:py-5 font-sans text-[11px] xl:text-[12px] font-bold tracking-widest text-[#F5F2EB] shadow-sm transition-colors duration-300 hover:shadow-md active:scale-98 cursor-pointer whitespace-nowrap min-h-[42px]"
            >
              TALK TO US
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#121212]/15 bg-white/50 text-[#121212] transition-colors hover:bg-[#121212]/10 lg:hidden focus:outline-none cursor-pointer shrink-0 active:scale-95"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation (Slide down full width with overlay) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 top-[57px] sm:top-[65px] bg-black/40 backdrop-blur-xs z-40 lg:hidden"
            />

            {/* Menu container */}
            <motion.div 
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute left-0 right-0 top-full border-b border-[#121212]/20 bg-[#F5F2EB] px-5 sm:px-8 py-5 shadow-2xl lg:hidden z-50 max-h-[calc(100dvh-65px)] overflow-y-auto"
            >
              <ul className="flex flex-col gap-1.5">
                {NAV_ITEMS.map((item) => {
                  const active = isLinkActive(item);

                  if (item.subItems) {
                    const isSubOpen = Boolean(openMobileSubmenus[item.label]);

                    return (
                      <li key={item.label} className="py-1">
                        <div className="flex items-center justify-between border-b border-[#121212]/10">
                          <Link
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={cn(
                              "flex-1 py-2 text-xs font-black tracking-widest uppercase transition-colors cursor-pointer",
                              active ? "text-[#CF5A30]" : "text-[#1C1C1C] hover:text-[#CF5A30]"
                            )}
                          >
                            {item.label}
                          </Link>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleMobileSubmenu(item.label);
                            }}
                            aria-label={`Toggle ${item.label} submenu`}
                            className="p-2 text-[#CF5A30] cursor-pointer hover:bg-black/5 rounded-md transition-colors"
                          >
                            <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", isSubOpen && "rotate-180")} />
                          </button>
                        </div>
                        {isSubOpen && (
                          <div className="pl-3 pt-2 pb-1 space-y-1.5 border-l-2 border-[#CF5A30]/30 ml-1 mt-1">
                            {item.subItems.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn(
                                  "flex items-center min-h-[44px] px-2.5 py-2 rounded-md font-sans text-[13px] font-bold tracking-wider transition-colors cursor-pointer",
                                  pathname === sub.href ? "bg-[#CF5A30]/10 text-[#CF5A30]" : "text-[#1C1C1C] hover:bg-black/5 hover:text-[#CF5A30]"
                                )}
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </li>
                    );
                  }

                  return (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "flex items-center min-h-[44px] px-3 py-2.5 rounded-lg font-sans text-[13px] font-extrabold tracking-widest transition-colors cursor-pointer",
                          active 
                            ? "bg-[#CF5A30] text-white" 
                            : "text-[#1C1C1C] hover:bg-black/5 hover:text-[#CF5A30]"
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
                
                <li className="pt-4 mt-2 border-t border-[#121212]/10">
                  <Link 
                    href="/contact" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="focus:outline-none block"
                  >
                    <Button className="w-full min-h-[48px] flex items-center justify-center gap-2 rounded-[8px] bg-[#CF5A30] hover:bg-[#121212] py-4 font-sans text-[12px] font-bold tracking-widest text-[#F5F2EB] transition-colors duration-300 cursor-pointer shadow-md">
                      TALK TO US
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
