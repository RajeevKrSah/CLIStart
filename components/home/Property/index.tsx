"use client";

import { Building2, Stethoscope, BriefcaseMedical, HeartPulse } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

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

const propertyTypes = [
  {
    id: 1,
    title: "Dental Chambers",
    count: "25+ Available",
    icon: <HeartPulse size={46} className="text-primary-medium" />,
  },
  {
    id: 2,
    title: "General Clinics",
    count: "40+ Ready Spaces",
    icon: <Stethoscope size={46} className="text-primary-medium" />,
  },
  {
    id: 3,
    title: "Corporate Health Centers",
    count: "15+ Active Units",
    icon: <BriefcaseMedical size={46} className="text-primary-medium" />,
  },
  {
    id: 4,
    title: "Diagnostic Labs",
    count: "20+ Operational",
    icon: <Building2 size={46} className="text-primary-medium" />,
  },
];

export default function Property() {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, amount: 0.25 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <section className="bg-primary-dark text-white py-24 relative overflow-hidden">
      {/* Soft radial background for depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-primary-medium/10 rounded-full blur-3xl -z-10" />

      <div
        ref={ref}
        className="container mx-auto px-5 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-16"
      >
        {/* Left content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
          className="space-y-6 max-w-md text-center lg:text-left"
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl font-semibold leading-tight"
          >
            Explore by{' '}
            <span className="text-primary-medium">Clinic Type</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[#d1d1d1] text-base leading-relaxed"
          >
            From fully equipped dental chambers to corporate wellness centers,
            find the right setup that fits your specialization. Each space is
            professionally designed and ready for immediate practice.
          </motion.p>
        </motion.div>

        {/* Right animated cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
        >
          {propertyTypes.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              className="bg-[#111716] rounded-2xl border border-[#1f2a29] shadow-lg hover:shadow-2xl transition-all p-8 flex flex-col items-center text-center"
            >
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-[#a3a3a3] text-sm">{item.count}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
