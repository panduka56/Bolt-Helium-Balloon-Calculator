import React from "react";
import { cylinderTypes } from "../utils/constants";

const HeliumProducts: React.FC = () => {
  return (
    <main className="max-w-[1400px] mx-auto px-4 lg:px-8 py-12">
      <h1 className="text-4xl lg:text-5xl font-bold mb-8 text-dark text-center">
        Helium Products
      </h1>
      <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
        Browse our most popular disposable helium cylinders, perfect for
        parties, events, and celebrations. All products are supplied by Bottle
        Gases, the UK's trusted gas supplier.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cylinderTypes
          .filter((c) => c.productType === "disposable" || c.productType === "refillable")
          .map((product) => (
            <div
              key={product.id}
              className="bg-white p-8 rounded-xl border border-pink/30 flex flex-col items-center hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="h-28 mb-4 object-contain"
              />
              <div className="font-semibold text-dark text-center text-base lg:text-lg">
                {product.name}
              </div>
              <div className="text-sm text-gray-500 mt-1">
                {product.cubicMeters ? `${product.cubicMeters} m³` : ""}
                {product.liters ? ` (${product.liters}L)` : ""}
                {product.capacity ? ` – Fills up to ${product.capacity} balloons` : ""}
              </div>
              <div className="text-orange font-bold mt-2 text-xl">
                £{product.price.toFixed(2)}
              </div>
              <a
                href={product.buyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 btn-primary text-base font-bold"
                aria-label={`View ${product.name}`}
              >
                View Product
              </a>
            </div>
          ))}
      </div>
    </main>
  );
};

export default HeliumProducts;
