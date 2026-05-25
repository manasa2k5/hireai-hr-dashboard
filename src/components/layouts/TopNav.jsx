const TopNav = () => {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 rounded-[2rem] border border-slate-200 bg-white/80 px-4 py-4 shadow-sm shadow-slate-200/50 backdrop-blur-xl md:px-6">
      <div>
        <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Overview</p>
        <h2 className="text-2xl font-semibold text-slate-900">HR Analytics Dashboard</h2>
      </div>

      <div className="flex flex-1 items-center justify-end gap-3 min-w-0">
        <div className="group relative flex w-full max-w-md items-center overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-600 transition hover:border-slate-300 focus-within:border-slate-300 md:max-w-sm">
          <svg viewBox="0 0 24 24" className="mr-3 h-5 w-5 text-slate-400">
            <path d="M10 18a8 8 0 1 1 5.292-2.292l4.708 4.708-1.414 1.414-4.708-4.708A7.963 7.963 0 0 1 10 18Zm0-14a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z" />
          </svg>
          <input
            className="w-full bg-transparent text-sm font-medium text-slate-900 outline-none placeholder:text-slate-400"
            placeholder="Search candidates, roles, analytics..."
            type="search"
          />
        </div>

        <button className="inline-flex h-12 w-12 items-center justify-center rounded-3xl border border-slate-200 bg-white text-slate-600 transition hover:border-slate-300 hover:text-slate-900">
          <svg viewBox="0 0 24 24" className="h-5 w-5">
            <path d="M12 22a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm6-6V9a6 6 0 1 0-12 0v7L4 18v1h16v-1l-2-2Zm-2 0H8V9a4 4 0 1 1 8 0v7Z" />
          </svg>
        </button>

        <button className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-900 text-white transition hover:bg-slate-800">
          <span className="text-sm font-semibold">RA</span>
        </button>
      </div>
    </header>
  );
};

export default TopNav;
