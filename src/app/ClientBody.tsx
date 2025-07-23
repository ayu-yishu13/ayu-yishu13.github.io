"use client";

import { useEffect, useState } from "react";
import WelcomeScreen from "@/components/ui/WelcomeScreen";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Add state to track if component is mounted
  const [isMounted, setIsMounted] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  // Only apply client-side classes after hydration
  useEffect(() => {
    setIsMounted(true);
    // Remove any extension-added classes during hydration
    document.body.className = "";

    // Initialize AOS with more responsive settings
    AOS.init({
      once: false,
      mirror: false,
      duration: 800,
      offset: 30,
      easing: 'ease-in-out',
      delay: 100,
      debounceDelay: 50,
      throttleDelay: 99,
    });

    // Refresh AOS on window resize for better responsiveness
    const handleResize = () => {
      AOS.refresh();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!isMounted) {
    return <body suppressHydrationWarning>{children}</body>;
  }

  return (
    <body className="antialiased bg-slate-950 text-slate-100 overflow-x-hidden" suppressHydrationWarning>
      <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
      <AnimatedBackground />
      {!showWelcome && children}
    </body>
  );
}
