import React from 'react';
import { Truck, MessageCircle, Star, Instagram } from 'lucide-react';

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5491130822583?text=SOMOS%20BLOCK%20TRANSPORTES', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/blocktransportes', '_blank');
  };

  return (
    <section className="relative min-h-screen bg-white overflow-hidden flex flex-col justify-between">
      <style>
        {`
          @keyframes moveBlocks {
            0% {
              background-position: 0px bottom;
            }
            100% {
              background-position: -240px bottom;
            }
          }
        `}
      </style>
      
      <div className="flex-1 flex flex-col items-center justify-center px-4 pt-24 pb-8">
        {/* Main heading */}
        <h1 className="text-7xl md:text-8xl font-extrabold text-black tracking-tight mb-4 text-center" style={{letterSpacing: '0.02em'}}>
          BLOCK
        </h1>
        {/* Subtitle */}
        <h2 className="text-2xl md:text-3xl font-bold text-black tracking-wide mb-12 text-center uppercase" style={{letterSpacing: '0.08em'}}>
          TRANSPORTES Y MUDANZAS
        </h2>
        {/* Optionally, add CTA buttons here if desired */}
      </div>
      {/* Block pattern at the bottom */}
      <div className="w-full" style={{
        height: '90px',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg width=\"240\" height=\"90\" viewBox=\"0 0 240 90\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"60\" width=\"25\" height=\"25\" fill=\"%23ffe066\"/><rect x=\"35\" y=\"60\" width=\"25\" height=\"25\" fill=\"%23ffe066\"/><rect x=\"70\" y=\"60\" width=\"25\" height=\"25\" fill=\"%23ffe066\"/><rect x=\"105\" y=\"60\" width=\"25\" height=\"25\" fill=\"%23ffe066\"/><rect x=\"0\" y=\"30\" width=\"25\" height=\"25\" fill=\"%23ffe066\"/><rect x=\"35\" y=\"30\" width=\"25\" height=\"25\" fill=\"%23ffe066\"/><rect x=\"0\" y=\"0\" width=\"25\" height=\"25\" fill=\"%23000\"/><rect x=\"35\" y=\"0\" width=\"25\" height=\"25\" fill=\"%23000\"/><rect x=\"70\" y=\"0\" width=\"25\" height=\"25\" fill=\"%23000\"/><rect x=\"105\" y=\"0\" width=\"25\" height=\"25\" fill=\"%23000\"/><rect x=\"70\" y=\"30\" width=\"25\" height=\"25\" fill=\"%23000\"/><rect x=\"105\" y=\"30\" width=\"25\" height=\"25\" fill=\"%23000\"/><rect x=\"140\" y=\"60\" width=\"25\" height=\"25\" fill=\"%23ffe066\"/><rect x=\"175\" y=\"60\" width=\"25\" height=\"25\" fill=\"%23ffe066\"/><rect x=\"210\" y=\"60\" width=\"25\" height=\"25\" fill=\"%23ffe066\"/><rect x=\"140\" y=\"30\" width=\"25\" height=\"25\" fill=\"%23000\"/><rect x=\"175\" y=\"30\" width=\"25\" height=\"25\" fill=\"%23000\"/><rect x=\"210\" y=\"30\" width=\"25\" height=\"25\" fill=\"%23000\"/><rect x=\"175\" y=\"0\" width=\"25\" height=\"25\" fill=\"%23000\"/><rect x=\"210\" y=\"0\" width=\"25\" height=\"25\" fill=\"%23000\"/><rect x=\"140\" y=\"0\" width=\"25\" height=\"25\" fill=\"%23000\"/><rect x=\"70\" y=\"60\" width=\"25\" height=\"25\" fill=\"%23ffe066\"/></svg>')`,
        backgroundRepeat: 'repeat-x',
        backgroundPosition: 'bottom',
        animation: 'moveBlocks 8s linear infinite',
      }} />
      <div className="w-full" style={{
        height: '90px',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg width=\"240\" height=\"90\" viewBox=\"0 0 240 90\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"60\" width=\"25\" height=\"25\" fill=\"%23ffe066\"/><rect x=\"35\" y=\"60\" width=\"25\" height=\"25\" fill=\"%23ffe066\"/><rect x=\"70\" y=\"60\" width=\"25\" height=\"25\" fill=\"%23ffe066\"/><rect x=\"105\" y=\"60\" width=\"25\" height=\"25\" fill=\"%23ffe066\"/><rect x=\"0\" y=\"30\" width=\"25\" height=\"25\" fill=\"%23ffe066\"/><rect x=\"35\" y=\"30\" width=\"25\" height=\"25\" fill=\"%23ffe066\"/><rect x=\"0\" y=\"0\" width=\"25\" height=\"25\" fill=\"%23000\"/><rect x=\"35\" y=\"0\" width=\"25\" height=\"25\" fill=\"%23000\"/><rect x=\"70\" y=\"0\" width=\"25\" height=\"25\" fill=\"%23000\"/><rect x=\"105\" y=\"0\" width=\"25\" height=\"25\" fill=\"%23000\"/><rect x=\"70\" y=\"30\" width=\"25\" height=\"25\" fill=\"%23000\"/><rect x=\"105\" y=\"30\" width=\"25\" height=\"25\" fill=\"%23000\"/><rect x=\"140\" y=\"60\" width=\"25\" height=\"25\" fill=\"%23ffe066\"/><rect x=\"175\" y=\"60\" width=\"25\" height=\"25\" fill=\"%23ffe066\"/><rect x=\"210\" y=\"60\" width=\"25\" height=\"25\" fill=\"%23ffe066\"/><rect x=\"140\" y=\"30\" width=\"25\" height=\"25\" fill=\"%23000\"/><rect x=\"175\" y=\"30\" width=\"25\" height=\"25\" fill=\"%23000\"/><rect x=\"210\" y=\"30\" width=\"25\" height=\"25\" fill=\"%23000\"/><rect x=\"175\" y=\"0\" width=\"25\" height=\"25\" fill=\"%23000\"/><rect x=\"210\" y=\"0\" width=\"25\" height=\"25\" fill=\"%23000\"/><rect x=\"140\" y=\"0\" width=\"25\" height=\"25\" fill=\"%23000\"/><rect x=\"70\" y=\"60\" width=\"25\" height=\"25\" fill=\"%23ffe066\"/></svg>')`,
        backgroundRepeat: 'repeat-x',
        backgroundPosition: 'bottom',
        animation: 'moveBlocks 8s linear infinite',
      }} />
      
      {/* Spacer to raise the block pattern higher above the bottom */}
      <div style={{ height: '95px' }} />
      
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