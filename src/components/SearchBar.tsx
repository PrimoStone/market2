import React from 'react';
import { Search, MapPin } from 'lucide-react';

interface SearchBarProps {
  onSearch?: (query: string, location: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = React.useState('');
  const [location, setLocation] = React.useState('');

  const handleSearch = () => {
    onSearch?.(query, location);
  };

  return (
    <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-2 flex">
      <div className="flex-1 flex items-center px-4 border-r">
        <Search className="w-5 h-5 text-gray-400 mr-3" />
        <input
          type="text"
          placeholder="Search for traders..."
          className="w-full outline-none text-gray-700"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="flex items-center px-4">
        <MapPin className="w-5 h-5 text-gray-400 mr-3" />
        <input
          type="text"
          placeholder="Location"
          className="w-48 outline-none text-gray-700"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <button 
        onClick={handleSearch}
        className="bg-blue-600 text-white px-8 py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        Search
      </button>
    </div>
  );
}