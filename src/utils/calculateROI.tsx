// utils/roiCalculator.ts

export type ROICalculatorInput = {
  stores: number;        // storeCount
  avgRevenue: number;    // avgRevenue per store (per day/month/year)
  laborHours: number;    // laborHours
  laborRate: number;     // laborRate
};

export type ROICalculatorResult = {
  laborSavings: number;
  extendedHoursRevenue: number;
  totalAnnualSavings: number;
  hardwareCost: number;
  implementationCost: number;
  totalInvestment: number;
  roiPercentage: number;   // ROI in %
  paybackMonths: number;   // months
};

export function calculateROI({
  stores,
  avgRevenue,
  laborHours,
  laborRate,
}: ROICalculatorInput): ROICalculatorResult {
  const storeCount = stores || 5;
  const revenue = avgRevenue || 1500;
  const hours = laborHours || 16;
  const rate = laborRate || 25;

  // Calculate savings (same formulas as your original code)
  const laborSavings = storeCount * hours * rate * 365 * 0.7; // 70% labor reduction
  const extendedHoursRevenue = storeCount * revenue * 0.4;    // 40% revenue uplift
  const totalAnnualSavings = laborSavings + extendedHoursRevenue;

  // Investment
  const hardwareCost = storeCount * 6500;     // $6,500 per store
  const implementationCost = storeCount * 1500; // $1,500 implementation
  const totalInvestment = hardwareCost + implementationCost;

  // To match old logic: treat "3 years" as payback horizon
  const annualizedInvestment = totalInvestment / 3;

  const roiRaw =
    ((totalAnnualSavings - annualizedInvestment) / annualizedInvestment) * 100;

  const paybackMonthsRaw =
    totalAnnualSavings > 0 ? totalInvestment / (totalAnnualSavings / 12) : Infinity;

  // You can clamp like UI did, or keep raw — here I clamp like your old code:
  const roiPercentage = Math.max(0, roiRaw);
  const paybackMonths = Math.max(1, paybackMonthsRaw);

  return {
    laborSavings,
    extendedHoursRevenue,
    totalAnnualSavings,
    hardwareCost,
    implementationCost,
    totalInvestment,
    roiPercentage,
    paybackMonths,
  };
}
