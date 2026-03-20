import { motion } from "framer-motion";
import { FileText, Download, Eye } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-2 font-display">Resume</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display">
            My <span className="gradient-text">resume</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass-card rounded-xl p-8 max-w-2xl"
        >
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0" style={{ background: "var(--gradient-primary)" }}>
              <FileText className="w-7 h-7 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="font-display font-semibold text-xl text-foreground mb-1">Akshey Verma — Resume</h3>
              <p className="text-muted-foreground text-sm mb-2">
                B.Tech CSE · K.R. Mangalam University · 7.4 CGPA
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Full stack developer with internship experience at CodeAlpha & Main Flow Services. 
                Skilled in MERN stack, TypeScript, Next.js, PostgreSQL, CI/CD, and testing. 
                60+ DSA problems solved on LeetCode & GeeksforGeeks.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/Akshey_Verma_Resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-display font-medium text-sm text-primary-foreground transition-all duration-300 hover:scale-105 glow"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
                <a
                  href="/Akshey_Verma_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-display font-medium text-sm glass-card text-foreground transition-all duration-300 hover:scale-105 gradient-border"
                >
                  <Eye className="w-4 h-4" />
                  View Resume
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
