"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, Award } from "lucide-react"; // Added icons for more detail
import Link from "next/link";

interface Publication {
  id: number;
  title: string;
  conference: string;
  location: string;
  year: number;
  link: string;
  tags: string[];
}

const publications: Publication[] = [
  {
    id: 1,
    title: "Adaptive AI System for Intelligent Network Threat Analysis and Security Monitoring",
    conference: "5th IEEE International Conference on Mobile Networks and Wireless Communications (ICMNWC-2025)",
    location: "SSIT, Tumkur",
    year: 2025,
    link: "https://ieeexplore.ieee.org/",
    tags: ["Adaptive AI", "Network Security", "IEEE"]
  },
  {
    id: 2,
    title: "Computational Intelligence Strategies for Real-Time Security Operations",
    conference: "IEEE International Conference on Smart Futuristic Technology (ICSFT-2025)",
    location: "Bengaluru, India",
    year: 2025,
    link: "https://ieeexplore.ieee.org/",
    tags: ["Computational Intelligence", "Real-Time Ops", "Security"]
  },
];

export function PublicationsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <section id="publications" className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              className="flex items-center gap-2 text-indigo-400 font-semibold tracking-wider uppercase text-sm mb-3"
            >
              <Award size={18} />
              <span>Academic Contributions</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-4xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-400 tracking-tight"
            >
              Research <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-700">Publications</span>
            </motion.h2>
          </div>
          <motion.div 
             initial={{ opacity: 0 }} 
             animate={isInView ? { opacity: 1 } : {}}
             className="text-slate-400 text-sm italic"
          >
            Verified by IEEE Xplore Digital Library
          </motion.div>
        </div>

        <div ref={ref} className="grid grid-cols-1 gap-8">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-slate-900/40 border border-slate-800 rounded-2xl p-8 hover:bg-slate-800/40 transition-all duration-500"
            >
              {/* Animated Glow Border on Hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500 blur" />

              <div className="relative flex flex-col md:flex-row gap-8 items-start">
                <div className="hidden md:flex flex-col items-center justify-center p-4 bg-slate-800/50 rounded-xl border border-slate-700 min-w-[100px]">
                   <BookOpen className="text-indigo-400 mb-2" size={28} />
                   <span className="text-xs font-bold text-slate-500 uppercase">Paper</span>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pub.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-indigo-500/10 text-indigo-300 text-[10px] font-bold uppercase tracking-widest rounded-full border border-indigo-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-100 mb-4 leading-snug group-hover:text-white transition-colors">
                    {pub.title}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-400 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      <span>{pub.conference}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                      <span>{pub.location} | {pub.year}</span>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-auto self-center">
                  <Button
                    asChild
                    className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl px-6 py-6 h-auto shadow-lg shadow-indigo-500/20 transition-all active:scale-95"
                  >
                    <Link href={pub.link} target="_blank" className="flex items-center gap-2">
                      Read Paper <ExternalLink size={16} />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}