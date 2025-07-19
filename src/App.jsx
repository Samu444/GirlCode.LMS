import React from 'react';
import HeroSection from './components/HeroSection';
import PartnerLogos from './components/PartnerLogos';
import Footer from './components/Footer';
import './src/App.css';

function App() {
  return (
    <div className="app-container">
      <HeroSection />

      {/* Optional Spacer */}
      <div style={{ height: '10vh' }}></div>

      <PartnerLogos />

      <Footer />
    </div>
  );
}

export default App;


