"use client"
import { useEffect } from "react";

interface secTitle {
  children: React.ReactNode;
  description: string;
}

export default function SectionTitle({
  children,
  description,
}: secTitle) {

  return (
    <div className="text-center mb-16 animate-on-scroll">
      <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6">
        {children}
      </h1>
      <p className="text-xl text-gray-400 max-w-3xl mx-auto">{description}</p>
    </div>
  );
}
