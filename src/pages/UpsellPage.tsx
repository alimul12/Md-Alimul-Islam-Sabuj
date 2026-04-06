import React from 'react';
import { motion } from 'motion/react';
import { Play, CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const UpsellPage = () => {
  const navigate = useNavigate();

  const handleAccept = () => {
    // Simulate adding to order
    navigate('/thank-you');
  };

  const handleDecline = () => {
    navigate('/downsell');
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 text-sm font-bold rounded-full mb-6 uppercase tracking-wider">
            Wait! Your Order is Not Complete
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
            Want to See These Models in Action?
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            You've read the eBook—now watch Alimul break down every single model in high-definition video training.
          </p>
        </motion.div>

        <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl mb-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-red-600 px-6 py-2 rounded-bl-2xl font-bold text-sm">
            50% OFF UPGRADE
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h2 className="text-2xl font-bold mb-4">100M Money Models Masterclass</h2>
              <p className="text-gray-400 mb-8">The complete video training series that takes you deeper into the implementation of every model.</p>
              
              <div className="space-y-4 mb-8">
                {[
                  "12+ High-Definition Video Lessons",
                  "Behind-the-scenes scaling secrets",
                  "Live walkthroughs of real businesses",
                  "Advanced automation workflows",
                  "Exclusive Q&A recording library"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-baseline gap-3 mb-8">
                <span className="text-4xl font-black text-white">$149</span>
                <span className="text-lg text-gray-500 line-through">$299</span>
              </div>

              <button
                onClick={handleAccept}
                className="w-full py-4 bg-blue-600 text-white text-lg font-bold rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
              >
                Yes, Upgrade My Order <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="relative group cursor-pointer" onClick={handleAccept}>
              <div className="aspect-video bg-gray-800 rounded-2xl flex items-center justify-center border border-gray-700 overflow-hidden">
                <Play className="w-16 h-16 text-blue-600 group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-all" />
              </div>
              <p className="mt-4 text-sm text-gray-500 italic">"Watch it in action for faster results"</p>
            </div>
          </div>
        </div>

        <button
          onClick={handleDecline}
          className="text-gray-400 hover:text-gray-600 text-sm font-medium transition-colors underline underline-offset-4"
        >
          No thanks, I'll skip this training and stick to the eBook.
        </button>
      </div>
    </div>
  );
};

export default UpsellPage;
