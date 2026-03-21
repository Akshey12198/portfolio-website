import { motion } from "framer-motion";

const skills = [
  { category: "Languages", items: [
    { name: "JavaScript", level: 90 }, { name: "TypeScript", level: 80 }, { name: "Java", level: 70 }, { name: "Flutter", level: 65 }
  ]},
  { category: "Frontend", items: [
    { name: "React.js", level: 88 }, { name: "Next.js", level: 75 }, { name: "HTML/CSS", level: 92 }, { name: "Tailwind CSS", level: 85 }, { name: "Bootstrap", level: 80 }
  ]},
  { category: "Backend", items: [
    { name: "Node.js", level: 85 }, { name: "Express.js", level: 83 }, { name: "RESTful APIs", level: 85 }, { name: "Authentication", level: 78 }
  ]},
  { category: "Databases", items: [
    { name: "MongoDB", level: 80 }, { name: "PostgreSQL", level: 72 }
  ]},
  { category: "DevOps & CI/CD", items: [
    { name: "Git & GitHub", level: 88 }, { name: "Jenkins", level: 65 }, { name: "CI/CD", level: 68 }
  ]},
  { category: "Testing & Tools", items: [
    { name: "Postman", level: 85 }, { name: "Selenium WebDriver", level: 65 }, { name: "VS Code", level: 90 }, { name: "Figma", level: 70 }
  ]},
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
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const skillItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      delay: i * 0.05,
    },
  }),
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
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
            Skills
          </motion.p>
          <h2 className="text-3xl md:text-4xl font-bold font-display">
            My <span className="gradient-text">tech stack</span>
          </h2>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group"
            >
              <motion.div
                className="glass-card rounded-xl p-6 h-full relative overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background glow on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10">
                  <motion.h3 
                    className="font-display font-semibold text-lg text-foreground mb-5 group-hover:text-primary transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    {group.category}
                  </motion.h3>

                  <div className="space-y-4">
                    {group.items.map((skill, idx) => (
                      <motion.div
                        key={skill.name}
                        custom={idx}
                        initial="hidden"
                        whileInView="visible"
                        variants={skillItemVariants}
                        viewport={{ once: true }}
                        whileHover={{ x: 4 }}
                        className="group/skill"
                      >
                        <div className="flex justify-between mb-1.5">
                          <span className="text-sm font-medium text-foreground group-hover/skill:text-primary transition-colors">
                            {skill.name}
                          </span>
                          <motion.span 
                            className="text-xs text-muted-foreground font-medium"
                            whileHover={{ scale: 1.2 }}
                          >
                            {skill.level}%
                          </motion.span>
                        </div>

                        <div className="h-2 rounded-full bg-muted overflow-hidden relative">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ background: "var(--gradient-primary)" }}
                            initial={{ width: 0, opacity: 0 }}
                            whileInView={{ width: `${skill.level}%`, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 1.2, 
                              delay: idx * 0.08,
                              ease: "easeOut"
                            }}
                          />
                          
                          {/* Animated shimmer on load */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            initial={{ x: "-100%" }}
                            whileInView={{ x: "100%" }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 0.8, 
                              delay: idx * 0.08 + 1.2,
                            }}
                          />
                        </div>
                      </motion.div>
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

export default Skills;
