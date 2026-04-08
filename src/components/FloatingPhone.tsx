import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const FloatingPhone = () => {
  return (
    <motion.a
      href="tel:9758109292"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#2563EB] hover:bg-[#3B82F6] dark:bg-[#6366F1] dark:hover:bg-[#7C3AED] text-white shadow-lg hover:shadow-xl transition-all duration-300"
      title="Call me: 9758109292"
    >
      <Phone className="w-6 h-6" />
    </motion.a>
  );
};

export default FloatingPhone;
