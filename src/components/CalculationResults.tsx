import React from "react";
import { ShoppingCart, HelpCircle } from "lucide-react";
import { formatNumber } from "../utils/helpers";

interface CalculationResultsProps {
  totalHelium: {
    cubicFeet: number;
    liters: number;
    cubicMeters: number;
  };
  recommendedCylinders: Array<{
    id: string;
    name: string;
    size: string;
    capacity: number;
    quantity: number;
    imageUrl: string;
    price: number;
    buyUrl: string;
    depositNote?: string;
  }>;
  layout?: "horizontal" | "vertical";
}

export const CalculationResults: React.FC<CalculationResultsProps> = ({
  totalHelium,
  recommendedCylinders,
  layout = "horizontal",
}) => {
  const hasRecommendations =
    recommendedCylinders.length > 0 && totalHelium.cubicFeet > 0;
  const totalCost = recommendedCylinders.reduce(
    (sum, cylinder) => sum + cylinder.price * cylinder.quantity,
    0,
  );

  if (totalHelium.cubicFeet <= 0) {
    return (
      <div className="mt-0 border-t-0 pt-0 w-full h-full min-h-[400px] flex flex-col">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Your Results</h3>
        <div className="bg-gray-50 rounded-lg p-6 text-center text-gray-500 w-full">
          <div className="mb-3">
            Add balloons to see your helium requirements
          </div>
          <div className="text-sm">
            Select balloon sizes and quantities above to calculate how much
            helium you'll need
          </div>
        </div>
      </div>
    );
  }

  if (layout === "vertical") {
    return (
      <div className="w-full flex flex-col gap-8 h-full">
        {/* Total Helium Required */}
        <div className="p-8 rounded-2xl shadow-lg bg-gradient-to-br from-orange to-pink text-white flex flex-col items-center justify-center min-h-[220px] w-full">
          <div className="text-xs uppercase tracking-wider opacity-80">
            Total Helium Required
          </div>
          <div className="text-5xl font-bold mt-2">
            {formatNumber(totalHelium.cubicMeters)} m³
          </div>
          <div className="text-base opacity-80">
            ({formatNumber(totalHelium.liters)} liters /{" "}
            {formatNumber(totalHelium.cubicFeet)} ft³)
          </div>
        </div>
        {/* Recommended Cylinders */}
        {hasRecommendations && (
          <div className="bg-white rounded-2xl p-8 border border-pink shadow-lg flex flex-col min-h-[220px] w-full">
            <h4 className="font-bold text-dark mb-4 text-lg">
              Recommended Cylinders
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              {recommendedCylinders.map((cylinder, index) => (
                <div
                  key={index}
                  className="bg-pink/40 p-4 rounded-xl border border-pink flex flex-col sm:flex-row items-start w-full min-w-0 gap-4"
                >
                  <div className="flex-shrink-0 w-20 h-20 bg-pink rounded-lg flex items-center justify-center mx-auto sm:mx-0">
                    <img
                      src={cylinder.imageUrl}
                      alt={cylinder.name}
                      className="w-full h-full object-contain rounded-lg"
                      style={{ maxWidth: 80, maxHeight: 80 }}
                    />
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="font-semibold text-dark mb-1">
                        {cylinder.name}
                      </div>
                      <div className="text-sm text-gray-400 italic mb-1">
                        Capacity: {cylinder.capacity} x 9" latex balloons
                      </div>
                      <div className="text-sm font-medium text-orange mb-2">
                        Quantity: {cylinder.quantity}
                      </div>
                      <div className="mt-2 mb-2">
                        <div className="text-lg text-dark font-bold">
                          £{cylinder.price.toFixed(2)} each
                        </div>
                        {cylinder.depositNote && (
                          <div className="text-xs font-semibold mt-1">
                            {cylinder.depositNote.startsWith('simply pay a refundable deposit of') ? (
                              <>Plus <span className="text-orange font-bold">{cylinder.depositNote.replace('simply pay a refundable deposit of ', '')}</span> refundable deposit</>
                            ) : (
                              <span className="text-pink-700">{cylinder.depositNote}</span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                    <hr className="my-3 border-pink-200" />
                    <a
                      href={cylinder.buyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-orange text-white px-5 py-2.5 rounded-lg font-bold shadow-lg border-2 border-orange hover:bg-pink hover:text-white hover:scale-105 transition-all duration-200 text-base mt-2"
                      style={{ minHeight: 44 }}
                      aria-label={`Buy ${cylinder.name}`}
                    >
                      <ShoppingCart className="h-5 w-5" />
                      Buy Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-pink rounded-xl border border-pink-200 flex items-start w-full">
              <HelpCircle className="h-5 w-5 text-orange mr-3 flex-shrink-0 mt-1" />
              <div className="text-sm text-dark">
                <p className="font-bold mb-1">Why these cylinders?</p>
                <p>
                  We recommend the most efficient combination of cylinders based
                  on your helium needs, balancing cost and convenience.
                </p>
                <div className="mt-2 font-semibold text-orange">
                  Estimated Cost: £{totalCost.toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Default: horizontal layout
  return (
    <div className="mt-0 border-t-0 pt-0 w-full h-full min-h-[400px] flex flex-col">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Your Results</h3>
      <div className="flex flex-col lg:flex-row gap-8 w-full h-full">
        {/* Helium Required */}
        <div className="flex-1 mb-8 lg:mb-0 p-8 rounded-2xl shadow-lg bg-gradient-to-br from-orange to-pink text-white flex flex-col items-center justify-center min-h-[220px] w-full">
          <div className="text-xs uppercase tracking-wider opacity-80">
            Total Helium Required
          </div>
          <div className="text-5xl font-bold mt-2">
            {formatNumber(totalHelium.cubicMeters)} m³
          </div>
          <div className="text-base opacity-80">
            ({formatNumber(totalHelium.liters)} liters /{" "}
            {formatNumber(totalHelium.cubicFeet)} ft³)
          </div>
        </div>
        {/* Recommended Cylinders */}
        {hasRecommendations && (
          <div className="flex-1 bg-white rounded-2xl p-8 border border-pink shadow-lg flex flex-col min-h-[220px] w-full">
            <h4 className="font-bold text-dark mb-4 text-lg">
              Recommended Cylinders
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              {recommendedCylinders.map((cylinder, index) => (
                <div
                  key={index}
                  className="bg-pink/40 p-4 rounded-xl border border-pink flex flex-col sm:flex-row items-start w-full min-w-0 gap-4"
                >
                  <div className="flex-shrink-0 w-20 h-20 bg-pink rounded-lg flex items-center justify-center mx-auto sm:mx-0">
                    <img
                      src={cylinder.imageUrl}
                      alt={cylinder.name}
                      className="w-full h-full object-contain rounded-lg"
                      style={{ maxWidth: 80, maxHeight: 80 }}
                    />
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="font-semibold text-dark mb-1">
                        {cylinder.name}
                      </div>
                      <div className="text-sm text-gray-400 italic mb-1">
                        Capacity: {cylinder.capacity} x 9" latex balloons
                      </div>
                      <div className="text-sm font-medium text-orange mb-2">
                        Quantity: {cylinder.quantity}
                      </div>
                      <div className="mt-2 mb-2">
                        <div className="text-lg text-dark font-bold">
                          £{cylinder.price.toFixed(2)} each
                        </div>
                        {cylinder.depositNote && (
                          <div className="text-xs font-semibold mt-1">
                            {cylinder.depositNote.startsWith('simply pay a refundable deposit of') ? (
                              <>Plus <span className="text-orange font-bold">{cylinder.depositNote.replace('simply pay a refundable deposit of ', '')}</span> refundable deposit</>
                            ) : (
                              <span className="text-pink-700">{cylinder.depositNote}</span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                    <hr className="my-3 border-pink-200" />
                    <a
                      href={cylinder.buyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-orange text-white px-5 py-2.5 rounded-lg font-bold shadow-lg border-2 border-orange hover:bg-pink hover:text-white hover:scale-105 transition-all duration-200 text-base mt-2"
                      style={{ minHeight: 44 }}
                      aria-label={`Buy ${cylinder.name}`}
                    >
                      <ShoppingCart className="h-5 w-5" />
                      Buy Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-pink rounded-xl border border-pink-200 flex items-start w-full">
              <HelpCircle className="h-5 w-5 text-orange mr-3 flex-shrink-0 mt-1" />
              <div className="text-sm text-dark">
                <p className="font-bold mb-1">Why these cylinders?</p>
                <p>
                  We recommend the most efficient combination of cylinders based
                  on your helium needs, balancing cost and convenience.
                </p>
                <div className="mt-2 font-semibold text-orange">
                  Estimated Cost: £{totalCost.toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
