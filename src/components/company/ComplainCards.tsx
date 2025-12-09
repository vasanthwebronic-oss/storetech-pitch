export function ComplianceCard({
  complain,
}: {
  complain: {
    title: string;
    color: string;
    labels: string[];
  };
}) {
  return (
    <div className="animate-on-scroll">
      <h3 className="text-2xl font-bold mb-6">{complain.title}</h3>
      <div className="space-y-4">
        {complain.labels.map((v, i) => (
          <div
            key={i}
            className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-lg"
          >
            <div className={`w-3 h-3 ${complain.color} rounded-full`}></div>
            <span>{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SimpleCard({
  children,
  description,
  className
}: {
  children: React.ReactNode;
  description: string;
 className?:string
}) {
  return (
    <div>
      <div className={`${className} font-semibold mb-2`}>
        {children}
      </div>
      <p className="text-sm text-gray-300">
        {description}
      </p>
    </div>
  );
}