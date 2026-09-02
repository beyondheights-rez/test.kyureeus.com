"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Cloud, 
  ArrowRight, 
  Check, 
  CheckCircle2, 
  Building2,
  Sparkles,
  Lock,
  Mail,
  PhoneCall
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ModuleData {
  number: string;
  module: string;
  topics: string;
  outcome: string;
  category?: string;
}

const MODULES: ModuleData[] = [
  {
    number: "01",
    module: "Build the Foundation",
    topics: "Programming • Python • Linux • Data Structures • Algorithms",
    outcome: "Code that solves problems",
    category: "Foundations"
  },
  {
    number: "02",
    module: "Data Engineering",
    topics: "SQL • Data Modeling • ETL • Data Pipelines",
    outcome: "Clean, reliable data systems",
    category: "Data Systems"
  },
  {
    number: "03",
    module: "Mathematics for AI",
    topics: "Linear Algebra • Calculus • Statistics • Probability",
    outcome: "Mathematical intuition",
    category: "Math & Analytics"
  },
  {
    number: "04",
    module: "Machine Learning",
    topics: "Supervised • Unsupervised • Model Training",
    outcome: "Trained ML models",
    category: "Machine Learning"
  },
  {
    number: "05",
    module: "Deep Learning",
    topics: "Neural Networks • Training • Optimization",
    outcome: "Deep learning models",
    category: "Deep Learning"
  },
  {
    number: "06",
    module: "NLP Engineering",
    topics: "Text Processing • Embeddings • Transformers",
    outcome: "Language understanding",
    category: "NLP & Transformers"
  },
  {
    number: "07",
    module: "Generative AI",
    topics: "LLMs • Prompt Engineering • RAG • Fine-tuning",
    outcome: "Generative AI systems",
    category: "Generative AI"
  },
  {
    number: "08",
    module: "AI Agents & Automation",
    topics: "Agents • Tools • Memory • Planning",
    outcome: "Autonomous AI agents",
    category: "Autonomous Agents"
  },
  {
    number: "09",
    module: "MLOps & Infrastructure",
    topics: "Versioning • CI/CD • Deployment • Monitoring",
    outcome: "Production-ready ML systems",
    category: "MLOps & Infra"
  },
  {
    number: "10",
    module: "Evaluation & Observability",
    topics: "Metrics • Testing • Bias • Explainability",
    outcome: "Trustworthy AI systems",
    category: "Observability"
  },
  {
    number: "11",
    module: "AI System Design",
    topics: "Architecture • Patterns • Scalability",
    outcome: "Scalable intelligent systems",
    category: "System Design"
  },
  {
    number: "12",
    module: "Multimodal AI",
    topics: "Vision • Audio • Video • Multimodal Models",
    outcome: "Multimodal understanding",
    category: "Multimodal"
  },
  {
    number: "13",
    module: "AI Product Engineering",
    topics: "Product Thinking • APIs • Integrations",
    outcome: "Real-world AI products",
    category: "Product Engineering"
  },
  {
    number: "14",
    module: "Reliability & Safety",
    topics: "Guardrails • Security • Privacy • Compliance",
    outcome: "Responsible AI systems",
    category: "Safety & Governance"
  },
  {
    number: "15",
    module: "Industry Projects",
    topics: "End-to-End AI Solutions • Live Problems",
    outcome: "Professional experience",
    category: "Applied Industry"
  },
  {
    number: "16",
    module: "AI Innovation",
    topics: "Research • Experimentation • Entrepreneurship",
    outcome: "Original AI innovation",
    category: "Innovation & Research"
  }
];

