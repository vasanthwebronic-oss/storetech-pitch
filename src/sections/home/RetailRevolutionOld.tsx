import SectionTitle from "@/components/common/SectionTitle";

export default function RetailRevolution() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle description="Traditional retail technology is complex, expensive, and slow to deploy. StoreTech consolidates everything into a single platform.">
          The Retail Revolution
        </SectionTitle>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold mb-6 text-red-400">
              The Old Way
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span>Multiple hardware vendors</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span>Complex integration projects</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span>3-6 month deployment cycles</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span>$15K-$50K per location</span>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold mb-6 text-green-400">
              The StoreTech Way
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Single consolidated platform</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Plug-and-play deployment</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>10-day average deployment</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>$5K-$8K per location</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
