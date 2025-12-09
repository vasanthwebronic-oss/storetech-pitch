import SectionTitle from "@/components/common/SectionTitle";

export default function CompetitiveAdvantage() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle description="Our unique approach to hardware consolidation gives us a sustainable competitive advantage.">
          Why StoreTech Wins
        </SectionTitle>

        <div className="comparison-matrix animate-on-scroll">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="pb-4 pr-8">Solution</th>
                  <th className="pb-4 px-8">Deployment Time</th>
                  <th className="pb-4 px-8">Cost per Store</th>
                  <th className="pb-4 px-8">Hardware Consolidation</th>
                  <th className="pb-4 px-8">Modular Platform</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  className="comparison-row border-b border-gray-800"
                  data-category="competitor"
                >
                  <td className="py-6 pr-8">
                    <div className="font-semibold">Amazon Just Walk Out</div>
                    <div className="text-sm text-gray-400">
                      Computer vision solution
                    </div>
                  </td>
                  <td className="py-6 px-8 text-red-400">6-12 months</td>
                  <td className="py-6 px-8 text-red-400">$50K-$100K</td>
                  <td className="py-6 px-8 text-red-400">❌ Complex setup</td>
                  <td className="py-6 px-8 text-red-400">❌ Single format</td>
                </tr>
                <tr
                  className="comparison-row border-b border-gray-800"
                  data-category="competitor"
                >
                  <td className="py-6 pr-8">
                    <div className="font-semibold">Traditional SCO</div>
                    <div className="text-sm text-gray-400">
                      Legacy self-checkout
                    </div>
                  </td>
                  <td className="py-6 px-8 text-red-400">3-6 months</td>
                  <td className="py-6 px-8 text-red-400">$15K-$50K</td>
                  <td className="py-6 px-8 text-red-400">
                    ❌ Multiple vendors
                  </td>
                  <td className="py-6 px-8 text-red-400">❌ Checkout only</td>
                </tr>
                <tr
                  className="comparison-row border-b border-gray-800"
                  data-category="competitor"
                >
                  <td className="py-6 pr-8">
                    <div className="font-semibold">CV Startups</div>
                    <div className="text-sm text-gray-400">
                      Computer vision only
                    </div>
                  </td>
                  <td className="py-6 px-8 text-yellow-400">2-4 months</td>
                  <td className="py-6 px-8 text-yellow-400">$20K-$40K</td>
                  <td className="py-6 px-8 text-yellow-400">⚠️ Limited</td>
                  <td className="py-6 px-8 text-red-400">❌ Single focus</td>
                </tr>
                <tr
                  className="comparison-row bg-blue-900/30 border-2 border-blue-500/50 rounded-lg"
                  data-category="storetech"
                >
                  <td className="py-6 pr-8">
                    <div className="font-bold text-blue-400">StoreTech</div>
                    <div className="text-sm text-gray-300">
                      Consolidated platform
                    </div>
                  </td>
                  <td className="py-6 px-8 text-green-400 font-bold">
                    10 days
                  </td>
                  <td className="py-6 px-8 text-green-400 font-bold">
                    $5K-$8K
                  </td>
                  <td className="py-6 px-8 text-green-400 font-bold">
                    ✅ Single terminal
                  </td>
                  <td className="py-6 px-8 text-green-400 font-bold">
                    ✅ Full ecosystem
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
