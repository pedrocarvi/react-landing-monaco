// Footer.jsx
import React from 'react';
import './Footer.css';
import Logo from '../../assets/img/monaco_logo.webp';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* Columna 1: Logo, descripción y redes */}
        <div className="footer-col">
          <img src={Logo} alt="Restaurant Logo" className="footer-logo" />
          <p className="footer-desc">
            Una experiencia gastronómica exclusiva en el corazón de Buenos Aires.
          </p>
          <div className="footer-socials">
            {/* <a href="#!" aria-label="Facebook">
              <FaFacebookF />
            </a> */}
            <a href="https://www.instagram.com/monacobar.ba/" aria-label="Instagram">
              <FaInstagram />
            </a>
            {/* <a href="#!" aria-label="Twitter">
              <FaTwitter />
            </a> */}
          </div>
        </div>

        {/* Columna 2: Navegación */}
        <div className="footer-col">
          <h4 className="footer-heading">Navegación</h4>
          <ul className="footer-links">
            <li><a href="#menu">Menú</a></li>
            <li><a href="#catas">Catas y Degustaciones</a></li>
            <li><a href="#eventos">Eventos y Festejos</a></li>
            <li><a href="#musica">Música en Vivo</a></li>
            <li><a href="#ubicacion">Ubicación y Contacto</a></li>
          </ul>
        </div>

        {/* Columna 3: Horarios */}
        <div className="footer-col">
          <h4 className="footer-heading">Horarios</h4>
          <ul className="footer-links">
            <li>
              <span className="day">Lunes</span>
              <span className="time">Cerrado</span>
            </li>
            <li>
              <span className="day">Martes - Domingo </span>
              <span className="time">20:00 – 02:00</span>
            </li>
          </ul>
        </div>

        {/* Columna 4: Contacto */}
        <div className="footer-col">
          <h4 className="footer-heading">Contacto</h4>
          <ul className="footer-links">
            <li>Juana Azurduy 2299 - Nuñez</li>
            <li>Buenos Aires, Argentina</li>
            <li>+54 9 11 2251 5831</li>
            <li>info@monacobar.com.ar</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Mónaco Bar & Grill. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
