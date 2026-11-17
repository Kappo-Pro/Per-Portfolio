"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Globe, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Veer Surendra Sai University of Technology (VSSUT) • Burla, India",
    period: "Jun 2021 – May 2023",
    icon: <GraduationCap className="w-5 h-5 text-blue-400" />
  },
  {
    degree: "Bachelor of Science in Mathematics (B.Sc. Math)",
    institution: "Central University of Odisha (CUO) • Koraput, India",
    period: "Jun 2018 – May 2021",
    icon: <BookOpen className="w-5 h-5 text-purple-400" />
  }
];

const certifications = [
  {
    title: "CCNA",
    subtitle: "Cisco Certified Network Associate"
  },
  {
    title: "CPA & PCAP",
    subtitle: "Certified Associate Programmer in C++ & Python"
  },
  {
    title: "HackerRank",
    subtitle: "Certified Intermediate SQL & Advanced Algorithmic Thinking"
  },
  {
    title: "Coursera",
    subtitle: "React Native Development Certification"
  }
];

const languages = [
  { name: "English", level: "Professional" },
  { name: "Hindi", level: "Native" },
  { name: "Odiya", level: "Conversational" },
  { name: "Telugu", level: "Conversational" }
];

export default function Credentials() {
  return (
    <section id="credentials" className="py-32 md:py-48 px-6 max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-[10px] font-bold tracking-[0.4em] uppercase text-cyan-400 mb-6">Credentials</h2>
        <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Education & <span className="text-gradient">Qualifications</span></h3>
        <p className="text-cyan-100/70 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
          My academic foundation, professional certifications, and language proficiencies.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-3 border-b border-cyan-500/20 pb-3">
            <GraduationCap className="w-6 h-6 text-cyan-400" />
            <h4 className="text-xl font-bold text-cyan-100">Education</h4>
          </div>
          
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="p-6 glass border-cyan-500/15 hover:border-cyan-400/35 hover:shadow-[0_0_25px_rgba(6,182,212,0.1)] transition-all flex gap-4 group">
                <div className="p-2.5 bg-cyan-950/40 border border-cyan-500/25 text-cyan-400 h-fit self-start group-hover:scale-110 transition-transform">
                  {edu.icon}
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400/80 font-mono">{edu.period}</span>
                  <h5 className="text-base font-bold text-white group-hover:text-cyan-200 transition-colors mt-1">{edu.degree}</h5>
                  <p className="text-xs text-cyan-100/60 mt-1 font-light">{edu.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-3 border-b border-cyan-500/20 pb-3">
            <Award className="w-6 h-6 text-cyan-400" />
            <h4 className="text-xl font-bold text-cyan-100">Certifications</h4>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="p-6 glass border-cyan-500/15 hover:border-cyan-400/35 hover:shadow-[0_0_25px_rgba(6,182,212,0.1)] transition-all group flex flex-col justify-between">
                <div>
                  <h5 className="text-sm font-bold text-white/90 group-hover:text-cyan-300 transition-colors uppercase tracking-wider">{cert.title}</h5>
                  <p className="text-xs text-cyan-100/60 mt-2 font-light">{cert.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-3 border-b border-cyan-500/20 pb-3">
            <Globe className="w-6 h-6 text-cyan-400" />
            <h4 className="text-xl font-bold text-cyan-100">Languages</h4>
          </div>

          <div className="p-6 glass border-cyan-500/15 hover:border-cyan-400/35 transition-all space-y-6">
            {languages.map((lang, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <span className="text-sm font-bold text-white">{lang.name}</span>
                  <span className="text-[10px] uppercase tracking-wider text-cyan-400/70 block mt-1 font-semibold">{lang.level}</span>
                </div>
                <div className="w-24 h-1.5 bg-cyan-950/60 rounded-full overflow-hidden border border-cyan-500/20">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 via-cyan-300 to-teal-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                    style={{
                      width: 
                        lang.level === "Native" 
                          ? "100%" 
                          : lang.level === "Professional" 
                          ? "85%" 
                          : "60%"
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
