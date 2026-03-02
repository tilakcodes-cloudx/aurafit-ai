import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { motion } from "framer-motion";
import { User, Bell, Shield, Palette } from "lucide-react";

const SettingsPage = () => (
  <DashboardLayout>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-sm text-muted-foreground">Manage your account and preferences</p>
      </div>

      {[
        { icon: User, title: "Profile", desc: "Name, email, and personal info", fields: [{ label: "Name", value: "Alex Johnson" }, { label: "Email", value: "alex@example.com" }] },
        { icon: Shield, title: "Body Metrics", desc: "Height, weight, body fat %", fields: [{ label: "Height", value: "178 cm" }, { label: "Weight", value: "79.1 kg" }, { label: "Body Fat", value: "15.3%" }] },
        { icon: Bell, title: "Notifications", desc: "Push notifications and reminders", fields: [] },
        { icon: Palette, title: "Preferences", desc: "Activity level, goals, units", fields: [{ label: "Activity Level", value: "Moderate" }, { label: "Goal", value: "Fat Loss" }] },
      ].map((section, i) => (
        <motion.div key={section.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
              <section.icon className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-sm">{section.title}</h3>
              <p className="text-xs text-muted-foreground">{section.desc}</p>
            </div>
          </div>
          {section.fields.length > 0 && (
            <div className="space-y-3 ml-12">
              {section.fields.map((f) => (
                <div key={f.label} className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{f.label}</span>
                  <span className="text-sm font-medium text-foreground">{f.value}</span>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      ))}
    </motion.div>
  </DashboardLayout>
);

export default SettingsPage;
