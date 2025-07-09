import React from 'react';
import './WhatsappButton.css';
import WhatsappIcon from '../../assets/img/whatsapp_icon_45.png'

const WhatsAppButton = () => {
    // const phoneNumber = '5491151113436';
    // const message = 'Hola, estoy interesado en importar para mi empresa.';
    // const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    const whatsappUrl = "https://wa.link/shu3p8"

    const handleClick = () => {
        window.open(whatsappUrl, '_blank');
    };

    return (
        <button className="whatsapp-button" onClick={handleClick} id='monaco-wsp-btn'>
            <img src={WhatsappIcon} alt="WhatsApp" width={40} />
        </button>
    );
};

export default WhatsAppButton;