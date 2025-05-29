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
    .sort((a, b) => b.cubicMeters! - a.cubicMeters!); // largest to smallest

  // 1. Single cylinder option (if any can cover the need)
  const singleCylinder = availableCylinders.find(c => c.cubicMeters! >= cubicMeters);
  const singleCylinderOption = singleCylinder ? [{ ...singleCylinder, quantity: 1 }] : null;

  // 2. Greedy combination (largest to smallest)
  let remaining = cubicMeters;
  const combo: RecommendedCylinder[] = [];
  for (const cyl of availableCylinders) {
    const qty = Math.floor(remaining / cyl.cubicMeters!);
    if (qty > 0) {
      combo.push({ ...cyl, quantity: qty });
      remaining -= qty * cyl.cubicMeters!;
    }
  }
  // If there's still a remainder, use the smallest cylinder that fits
  if (remaining > 0.0001) {
    const smallest = availableCylinders[availableCylinders.length - 1];
    combo.push({ ...smallest, quantity: 1 });
  }
  // Remove any with 0 quantity
  const comboFiltered = combo.filter(c => c.quantity > 0);

  // 3. Choose best (lowest cost) option, but return both if both are possible
  const options: RecommendedCylinder[][] = [];
  if (singleCylinderOption) options.push(singleCylinderOption);
  if (comboFiltered.length > 0 && (!singleCylinderOption || comboFiltered.length > 1 || comboFiltered[0].quantity > 1)) {
    options.push(comboFiltered);
  }
  // If neither, fallback to smallest cylinder
  if (options.length === 0 && availableCylinders.length > 0) {
    options.push([{ ...availableCylinders[availableCylinders.length - 1], quantity: 1 }]);
  }
  // Return the best (lowest total cost) option first
  options.sort((a, b) => {
    const costA = a.reduce((sum, c) => sum + c.price * c.quantity, 0);
    const costB = b.reduce((sum, c) => sum + c.price * c.quantity, 0);
    return costA - costB;
  });
  return options[0]; // For now, return only the best option (array of cylinders)
};
