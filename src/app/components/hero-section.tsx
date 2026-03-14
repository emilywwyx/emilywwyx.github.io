import { motion } from "motion/react";
import { Linkedin, Github, Mail, ArrowRight } from "lucide-react";
import portraitImage from "figma:asset/ec252ee3d099e33adebf47374e1f6557464afd76.png";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Name */}
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight text-gray-900">
                Emily Wang
              </h1>
              <div className="flex items-center gap-2 text-gray-500">
                <span>New York, NY</span>
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-tight text-gray-900">
              Software Engineer building thoughtful, scalable products
            </h2>

            {/* Subheadline */}
            <p className="text-lg text-gray-600 leading-relaxed">
              MS in Computer Science at Columbia University with experience across frontend development, 
              backend systems, developer tools, and product-focused engineering.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                View Work
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-xl border border-gray-200 hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                Contact
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-4">
              <a
                href="https://www.linkedin.com/in/emily-w-b70621254/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/emilywwyx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-72 h-96 md:w-80 md:h-[28rem] lg:w-96 lg:h-[32rem] overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={portraitImage}
                  alt="Emily Wang"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}