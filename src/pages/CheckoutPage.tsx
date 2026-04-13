import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Lock, CreditCard, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [hasOrderBump, setHasOrderBump] = useState(false);
  
  const basePrice = 99;
  const bumpPrice = 29;
  const totalPrice = basePrice + (hasOrderBump ? bumpPrice : 0);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate payment processing
    navigate('/upsell');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-8">
        {/* Left Column: Form */}
        <div className="md:col-span-7 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <CreditCard className="w-6 h-6 text-blue-600" /> Secure Checkout
            </h2>
            
            <form onSubmit={handlePayment} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  required
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input
                    required
                    type="text"
                    placeholder="John"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Doe"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Card Information</label>
                <div className="relative">
                  <input
                    required
                    type="text"
                    placeholder="0000 0000 0000 0000"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all pl-12"
                  />
                  <Lock className="w-5 h-5 text-gray-400 absolute left-4 top-3.5" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  required
                  type="text"
                  placeholder="MM / YY"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
                <input
                  required
                  type="text"
                  placeholder="CVC"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Order Bump */}
              <div
                className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
                  hasOrderBump ? 'border-blue-600 bg-blue-50' : 'border-dashed border-gray-300 bg-white'
                }`}
                onClick={() => setHasOrderBump(!hasOrderBump)}
              >
                <div className="flex items-start gap-3">
                  <div className={`mt-1 w-5 h-5 rounded border flex items-center justify-center transition-all ${
                    hasOrderBump ? 'bg-blue-600 border-blue-600' : 'bg-white border-gray-300'
                  }`}>
                    {hasOrderBump && <CheckCircle className="w-4 h-4 text-white" />}
                  </div>
                  <div>
                    <span className="inline-block px-2 py-0.5 bg-yellow-100 text-yellow-800 text-[10px] font-bold rounded uppercase mb-1">One-Time Offer</span>
                    <h3 className="font-bold text-gray-900">Add the Implementation Toolkit for +$29</h3>
                    <p className="text-sm text-gray-600 mt-1">Get the exact templates, spreadsheets, and checklists Alimul uses to manage his business models. (Regularly $97)</p>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-blue-600 text-white text-lg font-bold rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-100 transition-all"
              >
                Complete Purchase - ${totalPrice}
              </button>

              <div className="flex items-center justify-center gap-4 opacity-50 grayscale">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" referrerPolicy="no-referrer" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" referrerPolicy="no-referrer" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-5" referrerPolicy="no-referrer" />
              </div>
            </form>
          </motion.div>
        </div>

        {/* Right Column: Summary */}
        <div className="md:col-span-5">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 sticky top-8"
          >
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-16 bg-blue-600 rounded shadow-sm flex items-center justify-center text-[8px] text-white font-bold p-1 text-center">
                    100M MONEY MODELS
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">100M Money Models eBook</p>
                    <p className="text-xs text-gray-500">Digital PDF Download</p>
                  </div>
                </div>
                <span className="font-bold">$99</span>
              </div>

              {hasOrderBump && (
                <div className="flex justify-between items-center text-blue-600">
                  <p className="font-medium">Implementation Toolkit</p>
                  <span className="font-bold">+$29</span>
                </div>
              )}
            </div>

            <div className="border-t border-gray-100 pt-4 space-y-2">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${totalPrice}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between text-xl font-black text-gray-900 pt-2">
                <span>Total</span>
                <span>${totalPrice} USD</span>
              </div>
            </div>

            <div className="mt-8 p-4 bg-green-50 rounded-xl border border-green-100">
              <div className="flex gap-3">
                <ShieldCheck className="w-5 h-5 text-green-600 flex-shrink-0" />
                <p className="text-xs text-green-800 leading-relaxed">
                  Your purchase is protected by our 30-day money-back guarantee. If you're not satisfied, we'll refund your entire purchase.
                </p>
              </div>
            </div>
            
            <p className="mt-6 text-center text-xs text-gray-400">
              Questions? Email <a href="mailto:dealswithalimul@gmail.com" className="underline">dealswithalimul@gmail.com</a>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
