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
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
    return;
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal
      style={{
        position: "fixed",
        inset: 0,
        background: "#0b0c0e",
        zIndex: 120,
        padding: 24,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/" style={{ color: "#fff", textDecoration: "none", fontWeight: 600 }}>Elias</Link>
        <button onClick={onClose} aria-label="Close menu" style={{ background: "transparent", border: "none", color: "#cfc6d9", fontSize: 28 }}>×</button>
      </div>

      <nav style={{ marginTop: 36 }}>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 22 }}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={onClose} style={{ color: "#d6b7ff", textDecoration: "none", fontSize: 26, display: 'inline-block', padding: '6px 0' }}>{l.label}</a>
            </li>
          ))}
          <li>
            <button style={{ background: "transparent", border: "none", color: "#cfc6d9", fontSize: 16, padding: 0 }}>EN ▾</button>
          </li>
        </ul>
      </nav>

      <div style={{ marginTop: "auto", display: "flex", gap: 18, alignItems: "center" }}>
        <a href="https://github.com" style={{ color: "#cfc6d9" }}>GitHub</a>
        <a href="https://dribbble.com" style={{ color: "#cfc6d9" }}>Dribbble</a>
        <a href="https://discord.com" style={{ color: "#cfc6d9" }}>Discord</a>
      </div>
    </div>
  );
};

export default MobileMenu;
