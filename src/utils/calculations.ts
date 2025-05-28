import { BalloonSet } from '../types';
import { cylinderTypes, CUBIC_FEET_TO_LITERS } from './constants';

export const calculateTotalHelium = (balloonSets: BalloonSet[]) => {
  const totalCubicFeet = balloonSets.reduce((total, set) => {
    const setCubicFeet = set.balloons.reduce((setTotal, balloon) => {
      return setTotal + (balloon.quantity * balloon.heliumCubicFeet);
    }, 0);
    return total + setCubicFeet;
  }, 0);

  // Add a small buffer for wastage (5%)
  const withBuffer = totalCubicFeet * 1.05;
  
  return {
    cubicFeet: withBuffer,
    liters: withBuffer * CUBIC_FEET_TO_LITERS
  };
};

export const recommendCylinders = (cubicFeet: number) => {
  if (cubicFeet <= 0) return [];

  // Convert cubic feet to number of 9" balloons (assuming average balloon)
  const totalBalloons = Math.ceil(cubicFeet / 0.25); // 0.25 cubic feet per 9" balloon

  const availableCylinders = [...cylinderTypes].sort((a, b) => b.capacity - a.capacity);
  const result: any[] = [];
  let remainingBalloons = totalBalloons;

  // First, try to use larger cylinders for most of the balloons
  for (const cylinder of availableCylinders) {
    if (remainingBalloons <= 0) break;
    
    const quantity = Math.floor(remainingBalloons / cylinder.capacity);
    if (quantity > 0) {
      result.push({
        ...cylinder,
        quantity
      });
      remainingBalloons -= quantity * cylinder.capacity;
    }
  }

  // If we have remaining balloons, add one more of the most appropriate cylinder
  if (remainingBalloons > 0) {
    const suitableCylinder = availableCylinders.find(c => c.capacity >= remainingBalloons);
    
    if (suitableCylinder) {
      const existingCylinder = result.find(c => c.id === suitableCylinder.id);
      if (existingCylinder) {
        existingCylinder.quantity += 1;
      } else {
        result.push({
          ...suitableCylinder,
          quantity: 1
        });
      }
    } else {
      // If no cylinder is big enough, add the largest available
      const largestCylinder = availableCylinders[0];
      const existingCylinder = result.find(c => c.id === largestCylinder.id);
      if (existingCylinder) {
        existingCylinder.quantity += 1;
      } else {
        result.push({
          ...largestCylinder,
          quantity: 1
        });
      }
    }
  }

  return result;
};