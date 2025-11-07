"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRightCircle } from "lucide-react";

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
        <section className="bg-gradient-to-br from-[#0A0F1F] via-[#0A0F1F] to-[#05070D] text-white py-10 md:py-24 overflow-hidden">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 px-6 md:px-12">
                {/* IMAGE SIDE */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                    className="relative h-[50vh] md:h-[80vh] rounded-3xl overflow-hidden shadow-sm border border-white/10"
                >
                    <Image
                        src="/Solutions.jpeg"
                        alt="Workspace visual"
                        fill
                        className="object-cover brightness-95 transition-transform duration-[1.2s] ease-out hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </motion.div>

                {/* SOLUTION LIST SIDE */}
                <div className="flex flex-col justify-center space-y-10 md:space-y-14">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-white drop-shadow-xl mb-6">
                            Explore Our <span className="text-primary-medium">
                                Solutions
                            </span>
                        </h2>
                        <p className="text-white/80 md:text-lg">
                            Comprehensive healthcare infrastructure solutions designed to elevate your practice
                        </p>
                    </motion.div>
                    {/* LIST */}
                    <div className="flex flex-col space-y-10">
                        {solutions.map((solution, index) => (
                            <motion.div
                                key={solution.title}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.12, duration: 0.7 }}
                                className="group flex items-center justify-between border-b border-white/10 pb-5 cursor-pointer"
                            >
                                <Link
                                    href={solution.href}
                                    className="text-2xl font-semibold tracking-wide transition-all group-hover:text-primary-light"
                                >
                                    {solution.title}
                                </Link>
                                <ArrowRightCircle className="w-7 h-7 opacity-50 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}