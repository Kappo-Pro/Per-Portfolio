"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "CARESPACE",
    description: "A comprehensive healthcare platform featuring role-based dashboards, real-time patient-doctor communication, and automated scheduling systems.",
    image: "/projects/carespace.png",
    tech: ["React", "NestJS", "Prisma", "Kotlin", "PostgreSQL"],
    github: "#",
    aiFocus: "Implemented intelligent patient prioritization and automated assessment summaries using custom backend logic."
  },
  {
    title: "AI Healthcare Chatbot",
    description: "Multi-channel AI assistant for symptom analysis and medical recommendations. Supports image analysis for skin condition detection.",
    image: "/projects/chatbot.png",
    tech: ["FastAPI", "Twilio", "LLaMA-2", "Gemini AI", "Python"],
    github: "#",
    aiFocus: "Integrated RAG (Retrieval-Augmented Generation) for accurate medical knowledge retrieval and Gemini Vision for image-based symptom analysis."
  },
  {
    title: "Quantum Task Manager",
    description: "High-performance task management system with real-time collaboration features and automated productivity reporting.",
    image: "/projects/taskmanager.png",
    tech: ["React", "Spring Boot", "MySQL", "WebSocket"],
    github: "#",
    aiFocus: "AI-powered task estimation and automated sub-task generation based on project requirements."
  },
  {
    title: "VibeFlow Music",
    description: "Android music application with offline support, firebase synchronization, and an intuitive modern user interface.",
    image: "/projects/musicapp.png",
    tech: ["Kotlin", "Firebase", "Room DB", "ExoPlayer"],
    github: "#"
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
