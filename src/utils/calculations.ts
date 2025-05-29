import { BalloonSet } from "../types";
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
  type RecommendedCylinder = typeof cylinderTypes[number] & { quantity: number };
  const disposables = cylinderTypes.filter(c => c.productType === "disposable" && c.cubicMeters && c.cubicMeters > 0);
  const refillables = cylinderTypes.filter(c => c.productType === "refillable" && c.cubicMeters && c.cubicMeters > 0);
  const totalDisposableVolume = disposables.reduce((sum, c) => sum + (c.cubicMeters || 0), 0);

  if (cubicMeters <= totalDisposableVolume) {
    // Recommend minimum number of disposables to meet/exceed the need
    // Greedy: largest first
    let remaining = cubicMeters;
    const result: RecommendedCylinder[] = [];
    const sorted = [...disposables].sort((a, b) => b.cubicMeters! - a.cubicMeters!);
    for (const cyl of sorted) {
      if (remaining <= 0) break;
      const qty = Math.floor(remaining / cyl.cubicMeters!);
      if (qty > 0) {
        result.push({ ...cyl, quantity: qty });
        remaining -= qty * cyl.cubicMeters!;
      }
    }
    // If still some left, add smallest disposable
    if (remaining > 0) {
      const smallest = sorted[sorted.length - 1];
      result.push({ ...smallest, quantity: 1 });
    }
    return result;
  } else {
    // Not enough disposables, recommend refillable(s)
    let remaining = cubicMeters;
    const result: RecommendedCylinder[] = [];
    const sorted = [...refillables].sort((a, b) => b.cubicMeters! - a.cubicMeters!);
    for (const cyl of sorted) {
      if (remaining <= 0) break;
      const qty = Math.floor(remaining / cyl.cubicMeters!);
      if (qty > 0) {
        result.push({ ...cyl, quantity: qty });
        remaining -= qty * cyl.cubicMeters!;
      }
    }
    // If still some left, add smallest refillable
    if (remaining > 0) {
      const smallest = sorted[sorted.length - 1];
      result.push({ ...smallest, quantity: 1 });
    }
    return result;
  }
};
