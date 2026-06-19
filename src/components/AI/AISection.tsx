"use client";

import { motion } from "framer-motion";
import { Terminal, Sparkles, Zap, Workflow } from "lucide-react";

export default function AISection() {
  const aiTools = [
    {
      icon: <Workflow className="w-6 h-6" />,
      name: "LangGraph",
      description: "Orchestrating multi-node agentic state graphs and intent-based routing."
    },
    {
      icon: <Terminal className="w-6 h-6" />,
      name: "LangSmith",
      description: "Continuous regression testing and token utilization evaluations."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      name: "Gemini 3.1",
      description: "High-efficiency multimodal integration and vision system optimization."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      name: "MediaPipe",
      description: "Real-time posture detection and Range of Motion computer vision tracking."
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
        <h2 className="text-[10px] font-bold tracking-[0.4em] uppercase text-blue-500 mb-6">AI Integration</h2>
        <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Augmenting <span className="text-gradient">Intelligence</span></h3>
        <p className="text-gray-400 text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed">
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
            <div key={index} className="flex flex-col gap-4 p-6 glass border-white/5 hover:border-blue-500/20 transition-all group min-h-[180px]">
              <div className="text-blue-400 group-hover:scale-110 transition-transform w-fit p-2 bg-blue-500/5 border border-blue-500/10">
                {tool.icon}
              </div>
              <div>
                <h4 className="text-base font-bold mb-1 text-white/90">{tool.name}</h4>
                <p className="text-[10px] text-gray-500 leading-relaxed font-light">{tool.description}</p>
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
          <div className="glass overflow-hidden border-white/10 shadow-2xl">
            {/* Terminal Header */}
            <div className="bg-white/5 px-6 py-4 flex items-center gap-3 border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 flex-1 text-center">
                antigravity-workflow.sh
              </div>
            </div>
            
            {/* Terminal Body */}
            <div className="p-8 font-mono text-sm leading-relaxed overflow-x-auto bg-[#030303]/40">
              <div className="flex gap-3 mb-4">
                <span className="text-blue-400">$</span>
                <span className="text-gray-300">langgraph deploy --project &quot;medvibe-assistant&quot;</span>
              </div>
              <div className="text-green-400 mb-4 ml-6">[SUCCESS] Deployed 4-node agentic state graph</div>
              <div className="flex gap-3 mb-4">
                <span className="text-blue-400">$</span>
                <span className="text-gray-300">pytest tests/regression_eval.py --target &quot;langsmith&quot;</span>
              </div>
              <div className="text-purple-400 mb-2 ml-6">Running 100+ edge-case test variants...</div>
              <div className="text-purple-400 mb-2 ml-6">Evaluating slot reservation and intent triaging loops...</div>
              <div className="text-green-400 mb-4 ml-6">[DONE] 100% pass rate. Token overhead reduced by 40%</div>
              <div className="flex gap-3 mb-4">
                <span className="text-blue-400">$</span>
                <span className="text-gray-300">latency-check --endpoint &quot;/whatsapp/webhook&quot;</span>
              </div>
              <div className="text-green-400 mb-4 ml-6">[METRIC] Response Latency: 2.98s (Slashed from 10.2s - 70% reduction)</div>
              <div className="flex items-center gap-2 text-white bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-lg w-fit animate-pulse">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                Monitoring Agent State Relocations...
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 blur-[60px] rounded-full -z-10" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/10 blur-[60px] rounded-full -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
