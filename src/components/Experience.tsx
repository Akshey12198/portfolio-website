import { motion } from "framer-motion";
import { Rocket, BookOpen, Target } from "lucide-react";

const items = [
  { icon: Rocket, title: "Building Real-World Projects", desc: "Continuously shipping full-stack applications to sharpen skills and solve real problems." },
  { icon: BookOpen, title: "Continuous Learning", desc: "Staying up to date with the latest technologies, frameworks, and best practices in web development." },
  { icon: Target, title: "Growth Mindset", desc: "Embracing challenges, learning from failures, and iterating rapidly towards better solutions." },
];

const Experience = () => (
  <section id="experience" className="py-24">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-2 font-display">Experience</p>
        <h2 className="text-3xl md:text-4xl font-bold font-display">
          Learning & <span className="gradient-text">growing</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="glass-card rounded-xl p-6 text-center hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: "var(--gradient-primary)" }}>
              <item.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-display font-semibold text-lg text-foreground mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
