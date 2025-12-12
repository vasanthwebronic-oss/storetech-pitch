"use client";

import { autoTypedType } from "@/data/metrics";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function AutoTyped({
  strings,
  color,
  cursorChar,
}: autoTypedType) {
  const typedRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings,
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar,
    });

    return () => typed.destroy();
  }, []);

  return (
    <div className={`hero-typed text-lg ${color} mb-4 h-8`}>
      <span ref={typedRef}></span>
    </div>
  );
}
