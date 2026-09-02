"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Cpu, 
  ArrowRight, 
  Check, 
  Download, 
  Mail, 
  CheckCircle2, 
  Building2,
  Sparkles
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
    module: "Cloud Foundations",
    topics: "Cloud Models • Regions • Accounts • Services",
    outcome: "Understand cloud platforms and core services",
    category: "Cloud Core"
  },
  {
    number: "02",
    module: "Infrastructure as Code",
    topics: "Terraform • CloudFormation • ARM • Bicep",
    outcome: "Automate and version infrastructure",
    category: "Automation"
  },
  {
    number: "03",
    module: "Containerization",
    topics: "Docker • Images • Layers • Best Practices",
    outcome: "Package applications for portability",
    category: "Containers"
  },
  {
    number: "04",
    module: "CI/CD Pipelines",
    topics: "GitHub Actions • GitLab CI • Jenkins • Spinnaker",
    outcome: "Automate build, test and deployment",
    category: "DevOps & Delivery"
  },
  {
    number: "05",
    module: "Orchestration",
    topics: "Kubernetes • Pods • Services • Helm",
    outcome: "Run and manage containers at scale",
    category: "Kubernetes"
  },
  {
    number: "06",
    module: "Service Mesh",
    topics: "Istio • Linkerd • Traffic Management • Security",
    outcome: "Manage service-to-service communication",
    category: "Networking"
  },
  {
    number: "07",
    module: "Observability",
    topics: "Logs • Metrics • Traces • Dashboards",
    outcome: "Gain visibility into system health and performance",
    category: "Observability"
  },
  {
    number: "08",
    module: "Monitoring & Alerting",
    topics: "Prometheus • Grafana • Alertmanager",
    outcome: "Detect issues early and respond faster",
    category: "Observability"
  },
  {
    number: "09",
    module: "Scaling Strategies",
    topics: "Auto Scaling • Load Balancing • Vertical & Horizontal Scaling",
    outcome: "Handle growth with resilience and efficiency",
    category: "Scale & Performance"
  },
  {
    number: "10",
    module: "Resilience & High Availability",
    topics: "Multi-AZ • Backups • Disaster Recovery",
    outcome: "Design systems that withstand failures",
    category: "Reliability"
  },
  {
    number: "11",
    module: "Cloud Security",
    topics: "IAM • KMS • Secrets • Network Security",
    outcome: "Secure identities, data and infrastructure",
    category: "Security"
  },
  {
    number: "12",
    module: "Cost Optimization",
    topics: "Rightsizing • Spot Instances • Cost Monitoring",
    outcome: "Build cost-efficient, sustainable platforms",
    category: "FinOps"
  },
  {
    number: "13",
    module: "Platform Engineering",
    topics: "Golden Paths • Developer Experience • Self-Service",
    outcome: "Enable teams with scalable internal platforms",
    category: "Platform Engineering"
  },
  {
    number: "14",
    module: "Real-World Deployment",
    topics: "Blue/Green • Canary • Rollbacks • Feature Flags",
    outcome: "Deploy confidently with minimal risk",
    category: "Deployment"
  },
  {
    number: "15",
    module: "Platform Operations",
    topics: "Runbooks • Incident Mgmt • SLOs • SLAs",
    outcome: "Operate with reliability and accountability",
    category: "Operations"
  },
  {
    number: "16",
    module: "Capstone Project",
    topics: "Design • Build • Deploy • Observe • Optimize",
    outcome: "Build and operate a production-grade platform",
    category: "Capstone"
  }
];

