"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxBanner() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Background moves slightly slower than scroll (parallax)
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);

  return (
    <section ref={ref} className="relative h-[60vh] overflow-hidden flex items-center justify-center bg-slate-950">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
                backgroundImage: 'url("/qatar1.jpg")',
                filter: 'brightness(0.4) contrast(1.2)'
            }} 
        />
      </motion.div>

      {/* Decorative Overlay patterns */}
      <div className="absolute inset-0 bg-grid-slate-900/[0.05] z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950 z-0" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
        >
            <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium tracking-widest mb-6 uppercase backdrop-blur-sm">
                Future Ready
            </span>
            <h2 className="text-4xl md:text-7xl font-bold font-outfit text-white mb-8 leading-tight">
              Shaping the Future of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Facility Management
              </span>
            </h2>
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              We combine cutting-edge technology with human expertise to deliver services that go beyond expectations.
            </p>
        </motion.div>
      </div>
    </section>
  );
}
