"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Home, Info, Briefcase, Mail, Phone, Moon, Sun, MonitorPlay, X, Check, ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { createPortal } from "react-dom";
import { submitToWeb3Forms } from "@/utils/web3forms";

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
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        service: formData.get('service'),
        message: formData.get('message'),
        subject: "New Quote Request - Elite Edge"
    };

    const result = await submitToWeb3Forms(data);

    if (result.success) {
        setFormStatus('success');
        setTimeout(() => {
            setIsQuoteOpen(false);
            setFormStatus('idle');
        }, 3000);
    } else {
        alert("Something went wrong. Please try again.");
        setFormStatus('idle');
    }
  };

  return (
    <>
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
            
            <button 
                onClick={() => setIsQuoteOpen(true)}
                className="px-3 sm:px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white text-xs sm:text-sm font-bold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-shadow ml-1 shrink-0 whitespace-nowrap"
            >
            Get Quote
            </button>
        </motion.div>
        </div>

        {/* Get Quote Modal Portal */}
        {mounted && createPortal(
            <AnimatePresence>
            {isQuoteOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsQuoteOpen(false)}
                    className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                />
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl overflow-hidden border border-cyan-100 dark:border-cyan-900"
                >
                    {/* Decorative Header */}
                    <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-10" />
                    
                    <div className="relative p-8 z-10">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-2xl font-bold font-outfit text-slate-900 dark:text-white">Request a Quote</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Tell us about your needs and we'll get back to you.</p>
                            </div>
                            <button 
                                onClick={() => setIsQuoteOpen(false)}
                                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500 dark:text-slate-400"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {formStatus === 'success' ? (
                            <div className="py-12 flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
                                    <Check className="w-8 h-8" />
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Request Received!</h4>
                                <p className="text-slate-500 dark:text-slate-400">We'll be in touch with you shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Full Name</label>
                                    <input name="name" required type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all dark:text-white" placeholder="John Doe" />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Email Address</label>
                                    <input name="email" required type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all dark:text-white" placeholder="john@example.com" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Service Type</label>
                                    <div className="relative">
                                        <select name="service" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all dark:text-white appearance-none cursor-pointer">
                                            <option>Facility Management</option>
                                            <option>Workforce & Staffing</option>
                                            <option>Project Management</option>
                                            <option>Import & Export</option>
                                            <option>Other</option>
                                        </select>
                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Message</label>
                                    <textarea name="message" required className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all dark:text-white min-h-[100px] resize-none" placeholder="How can we help you?"></textarea>
                                </div>

                                <button 
                                    disabled={formStatus === 'submitting'}
                                    className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-xl shadow-lg shadow-cyan-500/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                                >
                                    {formStatus === 'submitting' ? 'Sending...' : 'Submit Request'}
                                </button>
                            </form>
                        )}
                    </div>
                </motion.div>
                </div>
            )}
            </AnimatePresence>,
            document.body
        )}
    </>
  );
}
