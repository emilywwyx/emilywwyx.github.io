import { motion } from "motion/react";
import { useInView } from "./use-in-view";

const experiences = [
  {
    company: "VortexNet",
    role: "Software Engineer Intern",
    period: "Sep 2025 – Dec 2025",
    description:
      "Worked on a distributed routing platform for real-time navigation, with a focus on backend scalability, graph processing, and traffic-aware route computation.",
    highlights: [
      "Sustained ~1K QPS with sub-100ms P99 latency using Spring Boot, Docker, Kubernetes, and regional graph sharding",
      "Built map ingestion and graph transformation pipelines using OpenStreetMap, S3, LMDB, and S2 indexing",
      "Implemented telemetry and caching pipelines with AWS Kinesis and Redis for fast rerouting and lower routing CPU cost",
    ],
  },
  {
    company: "Baidu",
    role: "Full-Stack Developer Intern, Frontend Focus",
    period: "May 2025 – Aug 2025",
    description: "Worked on Comate AI IDE, an enterprise AI-powered coding environment for developer workflows.",
    highlights: [
      "Delivered 30+ production React and TypeScript features and fixes",
      "Improved chat and editor workflows",
      "Helped refactor chat history from pagination to infinite scrolling",
      "Collaborated with PMs and backend engineers",
    ],
  },
  {
    company: "Hewlett Packard Enterprise",
    role: "Software Engineer Intern",
    period: "May 2023 – Aug 2023",
    description: "Worked on enterprise gateway systems and internal platform tooling.",
    highlights: [
      "Built Spring Boot REST APIs and MongoDB-backed configuration modules",
      "Implemented Redis caching and rate limiting",
      "Improved backend reliability and admin-side efficiency",
    ],
  },
];

export function ExperienceSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="experience" ref={ref} className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          <h2 className="text-5xl md:text-6xl tracking-tight text-gray-900">
            Experience
          </h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-4 pb-12 border-b border-gray-200 last:border-0 hover:bg-gray-50/50 -mx-4 px-4 py-6 rounded-xl transition-all duration-300"
              >
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl text-gray-900">
                    {exp.company}
                  </h3>
                  <p className="text-lg text-gray-600">{exp.role}</p>
                  <p className="text-base text-gray-500">{exp.period}</p>
                </div>

                <p className="text-base text-gray-700 leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-2 pt-2">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li
                      key={hIndex}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <span className="text-gray-400 mt-1.5">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
