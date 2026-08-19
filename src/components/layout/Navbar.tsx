"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/Button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certificates", href: "#certificates" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-[#050505]/80 backdrop-blur-md border-[#1f1f1f] py-4 shadow-sm"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <Link href="#home" className="text-2xl md:text-3xl font-black tracking-tighter text-foreground group">
          <span className="text-accent group-hover:text-accent/80 transition-colors">Chala</span> Geta
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-[#a1a1aa] hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 ml-4 pl-4 border-l border-[#1f1f1f]">
            <Button size="sm" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Let&apos;s Talk
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-[#1f1f1f] shadow-lg md:hidden"
          >
            <div className="flex flex-col px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-[#e4e4e7] hover:text-accent transition-colors py-2 border-b border-[#1f1f1f]"
                >
                  {link.name}
                </Link>
              ))}
              <Button 
                className="mt-4 w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Let&apos;s Talk
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
