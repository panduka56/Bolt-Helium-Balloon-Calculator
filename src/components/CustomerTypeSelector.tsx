import React from "react";
import { Users, UserRound } from "lucide-react";
import { CustomerType } from "../types";

interface CustomerTypeSelectorProps {
  customerType: CustomerType;
  onChange: (type: CustomerType) => void;
}

export const CustomerTypeSelector: React.FC<CustomerTypeSelectorProps> = ({
  customerType,
  onChange,
}) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-medium text-gray-700 mb-3">I am a:</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          onClick={() => onChange("retail")}
          className={`flex items-center p-4 border-2 rounded-lg transition-all ${
            customerType === "retail"
              ? "border-blue-500 bg-blue-50 text-blue-700"
              : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
          }`}
        >
          <UserRound className="h-6 w-6 mr-3" />
          <div className="text-left">
            <div className="font-medium">Retail Customer</div>
            <div className="text-sm opacity-75">
              I'm buying helium for personal events or one-time use
            </div>
          </div>
        </button>

        <button
          onClick={() => onChange("trade")}
          className={`flex items-center p-4 border-2 rounded-lg transition-all ${
            customerType === "trade"
              ? "border-purple-500 bg-purple-50 text-purple-700"
              : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
          }`}
        >
          <Users className="h-6 w-6 mr-3" />
          <div className="text-left">
            <div className="font-medium">Trade Customer</div>
            <div className="text-sm opacity-75">
              I'm a business buying helium for commercial use
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};
