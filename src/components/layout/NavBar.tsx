"use client";

import NavLink from "../common/NavLink";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const navs = [
    { href: "/", children: "Home" },
    { href: "/products", children: "Products" },
    { href: "/company", children: "Company" },
    { href: "/#contact", children: "Contact", isButton: true },
  ];
  const [isMobileNav, setisMobileNav] = useState(false);
  const path = usePathname();

  useEffect(() => {
    setisMobileNav(false);
  }, [path]);

  return (
    <nav className="navbar fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="font-display font-bold text-2xl gradient-text">
          StoreTech
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navs.map((v, i) => (
            <NavLink key={i} href={v.href} isButton={v.isButton}>
              {v.children}
            </NavLink>
          ))}
        </div>

        <button
          onClick={() => setisMobileNav((s) => !s)}
          className=" md:hidden text-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* <!-- Mobile Menu --> */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileNav ? "max-h-96 mt-4 pb-4" : "max-h-0"
        } md:hidden`}
      >
        <div className="flex flex-col space-y-4">
          {navs.map((v, i) => (
            <NavLink key={i} href={v.href} isButton={v.isButton}>
              {v.children}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
