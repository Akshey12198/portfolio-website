import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-muted-foreground text-sm">
        © {new Date().getFullYear()} <span className="font-display font-medium text-foreground">Akshey Verma</span>. All rights reserved.
      </p>
      <div className="flex gap-4">
        {[
          { icon: Github, href: "https://github.com/Akshey12198" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/akshey-verma-53b22b22a/" },
          { icon: Mail, href: "mailto:vermaaakshey@email.com" },
        ].map((link, i) => (
          <a
            key={i}
            href={link.href}
            className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 transition-all"
          >
            <link.icon className="w-4 h-4" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
