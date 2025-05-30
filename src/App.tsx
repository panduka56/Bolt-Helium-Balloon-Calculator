import React, { useState } from "react";
import { Calculator } from "./components/Calculator";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import {
  ChevronRight,
  Home,
  Package,
  HelpCircle,
  MapPin,
  Info,
  Mail,
} from "lucide-react";
import { Routes, Route } from "react-router-dom";
import HeliumProducts from "./components/HeliumProducts";
import NotFound from "./components/NotFound";

const Breadcrumbs: React.FC = () => (
  <nav
    aria-label="Breadcrumb navigation"
    className="w-full bg-gradient-to-r from-gray-50 to-gray-100 py-3 px-4 text-sm text-dark border-b border-gray-200"
  >
    <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
      <ol
        className="flex items-center space-x-1 text-sm"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
          className="flex items-center"
        >
          <a
            href="/"
            itemProp="item"
            className="flex items-center text-orange font-medium hover:text-orange/80 transition-colors"
            aria-label="Go to homepage"
          >
            <Home className="h-4 w-4 mr-1" />
            <span itemProp="name">Home</span>
          </a>
          <meta itemProp="position" content="1" />
        </li>

        <li className="flex items-center text-gray-400">
          <ChevronRight className="h-4 w-4 mx-2" />
        </li>

        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
          className="flex items-center"
        >
          <span
            itemProp="name"
            className="text-dark font-medium"
            aria-current="page"
          >
            Helium Calculator
          </span>
          <meta itemProp="position" content="2" />
        </li>
      </ol>
    </div>
  </nav>
);

const DeliveryFAQ = [
  {
    question: "How do I calculate helium cylinder delivery costs?",
    answer:
      "Delivery costs vary based on cylinder size and location. For small disposable helium cylinders under 25kg, we use courier services with fixed rates. Larger refillable gas cylinders require specialized delivery vehicles, which may increase costs. Use our helium calculator to determine cylinder needs, then check delivery options at checkout.",
  },
  {
    question: "What's the gas capacity of cylinders available for delivery?",
    answer:
      "Our helium cylinders range from 0.14 cubic meters (small disposable) to 10 cubic meters (large refillable). Each cylinder clearly shows its gas capacity and balloon filling capability. The helium balloon calculator helps match the right cylinder size to your needs, ensuring you order the correct gas capacity for your event.",
  },
  {
    question: "How long does helium gas cylinder delivery take?",
    answer:
      "Adams Gas delivers on set days by postcode area. Most Kent and London areas receive delivery within 2-3 working days. For urgent balloon events, small disposable cylinders can be couriered next day. Check our delivery schedule or use the postcode checker to calculate your delivery timeframe.",
  },
  {
    question: "Can I return empty helium cylinders after my balloon event?",
    answer:
      "Disposable helium cylinders should be recycled locally after use - they cannot be returned. Refillable gas cylinders must be returned to claim your deposit refund. The cost structure reflects this: disposables have no deposit but higher per-balloon costs, while refillables require deposits but offer better value.",
  },
  {
    question: "Do you deliver helium for commercial balloon businesses?",
    answer:
      "Yes, we specialize in helium gas delivery for both personal and commercial use. Business customers benefit from our larger refillable cylinders with superior gas capacity. Use our helium calculator to estimate monthly usage, then contact us for commercial rates and regular delivery schedules.",
  },
];

