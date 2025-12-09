
type ROIKeys = "stores" | "avgRevenue" | "laborHours" | "laborRate";

type roiInputType = {
  children: React.ReactNode;
  id: ROIKeys;
  value: number;
  min: number;
  max: number;
  setroiInput: React.Dispatch<React.SetStateAction<Record<ROIKeys, number>>>;
};
export function InputROI({
  children,
  id,
  min,
  max,
  setroiInput,
  value,
}: roiInputType) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{children}</label>
      <input
        type="number"
        id={id}
        value={value}
        min={min}
        max={max}
        className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
        onChange={(e) =>
          setroiInput((prev) => ({
            ...prev,
            [id]: Number(e.target.value),
          }))
        }
      />
    </div>
  );
}

export function KeyBenefits({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
      <span>{children}</span>
    </div>
  );
}
