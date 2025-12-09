import SectionTitle from "@/components/common/SectionTitle";
import TimeLine from "@/components/company/TimeLine";

export default function USExpansion() {
  const timelineData = [
    {
      phase: "Phase 1: Foundation",
      color: "blue",
      timeframe: "Q1-Q2 2025",
      goals: [
        "Target franchisees and regional chains",
        "50 locations, $5M ARR target",
        "Establish US operations and support",
      ],
    },
    {
      phase: "Phase 2: Partnerships",
      color: "orange",
      timeframe: "Q3-Q4 2025",
      goals: [
        "PSP partnerships with Square, Clover, Stripe",
        "$10M ARR through channel partners",
        "Integrated payment solutions",
      ],
    },
    {
      phase: "Phase 3: Scale",
      color: "green",
      timeframe: "2026",
      goals: [
        "National chain partnerships",
        "1,000+ locations target",
        "Anchor customer acquisitions",
      ],
    },
    {
      phase: "Phase 4: Dominate",
      color: "purple",
      timeframe: "2027+",
      goals: [
        "Universities, campuses, hospitality",
        "Higher density, larger ACVs",
        "Market leadership position",
      ],
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle description="Strategic four-phase approach to capture the $11.5B US unmanned retail market.">
          US Market Expansion
        </SectionTitle>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <div className="space-y-8">
              {timelineData.map((v, i) => (
                <TimeLine
                  key={i}
                  phase={v.phase}
                  color={v.color}
                  timeframe={v.timeframe}
                  goals={v.goals}
                />
              ))}
            </div>
          </div>

          <div className="animate-on-scroll">
            <div
              id="financial-projections"
              className="w-full h-96 bg-gray-900/50 rounded-xl p-4"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
