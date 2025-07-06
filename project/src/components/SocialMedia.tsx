import React from 'react';
import { Instagram, Facebook, Music } from 'lucide-react';

const SocialMedia = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
      color: "from-pink-500 to-purple-600",
      hoverColor: "hover:from-pink-600 hover:to-purple-700"
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "#",
      color: "from-gray-600 to-gray-800",
      hoverColor: "hover:from-gray-700 hover:to-gray-900"
    },
    {
      name: "TikTok",
      icon: Music,
      href: "#",
      color: "from-gray-800 to-black",
      hoverColor: "hover:from-gray-900 hover:to-black"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Follow <span className="text-gold-500">Our Journey</span>
            </h2>
            <p className="text-xl text-gray-600">
              Stay connected with Block Transportes and see our latest moves, tips, and customer stories.
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className={`group bg-gradient-to-r ${social.color} ${social.hoverColor} text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center`}
              >
                <social.icon className="w-6 h-6 mr-3" />
                Follow us on {social.name}
              </a>
            ))}
          </div>
          
          {/* Instagram Preview Placeholder */}
          <div className="bg-slate-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Latest from Instagram</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl h-64 flex items-center justify-center">
                  <Instagram className="w-12 h-12 text-gray-500" />
                </div>
              ))}
            </div>
            <p className="text-gray-600 mt-6">
              Connect with us on Instagram to see behind-the-scenes content and customer success stories!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;