import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Eye, Sparkles, Target, Zap } from "lucide-react";

const highlights = [
  { icon: <Target size={20} />, title: "Data-Driven", desc: "Transforming complex datasets into clear, actionable business insights" },
  { icon: <Zap size={20} />, title: "AI Powered", desc: "Building ML models for forecasting, pricing, and recommendation systems" },
  { icon: <Sparkles size={20} />, title: "Visual Storyteller", desc: "Crafting interactive dashboards that make data speak for itself" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }} />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 glass-card p-8 md:p-10"
          >
            <p className="text-muted-foreground leading-relaxed text-lg mb-5">
              I'm a passionate <span className="text-foreground font-semibold">Data Analyst & AI Enthusiast</span> with
              real-world experience at a fast-paced startup. I thrive on turning messy, complex datasets into crystal-clear
              insights that drive smart business decisions.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mb-5">
              My toolkit includes <span className="text-primary font-medium">Python, SQL, Excel, and Power BI</span>. I've
              analyzed marketplace data from <span className="text-foreground font-medium">Amazon and Noon</span>, built
              predictive models for demand forecasting and pricing, and managed end-to-end business workflows using
              Zoho CRM, Zoho Inventory, and Zoho Books.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mb-8">
              Currently completing my B.Tech in <span className="text-foreground font-medium">Artificial Intelligence &
              Data Science</span> from Corporate Institute of Science and Technology, Bhopal. I'm deeply curious about
              machine learning, time-series forecasting, and building data products that solve real problems.
            </p>

            {/* Resume buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="/Shahbaz_Alam_Resume.pdf"
                target="_blank"
                className="flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-xl font-heading font-semibold hover:bg-secondary/80 transition-all"
              >
                <Eye size={16} /> Preview Resume
              </a>
              <a
                href="/Shahbaz_Alam_Resume.pdf"
                download
                className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-heading font-semibold hover:brightness-110 transition-all"
              >
                <FileText size={16} /> Download Resume
              </a>
            </div>
          </motion.div>

          {/* Highlights cards */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                className="glass-card p-6 flex items-start gap-4 hover:border-primary/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  {h.icon}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm mb-1">{h.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{h.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
