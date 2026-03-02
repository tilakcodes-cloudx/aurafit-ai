import { motion } from "framer-motion";
import { Brain, TrendingUp, Zap, Shield, BarChart3, Target } from "lucide-react";

const features = [
  { icon: Brain, title: "AI Coach", desc: "Personalized training adjustments powered by machine learning." },
  { icon: TrendingUp, title: "Progress Lab", desc: "Advanced analytics with weight, fat %, and performance trends." },
  { icon: Zap, title: "Smart Recovery", desc: "Recovery scoring based on sleep, HRV, and training load." },
  { icon: Shield, title: "Goal Engine", desc: "Set targets with AI-projected timelines and risk analysis." },
  { icon: BarChart3, title: "Nutrition AI", desc: "Auto-calculated macros and meal timing optimization." },
  { icon: Target, title: "Gamification", desc: "XP, ranks, achievements, and streaks to stay motivated." },
];

const Features = () => (
  <section id="features" className="py-24 relative">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Built for <span className="text-gradient">Peak Performance</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Every feature engineered to give you an unfair advantage in your fitness journey.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="glass rounded-2xl p-6 group cursor-pointer hover:glow-border transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <f.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
