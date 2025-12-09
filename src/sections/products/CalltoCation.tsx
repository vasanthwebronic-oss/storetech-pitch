import SectionTitle from "@/components/common/SectionTitle";

export default function CalltoCation() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <SectionTitle type="Minimal" description="Choose a package, configure your solution, and deploy in just 10 days.">
          Ready to Get Started?
        </SectionTitle>
        <div className="animate-on-scroll">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="index.html"
              className="btn-primary px-8 py-4 rounded-lg text-white font-semibold text-lg"
            >
              Configure Your Solution
            </a>
            <a
              href="company.html"
              className="bg-gray-700 hover:bg-gray-600 px-8 py-4 rounded-lg text-white font-semibold text-lg transition-colors"
            >
              View Case Studies
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
