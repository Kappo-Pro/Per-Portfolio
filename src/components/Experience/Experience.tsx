"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "NexTurn",
    role: "AI Engineer / Solution Consultant",
    period: "08/2025 - Present",
    description: [
      "Own the end-to-end technical discovery and architectural design of enterprise agentic workflows and hybrid RAG implementations across AWS and Azure.",
      "Lead and mentor a cross-functional team of 11 engineers to deploy secure, HIPAA-compliant clinical systems.",
      "Designed deterministic multi-agent state machines via LangGraph, cutting system execution latency from ~10s to ~3s and trimming token overhead by 40%.",
      "Orchestrated local-cloud document ingestion pipelines using boto3/S3, integrating BM25 and dense embedding rerankers for high-precision Bedrock retrieval."
    ]
  },
  {
    company: "NexTurn",
    role: "Associate Cloud Engineer",
    period: "01/2024 - 08/2025",
    description: [
      "Modernized critical application interfaces across 20+ production screens, delivering a 40%+ increase in UI performance and reducing client-side load times by 25%.",
      "Engineered scalable web architectures using NestJS and Prisma, building secure RESTful APIs that improved system responsiveness by 30%.",
      "Led and managed a team of 5 junior engineering interns, delegating daily sprints and accelerating feature delivery timelines through systematic code reviews.",
      "Collaborated on cloud-based system designs and data management strategies to support seamless frontend-backend integration for 10,000+ active users."
    ]
  },
  {
    company: "NexTurn",
    role: "Software Engineer Intern",
    period: "09/2022 - 01/2024",
    description: [
      "Constructed feature-rich applications leveraging Angular, React, and Spring Boot, contributing to a 15% reduction in production bugs via modular testing.",
      "Optimized relational and non-relational database schemas across MySQL and MongoDB, improving query execution speeds by 20%.",
      "Participated in Agile Scrum ceremonies across 30+ sprint cycles, utilizing Git to successfully manage and merge 50+ multi-developer pull requests."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-32"
      >
        <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-gray-400 mb-6">Journey</h2>
        <h3 className="text-4xl md:text-7xl font-bold mb-10 leading-tight">Professional <span className="text-gradient">Timeline</span></h3>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
          A track record of building impactful software and leading engineering initiatives.
        </p>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/20 via-white/10 to-transparent" />

        <div className="space-y-20">
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
                <div className="p-6 glass border-white/5 hover:border-white/25 transition-all shadow-xl group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/90 bg-white/5 border border-white/10 px-2.5 py-1">
                      {exp.period}
                    </span>
                    <Briefcase className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-lg font-bold mb-1 text-white/90">{exp.role}</h4>
                  <p className="text-white/60 font-medium mb-4 text-sm">{exp.company}</p>
                  <ul className="text-gray-400 text-[11px] leading-relaxed font-light list-disc pl-4 space-y-1.5">
                    {exp.description.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-[#030303] border-2 border-white/40 z-10 shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
              <div className="hidden md:block w-[45%]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
