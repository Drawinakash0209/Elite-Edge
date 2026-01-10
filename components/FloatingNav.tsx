"use client";

import { motion } from "framer-motion";
import { Home, Info, Briefcase, Mail, Phone, Moon, Sun, MonitorPlay } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const links = [
  { name: "Home", href: "#hero", icon: <Home className="w-5 h-5 sm:w-5 sm:h-5" /> },
  { name: "About", href: "#about", icon: <Info className="w-5 h-5 sm:w-5 sm:h-5" /> },
  { name: "Services", href: "#services", icon: <Briefcase className="w-5 h-5 sm:w-5 sm:h-5" /> },
  { name: "Why Us", href: "#why-us", icon: <Phone className="w-5 h-5 sm:w-5 sm:h-5" /> },
  { name: "Contact", href: "#contact", icon: <Mail className="w-5 h-5 sm:w-5 sm:h-5" /> },
];

export default function FloatingNav() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="fixed top-6 inset-x-0 z-50 flex justify-center pointer-events-none px-4">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="pointer-events-auto bg-slate-900/80 dark:bg-slate-800/80 backdrop-blur-xl border border-white/10 rounded-full p-2 shadow-2xl shadow-cyan-500/10 flex items-center justify-between sm:justify-center gap-1 sm:gap-2 max-w-full overflow-x-auto no-scrollbar"
      >
        {links.map((link, index) => (
          <Link key={link.name} href={link.href}>
            <motion.div
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative px-3 py-2 sm:px-4 sm:py-2 rounded-full flex items-center gap-2 cursor-pointer group"
            >
              {hoveredIndex === index && (
                <motion.div
                  layoutId="hover-pill"
                  className="absolute inset-0 bg-white/20 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              
              <span className={`relative z-10 transition-colors duration-300 ${hoveredIndex === index ? "text-cyan-300" : "text-white/70"}`}>
                {link.icon}
              </span>
              <span className={`relative z-10 text-sm font-medium transition-all duration-300 hidden md:block ${hoveredIndex === index ? "text-cyan-300" : "text-white/70"}`}>
                {link.name}
              </span>
            </motion.div>
          </Link>
        ))}
        
        <div className="w-px h-6 bg-white/10 mx-1 shrink-0" />

        {mounted && (
            <button 
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-cyan-300 transition-colors shrink-0"
                aria-label="Toggle Theme"
            >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
        )}
        
        <button className="px-3 sm:px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white text-xs sm:text-sm font-bold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-shadow ml-1 shrink-0 whitespace-nowrap">
          Get Quote
        </button>
      </motion.div>
    </div>
  );
}
