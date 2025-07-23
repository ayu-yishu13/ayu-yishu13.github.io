"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BrainCircuit, MessagesSquare, Cpu } from "lucide-react";

const researchAreas = [
  {
    id: 1,
    title: "Deep Learning Applications",
    description:
      "Developing novel architectures for computer vision tasks with a focus on efficiency and accuracy.",
    icon: BrainCircuit,
  },
  {
    id: 2,
    title: "Natural Language Processing",
    description:
      "Investigating transformer-based models for contextual understanding and semantic analysis.",
    icon: MessagesSquare,
  },
  {
    id: 3,
    title: "Reinforcement Learning",
    description:
      "Exploring multi-agent systems and policy optimization techniques for complex environments.",
    icon: Cpu,
  },
];

export function ResearchSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="research" className="py-16 sm:py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-10 sm:mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl opacity-30"></div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 relative z-10"
          >
            Research Focus
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-300 max-w-3xl mx-auto text-sm sm:text-base"
          >
            My research explores the frontiers of artificial intelligence and machine learning,
            with a focus on practical applications and theoretical advancements.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {researchAreas.map((area) => (
            <motion.div key={area.id} variants={itemVariants}>
              <Card className="bg-slate-900/60 border-slate-800/70 h-full hover:shadow-lg hover:shadow-indigo-600/10 transition-all duration-300 group">
                <CardContent className="p-4 md:p-6 flex flex-col items-center text-center">
                  <div className="mb-4 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-600/20 to-purple-600/20 text-indigo-400 group-hover:scale-110 transition-all duration-300">
                    <area.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-slate-300 text-sm md:text-base">{area.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
