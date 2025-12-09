import SectionTitle from "@/components/common/SectionTitle";
import Link from "next/link";

export default function CalltoAction() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <SectionTitle description="Partner with the proven leader in unmanned retail technology. Scale across formats with a single platform.">
          Join the Revolution
        </SectionTitle>
        <div className="animate-on-scroll">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#investment"
              className="btn-primary px-8 py-4 rounded-lg text-white font-semibold text-lg"
            >
              View Investment Opportunity
            </Link>
            <Link
              href="/products"
              className="bg-gray-700 hover:bg-gray-600 px-8 py-4 rounded-lg text-white font-semibold text-lg transition-colors"
            >
              Explore Our Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
