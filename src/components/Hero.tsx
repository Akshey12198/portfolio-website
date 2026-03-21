import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x: x * 30, y: y * 30 });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
    setIsHovering(false);
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/10 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-accent/5 blur-[120px] animate-float-slow" />
      </div>

      <div className="section-container relative z-10 text-center">
        {/* Profile Picture with 3D Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-10 flex justify-center"
          style={{ perspective: "1200px" }}
        >
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={handleMouseLeave}
            animate={{ 
              rotateX: isHovering ? mousePosition.y : 0,
              rotateY: isHovering ? -mousePosition.x : 0,
              scale: isHovering ? 1.1 : 1,
              boxShadow: isHovering
                ? [
                    "0 20px 60px rgba(79, 172, 254, 0.8)",
                    "0 0 40px rgba(79, 172, 254, 0.6)",
                  ]
                : [
                    "0 0 20px rgba(79, 172, 254, 0.3)",
                    "0 0 40px rgba(79, 172, 254, 0.6)",
                    "0 0 20px rgba(79, 172, 254, 0.3)"
                  ]
            }}
            transition={{ 
              type: "spring",
              stiffness: 400,
              damping: 60,
            }}
            className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-primary/40 shadow-2xl cursor-pointer group flex-shrink-0"
          >
            {/* Rotating background glow */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full"
              style={{
                background: "conic-gradient(from 0deg, transparent 0%, rgba(79, 172, 254, 0.2) 50%, transparent 100%)",
                opacity: isHovering ? 1 : 0.5,
              }}
            />

            {/* Image container with 3D effect */}
            <motion.div
              className="relative w-full h-full"
              animate={{
                scale: isHovering ? 1.05 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/BCA58ABF-7EFD-4758-A8EB-901D5A9F20AF copy.png"
                alt="Akshey Verma"
                className="w-full h-full object-contain bg-gradient-to-b from-muted to-muted/50"
              />
            </motion.div>

            {/* Overlay on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Light reflection effect */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                opacity: isHovering ? [0, 0.3, 0] : 0,
              }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, transparent 50%)",
              }}
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          <motion.p 
            variants={itemVariants}
            className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4 font-body"
          >
            Welcome to my portfolio
          </motion.p>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-4"
          >
            <motion.span 
              className="gradient-text block"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              Akshey
            </motion.span>{" "}
            <span className="text-foreground">Verma</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-primary font-display font-medium mb-4"
          >
            Full Stack Developer | MERN Stack Enthusiast
          </motion.p>

          <motion.p 
            variants={itemVariants}
            className="text-muted-foreground text-lg max-w-xl mx-auto mb-10"
          >
            Building real-world scalable web applications with modern technologies
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-display font-medium text-primary-foreground transition-all duration-300 hover:scale-110 glow group overflow-hidden relative"
              style={{ background: "var(--gradient-primary)" }}
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowDown className="w-4 h-4" />
                </motion.div>
              </span>
            </Link>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-display font-medium glass-card text-foreground transition-all duration-300 gradient-border hover:bg-muted"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
