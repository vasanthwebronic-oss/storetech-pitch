"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import anime from "animejs/lib/anime.es.js";
import SectionTitle from "@/components/common/SectionTitle";

type ModuleKey =
  | "selfCheckout"
  | "vending"
  | "fridge"
  | "doorAccess"
  | "erp"
  | "mobile";

type ModuleConfig = {
  name: string;
  cost: number;
  selected: boolean;
};

type ModulesState = Record<ModuleKey, ModuleConfig>;

const initialModules: ModulesState = {
  selfCheckout: { name: "Smart Self-Checkout", cost: 2500, selected: false },
  vending: { name: "Smart Vending", cost: 1800, selected: false },
  fridge: { name: "Smart Fridge", cost: 3200, selected: false },
  doorAccess: { name: "Door Access Control", cost: 800, selected: false },
  erp: { name: "ERP & Analytics", cost: 500, selected: false },
  mobile: { name: "Mobile Apps", cost: 300, selected: false },
};

type PresetKey = "express" | "unmanned" | "corporate" | "complete";

const presets: Record<PresetKey, ModuleKey[]> = {
  express: ["selfCheckout", "erp"],
  unmanned: ["selfCheckout", "doorAccess", "erp", "mobile"],
  corporate: ["selfCheckout", "fridge", "erp"],
  complete: Object.keys(initialModules) as ModuleKey[],
};

const TRADITIONAL_COST = 25000;

