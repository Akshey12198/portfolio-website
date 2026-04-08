import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
  };

  return (
    <section id="contact" className="py-20 md:py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#2563EB] dark:text-[#6366F1] text-xs tracking-[0.15em] uppercase mb-3 font-body font-medium">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-[#0F172A] dark:text-[#FAFAFA]">
            Let's work together
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground mb-8 leading-relaxed font-body">
              Have a project in mind or just want to chat? Feel free to reach out. I'm always interested in hearing about new opportunities.
            </p>
            <div className="space-y-4">
              {[
                { icon: Mail, label: "vermaaakshey@gmail.com", href: "mailto:vermaaakshey@gmail.com" },
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/akshey-verma-53b22b22a/" },
                { icon: Github, label: "GitHub", href: "https://github.com/Akshey12198" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-3 text-muted-foreground hover:text-[#2563EB] dark:hover:text-[#6366F1] transition-colors duration-200 group font-body"
                >
                  <div className="w-9 h-9 rounded-md flex items-center justify-center border border-border/50 group-hover:border-[#2563EB]/30 dark:group-hover:border-[#6366F1]/30 transition-colors">
                    <link.icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm">{link.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-border/50 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-[#2563EB] dark:focus:border-[#6366F1] focus:ring-0 transition-colors duration-200 text-sm font-body"
            />
            <input
              type="email"
              placeholder="Your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-border/50 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-[#2563EB] dark:focus:border-[#6366F1] focus:ring-0 transition-colors duration-200 text-sm font-body"
            />
            <textarea
              placeholder="Tell me about your project..."
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-border/50 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-[#2563EB] dark:focus:border-[#6366F1] focus:ring-0 transition-colors duration-200 text-sm font-body resize-none"
            />
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-display font-medium text-white bg-[#2563EB] hover:bg-[#1D4ED8] active:scale-95 dark:bg-[#6366F1] dark:hover:bg-[#5558E3] transition-all duration-200 ease-out text-sm"
            >
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
