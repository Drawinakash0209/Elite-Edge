"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FloatingLogoButton() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-white dark:bg-slate-900 shadow-2xl border-2 border-slate-200 dark:border-slate-700 overflow-hidden group cursor-pointer transition-all duration-300"
      >
        {/* Animated background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Logo */}
        <div className="relative w-full h-full p-3 flex items-center justify-center">
          <Image
            src="/logo1.png"
            alt="Elite Edge"
            fill
            className="object-contain p-3 drop-shadow-lg"
          />
        </div>

        {/* Pulse ring effect */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 rounded-full border-2 border-cyan-400 dark:border-cyan-500"
        />
      </motion.button>
    </motion.div>
  );
}
