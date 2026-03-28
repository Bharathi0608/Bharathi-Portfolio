import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certs = [
  "Participated in National Level 24-hour Hackathon 'CODEFIESTA-5.0' at Lakshmeshwar, India",
  "Java and Data Structures & Algorithms certification from Apna College",
  "Presented a project at the State Level Project Competition, Bengaluru, India",
];

const Certifications = () => (
  <section className="py-24 px-6 relative">
    <div className="absolute inset-0 bg-secondary/20" />
    <div className="max-w-5xl mx-auto relative">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-4xl font-bold mb-4">Certifications</h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "64px" }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="h-1 bg-primary rounded mb-12"
        />
      </motion.div>
      <div className="space-y-4">
        {certs.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ x: 8, scale: 1.01 }}
            className="flex items-start gap-4 gradient-card rounded-xl p-5 shadow-soft border border-border card-hover cursor-default group"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
              <Award className="w-5 h-5 text-primary" />
            </div>
            <p className="font-body text-foreground pt-2">{cert}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
