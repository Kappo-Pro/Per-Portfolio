"use client";

import { useState, useTransition } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MessageSquare } from "lucide-react";
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
    <section id="contact" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-blue-500 mb-6">Contact</h2>
          <h3 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">Let&apos;s build something <span className="text-gradient">Extraordinary</span></h3>
          <p className="text-gray-400 text-lg md:text-xl font-light mb-12 leading-relaxed">
            I&apos;m always open to discussing innovative projects, AI integrations, or
            high-performance engineering roles. Drop me a message!
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="p-5 glass group-hover:bg-blue-500/10 transition-colors shadow-lg">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Email Me</div>
                <div className="text-lg font-medium">rkapilkumar2001@gmail.com</div>
              </div>
            </div>

            <div className="flex items-center gap-10 pt-4">
              <a
                href="https://github.com/Kappo-Pro"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass glass-hover text-gray-400 hover:text-white transition-all hover:scale-110 shadow-xl"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/r-kapil-kumar-938623237/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass glass-hover text-gray-400 hover:text-white transition-all hover:scale-110 shadow-xl"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass glass-hover text-gray-400 hover:text-white transition-all hover:scale-110 shadow-xl"
              >
                <MessageSquare className="w-6 h-6" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 md:p-10 glass border-white/5 shadow-2xl relative overflow-hidden"
        >
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-blue-500 ml-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  disabled={isPending}
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:border-blue-500/50 transition-all text-white font-light text-sm disabled:opacity-50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-blue-500 ml-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  disabled={isPending}
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:border-blue-500/50 transition-all text-white font-light text-sm disabled:opacity-50"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-blue-500 ml-1">Your Message</label>
              <textarea
                name="message"
                rows={4}
                required
                disabled={isPending}
                placeholder="How can I help you?"
                className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:border-blue-500/50 transition-all text-white font-light resize-none text-sm disabled:opacity-50"
              />
            </div>
            <button 
              type="submit"
              disabled={isPending}
              className="w-full py-4 bg-white text-black font-bold hover:bg-gray-200 transition-all flex items-center justify-center gap-3 group text-sm shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
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
