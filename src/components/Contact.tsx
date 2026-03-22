import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Copy, Check } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "vermaaakshey@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/akshey-verma-53b22b22a/" },
    { icon: Github, label: "GitHub", href: "https://github.com/Akshey12198" },
    { icon: Mail, label: "Email", href: `mailto:${email}` },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Contact Me
          </h2>
          <p className="text-muted-foreground text-lg">
            Tell me about your next project
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl"
        >
          {/* Email Section */}
          <div className="mb-12">
            <h3 className="text-xl font-display font-semibold mb-6 text-foreground">
              Email
            </h3>
            <motion.button
              onClick={handleCopyEmail}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-3 px-6 py-4 rounded-lg border border-primary/30 hover:bg-primary/10 transition-all duration-300 hover:border-primary/60 w-full sm:w-auto"
            >
              <Mail className="w-5 h-5 text-primary" />
              <span className="font-body text-sm text-foreground">{email}</span>
              <motion.div
                animate={{ rotate: copied ? 360 : 0 }}
                transition={{ duration: 0.3 }}
                className="ml-auto"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-primary" />
                ) : (
                  <Copy className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                )}
              </motion.div>
            </motion.button>
          </div>

          {/* Location & Social Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-display font-semibold mb-4 text-foreground">
                Location
              </h3>
              <p className="text-muted-foreground">India</p>
            </div>

            <div>
              <h3 className="text-xl font-display font-semibold mb-4 text-foreground">
                Social Media
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Write Me & We'll Talk
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-lg border border-primary/30 hover:bg-primary/10 text-primary transition-all duration-300 hover:border-primary/60"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