export default function CloudPlatformBootcampPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    interest: "Cloud & Platform Engineering Bootcamp",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "1acd2b42-d699-4052-a572-8c04887fae03",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          organization: formData.organization,
          program: formData.interest,
          message: formData.message || "Enquiry for Cloud & Platform Engineering Bootcamp details",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          organization: "",
          interest: "Cloud & Platform Engineering Bootcamp",
          message: ""
        });
      } else {
        setErrorMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setErrorMessage("Unable to submit enquiry. Please check your network connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col flex-1 bg-[#F5F2EB] text-[#121212] min-h-screen w-full overflow-x-clip">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-20 py-10 sm:py-14 md:py-16 bg-[#F5F2EB] text-[#121212] overflow-hidden border-b border-[#121212]/10">
        <div className="mx-auto max-w-7xl w-full">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 font-sans text-xs sm:text-[13px] font-medium text-[#666666] mb-6">
            <Link href="/" className="hover:text-[#121212] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/bootcamps" className="hover:text-[#121212] transition-colors">
              Bootcamps
            </Link>
            <span>/</span>
            <span className="text-[#CF5A30] font-bold">Cloud &amp; Platform Engineering</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Headlines & Overview */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-md border border-[#CF5A30]/40 bg-[#CF5A30]/10 px-3.5 py-1.5 text-xs font-black tracking-widest text-[#CF5A30] uppercase font-sans">
                <Cloud className="w-3.5 h-3.5" />
                ENTERPRISE BOOTCAMP
              </div>

              {/* Title */}
              <h1 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.02] tracking-wide uppercase text-[#121212]">
                CLOUD &amp; PLATFORM <br />
                <span className="text-[#CF5A30]">ENGINEERING BOOTCAMP.</span>
              </h1>

              {/* Tagline Paragraphs */}
              <p className="font-sans text-base sm:text-lg md:text-[20px] leading-relaxed text-[#121212] font-semibold">
                Design, build, and deploy production-grade intelligent systems and scalable platforms.
              </p>

              <p className="font-sans text-[14.5px] sm:text-base leading-relaxed text-[#555555] max-w-2xl">
                Go beyond introductory tutorials. Learn to build complete, reliable, production-ready AI systems and scalable cloud platforms from the ground up through 16 hands-on engineering modules.
              </p>

              {/* Highlights Pill Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {[
                  { label: "16 Modules", sub: "5 Preview / 11 Locked" },
                  { label: "GenAI & Agents", sub: "Autonomous systems" },
                  { label: "MLOps & Scale", sub: "Production deployment" },
                  { label: "Live Solutions", sub: "Industry projects" }
                ].map((stat, i) => (
                  <div key={i} className="p-3 bg-white/80 rounded-lg border border-[#121212]/10 shadow-2xs">
                    <div className="font-bebas text-lg sm:text-xl text-[#121212] tracking-wide">{stat.label}</div>
                    <div className="font-sans text-[11px] text-[#666666] leading-tight">{stat.sub}</div>
                  </div>
                ))}
              </div>

              {/* CTA Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
                <Link href="#curriculum" className="block">
                  <Button className="w-full sm:w-auto group flex items-center justify-center gap-2 rounded-[6px] bg-[#CF5A30] hover:bg-[#121212] text-[#F5F2EB] px-6 py-5 text-xs sm:text-sm font-bold tracking-widest uppercase transition-colors duration-300 shadow-md cursor-pointer min-h-[48px]">
                    VIEW CURRICULUM
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>

                <Link href="#enquire" className="block">
                  <Button variant="outline" className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-[6px] border-2 border-[#121212] bg-transparent hover:bg-[#121212] hover:text-[#F5F2EB] text-[#121212] px-6 py-5 text-xs sm:text-sm font-bold tracking-widest uppercase transition-colors duration-300 cursor-pointer min-h-[48px]">
                    <Mail className="h-4 w-4" />
                    ENQUIRE FOR FULL DETAILS
                  </Button>
                </Link>
              </div>

            </div>

            {/* Right Column: Visual Feature Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md bg-white rounded-2xl border-2 border-[#121212]/15 p-6 sm:p-8 shadow-xl space-y-6 relative overflow-hidden">
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#CF5A30]/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-[#CF5A30] text-white flex items-center justify-center shrink-0 shadow-md">
                    <Cloud className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="font-bebas text-xl text-[#121212] uppercase tracking-wide">WHAT YOU BECOME</h2>
                    <p className="font-sans text-xs text-[#666666]">Intelligent Systems &amp; Platform Engineer</p>
                  </div>
                </div>

                <div className="space-y-3 font-sans text-xs sm:text-[13.5px] text-[#333333]">
                  {[
                    "Build data ingestion pipelines, feature stores, and ETL systems",
                    "Train and fine-tune deep neural networks and custom transformer models",
                    "Deploy LLMs with retrieval-augmented generation (RAG) architectures",
                    "Design autonomous multi-agent systems with tool use and memory",
                    "Automate model lifecycle with CI/CD and production MLOps pipelines",
                    "Implement guardrails, observability, and compliance for responsible AI"
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="h-4 w-4 rounded-full bg-[#CF5A30]/15 text-[#CF5A30] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-3 w-3" />
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-[#FAF8F3] border border-[#121212]/10 space-y-1.5">
                  <div className="font-bebas text-sm uppercase text-[#CF5A30] tracking-wider">COHORT FORMAT</div>
                  <p className="font-sans text-xs text-[#555555] leading-relaxed">
                    Interactive engineering labs, live architecture reviews, production deployments, and direct mentorship from platform architects.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. CURRICULUM MODULES SECTION */}
      <section id="curriculum" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-white border-b border-[#121212]/10 scroll-mt-20">
        <div className="mx-auto max-w-7xl w-full space-y-8 sm:space-y-10">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col items-start space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#CF5A30] uppercase font-sans">
                <span>01</span>
                <span>•</span>
                <span>COMPLETE SYLLABUS &amp; LEARNING ROADMAP</span>
              </div>
              
              <h2 className="font-bebas text-3xl sm:text-4xl md:text-[46px] tracking-wide text-[#121212] uppercase leading-[1.05]">
                16 MODULES. FROM FOUNDATIONS TO APPLIED INNOVATION.
              </h2>
              
              <p className="font-sans text-[14.5px] sm:text-base leading-relaxed text-[#555555]">
                First 5 foundational modules are shown below. For complete curriculum &amp; advanced modules (06–16), fill out the form below and our team will contact you.
              </p>
            </div>

            <div className="shrink-0">
              <Link href="#enquire">
                <Button 
                  className="bg-[#CF5A30] hover:bg-[#121212] text-white flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-5 py-4 shadow-sm"
                >
                  <Mail className="w-4 h-4" />
                  FILL FORM FOR FULL DETAILS
                </Button>
              </Link>
            </div>
          </div>

          {/* Desktop & Tablet Table */}
          <div className="hidden md:block rounded-2xl border-2 border-[#121212]/15 bg-[#FAF8F3] shadow-md overflow-hidden relative">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-[#121212]/15 bg-[#121212] text-[#F5F2EB]">
                    <th className="py-4 px-5 font-bebas text-lg tracking-wider w-16 text-center">#</th>
                    <th className="py-4 px-6 font-bebas text-lg tracking-wider w-1/4">MODULE</th>
                    <th className="py-4 px-6 font-bebas text-lg tracking-wider w-2/5">TOPICS / COVERAGE</th>
                    <th className="py-4 px-6 font-bebas text-lg tracking-wider">ACTIONABLE OUTCOME</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#121212]/10 font-sans text-sm">
                  {/* First 5 Visible Modules */}
                  {MODULES.slice(0, 5).map((item) => (
                    <tr 
                      key={item.number}
                      className="hover:bg-[#CF5A30]/5 transition-colors duration-150 group"
                    >
                      <td className="py-4 px-5 text-center font-bebas text-base text-[#CF5A30] font-bold">
                        {item.number}
                      </td>
                      <td className="py-4 px-6">
                        <div className="font-bold text-[#121212] group-hover:text-[#CF5A30] transition-colors">
                          {item.module}
                        </div>
                        {item.category && (
                          <span className="inline-block mt-1 text-[11px] font-bold uppercase tracking-wider text-[#777777] bg-black/5 px-2 py-0.5 rounded">
                            {item.category}
                          </span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-[#444444] font-medium leading-relaxed">
                        {item.topics}
                      </td>
                      <td className="py-4 px-6 text-[#121212] font-semibold">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#CF5A30] shrink-0" />
                          <span>{item.outcome}</span>
                        </div>
                      </td>
                    </tr>
                  ))}

                  {/* Modules 06-16 Completely Blurred */}
                  {MODULES.slice(5).map((item) => (
                    <tr 
                      key={item.number}
                      className="select-none pointer-events-none bg-black/[0.01]"
                    >
                      <td className="py-4 px-5 text-center font-bebas text-base text-[#CF5A30]/40 font-bold filter blur-[4px]">
                        {item.number}
                      </td>
                      <td className="py-4 px-6 filter blur-[8px] opacity-20">
                        <div className="font-bold text-[#121212]">
                          ██████████████████
                        </div>
                        <span className="inline-block mt-1 text-[11px] bg-black/5 px-2 py-0.5 rounded">
                          ████████
                        </span>
                      </td>
                      <td className="py-4 px-6 filter blur-[8px] opacity-20">
                        <span className="text-[#444444] font-medium leading-relaxed">
                          ██████████████ • ████████████ • ██████████████ • ████████████
                        </span>
                      </td>
                      <td className="py-4 px-6 filter blur-[8px] opacity-20">
                        <div className="flex items-center gap-2 text-[#121212]">
                          <span>██████████████████████████</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Stacked Card View */}
          <div className="grid grid-cols-1 gap-4 md:hidden">
            {/* First 5 Modules */}
            {MODULES.slice(0, 5).map((item) => (
              <div 
                key={item.number}
                className="bg-[#FAF8F3] rounded-xl border border-[#121212]/15 p-4 space-y-3 shadow-2xs"
              >
                <div className="flex items-center justify-between border-b border-[#121212]/10 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="font-bebas text-2xl text-[#CF5A30]">{item.number}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-green-700 bg-green-100 px-2 py-0.5 rounded">
                      Open Preview
                    </span>
                  </div>
                  {item.category && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#555555] bg-black/5 px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  <div className="font-bebas text-lg text-[#121212] uppercase tracking-wide">{item.module}</div>
                  <p className="font-sans text-xs text-[#555555] leading-relaxed">{item.topics}</p>
                </div>

                <div className="pt-1 border-t border-[#121212]/10 flex items-start gap-2 text-xs font-semibold text-[#121212]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#CF5A30] shrink-0 mt-0.5" />
                  <span>{item.outcome}</span>
                </div>
              </div>
            ))}

            {/* Modules 06-16 Blurred Mobile Placeholder */}
            <div className="bg-[#F3EFE8] rounded-xl border-2 border-dashed border-[#CF5A30]/40 p-5 space-y-3 select-none">
              <div className="flex items-center gap-2 filter blur-[6px] opacity-25">
                <span className="font-bebas text-2xl text-[#CF5A30]">06</span>
                <span className="text-[10px] uppercase font-bold">████████████</span>
              </div>
              <div className="space-y-1 filter blur-[8px] opacity-25">
                <div className="font-bebas text-lg text-[#121212]">████████████████████</div>
                <p className="text-xs text-[#555555]">██████████████ • ████████████ • ████████████</p>
              </div>
            </div>
          </div>

          {/* Locked Callout Banner */}
          <div className="rounded-2xl border-2 border-[#CF5A30] bg-[#1C1C1E] text-[#F5F2EB] p-6 sm:p-8 md:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CF5A30]/20 text-[#CF5A30] text-xs font-bold uppercase tracking-widest">
                <Lock className="w-3.5 h-3.5" /> MODULES 06–16 ARE LOCKED
              </div>
              <h3 className="font-bebas text-2xl sm:text-3xl md:text-4xl text-white tracking-wide">
                FOR COMPLETE CURRICULUM &amp; MODULE DETAILS, FILL OUT THE FORM
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#A1A1AA] max-w-xl">
                Fill out the quick enquiry form below. Our admissions and academic advising team will contact you as soon as possible with the full curriculum details.
              </p>
            </div>
            <a href="#enquire" className="shrink-0 w-full md:w-auto">
              <Button className="w-full md:w-auto flex items-center justify-center gap-2 rounded-[6px] bg-[#CF5A30] hover:bg-white text-white hover:text-[#121212] px-6 py-5 text-xs sm:text-sm font-bold tracking-widest uppercase transition-colors duration-300 shadow-md">
                <Mail className="w-4 h-4" />
                FILL FORM FOR DETAILS
              </Button>
            </a>
          </div>

        </div>
      </section>

      {/* 3. ENQUIRY & FULL DETAILS FORM SECTION */}
      <section id="enquire" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#F5F2EB] scroll-mt-20">
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Callout & Info */}
            <div className="lg:col-span-5 space-y-5">
              
              <div className="inline-flex items-center gap-2 rounded-md border border-[#CF5A30]/40 bg-[#CF5A30]/10 px-3.5 py-1.5 text-xs font-black tracking-widest text-[#CF5A30] uppercase font-sans">
                <Sparkles className="w-3.5 h-3.5" />
                GET COMPLETE DETAILS
              </div>

              <h2 className="font-bebas text-3xl sm:text-4xl md:text-[46px] leading-[1.05] tracking-wide uppercase text-[#121212]">
                REQUEST COMPLETE CURRICULUM &amp; ADMISSION DETAILS
              </h2>

              <p className="font-sans text-[14.5px] sm:text-base leading-relaxed text-[#555555]">
                Submit your information to connect with our academic admissions team. We will contact you as soon as possible to provide the full 16-module curriculum, intelligent architecture lab guides, and corporate cohort schedules.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-white border border-[#121212]/10 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#121212] uppercase tracking-wider font-sans">
                    <PhoneCall className="w-4 h-4 text-[#CF5A30]" />
                    Direct Team Contact
                  </div>
                  <p className="font-sans text-xs text-[#666666] leading-relaxed">
                    Our team will reach out directly via email and phone to walk you through the track progression and answers any questions.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#121212]/10 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#121212] uppercase tracking-wider font-sans">
                    <Building2 className="w-4 h-4 text-[#CF5A30]" />
                    For Enterprise Engineering Teams
                  </div>
                  <p className="font-sans text-xs text-[#666666] leading-relaxed">
                    Custom cohort tracks for engineering teams moving into scalable AI architectures, model serving, and distributed systems.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl border-2 border-[#121212]/15 p-6 sm:p-8 md:p-10 shadow-xl space-y-6">
                
                <div className="border-b border-[#121212]/10 pb-4">
                  <h3 className="font-bebas text-2xl sm:text-3xl text-[#121212] uppercase tracking-wide">
                    CLOUD &amp; PLATFORM BOOTCAMP ENQUIRY
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#666666] mt-1">
                    Fill out the form below and our team will contact you as soon as possible.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="py-10 text-center space-y-5">
                    <div className="mx-auto w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-bebas text-2xl sm:text-3xl text-[#121212] uppercase tracking-wide">
                        Enquiry Received Successfully!
                      </h4>
                      <p className="font-sans text-sm text-[#555555] max-w-md mx-auto leading-relaxed">
                        Thank you for your interest in the Cloud &amp; Platform Engineering Bootcamp. <strong>Our admissions team will contact you as soon as possible</strong> with the complete syllabus, admission guidelines, and cohort schedule.
                      </p>
                    </div>

                    <Button 
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="border-[#121212] text-[#121212] text-xs font-bold uppercase tracking-wider px-6 py-5 cursor-pointer"
                    >
                      Submit Another Enquiry
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 font-sans text-sm">
                    {errorMessage && (
                      <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg">
                        {errorMessage}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-[#333333]">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Alex Morgan"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-[#121212]/20 focus:border-[#CF5A30] focus:ring-1 focus:ring-[#CF5A30] outline-none transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-[#333333]">
                          Work / Personal Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@example.com"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-[#121212]/20 focus:border-[#CF5A30] focus:ring-1 focus:ring-[#CF5A30] outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-[#333333]">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-[#121212]/20 focus:border-[#CF5A30] focus:ring-1 focus:ring-[#CF5A30] outline-none transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-[#333333]">
                          Company / University
                        </label>
                        <input
                          type="text"
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          placeholder="e.g. TechCorp / Platform Team"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-[#121212]/20 focus:border-[#CF5A30] focus:ring-1 focus:ring-[#CF5A30] outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#333333]">
                        Specific Goals or Background (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your background (e.g. software engineer, data scientist, platform architect) and what you aim to build..."
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#121212]/20 focus:border-[#CF5A30] focus:ring-1 focus:ring-[#CF5A30] outline-none transition-colors resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full group flex items-center justify-center gap-2 rounded-[6px] bg-[#CF5A30] hover:bg-[#121212] text-[#F5F2EB] py-6 text-xs sm:text-sm font-bold tracking-widest uppercase transition-colors duration-300 shadow-md cursor-pointer mt-4"
                    >
                      {isSubmitting ? (
                        <span>SUBMITTING ENQUIRY...</span>
                      ) : (
                        <>
                          <Mail className="h-4 w-4" />
                          <span>SUBMIT ENQUIRY FOR FULL DETAILS</span>
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </Button>

                    <p className="text-[11px] text-center text-[#777777] pt-2">
                      🔒 We respect your privacy. Our team will contact you as soon as possible.
                    </p>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. BOTTOM NAVIGATION CTA */}
      <section className="bg-[#1C1C1E] text-[#F5F2EB] py-12 sm:py-16 px-4 sm:px-6 md:px-12 text-center border-t border-[#121212]">
        <div className="mx-auto max-w-3xl space-y-4">
          <div className="text-xs font-bold tracking-widest text-[#CF5A30] uppercase">
            EXPLORE ALL TRACKS
          </div>
          <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl tracking-wide uppercase text-white">
            COMPARE WITH OTHER CAPABILITY TRACKS
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#A1A1AA] max-w-xl mx-auto">
            Discover our full portfolio across Robotics, Cyber Security, and AI Engineering Architectures.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <Link href="/bootcamps/robotics-engineering">
              <Button variant="outline" className="border-white/20 bg-white/5 hover:bg-white text-white hover:text-[#121212] text-xs font-bold uppercase tracking-wider">
                ROBOTICS ENGINEERING
              </Button>
            </Link>
            <Link href="/bootcamps/cyber-security">
              <Button variant="outline" className="border-white/20 bg-white/5 hover:bg-white text-white hover:text-[#121212] text-xs font-bold uppercase tracking-wider">
                CYBER SECURITY
              </Button>
            </Link>
            <Link href="/bootcamps/ai-engineering">
              <Button variant="outline" className="border-white/20 bg-white/5 hover:bg-white text-white hover:text-[#121212] text-xs font-bold uppercase tracking-wider">
                AI ENGINEERING
              </Button>
            </Link>
            <Link href="/bootcamps">
              <Button className="bg-[#CF5A30] hover:bg-white hover:text-[#121212] text-white text-xs font-bold uppercase tracking-wider">
                ALL BOOTCAMPS
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
