import React from 'react';
import { Star, MapPin, ExternalLink } from 'lucide-react';

interface StoreCardProps {
  id: number;
  name: string;
  category: string;
  rating: number;
  reviews: number;
  location: string;
  image: string;
  verified: boolean;
  description: string;
  featured: string[];
}

export default function StoreCard({
  name,
  category,
  rating,
  reviews,
  location,
  image,
  verified,
  description,
  featured,
}: StoreCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        {verified && (
          <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
            Verified
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-gray-900">
            {name}
          </h3>
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="ml-1 text-gray-700">{rating}</span>
          </div>
        </div>
        <p className="text-blue-600 font-medium mb-2">{category}</p>
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <MapPin className="w-4 h-4 mr-1" />
          {location}
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        
        {/* Featured Products Preview */}
        <div className="flex gap-2 mb-4 overflow-x-auto scrollbar-hide">
          {featured.map((item, index) => (
            <img
              key={index}
              src={item}
              alt={`${name} product ${index + 1}`}
              className="w-16 h-16 rounded-md object-cover flex-shrink-0"
            />
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{reviews} reviews</span>
          <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium">
            Visit Store
            <ExternalLink className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}