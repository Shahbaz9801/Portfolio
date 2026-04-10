import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, School, BookOpen, AlertCircle } from "lucide-react";

const educationData = [
  {
    icon: <GraduationCap size={24} />,
    degree: "B.Tech in Artificial Intelligence & Data Science",
    institution: "Corporate Institute of Science and Technology, Bhopal",
    period: "May 2022 — June 2026",
    grade: "CGPA: 7.7",
    color: "primary",
    details: "Specialized in Machine Learning, Deep Learning, Data Mining, Natural Language Processing, Computer Vision, and Big Data Analytics. Completed multiple projects involving real-world datasets and predictive modeling.",
  },
  {
    icon: <AlertCircle size={24} />,
    degree: "Education Gap Year",
    institution: "Self-Learning & Skill Development",
    period: "2020 — 2022",
    grade: "",
    color: "accent",
    isGap: true,
    details: "During this period, I focused on developing practical skills. Learned Tally ERP & GST accounting, basic bookkeeping, financial record management, inventory accounting fundamentals, and MS Office proficiency. This experience gave me a strong foundation in business operations.",
    skills: ["Tally ERP", "GST Accounting", "Bookkeeping", "Financial Records", "Inventory Management", "MS Office"],
  },
  {
    icon: <School size={24} />,
    degree: "12th (Intermediate)",
    institution: "Bihar Board (BSEB)",
    period: "Completed 2020",
    grade: "Science Stream",
    color: "primary",
    details: "Studied Physics, Chemistry, Mathematics, and Biology. Developed strong analytical and problem-solving abilities.",
  },
  {
    icon: <BookOpen size={24} />,
    degree: "10th (Matriculation)",
    institution: "Bihar Board (BSEB)",
    period: "Completed 2018",
    grade: "",
    color: "primary",
    details: "Completed secondary education with focus on Science and Mathematics. Built the foundation for logical thinking and quantitative skills.",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(30deg, hsl(var(--primary)) 12%, transparent 12.5%, transparent 87%, hsl(var(--primary)) 87.5%, hsl(var(--primary))), linear-gradient(150deg, hsl(var(--primary)) 12%, transparent 12.5%, transparent 87%, hsl(var(--primary)) 87.5%, hsl(var(--primary))), linear-gradient(30deg, hsl(var(--primary)) 12%, transparent 12.5%, transparent 87%, hsl(var(--primary)) 87.5%, hsl(var(--primary))), linear-gradient(150deg, hsl(var(--primary)) 12%, transparent 12.5%, transparent 87%, hsl(var(--primary)) 87.5%, hsl(var(--primary)))",
          backgroundSize: "80px 140px",
          backgroundPosition: "0 0, 0 0, 40px 70px, 40px 70px",
        }} />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Education</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-border" />

          <div className="space-y-10">
            {educationData.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                className={`relative ${i % 2 === 0 ? 'md:pr-[52%]' : 'md:pl-[52%]'}`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-4 md:left-1/2 md:-translate-x-1/2 top-6 w-5 h-5 rounded-full bg-background border-2 ${edu.isGap ? 'border-accent' : 'border-primary'} z-10 flex items-center justify-center`}>
                  <div className={`w-2 h-2 rounded-full ${edu.isGap ? 'bg-accent' : 'bg-primary'}`} />
                </div>

                <div className={`ml-14 md:ml-0 glass-card p-6 md:p-8 relative overflow-hidden ${edu.isGap ? 'border-accent/30' : ''}`}>
                  <div className={`absolute left-0 top-0 bottom-0 w-1 ${edu.isGap ? 'bg-accent' : 'bg-primary'}`} />

                  <div className="flex items-start gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-xl ${edu.isGap ? 'bg-accent/10 text-accent' : 'bg-primary/10 text-primary'} flex items-center justify-center shrink-0`}>
                      {edu.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-bold text-base">{edu.degree}</h3>
                      <p className={`text-sm font-medium mt-0.5 ${edu.isGap ? 'text-accent' : 'text-primary'}`}>{edu.institution}</p>
                      <div className="flex flex-wrap items-center gap-3 mt-1.5 text-sm text-muted-foreground">
                        <span>{edu.period}</span>
                        {edu.grade && (
                          <span className="bg-primary/10 text-primary px-2.5 py-0.5 rounded-full text-xs font-semibold">{edu.grade}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed ml-13">{edu.details}</p>

                  {edu.skills && (
                    <div className="flex flex-wrap gap-2 mt-3 ml-13">
                      {edu.skills.map((s) => (
                        <span key={s} className="text-xs bg-accent/10 text-accent px-2.5 py-1 rounded-lg font-medium">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