export default function ProductConfigurator() {
  const [modules, setModules] = useState<ModulesState>(initialModules);

  // numeric total based on selected modules
  const total = useMemo(
    () =>
      Object.values(modules)
        .filter((m) => m.selected)
        .reduce((sum, m) => sum + m.cost, 0),
    [modules]
  );

  const savings = useMemo(
    () => TRADITIONAL_COST - total,
    [total]
  );

  // animated display value using anime.js
  const [displayTotal, setDisplayTotal] = useState<number>(0);
  const prevTotalRef = useRef<number>(0);

  useEffect(() => {
    const from = prevTotalRef.current;
    const to = total;

    anime({
      targets: { value: from },
      value: to,
      duration: 500,
      easing: "easeOutQuad",
      round: 1,
      update: (anim: any) => {
        const val = anim.animations[0].currentValue as number;
        setDisplayTotal(val);
      },
    });

    prevTotalRef.current = total;
  }, [total]);

  const handleToggleModule = (key: ModuleKey) => {
    setModules((prev) => ({
      ...prev,
      [key]: { ...prev[key], selected: !prev[key].selected },
    }));

    // selection "bounce" animation using anime.js
    const el = document.querySelector(
      `.product-configurator [data-module="${key}"]`
    ) as HTMLElement | null;

    if (el) {
      anime({
        targets: el,
        scale: [1, 1.1, 1],
        duration: 300,
        easing: "easeOutElastic(1, .8)",
      });
    }
  };

  const applyPreset = (preset: PresetKey) => {
    const moduleKeys = presets[preset];

    setModules((prev) => {
      const next: ModulesState = { ...prev };
      (Object.keys(next) as ModuleKey[]).forEach((key) => {
        next[key] = {
          ...next[key],
          selected: moduleKeys.includes(key),
        };
      });
      return next;
    });
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle description="Configure your unmanned retail solution with our modular platform. Start with any product and expand as you grow.">
          Build Your Solution
        </SectionTitle>

        <div className="product-configurator bg-gray-900/50 rounded-2xl p-8 backdrop-blur-sm animate-on-scroll">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* <!-- Module Selection --> */}
            <div>
              <h3 className="text-xl font-bold mb-6">Select Modules</h3>
              <div className="space-y-4">
                <div
                  className={`module-toggle bg-gray-800 p-4 rounded-lg border-2 border-gray-700 ${
                    modules.selfCheckout.selected ? "selected" : ""
                  }`}
                  data-module="selfCheckout"
                  onClick={() => handleToggleModule("selfCheckout")}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Smart Self-Checkout</span>
                    <span className="text-blue-400">$2,500</span>
                  </div>
                </div>
                <div
                  className={`module-toggle bg-gray-800 p-4 rounded-lg border-2 border-gray-700 ${
                    modules.vending.selected ? "selected" : ""
                  }`}
                  data-module="vending"
                  onClick={() => handleToggleModule("vending")}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Smart Vending</span>
                    <span className="text-blue-400">$1,800</span>
                  </div>
                </div>
                <div
                  className={`module-toggle bg-gray-800 p-4 rounded-lg border-2 border-gray-700 ${
                    modules.fridge.selected ? "selected" : ""
                  }`}
                  data-module="fridge"
                  onClick={() => handleToggleModule("fridge")}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Smart Fridge</span>
                    <span className="text-blue-400">$3,200</span>
                  </div>
                </div>
                <div
                  className={`module-toggle bg-gray-800 p-4 rounded-lg border-2 border-gray-700 ${
                    modules.doorAccess.selected ? "selected" : ""
                  }`}
                  data-module="doorAccess"
                  onClick={() => handleToggleModule("doorAccess")}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Door Access Control</span>
                    <span className="text-blue-400">$800</span>
                  </div>
                </div>
                <div
                  className={`module-toggle bg-gray-800 p-4 rounded-lg border-2 border-gray-700 ${
                    modules.erp.selected ? "selected" : ""
                  }`}
                  data-module="erp"
                  onClick={() => handleToggleModule("erp")}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">ERP & Analytics</span>
                    <span className="text-blue-400">$500</span>
                  </div>
                </div>
                <div
                  className={`module-toggle bg-gray-800 p-4 rounded-lg border-2 border-gray-700 ${
                    modules.mobile.selected ? "selected" : ""
                  }`}
                  data-module="mobile"
                  onClick={() => handleToggleModule("mobile")}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Mobile Apps</span>
                    <span className="text-blue-400">$300</span>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Preset Configurations --> */}
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Start</h3>
              <div className="space-y-4">
                <button
                  className="preset-btn w-full bg-gray-800 p-4 rounded-lg text-left hover:bg-gray-700 transition-colors"
                  data-preset="express"
                  type="button"
                  onClick={() => applyPreset("express")}
                >
                  <div className="font-semibold mb-1">Express Checkout</div>
                  <div className="text-sm text-gray-400">
                    Basic self-checkout setup
                  </div>
                </button>
                <button
                  className="preset-btn w-full bg-gray-800 p-4 rounded-lg text-left hover:bg-gray-700 transition-colors"
                  data-preset="unmanned"
                  type="button"
                  onClick={() => applyPreset("unmanned")}
                >
                  <div className="font-semibold mb-1">24/7 Unmanned Store</div>
                  <div className="text-sm text-gray-400">
                    Complete unmanned solution
                  </div>
                </button>
                <button
                  className="preset-btn w-full bg-gray-800 p-4 rounded-lg text-left hover:bg-gray-700 transition-colors"
                  data-preset="corporate"
                  type="button"
                  onClick={() => applyPreset("corporate")}
                >
                  <div className="font-semibold mb-1">
                    Corporate Micro-Market
                  </div>
                  <div className="text-sm text-gray-400">
                    Office building solution
                  </div>
                </button>
                <button
                  className="preset-btn w-full bg-gray-800 p-4 rounded-lg text-left hover:bg-gray-700 transition-colors"
                  data-preset="complete"
                  type="button"
                  onClick={() => applyPreset("complete")}
                >
                  <div className="font-semibold mb-1">Complete Ecosystem</div>
                  <div className="text-sm text-gray-400">
                    All modules included
                  </div>
                </button>
              </div>

              <div className="mt-8 p-6 bg-blue-900/30 rounded-lg border border-blue-500/30">
                <h4 className="font-semibold mb-4">Deployment Timeline</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Configuration</span>
                    <span className="text-blue-400">1 day</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Hardware Setup</span>
                    <span className="text-blue-400">3 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Software Integration</span>
                    <span className="text-blue-400">4 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Testing & Go-Live</span>
                    <span className="text-blue-400">2 days</span>
                  </div>
                  <div className="border-t border-gray-600 pt-2 mt-2 flex justify-between font-bold">
                    <span>Total Deployment</span>
                    <span className="text-green-400">10 days</span>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Cost Summary --> */}
            <div>
              <h3 className="text-xl font-bold mb-6">Cost Summary</h3>
              <div className="bg-gray-800 p-6 rounded-lg mb-6">
                <div className="text-center mb-4">
                  <div className="text-sm text-gray-400 mb-2">
                    Total Hardware Cost
                  </div>
                  <div className="total-cost text-3xl font-bold gradient-text">
                    {`$${displayTotal.toLocaleString()}`}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Traditional Setup</span>
                    <span className="text-red-400">$25,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>StoreTech Solution</span>
                    <span className="total-cost text-blue-400">
                      {`$${displayTotal.toLocaleString()}`}
                    </span>
                  </div>
                  <div className="border-t border-gray-600 pt-2 flex justify-between font-bold">
                    <span>Your Savings</span>
                    <span className="savings-amount text-green-400">
                      {`$${savings.toLocaleString()}`}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-green-900/30 p-4 rounded-lg border border-green-500/30">
                  <div className="text-sm text-green-400 mb-1">
                    Cost Reduction
                  </div>
                  <div className="text-2xl font-bold">60%</div>
                </div>
                <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-500/30">
                  <div className="text-sm text-blue-400 mb-1">
                    Deployment Speed
                  </div>
                  <div className="text-2xl font-bold">10 Days</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
