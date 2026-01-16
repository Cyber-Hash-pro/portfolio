import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-body">
        <p className="hero-sub">Nilesh Patil is a</p>
        <h1 className="hero-title">web designer and<br/>front-end developer</h1>
        <p className="hero-desc">He crafts responsive websites where technologies meet creativity.</p>
        <div style={{ marginTop: 20 }}>
          <button className="hero-cta">Contact me</button>
        </div>
      </div>

      <div className="hero-figure" aria-hidden>
        <img src="/hero-figure.png" alt="Hero figure" />
      </div>
    </section>
  );
};

export default HeroSection;
