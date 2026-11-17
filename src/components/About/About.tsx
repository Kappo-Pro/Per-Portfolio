"use client";

import { motion } from "framer-motion";
import { Cpu, Globe, Zap, Workflow } from "lucide-react";

const features = [
  {
    icon: <Cpu className="w-6 h-6 text-cyan-400" />,
    title: "AI-Native Engineering & Harnesses",
    description: "Embedding AI-native workflows using Claude Code, Cursor, and Copilot; designing context and execution harness frameworks that cut agent failures."
  },
  {
    icon: <Workflow className="w-6 h-6 text-cyan-400" />,
    title: "Agentic Systems & Orchestration",
    description: "Architecting multi-node agentic state graphs with LangGraph, Model Context Protocol (MCP), and automated evaluation pipelines with 99.2% reliability."
  },
  {
    icon: <Zap className="w-6 h-6 text-cyan-400" />,
    title: "Autonomous Agents & Automation",
    description: "Building autonomous agents to map undocumented legacy modules, run regression testing across APIs, and automate stateful data pipelines."
  },
  {
    icon: <Globe className="w-6 h-6 text-cyan-400" />,
    title: "Solution Architecture & Cloud",
    description: "Designing distributed architectures across Node.js, FastAPI, Python, Java, Docker, GCP, and Azure, guiding enterprise modernization trade-offs."
  }
];

export default function About() {
  return (
    <section id="about" className="py-32 md:py-48 px-6 max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <h2 className="text-[10px] font-bold tracking-[0.4em] uppercase text-cyan-400 mb-6">About Me</h2>
        <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Engineering for the <br /><span className="text-gradient">AI-Native Era</span></h3>
          <p className="text-cyan-100/70 max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-light">
            I am R. Kapil Kumar, a Lead Software Engineer specializing in AI-Native Engineering, Solution Architecture, and Agentic Systems based in Bangalore, India. Promoted to lead role at NexTurn after designing context and harness frameworks that cut agent failures by 35%, I lead 11 engineers embedding AI-native workflows using Claude Code, Cursor, and Copilot. With deep expertise across autonomous reverse-engineering agents, vector retrieval pipelines, agent guardrails, and enterprise cloud modernization, I build systems that achieve 99.2% output reliability and slash operational bottlenecks.
          </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-10 glass glass-hover flex flex-col items-start min-h-[250px] border-cyan-500/15 hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.12)] group"
          >
              <div className="mb-6 p-3 bg-cyan-950/40 border border-cyan-500/25 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
                <h4 className="text-lg font-bold mb-3 text-white/95 group-hover:text-cyan-200 transition-colors">{feature.title}</h4>
                <p className="text-cyan-100/60 leading-relaxed text-xs font-light">
                  {feature.description}
                </p>
              </motion.div>
        ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-12 md:p-16 glass relative overflow-hidden group border-cyan-500/20 shadow-[0_0_40px_rgba(6,182,212,0.06)]"
            >
              <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
                <div className="flex-1">
                  <h4 className="text-xl md:text-3xl font-bold mb-6 leading-tight italic opacity-90 group-hover:opacity-100 transition-opacity">
                    &quot;AI-native workflows don&apos;t just assist engineers; they fundamentally transform how software is architected.&quot;
                  </h4>
                    <p className="text-cyan-100/70 text-base leading-relaxed font-light max-w-lg">
                      My engineering philosophy focuses on <strong className="text-cyan-300 font-semibold">Deterministic Agent Harnesses & Guardrails</strong>—designing systems where autonomous reasoning is guided by rigid evaluation pipelines, structured context, and robust state machines to guarantee production safety and enterprise reliability.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4 w-full lg:w-auto shrink-0">
                  {[
              { val: "99.2%", label: "Output Reliability" },
                    { val: "+20%", label: "Delivery Speed" },
                    { val: "-35%", label: "Agent Failures" },
                    { val: "3s", label: "Webhook Latency" }
                  ].map((stat, i) => (
                      <div key={i} className="p-6 glass text-center border-cyan-500/15 hover:border-cyan-400/40 hover:bg-cyan-950/30 transition-all min-w-[120px]">
                        <div className="text-3xl font-bold text-cyan-300 mb-1">{stat.val}</div>
                        <div className="text-[10px] text-cyan-400/70 uppercase tracking-widest font-bold">{stat.label}</div>
                      </div>
            ))}
                    </div>
        </div>
            </motion.div>
          </section>
        );
}
