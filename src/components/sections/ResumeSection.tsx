"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

export function ResumeSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section id="resume" className="py-20 bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"
          >
            Resume
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-300 max-w-3xl mx-auto"
          >
            View and download my professional resume to learn more about my background and qualifications.
          </motion.p>
        </div>

        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="bg-slate-900/60 border border-slate-800 rounded-lg p-6 md:p-8 overflow-hidden shadow-lg"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <div>
                <h3 className="text-xl font-semibold text-slate-100 mb-2">Ayush Kumar Rai</h3>
                <p className="text-slate-400">AI/ML Researcher & Engineer</p>
              </div>
              <Button asChild className="w-full md:w-auto" size="lg">
                <Link href="/images/ayushkumarrai_resume.pdf" target="_blank" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
            </div>

            <div className="relative aspect-[1/1.4] w-full bg-slate-800/50 border border-slate-700 rounded-md overflow-hidden">
              <iframe
                src="/images/ayushkumarrai_resume.pdf"
                className="absolute inset-0 w-full h-full"
                style={{ border: "none" }}
                title="Resume Preview"
              ></iframe>

              {/* Fallback for browsers that don't support PDF embedding */}
              <div className="absolute inset-0 flex items-center justify-center bg-slate-800/90">
                <div className="text-center p-6">
                  <p className="text-slate-200 mb-4">Resume preview may not be available in all browsers.</p>
                  <Button asChild>
                    <Link href="/images/ayushkumarrai_resume.pdf" target="_blank">
                      Open Resume in New Tab
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
