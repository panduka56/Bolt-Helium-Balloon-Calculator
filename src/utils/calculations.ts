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

  // Filter out inflators and cylinders with no cubicMeters
  const disposables = cylinderTypes
    .filter((c) => c.productType === "disposable" && c.cubicMeters && c.cubicMeters > 0)
    .sort((a, b) => (a.cubicMeters! - b.cubicMeters!));
  const refillables = cylinderTypes
    .filter((c) => c.productType === "refillable" && c.cubicMeters && c.cubicMeters > 0)
    .sort((a, b) => (a.cubicMeters! - b.cubicMeters!));

  // Try to find a single smallest cylinder that fits (prefer disposables)
  const allCylinders = [...disposables, ...refillables];
  const singleCylinder = allCylinders.find((c) => c.cubicMeters! >= cubicMeters);
  if (singleCylinder) {
    return [{ ...singleCylinder, quantity: 1 }];
  }

  // Greedy approach: use as many of the largest disposable as possible, then fill with smaller disposables, then refillables
  let remaining = cubicMeters;
  const result: RecommendedCylinder[] = [];

  // Use disposables first (largest to smallest)
  for (let i = disposables.length - 1; i >= 0; i--) {
    const cyl = disposables[i];
    const qty = Math.floor(remaining / cyl.cubicMeters!);
    if (qty > 0) {
      result.push({ ...cyl, quantity: qty });
      remaining -= qty * cyl.cubicMeters!;
    }
  }

  // If there's still a remainder, use the smallest disposable that fits
  if (remaining > 0.0001) {
    const smallestDisposable = disposables.find((c) => c.cubicMeters! >= remaining);
    if (smallestDisposable) {
      result.push({ ...smallestDisposable, quantity: 1 });
      remaining -= smallestDisposable.cubicMeters!;
    }
  }

  // If there's still a remainder, use refillables (smallest that fits)
  if (remaining > 0.0001) {
    const smallestRefillable = refillables.find((c) => c.cubicMeters! >= remaining);
    if (smallestRefillable) {
      result.push({ ...smallestRefillable, quantity: 1 });
      remaining -= smallestRefillable.cubicMeters!;
    }
  }

  // If still not covered, fallback to the largest available cylinder
  if (result.length === 0 && allCylinders.length > 0) {
    return [{ ...allCylinders[0], quantity: 1 }];
  }

  // Merge same cylinder types (if any)
  const merged: { [id: string]: RecommendedCylinder } = {};
  for (const cyl of result) {
    if (merged[cyl.id]) {
      merged[cyl.id].quantity += cyl.quantity;
    } else {
      merged[cyl.id] = { ...cyl };
    }
  }
  return Object.values(merged).filter((c) => c.quantity > 0);
};
