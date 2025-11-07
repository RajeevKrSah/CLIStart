"use client";

import { useState, useEffect, useCallback } from "react";
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
      { name: "Rent a Clinic", href: "/clinic/rent-a-clinic" }
    ]
  },
  {
    name: "Pricing",
    href: "/pricing",
    subItems: [
      { name: "Subscription Plans", href: "/pricing" },
      { name: "Compare Plans", href: "/pricing" },
      { name: "Custom Quote", href: "/pricing" },
      { name: "Add-ons", href: "/plans" }
    ]
  },
  { name: "Solutions", href: "/solutions" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "Login", href: "/login" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768 && isOpen) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [isOpen]);

  const isActive = useCallback(
    (href?: string) => (href ? pathname === href : false),
    [pathname]
  );

  return (
    <>
      <header className="relative w-full bg-black z-[50] border-b border-[#1f2a29]/50">
        <nav className="container mx-auto py-2 px-5 md:px-10 flex justify-between items-center">

          {/* Logo */}
          <Link href="/" aria-label="Home">
            <Image
              src="/logo.png"
              alt="CliStart Logo"
              width={180}
              height={180}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-8">
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
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-3 bg-primary-dark border border-[#1f2a29]/70 rounded-xl shadow-2xl py-3 w-52 z-[99]"
                        >
                          {item.subItems.map((sub) => (
                            <li key={sub.name}>
                              <Link
                                href={sub.href}
                                className={`block px-4 py-2 text-sm text-white hover:text-primary-medium hover:bg-[#1a2220]/50 rounded-md ${
                                  isActive(sub.href)
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
                    className="relative text-white hover:text-primary-medium font-medium transition"
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

          {/* Desktop Contact */}
          <div className="hidden lg:flex items-center space-x-2 text-sm text-white">
            <Phone size={16} />
            <span className="font-medium">+91 8800007740</span>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex">
            <Link
              href="/demo"
              className="bg-primary-medium hover:bg-[#1fb292] text-white px-6 py-2 rounded-md font-medium transition hover:shadow-[0_0_12px_#22D3A6]"
            >
              Book a Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition"
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 90, damping: 20 }}
            className="fixed top-0 left-0 w-full h-full bg-[#0B0F12] text-white z-[999]"
          >
            {/* Header */}
            <div className="px-4 py-2 flex justify-between items-center bg-black">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={180}
                  height={180}
                  priority
                />
              </Link>

              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="p-2 rounded-full hover:bg-white/10"
              >
                <X size={28} />
              </button>
            </div>

            {/* Scrollable Nav List */}
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
                        className={`block hover:text-primary-medium transition ${
                          isActive(item.href)
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

            {/* Bottom CTA */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 bg-[#0B0F12]">
              <Link
                href="/demo"
                onClick={() => setIsOpen(false)}
                className="block w-full bg-primary-medium text-white text-center py-3 rounded-full font-semibold hover:bg-[#1fb292] transition hover:shadow-[0_0_12px_#22D3A6]"
              >
                Book a Demo
              </Link>

              <div className="text-center text-sm text-gray-400 mt-4">
                <Phone className="inline-block mr-2" size={16} />
                +91 8800007740
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
