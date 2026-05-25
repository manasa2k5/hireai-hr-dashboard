const EmptyState = ({ title, message }) => {
  return (
    <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white/90 p-10 text-center text-slate-700 shadow-sm shadow-slate-900/5">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-100 text-slate-500">
        <svg viewBox="0 0 24 24" className="h-7 w-7">
          <path d="M5 4h14a1 1 0 0 1 1 1v3H4V5a1 1 0 0 1 1-1Zm0 6h14v9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V10Zm5.5 2.5A1.5 1.5 0 1 0 10 14a1.5 1.5 0 0 0 .5-1.5Z" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-500">{message}</p>
    </div>
  );
};

export default EmptyState;
