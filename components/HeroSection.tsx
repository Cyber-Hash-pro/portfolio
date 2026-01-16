import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section
      style={{
        maxWidth: 1200,
        margin: "40px auto",
        padding: "40px 28px",
        display: "grid",
        gridTemplateColumns: "1fr 380px",
        gap: 24,
        alignItems: "center",
      }}
    >
      <div>
        <p style={{ color: "#9aa0b4", margin: 0 }}>Elias is a</p>
        <h1 style={{ color: "#fff", fontSize: 40, margin: "8px 0" }}>
          a web designer and
          <br /> front-end developer
        </h1>
        <p style={{ color: "#9aa0b4", maxWidth: 560 }}>
          He crafts responsive websites where technologies meet creativity.
        </p>
        <div style={{ marginTop: 20 }}>
          <button
            style={{
              background: "#6b46c1",
              color: "#fff",
              border: "none",
              padding: "10px 14px",
              borderRadius: 6,
              cursor: "pointer",
            }}
          >
            Contact me
          </button>
        </div>
      </div>

      <div
        aria-hidden
        style={{
          width: 380,
          height: 380,
          background: "#111318",
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src="/hero-figure.png" alt="Hero figure" style={{ maxWidth: "90%" }} />
      </div>
    </section>
  );
};

export default HeroSection;
