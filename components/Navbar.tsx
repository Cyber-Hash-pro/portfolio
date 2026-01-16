
"use client";

import React, { useEffect, useState } from "react";
import Logo from "./ui/Logo";
import NavLinks from "./ui/NavLinks";
import LangSelector from "./ui/LangSelector";
import MobileMenu from "./MobileMenu";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 60,
        backdropFilter: "saturate(140%) blur(6px)",
        WebkitBackdropFilter: "saturate(140%) blur(6px)",
        background: scrolled ? "rgba(25,28,33,0.92)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.04)" : "none",
        transition: "background 180ms ease, border 180ms ease",
      }}
    >
      <nav
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 28px",
        }}
        aria-label="Main navigation"
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Logo />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div className="desktop-links" style={{ display: "flex", alignItems: "center", gap: 22 }}>
            <NavLinks />
            <LangSelector />
          </div>

          <button
            className="hamburger"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            style={{
              display: "none",
              background: "transparent",
              border: "none",
              color: "#cfc6d9",
              fontSize: 20,
              cursor: "pointer",
            }}
          >
            ☰
          </button>
        </div>
      </nav>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
};

export default Navbar;