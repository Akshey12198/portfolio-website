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
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-2 font-display">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display">
            Featured <span className="gradient-text">work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 group hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display font-semibold text-xl text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2 text-muted-foreground">
                  <Github className="w-4 h-4 hover:text-foreground cursor-pointer transition-colors" />
                  <ExternalLink className="w-4 h-4 hover:text-foreground cursor-pointer transition-colors" />
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
