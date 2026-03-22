import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonialsList = [
  {
    name: "Abex Wrooks",
    rating: 5.0,
    feedback: "The company offers many easy-to-use services, with hard work and round-the-clock support on all projects.",
  },
  {
    name: "Willer Morth",
    rating: 5.0,
    feedback: "The company offers many easy-to-use services, with hard work and round-the-clock support on all projects.",
  },
  {
    name: "Llemi Llorens",
    rating: 5.0,
    feedback: "The company offers many easy-to-use services, with hard work and round-the-clock support on all projects.",
  },
  {
    name: "Jems Guiller",
    rating: 5.0,
    feedback: "The company offers many easy-to-use services, with hard work and round-the-clock support on all projects.",
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

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display leading-tight">
            <span className="text-primary">What They Say</span>
            <br />
            About Me
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonialsList.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={cardVariants}
              whileHover={{ y: -8 }}
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
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <Star
                          className="w-4 h-4 fill-primary text-primary"
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Rating Number */}
                  <motion.p
                    className="text-sm font-semibold text-foreground mb-4"
                    whileHover={{ x: 4 }}
                  >
                    {testimonial.rating.toFixed(1)}
                  </motion.p>

                  {/* Feedback */}
                  <motion.p
                    className="text-muted-foreground text-sm leading-relaxed mb-6"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1 }}
                  >
                    "{testimonial.feedback}"
                  </motion.p>

                  {/* Name */}
                  <motion.h3
                    className="text-foreground font-semibold text-sm group-hover:text-primary transition-colors"
                    whileHover={{ x: 2 }}
                  >
                    {testimonial.name}
                  </motion.h3>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
