import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Sun, Moon } from "lucide-react";

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
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Load saved theme on component mount
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const newIsDark = !isDark;
    
    if (newIsDark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    
    setIsDark(newIsDark);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0A0A0A]/80 backdrop-blur-sm border-b border-[#E2E8F0]/40 dark:border-[#1F2937]/40 transition-colors duration-300">
      <div className="section-container flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <img 
            src="/BCA58ABF-7EFD-4758-A8EB-901D5A9F20AF.png" 
            alt="Akshey Verma" 
            className="w-9 h-auto rounded-full object-contain"
          />
          <a href="#" className="font-display font-semibold text-lg text-[#0F172A] dark:text-[#FAFAFA]">AV</a>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="px-3 py-2 text-sm text-[#64748B] dark:text-[#A1A1AA] hover:text-[#0F172A] dark:hover:text-[#FAFAFA] transition-colors duration-200 font-body">
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2">
          <a 
            href="tel:9758109292"
            className="flex items-center justify-center w-9 h-9 text-[#64748B] dark:text-[#A1A1AA] hover:text-[#2563EB] dark:hover:text-[#6366F1] transition-colors duration-200"
            title="Call me"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-9 h-9 text-[#64748B] dark:text-[#A1A1AA] hover:text-[#2563EB] dark:hover:text-[#6366F1] transition-colors duration-200"
            title="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-9 h-9 text-[#64748B] dark:text-[#A1A1AA] hover:text-[#2563EB] dark:hover:text-[#6366F1] transition-colors duration-200"
            title="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button onClick={() => setOpen(!open)} className="text-[#0F172A] dark:text-[#FAFAFA] hover:text-[#2563EB] dark:hover:text-[#6366F1] transition-colors duration-200">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white dark:bg-[#0A0A0A] border-t border-[#E2E8F0]/40 dark:border-[#1F2937]/40"
          >
            <div className="section-container py-6 flex flex-col gap-4">
              {links.map((l) => (
                <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-sm text-[#64748B] dark:text-[#A1A1AA] hover:text-[#0F172A] dark:hover:text-[#FAFAFA] transition-colors duration-200 font-body">
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
