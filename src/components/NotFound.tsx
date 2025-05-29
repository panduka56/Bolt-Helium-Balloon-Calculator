import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => (
  <main className="min-h-screen flex flex-col items-center justify-center bg-beige px-4 py-16">
    <div className="bg-white rounded-2xl shadow-xl p-10 max-w-lg w-full text-center">
      <h1 className="text-6xl font-extrabold text-orange mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-2 text-dark">Page Not Found</h2>
      <p className="mb-6 text-gray-600">Sorry, the page you are looking for does not exist or has been moved.</p>
      <nav className="mb-6 flex flex-wrap justify-center gap-4 text-base">
        <Link to="/" className="text-orange underline hover:text-pink">Home</Link>
        <Link to="/products" className="text-orange underline hover:text-pink">Helium Products</Link>
        <Link to="/delivery" className="text-orange underline hover:text-pink">Delivery Info</Link>
        <Link to="/tips" className="text-orange underline hover:text-pink">Help & Tips</Link>
        <Link to="/contact" className="text-orange underline hover:text-pink">Contact</Link>
      </nav>
      <form className="mb-4">
        <input type="text" placeholder="Search..." className="input-primary w-2/3 max-w-xs mr-2" />
        <button type="submit" className="btn-primary px-4 py-2">Search</button>
      </form>
      <div className="text-xs text-gray-400">If you believe this is an error, please <a href="/contact" className="underline text-orange">contact us</a>.</div>
    </div>
  </main>
);

export default NotFound; 