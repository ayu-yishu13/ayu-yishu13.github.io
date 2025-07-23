"use client";

import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { Github, Linkedin, Mail, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

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
const WORDS = ["Machine Learning", "Deep Learning ", "Natural Language processing ", "Large Language model","Federated Learning","Neural Networks",];

const SOCIAL_LINKS = [
  { icon: Github, link: "https://github.com/ayu-yishu13", label: "GitHub" },
  { icon: Linkedin, link: "www.linkedin.com/in/ayushrai13", label: "LinkedIn" },
  { icon: Mail, link: "mailto:yishu2005.ju@gmail.com", label: "Email" }
];

// Add array of machine learning GIFs
const ML_GIFS = [
  { src: "/6.jpg", alt: "AI&ML future" },
  { src: "/ai1.jpeg", alt: "AI&ML future" },
  { src: "/2.jpg", alt: "AI&ML future" },
  
  { src: "/3.jpg", alt: "AI&ML future" },
  { src: "/4.jpeg", alt: "AI&ML future" },
  { src: "/5.jpeg", alt: "AI&ML future" }, 
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
    return () => setIsLoaded(false);
  }, []);

  // Auto change GIF every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentGifIndex(prev => (prev + 1) % ML_GIFS.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  // Function to manually change the GIF
  const changeGif = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setCurrentGifIndex(prev => (prev + 1) % ML_GIFS.length);
    } else {
      setCurrentGifIndex(prev => (prev - 1 + ML_GIFS.length) % ML_GIFS.length);
    }
  };

  // Typing effect
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
    <section id="home" className="relative py-16 md:py-24 lg:py-28 overflow-hidden min-h-[85vh] md:min-h-[90vh] lg:min-h-screen flex items-center justify-center">
      <div className={`relative z-10 transition-all duration-1000 w-full ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <div className="container mx-auto px-4 md:px-8 max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="space-y-4 sm:space-y-6">
              <div className="space-y-2" data-aos="fade-up" data-aos-delay="600">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-tight">
                  <span className="relative inline-block">
                    <span className="absolute -inset-2 bg-gradient-to-r from-indigo-600 to-purple-600 blur-2xl opacity-20"></span>
                    <span className="relative bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                      Ayush 
                    </span>
                  </span>
                  <br />
                  <span className="relative inline-block mt-2">
                    <span className="absolute -inset-2 bg-gradient-to-r from-indigo-600 to-purple-600 blur-2xl opacity-20"></span>
                    <span className="relative bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      Kumar Rai
                    </span>
                  </span>
                </h1>
              </div>

              {/* Typing Effect */}
              <div className="h-8 flex items-center justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="800">
                <span className="text-lg md:text-xl bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent font-light">
                  {text}
                </span>
                <span className="w-[3px] h-6 bg-gradient-to-t from-indigo-600 to-purple-600 ml-1 animate-pulse"></span>
              </div>

              {/* Description */}
              <p className="text-sm md:text-base text-gray-400 max-w-xl leading-relaxed font-light mx-auto lg:mx-0"
                data-aos="fade-up"
                data-aos-delay="1000">
                I am Ayush Kumar Rai, a Computer Science student specializing in Artificial Intelligence and Machine Learning. My academic journey involves hands-on experience with algorithms, data structures, and model training techniques. I frequently work with Python, NumPy, and scikit-learn for ML project development.

                I have built and deployed machine learning models using tools like SVM, K-Means, and Linear Regression. My interests include image classification, gesture recognition, and predictive analytics. I prefer efficient backend implementation with local deployment and Git-based version control.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="1200">
                <Button asChild className="group relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-5 py-2 rounded-lg transition-all duration-300">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                    className="cursor-pointer"
                  >
                    <span className="relative z-10">Skill Set & Education</span>
                    <span className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </Link>
                </Button>
                <Button asChild className="group relative overflow-hidden border border-indigo-600/50 hover:border-indigo-600 text-white px-5 py-2 rounded-lg transition-all duration-300">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                    className="cursor-pointer"
                  >
                    <span className="relative z-10 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Contact Me</span>
                    <span className="absolute inset-0 bg-indigo-600/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </Link>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="1400">
                {SOCIAL_LINKS.map((social, index) => (
                  <SocialLink key={index} {...social} />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            data-aos="fade-left"
            data-aos-delay="600"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full h-full max-w-md mx-auto lg:max-w-lg overflow-hidden rounded-xl">
              <div className={`absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-xl blur-3xl transition-all duration-700 ease-in-out ${
                isHovering ? "opacity-70 scale-105" : "opacity-30 scale-100"
              }`}></div>

              {/* GIF Carousel */}
              <div className="relative">
                {/* The GIF */}
                <motion.img
                  key={currentGifIndex}
                  src={ML_GIFS[currentGifIndex].src}
                  alt={ML_GIFS[currentGifIndex].alt}
                  className="w-full h-auto object-cover rounded-xl border border-indigo-500/30 shadow-xl z-10 relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Navigation Buttons */}
                <div className="absolute top-1/2 left-0 right-0 flex justify-between -translate-y-1/2 px-2 z-20">
                  <button
                    onClick={() => changeGif('prev')}
                    className="bg-black/40 backdrop-blur-sm hover:bg-black/60 text-white p-1.5 rounded-full transition-all"
                    aria-label="Previous GIF"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() => changeGif('next')}
                    className="bg-black/40 backdrop-blur-sm hover:bg-black/60 text-white p-1.5 rounded-full transition-all"
                    aria-label="Next GIF"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>

                {/* Indicators */}
                <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-20">
                  {ML_GIFS.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentGifIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentGifIndex
                          ? "bg-white scale-125"
                          : "bg-white/50 hover:bg-white/80"
                      }`}
                      aria-label={`Switch to GIF ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div className="absolute inset-0 rounded-xl border border-indigo-400/20 shadow-inner pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
