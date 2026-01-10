"use client";

import { motion } from "framer-motion";
import { Users, Building, Trophy, Clock } from "lucide-react";

const metrics = [
  {
    icon: <Users className="w-6 h-6" />,
    value: "Expert",
    label: "Core Team",
    description: "Industry Veterans"
  },
  {
    icon: <Building className="w-6 h-6" />,
    value: "Full",
    label: "Facility Services",
    description: "Comprehensive Care"
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    value: "100%",
    label: "Quality Focus",
    description: "German Standards"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    value: "24/7",
    label: "Operations",
    description: "Always Available"
  }
];

export default function ImpactMetrics() {
  return (
    <section className="py-12 bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-800 transition-colors duration-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 dark:bg-cyan-900/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/10">
                {metric.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold font-outfit text-slate-900 dark:text-white mb-1">
                {metric.value}
              </h3>
              <p className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                {metric.label}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
