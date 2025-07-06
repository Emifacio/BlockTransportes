import React from 'react';
import { Home, Building, Package, Truck, MapPin, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Mudanzas Residenciales",
      description: "Servicios profesionales de mudanza con manejo cuidadoso de sus pertenencias personales.",
      color: "from-gray-600 to-gray-700"
    },
    {
      icon: Building,
      title: "Relocalización Empresarial",
      description: "Soluciones de mudanza corporativa con tiempo de inactividad mínimo y máxima eficiencia.",
      color: "from-gray-700 to-gray-800"
    },
    {
      icon: Package,
      title: "Embalaje y Desembalaje",
      description: "Servicios expertos de embalaje utilizando materiales de alta calidad para proteger sus artículos.",
      color: "from-gray-500 to-gray-600"
    },
    {
      icon: Truck,
      title: "Carga Pesada",
      description: "Equipamiento especializado y profesionales entrenados para artículos pesados y complejos.",
      color: "from-gray-800 to-black"
    },
    {
      icon: MapPin,
      title: "Cobertura Nacional",
      description: "Servicios de transporte integrales en toda Argentina con entrega confiable.",
      color: "from-gray-600 to-gray-700"
    },
    {
      icon: Shield,
      title: "Transporte Asegurado",
      description: "Cobertura de seguro completa para su tranquilidad durante la mudanza.",
      color: "from-gray-700 to-gray-800"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Nuestros <span className="text-gold-500">Servicios</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluciones de transporte integrales adaptadas a sus necesidades específicas con excelencia profesional.
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100">
                <div className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;