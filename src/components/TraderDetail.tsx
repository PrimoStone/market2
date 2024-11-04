import React from 'react';
import { Star, MapPin, Calendar, Clock, Shield, Award, MessageSquare, ArrowLeft } from 'lucide-react';
import Reviews from './trader/Reviews';
import Services from './trader/Services';
import Availability from './trader/Availability';

interface TraderDetailProps {
  trader: {
    id: number;
    name: string;
    profession: string;
    rating: number;
    reviews: number;
    location: string;
    image: string;
    verified: boolean;
    description: string;
    yearsOfExperience: number;
    completedJobs: number;
  };
  onBack?: () => void;
}

export default function TraderDetail({ trader, onBack }: TraderDetailProps) {
  const [activeTab, setActiveTab] = React.useState('services');

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
            Back to traders
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <h1 className="text-3xl font-bold">{trader.name}</h1>
                {trader.verified && (
                  <Shield className="w-6 h-6 text-blue-600" />
                )}
              </div>
              <p className="text-xl text-gray-600">{trader.profession}</p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1 font-semibold">{trader.rating}</span>
                  <span className="ml-1 text-gray-500">({trader.reviews} reviews)</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <MapPin className="w-4 h-4 mr-1" />
                  {trader.location}
                </div>
              </div>
              <p className="text-gray-600">{trader.description}</p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-semibold">{trader.yearsOfExperience} Years</p>
                    <p className="text-sm text-gray-500">Experience</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-semibold">{trader.completedJobs}+</p>
                    <p className="text-sm text-gray-500">Jobs Completed</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] md:h-auto">
              <img
                src={trader.image}
                alt={trader.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the component remains the same */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex space-x-8 border-b">
          {['services', 'reviews', 'availability'].map((tab) => (
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
          {activeTab === 'services' && <Services traderId={trader.id} />}
          {activeTab === 'reviews' && <Reviews traderId={trader.id} />}
          {activeTab === 'availability' && <Availability traderId={trader.id} />}
        </div>

        {/* Contact Card */}
        <div className="fixed bottom-8 right-8 bg-white rounded-lg shadow-lg p-6 w-80">
          <h3 className="text-lg font-semibold mb-4">Book {trader.name}</h3>
          <div className="flex items-center space-x-2 mb-4">
            <Clock className="w-5 h-5 text-gray-400" />
            <span className="text-gray-600">Usually responds within 1 hour</span>
          </div>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Contact Now
          </button>
        </div>
      </div>
    </div>
  );
}