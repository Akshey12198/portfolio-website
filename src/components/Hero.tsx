import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0">
      </div>

      <div className="section-container relative z-10 flex flex-col items-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-48 rounded-lg mb-8"
          >
            <img 
              src="/BCA58ABF-7EFD-4758-A8EB-901D5A9F20AF.png" 
              alt="Akshey Verma" 
              className="w-full h-auto object-contain mx-auto"
            />
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-2xl space-y-4"
        >
          <p className="text-muted-foreground text-xs tracking-[0.2em] uppercase font-body">
            Welcome to my portfolio
          </p>
          <h1 className="text-6xl md:text-7xl font-bold font-display">
            <span className="gradient-text">Akshey</span>{" "}
            <span className="text-foreground">Verma</span>
          </h1>
          <p className="text-lg md:text-xl text-primary font-display font-medium">
            Full Stack Developer | MERN Stack Enthusiast
          </p>
          <p className="text-muted-foreground text-base md:text-lg">
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
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-display font-medium text-primary-foreground transition-all duration-300 hover:scale-105"
            style={{ background: "var(--gradient-primary)" }}
          >
            View Projects
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-display font-medium glass-card text-foreground transition-all duration-300 hover:scale-105 border border-border"
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
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default Hero;
