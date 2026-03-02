import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { motion } from "framer-motion";
import { Moon, Clock, TrendingUp, Zap } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const sleepData = [
  { day: "Mon", hours: 7.5, quality: 82 },
  { day: "Tue", hours: 6.8, quality: 68 },
  { day: "Wed", hours: 8.1, quality: 90 },
  { day: "Thu", hours: 7.2, quality: 75 },
  { day: "Fri", hours: 7.8, quality: 85 },
  { day: "Sat", hours: 8.5, quality: 92 },
  { day: "Sun", hours: 7.0, quality: 72 },
];

const Sleep = () => (
  <DashboardLayout>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Sleep</h1>
        <p className="text-sm text-muted-foreground">Recovery starts when you close your eyes</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: Moon, label: "Last Night", value: "7.5 hrs" },
          { icon: Clock, label: "Avg Bedtime", value: "10:42 PM" },
          { icon: TrendingUp, label: "Sleep Score", value: "87/100" },
          { icon: Zap, label: "Deep Sleep", value: "2.1 hrs" },
        ].map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="glass rounded-2xl p-4">
            <s.icon className="w-4 h-4 text-primary mb-2" />
            <div className="text-lg font-bold text-foreground">{s.value}</div>
            <div className="text-[10px] text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass rounded-2xl p-6">
        <h3 className="font-semibold text-foreground mb-4">Weekly Sleep Duration</h3>
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={sleepData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(240, 20%, 18%)" />
            <XAxis dataKey="day" tick={{ fill: "hsl(220, 15%, 55%)", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "hsl(220, 15%, 55%)", fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ background: "hsl(240, 25%, 12%)", border: "1px solid hsl(240, 20%, 24%)", borderRadius: "12px", color: "hsl(220, 20%, 95%)", fontSize: 12 }} />
            <Bar dataKey="hours" fill="hsl(183, 100%, 50%)" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </motion.div>
  </DashboardLayout>
);

export default Sleep;
