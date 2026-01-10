"use client";

import { motion } from "framer-motion";

export default function MarqueeBanner() {
  const marqueeText = [
    "Operational Excellence",
    "International Standards",
    "German Reliability",
    "Local Expertise",
    "24/7 Support",
    "Sustainable Solutions"
  ];

  return (
    <div className="relative py-10 bg-slate-50 dark:bg-slate-900 overflow-hidden flex z-20 border-y border-slate-200 dark:border-slate-800 transition-colors duration-300">
      {/* Gradient overlays for smooth fade edges */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-900 z-10 transition-colors duration-300" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-50 to-transparent dark:from-slate-900 z-10 transition-colors duration-300" />

      <motion.div
        className="flex whitespace-nowrap gap-16"
        animate={{ x: "-50%" }}
        transition={{
          duration: 30, // Adjust speed here
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* Render content twice for seamless loop */}
        {[...marqueeText, ...marqueeText, ...marqueeText].map((text, i) => (
          <div key={i} className="flex items-center gap-4">
            <span className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-slate-700 to-slate-500 dark:from-white/20 dark:to-white/5 uppercase tracking-tighter transition-all duration-300">
              {text}
            </span>
            <div className="w-3 h-3 rounded-full bg-cyan-500/50" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
