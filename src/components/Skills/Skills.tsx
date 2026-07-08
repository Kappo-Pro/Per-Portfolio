"use client";

import { motion } from "framer-motion";


const skillCategories = [
  {
    title: "AI Orchestration & MLOps",
    skills: [
      "LangGraph (State Machines)",
      "LangSmith (Regression Testing)",
      "LangChain",
      "Agentic Workflows",
      "LLM Evaluation & Tracing",
      "Prompt Engineering",
      "OpenAI API",
      "Gemini API"
    ]
  },
  {
    title: "Cloud & Backend Infrastructure",
    skills: [
      "AWS (S3, Bedrock)",
      "Microsoft Azure",
      "FastAPI (Python)",
      "NestJS (Node.js)",
      "Spring Boot (Java)",
      "Docker",
      "RESTful APIs",
      "Agile / Scrum"
    ]
  },
  {
    title: "Vector Data & Search",
    skills: [
      "Chroma DB",
      "Hybrid Search (Dense + Sparse)",
      "Reciprocal Rank Fusion (RRF)",
      "Cross-Encoder Reranking",
      "dense semantic search (all-MiniLM-L6-v2)",
      "sparse keyword matching (BM25Okapi)",
      "Vector Embedding Optimization"
    ]
  },
  {
    title: "Core Languages & Tooling",
    skills: [
      "Python",
      "TypeScript",
      "JavaScript",
      "Java",
      "Kotlin",
      "C++",
      "SQL",
      "Prisma ORM",
      "Git",
      "System Design"
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-400 mb-6">Expertise</h2>
        <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Technical <span className="text-gradient">Arsenal</span></h3>
        <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
          A comprehensive suite of tools and technologies I use to build robust, 
          AI-integrated applications.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-8 glass hover:border-white/10 transition-all shadow-xl group flex flex-col"
          >
            <h4 className="text-lg font-bold mb-6 text-white/90 group-hover:text-white transition-colors border-b border-white/5 pb-2">{category.title}</h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, sIndex) => (
                <span
                  key={sIndex}
                  className="px-3 py-1.5 bg-white/5 border border-white/10 text-[10px] text-gray-300 hover:bg-white/10 hover:border-white/30 hover:text-white transition-all cursor-default uppercase font-bold tracking-widest"
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
