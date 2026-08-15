import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const gmv = [
  { month: "Mar", gmv: 480, transactions: 32 },
  { month: "Apr", gmv: 610, transactions: 41 },
  { month: "May", gmv: 720, transactions: 47 },
  { month: "Jun", gmv: 690, transactions: 44 },
  { month: "Jul", gmv: 880, transactions: 58 },
  { month: "Aug", gmv: 1020, transactions: 66 },
];

const kpis = [
  { label: "GMV (YTD)", value: "$4.4M" },
  { label: "Active users", value: "1,284" },
  { label: "Escrow held", value: "$612K" },
  { label: "Dispute rate", value: "2.1%" },
];

export function PlatformAnalyticsDashboard() {
  return (
    <section className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((k) => (
          <div key={k.label} className="rounded-lg border border-border bg-card p-4">
            <p className="text-xs text-muted-foreground">{k.label}</p>
            <p className="mt-1 text-2xl font-semibold text-foreground">{k.value}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-4">
          <h3 className="mb-3 text-sm font-semibold text-foreground">GMV ($ thousands)</h3>
          <ResponsiveContainer width="100%" height={240}>
            <AreaChart data={gmv}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="month" stroke="var(--muted-foreground)" fontSize={12} />
              <YAxis stroke="var(--muted-foreground)" fontSize={12} />
              <Tooltip />
              <Area dataKey="gmv" stroke="var(--chart-1)" fill="var(--chart-1)" fillOpacity={0.2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="rounded-lg border border-border bg-card p-4">
          <h3 className="mb-3 text-sm font-semibold text-foreground">Transactions per month</h3>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={gmv}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="month" stroke="var(--muted-foreground)" fontSize={12} />
              <YAxis stroke="var(--muted-foreground)" fontSize={12} />
              <Tooltip />
              <Bar dataKey="transactions" fill="var(--chart-2)" radius={4} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}

export default PlatformAnalyticsDashboard;
