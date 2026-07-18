"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { MessageSquare, Mail, Instagram, MapPin, Send, Check } from "lucide-react";

// Form validation schema using Zod
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  experience: z.string().min(1, "Please select your experience level"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: async (data) => {
      try {
        const validated = contactSchema.parse(data);
        return { values: validated, errors: {} };
      } catch (err: any) {
        const formattedErrors: any = {};
        err.errors.forEach((e: any) => {
          formattedErrors[e.path[0]] = { message: e.message };
        });
        return { values: {}, errors: formattedErrors };
      }
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitSuccess(true);
    reset();
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
 <section id="contact" className="bg-transparent py-20 md:py-28 relative overflow-hidden ">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.05),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5 text-left flex flex-col justify-center h-full">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-primary" />
              <div className="h-[1px] w-12 bg-primary/40" />
            <span className="text-sm font-medium tracking-widest text-primary uppercase">
                Get In Touch
              </span>
            <div className="h-[1px] w-12 bg-primary/40" />
            </div>

            <h2 className="text-4xl md:text-5xl font-serif leading-relaxed text-transparent bg-clip-text bg-gradient-to-br from-text-main via-text-main/90 to-primary/80 mb-6">
              Start Your <span className="text-primary italic">Transformation</span> Today
            </h2>

            <p className="text-text-muted text-lg leading-relaxed mb-10 font-light">
              Fill out the inquiry form to book your assessment. We will contact you via WhatsApp or Email to schedule your roadmap session.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-white/5 dark:bg-white/5 border border-primary/10 shadow-sm flex items-center justify-center text-primary group-hover:scale-105 transition-transform shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="pt-1">
                  <h4 className="text-xs uppercase tracking-wider text-text-light font-semibold mb-1">Location</h4>
                  <p className="text-text-main text-base font-medium">Online Classes (Available Globally)</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-white/5 dark:bg-white/5 border border-primary/10 shadow-sm flex items-center justify-center text-primary group-hover:scale-105 transition-transform shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="pt-1">
                  <h4 className="text-xs uppercase tracking-wider text-text-light font-semibold mb-1">Email Support</h4>
                  <p className="text-text-main text-base font-medium">contact@nrityaam.com</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-white/5 dark:bg-white/5 border border-primary/10 shadow-sm flex items-center justify-center text-primary group-hover:scale-105 transition-transform shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="pt-1">
                  <h4 className="text-xs uppercase tracking-wider text-text-light font-semibold mb-1">Community</h4>
                  <a
                    href="https://www.instagram.com/ranbbir.dance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-main hover:text-primary transition-colors text-base font-medium"
                  >
                    @ranbbir.dance
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp Box */}
            <div className="p-6 bg-white dark:bg-white/5 dark:bg-white/5 border border-[#25D366]/20 rounded-2xl shadow-sm text-left">
              <h4 className="text-sm font-semibold text-text-main mb-2 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                Need Immediate Answers?
              </h4>
              <p className="text-text-muted text-sm leading-relaxed mb-5">
                Skip the form and chat directly via WhatsApp. Average response time is under 4 hours.
              </p>
              <a
                href="https://wa.me/916291333077"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full gap-2 px-6 py-3.5 bg-white dark:bg-white/5 dark:bg-white/5 border border-[#25D366]/40 hover:bg-[#25D366]/5 text-[#25D366] font-semibold rounded-xl text-sm transition-colors cursor-pointer shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                Chat Now on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: Inquiry Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-white/5 dark:bg-white/5 border border-primary/10 p-8 sm:p-12 rounded-3xl shadow-xl shadow-primary/5 relative">
              <h3 className="text-2xl font-serif leading-relaxed text-text-main mb-8 text-left">
                Admission & Goals Inquiry
              </h3>

              {submitSuccess ? (
                <div className="py-16 px-6 text-center flex flex-col items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 animate-bounce">
                    <Check className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-serif leading-relaxed text-text-main mb-3">Inquiry Submitted!</h4>
                  <p className="text-text-muted text-base leading-relaxed max-w-sm">
                    Thank you for sharing your goals. Ranbir sir will contact you via WhatsApp to coordinate your roadmap assessment.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-left">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-text-light font-semibold mb-2">Full Name</label>
                      <input
                        type="text"
                        {...register("name")}
                        placeholder="e.g. Priyanjali Roy"
                        className="w-full px-5 py-4 bg-bg-ivory/50 border border-primary/10 rounded-xl focus:bg-white dark:bg-white/5 dark:bg-white/5 focus:border-primary/40 focus:ring-1 focus:ring-primary/40 outline-none transition-all text-text-main text-sm placeholder:text-text-light/50"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-2">{errors.name.message}</p>}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-text-light font-semibold mb-2">Email Address</label>
                      <input
                        type="email"
                        {...register("email")}
                        placeholder="e.g. priya@example.com"
                        className="w-full px-5 py-4 bg-bg-ivory/50 border border-primary/10 rounded-xl focus:bg-white dark:bg-white/5 dark:bg-white/5 focus:border-primary/40 focus:ring-1 focus:ring-primary/40 outline-none transition-all text-text-main text-sm placeholder:text-text-light/50"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-text-light font-semibold mb-2">WhatsApp Number</label>
                      <input
                        type="tel"
                        {...register("phone")}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-5 py-4 bg-bg-ivory/50 border border-primary/10 rounded-xl focus:bg-white dark:bg-white/5 dark:bg-white/5 focus:border-primary/40 focus:ring-1 focus:ring-primary/40 outline-none transition-all text-text-main text-sm placeholder:text-text-light/50"
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-2">{errors.phone.message}</p>}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-text-light font-semibold mb-2">Experience Level</label>
                      <select
                        {...register("experience")}
                        className="w-full px-5 py-4 bg-bg-ivory/50 border border-primary/10 rounded-xl focus:bg-white dark:bg-white/5 dark:bg-white/5 focus:border-primary/40 focus:ring-1 focus:ring-primary/40 outline-none transition-all text-text-main text-sm appearance-none cursor-pointer"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%237A1E2C'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                          backgroundPosition: "right 16px center",
                          backgroundSize: "16px",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        <option value="" className="text-text-main">Select Level</option>
                        <option value="beginner" className="text-text-main">Complete Beginner (Age 10+)</option>
                        <option value="intermediate" className="text-text-main">Intermediate (Adavu training)</option>
                        <option value="advanced" className="text-text-main">Advanced (Learned choreography)</option>
                      </select>
                      {errors.experience && <p className="text-red-500 text-xs mt-2">{errors.experience.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-text-light font-semibold mb-2">Goals & Challenges</label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      placeholder="Tell us what you want to achieve or any challenges you struggle with..."
                      className="w-full px-5 py-4 bg-bg-ivory/50 border border-primary/10 rounded-xl focus:bg-white dark:bg-white/5 dark:bg-white/5 focus:border-primary/40 focus:ring-1 focus:ring-primary/40 outline-none transition-all text-text-main text-sm resize-none placeholder:text-text-light/50"
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-2">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-primary hover:bg-primary-dark disabled:opacity-50 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-primary/20 mt-4"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
