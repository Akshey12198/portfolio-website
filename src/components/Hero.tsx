import { motion } from "framer-motion";
import { Download, Linkedin, Github, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/akshey-verma-53b22b22a/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/Akshey12198", label: "GitHub" },
    { icon: Mail, href: "mailto:vermaaakshey@gmail.com", label: "Email" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background effects - positioned around the image */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full bg-primary/20 blur-[120px] animate-pulse-glow" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-accent/15 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[70vh]">
          {/* Left Column - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-4 space-y-6"
          >
            <motion.div variants={itemVariants}>
              <p className="text-accent text-sm md:text-base font-body tracking-wider uppercase">
                Hello, I'm
              </p>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-foreground leading-tight"
            >
              Akshey <br /> Verma
            </motion.h1>

            <motion.div variants={itemVariants} className="space-y-2">
              <p className="text-accent text-sm md:text-base font-body">Creative</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display">
                <span className="text-primary">Developer</span>
                <br />
                <span className="text-foreground">& Designer</span>
              </h2>
            </motion.div>

            {/* Social Icons - Left Side */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 pt-8"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                const isExternal = social.href.startsWith("http");
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-lg bg-muted hover:bg-primary/20 text-primary transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Center Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-4 flex justify-center order-first lg:order-none -mt-8 lg:mt-0"
          >
            <div className="relative">
              {/* Glow background */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 blur-2xl" />
              
              {/* Profile Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl w-80 h-96 md:w-96 md:h-[480px] lg:w-80 lg:h-96"
              >
                <img
                  src="/BCA58ABF-7EFD-4758-A8EB-901D5A9F20AF copy.png"
                  alt="Akshey Verma"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Resume Button & Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-4 flex flex-col items-center lg:items-start gap-8"
          >
            <motion.div variants={itemVariants}>
              <Link
                to="/resume"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-display font-medium text-foreground border border-primary/30 hover:bg-primary/10 transition-all duration-300 hover:border-primary/60"
              >
                <Download className="w-4 h-4" />
                RESUME
              </Link>
            </motion.div>

            {/* Additional info */}
            <motion.div
              variants={itemVariants}
              className="text-center lg:text-left space-y-3 hidden lg:block"
            >
              <p className="text-sm text-muted-foreground font-body">
                Full Stack Developer & Creative Designer
              </p>
              <p className="text-sm text-muted-foreground font-body">
                Building amazing web experiences with modern technologies
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          className="w-6 h-6 text-muted-foreground animate-bounce"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
