const navItems = [
  { label: "Dashboard", icon: "dashboard", to: "/dashboard" },
  { label: "Candidates", icon: "users", to: "/candidates" },
  { label: "Jobs", icon: "briefcase", to: "/jobs" },
  { label: "Analytics", icon: "chart", to: "/analytics" },
  { label: "AI Copilot", icon: "spark", to: "/copilot" },
  { label: "Settings", icon: "settings", to: "/settings" },
];

const iconMap = {
  dashboard: (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <path d="M4 13h6V4H4v9Zm0 7h6v-5H4v5Zm10 0h6V11h-6v9Zm0-18v7h6V2h-6Z" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <path d="M12 12c2.7 0 4.9-2.2 4.9-4.9S14.7 2.2 12 2.2 7.1 4.4 7.1 7.1 9.3 12 12 12Zm0 2.2c-3.2 0-9.4 1.6-9.4 4.9v2.2h18.8v-2.2c0-3.3-6.2-4.9-9.4-4.9Z" />
    </svg>
  ),
  briefcase: (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <path d="M4 7V6c0-1.1.9-2 2-2h4V2h4v2h4c1.1 0 2 .9 2 2v1H4Zm0 2h16v11c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V9Zm6 1h4v3h-4v-3Zm0 5h4v3h-4v-3Z" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <path d="M5 21h14v-2H5v2Zm4-6h3v-7h-3v7Zm5 0h3V7h-3v8Zm-7 0h3v-4H7v4Z" />
    </svg>
  ),
  spark: (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <path d="M13 3l-2 7H4l6 5-2 7 6-5 6 5-2-7 6-5h-7l-2-7Z" />
    </svg>
  ),
  settings: (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <path d="M19.4 12.9c.04-.3.1-.6.1-.9s-.03-.6-.1-.9l2.1-1.6-2-3.4-2.5 1c-.5-.4-1-.7-1.6-.9L14 2h-4l-.4 2.1c-.6.2-1.1.5-1.6.9L5.5 6.9 3.4 10.3l2.1 1.6c-.07.3-.1.6-.1.9s.03.6.1.9L3.4 15.3l2 3.4 2.5-1c.5.4 1 .7 1.6.9l.4 2.1h4l.4-2.1c.6-.2 1.1-.5 1.6-.9l2.5 1 2-3.4-2.1-1.6ZM12 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" />
    </svg>
  ),
};

import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="hidden xl:flex xl:w-72 2xl:w-80 flex-col border-r border-slate-200 bg-slate-50 px-5 py-8">
      <div className="mb-10 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-sky-600 text-white shadow-lg shadow-sky-200/20">
          <span className="text-lg font-semibold">AI</span>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">HireAI</p>
          <h1 className="text-xl font-semibold text-slate-900">Copilot</h1>
        </div>
      </div>

      <nav className="space-y-1">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.to}
            className={({ isActive }) =>
              `flex w-full items-center gap-3 rounded-3xl px-4 py-3 text-left transition ${
                isActive
                  ? "bg-slate-800 text-white shadow-lg shadow-slate-900/10"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`
            }
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
              {iconMap[item.icon]}
            </span>
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
