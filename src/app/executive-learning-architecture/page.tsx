"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  BarChart3, 
  Bot, 
  Crosshair, 
  ShieldAlert, 
  Database, 
  CheckCircle2, 
  Fingerprint, 
  Scale, 
  RefreshCw, 
  Mountain, 
  Landmark, 
  Compass, 
  ArrowRight, 
  Check
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ElectiveItem {
  number: string;
  title: string;
  question: string;
  category: "Strategy & Agency" | "Defense & Assurance" | "Frontier & Governance";
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  outcomes: string[];
  keyQuestions: string[];
}

const ELECTIVES_DATA: ElectiveItem[] = [
  {
    number: "01",
    title: "STRATEGY & ECONOMICS",
    category: "Strategy & Agency",
    question: "Where does AI create advantage, dependence and new scarcity?",
    icon: BarChart3,
    tag: "Capital Allocation & Competitive Moats",
    outcomes: [
      "Capital allocation & unit economics of AI deployment",
      "Identifying durable competitive advantage vs commoditized capability",
      "Vendor lock-in & sovereign computing risk models"
    ],
    keyQuestions: [
      "Where does gross margin expand vs erode with automated intelligence?",
      "Which core organizational workflows cannot afford cognitive dependencies?"
    ]
  },
  {
    number: "02",
    title: "AI AGENTS & MACHINE AUTHORITY",
    category: "Strategy & Agency",
    question: "How much power should machines receive?",
    icon: Bot,
    tag: "Delegation & Autonomous Operations",
    outcomes: [
      "Defining autonomy tiers: Human-in-the-loop to fully autonomous agents",
      "Guardrails for multi-agent negotiation & transaction authorization",
      "Kill-switches and systemic blast radius controls"
    ],
    keyQuestions: [
      "What operational threshold triggers machine-to-machine financial execution?",
      "Who bears legal and commercial culpability when an autonomous agent hallucinates in production?"
    ]
  },
  {
    number: "03",
    title: "AI-ENABLED CYBER OFFENSE & DEFENSE",
    category: "Defense & Assurance",
    question: "How does AI change the economics and velocity of attack?",
    icon: Crosshair,
    tag: "Asymmetric Warfare & Velocity",
    outcomes: [
      "Automated vulnerability discovery at machine speeds",
      "Autonomous spear-phishing & polymorphic payload generation",
      "Next-generation real-time cognitive defense architectures"
    ],
    keyQuestions: [
      "How do our defense teams maintain parity when attacks occur in milliseconds?",
      "What legacy security paradigms must be immediately retired?"
    ]
  },
  {
    number: "04",
    title: "SECURING AI",
    category: "Defense & Assurance",
    question: "How are models, agents, applications and AI supply chains attacked?",
    icon: ShieldAlert,
    tag: "Adversarial Machine Learning",
    outcomes: [
      "Prompt injection, jailbreaking, and latent backdoors",
      "Model weights theft & training data poisoning vectors",
      "Hardening MCP servers, plugins, and API agent toolchains"
    ],
    keyQuestions: [
      "How is our model supply chain vetted from pre-training to runtime inferencing?",
      "What controls prevent indirect prompt injection in RAG pipelines?"
    ]
  },
  {
    number: "05",
    title: "DATA, PRIVACY & IP",
    category: "Defense & Assurance",
    question: "What should AI be allowed to know, retain and expose?",
    icon: Database,
    tag: "Information Sovereignty & Retention",
    outcomes: [
      "Corporate intellectual property leakage vectors in LLM contexts",
      "Differential privacy & synthetic data boundaries",
      "Copyright litigation risk & provenance tracking"
    ],
    keyQuestions: [
      "Is proprietary trade data being inadvertently ingested for competitor model tuning?",
      "What policies govern multi-tenant model memory retention?"
    ]
  },
  {
    number: "06",
    title: "TRUST & GOVERNANCE",
    category: "Frontier & Governance",
    question: "How do we know AI is behaving as intended?",
    icon: CheckCircle2,
    tag: "Verifiability & Alignment",
    outcomes: [
      "Continuous algorithmic auditability & telemetry pipelines",
      "Hallucination containment & non-deterministic testing frameworks",
      "Stakeholder transparency & model card compliance standards"
    ],
    keyQuestions: [
      "What observability systems alert the executive suite to gradual model drift?",
      "How do we mathematically verify compliance with corporate ethical guardrails?"
    ]
  },
  {
    number: "07",
    title: "INFORMATION INTEGRITY",
    category: "Defense & Assurance",
    question: "What happens when seeing and hearing are no longer sufficient proof?",
    icon: Fingerprint,
    tag: "Epistemological Security & Deepfakes",
    outcomes: [
      "CEO fraud, biometric synthesis & synthetic voice cloning defenses",
      "Cryptographic provenance watermarking (C2PA standard)",
      "Organizational counter-disinformation command playbooks"
    ],
    keyQuestions: [
      "Can our treasury process withstand a hyper-realistic real-time video deepfake?",
      "How does the enterprise establish definitive authenticity in external communications?"
    ]
  },
  {
    number: "08",
    title: "REGULATION, RISK & LIABILITY",
    category: "Frontier & Governance",
    question: "Where does accountability sit?",
    icon: Scale,
    tag: "Legal Jurisdictions & Board Fiduciary Duty",
    outcomes: [
      "EU AI Act, US Executive Orders & Global regulatory compliance frameworks",
      "Product liability for non-deterministic software failures",
      "Board governance structures & C-suite fiduciary obligations"
    ],
    keyQuestions: [
      "Which executive holds statutory accountability for AI algorithmic harm?",
      "Are we prepared for compulsory algorithmic disclosure audits?"
    ]
  },
  {
    number: "09",
    title: "AI RESILIENCE",
    category: "Strategy & Agency",
    question: "How do we withstand, contain, recover and adapt?",
    icon: RefreshCw,
    tag: "Continuity & Graceful Degradation",
    outcomes: [
      "Designing fallback modes when cloud AI providers experience catastrophic outages",
      "Isolating cascading multi-agent failures",
      "Post-incident forensic analysis for non-deterministic AI incidents"
    ],
    keyQuestions: [
      "Can our mission-critical services run if the primary frontier model API is severed?",
      "What is our containment strategy for rogue autonomous agent loops?"
    ]
  },
  {
    number: "10",
    title: "FRONTIER AI",
    category: "Frontier & Governance",
    question: "What changes as capability, autonomy and scale compound?",
    icon: Mountain,
    tag: "Next-Gen Capabilities & AGI Readiness",
    outcomes: [
      "Reasoning models (o-series), continuous test-time compute & multimodal scaling",
      "Autonomous scientific discovery & code generation horizons",
      "Geopolitical AI competition and frontier compute governance"
    ],
    keyQuestions: [
      "How does our 3-year strategic roadmap adjust if reasoning capabilities advance 10x?",
      "What technological moats remain resilient against next-generation frontier intelligence?"
    ]
  }
];

