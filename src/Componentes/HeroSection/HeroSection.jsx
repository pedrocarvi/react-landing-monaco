import React from 'react';
import './HeroSection.css';
import MonacoHeroImg from "../../assets/img/monaco-hero.png"

const HeroSection = () => {
  return (
    <section
      className="hero-section"
      style={{backgroundImage: `url(${MonacoHeroImg})`}}
    >
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-title">Sumergite en la elegancia porteña en un ambiente cálido y exclusivo.</h1>
        <p className="hero-subtitle">
        Mónaco Bar & Grill, en Núñez, ofrece cuatro pisos: una bodega de vinos selectos, barra de autor, dos niveles para cenas sofisticadas y una terraza con vistas panorámicas.
        </p>
        <div className="hero-buttons">
          <a href="#!" className="btn btn-primary">
            Reservá ahora
          </a>
          <a href="#!" className="btn btn-secondary">
            Conocer más
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
