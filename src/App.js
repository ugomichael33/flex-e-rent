import React from 'react'
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Lanlords from './pages/Lanlords'
import Started2 from './pages/Started2';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Lanlords />
    </div>
  );
}

export default App;
