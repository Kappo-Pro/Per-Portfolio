"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "NexTurn",
    role: "Associate Cloud Engineer (Full-Stack)",
    period: "01/2024 - Present",
    description: [
      "Modernized critical application interfaces across 20+ production screens, delivering a 40%+ increase in UI performance and reducing client-side load times by 25%.",
      "Engineered scalable web architectures using NestJS and Prisma, building secure RESTful APIs that improved system responsiveness by 30%.",
      "Led and managed a team of 5 junior engineering interns, delegating daily sprints and accelerating feature delivery timelines through systematic code reviews.",
      "Collaborated on cloud-based system designs and data management strategies to support seamless frontend-backend integration for 10,000+ active users."
    ]
  },
  {
    company: "NexTurn",
    role: "Software Engineer Intern",
    period: "09/2022 - 01/2024",
    description: [
      "Constructed feature-rich applications leveraging Angular, React, and Spring Boot, contributing to a 15% reduction in production bugs via modular testing.",
      "Optimized relational and non-relational database schemas across MySQL and MongoDB, improving query execution speeds by 20%.",
      "Participated in Agile Scrum ceremonies across 30+ sprint cycles, utilizing Git to successfully manage and merge 50+ multi-developer pull requests."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-32"
      >
        <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-blue-500 mb-6">Journey</h2>
        <h3 className="text-4xl md:text-7xl font-bold mb-10 leading-tight">Professional <span className="text-gradient">Timeline</span></h3>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
          A track record of building impactful software and leading engineering initiatives.
        </p>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent" />

        <div className="space-y-20">
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
                <div className="p-6 glass border-white/5 hover:border-blue-500/20 transition-all shadow-xl group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-blue-500 bg-blue-500/10 px-2.5 py-1">
                      {exp.period}
                    </span>
                    <Briefcase className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <h4 className="text-lg font-bold mb-1 text-white/90">{exp.role}</h4>
                  <p className="text-blue-400 font-medium mb-4 text-sm">{exp.company}</p>
                  <ul className="text-gray-400 text-[11px] leading-relaxed font-light list-disc pl-4 space-y-1.5">
                    {exp.description.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-[#030303] border-2 border-blue-500 z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
              <div className="hidden md:block w-[45%]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
