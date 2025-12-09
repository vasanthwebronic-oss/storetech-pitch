import SectionTitle from "@/components/common/SectionTitle";
import TableRow from "@/components/common/TableRow";

export default function TechnicalSpecifications() {
  const specis = {
    specification: [
      "Hardware Platform",
      "Payment Processing",
      "Connectivity",
      "Security",
      "Compliance",
      "Integration",
      "Support",
    ],
    details: [
      "PAX IM30 Payment Terminal with Android OS",
      "PCI-DSS Level 1 compliant with tokenization",
      "4G Cellular, Wi-Fi, Ethernet with offline capability",
      "End-to-end encryption, biometric authentication",
      "GDPR/CCPA, ADA compliant, age verification ready",
      "RESTful APIs, webhooks, third-party connectors",
      "24/7 monitoring, <2 hour critical response",
    ],
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle description="Enterprise-grade technology built for scale, security, and reliability.">
          Technical Specifications
        </SectionTitle>

        <div className="comparison-table rounded-2xl overflow-hidden animate-on-scroll">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <TableRow 
                  rowData={["Specification", "Details"]} 
                  isHead 
                />
              </thead>

              <tbody>
                {specis.specification.map((spec, i) => (
                  <TableRow
                    key={i}
                    rowData={[spec, specis.details[i]]}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
