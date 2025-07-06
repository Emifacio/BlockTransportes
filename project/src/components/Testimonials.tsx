import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "María González",
      role: "Propietaria",
      content: "Block Transportes hizo que nuestra mudanza familiar fuera completamente libre de estrés. Su equipo fue profesional, puntual y trató nuestras pertenencias con cuidado excepcional. ¡Altamente recomendado!",
      rating: 5
    },
    {
      name: "Carlos Mendoza",
      role: "Empresario",
      content: "Relocalizamos toda nuestra oficina con Block Transportes. La eficiencia y profesionalismo fueron sobresalientes. Cero tiempo de inactividad y todo llegó perfectamente organizado.",
      rating: 5
    },
    {
      name: "Ana Rodríguez",
      role: "Cliente",
      content: "Después de 7 años en el negocio, Block Transportes ha demostrado su confiabilidad una y otra vez. Su atención al detalle y servicio al cliente no tiene igual.",
      rating: 5
    },
    {
      name: "Roberto Silva",
      role: "Administrador de Propiedades",
      content: "He trabajado con muchas empresas de transporte, pero Block Transportes se destaca por su profesionalismo y precios competitivos. Son mi elección preferida.",
      rating: 5
    },
    {
      name: "Laura Fernández",
      role: "Cliente",
      content: "El servicio de carga pesada fue increíble. Manejaron nuestro piano y muebles antiguos con tanto cuidado. ¡La comunicación por WhatsApp hizo todo tan fácil!",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Lo que Dicen Nuestros <span className="text-gold-500">Clientes</span>
            </h2>
            <p className="text-xl text-gray-600">
              No solo tome nuestra palabra - escuche de nuestros clientes satisfechos.
            </p>
          </div>
          
          {/* Testimonial Slider */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
              <div className="flex items-center justify-center mb-8">
                <Quote className="w-12 h-12 text-gold-400" />
              </div>
              
              <div className="text-center mb-8">
                <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6">
                  "{testimonials[currentIndex].content}"
                </p>
                
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-gold-400 fill-current" />
                  ))}
                </div>
                
                <h4 className="text-lg font-bold text-gray-800">{testimonials[currentIndex].name}</h4>
                <p className="text-gray-600">{testimonials[currentIndex].role}</p>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 text-gray-600 hover:text-gray-800"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentIndex ? 'bg-gold-400' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 text-gray-600 hover:text-gray-800"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;