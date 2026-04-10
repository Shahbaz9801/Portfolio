import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Award, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Data Science Master Class",
    issuer: "PW Skills",
    link: "https://pwskills.com/learn/certificate/e9e5709b-9e2b-46a0-bc38-fd71979b7943/",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    skills: ["Python", "Machine Learning", "Data Analysis", "Statistics"],
  },
  {
    title: "Python for Data Science",
    issuer: "NPTEL / Coursera",
    link: "#",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600&h=400&fit=crop",
    skills: ["Python", "Pandas", "NumPy", "Data Visualization"],
  },
  {
    title: "SQL for Data Analytics",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/profile/alamshahbaz2017",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&h=400&fit=crop",
    skills: ["SQL", "Database", "Joins", "Aggregation"],
  },
  {
    title: "Power BI Data Visualization",
    issuer: "Microsoft Learn",
    link: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    skills: ["Power BI", "DAX", "Dashboard", "Reporting"],
  },
  {
    title: "Machine Learning Fundamentals",
    issuer: "Kaggle",
    link: "https://www.kaggle.com/shahbazalam03",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
    skills: ["Regression", "Classification", "Clustering", "Model Evaluation"],
  },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % certifications.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const prev = () => setCurrent((c) => (c - 1 + certifications.length) % certifications.length);
  const next = () => setCurrent((c) => (c + 1) % certifications.length);

  return (
    <section id="certifications" className="section-padding relative overflow-hidden bg-card/30" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(135deg, hsl(var(--primary)) 1px, transparent 1px), linear-gradient(-135deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }} />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {certifications.map((cert, i) => (
                <div key={i} className="w-full flex-shrink-0">
                  <div className="glass-card overflow-hidden md:flex">
                    <div className="md:w-2/5 h-48 md:h-auto relative overflow-hidden">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/50 md:block hidden" />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent md:hidden" />
                    </div>
                    <div className="md:w-3/5 p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-3">
                        <Award size={20} className="text-primary" />
                        <span className="text-sm text-muted-foreground font-medium">{cert.issuer}</span>
                      </div>
                      <h3 className="font-heading font-bold text-xl mb-3">{cert.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {cert.skills.map((s) => (
                          <span key={s} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-lg font-medium">{s}</span>
                        ))}
                      </div>
                      {cert.link !== "#" && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline font-medium"
                        >
                          <ExternalLink size={14} /> View Certificate
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={prev} className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {certifications.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-primary" : "w-2 bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
