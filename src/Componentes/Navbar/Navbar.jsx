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
            <FaInstagram fill='#FFFFFF' size={20}/>
          </a>
          <a href="https://www.wokiapp.com/reservas/monaco-bar?slug=monaco-bar&quantity=4&showDay=2025-05-19T00%3A00%3A00.000Z&policy=&isTimeFlexible=false&isSectorFlexible=false&enterByLink=true&id=5f9c5cc8-a5e5-4d79-bda3-76bd7e6a7288" style={{textDecoration: 'none', color: '#FAFAFA'}} target='_blank'>
            <button className="navbar-button">
              Reservar
            </button>
          </a>
        </div>

      </div>
    </nav>
  );
}
