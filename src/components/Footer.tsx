import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Akshey12198", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/akshey-verma-53b22b22a/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:vermaaakshey@email.com", label: "Email" },
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

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.footer 
      className="py-8 border-t border-border relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.p 
          className="text-muted-foreground text-sm"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()} <span className="font-display font-medium text-foreground">Akshey Verma</span>. All rights reserved.
        </motion.p>

        <motion.div 
          className="flex gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {socialLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              title={link.label}
              className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-muted-foreground group relative overflow-hidden"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Background glow on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />

              <motion.div
                className="relative z-10 group-hover:text-primary transition-colors"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <link.icon className="w-4 h-4" />
              </motion.div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
