"use client";

import { motion, Variants } from "framer-motion";
import HeroBackground from "./Background";
import { FileText, ChevronDown } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "../Icons";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative min-h-[85vh] w-full flex flex-col items-center justify-center overflow-hidden py-20 md:py-24">
      <HeroBackground />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 text-center px-8 max-w-5xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <span className="px-4 py-2 border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
            Full-Stack + AI Engineer
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[1] text-white"
        >
          I&apos;m <span className="text-gradient">Kapil Kumar</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          Specializing in <span className="text-white font-medium">AI-Integrated Systems</span>,
          scalable backend architectures, and high-performance modern web experiences.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="w-full sm:w-auto px-10 py-4 bg-white text-black font-bold hover:bg-gray-200 transition-all flex items-center justify-center gap-3 group shadow-2xl">
            Explore My Work
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Kappo-Pro"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass glass-hover text-gray-400 hover:text-white transition-all hover:scale-110 shadow-xl"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/r-kapil-kumar-938623237/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass glass-hover text-gray-400 hover:text-white transition-all hover:scale-110 shadow-xl"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass glass-hover text-gray-400 hover:text-white transition-all hover:scale-110 shadow-xl"
            >
              <FileText className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 text-gray-500"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent" />
      </motion.div>
    </section>
  );
}
