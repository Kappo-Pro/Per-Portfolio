"use client";

import { motion } from "framer-motion";
import { Cpu, Globe, Zap, Code2 } from "lucide-react";

const features = [
  {
    icon: <Cpu className="w-6 h-6 text-white/80" />,
    title: "AI-Integrated Engineering",
    description: "Specializing in embedding LLMs and AI workflows into production-grade applications using Claude, Gemini, and custom agents."
  },
  {
    icon: <Code2 className="w-6 h-6 text-white/80" />,
    title: "Full-Stack Development",
    description: "Building scalable backend architectures with Node.js, NestJS, and FastAPI coupled with high-performance React frontends."
  },
  {
    icon: <Zap className="w-6 h-6 text-white/80" />,
    title: "Workflow Automation",
    description: "Designing intelligent automation systems that streamline development processes and optimize resource utilization."
  },
  {
    icon: <Globe className="w-6 h-6 text-white/80" />,
    title: "Product Focused",
    description: "Bridging the gap between complex engineering and user-centric design to deliver impactful, modern software solutions."
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-400 mb-6">About Me</h2>
        <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Engineering for the <br/><span className="text-gradient">AI Revolution</span></h3>
        <p className="text-gray-400 max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-light">
          I am R. Kapil Kumar, a Systems Architect and AI Engineer. Over the last 3 years, I have progressed from 
          engineering enterprise full-stack web architectures to designing complex GenAI orchestrations and multi-agent systems. 
          By bridging the gap between advanced NLP research and robust, production-grade cloud backends, I build systems that 
          optimize clinical reasoning latency, reduce operational overhead, and scale to thousands of active sessions. 
          My experience spans leading technical discovery for greenfield projects and mentoring cross-functional teams of up to 11 engineers.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-8 glass glass-hover flex flex-col items-start min-h-[250px]"
          >
            <div className="mb-6 p-3 bg-white/5 border border-white/10">
              {feature.icon}
            </div>
            <h4 className="text-lg font-bold mb-3 text-white/90">{feature.title}</h4>
            <p className="text-gray-400 leading-relaxed text-xs font-light">
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
        className="p-8 md:p-12 glass relative overflow-hidden group border-white/5 shadow-2xl"
      >
        <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <h4 className="text-xl md:text-3xl font-bold mb-6 leading-tight italic opacity-90 group-hover:opacity-100 transition-opacity">
              &quot;AI doesn&apos;t replace engineers; it amplifies them.&quot;
            </h4>
            <p className="text-gray-400 text-base leading-relaxed font-light max-w-lg">
              My engineering philosophy focuses on **Deterministic Orchestration**—designing systems where AI reasoning is guided by rigid, scalable state machines to guarantee production safety and sub-second execution.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full lg:w-auto shrink-0">
            {[
              { val: "-70%", label: "API Latency", color: "green" },
              { val: "-40%", label: "Token Cost", color: "purple" },
              { val: "-35%", label: "Clinician Work", color: "blue" },
              { val: "98%", label: "CV Accuracy", color: "yellow" }
            ].map((stat, i) => (
              <div key={i} className="p-6 glass text-center border-white/5 hover:border-white/20 transition-all min-w-[120px]">
                <div className={`text-3xl font-bold text-white mb-1`}>{stat.val}</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
