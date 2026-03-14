import { motion } from "motion/react";
import { useInView } from "./use-in-view";
import { Coffee, Sparkles, Code2, Compass } from "lucide-react";

const interests = [
  { icon: Coffee, text: "Exploring cafes in New York City" },
  { icon: Sparkles, text: "Designing clean and thoughtful user experiences" },
  { icon: Code2, text: "Building side projects" },
  { icon: Compass, text: "Walking in the city and finding inspiration in everyday tools" },
];

export function AboutSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" ref={ref} className="py-32 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <h2 className="text-5xl md:text-6xl tracking-tight text-gray-900">
            About
          </h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Emily Wang is a software engineer and graduate computer science student based in New York. 
              She is currently pursuing her MS in Computer Science at{" "}
              <span className="text-gray-900">Columbia University</span> after completing her BA in 
              Mathematics at <span className="text-gray-900">New York University</span>.
            </p>
            
            <p>
              Her experience spans{" "}
              <span className="text-gray-900">frontend development</span>,{" "}
              <span className="text-gray-900">backend systems</span>,{" "}
              <span className="text-gray-900">developer tools</span>, and{" "}
              <span className="text-gray-900">product-focused engineering</span>. She cares about 
              building software that feels both technically solid and genuinely useful.
            </p>
            
            <p>
              She believes great software sits at the intersection of thoughtful engineering 
              and product quality—code that's scalable, maintainable, and a pleasure to use.
            </p>
          </div>

          {/* Personal Interests */}
          <div className="pt-8 space-y-6">
            <h3 className="text-2xl tracking-tight text-gray-900">
              Beyond Engineering
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-300"
                >
                  <interest.icon className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span className="text-base text-gray-700">{interest.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}