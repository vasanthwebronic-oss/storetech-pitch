import MetricCard from "@/components/common/MetricCard";
import { metrics } from "@/data/metrics";


export default function KeyMetrics() {

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
