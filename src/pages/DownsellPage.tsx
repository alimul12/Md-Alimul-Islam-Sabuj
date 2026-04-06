import React from 'react';
import { motion } from 'motion/react';
import { Headphones, CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DownsellPage = () => {
  const navigate = useNavigate();

  const handleAccept = () => {
    navigate('/thank-you');
  };

  const handleDecline = () => {
    navigate('/thank-you');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
            Too Busy for the Full Course?
          </h1>
          <p className="text-lg text-gray-600 mb-10">
            Get the "Quick-Start Audio Guide + Action Planner" instead. Perfect for learning on the go.
          </p>
        </motion.div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 mb-10">
          <div className="flex flex-col md:flex-row items-center gap-8 text-left">
            <div className="w-32 h-32 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Headphones className="w-16 h-16 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Quick-Start Audio Bundle</h2>
              <p className="text-gray-600 mb-6">Listen to the summaries of all 100M Money Models while you commute, exercise, or work.</p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500" /> 3+ Hours of Audio Content
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500" /> Printable Action Planner PDF
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-3xl font-black text-blue-600">$39</span>
                <button
                  onClick={handleAccept}
                  className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all flex items-center gap-2"
                >
                  Yes, Add to My Order <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={handleDecline}
          className="text-gray-400 hover:text-gray-600 text-sm font-medium transition-colors"
        >
          No thanks, I'll just take my eBook.
        </button>
      </div>
    </div>
  );
};

export default DownsellPage;
