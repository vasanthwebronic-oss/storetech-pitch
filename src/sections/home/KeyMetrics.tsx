import MetricCard from "@/components/common/MetricCard";

export default function KeyMetrics() {
  const metrics = [
    { children: "170", label: "Stores Live" },
    { children: "50M+", label: "Transactions" },
    { children: "99.7%", label: "Success Rate" },
    { children: "10", label: "Days to Deploy" },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((v, i) => (
            <MetricCard key={i} label={v.label}>
              {v.children}
            </MetricCard>
          ))}
        </div>
      </div>
    </section>
  );
}
