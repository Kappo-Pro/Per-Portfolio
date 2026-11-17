"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ShieldAlert, Cpu, Award } from "lucide-react";
import { GithubIcon as Github } from "../Icons";

interface ProjectProps {
  title: string;
  description: string;
  challenge: string;
  solution: string;
  metrics: string[];
  tech: string[];
  github?: string;
  demo?: string;
}

type TabType = "challenge" | "solution" | "metrics";

export function ProjectCard({ title, description, challenge, solution, metrics, tech, github, demo }: ProjectProps) {
  const [activeTab, setActiveTab] = useState<TabType>("challenge");

  const tabContent = {
    challenge: {
      icon: <ShieldAlert className="w-4 h-4 text-cyan-400" />,
      label: "The Challenge",
      text: challenge,
    },
    solution: {
      icon: <Cpu className="w-4 h-4 text-cyan-400" />,
      label: "Architecture & Solution",
      text: solution,
    },
    metrics: {
      icon: <Award className="w-4 h-4 text-cyan-400" />,
      label: "Impact & Tech Stack",
      text: "",
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative glass flex flex-col h-full border-cyan-500/15 hover:border-cyan-400/35 hover:shadow-[0_0_35px_rgba(6,182,212,0.12)] transition-all shadow-2xl p-6 md:p-8 rounded-none"
    >
      <div className="flex flex-col flex-grow">
        {/* Title & Short Description */}
        <div className="mb-6">
          <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-200 transition-colors mb-2">{title}</h4>
          <p className="text-cyan-100/70 text-xs md:text-sm font-light leading-relaxed">{description}</p>
        </div>

        {/* Custom Premium Tabs Navigation */}
        <div className="flex border-b border-cyan-500/20 mb-6 overflow-x-auto gap-2 scrollbar-none">
          {(Object.keys(tabContent) as TabType[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-3 pt-1 px-3 text-[10px] md:text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all whitespace-nowrap cursor-pointer ${activeTab === tab ? "text-cyan-300" : "text-gray-400 hover:text-cyan-200"
                }`}
            >
              {tabContent[tab].icon}
              <span>{tabContent[tab].label}</span>
              {activeTab === tab && (
                <motion.div
                  layoutId={`${title}-active-tab`}
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-400 shadow-[0_0_12px_#22d3ee]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content Area */}
        <div className="flex-grow mb-6 min-h-[180px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="text-cyan-100/80 text-xs md:text-sm leading-relaxed font-light"
            >
              {activeTab === "metrics" ? (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h5 className="text-[10px] uppercase font-bold text-cyan-400/80 tracking-widest">Key Metrics</h5>
                    <ul className="list-disc pl-4 space-y-1 text-cyan-100/90 marker:text-cyan-400">
                      {metrics.map((metric, i) => (
                        <li key={i}>{metric}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-2 pt-2">
                    <h5 className="text-[10px] uppercase font-bold text-cyan-400/80 tracking-widest">Architectural Layers</h5>
                    <div className="flex flex-wrap gap-1.5">
                      {tech.map((item, index) => (
                        <span
                          key={index}
                          className="px-2.5 py-1 bg-cyan-950/40 border border-cyan-500/25 text-[9px] font-bold text-cyan-200 uppercase tracking-widest hover:border-cyan-400/60 hover:text-white hover:bg-cyan-500/20 hover:shadow-[0_0_8px_rgba(34,211,238,0.25)] transition-all"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <p className="whitespace-pre-line text-cyan-100/80">{tabContent[activeTab].text}</p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Links */}
        <div className="flex items-center gap-5 mt-auto pt-4 border-t border-cyan-500/15">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[10px] font-bold text-cyan-400/80 hover:text-cyan-200 transition-colors group/link uppercase tracking-wider"
            >
              <Github className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
              <span>Repository</span>
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[10px] font-bold text-cyan-400/80 hover:text-cyan-200 transition-colors group/link uppercase tracking-wider"
            >
              <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
              <span>Live Demonstration</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
