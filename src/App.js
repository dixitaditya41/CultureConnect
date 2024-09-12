
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import VirtualTour from './components/VirtualTour';
import LanguagePractice from './components/LanguagePractice';
import CulturalStories from './components/CulturalStories';
import Brazil from './components/Brazil';

import India from './components/India';
import Italy from './components/Italy';
import Spain from './components/Spain';
import Japan from './components/Japan';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/virtual-tour" element={<VirtualTour />} />
          <Route path="/language-practice" element={<LanguagePractice />} />
          <Route path="/cultural-stories" element={<CulturalStories />} />
          <Route path="/brazil" element={<Brazil/>} />
          <Route path="/india" element={<India />} />
        <Route path="/italy" element={<Italy />} />
        <Route path="/spain" element={<Spain/>} />
        <Route path="/japan" element={<Japan/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
