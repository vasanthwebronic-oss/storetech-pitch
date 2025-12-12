import { contacType } from "@/data/productConfigiData";

export default function ContactInput({
  children,
  id,
  value,
  setcontactData,
  isMultiliine,
}: {
  children: React.ReactNode;
  id: string;
  value: string;
  setcontactData: React.Dispatch<React.SetStateAction<contacType>>;
  isMultiliine?: boolean;
}) {
  const className =
    "w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-blue-500 focus:outline-none";

  if (isMultiliine)
    return (
      <div className="">
        <label className="block text-sm font-medium mb-2 text-start">
          {children}
        </label>
        <textarea
          className={className}
          id={id}
          value={value}
          onChange={(e) =>
            setcontactData((prev) => ({
              ...prev,
              [id]: e.target.value,
            }))
          }
        />
      </div>
    );

  return (
    <div className="">
      <label className="block text-sm font-medium mb-2 text-start">
        {children}
      </label>
      <input
        className={className}
        type="text"
        id={id}
        value={value}
        onChange={(e) =>
          setcontactData((prev) => ({
            ...prev,
            [id]: e.target.value,
          }))
        }
      />
    </div>
  );
}