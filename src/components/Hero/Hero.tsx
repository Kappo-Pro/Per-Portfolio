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
    <section className="relative min-h-[90vh] w-full flex flex-col items-center justify-center overflow-hidden py-32 md:py-48">
      <HeroBackground />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 text-center px-8 max-w-5xl mx-auto animate-fade-in"
      >
        <motion.div variants={itemVariants} className="mb-12 flex flex-col items-center gap-3">
          <span className="px-4 py-2 border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-center shadow-[0_0_20px_rgba(6,182,212,0.15)]">
            Lead Software Engineer | AI-Native Engineering, Solution Architecture & Agentic Systems
          </span>
          <span className="text-xs text-cyan-400/80 font-mono tracking-wider flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-pulse" />
            Bangalore, India
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-12 leading-[1] text-white"
        >
          I&apos;m <span className="text-gradient">Kapil Kumar</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-cyan-100/70 max-w-3xl mx-auto mb-16 leading-relaxed font-light"
        >
          Architecting resilient agentic systems, autonomous reverse-engineering workflows, and high-performance cloud platforms.
          Leading cross-functional engineering teams in embedding AI-native tools like <span className="text-cyan-200 font-medium">Claude Code, Cursor, and Copilot</span>,
          designing context & harness frameworks that cut agent failures by 35%, and deploying evaluation pipelines across enterprise domains using
          <span className="text-cyan-200 font-medium"> LangGraph, Python, FastAPI, NestJS, Azure, and GCP</span>.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <a
            href="#projects"
            className="w-full sm:w-auto px-10 py-4 bg-cyan-400 text-[#020b0e] font-bold hover:bg-cyan-300 transition-all flex items-center justify-center gap-3 group shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_35px_rgba(34,211,238,0.5)]"
          >
            Explore My Work
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </a>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Kappo-Pro"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass glass-hover text-gray-400 hover:text-cyan-300 border-cyan-500/20 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-all hover:scale-110 shadow-xl"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/r-kapil-kumar-938623237/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass glass-hover text-gray-400 hover:text-cyan-300 border-cyan-500/20 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-all hover:scale-110 shadow-xl"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass glass-hover text-gray-400 hover:text-cyan-300 border-cyan-500/20 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-all hover:scale-110 shadow-xl"
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 text-cyan-500/60"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-400/40 to-transparent" />
      </motion.div>
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  );
}
