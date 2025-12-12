import MetricCard from "@/components/common/MetricCard";
import SectionTitle from "@/components/common/SectionTitle";
import { metrics } from "@/data/metrics";


export default function HeroSection() {
  return (
    <section className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle type="Hero" description="145+ stores deployed in total to date. 50M+ transactions processed. 99.7% success rate. StoreTech is the market leader in unmanned retail technology.">
          Proven at Scale
        </SectionTitle>
        {/* <!-- Key Metrics circle --> */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {metrics.map((v, i) => (
            <MetricCard isCircle key={i} label={v.label}>
              {v.children}
            </MetricCard>
          ))}
        </div>
      </div>
    </section>
  );
}
