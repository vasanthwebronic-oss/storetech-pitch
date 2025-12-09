import SectionTitle from "@/components/common/SectionTitle";

export default function CompetitiveAdvantage() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle description="Our unique approach to hardware consolidation gives us a sustainable competitive advantage.">
          Why StoreTech Wins
        </SectionTitle>

        <div className="comparison-matrix animate-on-scroll">
          <div className="overflow-auto lg:overflow-visible rounded-xl ">
            <table className="w-full text-left rounded-xl ">
              <thead>
                <tr className="border-b border-gray-700 bg-gray-900/50">
                  <th className="pb-4 pr-8 pl-6 pt-6 text-base font-semibold text-gray-200 uppercase tracking-wider">
                    Solution
                  </th>
                  <th className="pb-4 px-8 pt-6 text-base font-semibold text-gray-200 uppercase tracking-wider">
                    Deployment Time
                  </th>
                  <th className="pb-4 px-8 pt-6 text-base font-semibold text-gray-200 uppercase tracking-wider">
                    Cost per Store
                  </th>
                  <th className="pb-4 px-8 pt-6 text-base font-semibold text-gray-200 uppercase tracking-wider">
                    Hardware Consolidation
                  </th>
                  <th className="pb-4 px-8 pt-6 text-base font-semibold text-gray-200 uppercase tracking-wider">
                    Modular Platform
                  </th>
                </tr>
              </thead>
              <tbody className="rounded-xl">
                <tr
                  className="comparison-row border-b border-gray-800/50 hover:bg-gray-800/20 transition-colors duration-200"
                  data-category="competitor"
                >
                  <td className="py-5 pr-8 pl-6">
                    <div className="font-semibold text-white">Amazon Just Walk Out</div>
                    <div className="text-sm text-gray-400 mt-1">
                      Computer vision solution
                    </div>
                  </td>
                  <td className="py-5 px-8">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-500/10 text-red-400 border border-red-500/20">
                      6-12 months
                    </span>
                  </td>
                  <td className="py-5 px-8">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-500/10 text-red-400 border border-red-500/20">
                      $50K-$100K
                    </span>
                  </td>
                  <td className="py-5 px-8">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-500/10 text-red-400 border border-red-500/20">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      Complex setup
                    </span>
                  </td>
                  <td className="py-5 px-8">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-500/10 text-red-400 border border-red-500/20">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      Single format
                    </span>
                  </td>
                </tr>
                <tr
                  className="comparison-row border-b border-gray-800/50 hover:bg-gray-800/20 transition-colors duration-200"
                  data-category="competitor"
                >
                  <td className="py-5 pr-8 pl-6">
                    <div className="font-semibold text-white">Traditional SCO</div>
                    <div className="text-sm text-gray-400 mt-1">
                      Legacy self-checkout
                    </div>
                  </td>
                  <td className="py-5 px-8">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-500/10 text-red-400 border border-red-500/20">
                      3-6 months
                    </span>
                  </td>
                  <td className="py-5 px-8">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-500/10 text-red-400 border border-red-500/20">
                      $15K-$50K
                    </span>
                  </td>
                  <td className="py-5 px-8">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-500/10 text-red-400 border border-red-500/20">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      Multiple vendors
                    </span>
                  </td>
                  <td className="py-5 px-8">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-500/10 text-red-400 border border-red-500/20">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      Checkout only
                    </span>
                  </td>
                </tr>
                <tr
                  className="comparison-row border-b border-gray-800/50 hover:bg-gray-800/20 transition-colors duration-200"
                  data-category="competitor"
                >
                  <td className="py-5 pr-8 pl-6">
                    <div className="font-semibold text-white">CV Startups</div>
                    <div className="text-sm text-gray-400 mt-1">
                      Computer vision only
                    </div>
                  </td>
                  <td className="py-5 px-8">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                      2-4 months
                    </span>
                  </td>
                  <td className="py-5 px-8">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                      $20K-$40K
                    </span>
                  </td>
                  <td className="py-5 px-8">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      Limited
                    </span>
                  </td>
                  <td className="py-5 px-8">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-500/10 text-red-400 border border-red-500/20">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      Single focus
                    </span>
                  </td>
                </tr>
                <tr
                  className="comparison-row bg-linear-to-r rounded-xl from-blue-900/30 to-blue-800/20 border-blue-500/50 hover:border-blue-400/70 transition-all duration-300"
                  data-category="storetech"
                >
                  <td className="py-6 pr-8 pl-6">
                    <div className="flex items-center">
                      <div className="shrink-0 w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                      <div>
                        <div className="font-bold text-blue-400 text-lg">StoreTech</div>
                        <div className="text-sm text-gray-300 mt-1">
                          Consolidated platform
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-6 px-8">
                    <span className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-bold bg-green-500/15 text-green-400 border border-green-500/30 shadow-lg shadow-green-500/10">
                      10 days
                    </span>
                  </td>
                  <td className="py-6 px-8">
                    <span className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-bold bg-green-500/15 text-green-400 border border-green-500/30 shadow-lg shadow-green-500/10">
                      $5K-$8K
                    </span>
                  </td>
                  <td className="py-6 px-8">
                    <span className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-bold bg-green-500/15 text-green-400 border border-green-500/30 shadow-lg shadow-green-500/10">
                      <svg className="w-6 h-6 mr-2 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Single terminal
                    </span>
                  </td>
                  <td className="py-6 px-8">
                    <span className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-bold bg-green-500/15 text-green-400 border border-green-500/30 shadow-lg shadow-green-500/10">
                      <svg className="w-6 h-6 mr-2 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Full ecosystem
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <div className="flex items-center text-sm">
              <svg className="w-4 h-4 mr-2 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-400">Competitor disadvantage</span>
            </div>
            <div className="flex items-center text-sm">
              <svg className="w-4 h-4 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-400">Partial solution</span>
            </div>
            <div className="flex items-center text-sm">
              <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-400">StoreTech advantage</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}