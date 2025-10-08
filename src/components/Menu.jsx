import React from "react";

const menuStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  padding: "15px 30px",
  background: "rgba(0, 0, 0, 0.5)",
  backdropFilter: "blur(5px)",
  color: "white",
  display: "flex",
  gap: "30px",
  zIndex: 100,
  fontFamily: "sans-serif",
  fontSize: "14px",
};

const linkStyle = {
  cursor: "pointer",
  color: "white",
  textDecoration: "none",
};

export default function Menu() {
  return (
    <div style={menuStyle}>
      <a
        href="/#/about"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
      >
        About
      </a>
      <a
        href="/#/contact"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
      >
        Contact
      </a>
      <a
        href="/#/polished_diamond"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
      >
        Polished Diamond
      </a>
      <a
        href="/#/rough_diamond"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
      >
        Rough Diamond
      </a>
      <a
        href="/#/landscape"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
      >
        Landscape
      </a>
    </div>
  );
}
