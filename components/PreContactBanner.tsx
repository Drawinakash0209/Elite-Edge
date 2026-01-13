"use client";

import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export default function PreContactBanner() {
  const words = ["Reliability", "Excellence", "Precision", "Quality"];

  return (
    <section className="h-[20rem] flex justify-center items-center px-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="text-4xl md:text-5xl mx-auto font-normal text-slate-600 dark:text-slate-400 text-center">
        We deliver
        <FlipWords words={words} duration={1500} className="text-cyan-600 dark:text-cyan-400 font-bold" /> <br />
        for your business operations.
      </div>
    </section>
  );
}
