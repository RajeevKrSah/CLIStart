"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import Image from "next/image";

interface NavItem {
  name: string;
  href?: string;
  subItems?: { name: string; href: string }[];
}

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  {
    name: "Clinic",
    subItems: [
      { name: "Browse Clinic", href: "/clinic/browse-clinic" },
      { name: "By Speciality", href: "/clinic/speciality" },
      { name: "By Location", href: "/clinic/location" },
      { name: "Rent a Clinic", href: "/clinic/rent-a-clinic" },
    ],
  },
  {
    name: "Pricing",
    href: "/pricing",
    subItems: [
      { name: "Subscription Plans", href: "/pricing" },
      { name: "Compare Plans", href: "/pricing" },
      { name: "Custom Quote", href: "/pricing" },
      { name: "Add-ons", href: "/plans" },
    ],
  },
  { name: "Solutions", href: "/solutions" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "Login", href: "/login" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll(); 
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  // Auto-close mobile menu when resizing to desktop
  useEffect(() => {
    let resizeTimeout: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (window.innerWidth >= 768 && isOpen) {
          setIsOpen(false);
        }
      }, 150);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);


  const isActive = (href?: string) => href && pathname === href;

  return (

    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled
          ? "backdrop-blur-lg bg-[#0b0c0f]/80 border-b border-[#1f2a29]/50 shadow-lg"
          : "bg-transparent"
          }`}
      >
        <nav className="container mx-auto py-2 px-5 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/CliStartLogo.png"
              alt="CliStart Logo"
              width={150}
              height={150}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.subItems ? (
                  <div className="flex items-center gap-1 cursor-pointer text-white hover:text-primary-medium transition">
                    <span>{item.name}</span>
                    <ChevronDown size={16} />
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.ul
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-3 bg-primary-dark border border-[#1f2a29]/70 rounded-xl shadow-2xl py-3 w-52 z-[99]"
                        >
                          {item.subItems.map((sub) => (
                            <li key={sub.name}>
                              <Link
                                href={sub.href}
                                className={`block px-4 py-2 text-sm text-white hover:text-primary-medium hover:bg-[#1a2220]/50 rounded-md ${isActive(sub.href)
                                  ? "bg-primary-medium/10 text-primary-medium"
                                  : ""
                                  }`}
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href || "#"}
                    className={`relative text-white hover:text-primary-medium transition font-medium`}
                  >
                    {item.name}
                    {isActive(item.href) && (
                      <motion.div
                        layoutId="underline"
                        className="absolute left-0 right-0 -bottom-1 h-[2px] bg-primary-medium"
                      />
                    )}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-2 text-sm text-white">
            <Phone size={16} />
            <span className="font-medium">+91 8800007740</span>
          </div>

          {/* CTA */}
          <div className="hidden md:flex">
            <Link
              href="/demo"
              className="bg-primary-medium hover:bg-[#1fb292] text-white px-6 py-2 rounded-md font-medium transition hover:shadow-[0_0_12px_#22D3A6]"
            >
              Book a Demo
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>

      </header>
      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed top-0 left-0 w-full h-full bg-[#0B0F12] text-white z-[999]"
          >
            <div className="p-4 flex justify-between items-center border-b border-[#1f2a29]">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold text-[#D4AF37]"
              >
                <Image
                  src="/CliStartLogo.png"
                  alt="Logo"
                  width={150}
                  height={150}
                  priority
                />
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-white/10"
              >
                <X size={28} />
              </button>
            </div>

            {/* Scrollable Menu */}
            <div className="overflow-y-auto h-[calc(100%-130px)] pb-32">
              <ul className="flex flex-col gap-6 p-6 text-lg">
                {navItems.map((item) =>
                  item.subItems ? (
                    <li key={item.name}>
                      <details className="group">
                        <summary className="flex justify-between items-center cursor-pointer">
                          <span className="hover:text-primary-medium transition">
                            {item.name}
                          </span>
                          <ChevronDown
                            size={18}
                            className="group-open:rotate-180 transition-transform"
                          />
                        </summary>
                        <ul className="pl-4 mt-3 space-y-2">
                          {item.subItems.map((sub) => (
                            <li key={sub.name}>
                              <Link
                                href={sub.href}
                                onClick={() => setIsOpen(false)}
                                className="block py-1 text-gray-400 hover:text-primary-medium transition"
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </details>
                    </li>
                  ) : (
                    <li key={item.name}>
                      <Link
                        href={item.href || "#"}
                        onClick={() => setIsOpen(false)}
                        className={`block hover:text-primary-medium transition ${isActive(item.href)
                          ? "text-primary-medium font-semibold"
                          : "text-gray-300"
                          }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* CTA + Contact (Bottom Fixed) */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 bg-[#0B0F12]">
              <div className="space-y-4">
                <Link
                  href="/demo"
                  className="block w-full bg-primary-medium text-white text-center py-3 rounded-full font-semibold hover:bg-[#1fb292] transition hover:shadow-[0_0_12px_#22D3A6]"
                  onClick={() => setIsOpen(false)}
                >
                  Book a Demo
                </Link>
                <div className="text-center text-sm text-gray-400">
                  <Phone className="inline-block mr-2" size={16} />
                  +91 8800007740
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
