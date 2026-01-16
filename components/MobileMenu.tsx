"use client";

import React, { useEffect } from "react";
import Link from "next/link";

type Props = {
  open: boolean;
  onClose: () => void;
};

const links = [
  { href: "#home", label: "#home" },
  { href: "#works", label: "#works" },
  { href: "#about-me", label: "#about-me" },
  { href: "#contacts", label: "#contacts" },
];

const MobileMenu: React.FC<Props> = ({ open, onClose }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      return () => {
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.width = "";
      };
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100vw",
        height: "100vh",
        background: "#282C33",
        zIndex: 9999,
        padding: 24,
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 16, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <Link href="/" onClick={onClose} style={{ color: "#fff", textDecoration: "none", fontWeight: 600, fontSize: 18 }}>
          Elias
        </Link>
        <button onClick={onClose} aria-label="Close menu" style={{ background: "transparent", border: "none", color: "#cfc6d9", fontSize: 32, cursor: "pointer", padding: 0, lineHeight: 1 }}>
          ×
        </button>
      </div>

      <nav style={{ marginTop: 32, flex: 1 }}>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 20 }}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={onClose} style={{ color: "#d6b7ff", textDecoration: "none", fontSize: 24, display: 'inline-block', padding: '4px 0' }}>{l.label}</a>
            </li>
          ))}
          <li style={{ marginTop: 12 }}>
            <button style={{ background: "transparent", border: "none", color: "#cfc6d9", fontSize: 16, padding: 0, cursor: "pointer" }}>EN ▾</button>
          </li>
        </ul>
      </nav>

      <div style={{ display: "flex", gap: 18, alignItems: "center", paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <a href="https://github.com" target="_blank" rel="noreferrer" style={{ color: "#cfc6d9", textDecoration: "none", fontSize: 14 }}>GitHub</a>
        <a href="https://dribbble.com" target="_blank" rel="noreferrer" style={{ color: "#cfc6d9", textDecoration: "none", fontSize: 14 }}>Dribbble</a>
        <a href="https://discord.com" target="_blank" rel="noreferrer" style={{ color: "#cfc6d9", textDecoration: "none", fontSize: 14 }}>Discord</a>
      </div>
    </div>
  );
};

export default MobileMenu;
