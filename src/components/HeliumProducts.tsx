import React from "react";

const PRODUCTS = [
  // Disposables
  {
    name: "Small Disposable Helium Gas Bottle",
    capacity: "0.095 m³ (0.95L) – Fills up to 10 balloons",
    price: "£17.99",
    url: "https://www.bottlegases.co.uk/product/small-disposable-helium-gas-bottle-for-10-balloons",
    img: "https://www.bottlegases.co.uk/wp-content/uploads/2025/02/Helium-Balloon-Gas-0.95L-for-Partys-Ballon-arches-Helium-needs-scaled.jpg",
  },
  {
    name: "Medium Disposable Helium Gas Cylinder",
    capacity: "0.22 m³ (2.2L) – Fills up to 25 balloons",
    price: "£34.99",
    url: "https://www.bottlegases.co.uk/product/small-helium-tank-25-balloons",
    img: "https://www.bottlegases.co.uk/wp-content/uploads/2023/11/Balloon-Gas-Large-scaled.jpg",
  },
  {
    name: "Large Disposable Helium Gas Cylinder",
    capacity: "0.33 m³ (3.3L) – Fills up to 40 balloons",
    price: "£39.50",
    url: "https://www.bottlegases.co.uk/product/large-disposable-helium-gas-cylinder-for-40-balloons",
    img: "https://www.bottlegases.co.uk/wp-content/uploads/2024/12/20241105_103530-scaled.jpg",
  },
  // Refillable
  {
    name: "2 Litre Refillable Helium Tank",
    capacity: "0.42 m³ (2L) – Fills up to 32 balloons",
    price: "£87.77",
    url: "https://www.bottlegases.co.uk/product/2l-refillable-helium-tank/",
    img: "https://www.bottlegases.co.uk/wp-content/uploads/2020/03/20l-helium.png",
  },
  {
    name: "9.4 Litre Refillable Helium Tank",
    capacity: "1.2 m³ (9.4L) – Fills up to 150 balloons",
    price: "£253.76",
    url: "https://www.bottlegases.co.uk/product/9-4l-refillable-helium-tank/",
    img: "https://www.bottlegases.co.uk/wp-content/uploads/2020/03/20l-helium.png",
  },
  {
    name: "20 Litre Refillable Helium Tank",
    capacity: "4 m³ (20L) – Fills up to 320 balloons",
    price: "£453.70",
    url: "https://www.bottlegases.co.uk/product/20l-refillable-helium-tank/",
    img: "https://www.bottlegases.co.uk/wp-content/uploads/2020/03/20l-helium.png",
  },
  {
    name: "50L Refillable Helium Gas Cylinder: Trade Only",
    capacity: "10 m³ (50L) – Fills up to 800 balloons",
    price: "£655.04",
    url: "https://www.adamsgas.co.uk/product/50l-refillable-helium-gas-cylinder-trade-only/",
    img: "https://www.bottlegases.co.uk/wp-content/uploads/2020/03/20l-helium.png",
  },
  // Inflators
  {
    name: "Helium Balloon Inflator – Premium",
    capacity: "Premium inflator for latex and foil balloons",
    price: "£78.00",
    url: "https://www.bottlegases.co.uk/product/helium-balloon-inflator-premium/",
    img: "https://www.bottlegases.co.uk/wp-content/uploads/2024/11/premium-balloon-inflator.png",
  },
  {
    name: "Helium Balloon Inflator – Standard",
    capacity: "Standard inflator for latex balloons",
    price: "£35.00",
    url: "https://www.bottlegases.co.uk/product/helium-balloon-inflator-standard/",
    img: "https://www.bottlegases.co.uk/wp-content/uploads/2024/11/basic-inflator.png",
  },
];

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
        {PRODUCTS.map((product) => (
          <div
            key={product.name}
            className="bg-white p-8 rounded-xl border border-pink/30 flex flex-col items-center hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <img
              src={product.img}
              alt={product.name}
              className="h-28 mb-4 object-contain"
            />
            <div className="font-semibold text-dark text-center text-base lg:text-lg">
              {product.name}
            </div>
            <div className="text-sm text-gray-500 mt-1">{product.capacity}</div>
            <div className="text-orange font-bold mt-2 text-xl">
              from {product.price}
            </div>
            <a
              href={product.url}
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
