"use client";

import { useEffect, useRef } from "react";
import SectionTitle from "@/components/common/SectionTitle";
import EuropeCard from "@/components/company/EuropeCard";
import type { ECharts, EChartsOption } from "echarts";

export default function EuropeanDeployment() {
  const mapRef = useRef<HTMLDivElement | null>(null);

  const caseStudies = [
    {
      title: "24sju Convenience Stores",
      stats: [
        { label: "Stores Launched", value: 120 },
        { label: "Months", value: 18 },
      ],
      bullets: [
        "65% lower technology costs",
        "40% revenue uplift from extended hours",
      ],
      color: "text-blue-400",
    },
    {
      title: "Tanlux Tanning Studios",
      stats: [
        { label: "Salons", value: 10 },
        { label: "Labor Reduction", value: "70%" },
      ],
      bullets: [
        "Fully unmanned operations",
        "50% revenue increase",
        "80% reduction in no-shows",
      ],
      color: "text-orange-400",
    },
  ];

  useEffect(() => {
  let chart: ECharts | null = null;
  let destroyed = false;

  async function initMap() {
    const echarts = await import("echarts");
    // const europeModule = await import("@/data/maps/europe.geo.json");
    const europeModule = await import("@/data/maps/custom.geo.json");
    const europeGeo: any = (europeModule as any).default ?? europeModule;

    if (!mapRef.current || destroyed) return;

    echarts.registerMap("europe", europeGeo);

    chart = echarts.init(mapRef.current);

    const option: EChartsOption = {
      backgroundColor: "transparent",
      tooltip: { trigger: "item" },
      visualMap: {
        min: 1,
        max: 145,
        left: "left",
        bottom: "20px",
        text: ["High Installs", "Low Installs"],
        calculable: true,
        textStyle: { color: "#ddd" },
        inRange: { color: ["#0ea5e9", "#1d4ed8"] },
      },
      series: [
        {
          name: "Deployments",
          type: "map",
          map: "europe",
          roam: true,
          zoom: 1.3,
          itemStyle: { borderColor: "#4b5563", borderWidth: 1 },
          emphasis: { label: { show: true } },
          data: [
            { name: "Sweden", value: 120 },
            { name: "Norway", value: 30 },
            { name: "Denmark", value: 15 },
            { name: "Finland", value: 5 },
          ],
        },
      ],
    };

    chart.setOption(option);
  }

  initMap();

  const resize = () => chart?.resize();
  window.addEventListener("resize", resize);

  return () => {
    destroyed = true;
    window.removeEventListener("resize", resize);
    chart?.dispose();
  };
}, []);


  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle description="Our platform is proven in production across four European countries, demonstrating scalability and market fit.">
          European Success Story
        </SectionTitle>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <div
              ref={mapRef}
              id="deployment-map"
              className="deployment-map p-4 h-96 bg-gray-900/40 rounded-xl flex items-center justify-center"
            />
          </div>

          <div className="animate-on-scroll space-y-8">
            {caseStudies.map((v, i) => (
              <EuropeCard
                key={i}
                title={v.title}
                stats={v.stats}
                bullets={v.bullets}
                color={v.color}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
