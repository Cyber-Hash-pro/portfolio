import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="section-container" id="about-me">
      <div className="about-layout">
        <div>
          <h2 style={{ color: "#d6b7ff", marginTop: 0 }}>#about-me</h2>
          <p style={{ color: "#9aa0b4", fontSize: 16, lineHeight: 1.9 }}>
            Hello, i&apos;m Nilesh Patil!
            <br />
            <br />
            I&apos;m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive
            websites from scratch and raise them into modern user-friendly web experiences.
            <br />
            <br />
            Transforming my creativity and knowledge into websites has been my passion for over a
            year. I have been helping various clients to establish their presence online. I always
            strive to learn about the newest technologies and frameworks.
          </p>

          <div style={{ marginTop: 20 }}>
            <button className="btn-outline">
              Read more →
            </button>
          </div>
        </div>

        <div className="about-image" aria-hidden>
          <img src="/hero-figure.png" alt="Portrait" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
