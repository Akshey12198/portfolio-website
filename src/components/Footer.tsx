import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-12 border-t border-border/30">
    <div className="section-container flex flex-col md:flex-row items-center justify-between gap-6">
      <p className="text-muted-foreground text-sm font-body">
        © {new Date().getFullYear()} <span className="font-display font-semibold text-foreground">Akshey Verma</span>
      </p>
      <div className="flex gap-3">
        {[
          { icon: Github, href: "https://github.com/Akshey12198" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/akshey-verma-53b22b22a/" },
          { icon: Mail, href: "mailto:vermaaakshey@gmail.com" },
        ].map((link, i) => (
          <a
            key={i}
            href={link.href}
            className="w-9 h-9 rounded-md border border-border/50 flex items-center justify-center text-muted-foreground hover:text-[#2563EB] dark:hover:text-[#6366F1] hover:border-[#2563EB]/30 dark:hover:border-[#6366F1]/30 transition-all duration-200"
          >
            <link.icon className="w-4 h-4" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
