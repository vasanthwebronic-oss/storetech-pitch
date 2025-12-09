import SectionTitle from "@/components/common/SectionTitle";
import TeamCard, {teamType} from "@/components/company/TeamCard";

export default function LeadingTeam() {
 
  const teamData:teamType[] = [
    {
      name: "Suryanarayanan",
      role: "Partner, StoreTech",
      description:
        "Leading business development and strategic partnerships. 15+ years in retail technology and payment solutions.",
      color: "blue",
    },
    {
      name: "Technical Team",
      role: "Engineering & Product",
      description:
        "Expert engineers in IoT, AI/ML, and cloud infrastructure. Former leaders from top tech companies.",
      color: "orange",
    },
    {
      name: "Operations Team",
      role: "Deployment & Support",
      description:
        "24/7 operations team with deep retail experience. Proven track record in large-scale deployments.",
      color: "green",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle description=" Experienced professionals with deep expertise in retail technology,payments, and scaling operations.">
          Leadership Team
        </SectionTitle>

        <div className="grid lg:grid-cols-3 gap-8">
          {teamData.map((v, i) => (
            <TeamCard
              key={i}
              {...v}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
