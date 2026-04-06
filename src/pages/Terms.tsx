import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8 font-sans max-w-4xl mx-auto">
      <h1 className="text-4xl font-black mb-8">Terms & Conditions</h1>
      
      <div className="prose prose-blue max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
          <p className="text-gray-700">These Terms govern your use of this site and the purchase of the 100M Money Models eBook.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">2. Product Delivery</h2>
          <p className="text-gray-700">Digital downloads are sent via email immediately after purchase. If you do not receive your link, please contact support.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">3. Pricing and Payment</h2>
          <p className="text-gray-700">The regular price is $159 USD, with a current discount price of $119 USD. Payments are processed securely through third-party gateways.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">4. Refund Policy</h2>
          <p className="text-gray-700">We offer a 30-day money-back guarantee. Email <a href="mailto:dealswithalimul@gmail.com" className="text-blue-600 underline">dealswithalimul@gmail.com</a> for assistance.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">5. License & Copyright</h2>
          <p className="text-gray-700">Purchased material is for personal use only. No redistribution, sharing, or resale is permitted without written consent. © 2026 Alimul Islam.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">6. Disclaimer</h2>
          <p className="text-gray-700">This is educational material and does not constitute financial or investment advice. Results depend on individual action and market conditions.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">7. Governing Law</h2>
          <p className="text-gray-700">These terms are governed by the laws of the jurisdiction in which Alimul Islam operates.</p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
