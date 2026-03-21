import { motion } from "framer-motion";
import { User, Lightbulb, TrendingUp } from "lucide-react";

const About = () => {
  const highlights = [
    { icon: User, label: "BTech CSE Student", desc: "Passionate about technology and building impactful solutions" },
    { icon: Lightbulb, label: "Full Stack Developer", desc: "MERN stack enthusiast with hands-on project experience" },
    { icon: TrendingUp, label: "AI & Finance", desc: "Exploring AI-driven stock market tools and automation" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
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
        stiffness: 100,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p 
            className="text-primary text-sm tracking-[0.3em] uppercase mb-2 font-display"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            About Me
          </motion.p>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            Turning ideas into <span className="gradient-text">reality</span>
          </h2>
          
          <motion.p 
            className="text-muted-foreground max-w-2xl text-lg leading-relaxed mb-12"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I'm a BTech Computer Science Engineering student with a deep passion for full stack web development, 
            problem-solving, and building real-world applications. I love working with the MERN stack and exploring 
            the intersection of AI and finance through personal projects. My goal is to create scalable, 
            user-centric products that solve meaningful problems.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <motion.div
                className="glass-card rounded-xl p-6 h-full relative overflow-hidden"
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
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 cursor-pointer"
                    style={{ background: "var(--gradient-primary)" }}
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </motion.div>

                  <motion.h3 
                    className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    {item.label}
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
};

export default About;
