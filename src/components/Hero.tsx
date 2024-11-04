import React from 'react';
import SearchBar from './SearchBar';
import { ListPlus, Store } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[600px] bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 h-full">
        <div className="h-full flex flex-col md:flex-row md:items-center justify-center gap-8">
          {/* Left side with heading and search */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Local Traders & Artisan Market
            </h1>
            <p className="text-xl text-white mb-8">
              Discover skilled professionals and local artisans in your area
            </p>
            <SearchBar />
          </div>

          {/* Right side with CTAs */}
          <div className="space-y-4">
            {/* Services CTA */}
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Are you a professional?
              </h2>
              <p className="text-white/90 mb-6">
                Join our network of trusted traders and grow your business
              </p>
              <button className="flex items-center justify-center w-full bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                <ListPlus className="w-5 h-5 mr-2" />
                Get Listed
              </button>
            </div>

            {/* Marketplace CTA */}
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Artisan or Food Producer?
              </h2>
              <p className="text-white/90 mb-6">
                Open your digital stall and reach local customers
              </p>
              <button className="flex items-center justify-center w-full bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                <Store className="w-5 h-5 mr-2" />
                Get Your Stall
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}