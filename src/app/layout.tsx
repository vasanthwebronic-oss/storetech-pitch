import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";
import ScrollAnimationProvider from "@/components/common/ScrollAnimationProvider";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StoreTech - The Future of Unmanned Retail",
  description:
    "StoreTech provides a complete platform for operating unmanned retail formats with 60% lower costs and 10-day deployment. 170 stores, 50M+ transactions across Europe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        <ScrollAnimationProvider>{children}</ScrollAnimationProvider>
        <Footer />
      </body>
    </html>
  );
}
