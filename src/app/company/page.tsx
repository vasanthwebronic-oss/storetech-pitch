import CalltoAction from "@/sections/company/CalltoAction";
import EuropeanDeployment from "@/sections/company/EuropeanDeployment";
import HeroSection from "@/sections/company/HeroSection";
import LeadingTeam from "@/sections/company/LeadingTeam";
import MarketValidation from "@/sections/company/MarketValidation";
import RegulatoryCompliance from "@/sections/company/RegulatoryCompliance";
import USExpansion from "@/sections/company/USExpansion";


export const metadata = {
  title: "StoreTech Company - Market-Leading Unmanned Retail Platform",
  description:
    "StoreTech has deployed 170 stores across Europe with 50M+ transactions and 99.7% success rate. Learn about our team, market validation, and expansion strategy.",
};

export default function page() {
  return (
    <>
    <HeroSection />
    <EuropeanDeployment />
    <MarketValidation />
    <LeadingTeam />
    <USExpansion />
    <RegulatoryCompliance />
    <CalltoAction />
   
    </>
  )
}
