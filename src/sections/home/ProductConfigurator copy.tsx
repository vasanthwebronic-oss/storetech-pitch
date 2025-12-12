"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import anime from "animejs/lib/anime.es.js";
import SectionTitle from "@/components/common/SectionTitle";
import { LoadingOutlined } from "@ant-design/icons";
import { notification } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import {
  ModulesData,
  PresetData,
  presets,
  initContactData,
  moduleKeys,
  initialModules,
  type PresetKey,
  type contacType,
  type ModuleKey,
  type ModulesState,
} from "@/data/productConfigiData";
import ContactInput from "@/components/home/productConfgi/ContactInput";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export default function ProductConfigurator() {
  const { value: storedModules } = useLocalStorage<string[]>(
    "selectedModules",
    []
  );
  const [contactData, setcontactData] = useState<contacType>(initContactData);
  const [noti, contextHolder] = notification.useNotification();
  const [isLoding, setisLoding] = useState(false);
  const api = "https://wpdemo.webronics.com/wp-json/webronic/v1/contact";
  const [modules, setModules] = useState<ModulesState>(initialModules);
  const [message, setMessage] = useState<{
    data: string[];
    messageString: string;
  }>({
    data: [],
    messageString: "",
  });

  useEffect(() => {
    if (!storedModules || storedModules.length === 0) return;

    const merged: ModulesState = moduleKeys.reduce((acc, key) => {
      acc[key] = {
        ...initialModules[key],
        selected: storedModules.includes(key), // use stored modules
      };
      return acc;
    }, {} as ModulesState);

    setModules(merged);
  }, [storedModules]);

  useEffect(() => {
    console.log(modules);
  }, [modules]);
  
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

  async function handleSubmission(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setisLoding(true);

    const payload = {
      name: contactData.contactName,
      email: contactData.contactEmail,
      message: contactData.contactMessage,
    };

    try {
      const res = await fetch(api, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        const data = await res.json();
        noti.info({
          title: "Requested",
          description: data.message,
          icon: <CheckCircleOutlined style={{ color: "#52c41a" }} />,
          placement: "topRight",
          styles: {
            root: {
              backgroundColor: "#111827",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 8,
            },
            title: {
              color: "#52c41a",
              fontWeight: 600,
            },
            description: {
              color: "#ffffff",
            },
          },
        });

        console.log(data);
        setcontactData(initContactData);
      }
    } catch (error) {
    } finally {
      setisLoding(false);
    }
  }

  useEffect(() => {
    console.log(contactData);
  }, [contactData]);

  useEffect(() => {
    const values = Object.keys(modules)
      .filter((key) => modules[key as keyof ModulesState].selected)
      .map((key) => modules[key as keyof ModulesState].name);

    const fullMessage =
      values.length > 0
        ? "I am quoting for:\n" +
          values.map((item, index) => `${index + 1}. ${item}`).join("\n")
        : "";

    setMessage({ data: values, messageString: fullMessage });
    setcontactData((prv) => ({ ...prv, contactMessage: fullMessage }));
  }, [modules]);

  return (
    <>
      {contextHolder}

      <section id="getQuote" className="py-20 relative">
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
                  {ModulesData.map((mod) => (
                    <div
                      key={mod.id}
                      data-module={mod.id}
                      onClick={() =>
                        handleToggleModule(mod.id as keyof ModulesState)
                      }
                      className={`module-toggle bg-gray-800 p-4 rounded-lg border-2 border-gray-700 ${
                        modules[mod.id as keyof ModulesState].selected
                          ? "selected"
                          : ""
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">{mod.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* <!-- Preset Configurations --> */}
              <div>
                <h3 className="text-xl font-bold mb-6">Quick Start</h3>

                <div className="space-y-4">
                  {PresetData.map((preset) => (
                    <button
                      key={preset.id}
                      className="preset-btn w-full bg-gray-800 p-4 rounded-lg text-left hover:bg-gray-700 transition-colors"
                      data-preset={preset.id}
                      type="button"
                      onClick={() => applyPreset(preset.id)}
                    >
                      <div className="font-semibold mb-1">{preset.title}</div>
                      <div className="text-sm text-gray-400">
                        {preset.description}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* <!-- Cost Summary --> */}
              <div>
                <h3 className="text-xl font-bold mb-6">Request Quotation</h3>
                <div className="bg-gray-800 p-6 rounded-lg mb-6 flex flex-col gap-3">
                  <form
                    className="flex flex-col gap-3"
                    onSubmit={(e) => handleSubmission(e)}
                    method="post"
                  >
                    <ContactInput
                      id="contactName"
                      value={contactData.contactName}
                      setcontactData={setcontactData}
                    >
                      Name
                    </ContactInput>
                    <ContactInput
                      id="contactEmail"
                      value={contactData.contactEmail}
                      setcontactData={setcontactData}
                    >
                      Email
                    </ContactInput>
                    <ContactInput
                      id="contactPhone"
                      value={contactData.contactPhone}
                      setcontactData={setcontactData}
                    >
                      Phone
                    </ContactInput>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-start">
                        Message
                      </label>

                      <div
                        id={"contactMessage-visual"}
                        className={
                          "w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none whitespace-pre-line leading-relaxed"
                        }
                        aria-hidden={false}
                      >
                        <ol className="list-decimal list-inside space-y-1">
                          {message.data.length > 0 ? (
                            message.data.map((item, index) => (
                              <li key={index} className="text-sm">
                                {item}
                              </li>
                            ))
                          ) : (
                            <div className="text-sm text-white italic bg-orange-600 rounded-xl py-2 px-3 border-l-4">
                              Please select any of the Modules
                            </div>
                          )}
                        </ol>
                      </div>
                    </div>
                    <button
                      disabled={isLoding}
                      className={`btn-primary px-6 py-2 rounded-lg text-white font-medium ${
                        isLoding ? "cursor-not-allowed" : "cursor-pointer"
                      }`}
                      type="submit"
                    >
                      {!isLoding ? "Request Quotation" : <LoadingOutlined />}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
