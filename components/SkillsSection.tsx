import React from "react";

const SkillsSection: React.FC = () => {
  return (
    <section className="section-container">
      <h2 className="section-title">#skills</h2>

      <div className="skills-layout">
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <div style={{ width: 80, height: 80, border: "1px solid rgba(255,255,255,0.04)", borderRadius: 6 }} />
          <div style={{ width: 80, height: 80, border: "1px solid rgba(255,255,255,0.04)", borderRadius: 6 }} />
          <div style={{ width: 80, height: 80, border: "1px solid rgba(255,255,255,0.04)", borderRadius: 6 }} />
          <div style={{ width: 80, height: 80, border: "1px solid rgba(255,255,255,0.04)", borderRadius: 6 }} />
        </div>

        <div style={{ background: "rgba(255,255,255,0.02)", padding: 12, borderRadius: 6 }}>
          <h3 style={{ color: "#fff", marginTop: 0 }}>Languages</h3>
          <ul style={{ color: "#9aa0b4", margin: 0, paddingLeft: 18 }}>
            <li>TypeScript / JS</li>
            <li>Python</li>
            <li>HTML / CSS</li>
          </ul>

          <h3 style={{ color: "#fff", marginTop: 12 }}>Frameworks</h3>
          <ul style={{ color: "#9aa0b4", margin: 0, paddingLeft: 18 }}>
            <li>React</li>
            <li>Next.js</li>
            <li>Express</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
