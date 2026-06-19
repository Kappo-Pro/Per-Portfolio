"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "CareSpace AI – Digital Healthcare Platform [NexTurn]",
    description: "A production-ready healthcare platform featuring clinical workflows, automated scheduling, and real-time patient status tracking.",
    tech: ["React", "NestJS", "Prisma", "Kotlin", "MediaPipe", "TensorFlow.js", "OpenAI API"],
    github: "https://github.com/Kappo-Pro",
    aiFocus: "Formulated AI-assisted treatment recommendation model via OpenAI APIs, reducing clinician workload by 35%. Deployed real-time posture detection and automated Range of Motion (ROM) analysis using MediaPipe & TensorFlow.js (98% accuracy for 2,000+ patients). Refactored legacy views into Jetpack Compose driving 45% increase in UI efficiency."
  },
  {
    title: "MedVibe Hospital Autonomous WhatsApp Care Assistant",
    description: "An autonomous multi-node conversational agent automating appointment bookings, symptom routing, and clinical documentation.",
    tech: ["FastAPI", "LangGraph", "LangSmith", "Chroma DB", "Python", "Twilio", "Synthea"],
    github: "https://github.com/Kappo-Pro",
    aiFocus: "Orchestrated multi-node graphs using LangGraph to manage 10,000+ patient profiles. Reduced response latency by 70% (~10s to ~3s) via clinical reasoning optimizations, and implemented sub-second (<450ms) intent-based edge routing. Built type-safe data pipelines synced with Synthea datasets and evaluated using LangSmith."
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-32"
      >
        <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-blue-500 mb-6">Portfolio</h2>
        <h3 className="text-4xl md:text-7xl font-bold mb-10 leading-tight">Featured <span className="text-gradient">Innovations</span></h3>
        <p className="text-gray-400 max-w-4xl mx-auto text-lg md:text-2xl font-light leading-relaxed">
          A selection of projects that showcase my expertise in full-stack engineering, 
          AI integration, and product development.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
