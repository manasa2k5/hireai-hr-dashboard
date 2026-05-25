import KpiCard from "../components/ui/KpiCard";
import ChartCard from "../components/ui/ChartCard";
import SkeletonPanel from "../components/ui/SkeletonPanel";
import EmptyState from "../components/ui/EmptyState";
import HiringFunnelChart from "../charts/HiringFunnelChart";
import ScoreDistributionChart from "../charts/ScoreDistributionChart";
import ApplicationTrendChart from "../charts/ApplicationTrendChart";
import { useDashboardData } from "../hooks/useDashboardData";
import CandidateTable from "../components/ui/CandidateTable";
import ActivitySummary from "../components/ui/ActivitySummary";

const DashboardPage = () => {
  const { loading, kpi, funnel, scoreDistribution, trend, topCandidates } = useDashboardData();
  const hasCandidates = !loading && topCandidates.length > 0;

  return (
    <div>
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {loading
                ? Array.from({ length: 4 }).map((_, index) => (
                    <SkeletonPanel key={index} variant="card" />
                  ))
                : kpi.map((item) => <KpiCard key={item.title} {...item} />)}
            </section>

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
                    <HiringFunnelChart data={funnel} />
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
                      <ScoreDistributionChart data={scoreDistribution} />
                    </div>
                  )}
                </ChartCard>

                <ChartCard title="Application Trends" description="Monthly applications">
                  {loading ? (
                    <SkeletonPanel variant="chart" />
                  ) : (
                    <div className="h-[320px]">
                      <ApplicationTrendChart data={trend} />
                    </div>
                  )}
                </ChartCard>
              </div>
            </section>

            <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
              <CandidateTable loading={loading} candidates={topCandidates} />

              <ActivitySummary />
            </section>
    </div>
  );
};

export default DashboardPage;
