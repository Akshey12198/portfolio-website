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

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-2 font-display">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display">
            My <span className="gradient-text">tech stack</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              className="glass-card rounded-xl p-6"
            >
              <h3 className="font-display font-semibold text-lg text-foreground mb-5">{group.category}</h3>
              <div className="space-y-4">
                {group.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: "var(--gradient-primary)" }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
