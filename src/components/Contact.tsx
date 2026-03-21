import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, Phone } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
  };

  return (
    <section id="contact" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-2 font-display">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display">
            Let's <span className="gradient-text">connect</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always open to discussing new projects, internships, or opportunities. Feel free to reach out!
            </p>
            <div className="space-y-4">
              {[
                { icon: Mail, label: " Email", href: "mailto:vermaaakshey@gmail.com", external: false },
                { icon: Phone, label: "Phone", href: "tel:9758109292", external: false },
                { icon: Linkedin, label: "LinkedIn Profile", href: "https://www.linkedin.com/in/akshey-verma-53b22b22a/", external: true },
                { icon: Github, label: "GitHub Profile", href: "https://github.com/Akshey12198", external: true },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg glass-card flex items-center justify-center group-hover:scale-110 transition-transform">
                    <link.icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm">{link.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-display font-medium text-primary-foreground transition-all duration-300 hover:scale-105 glow"
              style={{ background: "var(--gradient-primary)" }}
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
