'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';

const testimonials = [
  {
    name: "Dr. Aakash Gupta",
    role: "General Physician, Delhi",
    image: "/Profile.png",
    feedback:
      "CliStart Chambers transformed my practice instantly. I started consultations the same day without worrying about setup, utilities, or maintenance. The patient experience has improved significantly.",
    rating: 5,
  },
  {
    name: "Dr. Neha Bansal",
    role: "Dermatologist, Gurugram",
    image: "/Profile.png",
    feedback:
      "The chamber interiors are modern, clean, and extremely professional. My patients love the environment, and the flexible scheduling helps me balance multiple clinic locations with ease.",
    rating: 5,
  },
  {
    name: "Dr. Rohan Iyer",
    role: "Orthopedic Consultant, South Delhi",
    image: "/Profile.png",
    feedback:
      "As a visiting specialist, the hourly rental model is perfect. The staff is supportive, the rooms are always patient-ready, and the overall experience is seamless.",
    rating: 4,
  },
  {
    name: "Dr. Sana Farooq",
    role: "Pediatrician, Gurugram",
    image: "/Profile.png",
    feedback:
      "ClinStart takes care of everything—cleaning, maintenance, utilities—so I can purely focus on consultations. The chamber’s location has also boosted my patient flow.",
    rating: 5,
  },
];


export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
  };

  return (
    <section className="relative py-12 md:py-24 bg-primary-dark overflow-hidden text-[#f0ede5]">
      <div className="relative container mx-auto px-5 md:px-12 z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            What Our <span className="text-primary-medium">Clients Say</span>
          </h2>
          <p className="max-w-2xl mx-auto font-light">
            Thousands of clients trust us to make their real estate dreams a reality —
            through passion, precision, and transparent service.
          </p>
        </motion.div>

        {/* Content layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-10" >
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5 max-w-lg"
          >
            <h3 className="text-5xl leading-tight font-semibold">
              Trusted by <br />
              <span className="text-primary-medium">Thousands of Clients</span>
            </h3>
            <p className="font-light">
              We’ve built our reputation through consistency and care. Each client experience
              is a story of success, and we take pride in every one.
            </p>
            <Link href="/success-stories"
              className="items-center bg-primary-medium text-white font-semibold px-8 py-3 inline-flex overflow-hidden rounded-md hover:bg-white hover:text-primary-medium transition-all"
            >
              Read Success Stories
            </Link>
          </motion.div>

          {/* Right carousel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative bg-dark/70 backdrop-blur-xl border border-primary-medium/20 rounded-lg p-6 md:p-10 shadow-xl">
              <Quote className="absolute top-6 right-6 text-primary-medium/40 w-8 h-8" />

              <Slider {...settings}>
                {testimonials.map((item, i) => (
                  <div key={i} className="space-y-6">
                    {/* Rating */}
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          className={`w-4 h-4 ${starIndex < item.rating
                              ? 'text-primary-medium fill-current'
                              : 'text-[#565449]'
                            }`}
                        />
                      ))}
                    </div>

                    {/* Feedback */}
                    <p className="text-lg text-[#f0ede5]/90 leading-relaxed">
                      “{item.feedback}”
                    </p>

                    {/* Client */}
                    <div className="flex items-center gap-4 pt-4 border-t border-primary-medium/30 mt-auto">
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary-medium">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={56}
                          height={56}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-[#f0ede5]">{item.name}</h4>
                        <p className="text-sm text-[#f0ede5]/70">{item.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
