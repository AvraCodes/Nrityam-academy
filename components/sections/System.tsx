"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight, Clock, Shield, Heart, BookOpen, Compass } from "lucide-react";

interface CurriculumDetail {
  title: string;
  shortDesc: string;
  detailedDesc: string;
  icon: any;
  syllabus: string[];
  duration: string;
  focus: string;
}

const curriculumData: CurriculumDetail[] = [
  {
    title: "1. Build Strong Fundamentals",
    shortDesc: "Master base adavus with correct alignment, posture, and weight distribution.",
    detailedDesc: "The core foundation of classical Bharatanatyam starts here. We break down the absolute basics of posture (Araimandi/Muzhumandi), hand gestures (Hastas), and base footwork (Tattu/Nattu Adavus) to prevent physical strain and build muscle memory.",
    icon: Compass,
    syllabus: [
      "Araimandi & Muzhumandi Posture training",
      "Tattu & Nattu Adavu masterclass (all three speeds)",
      "Basic Asamyuta Hastas (single hand gestures)",
      "Physical posture alignment checks and feedback",
    ],
    duration: "20 minutes / day",
    focus: "Posture & Rhythm Stability",
  },
  {
    title: "2. Stamina & Angasudhi Drills",
    shortDesc: "Develop body stability, flexibility, and proper limb extension.",
    detailedDesc: "Classical dance requires athletic stamina. This section integrates systematic body conditioning, flexibility training, and postures drills. Angasudhi (perfect lines and geometry of the body) is prioritized so that your movements look clean and powerful.",
    icon: Shield,
    syllabus: [
      "Angasudhi alignment drills (perfecting lines & angles)",
      "Stamina building and breath control exercises",
      "Core strengthening & balance maintenance",
      "Coordination of eyes, neck, and limbs (Greeva/Drishti bhedas)",
    ],
    duration: "30 minutes / day",
    focus: "Lines & Stamina Conditioning",
  },
  {
    title: "3. Theory, Talam & Abhinaya",
    shortDesc: "Demystify rhythm structures and mudras to perform with expressive depth.",
    detailedDesc: "Bharatanatyam is not just physical movement — it is a visual storytelling language. We teach you how to read classical talams (rhythms) and express subtle emotions through Abhinaya, ensuring you connect deeply with your audience.",
    icon: BookOpen,
    syllabus: [
      "Samyuta & Asamyuta Hastas mudra nomenclature",
      "Introduction to Talam beats (Adi, Rupaka talams calculation)",
      "Navarasa expressions training (9 fundamental emotions)",
      "Sanskrit shlokas translation and dramatic enactment",
    ],
    duration: "15 minutes / day",
    focus: "Storytelling & Rhythm Theory",
  },
  {
    title: "4. Perform Confidently on Stage",
    shortDesc: "Learn full choreographies step-by-step to transition smoothly onto stage.",
    detailedDesc: "Learn full classical recitals under expert choreography guidance. We structure the progression from initial items (Pushpanjali, Alarippu) to advanced expressional numbers (Shabdam, Keerthanam), preparing you to dance on live stages.",
    icon: Heart,
    syllabus: [
      "Pushpanjali & Alarippu full item choreographies",
      "Stage directions & space positioning training",
      "Jatiswaram and expressional Shabdam repertoire",
      "Live stage presentation and cosmetic/costume guidelines",
    ],
    duration: "45 minutes / day",
    focus: "Full Choreography & Repertoire",
  },
  {
    title: "5. Evaluation & Certification",
    shortDesc: "Receive weekly homework corrections and university-approved credentials.",
    detailedDesc: "Ensure you are making correct progress. By uploading weekly practice clips, you receive direct audio/video corrections. Annual evaluations yield university-approved certifications from leading classical board affiliations.",
    icon: Clock,
    syllabus: [
      "Weekly video submissions and personalized feedback review",
      "Rabindra Bharati University Dance Dept. affiliated syllabus examinations",
      "Kolkata Charukala Society accredited levels certification",
      "Structured level evaluations (Foundation to Arangetram path)",
    ],
    duration: "Weekly assessment",
    focus: "Certified Progression",
  },
];

