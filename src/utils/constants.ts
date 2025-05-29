import { BalloonSize, CylinderType } from "../types";

export const balloonSizes: BalloonSize[] = [
  {
    size: "5",
    name: "Small",
    heliumCubicFeet: 0.016,
  },
  {
    size: "9",
    name: "Medium",
    heliumCubicFeet: 0.25,
  },
  {
    size: "11",
    name: "Standard",
    heliumCubicFeet: 0.5,
  },
  {
    size: "16",
    name: "Large",
    heliumCubicFeet: 0.9,
  },
  {
    size: "24",
    name: "Giant",
    heliumCubicFeet: 3.0,
  },
  {
    size: "36",
    name: "Jumbo",
    heliumCubicFeet: 14.0,
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
    price: 253.76,
    buyUrl:
      "https://www.bottlegases.co.uk/product/9-4l-refillable-helium-tank/",
    cubicMeters: 1.2,
    liters: 9.4,
    productType: "refillable",
  },
  {
    id: "ADAMS2LHELIU",
    name: "2 Litre Refillable Helium Tank",
    size: "2L",
    capacity: 32,
    imageUrl:
      "https://www.bottlegases.co.uk/wp-content/uploads/2020/03/20l-helium.png",
    price: 87.77,
    buyUrl: "https://www.bottlegases.co.uk/product/2l-refillable-helium-tank/",
    cubicMeters: 0.42,
    liters: 2,
    productType: "refillable",
  },
  {
    id: "ADAMS20LHELIU",
    name: "20 Litre Refillable Helium Tank",
    size: "20L",
    capacity: 320,
    imageUrl:
      "https://www.bottlegases.co.uk/wp-content/uploads/2020/03/20l-helium.png",
    price: 453.7,
    buyUrl: "https://www.bottlegases.co.uk/product/20l-refillable-helium-tank/",
    cubicMeters: 4,
    liters: 20,
    productType: "refillable",
  },
  {
    id: "ADAMS50LHELIU",
    name: "50L Refillable Helium Gas Cylinder: Trade Only",
    size: "50L",
    capacity: 800,
    imageUrl:
      "https://www.bottlegases.co.uk/wp-content/uploads/2020/03/20l-helium.png",
    price: 655.04,
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

// Conversion constants
export const CUBIC_FEET_TO_LITERS = 28.3168;
export const CUBIC_FEET_TO_CUBIC_METERS = 0.0283168;
