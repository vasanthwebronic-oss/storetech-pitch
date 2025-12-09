
export default function TimeLine({
  phase,
  color,
  timeframe,
  goals,
}: {
  phase: string;
  color: string;
  timeframe: string;
  goals: string[];
}) {
    const textColor = `text-${color}-400`
  return (
    <div  className="timeline-item">
      <h3 className={`text-xl font-bold mb-2 ${textColor}`} >
        {phase}
      </h3>
      <p className="text-gray-400 mb-3">{timeframe}</p>
      <ul className="text-sm text-gray-300 space-y-1">
        {goals.map((v,i)=>(
            <li key={i}>• {v}</li>
        ))}
      </ul>
    </div>
  );
}
