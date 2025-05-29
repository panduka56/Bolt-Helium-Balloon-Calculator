import { BalloonSet, CylinderType } from "../types";
import { cylinderTypes, CUBIC_FEET_TO_LITERS } from "./constants";

export const calculateTotalHelium = (balloonSets: BalloonSet[]) => {
  const totalCubicFeet = balloonSets.reduce((total, set) => {
    const setCubicFeet = set.balloons.reduce((setTotal, balloon) => {
      return setTotal + balloon.quantity * balloon.heliumCubicFeet;
    }, 0);
    return total + setCubicFeet;
  }, 0);

  // Add a small buffer for wastage (5%)
  const withBuffer = totalCubicFeet * 1.05;

  const liters = withBuffer * CUBIC_FEET_TO_LITERS;
  const cubicMeters = withBuffer * 0.0283168;

  return {
    cubicFeet: withBuffer,
    liters,
    cubicMeters,
  };
};

export const recommendCylinders = (cubicFeet: number) => {
  if (cubicFeet <= 0) return [];

  // Convert cubic feet to number of 9" balloons (assuming average balloon)
  const totalBalloons = Math.ceil(cubicFeet / 0.25); // 0.25 cubic feet per 9" balloon

  type RecommendedCylinder = CylinderType & { quantity: number };
  const disposables = cylinderTypes
    .filter((c) => c.productType === "disposable")
    .sort((a, b) => a.capacity - b.capacity);
  const refillables = cylinderTypes
    .filter((c) => c.productType === "refillable")
    .sort((a, b) => a.capacity - b.capacity);
  const allCylinders = [...disposables, ...refillables];

  // 1. If total balloons needed <= max disposable capacity, recommend the smallest single disposable that fits
  const smallestDisposable = disposables.find(
    (c) => c.capacity >= totalBalloons,
  );
  if (smallestDisposable) {
    return [{ ...smallestDisposable, quantity: 1 }];
  }

  // 2. If not, use a minimal combination of larger cylinders (disposables first, then refillables)
  let remainingBalloons = totalBalloons;
  const result: RecommendedCylinder[] = [];
  for (const cylinder of allCylinders.slice().reverse()) {
    // largest to smallest
    if (remainingBalloons <= 0) break;
    const quantity = Math.floor(remainingBalloons / cylinder.capacity);
    if (quantity > 0) {
      result.push({ ...cylinder, quantity });
      remainingBalloons -= quantity * cylinder.capacity;
    }
  }
  // If any left, add the smallest that fits
  if (remainingBalloons > 0) {
    const smallest = allCylinders.find((c) => c.capacity >= remainingBalloons);
    if (smallest) {
      result.push({ ...smallest, quantity: 1 });
    }
  }
  return result;
};
