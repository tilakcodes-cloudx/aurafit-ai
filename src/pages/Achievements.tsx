import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { motion } from "framer-motion";
import { Trophy, Flame, Star, Zap } from "lucide-react";

const ranks = [
  { name: "Beginner", xpReq: 0, color: "text-muted-foreground" },
  { name: "Optimizer", xpReq: 500, color: "text-primary" },
  { name: "Peak Performer", xpReq: 1500, color: "text-secondary" },
  { name: "Titan", xpReq: 5000, color: "text-primary" },
];

const badges = [
  { icon: Flame, label: "7-Day Streak", earned: true },
  { icon: Star, label: "First Goal Set", earned: true },
  { icon: Trophy, label: "Perfect Week", earned: true },
  { icon: Zap, label: "10K Steps Day", earned: true },
  { icon: Flame, label: "30-Day Streak", earned: false },
  { icon: Trophy, label: "Goal Crusher", earned: false },
  { icon: Star, label: "Protein Master", earned: false },
  { icon: Zap, label: "Marathon Ready", earned: false },
];

const currentXP = 820;
const currentRank = "Optimizer";
const nextRankXP = 1500;

const Achievements = () => (
  <DashboardLayout>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Achievements</h1>
        <p className="text-sm text-muted-foreground">Level up. Earn rewards. Stay motivated.</p>
      </div>

      {/* XP & Rank */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-sm text-muted-foreground">Current Rank</div>
            <div className="text-2xl font-bold text-primary">{currentRank}</div>
          </div>
          <div className="text-right">
            <div className="text-sm text-muted-foreground">XP</div>
            <div className="text-2xl font-bold text-foreground">{currentXP} <span className="text-sm text-muted-foreground">/ {nextRankXP}</span></div>
          </div>
        </div>
        <div className="h-3 rounded-full bg-muted overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-primary glow-primary"
            initial={{ width: 0 }}
            animate={{ width: `${(currentXP / nextRankXP) * 100}%` }}
            transition={{ duration: 1.5 }}
          />
        </div>
        <div className="flex justify-between mt-3">
          {ranks.map((r) => (
            <div key={r.name} className={`text-[10px] ${currentRank === r.name ? "text-primary font-bold" : "text-muted-foreground"}`}>
              {r.name}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Streak */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass rounded-2xl p-6 flex items-center gap-4">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
          <Flame className="w-7 h-7 text-primary" />
        </div>
        <div>
          <div className="text-3xl font-bold text-foreground">🔥 7 Days</div>
          <div className="text-sm text-muted-foreground">Current Streak — Keep going!</div>
        </div>
      </motion.div>

      {/* Badges */}
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-4">Badges</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08 }}
              className={`glass rounded-2xl p-4 text-center transition-all ${
                b.earned ? "hover:glow-border" : "opacity-40"
              }`}
            >
              <div className={`w-10 h-10 rounded-xl mx-auto mb-2 flex items-center justify-center ${
                b.earned ? "bg-primary/10" : "bg-muted/30"
              }`}>
                <b.icon className={`w-5 h-5 ${b.earned ? "text-primary" : "text-muted-foreground"}`} />
              </div>
              <div className="text-xs font-medium text-foreground">{b.label}</div>
              <div className="text-[10px] text-muted-foreground mt-1">{b.earned ? "Earned ✓" : "Locked"}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  </DashboardLayout>
);

export default Achievements;
