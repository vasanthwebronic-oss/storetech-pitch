"use client";

import { useState, useEffect, useCallback } from "react";
import { safeGet, safeSet, safeRemove } from "@/lib/local";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);

  // Load on mount
  useEffect(() => {
    const stored = safeGet<T>(key);
    if (stored !== null) setValue(stored);
  }, [key]);

  // Update both React state and localStorage
  const set = useCallback(
    (v: T | ((prev: T) => T)) => {
      const next = typeof v === "function" ? (v as (prev: T) => T)(value) : v;
      setValue(next);
      safeSet<T>(key, next);
    },
    [value, key]
  );

  const remove = useCallback(() => {
    safeRemove(key);
    setValue(initialValue);
  }, [key, initialValue]);

  return { value, set, remove };
}
