export default function MetricCard({
  children,
  label,
  isCircle,
}: {
  children: React.ReactNode;
  label: string;
  isCircle?: boolean;
}) {
  if (isCircle) {
    return (
      <div className="text-center animate-on-scroll">
        <div className="metric-circle w-24 h-24 mx-auto mb-4 flex items-center justify-center">
          <div className="relative z-10 text-2xl font-bold gradient-text">
            {children}
          </div>
        </div>
        <div className="text-gray-400">{label}</div>
      </div>
    );
  }

  return (
    <div className="metric-card p-6 rounded-xl text-center animate-on-scroll">
      <div className="text-3xl font-bold gradient-text mb-2">{children}</div>
      <div className="text-gray-400">{label}</div>
    </div>
  );
}
