import React from "react";

const projects = [
  {
    title: "ChertNodes",
    desc: "Minecraft servers hosting",
    tags: ["HTML", "SCSS", "Python", "Flask"],
  },
  {
    title: "ProtectX",
    desc: "Discord anti-crash bot",
    tags: ["React", "Express", "Node.js"],
  },
  {
    title: "Kahoot Answers",
    desc: "Get answers to your kahoot quiz",
    tags: ["CSS", "Express", "Node.js"],
  },
];

const Card: React.FC<{ title: string; desc: string; tags: string[] }> = ({ title, desc, tags }) => (
  <div
    style={{
      background: "#101216",
      border: "1px solid rgba(255,255,255,0.04)",
      borderRadius: 8,
      padding: 12,
      width: 300,
      boxSizing: "border-box",
    }}
  >
    <div style={{ height: 84, background: "rgba(255,255,255,0.02)", borderRadius: 6 }} />
    <h3 style={{ color: "#e6d9ff", margin: "10px 0 6px" }}>{title}</h3>
    <p style={{ color: "#9aa0b4", margin: 0, fontSize: 13 }}>{desc}</p>
    <div style={{ marginTop: 10, display: "flex", gap: 8, flexWrap: "wrap" }}>
      {tags.map((t) => (
        <span key={t} style={{ fontSize: 11, color: "#cbbcf0", background: "rgba(255,255,255,0.02)", padding: "4px 6px", borderRadius: 6 }}>
          {t}
        </span>
      ))}
    </div>
  </div>
);

const ProjectsSection: React.FC = () => {
  return (
    <section style={{ maxWidth: 1200, margin: "40px auto", padding: "20px 28px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <h2 style={{ color: "#d6b7ff", margin: 0 }}>#projects</h2>
        <a href="#works" style={{ color: "#9aa0b4", textDecoration: "none" }}>View all →</a>
      </div>

      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        {projects.map((p) => (
          <Card key={p.title} title={p.title} desc={p.desc} tags={p.tags} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
