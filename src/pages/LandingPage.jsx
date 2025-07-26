// src/pages/LandingPage.jsx
import React from 'react';
import Hero from '../components/Hero';       // Changed from './components' to '../components'
import Features from '../components/Features';
import CTA from '../components/CTA';

function LandingPage() {
  return (
    <main>
      <Hero />
      <Features />
      <CTA />
    </main>
  );
}

export default LandingPage;