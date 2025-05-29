import React from "react";
import { PlusCircle } from "lucide-react";
import { BalloonSetComponent } from "./BalloonSetComponent";
import { BalloonSet } from "../types";

interface BalloonSetsProps {
  balloonSets: BalloonSet[];
  onChange: (balloonSets: BalloonSet[]) => void;
}

export const BalloonSets: React.FC<BalloonSetsProps> = ({
  balloonSets,
  onChange,
}) => {
  const addBalloonSet = () => {
    onChange([...balloonSets, { id: Date.now().toString(), balloons: [] }]);
  };

  const updateBalloonSet = (index: number, updatedSet: BalloonSet) => {
    const newSets = [...balloonSets];
    newSets[index] = updatedSet;
    onChange(newSets);
  };

  const removeBalloonSet = (index: number) => {
    if (balloonSets.length <= 1) return;
    const newSets = balloonSets.filter((_, i) => i !== index);
    onChange(newSets);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-dark">Balloon Selection</h3>
        {balloonSets.length > 1 && (
          <div className="text-sm text-gray-400">
            {balloonSets.length} sets defined
          </div>
        )}
      </div>
      <div className="space-y-8">
        {balloonSets.map((set, index) => (
          <BalloonSetComponent
            key={set.id}
            balloonSet={set}
            onChange={(updatedSet) => updateBalloonSet(index, updatedSet)}
            onRemove={() => removeBalloonSet(index)}
            showRemoveButton={balloonSets.length > 1}
            setNumber={index + 1}
          />
        ))}
      </div>
      <button
        onClick={addBalloonSet}
        className="mt-8 flex items-center justify-center w-full py-3 px-4 border-2 border-dashed border-orange rounded-xl text-orange hover:bg-orange/10 transition-colors font-semibold text-lg"
      >
        <PlusCircle className="h-6 w-6 mr-2" />
        <span>Add Another Balloon Set</span>
      </button>
    </div>
  );
};
