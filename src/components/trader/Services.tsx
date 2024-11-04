import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface Service {
  id: number;
  name: string;
  price: string;
  description: string;
  duration: string;
}

const mockServices: Service[] = [
  {
    id: 1,
    name: 'Basic Inspection',
    price: '$50',
    description: 'Complete system inspection and diagnostic report',
    duration: '1 hour',
  },
  {
    id: 2,
    name: 'Standard Service',
    price: '$150',
    description: 'Basic repairs and maintenance work',
    duration: '2-3 hours',
  },
  {
    id: 3,
    name: 'Premium Service',
    price: '$300',
    description: 'Complex repairs and system upgrades',
    duration: '4-5 hours',
  },
];

export default function Services({ traderId }: { traderId: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockServices.map((service) => (
        <div key={service.id} className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
          <p className="text-2xl font-bold text-blue-600 mb-4">{service.price}</p>
          <p className="text-gray-600 mb-4">{service.description}</p>
          <div className="space-y-2">
            <div className="flex items-center text-gray-600">
              <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
              Duration: {service.duration}
            </div>
            <div className="flex items-center text-gray-600">
              <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
              Satisfaction guaranteed
            </div>
          </div>
          <button className="mt-6 w-full bg-gray-50 text-blue-600 font-semibold py-2 rounded-lg hover:bg-gray-100 transition-colors">
            Book Service
          </button>
        </div>
      ))}
    </div>
  );
}