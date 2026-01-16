"use client";

import React from "react";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link
      href="/"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        textDecoration: "none",
        color: "#fff",
        fontWeight: 600,
        fontSize: 16,
      }}
    >
      <img src="Logo.svg" alt="Logo" />
      <span style={{ letterSpacing: 0.2 }}>Elias</span>
    </Link>
  );
};

export default Logo;
