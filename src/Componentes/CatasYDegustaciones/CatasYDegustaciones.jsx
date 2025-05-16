// CatasSection.jsx
import React from 'react';
import './CatasYDegustaciones.css';
import CataImg from '../../assets/img/catas_img-min.webp'; 
import MonacoLogo from '../../assets/img/monaco_logo.webp'; 

const CatasSection = () => {
  return (
    <section className="catas-section" id='catas-y-degustaciones'>
      <div
        className="catas-image"
        style={{ backgroundImage: `url(${CataImg})` }}
      />

      <div className="catas-content">
        <img src={MonacoLogo} alt="Logo Griller" className="catas-logo" />
        <h2 className="catas-title">Catas y degustaciones</h2>
        <p className="catas-text">
          Descubrí nuestra propuesta de catas y degustaciones guiadas por
          sommeliers expertos. Explorá una cuidada selección de vinos,
          destilados y maridajes diseñados para potenciar cada aroma y sabor.
          Sumergite en una experiencia sensorial única, ideal para grupos,
          eventos privados y amantes del buen beber.
        </p>
        <a href="/catas" className="btn-catas">
          Ver catas &gt;
        </a>
      </div>
    </section>
  );
};

export default CatasSection;
