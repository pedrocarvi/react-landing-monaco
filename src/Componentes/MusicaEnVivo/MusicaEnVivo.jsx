// MusicaEnVivoSection.jsx
import React from 'react';
import './MusicaEnVivo.css';
import MusicaImg from '../../assets/img/eventos_img-min.webp'; 
import Logo from '../../assets/img/monaco_logo.webp';

const MusicaEnVivoSection = () => {
  return (
    <section className="musica-section" id='musica-en-vivo'>
      <div
        className="musica-image"
        style={{ backgroundImage: `url(${MusicaImg})` }}
      />

      <div className="musica-content">
        <img src={Logo} alt="Logo Griller" className="musica-logo" />
        <h2 className="musica-title">Música en Vivo</h2>
        <p className="musica-text">
        En Mónaco Bar, la música cobra vida con nuestros exclusivos ciclos en vivo. Cada semana, te invitamos a sumergirte en la atmósfera única de nuestras noches de jazz, con presentaciones en vivo que combinan elegancia, improvisación y sensibilidad musical.
        <br /> <br />
        Contamos también con ciclos de música electrónica, donde DJs invitados y sets cuidadosamente curados crean el clima ideal para disfrutar con amigos, cócteles de autor y una propuesta gastronómica de alto nivel.
        <br /> <br />
        Una experiencia sensorial completa, donde el sonido acompaña cada momento.
        </p>
        <a href="https://wa.link/shu3p8" target='_blank' id='monaco-wsp-btn' className="btn-eventos">
          Consultar por WhatsApp &gt;
        </a>
      </div>
    </section>
  );
};

export default MusicaEnVivoSection;
