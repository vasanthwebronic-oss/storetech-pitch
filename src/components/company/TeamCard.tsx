

 const COLORS = {
  blue: { linear: "bg-linear-to-br from-blue-600 to-blue-800", text: "text-blue-400" },
  green: { linear: "bg-linear-to-br from-green-600 to-green-800", text: "text-green-400" },
  orange: { linear: "bg-linear-to-br from-orange-600 to-orange-800", text: "text-orange-400" },
} as const;

type colorKeys = keyof typeof COLORS

export type teamType = {
    name: string;
    role: string;
    description: string;
    color: colorKeys;
}

export default function TeamCard({
  name,
  role,
  description,
  color,
}: teamType) {

  return (
    <div className="team-card p-6 rounded-xl animate-on-scroll">
      <div className="text-center">
        <div
          className={`w-20 h-20 ${COLORS[color].linear} rounded-full mx-auto mb-4 flex items-center justify-center`}
        >
          <span className="text-2xl font-bold">{name.slice(0, 1)}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <div className={`${COLORS[color].text} font-semibold mb-3`}>{role}</div>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
}
