import CalltoCation from "@/sections/products/CalltoCation";
import ERPMobileApps from "@/sections/products/ERPMobileApps";
import HeroSection from "@/sections/products/HeroSection";
import ProductModules from "@/sections/products/ProductModules";
import SolutionPackages from "@/sections/products/SolutionPackages";
import TechnicalSpecifications from "@/sections/products/TechnicalSpecifications";


export const metadata = {
  title: "StoreTech Products - Unmanned Retail Solutions",
  description:
    "Explore StoreTech's complete suite of unmanned retail products: Smart Self-Checkout, Vending Machines, Smart Fridges, Door Access Control, ERP & Mobile Apps.",
};

export default function page() {
  return (
    <>
      <HeroSection />
      <ProductModules />
      <ERPMobileApps />
      <SolutionPackages />
      <TechnicalSpecifications />
      <CalltoCation />
    </>
  );
}
