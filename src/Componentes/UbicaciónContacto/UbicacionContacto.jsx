// UbicacionContacto.jsx
import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import './UbicacionContacto.css';

const UbicacionContacto = () => (
  <section className="ubicacion-section" id='ubicación-y-contacto'>
    <h2 className="ubicacion-title">
      <FaMapMarkerAlt className="title-icon" />
      Ubicación y Contacto
    </h2>

    <div className="ubicacion-content">
      {/* Información */}
      <div className="info-card">
        <h3 className="card-title">Información</h3>

        <div className="info-item">
          <FaMapMarkerAlt className="info-icon" />
          <div>
            <span className="info-label">Dirección</span>
            <span className="info-detail">
              Juana Azurduy 2299 - Núñez 
              <br />
              Buenos Aires, Argentina
            </span>
          </div>
        </div>

        <div className="info-item">
          <FaPhone className="info-icon" />
          <div>
            <span className="info-label">Teléfono</span>
            <span className="info-detail">+54 9 11 2251 5831 </span>
          </div>
        </div>

        <div className="info-item">
          <FaEnvelope className="info-icon" />
          <div>
            <span className="info-label">Email</span>
            <span className="info-detail">info@monacobar.com.ar</span>
          </div>
        </div>

        <div className="info-item">
          <FaClock className="info-icon" />
          <div>
            <span className="info-label">Horarios</span>
            <span className="info-detail">
              Martes a Sábados<br />
              20:00 – 02:00
            </span>
          </div>
        </div>
      </div>

      {/* Mapa con iframe */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3288.2272276174898!2d-58.46587138515448!3d-34.54983451509907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca1b2a2b6c3d%3A0xabcdef1234567890!2zMzTCsDMyJzU5LjQiUyA1OMKwMjcnNTcuMSJX!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Mapa de ubicación"
        ></iframe>
      </div>
    </div>

    {/* Reservas */}
    <div className="reservas-card">
      <h3 className="card-title">Reservas</h3>
      <p className="reservas-text">
        Para garantizar su mesa, recomendamos realizar su reserva con anticipación.
      </p>
      <a href="https://monacobar.meitre.com/" className="btn-reservar">
        Reservar ahora
      </a>
    </div>
  </section>
);

export default UbicacionContacto;