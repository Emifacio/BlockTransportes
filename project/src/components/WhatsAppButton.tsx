import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/5491130822583?text=Hola.%20C%C3%B3mo%20est%C3%A1s%3F%20Vi%20el%20anuncio%20de%20fletes%20y%20mudanzas%20de%20Block.', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-110 z-50 animate-pulse"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </button>
  );
};

export default WhatsAppButton;