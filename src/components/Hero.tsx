import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-start justify-center overflow-hidden pt-24 pb-12 bg-white dark:bg-[#0A0A0A] transition-colors duration-300">
      <div className="section-container relative z-10 flex flex-col w-full">
        {/* Profile Image - Left aligned for asymmetry */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 w-40 md:w-48"
        >
          <motion.img
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            src="/BCA58ABF-7EFD-4758-A8EB-901D5A9F20AF.png" 
            alt="Akshey Verma" 
            className="w-full h-auto object-contain rounded-lg"
          />
        </motion.div>

        {/* Text Content - Left aligned, more breathing room */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col max-w-2xl space-y-6"
        >
          <div>
            <p className="text-[#64748B] dark:text-[#A1A1AA] text-xs tracking-[0.15em] uppercase font-body font-medium mb-4">
              Hi, I'm Akshey
            </p>
            <h1 className="text-5xl md:text-6xl font-bold font-display leading-tight">
              <span className="block text-[#0F172A] dark:text-[#FAFAFA]">Crafting digital</span>
              <span className="block text-[#2563EB] dark:text-[#6366F1] mt-2">experiences.</span>
            </h1>
          </div>
          <p className="text-lg text-[#64748B] dark:text-[#A1A1AA] font-body leading-relaxed max-w-lg">
            Full-stack developer building scalable web applications with React, Node.js, and modern tooling. I focus on creating clean, performant code and thoughtful user experiences.
          </p>
        </motion.div>

        {/* Buttons - Subtle and intentional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-display font-medium text-white bg-[#2563EB] hover:bg-[#1D4ED8] active:scale-95 dark:bg-[#6366F1] dark:hover:bg-[#5558E3] transition-all duration-200 ease-out"
          >
            View My Work
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-display font-medium text-[#0F172A] dark:text-[#FAFAFA] border border-[#E2E8F0] dark:border-[#1F2937] hover:bg-[#F8FAFC] dark:hover:bg-[#0F172A] transition-all duration-200 ease-out"
          >
            <Mail className="w-4 h-4" />
            Let's Talk
          </a>
        </motion.div>
      </div>

      {/* Subtle scroll indicator - More minimal */}
      <motion.div
        className="absolute bottom-12 left-6"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="text-xs text-[#CBD5E1] dark:text-[#4B5563] uppercase tracking-[0.1em] mb-2 font-body">
          Scroll to explore
        </p>
        <ArrowDown className="w-4 h-4 text-[#CBD5E1] dark:text-[#4B5563]" />
      </motion.div>
    </section>
  );
};

export default Hero;
