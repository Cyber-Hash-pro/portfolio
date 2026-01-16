import React from "react";

const SkillsSection: React.FC = () => {
  return (
    <section style={{ maxWidth: 1200, margin: "40px auto", padding: "20px 28px" }}>
      <h2 style={{ color: "#d6b7ff", marginBottom: 16 }}>#skills</h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: 24, alignItems: "start" }}>
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
