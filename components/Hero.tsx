"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-slate-950 text-slate-900 dark:text-white rounded-b-[5rem] border-b-4 border-cyan-500 shadow-[0_20px_60px_-15px_rgba(6,182,212,0.3)] z-10 transition-colors duration-300">
      {/* Background Gradient/Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 z-0 transition-colors duration-300" />
      
      {/* Animated Abstract Shapes for premium feel - Neon Blue/Cyan */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-cyan-400/20 rounded-full blur-3xl z-0"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-blue-500/20 rounded-full blur-3xl z-0"
      />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-cyan-50 border border-cyan-100 text-sm font-medium tracking-wide mb-6 text-cyan-600">
            Welcome to Elite Edge
          </span>
          <h1 className="text-5xl md:text-7xl font-bold font-outfit tracking-tight mb-6 leading-tight text-slate-900 dark:text-white transition-colors duration-300">
            International Expertise. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              German Reliability.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed transition-colors duration-300">
            A premier management and service company in Qatar combining European standards with local excellence to deliver high-quality, innovative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="#services">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(6,182,212,0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white rounded-full font-semibold transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/30"
              >
                Our Services <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <Link href="#contact">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(6,182,212,0.05)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400 rounded-full font-semibold transition-colors"
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
          <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
