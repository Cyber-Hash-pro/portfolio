import React from "react";

type Props = {
  title: string;
  desc?: string;
  tags?: string[];
  thumbnail?: string;
  actions?: Array<{ label: string; href: string }>;
};

const ProjectCard: React.FC<Props> = ({ title, desc, tags = [], thumbnail, actions = [] }) => {
  return (
    <article style={{ width: 320, boxSizing: "border-box" }}>
      <div style={{ border: "1px solid rgba(255,255,255,0.04)", borderRadius: 6, overflow: "hidden", background: "#0f1113" }}>
        <div style={{ height: 140, background: "rgba(255,255,255,0.02)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          {thumbnail ? <img src={thumbnail} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : null}
        </div>

        <div style={{ padding: 12 }}>
          <h3 style={{ color: "#e6d9ff", margin: "6px 0" }}>{title}</h3>
          {desc ? <p style={{ color: "#9aa0b4", margin: 0, fontSize: 13 }}>{desc}</p> : null}

          <div style={{ marginTop: 10, display: "flex", gap: 8, flexWrap: "wrap" }}>
            {tags.map((t) => (
              <span key={t} style={{ fontSize: 11, color: "#cbbcf0", background: "rgba(255,255,255,0.02)", padding: "4px 6px", borderRadius: 6 }}>
                {t}
              </span>
            ))}
          </div>

          {actions.length > 0 && (
            <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
              {actions.map((a) => (
                <a key={a.href} href={a.href} target="_blank" rel="noreferrer" style={{ color: "#fff", background: "transparent", border: "1px solid rgba(255,255,255,0.06)", padding: "6px 8px", borderRadius: 6, textDecoration: "none", fontSize: 12 }}>
                  {a.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
