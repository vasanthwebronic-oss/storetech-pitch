import EAFeatureCard, { EACardType } from "@/components/products/EAFeatureCard";

export default function ERPMobileApps() {
  const featuresData: EACardType[] = [
    {
      title: "Centralized ERP & Analytics",
      price: 500,
      color: "text-blue-400",
      description:
        "Complete inventory management, sales analytics, and operational dashboard with role-based access control.",
      sections: [
        {
          heading: "Inventory Management",
          items: [
            "Purchase orders & transfers",
            "FEFO expiry tracking",
            "Stock alerts & replenishment",
            "Multi-location support",
          ],
        },
        {
          heading: "Analytics & Reporting",
          items: [
            "Sales analytics dashboard",
            "Tax & margin reporting",
            "Operational KPIs",
            "Audit trails & compliance",
          ],
        },
      ],
    },
    {
      title: "Mobile Customer Apps",
      price: 300,
      color: "text-orange-400",
      description:
        "Complete customer experience with store locator, scan-and-go checkout, wallet, loyalty, and personalized promotions.",
      sections: [
        {
          heading: "Customer Features",
          items: [
            "Store locator & hours",
            "Scan-and-go checkout",
            "Digital wallet & receipts",
            "Loyalty & rewards",
          ],
        },
        {
          heading: "Business Tools",
          items: [
            "Personalized promotions",
            "Push notifications",
            "Staff tools & support",
            "Issue resolution flows",
          ],
        },
      ],
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {featuresData.map((v, i) => (
            <EAFeatureCard key={i} {...v} />
          ))}
        </div>
      </div>
    </section>
  );
}
