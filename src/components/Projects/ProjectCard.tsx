"use client";

import { motion } from "framer-motion";
import { ExternalLink, Cpu } from "lucide-react";
import { GithubIcon as Github } from "../Icons";

interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  aiFocus?: string;
}

export function ProjectCard({ title, description, tech, github, demo, aiFocus }: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative glass flex flex-col h-full border-white/5 hover:border-white/10 transition-all shadow-xl p-8"
    >
      {/* Content */}
      <div className="flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h4 className="text-xl font-bold group-hover:text-blue-400 transition-colors">{title}</h4>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light flex-grow">
          {description}
        </p>
        <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light flex-grow">
          {aiFocus}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-2.5 py-1 bg-white/5 border border-white/10 text-[10px] font-bold text-gray-500 uppercase tracking-wider"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-5 mt-auto">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[11px] font-bold text-white/70 hover:text-white transition-colors group/link"
            >
              <Github className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
              <span>Source</span>
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[11px] font-bold text-white/70 hover:text-white transition-colors group/link"
            >
              <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
