import { BalloonSize, CylinderType } from '../types';

export const balloonSizes: BalloonSize[] = [
  {
    size: '5',
    name: 'Small',
    heliumCubicFeet: 0.016
  },
  {
    size: '9',
    name: 'Medium',
    heliumCubicFeet: 0.25
  },
  {
    size: '11',
    name: 'Standard',
    heliumCubicFeet: 0.5
  },
  {
    size: '16',
    name: 'Large',
    heliumCubicFeet: 0.9
  },
  {
    size: '24',
    name: 'Giant',
    heliumCubicFeet: 3.0
  },
  {
    size: '36',
    name: 'Jumbo',
    heliumCubicFeet: 14.0
  }
];

export const cylinderTypes: CylinderType[] = [
  {
    id: 'disp095heliumba',
    name: 'Small Disposable Helium Gas Bottle',
    size: '0.95L',
    capacity: 10,
    imageUrl: 'https://www.bottlegases.co.uk/wp-content/uploads/2025/02/Helium-Balloon-Gas-0.95L-for-Partys-Ballon-arches-Helium-needs-scaled.jpg',
    price: 17.99,
    buyUrl: 'https://www.bottlegases.co.uk/product/small-disposable-helium-gas-bottle-for-10-balloons'
  },
  {
    id: 'DISP22HELIUMBAL',
    name: 'Medium Disposable Helium Gas Cylinder',
    size: '2.2L',
    capacity: 25,
    imageUrl: 'https://www.bottlegases.co.uk/wp-content/uploads/2023/11/Balloon-Gas-Large-scaled.jpg',
    price: 34.99,
    buyUrl: 'https://www.bottlegases.co.uk/product/small-helium-tank-25-balloons'
  },
  {
    id: 'FILLNAWAY30',
    name: 'Helium Canister for 30 Balloons',
    size: '30',
    capacity: 30,
    imageUrl: 'https://www.bottlegases.co.uk/wp-content/uploads/2020/03/fillnaway30.png',
    price: 60.00,
    buyUrl: 'https://www.bottlegases.co.uk/product/helium-canister-30-balloons'
  },
  {
    id: 'DISPHELIUM33BAL',
    name: 'Large Disposable Helium Gas Cylinder',
    size: '3.3L',
    capacity: 40,
    imageUrl: 'https://www.bottlegases.co.uk/wp-content/uploads/2024/12/20241105_103530-scaled.jpg',
    price: 39.50,
    buyUrl: 'https://www.bottlegases.co.uk/product/large-disposable-helium-gas-cylinder-for-40-balloons'
  },
  {
    id: 'FILLNAWAY50',
    name: 'Disposable Helium Canister',
    size: '50',
    capacity: 50,
    imageUrl: 'https://www.bottlegases.co.uk/wp-content/uploads/2020/03/fillnaway50.png',
    price: 80.00,
    buyUrl: 'https://www.bottlegases.co.uk/product/helium-canister-50-balloons'
  }
];

// Conversion constants
export const CUBIC_FEET_TO_LITERS = 28.3168;