import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";

const links = [
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

const menuVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const menuItemVariants = {
  closed: { opacity: 0, x: -20 },
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.2 },
  },
};

const containerVariants = {
  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="section-container flex items-center justify-between h-16">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3"
        >
          {/* Profile Picture */}
          <motion.div
            className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary/50 flex-shrink-0"
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/BCA58ABF-7EFD-4758-A8EB-901D5A9F20AF copy.png"
              alt="Akshey Verma"
              className="w-full h-full object-contain"
            />
          </motion.div>

          <Link to="/" className="font-display font-bold text-xl gradient-text hover:opacity-80 transition-opacity">
            AV
          </Link>
        </motion.div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <motion.div
              key={l.label}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <Link 
                to={l.href} 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium relative group"
              >
                {l.label}
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          ))}

          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-lg glass-card hover:bg-muted transition-colors relative"
            whileHover={{ rotate: 20, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            <AnimatePresence mode="wait">
              {theme === "light" ? (
                <motion.div
                  key="moon"
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Moon className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Sun className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-3">
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-lg glass-card hover:bg-muted transition-colors"
            whileHover={{ rotate: 20, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            <AnimatePresence mode="wait">
              {theme === "light" ? (
                <motion.div
                  key="moon"
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Moon className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Sun className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          <motion.button 
            onClick={() => setOpen(!open)} 
            className="text-foreground p-2 hover:bg-muted rounded-lg transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden overflow-hidden glass-card border-t border-border/50"
          >
            <motion.div 
              className="section-container py-4 flex flex-col gap-4"
              variants={containerVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {links.map((l) => (
                <motion.div
                  key={l.label}
                  variants={menuItemVariants}
                >
                  <Link 
                    to={l.href} 
                    onClick={() => setOpen(false)} 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium block py-2"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
