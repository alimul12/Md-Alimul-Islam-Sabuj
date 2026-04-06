import React from 'react';
import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import SalesPage from './pages/SalesPage';
import CheckoutPage from './pages/CheckoutPage';
import UpsellPage from './pages/UpsellPage';
import DownsellPage from './pages/DownsellPage';
import ThankYouPage from './pages/ThankYouPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import RefundPolicy from './pages/RefundPolicy';
import Footer from './components/Footer';

function ScrollToTop() {
  const { pathname } = window.location;
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<SalesPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/upsell" element={<UpsellPage />} />
            <Route path="/downsell" element={<DownsellPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/refund" element={<RefundPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
