import React from 'react';
import { Zap, Award, Users, Target } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Gadget Tech</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Your trusted partner in cutting-edge technology and innovation
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Founded in 2020, Gadget Tech has been at the forefront of delivering premium technology products to tech enthusiasts worldwide. What started as a small passion project has grown into a trusted marketplace for the latest gadgets and innovations.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We believe technology should be accessible, affordable, and exciting. That's why we carefully curate our product selection to bring you only the best devices that combine cutting-edge features with exceptional value.
          </p>
        </div>
      </div>

      {/* Values Grid */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We stay ahead of trends to bring you the latest technology innovations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality</h3>
              <p className="text-gray-600">
                Every product is carefully selected and tested for excellence.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Community</h3>
              <p className="text-gray-600">
                Building lasting relationships with our customers and partners.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                Committed to delivering exceptional service at every touchpoint.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Meet Our Team</h2>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
          Our passionate team of tech enthusiasts works tirelessly to curate the best products and provide exceptional customer service. We're here to help you find the perfect gadget for your needs.
        </p>
      </div>
    </div>
  );
}