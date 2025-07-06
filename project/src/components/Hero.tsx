import React from 'react';
import { Truck, MessageCircle, Star } from 'lucide-react';

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5491130822583?text=SOMOS%20BLOCK%20TRANSPORTES', '_blank');
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gold-400/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-32 h-32 bg-green-400/10 rounded-full animate-pulse delay-1000"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gradient-to-r from-gold-400 to-gold-500 p-4 rounded-2xl shadow-2xl">
              <Truck className="w-12 h-12 text-white" />
            </div>
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">
              BLOCK
            </span>
            <br />
            <span className="text-gold-400">TRANSPORTES</span>
          </h1>
          
          {/* Slogan */}
          <p className="text-xl lg:text-2xl text-gray-100 mb-8 font-medium">
            Moviendo Argentina con Confianza y Precisión
          </p>
          
          {/* Experience badge */}
          <div className="flex items-center justify-center mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-gold-400 fill-current" />
                <span className="text-white font-semibold">7+ Años de Excelencia</span>
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-gold-400 to-gold-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-gold-400/25 transition-all duration-300 transform hover:scale-105">
              Obtener Cotización Gratuita
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
            </button>
            
            <button 
              onClick={handleWhatsAppClick}
              className="group bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Hablar por WhatsApp
            </button>
          </div>
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#f8fafc" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;