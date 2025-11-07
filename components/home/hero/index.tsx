"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Premium Medical Chambers",
    subtitle:
      "Fully furnished spaces designed for healthcare professionals to start their practice with ease.",
    image: "/Clistarthero.jpg",
  },
  {
    id: 2,
    title: "Prime Delhi & Gurugram Spots",
    subtitle:
      "Set up your clinic in top locations with modern amenities and zero setup hassle.",
    image: "/Working_space.jpg",
  },
  {
    id: 3,
    title: "Smart, Ready-to-Use Spaces",
    subtitle:
      "Experience comfort, privacy, and professionalism in every CliStart chamber.",
    image: "/Child_Section.jpg",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [hover, setHover] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-slide every 7s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  // Parallax movement
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    containerRef.current.style.setProperty("--x", `${x * 6}px`);
    containerRef.current.style.setProperty("--y", `${y * 6}px`);
  };

  // Sleek easing
  const ease = [0.65, 0, 0.35, 1];

  return (
    <section className="bg-black">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative overflow-hidden h-[70vh] md:h-[90vh]"
      >
        <AnimatePresence initial={false}>
          {slides.map(
            (slide, index) =>
              index === current && (
                <motion.div
                  key={slide.id}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
                >
                  {/* Background image */}
                  <motion.div
                    className="absolute inset-0 bg-black"
                    style={{
                      transform: `translate3d(var(--x), var(--y), 0)`,
                      transition: "transform 0.1s ease-out",
                    }}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      priority
                      className="object-cover brightness-[0.85]"
                    />
                  </motion.div>

                  {/* Light sweep for subtle motion */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent mix-blend-overlay pointer-events-none"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent" />

                  {/* Text Content */}
                  <div className="container mx-auto relative z-10 flex flex-col justify-center h-full px-5 md:px-12 text-white">
                    <motion.div
                      key={slide.id}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={{
                        hidden: {},
                        visible: {
                          transition: {
                            staggerChildren: 0.2,
                            delayChildren: 0.4,
                          },
                        },
                        exit: {
                          transition: { staggerChildren: 0.15, staggerDirection: -1 },
                        },
                      }}
                      className="max-w-xl space-y-6 overflow-hidden"
                    >
                      <motion.h1
                        variants={{
                          hidden: { x: 100, opacity: 0 },
                          visible: { x: 0, opacity: 1, transition: { duration: 1, ease } },
                          exit: { x: -80, opacity: 0, transition: { duration: 0.8, ease } },
                        }}
                        // whitespace-pre-line text-4xl md:text-6xl font-normal leading-tight tracking-tight
                        className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-white drop-shadow-[0_8px_25px_rgba(0,0,0,0.4)]"
                      >
                        {slide.title}
                      </motion.h1>

                      <motion.p
                        variants={{
                          hidden: { x: 100, opacity: 0 },
                          visible: { x: 0, opacity: 1, transition: { duration: 1, ease } },
                          exit: { x: -80, opacity: 0, transition: { duration: 0.8, ease } },
                        }}
                        className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl font-light"
                      >
                        {slide.subtitle}
                      </motion.p>

                      <motion.div
                        variants={{
                          hidden: { x: 100, opacity: 0 },
                          visible: { x: 0, opacity: 1, transition: { duration: 1, ease } },
                          exit: { x: -80, opacity: 0, transition: { duration: 0.8, ease } },
                        }}
                      >
                        <motion.button
                          onMouseEnter={() => setHover(true)}
                          onMouseLeave={() => setHover(false)}
                          whileHover={{ x: 5 }}
                          className="group relative inline-flex items-center bg-primary-medium text-white font-semibold px-8 py-3 overflow-hidden rounded-md"
                        >
                          <motion.div
                            className="absolute inset-0 bg-primary-medium"
                            initial={{ x: "-100%" }}
                            animate={{ x: hover ? "0%" : "-100%" }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                          />
                          <span className="relative z-10 group-hover:text-white transition">
                            Explore Properties
                          </span>
                          <ArrowRight
                            className="ml-3 relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary-light"
                            size={18}
                          />
                        </motion.button>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
        {/* Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-8 text-white/80">
          <div className="flex items-center gap-4">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`relative w-2.5 h-2.5 rounded-full transition-all duration-500 ${current === i ? "bg-primary-medium" : "bg-white/30"
                  }`}
              >
                {current === i && (
                  <motion.div
                    layoutId="dot"
                    className="absolute inset-0 rounded-full bg-primary-medium"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
