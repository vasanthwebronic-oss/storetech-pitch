import Image from "next/image";
import Link from "next/link";
import AutoTyped from "../../components/common/AutoTyped";
import ParticleBackground from "../../components/home/ParticleBackground";

export default function HeroBanner() {
  const autoTypeData = {
    strings: [
      "170 stores deployed across Europe",
      "50M+ transactions processed",
      "99.7% transaction success rate",
      "Deploy in just 10 days",
    ],
    color: "text-blue-500",
    cursorChar: "|",
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center hero-bg"
    >
      <ParticleBackground />
      <div className="content-layer max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="hero-title font-display font-bold text-5xl lg:text-7xl mb-6 leading-tight">
              The Future of
              <span className="gradient-text block">Unmanned Retail</span>
            </h1>

            <p className="hero-subtitle text-2xl lg:text-2xl mb-8 text-gray-300 leading-relaxed">
              One platform. Many formats. Configure once. Scale everywhere.
            </p>

            <div className="hero-metrics mb-8">
              <AutoTyped
                strings={autoTypeData.strings}
                color={autoTypeData.color}
                cursorChar={autoTypeData.cursorChar}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#investment"
                className="btn-primary px-8 py-4 rounded-lg text-white font-semibold text-lg"
              >
                View Investment Opportunity
              </Link>
              <Link
                href="products.html"
                className="btn-secondary px-8 py-4 rounded-lg text-white font-semibold text-lg"
              >
                Explore Solutions
              </Link>
            </div>
          </div>

          <div className="relative">
            <img
              src="resources/hero-main.jpg"
              alt="Futuristic Unmanned Retail Store"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
