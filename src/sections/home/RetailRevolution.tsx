import SectionTitle from "@/components/common/SectionTitle";

export default function RetailRevolution() {
  const retailRevolutionData: RetailCardType[] = [
    {
      title: "The Old Way",
      description:
        "Legacy setups drain time and budget with fragmented vendors and long deployment cycles.",
      textcolor: "text-red-400",
      bgcolor: "bg-red-400",
      points: [
        "Multiple hardware vendors",
        "Complex integration projects",
        "3–6 month deployment cycles",
        "$15K–$50K per location",
      ],
    },
    {
      title: "The StoreTech Way",
      description:
        "A unified, modern platform that simplifies deployment and cuts total cost per store.",
      textcolor: "text-green-400",
      bgcolor: "bg-green-400",
      points: [
        "Single consolidated platform",
        "Plug-and-play deployment",
        "10-day average deployment",
        "$5K–$8K per location",
      ],
    },
  ];

  return (
    <section className="py-20 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle description="Traditional retail technology is complex, expensive, and slow to deploy. StoreTech consolidates everything into a single platform.">
          The Retail Revolution
        </SectionTitle>

        <div className="mt-12 grid gap-10 lg:gap-14 lg:grid-cols-2 items-start">
          {retailRevolutionData.map((v, i) => (
            <RevolutionCard key={i} {...v} />
          ))}
        </div>
      </div>
    </section>
  );
}

type RetailCardType = {
  title: string;
  description: string;
  textcolor: string;
  bgcolor: string;
  points: string[];
};
function RevolutionCard({
  title,
  description,
  textcolor,
  bgcolor,
  points,
}: RetailCardType) {
  return (
    <div className="animate-on-scroll rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-lg shadow-black/5">
      <h3
        className={`text-2xl md:text-3xl font-bold mb-4 md:mb-6 ${textcolor}`}
      >
        {title}
      </h3>
      <p className="text-sm md:text-base mb-6 opacity-80">{description}</p>

      <div className="space-y-3 md:space-y-4">
        {points.map((v) => (
          <div key={v} className="flex items-start gap-3">
            <div
              className={`mt-1 w-2.5 h-2.5 rounded-full ${bgcolor} shrink-0`}
            />
            <span>{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
