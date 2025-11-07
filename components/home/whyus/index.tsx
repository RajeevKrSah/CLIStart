"use client";

import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { AnimatedCounter } from "@/components/common/Counter";

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

const WhyChooseUsData = [
  {
    title: "Clinics Across Delhi NCR",
    value: 10,
    suffix: "+",
    desc: "premium, fully managed chambers",
  },
  {
    title: "Doctors Served",
    value: 80,
    suffix: "+",
    desc: "active practitioners using CliStart",
  },
  {
    title: "Patient Visits",
    value: 12000,
    suffix: "+",
    desc: "annual consultations supported",
  },
  {
    title: "Operational Efficiency",
    value: 98,
    suffix: "%",
    desc: "uptime with managed facility suppor",
  },
];


const WhyChooseUs = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  return (
    <section className="bg-white py-12 md:py-28 relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] h-[90vw] bg-primary-medium/5 rounded-full blur-3xl -z-10" />

      <div ref={ref} className="container mx-auto px-5 md:px-12">
        {/* Section Title */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={container}
          className="max-w-2xl mx-auto text-center mb-10 md:mb-24"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
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
            className="grid grid-cols-2 gap-6 md:gap-8"
            variants={container}
            initial="hidden"
            animate={controls}
          >
            {WhyChooseUsData.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="bg-[#f9f9f9] p-6 md:p-8 rounded-2xl flex flex-col justify-between backdrop-blur-sm border border-white/60"
              >
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider mb-2">
                    {item.title}
                  </p>
                  <hr className="border-gray-200 mb-6" />
                </div>

                <div className="mt-10">
                  <div className="text-4xl sm:text-5xl font-bold text-gray-800">
                    <AnimatedCounter target={item.value} suffix={item.suffix} duration={2} />
                  </div>

                  <p className="text-gray-500 mt-2 text-xs sm:text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
