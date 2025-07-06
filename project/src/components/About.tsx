import React from 'react';
import { Shield, Clock, Award, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Your belongings are protected with our comprehensive insurance and careful handling protocols."
    },
    {
      icon: Clock,
      title: "Punctuality",
      description: "We respect your time and deliver on our promises with precision and reliability."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "7+ years of proven track record in providing exceptional transport services."
    },
    {
      icon: Users,
      title: "Professional Team",
      description: "Experienced professionals trained in the latest transport and logistics techniques."
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              About <span className="text-gold-500">Block Transportes</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              For over 7 years, Block Transportes has been Argentina's trusted partner for residential and commercial moves. 
              We've built our reputation on three core principles: safety, reliability, and exceptional service.
            </p>
          </div>
          
          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-gradient-to-r from-gray-700 to-gray-800 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
          
          {/* Stats */}
          <div className="mt-20 bg-gradient-to-r from-gray-800 to-black rounded-3xl p-8 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-gold-400 mb-2">7+</div>
                <div className="text-lg text-gray-300">Years of Experience</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-gold-400 mb-2">1000+</div>
                <div className="text-lg text-gray-300">Successful Moves</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-gold-400 mb-2">100%</div>
                <div className="text-lg text-gray-300">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;