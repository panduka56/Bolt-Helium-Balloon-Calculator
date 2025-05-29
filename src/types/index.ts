export interface Balloon {
  size: string;
  quantity: number;
  heliumCubicFeet: number;
}

export interface BalloonSet {
  id: string;
  balloons: Balloon[];
}

export interface BalloonSize {
  size: string;
  name: string;
  heliumCubicFeet: number;
}

export interface CylinderType {
  id: string;
  name: string;
  size: string;
  capacity: number;
  imageUrl: string;
  price: number;
  buyUrl: string;
  cubicMeters?: number;
  liters?: number;
  productType?: "disposable" | "refillable" | "inflator";
  depositNote?: string;
}
