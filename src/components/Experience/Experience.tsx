"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "NexTurn",
    location: "Bangalore, India",
    role: "Lead Software Engineer – AI-Native Engineering",
    period: "Jan 2026 – Present",
    description: [
      "Led 11 engineers in embedding AI-native workflows using Claude Code, Cursor, and Copilot, boosting delivery speed by 20%.",
      "Promoted to lead role in 12 months after designing context and harness frameworks that cut agent failures by 35%.",
      "Architected agent execution guardrails and automated evaluation pipelines across 8 enterprise domains, achieving 99.2% output reliability.",
      "Presented cloud modernization trade-offs to 12 executives, accelerating legacy migration approvals by 30%.",
      "Pioneered a clinical chat platform using LangGraph, dropping webhook reply latency from 10 to 3 seconds."
    ]
  },
  {
    company: "NexTurn",
    location: "Hyderabad, India",
    role: "Senior Software Engineer",
    period: "Jan 2025 – Dec 2025",
    description: [
      "Designed autonomous reverse-engineering agents to map 50+ undocumented legacy modules, reducing system discovery time by 45%.",
      "Built AI-powered test automation and regression agents across 15 distributed APIs, raising unit test coverage to 88%.",
      "Collaborated with 6 senior architects to deploy vector retrieval pipelines, improving context search precision by 28%.",
      "Automated complex data intake pipelines with stateful agents, saving 14 hours of manual operations per week."
    ]
  },
  {
    company: "NexTurn",
    location: "Hyderabad, India",
    role: "Software Engineer",
    period: "Jan 2024 – Dec 2024",
    description: [
      "Partnered with 5 product and QA leads to ship high-scale digital portals for 5,000+ active users.",
      "Mentored 4 junior developers through pair programming, architecture reviews, and coding standards, shrinking production defects by 25%.",
      "Streamlined Docker container deployments across Azure and Google Cloud, lowering asset delivery lag by 35%."
    ]
  },
  {
    company: "NexTurn",
    location: "Hyderabad, India",
    role: "Associate Software Engineer",
    period: "Sep 2022 – Dec 2023",
    description: [
      "Coordinated with 8 cross-team engineers to modernize 15+ core backend modules in Java, Node.js, and TypeScript.",
      "Optimized SQL and MongoDB query execution plans via indexing, trimming database response time by 18%."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 md:py-48 px-6 max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-36"
      >
        <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-cyan-400 mb-6">Journey</h2>
        <h3 className="text-4xl md:text-7xl font-bold mb-10 leading-tight">Professional <span className="text-gradient">Timeline</span></h3>
        <p className="text-cyan-100/70 max-w-2xl mx-auto text-lg md:text-xl font-light">
          A track record of building impactful software and leading engineering initiatives.
        </p>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-cyan-400/50 via-cyan-500/20 to-transparent" />

        <div className="space-y-32">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row items-center justify-between gap-8 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-[45%]">
                <div className="p-8 glass border-cyan-500/15 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(6,182,212,0.12)] transition-all shadow-xl group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-300 bg-cyan-950/50 border border-cyan-500/30 px-2.5 py-1 shadow-[0_0_10px_rgba(6,182,212,0.15)]">
                      {exp.period}
                    </span>
                    <Briefcase className="w-4 h-4 text-cyan-400/70 group-hover:text-cyan-300 transition-colors" />
                  </div>
                  <h4 className="text-lg font-bold mb-1 text-white group-hover:text-cyan-200 transition-colors">{exp.role}</h4>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-cyan-300 font-semibold text-sm">{exp.company}</span>
                    <span className="text-xs text-cyan-400/70 font-mono">{exp.location}</span>
                  </div>
                  <ul className="text-cyan-100/70 text-[11px] leading-relaxed font-light list-disc pl-4 space-y-2 marker:text-cyan-400">
                    {exp.description.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#020b0e] border-2 border-cyan-400 z-10 shadow-[0_0_18px_rgba(34,211,238,0.7)]" />
              <div className="hidden md:block w-[45%]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
