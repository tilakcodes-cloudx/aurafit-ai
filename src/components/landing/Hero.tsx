import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { label: "Calories", value: 1847, target: 2200, unit: "kcal" },
  { label: "Protein", value: 134, target: 165, unit: "g" },
  { label: "Steps", value: 8432, target: 10000, unit: "" },
  { label: "Recovery", value: 87, target: 100, unit: "%" },
];

const AnimatedRing = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(73), 500);
    return () => clearTimeout(timer);
  }, []);

  const circumference = 2 * Math.PI * 90;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative w-56 h-56 mx-auto">
      <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
        <circle cx="100" cy="100" r="90" fill="none" stroke="hsl(240, 20%, 18%)" strokeWidth="8" />
        <motion.circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="url(#ringGrad)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{ filter: "drop-shadow(0 0 8px hsl(183, 100%, 50%, 0.5))" }}
        />
        <defs>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(183, 100%, 50%)" />
            <stop offset="100%" stopColor="hsl(264, 100%, 50%)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span
          className="text-4xl font-bold text-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {progress}%
        </motion.span>
        <span className="text-xs text-muted-foreground mt-1">OPTIMIZATION</span>
      </div>
    </div>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
    {/* Background effects */}
    <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

    <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs text-primary mb-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
          AI-Powered Fitness Intelligence
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6">
          Your Body is{" "}
          <span className="text-gradient">Data.</span>
          <br />
          Optimize It.
        </h1>

        <p className="text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
          Engineer your physique with AI-driven insights. Track, analyze, and optimize every metric that matters.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="/signup"
            className="px-8 py-3.5 rounded-2xl bg-primary text-primary-foreground font-bold text-sm glow-primary hover:opacity-90 transition-all"
          >
            Start Optimization →
          </a>
          <a
            href="#features"
            className="px-8 py-3.5 rounded-2xl glass text-foreground font-semibold text-sm hover:bg-muted/50 transition-all glow-border"
          >
            View Demo
          </a>
        </div>

        {/* Live stats strip */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.15 }}
              className="glass rounded-xl p-3 text-center"
            >
              <div className="text-lg font-bold text-foreground">
                {s.value.toLocaleString()}
                <span className="text-xs text-muted-foreground ml-0.5">{s.unit}</span>
              </div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{s.label}</div>
              <div className="mt-1.5 h-1 rounded-full bg-muted overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: `${(s.value / s.target) * 100}%` }}
                  transition={{ duration: 1.5, delay: 1.2 + i * 0.15 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="hidden lg:flex justify-center"
      >
        <div className="animate-float">
          <AnimatedRing />
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
