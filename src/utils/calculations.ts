import { BalloonSet, CylinderType } from "../types";
import { cylinderTypes } from "./constants";

export const calculateTotalHelium = (balloonSets: BalloonSet[]) => {
  // Calculate total helium needed in cubic meters
  const totalCubicMeters = balloonSets.reduce((total, set) => {
    const setCubicMeters = set.balloons.reduce((setTotal, balloon) => {
      return setTotal + balloon.quantity * balloon.heliumCubicMeters;
    }, 0);
    return total + setCubicMeters;
  }, 0);

  // Add 5% buffer for wastage
  const withBuffer = totalCubicMeters * 1.05;
  
  // Convert to other units for display purposes
  const liters = withBuffer * 1000; // 1 m³ = 1000 L
  const cubicFeet = withBuffer * 35.3147; // 1 m³ = 35.3147 ft³

  return {
    cubicMeters: withBuffer,
    liters,
    cubicFeet,
  };
};

export const recommendCylinders = (cubicMeters: number) => {
  if (cubicMeters <= 0) return [];

  type RecommendedCylinder = CylinderType & { quantity: number };

  // Filter cylinders that have actual volume data and are not inflators
  const availableCylinders = cylinderTypes
    .filter(c => c.productType !== "inflator" && c.cubicMeters && c.cubicMeters > 0)
    .sort((a, b) => a.cubicMeters! - b.cubicMeters!);

  // Find the most cost-effective single cylinder type
  let bestOption: RecommendedCylinder | null = null;
  let bestCostPerM3 = Infinity;

  for (const cylinder of availableCylinders) {
    const quantityNeeded = Math.ceil(cubicMeters / cylinder.cubicMeters!);
    const totalCost = quantityNeeded * cylinder.price;
    const costPerM3 = totalCost / (quantityNeeded * cylinder.cubicMeters!);

    if (costPerM3 < bestCostPerM3) {
      bestCostPerM3 = costPerM3;
      bestOption = { ...cylinder, quantity: quantityNeeded };
    }
  }

  return bestOption ? [bestOption] : [];
};
