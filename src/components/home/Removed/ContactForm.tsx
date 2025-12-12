"use client";
import { LoadingOutlined } from "@ant-design/icons";
import { useState } from "react";
import { notification} from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

export type contacType = {
  contactName: string;
  contactEmail: string;
  contactMessage: string;
};

export const initContactData = {
  contactName: "",
  contactEmail: "",
  contactMessage: "",
};

export default function ContactForm() {
  const [contactData, setcontactData] = useState<contacType>(initContactData);
  const [noti, contextHolder] = notification.useNotification();
  const [isLoding, setisLoding] = useState(false);
  const api = "https://wpdemo.webronics.com/wp-json/webronic/v1/contact";
  // const api = "http://localhost/webric/public/api/contact.php";
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
          title: "Submitted successfully.",
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

  function updateValue(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    keyname: string
  ) {
    setcontactData((prv) => ({ ...prv, [keyname]: e.target.value }));
  }
  // animate-on-scroll
  return (
    <>
      {contextHolder}
      <form
        onSubmit={(e) => handleSubmission(e)}
        method="post"
        className="roi-calculator mt-10 max-w-xl flex flex-col gap-5 mx-auto bg-gray-900/50 rounded-2xl p-8 backdrop-blur-sm  "
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
          id="contactMessage"
          isMultiliine
          value={contactData.contactMessage}
          setcontactData={setcontactData}
        >
          Message
        </ContactInput>

        <button
          disabled={isLoding}
          className={`btn-primary px-6 py-2 rounded-lg text-white font-medium ${
            isLoding ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          type="submit"
        >
          {!isLoding ? "submit" : <LoadingOutlined />}
        </button>
      </form>
    </>
  );
}

function ContactInput({
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
    "w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none";

  if (isMultiliine)
    return (
      <div>
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
    <div>
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
