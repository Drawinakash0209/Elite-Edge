"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { submitToWeb3Forms } from "@/utils/web3forms";
import { GradientButton } from "@/components/ui/gradient-button";
import { FloatingPaths } from "@/components/ui/background-paths";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: `${formData.get('firstName')} ${formData.get('lastName')}`,
      email: formData.get('email'),
      message: formData.get('message'),
      subject: "New Contact Form Submission - Elite Edge"
    };

    const success = await submitToWeb3Forms(data);

    if (success) {
      setFormStatus('success');
      (e.target as HTMLFormElement).reset();
    } else {
      setFormStatus('error');
    }
    
    setTimeout(() => setFormStatus('idle'), 5000);
  }

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
      


      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none overflow-hidden">
          <FloatingPaths position={1} />
          <FloatingPaths position={-1} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 border-t border-slate-100 dark:border-slate-800 pt-12 md:pt-24">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold font-outfit mb-6 text-slate-900 dark:text-white">Let's Elevate Your Business</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 max-w-md">
              Reach out to our team to discover how Elite Edge can elevate your facility management and business operations.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-50 dark:bg-cyan-900/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 border border-cyan-100 dark:border-cyan-800">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Location</h4>
                  <p className="text-slate-500 dark:text-slate-400">Doha, Zone 24, Rawdat Al Khail</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Phone</h4>
                  <p className="text-slate-500 dark:text-slate-400">6672 4009</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-cyan-100 dark:border-cyan-900 shadow-[0_0_40px_-15px_rgba(6,182,212,0.2)] dark:shadow-[0_0_40px_-15px_rgba(6,182,212,0.4)] transition-colors duration-300"
          >
            <form onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const data = {
                name: `${formData.get('firstName')} ${formData.get('lastName')}`,
                email: formData.get('email'),
                message: formData.get('message'),
                subject: "New Contact Form Submission - Elite Edge"
              };
              
              const btn = e.currentTarget.querySelector('button');
              if (btn) {
                const originalText = btn.innerText;
                btn.innerText = 'Sending...';
                btn.disabled = true;
                
                const result = await submitToWeb3Forms(data);
                
                if (result.success) {
                  btn.innerText = 'Message Sent!';
                  btn.classList.add('bg-green-500');
                  (e.target as HTMLFormElement).reset();
                  setTimeout(() => {
                    btn.innerText = originalText;
                    btn.disabled = false;
                    btn.classList.remove('bg-green-500');
                  }, 3000);
                } else {
                  btn.innerText = 'Error. Try Again.';
                  btn.disabled = false;
                  setTimeout(() => {
                     btn.innerText = originalText;
                  }, 3000);
                }
              }
            }} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">First name</label>
                  <input name="firstName" required type="text" className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 transition-colors" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Last name</label>
                  <input name="lastName" required type="text" className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 transition-colors" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                <input name="email" required type="email" className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 transition-colors" placeholder="john@company.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                <textarea name="message" required className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 h-32 resize-none transition-colors" placeholder="We are confident that..."></textarea>
              </div>

              <GradientButton type="submit" className="w-full">
                Send Message
              </GradientButton>
            </form>
          </motion.div>

        </div>
        
        <div className="mt-24 pt-8 border-t border-slate-100 dark:border-slate-800 text-center transition-colors duration-300">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center mb-6"
          >
            <div className="relative w-20 h-20 md:w-24 md:h-24 opacity-90 hover:opacity-100 transition-opacity duration-300">
              <Image
                src="/logo1.png"
                alt="Elite Edge Logo"
                fill
                className="object-contain drop-shadow-lg dark:invert"
              />
            </div>
          </motion.div>

          <p className="text-slate-400 dark:text-slate-600 text-sm">&copy; {new Date().getFullYear()} Elite Edge for Facility Management Services W.L.L. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
