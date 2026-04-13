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
                  Get Instant Access - $99 <ArrowRight className="w-6 h-6" />
                </Link>
                <div className="text-left">
                  <p className="text-sm text-gray-400 font-medium line-through">$129.00</p>
                  <p className="text-lg text-green-600 font-bold">Save $30 Today</p>
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

      {/* Alex Section - The Methodology */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <span className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4 block">The Methodology</span>
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                Inspired by the <span className="text-blue-500">$100M Framework</span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                The models inside this eBook aren't just ideas—they are the exact high-leverage frameworks popularized by <strong>Alex Hormozi</strong>. We've distilled the "DNA" of $100M businesses into actionable blueprints you can use today.
              </p>
              <div className="space-y-6">
                {[
                  "Built on the 'Value Equation' principles",
                  "Focused on Grand Slam Offers & Lead Gen",
                  "Designed for maximum leverage and zero waste",
                  "Actionable systems for $100M+ scale"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 bg-blue-500/20 p-1 rounded-full">
                      <CheckCircle className="w-5 h-5 text-blue-500" />
                    </div>
                    <span className="text-gray-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-800 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://shop.acquisition.com/cdn/shop/files/81rIBlL_TWL_400x400.jpg?v=1696404122" 
                  alt="Alex Hormozi Methodology" 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
            </motion.div>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              },
              {
                name: "Elena Rodriguez",
                role: "Digital Marketer",
                text: "The 'Money Machine' concept is brilliant. I've already implemented two of the models for my clients with great success.",
                img: "https://picsum.photos/seed/elena/100/100"
              },
              {
                name: "James Wilson",
                role: "Business Consultant",
                text: "Finally, a book that focuses on systems rather than just 'hacks'. This is essential reading for any serious entrepreneur.",
                img: "https://picsum.photos/seed/james/100/100"
              },
              {
                name: "Linda Wu",
                role: "Real Estate Investor",
                text: "I applied the scaling frameworks to my property management business and saw an immediate increase in efficiency.",
                img: "https://picsum.photos/seed/linda/100/100"
              }
            ].map((t, i) => (
              <div key={i} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 relative hover:shadow-lg transition-shadow">
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
              <span className="text-5xl font-black text-blue-600">$99</span>
              <span className="text-xl text-gray-400 line-through font-medium">$129</span>
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
      <section className="py-24 bg-white border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 border border-gray-100 relative">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" /> 100% Risk-Free Guarantee
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                Your Success is Guaranteed, <span className="text-blue-600">Or Your Money Back.</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  We are so confident in the frameworks inside the <strong>100M Money Models</strong> that we're willing to take all the risk. We're not just selling an eBook; we're providing a roadmap to your business transformation.
                </p>
                <p className="italic font-medium text-gray-900">
                  "If you don't find at least one actionable model that you can apply to your business within 30 days, simply email <span className="text-blue-600">dealswithalimul@gmail.com</span> and we'll issue a full refund immediately. No questions asked, no hoops to jump through."
                </p>
                <p>
                  You either get the results you're looking for, or you get your money back. It's that simple.
                </p>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <img 
                  src="https://images.pexels.com/photos/7128984/pexels-photo-7128984.jpeg" 
                  alt="Alimul Islam Signature" 
                  className="w-12 h-12 rounded-full border-2 border-white shadow-md"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="font-bold text-gray-900">Alimul Islam</p>
                  <p className="text-sm text-gray-500">Founder, 100M Money Models</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform lg:rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.pexels.com/photos/8112199/pexels-photo-8112199.jpeg" 
                  alt="Trust and Guarantee" 
                  className="w-full h-[500px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 w-full">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                        <Star className="w-6 h-6 text-white fill-current" />
                      </div>
                      <div>
                        <p className="text-white font-bold">30-Day Guarantee</p>
                        <p className="text-white/80 text-sm">Full Refund • No Questions Asked</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative background element */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl -z-10 opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Author */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-64 h-64 bg-gray-200 rounded-2xl overflow-hidden flex-shrink-0 border-4 border-white shadow-2xl transform -rotate-3">
              <img 
                src="https://images.pexels.com/photos/7128984/pexels-photo-7128984.jpeg" 
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
