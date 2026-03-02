import { ReactNode } from "react";
import DashboardSidebar from "./DashboardSidebar";

const DashboardLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen bg-gradient-main">
    <DashboardSidebar />
    <main className="ml-64 p-6 min-h-screen">
      {children}
    </main>
  </div>
);

export default DashboardLayout;
