import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
              {product.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-blue-600">
                £{product.price.toFixed(2)}
              </span>
              <button className="flex items-center justify-center bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                <ShoppingCart className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}