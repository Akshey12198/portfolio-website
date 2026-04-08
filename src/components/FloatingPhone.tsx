import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const FloatingPhone = () => {
  return (
    <motion.a
      href="tel:9758109292"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-40 flex items-center justify-center w-12 h-12 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] dark:bg-[#6366F1] dark:hover:bg-[#5558E3] text-white transition-all duration-200 border border-white/10 shadow-md"
      title="Call: 9758109292"
    >
      <Phone className="w-5 h-5" />
    </motion.a>
  );
};

export default FloatingPhone;
