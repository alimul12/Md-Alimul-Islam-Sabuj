import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8 font-sans max-w-4xl mx-auto">
      <h1 className="text-4xl font-black mb-8">Refund Policy</h1>
      
      <div className="prose prose-blue max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">30-Day Money-Back Guarantee</h2>
          <p className="text-gray-700">We want you to be completely satisfied with your purchase. If you don't find at least one new model you can apply to your business, we will give you a full refund.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">How to Request a Refund</h2>
          <p className="text-gray-700">To request a refund, please email <a href="mailto:dealswithalimul@gmail.com" className="text-blue-600 underline">dealswithalimul@gmail.com</a> within 30 days of your purchase. Please include your order number and the email address used for the purchase.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Processing Time</h2>
          <p className="text-gray-700">Once your request is received, we will process your refund within 3-5 business days. The funds will be returned to your original payment method.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Questions?</h2>
          <p className="text-gray-700">If you have any questions about our refund policy, please contact us at <a href="mailto:dealswithalimul@gmail.com" className="text-blue-600 underline">dealswithalimul@gmail.com</a>.</p>
        </section>
      </div>
    </div>
  );
};

export default RefundPolicy;
