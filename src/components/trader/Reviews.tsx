import React from 'react';
import { Star, ThumbsUp } from 'lucide-react';

interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  content: string;
  helpful: number;
  image?: string;
}

const mockReviews: Review[] = [
  {
    id: 1,
    author: 'Emma Thompson',
    rating: 5,
    date: '2 days ago',
    content: 'Excellent service! Very professional and completed the job quickly. Would definitely recommend.',
    helpful: 12,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100',
  },
  {
    id: 2,
    author: 'Michael Chen',
    rating: 4,
    date: '1 week ago',
    content: 'Good work overall. Slightly delayed but kept me informed throughout the process.',
    helpful: 8,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100',
  },
];

export default function Reviews({ traderId }: { traderId: number }) {
  return (
    <div className="space-y-8">
      {mockReviews.map((review) => (
        <div key={review.id} className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-start space-x-4">
            {review.image && (
              <img
                src={review.image}
                alt={review.author}
                className="w-12 h-12 rounded-full object-cover"
              />
            )}
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">{review.author}</h4>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-500">{review.date}</span>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-gray-600">{review.content}</p>
              <div className="mt-4 flex items-center space-x-4">
                <button className="flex items-center text-gray-500 hover:text-blue-600">
                  <ThumbsUp className="w-4 h-4 mr-1" />
                  <span className="text-sm">Helpful ({review.helpful})</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}