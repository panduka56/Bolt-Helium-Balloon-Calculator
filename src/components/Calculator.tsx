import React, { useState, useEffect } from "react";
import { BalloonSets } from "./BalloonSets";
import { CalculationResults } from "./CalculationResults";
import {
  calculateTotalHelium,
  recommendCylinders,
} from "../utils/calculations";
import { BalloonSet, CylinderType } from "../types";

// Type for recommended cylinders which includes quantity
type RecommendedCylinder = CylinderType & { quantity: number };

export const Calculator: React.FC = () => {
  const [balloonSets, setBalloonSets] = useState<BalloonSet[]>([
    { id: "1", balloons: [] },
  ]);
  const [totalHelium, setTotalHelium] = useState({ cubicFeet: 0, liters: 0 });
  const [recommendedCylinders, setRecommendedCylinders] = useState<
    RecommendedCylinder[]
  >([]);

  useEffect(() => {
    const helium = calculateTotalHelium(balloonSets);
    setTotalHelium(helium);

    const cylinders = recommendCylinders(helium.cubicFeet);
    setRecommendedCylinders(cylinders);
  }, [balloonSets]);

  const handleBalloonSetsChange = (newBalloonSets: BalloonSet[]) => {
    setBalloonSets(newBalloonSets);
  };

  return (
    <div className="w-full">
      {/* Hero section with gradient background */}
      <div className="bg-gradient-to-br from-orange/10 via-pink/10 to-beige py-12 lg:py-16">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-dark mb-4">
              Helium Calculator for Balloons
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Calculate exactly how much helium you need for your party or
              event. Get instant recommendations for the right helium cylinders
              from Bottle Gases.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left: Calculator and Tips (stacked) */}
            <div className="flex flex-col gap-8">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
                <div className="bg-gradient-to-r from-gray-50 to-white p-6 lg:p-8 border-b border-gray-100">
                  <h2 className="text-2xl lg:text-3xl font-bold text-dark">
                    Calculate Your Helium Needs
                  </h2>
                </div>
                <div className="p-6 lg:p-8">
                  <BalloonSets
                    balloonSets={balloonSets}
                    onChange={handleBalloonSetsChange}
                  />
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink to-orange/20 rounded-2xl p-6 lg:p-8 shadow-lg border border-pink/30">
                <h3 className="text-xl lg:text-2xl font-semibold text-dark mb-6">
                  💡 Pro Tips for Helium Usage
                </h3>
                <ul className="space-y-4 text-dark">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 inline-flex h-6 w-6 rounded-full bg-white/80 text-orange items-center justify-center text-sm font-bold shadow-sm">
                      ✓
                    </span>
                    <span>
                      Store balloons in cool areas to extend float time.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 inline-flex h-6 w-6 rounded-full bg-white/80 text-orange items-center justify-center text-sm font-bold shadow-sm">
                      ✓
                    </span>
                    <span>
                      Use Hi-Float treatment to extend float time by up to 25
                      times.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 inline-flex h-6 w-6 rounded-full bg-white/80 text-orange items-center justify-center text-sm font-bold shadow-sm">
                      ✓
                    </span>
                    <span>
                      Inflate balloons just before your event to minimize helium
                      loss.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 inline-flex h-6 w-6 rounded-full bg-white/80 text-orange items-center justify-center text-sm font-bold shadow-sm">
                      ✓
                    </span>
                    <span>
                      Consider air-filled balloon arrangements as an alternative
                      to helium for table centerpieces.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Results (2 rows: Total Helium Required, then Recommended Cylinders) */}
            <div className="flex flex-col gap-8">
              <CalculationResults
                totalHelium={totalHelium}
                recommendedCylinders={recommendedCylinders}
                layout="vertical"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
