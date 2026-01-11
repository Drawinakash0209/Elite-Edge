"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { BeamsBackground } from "@/components/ui/beams-background";
import { GradientButton } from "@/components/ui/gradient-button";

export default function Hero() {
  return (
    <BeamsBackground className="overflow-hidden" intensity="strong">
      <div className="container mx-auto px-6 relative z-10 text-center h-full flex flex-col justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-center items-center gap-3 mb-8">
            <span className="inline-block py-1 px-3 rounded-md bg-white text-black border border-white text-sm font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              Elite Edge
            </span>
            <span className="inline-block py-1 px-3 rounded-md bg-transparent border border-white/30 text-sm font-medium tracking-wide text-neutral-300">
              ISO 9001:2015 Certified
            </span>
          </div>

          <h1 className="text-5xl md:text-8xl font-bold font-outfit tracking-tighter mb-8 leading-tight text-white transition-colors duration-300">
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
                                ? "bg-gradient-to-r from-neutral-300 to-neutral-100" 
                                : "bg-gradient-to-r from-white to-neutral-200"
                            }`}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </span>
            ))}
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-12 leading-relaxed transition-colors duration-300">
            A premier management and service company in Qatar combining European standards with local excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Link href="#services">
              <GradientButton className="min-w-[180px]">
                Our Services <ArrowRight className="ml-2 w-5 h-5" />
              </GradientButton>
            </Link>
            
            <Link href="#contact">
              <GradientButton variant="variant" className="min-w-[180px]">
                Contact Us
              </GradientButton>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-400"
      >
        <div className="w-6 h-10 border-2 border-neutral-500 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>
      </motion.div>
    </BeamsBackground>
  );
}
