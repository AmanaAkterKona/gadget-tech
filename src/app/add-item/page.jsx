"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function AddItemPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "",
    image: "",
    description: "",
    rating: "",
  });

  // Check authentication on mount - শুধু একবার
  useEffect(() => {
    checkAuth();
    fetchCategories();
  }, []); // Empty dependency array - শুধু একবার চলবে

  const checkAuth = () => {
    // Cookie থেকে authentication check করুন
    const cookies = document.cookie.split(';');
    const isLoggedIn = cookies.some(cookie => 
      cookie.trim().startsWith('isLoggedIn=true')
    );
    
    console.log('Auth check:', isLoggedIn); // Debug জন্য
    
    if (!isLoggedIn) {
      console.log('Not logged in, redirecting...');
      alert('⚠️ Please login first to add items!');
      router.push('/login?redirect=/add-item');
      return;
    }
    
    console.log('User is authenticated');
    setIsAuthenticated(true);
    setAuthChecked(true);
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/items');
      const result = await response.json();
      
      if (result.success) {
        // Extract unique categories
        const uniqueCategories = [...new Set(result.data.map((item) => item.category))];
        setCategories(uniqueCategories);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.title || !formData.price || !formData.category || !formData.description) {
      alert('⚠️ Please fill all required fields!');
      return;
    }

    setLoading(true);

    const newItem = {
      title: formData.title,
      price: parseFloat(formData.price),
      category: formData.category,
      image: formData.image || "https://via.placeholder.com/400",
      description: formData.description,
      rating: {
        rate: parseFloat(formData.rating) || 0,
        count: 1,
      },
    };

    try {
      const response = await fetch('/api/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem)
      });

      const result = await response.json();

      if (result.success) {
        alert('✅ Item successfully added!');
        
        // Form reset করুন
        setFormData({
          title: "",
          price: "",
          category: "",
          image: "",
          description: "",
          rating: "",
        });

        // Items page এ redirect করুন
        setTimeout(() => {
          router.push('/items');
        }, 500);
      } else {
        alert('❌ Error: ' + result.error);
      }
    } catch (error) {
      console.error('Error adding item:', error);
      alert('❌ Failed to add item. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // যদি authentication check না হয়ে থাকে তাহলে loading দেখান
  if (!authChecked) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-purple-600 mx-auto mb-4"></div>
          <p className="text-xl font-semibold text-gray-700">Checking authentication...</p>
        </div>
      </div>
    );
  }

  // যদি authenticated না হয় তাহলে কিছু রেন্ডার করবেন না
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Add <span className="text-purple-600">New Item</span>
          </h1>
          <p className="text-gray-500 text-lg">
            Fill out the details to add a premium product
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Product Title *
            </label>
            <input
              type="text"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter product title"
              className="w-full px-6 py-4 rounded-2xl border border-gray-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-gray-900 placeholder-gray-400 font-medium"
            />
          </div>

          {/* Price & Rating */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Price ($) *
              </label>
              <input
                type="number"
                name="price"
                required
                step="0.01"
                min="0"
                value={formData.price}
                onChange={handleChange}
                placeholder="0.00"
                className="w-full px-6 py-4 rounded-2xl border border-gray-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-gray-900 placeholder-gray-400 font-medium"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Rating (0 - 5)
              </label>
              <input
                type="number"
                step="0.1"
                min="0"
                max="5"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                placeholder="e.g., 4.5"
                className="w-full px-6 py-4 rounded-2xl border border-gray-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-gray-900 placeholder-gray-400 font-medium"
              />
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Category *
            </label>
            <select
              name="category"
              required
              value={formData.category}
              onChange={handleChange}
              className="w-full px-6 py-4 rounded-2xl border border-gray-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-gray-900 font-medium capitalize cursor-pointer appearance-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 1rem center',
                backgroundSize: '1.5rem'
              }}
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat} className="capitalize">
                  {cat}
                </option>
              ))}
              <option value="other">Other (Custom)</option>
            </select>
          </div>

          {/* Custom Category Input (if 'other' is selected) */}
          {formData.category === 'other' && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Custom Category *
              </label>
              <input
                type="text"
                name="category"
                required
                onChange={handleChange}
                placeholder="Enter custom category"
                className="w-full px-6 py-4 rounded-2xl border border-gray-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-gray-900 placeholder-gray-400 font-medium"
              />
            </div>
          )}

          {/* Image */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Image URL
            </label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              className="w-full px-6 py-4 rounded-2xl border border-gray-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-gray-900 placeholder-gray-400 font-medium"
            />
            <p className="text-xs text-gray-500 mt-2">
              Leave empty to use placeholder image
            </p>
          </div>

          {/* Image Preview */}
          {formData.image && (
            <div className="mt-4">
              <p className="text-sm font-semibold text-gray-700 mb-2">Image Preview:</p>
              <img 
                src={formData.image} 
                alt="Preview" 
                className="w-32 h-32 object-cover rounded-xl border-2 border-gray-300"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/400";
                }}
              />
            </div>
          )}

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Product Description *
            </label>
            <textarea
              name="description"
              required
              rows={5}
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your product in detail..."
              className="w-full px-6 py-4 rounded-2xl border border-gray-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-gray-900 placeholder-gray-400 font-medium resize-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Adding...
                </span>
              ) : (
                'Add Item'
              )}
            </button>
            
            <button
              type="button"
              onClick={() => router.push('/items')}
              className="px-8 py-4 bg-gray-200 text-gray-700 rounded-2xl font-bold text-lg hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}