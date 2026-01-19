import React from 'react';
import { RotateCcw, CheckCircle, Clock, AlertCircle } from 'lucide-react';

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <RotateCcw className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Returns & Refunds</h1>
          <p className="text-xl md:text-2xl">30-Day Money Back Guarantee</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        {/* Return Policy Highlights */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">30 Days</h3>
            <p className="text-sm text-gray-600">Return window</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <RotateCcw className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Easy Returns</h3>
            <p className="text-sm text-gray-600">Simple process</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Fast Refunds</h3>
            <p className="text-sm text-gray-600">3-5 business days</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">No Questions</h3>
            <p className="text-sm text-gray-600">Hassle-free returns</p>
          </div>
        </div>

        {/* Return Process */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">How to Return</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Request Return</h3>
              <p className="text-gray-600">
                Contact our support team or use your account dashboard to initiate a return within 30 days of delivery.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ship It Back</h3>
              <p className="text-gray-600">
                Pack the item securely with all original accessories and use our prepaid return label for free return shipping.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Refund</h3>
              <p className="text-gray-600">
                Once we receive and inspect your return, we'll process your refund within 3-5 business days.
              </p>
            </div>
          </div>
        </div>

        {/* Return Conditions */}
        <div className="bg-white p-12 rounded-2xl shadow-lg mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Return Conditions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-green-600 mb-4">✅ Eligible for Return</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Unused items in original packaging</li>
                <li>• All accessories and manuals included</li>
                <li>• Items without physical damage</li>
                <li>• Within 30 days of delivery</li>
                <li>• Original receipt or proof of purchase</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-600 mb-4">❌ Not Eligible for Return</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Items damaged by customer</li>
                <li>• Missing original packaging</li>
                <li>• Products on final sale</li>
                <li>• Digital downloads or software</li>
                <li>• Items past 30-day return window</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Refund Methods */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-12 rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Refund Options</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl text-center">
              <h3 className="font-bold text-gray-900 mb-2">Original Payment</h3>
              <p className="text-sm text-gray-600">Refund to your original payment method</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <h3 className="font-bold text-gray-900 mb-2">Store Credit</h3>
              <p className="text-sm text-gray-600">Get 10% bonus as store credit</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <h3 className="font-bold text-gray-900 mb-2">Exchange</h3>
              <p className="text-sm text-gray-600">Exchange for another product</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}