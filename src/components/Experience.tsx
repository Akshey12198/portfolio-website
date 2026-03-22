import { motion } from "framer-motion";
import { useState } from "react";

const experiences = [
  {
    title: "Web Developer",
    company: "Google Inc",
    year: "2020",
    description: "Web developer handling technologies such as Angular, databases, CMS, assisting with web optimization.",
  },
  {
    title: "Web Designer",
    company: "Google Inc",
    year: "2022",
    description: "Web developer handling technologies such as Angular, databases, CMS, assisting with web optimization.",
  },
  {
    title: "SEO & Web Optimization",
    company: "Google Inc",
    year: "Now",
    description: "Web developer handling technologies such as Angular, databases, CMS, assisting with web optimization.",
  },
];

const educations = [
  {
    title: "Systems Engineering",
    company: "University",
    year: "2010",
    description: "College student, learning the basics of programming, web development, and other topics, graduating with honors.",
  },
  {
    title: "Web Programming",
    company: "University",
    year: "2015",
    description: "College student, learning the basics of programming, web development, and other topics, graduating with honors.",
  },
  {
    title: "Usability (UX/UI)",
    company: "University",
    year: "2018",
    description: "College student, learning the basics of programming, web development, and other topics, graduating with honors.",
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Experience = () => {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");

  const data = activeTab === "experience" ? experiences : educations;

  return (
    <section id="experience" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display leading-tight">
            <span className="text-primary">My Work</span>
            <br />
            Experience
          </h2>
        </motion.div>

        {/* Tab Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex gap-4 mb-12"
        >
          {(["experience", "education"] as const).map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg font-display font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "bg-primary text-primary-foreground"
                  : "border border-primary/30 text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <AnimatePresence mode="wait">
            {data.map((item, index) => (
              <motion.div
                key={`${activeTab}-${index}`}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -20 }}
                whileHover={{ x: 8 }}
                className="group"
              >
                <motion.div
                  className="glass-card rounded-lg p-8 relative overflow-hidden border border-border/50"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Background glow on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />

                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <motion.h3
                          className="text-2xl font-bold font-display text-foreground group-hover:text-primary transition-colors mb-2"
                          whileHover={{ x: 4 }}
                        >
                          {item.title}
                        </motion.h3>
                        <p className="text-muted-foreground font-medium mb-1">{item.company}</p>
                      </div>
                      <motion.p
                        className="text-sm text-muted-foreground font-display font-semibold whitespace-nowrap"
                        whileHover={{ color: "var(--primary)" }}
                      >
                        {item.year}
                      </motion.p>
                    </div>

                    <motion.p
                      className="text-muted-foreground text-sm leading-relaxed"
                      initial={{ opacity: 0.7 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {item.description}
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

import { AnimatePresence } from "framer-motion";

export default Experience;
