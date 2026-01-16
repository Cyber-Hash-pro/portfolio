import React from "react";

const ContactsSection: React.FC = () => {
  return (
    <section className="section-container" id="contacts">
      <div className="contacts-layout">
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
                <div style={{ fontSize: 14 }}>!cyber-hash-pro#1234</div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#cfc6d9" }}>
              <div style={{ width: 28, height: 28, borderRadius: 6, background: "rgba(255,255,255,0.03)", display: "flex", alignItems: "center", justifyContent: "center" }}>✉️</div>
                <div style={{ fontSize: 14 }}>nilesh@cyber-hash-pro.dev</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