const DeliveryPage = () => {
  const [postcode, setPostcode] = useState("");
  const [checked, setChecked] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const adamsAreas = [
    "CT",
    "ME",
    "DA",
    "TN",
    "BR",
    "SE",
    "SW",
    "E",
    "N",
    "NW",
    "SM",
    "CR",
    "RH",
    "BN",
    "GU",
  ];
  const delivers =
    postcode &&
    adamsAreas.some((area) => postcode.toUpperCase().startsWith(area));

  return (
    <div className="max-w-[1200px] mx-auto px-4 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Delivery Information</h1>
      <div className="grid md:grid-cols-1 gap-6 mb-10">
        <div className="card flex flex-col items-center text-center">
          <MapPin className="h-10 w-10 text-orange mb-2" />
          <h2 className="text-xl font-semibold mb-2">Adams Gas</h2>
          <ul className="text-gray-700 text-sm space-y-1 mb-2">
            <li>Delivers in Kent, London, East Sussex</li>
            <li>Set delivery days by postcode</li>
            <li>Courier for <span className="font-semibold">under 25kg</span></li>
          </ul>
        </div>
      </div>
      <div className="bg-orange/10 rounded-xl p-6 mb-10 flex flex-col md:flex-row items-center gap-4">
        <div className="flex-1">
          <label
            htmlFor="postcode"
            className="block font-semibold mb-2 text-orange"
          >
            Check if Adams Gas delivers to you:
          </label>
          <input
            id="postcode"
            type="text"
            value={postcode}
            onChange={(e) => {
              setPostcode(e.target.value);
              setChecked(false);
            }}
            placeholder="Enter your postcode (e.g. CT9)"
            className="input-primary max-w-xs"
          />
          <button
            className="ml-3 btn-primary px-4 py-2 text-base"
            onClick={() => setChecked(true)}
            disabled={!postcode}
          >
            Check
          </button>
          {checked && (
            <div
              className={`mt-3 font-semibold ${delivers ? "text-green-600" : "text-red-600"}`}
            >
              {delivers
                ? "Adams Gas delivers to your area!"
                : "Sorry, Adams Gas does not deliver to your area."}
            </div>
          )}
        </div>
        <div className="flex-1 text-sm text-gray-700 mt-4 md:mt-0">
          <b>Adams Gas Delivery Days:</b>
          <ul className="list-disc pl-5 mt-1">
            <li>Faversham, Medway & Dartford – Mon & Wed</li>
            <li>Dover, New Romney, Ashford & Canterbury – Wed & Fri</li>
            <li>Maidstone – Thu</li>
            <li>South & Central London – Tue</li>
            <li>Tunbridge Wells & East Sussex – Thu</li>
            <li>Thanet – Mon–Fri</li>
            <li>Whitstable, Herne Bay – Mon, Wed & Fri</li>
          </ul>
        </div>
      </div>
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Info className="h-6 w-6 text-orange mr-2" />
          Delivery FAQs
        </h2>
        <div className="space-y-3">
          {DeliveryFAQ.map((faq, i) => (
            <div key={i} className="border rounded-xl bg-white shadow-sm">
              <button
                className="w-full flex justify-between items-center px-4 py-3 text-left font-semibold text-dark focus:outline-none focus:ring-2 focus:ring-orange rounded-xl"
                onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                aria-expanded={faqOpen === i ? 'true' : 'false'}
              >
                {faq.question}
                <ChevronRight
                  className={`h-5 w-5 ml-2 transition-transform ${faqOpen === i ? "rotate-90 text-orange" : "text-gray-400"}`}
                />
              </button>
              {faqOpen === i && (
                <div className="px-4 pb-4 text-gray-700 text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TipsFAQ = [
  {
    question: "How do I calculate the right amount of helium for my balloons?",
    answer:
      "Use our free helium balloon calculator - simply select balloon type (latex or foil), size, and quantity. The calculator instantly shows total helium needed in cubic meters and recommends cost-effective cylinder options. For mixed balloon sizes, add each type separately for accurate calculations.",
  },
  {
    question: "What affects the cost of helium per balloon?",
    answer:
      "Helium cost per balloon depends on cylinder size and type. Larger cylinders offer lower per-balloon costs due to better gas capacity utilization. Our calculator shows exact costs for different cylinder options. Small disposables cost about £1 per balloon, while large refillables can reduce this to £0.50-0.80 per balloon.",
  },
  {
    question: "How much helium does each balloon size need?",
    answer:
      "Standard 9-inch latex balloons need 0.25 cubic feet of helium. Larger sizes need more: 11-inch requires 0.5 cubic feet, 16-inch needs 1.5 cubic feet. Foil balloons vary by shape but typically use less gas than latex of the same width. Our helium calculator automatically applies the correct consumption rates.",
  },
  {
    question: "How do I maximize balloon float time with helium?",
    answer:
      "Inflate balloons as close to your event as possible, as latex balloons float 8-12 hours. Use Hi-Float treatment to extend float time up to 48 hours. Keep filled balloons in cool areas away from direct sunlight. Foil balloons naturally float longer - often several days or weeks.",
  },
  {
    question: "What's the difference in gas capacity between cylinder sizes?",
    answer:
      "Small disposable cylinders contain 0.14-0.33 cubic meters, filling 30-40 balloons. Medium refillables offer 0.42-1.2 cubic meters for 50-215 balloons. Large refillables provide 4-10 cubic meters, filling 400-1000 balloons. Check our helium gas capacity chart for detailed specifications.",
  },
  {
    question: "Is it safe to inhale helium from balloons?",
    answer:
      "No! Never inhale helium - it displaces oxygen and can cause suffocation, even death. This is especially dangerous for children. Always supervise balloon inflation and disposal. Our helium cylinders include safety warnings and proper usage instructions for balloon filling only.",
  },
  {
    question: "How accurate is the helium balloon calculator?",
    answer:
      "Our calculator provides industry-standard accuracy with a 5% safety margin for wastage. Calculations are based on manufacturer specifications and real-world testing. The tool accounts for different balloon materials and sizes, ensuring reliable estimates for planning your helium gas needs.",
  },
  {
    question: "Can I mix different balloon types in the calculator?",
    answer:
      "Yes! Add multiple balloon sets with different types and sizes. The calculator sums total helium requirements and recommends appropriate cylinders for the combined needs. This helps plan diverse balloon decorations while optimizing gas cylinder selection and costs.",
  },
];

const TipsPage = () => {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  return (
    <div className="max-w-[1200px] mx-auto px-4 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Help & Tips</h1>
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="card flex flex-col gap-2">
          <HelpCircle className="h-8 w-8 text-orange mb-1" />
          <h2 className="text-lg font-semibold mb-1">Ordering & Delivery</h2>
          <ul className="text-gray-700 text-sm space-y-1 mb-2">
            <li>Order early, especially during peak seasons</li>
            <li>Provide clear delivery instructions</li>
            <li>Check your email for updates</li>
            <li>Return empty bottles promptly</li>
          </ul>
        </div>
        <div className="card flex flex-col gap-2">
          <Package className="h-8 w-8 text-orange mb-1" />
          <h2 className="text-lg font-semibold mb-1">Balloon & Helium Tips</h2>
          <ul className="text-gray-700 text-sm space-y-1 mb-2">
            <li>Store cylinders upright in a cool, dry place</li>
            <li>Inflate balloons close to your event</li>
            <li>Use Hi-Float to extend float time</li>
            <li>Secure balloons to avoid loss</li>
          </ul>
        </div>
        <div className="card flex flex-col gap-2">
          <Info className="h-8 w-8 text-orange mb-1" />
          <h2 className="text-lg font-semibold mb-1">Safety & Regulations</h2>
          <ul className="text-gray-700 text-sm space-y-1 mb-2">
            <li>Follow all safety instructions</li>
            <li>Do not leave cylinders unattended</li>
            <li>Keep away from heat and flames</li>
            <li>Use proper regulators</li>
          </ul>
        </div>
        <div className="card flex flex-col gap-2">
          <Mail className="h-8 w-8 text-orange mb-1" />
          <h2 className="text-lg font-semibold mb-1">Contact & Support</h2>
          <ul className="text-gray-700 text-sm space-y-1 mb-2">
            <li>Contact your supplier for delivery issues</li>
            <li>Check supplier FAQ or call support</li>
            <li>For urgent issues, use the phone number on your order</li>
          </ul>
          <a
            href="mailto:support@helium4u.co.uk"
            className="btn-primary mt-2 w-fit"
          >
            Email Support
          </a>
        </div>
      </div>
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <HelpCircle className="h-6 w-6 text-orange mr-2" />
          Quick FAQs
        </h2>
        <div className="space-y-3">
          {TipsFAQ.map((faq, i) => (
            <div key={i} className="border rounded-xl bg-white shadow-sm">
              <button
                className="w-full flex justify-between items-center px-4 py-3 text-left font-semibold text-dark focus:outline-none focus:ring-2 focus:ring-orange rounded-xl"
                onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                aria-expanded={faqOpen === i ? 'true' : 'false'}
              >
                {faq.question}
                <ChevronRight
                  className={`h-5 w-5 ml-2 transition-transform ${faqOpen === i ? "rotate-90 text-orange" : "text-gray-400"}`}
                />
              </button>
              {faqOpen === i && (
                <div className="px-4 pb-4 text-gray-700 text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => (
  <div className="max-w-[800px] mx-auto px-4 py-12">
    <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
    <p className="mb-4 text-lg">
      Have a question or need help? Reach out to our team and we'll get back to you as soon as possible.
    </p>
    <div className="mb-8">
      <div className="font-semibold">Adams Gas</div>
      <div>Westwood Industrial Estate, Margate, Kent, CT9 4JJ</div>
      <div>
        Email: <a href="mailto:sales@adamsgas.co.uk" className="text-orange underline">sales@adamsgas.co.uk</a>
      </div>
      <div>
        Phone: <a href="tel:01843220596" className="text-orange underline">01843 220 596</a> / <a href="tel:08001954445" className="text-orange underline">0800 195 4445</a>
      </div>
      <div className="mt-2">
        <a href="https://www.facebook.com/BottleGasesUK/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Facebook</a>
      </div>
    </div>
    <form className="space-y-4 max-w-lg">
      <div>
        <label htmlFor="name" className="block font-semibold mb-1">Your Name (required)</label>
        <input id="name" name="name" type="text" required className="input-primary w-full" />
      </div>
      <div>
        <label htmlFor="email" className="block font-semibold mb-1">Your Email (required)</label>
        <input id="email" name="email" type="email" required className="input-primary w-full" />
      </div>
      <div>
        <label htmlFor="subject" className="block font-semibold mb-1">Subject</label>
        <input id="subject" name="subject" type="text" className="input-primary w-full" />
      </div>
      <div>
        <label htmlFor="message" className="block font-semibold mb-1">Your Message</label>
        <textarea id="message" name="message" rows={5} required className="input-primary w-full" />
      </div>
      <div className="flex items-center">
        <input id="privacy" name="privacy" type="checkbox" required className="mr-2" />
        <label htmlFor="privacy" className="text-sm">I have read and accepted the <a href="https://www.bottlegases.co.uk/privacy-policy/" className="underline text-orange" target="_blank" rel="noopener noreferrer">Privacy & Cookie Policy</a>.</label>
      </div>
      <button type="submit" className="btn-primary px-6 py-2 font-bold">Enquire now</button>
    </form>
    <div className="mt-4 text-xs text-gray-500">
      By submitting this form you agree to our <a href="https://www.bottlegases.co.uk/privacy-policy/" className="underline">Privacy & Cookie Policy</a>.
    </div>
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-2">Useful Links</h2>
      <ul className="list-disc pl-5 space-y-1 text-orange">
        <li><a href="https://www.bottlegases.co.uk/" target="_blank" rel="noopener noreferrer">Home</a></li>
        <li><a href="https://www.bottlegases.co.uk/shop/" target="_blank" rel="noopener noreferrer">Products</a></li>
        <li><a href="https://www.bottlegases.co.uk/our-gases/" target="_blank" rel="noopener noreferrer">Our Gases</a></li>
        <li><a href="https://www.bottlegases.co.uk/blog/" target="_blank" rel="noopener noreferrer">Blog</a></li>
        <li><a href="https://www.bottlegases.co.uk/contact-us/" target="_blank" rel="noopener noreferrer">Contact Us</a></li>
        <li><a href="https://www.bottlegases.co.uk/delivery-information/" target="_blank" rel="noopener noreferrer">Delivery Information</a></li>
        <li><a href="https://www.bottlegases.co.uk/manufacturers-parts/" target="_blank" rel="noopener noreferrer">Manufacturers Parts</a></li>
        <li><a href="https://www.bottlegases.co.uk/my-account/" target="_blank" rel="noopener noreferrer">My Account</a></li>
        <li><a href="https://www.bottlegases.co.uk/cart/" target="_blank" rel="noopener noreferrer">Cart</a></li>
        <li><a href="https://www.bottlegases.co.uk/adams-gas-terms-and-conditions/" target="_blank" rel="noopener noreferrer">Terms and Conditions</a></li>
        <li><a href="https://www.bottlegases.co.uk/privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
      </ul>
    </div>
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-2">Helium & Gas Knowledge</h2>
      <ul className="list-disc pl-5 space-y-1 text-orange">
        <li><a href="https://www.bottlegases.co.uk/helium-gas-for-events/" target="_blank" rel="noopener noreferrer">Helium Gas for Events</a></li>
        <li><a href="https://www.bottlegases.co.uk/how-to-use-helium-gas/" target="_blank" rel="noopener noreferrer">How to Use Helium Gas</a></li>
        <li><a href="https://www.bottlegases.co.uk/creating-the-perfect-christmas-party-with-helium-balloons/" target="_blank" rel="noopener noreferrer">Creating the Perfect Christmas Party with Helium Balloons</a></li>
        <li><a href="https://www.bottlegases.co.uk/beyond-balloon-arches-helium-event-decor/" target="_blank" rel="noopener noreferrer">Beyond Balloon Arches: Helium Event Decor</a></li>
        <li><a href="https://www.bottlegases.co.uk/inflating-the-future-helium-and-the-space-industry/" target="_blank" rel="noopener noreferrer">Inflating the Future: Helium and the Space Industry</a></li>
        <li><a href="https://www.bottlegases.co.uk/which-gas-is-used-in-hot-air-balloons/" target="_blank" rel="noopener noreferrer">Which Gas is Used in Hot Air Balloons?</a></li>
      </ul>
    </div>
  </div>
);

// Add error boundary for better UX
interface ErrorBoundaryProps {
  children: React.ReactNode;
}
interface ErrorBoundaryState {
  hasError: boolean;
}
class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Helium4U Calculator Error:", error, errorInfo);
    // Send to analytics/error reporting service
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-beige flex items-center justify-center">
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg max-w-md">
            <h2 className="text-2xl font-bold text-dark mb-4">
              Oops! Something went wrong
            </h2>
            <p className="text-gray-600 mb-6">
              Our helium calculator encountered an issue. Please try refreshing
              the page.
            </p>
            <div className="space-y-3">
              <button
                onClick={() => window.location.reload()}
                className="w-full bg-orange text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange/90 transition-colors"
              >
                Refresh Calculator
              </button>
              <a
                href="tel:+448001954445"
                className="block w-full bg-pink text-orange py-3 px-6 rounded-lg font-semibold hover:bg-pink/80 transition-colors"
              >
                Call Us: 0800 195 4445
              </a>
              <a
                href="https://www.bottlegases.co.uk/product-category/helium-canisters/"
                className="block text-orange hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Shop Helium Cylinders Directly →
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-b from-beige to-white font-sans flex flex-col">
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-orange text-white px-4 py-2 rounded-lg z-50"
        >
          Skip to main content
        </a>

        <Header />
        <Breadcrumbs />

        <main id="main-content" className="flex-1 w-full" role="main">
          <Routes>
            <Route path="/" element={<Calculator />} />
            <Route path="/products" element={<HeliumProducts />} />
            <Route path="/delivery" element={<DeliveryPage />} />
            <Route path="/tips" element={<TipsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
