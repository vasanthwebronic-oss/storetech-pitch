import SectionTitle from "@/components/common/SectionTitle";
import SolutionCard, {SolutionTypes} from "@/components/products/SolutionCard";


export default function SolutionPackages() {
  const packages:SolutionTypes[] = [
    {
      id: "A",
      title: "Package A",
      subtitle: "Express Checkout",
      price: 3000,
      color:"text-blue-400",
      priceLabel: "per location",
      features: [
        "Smart Self-Checkout",
        "ERP & Analytics",
        "Basic mobile app",
        "Standard support",
      ],
      buttonLabel: "Choose Package A",
      featured: false,
    },
    {
      id: "B",
      title: "Package B",
      subtitle: "24/7 Unmanned Store",
      price: 6500,
      color:"text-orange-400",
      priceLabel: "per location",
      features: [
        "Smart Self-Checkout",
        "Door Access Control",
        "ERP & Analytics",
        "Mobile Apps",
        "Premium support",
        "Priority deployment",
      ],
      buttonLabel: "Choose Package B",
      featured: true,
    },
    {
      id: "C",
      title: "Package C",
      subtitle: "Corporate Micro-Market",
      price: 8500,
      color:"text-purple-400",
      priceLabel: "per location",
      features: [
        "Smart Self-Checkout",
        "Smart Fridge",
        "ERP & Analytics",
        "Mobile Apps",
        "Corporate billing",
        "Advanced analytics",
      ],
      buttonLabel: "Choose Package C",
      featured: false,
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle description="Pre-configured packages for common use cases. Start with a package and customize as needed.">
            Solution Packages
        </SectionTitle>

        <div className="grid lg:grid-cols-3 gap-8">
           {packages.map(packag=>(
            <SolutionCard key={packag.id} {...packag} />
           ))}
        </div>

        {/* <!-- Custom Package --> */}
        <div className="mt-12 text-center animate-on-scroll">
          <div className="bg-gray-900/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Need Something Custom?</h3>
            <p className="text-gray-400 mb-6">
              Build your own solution package with our modular platform. Mix and
              match products to fit your specific needs.
            </p>
            <a
              href="index.html"
              className="btn-primary px-8 py-3 rounded-lg text-white font-medium"
            >
              Configure Custom Solution
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
