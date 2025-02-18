import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Whatsapp = () => {
  return (
    <a
      href="https://wa.me/5535997273932"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-5 bg-green-500 rounded-full p-3 shadow-lg animate-pulse hover:scale-110 transition-transform duration-300"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="w-8 h-8 text-white" />
    </a>
  );
};

export default Whatsapp;
