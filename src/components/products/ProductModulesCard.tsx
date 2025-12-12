import { COLORS, moduleCardType } from "@/data/products";
import AntdIconGen from "../common/AntdIconGen";
import GetQuoteButton from "../common/GetQuoteButton";


export default function ProductModulesCard({
  name,
  color,
  module,
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
        <span className={`text-2xl hidden font-bold  ${COLORS[color].text}`}>
          ${price}
        </span>
        {/* <button className="btn-primary px-6 py-2 rounded-lg text-white font-medium">
          Learn More
        </button> */}
        <GetQuoteButton modules={module} />
      </div>
    </div>
  );
}
