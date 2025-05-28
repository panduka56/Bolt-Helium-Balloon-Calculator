import React from 'react';
import { Calculator } from './components/Calculator';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs: React.FC = () => (
  <nav 
    aria-label="Breadcrumb navigation" 
    className="w-full bg-pink/20 py-3 px-4 text-sm text-dark flex justify-center shadow-sm border-b border-pink/30"
  >
    <div className="container mx-auto max-w-6xl">
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

// Add error boundary for better UX
interface ErrorBoundaryProps {
  children: React.ReactNode;
}
interface ErrorBoundaryState {
  hasError: boolean;
}
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Helium4U Calculator Error:', error, errorInfo);
    // Send to analytics/error reporting service
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-beige flex items-center justify-center">
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg max-w-md">
            <h2 className="text-2xl font-bold text-dark mb-4">Oops! Something went wrong</h2>
            <p className="text-gray-600 mb-6">
              Our helium calculator encountered an issue. Please try refreshing the page.
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
      <div className="min-h-screen bg-beige font-sans flex flex-col">
        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-orange text-white px-4 py-2 rounded-lg z-50"
        >
          Skip to main content
        </a>
        
        <Header />
        <Breadcrumbs />
        
        <main 
          id="main-content"
          className="flex-1 container mx-auto px-4 py-8"
          role="main"
        >
          <Calculator />
        </main>
        
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;