import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Send, Clock } from "lucide-react";
import { FaKaggle } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";

const contactInfo = [
  { icon: <Mail size={22} />, label: "Email", value: "alamshahbaz2017@gmail.com", href: "mailto:alamshahbaz2017@gmail.com" },
  { icon: <Phone size={22} />, label: "Phone", value: "+91 9801368426", href: "tel:+919801368426" },
  { icon: <MapPin size={22} />, label: "Location", value: "Patna, India", href: "#" },
  { icon: <Clock size={22} />, label: "Availabile For", value: "Full Time, Part Time, Freelance Projects", href: "#" },
];

const socialLinks = [
  { icon: <Linkedin size={20} />, label: "LinkedIn", value: "shahbaz-alam", href: "https://www.linkedin.com/in/shahbaz-alam-b2a13b231/" },
  { icon: <Github size={20} />, label: "GitHub", value: "shahbazalam", href: "https://github.com/shahbazalam" },
  { icon: <FaHackerrank size={20} />, label: "HackerRank", value: "alamshahbaz2017", href: "https://www.hackerrank.com/profile/alamshahbaz2017" },
  { icon: <FaKaggle size={20} />, label: "Kaggle", value: "shahbazalam03", href: "https://www.kaggle.com/shahbazalam03" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(ellipse at center, hsl(var(--primary)) 0%, transparent 70%)",
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
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-lg mx-auto text-lg">
            I'm always open to new opportunities, collaborations, and interesting data challenges. Let's connect!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {contactInfo.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="glass-card p-6 flex items-center gap-5 hover:border-primary/40 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-0.5">{item.label}</p>
                  <p className="font-heading font-semibold">{item.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Quick message CTA */}
            {/* <motion.a
              href="mailto:alamshahbaz2017@gmail.com?subject=Let's Connect!"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-4 rounded-2xl font-heading font-semibold hover:brightness-110 transition-all glow-primary text-lg mt-2"
            >
              <Send size={20} /> Send Me a Message
            </motion.a> */}
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="font-heading font-bold text-lg mb-2">Find Me Online</h3>
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                className="glass-card p-5 flex items-center gap-4 hover:border-primary/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all shrink-0">
                  {link.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-heading font-semibold text-sm">{link.label}</p>
                  <p className="text-muted-foreground text-sm truncate">{link.value}</p>
                </div>
                <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
