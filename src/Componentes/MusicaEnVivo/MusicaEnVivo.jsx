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
          Sumérgete en noches vibrantes con bandas y solistas locales que
          llenan nuestro espacio de ritmo y pasión. Todos los fines de semana,
          disfruta de géneros que van del jazz al rock, acompañados de nuestra
          carta de cócteles y una selección de vinos exclusivos.
        </p>
        <a href="/musica-en-vivo" className="btn-musica">
          Ver programación &gt;
        </a>
      </div>
    </section>
  );
};

export default MusicaEnVivoSection;
