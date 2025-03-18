
import { useEffect, useState } from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import Footer from '@/components/Footer';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    document.title = "NexOva | Creative Web Solutions";
    
    // Enhanced animation sequence for initial load
    const body = document.body;
    body.style.opacity = '0';
    
    setTimeout(() => {
      body.style.transition = 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1)';
      body.style.opacity = '1';
      setIsLoaded(true);
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
        <ProcessSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
