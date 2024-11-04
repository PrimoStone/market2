import React from 'react';
import { Filter, Briefcase, Wrench, Paintbrush, Settings } from 'lucide-react';

export const categories = [
  { id: 1, name: 'All', icon: Briefcase },
  { id: 2, name: 'Plumbers', icon: Wrench },
  { id: 3, name: 'Painters', icon: Paintbrush },
  { id: 4, name: 'Mechanics', icon: Settings },
];

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex items-center space-x-6 mb-12 overflow-x-auto pb-4">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.name)}
          className={`flex items-center px-6 py-3 rounded-full transition-colors ${
            selectedCategory === category.name
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <category.icon className="w-5 h-5 mr-2" />
          {category.name}
        </button>
      ))}
      <button className="flex items-center px-6 py-3 rounded-full border border-gray-300 hover:bg-gray-50">
        <Filter className="w-5 h-5 mr-2" />
        Filters
      </button>
    </div>
  );
}