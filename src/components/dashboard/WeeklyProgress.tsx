import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { FitnessTargets } from "@/utils/fitnessCalculations";

interface WeeklyProgressProps {
  targets: FitnessTargets;
}

const WeeklyProgress = ({ targets }: WeeklyProgressProps) => {
  // Generate some semi-random data based roughly on the user's score for visual purposes
  const baseScore = targets.recoveryScore;
  const data = [
    { day: "Mon", score: Math.max(0, baseScore - 15), calories: 2100 },
    { day: "Tue", score: Math.max(0, baseScore - 9), calories: 1950 },
    { day: "Wed", score: Math.max(0, baseScore - 13), calories: 2200 },
    { day: "Thu", score: Math.max(0, baseScore - 5), calories: 2050 },
    { day: "Fri", score: Math.max(0, baseScore - 2), calories: 1900 },
    { day: "Sat", score: Math.max(0, baseScore - 7), calories: 2300 },
    { day: "Sun", score: baseScore, calories: 1850 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="glass rounded-2xl p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-semibold text-foreground">Weekly Performance</h3>
          <p className="text-xs text-muted-foreground">Your optimization score this week</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">{baseScore}</div>
              <div className="text-[10px] text-muted-foreground">Score</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">🔥 7</div>
              <div className="text-[10px] text-muted-foreground">Streak</div>
            </div>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(183, 100%, 50%)" stopOpacity={0.3} />
              <stop offset="100%" stopColor="hsl(183, 100%, 50%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(240, 20%, 18%)" />
          <XAxis dataKey="day" tick={{ fill: "hsl(220, 15%, 55%)", fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: "hsl(220, 15%, 55%)", fontSize: 12 }} axisLine={false} tickLine={false} domain={[60, 100]} />
          <Tooltip
            contentStyle={{
              background: "hsl(240, 25%, 12%)",
              border: "1px solid hsl(240, 20%, 24%)",
              borderRadius: "12px",
              color: "hsl(220, 20%, 95%)",
              fontSize: 12,
            }}
          />
          <Area type="monotone" dataKey="score" stroke="hsl(183, 100%, 50%)" strokeWidth={2} fill="url(#chartGrad)" />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default WeeklyProgress;
