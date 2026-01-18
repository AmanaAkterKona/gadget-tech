"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { use } from "react";

export default function ItemDetails({ params }) {
  const router = useRouter();
  const { id } = use(params);
  
  // State management
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch item details from API
  useEffect(() => {
    if (id) {
      fetchItem();
    }
  }, [id]);

  const fetchItem = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/items/${id}`);
      const result = await response.json();
      
      if (result.success) {
        setItem(result.data);
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError('Failed to load item');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm(`Are you sure you want to delete "${item.title}"?`)) {
      return;
    }

    try {
      const response = await fetch(`/api/items/${id}`, {
        method: 'DELETE',
      });
      
      const result = await response.json();
      
      if (result.success) {
        alert("✅ Item deleted successfully!");
        router.push("/items");
      } else {
        alert("❌ Failed to delete item");
      }
    } catch (error) {
      console.error('Delete error:', error);
      alert("❌ Error deleting item");
    }
  };

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-xl font-semibold text-gray-700">Loading item details...</p>
        </div>
      </div>
    );
  }

  // Error or Not Found State
  if (error || !item) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-6xl font-bold text-gray-300 mb-4">404</h2>
          <p className="text-xl text-gray-600 mb-6">{error || 'Item not found'}</p>
          <Link
            href="/items"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition"
          >
            Back to Items
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/items" className="text-blue-600 hover:text-blue-700">
              All Items
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">{item.title}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative bg-gray-100 aspect-square md:aspect-auto">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                <div className="w-2 h-2 rounded-full bg-gray-800"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              </div>
            </div>

            {/* Details Section */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              {item.rating?.rate >= 4.5 && (
                <div className="inline-block mb-4">
                  <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full">
                    Top Rated
                  </span>
                </div>
              )}

              <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 leading-tight">
                {item.title}
              </h1>

              {item.rating && (
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(item.rating.rate)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {item.rating.rate} ({item.rating.count} reviews)
                  </span>
                </div>
              )}

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {item.description}
              </p>

              <div className="mb-8">
                <p className="text-sm text-gray-500 mb-1">Price</p>
                <p className="text-5xl font-semibold text-gray-900">
                  ${item.price}
                </p>
              </div>

              <div className="mb-8">
                <p className="text-sm text-gray-500 mb-2">Category</p>
                <span className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium capitalize">
                  {item.category}
                </span>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30">
                  Add to Cart
                </button>
                <button className="px-6 py-4 border-2 border-gray-300 rounded-full hover:border-gray-400 transition-colors">
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>

              {/* Delete Button - Professional Style */}
              <div className="mt-6">
                <button
                  onClick={handleDelete}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-red-50 text-red-600 rounded-full font-semibold hover:bg-red-100 transition-colors border-2 border-red-200 hover:border-red-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  Delete Item
                </button>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <svg
                      className="w-8 h-8 mx-auto mb-2 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                      />
                    </svg>
                    <p className="text-xs text-gray-600">Free Shipping</p>
                  </div>
                  <div>
                    <svg
                      className="w-8 h-8 mx-auto mb-2 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <p className="text-xs text-gray-600">1 Year Warranty</p>
                  </div>
                  <div>
                    <svg
                      className="w-8 h-8 mx-auto mb-2 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    <p className="text-xs text-gray-600">Easy Returns</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}