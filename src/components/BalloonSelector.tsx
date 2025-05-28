import React from 'react';
import { Plus, Minus } from 'lucide-react';

interface BalloonSelectorProps {
  size: string;
  name: string;
  quantity: number;
  onChange: (quantity: number) => void;
}

export const BalloonSelector: React.FC<BalloonSelectorProps> = ({
  size,
  name,
  quantity,
  onChange
}) => {
  const handleIncrement = () => {
    onChange(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      onChange(quantity - 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue) && newValue >= 0) {
      onChange(newValue);
    }
  };

  return (
    <div className={`p-4 border rounded-xl ${
      quantity > 0 ? 'border-orange bg-pink/40' : 'border-gray-200 bg-white'
    } transition-all`}>
      <div className="text-base font-semibold mb-1 text-dark">{name}</div>
      <div className="text-xs text-gray-500 mb-2">{size} inch</div>
      
      <div className="flex items-center">
        <button
          onClick={handleDecrement}
          disabled={quantity <= 0}
          title="Decrease quantity"
          className={`h-9 w-9 rounded-full flex items-center justify-center transition-colors border-2 ${
            quantity <= 0 
              ? 'text-gray-300 bg-gray-100 border-gray-200' 
              : 'text-orange bg-pink border-orange hover:bg-orange/20'
          }`}
        >
          <Minus className="h-5 w-5" />
        </button>
        
        <input
          type="number"
          min="0"
          value={quantity}
          onChange={handleInputChange}
          aria-label={`Quantity for ${name} (${size} inch)`}
          className="mx-3 w-16 h-9 border border-orange rounded-xl text-center focus:border-orange focus:ring focus:ring-orange/30 focus:ring-opacity-50 text-lg font-semibold text-dark bg-white"
        />
        
        <button
          onClick={handleIncrement}
          title="Increase quantity"
          className="h-9 w-9 rounded-full flex items-center justify-center bg-orange text-white hover:bg-pink border-2 border-orange transition-colors"
        >
          <Plus className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};