import React, { useEffect } from 'react';
import './HeroSection.css';
import MonacoHeroImg from '../../assets/img/monaco-hero.png';

const HeroSection = () => {
  useEffect(() => {
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = 1;
  }, []);

  return (
    <section className="hero-section" style={{ backgroundImage: `url(${MonacoHeroImg})` }}>
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-title">Mónaco Bar & Grill</h1>
        <p className="hero-subtitle">
          Descubrí nuestros cuatro pisos: Bodega de vinos selectos, barra de autor, dos niveles para cenas sofisticadas y una terraza con barra rodeada de verde.
        </p>
        <div className="hero-buttons">
          <a href="https://api.whatsapp.com/message/PAE4HS65ESLJG1?autoload=1&app_absent=0" className="btn btn-primary">
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