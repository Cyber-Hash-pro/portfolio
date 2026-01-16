import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section style={{ maxWidth: 1200, margin: "60px auto", padding: "20px 28px" }} id="about-me">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 480px", gap: 24, alignItems: "center" }}>
        <div>
          <h2 style={{ color: "#d6b7ff", marginTop: 0 }}>#about-me</h2>
          <p style={{ color: "#9aa0b4", fontSize: 16, lineHeight: 1.9 }}>
            Hello, i&apos;m Elias!
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
            <button style={{ background: "transparent", border: "1px solid rgba(167,119,212,0.9)", color: "#fff", padding: "10px 14px", borderRadius: 6, cursor: "pointer" }}>
              Read more →
            </button>
          </div>
        </div>

        <div aria-hidden style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: 420, height: 420, borderRadius: 8, overflow: "hidden", background: "#0e1013", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src="/hero-figure.png" alt="Portrait" style={{ width: "100%", height: "auto", objectFit: "cover" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
