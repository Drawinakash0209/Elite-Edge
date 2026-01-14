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
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden">
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6"
          >
            <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Who We Are</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-slate-100 dark:via-blue-400 dark:to-slate-100 bg-clip-text text-transparent">
            Bridging Global Expertise with Local Excellence
          </h2>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
            Elite Edge is a management and service leader in Qatar built on a foundation of German engineering and structured processes.
            <br /><br />
            We separate ourselves by combining international service standards with deep local market insights, ensuring reliability and quality in every project we undertake. Innovation and precision are at the core of our operations.
          </p>
          
          <GradientButton
            onClick={() => setIsModalOpen(true)}
            className="group min-w-[160px]"
          >
            Learn More
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </GradientButton>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[280px] rounded-2xl overflow-hidden cursor-pointer border border-slate-200 dark:border-slate-800"
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 2}
                />
              </div>
              
              {/* Default Dark Overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/30" />
              
              {/* Hover Overlay - Neon Blue */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 via-blue-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:translate-y-[-4px] transition-transform duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-200 group-hover:text-white transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Modal Portal */}
      {mounted && createPortal(
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            >
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsModalOpen(false)}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              />

              {/* Modal Content */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              >
                {/* Decorative Header Background */}
                <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 opacity-10 rounded-t-3xl" />
                
                {/* Close Button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500 dark:text-slate-400 z-50"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Modal Body */}
                <div className="p-8 md:p-12 relative">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6">
                      <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Our Story & Values</span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-slate-100 dark:via-blue-400 dark:to-slate-100 bg-clip-text text-transparent">
                      Defining the future of facility management in Qatar
                    </h3>

                    <div className="space-y-8 mt-8">
                      {/* Excellence Section */}
                      <div>
                        <div className="flex items-start gap-4 mb-4">
                          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                            <Target className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-100">
                              Excellence in Execution
                            </h4>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                              At Elite Edge, we believe that mediocrity is the enemy of growth. That's why we adhere to the strictest international standards in every service we provide, from simple maintenance tasks to complex logistical operations. Our team is rigorously trained to deliver nothing short of perfection.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Core Values Grid */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-800 border border-blue-100 dark:border-slate-700">
                          <Target className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3" />
                          <h5 className="font-semibold text-lg mb-2 text-slate-900 dark:text-slate-100">Strategic Vision</h5>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            Aligning our services with your long-term business goals to create sustainable value.
                          </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-slate-800 dark:to-slate-800 border border-purple-100 dark:border-slate-700">
                          <Users className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-3" />
                          <h5 className="font-semibold text-lg mb-2 text-slate-900 dark:text-slate-100">People First</h5>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            Investing in our workforce to ensure they are motivated, skilled, and ready to serve.
                          </p>
                        </div>
                      </div>

                      {/* Why We Stand Out */}
                      <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700">
                        <h4 className="text-xl font-semibold mb-6 text-slate-900 dark:text-slate-100 flex items-center gap-3">
                          <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                          Why We Stand Out
                        </h4>
                        <ul className="space-y-4">
                          {["German-engineered process optimization", "24/7 Rapid response capability", "Transparent digital reporting", "Sustainability-focused practices"].map((item, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 + i * 0.1 }}
                              className="flex items-start gap-3"
                            >
                              <div className="p-1 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white mt-0.5">
                                <Check className="w-4 h-4" />
                              </div>
                              <span className="text-slate-700 dark:text-slate-300">{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-10 flex justify-center">
                      <GradientButton
                        onClick={() => setIsModalOpen(false)}
                        className="min-w-[140px]"
                      >
                        Close
                      </GradientButton>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}