"use client";

import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.33, 1, 0.68, 1] },
  },
};

const WhyChooseUs = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  return (
    <section className="bg-white py-20 md:py-28 relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] h-[90vw] bg-primary-medium/5 rounded-full blur-3xl -z-10" />

      <div ref={ref} className="container mx-auto px-5">
        {/* Section Title */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={container}
          className="max-w-2xl mx-auto text-center mb-16 md:mb-24"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-semibold text-black tracking-tight"
          >
            Why Choose <span className="text-primary-medium">CliStart</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-gray-600 mt-4 text-base md:text-lg leading-relaxed"
          >
            Empowering healthcare professionals with thoughtfully designed,
            ready-to-use medical chambers in the most sought-after locations.
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05, y: 60 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                scale: 1,
                y: 0,
                transition: { duration: 1.4, ease: [0.33, 1, 0.68, 1] },
              },
            }}
            className="relative rounded-2xl overflow-hidden h-[340px] sm:h-[460px] lg:h-[530px] shadow-sm"
          >
            <motion.div
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, ease: [0.33, 1, 0.68, 1] }}
              className="w-full h-full"
            >
              <Image
                src="/Coridor.jpg"
                alt="Modern medical corridor"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover w-full h-full"
              />
            </motion.div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
            />
          </motion.div>

          {/* Right Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
            variants={container}
            initial="hidden"
            animate={controls}
          >
            {[
              {
                title: "Global Reach",
                value: "85+",
                desc: "offices worldwide",
              },
              {
                title: "Local Expertise",
                value: "1,500+",
                desc: "employees",
              },
              {
                title: "Our Impact",
                value: "248+",
                desc: "projects done",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
                className="bg-[#f9f9f9] p-6 sm:p-8 rounded-2xl flex flex-col justify-between backdrop-blur-sm border border-white/60"
              >
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider mb-2">
                    {item.title}
                  </p>
                  <hr className="border-gray-200 mb-6" />
                </div>
                <div className="mt-10">
                  <h3 className="text-4xl sm:text-5xl font-bold text-gray-800">
                    {item.value.split("+")[0]}{" "}
                    <span className="text-primary-medium">+</span>
                  </h3>
                  <p className="text-gray-500 mt-2 text-xs sm:text-sm">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Architecture Image (fixed layout) */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="relative isolate rounded-2xl overflow-hidden h-56 sm:h-64 w-full"
            >
              <div className="absolute inset-0">
                <Image
                  src="/Chamber3.jpg"
                  alt="Architect working"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
