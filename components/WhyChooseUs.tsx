"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, CloudLightning, ShieldCheck, Globe2, X, ArrowRight } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";

export default function WhyChooseUs() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="why-us" className="py-12 md:py-24 bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-300 relative">
      


      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-300/30 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-300/30 rounded-full blur-3xl" />
              <div className="relative bg-white dark:bg-slate-900 p-10 rounded-3xl shadow-[0_0_40px_-10px_rgba(6,182,212,0.15)] dark:shadow-[0_0_40px_-10px_rgba(6,182,212,0.3)] border border-cyan-100 dark:border-cyan-900/50 transition-colors duration-300">
                <span className="text-6xl font-black text-slate-50 dark:text-slate-800 absolute top-4 left-6 -z-10 transition-colors duration-300">WHY</span>
                <h3 className="text-3xl font-bold font-outfit text-slate-900 dark:text-white mb-6">
                  Experience the <br />
                  <span className="text-cyan-600 dark:text-cyan-400">Elite Advantage</span>
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                  Our operations are designed to support and align with Qatar’s National Vision for development. We don't just provide improved services; we provide peace of mind through structured excellence.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="p-4 bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 border border-slate-100 dark:border-slate-700 rounded-xl">
                        <h4 className="font-bold text-2xl text-slate-900 dark:text-white font-outfit">100%</h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Compliance</p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 border border-slate-100 dark:border-slate-700 rounded-xl">
                         <h4 className="font-bold text-2xl text-slate-900 dark:text-white font-outfit">24/7</h4>
                         <p className="text-sm text-slate-500 dark:text-slate-400">Support</p>
                    </div>
                </div>

                <GradientButton 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto min-w-[160px]"
                >
                  Learn More <ArrowRight className="ml-2 w-5 h-5" />
                </GradientButton>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2">
            <div className="space-y-8">
              {[
                {
                    title: "German Reliability",
                    desc: "Consistent and precise service delivery based on structured processes and engineering standards.",
                    icon: <ShieldCheck className="w-6 h-6 text-cyan-500" />
                },
                {
                    title: "24/7 Availability",
                    desc: "Fast, adaptable solutions that respond to urgent client demands around the clock.",
                    icon: <CloudLightning className="w-6 h-6 text-blue-500" />
                },
                {
                    title: "International Expertise",
                    desc: "Guaranteed transparency and clear communication through professional management.",
                    icon: <Globe2 className="w-6 h-6 text-indigo-500" />
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.3 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="flex gap-5"
                >
                  <div className="shrink-0 w-12 h-12 rounded-full bg-white dark:bg-slate-900 shadow-md flex items-center justify-center border border-slate-100 dark:border-slate-800 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 font-outfit">{item.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Interactive Modal Portal */}
      {mounted && createPortal(
        <AnimatePresence>
          {isModalOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsModalOpen(false)}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              />
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl overflow-hidden border border-cyan-100 dark:border-cyan-900"
              >
                {/* Decorative Header Background */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-10" />
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl z-0" />

                <div className="relative p-8 md:p-10 z-10">
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500 dark:text-slate-400"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  <h3 className="text-3xl font-bold font-outfit text-slate-900 dark:text-white mb-4">
                    The Elite Standard
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                    We go beyond basic service delivery. Our methodology is rooted in three core pillars that ensure your facility operates at peak efficiency.
                  </p>

                  <div className="grid gap-6">
                    {[
                      { title: "Structured Processes", desc: "Every operation is governed by strict SOPs derived from German engineering principles, leaving no room for error." },
                      { title: "Proactive Maintenance", desc: "We anticipate issues before they arise, utilizing data-driven insights to maintain asset health and longevity." },
                      { title: "Transparency & Trust", desc: "Complete visibility into our operations with regular, detailed reporting and open communication channels." }
                    ].map((feature, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:border-cyan-200 dark:hover:border-cyan-800 transition-colors">
                        <div className="w-2 h-2 mt-2.5 rounded-full bg-cyan-500 shrink-0" />
                        <div>
                          <h4 className="font-bold text-slate-900 dark:text-white mb-1">{feature.title}</h4>
                          <p className="text-slate-500 dark:text-slate-400 text-sm">{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                      <GradientButton 
                        variant="variant"
                        onClick={() => setIsModalOpen(false)}
                        className="min-w-[140px]"
                      >
                        Close Details
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
