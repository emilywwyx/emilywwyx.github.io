import { motion } from "motion/react";
import { useInView } from "./use-in-view";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

export function ContactSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="contact" ref={ref} className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          <h2 className="text-5xl md:text-6xl tracking-tight text-gray-900">
            Contact
          </h2>

          <div className="space-y-8">
            <p className="text-3xl md:text-4xl text-gray-900 leading-relaxed">
              Let's build something thoughtful.
            </p>

            <div className="space-y-4 pt-4">
              <a
                href="mailto:yw4724@columbia.edu"
                className="flex items-center gap-3 text-lg text-gray-700 hover:text-gray-900 transition-colors duration-200 group"
              >
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                <span>yw4724@columbia.edu</span>
              </a>

              <a
                href="https://www.linkedin.com/in/emily-w-b70621254/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-lg text-gray-700 hover:text-gray-900 transition-colors duration-200 group"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                <span>linkedin.com/in/emily-w-b70621254</span>
              </a>

              <a
                href="https://github.com/emilywwyx"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-lg text-gray-700 hover:text-gray-900 transition-colors duration-200 group"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                <span>github.com/emilywwyx</span>
              </a>

              <div className="flex items-center gap-3 text-lg text-gray-700">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span>New York, NY</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
