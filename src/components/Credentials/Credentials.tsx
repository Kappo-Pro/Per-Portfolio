"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Globe, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Masters in Computer Applications (MCA)",
    institution: "Veer Surendra Sai University of Technology",
    period: "2021 – 2023",
    icon: <GraduationCap className="w-5 h-5 text-blue-400" />
  },
  {
    degree: "Bachelor of Science in Mathematics (B.Sc. Honors)",
    institution: "Central University of Odisha",
    period: "2018 – 2021",
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
    <section id="credentials" className="py-20 px-6 max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-400 mb-6">Credentials</h2>
        <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Education & <span className="text-gradient">Qualifications</span></h3>
        <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
          My academic foundation, professional certifications, and language proficiencies.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-3 border-b border-white/5 pb-3">
            <GraduationCap className="w-6 h-6 text-gray-400" />
            <h4 className="text-xl font-bold text-white/90">Education</h4>
          </div>
          
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="p-6 glass border-white/5 hover:border-white/20 transition-all flex gap-4">
                <div className="p-2.5 bg-white/5 border border-white/10 h-fit self-start">
                  {edu.icon}
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white/60">{edu.period}</span>
                  <h5 className="text-base font-bold text-white/95 mt-1">{edu.degree}</h5>
                  <p className="text-xs text-gray-500 mt-1 font-light">{edu.institution}</p>
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
          <div className="flex items-center gap-3 border-b border-white/5 pb-3">
            <Award className="w-6 h-6 text-gray-400" />
            <h4 className="text-xl font-bold text-white/90">Certifications</h4>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="p-6 glass border-white/5 hover:border-white/20 transition-all group flex flex-col justify-between">
                <div>
                  <h5 className="text-sm font-bold text-white/90 group-hover:text-white transition-colors uppercase tracking-wider">{cert.title}</h5>
                  <p className="text-xs text-gray-500 mt-2 font-light">{cert.subtitle}</p>
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
          <div className="flex items-center gap-3 border-b border-white/5 pb-3">
            <Globe className="w-6 h-6 text-gray-400" />
            <h4 className="text-xl font-bold text-white/90">Languages</h4>
          </div>

          <div className="p-6 glass border-white/5 hover:border-white/20 transition-all space-y-6">
            {languages.map((lang, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <span className="text-sm font-bold text-white/95">{lang.name}</span>
                  <span className="text-[10px] uppercase tracking-wider text-gray-500 block mt-1 font-semibold">{lang.level}</span>
                </div>
                <div className="w-24 h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                  <div
                    className="h-full bg-gradient-to-r from-white to-gray-500"
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
