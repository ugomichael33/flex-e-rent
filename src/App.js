import React from 'react'
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Second from './pages/Second'
import Started2 from './pages/Started2';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Second />
    </div>
  );
}

export default App;
