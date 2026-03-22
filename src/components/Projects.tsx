import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    type: "Web",
    title: "Barbershop Website",
    technologies: "HTML, CSS, JavaScript, Gsap, Swiper Js and Figma.",
  },
  {
    number: "02",
    type: "Design",
    title: "Interface Design For Ice Cream Shop",
    technologies: "HTML, CSS, JavaScript, Gsap, Swiper Js and Figma.",
  },
  {
    number: "03",
    type: "Web",
    title: "SEO For Coffee Websites",
    technologies: "HTML, CSS, JavaScript, Gsap, Swiper Js and Figma.",
  },
  {
    number: "04",
    type: "Design",
    title: "Web Design For Restaurant",
    technologies: "HTML, CSS, JavaScript, Gsap, Swiper Js and Figma.",
  },
  {
    number: "05",
    type: "Web",
    title: "Fast Food Website",
    technologies: "HTML, CSS, JavaScript, Gsap, Swiper Js and Figma.",
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
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display leading-tight">
            I Make Incredible
            <br />
            <span className="text-primary">Projects</span>
          </h2>
        </motion.div>

        <motion.div 
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.number}
              variants={cardVariants}
              whileHover={{ x: 10 }}
              className="group"
            >
              <motion.div
                className="glass-card rounded-lg p-8 relative overflow-hidden border border-border/50"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background glow on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10 grid grid-cols-12 gap-8 items-center">
                  {/* Number */}
                  <motion.div
                    className="col-span-1"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    <h3 className="text-4xl font-bold text-primary/30 font-display">
                      {project.number}
                    </h3>
                  </motion.div>

                  {/* Content */}
                  <div className="col-span-10 space-y-2">
                    <motion.p
                      className="text-sm text-muted-foreground uppercase tracking-wider font-medium"
                      whileHover={{ color: "var(--accent)" }}
                    >
                      {project.type}
                    </motion.p>
                    <motion.h4
                      className="text-2xl md:text-3xl font-bold font-display text-foreground group-hover:text-primary transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      {project.title}
                    </motion.h4>
                    <motion.p
                      className="text-muted-foreground text-sm leading-relaxed pt-2"
                      initial={{ opacity: 0.7 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <span className="font-semibold text-foreground">Technologies used:</span>{" "}
                      {project.technologies}
                    </motion.p>
                  </div>

                  {/* Arrow */}
                  <motion.div
                    className="col-span-1 text-right"
                    whileHover={{ x: 5 }}
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </motion.div>
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
