import { motion } from "framer-motion";
import { User, Lightbulb, TrendingUp } from "lucide-react";

const About = () => {
  const highlights = [
    { icon: User, label: "BTech CSE Student", desc: "Passionate about technology and building impactful solutions" },
    { icon: Lightbulb, label: "Full Stack Developer", desc: "MERN stack enthusiast with hands-on project experience" },
    { icon: TrendingUp, label: "AI & Finance", desc: "Exploring AI-driven stock market tools and automation" },
  ];

  return (
    <section id="about" className="py-20 md:py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#2563EB] dark:text-[#6366F1] text-xs tracking-[0.15em] uppercase mb-3 font-body font-medium">About</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-[#0F172A] dark:text-[#FAFAFA] mb-8">
            A bit about me
          </h2>
          <p className="text-muted-foreground max-w-2xl text-base leading-relaxed mb-12 font-body">
            I'm a BTech Computer Science student passionate about full-stack web development. I love solving problems with code, exploring the MERN stack, and building applications that matter. When I'm not coding, I'm learning new technologies and tinkering with side projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="card-minimal"
            >
              <div className="w-9 h-9 rounded-md flex items-center justify-center mb-4 bg-[#2563EB]/10 dark:bg-[#6366F1]/10">
                <item.icon className="w-5 h-5 text-[#2563EB] dark:text-[#6366F1]" />
              </div>
              <h3 className="font-display font-semibold text-base text-foreground mb-2">{item.label}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-body">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
