import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const FloatingPhone = () => {
  return (
    <motion.a
      href="tel:9758109292"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full flex items-center justify-center text-primary-foreground shadow-lg hover:shadow-xl transition-shadow duration-300 glow"
      style={{ background: "var(--gradient-primary)" }}
      title="Call +91 9758109292"
    >
      <Phone className="w-6 h-6" />
    </motion.a>
  );
};

export default FloatingPhone;
