import { useEffect, useState } from "react";
import {
  kpiData,
  funnelData,
  scoreDistributionData,
  trendData,
  topCandidates,
} from "../data/dashboardData";

export const useDashboardData = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    kpi: [],
    funnel: [],
    scoreDistribution: [],
    trend: [],
    topCandidates: [],
  });

  useEffect(() => {
    const delay = window.setTimeout(() => {
      setData({
        kpi: kpiData,
        funnel: funnelData,
        scoreDistribution: scoreDistributionData,
        trend: trendData,
        topCandidates,
      });
      setLoading(false);
    }, 900);

    return () => window.clearTimeout(delay);
  }, []);

  return { loading, ...data };
};
