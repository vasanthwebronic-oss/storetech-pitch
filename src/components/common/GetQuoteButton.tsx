"use client";

import { useRouter } from "next/navigation";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { moduleKeys } from "@/data/productConfigiData";

type Props = {
  modules: string[];
  children?: React.ReactNode;
};

export default function GetQuoteButton({ modules, children }: Props) {
  const router = useRouter();
  const { set } = useLocalStorage<string[]>("selectedModules", []);

  const handleClick = () => {
    set(modules); // store modules in localStorage
    router.push("/#getQuote"); // navigate + scroll
  };

  return (
    <button
      onClick={handleClick}
      className="btn-primary cursor-pointer px-6 py-2 rounded-lg text-white font-medium"
    >
      {children ? children : "Request Quotation"}
    </button>
  );
}
