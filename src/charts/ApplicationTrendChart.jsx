import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Label,
} from "recharts";

const ApplicationTrendChart = ({ data }) => {
  // normalize to { label, applications, interviews? }
  const items = (data || []).map((d) => ({
    label: d.week || d.month || d.name,
    applications: d.applications || d.count || 0,
    interviews: d.interviews || d.interviews || 0,
  }));
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={items} margin={{ top: 10, right: 16, left: -12, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
        <XAxis dataKey="label" tickLine={false} axisLine={false} tick={{ fill: "#475569", fontSize: 13 }}>
          <Label value="Month" position="bottom" offset={6} />
        </XAxis>
        <YAxis tickLine={false} axisLine={false} tick={{ fill: "#475569", fontSize: 13 }}>
          <Label angle={-90} value="Applications" position="insideLeft" offset={-6} />
        </YAxis>
        <Tooltip
          contentStyle={{ borderRadius: 18, border: "1px solid #e2e8f0" }}
          cursor={{ stroke: "#2563eb", strokeDasharray: "4 4" }}
        />
        <Legend verticalAlign="top" align="right" iconType="circle" wrapperStyle={{ paddingBottom: 16 }} />
        <Line type="monotone" dataKey="applications" stroke="#2563eb" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
        {items.some((i) => i.interviews) && (
          <Line type="monotone" dataKey="interviews" stroke="#0ea5e9" strokeWidth={3} dot={{ r: 4 }} />
        )}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ApplicationTrendChart;
