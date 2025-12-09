import { ComplianceCard, SimpleCard } from "@/components/company/ComplainCards";

export default function RegulatoryCompliance() {
  const complianceData = {
    security: {
      title: "Security Standards",
      color: "bg-green-400",
      labels: [
        "PCI-DSS Level 1 Compliant",
        "SOC 2 Type II (Targeted)",
        "End-to-End Encryption",
        "Biometric Authentication",
      ],
    },

    privacy: {
      title: "Privacy & Compliance",
      color: "bg-blue-400",
      labels: [
        "GDPR Compliant (EU)",
        "CCPA Compliant (California)",
        "ADA Compliant",
        "Age Verification Systems",
      ],
    },
  };
  type keyType = "security" | "privacy";
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
            Regulatory Compliance
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Enterprise-grade compliance and security standards for global
            deployment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {(Object.keys(complianceData) as keyType[]).map((key) => {
            const complain = complianceData[key];
            return <ComplianceCard key={key} complain={complain} />;
          })}
        </div>

        <div className="mt-12 animate-on-scroll">
          <div className="bg-linear-to-r from-blue-900/50 to-orange-900/50 p-8 rounded-2xl border border-blue-500/30">
            <h3 className="text-xl font-bold mb-4 text-center">
              Food Safety & Quality
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <SimpleCard
                className="text-blue-400"
                description="Continuous temperature tracking with automated alerts"
              >
                Temperature Monitoring
              </SimpleCard>
              <SimpleCard
                className="text-orange-400"
                description="First-expiring-first-out inventory management"
              >
                Expiry Tracking
              </SimpleCard>
              <SimpleCard
                className="text-green-400"
                description="Smart alerts for expired product removal"
              >
                Automated Removal
              </SimpleCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
