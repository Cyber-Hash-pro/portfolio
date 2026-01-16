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
      background: "#1b1d20",
      border: "1px solid rgba(255,255,255,0.06)",
      borderRadius: 8,
      width: 320,
      boxSizing: "border-box",
      overflow: "hidden",
      color: "white",
    }}
  >
    <div style={{ position: "relative", height: 180, background: "#26282b" }}>
      <div style={{ position: "absolute", left: 12, top: 8, width: 28, height: 28, borderLeft: "4px solid #36d14a", borderTop: "4px solid #36d14a", borderTopLeftRadius: 4 }} />
      <div style={{ position: "absolute", right: 12, bottom: 12, width: 56, height: 56, border: "6px solid #36d14a", borderRadius: 12 }} />
    </div>

    <div style={{ borderTop: "1px solid rgba(255,255,255,0.04)", padding: "12px" }}>
      <div style={{ background: "#2b2f34", padding: "8px 10px", borderRadius: 6, fontFamily: "Fira Code, monospace", color: "#cfd6df", fontSize: 13, marginBottom: 10 }}>
        {tags.join("   ")}
      </div>

      <h3 style={{ margin: "6px 0", fontSize: 20, fontFamily: "Fira Code, monospace", color: "#fff" }}>{title}</h3>
      <p style={{ color: "#9aa0b4", margin: 0, fontSize: 13 }}>{desc}</p>

      <div style={{ marginTop: 14, display: "flex", gap: 10, alignItems: "center" }}>
        <a
          href="#"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 12px",
            borderRadius: 6,
            border: "1px solid #8b5cf6",
            color: "#e6d9ff",
            textDecoration: "none",
            fontSize: 13,
          }}
        >
          Live ↔
        </a>

        <a href="#" style={{ color: "#9aa0b4", fontSize: 13, textDecoration: "none" }}>
          Code {'</>'}
        </a>
      </div>
    </div>
  </div>
);






const ProjectsSection: React.FC = () => {
  return (
    <section className="section-container" id="works">
      <div
        className="section-header"
        style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, flex: 1 }}>
          <h2 className="font-medium text-[28px] font-[firaCode] text-white" style={{ margin: 0, whiteSpace: "nowrap" }}>
            <span style={{ color: "#C778DD", marginRight: 8 }}>#</span>projects
          </h2>
          <div style={{ height: 1, background: "linear-gradient(90deg,#C778DD,#7A5BCF)", flex: 0.5, opacity: 0.9 }} />
        </div>

        <a href="/projects" className="view-all" style={{ color: "white", textDecoration: "none", whiteSpace: "nowrap" }}>
          View all ~~{">"}
        </a>
      </div>

      <div className="flex gap-4 h-auto flex-wrap ">
        {projects.map((p) => (
          <Card key={p.title} title={p.title} desc={p.desc} tags={p.tags} />
        ))}
        
      </div>
    </section>
  );
};

export default ProjectsSection;
