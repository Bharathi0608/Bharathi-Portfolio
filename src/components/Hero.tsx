import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden px-6">
      {/* Static gradient mesh */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `
          radial-gradient(ellipse 80% 50% at 20% 40%, hsl(210 100% 56% / 0.12), transparent),
          radial-gradient(ellipse 60% 70% at 80% 20%, hsl(222 47% 20% / 0.2), transparent),
          radial-gradient(ellipse 50% 60% at 60% 80%, hsl(45 90% 55% / 0.06), transparent),
          radial-gradient(ellipse 70% 40% at 10% 90%, hsl(210 80% 40% / 0.08), transparent)
        `
      }} />
      <div className="absolute inset-0 opacity-[0.035]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(210 100% 70%) 0.5px, transparent 0)',
        backgroundSize: '32px 32px'
      }} />

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05, rotate: 2 }}
          className="relative group cursor-pointer"
        >
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-primary/30 shadow-elevated group-hover:shadow-glow transition-shadow duration-500">
            <img src={profileImg} alt="Bharathi S" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground font-body text-lg mb-2"
          >
            Hello, I'm
          </motion.p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            Bharathi <span className="text-gradient">S</span>
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="h-1 bg-primary rounded mb-6 mx-auto md:mx-0"
          />
          <p className="text-xl md:text-2xl text-muted-foreground font-body max-w-lg mb-8">
            Full Stack Developer & CS Engineering Student passionate about building impactful solutions.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-body font-medium shadow-soft hover:shadow-glow transition-shadow duration-300"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="border border-border px-6 py-3 rounded-lg font-body font-medium hover:border-primary/50 hover:bg-secondary transition-all duration-300"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-primary rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
