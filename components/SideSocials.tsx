"use client";

import React from "react";

const socials: Array<{ href: string; label: string; svg: string }> = [
  {
    href: "https://github.com/",
    label: "GitHub",
    svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12 .5C5.73.5.75 5.48.75 11.76c0 4.9 3.17 9.07 7.57 10.54.55.1.75-.24.75-.53 0-.26-.01-1-.02-1.96-3.08.67-3.73-1.48-3.73-1.48-.5-1.28-1.22-1.62-1.22-1.62-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.97 1.66 2.55 1.18 3.17.9.1-.7.38-1.18.69-1.45-2.46-.28-5.05-1.23-5.05-5.48 0-1.21.43-2.2 1.13-2.98-.11-.28-.49-1.42.11-2.96 0 0 .92-.3 3.02 1.13A10.48 10.48 0 0112 6.85c.93.004 1.87.13 2.75.38 2.1-1.44 3.02-1.13 3.02-1.13.6 1.54.22 2.68.11 2.96.7.78 1.13 1.77 1.13 2.98 0 4.26-2.59 5.19-5.06 5.47.39.34.73 1.02.73 2.06 0 1.49-.01 2.69-.01 3.06 0 .29.2.64.76.53 4.4-1.47 7.57-5.64 7.57-10.54C23.25 5.48 18.27.5 12 .5z"/></svg>`,
  },
  {
    href: "https://dribbble.com/",
    label: "Dribbble",
    svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12 2.04a9.96 9.96 0 100 19.92A9.96 9.96 0 0012 2.04zM4.2 7.6a7.92 7.92 0 015.63-3.08c1.02 1.61 2.14 3.09 3.34 4.43-2.66.48-5.09 1.5-7.26 3.03A7.92 7.92 0 014.2 7.6zM12 20.2c-2.05 0-3.94-.75-5.37-1.98 1.72-1.28 4.02-2.17 6.64-2.45.35.67.66 1.35.94 2.05A7.87 7.87 0 0112 20.2zM17.75 17c-.28-.66-.61-1.31-.99-1.94 2.02-.37 3.68-1.07 4.05-1.25-.69 1.84-2.26 3.32-3.06 3.19zM16.3 6.1c1.36 1.31 2.26 2.82 2.72 4.45-.47.18-2 .71-4.1.99-1.06-1.22-2.17-2.4-3.33-3.53 2.01-.83 4.06-1.6 4.71-1.9zM7.6 5.3c1.12 1.13 2.13 2.38 3.03 3.77-1.97.21-4.02.25-6.06.01.67-1.55 1.86-2.86 3.03-3.78z"/></svg>`,
  },
  {
    href: "https://www.linkedin.com/",
    label: "LinkedIn",
    svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.036-1.849-3.036-1.851 0-2.134 1.445-2.134 2.941v5.664H9.355V9h3.414v1.561h.049c.476-.9 1.637-1.849 3.368-1.849 3.602 0 4.268 2.37 4.268 5.455v6.285zM5.337 7.433a2.062 2.062 0 11.001-4.125 2.062 2.062 0 010 4.125zM6.977 20.452H3.697V9h3.28v11.452z"/></svg>`,
  },
];

const SideSocials: React.FC = () => {
  return (
    <div className="side-socials"
      aria-hidden
      style={{
        position: "fixed",
        left: 18,
        top: 0,
        height: "100vh",
        zIndex: 50,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 48,
        pointerEvents: "none",
      }}
    >
      <div style={{ width: 2, height: "70vh", background: "rgba(255,255,255,0.06)" }} />

      <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 18, pointerEvents: "auto" }}>
        {socials.map((s) => (
          <a
            key={s.href}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            aria-label={s.label}
            style={{
              display: "inline-flex",
              width: 36,
              height: 36,
              borderRadius: 18,
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255,255,255,0.03)",
              color: "#cfc6d9",
              textDecoration: "none",
            }}
            title={s.label}
            dangerouslySetInnerHTML={{ __html: s.svg.replace(/width=\"20\" height=\"20\"/, 'width="16" height="16"') }}
          />
        ))}
      </div>
    </div>
  );
};

export default SideSocials;
