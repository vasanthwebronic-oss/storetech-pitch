import SectionTitle from "@/components/common/SectionTitle";
import EuropeCard from "@/components/company/EuropeCard";


export default function EuropeanDeployment() {
  const caseStudies = [
    {
      title: "24sju Convenience Stores",
      stats: [
        { label: "Stores Launched", value: 80 },
        { label: "Months", value: 18 },
      ],
      bullets: [
        "10-day rollout cadence achieved",
        "65% lower technology costs",
        "40% revenue uplift from extended hours",
      ],
      color: "text-blue-400",
    },
    {
      title: "Tanlux Tanning Studios",
      stats: [
        { label: "Salons", value: 40 },
        { label: "Labor Reduction", value: "70%" },
      ],
      bullets: [
        "Fully unmanned operations",
        "50% revenue increase",
        "80% reduction in no-shows",
      ],
      color: "text-orange-400",
    },
    
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle description="Our platform is proven in production across four European countries, demonstrating scalability and market fit.">
          European Success Story
        </SectionTitle>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <div
              id="deployment-map"
              className="deployment-map p-8 h-96 flex items-center justify-center"
            >
              {/* <!-- Interactive map will be rendered here --> */}
              
            </div>
          </div>

          <div className="animate-on-scroll space-y-8">
            {caseStudies.map((v,i)=>(
                <EuropeCard key={i} title={v.title} stats={v.stats} bullets={v.bullets} color={v.color}  />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


