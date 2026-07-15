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
    <section id="contact" className="bg-primary-dark py-20 md:py-28 text-white relative overflow-hidden">
      {/* Glow elements */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Academy Info & WhatsApp */}
          <div className="lg:col-span-5 text-left">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-secondary" />
              <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-secondary">
                Get In Touch
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl font-light leading-tight text-bg-ivory mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Start Your <em className="italic text-secondary">Transformation</em> Today
            </h2>

            <p className="text-white/70 text-base leading-relaxed mb-8">
              Fill out the inquiry form to book your assessment. We will contact you via WhatsApp or Email to schedule your roadmap session.
            </p>

            {/* Quick Contacts details */}
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary-light">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-white/40 font-semibold mb-0.5">Classes Location</h4>
                  <p className="text-white/95 text-sm">Online Classes (Available Globally)</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary-light">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-white/40 font-semibold mb-0.5">Email Support</h4>
                  <p className="text-white/95 text-sm">contact@nrityaam.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary-light">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-white/40 font-semibold mb-0.5">Instagram Community</h4>
                  <a
                    href="https://www.instagram.com/ranbbir.dance?igsh=ZXJnb3k4Y2p6ZXBm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-light hover:underline text-sm font-medium"
                  >
                    @ranbbir.dance
                  </a>
                </div>
              </div>
            </div>

            {/* Chat Now WhatsApp button */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-3xl text-left">
              <h4 className="text-sm font-semibold text-white mb-2">Need Immediate Answers?</h4>
              <p className="text-white/60 text-xs leading-relaxed mb-4">
                Skip the form and chat with Ranbir sir directly via WhatsApp. Average response time is under 4 hours.
              </p>
              <a
                href="https://wa.me/916291333077"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-medium rounded-full text-sm transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                Chat Now on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: Inquiry Form Card */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md shadow-2xl relative">
            <h3 className="text-xl font-semibold text-white mb-6 text-left font-sans">
              Admission & Goals Inquiry
            </h3>

            {submitSuccess ? (
              <div className="py-12 px-6 text-center flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white mb-4 animate-bounce">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Inquiry Submitted!</h4>
                <p className="text-white/60 text-sm leading-relaxed max-w-sm">
                  Thank you for sharing your goals. Ranbir sir will contact you via WhatsApp to coordinate your roadmap assessment.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 text-left">
                {/* Row: Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/50 font-semibold mb-2">Full Name</label>
                    <input
                      type="text"
                      {...register("name")}
                      placeholder="e.g. Priyanjali Roy"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-secondary focus:outline-none transition-colors text-white text-sm"
                    />
                    {errors.name && <p className="text-red-300 text-[11px] mt-1.5">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/50 font-semibold mb-2">Email Address</label>
                    <input
                      type="email"
                      {...register("email")}
                      placeholder="e.g. priya@example.com"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-secondary focus:outline-none transition-colors text-white text-sm"
                    />
                    {errors.email && <p className="text-red-300 text-[11px] mt-1.5">{errors.email.message}</p>}
                  </div>
                </div>

                {/* Row: Phone & Experience */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/50 font-semibold mb-2">WhatsApp / Phone Number</label>
                    <input
                      type="tel"
                      {...register("phone")}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-secondary focus:outline-none transition-colors text-white text-sm"
                    />
                    {errors.phone && <p className="text-red-300 text-[11px] mt-1.5">{errors.phone.message}</p>}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/50 font-semibold mb-2">Dance Experience Level</label>
                    <select
                      {...register("experience")}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-secondary focus:outline-none transition-colors text-white text-sm appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                        backgroundPosition: "right 16px center",
                        backgroundSize: "16px",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <option value="" className="bg-primary-dark">Select Experience Level</option>
                      <option value="beginner" className="bg-primary-dark">Complete Beginner (Above age 10)</option>
                      <option value="intermediate" className="bg-primary-dark">Intermediate (Some Adavu training)</option>
                      <option value="advanced" className="bg-primary-dark">Advanced (Learned choreography/basics)</option>
                    </select>
                    {errors.experience && <p className="text-red-300 text-[11px] mt-1.5">{errors.experience.message}</p>}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/50 font-semibold mb-2">Your Goals & Challenges</label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Tell us what you want to achieve or any challenges you struggle with..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-secondary focus:outline-none transition-colors text-white text-sm resize-none"
                  />
                  {errors.message && <p className="text-red-300 text-[11px] mt-1.5">{errors.message.message}</p>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-secondary hover:bg-secondary-dark disabled:opacity-50 text-text-main font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-gold"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Goal Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
