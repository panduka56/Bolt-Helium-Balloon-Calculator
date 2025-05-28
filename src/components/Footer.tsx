import React from 'react';

const PRODUCTS = [
  {
    name: 'Medium Disposable Helium Gas Cylinder',
    capacity: 'Fills up to 25 balloons',
    price: '£34.99',
    url: 'https://www.bottlegases.co.uk/product/small-helium-tank-25-balloons',
    img: 'https://www.bottlegases.co.uk/wp-content/uploads/2023/11/Balloon-Gas-Large-scaled.jpg',
  },
  {
    name: 'Large Disposable Helium Gas Cylinder',
    capacity: 'Fills up to 40 balloons',
    price: '£39.50',
    url: 'https://www.bottlegases.co.uk/product/large-disposable-helium-gas-cylinder-for-40-balloons',
    img: 'https://www.bottlegases.co.uk/wp-content/uploads/2024/12/20241105_103530-scaled.jpg',
  },
  {
    name: 'Helium Canister for 30 Balloons',
    capacity: 'Fills up to 30 balloons',
    price: '£60.00',
    url: 'https://www.bottlegases.co.uk/product/helium-canister-30-balloons',
    img: 'https://www.bottlegases.co.uk/wp-content/uploads/2020/03/fillnaway30.png',
  },
  {
    name: 'Small Disposable Helium Gas Bottle',
    capacity: 'Fills up to 10 balloons',
    price: '£17.99',
    url: 'https://www.bottlegases.co.uk/product/small-disposable-helium-gas-bottle-for-10-balloons',
    img: 'https://www.bottlegases.co.uk/wp-content/uploads/2025/02/Helium-Balloon-Gas-0.95L-for-Partys-Ballon-arches-Helium-needs-scaled.jpg',
  },
];

const QUICK_LINKS = [
  { name: 'Helium Calculator', href: '#' },
  { name: 'Helium Products', href: '#' },
  { name: 'Delivery Information', href: '#' },
  { name: 'Balloon Tips & Guides', href: '#' },
  { name: 'Safety Information', href: '#' },
  { name: 'Terms & Conditions', href: '#' },
];

