import EmptyState from "./EmptyState";
import SkeletonPanel from "./SkeletonPanel";
import ChartCard from "./ChartCard";

const CandidateTable = ({ loading, candidates = [] }) => {
  const hasCandidates = !loading && candidates.length > 0;

  return (
    <ChartCard title="Top Candidates" description="Highlights of top applicants" badge="Ready to review">
      {loading ? (
        <SkeletonPanel variant="chart" />
      ) : hasCandidates ? (
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm shadow-slate-900/5">
          <div className="min-w-full overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 font-semibold uppercase tracking-[0.24em] text-slate-500">Candidate</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-[0.24em] text-slate-500">Role</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-[0.24em] text-slate-500">Score</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-[0.24em] text-slate-500">Stage</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-[0.24em] text-slate-500">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {candidates.map((candidate) => (
                  <tr key={candidate.name} className="transition hover:bg-slate-50">
                    <td className="px-6 py-4 font-semibold text-slate-900">{candidate.name}</td>
                    <td className="px-6 py-4 text-slate-600">{candidate.role}</td>
                    <td className="px-6 py-4 text-slate-600">{candidate.score}%</td>
                    <td className="px-6 py-4 text-slate-600">{candidate.stage}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                        {candidate.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <EmptyState
          title="No candidate data yet"
          message="Once candidates are assessed, top performers will appear here."
        />
      )}
    </ChartCard>
  );
};

export default CandidateTable;
