export type SolutionTypes = {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  features: string[];
  buttonLabel: string;
  featured: boolean;
  price?: number;
  priceLabel?: string;
};
export default function SolutionCard({
  id,
  title,
  subtitle,
  color,
  features,
  buttonLabel,
  featured,
  price,
  priceLabel,
}: SolutionTypes) {
  return (
    <div
      className={`package-card flex flex-col ${
        featured ? "featured overflow-hidden" : ""
      } px-8 py-12 rounded-2xl animate-on-scroll`}
    >
      <div className="text-center mb-6">
        {featured && (
          <div 
          style={{ clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)"}}
          className="bg-orange-600  absolute top-0 w-full left-0 text-white px-3 py-3  text-sm font-semibold mb-2">
            Most Popular
          </div>
        )}

        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <div className={`${color} font-semibold`}>{subtitle}</div>
      </div>

      {price && (
        <div className="text-center mb-6">
          <div className="text-3xl font-bold gradient-text mb-2">${price}</div>
          <div className="text-gray-400">{priceLabel}</div>
        </div>
      )}

      <ul className="feature-list mb-8 space-y-3">
        {features.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>

      <div className="text-center mt-auto  ">
        <button className="btn-primary w-full py-3 rounded-lg text-white font-medium cursor-pointer">
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}
