import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Label,
} from "recharts";

const HiringFunnelChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 10, right: 16, left: -12, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
        <XAxis
          dataKey="stage"
          tickLine={false}
          axisLine={false}
          tick={{ fill: "#475569", fontSize: 13 }}
        >
          <Label value="Stage" position="bottom" offset={6} />
        </XAxis>
        <YAxis tickLine={false} axisLine={false} tick={{ fill: "#475569", fontSize: 13 }}>
          <Label angle={-90} value="Candidates" position="insideLeft" offset={-6} />
        </YAxis>
        <Tooltip
          contentStyle={{ borderRadius: 18, border: "1px solid #e2e8f0" }}
          cursor={{ fill: "rgba(30, 64, 175, 0.06)" }}
        />
        <Bar dataKey="count" radius={[16, 16, 0, 0]} fill="#2563eb" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default HiringFunnelChart;
