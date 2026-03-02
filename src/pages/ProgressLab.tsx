import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, AreaChart, Area } from "recharts";

const weightData = [
  { week: "W1", weight: 82 }, { week: "W2", weight: 81.5 }, { week: "W3", weight: 81.2 },
  { week: "W4", weight: 80.8 }, { week: "W5", weight: 80.3 }, { week: "W6", weight: 79.9 },
  { week: "W7", weight: 79.5 }, { week: "W8", weight: 79.1 },
];

const fatData = [
  { week: "W1", fat: 18 }, { week: "W2", fat: 17.6 }, { week: "W3", fat: 17.2 },
  { week: "W4", fat: 16.8 }, { week: "W5", fat: 16.5 }, { week: "W6", fat: 16.1 },
  { week: "W7", fat: 15.7 }, { week: "W8", fat: 15.3 },
];

const sleepPerfData = [
  { day: "Mon", sleep: 7.5, perf: 78 }, { day: "Tue", sleep: 6.8, perf: 72 },
  { day: "Wed", sleep: 8.1, perf: 85 }, { day: "Thu", sleep: 7.2, perf: 76 },
  { day: "Fri", sleep: 7.8, perf: 82 }, { day: "Sat", sleep: 8.5, perf: 88 },
  { day: "Sun", sleep: 7.0, perf: 74 },
];

const tooltipStyle = {
  background: "hsl(240, 25%, 12%)",
  border: "1px solid hsl(240, 20%, 24%)",
  borderRadius: "12px",
  color: "hsl(220, 20%, 95%)",
  fontSize: 12,
};

const heatmapData = Array.from({ length: 28 }, (_, i) => Math.floor(Math.random() * 5));

const ProgressLab = () => (
  <DashboardLayout>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Progress Lab</h1>
        <p className="text-sm text-muted-foreground">Advanced analytics for peak performers</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Weight Trend */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass rounded-2xl p-6">
          <h3 className="font-semibold text-foreground mb-4">Weight Trend</h3>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={weightData}>
              <defs>
                <linearGradient id="wg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(183, 100%, 50%)" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="hsl(183, 100%, 50%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(240, 20%, 18%)" />
              <XAxis dataKey="week" tick={{ fill: "hsl(220, 15%, 55%)", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "hsl(220, 15%, 55%)", fontSize: 11 }} axisLine={false} tickLine={false} domain={['auto', 'auto']} />
              <Tooltip contentStyle={tooltipStyle} />
              <Area type="monotone" dataKey="weight" stroke="hsl(183, 100%, 50%)" strokeWidth={2} fill="url(#wg)" />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Body Fat */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass rounded-2xl p-6">
          <h3 className="font-semibold text-foreground mb-4">Body Fat %</h3>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={fatData}>
              <defs>
                <linearGradient id="fg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(264, 100%, 50%)" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="hsl(264, 100%, 50%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(240, 20%, 18%)" />
              <XAxis dataKey="week" tick={{ fill: "hsl(220, 15%, 55%)", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "hsl(220, 15%, 55%)", fontSize: 11 }} axisLine={false} tickLine={false} domain={['auto', 'auto']} />
              <Tooltip contentStyle={tooltipStyle} />
              <Area type="monotone" dataKey="fat" stroke="hsl(264, 100%, 50%)" strokeWidth={2} fill="url(#fg)" />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Sleep vs Performance */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass rounded-2xl p-6 lg:col-span-2">
          <h3 className="font-semibold text-foreground mb-4">Sleep vs Performance</h3>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={sleepPerfData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(240, 20%, 18%)" />
              <XAxis dataKey="day" tick={{ fill: "hsl(220, 15%, 55%)", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "hsl(220, 15%, 55%)", fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={tooltipStyle} />
              <Line type="monotone" dataKey="sleep" stroke="hsl(183, 100%, 50%)" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="perf" stroke="hsl(264, 100%, 50%)" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
          <div className="flex gap-6 mt-3 justify-center">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="w-3 h-0.5 bg-primary rounded" /> Sleep Hours
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="w-3 h-0.5 bg-secondary rounded" /> Performance Score
            </div>
          </div>
        </motion.div>

        {/* Heatmap */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass rounded-2xl p-6 lg:col-span-2">
          <h3 className="font-semibold text-foreground mb-4">Activity Heatmap — Last 4 Weeks</h3>
          <div className="grid grid-cols-7 gap-2">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
              <div key={d} className="text-[10px] text-muted-foreground text-center">{d}</div>
            ))}
            {heatmapData.map((v, i) => (
              <div
                key={i}
                className="aspect-square rounded-lg transition-all"
                style={{
                  backgroundColor: v === 0
                    ? "hsl(240, 20%, 14%)"
                    : `hsl(183, 100%, ${20 + v * 8}%, ${0.3 + v * 0.15})`,
                  boxShadow: v > 3 ? "0 0 8px hsl(183, 100%, 50%, 0.3)" : "none",
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  </DashboardLayout>
);

export default ProgressLab;
