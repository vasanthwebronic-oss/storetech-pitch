import SectionTitle from "@/components/common/SectionTitle";

export default function Contact() {
  const data = [
    {
      title: "Series A",
      label: "$15M Funding Round",
    },
    {
      title: "$500M",
      label: "5-Year Revenue Target",
    },
    {
      title: "18 Months",
      label: "Typical Payback Period",
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <SectionTitle type="Minimal" description="Join the unmanned retail revolution. Deploy in 10 days with 60% cost savings.">
          Ready to Transform Retail?
        </SectionTitle>
        <div className="animate-on-scroll">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {data.map((v) => (
              <RetailCard key={v.title} lable={v.label}>
                {v.title}
              </RetailCard>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:invest@storetech.com"
              className="btn-primary px-8 py-4 rounded-lg text-white font-semibold text-lg"
            >
              Contact Investment Team
            </a>
            <a
              href="/company"
              className="btn-secondary px-8 py-4 rounded-lg text-white font-semibold text-lg"
            >
              View Company Details
            </a>
          </div>

          <div className="mt-8 text-gray-400">
            <p>Suryanarayanan | Partner, StoreTech</p>
            <p>Email: invest@storetech.com | Phone: +91 7200088500</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function RetailCard({
  children,
  lable,
}: {
  children: React.ReactNode;
  lable: string;
}) {
  return (
    <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700">
      <div className="text-2xl font-bold gradient-text mb-2">{children}</div>
      <div className="text-gray-400">{lable}</div>
    </div>
  );
}
