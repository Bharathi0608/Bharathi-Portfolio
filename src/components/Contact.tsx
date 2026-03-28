import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const contacts = [
  { icon: Mail, label: "bharathishankrappa@gmail.com", href: "mailto:bharathishankrappa@gmail.com" },
  { icon: Phone, label: "+91 6360440679", href: "tel:+916360440679" },
  { icon: Linkedin, label: "LinkedIn Profile", href: "https://linkedin.com/in/bharathi04" },
  { icon: Github, label: "GitHub Profile", href: "https://github.com/Bharathi0608" },
];

const Contact = () => (
  <section id="contact" className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "64px" }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="h-1 bg-primary rounded mb-8"
        />
        <p className="text-muted-foreground font-body text-lg mb-12 max-w-xl">
          I'm currently looking for entry-level Software Engineering roles. Feel free to reach out!
        </p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {contacts.map(({ icon: Icon, label, href }, i) => (
          <motion.a
            key={i}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-4 gradient-card rounded-xl p-5 shadow-soft border border-border card-hover group"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:shadow-glow transition-all duration-300">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <span className="font-body group-hover:text-primary transition-colors duration-300">{label}</span>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default Contact;
