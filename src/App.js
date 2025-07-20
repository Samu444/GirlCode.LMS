import React from 'react';
import Header from './components/Header'; // Capital "H" to match your file name
import Footer from './components/Footer'; // insert the path here
import HeroSection from './components/HeroSection'; // insert the path here
import PartnerLogos from './components/PartnerLogos';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <PartnerLogos />
      <Footer />
    </div>
  );
}
export default App;
