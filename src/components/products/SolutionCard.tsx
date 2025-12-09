export type SolutionTypes = {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  color: string;
  priceLabel: string;
  features: string[];
  buttonLabel: string;
  featured: boolean;
};
export default function SolutionCard({
  id,
  title,
  subtitle,
  price,
  color,
  priceLabel,
  features,
  buttonLabel,
  featured,
}: SolutionTypes) {
  return (
    <div
      className={`package-card ${
        featured ? "featured" : ""
      } p-8 rounded-2xl animate-on-scroll`}
    >
      <div className="text-center mb-6">
        {featured && (
          <div className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">
            Most Popular
          </div>
        )}

        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <div className={`${color} font-semibold`}>{subtitle}</div>
      </div>

      <div className="text-center mb-6">
        <div className="text-3xl font-bold gradient-text mb-2">${price}</div>
        <div className="text-gray-400">{priceLabel}</div>
      </div>

      <ul className="feature-list mb-8 space-y-3">
        {features.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>

      <div className="text-center">
        <button className="btn-primary w-full py-3 rounded-lg text-white font-medium">
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}
