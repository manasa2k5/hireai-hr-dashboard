import Sidebar from "./Sidebar";
import TopNav from "./TopNav";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-[1800px] overflow-hidden">
        <Sidebar />
        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <TopNav />
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
