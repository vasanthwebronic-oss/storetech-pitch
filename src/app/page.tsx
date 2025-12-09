import CompetitiveAdvantage from "@/sections/home/CompetitiveAdvantage";
import Contact from "@/sections/home/Contact";
import HeroBanner from "@/sections/home/HeroBanner";
import InvestmentReturns from "@/sections/home/InvestmentReturns";
import KeyMetrics from "@/sections/home/KeyMetrics";
import MarketOpportunity from "@/sections/home/MarketOpportunity";
import ProductConfigurator from "@/sections/home/ProductConfigurator";
import RetailRevolution from "@/sections/home/RetailRevolution";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <KeyMetrics />
      <RetailRevolution />
      <ProductConfigurator />
      <InvestmentReturns />
      <MarketOpportunity />
      <CompetitiveAdvantage />
      <Contact />
    </>
  );
}