const FOUNDATION_STEPS = [
  {
    number: "01",
    title: "FOUNDATIONAL TRUTHS",
    question: "What is fundamentally changing with AI?",
    desc: "First-principles understanding of non-deterministic computing, exponential capability curves, and cognitive automation."
  },
  {
    number: "02",
    title: "MENTAL MODELS",
    question: "How should leaders reason about those changes?",
    desc: "Rigorous frameworks to dismantle hype, evaluate technological trade-offs, and conceptualize cognitive infrastructure."
  },
  {
    number: "03",
    title: "AI × SECURITY",
    question: "Where do value, risk and consequence emerge?",
    desc: "Mapping the intersection of enterprise offensive capabilities, defensive vectors, and existential business risks."
  },
  {
    number: "04",
    title: "EXECUTIVE GOVERNANCE",
    question: "What decisions cannot be delegated?",
    desc: "Establishing non-negotiable boundaries, fiduciary safeguards, and ultimate accountability for board members and officers."
  }
];

const CONNECTING_TISSUE = [
  { name: "INTELLIGENCE", desc: "Frontier reasoning & automated compute" },
  { name: "AGENCY", desc: "Autonomous decision capability" },
  { name: "AUTHORITY", desc: "Delegated execution boundaries" },
  { name: "CONSEQUENCE", desc: "Enterprise blast radius & liability" },
  { name: "CONTROL", desc: "Hardened guardrails & verification" },
  { name: "RESILIENCE", desc: "Graceful recovery & continuity" }
];

