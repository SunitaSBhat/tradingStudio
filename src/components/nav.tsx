import React, { useState, useContext } from "react";
import "./nav.css";
import icon from "./icon.jpg";
// import  {ThemeContext } from "./ThemeContext";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const themeContext = useContext(ThemeContext);

  // if (!themeContext) {
  //   throw new Error("Navbar must be used within a ThemeProvider");
  // }

  // const { theme, toggleTheme } = themeContext;

  return (
    <nav className="navbar">
      <div className="nav-container">
        <img src={icon}></img>

        {/* Desktop Links */}
        <div className="nav-links">
          <a href="#" className="nav-item active">Home</a>
          <a href="#" className="nav-item">Features</a>
          <a href="#" className="nav-item">Pricing</a>
          <a href="#" className="nav-item">Contact</a>
        </div>

        {/* Right-Side Elements */}
        <div className="nav-right">
          <span className="tokens">🔹 Tokens: 100</span>
          <button className="subscribe-btn">Subscribe</button>
          {/* <button onClick={toggleTheme}>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button> */}
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#" className="nav-item">Home</a>
          <a href="#" className="nav-item">Features</a>
          <a href="#" className="nav-item">Pricing</a>
          <a href="#" className="nav-item">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
