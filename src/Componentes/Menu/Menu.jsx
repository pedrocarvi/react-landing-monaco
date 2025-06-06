// Menu.jsx
import React from 'react';
import './Menu.css';

const Menu = () => {
  return (
    <section className="menu-section" id='menu'>
      <div className="menu-header">
        <h2>Nuestro Menú</h2>
        <p style={{textAlign: 'center'}}> Explora nuestro menú y descubre una fusión perfecta de ingredientes frescos y técnicas culinarias innovadoras. Nuestros chefs expertos preparan cada platillo con pasión y creatividad, garantizando una experiencia gastronómica que superará tus expectativas.</p>
        <div className="menu-footer">
        <a href="https://drive.google.com/file/d/1YM2kneZmMC4-nPR3n3Y_WR1iyE_x8WB-/view?usp=drivesdkp">
          <button className="btn-view-menu">Ver menú completo</button>
        </a>
      </div>
      </div>

      {/* <div className="menu-grid">
        <div className="menu-column">
          <h3 className="section-title">Entradas</h3>
          <ul>
            <li className="menu-item">
              <div className="item-header">
                <span className="item-name">Carpaccio de Wagyu</span>
              </div>
              <p className="item-desc">
                Finas láminas de carne Wagyu, aceite de trufa, parmesano y rúcula silvestre
              </p>
            </li>
            <li className="menu-item">
              <div className="item-header">
                <span className="item-name">Burrata con Tomates Heritage</span>
              </div>
              <p className="item-desc">
                Burrata cremosa, tomates orgánicos, albahaca fresca y reducción de balsámico añejo
              </p>
            </li>
            <li className="menu-item">
              <div className="item-header">
                <span className="item-name">Vieiras a la Plancha</span>
              </div>
              <p className="item-desc">
                Vieiras frescas, puré de coliflor trufado y crujiente de panceta ibérica
              </p>
            </li>
          </ul>
        </div>

        <div className="menu-column">
          <h3 className="section-title">Platos Principales</h3>
          <ul>
            <li className="menu-item">
              <div className="item-header">
                <span className="item-name">Ojo de Bife Argentino</span>
              </div>
              <p className="item-desc">
                350g de ojo de bife premium, puré de papas ahumado y vegetales de estación
              </p>
            </li>
            <li className="menu-item">
              <div className="item-header">
                <span className="item-name">Risotto de Hongos Silvestres</span>
              </div>
              <p className="item-desc">
                Arroz carnaroli, selección de hongos silvestres, trufa negra y queso pecorino
              </p>
            </li>
            <li className="menu-item">
              <div className="item-header">
                <span className="item-name">Lubina Salvaje</span>
              </div>
              <p className="item-desc">
                Filete de lubina, emulsión de limón, espárragos grillados y caviar
              </p>
            </li>
          </ul>
        </div>
      </div> */}
    </section>
  );
};

export default Menu;
