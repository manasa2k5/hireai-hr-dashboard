const SkeletonPanel = ({ variant = "card" }) => {
  if (variant === "chart") {
    return (
      <div className="animate-pulse rounded-[2rem] border border-slate-200 bg-slate-100 p-6">
        <div className="mb-4 h-5 w-48 rounded-full bg-slate-200" />
        <div className="mt-8 h-64 rounded-[1.75rem] bg-slate-200" />
      </div>
    );
  }

  return (
    <div className="animate-pulse rounded-[2rem] border border-slate-200 bg-slate-100 p-6">
      <div className="mb-4 h-5 w-32 rounded-full bg-slate-200" />
      <div className="space-y-4">
        <div className="h-6 rounded-full bg-slate-200" />
        <div className="h-6 rounded-full bg-slate-200 w-5/6" />
      </div>
    </div>
  );
};

export default SkeletonPanel;
