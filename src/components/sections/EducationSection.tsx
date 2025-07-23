"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description?: string;
}

const educationData: Education[] = [
  {
    id: 1,
    degree: "B.Tech in Computer Science and Engineering",
    institution: "K. S. Institute of Technology",
    location: "Bangalore, India",
    period: "2019 - 2023",
    description: "Focused on artificial intelligence and machine learning, graduating with distinction. Participated in multiple research projects and competitions.",
  },
  {
    id: 2,
    degree: "Research Internship",
    institution: "Defence Research & Development Organisation (DRDO)",
    location: "Microwave Tube Research & Development Centre (MTRDC)",
    period: "2024",
    description: "Conducted research on advanced AI applications for defense technologies. Worked on transformer-based models for data analysis."
  },
  {
    id: 3,
    degree: "Research Assistant",
    institution: "University of British Columbia (UBC)",
    location: "Remote Collaboration",
    period: "2023 - 2024",
    description: "Collaborated on cutting-edge AI research projects, focusing on computer vision and deep learning applications."
  }
];

export function EducationSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"
          >
            Education & Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-300 max-w-3xl mx-auto"
          >
            My academic journey and professional experience in the field of AI and machine learning.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto relative"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-blue-300 opacity-30 hidden md:block" />

          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0 ? "md:pr-12 md:ml-auto" : "md:pl-12"
              }`}
            >
              {/* Timeline dot */}
              <div className={`absolute top-0 ${
                index % 2 === 0 ? "md:-left-2.5" : "md:-left-2.5 left-0"
              } w-5 h-5 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50 hidden md:block`} />

              {/* Timeline connector */}
              <div className={`absolute top-2.5 ${
                index % 2 === 0 ? "md:-left-8 md:w-6" : "md:left-auto md:-right-8 md:w-6 left-2.5 w-8"
              } h-0.5 bg-blue-400/50 hidden md:block`} />

              <div className="bg-slate-800/80 border border-slate-700 rounded-lg p-6 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5 hover:bg-slate-800/90">
                <div className="inline-block px-3 py-1 mb-3 text-xs font-medium rounded-full bg-blue-500/10 text-blue-400">
                  {item.period}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-100">
                  {item.degree}
                </h3>
                <p className="text-slate-300 font-medium">
                  {item.institution}
                </p>
                <p className="text-slate-400 text-sm mb-3">
                  {item.location}
                </p>
                {item.description && (
                  <p className="text-slate-300 text-sm">
                    {item.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
