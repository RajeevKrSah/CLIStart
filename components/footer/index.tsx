'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { FaPinterest } from 'react-icons/fa';

interface FooterProps {
  name: string;
  href: string;
}

const QuickLinks: FooterProps[] = [
  { name: 'Home', href: '/' },
  { name: 'Clinic', href: '/clinic' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const CompanyLinks: FooterProps[] = [
  { name: 'About Us', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'Affiliate Program', href: '/affiliate' },
  { name: 'Add Your Listing', href: '/add-listing' },
  { name: 'Our Partners', href: '/partners' },
];

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Pinterest', icon: FaPinterest, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-primary-light overflow-hidden">
      <section className="container mx-auto px-5 md:px-12 py-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 lg:gap-16">
          {/* Brand Section */}
          <div className="col-span-2">
            {/* <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.png"
                alt="CliStart Logo"
                width={150}
                height={150}
                priority
              />
            </Link> */}
            <p className="text-sm text-primary-light/70 leading-relaxed max-w-sm">
              CliStart provides ready-to-use, premium medical chambers designed
              for healthcare professionals. Build your practice without the
              hassle — we take care of the space, so you can focus on care.
            </p>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-6 uppercase tracking-wide text-primary-light/80">
                Connect With Us
              </h4>
              <div className="flex items-center gap-3">
                {socialLinks.map(({ name, icon: Icon, href }) => (
                  <Link
                    key={name}
                    href={href}
                    aria-label={name}
                    className="p-2 rounded-full bg-primary-light/10 hover:bg-primary-medium/20 transition-all duration-300"
                  >
                    <Icon size={18} className="text-primary-medium" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative after:content-[''] after:block after:w-8 after:h-[2px] after:bg-primary-medium after:mt-2">
              Pages
            </h3>
            <ul className="space-y-2 text-sm text-primary-light/80">
              {QuickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-primary-medium transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative after:content-[''] after:block after:w-8 after:h-[2px] after:bg-primary-medium after:mt-2">
              Company
            </h3>
            <ul className="space-y-2 text-sm text-primary-light/80">
              {CompanyLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-primary-medium transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative after:content-[''] after:block after:w-8 after:h-[2px] after:bg-primary-medium after:mt-2">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-primary-light/80">
              <li>
                <span className="block font-medium text-primary-light">
                  Address:
                </span>
                <p className="text-primary-light/70">
                  A-24 Basement, South Ex Part-2, New Delhi-110049
                </p>
              </li>
              <li>
                <span className="block font-medium text-primary-light">
                  Phone:
                </span>
                <Link
                  href="tel:+918800007740"
                  className="text-primary-medium hover:underline"
                >
                  +91 88000 07740
                </Link>
              </li>
              <li>
                <span className="block font-medium text-primary-light">
                  Email:
                </span>
                <Link
                  href="mailto:support@clistart.com"
                  className="text-primary-medium hover:underline"
                >
                  support@clistart.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-primary-medium/20" />

        {/* Bottom Footer */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-light/70">
          <p>
            © {new Date().getFullYear()} CliStart. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="hover:text-primary-medium transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-primary-medium transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
}
