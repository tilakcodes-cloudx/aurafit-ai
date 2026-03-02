import { motion } from "framer-motion";
import { Bot, AlertTriangle } from "lucide-react";
import { FitnessTargets } from "@/utils/fitnessCalculations";

interface AIInsightPanelProps {
  targets: FitnessTargets;
}

const AIInsightPanel = ({ targets }: AIInsightPanelProps) => {
  const insights = [
    { type: "warning", text: `You are 18% behind your daily ${targets.protein}g protein target. Consider adding a post-workout shake.` },
    { type: "tip", text: "Your sleep quality improved 12% this week. Keep your current 10:30 PM routine." },
    { type: "tip", text: `Recovery index is at ${targets.recoveryScore}%. You're cleared for high-intensity training today.` },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="glass rounded-2xl p-6"
    >
      <div className="flex items-center gap-2 mb-4">
        <Bot className="w-5 h-5 text-primary" />
        <h3 className="font-semibold text-foreground">AI Insights</h3>
      </div>
      <div className="space-y-3">
        {insights.map((ins, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 + i * 0.15 }}
            className="flex items-start gap-3 p-3 rounded-xl bg-muted/30"
          >
            {ins.type === "warning" ? (
              <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
            ) : (
              <Bot className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            )}
            <p className="text-sm text-muted-foreground leading-relaxed">{ins.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AIInsightPanel;
