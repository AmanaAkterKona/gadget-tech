import React from 'react';
import { Shield, Award, FileCheck, Wrench, AlertCircle } from 'lucide-react'; // ✅ AlertCircle added

export default function WarrantyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <Shield className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Warranty Policy</h1>
          <p className="text-xl md:text-2xl">Your purchase is protected</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        {/* Warranty Coverage */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <Award className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">1 Year Standard</h3>
            <p className="text-gray-600 mb-4">All products come with a minimum 1-year manufacturer warranty</p>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>✓ Manufacturing defects</li>
              <li>✓ Hardware malfunctions</li>
              <li>✓ Parts replacement</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-2 border-purple-500 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold">
              Recommended
            </div>
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">2 Year Extended</h3>
            <p className="text-gray-600 mb-4">Add extended coverage for just $29.99</p>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>✓ All standard coverage</li>
              <li>✓ Accidental damage</li>
              <li>✓ Priority support</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <FileCheck className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Lifetime Protection</h3>
            <p className="text-gray-600 mb-4">Ultimate peace of mind for $79.99</p>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>✓ Lifetime coverage</li>
              <li>✓ Accidental damage</li>
              <li>✓ Dedicated support line</li>
            </ul>
          </div>
        </div>

        {/* What's Covered */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">What's Covered</h2>
          <div className="bg-white p-12 rounded-2xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-green-600 mb-6 flex items-center gap-2">
                  <Shield className="w-6 h-6" />
                  Covered Under Warranty
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Manufacturing defects in materials or workmanship</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Hardware failures under normal use</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Battery degradation below 80% capacity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Screen defects (dead pixels, discoloration)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Power supply or charging issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Software bugs (for proprietary software)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-red-600 mb-6 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6" />
                  Not Covered
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span>Physical damage from drops or impacts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span>Water or liquid damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span>Damage from unauthorized repairs or modifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span>Normal wear and tear (scratches, dents)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span>Loss or theft of the product</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span>Software issues from third-party apps</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Claim Process */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">How to Claim Warranty</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto font-bold text-xl mb-4">
                1
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Contact Support</h3>
              <p className="text-sm text-gray-600">Reach out via email or phone</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto font-bold text-xl mb-4">
                2
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Provide Details</h3>
              <p className="text-sm text-gray-600">Share order number and issue description</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto font-bold text-xl mb-4">
                3
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Ship Product</h3>
              <p className="text-sm text-gray-600">Use our prepaid shipping label</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto font-bold text-xl mb-4">
                4
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Get Repair/Replacement</h3>
              <p className="text-sm text-gray-600">Receive within 7-10 business days</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-12 rounded-2xl text-center">
          <Wrench className="w-16 h-16 text-purple-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Warranty Service?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our warranty team is here to help. Contact us today to start your warranty claim.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all">
            Start Warranty Claim
          </button>
        </div>
      </div>
    </div>
  );
}