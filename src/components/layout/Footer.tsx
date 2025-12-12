"use client";

import { useRouter } from "next/navigation";

// Ant Design Icons
import {
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  FacebookOutlined,
} from "@ant-design/icons";

export default function Footer() {
  const router = useRouter();

  const navs = [
    { label: "Home", href: "/#hero" },
    { label: "Products", href: "/products" },
    { label: "Company", href: "/company" },
    { label: "Request Quotation", href: "/#getQuote" },
  ];

  const scrollOrNavigate = (href: string) => {
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

    router.push(href);
  };

  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-24 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* About / description section */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-xl gradient-text">
              StoreTech
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Modular, scalable solutions for unmanned retail — powering automation for
              self-checkout, vending, fridge access, ERP analytics, and mobile experiences.
            </p>

            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <LinkedinOutlined style={{ fontSize: 20 }} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <TwitterOutlined style={{ fontSize: 20 }} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FacebookOutlined style={{ fontSize: 20 }} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <div className="grid gap-2">
              {navs.map((nav) => (
                <button
                  key={nav.label}
                  onClick={() => scrollOrNavigate(nav.href)}
                  className="text-gray-400 hover:text-white transition text-left text-sm"
                >
                  {nav.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Information</h4>

            <div className="flex items-center gap-3 mb-3">
              <MailOutlined style={{ fontSize: 18 }} />
              <a
                className="text-gray-400 hover:text-white text-sm"
                href="mailto:suryanarayanan@store-tech.se"
              >
                suryanarayanan@store-tech.se
              </a>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <PhoneOutlined style={{ fontSize: 18 }} />
              <a
                className="text-gray-400 hover:text-white text-sm"
                href="tel:+917200088500"
              >
                +91 72000 88500
              </a>
            </div>

            <div className="flex items-center gap-3">
              <GlobalOutlined style={{ fontSize: 18 }} />
              <a
                className="text-gray-400 hover:text-white text-sm"
                href="https://www.store-tech.se"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.store-tech.se
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} StoreTech. All rights reserved.
          </p>

          <div className="flex items-center space-x-4">
            <a href="/privacy" className="hover:text-white transition">
              Privacy
            </a>
            <a href="/terms" className="hover:text-white transition">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
