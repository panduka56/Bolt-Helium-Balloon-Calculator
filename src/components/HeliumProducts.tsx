import React from "react";
import { cylinderTypes } from "../utils/constants";

const HeliumProducts: React.FC = () => {
  return (
    <main className="max-w-[1400px] mx-auto px-4 lg:px-8 py-12">
      <h1 className="text-4xl lg:text-5xl font-bold mb-8 text-dark text-center">
        Helium Products
      </h1>
      <nav className="mb-8 flex flex-wrap justify-center gap-4 text-base">
        <a href="/" className="text-orange underline hover:text-pink">Calculator</a>
        <a href="/delivery" className="text-orange underline hover:text-pink">Delivery Info</a>
        <a href="/tips" className="text-orange underline hover:text-pink">Help & Tips</a>
        <a href="/contact" className="text-orange underline hover:text-pink">Contact</a>
      </nav>
      <h2 className="text-2xl font-bold mb-4 text-dark text-center">Disposable Helium Cylinders</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {cylinderTypes.filter((c) => c.productType === "disposable").map(product => (
          <div key={product.id} className="bg-white p-8 rounded-xl border border-pink/30 flex flex-col items-center hover:shadow-lg transition-all duration-300 hover:scale-105">
            <img src={product.imageUrl} alt={product.name} className="h-28 mb-4 object-contain" />
            <div className="font-semibold text-dark text-center text-base lg:text-lg">{product.name}</div>
            <div className="text-sm text-gray-500 mt-1">{product.cubicMeters ? `${product.cubicMeters} m³` : ""}{product.liters ? ` (${product.liters}L)` : ""}{product.capacity ? ` – Fills up to ${product.capacity} balloons` : ""}</div>
            <div className="text-orange font-bold mt-2 text-xl">£{product.price.toFixed(2)}</div>
            <a href={product.buyUrl} target="_blank" rel="noopener noreferrer" className="mt-6 btn-primary text-base font-bold" aria-label={`View ${product.name}`}>View Product</a>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-bold mb-4 text-dark text-center">Refillable Helium Cylinders</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cylinderTypes.filter((c) => c.productType === "refillable").map(product => (
          <div key={product.id} className="bg-white p-8 rounded-xl border border-pink/30 flex flex-col items-center hover:shadow-lg transition-all duration-300 hover:scale-105">
            <img src={product.imageUrl} alt={product.name} className="h-28 mb-4 object-contain" />
            <div className="font-semibold text-dark text-center text-base lg:text-lg">{product.name}</div>
            <div className="text-sm text-gray-500 mt-1">{product.cubicMeters ? `${product.cubicMeters} m³` : ""}{product.liters ? ` (${product.liters}L)` : ""}{product.capacity ? ` – Fills up to ${product.capacity} balloons` : ""}</div>
            <div className="text-orange font-bold mt-2 text-xl">£{product.price.toFixed(2)}</div>
            {product.depositNote && <div className="text-xs font-semibold mt-1 text-pink-700">{product.depositNote}</div>}
            <a href={product.buyUrl} target="_blank" rel="noopener noreferrer" className="mt-6 btn-primary text-base font-bold" aria-label={`View ${product.name}`}>View Product</a>
          </div>
        ))}
      </div>
    </main>
  );
};

export default HeliumProducts;
