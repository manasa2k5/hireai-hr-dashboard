const iconMap = {
  users: (
    <path d="M12 12c2.7 0 4.9-2.2 4.9-4.9S14.7 2.2 12 2.2 7.1 4.4 7.1 7.1 9.3 12 12 12Zm0 2.2c-3.2 0-9.4 1.6-9.4 4.9v2.2h18.8v-2.2c0-3.3-6.2-4.9-9.4-4.9Z" />
  ),
  briefcase: (
    <path d="M4 7V6c0-1.1.9-2 2-2h4V2h4v2h4c1.1 0 2 .9 2 2v1H4Zm0 2h16v11c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V9Zm6 1h4v3h-4v-3Zm0 5h4v3h-4v-3Z" />
  ),
  star: (
    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  ),
  check: (
    <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
  ),
};

const KpiCard = ({ title, value, delta, description, icon, color }) => {
  return (
    <div className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-xl">
      <div className={`inline-flex h-14 w-14 items-center justify-center rounded-3xl ${color} bg-opacity-20`}>
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
          {iconMap[icon]}
        </svg>
      </div>
      <p className="mt-6 text-sm uppercase tracking-[0.24em] text-slate-400">{title}</p>
      <p className="mt-3 text-3xl font-semibold text-slate-900">{value}</p>
      <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
        <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-slate-700">
          <span className="mr-2 text-sm font-semibold text-emerald-600">{delta}</span>
          Growth
        </span>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default KpiCard;
