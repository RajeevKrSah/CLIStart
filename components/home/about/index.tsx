"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
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

export default function AboutSection() {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, amount: 0.25 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <section className="py-16 md:py-28 bg-white text-gray-800 relative overflow-hidden">
      {/* Soft radial background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] bg-primary-medium/5 rounded-full blur-3xl -z-10" />

      <div
        ref={ref}
        className="container mx-auto px-5 md:px-12 grid lg:grid-cols-2 gap-16 items-center"
      >
        {/* Left Image Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
        >
          <motion.h5
            variants={fadeUp}
            className="text-primary-medium uppercase tracking-[0.25em] font-semibold mb-4"
          >
            About Us
          </motion.h5>

          <motion.h3
            variants={fadeUp}
            className="text-lg md:text-2xl font-semibold text-gray-700 mb-4"
          >
            Empowering Healthcare Professionals with Ready-to-Use Medical Chambers
          </motion.h3>

          <motion.p
            variants={fadeUp}
            className="text-gray-600 mb-8 leading-relaxed max-w-2xl"
          >
            At{" "}
            <span className="font-semibold text-primary-medium">CliStart</span>, we simplify the way healthcare professionals establish and grow their practice. Our mission is to help doctors focus entirely on patient care while we take care of everything else.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-gray-600 mb-8 leading-relaxed max-w-2xl"
          >
            We provide ready-to-use, fully furnished medical chambers across Delhi, designed for maximum efficiency, comfort, and accessibility. Every CliStart chamber is patient-ready from day one, equipped with all essentials and maintained to the highest professional standards.
          </motion.p>

          <motion.div variants={container} className="space-y-8">
            <motion.div variants={fadeUp}>
              <h3 className="text-xl font-semibold text-primary-medium mb-3">
                Who We Are
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-2xl">
                <span className="font-semibold text-primary-medium">
                  CliStart Chambers
                </span>{" "}
                provides premium, ready-to-use medical chambers across Delhi and
                Gurugram. With deep experience in clinic management, we offer
                spaces designed for comfort and efficiency so practitioners can
                focus solely on their patients.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h3 className="text-xl font-semibold text-primary-medium mb-3">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-2xl">
                To deliver convenient, cost-effective, and professional spaces
                that let doctors grow their practice without the burden of
                ownership.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>


        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-2 gap-6 relative"
        >
          {/* Column 1 */}
          <motion.div
            variants={fadeUp}
            className="col-span-1 flex flex-col justify-center"
          >
            <div className="relative h-[410px] md:h-[500px] w-full rounded-2xl overflow-hidden">
              <Image
                src="/Dental_chain.jpg"
                alt="Clinic building exterior"
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Column 2 */}
          <motion.div variants={fadeUp} className="col-span-1 space-y-6">
            <div className="relative h-48 md:h-60 w-full rounded-2xl overflow-hidden">
              <Image
                src="/Chamber1.jpg"
                alt="Fully furnished medical chamber"
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-48 md:h-60 w-full rounded-2xl overflow-hidden">
              <Image
                src="/Chamber2.jpg"
                alt="Modern healthcare workspace"
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
