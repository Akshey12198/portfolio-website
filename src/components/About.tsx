import { motion } from "framer-motion";
import { User, Lightbulb, TrendingUp } from "lucide-react";

const About = () => {
  const highlights = [
    { icon: User, label: "BTech CSE Student", desc: "Passionate about technology and building impactful solutions" },
    { icon: Lightbulb, label: "Full Stack Developer", desc: "MERN stack enthusiast with hands-on project experience" },
    { icon: TrendingUp, label: "AI & Finance", desc: "Exploring AI-driven stock market tools and automation" },
  ];

  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-2 font-display">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            Turning ideas into <span className="gradient-text">reality</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed mb-12">
            I'm a BTech Computer Science Engineering student with a deep passion for full stack web development, 
            problem-solving, and building real-world applications. I love working with the MERN stack and exploring 
            the intersection of AI and finance through personal projects. My goal is to create scalable, 
            user-centric products that solve meaningful problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card rounded-xl p-6 hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: "var(--gradient-primary)" }}>
                <item.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">{item.label}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
