import { motion } from "framer-motion";
import { ExternalLink, Globe, Film, Shield } from "lucide-react";

const projects = [
  {
    title: "Online Property Management System",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
    description: "Interactive web application helping landlords and agents streamline rental operations through a centralized dashboard with real-time property management.",
    icon: Globe,
    color: "16 70% 58%",
  },
  {
    title: "Movie Discovery Web Application",
    tech: ["React", "Vite", "Firebase", "TMDB API"],
    description: "Netflix-style movie discovery platform with dynamic routing, real-time movie data including trailers, cast, recommendations, and Google auth with favorites management.",
    icon: Film,
    color: "160 40% 45%",
  },
  {
    title: "Fake Product Detection Using Blockchain",
    tech: ["Solidity", "Ganache", "Blockchain"],
    description: "Decentralized fake product detection system with smart contracts for product verification and QR-based validation, improving supply-chain transparency.",
    icon: Shield,
    color: "260 40% 55%",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "64px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-1 bg-primary rounded mb-12"
          />
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -4 }}
                className="group gradient-card rounded-2xl p-8 shadow-soft border border-border card-hover relative overflow-hidden cursor-default"
              >
                {/* Hover glow effect */}
                <div
                  className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                  style={{ backgroundColor: `hsl(${project.color})` }}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `hsl(${project.color} / 0.15)` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: `hsl(${project.color})` }} />
                      </div>
                      <div
                        className="w-2 h-2 rounded-full animate-pulse-glow"
                        style={{ backgroundColor: `hsl(${project.color})` }}
                      />
                    </div>
                    <motion.div whileHover={{ rotate: 45 }} transition={{ duration: 0.2 }}>
                      <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  </div>
                  <h3 className="font-display text-2xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                  <p className="text-muted-foreground font-body mb-5 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-md text-xs font-body font-medium hover:bg-primary/20 hover:text-primary transition-colors duration-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
