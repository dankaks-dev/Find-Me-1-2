// pages/index.js - Complete all-in-one solution
import { useState } from 'react';
import Head from 'next/head';

export default function FindMeStore() {
  // Sample product data (replace with your affiliate products)
  const [products] = useState([
    {
      id: '1',
      name: 'Bamboo Toothbrush Set',
      price: 12.99,
      category: 'zero-waste',
      image: 'https://m.media-amazon.com/images/I/71qod7GjHYL._AC_UL320_.jpg',
      affiliateLink: 'https://amzn.to/3xample1',
      tags: ['plastic-free', 'biodegradable']
    },
    {
      id: '2',
      name: 'Organic Cotton Tote Bag',
      price: 18.50,
      category: 'ethical-fashion',
      image: 'https://m.media-amazon.com/images/I/81SgZ5+q3bL._AC_UL320_.jpg',
      affiliateLink: 'https://amzn.to/3xample2',
      tags: ['reusable', 'fair-trade']
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState('all');

  const categories = [
    { name: 'All', slug: 'all' },
    { name: 'Zero Waste', slug: 'zero-waste' },
    { name: 'Ethical Fashion', slug: 'ethical-fashion' }
  ];

  const filteredProducts = currentCategory === 'all' 
    ? products 
    : products.filter(p => p.category === currentCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Find Me - Eco-Friendly Products</title>
        <meta name="description" content="Sustainable products for green living" />
      </Head>

      {/* Header */}
      <header className="bg-green-700 text-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Find Me</h1>
            <div className="hidden md:block w-1/2">
              <input 
                type="text" 
                placeholder="Search sustainable products..." 
                className="w-full py-2 px-4 rounded-full text-gray-900"
              />
            </div>
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Category Navigation */}
      <nav className="bg-green-800 text-white">
        <div className="container mx-auto px-4 py-2 overflow-x-auto">
          <div className="flex space-x-6">
            {categories.map(cat => (
              <button 
                key={cat.slug}
                onClick={() => setCurrentCategory(cat.slug)}
                className={`whitespace-nowrap px-3 py-1 rounded-full ${
                  currentCategory === cat.slug ? 'bg-green-600' : 'hover:bg-green-700'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer">
                <div className="relative pb-[100%]">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="absolute h-full w-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {product.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-green-700">${product.price}</span>
                    <span className="bg-green-600 text-white px-3 py-1 rounded text-sm">
                      View Deal
                    </span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p>© {new Date().getFullYear()} Find Me. All rights reserved.</p>
            <p className="mt-2 text-gray-400">Making green living accessible and appealing.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
