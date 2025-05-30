import React from "react";
import { cylinderTypes } from "../utils/constants";
import { Link } from "react-router-dom";

const HeliumProducts: React.FC = () => {
  return (
    <main className="max-w-[1400px] mx-auto px-4 lg:px-8 py-12">
      <h1 className="text-4xl lg:text-5xl font-bold mb-8 text-dark text-center">
        Helium Gas Cylinder Sizes & Capacity Chart
      </h1>
      <p className="mb-6 text-center text-lg">
        Not sure how much helium you need? Use our <Link to="/" className="text-orange underline hover:text-pink font-semibold">Helium Balloon Calculator</Link> to estimate the right gas tank size for your event or party.
      </p>
      <nav className="mb-8 flex flex-wrap justify-center gap-4 text-base">
        <Link to="/" className="text-orange underline hover:text-pink">Helium Balloon Calculator</Link>
        <Link to="/delivery" className="text-orange underline hover:text-pink">Helium Gas Delivery Info</Link>
        <Link to="/tips" className="text-orange underline hover:text-pink">Balloon & Helium Tips</Link>
        <Link to="/contact" className="text-orange underline hover:text-pink">Contact</Link>
      </nav>
      <h2 className="text-2xl font-bold mb-4 text-dark text-center">Disposable Helium Cylinders</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {cylinderTypes.filter((c) => c.productType === "disposable").map(product => (
          <div key={product.id} className="bg-white p-8 rounded-xl border border-pink/30 flex flex-col items-center hover:shadow-lg transition-all duration-300 hover:scale-105">
            <img src={product.imageUrl} alt={product.name} className="h-28 mb-4 object-contain" />
            <div className="font-semibold text-dark text-center text-base lg:text-lg">{product.name}</div>
            <div className="text-sm text-gray-500 mt-1">{product.cubicMeters ? `${product.cubicMeters} m³` : ""}{product.liters ? ` (${product.liters}L)` : ""}{product.capacity ? ` – Fills up to ${product.capacity} balloons` : ""}</div>
            <div className="text-orange font-bold mt-2 text-xl">£{product.price.toFixed(2)}</div>
            <Link to="/delivery" className="mt-2 text-sm text-orange underline hover:text-pink">See delivery info</Link>
            <a href={product.buyUrl} target="_blank" rel="noopener noreferrer" className="mt-6 btn-primary text-base font-bold" aria-label={`View ${product.name}`}>View Product</a>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-bold mb-4 text-dark text-center">Refillable Helium Cylinders</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {cylinderTypes.filter((c) => c.productType === "refillable").map(product => (
          <div key={product.id} className="bg-white p-8 rounded-xl border border-pink/30 flex flex-col items-center hover:shadow-lg transition-all duration-300 hover:scale-105">
            <img src={product.imageUrl} alt={product.name} className="h-28 mb-4 object-contain" />
            <div className="font-semibold text-dark text-center text-base lg:text-lg">{product.name}</div>
            <div className="text-sm text-gray-500 mt-1">{product.cubicMeters ? `${product.cubicMeters} m³` : ""}{product.liters ? ` (${product.liters}L)` : ""}{product.capacity ? ` – Fills up to ${product.capacity} balloons` : ""}</div>
            <div className="text-orange font-bold mt-2 text-xl">£{product.price.toFixed(2)}</div>
            {product.depositNote && <div className="text-xs font-semibold mt-1 text-pink-700">{product.depositNote}</div>}
            <Link to="/delivery" className="mt-2 text-sm text-orange underline hover:text-pink">See delivery info</Link>
            <a href={product.buyUrl} target="_blank" rel="noopener noreferrer" className="mt-6 btn-primary text-base font-bold" aria-label={`View ${product.name}`}>View Product</a>
          </div>
        ))}
      </div>
      <section className="my-12">
        <h2 className="text-2xl font-bold mb-4 text-dark text-center">Helium Gas Capacity Chart</h2>
        <p className="mb-4 text-center">Use this chart to find the gas capacity and estimate how many latex or foil balloons you can fill with each helium cylinder size.</p>
        <div className="overflow-x-auto">
          <table className="w-full max-w-2xl mx-auto text-sm border border-pink-200 rounded-xl">
            <thead>
              <tr className="bg-pink/20">
                <th className="p-2">Cylinder Size</th>
                <th className="p-2">Liters</th>
                <th className="p-2">Cubic Meters</th>
                <th className="p-2">Approx. 9" Latex Balloons</th>
                <th className="p-2">Approx. 18" Foil Balloons</th>
              </tr>
            </thead>
            <tbody>
              {cylinderTypes.map(c => (
                <tr key={c.id} className="border-t border-pink-100">
                  <td className="p-2 font-semibold">{c.name}</td>
                  <td className="p-2">{c.liters || (c.cubicMeters ? Math.round(c.cubicMeters * 1000) : "")}</td>
                  <td className="p-2">{c.cubicMeters}</td>
                  <td className="p-2">{c.capacity}</td>
                  <td className="p-2">{Math.max(1, Math.floor((c.cubicMeters || 0) * 1000 / 50))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <div className="mt-8 text-center">
        <Link to="/tips" className="text-orange underline hover:text-pink font-semibold">Read our Helium Balloon Tips & FAQs</Link>
      </div>
    </main>
  );
};

export default HeliumProducts;
