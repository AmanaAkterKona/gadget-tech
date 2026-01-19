import React from 'react';
import { Truck, Package, Globe, Clock } from 'lucide-react';

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <Truck className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Shipping Information</h1>
          <p className="text-xl md:text-2xl">Fast, reliable delivery to your doorstep</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        {/* Shipping Methods */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Shipping Methods</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Truck className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Standard Shipping</h3>
              <p className="text-gray-600 mb-4">5-7 business days</p>
              <p className="text-3xl font-bold text-gray-900 mb-4">$5.99</p>
              <p className="text-gray-600">Free on orders over $50</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-2 border-purple-500">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                Popular
              </div>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Package className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Express Shipping</h3>
              <p className="text-gray-600 mb-4">2-3 business days</p>
              <p className="text-3xl font-bold text-gray-900 mb-4">$12.99</p>
              <p className="text-gray-600">Fast delivery guaranteed</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Next Day Delivery</h3>
              <p className="text-gray-600 mb-4">1 business day</p>
              <p className="text-3xl font-bold text-gray-900 mb-4">$24.99</p>
              <p className="text-gray-600">Order before 2 PM</p>
            </div>
          </div>
        </div>

        {/* Shipping Regions */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">We Ship Worldwide</h2>
          <div className="bg-white p-12 rounded-2xl shadow-lg">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Globe className="w-12 h-12 text-purple-600" />
              <h3 className="text-3xl font-bold text-gray-900">International Shipping Available</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Domestic Shipping (USA)</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>✅ Free shipping on orders over $50</li>
                  <li>✅ All 50 states covered</li>
                  <li>✅ Real-time tracking included</li>
                  <li>✅ Signature not required</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">International Shipping</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>🌍 Ships to 150+ countries</li>
                  <li>🌍 7-14 business days delivery</li>
                  <li>🌍 Customs fees may apply</li>
                  <li>🌍 Starting from $19.99</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Tracking */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-12 rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Track Your Order</h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Once your order ships, you'll receive a tracking number via email. Use it to monitor your package's journey in real-time.
          </p>
          <div className="flex gap-4 max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Enter tracking number"
              className="flex-1 px-6 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all">
              Track
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}