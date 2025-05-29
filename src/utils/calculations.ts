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

  // Prioritize disposables, then refillables, then large/trade cylinders
  const availableCylinders = cylinderTypes
    .filter(c => c.productType !== "inflator" && c.cubicMeters && c.cubicMeters > 0)
    .sort((a, b) => {
      // Disposables first, then refillables, then others by size
      const typeOrder = (c: CylinderType) =>
        c.productType === "disposable" ? 0 : c.productType === "refillable" ? 1 : 2;
      const typeDiff = typeOrder(a) - typeOrder(b);
      if (typeDiff !== 0) return typeDiff;
      // For same type, sort by size ascending
      return a.cubicMeters! - b.cubicMeters!;
    });

  // 1. Single disposable cylinder option (if any can cover the need)
  const singleDisposable = availableCylinders.find(
    c => c.productType === "disposable" && c.cubicMeters! >= cubicMeters
  );
  if (singleDisposable) {
    return [{ ...singleDisposable, quantity: 1 }];
  }

  // 2. Single refillable cylinder option (if any can cover the need)
  const singleRefillable = availableCylinders.find(
    c => c.productType === "refillable" && c.cubicMeters! >= cubicMeters
  );
  if (singleRefillable) {
    return [{ ...singleRefillable, quantity: 1 }];
  }

  // 3. DP for minimum number of cylinders (and lowest cost if tied)
  // Discretize to liters to avoid floating point issues
  const litersNeeded = Math.ceil(cubicMeters * 1000);
  const cylinderLiters = availableCylinders.map(c => Math.round(c.cubicMeters! * 1000));
  const maxLiters = Math.max(...cylinderLiters);
  const maxVolume = litersNeeded + maxLiters; // allow some overage

  // dp[v] = { count, cost, combo: [qtys] }
  const dp: Array<{ count: number; cost: number; combo: number[] } | null> = Array(maxVolume + 1).fill(null);
  dp[0] = { count: 0, cost: 0, combo: Array(availableCylinders.length).fill(0) };

  for (let v = 0; v <= maxVolume; v++) {
    if (dp[v] === null) continue;
    for (let i = 0; i < availableCylinders.length; i++) {
      const liters = cylinderLiters[i];
      const nextV = v + liters;
      if (nextV > maxVolume) continue;
      const nextCount = dp[v]!.count + 1;
      const nextCost = dp[v]!.cost + availableCylinders[i].price;
      const nextCombo = [...dp[v]!.combo];
      nextCombo[i]++;
      if (
        dp[nextV] === null ||
        nextCount < dp[nextV]!.count ||
        (nextCount === dp[nextV]!.count && nextCost < dp[nextV]!.cost)
      ) {
        dp[nextV] = { count: nextCount, cost: nextCost, combo: nextCombo };
      }
    }
  }

  // Find the best solution for >= litersNeeded
  let best: { count: number; cost: number; combo: number[] } | null = null;
  for (let v = litersNeeded; v <= maxVolume; v++) {
    if (dp[v] && (!best || dp[v]!.count < best.count || (dp[v]!.count === best.count && dp[v]!.cost < best.cost))) {
      best = dp[v]!;
    }
  }
  if (!best) {
    // fallback: recommend smallest cylinder
    const smallest = availableCylinders[0];
    return [{ ...smallest, quantity: 1 }];
  }
  // Build result
  const result: RecommendedCylinder[] = [];
  best.combo.forEach((qty, i) => {
    if (qty > 0) {
      result.push({ ...availableCylinders[i], quantity: qty });
    }
  });
  return result;
};