const JUDGMENT_PROGRESSION = [
  { 
    step: "UNDERSTAND", 
    label: "Step 01",
    desc: "Internalize fundamental technical truths, agentic capabilities, and architectural realities." 
  },
  { 
    step: "REASON", 
    label: "Step 02",
    desc: "Apply structured mental models to navigate uncertainty and separate true capability from hype." 
  },
  { 
    step: "DECIDE", 
    label: "Step 03",
    desc: "Commit enterprise capital, policy, and authority with mathematical clarity and conviction." 
  },
  { 
    step: "CHALLENGE", 
    label: "Step 04",
    desc: "Continuously stress-test organizational assumptions against rapidly advancing adversarial vectors." 
  }
];

export default function ExecutiveLearningArchitecturePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [selectedElective, setSelectedElective] = useState<ElectiveItem | null>(null);

  const filteredElectives = selectedCategory === "ALL" 
    ? ELECTIVES_DATA 
    : ELECTIVES_DATA.filter(item => item.category === selectedCategory);

  return (
    <div className="flex flex-col flex-1 min-h-screen bg-[#F5F2EB] text-[#121212] w-full overflow-x-clip">
      
      {/* 1. HERO SECTION: EXECUTIVE ARCHITECTURE OVERVIEW */}
      <section className="relative px-4 sm:px-6 md:px-12 lg:px-20 pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-16 md:pb-20 border-b border-[#121212]/10 bg-[#F5F2EB]">
        <div className="mx-auto max-w-7xl w-full space-y-6 sm:space-y-8">
          
          {/* Top Category Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#121212]/20 bg-white/70 px-3.5 sm:px-4 py-1.5 backdrop-blur-xs">
            <span className="h-2 w-2 rounded-full bg-[#CF5A30]" />
            <span className="font-sans text-[11px] sm:text-xs font-extrabold tracking-widest text-[#121212] uppercase">
              EXECUTIVE LEARNING ARCHITECTURE
            </span>
          </div>

          {/* Main Title & Subheadline */}
          <div className="space-y-3 sm:space-y-4 max-w-4xl">
            <h1 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[70px] leading-[1.03] tracking-wide text-[#121212] uppercase">
              AI × SECURITY <span className="text-[#CF5A30]">EXECUTIVE ARCHITECTURE</span>
            </h1>
            <p className="font-sans text-base sm:text-lg md:text-xl lg:text-[22px] font-semibold text-[#121212] leading-snug">
              One Foundation. Multiple Lenses. One Executive Language.
            </p>
            <p className="font-sans text-sm sm:text-base md:text-[17px] text-[#4A4A4A] leading-relaxed max-w-3xl">
              Equipping executive leadership, board members, and security chiefs with the mental models, governance frameworks, and decision-making rigor required to lead in the era of autonomous intelligence.
            </p>
          </div>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
            <a href="#foundation-layer" className="w-full sm:w-auto block">
              <Button className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-[6px] bg-[#CF5A30] hover:bg-[#121212] text-[#F5F2EB] px-6 py-5 text-xs font-bold tracking-widest uppercase transition-colors duration-300 shadow-sm cursor-pointer min-h-[48px]">
                EXPLORE THE FOUNDATION
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
            <Link href="/contact" className="w-full sm:w-auto block">
              <Button className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-[6px] border border-[#121212]/20 bg-white hover:bg-[#F5F2EB] text-[#121212] px-6 py-5 text-xs font-bold tracking-widest uppercase transition-colors duration-300 shadow-2xs cursor-pointer min-h-[48px]">
                SCHEDULE EXECUTIVE BRIEFING
              </Button>
            </Link>
          </div>

        </div>
      </section>

      {/* 2. THE NON-NEGOTIABLE FOUNDATION LAYER */}
      <section id="foundation-layer" className="px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20 bg-[#121212] text-[#F5F2EB]">
        <div className="mx-auto max-w-7xl w-full space-y-10 sm:space-y-12">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-b border-white/10 pb-6 sm:pb-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-extrabold tracking-widest text-[#CF5A30] uppercase">
                <Landmark className="w-4 h-4" />
                <span>CORE BASELINE</span>
              </div>
              <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl tracking-wide text-white uppercase">
                THE NON-NEGOTIABLE FOUNDATION
              </h2>
            </div>
            <p className="font-sans text-sm sm:text-base text-[#D5CEC2] max-w-md">
              Every executive elective is anchored on these 4 foundational pillars. Without shared grounding, strategic discussions drift into abstraction.
            </p>
          </div>

          {/* 4 Foundation Steps Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {FOUNDATION_STEPS.map((step, idx) => (
              <div 
                key={step.number}
                className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-[12px] bg-white/5 border border-white/10 hover:border-[#CF5A30] transition-all duration-300 hover:bg-white/[0.08]"
              >
                <div className="space-y-3.5 sm:space-y-4">
                  {/* Step Number & Badge */}
                  <div className="flex items-center justify-between">
                    <span className="font-bebas text-3xl text-[#CF5A30]">
                      {step.number}
                    </span>
                    <span className="text-[11px] font-bold tracking-widest text-[#A09A8F] uppercase">
                      PILLAR {idx + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-bebas text-xl sm:text-2xl tracking-wide text-white uppercase group-hover:text-[#CF5A30] transition-colors">
                    {step.title}
                  </h3>

                  {/* Core Question */}
                  <div className="p-2.5 sm:p-3 rounded-md bg-white/5 border-l-2 border-[#CF5A30]">
                    <p className="font-sans text-xs sm:text-sm font-semibold text-white">
                      &ldquo;{step.question}&rdquo;
                    </p>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-xs text-[#D5CEC2] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3.5 mt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-bold text-[#CF5A30] uppercase tracking-wider">
                  <span>Foundational Logic</span>
                  <span className="text-white/40">0{idx + 1} / 04</span>
                </div>
              </div>
            ))}
          </div>

          {/* CONNECTING TISSUE: GOVERNING LOGIC FLOW */}
          <div className="pt-6 sm:pt-8 border-t border-white/10 space-y-4 sm:space-y-6">
            <div className="text-center space-y-1">
              <span className="text-xs font-black tracking-[0.25em] text-[#CF5A30] uppercase">
                CONNECTING TISSUE — OUR GOVERNING LOGIC
              </span>
              <p className="font-sans text-xs text-[#A09A8F]">
                The sequential progression through which technological power translates into organizational resilience.
              </p>
            </div>

            {/* Connecting Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3">
              {CONNECTING_TISSUE.map((item, idx) => (
                <div 
                  key={item.name}
                  className="flex flex-col items-center justify-center p-3 sm:p-3.5 rounded-[8px] bg-white/5 border border-white/10 hover:border-[#CF5A30] transition-colors text-center"
                >
                  <span className="text-[10px] font-mono text-[#CF5A30] font-bold mb-0.5 sm:mb-1">0{idx + 1}</span>
                  <span className="font-sans text-xs sm:text-sm font-extrabold tracking-wider text-white uppercase">
                    {item.name}
                  </span>
                  <span className="text-[10px] text-[#A09A8F] mt-1 leading-tight">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. EXECUTIVE ELECTIVES MATRIX */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-24 bg-[#FAF8F3] border-b border-[#121212]/10">
        <div className="mx-auto max-w-7xl w-full space-y-8 sm:space-y-10">
          
          {/* Section Header with Category Filters */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-[#CF5A30] uppercase">
                <span>CHOOSE YOUR DEPTH</span>
              </div>
              <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl tracking-wide text-[#121212] uppercase">
                10 EXECUTIVE ELECTIVES
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#555555] max-w-2xl">
                Tailor the learning depth to your organization&apos;s strategic priorities, regulatory exposure, and active AI deployments.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {["ALL", "Strategy & Agency", "Defense & Assurance", "Frontier & Governance"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold tracking-wider transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat 
                      ? "bg-[#121212] text-[#F5F2EB] shadow-2xs" 
                      : "bg-white border border-[#121212]/15 text-[#555555] hover:border-[#CF5A30] hover:text-[#121212]"
                  }`}
                >
                  {cat === "ALL" ? "ALL 10 MODULES" : cat.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Electives Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredElectives.map((item) => {
              const Icon = item.icon;
              const isSelected = selectedElective?.number === item.number;

              return (
                <div
                  key={item.number}
                  onClick={() => setSelectedElective(item)}
                  className={`group relative flex flex-col justify-between p-5 sm:p-6 rounded-[14px] border bg-white transition-all duration-200 cursor-pointer ${
                    isSelected 
                      ? "border-[#CF5A30] ring-2 ring-[#CF5A30]/20 shadow-lg" 
                      : "border-[#121212]/15 hover:border-[#CF5A30]/70 hover:shadow-md"
                  }`}
                >
                  <div className="space-y-3.5 sm:space-y-4">
                    
                    {/* Card Top: Number & Category Tag */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5 sm:gap-3">
                        <div className="p-2 sm:p-2.5 rounded-lg bg-[#121212]/5 text-[#121212] group-hover:bg-[#CF5A30] group-hover:text-white transition-colors duration-200">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <span className="font-bebas text-2xl sm:text-3xl tracking-wider text-[#CF5A30]">
                          {item.number}
                        </span>
                      </div>
                      <span className="text-[10px] font-bold tracking-wider text-[#666666] uppercase px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-[#121212]/5">
                        {item.category}
                      </span>
                    </div>

                    {/* Module Title */}
                    <h3 className="font-bebas text-xl sm:text-2xl tracking-wide text-[#121212] uppercase group-hover:text-[#CF5A30] transition-colors leading-tight">
                      {item.title}
                    </h3>

                    {/* Provocative Question */}
                    <p className="font-sans text-xs sm:text-sm md:text-[15px] font-medium text-[#222222] leading-relaxed">
                      &ldquo;{item.question}&rdquo;
                    </p>

                    {/* Sub-tag */}
                    <div className="text-[10.5px] sm:text-[11px] font-semibold text-[#777777] uppercase tracking-wide">
                      Focus: {item.tag}
                    </div>

                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-3.5 mt-5 sm:mt-6 border-t border-[#121212]/10 flex items-center justify-between text-xs font-bold text-[#CF5A30] uppercase tracking-wider">
                    <span>View Curriculum Depth</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. THE EXECUTIVE JUDGMENT PROGRESSION */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20 bg-[#EFEBE0] border-b border-[#121212]/10">
        <div className="mx-auto max-w-7xl w-full space-y-8 sm:space-y-12">
          
          <div className="text-center space-y-2 sm:space-y-3 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-[#CF5A30] uppercase">
              <Compass className="w-4 h-4" />
              <span>THE DESIRED OUTCOME</span>
            </div>
            <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl tracking-wide text-[#121212] uppercase">
              BETTER EXECUTIVE JUDGMENT
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#4A4A4A]">
              Moving leadership from passive observation to rigorous cognitive defense and decisive capital allocation.
            </p>
          </div>

          {/* 4-Stage Horizontal Progression Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {JUDGMENT_PROGRESSION.map((item, idx) => (
              <div 
                key={item.step}
                className="relative flex flex-col justify-between p-5 sm:p-6 rounded-[12px] bg-white border border-[#121212]/15 shadow-2xs hover:border-[#CF5A30] transition-colors"
              >
                <div className="space-y-2.5 sm:space-y-3">
                  <span className="text-xs font-mono font-bold text-[#CF5A30]">
                    {item.label}
                  </span>
                  <h3 className="font-bebas text-xl sm:text-2xl text-[#121212] uppercase tracking-wide">
                    {item.step}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {idx < JUDGMENT_PROGRESSION.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-[#121212]/30 font-black">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center pt-2 sm:pt-4">
            <span className="font-sans text-xs sm:text-sm font-black tracking-[0.2em] text-[#121212] uppercase">
              SAME FOUNDATION. YOUR PRIORITIES. STRONGER DECISIONS.
            </span>
          </div>

        </div>
      </section>

      {/* 5. INTERACTIVE CURRICULUM MODAL */}
      <AnimatePresence>
        {selectedElective && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-[#FAF8F3] border-2 border-[#121212] rounded-[16px] p-5 sm:p-7 md:p-8 shadow-2xl space-y-4 sm:space-y-6 max-h-[90vh] overflow-y-auto"
            >
              
              {/* Modal Header */}
              <div className="flex items-start justify-between border-b border-[#121212]/15 pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="font-bebas text-2xl sm:text-3xl text-[#CF5A30]">
                      ELECTIVE {selectedElective.number}
                    </span>
                    <span className="text-[11px] sm:text-xs font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-[#CF5A30]/10 text-[#CF5A30] border border-[#CF5A30]/30 uppercase">
                      {selectedElective.category}
                    </span>
                  </div>
                  <h2 className="font-bebas text-2xl sm:text-3xl md:text-4xl text-[#121212] uppercase">
                    {selectedElective.title}
                  </h2>
                </div>

                <button 
                  onClick={() => setSelectedElective(null)}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#121212]/20 flex items-center justify-center text-[#121212] hover:bg-[#121212] hover:text-white transition-colors cursor-pointer shrink-0"
                >
                  ✕
                </button>
              </div>

              {/* Core Inquiry Callout */}
              <div className="p-3 sm:p-4 rounded-lg bg-white border-l-4 border-[#CF5A30] shadow-2xs">
                <p className="font-sans text-sm sm:text-base font-bold text-[#121212]">
                  &ldquo;{selectedElective.question}&rdquo;
                </p>
                <span className="text-[11px] sm:text-xs text-[#777777] font-semibold mt-1 block">
                  Core Strategic Invalidation & Governance Lens
                </span>
              </div>

              {/* Key Executive Outcomes */}
              <div className="space-y-2 sm:space-y-3">
                <h4 className="text-[11px] sm:text-xs font-black tracking-widest text-[#121212] uppercase">
                  EXECUTIVE LEARNING OUTCOMES
                </h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  {selectedElective.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-[#333333]">
                      <Check className="w-4 h-4 text-[#CF5A30] shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Board Questions */}
              <div className="space-y-2 sm:space-y-3">
                <h4 className="text-[11px] sm:text-xs font-black tracking-widest text-[#121212] uppercase">
                  CRITICAL QUESTIONS FOR BOARD &amp; C-SUITE REVIEW
                </h4>
                <div className="space-y-2">
                  {selectedElective.keyQuestions.map((q, i) => (
                    <div key={i} className="p-2.5 sm:p-3 rounded bg-white border border-[#121212]/10 text-xs sm:text-sm font-medium text-[#222222]">
                      👉 {q}
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 pt-4 border-t border-[#121212]/15">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-[6px] bg-[#CF5A30] hover:bg-[#121212] text-white px-6 py-4 font-bold text-xs uppercase tracking-widest cursor-pointer min-h-[48px]">
                    REQUEST EXECUTIVE SYLLABUS
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <button 
                  onClick={() => setSelectedElective(null)}
                  className="text-xs font-bold text-[#666666] hover:text-[#121212] uppercase tracking-wider cursor-pointer text-center py-2"
                >
                  Close Window
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 6. CALL TO ACTION SECTION */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-24 bg-[#121212] text-[#F5F2EB]">
        <div className="mx-auto max-w-7xl w-full space-y-6 sm:space-y-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
          
          <div className="space-y-2 sm:space-y-3 max-w-2xl">
            <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl tracking-wide text-white uppercase">
              DELIVERED AS BOARD BRIEFINGS &amp; LEADERSHIP INTENSIVES
            </h2>
            <p className="font-sans text-xs sm:text-sm md:text-base text-[#D5CEC2] leading-relaxed">
              Available as half-day board sessions, multi-day executive intensives, or customized enterprise capability programs.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
            <Link href="/contact" className="w-full sm:w-auto block">
              <Button className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-[6px] bg-[#CF5A30] hover:bg-white hover:text-[#121212] text-white px-6 sm:px-8 py-5 sm:py-6 font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer shadow-md min-h-[48px]">
                TALK TO US
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
