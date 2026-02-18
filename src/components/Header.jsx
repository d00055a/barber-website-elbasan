import { useState } from 'react';

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-content">

        <div className="logo">
          <h2>Barber Elbasan</h2>
        </div>

         <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Shërbimet</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>Galeria</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Kontakt</a>
         </nav>

        <div 
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

      </div>
    </header>
  );
  
}

export default Header;