"use client";

import React, { useState } from "react";

const LangSelector: React.FC = () => {
  const [langOpen, setLangOpen] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={() => setLangOpen((s) => !s)}
        aria-expanded={langOpen}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: "transparent",
          border: "none",
          color: "#cfc6d9",
          cursor: "pointer",
          fontSize: 13,
          padding: "6px 8px",
        }}
      >
        EN <span style={{ fontSize: 11 }}>▾</span>
      </button>

      {langOpen && (
        <div
          role="menu"
          style={{
            position: "absolute",
            right: 0,
            marginTop: 8,
            background: "rgba(20,22,26,0.98)",
            border: "1px solid rgba(255,255,255,0.03)",
            borderRadius: 8,
            padding: 8,
            minWidth: 96,
            boxShadow: "0 6px 18px rgba(10,10,15,0.4)",
          }}
        >
          <button
            role="menuitem"
            onClick={() => setLangOpen(false)}
            style={{
              display: "block",
              width: "100%",
              textAlign: "left",
              background: "transparent",
              border: "none",
              color: "#fff",
              padding: "8px 10px",
              borderRadius: 6,
              cursor: "pointer",
            }}
          >
            EN
          </button>
          <button
            role="menuitem"
            onClick={() => setLangOpen(false)}
            style={{
              display: "block",
              width: "100%",
              textAlign: "left",
              background: "transparent",
              border: "none",
              color: "#cfc6d9",
              padding: "8px 10px",
              borderRadius: 6,
              cursor: "pointer",
            }}
          >
            FR
          </button>
        </div>
      )}
    </div>
  );
};

export default LangSelector;
