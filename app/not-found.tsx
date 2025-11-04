"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  return (
    <section className="bg-white min-h-screen flex items-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto px-5 py-12"
      >
        <div className="grid grid-cols-2 items-center gap-10">
          {/* Left content */}
          <motion.div
            variants={containerVariants}
            className="col-span-1 text-center md:text-left space-y-6"
          >
            <motion.h1
              variants={itemVariants}
              className="text-[7rem] sm:text-[9rem] font-extrabold leading-none bg-gradient-to-r from-primary-medium to-primary-light text-transparent bg-clip-text"
            >
              404
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-semibold text-gray-900"
            >
              Page Not Found
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl"
            >
              The page you&apos;re looking for seems to be out of focus. Maybe it
              was cropped—or never developed. Let&apos;s find you a better angle.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-3 font-semibold text-sm tracking-widest uppercase rounded-md bg-primary-medium text-white transition-all duration-300 hover:bg-primary-dark"
              >
                Back to Home
              </Link>
            </motion.div>
          </motion.div>

          {/* Right image */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 relative w-full h-[300px] md:h-[500px] flex justify-center md:justify-end"
          >
            <div className="relative w-full h-full">
              <Image
                src="/Thinking_Boy.png"
                alt="Illustration of a boy thinking - 404 Not Found"
                fill
                priority
                className="object-contain md:object-right"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
