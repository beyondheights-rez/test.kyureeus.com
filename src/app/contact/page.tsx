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
    } catch (error) {
      setErrorMessage("Unable to send message. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col flex-1 bg-[#F5F2EB] text-[#1C1C1C] min-h-screen">
      <section className="py-12 md:py-20 px-6 md:px-12 lg:px-20 bg-[#F5F2EB]">
        <div className="mx-auto max-w-7xl w-full">

          {/* Breadcrumb Header */}
          <div className="flex items-center gap-2 font-sans text-xs font-medium text-[#666666] mb-8">
            <Link href="/" className="hover:text-[#1C1C1C] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#CF5A30] font-bold">Contact Us</span>
          </div>

          {/* Main 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left Column: Heading, Subtitle & Info Cards */}
            <div className="lg:col-span-6 space-y-8">

              {/* Badge */}
              <div className="inline-flex items-center rounded-md border border-[#CF5A30]/40 bg-[#CF5A30]/10 px-3 py-1 text-[11px] font-bold tracking-widest text-[#CF5A30] uppercase font-sans">
                GET IN TOUCH
              </div>

              {/* Title */}
              <h1 className="font-bebas text-4xl sm:text-5xl md:text-[60px] lg:text-[66px] tracking-wide text-[#1C1C1C] uppercase leading-[1.02]">
                GET IN TOUCH WITH US TODAY!
              </h1>

              {/* Description */}
              <p className="font-sans text-sm sm:text-base leading-relaxed text-[#555555] max-w-lg">
                Whatever you need, whenever you need it, our team is here to help. We are dedicated to supporting your engineering &amp; product capability journeys every step of the way.
              </p>

              {/* Info Cards Grid (MESSAGE US & CALL US) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">

                {/* Card 1: MESSAGE US */}
                <div className="group bg-white rounded-2xl p-6 border border-[#1C1C1C]/10 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 space-y-4 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-[#CF5A30]/15 text-[#CF5A30] group-hover:bg-[#CF5A30] group-hover:text-white group-hover:scale-110 group-hover:rotate-6 flex items-center justify-center shrink-0 transition-all duration-300 shadow-xs">
                      <Mail className="h-4 w-4" />
                    </div>
                    <h3 className="font-bebas text-xl tracking-wide text-[#1C1C1C] group-hover:text-[#CF5A30] transition-colors duration-300 uppercase">
                      MESSAGE US
                    </h3>
                  </div>

                  <p className="font-sans text-xs text-[#666666] leading-relaxed">
                    Use our priority inbox system to message our system advisors.
                  </p>

                  <div className="pt-2 border-t border-[#1C1C1C]/10">
                    <a
                      href="mailto:info@kyureeus.com"
                      className="font-sans text-xs font-bold text-[#CF5A30] hover:underline transition-all"
                    >
                      info@kyureeus.com
                    </a>
                  </div>
                </div>

                {/* Card 2: CALL US */}
                <div className="group bg-white rounded-2xl p-6 border border-[#1C1C1C]/10 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 space-y-4 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-[#CF5A30]/15 text-[#CF5A30] group-hover:bg-[#CF5A30] group-hover:text-white group-hover:scale-110 group-hover:rotate-6 flex items-center justify-center shrink-0 transition-all duration-300 shadow-xs">
                      <Phone className="h-4 w-4" />
                    </div>
                    <h3 className="font-bebas text-xl tracking-wide text-[#1C1C1C] group-hover:text-[#CF5A30] transition-colors duration-300 uppercase">
                      CALL US
                    </h3>
                  </div>

                  <p className="font-sans text-xs text-[#666666] leading-relaxed">
                    Let&apos;s talk — nothing better than talking directly to another builder.
                  </p>

                  <div className="pt-2 border-t border-[#1C1C1C]/10">
                    <a
                      href="tel:+919363486258"
                      className="font-sans text-xs font-bold text-[#CF5A30] hover:underline transition-all"
                    >
                      +91 93634 86258
                    </a>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Column: White Card Form (SEND A MESSAGE) */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-8 sm:p-10 border border-[#1C1C1C]/10 shadow-lg">

              <div className="space-y-2 mb-8">
                <h2 className="font-bebas text-3xl sm:text-4xl tracking-wide text-[#1C1C1C] uppercase">
                  SEND A MESSAGE
                </h2>
                <p className="font-sans text-xs sm:text-sm text-[#666666]">
                  Tell us about your organization&apos;s capability gaps or custom cohort needs.
                </p>
              </div>

              {isSubmitted ? (
                <div className="bg-[#CF5A30]/10 border border-[#CF5A30]/30 rounded-2xl p-8 text-center space-y-4 my-6">
                  <div className="h-12 w-12 rounded-full bg-[#CF5A30] text-white flex items-center justify-center mx-auto shadow-md">
                    <Check className="h-6 w-6 stroke-[3]" />
                  </div>
                  <h3 className="font-bebas text-2xl text-[#1C1C1C] uppercase">Message Sent Successfully!</h3>
                  <p className="font-sans text-xs text-[#555555] max-w-md mx-auto">
                    Thank you for reaching out. A Kyureeus system advisor will review your message and contact you shortly.
                  </p>
                  <Button
                    onClick={() => {
                      setIsSubmitted(false);
                      setErrorMessage("");
                    }}
                    className="rounded-lg bg-[#1C1C1C] hover:bg-[#CF5A30] text-white text-xs font-bold uppercase px-6 py-3 cursor-pointer"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                    {/* Your Name */}
                    <div className="space-y-2">
                      <label className="font-sans text-xs font-bold text-[#1C1C1C] block">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        disabled={isSubmitting}
                        placeholder="Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-[#1C1C1C]/15 bg-white px-4 py-3 font-sans text-xs text-[#1C1C1C] placeholder-[#999999] outline-none focus:border-[#CF5A30] focus:ring-1 focus:ring-[#CF5A30] transition-all disabled:opacity-50"
                      />
                    </div>

                    {/* Your Email */}
                    <div className="space-y-2">
                      <label className="font-sans text-xs font-bold text-[#1C1C1C] block">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        disabled={isSubmitting}
                        placeholder="example@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-[#1C1C1C]/15 bg-white px-4 py-3 font-sans text-xs text-[#1C1C1C] placeholder-[#999999] outline-none focus:border-[#CF5A30] focus:ring-1 focus:ring-[#CF5A30] transition-all disabled:opacity-50"
                      />
                    </div>

                  </div>

                  {/* How Can We Help? */}
                  <div className="space-y-2">
                    <label className="font-sans text-xs font-bold text-[#1C1C1C] block">
                      How Can We Help?
                    </label>
                    <textarea
                      rows={5}
                      required
                      disabled={isSubmitting}
                      placeholder="Describe the team, objectives, or operational outcomes you want to secure..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl border border-[#1C1C1C]/15 bg-white px-4 py-3 font-sans text-xs text-[#1C1C1C] placeholder-[#999999] outline-none focus:border-[#CF5A30] focus:ring-1 focus:ring-[#CF5A30] transition-all resize-none disabled:opacity-50"
                    />
                  </div>

                  {/* Error Message Feedback */}
                  {errorMessage && (
                    <p className="font-sans text-xs text-red-500 font-bold bg-red-50 border border-red-200 rounded-lg p-3">
                      {errorMessage}
                    </p>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group flex items-center justify-center gap-2 rounded-xl bg-[#CF5A30] hover:bg-[#1C1C1C] text-white py-6 text-xs sm:text-sm font-bold tracking-widest uppercase transition-colors duration-300 shadow-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
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

      {/* Dark CTA Banner Section matching screenshot */}
      <section className="bg-[#1C1C1E] text-white py-20 px-6 md:px-12 text-center flex flex-col items-center justify-center space-y-8 border-t border-[#121212]">
        <div className="mx-auto max-w-5xl space-y-5">
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-[54px] lg:text-[60px] tracking-wide text-white uppercase leading-[1.05]">
            STOP HIRING POTENTIAL. BUILD COMPREHENSIVE CAPABILITY.
          </h2>
          <p className="font-sans text-sm md:text-base text-[#A1A1AA] max-w-3xl mx-auto leading-relaxed">
            Partner with Kyureeus to systematically map corporate engineering design straight to target business metrics. Develop unified cohorts into master architectural builders.
          </p>
        </div>

        <div className="pt-2">
          <Link href="/bootcamps">
            <Button className="group flex items-center gap-2.5 rounded-[6px] bg-[#CF5A30] hover:bg-white text-white hover:text-[#121212] px-8 py-6 text-xs sm:text-sm font-bold tracking-widest uppercase transition-colors duration-300 shadow-md cursor-pointer font-sans">
              EXPLORE BOOTCAMPS
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
