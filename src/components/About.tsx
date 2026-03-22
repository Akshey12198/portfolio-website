import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          {/* Title with styled span */}
          <motion.h2 
            className="text-4xl md:text-5xl font-bold font-display mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary">Creativity</span>
            <br />
            Is My Passion
          </motion.h2>

          {/* Description */}
          <motion.p 
            className="text-muted-foreground text-lg leading-relaxed mb-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I'm a web <span className="text-foreground font-semibold">developer and designer</span> passionate 
            about experimenting with new <span className="text-foreground font-semibold">skills and creativity.</span>{" "}
            Driven by learning and curiosity, I'm always looking to 
            explore and learn new development and design skills.
          </motion.p>

          {/* Resume Button */}
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-display font-medium text-foreground border border-primary/30 hover:bg-primary/10 transition-all duration-300 hover:border-primary/60"
          >
            Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
