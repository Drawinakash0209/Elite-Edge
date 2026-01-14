"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Target, Users, Zap, X, Check, ArrowRight } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";
import { useMediaQuery } from "@/hooks/use-media-query";
import Image from "next/image";

const features = [
  {
    title: "Our Vision",
    description: "To be the premier provider for management, service, and staffing solutions.",
    image: "/mission.jpeg"
  },
  {
    title: "Our Mission",
    description: "Empowering businesses through efficient, professional, international standard services.",
    image: "/vision.jpeg"
  },
  {
    title: "Client Engagement",
    description: "Building trusted, long-term strategic partnerships that prioritize your success.",
    image: "/clientEngagement.jpeg"
  },
  {
    title: "Operational Excellence",
    description: "Precision and flexibility 24/7, ensuring seamless execution in every project.",
    image: "/operationalExcellence.jpeg"
  }
];

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="about" className="py-12 md:py-24 bg-white dark:bg-slate-950 transition-colors duration-300 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/2 sticky top-32"
          >
            <span className="text-cyan-600 dark:text-cyan-400 font-semibold tracking-wider text-sm uppercase mb-2 block">Who We Are</span>
            <h2 className="text-4xl font-bold font-outfit text-slate-900 dark:text-white mb-6">
              Bridging Global Expertise with <span className="text-cyan-600 dark:text-cyan-400">Local Excellence</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
              Elite Edge is a management and service leader in Qatar built on a foundation of German engineering and structured processes.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
              We separate ourselves by combining international service standards with deep local market insights, ensuring reliability and quality in every project we undertake. Innovation and precision are at the core of our operations.
            </p>
            
            <motion.div whileTap={{ scale: 0.95 }} className="inline-block">
              <GradientButton 
                onClick={() => setIsModalOpen(true)}
                className="group min-w-[160px]"
              >
                Learn More <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </GradientButton>
            </motion.div>
          </motion.div>

          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-64 rounded-3xl overflow-hidden cursor-pointer shadow-lg"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Default Dark Overlay for readability */}
                  <div className="absolute inset-0 bg-slate-900/40 transition-opacity duration-300 group-hover:opacity-0" />
                </div>

                {/* Hover Overlay - Neon Blue */}
                <div className="absolute inset-0 bg-cyan-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 font-outfit relative z-10">
                    {feature.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 relative z-10">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Interactive Modal Portal */}
      {mounted && createPortal(
        <AnimatePresence>
          {isModalOpen && (
            <div className={`fixed inset-0 z-[100] flex ${isDesktop ? 'items-center justify-center p-4 sm:p-6' : 'items-end justify-center'}`}>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsModalOpen(false)}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              />
              
              <motion.div 
                initial={isDesktop ? { opacity: 0, scale: 0.9, y: 20 } : { y: "100%" }}
                animate={isDesktop ? { opacity: 1, scale: 1, y: 0 } : { y: 0 }}
                exit={isDesktop ? { opacity: 0, scale: 0.9, y: 20 } : { y: "100%" }}
                transition={isDesktop 
                  ? { type: "spring", damping: 25, stiffness: 300 }
                  : { type: "tween", ease: [0.32, 0.72, 0, 1], duration: 0.5 }
                }
                className={`relative bg-white dark:bg-slate-900 shadow-2xl overflow-hidden border border-cyan-100 dark:border-cyan-900 flex flex-col 
                  ${isDesktop 
                    ? 'w-full max-w-3xl rounded-[2rem] max-h-[90vh]' 
                    : 'w-full rounded-t-[2rem] max-h-[85vh]'
                  }`}
              >
                {/* Decorative Header Background */}
                <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-10" />
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl z-0" />

                <div className="relative p-8 md:p-10 z-10 overflow-y-auto custom-scrollbar">
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500 dark:text-slate-400 z-50"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  <h3 className="text-3xl font-bold font-outfit text-slate-900 dark:text-white mb-2">
                    Our Story & Values
                  </h3>
                  <p className="text-cyan-600 dark:text-cyan-400 font-medium mb-8">
                    Defining the future of facility management in Qatar
                  </p>

                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                        <Award className="w-6 h-6 text-cyan-500" /> Excellence in Execution
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        At Elite Edge, we believe that mediocrity is the enemy of growth. That's why we adhere to the strictest international standards in every service we provide, from simple maintenance tasks to complex logistical operations. Our team is rigorously trained to deliver nothing short of perfection.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                        <h5 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                          <Target className="w-5 h-5 text-blue-500" /> Strategic Vision
                        </h5>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Aligning our services with your long-term business goals to create sustainable value.
                        </p>
                      </div>
                      <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                        <h5 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                          <Users className="w-5 h-5 text-indigo-500" /> People First
                        </h5>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Investing in our workforce to ensure they are motivated, skilled, and ready to serve.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Why We Stand Out</h4>
                      <ul className="space-y-3">
                        {["German-engineered process optimization", "24/7 Rapid response capability", "Transparent digital reporting", "Sustainability-focused practices"].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                            <div className="w-6 h-6 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
                                <Check className="w-3.5 h-3.5" />
                            </div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-10 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                      <GradientButton 
                        variant="variant"
                        onClick={() => setIsModalOpen(false)}
                        className="min-w-[140px]"
                      >
                        Close
                      </GradientButton>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
