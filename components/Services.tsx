"use client";

import { motion } from "framer-motion";
import { Building2, Users2, LineChart, Globe, ArrowUpRight } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-12 md:py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="mb-20 flex flex-col md:flex-row items-end justify-between gap-6">
          <div className="md:w-2/3">
            <motion.span 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-cyan-600 dark:text-cyan-400 font-bold tracking-wider text-sm uppercase block mb-3"
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
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
            className="group md:col-span-2 relative bg-white dark:bg-slate-800 rounded-[2.5rem] p-10 overflow-hidden shadow-[0_10px_40px_-10px_rgba(6,182,212,0.2)] dark:shadow-[0_10px_40px_-10px_rgba(6,182,212,0.4)] hover:shadow-cyan-500/30 transition-all duration-500 border border-cyan-200 dark:border-cyan-800"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-50 dark:bg-cyan-900/10 rounded-full blur-3xl -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-150" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500 text-white flex items-center justify-center mb-8 shadow-lg shadow-cyan-500/30 group-hover:rotate-6 transition-transform duration-300">
                <Building2 className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold mb-4 font-outfit text-slate-900 dark:text-white">Facility Management</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-lg mb-8">
                Comprehensive building cleaning, maintenance, hygiene, and interior-exterior care. Tailored solutions for hotels, offices, and industrial facilities.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {["Cleaning", "Maintenance", "Hygiene", "Care"].map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-full bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-sm font-medium border border-slate-100 dark:border-slate-600 group-hover:border-cyan-200 dark:group-hover:border-cyan-700 group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="absolute bottom-8 right-8 p-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
              <ArrowUpRight className="w-6 h-6" />
            </div>
          </motion.div>

          {/* Card 2 - Workforce */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="group md:col-span-1 relative bg-white dark:bg-slate-800 rounded-[2.5rem] p-10 overflow-hidden hover:shadow-2xl hover:shadow-blue-600/10 transition-all duration-500 border border-slate-100 dark:border-slate-700 flex flex-col justify-between"
          >
             <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-50 dark:from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             
             <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-600/30">
                  <Users2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3 font-outfit text-slate-900 dark:text-white">Workforce & Staffing</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  Short-term and long-term personnel solutions. Skilled staff ready to integrate.
                </p>
             </div>
             <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm group-hover:gap-4 transition-all">
                <span>Find Talent</span> <ArrowUpRight className="w-4 h-4" />
             </div>
          </motion.div>

          {/* Card 3 - Shop Management */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="group md:col-span-1 relative bg-white dark:bg-slate-800 rounded-[2.5rem] p-10 overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 border border-slate-100 dark:border-slate-700 flex flex-col justify-between"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 dark:bg-indigo-900/10 rounded-full blur-2xl -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-125" />
             
             <div>
                <div className="w-14 h-14 rounded-2xl bg-indigo-500 text-white flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/30">
                  <LineChart className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3 font-outfit text-slate-900 dark:text-white">Project Management</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                   Operational optimization strategies focusing on quality control and efficiency.
                </p>
             </div>
             <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold text-sm group-hover:gap-4 transition-all">
                <span>Optimize</span> <ArrowUpRight className="w-4 h-4" />
             </div>
          </motion.div>

          {/* Main Card 2 - Import/Export */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="group md:col-span-2 relative bg-slate-900 rounded-[2.5rem] p-10 overflow-hidden hover:shadow-2xl hover:shadow-sky-500/20 transition-all duration-500 text-white"
          >
            {/* Cool Grid Pattern Background for tech feel */}
            <div className="absolute inset-0 opacity-20" 
                 style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)', backgroundSize: '32px 32px' }}>
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div className="w-16 h-16 rounded-2xl bg-sky-500 text-white flex items-center justify-center mb-6 shadow-lg shadow-sky-500/30">
                  <Globe className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold mb-4 font-outfit text-white">Import & Export</h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                   Premium sourcing of high-quality European goods including food, textiles, and household items.
                </p>
              </div>
              
              <div className="md:w-1/2 bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                 <ul className="space-y-4">
                    {["European Sourcing", "Global Logistics", "Quality Quality", "Efficient Supply"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-200">
                            <div className="w-2 h-2 rounded-full bg-sky-400" />
                            {item}
                        </li>
                    ))}
                 </ul>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
