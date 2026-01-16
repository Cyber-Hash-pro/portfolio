"use client";

import React from "react";

const links = [
  { href: "#home", label: "#home" },
  { href: "#works", label: "#works" },
  { href: "#about-me", label: "#about-me" },
  { href: "#contacts", label: "#contacts" },
];

const NavLinks: React.FC = () => {
  return (
    <ul
      style={{
        display: "flex",
        gap: 20,
        listStyle: "none",
        margin: 0,
        padding: 0,
      }}
    >
      {links.map((l) => (
        <li key={l.href}>
          <a
            href={l.href}
            style={{
              color: "#cbbcf0",
              textDecoration: "none",
              fontSize: 13,
              padding: "6px 8px",
              borderRadius: 6,
              transition: "color 120ms ease, background 120ms ease",
            }}
          >
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
