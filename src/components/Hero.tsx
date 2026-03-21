import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/10 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4 font-body">
            Welcome to my portfolio
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-4">
            <span className="gradient-text">Akshey</span>{" "}
            <span className="text-foreground">Verma</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary font-display font-medium mb-4">
            Full Stack Developer | MERN Stack Enthusiast
          </p>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
            Building real-world scalable web applications
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-display font-medium text-primary-foreground transition-all duration-300 hover:scale-105 glow"
            style={{ background: "var(--gradient-primary)" }}
          >
            View Projects
            <ArrowDown className="w-4 h-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-display font-medium glass-card text-foreground transition-all duration-300 hover:scale-105 gradient-border"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </Link>
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
