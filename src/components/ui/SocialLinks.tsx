"use client";

import React from 'react';
import { Github, Linkedin, Mail, Twitter, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

type SocialLink = {
  icon: React.ElementType;
  link: string;
  label: string;
  delay?: number;
};

interface SocialLinksProps {
  links?: SocialLink[];
  className?: string;
  iconSize?: number;
  showLabels?: boolean;
}

const defaultLinks: SocialLink[] = [
  {
    icon: Github,
    link: "https://github.com/ayu-yishu13",
    label: "GitHub",
    delay: 0
  },
  {
    icon: Linkedin,
    link: "www.linkedin.com/in/ayushrai13",
    label: "LinkedIn",
    delay: 0.1
  },
  {
    icon: Mail,
    link: "mailto:yishu2005.ju@gmail.com@gmail.com",
    label: "Email",
    delay: 0.2
  },
  {
    icon: Twitter,
    link: "https://x.com/Yishu1303",
    label: "Twitter",
    delay: 0.3
  }
];

const SocialLinks: React.FC<SocialLinksProps> = ({
  links = defaultLinks,
  className = "flex gap-4 justify-center",
  iconSize = 20,
  showLabels = false
}) => {
  return (
    <div className={className}>
      {links.map((item, index) => (
        <motion.a
          key={item.label}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: item.delay || 0.1 * index }}
          className="group relative"
          data-aos="fade-up"
          data-aos-delay={`${(item.delay || 0.1 * index) * 1000}`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
          <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300 hover:scale-110">
            <item.icon className={`w-${iconSize/4} h-${iconSize/4} text-gray-400 group-hover:text-white transition-colors`} style={{ width: iconSize, height: iconSize }} />
            {showLabels && (
              <span className="ml-2 text-sm font-medium text-gray-300 group-hover:text-white">{item.label}</span>
            )}
          </div>
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;
