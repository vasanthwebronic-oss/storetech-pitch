"use client";
import SectionTitle from "@/components/common/SectionTitle";
import {
  calculateROI,
  ROICalculatorInput,
  ROICalculatorResult,
} from "@/utils/calculateROI";
import { useEffect, useState } from "react";
import { InputROI, KeyBenefits } from "@/components/home/ROIcomponents";

export default function InvestmentReturns() {
  const [roiInput, setroiInput] = useState<ROICalculatorInput>({
    stores: 5,
    avgRevenue: 1500,
    laborHours: 16,
    laborRate: 25,
  });

  const [result, setresult] = useState<ROICalculatorResult>();
  useEffect(() => {
    const resultData: ROICalculatorResult = calculateROI({ ...roiInput });
    setresult(resultData);
  }, [roiInput]);

  const benefits = [
    "70% reduction in labor costs",
    "40% revenue uplift from extended hours",
    "Reduced shrinkage and waste",
    "Predictive restocking optimization",
  ];

  return (
    <section id="investment" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle description="Calculate your potential ROI with StoreTech's unmanned retail solutions.">
          Investment Returns
        </SectionTitle>

        <div className="roi-calculator bg-gray-900/50 rounded-2xl p-8 backdrop-blur-sm animate-on-scroll">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* <!-- Input Parameters --> */}
            <div>
              <h3 className="text-xl font-bold mb-6">Store Parameters</h3>
              <div className="space-y-6">
                <InputROI
                  id="stores"
                  value={roiInput.stores}
                  min={1}
                  max={1000}
                  setroiInput={setroiInput}
                >
                  Number of Stores
                </InputROI>
                <InputROI
                  id="avgRevenue"
                  value={roiInput.avgRevenue}
                  min={100}
                  max={10000}
                  setroiInput={setroiInput}
                >
                  Average Daily Revenue per Store ($)
                </InputROI>
                <InputROI
                  id="laborHours"
                  value={roiInput.laborHours}
                  min={4}
                  max={24}
                  setroiInput={setroiInput}
                >
                  Daily Labor Hours per Store
                </InputROI>
                <InputROI
                  id="laborRate"
                  value={roiInput.laborRate}
                  min={10}
                  max={100}
                  setroiInput={setroiInput}
                >
                  Hourly Labor Rate ($)
                </InputROI>
              </div>
            </div>

            {/* <!-- Results --> */}
            <div>
              <h3 className="text-xl font-bold mb-6">ROI Analysis</h3>
              <div className="roi-results space-y-6">
                <div className="bg-linear-to-r from-green-900/50 to-green-800/30 p-6 rounded-lg border border-green-500/30">
                  <div className="text-sm text-green-400 mb-1">
                    Annual Savings
                  </div>
                  <div className="annual-savings text-3xl font-bold text-green-400">
                    ${result && Math.ceil(result.totalAnnualSavings).toLocaleString()}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <div className="text-sm text-gray-400 mb-1">
                      Total Investment
                    </div>
                    <div className="total-investment text-xl font-bold">
                      ${result && Math.ceil(result.totalInvestment).toLocaleString()}
                    </div>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <div className="text-sm text-gray-400 mb-1">ROI</div>
                    <div className="roi-percentage text-xl font-bold text-green-400">
                      {result && Math.ceil(result.roiPercentage * 10) / 10}%
                    </div>
                  </div>
                </div>

                <div className="bg-blue-900/30 p-6 rounded-lg border border-blue-500/30">
                  <div className="text-sm text-blue-400 mb-1">
                    Payback Period
                  </div>
                  <div className="payback-period text-2xl font-bold text-blue-400">
                    {result && Math.ceil(result.paybackMonths * 10) / 10} months
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-orange-900/30 rounded-lg border border-orange-500/30">
                <h4 className="font-semibold mb-3 text-orange-400">
                  Key Benefits
                </h4>
                <div className="space-y-2 text-sm">
                  {benefits.map((benefit, i) => (
                    <KeyBenefits key={i}>{benefit}</KeyBenefits>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
