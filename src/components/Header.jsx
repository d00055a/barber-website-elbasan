import { useState } from "react";
import "../styles/header.css";


function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-content">

        <div className="logo">
          <a href="#hero">Barber Elbasan</a>
        </div>

        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Shërbimet</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>Galeria</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>Rreth Nesh</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Kontakt</a>
        </nav>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

      </div>
    </header>
  );

}

export default Header;
