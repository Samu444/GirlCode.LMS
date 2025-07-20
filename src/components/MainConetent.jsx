import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">

        {/* Left side: Text content */}
        <div className="hero-text">
          <h1 className="hero-heading">
            Start your coding <br /> journey with us.
          </h1>
          <p className="hero-paragraph">
            We are on a mission to empower 10 million women and girls 
            with tech skills by 2030!<br/>  Learn the most in-demand skills 
            for the jobs of tomorrow with <span className="font-bold text-purple-700">GirlCode</span>.
          </p>
          <button className="hero-button">
            Explore Courses
          </button>
            <div className="hero-stats">
          <div className="stat-item">
            <h2 className="stat-number">76 000+</h2>
            <p className="stat-label">Students Enrolled</p>
          </div>
          <div className="stat-item">
            <h2 className="stat-number">18+</h2>
            <p className="stat-label">Courses Offered</p>
          </div>
          <div className="stat-item">
            <h2 className="stat-number">11</h2>
            <p className="stat-label">Years of Experience</p>
          </div>
        </div>
        </div>

        {/* Right side: Main illustration */}
        <div className="hero-image-wrapper">
          <img 
            src="/images/hero-image.jpeg" 
            alt="Girl coding illustration" 
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


