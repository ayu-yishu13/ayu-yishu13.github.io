"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Publication {
  id: number;
  title: string;
  conference: string;
  year: number;
  link?: string;
}

const publications: Publication[] = [
  {
    id: 1,
    title: "##",
    conference: "##",
    year: "##",
    link: "....",
  },
];

export function PublicationsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="publications" className="py-16 sm:py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-10 sm:mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl opacity-30"></div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 relative z-10"
          >
            ##
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-300 max-w-3xl mx-auto text-sm sm:text-base"
          >
            Coming Soon
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto space-y-6"
        >
          {publications.map((publication) => (
            <motion.div
              key={publication.id}
              variants={itemVariants}
              className="bg-slate-900/60 border border-slate-800/70 backdrop-blur-sm rounded-lg p-6 hover:border-indigo-500/50 transition-colors group"
            >
              <h3 className="text-xl font-semibold mb-2 text-slate-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-colors">
                {publication.title}
              </h3>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-slate-300">{publication.conference}</p>
                  <p className="text-slate-400">{publication.year}</p>
                </div>
                {publication.link && (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-indigo-600/50 text-indigo-400 hover:bg-indigo-600/10 hover:text-indigo-300 transition-all duration-300"
                  >
                    <Link href={publication.link} target="_blank">
                      Available Soon
                    </Link>
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
