import React from 'react';
import { Truck, Instagram, Facebook, Music, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-gold-400 to-gold-500 p-3 rounded-xl mr-4">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Block Transportes</h3>
                  <p className="text-gray-400">Moviendo Argentina con Confianza</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Con más de 7 años de experiencia, Block Transportes es su socio de confianza para todas 
                las necesidades de transporte y mudanza en Argentina. Combinamos profesionalismo, confiabilidad 
                y servicio excepcional para hacer su mudanza sin problemas.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors duration-300">
                  <Music className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-6">Enlaces Rápidos</h4>
              <ul className="space-y-3">
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">Acerca de Nosotros</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-white transition-colors duration-300">Servicios</a></li>
                <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors duration-300">Testimonios</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contacto</a></li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold mb-6">Información de Contacto</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-gold-400 mr-3" />
                  <span className="text-gray-300">+54 9 11 3082-2583</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-gold-400 mr-3" />
                  <span className="text-gray-300">info@blocktransportes.com</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Divider */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 mb-4 md:mb-0">
                © 2024 Block Transportes. Todos los derechos reservados.
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Términos y Condiciones
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Política de Privacidad
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;