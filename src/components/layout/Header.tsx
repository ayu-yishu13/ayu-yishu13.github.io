"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

const navigation = [
  { name: "Home", href: "home" },
  { name: "About", href: "about" },
  { name: "FOI", href: "research" },
  { name: "Publications", href: "publications" },
  { name: "Projects", href: "projects" },
  { name: "Certificates", href: "certificates" },
  { name: "Contact", href: "contact" },
];

export function Header() {
  const isScrolled = useScrollAnimation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Function to determine which section is currently active based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map(nav => nav.href);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section is in view (with some buffer for better UX)
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fix body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-slate-950/50 backdrop-blur-xl border-b border-slate-800/50"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        <motion.div
          className="flex lg:flex-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Ayush Kumar Rai
            </span>
          </Link>
        </motion.div>

        <div className="flex lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`relative p-2 text-slate-200 hover:text-white transition-transform duration-300 ease-in-out transform ${
              mobileMenuOpen ? "rotate-90 scale-125" : "rotate-0 scale-100"
            }`}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <ScrollLink
                to={item.href}
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                className="group relative px-1 py-2 text-sm font-medium"
              >
                <span
                  className={`relative z-10 transition-colors duration-300 ${
                    activeSection === item.href
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-semibold"
                      : "text-slate-200 group-hover:text-white"
                  }`}
                >
                  {item.name}
                </span>
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transform origin-left transition-transform duration-300 ${
                    activeSection === item.href
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </ScrollLink>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="hidden lg:flex lg:flex-1 lg:justify-end"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            asChild
            className="group relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg transition-all duration-300"
          >
            <Link href="/images/ayushkumarrai_resume.pdf" target="_blank" download>
              <span className="relative z-10">Download CV</span>
              <span className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Link>
          </Button>
        </motion.div>
      </nav>

      {/* Mobile menu - animated overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-slate-950 transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[-100%] pointer-events-none"
        }`}
        style={{ top: "64px" }}
      >
        <div className="flex flex-col h-full">
          <div className="px-4 py-6 space-y-4 flex-1">
            {navigation.map((item, index) => (
              <ScrollLink
                key={item.name}
                to={item.href}
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                className={`block px-4 py-3 text-lg font-medium transition-all duration-300 ease ${
                  activeSection === item.href
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-semibold"
                    : "text-slate-200 hover:text-white"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  transform: mobileMenuOpen ? "translateX(0)" : "translateX(50px)",
                  opacity: mobileMenuOpen ? 1 : 0,
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </ScrollLink>
            ))}
            <div className="pt-6 mt-6 border-t border-slate-800/50">
              <Button
                asChild
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
              >
                <Link href="/images/ayushkumarrai_resume.pdf" target="_blank" download>
                  Download CV
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
