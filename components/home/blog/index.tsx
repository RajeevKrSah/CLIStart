"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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


export const blogPosts = [
  {
    id: 1,
    title: "Designing Medical Spaces That Inspire Confidence",
    excerpt:
      "Explore how modern design, ergonomics, and patient psychology influence the creation of medical chambers that elevate trust and comfort.",
    image: "/Chambers.jpeg",
    date: "Nov 2025",
    readTime: "5 min read",
    href: "/blog/designing-medical-spaces",
  },
  {
    id: 2,
    title: "How Location Impacts Patient Footfall",
    excerpt:
      "Choosing the right clinic location can significantly improve visibility, accessibility, and long-term growth. Learn which factors matter most.",
    image: "/Doctors.jpeg",
    date: "Oct 2025",
    readTime: "4 min read",
    href: "/blog/choosing-right-location",
  },
  {
    id: 3,
    title: "The Rise of Ready-to-Use Healthcare Chambers",
    excerpt:
      "Discover why plug-and-play medical chambers are becoming the preferred choice for modern healthcare professionals across India.",
    image: "/Healthcare-chambers.jpeg",
    date: "Sept 2025",
    readTime: "6 min read",
    href: "/blog/ready-to-use-healthcare-spaces",
  },
  {
    id: 4,
    title: "Future of Healthcare Real Estate",
    excerpt:
      "A deep dive into the trends shaping the evolution of healthcare real estate, from flexible rentals to tech-enabled clinical environments.",
    image: "/office.jpeg",
    date: "Aug 2025",
    readTime: "5 min read",
    href: "/blog/future-healthcare-real-estate",
  },
];

export default function Blog() {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, amount: 0.25 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  // Slider configuration
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: true,
    arrows: false,
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className="mt-10 flex justify-center gap-3">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div
        className="
      relative w-2.5 h-2.5 shrink-0
      before:absolute before:inset-0 before:rounded-full
      before:bg-primary-medium/20 before:scale-0 before:opacity-0
      hover:before:scale-150 hover:before:opacity-100
      before:transition-all before:duration-500
      bg-primary-medium/60 rounded-full
      transition-all duration-500
    "
      />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };


  return (
    <section className="bg-white py-24 md:py-28 relative overflow-hidden">
      {/* Soft Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-primary-medium/5 rounded-full blur-3xl -z-10" />

      <div ref={ref} className="container mx-auto px-5 md:px-8">
        {/* Section Heading */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
          className="max-w-2xl mx-auto text-center mb-16 md:mb-24"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-semibold text-gray-900 tracking-tight"
          >
            Latest <span className="text-primary-medium">Insights</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-gray-600 mt-4 text-base md:text-lg leading-relaxed"
          >
            Stay updated with expert perspectives and trends shaping the future
            of healthcare infrastructure, clinic design, and medical real estate.
          </motion.p>
        </motion.div>

        {/* Blog Slider */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
          className="relative"
        >
          <Slider {...settings}>
            {blogPosts.map((post) => (
              <div key={post.id} className="px-1 md:px-4">
                <motion.article
                  variants={fadeUp}
                  className="group relative rounded-2xl overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-[cubic-bezier(0.33,1,0.68,1)]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-70 transition" />
                  </div>

                  {/* Content */}
                  <div className="py-4 space-y-4">
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 leading-snug group-hover:text-primary-medium transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Link
                      href={post.href}
                      className="inline-flex items-center gap-2 text-primary-medium font-semibold mt-4 group-hover:gap-3 transition-all duration-300"
                    >
                      Read More <ArrowRight size={18} />
                    </Link>
                  </div>
                </motion.article>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
}
