import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#E2E8F0] shadow-sm">
      <div className="section-container flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <img 
            src="/BCA58ABF-7EFD-4758-A8EB-901D5A9F20AF.png" 
            alt="Akshey Verma" 
            className="w-10 h-auto rounded-full object-contain"
          />
          <a href="#" className="font-display font-bold text-xl gradient-text">AV</a>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-sm text-[#64748B] hover:text-[#2563EB] transition-colors font-medium">
              {l.label}
            </a>
          ))}
          <a 
            href="tel:9758109292"
            className="flex items-center justify-center w-10 h-10 rounded-lg text-[#2563EB] hover:bg-[#F8FAFC] transition-all duration-300 border border-[#2563EB]/20"
            title="Call me"
          >
            <Phone className="w-5 h-5" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-[#0F172A]">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white border-t border-[#E2E8F0]"
          >
            <div className="section-container py-4 flex flex-col gap-4">
              {links.map((l) => (
                <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-sm text-[#64748B] hover:text-[#2563EB] transition-colors font-medium">
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
