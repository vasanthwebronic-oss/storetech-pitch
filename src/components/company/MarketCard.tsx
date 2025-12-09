import React from "react";
import AntdIconGen from "../common/AntdIconGen";

const COLORS = {
  blue: { bg: "bg-blue-600", text: "text-blue-400" },
  green: { bg: "bg-green-600", text: "text-green-400" },
  orange: { bg: "bg-orange-600", text: "text-orange-400" },
} as const;

export type ColorKey = keyof typeof COLORS;

export type MarketItem = {
  title: string;
  icon: React.ComponentType;
  color: ColorKey;
  stats: {
    label: string;
    value: string;
  }[];
};

export default function MarketCard({ title, icon, color, stats }: MarketItem) {
  return (
    <div className="case-study-card p-8 rounded-2xl animate-on-scroll">
      <div className="text-center mb-6">
        <div
          className={`w-16 h-16 ${COLORS[color].bg} rounded-full flex items-center justify-center mx-auto mb-4`}
        >
          <AntdIconGen
            icon={icon}
            style={{ fontSize: "25px", strokeWidth: 2 }}
          />
        </div>

        <h3 className="text-xl font-bold mb-2">{title}</h3>
      </div>

      <div className="space-y-4">
        {stats.map((v, i) => (
          <div key={i} className="flex justify-between">
            <span>{v.label}</span>
            <span className={`font-semibold ${COLORS[color].text}`}>
              {v.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
