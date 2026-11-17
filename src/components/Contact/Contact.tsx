"use client";

import { useState, useTransition } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone, FileText } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "../Icons";
import { submitContactForm } from "@/app/actions/contact";

export default function Contact() {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: null, message: '' });
    
    const formData = new FormData(e.currentTarget);
    const form = e.currentTarget;

    startTransition(async () => {
      const result = await submitContactForm(formData);
      if (result.error) {
        setStatus({ type: 'error', message: result.error });
      } else {
        setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
        form.reset();
      }
    });
  };

  return (
    <section id="contact" className="py-48 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-28 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-cyan-400 mb-6">Contact</h2>
          <h3 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">Let&apos;s build something <span className="text-gradient">Extraordinary</span></h3>
          <p className="text-cyan-100/70 text-lg md:text-xl font-light mb-12 leading-relaxed">
            I&apos;m always open to discussing innovative projects, AI integrations, or
            high-performance engineering roles. Drop me a message!
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-6 group">
              <div className="p-4 glass border-cyan-500/20 group-hover:border-cyan-400/40 group-hover:bg-cyan-950/40 transition-all shadow-lg text-cyan-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-cyan-400/80 mb-0.5">Email Me</div>
                <a href="mailto:rkapilkumar2001@gmail.com" className="text-base font-medium text-white hover:text-cyan-300 transition-colors">
                  rkapilkumar2001@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="p-4 glass border-cyan-500/20 group-hover:border-cyan-400/40 group-hover:bg-cyan-950/40 transition-all shadow-lg text-cyan-400">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-cyan-400/80 mb-0.5">Call / WhatsApp</div>
                <a href="tel:+918328870518" className="text-base font-medium text-white hover:text-cyan-300 transition-colors font-mono">
                  +91-8328870518
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="p-4 glass border-cyan-500/20 group-hover:border-cyan-400/40 group-hover:bg-cyan-950/40 transition-all shadow-lg text-cyan-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-cyan-400/80 mb-0.5">Location</div>
                <div className="text-base font-medium text-white">
                  Bangalore, India
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <a
                href="https://github.com/Kappo-Pro"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="p-4 glass glass-hover border-cyan-500/20 hover:border-cyan-400/50 text-gray-400 hover:text-cyan-300 transition-all hover:scale-110 shadow-xl hover:shadow-[0_0_20px_rgba(6,182,212,0.25)]"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/r-kapil-kumar-938623237/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="p-4 glass glass-hover border-cyan-500/20 hover:border-cyan-400/50 text-gray-400 hover:text-cyan-300 transition-all hover:scale-110 shadow-xl hover:shadow-[0_0_20px_rgba(6,182,212,0.25)]"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                title="View CV"
                className="p-4 glass glass-hover border-cyan-500/20 hover:border-cyan-400/50 text-gray-400 hover:text-cyan-300 transition-all hover:scale-110 shadow-xl hover:shadow-[0_0_20px_rgba(6,182,212,0.25)]"
              >
                <FileText className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 md:p-10 glass border-cyan-500/25 shadow-[0_0_50px_rgba(6,182,212,0.1)] relative overflow-hidden"
        >
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-400/80 ml-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  disabled={isPending}
                  placeholder="John Doe"
                  className="w-full bg-cyan-950/30 border border-cyan-500/25 px-4 py-3 focus:outline-none focus:border-cyan-400 focus:bg-cyan-950/40 focus:ring-1 focus:ring-cyan-400/40 transition-all text-cyan-100 placeholder:text-gray-500 font-light text-sm disabled:opacity-50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-400/80 ml-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  disabled={isPending}
                  placeholder="john@example.com"
                  className="w-full bg-cyan-950/30 border border-cyan-500/25 px-4 py-3 focus:outline-none focus:border-cyan-400 focus:bg-cyan-950/40 focus:ring-1 focus:ring-cyan-400/40 transition-all text-cyan-100 placeholder:text-gray-500 font-light text-sm disabled:opacity-50"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-400/80 ml-1">Your Message</label>
              <textarea
                name="message"
                rows={4}
                required
                disabled={isPending}
                placeholder="How can I help you?"
                className="w-full bg-cyan-950/30 border border-cyan-500/25 px-4 py-3 focus:outline-none focus:border-cyan-400 focus:bg-cyan-950/40 focus:ring-1 focus:ring-cyan-400/40 transition-all text-cyan-100 placeholder:text-gray-500 font-light resize-none text-sm disabled:opacity-50"
              />
            </div>
            <button 
              type="submit"
              disabled={isPending}
              className="w-full py-4 bg-cyan-400 text-[#020b0e] font-bold hover:bg-cyan-300 transition-all flex items-center justify-center gap-3 group text-sm shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_35px_rgba(34,211,238,0.5)] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
            >
              {isPending ? 'Sending...' : 'Send Message'}
              {!isPending && <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
            </button>
            
            {status.message && (
              <div className={`p-4 text-sm font-bold text-center border ${status.type === 'success' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'}`}>
                {status.message}
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
