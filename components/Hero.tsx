"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { GradientButton } from "@/components/ui/gradient-button";

export default function Hero() {
  return (
    <div className="relative overflow-hidden w-full min-h-screen bg-slate-950">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-70 mix-blend-overlay"
          style={{ backgroundImage: 'url("/qatar2.avif")' }}
        />
        {/* Professional Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/65 to-slate-950/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-transparent to-slate-950/80" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center h-full flex flex-col justify-center min-h-screen pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex justify-center items-center gap-4 mb-10">
            <span className="inline-block py-1.5 px-4 rounded-[4px] bg-[#C5A059] text-[#0A192F] text-xs font-bold tracking-[0.2em] uppercase shadow-lg">
              Elite Edge
            </span>
            <span className="inline-block py-1.5 px-4 rounded-[4px] bg-slate-900/50 border border-[#C5A059]/30 text-xs font-semibold tracking-widest text-[#C5A059] backdrop-blur-sm">
              ISO 9001:2015 Certified
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-manrope tracking-tight mb-8 leading-[1.1] text-white">
            {[
              "International",
              "Expertise.",
              "German",
              "Reliability."
            ].map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block mr-4 last:mr-0">
                    {word.split("").map((letter, letterIndex) => (
                        <motion.span
                            key={`${wordIndex}-${letterIndex}`}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                delay: wordIndex * 0.15 + letterIndex * 0.02,
                                type: "spring",
                                stiffness: 100,
                                damping: 20,
                            }}
                            className={`inline-block ${
                                wordIndex >= 2 
                                ? "text-[#C5A059]" // Gold for "German Reliability"
                                : "text-white"
                            }`}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </span>
            ))}
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-14 leading-relaxed font-light"
          >
            A premier management and service company in Qatar combining <span className="text-white font-medium">European standards</span> with <span className="text-white font-medium">local excellence</span>.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link href="#services">
              <GradientButton className="min-w-[200px] h-14 text-lg">
                Our Services <ArrowRight className="ml-2 w-5 h-5" />
              </GradientButton>
            </Link>
            
            <Link href="#contact">
              <GradientButton variant="variant" className="min-w-[200px] h-14 text-lg">
                Contact Us
              </GradientButton>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Professional Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-slate-500 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest font-medium">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-slate-500 to-transparent"
        />
      </motion.div>
    </div>
  );
}
