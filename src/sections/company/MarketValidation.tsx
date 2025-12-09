import SectionTitle from "@/components/common/SectionTitle";
import MarketCard, { MarketItem} from "@/components/company/MarketCard";
import {
  ThunderboltOutlined,
  CheckCircleOutlined,
  DollarOutlined,
} from "@ant-design/icons";


export default function MarketValidation() {
  // ADD the color in "COlORS" const befor use it here from  "@/components/company/MarketCard"
  const caseStudyData:MarketItem[] = [
    {
      title: "Peak Performance",
      icon: ThunderboltOutlined,
      color: "blue",
      stats: [
        { label: "Black Friday 2024", value: "12,000 tx/hour" },
        { label: "Average Payment Time", value: "18 seconds" },
        { label: "Hardware Failure Rate", value: "0.8%" },
        { label: "Critical Response Time", value: "< 2 hours" },
      ],
    },
    {
      title: "Reliability Metrics",
      icon: CheckCircleOutlined,
      color: "green",
      stats: [
        { label: "System Uptime", value: "99.7%" },
        { label: "Transaction Success", value: "99.7%" },
        { label: "Data Accuracy", value: "99.9%" },
        { label: "Security Incidents", value: "Zero" },
      ],
    },
    {
      title: "Business Impact",
      icon: DollarOutlined,
      color: "orange",
      stats: [
        { label: "Labor Cost Reduction", value: "60-70%" },
        { label: "Revenue Uplift", value: "35-45%" },
        { label: "Deployment Time", value: "10 days avg" },
        { label: "Cost Savings", value: "60% vs traditional" },
      ],
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle description="Our technology is battle-tested with proven results across multiple retail formats.">
          Market Validation
        </SectionTitle>
        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudyData.map((v,i)=>(
            <MarketCard key={i} {...v} />
          ))}
        </div>
      </div>
    </section>
  );
}

