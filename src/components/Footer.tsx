import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer 
      className="py-8 border-t border-border/30"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="section-container">
        <motion.p 
          className="text-center text-muted-foreground text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          All Rights Reserved By <span className="font-display font-semibold text-foreground">Akshey Verma</span> © {new Date().getFullYear()}
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;
