import { motion } from "framer-motion";
import { FileText, Download, Eye } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="py-20 md:py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#2563EB] dark:text-[#6366F1] text-xs tracking-[0.15em] uppercase mb-3 font-body font-medium">Resume</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-[#0F172A] dark:text-[#FAFAFA]">
            My background
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="border border-border/50 rounded-lg p-8 max-w-2xl hover:border-border/80 transition-colors duration-200"
        >
          <div className="flex items-start gap-5">
            <div className="w-10 h-10 rounded-md flex items-center justify-center shrink-0 bg-[#2563EB]/10 dark:bg-[#6366F1]/10">
              <FileText className="w-5 h-5 text-[#2563EB] dark:text-[#6366F1]" />
            </div>
            <div className="flex-1">
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">Akshey Verma</h3>
              <p className="text-muted-foreground text-sm mb-3 font-body">
                B.Tech CSE · K.R. Mangalam University · 7.4 CGPA
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-body">
                Full stack developer with internship experience at CodeAlpha & Main Flow Services. Skilled in MERN stack, TypeScript, Next.js, PostgreSQL, CI/CD, and testing. 60+ DSA problems solved.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/Akshey_Verma_Resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-display font-medium text-sm text-white bg-[#2563EB] hover:bg-[#1D4ED8] active:scale-95 dark:bg-[#6366F1] dark:hover:bg-[#5558E3] transition-all duration-200 ease-out"
                >
                  <Download className="w-4 h-4" />
                  Download
                </a>
                <a
                  href="/Akshey_Verma_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-display font-medium text-sm border border-border/50 text-foreground hover:border-border/80 hover:bg-foreground/[0.02] transition-all duration-200 ease-out"
                >
                  <Eye className="w-4 h-4" />
                  View
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
