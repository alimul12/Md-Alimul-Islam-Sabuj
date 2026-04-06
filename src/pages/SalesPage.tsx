import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, ArrowRight, Star, ShieldCheck, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const SalesPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wide text-blue-700 uppercase bg-blue-100 rounded-full">
                Join 10,000+ Successful Entrepreneurs
              </span>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight text-gray-900 mb-6 leading-tight">
                Build Your <span className="text-blue-600">Money Machine</span> With Proven Models
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
                Stop guessing. Start scaling. Get the exact systems and frameworks used by elite entrepreneurs to build multi-million dollar revenue engines.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  to="/checkout"
                  className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white text-xl font-black rounded-2xl shadow-2xl shadow-blue-200 hover:bg-blue-700 transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                >
                  Get Instant Access - $119 <ArrowRight className="w-6 h-6" />
                </Link>
                <div className="text-left">
                  <p className="text-sm text-gray-400 font-medium line-through">$159.00</p>
                  <p className="text-lg text-green-600 font-bold">Save $40 Today</p>
                </div>
              </div>
              <div className="mt-8 flex items-center gap-4 text-sm text-gray-500">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                      <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <p><strong>4.9/5</strong> from over 1,200 verified readers</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl shadow-2xl overflow-hidden border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D4D12AQE6NoqaI8BrNQ/article-cover_image-shrink_720_1280/B4DZjb_qOjHYAM-/0/1756037561517?e=2147483647&v=beta&t=GL1fCZMHpuBho5vLBy27ZnYIrpnWW8xA1yBfQxxVRSs" 
                  alt="100M Money Models eBook" 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain -> Promise -> Proof */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Tired of Unreliable Growth?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Most entrepreneurs struggle because they lack a clear system. They have scattered ideas but no scalable framework to turn those ideas into consistent profit.
              </p>
              <div className="space-y-4">
                {[
                  "Unpredictable monthly revenue",
                  "Overwhelmed by too many 'strategies'",
                  "Stuck at a plateau you can't break through",
                  "Lack of a proven business model"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 bg-red-100 p-1 rounded-full">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">The Actionable Guide to Scaling</h3>
              <p className="text-gray-600 mb-8">
                The 100M Money Models eBook isn't just theory. It's a collection of tested, high-revenue models that you can apply immediately to your business.
              </p>
              <div className="space-y-4">
                {[
                  "Step-by-step implementation guides",
                  "Real-world case studies of success",
                  "Frameworks for recurring revenue",
                  "Scaling systems for long-term growth"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Breakdown */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Inside the eBook?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A comprehensive breakdown of the modules designed to take your business to the next level.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Module 1: Foundational Models",
                desc: "Learn the core business structures that generate the first $1M and beyond.",
                icon: "01"
              },
              {
                title: "Module 2: Recurring Revenue",
                desc: "Build systems that pay you every single month without starting from zero.",
                icon: "02"
              },
              {
                title: "Module 3: Scaling Frameworks",
                desc: "How to take a working model and multiply it using automation and teams.",
                icon: "03"
              }
            ].map((module, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all group">
                <div className="text-4xl font-black text-blue-100 group-hover:text-blue-200 transition-colors mb-4">{module.icon}</div>
                <h3 className="text-xl font-bold mb-3">{module.title}</h3>
                <p className="text-gray-600">{module.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 p-8 bg-blue-600 rounded-2xl text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Exclusive Bonus Included!</h3>
              <p className="text-blue-100">Get the "Model Selection Checklist" + "Profit Calculator Template" for FREE.</p>
            </div>
            <Link to="/checkout" className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors">
              Claim Your Bonuses
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">What Readers Are Saying</h2>
            <p className="text-gray-600">Real results from real entrepreneurs who implemented these models.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Jenkins",
                role: "SaaS Founder",
                text: "The recurring revenue frameworks in Module 2 completely changed how I view my business. We doubled our MRR in just 3 months.",
                img: "https://picsum.photos/seed/sarah/100/100"
              },
              {
                name: "Marcus Thorne",
                role: "Agency Owner",
                text: "I've read dozens of business books, but nothing is as actionable as this. The scaling frameworks are pure gold.",
                img: "https://picsum.photos/seed/marcus/100/100"
              },
              {
                name: "David Chen",
                role: "E-commerce Entrepreneur",
                text: "Alimul has a gift for making complex strategies simple. The profit calculator alone is worth 10x the price of the book.",
                img: "https://picsum.photos/seed/david/100/100"
              }
            ].map((t, i) => (
              <div key={i} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 relative">
                <div className="flex items-center gap-1 text-yellow-400 mb-4">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-700 italic mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full" referrerPolicy="no-referrer" />
                  <div>
                    <p className="font-bold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-500 font-medium uppercase">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Box */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Ready to Start Your Journey?</h2>
          <div className="bg-white text-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-600 text-white px-6 py-2 rounded-bl-2xl text-sm font-bold">
              BEST VALUE
            </div>
            <h3 className="text-2xl font-bold mb-2">Main eBook + All Bonuses</h3>
            <div className="flex justify-center items-baseline gap-2 mb-8">
              <span className="text-5xl font-black text-blue-600">$119</span>
              <span className="text-xl text-gray-400 line-through font-medium">$159</span>
            </div>
            <div className="space-y-4 mb-10 text-left max-w-md mx-auto">
              {[
                "100M Money Models eBook (PDF)",
                "Module 1-3 Implementation Guides",
                "Model Selection Checklist (Bonus)",
                "Profit Calculator Template (Bonus)",
                "Lifetime Updates"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
            <Link
              to="/checkout"
              className="block w-full py-5 bg-blue-600 text-white text-xl font-bold rounded-2xl hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all"
            >
              Get Instant Access Now
            </Link>
            <p className="mt-6 text-gray-500 text-sm flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4" /> Secure SSL Encrypted Checkout
            </p>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-24 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-4 bg-green-50 rounded-full mb-6">
            <ShieldCheck className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold mb-6">30-Day Money-Back Guarantee</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            "If you don't find at least one new model you can apply to your business, email <span className="font-bold text-gray-900">dealswithalimul@gmail.com</span> within 30 days for a full refund. No questions asked."
          </p>
        </div>
      </section>

      {/* About the Author */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-64 h-64 bg-gray-200 rounded-2xl overflow-hidden flex-shrink-0 border-4 border-white shadow-2xl transform -rotate-3">
              <img 
                src="input_file_9.png" 
                alt="Alimul Islam" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Meet Your Mentor</span>
              <h2 className="text-4xl font-black mb-6">Alimul Islam</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Alimul Islam is a world-class entrepreneur and strategist who has dedicated his career to deconstructing high-revenue business systems. Having analyzed hundreds of profitable models, he has identified the "DNA" of success that separates the 1% from the rest.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                His mission is to empower 100,000 entrepreneurs to build sustainable, scalable, and highly profitable businesses using the frameworks he's perfected. This eBook is the culmination of years of research, testing, and real-world results.
              </p>
              <div className="mt-8 flex items-center gap-6">
                <div className="text-center">
                  <p className="text-2xl font-black text-gray-900">500+</p>
                  <p className="text-xs text-gray-500 uppercase font-bold">Models Analyzed</p>
                </div>
                <div className="w-px h-10 bg-gray-200"></div>
                <div className="text-center">
                  <p className="text-2xl font-black text-gray-900">10k+</p>
                  <p className="text-xs text-gray-500 uppercase font-bold">Students Helped</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "How do I access the eBook?",
                a: "Immediately after purchase, you will receive a PDF download link via email. You can also access it on the thank-you page."
              },
              {
                q: "What is the refund policy?",
                a: "We offer a 30-day, no-questions-asked money-back guarantee. Just email our support team."
              },
              {
                q: "Do I need prior business experience?",
                a: "No. The models are explained in a clear, step-by-step manner suitable for both beginners and experienced entrepreneurs."
              }
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-xl bg-gray-50 border border-gray-100">
                <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-blue-600" /> {faq.q}
                </h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SalesPage;
