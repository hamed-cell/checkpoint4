import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <nav className="navigation">
        <a href="#about" className="nav-link">
          À propos
        </a>
        <a href="#projects" className="nav-link">
          Projets
        </a>
        <a href="#contact" className="nav-link">
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
