import React, { useState, useEffect } from 'react';
import { BalloonSets } from './BalloonSets';
import { CalculationResults } from './CalculationResults';
import { calculateTotalHelium, recommendCylinders } from '../utils/calculations';
import { BalloonSet } from '../types';

export const Calculator: React.FC = () => {
  const [balloonSets, setBalloonSets] = useState<BalloonSet[]>([
    { id: '1', balloons: [] }
  ]);
  const [totalHelium, setTotalHelium] = useState({ cubicFeet: 0, liters: 0 });
  const [recommendedCylinders, setRecommendedCylinders] = useState<any[]>([]);

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
    <div className="w-full px-2 md:px-8 lg:px-16 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start min-h-[70vh] w-full">
        {/* Left: Calculator and Tips (stacked) */}
        <div className="flex flex-col gap-10 h-full w-full">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 transform hover:shadow-2xl flex-1 flex flex-col w-full">
            <div className="p-8 flex-1 flex flex-col w-full">
              <h2 className="text-3xl font-bold text-dark mb-8">Calculate Your Helium Needs</h2>
              <div className="my-8 flex-1 w-full">
                <BalloonSets 
                  balloonSets={balloonSets} 
                  onChange={handleBalloonSetsChange} 
                />
              </div>
            </div>
          </div>
          <div className="bg-pink rounded-2xl p-8 shadow-lg w-full">
            <h3 className="text-2xl font-semibold text-orange mb-4">Helium Usage Tips</h3>
            <ul className="space-y-3 text-dark">
              <li className="flex items-start">
                <span className="inline-block h-5 w-5 rounded-full bg-orange text-white flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                Store balloons in cool areas to extend float time.
              </li>
              <li className="flex items-start">
                <span className="inline-block h-5 w-5 rounded-full bg-orange text-white flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                Use Hi-Float treatment to extend float time by up to 25 times.
              </li>
              <li className="flex items-start">
                <span className="inline-block h-5 w-5 rounded-full bg-orange text-white flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                Inflate balloons just before your event to minimize helium loss.
              </li>
              <li className="flex items-start">
                <span className="inline-block h-5 w-5 rounded-full bg-orange text-white flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                Consider air-filled balloon arrangements as an alternative to helium for table centerpieces.
              </li>
            </ul>
          </div>
        </div>
        {/* Right: Results (2 rows: Total Helium Required, then Recommended Cylinders) */}
        <div className="flex flex-col gap-10 h-full w-full">
          <CalculationResults 
            totalHelium={totalHelium} 
            recommendedCylinders={recommendedCylinders}
            layout="vertical"
          />
        </div>
      </div>
    </div>
  );
};