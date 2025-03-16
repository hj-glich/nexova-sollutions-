
import { useEffect, useState } from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    document.title = "NexOva | Creative Web Solutions";
    
    // Simple animation sequence for initial load
    const body = document.body;
    body.style.opacity = '0';
    
    setTimeout(() => {
      body.style.transition = 'opacity 0.8s ease-out';
      body.style.opacity = '1';
    }, 100);
    
    // Handle scroll events
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      body.style.opacity = '';
      body.style.transition = '';
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <NavBar />
      <main className="relative">
        <HeroSection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
