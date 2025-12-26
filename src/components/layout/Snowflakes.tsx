"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadTextShape } from "@tsparticles/shape-text"; // Needed for "char" type

const Snowflakes = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // 1. Load the basic engine
      await loadSlim(engine);
      // 2. Load the specific plugin that allows "❄" shapes
      await loadTextShape(engine); 
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: true, zIndex: 1000 },
        fpsLimit: 60,
        particles: {
          number: {
            value: 40, // Reduced slightly for better performance
            density: { enable: true },
          },
          color: { value: "#ffffff" },
          shape: {
            type: "char",
            options: {
              char: {
                value: ["AI", "ML", "NIDS", "DATA", "CODE", "IEEE", "PYTHON"],
                font: "JetBrains Mono, Fira Code, monospace",
                weight: "900",
              },
            },
          },
          opacity: {
            value: { min: 0.3, max: 0.8 },
            animation: {
              enable: true,
              speed: 2,
              sync: false,
            },
          },
          size: {
            value: { min: 8, max: 10 },
          },
          move: {
            enable: true,
            direction: "bottom",
            speed: { min: 1, max: 3 },
            straight: false, // Makes it move naturally
            outModes: { default: "out" },
          },
          wobble: {
            enable: true,
            distance: 15,
            speed: 5,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: false }, // Critical so you can click your CV buttons
          },
        },
        detectRetina: true,
      }}
      style={{ pointerEvents: "none" }} // Double security for button clicks
    />
  );
};

export default Snowflakes;