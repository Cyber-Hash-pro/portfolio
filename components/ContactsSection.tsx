import React from "react";

const ContactsSection: React.FC = () => {
  return (
    <section style={{ maxWidth: 1200, margin: "60px auto", padding: "20px 28px" }} id="contacts">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 24, alignItems: "start" }}>
        <div>
          <h2 style={{ color: "#d6b7ff", marginTop: 0 }}>#contacts</h2>
          <p style={{ color: "#9aa0b4", fontSize: 16, lineHeight: 1.9 }}>
            I&apos;m interested in freelance opportunities. However, if you have other request or
            question, don&apos;t hesitate to contact me.
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div style={{ border: "1px solid rgba(255,255,255,0.08)", padding: 18, borderRadius: 6, minWidth: 260 }}>
            <h3 style={{ color: "#fff", marginTop: 0, marginBottom: 12 }}>Message me here</h3>

            <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#cfc6d9", marginBottom: 10 }}>
              <div style={{ width: 28, height: 28, borderRadius: 6, background: "rgba(255,255,255,0.03)", display: "flex", alignItems: "center", justifyContent: "center" }}>🎮</div>
              <div style={{ fontSize: 14 }}>!Elias#3519</div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#cfc6d9" }}>
              <div style={{ width: 28, height: 28, borderRadius: 6, background: "rgba(255,255,255,0.03)", display: "flex", alignItems: "center", justifyContent: "center" }}>✉️</div>
              <div style={{ fontSize: 14 }}>elias@elias.me</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
