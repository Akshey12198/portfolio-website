import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 bg-white dark:bg-[#0A0A0A] transition-colors duration-300">
      {/* Background effects */}
      <div className="absolute inset-0">
      </div>

      <div className="section-container relative z-10 flex flex-col items-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.img
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            src="/BCA58ABF-7EFD-4758-A8EB-901D5A9F20AF.png" 
            alt="Akshey Verma" 
            className="max-w-sm w-full h-auto object-contain rounded-lg"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-2xl space-y-4"
        >
          <p className="text-[#64748B] dark:text-[#A1A1AA] text-xs tracking-[0.2em] uppercase font-body">
            Welcome to my portfolio
          </p>
          <h1 className="text-6xl md:text-7xl font-bold font-display">
            <span className="gradient-text">Akshey</span>{" "}
            <span className="text-[#0F172A] dark:text-[#FAFAFA]">Verma</span>
          </h1>
          <p className="text-lg md:text-xl text-[#2563EB] dark:text-[#6366F1] font-display font-medium">
            Full Stack Developer | MERN Stack Enthusiast
          </p>
          <p className="text-[#64748B] dark:text-[#A1A1AA] text-base md:text-lg">
            Building real-world scalable web applications
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 mt-8"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-display font-medium text-white bg-[#2563EB] hover:bg-[#3B82F6] dark:bg-[#6366F1] dark:hover:bg-[#7C3AED] transition-all duration-300 hover:scale-105"
          >
            View Projects
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-display font-medium text-[#2563EB] dark:text-[#6366F1] border-2 border-[#2563EB] dark:border-[#6366F1] hover:bg-[#2563EB] dark:hover:bg-[#6366F1] hover:text-white transition-all duration-300 hover:scale-105"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-5 h-5 text-[#64748B] dark:text-[#A1A1AA]" />
      </motion.div>
    </section>
  );
};

export default Hero;
