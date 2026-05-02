"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Button from "./Button";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 1]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <motion.div
        className="max-w-7xl mx-auto rounded-2xl px-6 py-3 flex items-center justify-between"
        style={{
          backgroundColor: `rgba(255, 255, 255, ${isScrolled ? 0.08 : 0})`,
          backdropFilter: isScrolled ? "blur(24px) saturate(180%)" : "none",
          border: isScrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid transparent",
          boxShadow: isScrolled ? "0 8px 32px rgba(0, 0, 0, 0.2)" : "none",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Logo */}
        <motion.a
          href="#"
          className="text-xl font-semibold text-white flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
        >
          <span className="w-8 h-8 rounded-lg bg-nature-100 flex items-center justify-center">
            🌻
          </span>
          Team Tj
        </motion.a>

        {/* Nav Items */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="px-4 py-2 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <Button variant="primary" size="sm">
          Explore
        </Button>
      </motion.div>
    </motion.nav>
  );
}
