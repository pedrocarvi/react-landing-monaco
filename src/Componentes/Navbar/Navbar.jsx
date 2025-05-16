import React from 'react';
import './Navbar.css';
import MonacoLogo from "../../assets/img/monaco_logo.webp";
import InstagramIcon from "../../assets/icons/instagram.png";
import { FaInstagram } from "react-icons/fa";

const menuItems = ['MENU', 'CATAS Y DEGUSTACIONES', 'EVENTOS Y FESTEJOS', 'MUSICA EN VIVO', 'UBICACIÓN Y CONTACTO'];

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">

        {/* Logo */}
        <div className="navbar-logo">
          <img src={MonacoLogo} alt="Monaco Logo"/>
        </div>

        {/* Menú */}
        <div className="navbar-menu">
          {menuItems.map((item, idx) => (
            <React.Fragment key={item}>
              <a href={`#${item.replace(/\s+/g, '-').toLowerCase()}`}>{item}</a>
              {idx < menuItems.length - 1 && <span>|</span>}
            </React.Fragment>
          ))}
        </div>

        {/* Social + CTA */}
        <div className="navbar-social">
          <a href="https://www.instagram.com/monacobar.ba/" target="_blank" rel="noopener noreferrer">
            <FaInstagram fill='#FFFFFF' />
          </a>
          <button className="navbar-button">Reservar</button>
        </div>

      </div>
    </nav>
  );
}
