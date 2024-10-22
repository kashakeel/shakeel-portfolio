import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { experience } from './data/experience';
import { skills } from './data/skills';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-white p-8">
      <Navigation />
      <Hero />
      {/* Add other components here */}
    </div>
  );
}

export default App;