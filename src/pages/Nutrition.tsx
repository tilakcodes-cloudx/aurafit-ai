import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { motion } from "framer-motion";
import { Apple, Flame, Drumstick, Wheat, Droplets } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const macroData = [
  { name: "Protein", value: 35, color: "hsl(183, 100%, 50%)" },
  { name: "Carbs", value: 40, color: "hsl(264, 100%, 50%)" },
  { name: "Fats", value: 25, color: "hsl(240, 20%, 40%)" },
];

const meals = [
  { time: "7:30 AM", name: "Breakfast", items: "Oats, banana, whey protein", cal: 480, protein: 38 },
  { time: "12:00 PM", name: "Lunch", items: "Grilled chicken, rice, broccoli", cal: 620, protein: 45 },
  { time: "3:30 PM", name: "Snack", items: "Greek yogurt, almonds", cal: 250, protein: 22 },
  { time: "7:00 PM", name: "Dinner", items: "Salmon, sweet potato, salad", cal: 497, protein: 29 },
];

const Nutrition = () => (
  <DashboardLayout>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Nutrition</h1>
        <p className="text-sm text-muted-foreground">Fuel your body with precision</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Flame, label: "Calories", value: "1,847", sub: "/ 2,200" },
            { icon: Drumstick, label: "Protein", value: "134g", sub: "/ 165g" },
            { icon: Wheat, label: "Carbs", value: "210g", sub: "/ 245g" },
            { icon: Droplets, label: "Fats", value: "58g", sub: "/ 65g" },
          ].map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="glass rounded-2xl p-4">
              <s.icon className="w-4 h-4 text-primary mb-2" />
              <div className="text-lg font-bold text-foreground">{s.value}</div>
              <div className="text-[10px] text-muted-foreground">{s.label} {s.sub}</div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass rounded-2xl p-6 flex flex-col items-center">
          <h3 className="font-semibold text-foreground mb-2 self-start">Macro Split</h3>
          <ResponsiveContainer width="100%" height={140}>
            <PieChart>
              <Pie data={macroData} cx="50%" cy="50%" innerRadius={40} outerRadius={60} dataKey="value" strokeWidth={0}>
                {macroData.map((d, i) => <Cell key={i} fill={d.color} />)}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="flex gap-4 mt-2">
            {macroData.map((d) => (
              <div key={d.name} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: d.color }} />
                {d.name} {d.value}%
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-foreground mb-4">Today's Meals</h2>
        <div className="space-y-3">
          {meals.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.1 }} className="glass rounded-2xl p-4 hover:glow-border transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Apple className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{m.name} <span className="text-muted-foreground font-normal">· {m.time}</span></h3>
                    <p className="text-xs text-muted-foreground">{m.items}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-foreground">{m.cal} kcal</div>
                  <div className="text-xs text-muted-foreground">{m.protein}g protein</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  </DashboardLayout>
);

export default Nutrition;
