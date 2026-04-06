import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8 font-sans max-w-4xl mx-auto">
      <h1 className="text-4xl font-black mb-8">Privacy Policy</h1>
      <p className="text-gray-500 mb-8">Last Updated: April 6, 2026</p>
      
      <div className="prose prose-blue max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
          <p className="text-gray-700">This Privacy Policy describes how Alimul Islam ("we", "us", or "our") collects, uses, and shares your personal information when you visit or make a purchase from our site.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">2. Data Collected</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Personal Information:</strong> Name, Email address, Billing address.</li>
            <li><strong>Payment Information:</strong> Processed securely via third-party processors (we do not store plain-text card data).</li>
            <li><strong>Usage Data:</strong> IP address, browser type, and cookies for analytics.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">3. Purpose of Collection</h2>
          <p className="text-gray-700">We use your information to process orders, deliver digital products, maintain transaction records, and send updates or promotions (with your consent).</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">4. Storage & Security</h2>
          <p className="text-gray-700">Your data is stored on encrypted servers. We use industry-standard security measures to protect your information from unauthorized access.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">5. User Rights</h2>
          <p className="text-gray-700">You have the right to access, correct, or delete your personal information. You can unsubscribe from our marketing emails at any time by clicking the link in the footer.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">6. Contact</h2>
          <p className="text-gray-700">For privacy-related requests, please email us at <a href="mailto:dealswithalimul@gmail.com" className="text-blue-600 underline">dealswithalimul@gmail.com</a>.</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
