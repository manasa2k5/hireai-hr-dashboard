// KPI cards shown on dashboard
export const kpiData = [
  {
    title: "Total Candidates",
    value: "1,240",
    delta: "+12%",
    description: "Since last month",
    icon: "users",
    color: "bg-sky-100 text-sky-700",
  },
  {
    title: "Total Applications",
    value: "3,820",
    delta: "+8.4%",
    description: "Quarterly inflow",
    icon: "briefcase",
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    title: "Average Score",
    value: "76%",
    delta: "+2.6%",
    description: "Assessment quality",
    icon: "star",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    title: "Hired Count",
    value: "112",
    delta: "+9%",
    description: "YTD hires",
    icon: "check",
    color: "bg-violet-100 text-violet-700",
  },
];

// Hiring funnel stages (API-shaped data provided below as well)
export const funnelData = [
  { stage: "Applied", count: 2380 },
  { stage: "Shortlisted", count: 860 },
  { stage: "Interviewed", count: 420 },
  { stage: "Offered", count: 120 },
  { stage: "Hired", count: 112 },
];

// Score distribution buckets (0-20, 21-40, ...)
export const scoreDistributionData = [
  { range: "0-20", value: 48 },
  { range: "21-40", value: 120 },
  { range: "41-60", value: 360 },
  { range: "61-80", value: 820 },
  { range: "81-100", value: 452 },
];

// Monthly application trends Jan-Dec
export const trendData = [
  { month: "Jan", applications: 240 },
  { month: "Feb", applications: 210 },
  { month: "Mar", applications: 300 },
  { month: "Apr", applications: 360 },
  { month: "May", applications: 410 },
  { month: "Jun", applications: 380 },
  { month: "Jul", applications: 420 },
  { month: "Aug", applications: 460 },
  { month: "Sep", applications: 390 },
  { month: "Oct", applications: 430 },
  { month: "Nov", applications: 470 },
  { month: "Dec", applications: 520 },
];

export const topCandidates = [
  {
    name: "Mia Chen",
    role: "Senior Product Designer",
    score: 92,
    stage: "Final Interview",
    status: "High fit",
  },
  {
    name: "Jordan Lewis",
    role: "Frontend Engineer",
    score: 88,
    stage: "Offer",
    status: "Strong",
  },
  {
    name: "Priya Patel",
    role: "Recruitment Specialist",
    score: 85,
    stage: "Interviewed",
    status: "Recommended",
  },
];

// Example API-shaped responses for future integration tests
export const funnelApiResponse = { success: true, data: funnelData };
export const scoreDistributionApiResponse = { success: true, data: scoreDistributionData };
export const trendApiResponse = { success: true, data: trendData };
