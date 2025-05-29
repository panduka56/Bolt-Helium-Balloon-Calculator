import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  ShoppingCart,
  Award,
  Truck,
  HeadphonesIcon,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { name: "Calculator", to: "/", description: "Free helium calculator" },
  {
    name: "Helium Products",
    to: "/products",
    description: "Browse cylinders & accessories",
  },
  {
    name: "Delivery Info",
    to: "/delivery",
    description: "UK-wide delivery options",
  },
  { name: "Help & Tips", to: "/tips", description: "Expert helium guidance" },
  { name: "Contact", to: "/contact", description: "Get in touch with our team" },
];

const TRUST_INDICATORS = [
  { icon: Truck, text: "UK Wide Delivery", subtitle: "Next day available" },
  { icon: Award, text: "Quality Guaranteed", subtitle: "15,000+ customers" },
  {
    icon: HeadphonesIcon,
    text: "Expert Support",
    subtitle: "Call 0800 195 4445",
  },
];

export const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  const handleMobileToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          isScrolled ? "shadow-lg" : "shadow-md"
        }`}
      >
        {/* Top announcement bar (optional - can be enabled for promotions) */}
        <div className="bg-gradient-to-r from-orange to-pink text-white text-center py-1 text-xs font-bold shadow-md">
          🎈 Free UK delivery on orders over £50 | Order by 2PM for next-day
          delivery
        </div>

        {/* Main navigation bar with dark accent background */}
        <div className="bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
          <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between py-3 lg:py-4">
              {/* Left: Logo & Brand */}
              <Link
                to="/"
                className="flex items-center space-x-3 group flex-shrink-0"
                aria-label="Helium4U Calculator - Home"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-white/80 shadow-sm">
                  <img
                    src="/HELIUM4U-logo-transparent.png"
                    alt="HELIUM4U Logo"
                    className="h-10 w-10 object-contain"
                  />
                </span>
                <div>
                  <div className="text-xl font-bold text-dark group-hover:text-orange transition-colors">
                    Helium4U Calculator
                  </div>
                  <div className="text-xs text-gray-500 hidden sm:block">
                    Your Helium, Calculated & Delivered
                  </div>
                </div>
              </Link>

              {/* Center: Navigation (Desktop) - with better spacing and neumorphic style */}
              <nav
                className="hidden lg:flex items-center justify-center flex-1 px-8"
                aria-label="Main navigation"
              >
                <div className="flex items-center gap-x-0.5 xl:gap-x-1 bg-white/80 rounded-full px-3 py-1.5 shadow-[0_2px_12px_rgba(255,192,203,0.10),0_1.5px_6px_rgba(255,165,0,0.08)] border border-pink/10">
                  {NAV_LINKS.map((link) => {
                    const isActive = location.pathname === link.to;
                    return (
                      <Link
                        key={link.name}
                        to={link.to}
                        className={`relative px-4 xl:px-5 py-2 font-semibold rounded-full transition-all duration-200 group flex items-center min-w-[44px] text-sm xl:text-base
                          ${
                            isActive
                              ? "text-orange bg-gradient-to-r from-orange/10 to-pink/10 shadow-[0_2px_8px_rgba(255,192,203,0.10)] border border-orange/30"
                              : "text-gray-700 hover:text-orange hover:bg-white/90 hover:shadow-sm border border-transparent"
                          }
                        `}
                        aria-label={link.description}
                      >
                        <span className="relative z-10 whitespace-nowrap">
                          {link.name}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </nav>

              {/* Right: CTA & Contact (Desktop) - improved layout */}
              <div className="hidden lg:flex items-center gap-x-3 xl:gap-x-4 flex-shrink-0">
                <a
                  href="tel:+448001954445"
                  className="flex items-center gap-x-2 px-4 py-2.5 bg-gray-50 rounded-full text-orange font-semibold hover:bg-gray-100 hover:shadow-sm transition-all group"
                  aria-label="Call Helium4U for support"
                >
                  <Phone className="h-4 w-4 group-hover:animate-pulse flex-shrink-0" />
                  <span className="whitespace-nowrap">0800 195 4445</span>
                </a>

                <a
                  href="https://www.bottlegases.co.uk/product-category/helium-canisters/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-2 bg-orange text-white px-5 xl:px-6 py-2.5 rounded-full font-bold shadow-lg border-2 border-orange hover:bg-pink hover:text-white hover:scale-105 transition-all duration-200"
                  aria-label="Shop helium cylinders at Bottle Gases"
                >
                  <ShoppingCart className="h-4 w-4 flex-shrink-0" />
                  <span className="whitespace-nowrap">Shop Helium</span>
                </a>
              </div>

              {/* Mobile: Phone & Hamburger */}
              <div className="flex items-center space-x-3 lg:hidden">
                <a
                  href="tel:+448001954445"
                  className="flex items-center justify-center w-10 h-10 bg-orange/20 rounded-full text-orange hover:bg-orange/30 transition-colors min-w-[44px]"
                  aria-label="Call Helium4U"
                >
                  <Phone className="h-5 w-5" />
                </a>

                {}
                <button
                  className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors min-w-[44px]"
                  aria-label={mobileOpen ? "Close menu" : "Open menu"}
                  aria-expanded="false"
                  onClick={handleMobileToggle}
                >
                  {mobileOpen ? (
                    <X className="h-6 w-6 text-orange" />
                  ) : (
                    <Menu className="h-6 w-6 text-orange" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Mobile Menu */}
            <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden overflow-y-auto">
              <div className="p-6">
                {/* Mobile Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-orange/20">
                      <img
                        src="/HELIUM4U-logo-transparent.png"
                        alt="HELIUM4U Logo"
                        className="h-10 w-10 object-contain"
                      />
                    </span>
                    <div>
                      <div className="font-bold text-dark">Helium4U</div>
                      <div className="text-xs text-gray-500">Calculator</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors min-w-[44px]"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5 text-gray-600" />
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="space-y-3 mb-8" aria-label="Mobile navigation">
                  {NAV_LINKS.map((link) => {
                    const isActive = location.pathname === link.to;
                    return (
                      <Link
                        key={link.name}
                        to={link.to}
                        className={`block px-4 py-3 rounded-xl font-semibold min-w-[44px] transition-all ${
                          isActive
                            ? "bg-orange/10 text-orange border-l-4 border-orange"
                            : "text-dark hover:bg-gray-50"
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        <div>{link.name}</div>
                        <div className="text-xs text-gray-500 mt-1">
                          {link.description}
                        </div>
                      </Link>
                    );
                  })}
                </nav>

                {/* Mobile CTA Buttons */}
                <div className="space-y-3 mb-8">
                  <a
                    href="https://www.bottlegases.co.uk/product-category/helium-canisters/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-orange to-pink text-white px-6 py-3 rounded-xl font-bold shadow-lg min-w-[44px]"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    <span>Shop Helium Cylinders</span>
                  </a>

                  <a
                    href="tel:+448001954445"
                    className="flex items-center justify-center space-x-2 w-full bg-white border-2 border-orange text-orange px-6 py-3 rounded-xl font-bold min-w-[44px]"
                  >
                    <Phone className="h-5 w-5" />
                    <span>Call: 0800 195 4445</span>
                  </a>
                </div>

                {/* Mobile Trust Indicators */}
                <div className="border-t pt-6 space-y-3">
                  {TRUST_INDICATORS.map((indicator, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 text-sm"
                    >
                      <indicator.icon className="h-5 w-5 text-orange flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-dark">
                          {indicator.text}
                        </div>
                        <div className="text-gray-500 text-xs">
                          {indicator.subtitle}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {/* Trust Indicators Bar (Desktop) */}
        <div className="hidden lg:block bg-gradient-to-r from-pink/20 to-orange/20 border-t border-pink/30">
          <div className="max-w-7xl mx-auto px-4 py-2">
            <div className="flex justify-center items-center space-x-8 text-sm">
              {TRUST_INDICATORS.map((indicator, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-dark"
                >
                  <indicator.icon className="h-4 w-4 text-orange" />
                  <span className="font-medium">{indicator.text}</span>
                  <span className="text-gray-600 hidden xl:inline">
                    • {indicator.subtitle}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Trust Bar (when menu closed) */}
      {!mobileOpen && (
        <div className="lg:hidden bg-gradient-to-r from-pink/20 to-orange/20 py-2 text-center text-xs text-dark border-b border-pink/30">
          ✓ UK Wide Delivery • ✓ Quality Guaranteed • ✓ Expert Support
        </div>
      )}
    </>
  );
};
