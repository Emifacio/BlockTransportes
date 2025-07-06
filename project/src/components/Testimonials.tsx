import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "María González",
      role: "Homeowner",
      content: "Block Transportes made our family move completely stress-free. Their team was professional, punctual, and treated our belongings with exceptional care. Highly recommended!",
      rating: 5
    },
    {
      name: "Carlos Mendoza",
      role: "Business Owner",
      content: "We relocated our entire office with Block Transportes. The efficiency and professionalism were outstanding. Zero downtime and everything arrived perfectly organized.",
      rating: 5
    },
    {
      name: "Ana Rodríguez",
      role: "Customer",
      content: "After 7 years in business, Block Transportes has proven their reliability time and again. Their attention to detail and customer service is unmatched.",
      rating: 5
    },
    {
      name: "Roberto Silva",
      role: "Property Manager",
      content: "I've worked with many transport companies, but Block Transportes stands out for their professionalism and competitive pricing. They're my go-to choice.",
      rating: 5
    },
    {
      name: "Laura Fernández",
      role: "Customer",
      content: "The heavy lifting service was incredible. They handled our piano and antique furniture with such care. The WhatsApp communication made everything so easy!",
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
              What Our <span className="text-gold-500">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied customers.
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