"use client";
import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers. All transactions are secured with SSL encryption for your safety."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days within the US. Express shipping is available for 1-2 day delivery. International shipping varies by location but typically takes 7-14 business days. Free shipping on orders over $50!"
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day money-back guarantee on all products. Items must be in original condition with all packaging. Simply contact our support team to initiate a return. Return shipping is free for defective items."
    },
    {
      question: "Do you offer warranty on products?",
      answer: "Yes! All products come with manufacturer warranty ranging from 1-3 years depending on the item. We also offer optional extended warranty plans for additional coverage and peace of mind."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can track your order in real-time through our website or the carrier's website. Our customer support team is also available 24/7 to help."
    },
    {
      question: "Are the products authentic?",
      answer: "Absolutely! We only source products directly from authorized distributors and manufacturers. Every item comes with authenticity certificates and original packaging. We guarantee 100% genuine products."
    },
    {
      question: "Can I cancel or modify my order?",
      answer: "Orders can be cancelled or modified within 2 hours of placement. After that, items are prepared for shipping. Please contact our support team immediately if you need to make changes to your order."
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes! Our dedicated support team is available 24/7 via live chat, email, and phone. We respond to all inquiries within 1 hour during business hours. Weekend support is also available."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80"
          alt="FAQ Background"
          className="w-full h-full object-cover opacity-20"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900/95 to-purple-900/80"></div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-full border border-purple-500/30">
            <HelpCircle className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 text-sm font-semibold">Got Questions?</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about our products, shipping, and services
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto grid gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-800/80 to-purple-900/30 backdrop-blur-xl rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 overflow-hidden shadow-xl"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 md:p-8 flex items-start justify-between gap-4 text-left transition-all duration-300"
              >
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                    {faq.question}
                  </h3>
                </div>
                
                {/* Toggle Icon */}
                <div className={`flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  openIndex === index ? 'rotate-180 scale-110' : 'rotate-0'
                }`}>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-white" />
                  ) : (
                    <Plus className="w-5 h-5 text-white" />
                  )}
                </div>
              </button>

              {/* Answer Content with Animation */}
              <div
                className={`transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
                style={{
                  overflow: 'hidden'
                }}
              >
                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <div className="pt-4 border-t border-purple-500/20">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 pointer-events-none ${
                openIndex === index ? 'opacity-100' : ''
              }`}></div>

              {/* Active Indicator */}
              {openIndex === index && (
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-br from-slate-800/60 to-purple-900/40 backdrop-blur-xl rounded-3xl border border-purple-500/30 max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-300 mb-6">
            Our support team is here to help you 24/7
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-full hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/60">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;