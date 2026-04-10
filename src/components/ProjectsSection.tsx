import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

import imgForecasting from "@/assests/project-forecasting.jpg";
import imgPricing from "@/assests/project-pricing.jpg";
import imgSegmentation from "@/assests/project-segmentation.jpg";
import imgSentiment from "@/assests/project-sentiment.jpg";
import imgSales from "@/assests/project-sales.jpg";
import imgChurn from "@/assests/project-churn.jpg";

const projects = [
  {
    title: "AI-Based Demand Forecasting & Inventory Optimization",
    desc: "Developed a machine learning model to forecast product demand using historical sales data. Applied time-series forecasting techniques (Prophet) to predict future sales trends. Built a Power BI dashboard to visualize demand forecasts and inventory KPIs.",
    tools: ["Python", "Pandas", "Scikit-learn", "Prophet", "SQL", "Power BI"],
    image: imgForecasting,
    github: "https://github.com/shahbazalam",
    liveLink: "https://your-demo-link.com/forecasting", // ✅ YAHAN ADD KARO (naya field)
  },
  {
    title: "Smart Pricing Recommendation System",
    desc: "Developed a machine learning model to analyze product demand, competitor pricing, and sales trends. Built predictive models to recommend optimal pricing strategies for marketplace products.",
    tools: ["Python", "Pandas", "Scikit-learn", "SQL", "Power BI"],
    image: imgPricing,
    github: "https://github.com/shahbazalam",
    liveLink: "https://your-demo-link.com/forecasting",
  },
  {
    title: "Customer Segmentation using K-Means Clustering",
    desc: "Built an unsupervised ML model to segment e-commerce customers based on purchasing behavior, demographics, and engagement metrics. Enabled targeted marketing strategies and personalized recommendations.",
    tools: ["Python", "Scikit-learn", "Matplotlib", "Pandas", "Seaborn"],
    image: imgSegmentation,
    github: "https://github.com/shahbazalam",
    liveLink: "https://your-demo-link.com/forecasting",
  },
  {
    title: "Sentiment Analysis on Product Reviews",
    desc: "Created an NLP pipeline to analyze customer sentiment from marketplace product reviews. Used text preprocessing, TF-IDF vectorization, and classification models to categorize reviews as positive, negative, or neutral.",
    tools: ["Python", "NLTK", "Scikit-learn", "Pandas", "WordCloud"],
    image: imgSentiment,
    github: "https://github.com/shahbazalam",
    liveLink: "https://your-demo-link.com/forecasting",
  },
  {
    title: "Sales Performance Dashboard & Analytics",
    desc: "Designed an interactive Power BI dashboard tracking sales revenue, product performance, and regional analytics. Implemented DAX measures for YoY comparison, rolling averages, and dynamic KPI monitoring.",
    tools: ["Power BI", "DAX", "SQL", "Excel", "Python"],
    image: imgSales,
    github: "#",
    liveLink: "#",
  },
  {
    title: "Customer Churn Prediction Model",
    desc: "Built a classification model to predict customer churn using historical transaction and engagement data. Applied feature engineering, SMOTE for class imbalance, and evaluated with precision-recall metrics.",
    tools: ["Python", "XGBoost", "Scikit-learn", "Pandas", "Seaborn"],
    image: imgChurn,
    github: "#", // No GitHub code for this project
    liveLink: "#", // No live demo for this project
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-card/30" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "25px 25px"
        }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all bg-card"
            >
              {/* Background image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                
                {/* Action Buttons - YAHAN CHANGE HUA HAI */}
                <div className="absolute top-3 right-3 flex gap-2">
                  {/* View/Live Demo Button */}
                  {p.liveLink && (
                    <a
                      href={p.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                  
                  {/* GitHub Button */}
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
                    aria-label="GitHub"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>

              <div className="p-6 -mt-6 relative">
                <h3 className="font-heading font-bold text-base mb-2 leading-tight">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tools.map((t) => (
                    <span key={t} className="text-xs bg-primary/10 text-primary px-2.5 py-0.5 rounded-md font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
