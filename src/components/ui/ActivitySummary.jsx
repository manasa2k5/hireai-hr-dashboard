import ChartCard from "./ChartCard";

const ActivitySummary = () => {
  return (
    <ChartCard title="Activity Summary" description="Recruitment health and next steps">
      <div className="grid gap-4">
        <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm text-slate-500">Scheduled interviews</p>
          <p className="mt-3 text-3xl font-semibold text-slate-900">28</p>
          <p className="mt-2 text-sm text-slate-500">Across all open roles</p>
        </div>
        <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm text-slate-500">Open requisitions</p>
          <p className="mt-3 text-3xl font-semibold text-slate-900">14</p>
          <p className="mt-2 text-sm text-slate-500">Hiring momentum remains strong</p>
        </div>
      </div>
    </ChartCard>
  );
};

export default ActivitySummary;
