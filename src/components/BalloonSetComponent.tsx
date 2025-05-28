import React from 'react';
import { Trash2 } from 'lucide-react';
import { BalloonSelector } from './BalloonSelector';
import { BalloonSet, Balloon } from '../types';
import { balloonSizes } from '../utils/constants';

interface BalloonSetComponentProps {
  balloonSet: BalloonSet;
  onChange: (balloonSet: BalloonSet) => void;
  onRemove: () => void;
  showRemoveButton: boolean;
  setNumber: number;
}

export const BalloonSetComponent: React.FC<BalloonSetComponentProps> = ({
  balloonSet,
  onChange,
  onRemove,
  showRemoveButton,
  setNumber
}) => {
  const updateBalloon = (balloon: Balloon) => {
    const existingIndex = balloonSet.balloons.findIndex(b => b.size === balloon.size);
    
    if (existingIndex >= 0) {
      // Update existing balloon
      const updatedBalloons = [...balloonSet.balloons];
      
      if (balloon.quantity <= 0) {
        // Remove if quantity is 0 or less
        updatedBalloons.splice(existingIndex, 1);
      } else {
        // Update quantity
        updatedBalloons[existingIndex] = balloon;
      }
      
      onChange({ ...balloonSet, balloons: updatedBalloons });
    } else if (balloon.quantity > 0) {
      // Add new balloon
      onChange({
        ...balloonSet,
        balloons: [...balloonSet.balloons, balloon]
      });
    }
  };

  return (
    <div className="p-6 border border-pink rounded-2xl bg-white transition-all shadow-md hover:shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-bold text-dark">
          {setNumber > 1 ? `Balloon Set ${setNumber}` : 'Balloon Selection'}
        </h4>
        {showRemoveButton && (
          <button
            onClick={onRemove}
            className="text-orange hover:text-white hover:bg-orange p-2 rounded-full border border-orange bg-pink transition-colors"
            aria-label="Remove balloon set"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {balloonSizes.map((sizeOption) => {
          const existingBalloon = balloonSet.balloons.find(b => b.size === sizeOption.size);
          const quantity = existingBalloon ? existingBalloon.quantity : 0;
          return (
            <BalloonSelector
              key={sizeOption.size}
              size={sizeOption.size}
              name={sizeOption.name}
              quantity={quantity}
              onChange={(newQuantity) => updateBalloon({
                size: sizeOption.size,
                quantity: newQuantity,
                heliumCubicFeet: sizeOption.heliumCubicFeet
              })}
            />
          );
        })}
      </div>
    </div>
  );
};