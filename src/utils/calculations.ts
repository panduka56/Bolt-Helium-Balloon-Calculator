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
  
  // Filter and sort cylinders by capacity
  const disposables = cylinderTypes
    .filter((c) => c.productType === "disposable")
    .sort((a, b) => a.cubicMeters - b.cubicMeters);
  const refillables = cylinderTypes
    .filter((c) => c.productType === "refillable")
    .sort((a, b) => a.cubicMeters - b.cubicMeters);
  const allCylinders = [...disposables, ...refillables];

  // Strategy 1: Try to find smallest single cylinder that fits
  const smallestThatFits = allCylinders.find(
    (c) => c.cubicMeters >= cubicMeters
  );
  if (smallestThatFits) {
    return [{ ...smallestThatFits, quantity: 1 }];
  }

  // Strategy 2: Use combination of larger cylinders (largest first to minimize waste)
  let remainingCubicMeters = cubicMeters;
  const result: RecommendedCylinder[] = [];
  
  for (const cylinder of allCylinders.slice().reverse()) { // largest to smallest
    if (remainingCubicMeters <= 0) break;
    const quantity = Math.floor(remainingCubicMeters / cylinder.cubicMeters);
    if (quantity > 0) {
      result.push({ ...cylinder, quantity });
      remainingCubicMeters -= quantity * cylinder.cubicMeters;
    }
  }
  
  // Handle any remainder with the smallest cylinder that fits
  if (remainingCubicMeters > 0) {
    const smallest = allCylinders.find((c) => c.cubicMeters >= remainingCubicMeters);
    if (smallest) {
      result.push({ ...smallest, quantity: 1 });
    }
  }
  
  return result;
};
