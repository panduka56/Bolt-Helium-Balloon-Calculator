import { BalloonSize, CylinderType } from "../types";

export const balloonSizes: BalloonSize[] = [
  {
    size: "5",
    name: '5"',
    heliumCubicMeters: 0.0017, // Qualatex: 0.06 ft³
    description: "Mini balloon, not suitable for helium (air-fill only)",
    canFloatWithHelium: false,
  },
  {
    size: "9",
    name: '9"',
    heliumCubicMeters: 0.007, // Qualatex: 0.25 ft³
    description: "Small latex balloon, floats with helium",
    canFloatWithHelium: true,
  },
  {
    size: "10",
    name: '10"',
    heliumCubicMeters: 0.01, // Extrapolated: 0.35 ft³
    description: "Small/medium latex balloon, floats with helium",
    canFloatWithHelium: true,
  },
  {
    size: "11",
    name: '11"',
    heliumCubicMeters: 0.015, // Qualatex: 0.5 ft³
    description: "Standard UK party balloon, floats with helium",
    canFloatWithHelium: true,
  },
  {
    size: "12",
    name: '12"',
    heliumCubicMeters: 0.018, // Extrapolated: 0.65 ft³
    description: "Popular for events, floats with helium",
    canFloatWithHelium: true,
  },
  {
    size: "16",
    name: '16"',
    heliumCubicMeters: 0.042, // Qualatex: 1.5 ft³
    description: "Large latex balloon, floats with helium",
    canFloatWithHelium: true,
  },
  {
    size: "18",
    name: '18"',
    heliumCubicMeters: 0.056, // Qualatex: 2.0 ft³
    description: "Large latex or foil balloon, floats with helium",
    canFloatWithHelium: true,
  },
  {
    size: "24",
    name: '24"',
    heliumCubicMeters: 0.142, // Qualatex: 5.0 ft³
    description: "Very large latex balloon, floats with helium",
    canFloatWithHelium: true,
  },
  {
    size: "36",
    name: '36" (3ft)',
    heliumCubicMeters: 0.425, // Qualatex: 15.0 ft³
    description: "Jumbo latex balloon, floats with helium",
    canFloatWithHelium: true,
  },
];

export const cylinderTypes: CylinderType[] = [
  // Disposables
  {
    id: "disp095heliumba",
    name: "Small Disposable Helium Gas Bottle",
    size: "0.95L",
    capacity: 10,
    imageUrl:
      "https://www.bottlegases.co.uk/wp-content/uploads/2025/02/Helium-Balloon-Gas-0.95L-for-Partys-Ballon-arches-Helium-needs-scaled.jpg",
    price: 17.99,
    buyUrl:
      "https://www.bottlegases.co.uk/product/small-disposable-helium-gas-bottle-for-10-balloons",
    cubicMeters: 0.095,
    liters: 0.95,
    productType: "disposable",
  },
  {
    id: "DISP22HELIUMBAL",
    name: "Medium Disposable Helium Gas Cylinder",
    size: "2.2L",
    capacity: 25,
    imageUrl:
      "https://www.bottlegases.co.uk/wp-content/uploads/2023/11/Balloon-Gas-Large-scaled.jpg",
    price: 34.99,
    buyUrl:
      "https://www.bottlegases.co.uk/product/small-helium-tank-25-balloons",
    cubicMeters: 0.22,
    liters: 2.2,
    productType: "disposable",
  },
  {
    id: "DISPHELIUM33BAL",
    name: "Large Disposable Helium Gas Cylinder",
    size: "3.3L",
    capacity: 40,
    imageUrl:
      "https://www.bottlegases.co.uk/wp-content/uploads/2024/12/20241105_103530-scaled.jpg",
    price: 39.5,
    buyUrl:
      "https://www.bottlegases.co.uk/product/large-disposable-helium-gas-cylinder-for-40-balloons",
    cubicMeters: 0.33,
    liters: 3.3,
    productType: "disposable",
  },
  // Refillable
  {
    id: "ADAMS9LHELIU",
    name: "9.4 Litre Refillable Helium Tank",
    size: "9.4L",
    capacity: 150,
    imageUrl:
      "https://www.bottlegases.co.uk/wp-content/uploads/2020/03/20l-helium.png",
    price: 253.76 - 55.0,
    buyUrl:
      "https://www.bottlegases.co.uk/product/9-4l-refillable-helium-tank/",
    cubicMeters: 1.2,
    liters: 9.4,
    productType: "refillable",
    depositNote: "£55.00 refundable deposit",
  },
  {
    id: "ADAMS2LHELIU",
    name: "2 Litre Refillable Helium Tank",
    size: "2L",
    capacity: 32,
    imageUrl:
      "https://www.bottlegases.co.uk/wp-content/uploads/2020/03/20l-helium.png",
    price: 87.77 - 25.0,
    buyUrl: "https://www.bottlegases.co.uk/product/2l-refillable-helium-tank/",
    cubicMeters: 0.42,
    liters: 2,
    productType: "refillable",
    depositNote: "simply pay a refundable deposit of £25.00",
  },
  {
    id: "ADAMS20LHELIU",
    name: "20 Litre Refillable Helium Tank",
    size: "20L",
    capacity: 320,
    imageUrl:
      "https://www.bottlegases.co.uk/wp-content/uploads/2020/03/20l-helium.png",
    price: 453.7 - 80.0,
    buyUrl: "https://www.bottlegases.co.uk/product/20l-refillable-helium-tank/",
    cubicMeters: 4,
    liters: 20,
    productType: "refillable",
    depositNote: "£80.00 refundable deposit",
  },
  {
    id: "ADAMS50LHELIU",
    name: "50L Refillable Helium Gas Cylinder: Trade Only",
    size: "50L",
    capacity: 800,
    imageUrl:
      "https://www.bottlegases.co.uk/wp-content/uploads/2020/03/20l-helium.png",
    price: 624.05,
    buyUrl:
      "https://www.adamsgas.co.uk/product/50l-refillable-helium-gas-cylinder-trade-only/",
    cubicMeters: 10,
    liters: 50,
    productType: "refillable",
  },
  // Inflators
  {
    id: "PREMIUMINFLATOR",
    name: "Helium Balloon Inflator – Premium",
    size: "",
    capacity: 0,
    imageUrl:
      "https://www.bottlegases.co.uk/wp-content/uploads/2024/11/premium-balloon-inflator.png",
    price: 78.0,
    buyUrl:
      "https://www.bottlegases.co.uk/product/helium-balloon-inflator-premium/",
    productType: "inflator",
  },
  {
    id: "STANDARDINFLATOR",
    name: "Helium Balloon Inflator – Standard",
    size: "",
    capacity: 0,
    imageUrl:
      "https://www.bottlegases.co.uk/wp-content/uploads/2024/11/basic-inflator.png",
    price: 35.0,
    buyUrl:
      "https://www.bottlegases.co.uk/product/helium-balloon-inflator-standard/",
    productType: "inflator",
  },
];
