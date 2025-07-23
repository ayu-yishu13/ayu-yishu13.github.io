"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface TechStackProps {
  technologies: string[];
}

const TechStack: React.FC<TechStackProps> = ({ technologies }) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center md:justify-start" data-aos="fade-up" data-aos-delay="300">
      {technologies.map((tech, index) => (
        <motion.div
          key={index}
          className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 * index }}
          whileHover={{ scale: 1.05 }}
        >
          {tech}
        </motion.div>
      ))}
    </div>
  );
};

export default TechStack;
