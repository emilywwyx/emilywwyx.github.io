import { motion } from "motion/react";
import { useInView } from "./use-in-view";

const skillCategories = [
  {
    category: "Languages",
    skills: ["Java", "C/C++", "Python", "SQL", "JavaScript", "TypeScript"],
  },
  {
    category: "Frontend",
    skills: ["React", "HTML", "CSS", "Bootstrap", "jQuery", "Ajax"],
  },
  {
    category: "Backend",
    skills: ["Spring Boot", "REST APIs", "Flask", "MVC"],
  },
  {
    category: "Data & Storage",
    skills: ["MySQL", "MongoDB", "Redis", "SQLite", "NoSQL", "JSON", "XML"],
  },
  {
    category: "Cloud & Tools",
    skills: ["AWS", "EC2", "S3", "Docker", "Kubernetes", "Linux", "Git", "GitHub"],
  },
  {
    category: "Concepts",
    skills: [
      "Developer Tools",
      "UI/UX",
      "Performance Optimization",
      "System Design",
      "Object-Oriented Programming",
      "Data Structures",
      "Advanced Algorithms",
    ],
  },
];

export function SkillsSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="skills" ref={ref} className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          <h2 className="text-5xl md:text-6xl tracking-tight text-gray-900">
            Skills
          </h2>

          <div className="grid gap-8 md:gap-10">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="space-y-4"
              >
                <h3 className="text-xl text-gray-500">{category.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-gray-100 text-gray-900 rounded-xl text-base"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}