import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import VideoSection from './components/VideoSection';
import Testimonials from './components/Testimonials';
import SocialMedia from './components/SocialMedia';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <VideoSection />
      <Testimonials />
      <SocialMedia />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;