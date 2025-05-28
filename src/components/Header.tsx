import React, { useState } from 'react';
import { Moon as Balloon, Menu } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Calculator', href: '#' },
  { name: 'Helium Products', href: '#' },
  { name: 'Delivery Info', href: '#' },
  { name: 'Help & Tips', href: '#' },
  { name: 'Contact', href: '#' },
];

export const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="flex items-center justify-between px-4 py-3 lg:py-4">
        {/* Left: Logo & Brand */}
        <div className="flex items-center space-x-3">
          <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-orange/20">
            <Balloon className="h-7 w-7 text-orange" />
          </span>
          <div>
            <div className="text-xl font-bold text-dark">Helium4U Calculator</div>
            <div className="text-xs text-gray-500">Your Helium, Calculated & Delivered</div>
          </div>
        </div>
        {/* Center: Navigation */}
        <nav className="hidden lg:flex space-x-8" aria-label="Main navigation">
          {NAV_LINKS.map(link => (
            <a key={link.name} href={link.href} className="text-dark hover:text-orange font-semibold transition-colors" aria-label={link.name}>{link.name}</a>
          ))}
        </nav>
        {/* Right: CTA & Phone */}
        <div className="hidden lg:flex items-center space-x-4">
          <a href="https://www.bottlegases.co.uk/product-category/helium-canisters/" target="_blank" rel="noopener" className="bg-orange text-white px-4 py-2 rounded-lg font-bold shadow hover:bg-pink transition" aria-label="Shop Helium Cylinders">Shop Helium Cylinders</a>
          <a href="tel:08001954445" className="text-blue-700 font-bold underline" aria-label="Call Helium4U">Call: 0800 195 4445</a>
        </div>
        {/* Mobile Hamburger */}
        <button className="lg:hidden p-2" aria-label="Open menu" onClick={() => setMobileOpen(!mobileOpen)}>
          <Menu className="h-7 w-7 text-orange" />
        </button>
      </div>
      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden bg-white border-t border-orange px-4 py-4 space-y-3" aria-label="Mobile navigation">
          {NAV_LINKS.map(link => (
            <a key={link.name} href={link.href} className="block text-dark font-semibold py-2 hover:text-orange transition-colors" aria-label={link.name}>{link.name}</a>
          ))}
          <a href="https://www.bottlegases.co.uk/product-category/helium-canisters/" target="_blank" rel="noopener" className="block bg-orange text-white px-4 py-2 rounded-lg font-bold shadow hover:bg-pink transition mt-2 text-center" aria-label="Shop Helium Cylinders">Shop Helium Cylinders</a>
          <a href="tel:08001954445" className="block text-blue-700 font-bold underline text-center mt-2" aria-label="Call Helium4U">Call: 0800 195 4445</a>
        </nav>
      )}
      {/* Trust Indicators */}
      <div className="bg-pink/30 text-center py-2 text-sm text-dark flex justify-center space-x-6 border-t border-pink">
        <span>✓ UK Wide Delivery</span>
        <span>✓ Quality Guaranteed</span>
        <span>✓ Expert Support</span>
      </div>
    </header>
  );
};