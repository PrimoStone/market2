import React from 'react';
import { Star, MapPin, Shield, Award, ArrowLeft, ShoppingBag } from 'lucide-react';
import ProductGrid from './ProductGrid';

interface StoreDetailProps {
  store: {
    id: number;
    name: string;
    category: string;
    rating: number;
    reviews: number;
    location: string;
    image: string;
    verified: boolean;
    description: string;
    story: string;
    products: any[];
    yearsActive: number;
    totalSales: number;
  };
  onBack?: () => void;
}

export default function StoreDetail({ store, onBack }: StoreDetailProps) {
  const [activeTab, setActiveTab] = React.useState('products');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <button 
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to marketplace
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <h1 className="text-3xl font-bold">{store.name}</h1>
                {store.verified && (
                  <Shield className="w-6 h-6 text-blue-600" />
                )}
              </div>
              <p className="text-xl text-blue-600">{store.category}</p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1 font-semibold">{store.rating}</span>
                  <span className="ml-1 text-gray-500">({store.reviews} reviews)</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <MapPin className="w-4 h-4 mr-1" />
                  {store.location}
                </div>
              </div>
              <p className="text-gray-600">{store.description}</p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-semibold">{store.yearsActive} Years</p>
                    <p className="text-sm text-gray-500">Active Seller</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <ShoppingBag className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-semibold">{store.totalSales}+</p>
                    <p className="text-sm text-gray-500">Products Sold</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] md:h-auto">
              <img
                src={store.image}
                alt={store.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs and Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex space-x-8 border-b">
          {['products', 'about', 'reviews'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-2 capitalize ${
                activeTab === tab
                  ? 'border-b-2 border-blue-600 text-blue-600 font-semibold'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="py-8">
          {activeTab === 'products' && <ProductGrid products={store.products} />}
          {activeTab === 'about' && (
            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="text-gray-600">{store.story}</p>
            </div>
          )}
          {/* Reviews tab content would go here */}
        </div>
      </div>
    </div>
  );
}