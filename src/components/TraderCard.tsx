import React from 'react';
import { MapPin, Star } from 'lucide-react';

interface TraderProps {
  id: number;
  name: string;
  profession: string;
  rating: number;
  reviews: number;
  location: string;
  image: string;
  verified: boolean;
}

export default function TraderCard({
  name,
  profession,
  rating,
  reviews,
  location,
  image,
  verified,
}: TraderProps) {
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
        <p className="text-gray-600 mb-2">{profession}</p>
        <div className="flex items-center text-gray-500 text-sm">
          <MapPin className="w-4 h-4 mr-1" />
          {location}
        </div>
        <div className="mt-4 text-sm text-gray-500">
          {reviews} reviews
        </div>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Contact
        </button>
      </div>
    </div>
  );
}