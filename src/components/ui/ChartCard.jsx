const ChartCard = ({ title, description, children, badge }) => {
  return (
    <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5 transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
          <p className="mt-1 text-sm text-slate-500">{description}</p>
        </div>
        {badge ? (
          <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
            {badge}
          </span>
        ) : null}
      </div>
      <div className="min-h-[300px]">{children}</div>
    </section>
  );
};

export default ChartCard;
