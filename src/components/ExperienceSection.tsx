import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, TrendingUp } from "lucide-react";
import logo from "@/assests/100miles-logo.jpg";

const roles = [
  {
    title: "Data Analyst",
    period: "July 2025 — Present",
    type: "Full-time",
    icon: <TrendingUp size={20} />,
    highlights: [
      "Leading end-to-end data analysis for marketplace operations across Amazon and Noon platforms.",
      "Building and maintaining advanced Power BI dashboards for real-time KPI monitoring and executive reporting.",
      "Developing predictive models for demand forecasting and pricing optimization using Python and ML techniques.",
      "Collaborating with cross-functional teams to drive data-informed business strategies.",
      "Automating data pipelines and reporting workflows to improve operational efficiency.",
    ],
  },
  {
    title: "Data Analyst Intern",
    period: "Dec 2024 — June 2025",
    type: "Internship",
    icon: <Briefcase size={20} />,
    highlights: [
      "Analyzed sales and customer data from marketplaces (Amazon, Noon) to identify trends and improve product performance.",
      "Developed KPI dashboards using Excel and Power BI to monitor revenue, product performance, and operational metrics.",
      "Conducted competitor benchmarking and pricing analysis to support marketplace strategy.",
      "Managed business workflows using Zoho applications including Zoho Inventory, Zoho Books, and Zoho CRM.",
      "Monitored order fulfillment, returns, and logistics performance to identify operational gaps.",
      "Administered Google Workspace including user account setup, subscription management, and access control.",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: "repeating-linear-gradient(0deg, hsl(var(--primary)), hsl(var(--primary)) 1px, transparent 1px, transparent 80px), repeating-linear-gradient(90deg, hsl(var(--primary)), hsl(var(--primary)) 1px, transparent 1px, transparent 80px)",
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
            Work <span className="text-primary">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Company header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex items-center gap-4 mb-8"
        >
          <img src={logo} alt="100miles.ai" className="w-16 h-16 rounded-2xl object-cover border border-border" />
          <div>
            <h3 className="font-heading text-2xl font-bold">100miles.ai</h3>
            <p className="text-muted-foreground text-sm">E-commerce & AI Startup</p>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-border hidden md:block" />

          <div className="space-y-8">
            {roles.map((role, idx) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.2 }}
                className="relative md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-3.5 top-8 w-5 h-5 rounded-full bg-background border-2 border-primary hidden md:flex items-center justify-center z-10">
                  <div className={`w-2 h-2 rounded-full ${idx === 0 ? 'bg-primary animate-pulse' : 'bg-primary/50'}`} />
                </div>

                <div className="glass-card p-8 relative overflow-hidden group hover:border-primary/30 transition-all">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent" />

                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        {role.icon}
                      </div>
                      <div>
                        <h4 className="font-heading text-xl font-bold">{role.title}</h4>
                        <p className="text-muted-foreground text-sm">{role.period}</p>
                      </div>
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                      idx === 0 
                        ? 'bg-primary/10 text-primary border border-primary/30' 
                        : 'bg-secondary text-secondary-foreground'
                    }`}>
                      {role.type}
                    </span>
                  </div>

                  <ul className="space-y-3 ml-2">
                    {role.highlights.map((h, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -15 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: 0.4 + idx * 0.2 + i * 0.06 }}
                        className="flex gap-3 text-muted-foreground text-sm leading-relaxed"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {h}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
