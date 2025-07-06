import React from 'react';
import { Play } from 'lucide-react';

const VideoSection = () => {
  return (
    <section className="py-20 bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              See Us in <span className="text-gold-500">Action</span>
            </h2>
            <p className="text-xl text-gray-600">
              Watch our professional team handle your transport needs with precision and care.
            </p>
          </div>
          
          {/* Video Container */}
          <div className="relative bg-white rounded-3xl p-6 shadow-2xl">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-800">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Block Transportes Professional Services"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              
              {/* Overlay for loading state */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 mb-4 inline-block">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Professional Transport Services</h3>
                  <p className="text-gray-100">Watch our expert team in action</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;