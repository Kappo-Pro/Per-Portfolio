import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects/Projects";
import AISection from "@/components/AI/AISection";
import Experience from "@/components/Experience/Experience";
import Credentials from "@/components/Credentials/Credentials";
import Contact from "@/components/Contact/Contact";
import Navbar from "@/components/Navigation/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col">
      <Navbar />
      <div className="flex flex-col w-full gap-16 md:gap-24">
        <Hero />
        <About />
        <Skills />
        <AISection />
        <Projects />
        <Experience />
        <Credentials />
        <Contact />
      </div>

      {/* Footer */}
        <footer className="py-12 w-full text-center border-t border-cyan-500/15 text-cyan-400/60 text-sm">
          <p>© 2026 R. Kapil Kumar. Built with Next.js, Three.js & AI.</p>
        </footer>
    </main>
  );
}
