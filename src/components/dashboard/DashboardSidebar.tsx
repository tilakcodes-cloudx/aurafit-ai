import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import AuraFitLogo from "../AuraFitLogo";
import {
  LayoutDashboard, Target, Dumbbell, Apple, Moon, FlaskConical,
  Bot, Trophy, Settings, LogOut
} from "lucide-react";

const links = [
  { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/goals", icon: Target, label: "Goals" },
  { to: "/workouts", icon: Dumbbell, label: "Workouts" },
  { to: "/nutrition", icon: Apple, label: "Nutrition" },
  { to: "/sleep", icon: Moon, label: "Sleep" },
  { to: "/progress", icon: FlaskConical, label: "Progress Lab" },
  { to: "/ai-coach", icon: Bot, label: "AI Coach" },
  { to: "/achievements", icon: Trophy, label: "Achievements" },
  { to: "/settings", icon: Settings, label: "Settings" },
];

const DashboardSidebar = () => {
  const { pathname } = useLocation();

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 glass-strong flex flex-col z-40">
      <div className="h-16 px-5 flex items-center gap-2 border-b border-border">
        <AuraFitLogo size={28} />
        <span className="font-bold text-foreground text-sm tracking-tight">
          AURA<span className="text-primary">FIT</span>
        </span>
      </div>
      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        {links.map((l) => {
          const active = pathname === l.to;
          return (
            <Link
              key={l.to}
              to={l.to}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all relative ${active
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                }`}
            >
              {active && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute inset-0 rounded-xl bg-primary/10 border border-primary/20"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <l.icon className="w-4 h-4 relative z-10" />
              <span className="relative z-10">{l.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-border mt-auto">
        <button
          onClick={() => {
            localStorage.removeItem("isAuthenticated");
            window.location.href = "/";
          }}
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm w-full text-muted-foreground hover:text-red-400 hover:bg-red-400/10 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span>Log out</span>
        </button>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
