import React from 'react';
import { motion } from 'motion/react';
import { Target, Rocket, Users, ShieldCheck } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Our Mission</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We empower entrepreneurs to build sustainable, high-revenue businesses through proven frameworks and actionable systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Why 100M Money Models?</h2>
            <p className="text-gray-600 leading-relaxed">
              In a world of "get rich quick" schemes and scattered business advice, we noticed a gap. Most entrepreneurs have the drive but lack the blueprint. They are working hard on the wrong models.
            </p>
            <p className="text-gray-600 leading-relaxed">
              100M Money Models was created to distill complex business strategies into simple, repeatable systems. We don't just teach theory; we provide the exact models used by the top 1% of earners.
            </p>
          </div>
          <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 flex items-center justify-center">
             <div className="text-center">
                <div className="text-5xl font-black text-blue-600 mb-2">10k+</div>
                <div className="text-blue-800 font-bold uppercase tracking-wider text-sm">Entrepreneurs Empowered</div>
             </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { icon: Target, title: "Clarity", desc: "No more guessing which strategy to use." },
            { icon: Rocket, title: "Scale", desc: "Built-in frameworks for exponential growth." },
            { icon: Users, title: "Community", desc: "Join thousands of like-minded builders." },
            { icon: ShieldCheck, title: "Integrity", desc: "Tested models with real-world results." }
          ].map((item, i) => (
            <div key={i} className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <item.icon className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 rounded-3xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to change your business trajectory?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Join thousands of others who are using these models to build their dream businesses.
          </p>
          <a 
            href="https://warriorplus.com/o2/buy/r6xd0d/x674hg/gyg2v6" 
            className="inline-block px-10 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
