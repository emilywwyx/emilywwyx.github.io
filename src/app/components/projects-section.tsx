import { motion } from "motion/react";
import { useInView } from "./use-in-view";

const projects = [
  {
    title: "Distributed Real-Time Road Navigation System",
    tech: ["Spring Boot", "Docker", "Kubernetes", "AWS", "Redis"],
    description:
      "Scalable routing platform with real-time telemetry and performance-aware backend design.",
  },
  {
    title: "NYC Study Cafe Finder",
    tech: ["Flask", "Python", "HTML", "CSS", "JavaScript", "SQLite"],
    description:
      "Full-stack web app for discovering study-friendly cafes in New York City.",
  },
];

export function ProjectsSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="projects" ref={ref} className="py-32 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          <h2 className="text-5xl md:text-6xl tracking-tight text-gray-900">
            Selected Projects
          </h2>

          <div className="grid gap-8 md:gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl text-gray-900">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-lg text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}