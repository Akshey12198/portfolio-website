import { motion } from "framer-motion";
import { Code, Palette, Smartphone } from "lucide-react";

const servicesList = [
  {
    title: "Developer",
    description: "Website creation with HTML, CSS, JavaScript. Professional websites with TypeScript, React, Node JS, and lots of creativity.",
    skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Node Js", "Next Js", "PHP", "GitHub"],
    icon: Code,
  },
  {
    title: "Design",
    description: "Web designer with Figma and Sketch, creating motion designs with After Effects, creativity and design at its best.",
    skills: ["Figma", "Adobe XD", "Photoshop", "Ilustrator", "Sketch", "3D Modeling", "After Effects"],
    icon: Palette,
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

const Services = () => {
  return (
    <section id="services" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display leading-tight">
            What I <span className="text-primary">Offer</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="group"
              >
                <motion.div
                  className="glass-card rounded-xl p-8 h-full relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Background glow on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-6"
                      style={{ background: "var(--gradient-primary)" }}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      className="text-2xl font-bold font-display text-foreground mb-3 group-hover:text-primary transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      {service.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      className="text-muted-foreground text-sm leading-relaxed mb-6"
                      initial={{ opacity: 0.7 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {service.description}
                    </motion.p>

                    {/* Skills Label */}
                    <motion.p className="text-sm font-semibold text-foreground mb-3">
                      Skills & Tools
                    </motion.p>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2">
                      {service.skills.map((skill, idx) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05, duration: 0.3 }}
                          whileHover={{ scale: 1.1 }}
                          className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium cursor-pointer transition-colors hover:bg-primary/20"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
