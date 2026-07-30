"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "NEXTURN",
    role: "Associate Cloud Engineer III",
    period: "January 2026 – Present",
    description: [
      "Led engineering workflows for a group of 11 full-time developers over a 3-month cycle, expanding milestone deployment speeds by 20%.",
      "Architected 100% of technical choices for stakeholders, removing organizational project management overhead.",
      "Built a multi-role financial trading network using Spring Boot and Next.js to process corporate carbon credit asset allocations.",
      "Configured recommendation algorithms using integrated LLMs to calculate portfolio splits matching raw emissions metrics.",
      "Authored MedVibe, a production WhatsApp clinical chatbot via FastAPI and LangGraph, decreasing turnaround latency from 10.0 to 3.0 seconds to eliminate webhook timeout hazards."
    ]
  },
  {
    company: "NEXTURN",
    role: "Associate Cloud Engineer II",
    period: "January 2025 – December 2025",
    description: [
      "Designed the CARESPACE AI physical evaluation framework using TensorFlow MediaPipe to analyze 20+ skeletal points for posture validation.",
      "Formulated patient diagnostic pipelines by writing API script routines that parse raw text inputs into structured JSON models.",
      "Programmed backend services using NestJS and Prisma ORM, sustaining a 99.9% application uptime rate."
    ]
  },
  {
    company: "NEXTURN",
    role: "Associate Cloud Engineer I",
    period: "January 2024 – December 2024",
    description: [
      "Launched a cross-platform application ecosystem serving over 5,000 active users using React, Next.js, and Kotlin.",
      "Reduced asset delivery delays by 35% using Azure Cloud Storage to manage electronic medical records.",
      "Optimized infrastructure resource provisioning strategies to ensure availability for multi-tenant application domains."
    ]
  },
  {
    company: "NEXTURN",
    role: "Associate Software Engineer (Intern)",
    period: "September 2022 – December 2023",
    description: [
      "Shipped 15+ production feature additions utilizing Java and React.js within Agile deployment cycles.",
      "Managed database structures using SQL and MongoDB, lowering local query execution latency by 18% during integration testing."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 md:py-48 px-6 max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-36"
      >
        <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-gray-400 mb-6">Journey</h2>
        <h3 className="text-4xl md:text-7xl font-bold mb-10 leading-tight">Professional <span className="text-gradient">Timeline</span></h3>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
          A track record of building impactful software and leading engineering initiatives.
        </p>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/20 via-white/10 to-transparent" />

        <div className="space-y-32">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row items-center justify-between gap-8 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-[45%]">
                <div className="p-8 glass border-white/5 hover:border-white/25 transition-all shadow-xl group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/90 bg-white/5 border border-white/10 px-2.5 py-1">
                      {exp.period}
                    </span>
                    <Briefcase className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-lg font-bold mb-1 text-white/90">{exp.role}</h4>
                  <p className="text-white/60 font-medium mb-4 text-sm">{exp.company}</p>
                  <ul className="text-gray-400 text-[11px] leading-relaxed font-light list-disc pl-4 space-y-2">
                    {exp.description.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-[#030303] border-2 border-white/40 z-10 shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
              <div className="hidden md:block w-[45%]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
