"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Machinify – AI-Native Financial Exception Platform",
    description: "AI-native financial processing and payment exception resolution platform integrating automated email polling, OCR extraction harnesses, and dispute management.",
    challenge: "Resolving complex financial exceptions across high-volume email transaction feeds where manual review was prone to errors, slow resolution cycles, and difficulties extracting critical invoice and claim data.",
    solution: "Spearheaded an AI-native finance system in Python that polls emails every 5 minutes to automatically detect failed transactions. Engineered custom OCR and LLM extraction harnesses to parse card, check, and claim details with high reliability. Directed a React.js resolution workspace where operations teams clear billing exceptions rapidly.",
    metrics: [
      "Engineered OCR and LLM extraction harnesses to parse card, check, and claim details at 98% accuracy.",
      "Directed a React.js resolution workspace where operations teams clear complex billing exceptions 40% faster.",
      "Spearheaded automated Python polling system running every 5 minutes to detect and triage failed transactions."
    ],
    tech: ["Python", "React.js", "Agentic Workflows", "OCR", "LLM Extraction", "REST APIs"],
    github: "https://github.com/Kappo-Pro"
  },
  {
    title: "CareSpace – Clinical Diagnostic & Assessment Architecture",
    description: "Real-time clinical diagnostic workspace combining client-side computer vision joint tracking and standardized RESTful integration contracts.",
    challenge: "Enabling clinical practitioners to evaluate musculoskeletal health in real time without introducing server video stream latency, costly cloud compute overhead, or privacy compliance risks.",
    solution: "Established real-time computer vision pipelines in Python and React.js using TensorFlow MediaPipe to accurately track 20+ skeletal joints during patient evaluations. Standardized and documented 25+ RESTful integration schemas and API contracts to streamline partner and provider onboarding.",
    metrics: [
      "Established real-time computer vision pipelines to track 20+ skeletal joints during patient evaluations with 96% accuracy.",
      "Documented 25+ RESTful integration schemas and API contracts, cutting third-party onboarding effort by 45%.",
      "Delivered client-side biometric telemetry with zero video transmission latency."
    ],
    tech: ["Python", "FastAPI", "TensorFlow MediaPipe", "React.js", "REST APIs", "Azure"],
    github: "https://github.com/Kappo-Pro"
  },
  {
    title: "Clinical Chat Platform (MedVibe Agentic Engine)",
    description: "State-driven conversational diagnostic engine built with LangGraph to eliminate webhook timeouts and manage multi-turn intent routing.",
    challenge: "External messaging webhooks (WhatsApp/Twilio) timed out on long-running LLM reasoning chains, causing dropped messages, duplicated executions, and state desynchronization.",
    solution: "Pioneered a deterministic conversational state machine using LangGraph and FastAPI. Decoupled execution loops, routed non-analytical intents with edge routing, and implemented state-aware message pruning to maintain sub-second state transitions.",
    metrics: [
      "Pioneered clinical chat platform dropping webhook reply latency from 10 to 3 seconds.",
      "Decreased token overhead by 40% using state-aware message pruning and context trimming.",
      "Maintained 100% state consistency across multi-node agentic graphs."
    ],
    tech: ["LangGraph", "FastAPI", "Python", "State Machines", "Twilio", "ChromaDB"],
    github: "https://github.com/Kappo-Pro"
  },
  {
    title: "Autonomous Legacy Reverse-Engineering & Test Agents",
    description: "Autonomous code-analysis and regression testing agents for legacy modernization, API test automation, and vector retrieval pipelines.",
    challenge: "Modernizing legacy architectures containing 50+ undocumented modules with zero architectural blueprints, slow discovery timelines, and low unit test coverage.",
    solution: "Designed autonomous reverse-engineering agents to map undocumented legacy modules and extract structural dependencies. Built AI-powered test automation and regression agents across 15 distributed APIs. Collaborated with 6 senior architects to deploy vector retrieval pipelines that index architectural specs.",
    metrics: [
      "Designed autonomous reverse-engineering agents to map 50+ undocumented legacy modules, cutting discovery time by 45%.",
      "Built AI-powered test automation and regression agents across 15 distributed APIs, raising test coverage to 88%.",
      "Collaborated with 6 senior architects to deploy vector retrieval pipelines, improving search precision by 28% and saving 14h/week."
    ],
    tech: ["Python", "Autonomous Agents", "Vector Retrieval", "ChromaDB", "Distributed APIs", "Docker"],
    github: "https://github.com/Kappo-Pro"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 md:py-48 px-6 max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-32"
      >
        <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-cyan-400 mb-6">Case Studies</h2>
        <h3 className="text-4xl md:text-7xl font-bold mb-10 leading-tight">Architectural <span className="text-gradient">Deep Dives</span></h3>
        <p className="text-cyan-100/70 max-w-4xl mx-auto text-lg md:text-2xl font-light leading-relaxed">
          Production systems engineered for deterministic performance, high recall, and clinical-grade compliance.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
