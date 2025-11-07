"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const solutions = [
  { title: "Ready-to-Use Chambers", href: "#" },
  { title: "Flexible Rental Plans", href: "#" },
  { title: "Premium Shared Chambers", href: "#" },
  { title: "Facility Management", href: "#" },
  { title: "Tech-Enabled Operations", href: "#" },
  { title: "Prime Location Access", href: "#" }
];

export default function SolutionsSplitSection() {
  return (
    <section className="bg-primary-dark text-white relative overflow-hidden">
      <div className="container mx-auto px-5 md:px-12 grid grid-cols-1 lg:grid-cols-2 relative z-10">

        {/* IMAGE */}
        <div className="relative h-[80vh] overflow-hidden rounded-b-3xl lg:rounded-none">
          <Image
            src="/Coridor.jpg"
            alt="Workspace visual"
            fill
            className="object-cover scale-110 brightness-95 transition-all duration-700 ease-out"
          />

          {/* Enhanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/10" />

          {/* CONTENT WRAPPER */}
          <div className="absolute left-8 lg:left-16 top-1/2 -translate-y-1/2 w-[90%] max-w-lg">

            {/* MAIN HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-white text-4xl lg:text-6xl font-extrabold leading-tight mb-5 tracking-tight"
            >
              CliStart <br />
              <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                Chambers
              </span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-white/85 text-lg lg:text-xl leading-relaxed font-light max-w-md"
            >
              Redefining healthcare infrastructure with premium, technology-enabled, ready-to-use clinic spaces designed for modern practitioners.
            </motion.p>
          </div>
        </div>

        {/* SOLUTIONS MENU */}
        <div className="bg-primary-medium text-white flex flex-col justify-center px-10 lg:px-20 py-20 relative overflow-hidden">
          {/* Soft radial highlight */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

          {/* TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center lg:text-left leading-tight drop-shadow-sm"
          >
            Explore Our Solutions
          </motion.h2>

          {/* NAVIGATION LIST */}
          <div className="flex flex-col w-full space-y-10 relative z-10">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.7 }}
                className="group border-b border-white/20 pb-4 cursor-pointer relative"
              >
                <Link
                  href={solution.href}
                  className="text-xl lg:text-2xl font-medium tracking-wide relative inline-block transition-all duration-300 group-hover:text-white/70"
                >
                  {solution.title}
                </Link>

                {/* Slide Underline */}
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white/70 transition-all duration-300 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
