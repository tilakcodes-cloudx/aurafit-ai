import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatsCards from "@/components/dashboard/StatsCards";
import WeeklyProgress from "@/components/dashboard/WeeklyProgress";
import AIInsightPanel from "@/components/dashboard/AIInsightPanel";
import { motion } from "framer-motion";

const Dashboard = () => (
  <DashboardLayout>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Command Center</h1>
        <p className="text-sm text-muted-foreground">Today's Overview — February 24, 2026</p>
      </div>
      <StatsCards />
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <WeeklyProgress />
        </div>
        <AIInsightPanel />
      </div>
    </motion.div>
  </DashboardLayout>
);

export default Dashboard;
