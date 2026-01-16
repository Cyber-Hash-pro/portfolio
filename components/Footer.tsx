"use client";

import React from "react";
import Logo from "./Logo";

const icons = [
  {
    href: "https://github.com/",
    svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12 .5C5.73.5.75 5.48.75 11.76c0 4.9 3.17 9.07 7.57 10.54.55.1.75-.24.75-.53 0-.26-.01-1-.02-1.96-3.08.67-3.73-1.48-3.73-1.48-.5-1.28-1.22-1.62-1.22-1.62-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.97 1.66 2.55 1.18 3.17.9.1-.7.38-1.18.69-1.45-2.46-.28-5.05-1.23-5.05-5.48 0-1.21.43-2.2 1.13-2.98-.11-.28-.49-1.42.11-2.96 0 0 .92-.3 3.02 1.13A10.48 10.48 0 0112 6.85c.93.004 1.87.13 2.75.38 2.1-1.44 3.02-1.13 3.02-1.13.6 1.54.22 2.68.11 2.96.7.78 1.13 1.77 1.13 2.98 0 4.26-2.59 5.19-5.06 5.47.39.34.73 1.02.73 2.06 0 1.49-.01 2.69-.01 3.06 0 .29.2.64.76.53 4.4-1.47 7.57-5.64 7.57-10.54C23.25 5.48 18.27.5 12 .5z"/></svg>`,
  },
  {
    href: "https://dribbble.com/",
    svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12 2.04a9.96 9.96 0 100 19.92A9.96 9.96 0 0012 2.04zM4.2 7.6a7.92 7.92 0 015.63-3.08c1.02 1.61 2.14 3.09 3.34 4.43-2.66.48-5.09 1.5-7.26 3.03A7.92 7.92 0 014.2 7.6zM12 20.2c-2.05 0-3.94-.75-5.37-1.98 1.72-1.28 4.02-2.17 6.64-2.45.35.67.66 1.35.94 2.05A7.87 7.87 0 0112 20.2zM17.75 17c-.28-.66-.61-1.31-.99-1.94 2.02-.37 3.68-1.07 4.05-1.25-.69 1.84-2.26 3.32-3.06 3.19zM16.3 6.1c1.36 1.31 2.26 2.82 2.72 4.45-.47.18-2 .71-4.1.99-1.06-1.22-2.17-2.4-3.33-3.53 2.01-.83 4.06-1.6 4.71-1.9zM7.6 5.3c1.12 1.13 2.13 2.38 3.03 3.77-1.97.21-4.02.25-6.06.01.67-1.55 1.86-2.86 3.03-3.78z"/></svg>`,
  },
  {
    href: "https://discord.com/",
    svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M20.317 4.369A19.791 19.791 0 0016.99 3c-.23.39-.49.9-.67 1.3-1.89-.22-3.78-.22-5.67 0-.18-.4-.44-.91-.67-1.3A19.787 19.787 0 003.683 4.37C2.18 7.21 2.18 10.01 2 12.82c1.7 1.26 3.41 2.34 5.14 3.17.24-.33.46-.67.66-1.02-1.66-.46-3.25-1.06-4.78-1.78.4-.29.8-.6 1.18-.92 1.9.82 3.86 1.48 5.88 1.98.18-.33.36-.67.52-1.02-2.01-.55-3.97-1.26-5.86-2.09.69-.51 1.39-1.02 2.1-1.52 1.62.75 3.3 1.29 5.01 1.66.6-1.37.69-2.88.44-4.33.99-.28 1.99-.6 2.91-1C20.31 4.37 20.31 4.37 20.317 4.369z"/></svg>`,
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 36 }}>
            <Logo />
          </div>

          <div>
            <div style={{ color: "#cfc6d9", fontWeight: 600 }}>Elias</div>
            <div style={{ color: "#9aa0b4", fontSize: 14 }}>elias@elias-dev.ml</div>
            <div style={{ color: "#9aa0b4", marginTop: 8 }}>Web designer and front-end developer</div>
          </div>
        </div>

        <div style={{ textAlign: "center", color: "#9aa0b4" }}>© Copyright 2022. Made by Elias</div>

        <div style={{ textAlign: "right" }}>
          <div style={{ color: "#fff", fontWeight: 600, marginBottom: 10 }}>Media</div>
          <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
            {icons.map((ic, i) => (
              <a key={i} href={ic.href} target="_blank" rel="noreferrer" style={{ color: "#cfc6d9", textDecoration: "none" }} dangerouslySetInnerHTML={{ __html: ic.svg }} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
