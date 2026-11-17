"use client";

import { motion } from "framer-motion";


const skillCategories = [
  {
    title: "AI-Native & Harnesses",
    skills: [
      "Claude Code",
      "Cursor",
      "GitHub Copilot",
      "Context Engineering",
      "Agent Execution Harnesses",
      "Guardrails",
      "LLM Evaluation Frameworks",
      "AI Legacy Reverse Engineering",
      "Autonomous Test Automation"
    ]
  },
  {
    title: "Agentic AI & Orchestration",
    skills: [
      "LangGraph",
      "LangChain",
      "Model Context Protocol (MCP)",
      "RAG Pipelines",
      "Vector Embeddings",
      "ChromaDB",
      "Gemini API",
      "OpenAI API",
      "OCR Pipelines"
    ]
  },
  {
    title: "Architecture & Backend",
    skills: [
      "Solution Architecture",
      "Distributed Systems",
      "Legacy Modernization",
      "Node.js",
      "Nest.js",
      "Python",
      "FastAPI",
      "Java",
      "Spring Boot"
    ]
  },
  {
    title: "Cloud, Frontend & Data",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Docker",
      "Kubernetes",
      "GCP",
      "Azure",
      "SQL",
      "MongoDB"
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 md:py-48 px-6 max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <h2 className="text-[10px] font-bold tracking-[0.4em] uppercase text-cyan-400 mb-6">Expertise</h2>
        <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Technical <span className="text-gradient">Arsenal</span></h3>
        <p className="text-cyan-100/70 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
          A comprehensive suite of technologies spanning AI-native harnesses, agent orchestration, enterprise backends, and cloud infrastructure.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-10 glass border-cyan-500/15 hover:border-cyan-400/35 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)] transition-all shadow-xl group flex flex-col"
          >
            <h4 className="text-lg font-bold mb-6 text-cyan-200 group-hover:text-cyan-100 transition-colors border-b border-cyan-500/20 pb-2">{category.title}</h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, sIndex) => (
                <span
                  key={sIndex}
                  className="px-3 py-1.5 bg-cyan-950/40 border border-cyan-500/25 text-[10px] text-cyan-100/90 hover:bg-cyan-500/20 hover:border-cyan-400/60 hover:text-white hover:shadow-[0_0_10px_rgba(34,211,238,0.25)] transition-all cursor-default uppercase font-bold tracking-widest"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
