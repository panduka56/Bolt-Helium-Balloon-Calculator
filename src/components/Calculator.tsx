import React, { useState, useEffect } from "react";
import { BalloonSets } from "./BalloonSets";
import { CalculationResults } from "./CalculationResults";
import {
  calculateTotalHelium,
  recommendCylinders,
} from "../utils/calculations";
import { BalloonSet, CylinderType } from "../types";
import { Link } from "react-router-dom";

// Type for recommended cylinders which includes quantity
type RecommendedCylinder = CylinderType & { quantity: number };

export const Calculator: React.FC = () => {
  const [balloonSets, setBalloonSets] = useState<BalloonSet[]>([
    { id: "1", balloons: [] },
  ]);
  const [totalHelium, setTotalHelium] = useState({ cubicFeet: 0, liters: 0, cubicMeters: 0 });
  const [recommendedCylinders, setRecommendedCylinders] = useState<
    RecommendedCylinder[]
  >([]);

  useEffect(() => {
    const helium = calculateTotalHelium(balloonSets);
    setTotalHelium(helium);

    const cylinders = recommendCylinders(helium.cubicMeters);
    setRecommendedCylinders(cylinders);
  }, [balloonSets]);

  const handleBalloonSetsChange = (newBalloonSets: BalloonSet[]) => {
    setBalloonSets(newBalloonSets);
  };

  return (
    <div className="w-full">
      {/* Hero section with gradient background */}
      <div className="bg-gradient-to-br from-orange/10 via-pink/10 to-beige py-12 lg:py-16">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-dark mb-4">
              Helium Calculator for Balloons
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Calculate exactly how much helium you need for your party or
              event. Get instant recommendations for the right helium cylinders
              from Bottle Gases.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left: Calculator and Tips (stacked) */}
            <div className="flex flex-col gap-8">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
                <div className="bg-gradient-to-r from-gray-50 to-white p-6 lg:p-8 border-b border-gray-100">
                  <h2 className="text-2xl lg:text-3xl font-bold text-dark">
                    Calculate Your Helium Needs
                  </h2>
                </div>
                <div className="p-6 lg:p-8">
                  <BalloonSets
                    balloonSets={balloonSets}
                    onChange={handleBalloonSetsChange}
                  />
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink to-orange/20 rounded-2xl p-6 lg:p-8 shadow-lg border border-pink/30">
                <h3 className="text-xl lg:text-2xl font-semibold text-dark mb-6">
                  💡 Pro Tips for Helium Usage
                </h3>
                <ul className="space-y-4 text-dark">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 inline-flex h-6 w-6 rounded-full bg-white/80 text-orange items-center justify-center text-sm font-bold shadow-sm">
                      ✓
                    </span>
                    <span>
                      Store balloons in cool areas to extend float time.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 inline-flex h-6 w-6 rounded-full bg-white/80 text-orange items-center justify-center text-sm font-bold shadow-sm">
                      ✓
                    </span>
                    <span>
                      Use Hi-Float treatment to extend float time by up to 25
                      times.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 inline-flex h-6 w-6 rounded-full bg-white/80 text-orange items-center justify-center text-sm font-bold shadow-sm">
                      ✓
                    </span>
                    <span>
                      Inflate balloons just before your event to minimize helium
                      loss.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 inline-flex h-6 w-6 rounded-full bg-white/80 text-orange items-center justify-center text-sm font-bold shadow-sm">
                      ✓
                    </span>
                    <span>
                      Consider air-filled balloon arrangements as an alternative
                      to helium for table centerpieces.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Results (2 rows: Total Helium Required, then Recommended Cylinders) */}
            <div className="flex flex-col gap-8">
              <CalculationResults
                totalHelium={totalHelium}
                recommendedCylinders={recommendedCylinders}
                layout="vertical"
              />
            </div>
          </div>
        </div>
      </div>

      {/* SEO Content Section */}
      <section className="bg-gradient-to-b from-white to-beige py-16" itemScope itemType="https://schema.org/WebPage">
        <div className="max-w-7xl mx-auto px-4">
          {/* Hero Section */}
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-dark" itemProp="name">Helium Balloon Calculator Guide</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" itemProp="description">
              Everything you need to know about calculating helium for balloons
            </p>
          </header>

          {/* JSON Data for AI Crawlers */}
          <script type="application/json" id="helium-data" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "calculator": {
              "name": "Helium Balloon Calculator",
              "purpose": "Calculate exact helium requirements for balloons",
              "features": ["Latex balloon support", "Foil balloon support", "Multiple sizes", "Cost estimation", "Cylinder recommendations"]
            },
            "balloon_data": {
              "latex": {
                "9_inch": { "helium_cubic_feet": 0.25, "helium_cubic_meters": 0.007 },
                "11_inch": { "helium_cubic_feet": 0.5, "helium_cubic_meters": 0.014 },
                "16_inch": { "helium_cubic_feet": 1.5, "helium_cubic_meters": 0.042 }
              },
              "foil": {
                "18_inch": { "helium_cubic_feet": 0.5, "helium_cubic_meters": 0.014 }
              }
            },
            "cylinders": {
              "disposable": [
                { "name": "Small", "capacity_m3": 0.14, "balloons": 30, "price_gbp": 17.99 },
                { "name": "Large", "capacity_m3": 0.33, "balloons": 40, "price_gbp": 39.50 }
              ],
              "refillable": [
                { "name": "20L", "capacity_m3": 4, "balloons": 400, "price_gbp": 373.70 },
                { "name": "50L", "capacity_m3": 10, "balloons": 1000, "price_gbp": 630.00 }
              ]
            },
            "quick_facts": {
              "100_balloons_need": "0.71 cubic meters",
              "safety_margin": "5%",
              "latex_float_time": "8-12 hours",
              "foil_float_time": "days to weeks"
            }
          })}} />

          {/* Introduction Card */}
          <article className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-8" itemScope itemType="https://schema.org/Article">
              <h2 className="text-2xl font-bold mb-4 text-orange" itemProp="headline">Estimate How Much Helium Gas You Need</h2>
              <p className="text-lg text-gray-700 leading-relaxed" itemProp="articleBody">
                Planning a party or event with balloons? Our free helium balloon calculator is the essential tool to estimate exactly how much helium you need. Whether you're inflating latex balloons or foil balloons, this calculator provides accurate calculations to help you choose the right helium tank size and avoid costly mistakes. Understanding your helium consumption before ordering can save both money and ensure your balloon decorations are perfect.
              </p>
            </div>
          </article>

          {/* FAQ Grid */}
          <section className="grid md:grid-cols-2 gap-6 mb-12" data-content="faq-grid">
            {/* Card 1 */}
            <article className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow" 
                     data-faq="helium-needed" 
                     itemScope itemType="https://schema.org/Question">
              <h3 className="text-xl font-semibold mb-3 text-dark flex items-center gap-2" itemProp="name">
                <span className="text-2xl">🎈</span> How Much Helium Do I Need?
              </h3>
              <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                <p className="text-gray-700 mb-3" itemProp="text">
                  The amount of helium needed depends on balloon size, type (latex or foil), and quantity. Our helium calculator determines the exact cubic feet of helium you need.
                </p>
                <ul className="space-y-2 text-sm text-gray-600" data-balloon-sizes="latex">
                  <li data-size="9" data-helium="0.25">• 9-inch latex: 0.25 cubic feet each</li>
                  <li data-size="11" data-helium="0.5">• 11-inch latex: 0.5 cubic feet each</li>
                  <li>• Add 5-10% extra for testing</li>
                </ul>
              </div>
            </article>

            {/* Card 2 */}
            <article className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                     data-faq="cost-per-balloon"
                     itemScope itemType="https://schema.org/Question">
              <h3 className="text-xl font-semibold mb-3 text-dark flex items-center gap-2" itemProp="name">
                <span className="text-2xl">🏷️</span> What's the Cost Per Balloon?
              </h3>
              <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                <p className="text-gray-700 mb-3" itemProp="text">
                  Cost depends on cylinder size and type. Larger cylinders offer better value due to improved gas capacity utilization.
                </p>
                <ul className="space-y-2 text-sm text-gray-600" data-cost-breakdown="per-balloon">
                  <li data-type="disposable" data-cost="1.00">• Small disposables: ~£1 per balloon</li>
                  <li data-type="refillable" data-cost="0.65">• Large refillables: £0.50-0.80 per balloon</li>
                  <li>• Calculator shows exact costs</li>
                </ul>
              </div>
            </article>

            {/* Card 3 */}
            <article className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                     data-faq="100-balloons"
                     data-balloons="100"
                     data-helium-needed="0.71"
                     itemScope itemType="https://schema.org/Question">
              <h3 className="text-xl font-semibold mb-3 text-dark flex items-center gap-2" itemProp="name">
                <span className="text-2xl">📏</span> Helium for 100 Balloons?
              </h3>
              <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                <p className="text-gray-700 mb-3" itemProp="text">
                  For 100 standard 9-inch balloons, you need ~25 cubic feet (0.71 m³). Best option: 3 × Large Disposable cylinders or 1 × 20L refillable.
                </p>
                <Link to="/products" className="text-orange underline hover:text-pink font-semibold text-sm">
                  View gas capacity chart →
                </Link>
              </div>
            </article>

            {/* Card 4 */}
            <article className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                     data-faq="float-time"
                     itemScope itemType="https://schema.org/Question">
              <h3 className="text-xl font-semibold mb-3 text-dark flex items-center gap-2" itemProp="name">
                <span className="text-2xl">⏱️</span> How Long Do Balloons Float?
              </h3>
              <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                <p className="text-gray-700 mb-3" itemProp="text">
                  <span data-balloon-type="latex" data-float-hours="8-12">Latex balloons float 8-12 hours</span>, 
                  <span data-balloon-type="foil" data-float-duration="days-weeks"> foil balloons last days or weeks</span>. 
                  Use Hi-Float to extend latex float time to 24-48 hours.
                </p>
                <Link to="/tips" className="text-orange underline hover:text-pink font-semibold text-sm">
                  Read float time tips →
                </Link>
              </div>
            </article>
          </section>

          {/* Detailed Information Accordion */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center text-dark">Detailed Helium Information</h2>
            
            {/* Info Cards */}
            <div className="space-y-4">
              {/* Calculation Methods */}
              <details className="bg-white rounded-xl shadow-md overflow-hidden group">
                <summary className="p-6 cursor-pointer hover:bg-gray-50 flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-dark">How We Calculate Helium Gas Consumption</h3>
                  <span className="text-orange group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-6 pt-0 border-t border-gray-100">
                  <p className="mb-4 text-gray-700">
                    Helium consumption varies with balloon size and shape. Our calculation uses industry-standard formulas:
                  </p>
                  <div className="bg-beige rounded-lg p-4 mb-4">
                    <p className="font-mono text-sm mb-2">Volume = 4/3πr³ (for spherical balloons)</p>
                    <p className="text-sm text-gray-600">Applied with fill factor for optimal inflation</p>
                  </div>
                  <p className="text-gray-700">
                    For mixed arrangements, enter each size separately. The calculator sums total helium and suggests efficient cylinder combinations to minimize cost while ensuring adequate gas supply.
                  </p>
                </div>
              </details>

              {/* Cylinder Types */}
              <details className="bg-white rounded-xl shadow-md overflow-hidden group">
                <summary className="p-6 cursor-pointer hover:bg-gray-50 flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-dark">Disposable vs Refillable Cylinders</h3>
                  <span className="text-orange group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-6 pt-0 border-t border-gray-100">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-orange/10 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Disposable Cylinders</h4>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>✓ No deposit required</li>
                        <li>✓ Lightweight & portable</li>
                        <li>✓ 0.14-0.33 m³ capacity</li>
                        <li>✓ Perfect for one-time events</li>
                      </ul>
                    </div>
                    <div className="bg-pink/20 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Refillable Cylinders</h4>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>✓ Better value for regular use</li>
                        <li>✓ Lower per-balloon cost</li>
                        <li>✓ 0.42-10 m³ capacity</li>
                        <li>✓ Refundable deposit required</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </details>

              {/* Calculator Accuracy */}
              <details className="bg-white rounded-xl shadow-md overflow-hidden group">
                <summary className="p-6 cursor-pointer hover:bg-gray-50 flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-dark">Calculator Accuracy & How to Use</h3>
                  <span className="text-orange group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-6 pt-0 border-t border-gray-100">
                  <p className="mb-4 text-gray-700">
                    Our helium calculator provides industry-standard accuracy with a 5% safety margin. To use:
                  </p>
                  <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                    <li>Select balloon type (latex or foil)</li>
                    <li>Choose balloon size from the list</li>
                    <li>Enter quantity needed</li>
                    <li>View instant results and cylinder recommendations</li>
                  </ol>
                  <p className="mt-4 text-gray-700">
                    For multiple sizes, use "Add Balloon Set". The calculator saves entries during your session for easy experimentation.
                  </p>
                </div>
              </details>
            </div>
          </div>

          {/* Key Points Summary */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-orange/20 to-pink/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-dark text-center">Quick Reference Guide</h3>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-orange mt-1">✓</span>
                  <span className="text-gray-700">9-inch latex needs 0.25 cubic feet</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange mt-1">✓</span>
                  <span className="text-gray-700">5% safety margin included</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange mt-1">✓</span>
                  <span className="text-gray-700">Larger cylinders = lower cost per balloon</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange mt-1">✓</span>
                  <span className="text-gray-700">Foil balloons float longer than latex</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange mt-1">✓</span>
                  <span className="text-gray-700">Inflate close to event time</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange mt-1">✓</span>
                  <span className="text-gray-700">Check our capacity chart for details</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
