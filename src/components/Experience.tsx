import { motion } from "framer-motion";
import { Rocket, BookOpen, Target } from "lucide-react";

const items = [
  { icon: Rocket, title: "Building Real-World Projects", desc: "Continuously shipping full-stack applications to sharpen skills and solve real problems." },
  { icon: BookOpen, title: "Continuous Learning", desc: "Staying up to date with the latest technologies, frameworks, and best practices in web development." },
  { icon: Target, title: "Growth Mindset", desc: "Embracing challenges, learning from failures, and iterating rapidly towards better solutions." },
];

const Experience = () => (
  <section id="experience" className="py-20 md:py-24">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="text-[#2563EB] dark:text-[#6366F1] text-xs tracking-[0.15em] uppercase mb-3 font-body font-medium">Journey</p>
        <h2 className="text-4xl md:text-5xl font-bold font-display text-[#0F172A] dark:text-[#FAFAFA]">
          Learning & growing
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-5">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="card-minimal"
          >
            <div className="w-9 h-9 rounded-md flex items-center justify-center mb-4 bg-[#2563EB]/10 dark:bg-[#6366F1]/10">
              <item.icon className="w-5 h-5 text-[#2563EB] dark:text-[#6366F1]" />
            </div>
            <h3 className="font-display font-semibold text-base text-foreground mb-3">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed font-body">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
