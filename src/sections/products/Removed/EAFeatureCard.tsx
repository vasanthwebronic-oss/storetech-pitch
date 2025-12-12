export type EACardType = {
  title: string;
  price: number;
  color: string;
  description: string;
  sections: {
    heading: string;
    items: string[];
  }[];
};

export default function EAFeatureCard({
  title,
  price,
  color,
  description,
  sections,
}: EACardType) {
  return (
    <div className="animate-on-scroll">
      <h2 className="font-display text-4xl font-bold mb-6">{title}</h2>
      <p className="text-gray-400 text-lg mb-8">{description}</p>

      <div className="grid grid-cols-2 gap-6">
        {sections.map((v, i) => (
          <div key={i}>
            <h4 className={`font-semibold mb-3 ${color}`}>{v.heading}</h4>
            <ul className="text-sm text-gray-400 space-y-1">
              {v.items.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <span className={`text-2xl font-bold mr-4 ${color} `}>${price}</span>
        <button className="btn-primary px-6 py-3 rounded-lg text-white font-medium">
          Get Started
        </button>
      </div>
    </div>
  );
}
