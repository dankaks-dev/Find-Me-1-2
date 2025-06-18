import { useState } from 'react';
import Head from 'next/head';
import { FiSearch, FiShoppingBag, FiLeaf, FiHeart, FiShare2 } from 'react-icons/fi';

export default function ModernFindMeStore() {
  // Sample product data
  const [products] = useState([
    {
      id: '1',
      name: 'Organic Bamboo Toothbrush Set (4-Pack)',
      price: 12.99,
      category: 'zero-waste',
      image: 'https://images.unsplash.com/photo-1558640476-437a2b9438a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
      affiliateLink: '#',
      tags: ['plastic-free', 'biodegradable', 'vegan'],
      rating: 4.5
    },
    {
      id: '2',
      name: 'Reusable Organic Cotton Tote Bag',
      price: 18.50,
      category: 'ethical-fashion',
      image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
      affiliateLink: '#',
      tags: ['organic', 'fair-trade', 'reusable'],
      rating: 4.2
    },
    {
      id: '3',
      name: 'Stainless Steel Water Bottle',
      price: 24.95,
      category: 'plastic-free',
      image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
      affiliateLink: '#',
      tags: ['BPA-free', 'insulated', 'eco-friendly'],
      rating: 4.8
    },
    {
      id: '4',
      name: 'Natural Lavender Deodorant',
      price: 9.99,
      category: 'natural-care',
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
      affiliateLink: '#',
      tags: ['organic', 'cruelty-free'],
      rating: 4.3
    }
  ]);

  const categories = [
    { name: 'All Products', slug: 'all', icon: <FiShoppingBag /> },
    { name: 'Zero Waste', slug: 'zero-waste', icon: <FiLeaf /> },
    { name: 'Ethical Fashion', slug: 'ethical-fashion', icon: <FiShoppingBag /> },
    { name: 'Natural Care', slug: 'natural-care', icon: <FiLeaf /> },
    { name: 'Plastic Free', slug: 'plastic-free', icon: <FiLeaf /> }
  ];

  const [currentCategory, setCurrentCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = currentCategory === 'all' || product.category === currentCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Find Me | Modern Sustainable Shopping</title>
        <meta name="description" content="Discover eco-friendly products" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Modern Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-green-700 flex items-center">
                <FiLeaf className="mr-2" />
                Find Me
              </h1>
            </div>
            
            <div className="relative w-full md:w-1/3">
              <input
                type="text"
                placeholder="Search sustainable products..."
                className="w-full py-2 pl-10 pr-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FiSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
            
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-green-600 transition">Home</a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition">Shop</a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition">About</a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Category Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 overflow-x-auto">
          <div className="flex space-x-1 py-2">
            {categories.map(cat => (
              <button
                key={cat.slug}
                onClick={() => setCurrentCategory(cat.slug)}
                className={`flex items-center whitespace-nowrap px-4 py-2 rounded-lg transition ${
                  currentCategory === cat.slug 
                    ? 'bg-green-100 text-green-700' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <span className="mr-2">{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-green-800 rounded-xl p-8 mb-12 text-white">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Sustainable Living Made Simple</h2>
            <p className="text-lg mb-6">
              Discover eco-friendly products that help you reduce waste and live more sustainably.
              Every purchase supports our planet.
            </p>
            <button className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition">
              Shop Best Sellers
            </button>
          </div>
        </section>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition duration-300 border border-gray-100">
                <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="relative pb-[100%]">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="absolute h-full w-full object-cover"
                    />
                    <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition">
                      <FiHeart className="text-gray-600" />
                    </button>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center mb-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
                    </div>
                    <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {product.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-gray-900">${product.price}</span>
                      <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition flex items-center">
                        <FiShoppingBag className="mr-1" />
                        Buy Now
                      </button>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-700 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your search or category filters</p>
          </div>
        )}
      </main>

      {/* Modern Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <FiLeaf className="mr-2" />
                Find Me
              </h3>
              <p className="mb-4">Making sustainable shopping simple and accessible.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <FiShare2 />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Shop</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">All Products</a></li>
                <li><a href="#" className="hover:text-white transition">New Arrivals</a></li>
                <li><a href="#" className="hover:text-white transition">Best Sellers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">About</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">Our Mission</a></li>
                <li><a href="#" className="hover:text-white transition">Sustainability</a></li>
                <li><a href="#" className="hover:text-white transition">Affiliate Program</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">Support</a></li>
                <li><a href="#" className="hover:text-white transition">Partnerships</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Find Me. All rights reserved.</p>
            <p className="mt-2">Every purchase makes a difference.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
