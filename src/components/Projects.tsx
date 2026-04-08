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
    <section id="projects" className="py-20 md:py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#2563EB] dark:text-[#6366F1] text-xs tracking-[0.15em] uppercase mb-3 font-body font-medium">Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-[#0F172A] dark:text-[#FAFAFA]">
            Work I've built
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="card-minimal group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-[#2563EB] dark:group-hover:text-[#6366F1] transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                  <Github className="w-4 h-4 cursor-pointer hover:text-foreground transition-colors" />
                  <ExternalLink className="w-4 h-4 cursor-pointer hover:text-foreground transition-colors" />
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md bg-[#2563EB]/10 dark:bg-[#6366F1]/10 text-[#2563EB] dark:text-[#6366F1] font-medium">
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
