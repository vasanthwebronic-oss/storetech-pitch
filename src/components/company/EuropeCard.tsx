export default function EuropeCard({
  title,
  stats,
  bullets,
  color,
}: {
  title: string;
  stats: (
    | {
        label: string;
        value: number;
      }
    | {
        label: string;
        value: string;
      }
  )[];
  bullets: string[];
  color: string;
}) {
  return (
    <div className="case-study-card p-6 rounded-xl">
      <h3 className={`text-xl font-bold mb-4 ${color}`}>{title}</h3>
      <div className="grid grid-cols-2 gap-4 mb-4">
        {stats.map((v, i) => (
          <div key={i}>
            <div className="text-2xl font-bold">{v.value}</div>
            <div className="text-sm text-gray-400">{v.label}</div>
          </div>
        ))}
      </div>
      <ul className="text-sm text-gray-300 space-y-1">
        {bullets.map((v, i) => (
          <li key={i}>• {v}</li>
        ))}
      </ul>
    </div>
  );
}
