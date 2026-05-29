import { useMemo } from 'react';
import KpiCard from "../components/ui/KpiCard";
import ChartCard from "../components/ui/ChartCard";
import SkeletonPanel from "../components/ui/SkeletonPanel";
import EmptyState from "../components/ui/EmptyState";
import HiringFunnelChart from "../charts/HiringFunnelChart";
import ScoreDistributionChart from "../charts/ScoreDistributionChart";
import ApplicationTrendChart from "../charts/ApplicationTrendChart";
import useDashboardData from "../hooks/useDashboardData";
import CandidateTable from "../components/ui/CandidateTable";
import ActivitySummary from "../components/ui/ActivitySummary";
import {
  kpiData,
  funnelData,
  scoreDistributionData,
  trendData,
  topCandidates,
} from "../data/dashboardData";

const DashboardPage = () => {
  const { jobs, applications, loading, error } = useDashboardData();

  // Build live KPI cards with backend data (memoized)
  const liveKpi = useMemo(() => [
    { title: "Total Jobs", value: jobs.length, trend: "+0%", description: "Active job postings" },
    { title: "Total Applications", value: applications.length, trend: "+0%", description: "Submitted applications" },
    // Keep existing mock KPI cards
    ...kpiData.slice(2),
  ], [jobs.length, applications.length, kpiData]);

  const hasCandidates = useMemo(() => !loading && topCandidates.length > 0, [loading]);

  return (
    <div>
      {/* Error Message */}
      {error && (
        <div className="mb-6 rounded-lg bg-red-50 p-4 border border-red-200">
          <p className="text-sm text-red-800">
            <strong>Failed to load dashboard data:</strong> {error}
          </p>
        </div>
      )}

      {/* KPI Cards Section */}
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <SkeletonPanel key={index} variant="card" />
            ))
          : liveKpi.map((item) => <KpiCard key={item.title} {...item} />)}
      </section>

      {/* Charts Section */}
      <section className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
        <ChartCard
          title="Hiring Funnel"
          description="Pipeline conversion across recruitment stages"
          badge="Live insights"
        >
          {loading ? (
            <SkeletonPanel variant="chart" />
          ) : (
            <div className="h-[320px]">
              <HiringFunnelChart data={funnelData} />
            </div>
          )}
        </ChartCard>

        <div className="grid gap-6">
          <ChartCard
            title="Score Distribution"
            description="Quality spread of candidate assessments"
          >
            {loading ? (
              <SkeletonPanel variant="chart" />
            ) : (
              <div className="h-[320px]">
                <ScoreDistributionChart data={scoreDistributionData} />
              </div>
            )}
          </ChartCard>

          <ChartCard title="Application Trends" description="Monthly applications">
            {loading ? (
              <SkeletonPanel variant="chart" />
            ) : (
              <div className="h-[320px]">
                <ApplicationTrendChart data={trendData} />
              </div>
            )}
          </ChartCard>
        </div>
      </section>

      {/* Candidates & Activity Section */}
      <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <CandidateTable loading={loading} candidates={topCandidates} />

        <ActivitySummary />
      </section>
    </div>
  );
};

export default DashboardPage;
