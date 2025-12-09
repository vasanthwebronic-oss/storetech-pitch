import AntdIconGen from "../common/AntdIconGen";

const COLORS = {
  blue: { bg: "bg-blue-600", text: "text-blue-400" },
  green: { bg: "bg-green-600", text: "text-green-400" },
  orange: { bg: "bg-orange-600", text: "text-orange-400" },
  cyan: { bg: "bg-cyan-600", text: "text-cyan-400" },
  purple: { bg: "bg-purple-600", text: "text-purple-400" },
} as const;
type colorKeys = keyof typeof COLORS

export type moduleCardType = {
    name: string;
    color: colorKeys;
    antdIcon: React.ComponentType;
    description: string;
    features: string[];
    price: number;
}

export default function ProductModulesCard({
  name,
  color,
  antdIcon,
  description,
  features,
  price,
}: moduleCardType) {
 

  return (
    <div className="product-card p-8 rounded-2xl animate-on-scroll">
      <div className="flex items-center mb-6">
        <div
          className={`w-12 h-12 ${COLORS[color].bg} rounded-lg flex items-center justify-center mr-4`}
        >
          <AntdIconGen icon={antdIcon} style={{ fontSize: 28 }} />
        </div>
        <h3 className="text-2xl font-bold">{name}</h3>
      </div>

      <p className="text-gray-400 mb-6">{description}</p>

      <ul className="feature-list space-y-2 mb-6">
        {features.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>

      <div className="flex justify-between items-center">
        <span className={`text-2xl font-bold  ${COLORS[color].text}`}>${price}</span>
        <button className="btn-primary px-6 py-2 rounded-lg text-white font-medium">
          Learn More
        </button>
      </div>
    </div>
  );
}

