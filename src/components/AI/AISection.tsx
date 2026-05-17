"use client";

import { motion } from "framer-motion";
import { Terminal, Sparkles, Zap, Workflow } from "lucide-react";

export default function AISection() {
  const aiTools = [
    {
      icon: <Terminal className="w-6 h-6" />,
      name: "Claude CLI",
      description: "Automated refactoring and codebase analysis."
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      name: "Antigravity",
      description: "Agentic orchestration for complex engineering tasks."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      name: "Gemini Pro",
      description: "Multimodal AI integrations for production systems."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      name: "Prompt Eng",
      description: "High-precision system design for LLM safety."
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
                <span className="text-gray-300">init-ai-workflow --project &quot;next-gen-portfolio&quot;</span>
              </div>
              <div className="text-green-400 mb-4 ml-6">[SUCCESS] Environment linked to Gemini-1.5-Pro</div>
              <div className="flex gap-3 mb-4">
                <span className="text-blue-400">$</span>
                <span className="text-gray-300">optimize-architecture --mode &quot;performance&quot;</span>
              </div>
              <div className="text-purple-400 mb-2 ml-6">Analyzing component tree...</div>
              <div className="text-purple-400 mb-2 ml-6">Applying hydration optimizations...</div>
              <div className="text-green-400 mb-4 ml-6">[DONE] Bundle size reduced by 42%</div>
              <div className="flex gap-3 mb-4">
                <span className="text-blue-400">$</span>
                <span className="text-gray-300">deploy --stage &quot;production&quot; --verify-ai</span>
              </div>
              <div className="flex items-center gap-2 text-white bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-lg w-fit animate-pulse">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                Deploying to Edge...
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
