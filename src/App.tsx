import React, { useState } from 'react';
import Hero from './components/Hero';
import CategoryFilter from './components/CategoryFilter';
import TraderCard from './components/TraderCard';
import TraderDetail from './components/TraderDetail';
import { traders } from './data/traders';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTraderId, setSelectedTraderId] = useState<number | null>(null);
  
  const selectedTrader = selectedTraderId 
    ? traders.find(t => t.id === selectedTraderId)
    : null;

  if (selectedTrader) {
    return <TraderDetail 
      trader={selectedTrader} 
      onBack={() => setSelectedTraderId(null)}
    />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <CategoryFilter 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Traders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {traders.map((trader) => (
            <div key={trader.id} onClick={() => setSelectedTraderId(trader.id)} className="cursor-pointer">
              <TraderCard {...trader} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;