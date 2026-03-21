import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Job Vacancy Portal",
    description: "A full-featured job listing and application platform with user authentication, job posting, and search functionality.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js"],
  },
  {
    title: "Social Media Application",
    description: "A full stack social media platform with user profiles, posts, likes, comments, and real-time interactions.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Bookstore Project",
    description: "An online bookstore with catalog browsing, cart management, and a clean user interface for book discovery.",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "AI Stock Trading Bot",
    description: "An intelligent trading bot that analyzes market data and makes automated trading decisions using AI algorithms.",
    tech: ["Python", "AI/ML", "APIs"],
  },
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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <motion.p 
            className="text-primary text-sm tracking-[0.3em] uppercase mb-2 font-display"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Projects
          </motion.p>
          <h2 className="text-3xl md:text-4xl font-bold font-display">
            Featured <span className="gradient-text">work</span>
          </h2>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <motion.div
                className="glass-card rounded-xl p-6 h-full relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background glow on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <motion.h3 
                      className="font-display font-semibold text-xl text-foreground group-hover:text-primary transition-colors flex-1"
                      whileHover={{ x: 4 }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.div 
                      className="flex gap-2 text-muted-foreground"
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.button
                        className="hover:text-foreground cursor-pointer transition-colors"
                        whileHover={{ rotate: 10, scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        className="hover:text-foreground cursor-pointer transition-colors"
                        whileHover={{ rotate: -10, scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.button>
                    </motion.div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, idx) => (
                      <motion.span
                        key={t}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05, duration: 0.3 }}
                        whileHover={{ scale: 1.1 }}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium cursor-pointer transition-colors hover:bg-primary/20"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
