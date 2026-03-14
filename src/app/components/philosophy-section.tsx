import { motion } from "motion/react";
import { useInView } from "./use-in-view";

const philosophyPoints = [
  "I enjoy building products that are clean, useful, and technically solid.",
  "I care about developer experience, frontend polish, and backend reliability.",
  "I like turning messy workflows into intuitive and scalable systems.",
];

export function PhilosophySection() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-32 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          <h2 className="text-5xl md:text-6xl tracking-tight text-gray-900">
            Engineering Philosophy
          </h2>

          <div className="space-y-8">
            {philosophyPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <span className="mt-3 h-1.5 w-1.5 rounded-full bg-gray-400 shrink-0" />
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                  {point}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}