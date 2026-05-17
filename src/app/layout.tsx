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
  title: "R. Kapil Kumar | Full-Stack + AI Engineer",
  description: "Portfolio of R. Kapil Kumar - Modern Full-Stack Engineer specializing in AI integrations, backend systems, and performance optimization.",
  keywords: ["Full-Stack Engineer", "AI Integration", "React", "Node.js", "NestJS", "FastAPI", "Machine Learning"],
  authors: [{ name: "R. Kapil Kumar" }],
  openGraph: {
    title: "R. Kapil Kumar | Full-Stack + AI Engineer",
    description: "Modern Full-Stack Engineer specializing in AI integrations and high-performance systems.",
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
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-[#030303] text-white`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
