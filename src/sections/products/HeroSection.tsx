import SectionTitle from "@/components/common/SectionTitle"

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle type="Hero" description="One platform with six integrated modules. Start with any product and expand as your business grows.">
          Complete Product Suite
        </SectionTitle>

        <div className="animate-on-scroll">
          <img
            src="resources/products-showcase.jpg"
            alt="StoreTech Product Suite"
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
