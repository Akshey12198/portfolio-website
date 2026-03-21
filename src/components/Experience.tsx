import { motion } from "framer-motion";
import { Rocket, BookOpen, Target } from "lucide-react";

const items = [
  { icon: Rocket, title: "Building Real-World Projects", desc: "Continuously shipping full-stack applications to sharpen skills and solve real problems." },
  { icon: BookOpen, title: "Continuous Learning", desc: "Staying up to date with the latest technologies, frameworks, and best practices in web development." },
  { icon: Target, title: "Growth Mindset", desc: "Embracing challenges, learning from failures, and iterating rapidly towards better solutions." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, rotateX: 10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      type: "spring",
      stiffness: 120,
    },
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    boxShadow: "0 0 40px rgba(79, 172, 254, 0.6)",
    transition: { duration: 0.3 },
  },
};

const Experience = () => (
  <section id="experience" className="py-24 relative overflow-hidden">
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
          Experience
        </motion.p>
        <h2 className="text-3xl md:text-4xl font-bold font-display">
          Learning & <span className="gradient-text">growing</span>
        </h2>
      </motion.div>

      <motion.div 
        className="grid md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            variants={cardVariants}
            whileHover={{ y: -12 }}
            className="group"
          >
            <motion.div
              className="glass-card rounded-xl p-6 text-center h-full relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background glow on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />

              <div className="relative z-10">
                <motion.div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 cursor-pointer"
                  style={{ background: "var(--gradient-primary)" }}
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </motion.div>

                <motion.h3 
                  className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.title}
                </motion.h3>

                <motion.p 
                  className="text-muted-foreground text-sm leading-relaxed"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                >
                  {item.desc}
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Experience;
