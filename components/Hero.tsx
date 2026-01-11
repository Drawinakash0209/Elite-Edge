"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-slate-950 text-slate-900 dark:text-white z-10 transition-colors duration-300">
      {/* Background Gradient/Overlay - Corporate Theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-slate-200 dark:from-slate-950 dark:via-slate-900 dark:to-black z-0 transition-colors duration-300" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] dark:opacity-[0.05] z-0 pointer-events-none" />
      
      {/* Structural Accent Line */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 z-20" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center items-center gap-3 mb-6">
            <span className="inline-block py-1 px-3 rounded-md bg-slate-900 text-white border border-slate-700 text-sm font-bold tracking-widest uppercase">
              Elite Edge
            </span>
            <span className="inline-block py-1 px-3 rounded-md bg-transparent border border-slate-300 dark:border-slate-700 text-sm font-medium tracking-wide text-slate-600 dark:text-slate-400">
              ISO 9001:2015 Certified
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-outfit tracking-tighter mb-6 leading-tight text-slate-900 dark:text-white transition-colors duration-300">
            International Expertise. <br className="hidden md:block" />
            <span className="text-slate-700 dark:text-slate-400">
              German Reliability.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed transition-colors duration-300">
            A premier management and service company in Qatar combining European standards with local excellence to deliver high-quality, innovative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="#services">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-md font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-xl shadow-slate-900/20"
              >
                Our Services <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <Link href="#contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-transparent border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/10 rounded-md font-bold uppercase tracking-wider transition-colors"
              >
                Contact Us
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400"
      >
        <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-slate-900 dark:bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
