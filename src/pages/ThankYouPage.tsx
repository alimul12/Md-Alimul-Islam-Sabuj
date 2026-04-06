import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Download, Mail, Users } from 'lucide-react';

const ThankYouPage = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="inline-block p-4 bg-green-50 rounded-full mb-6">
            <CheckCircle className="w-16 h-16 text-green-600" />
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
            Welcome to the 100M Club!
          </h1>
          <p className="text-xl text-gray-600">
            Your order has been confirmed. You're one step closer to scaling your business.
          </p>
        </motion.div>

        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 text-left mb-12">
          <h2 className="text-2xl font-bold mb-8">Next Steps Checklist:</h2>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div className="flex-grow">
                <h3 className="text-lg font-bold mb-2">Download Your Files</h3>
                <p className="text-gray-600 mb-4 text-sm">Click the buttons below to download your eBook and bonuses immediately.</p>
                <div className="flex flex-wrap gap-3">
                  <button className="px-6 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-lg hover:bg-blue-700 transition-all flex items-center gap-2">
                    <Download className="w-4 h-4" /> 100M Money Models eBook
                  </button>
                  <button className="px-6 py-2.5 bg-gray-200 text-gray-700 text-sm font-bold rounded-lg hover:bg-gray-300 transition-all flex items-center gap-2">
                    <Download className="w-4 h-4" /> Bonuses & Templates
                  </button>
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div className="flex-grow">
                <h3 className="text-lg font-bold mb-2">Check Your Inbox</h3>
                <p className="text-gray-600 text-sm flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-600" /> We've sent a copy of your download links and receipt to your email.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div className="flex-grow">
                <h3 className="text-lg font-bold mb-2">Join Our Community (Optional)</h3>
                <p className="text-gray-600 text-sm flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-600" /> Get weekly implementation tips and connect with other entrepreneurs.
                </p>
                <button className="mt-4 text-blue-600 font-bold text-sm hover:underline">Join the Mailing List →</button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-gray-500 text-sm">
          Questions? Need help? Email <a href="mailto:dealswithalimul@gmail.com" className="text-blue-600 font-bold">dealswithalimul@gmail.com</a>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
