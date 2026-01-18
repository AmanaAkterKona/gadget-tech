"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function ItemsPage() {
  // State for items from API
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  
  const itemsPerPage = 9;

  // Fetch items from API
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/items');
      const result = await response.json();
      
      if (result.success) {
        setItems(result.data);
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError('Failed to load items');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Get unique categories
  const categories = ["all", ...new Set(items.map((item) => item.category))];

  // Filter and search items
  const filteredItems = items.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Sort items
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "name") return a.title.localeCompare(b.title);
    if (sortBy === "rating") return (b.rating?.rate || 0) - (a.rating?.rate || 0);
    return 0;
  });

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedItems.length / itemsPerPage);

  // Reset to page 1 when filters change
  const handleFilterChange = (filterFn) => {
    filterFn();
    setCurrentPage(1);
  };

  // Page change handlers
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Generate page numbers with ellipsis
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("...");
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-xl font-semibold text-gray-700">Loading products...</p>
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <svg
            className="w-20 h-20 text-red-500 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Error Loading Products</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={fetchItems}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section - PREMIUM MINIMALIST */}
      <div className="relative bg-gradient-to-b from-slate-900 to-slate-800 border-b border-purple-500/10">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center relative z-10">
          <h1 className="text-5xl font-semibold text-white mb-3">
            Featured{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Accessories
            </span>
          </h1>
          <p className="text-xl text-gray-400">
            Explore our collection of premium gadgets
          </p>
        </div>
      </div>

      {/* Search and Filters - MINIMALIST PREMIUM */}
      <div className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar - MINIMALIST */}
            <div className="flex-1">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) =>
                    handleFilterChange(() => setSearchQuery(e.target.value))
                  }
                  className="w-full px-5 py-4 pl-14 rounded-xl border border-slate-600 bg-slate-700/50 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all duration-300 font-medium"
                />
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 group-focus-within:text-purple-400 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Category Filter - MINIMALIST */}
            <div className="md:w-64">
              <select
                value={selectedCategory}
                onChange={(e) =>
                  handleFilterChange(() => setSelectedCategory(e.target.value))
                }
                className="w-full px-5 py-4 rounded-xl border border-slate-600 bg-slate-700/50 text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all duration-300 capitalize font-medium cursor-pointer appearance-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 1rem center',
                  backgroundSize: '1.5rem'
                }}
              >
                {categories.map((category) => (
                  <option key={category} value={category} className="bg-slate-700 text-white">
                    {category === "all" ? "All Categories" : category}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort By - MINIMALIST */}
            <div className="md:w-64">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-5 py-4 rounded-xl border border-slate-600 bg-slate-700/50 text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all duration-300 font-medium cursor-pointer appearance-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 1rem center',
                  backgroundSize: '1.5rem'
                }}
              >
                <option value="default" className="bg-slate-700 text-white">Default Sort</option>
                <option value="price-low" className="bg-slate-700 text-white">Price: Low to High</option>
                <option value="price-high" className="bg-slate-700 text-white">Price: High to Low</option>
                <option value="name" className="bg-slate-700 text-white">Name: A to Z</option>
                <option value="rating" className="bg-slate-700 text-white">Top Rated</option>
              </select>
            </div>
          </div>

          {/* Active Filters Display - MINIMALIST */}
          {(searchQuery || selectedCategory !== "all") && (
            <div className="flex flex-wrap items-center gap-2 mt-4">
              <span className="text-sm font-medium text-gray-400">
                Active filters:
              </span>
              {searchQuery && (
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/80 text-white rounded-lg text-sm font-medium">
                  Search: "{searchQuery}"
                  <button
                    onClick={() =>
                      handleFilterChange(() => setSearchQuery(""))
                    }
                    className="hover:text-gray-200 transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </span>
              )}
              {selectedCategory !== "all" && (
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/80 text-white rounded-lg text-sm font-medium capitalize">
                  Category: {selectedCategory}
                  <button
                    onClick={() =>
                      handleFilterChange(() => setSelectedCategory("all"))
                    }
                    className="hover:text-gray-200 transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </span>
              )}
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                  setCurrentPage(1);
                }}
                className="text-sm text-purple-400 hover:text-purple-300 font-medium transition-colors"
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Items Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Results count */}
        <div className="mb-6">
          <p className="text-lg font-medium text-gray-700">
            {sortedItems.length === 0 ? (
              <span className="text-red-600">No products found</span>
            ) : (
              <>
                Found{" "}
                <span className="text-blue-600 font-bold">
                  {sortedItems.length}
                </span>{" "}
                {sortedItems.length === 1 ? "product" : "products"}
              </>
            )}
          </p>
        </div>

        {sortedItems.length === 0 ? (
          <div className="text-center py-20">
            <svg
              className="w-24 h-24 mx-auto text-gray-300 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              No products found
            </h3>
            <p className="text-gray-500 mb-6">
              Try adjusting your search or filters
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setCurrentPage(1);
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                {/* Image Container */}
                <div className="relative bg-gray-100 aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Color Dots */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-800 border-2 border-white shadow"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-400 border-2 border-white shadow"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {item.description.slice(0, 80)}...
                  </p>

                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-semibold text-gray-900">
                      ${item.price}
                    </p>

                    <Link
                      href={`/items/${item.id}`}
                      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
                    >
                      View Details
                      <svg
                        className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Premium Pagination */}
        {totalPages > 1 && (
          <div className="mt-16 mb-8">
            {/* Showing info */}
            <div className="text-center mb-6 bg-blue-50 py-3 rounded-xl">
              <p className="text-base font-bold text-gray-800">
                Showing{" "}
                <span className="text-blue-600 text-lg">
                  {indexOfFirstItem + 1}
                </span>{" "}
                to{" "}
                <span className="text-blue-600 text-lg">
                  {Math.min(indexOfLastItem, sortedItems.length)}
                </span>{" "}
                of{" "}
                <span className="text-blue-600 text-lg">
                  {sortedItems.length}
                </span>{" "}
                results
              </p>
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-center gap-3">
              {/* Previous Button */}
              <button
                onClick={goToPrevPage}
                disabled={currentPage === 1}
                className={`group relative px-6 py-3.5 rounded-xl font-bold text-base transition-all duration-300 ${
                  currentPage === 1
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:-translate-y-0.5"
                }`}
              >
                <div className="flex items-center gap-2">
                  <svg
                    className={`w-5 h-5 transition-transform ${
                      currentPage !== 1 ? "group-hover:-translate-x-1" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  <span className="hidden sm:inline">Previous</span>
                </div>
              </button>

              {/* Page Numbers */}
              <div className="flex gap-2">
                {getPageNumbers().map((page, index) => {
                  if (page === "...") {
                    return (
                      <span
                        key={`ellipsis-${index}`}
                        className="px-4 py-3 text-gray-800 font-black text-xl"
                      >
                        •••
                      </span>
                    );
                  }

                  return (
                    <button
                      key={page}
                      onClick={() => goToPage(page)}
                      className={`min-w-[52px] px-5 py-3.5 rounded-xl font-bold text-base transition-all duration-300 ${
                        currentPage === page
                          ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-xl shadow-blue-600/50 scale-110 border-2 border-blue-300 ring-4 ring-blue-200"
                          : "bg-white text-gray-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:text-blue-700 shadow-md hover:shadow-lg hover:-translate-y-0.5 border-2 border-gray-300 hover:border-blue-400"
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}
              </div>

              {/* Next Button */}
              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className={`group relative px-6 py-3.5 rounded-xl font-bold text-base transition-all duration-300 ${
                  currentPage === totalPages
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:-translate-y-0.5"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="hidden sm:inline">Next</span>
                  <svg
                    className={`w-5 h-5 transition-transform ${
                      currentPage !== totalPages
                        ? "group-hover:translate-x-1"
                        : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </button>
            </div>

            {/* Page indicator */}
            <div className="text-center mt-6">
              <p className="text-base font-bold text-gray-800">
                Page{" "}
                <span className="text-blue-600 text-lg">{currentPage}</span> of{" "}
                <span className="text-blue-600 text-lg">{totalPages}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}