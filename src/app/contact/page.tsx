"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Phone, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setErrorMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setErrorMessage("Unable to send message. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col flex-1 bg-[#F5F2EB] text-[#1C1C1C] min-h-screen w-full overflow-x-clip">
      <section className="min-h-[calc(100vh-80px)] flex flex-col justify-center py-8 sm:py-10 md:py-14 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#F5F2EB]">
        <div className="mx-auto max-w-7xl w-full">

          {/* Breadcrumb Header */}
          <div className="flex items-center gap-2 font-sans text-xs sm:text-[13.5px] font-medium text-[#666666] mb-4 sm:mb-6">
            <Link href="/" className="hover:text-[#1C1C1C] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#CF5A30] font-bold">Contact Us</span>
          </div>

          {/* Main 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column: Heading, Subtitle & Info Cards */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">

              {/* Badge */}
              <div className="inline-flex items-center rounded-md border border-[#CF5A30]/40 bg-[#CF5A30]/10 px-3.5 py-1.5 text-xs font-black tracking-widest text-[#CF5A30] uppercase font-sans">
                GET IN TOUCH
              </div>

              {/* Title */}
              <h1 className="font-bebas text-3xl sm:text-4xl md:text-[50px] lg:text-[56px] tracking-wide text-[#1C1C1C] uppercase leading-[1.02]">
                GET IN TOUCH WITH US TODAY!
              </h1>

              {/* Description */}
              <p className="font-sans text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#444444] max-w-lg">
                Whatever you need, whenever you need it, our team is here to help. We are dedicated to supporting your engineering &amp; product capability journeys every step of the way.
              </p>

              {/* Info Cards Grid (MESSAGE US & CALL US) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-1">

                {/* Card 1: MESSAGE US */}
                <div className="group bg-white rounded-2xl p-4 sm:p-5 md:p-6 border border-[#1C1C1C]/10 shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-2.5 sm:space-y-3 cursor-pointer">
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg bg-[#CF5A30]/15 text-[#CF5A30] group-hover:bg-[#CF5A30] group-hover:text-white group-hover:scale-110 group-hover:rotate-6 flex items-center justify-center shrink-0 transition-all duration-300 shadow-2xs">
                      <Mail className="h-4 w-4" />
                    </div>
                    <h3 className="font-bebas text-lg sm:text-xl tracking-wide text-[#1C1C1C] group-hover:text-[#CF5A30] transition-colors duration-300 uppercase">
                      MESSAGE US
                    </h3>
                  </div>

                  <p className="font-sans text-[13px] sm:text-[14px] text-[#555555] leading-relaxed">
                    Use our priority inbox system to message our system advisors.
                  </p>

                  <div className="pt-2 border-t border-[#1C1C1C]/10">
                    <a
                      href="mailto:info@kyureeus.com"
                      className="font-sans text-xs sm:text-sm font-bold text-[#CF5A30] hover:underline transition-all"
                    >
                      info@kyureeus.com
                    </a>
                  </div>
                </div>

                {/* Card 2: CALL US */}
                <div className="group bg-white rounded-2xl p-4 sm:p-5 md:p-6 border border-[#1C1C1C]/10 shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-2.5 sm:space-y-3 cursor-pointer">
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg bg-[#CF5A30]/15 text-[#CF5A30] group-hover:bg-[#CF5A30] group-hover:text-white group-hover:scale-110 group-hover:rotate-6 flex items-center justify-center shrink-0 transition-all duration-300 shadow-2xs">
                      <Phone className="h-4 w-4" />
                    </div>
                    <h3 className="font-bebas text-lg sm:text-xl tracking-wide text-[#1C1C1C] group-hover:text-[#CF5A30] transition-colors duration-300 uppercase">
                      CALL US
                    </h3>
                  </div>

                  <p className="font-sans text-[13px] sm:text-[14px] text-[#555555] leading-relaxed">
                    Let&apos;s talk — nothing better than talking directly to another builder.
                  </p>

                  <div className="pt-2 border-t border-[#1C1C1C]/10">
                    <a
                      href="tel:+919363486258"
                      className="font-sans text-xs sm:text-sm font-bold text-[#CF5A30] hover:underline transition-all"
                    >
                      +91 93634 86258
                    </a>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Column: White Card Form (SEND A MESSAGE) */}
            <div className="lg:col-span-6 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 border border-[#1C1C1C]/10 shadow-lg w-full">

              <div className="space-y-1.5 mb-4 sm:mb-5">
                <h2 className="font-bebas text-2xl sm:text-3xl tracking-wide text-[#1C1C1C] uppercase">
                  SEND A MESSAGE
                </h2>
                <p className="font-sans text-xs sm:text-sm text-[#666666]">
                  Tell us about your organization&apos;s capability gaps or custom cohort needs.
                </p>
              </div>

              {isSubmitted ? (
                <div className="bg-[#CF5A30]/10 border border-[#CF5A30]/30 rounded-2xl p-5 sm:p-6 text-center space-y-3 my-4">
                  <div className="h-10 w-10 rounded-full bg-[#CF5A30] text-white flex items-center justify-center mx-auto shadow-md">
                    <Check className="h-5 w-5 stroke-[3]" />
                  </div>
                  <h3 className="font-bebas text-xl text-[#1C1C1C] uppercase">Message Sent Successfully!</h3>
                  <p className="font-sans text-xs sm:text-sm text-[#555555] max-w-md mx-auto">
                    Thank you for reaching out. A Kyureeus system advisor will review your message and contact you shortly.
                  </p>
                  <Button
                    onClick={() => {
                      setIsSubmitted(false);
                      setErrorMessage("");
                    }}
                    className="rounded-lg bg-[#1C1C1C] hover:bg-[#CF5A30] text-white text-xs font-bold uppercase px-5 py-2.5 cursor-pointer min-h-[44px]"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">

                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">

                    {/* Your Name */}
                    <div className="space-y-1 sm:space-y-1.5">
                      <label className="font-sans text-xs sm:text-sm font-bold text-[#1C1C1C] block">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        disabled={isSubmitting}
                        placeholder="Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-[#1C1C1C]/15 bg-white px-3.5 sm:px-4 py-2.5 sm:py-3 font-sans text-xs sm:text-sm text-[#1C1C1C] placeholder-[#999999] outline-none focus:border-[#CF5A30] focus:ring-1 focus:ring-[#CF5A30] transition-all disabled:opacity-50 min-h-[44px]"
                      />
                    </div>

                    {/* Your Email */}
                    <div className="space-y-1 sm:space-y-1.5">
                      <label className="font-sans text-xs sm:text-sm font-bold text-[#1C1C1C] block">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        disabled={isSubmitting}
                        placeholder="example@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-[#1C1C1C]/15 bg-white px-3.5 sm:px-4 py-2.5 sm:py-3 font-sans text-xs sm:text-sm text-[#1C1C1C] placeholder-[#999999] outline-none focus:border-[#CF5A30] focus:ring-1 focus:ring-[#CF5A30] transition-all disabled:opacity-50 min-h-[44px]"
                      />
                    </div>

                  </div>

                  {/* How Can We Help? */}
                  <div className="space-y-1 sm:space-y-1.5">
                    <label className="font-sans text-xs sm:text-sm font-bold text-[#1C1C1C] block">
                      How Can We Help?
                    </label>
                    <textarea
                      rows={4}
                      required
                      disabled={isSubmitting}
                      placeholder="Describe the team, objectives, or operational outcomes you want to secure..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl border border-[#1C1C1C]/15 bg-white px-3.5 sm:px-4 py-2.5 sm:py-3 font-sans text-xs sm:text-sm text-[#1C1C1C] placeholder-[#999999] outline-none focus:border-[#CF5A30] focus:ring-1 focus:ring-[#CF5A30] transition-all resize-none disabled:opacity-50"
                    />
                  </div>

                  {/* Error Message Feedback */}
                  {errorMessage && (
                    <p className="font-sans text-xs text-red-500 font-bold bg-red-50 border border-red-200 rounded-lg p-2.5">
                      {errorMessage}
                    </p>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group flex items-center justify-center gap-2 rounded-xl bg-[#CF5A30] hover:bg-[#1C1C1C] text-white py-5 text-xs sm:text-sm font-bold tracking-widest uppercase transition-colors duration-300 shadow-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed min-h-[48px]"
                  >
                    {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                    {!isSubmitting && <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
                  </Button>

                </form>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* Dark CTA Banner Section */}
      <section className="min-h-[calc(100vh-80px)] flex flex-col justify-center bg-[#1C1C1E] text-white py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-12 text-center items-center space-y-6 md:space-y-8 border-t border-[#121212]">
        <div className="mx-auto max-w-5xl space-y-3 sm:space-y-4">
          <h2 className="font-bebas text-3xl sm:text-4xl md:text-[50px] lg:text-[56px] tracking-wide text-white uppercase leading-[1.05]">
            STOP HIRING POTENTIAL. BUILD COMPREHENSIVE CAPABILITY.
          </h2>
          <p className="font-sans text-xs sm:text-sm md:text-[16px] text-[#A1A1AA] max-w-3xl mx-auto leading-relaxed">
            Partner with Kyureeus to systematically map corporate engineering design straight to target business metrics. Develop unified cohorts into master architectural builders.
          </p>
        </div>

        <div className="pt-1 w-full sm:w-auto">
          <Link href="/bootcamps" className="w-full sm:w-auto block">
            <Button className="w-full sm:w-auto group flex items-center justify-center gap-2.5 rounded-[6px] bg-[#CF5A30] hover:bg-white text-white hover:text-[#121212] px-6 sm:px-8 py-5 text-xs sm:text-sm font-bold tracking-widest uppercase transition-colors duration-300 shadow-md cursor-pointer font-sans min-h-[48px]">
              EXPLORE BOOTCAMPS
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
