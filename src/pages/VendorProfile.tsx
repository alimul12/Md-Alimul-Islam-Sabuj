import React from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Facebook, ExternalLink, Award, Briefcase, GraduationCap } from 'lucide-react';

const VendorProfile = () => {
  return (
    <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full md:w-1/3"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform -rotate-2">
              <img 
                src="https://images.pexels.com/photos/7128984/pexels-photo-7128984.jpeg" 
                alt="Alimul Islam" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-gray-600">
                <Mail className="w-5 h-5 text-blue-600" />
                <span>dealswithalimul@gmail.com</span>
              </div>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/alimul-islam1/" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 rounded-lg text-gray-600 hover:text-blue-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/mdalimul.islamsabuj/" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 rounded-lg text-gray-600 hover:text-blue-700 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <div className="flex-grow space-y-8">
            <div>
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Founder & Strategist</span>
              <h1 className="text-5xl font-black text-gray-900 mt-2 mb-6">Alimul Islam</h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Alimul is a dedicated entrepreneur with a passion for deconstructing complex business systems. He has spent the last decade analyzing high-revenue models to find the common threads of success.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <Award className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Expert Strategist</h3>
                <p className="text-sm text-gray-500">Analyzed over 500+ successful business models across 20+ industries.</p>
              </div>
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <Briefcase className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Business Builder</h3>
                <p className="text-sm text-gray-500">Founded multiple profitable ventures in the digital education space.</p>
              </div>
            </div>

            <div className="prose prose-blue max-w-none text-gray-600">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Journey</h2>
              <p className="mb-4">
                Starting from humble beginnings, Alimul realized early on that hard work alone wasn't enough. He saw brilliant people failing while others with less effort were succeeding. The difference was the <strong>model</strong>.
              </p>
              <p>
                This realization led to a years-long obsession with business architecture. Today, he shares these findings through the 100M Money Models series, helping thousands of entrepreneurs skip the trial-and-error phase and go straight to scaling.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Featured In & Trusted By</h2>
          <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale">
             {/* Placeholder for logos */}
             <div className="text-2xl font-black tracking-tighter">FORBES</div>
             <div className="text-2xl font-black tracking-tighter">ENTREPRENEUR</div>
             <div className="text-2xl font-black tracking-tighter">BUSINESS INSIDER</div>
             <div className="text-2xl font-black tracking-tighter">FAST COMPANY</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorProfile;
