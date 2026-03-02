import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { motion } from "framer-motion";
import { Dumbbell, Clock, Flame, TrendingUp } from "lucide-react";

const workouts = [
  { name: "Push Day — Chest & Shoulders", duration: "58 min", calories: 420, exercises: 6, date: "Today" },
  { name: "HIIT Cardio", duration: "25 min", calories: 310, exercises: 8, date: "Yesterday" },
  { name: "Pull Day — Back & Biceps", duration: "52 min", calories: 380, exercises: 7, date: "Feb 22" },
  { name: "Leg Day — Quads & Glutes", duration: "65 min", calories: 480, exercises: 8, date: "Feb 21" },
];

const Workouts = () => (
  <DashboardLayout>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Workouts</h1>
          <p className="text-sm text-muted-foreground">Track and optimize your training sessions</p>
        </div>
        <button className="px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold glow-primary hover:opacity-90 transition-all">
          + Log Workout
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: Dumbbell, label: "This Week", value: "4 sessions" },
          { icon: Clock, label: "Total Time", value: "3h 20m" },
          { icon: Flame, label: "Calories Burned", value: "1,590" },
          { icon: TrendingUp, label: "Volume Trend", value: "+12%" },
        ].map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="glass rounded-2xl p-4">
            <s.icon className="w-4 h-4 text-primary mb-2" />
            <div className="text-lg font-bold text-foreground">{s.value}</div>
            <div className="text-[10px] text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="space-y-3">
        {workouts.map((w, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.1 }} className="glass rounded-2xl p-5 hover:glow-border transition-all cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Dumbbell className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">{w.name}</h3>
                  <p className="text-xs text-muted-foreground">{w.date} · {w.exercises} exercises</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-foreground">{w.duration}</div>
                <div className="text-xs text-muted-foreground">{w.calories} kcal</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </DashboardLayout>
);

export default Workouts;
