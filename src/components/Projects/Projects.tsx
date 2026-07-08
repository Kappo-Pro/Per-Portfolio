"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "CareSpace AI (Enterprise Healthcare Platform)",
    description: "Secure, real-time clinical workspace integrating longitudinal patient records, AI treatment suggestion engines, and client-side motor assessment.",
    challenge: "Scaling an early-stage MVP into a highly compliant, production-grade clinical tool under strict HIPAA boundaries. The platform required secure, low-latency aggregation of longitudinal patient files and real-time biometric analytics without introducing prohibitive cloud compute costs or exposing patient video streams to server-side privacy risks.",
    solution: "Architected end-to-end encrypted relational data pipelines on Azure using NestJS and Prisma ORM to guarantee compliant transactional safety for longitudinal records. Engineered an LLM-driven clinical treatment recommendation agent powered by OpenAI's GPT-4, utilizing strict JSON schema definitions to generate structured clinical drafts and mitigate hallucination risk. To address biometric tracking, bypassed server-side processing by compiling client-side computer vision pipelines with Google MediaPipe and TensorFlow.js, enabling real-time posture analysis and Range of Motion (ROM) tracking directly in the user's browser.",
    metrics: [
      "Mentored and led a cross-functional team of 11 engineers to deploy the enterprise architecture on Azure.",
      "Slashed clinician administrative workloads by 35% via automated treatment recommendation pre-drafting.",
      "Achieved 98% posture and ROM tracking accuracy across 2,000+ patients with zero server-side rendering latency."
    ],
    tech: ["NestJS", "Prisma", "Azure", "OpenAI API", "MediaPipe", "TensorFlow.js", "React"],
    github: "https://github.com/Kappo-Pro"
  },
  {
    title: "MedVibe (Autonomous WhatsApp Care Assistant)",
    description: "State-driven conversational agent managing patient routing, automated scheduling, and clinical triaging.",
    challenge: "Resolving severe webhook timeout failures in external APIs (e.g., Twilio) caused by long-running LLM reasoning loops. Naive sequential agent chains exceeded the 5-second HTTP threshold, resulting in message drops, duplicate executions, and inconsistent state across concurrent patient threads.",
    solution: "Replaced unstructured conversational chains with a deterministic state-machine architecture using LangGraph to manage state routing for over 10,000 synthetic patient profiles. Built a single-turn clinical reasoning extraction engine that decoupled execution-heavy tasks from the main transaction loop. Configured intent-based edge routing to bypass LLM calls entirely for non-analytical queries (such as greeting and scheduling status queries), yielding sub-second responses. Established a continuous evaluation pipeline using LangSmith for regression testing against 100+ edge-case scenarios.",
    metrics: [
      "Slashed response latency by 70%, reducing webhook response times from ~10s to ~3s.",
      "Decreased token overhead by 40% using state-aware message pruning and context trimming.",
      "Successfully triaged and maintained 100% state consistency across 10,000+ concurrent synthetic profiles."
    ],
    tech: ["FastAPI", "LangGraph", "LangSmith", "Chroma DB", "Python", "Twilio", "Synthea"],
    github: "https://github.com/Kappo-Pro"
  },
  {
    title: "Enterprise Hybrid RAG Pipeline (AWS Integration)",
    description: "High-recall, enterprise-secure document retrieval pipeline with hybrid search and precision reranking.",
    challenge: "Constructing a secure document search system over vast unstructured corporate directories. Pure semantic vector search failed to capture precise keyword tokens (such as compliance codes and serial numbers), whereas traditional lexical matching failed to capture conceptual query intent, leading to low retrieval recall and hallucinations.",
    solution: "Implemented an automated local-to-cloud ingestion pipeline using Python (boto3) to synchronize unstructured documents into AWS S3. Engineered a hybrid retrieval engine pairing dense semantic search (using Chroma DB populated with all-MiniLM-L6-v2 embeddings) and sparse keyword matching via the BM25Okapi algorithm. Consolidated search results via Reciprocal Rank Fusion (RRF). Added a final validation step using Cross-Encoders (ms-marco-MiniLM-L-6-v2) to calculate absolute similarity scores, discarding low-confidence context chunks before compiling prompt inputs for Amazon Bedrock APIs.",
    metrics: [
      "Boosted context retrieval precision (NDCG@10) by 28% compared to standard vector search.",
      "Reduced input token payload and associated Amazon Bedrock execution costs by 25% via precise reranking.",
      "Automated the end-to-end ingestion and indexing pipeline to process 50,000+ pages of documentation."
    ],
    tech: ["AWS S3", "boto3", "Amazon Bedrock", "Chroma DB", "BM25Okapi", "Cross-Encoders", "Python"],
    github: "https://github.com/Kappo-Pro"
  },
  {
    title: "Mathen & Machinify (Fintech & Compliance Engines)",
    description: "Greenfield environmental compliance database mapping and legacy claim processing latency optimization.",
    challenge: "Supporting deep compliance audits across disparate data schemas and eliminating query bottlenecks in high-volume, real-time insurance claims processing.",
    solution: "Designed and implemented a greenfield relational schema on Microsoft Azure using Node.js to normalize 15+ environmental compliance tables, ensuring referential integrity and tracking complex regulatory updates. For the Machinify pipeline, analyzed database query plans to identify costly table scans. Replaced inefficient legacy queries by implementing composite and covering index strategies, restructuring JOIN operations, and configuring caching layers. Implemented batch asynchronous execution to prevent database connection pool exhaustion during peak claim hours.",
    metrics: [
      "Normalized 15+ complex environmental schemas into a unified, audit-ready relational engine.",
      "Slashed database query latency by 55% in the claims processing pipeline.",
      "Scaled concurrent claims throughput to support 5x peak volume with zero query-level connection timeouts."
    ],
    tech: ["Microsoft Azure", "Node.js", "SQL", "Relational Databases", "Express"],
    github: "https://github.com/Kappo-Pro"
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
        <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-gray-400 mb-6">Case Studies</h2>
        <h3 className="text-4xl md:text-7xl font-bold mb-10 leading-tight">Architectural <span className="text-gradient">Deep Dives</span></h3>
        <p className="text-gray-400 max-w-4xl mx-auto text-lg md:text-2xl font-light leading-relaxed">
          Production systems engineered for deterministic performance, high recall, and clinical-grade compliance.
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
