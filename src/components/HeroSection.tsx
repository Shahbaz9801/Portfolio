import { motion } from "framer-motion";
import { ArrowDown, Linkedin, Github, Mail, Icon } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import heroBg from "@/assests/hero-bg.jpg";
import { FaKaggle } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding pt-28">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Animated bg elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-heading font-semibold text-sm tracking-[0.3em] uppercase mb-4"
          >
            Hello, I'm
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
          >
            Shahbaz <span className="text-primary">Alam</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground font-heading font-light mb-6 h-8"
          >
            <TypeAnimation
              sequence={[
                "Data Analyst",
                2000,
                "AI Enthusiast",
                2000,
                "Python Developer",
                2000,
                "Machine Learning Explorer",
                2000,
                "Power BI Expert",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-muted-foreground max-w-2xl mb-10 leading-relaxed text-lg"
          >
            Turning raw data into actionable insights and beautiful dashboards using Python, SQL, and Power BI.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap items-center gap-4 justify-center"
          >
            <a
              href="#contact"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-heading font-semibold hover:brightness-110 transition-all glow-primary"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="border border-border px-8 py-3 rounded-xl font-heading font-semibold text-foreground hover:border-primary hover:text-primary transition-all"
            >
              View Projects
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex items-center gap-4 mt-10"
          >
            {[
              { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/shahbaz-alam-b2a13b231/", label: "LinkedIn" },
              { icon: <Github size={18} />, href: "https://github.com/shahbazalam", label: "GitHub" },
              { icon: <Mail size={18} />, href: "mailto:alamshahbaz2017@gmail.com", label: "Email" },
              { icon: <FaHackerrank size={18} />, href: "https://www.hackerrank.com/profile/alamshahbaz2017", label: "HackerRank" },
              {icon: <FaKaggle size={18} />, href: "https://www.kaggle.com/shahbazalam03", label: "Kaggle"},
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                className="w-11 h-11 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5 transition-all"
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} className="text-primary animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
