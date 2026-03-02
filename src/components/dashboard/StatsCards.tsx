import { motion } from "framer-motion";
import { Flame, Drumstick, Footprints, Droplets, Moon, Heart } from "lucide-react";
import { FitnessTargets } from "@/utils/fitnessCalculations";

interface StatsCardsProps {
  targets: FitnessTargets;
}

const StatsCards = ({ targets }: StatsCardsProps) => {
  // Use some mock current progress to compare against targets for UI purposes
  const mockCurrent = {
    calories: Math.round(targets.calories * 0.84),
    protein: Math.round(targets.protein * 0.81),
    steps: Math.round(targets.steps * 0.84),
    water: Number((targets.water * 0.8).toFixed(1)),
  };

  const cards = [
    { icon: Flame, label: "Calories", value: mockCurrent.calories.toLocaleString(), sub: `/ ${targets.calories.toLocaleString()} kcal`, pct: 84, color: "text-primary" },
    { icon: Drumstick, label: "Protein", value: `${mockCurrent.protein}g`, sub: `/ ${targets.protein}g`, pct: 81, color: "text-primary" },
    { icon: Footprints, label: "Steps", value: mockCurrent.steps.toLocaleString(), sub: `/ ${targets.steps.toLocaleString()}`, pct: 84, color: "text-primary" },
    { icon: Droplets, label: "Water", value: `${mockCurrent.water}L`, sub: `/ ${targets.water}L`, pct: 80, color: "text-primary" },
    { icon: Moon, label: "Sleep Score", value: "87", sub: "/ 100", pct: 87, color: "text-primary" },
    { icon: Heart, label: "Recovery", value: `${targets.recoveryScore}%`, sub: targets.recoveryScore >= 90 ? "Excellent" : "Good", pct: targets.recoveryScore, color: "text-primary" },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      {cards.map((c, i) => (
        <motion.div
          key={c.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08 }}
          whileHover={{ y: -3, transition: { duration: 0.2 } }}
          className="glass rounded-2xl p-4 hover:glow-border transition-all duration-300 cursor-default"
        >
          <div className="flex items-center gap-2 mb-3">
            <c.icon className={`w-4 h-4 ${c.color}`} />
            <span className="text-xs text-muted-foreground">{c.label}</span>
          </div>
          <div className="text-xl font-bold text-foreground">{c.value}</div>
          <div className="text-[10px] text-muted-foreground mt-0.5">{c.sub}</div>
          <div className="mt-3 h-1.5 rounded-full bg-muted overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${c.pct}%` }}
              transition={{ duration: 1.2, delay: 0.3 + i * 0.08 }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsCards;
