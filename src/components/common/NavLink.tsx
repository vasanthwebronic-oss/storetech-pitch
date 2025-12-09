"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface navLinkdata {
  readonly href: string;
  readonly children: React.ReactNode;
  isButton?: boolean;
}

export default function NavLink({ href, children, isButton }: navLinkdata) {
  const path = usePathname();
  const isActive = path === href;
  // console.log(children, isActive, href);

  const className = isButton
    ? "btn-primary px-6 py-2 rounded-lg text-white font-medium"
    : ` hover:text-blue-400 transition-color ${
        isActive ? "font-semibold text-blue-400" : "text-white"
      }`;

  return (
    <Link href={href} scroll={isButton} className={className}>
      {children}
    </Link>
  );
}
