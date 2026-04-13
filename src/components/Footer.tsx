import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ShieldCheck, ArrowRight, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="text-2xl font-black tracking-tight">
              100M <span className="text-blue-500">MONEY MODELS</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering entrepreneurs with the frameworks and systems needed to build high-revenue businesses.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/alimul-islam1/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/mdalimul.islamsabuj/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              <span>Secure SSL Encrypted Site</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-blue-500 transition-colors">Sales Page</Link></li>
              <li><Link to="/about" className="hover:text-blue-500 transition-colors">About Us</Link></li>
              <li><Link to="/vendor" className="hover:text-blue-500 transition-colors">Vendor Profile</Link></li>
              <li><Link to="/checkout" className="hover:text-blue-500 transition-colors">Get Started</Link></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-lg font-bold mb-6">Legal</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/privacy" className="hover:text-blue-500 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-blue-500 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/refund" className="hover:text-blue-500 transition-colors">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-bold mb-6">Support</h3>
            <p className="text-gray-400 text-sm mb-4">Have questions? Our team is here to help you succeed.</p>
            <a 
              href="mailto:dealswithalimul@gmail.com" 
              className="flex items-center gap-2 text-blue-500 font-bold hover:text-blue-400 transition-colors"
            >
              <Mail className="w-4 h-4" /> dealswithalimul@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-500 text-xs">
            © {currentYear} Alimul Islam. All rights reserved.
          </div>
          <div className="flex gap-6 text-gray-500 text-xs">
             <p>Designed for High Conversion</p>
             <p>Built with Integrity</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
