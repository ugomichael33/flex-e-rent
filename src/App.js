import React from 'react'
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Landlords from './pages/Lanlords'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/landlords' element={<Landlords />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
