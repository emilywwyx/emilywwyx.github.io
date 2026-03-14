import { motion } from "motion/react";
import { useInView } from "./use-in-view";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Distributed Real-Time Road Navigation System",
    tech: ["Spring Boot", "Docker", "Kubernetes", "AWS", "Redis"],
    description:
      "Scalable routing platform with real-time telemetry and performance-aware backend design.",
    href: "#",
    status: "In Progress",
  },
  {
    title: "NYC Study Cafe Finder",
    tech: ["React", "Vite", "TypeScript", "Flask", "Bootstrap"],
    description:
      "A live front-end demo of a larger full-stack project for discovering study-friendly cafes in New York City. The broader project also included Flask-based backend development and additional full-stack functionality.",
    href: "https://emilywwyx.github.io/nyc-study-cafe-finder/",
    status: "Live Demo",
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
              <motion.a
                key={index}
                href={project.href}
                target={project.href.startsWith("http") ? "_blank" : undefined}
                rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="block bg-white rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-2xl md:text-3xl text-gray-900">
                      {project.title}
                    </h3>

                    <div className="flex items-center gap-3">
                      <span className="text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                        {project.status}
                      </span>
                      <ArrowUpRight className="w-5 h-5 text-gray-500" />
                    </div>
                  </div>

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

                  <p className="text-sm text-gray-500">
                    {project.status === "Live Demo"
                      ? "View live demo"
                      : "Project page coming soon"}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}