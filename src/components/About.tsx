import { motion } from "framer-motion";

const About = () => {
  const education = [
    { degree: "B.E. in Computer Science", school: "Jain College of Engineering, Belagavi", detail: "CGPA: 8.3 | 2022 - Present" },
    { degree: "PUC / Secondary Education", school: "Govt PU College, Anavatti", detail: "83.3% | 2020 - 2022" },
    { degree: "SSLC / 10th", school: "Karnataka Public School, Anavatti", detail: "79.8% | 2019 - 2020" },
  ];

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "64px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-1 bg-primary rounded mb-8"
          />
          <p className="text-muted-foreground font-body text-lg max-w-3xl mb-12 leading-relaxed">
            Aspiring Computer Science Engineering student with strong foundations in full-stack development 
            and RESTful API integration. Hands-on experience in building scalable web applications and 
            blockchain-based solutions.
          </p>
        </motion.div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-2">Internship</h3>
          <div className="w-10 h-0.5 bg-accent rounded mb-6" />
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ x: 6 }}
            className="gradient-card rounded-xl p-6 shadow-soft border border-border card-hover cursor-default"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
              <span className="text-accent text-xs font-body font-semibold uppercase tracking-wider">Current</span>
            </div>
            <h4 className="font-display text-xl font-semibold">Full Stack Developer Intern</h4>
            <p className="text-primary font-body font-medium mt-1">Spherenex (Nexspyder Technologies Pvt Ltd), Bengaluru</p>
            <p className="text-muted-foreground text-sm mt-1 mb-3">February 2026 – Present</p>
            <ul className="text-muted-foreground font-body space-y-2 text-sm">
              <li>• Developing scalable full-stack applications using Python and React.js</li>
              <li>• Contributing to backend optimization and collaborating in Agile teams</li>
            </ul>
          </motion.div>
        </div>

        <h3 className="text-2xl font-semibold mb-2">Education</h3>
        <div className="w-10 h-0.5 bg-accent rounded mb-6" />
        <div className="space-y-4">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ x: 6 }}
              className="gradient-card rounded-xl p-6 shadow-soft border border-border card-hover cursor-default"
            >
              <h4 className="font-display text-lg font-semibold">{edu.degree}</h4>
              <p className="text-muted-foreground font-body">{edu.school}</p>
              <p className="text-primary font-body text-sm mt-1">{edu.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
