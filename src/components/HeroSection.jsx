import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section container-fluid">
      <div className="hero-content row d-flex align-items-center justify-content-center mx-auto flex-wrap">

        {/* Left side: Text content */}
        <div className="hero-text col-12 col-md-6">
          <h1 className="hero-heading">
            Start your coding <br /> journey with us.
          </h1>
          <p className="hero-paragraph">
            We are on a mission to empower 10 million women and girls
            with tech skills by 2030!<br /> Learn the most in-demand skills
            for the jobs of tomorrow with <span className="highlight-pink">GirlCode</span>.
          </p>
          <button className="hero-button">
            Explore Courses
          </button>
          <div className="hero-stats d-flex flex-wrap mt-4">
            <div className="stat-item me-4 mb-3">
              <h2 className="stat-number">76 000+</h2>
              <p className="stat-label">Students Enrolled</p>
            </div>
            <div className="stat-item me-4 mb-3">
              <h2 className="stat-number">18+</h2>
              <p className="stat-label">Courses Offered</p>
            </div>
            <div className="stat-item mb-3">
              <h2 className="stat-number">11</h2>
              <p className="stat-label">Years of Experience</p>
            </div>
          </div>
        </div>

        {/* Right side: Main illustration */}
        <div className="hero-image-wrapper col-12 col-md-6 text-center">
          <img
            src="/images/hero-image.jpeg"
            alt="Girl coding illustration"
            className="hero-image img-fluid"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
