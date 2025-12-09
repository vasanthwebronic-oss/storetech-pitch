"use client";

import { useEffect, useRef } from "react";
import type { ECharts, EChartsOption } from "echarts";
import SectionTitle from "@/components/common/SectionTitle";

export default function MarketOpportunity() {
  const chartRef = useRef<HTMLDivElement | null>(null);

  const countries = [
    { name: "Sweden", stores: 120 },
    { name: "Norway", stores: 30 },
    { name: "Denmark", stores: 15 },
    { name: "Finland", stores: 5 },
  ];

  const phases = [
    {
      phase: "Phase 1: Franchisees & Regional Chains",
      details: "50 locations, $5M ARR target",
    },
    {
      phase: "Phase 2: PSP Partnerships",
      details: "Square, Clover, Stripe integration",
    },
    { phase: "Phase 3: National Chains", details: "1,000+ locations target" },
  ];

  useEffect(() => {
    if (!chartRef.current) return;

    let chart: ECharts | null = null;
    let destroyed = false;

    const initChart = async () => {
      const echarts = await import("echarts");

      if (!chartRef.current || destroyed) return;

      chart = echarts.init(chartRef.current);

      const option: EChartsOption = {
        backgroundColor: "transparent",
        textStyle: {
          color: "#e5e7eb",
        },
        tooltip: {
          trigger: "axis",
        },
        grid: {
          left: 40,
          right: 20,
          top: 40,
          bottom: 40,
        },
        xAxis: {
          type: "category",
          data: ["2023", "2024", "2025", "2026", "2027", "2028"],
          axisLine: { lineStyle: { color: "#4b5563" } },
          axisLabel: { color: "#9ca3af" },
        },
        yAxis: {
          type: "value",
          name: "Market Size (Billion $)",
          axisLine: { show: false },
          splitLine: { lineStyle: { color: "#374151" } },
          axisLabel: { color: "#9ca3af" },
        },
        series: [
          {
            name: "Unmanned Retail",
            type: "line",
            smooth: true,
            areaStyle: { opacity: 0.15 },
            data: [1.2, 2.1, 3.4, 5.0, 7.2, 10.0],
          },
        ],
      };

      chart.setOption(option);
    };

    initChart();

    const handleResize = () => {
      chart?.resize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      destroyed = true;
      window.removeEventListener("resize", handleResize);
      chart?.dispose();
    };
  }, []);

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle description="The unmanned retail market is experiencing explosive growth. StoreTech is positioned to capture significant market share.">
          Market Opportunity
        </SectionTitle>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Chart */}
          <div className="animate-on-scroll">
            <div
              id="market-growth-chart"
              ref={chartRef}
              className="w-full h-96 bg-gray-900/50 rounded-xl p-4"
            />
          </div>

          {/* Right side cards */}
          <div className="animate-on-scroll space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">European Success</h3>
              <div className="space-y-4">
                {countries.map((v, i) => (
                  <MarketCardOne key={i} {...v} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">US Expansion Strategy</h3>
              <div className="space-y-3">
                {phases.map((v, i) => (
                  <MarketCardTwo key={i} {...v} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MarketCardOne({ name, stores }: { name: string; stores: number }) {
  return (
    <div className="flex justify-between items-center">
      <span>{name}</span>
      <span className="text-blue-400 font-semibold">{stores}</span>
    </div>
  );
}

function MarketCardTwo({
  phase,
  details,
}: {
  phase: string;
  details: string;
}) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <div className="font-semibold text-blue-400">{phase}</div>
      <div className="text-sm text-gray-400">{details}</div>
    </div>
  );
}
