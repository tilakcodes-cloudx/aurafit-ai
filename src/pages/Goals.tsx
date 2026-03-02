import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { motion } from "framer-motion";
import { Target, Plus, TrendingUp, AlertTriangle } from "lucide-react";

const goals = [
  { title: "Fat Loss", target: "15% → 12%", progress: 60, timeline: "8 weeks", risk: "Low", calories: "1,850 kcal/day", macros: "40C/35P/25F" },
  { title: "Muscle Gain", target: "+3kg lean mass", progress: 35, timeline: "12 weeks", risk: "Medium", calories: "2,600 kcal/day", macros: "45C/30P/25F" },
  { title: "10K Run", target: "Sub 45 min", progress: 72, timeline: "6 weeks", risk: "Low", calories: "2,200 kcal/day", macros: "50C/25P/25F" },
];

const Goals = () => (
  <DashboardLayout>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Goals Engine</h1>
          <p className="text-sm text-muted-foreground">Set targets. Track projections. Dominate.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold glow-primary hover:opacity-90 transition-all">
          <Plus className="w-4 h-4" /> New Goal
        </button>
      </div>

      <div className="grid gap-4">
        {goals.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -2 }}
            className="glass rounded-2xl p-6 hover:glow-border transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{g.title}</h3>
                  <p className="text-xs text-muted-foreground">{g.target}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <AlertTriangle className="w-3 h-3" />
                Risk: {g.risk}
              </div>
            </div>
            <div className="h-2 rounded-full bg-muted overflow-hidden mb-4">
              <motion.div
                className="h-full rounded-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${g.progress}%` }}
                transition={{ duration: 1.2, delay: 0.3 }}
              />
            </div>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div><div className="text-sm font-semibold text-foreground">{g.progress}%</div><div className="text-[10px] text-muted-foreground">Progress</div></div>
              <div><div className="text-sm font-semibold text-foreground">{g.timeline}</div><div className="text-[10px] text-muted-foreground">Timeline</div></div>
              <div><div className="text-sm font-semibold text-foreground">{g.calories}</div><div className="text-[10px] text-muted-foreground">Daily Cal</div></div>
              <div><div className="text-sm font-semibold text-foreground">{g.macros}</div><div className="text-[10px] text-muted-foreground">Macro Split</div></div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </DashboardLayout>
);

export default Goals;
