"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ShaderAnimation } from "@/components/ui/shader-animation";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white z-10 transition-colors duration-300">
      
      {/* Background Shader Animation */}
      <div className="absolute inset-0 z-0">
          <ShaderAnimation />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-center items-center gap-3 mb-8">
            <span className="inline-block py-1 px-3 rounded-md bg-slate-900 text-white border border-slate-700 text-sm font-bold tracking-widest uppercase">
              Elite Edge
            </span>
            <span className="inline-block py-1 px-3 rounded-md bg-transparent border border-slate-300 dark:border-slate-700 text-sm font-medium tracking-wide text-slate-600 dark:text-slate-400">
              ISO 9001:2015 Certified
            </span>
          </div>

          <h1 className="text-5xl md:text-8xl font-bold font-outfit tracking-tighter mb-8 leading-tight text-slate-900 dark:text-white transition-colors duration-300">
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
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                delay: wordIndex * 0.1 + letterIndex * 0.03,
                                type: "spring",
                                stiffness: 150,
                                damping: 25,
                            }}
                            className={`inline-block text-transparent bg-clip-text ${
                                wordIndex >= 2 
                                ? "bg-gradient-to-r from-slate-700 to-slate-500 dark:from-slate-300 dark:to-slate-500"
                                : "bg-gradient-to-r from-slate-900 to-slate-800 dark:from-white dark:to-slate-200"
                            }`}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </span>
            ))}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed transition-colors duration-300">
            A premier management and service company in Qatar combining European standards with local excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="#services">
                <div className="inline-block group relative bg-gradient-to-b from-black/10 to-white/10 dark:from-white/10 dark:to-black/10 p-px rounded-2xl backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <Button
                        variant="ghost"
                        className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md bg-white/95 hover:bg-white/100 dark:bg-black/95 dark:hover:bg-black/100 text-black dark:text-white transition-all duration-300 group-hover:-translate-y-0.5 border border-black/10 dark:border-white/10"
                    >
                        <span className="opacity-90 group-hover:opacity-100 transition-opacity">Our Services</span>
                        <ArrowRight className="ml-3 w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300" />
                    </Button>
                </div>
            </Link>
            
            <Link href="#contact">
              <Button
                variant="ghost"
                className="px-8 py-6 text-lg font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400"
      >
        <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-slate-900 dark:bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
