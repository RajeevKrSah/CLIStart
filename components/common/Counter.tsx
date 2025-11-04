
'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CounterProps {
    target: number;
    label: string;
    duration?: number;
    prefix?: string;
    suffix?: string;
}

export default function AnimatedCounter({
    target,
    label,
    duration = 2,
    prefix = '',
    suffix = '',
}: CounterProps) {
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
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="relative group rounded-2xl bg-gradient-to-br from-primary-dark to-primary-medium p-[2px] shadow-md transition-all duration-500"
        >
            <div className="bg-gray-900 rounded-2xl text-center p-8">
                <motion.h2
                    key={count}
                    className="text-5xl font-extrabold text-primary-dark mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary-medium to-primary-dark"
                >
                    {prefix}
                    {count.toLocaleString()}
                    {suffix}
                </motion.h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg">{label}</p>
            </div>

        </motion.div>
    );
}