import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Label,
} from "recharts";

const ScoreDistributionChart = ({ data }) => {
  // normalize input: accept either { label, value } or { range, value }
  const items = (data || []).map((d) => ({ label: d.label || d.range || String(d.range), value: d.value || d.count || 0 }));
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={items} margin={{ top: 10, right: 16, left: -12, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
        <XAxis dataKey="label" tickLine={false} axisLine={false} tick={{ fill: "#475569", fontSize: 13 }}>
          <Label value="Score Range" position="bottom" offset={6} />
        </XAxis>
        <YAxis tickLine={false} axisLine={false} tick={{ fill: "#475569", fontSize: 13 }} />
        <Tooltip
          contentStyle={{ borderRadius: 18, border: "1px solid #e2e8f0" }}
          cursor={{ fill: "rgba(14, 165, 233, 0.08)" }}
        />
        <Bar dataKey="value" fill="#0ea5e9" radius={[12, 12, 0, 0]} barSize={20} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ScoreDistributionChart;
