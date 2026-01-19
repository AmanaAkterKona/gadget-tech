import React from 'react';
import { Headphones, MessageCircle, Mail, Phone, Clock, HelpCircle, BookOpen, Video } from 'lucide-react';

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <Headphones className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Customer Support</h1>
          <p className="text-xl md:text-2xl">We're here to help you 24/7</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        {/* Contact Methods */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Get in Touch</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <MessageCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Live Chat</h3>
              <p className="text-gray-600 text-center mb-4 text-sm">Chat with our team instantly</p>
              <p className="text-center">
                <span className="inline-block bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold">
                  Available Now
                </span>
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Email Support</h3>
              <p className="text-gray-600 text-center mb-4 text-sm">support@gadgettech.com</p>
              <p className="text-center text-sm text-gray-500">Response within 24 hours</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Phone Support</h3>
              <p className="text-gray-600 text-center mb-4 text-sm">+1 (234) 567-890</p>
              <p className="text-center text-sm text-gray-500">Mon-Fri: 9AM - 6PM</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Schedule Call</h3>
              <p className="text-gray-600 text-center mb-4 text-sm">Book a time that works for you</p>
              <p className="text-center text-sm text-gray-500">Available slots</p>
            </div>
          </div>
        </div>

        {/* Support Resources */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Self-Service Resources</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <HelpCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">FAQ</h3>
              <p className="text-gray-600 mb-6">Find quick answers to common questions about orders, shipping, and products.</p>
              <a href="/faq" className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                Browse FAQs →
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Knowledge Base</h3>
              <p className="text-gray-600 mb-6">Detailed guides, tutorials, and documentation for all our products.</p>
              <a href="#" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                View Articles →
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Video className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Video Tutorials</h3>
              <p className="text-gray-600 mb-6">Step-by-step video guides to help you get the most out of your gadgets.</p>
              <a href="#" className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors">
                Watch Videos →
              </a>
            </div>
          </div>
        </div>

        {/* Popular Topics */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Popular Support Topics</h2>
          <div className="bg-white p-12 rounded-2xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-purple-500 pl-6 py-4 hover:bg-purple-50 transition-colors cursor-pointer rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">How do I track my order?</h3>
                <p className="text-gray-600">Learn how to monitor your shipment in real-time</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-6 py-4 hover:bg-blue-50 transition-colors cursor-pointer rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">What's your return policy?</h3>
                <p className="text-gray-600">30-day money-back guarantee details</p>
              </div>
              <div className="border-l-4 border-green-500 pl-6 py-4 hover:bg-green-50 transition-colors cursor-pointer rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">How do I claim warranty?</h3>
                <p className="text-gray-600">Step-by-step warranty claim process</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-6 py-4 hover:bg-orange-50 transition-colors cursor-pointer rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Payment methods accepted?</h3>
                <p className="text-gray-600">All supported payment options</p>
              </div>
              <div className="border-l-4 border-pink-500 pl-6 py-4 hover:bg-pink-50 transition-colors cursor-pointer rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Do you ship internationally?</h3>
                <p className="text-gray-600">Global shipping information</p>
              </div>
              <div className="border-l-4 border-indigo-500 pl-6 py-4 hover:bg-indigo-50 transition-colors cursor-pointer rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">How to reset my password?</h3>
                <p className="text-gray-600">Account security and password recovery</p>
              </div>
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Support Hours</h2>
          <div className="bg-white p-12 rounded-2xl shadow-lg max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Clock className="w-12 h-12 text-purple-600" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900">We're Here When You Need Us</h3>
                <p className="text-gray-600">Multiple time zones, one support team</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-900 font-semibold">Monday - Friday</span>
                <span className="text-gray-600">9:00 AM - 6:00 PM EST</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-900 font-semibold">Saturday</span>
                <span className="text-gray-600">10:00 AM - 4:00 PM EST</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-900 font-semibold">Sunday</span>
                <span className="text-gray-600">Closed</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-900 font-semibold">Live Chat</span>
                <span className="text-green-600 font-semibold">24/7 Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-12 rounded-2xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Still Need Help?</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Can't find what you're looking for? Send us a message and we'll get back to you as soon as possible.
          </p>
          <form className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                <option>Select a topic</option>
                <option>Order Status</option>
                <option>Product Information</option>
                <option>Returns & Refunds</option>
                <option>Warranty Claim</option>
                <option>Technical Support</option>
                <option>Other</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Order Number (Optional)</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="#12345"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
              <textarea
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Tell us how we can help..."
              ></textarea>
            </div>
            <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all hover:scale-105">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}