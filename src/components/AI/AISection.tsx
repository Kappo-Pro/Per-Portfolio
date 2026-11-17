"use client";

import { motion } from "framer-motion";
import { Terminal, Workflow, ShieldCheck, Bot } from "lucide-react";

export default function AISection() {
  const aiTools = [
    {
      icon: <Workflow className="w-6 h-6" />,
      name: "LangGraph & Agentic Flows",
      description: "Orchestrating multi-node agentic state graphs, cutting webhook latency from 10s to 3s."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      name: "Agent Guardrails & Harnesses",
      description: "Context engineering and evaluation pipelines achieving 99.2% reliability across 8 enterprise domains."
    },
    {
      icon: <Terminal className="w-6 h-6" />,
      name: "AI-Native Toolchains",
      description: "Embedding Claude Code, Cursor, and Copilot workflows across 11 engineers to boost delivery speed by 20%."
    },
    {
      icon: <Bot className="w-6 h-6" />,
      name: "Autonomous Legacy Mapping",
      description: "Reverse-engineering agents mapping 50+ legacy modules and OCR extraction harnesses at 98% accuracy."
    }
  ];

  return (
    <section id="ai" className="py-20 px-6 max-w-7xl mx-auto overflow-hidden text-white w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-[10px] font-bold tracking-[0.4em] uppercase text-cyan-400 mb-6">AI Integration</h2>
        <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Augmenting <span className="text-gradient">Intelligence</span></h3>
        <p className="text-cyan-100/70 text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed">
          I don&apos;t just use AI; I integrate it into the core of engineering.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {aiTools.map((tool, index) => (
            <div key={index} className="flex flex-col gap-4 p-6 glass border-cyan-500/15 hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.12)] transition-all group min-h-[180px]">
              <div className="text-cyan-400 group-hover:scale-110 transition-transform w-fit p-2 bg-cyan-950/50 border border-cyan-500/30">
                {tool.icon}
              </div>
              <div>
                <h4 className="text-base font-bold mb-1 text-white group-hover:text-cyan-200 transition-colors">{tool.name}</h4>
                <p className="text-[10px] text-cyan-200/60 leading-relaxed font-light">{tool.description}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative lg:sticky lg:top-24"
        >
          {/* Terminal Window */}
          <div className="glass overflow-hidden border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.15)]">
            {/* Terminal Header */}
            <div className="bg-cyan-950/40 px-6 py-4 flex items-center gap-3 border-b border-cyan-500/20">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-cyan-400/70 flex-1 text-center">
                antigravity-workflow.sh
              </div>
            </div>
            
            {/* Terminal Body */}
            <div className="p-8 font-mono text-sm leading-relaxed overflow-x-auto bg-[#01090c]/90">
              <div className="flex gap-3 mb-4">
                <span className="text-cyan-400">$</span>
                <span className="text-cyan-100">eval-pipeline run --domains &quot;enterprise-8&quot; --guardrails</span>
              </div>
              <div className="text-gray-400 mb-2 ml-6">Evaluating context boundaries & harness constraints...</div>
              <div className="text-cyan-300 mb-4 ml-6 font-semibold">[SUCCESS] 99.2% Output Reliability across 8 enterprise domains</div>
              <div className="flex gap-3 mb-4">
                <span className="text-cyan-400">$</span>
                <span className="text-cyan-100">langgraph deploy --platform &quot;clinical-chat&quot;</span>
              </div>
              <div className="text-gray-400 mb-2 ml-6">Benchmarking webhook latency...</div>
              <div className="text-cyan-300 mb-4 ml-6 font-semibold">[OPTIMIZED] Webhook response latency dropped from 10s to 3s</div>
              <div className="flex gap-3 mb-4">
                <span className="text-cyan-400">$</span>
                <span className="text-cyan-100">agent-mapper reverse-engineer --modules 50+</span>
              </div>
              <div className="text-cyan-300 mb-4 ml-6 font-semibold">[DONE] Discovery time reduced by 45% with stateful agents</div>
              <div className="flex items-center gap-2 text-cyan-300 bg-cyan-950/60 border border-cyan-400/40 px-4 py-2 rounded-lg w-fit animate-pulse shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                Live Agent Execution Guardrails Active (Failures -35%)
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/15 blur-[70px] rounded-full -z-10" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-500/15 blur-[70px] rounded-full -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
