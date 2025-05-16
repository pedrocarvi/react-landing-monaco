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
          Únete a nuestros eventos únicos: desde maridajes íntimos, cenas temáticas
          y noches de coctelería a cargo de mixólogos invitados. Cada experiencia
          está diseñada para sorprender tu paladar y celebrar el fuego como protagonista.
        </p>
        <a href="/eventos" className="btn-eventos">
          Ver eventos &gt;
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