const OTHER_GAS = [
  { name: 'CO2 for Home Bars', href: '#' },
  { name: 'Welding Gases', href: '#' },
  { name: 'LPG & Camping Gas', href: '#' },
  { name: 'All Gas Products', href: '#' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-16 mt-20">
      {/* Popular Helium Solutions */}
      <section className="max-w-[1400px] mx-auto px-4 lg:px-8 -mt-8 mb-12">
        <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10">
          <h3 className="text-2xl lg:text-3xl font-bold mb-8 text-dark text-center">Popular Helium Solutions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map(product => (
              <div key={product.name} className="bg-gradient-to-br from-pink/20 to-orange/10 p-6 rounded-xl border border-pink/30 flex flex-col items-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <img src={product.img} alt={product.name} className="h-24 mb-4 object-contain" />
                <div className="font-semibold text-dark text-center text-sm lg:text-base">{product.name}</div>
                <div className="text-sm text-gray-500 mt-1">{product.capacity}</div>
                <div className="text-orange font-bold mt-2 text-lg">from {product.price}</div>
                <a 
                  href={product.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-4 bg-gradient-to-r from-orange to-pink text-white px-4 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-200 text-sm" 
                  aria-label={`View ${product.name}`}
                >
                  View Product
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 px-4 lg:px-8 pb-12">
        {/* About Helium4U */}
        <div className="lg:col-span-1">
          <h4 className="text-xl font-bold mb-4 text-white">About Helium4U</h4>
          <p className="text-gray-300 text-sm mb-4 leading-relaxed">Part of Bottle Gases - UK's leading gas supplier. Trusted by thousands for parties, events, and celebrations.</p>
          <a href="https://www.bottlegases.co.uk" target="_blank" rel="noopener noreferrer" className="text-orange hover:text-pink transition-colors text-sm font-semibold">Visit Bottle Gases →</a>
        </div>
        
        {/* Customer Support */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-white">Need Help?</h4>
          <div className="space-y-2">
            <p className="text-gray-300 text-sm">Phone: <a href="tel:08001954445" className="text-orange hover:text-pink transition-colors font-semibold">0800 195 4445</a></p>
            <p className="text-gray-300 text-sm">Email: <a href="mailto:sales@adamsgas.co.uk" className="text-orange hover:text-pink transition-colors">sales@adamsgas.co.uk</a></p>
            <p className="text-gray-300 text-sm">Live chat: <span className="text-orange">(Coming Soon)</span></p>
            <a href="#" className="text-orange hover:text-pink transition-colors text-sm font-semibold inline-block mt-2">View FAQ →</a>
          </div>
        </div>
        
        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2">
            {QUICK_LINKS.map(link => (
              <li key={link.name}>
                <a href={link.href} className="text-gray-300 hover:text-orange transition-colors text-sm inline-flex items-center group" aria-label={link.name}>
                  <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Other Gas Solutions */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-white">Other Gas Solutions</h4>
          <ul className="space-y-2">
            {OTHER_GAS.map(link => (
              <li key={link.name}>
                <a href={link.href} className="text-gray-300 hover:text-orange transition-colors text-sm inline-flex items-center group" aria-label={link.name}>
                  <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Company Info & Social */}
        <div className="flex flex-col">
          <h4 className="text-xl font-bold mb-4 text-white">Connect</h4>
          <div className="flex space-x-3 mb-4">
            <a href="#" aria-label="Facebook" className="bg-gray-800 p-2 rounded-full text-orange hover:bg-orange hover:text-white transition-all duration-200">
              <svg width="20" height="20" fill="currentColor"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5 3.657 9.127 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.127 22 17 22 12"/></svg>
            </a>
            <a href="#" aria-label="Twitter" className="bg-gray-800 p-2 rounded-full text-orange hover:bg-orange hover:text-white transition-all duration-200">
              <svg width="20" height="20" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.59-2.47.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 8.99 4.07 7.13 1.64 4.15c-.37.64-.58 1.39-.58 2.19 0 1.51.77 2.84 1.94 3.62-.72-.02-1.4-.22-1.99-.55v.06c0 2.11 1.5 3.87 3.5 4.27-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.68 2.12 2.91 3.99 2.94A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.39-.01-.58A8.72 8.72 0 0 0 24 4.59a8.48 8.48 0 0 1-2.54.7z"/></svg>
            </a>
            <a href="#" aria-label="Instagram" className="bg-gray-800 p-2 rounded-full text-orange hover:bg-orange hover:text-white transition-all duration-200">
              <svg width="20" height="20" fill="currentColor"><circle cx="12" cy="12" r="3.2"/><path d="M16.8 2H7.2A5.2 5.2 0 0 0 2 7.2v9.6A5.2 5.2 0 0 0 7.2 22h9.6A5.2 5.2 0 0 0 22 16.8V7.2A5.2 5.2 0 0 0 16.8 2zm3.2 14.8a3.2 3.2 0 0 1-3.2 3.2H7.2a3.2 3.2 0 0 1-3.2-3.2V7.2a3.2 3.2 0 0 1 3.2-3.2h9.6a3.2 3.2 0 0 1 3.2 3.2v9.6z"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
            </a>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="inline-block bg-green-600 text-xs px-3 py-1 rounded-full text-white font-medium">SSL Secure</span>
            <span className="inline-block bg-blue-600 text-xs px-3 py-1 rounded-full text-white font-medium">Trusted</span>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-8 pt-8 pb-8 text-center text-gray-400 text-sm">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <p>© 2025 Helium4U - Part of Adams Gas/Bottle Gases | UK Gas Supplier Since 1998</p>
        </div>
      </div>
    </footer>
  );
};