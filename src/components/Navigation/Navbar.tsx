"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Cpu } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "../Icons";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Credentials", href: "#credentials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8">
      <div className={cn(
        "max-w-7xl mx-auto transition-all duration-500 px-6 py-3 flex items-center justify-between",
        scrolled ? "glass border-cyan-500/20 shadow-[0_8px_32px_rgba(2,11,14,0.7)] backdrop-blur-2xl" : "bg-transparent"
      )}>
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 cursor-pointer group"
        >
            <div className="p-2 bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-[#020b0e] transition-all shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <Cpu className="w-5 h-5" />
            </div>
            <span className="text-lg font-bold tracking-tighter text-white">
              KAPIL<span className="text-cyan-400">.DEV</span>
            </span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-bold text-gray-400 hover:text-cyan-300 transition-colors uppercase tracking-[0.2em]"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-5 py-2.5 bg-cyan-400 text-[#020b0e] text-xs font-bold hover:bg-cyan-300 transition-all shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]"
          >
            Let&apos;s Talk
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2.5 glass text-gray-400 hover:text-cyan-300 transition-all border-cyan-500/20"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-6 right-6 glass p-8 border-cyan-500/20 shadow-[0_12px_40px_rgba(2,11,14,0.9)] md:hidden flex flex-col items-center gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xl font-bold text-white/70 hover:text-cyan-300 transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="w-full h-[1px] bg-cyan-500/20 my-2" />
            <div className="flex gap-6">
              <a href="https://github.com/Kappo-Pro" target="_blank" rel="noopener noreferrer" className="p-3 glass border-cyan-500/20 text-gray-400 hover:text-cyan-300"><Github className="w-5 h-5" /></a>
              <a href="https://www.linkedin.com/in/r-kapil-kumar-938623237/" target="_blank" rel="noopener noreferrer" className="p-3 glass border-cyan-500/20 text-gray-400 hover:text-cyan-300"><Linkedin className="w-5 h-5" /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
