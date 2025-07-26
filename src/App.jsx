import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
