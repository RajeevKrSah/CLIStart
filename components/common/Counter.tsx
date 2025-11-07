"use client"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export function AnimatedCounter({ target , duration = 2, prefix = "", suffix = "" }: { target: number, duration?: number, prefix?: string, suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const increment = end / (duration * 60);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <motion.span
      key={count}
      initial={{ opacity: 1, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary-medium to-primary-dark"
    >
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </motion.span>
  );
}

// ✅ WhyChooseUs Component With Counter