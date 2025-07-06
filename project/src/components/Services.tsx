import React from 'react';
import { Home, Building, Package, Truck, MapPin, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Moves",
      description: "Professional home moving services with careful handling of your personal belongings.",
      color: "from-gray-600 to-gray-700"
    },
    {
      icon: Building,
      title: "Business Relocations",
      description: "Corporate moving solutions with minimal downtime and maximum efficiency.",
      color: "from-gray-700 to-gray-800"
    },
    {
      icon: Package,
      title: "Packing & Unpacking",
      description: "Expert packing services using high-quality materials to protect your items.",
      color: "from-gray-500 to-gray-600"
    },
    {
      icon: Truck,
      title: "Heavy Lifting",
      description: "Specialized equipment and trained professionals for heavy and complex items.",
      color: "from-gray-800 to-black"
    },
    {
      icon: MapPin,
      title: "National Coverage",
      description: "Comprehensive transport services throughout Argentina with reliable delivery.",
      color: "from-gray-600 to-gray-700"
    },
    {
      icon: Shield,
      title: "Insured Transport",
      description: "Full insurance coverage for peace of mind during your move.",
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
              Our <span className="text-gold-500">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive transport solutions tailored to meet your specific needs with professional excellence.
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