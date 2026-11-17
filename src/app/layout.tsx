import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "R. Kapil Kumar | Lead Software Engineer – AI-Native Engineering",
  description: "Portfolio of R. Kapil Kumar - Lead Software Engineer specializing in AI-Native Engineering, Solution Architecture, and Agentic Systems.",
  keywords: [
    "Lead Software Engineer",
    "AI-Native Engineering",
    "Solution Architecture",
    "Agentic Systems",
    "LangGraph",
    "Claude Code",
    "Cursor",
    "Context Engineering",
    "Harness Frameworks",
    "Agent Execution Guardrails",
    "FastAPI",
    "NestJS",
    "Spring Boot",
    "React",
    "Next.js",
  ],
  authors: [{ name: "R. Kapil Kumar" }],
  openGraph: {
    title: "R. Kapil Kumar | Lead Software Engineer – AI-Native Engineering",
    description: "Lead Software Engineer specializing in AI-Native Engineering, Solution Architecture, and Agentic Systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
        <body className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-[#020b0e] text-[#ecfeff] relative`}>
          {/* Subtle ambient cyan glow overlay */}
          <div className="fixed inset-0 pointer-events-none -z-50 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.12),transparent_50%),radial-gradient(circle_at_80%_60%,rgba(8,145,178,0.06),transparent_40%)]" />
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </body>
    </html>
  );
}
