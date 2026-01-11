"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Users2, LineChart, Globe, ArrowUpRight, X, Check } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";

const serviceDetails = {
  facility: {
    title: "Facility Management",
    subtitle: "Complete Operational Oversight",
    description: "We provide end-to-end facility management services that ensure your buildings operate at peak efficiency, safety, and comfort. From routine maintenance to complex energy management systems, we handle it all.",
    features: ["Hard & Soft Services Integration", "Preventive & Corrective Maintenance", "Energy & Sustainability Management", "24/7 Helpdesk & Emergency Response"]
  },
  workforce: {
    title: "Workforce & Staffing",
    subtitle: "Powering Your Business with People",
    description: "Our staffing solutions are designed to provide you with the right talent at the right time. We rigorously vet and train our personnel to ensure they meet the highest professional standards.",
    features: ["Specialized Recruitment", "On-site Personnel Management", "Continuous Training Programs", "Compliance & Payroll Administration"]
  },
  project: {
    title: "Project Management",
    subtitle: "From Concept to Completion",
    description: "Our project management team ensures that your initiatives are delivered on time, within budget, and to the desired quality standards. We use advanced methodologies to mitigate risks and optimize resources.",
    features: ["Strategic Planning & Scheduling", "Cost Estimation & Budget Control", "Risk Management & Mitigation", "Quality Assurance & Control"]
  },
  import: {
    title: "Import & Export",
    subtitle: "Connecting Global Markets",
    description: "We bridge the gap between international suppliers and local markets, ensuring a smooth flow of goods. Our expertise in logistics and regulations guarantees hassle-free operations.",
    features: ["Global Sourcing Network", "Customs Clearance Expertise", "Supply Chain Optimization", "Warehousing & Distribution"]
  }
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof serviceDetails.facility | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="services" className="py-12 md:py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 relative">
      <div className="container mx-auto px-6">
        <div className="mb-20 flex flex-col md:flex-row items-end justify-between gap-6">
          <div className="md:w-2/3">
            <motion.span 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-slate-600 dark:text-slate-400 font-bold tracking-widest text-sm uppercase block mb-3"
            >
              Our Expertise
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold font-outfit text-slate-900 dark:text-white leading-tight"
            >
              Solutions for <br />
              <span className="text-slate-700 dark:text-slate-400">
                Modern Businesses
              </span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="md:w-1/3 text-slate-500 text-lg"
          >
            We provide a comprehensive ecosystem of services designed to elevate your operations to international standards.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Main Card - Facility Management */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={() => setSelectedService(serviceDetails.facility)}
            className="group md:col-span-2 relative bg-white dark:bg-slate-800 rounded-lg p-10 overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-none hover:shadow-2xl transition-all duration-500 border-l-4 border-slate-900 cursor-pointer"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-md bg-slate-900 text-white flex items-center justify-center mb-8 shadow-lg shadow-slate-900/20 group-hover:scale-105 transition-transform duration-300">
                <Building2 className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold mb-4 font-outfit text-slate-900 dark:text-white uppercase tracking-tight">Facility Management</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-lg mb-8">
                Comprehensive building cleaning, maintenance, hygiene, and interior-exterior care. Tailored solutions for hotels, offices, and industrial facilities.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {["Cleaning", "Maintenance", "Hygiene", "Care"].map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-bold uppercase tracking-wide border border-slate-200 dark:border-slate-600 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="absolute bottom-8 right-8 p-3 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
              <ArrowUpRight className="w-6 h-6" />
            </div>
          </motion.div>

          {/* Card 2 - Workforce */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            onClick={() => setSelectedService(serviceDetails.workforce)}
            className="group md:col-span-1 relative bg-white dark:bg-slate-800 rounded-lg p-10 overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-none hover:shadow-2xl transition-all duration-500 border-l-4 border-blue-900 flex flex-col justify-between cursor-pointer"
          >
             <div>
                <div className="w-14 h-14 rounded-md bg-blue-900 text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-900/20">
                  <Users2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3 font-outfit text-slate-900 dark:text-white uppercase tracking-tight">Workforce</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  Short-term and long-term personnel solutions. Skilled staff ready to integrate.
                </p>
             </div>
             <div className="flex items-center gap-2 text-blue-900 dark:text-blue-400 font-bold text-sm uppercase tracking-wide group-hover:gap-4 transition-all">
                <span>Find Talent</span> <ArrowUpRight className="w-4 h-4" />
             </div>
          </motion.div>

          {/* Card 3 - Project Management */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            onClick={() => setSelectedService(serviceDetails.project)}
            className="group md:col-span-1 relative bg-white dark:bg-slate-800 rounded-lg p-10 overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-none hover:shadow-2xl transition-all duration-500 border-l-4 border-slate-600 flex flex-col justify-between cursor-pointer"
          >
             <div>
                <div className="w-14 h-14 rounded-md bg-slate-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-slate-600/20">
                  <LineChart className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3 font-outfit text-slate-900 dark:text-white uppercase tracking-tight">Project Mgmt</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                   Operational optimization strategies focusing on quality control and efficiency.
                </p>
             </div>
             <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-bold text-sm uppercase tracking-wide group-hover:gap-4 transition-all">
                <span>Optimize</span> <ArrowUpRight className="w-4 h-4" />
             </div>
          </motion.div>

          {/* Main Card 2 - Import/Export */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            onClick={() => setSelectedService(serviceDetails.import)}
            className="group md:col-span-2 relative bg-slate-900 rounded-lg p-10 overflow-hidden hover:shadow-2xl hover:shadow-slate-900/20 transition-all duration-500 text-white cursor-pointer border-l-4 border-white"
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div className="w-16 h-16 rounded-md bg-white text-slate-900 flex items-center justify-center mb-6 shadow-lg">
                  <Globe className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold mb-4 font-outfit text-white uppercase tracking-tight">Import & Export</h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                   Premium sourcing of high-quality European goods including food, textiles, and household items.
                </p>
              </div>
              
              <div className="md:w-1/2 bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/10">
                 <ul className="space-y-4">
                    {["European Sourcing", "Global Logistics", "Quality Assurance", "Efficient Supply"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-200">
                            <div className="w-1.5 h-1.5 rounded-full bg-white" />
                            {item}
                        </li>
                    ))}
                 </ul>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Interactive Modal Portal */}
      {mounted && createPortal(
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              />
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl overflow-hidden border border-cyan-100 dark:border-cyan-900"
              >
                {/* Decorative Header Background */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-10" />
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl z-0" />

                <div className="relative p-8 md:p-10 z-10">
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500 dark:text-slate-400 z-50"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  <h3 className="text-3xl font-bold font-outfit text-slate-900 dark:text-white mb-2">
                    {selectedService.title}
                  </h3>
                  <p className="text-cyan-600 dark:text-cyan-400 font-medium mb-6">
                    {selectedService.subtitle}
                  </p>
                  
                  <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                    {selectedService.description}
                  </p>

                  <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-100 dark:border-slate-800">
                    <h4 className="font-bold text-slate-900 dark:text-white mb-4">Key Features</h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {selectedService.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5">
                              <Check className="w-3 h-3" />
                          </div>
                          <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                      <GradientButton 
                        variant="variant"
                        onClick={() => setSelectedService(null)}
                        className="min-w-[120px]"
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
