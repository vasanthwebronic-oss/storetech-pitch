"use client";

import { useEffect, useRef } from "react";
import type { ECharts, EChartsOption } from "echarts";
import SectionTitle from "@/components/common/SectionTitle";
import TimeLine from "@/components/company/TimeLine";

export default function USExpansion() {
  const chartRef = useRef<HTMLDivElement | null>(null);

  const timelineData = [
    {
      phase: "Phase 1: Foundation",
      color: "blue",
      timeframe: "Q1-Q2 2025",
      goals: [
        "Target franchisees and regional chains",
        "50 locations, $5M ARR target",
        "Establish US operations and support",
      ],
    },
    {
      phase: "Phase 2: Partnerships",
      color: "orange",
      timeframe: "Q3-Q4 2025",
      goals: [
        "PSP partnerships with Square, Clover, Stripe",
        "$10M ARR through channel partners",
        "Integrated payment solutions",
      ],
    },
    {
      phase: "Phase 3: Scale",
      color: "green",
      timeframe: "2026",
      goals: [
        "National chain partnerships",
        "1,000+ locations target",
        "Anchor customer acquisitions",
      ],
    },
    {
      phase: "Phase 4: Dominate",
      color: "purple",
      timeframe: "2027+",
      goals: [
        "Universities, campuses, hospitality",
        "Higher density, larger ACVs",
        "Market leadership position",
      ],
    },
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
        legend: {
          data: ["Projected ARR", "Locations"],
          top: 10,
          left: "center",
          textStyle: { color: "#9ca3af" },
        },
        grid: {
          left: 40,
          right: 40,
          top: 90, 
          bottom: 40,
        },
        xAxis: {
          type: "category",
          data: ["2024", "2025", "2026", "2027", "2028"],
          axisLine: { lineStyle: { color: "#4b5563" } },
          axisLabel: { color: "#9ca3af" },
        },
        yAxis: [
          {
            type: "value",
            name: "ARR (M$)",
            axisLine: { show: false },
            splitLine: { lineStyle: { color: "#374151" } },
            axisLabel: { color: "#9ca3af" },
          },
          {
            type: "value",
            name: "Locations",
            axisLine: { show: false },
            splitLine: { show: false },
            axisLabel: { color: "#9ca3af" },
          },
        ],
        series: [
          {
            name: "Projected ARR",
            type: "line",
            smooth: true,
            yAxisIndex: 0,
            areaStyle: { opacity: 0.15 },
            data: [2, 5, 10, 18, 25], // M$ ARR projection
          },
          {
            name: "Locations",
            type: "bar",
            yAxisIndex: 1,
            barWidth: 24,
            data: [50, 150, 400, 800, 1200],
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
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle description="Strategic four-phase approach to capture the $11.5B US unmanned retail market.">
          US Market Expansion
        </SectionTitle>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <div className="space-y-8">
              {timelineData.map((v, i) => (
                <TimeLine
                  key={i}
                  phase={v.phase}
                  color={v.color}
                  timeframe={v.timeframe}
                  goals={v.goals}
                />
              ))}
            </div>
          </div>

          <div className="animate-on-scroll">
            <div
              id="financial-projections"
              ref={chartRef}
              className="w-full h-96 bg-gray-900/50 rounded-xl p-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
