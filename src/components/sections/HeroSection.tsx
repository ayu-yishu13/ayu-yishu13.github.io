"use client";

import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { Github, Linkedin, Mail, ChevronLeft, ChevronRight, Terminal, Zap } from "lucide-react";

// Memoized Components for better performance
const SocialLink = ({ icon: Icon, link, label }: { icon: React.ElementType; link: string; label: string }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" aria-label={label}>
    <button className="group relative p-3">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
      <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
        <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
      </div>
    </button>
  </a>
);

// Constants
const TYPING_SPEED = 100;
const ERASING_SPEED = 50;
const PAUSE_DURATION = 2000;
// Updated with your specific expertise from CV
const WORDS = [
  "Machine Learning Engineer",
  "AI Security Researcher",
  "Full-Stack Developer",
  "Deep Learning Specialist",
  "Adaptive AI Architect"
];

const SOCIAL_LINKS = [
  { icon: Github, link: "https://github.com/ayu-yishu13", label: "GitHub" },
  { icon: Linkedin, link: "https://www.linkedin.com/in/ayushrai13", label: "LinkedIn" },
  { icon: Mail, link: "mailto:yishu2005.ju@gmail.com", label: "Email" }
];

const ML_GIFS = [
  { src: "/6.jpg", alt: "AI & Network Security Monitoring" },
  { src: "/grp.jpeg", alt: "ICMNWC IEEE Paper" },
  { src: "/ai1.jpeg", alt: "Neural Network Visualization" },
  { src: "/3.jpg", alt: "Deep Learning Architectures" },
  { src: "/4.jpeg", alt: "Cybersecurity Operations" },
  { src: "/5.jpeg", alt: "Data Science & Analytics" }, 
];

export function HeroSection() {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [currentGifIndex, setCurrentGifIndex] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentGifIndex(prev => (prev + 1) % ML_GIFS.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const changeGif = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setCurrentGifIndex(prev => (prev + 1) % ML_GIFS.length);
    } else {
      setCurrentGifIndex(prev => (prev - 1 + ML_GIFS.length) % ML_GIFS.length);
    }
  };

  const handleTyping = useCallback(() => {
    if (isTyping) {
      if (charIndex < WORDS[wordIndex].length) {
        setText(prev => prev + WORDS[wordIndex][charIndex]);
        setCharIndex(prev => prev + 1);
      } else {
        setTimeout(() => setIsTyping(false), PAUSE_DURATION);
      }
    } else {
      if (charIndex > 0) {
        setText(prev => prev.slice(0, -1));
        setCharIndex(prev => prev - 1);
      } else {
        setWordIndex(prev => (prev + 1) % WORDS.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, wordIndex]);

  useEffect(() => {
    const timeout = setTimeout(
      handleTyping,
      isTyping ? TYPING_SPEED : ERASING_SPEED
    );
    return () => clearTimeout(timeout);
  }, [handleTyping, isTyping]);

  return (
    <section id="home" className="relative py-16 md:py-24 lg:py-28 overflow-hidden min-h-screen flex items-center justify-center bg-[#030712]">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-10" />

      <div className={`relative z-10 transition-all duration-1000 w-full ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <div className="container mx-auto px-4 md:px-8 max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <motion.div
            className="w-full lg:w-3/5 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* 9.0 CGPA Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Zap size={14} />
              <span>Academic Excellence: 9.0 CGPA</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400">Ayush</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-indigo-600">Kumar Rai</span>
            </h1>

            {/* Typing Effect */}
            <div className="h-10 flex items-center justify-center lg:justify-start mb-6">
              <Terminal className="text-indigo-500 mr-2" size={20} />
              <span className="text-xl md:text-2xl text-slate-300 font-mono italic">
                {text}
              </span>
              <span className="w-[3px] h-6 bg-indigo-500 ml-1 animate-pulse"></span>
            </div>

            {/* Professional Description based on CV */}
            <p className="text-base md:text-lg text-slate-400 max-w-2xl leading-relaxed mb-8 mx-auto lg:mx-0">
              Technical engineer specializing in **Adaptive AI Systems** and **Cybersecurity Monitoring**. 
              With a **9.0 CGPA** and published **IEEE research**, I bridge the gap between machine learning research and real-time security operations. 
              Engineered high-accuracy NIDS (96.53%) and modern financial management platforms.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button asChild className="h-10 px-8 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition-all shadow-lg shadow-indigo-500/20 active:scale-95">
                <Link to="projects" spy={true} smooth={true} offset={-90} duration={500} className="cursor-pointer font-bold">
                  View My Research & Projects
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-10 px-8 border-slate-700 hover:bg-slate-800 text-white rounded-xl transition-all active:scale-95">
                <Link to="contact" spy={true} smooth={true} offset={-90} duration={500} className="cursor-pointer font-bold">
                  Let&apos;s Connect
                </Link>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {SOCIAL_LINKS.map((social, index) => (
                <SocialLink key={index} {...social} />
              ))}
            </div>
          </motion.div>

          {/* GIF / Visual Section */}
          <motion.div
            className="w-full lg:w-2/5"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              
              <div className="relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                <motion.img
                  key={currentGifIndex}
                  src={ML_GIFS[currentGifIndex].src}
                  alt={ML_GIFS[currentGifIndex].alt}
                  className="w-full h-[400px] object-cover opacity-80"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.8 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Overlay Controls */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold uppercase tracking-widest text-indigo-400">
                      Research Focus: {ML_GIFS[currentGifIndex].alt}
                    </p>
                    <div className="flex gap-2">
                      <button onClick={() => changeGif('prev')} className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-white transition-colors">
                        <ChevronLeft size={16} />
                      </button>
                      <button onClick={() => changeGif('next')} className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-white transition-colors">
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