export default function AIEngineeringBootcampPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    interest: "AI Engineering Bootcamp",
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
          message: formData.message || "Enquiry for AI Engineering Bootcamp Curriculum Details",
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
          interest: "AI Engineering Bootcamp",
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
            <span className="text-[#CF5A30] font-bold">AI Engineering</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Headlines & Overview */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-md border border-[#CF5A30]/40 bg-[#CF5A30]/10 px-3.5 py-1.5 text-xs font-black tracking-widest text-[#CF5A30] uppercase font-sans">
                <Cpu className="w-3.5 h-3.5" />
                ENTERPRISE BOOTCAMP
              </div>

              {/* Title */}
              <h1 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.02] tracking-wide uppercase text-[#121212]">
                AI ENGINEERING <br />
                <span className="text-[#CF5A30]">BOOTCAMP.</span>
              </h1>

              {/* Tagline Paragraphs */}
              <p className="font-sans text-base sm:text-lg md:text-[20px] leading-relaxed text-[#121212] font-semibold">
                Architect, scale, and operationalize high-throughput AI &amp; cloud systems for modern enterprises.
              </p>

              <p className="font-sans text-[14.5px] sm:text-base leading-relaxed text-[#555555] max-w-2xl">
                Modern AI requires robust platform infrastructure, Kubernetes orchestration, automated CI/CD pipelines, and high-availability telemetry. This 16-module engineering program equips builders to design resilient infrastructure as code, service mesh architectures, and production-grade self-service platforms.
              </p>

              {/* Highlights Pill Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {[
                  { label: "16 Modules", sub: "Production engineering" },
                  { label: "IaC & Terraform", sub: "Automated infra" },
                  { label: "Kubernetes & Mesh", sub: "Scale & orchestration" },
                  { label: "Full Capstone", sub: "End-to-end platform" }
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
                    <Download className="h-4 w-4" />
                    ENQUIRE &amp; GET SYLLABUS
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
                    <Cpu className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="font-bebas text-xl text-[#121212] uppercase tracking-wide">WHAT YOU BECOME</h2>
                    <p className="font-sans text-xs text-[#666666]">Production-grade Platform &amp; AI Systems Engineer</p>
                  </div>
                </div>

                <div className="space-y-3 font-sans text-xs sm:text-[13.5px] text-[#333333]">
                  {[
                    "Architect multi-cloud infrastructures with Terraform & IaC",
                    "Package & containerize microservices with production Docker patterns",
                    "Build automated CI/CD golden paths with GitHub Actions & GitOps",
                    "Deploy & scale multi-cluster Kubernetes with Helm & Istio mesh",
                    "Implement full-stack observability with Prometheus & Grafana",
                    "Design zero-downtime blue/green & canary deployment pipelines"
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
                    Production architecture sandboxes, real Kubernetes clusters, automated GitOps pipelines, and direct mentorship from enterprise systems architects.
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
          <div className="flex flex-col items-start space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#CF5A30] uppercase font-sans">
              <span>01</span>
              <span>•</span>
              <span>COMPLETE SYLLABUS &amp; LEARNING ROADMAP</span>
            </div>
            
            <h2 className="font-bebas text-3xl sm:text-4xl md:text-[46px] tracking-wide text-[#121212] uppercase leading-[1.05]">
              16 MODULES. FROM CLOUD FOUNDATIONS TO PRODUCTION PLATFORMS.
            </h2>
            
            <p className="font-sans text-[14.5px] sm:text-base leading-relaxed text-[#555555]">
              Explore the exact progression of technologies, architecture patterns, and actionable capabilities engineered in this bootcamp.
            </p>
          </div>

          {/* Desktop & Tablet Table */}
          <div className="hidden md:block rounded-2xl border-2 border-[#121212]/15 bg-[#FAF8F3] shadow-md overflow-hidden">
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
                  {MODULES.map((item) => (
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
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Stacked Card View */}
          <div className="grid grid-cols-1 gap-4 md:hidden">
            {MODULES.map((item) => (
              <div 
                key={item.number}
                className="bg-[#FAF8F3] rounded-xl border border-[#121212]/15 p-4 space-y-3 shadow-2xs"
              >
                <div className="flex items-center justify-between border-b border-[#121212]/10 pb-2.5">
                  <span className="font-bebas text-2xl text-[#CF5A30]">{item.number}</span>
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
                WANT TO SEE THE FULL DETAILS &amp; ENQUIRE?
              </h2>

              <p className="font-sans text-[14.5px] sm:text-base leading-relaxed text-[#555555]">
                Fill out the enquiry form to receive the complete AI &amp; Platform Engineering Bootcamp syllabus, cloud lab architecture details, cohort schedules, and corporate enrollment pricing.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-white border border-[#121212]/10 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#121212] uppercase tracking-wider font-sans">
                    <Building2 className="w-4 h-4 text-[#CF5A30]" />
                    For Enterprise Engineering Teams
                  </div>
                  <p className="font-sans text-xs text-[#555555] leading-relaxed">
                    Custom sandboxes, dedicated cloud infrastructure, and organizational capability mapping tailored to your company&apos;s tech stack.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#121212]/10 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#121212] uppercase tracking-wider font-sans">
                    <Mail className="w-4 h-4 text-[#CF5A30]" />
                    Direct Academic &amp; Enterprise Support
                  </div>
                  <p className="font-sans text-xs text-[#555555] leading-relaxed">
                    Contact us at <a href="mailto:info@kyureeus.com" className="font-bold text-[#CF5A30] underline">info@kyureeus.com</a> for private cohort reservations.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: Enquiry Form Card */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border-2 border-[#121212]/15 bg-white p-6 sm:p-8 md:p-10 shadow-xl">
                
                {isSubmitted ? (
                  <div className="py-8 text-center space-y-4">
                    <div className="h-16 w-16 bg-[#CF5A30]/10 text-[#CF5A30] rounded-full flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="font-bebas text-2xl sm:text-3xl text-[#121212] tracking-wide uppercase">
                      THANK YOU FOR YOUR ENQUIRY!
                    </h3>
                    <p className="font-sans text-sm text-[#555555] max-w-md mx-auto leading-relaxed">
                      We have received your request for the <strong>AI Engineering Bootcamp</strong>. Our academic team will email you the full syllabus and reach out shortly.
                    </p>
                    <Button 
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4 rounded-md bg-[#121212] text-white hover:bg-[#CF5A30] text-xs font-bold uppercase tracking-widest px-6 py-3 cursor-pointer"
                    >
                      SUBMIT ANOTHER INQUIRY
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    <div className="space-y-1 mb-2">
                      <h3 className="font-bebas text-2xl text-[#121212] tracking-wide uppercase">
                        ENQUIRE FOR FULL BOOTCAMP DETAILS
                      </h3>
                      <p className="font-sans text-xs text-[#666666]">
                        Please enter your details below. We will send the syllabus immediately.
                      </p>
                    </div>

                    {errorMessage && (
                      <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                        {errorMessage}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label className="font-sans text-xs font-bold tracking-wider text-[#121212] uppercase">
                          Full Name <span className="text-[#CF5A30]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Jordan Lee"
                          className="w-full px-4 py-3 rounded-lg border border-[#121212]/20 bg-[#FAF8F3] text-[#121212] font-sans text-sm focus:outline-none focus:border-[#CF5A30] transition-colors"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label className="font-sans text-xs font-bold tracking-wider text-[#121212] uppercase">
                          Work / Personal Email <span className="text-[#CF5A30]">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. jordan@company.com"
                          className="w-full px-4 py-3 rounded-lg border border-[#121212]/20 bg-[#FAF8F3] text-[#121212] font-sans text-sm focus:outline-none focus:border-[#CF5A30] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone */}
                      <div className="space-y-1.5">
                        <label className="font-sans text-xs font-bold tracking-wider text-[#121212] uppercase">
                          Phone / WhatsApp Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-3 rounded-lg border border-[#121212]/20 bg-[#FAF8F3] text-[#121212] font-sans text-sm focus:outline-none focus:border-[#CF5A30] transition-colors"
                        />
                      </div>

                      {/* Organization / Role */}
                      <div className="space-y-1.5">
                        <label className="font-sans text-xs font-bold tracking-wider text-[#121212] uppercase">
                          Organization / Role
                        </label>
                        <input
                          type="text"
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          placeholder="e.g. Senior Software Engineer / DevOps"
                          className="w-full px-4 py-3 rounded-lg border border-[#121212]/20 bg-[#FAF8F3] text-[#121212] font-sans text-sm focus:outline-none focus:border-[#CF5A30] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Program Selected */}
                    <div className="space-y-1.5">
                      <label className="font-sans text-xs font-bold tracking-wider text-[#121212] uppercase">
                        Selected Program
                      </label>
                      <input
                        type="text"
                        readOnly
                        value={formData.interest}
                        className="w-full px-4 py-3 rounded-lg border border-[#121212]/20 bg-gray-100 text-[#555555] font-sans text-sm cursor-not-allowed font-semibold"
                      />
                    </div>

                    {/* Message / Requirements */}
                    <div className="space-y-1.5">
                      <label className="font-sans text-xs font-bold tracking-wider text-[#121212] uppercase">
                        Questions or Learning Goals (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your background, cloud architecture experience, or enterprise team needs..."
                        className="w-full px-4 py-3 rounded-lg border border-[#121212]/20 bg-[#FAF8F3] text-[#121212] font-sans text-sm focus:outline-none focus:border-[#CF5A30] transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full group flex items-center justify-center gap-2 rounded-[6px] bg-[#CF5A30] hover:bg-[#121212] text-[#F5F2EB] py-6 text-xs sm:text-sm font-bold tracking-widest uppercase transition-colors duration-300 shadow-md cursor-pointer min-h-[50px]"
                      >
                        {isSubmitting ? (
                          <span>SUBMITTING ENQUIRY...</span>
                        ) : (
                          <>
                            SUBMIT ENQUIRY &amp; GET FULL SYLLABUS
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </>
                        )}
                      </Button>
                    </div>

                    <p className="font-sans text-[11px] text-[#777777] text-center pt-1">
                      We respect your privacy. No spam. Only curriculum and cohort information.
                    </p>

                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