export default function System() {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="system" className="bg-bg-ivory py-20 md:py-28 overflow-hidden text-text-main relative border-b border-text-light/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-primary" />
            <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-primary">
              Our Training Path
            </span>
            <span className="w-8 h-px bg-primary" />
          </div>

          <h2
            className="text-4xl md:text-5xl font-light leading-tight text-primary mb-4 font-serif"
          >
            The Nrityaam <em className="italic text-accent">Bharatanatyam</em> System
          </h2>

          <p className="text-text-muted max-w-2xl mx-auto text-base leading-relaxed">
            An interactive look into the levels and modules of our structured curriculum. Click on the tabs below to explore details.
          </p>
        </div>

        {/* Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Tab Selectors */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {curriculumData.map((tab, idx) => {
              const IconComp = tab.icon;
              const isSelected = activeTab === idx;

              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-start gap-4 p-5 rounded-2xl border text-left transition-all duration-300 relative cursor-pointer outline-none select-none ${
                    isSelected
                      ? "bg-white dark:bg-white/5 dark:bg-white/5 border-primary shadow-md translate-x-1"
                      : "bg-bg-subtle/50 border-text-light/10 hover:bg-white dark:bg-white/5 dark:bg-white/5 hover:border-primary/30"
                  }`}
                >
                  {/* Selected Indicator Bar */}
                  {isSelected && (
                    <motion.div
                      layoutId="selectedIndicator"
                      className="absolute left-0 top-4 bottom-4 w-1 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  <div className={`p-2.5 rounded-xl border flex-shrink-0 transition-colors ${
                    isSelected
                      ? "bg-primary-glow/10 border-primary/20 text-primary"
                      : "bg-bg-subtle border-text-light/20 text-text-muted"
                  }`}>
                    <IconComp className="w-5 h-5" />
                  </div>

                  <div>
                    <h3 className={`text-base font-semibold leading-tight transition-colors ${
                      isSelected ? "text-primary" : "text-text-main"
                    }`}>
                      {tab.title}
                    </h3>
                    <p className="text-text-muted text-xs mt-1 line-clamp-1">
                      {tab.shortDesc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Animated Card Content */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-white/5 dark:bg-white/5 border border-text-light/10 rounded-3xl p-8 shadow-sm min-h-[460px] relative flex flex-col justify-between text-left">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Card Title & Path indicator */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-text-light/10 pb-5">
                    <div>
                      <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-secondary">
                        Module 0{activeTab + 1} Curriculum
                      </span>
                      <h3 className="text-2xl font-bold text-primary mt-1 font-sans">
                        {curriculumData[activeTab].title.substring(3)}
                      </h3>
                    </div>
                    
                    <div className="flex items-center gap-2 px-3.5 py-1.5 bg-primary-glow/5 border border-primary/10 rounded-full text-xs font-semibold text-primary">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{curriculumData[activeTab].duration}</span>
                    </div>
                  </div>

                  {/* Descriptions */}
                  <p className="text-text-muted text-sm md:text-base leading-relaxed">
                    {curriculumData[activeTab].detailedDesc}
                  </p>

                  {/* Syllabus / What you will learn */}
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-bold text-text-main mb-3">
                      Syllabus & Milestones:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {curriculumData[activeTab].syllabus.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-text-muted">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Core Focus Area Badge footer */}
                  <div className="border-t border-text-light/10 pt-5 mt-6 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-text-light tracking-wider block">
                        Focus Target
                      </span>
                      <span className="text-sm font-semibold text-text-main">
                        {curriculumData[activeTab].focus}
                      </span>
                    </div>

                    <button
                      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-dark transition-colors group cursor-pointer"
                    >
                      <span>Inquire About Placement</span>
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
