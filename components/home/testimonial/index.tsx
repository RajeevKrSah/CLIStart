'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: 'Michael Smith',
    role: 'Property Investor',
    image: '/hero1.jpg',
    feedback:
      'Dreams Estate made finding investment properties effortless. The platform is intuitive, and the support team is always responsive.',
    rating: 5,
  },
  {
    name: 'Sarah Johnson',
    role: 'Home Buyer',
    image: '/hero1.jpg',
    feedback:
      'We found our dream home within a week! The listings were accurate, detailed, and the agents were highly professional.',
    rating: 5,
  },
  {
    name: 'David Kim',
    role: 'Real Estate Agent',
    image: '/hero1.jpg',
    feedback:
      'Partnering with Dreams Estate has helped me connect with clients faster and close deals more efficiently than ever before.',
    rating: 4,
  },
  {
    name: 'Emily Carter',
    role: 'Landlord',
    image: '/hero1.jpg',
    feedback:
      'The renting process is seamless. Managing my listings and finding reliable tenants has never been easier.',
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
    <section className="relative py-24 bg-primary-dark overflow-hidden text-[#f0ede5]">
      <div className="relative container mx-auto px-5 z-10">
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
            <h3 className="text-5xl leading-tight font-light">
              Trusted by <br />
              <span className="text-primary-medium">Thousands of Clients</span>
            </h3>
            <p className="text-[#f0ede5]/80 leading-relaxed font-light">
              We’ve built our reputation through consistency and care. Each client experience
              is a story of success, and we take pride in every one.
            </p>
            <motion.button
              whileHover={{
                backgroundColor: '#ffffff',
                color: '#0b0c0f',
              }}
              whileTap={{ scale: 0.97 }}
              className="border border-primary-medium/40 px-8 py-3 text-sm text-primary-dark tracking-wide backdrop-blur-md bg-white transition-all"
            >
              Read Success Stories
            </motion.button>
          </motion.div>

          {/* Right carousel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative bg-dark/70 backdrop-blur-xl border border-primary-medium/20 rounded-3xl p-10 shadow-2xl">
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
                    <p className="text-lg text-[#f0ede5]/90 leading-relaxed italic">
                      “{item.feedback}”
                    </p>

                    {/* Client */}
                    <div className="flex items-center gap-4 pt-4 border-t border-primary-medium/30">
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
