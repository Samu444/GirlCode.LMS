import React from 'react';
import './HeroSection.css'; 

const logos = [
  '/logos/Accenture.svg.png',
  '/logos/ActiveOps+CMYK+Logo+600x600+300ppi.png',
  '/logos/mint.jpeg',
  '/logos/download (1).png',
  '/logos/Vuma-Logo.png',
  '/logos/images (1).png',
  '/logos/box.png',
  '/logos/oracle-logo-png_seeklogo-273777.png',
  '/logos/Tarsus_Dell-Tinder-campaign_form_logo-1.png',
  '/logos/American_Tower-Logo.wine.png',
];

const PartnerLogos = () => {
  return (
    <div className="partner-logos-wrapper">
      <div className="logos-slide">
        {logos.map((logo, index) => (
          <img src={logo} alt={`Partner logo ${index}`} key={index} />
        ))}
        {logos.map((logo, index) => (
          <img src={logo} alt={`Partner logo duplicate ${index}`} key={index + 100} />
        ))}
      </div>
    </div>
  );
};

export default PartnerLogos;
