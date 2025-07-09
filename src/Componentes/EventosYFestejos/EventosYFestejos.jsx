// EventosSection.jsx
import React from 'react';
import './EventosYFestejos.css';
import EventoImg from '../../assets/img/eventos_img-min.webp';
import Logo from '../../assets/img/monaco_logo.webp'; 

const EventosSection = () => {
  return (
    <section className="eventos-section" id='eventos-y-festejos'>
      {/* Primero el contenido, para que quede a la izquierda */}
      <div className="eventos-content">
        <img src={Logo} alt="Logo Griller" className="eventos-logo" />
        <h2 className="eventos-title">Eventos Exclusivos</h2>
        <p className="eventos-text">
        En el corazón de Núñez, Mónaco Bar es el escenario ideal para tus eventos más especiales. Ofrecemos un espacio exclusivo que combina elegancia, calidez y una propuesta gastronómica de alto nivel, pensada para sorprender.
        <br /> <br />
        Tanto si se trata de una reunión corporativa, un lanzamiento de producto, una celebración privada o un encuentro social, contamos con opciones personalizadas que se adaptan a cada necesidad. Nuestro equipo te acompaña en cada detalle: ambientación, música, menú a medida, coctelería de autor y un servicio atento y profesional.
        <br /> <br />
        Convertí tu evento en una experiencia memorable en un entorno único, rodeado de buena energía, sabores inolvidables y el toque distintivo de Núñez.
        </p>
        <a href="https://wa.link/shu3p8" target='_blank' id='monaco-wsp-btn' className="btn-eventos">
          Consultar por WhatsApp &gt;
        </a>
      </div>

      {/* Después la imagen, para que quede a la derecha */}
      <div
        className="eventos-image"
        style={{ backgroundImage: `url(${EventoImg})` }}
      />
    </section>
  );
};

export default EventosSection;
