"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ContactForm } from "./ContactForm";
import Link from "next/link";
import { Linkedin, Github, Mail, MapPin, ArrowRight, Instagram } from "lucide-react";

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-slate-300 text-lg">
            Have a project in mind or want to discuss collaboration opportunities? I'm just a message away.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <motion.div
            variants={itemVariants}
            className="space-y-10"
          >
            <div className="space-y-8">
              <motion.div
                variants={itemVariants}
                className="group p-6 bg-slate-900/60 backdrop-blur-sm border border-slate-800/50 rounded-xl hover:border-indigo-500/20 transition duration-300"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 bg-blue-500/10 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-slate-100 font-medium text-lg mb-1 group-hover:text-blue-400 transition-colors">Email</h4>
                    <Link
                      href="mailto:yishu2005.ju@gmail.com"
                      className="text-slate-300 hover:text-blue-400 transition-colors flex items-center"
                    >
                      yishu2005.ju@gmail.com
                      <ArrowRight className="ml-2 h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </Link>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="group p-6 bg-slate-900/60 backdrop-blur-sm border border-slate-800/50 rounded-xl hover:border-indigo-500/20 transition duration-300"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 bg-purple-500/10 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-slate-100 font-medium text-lg mb-1 group-hover:text-purple-400 transition-colors">Location</h4>
                    <p className="text-slate-300 group-hover:text-purple-300 transition-colors">Bangalore, India</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="space-y-5">
              <h3 className="text-xl font-semibold text-slate-100">Connect with me</h3>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://www.linkedin.com/in/ayushrai13/"
                  target="_blank"
                  className="group"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-600 rounded-lg blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <div className="relative flex items-center justify-center h-12 w-12 rounded-lg bg-slate-800 border border-slate-700 group-hover:border-blue-500/50 text-slate-200 group-hover:text-blue-400 transition-all duration-300">
                      <Linkedin className="h-5 w-5" />
                    </div>
                  </div>
                  <span className="sr-only">LinkedIn</span>
                </Link>

                <Link
                  href="https://github.com/ayu-yishu13"
                  target="_blank"
                  className="group"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-slate-500 rounded-lg blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <div className="relative flex items-center justify-center h-12 w-12 rounded-lg bg-slate-800 border border-slate-700 group-hover:border-slate-500/50 text-slate-200 group-hover:text-white transition-all duration-300">
                      <Github className="h-5 w-5" />
                    </div>
                  </div>
                  <span className="sr-only">GitHub</span>
                </Link>

                <Link
                  href="mailto:yishu2005.ju@gmail.com"
                  className="group"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-purple-600 rounded-lg blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <div className="relative flex items-center justify-center h-12 w-12 rounded-lg bg-slate-800 border border-slate-700 group-hover:border-purple-500/50 text-slate-200 group-hover:text-purple-400 transition-all duration-300">
                      <Mail className="h-5 w-5" />
                    </div>
                  </div>
                  <span className="sr-only">Email</span>
                </Link>

                <Link
                  href="https://www.instagram.com/_ayush.rai_?igsh=MXI5M2Z4and6a2thbQ=="
                  target="_blank"
                  className="group"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <div className="relative flex items-center justify-center h-12 w-12 rounded-lg bg-slate-800 border border-slate-700 group-hover:border-pink-500/50 text-slate-200 group-hover:text-pink-400 transition-all duration-300">
                      <Instagram className="h-5 w-5" />
                    </div>
                  </div>
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl blur-xl transform -rotate-3 scale-105 opacity-50"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-800/80 hover:border-slate-700/80 transition-colors rounded-xl p-8 shadow-xl">
              <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Send me a Message
              </h3>
              <ContactForm />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
